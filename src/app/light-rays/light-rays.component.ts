import {
  Component, ElementRef, ViewChild, AfterViewInit, OnDestroy,
  Input, PLATFORM_ID, Inject, OnChanges
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type RaysOrigin =
  | 'top-center' | 'top-left' | 'top-right'
  | 'right' | 'left'
  | 'bottom-center' | 'bottom-left' | 'bottom-right';

const hexToRgb = (hex: string): [number, number, number] => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m
    ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255]
    : [1, 1, 1];
};

const getAnchorAndDir = (
  origin: RaysOrigin, w: number, h: number
): { anchor: [number, number]; dir: [number, number] } => {
  const o = 0.2;
  switch (origin) {
    case 'top-left':     return { anchor: [0,           -o * h],       dir: [0,  1] };
    case 'top-right':    return { anchor: [w,            -o * h],       dir: [0,  1] };
    case 'left':         return { anchor: [-o * w,        0.5 * h],     dir: [1,  0] };
    case 'right':        return { anchor: [(1 + o) * w,   0.5 * h],     dir: [-1, 0] };
    case 'bottom-left':  return { anchor: [0,            (1 + o) * h],  dir: [0, -1] };
    case 'bottom-center':return { anchor: [0.5 * w,      (1 + o) * h],  dir: [0, -1] };
    case 'bottom-right': return { anchor: [w,            (1 + o) * h],  dir: [0, -1] };
    default:             return { anchor: [0.5 * w,      -o * h],       dir: [0,  1] };
  }
};

const VERT = `
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAG = `precision highp float;

uniform float iTime;
uniform vec2  iResolution;
uniform vec2  rayPos;
uniform vec2  rayDir;
uniform vec3  raysColor;
uniform float raysSpeed;
uniform float lightSpread;
uniform float rayLength;
uniform float pulsating;
uniform float fadeDistance;
uniform float saturation;
uniform vec2  mousePos;
uniform float mouseInfluence;
uniform float noiseAmount;
uniform float distortion;

varying vec2 vUv;

float noise(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float rayStrength(vec2 raySource, vec2 rayRefDirection, vec2 coord,
                  float seedA, float seedB, float speed) {
  vec2 sourceToCoord = coord - raySource;
  vec2 dirNorm = normalize(sourceToCoord);
  float cosAngle = dot(dirNorm, rayRefDirection);
  float distortedAngle = cosAngle + distortion * sin(iTime * 2.0 + length(sourceToCoord) * 0.01) * 0.2;
  float spreadFactor = pow(max(distortedAngle, 0.0), 1.0 / max(lightSpread, 0.001));
  float distance = length(sourceToCoord);
  float maxDistance = iResolution.x * rayLength;
  float lengthFalloff = clamp((maxDistance - distance) / maxDistance, 0.0, 1.0);
  float fadeFalloff = clamp((iResolution.x * fadeDistance - distance) / (iResolution.x * fadeDistance), 0.5, 1.0);
  float pulse = pulsating > 0.5 ? (0.8 + 0.2 * sin(iTime * speed * 3.0)) : 1.0;
  float baseStrength = clamp(
    (0.45 + 0.15 * sin(distortedAngle * seedA + iTime * speed)) +
    (0.3  + 0.2  * cos(-distortedAngle * seedB + iTime * speed)),
    0.0, 1.0
  );
  return baseStrength * lengthFalloff * fadeFalloff * spreadFactor * pulse;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  vec2 coord = vec2(fragCoord.x, iResolution.y - fragCoord.y);
  vec2 finalRayDir = rayDir;
  if (mouseInfluence > 0.0) {
    vec2 mouseScreenPos = mousePos * iResolution.xy;
    vec2 mouseDirection = normalize(mouseScreenPos - rayPos);
    finalRayDir = normalize(mix(rayDir, mouseDirection, mouseInfluence));
  }
  vec4 rays1 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 36.2214,  21.11349, 1.5 * raysSpeed);
  vec4 rays2 = vec4(1.0) * rayStrength(rayPos, finalRayDir, coord, 22.3991,  18.0234,  1.1 * raysSpeed);
  fragColor = rays1 * 0.5 + rays2 * 0.4;
  if (noiseAmount > 0.0) {
    float n = noise(coord * 0.01 + iTime * 0.1);
    fragColor.rgb *= (1.0 - noiseAmount + noiseAmount * n);
  }
  float brightness = 1.0 - (coord.y / iResolution.y);
  fragColor.x *= 0.1 + brightness * 0.8;
  fragColor.y *= 0.3 + brightness * 0.6;
  fragColor.z *= 0.5 + brightness * 0.5;
  if (saturation != 1.0) {
    float gray = dot(fragColor.rgb, vec3(0.299, 0.587, 0.114));
    fragColor.rgb = mix(vec3(gray), fragColor.rgb, saturation);
  }
  fragColor.rgb *= raysColor;
}

void main() {
  vec4 color;
  mainImage(color, gl_FragCoord.xy);
  gl_FragColor = color;
}`;

@Component({
  selector: 'app-light-rays',
  standalone: true,
  template: `<div #container class="light-rays-host"></div>`,
  styles: [`
    :host { display: block; position: absolute; inset: 0; pointer-events: none; }
    .light-rays-host { width: 100%; height: 100%; }
  `]
})
export class LightRaysComponent implements AfterViewInit, OnDestroy, OnChanges {
  @ViewChild('container') containerRef!: ElementRef<HTMLDivElement>;

  @Input() raysOrigin: RaysOrigin = 'top-center';
  @Input() raysColor  = '#ffffff';
  @Input() raysSpeed  = 1;
  @Input() lightSpread = 0.5;
  @Input() rayLength   = 3;
  @Input() pulsating   = false;
  @Input() fadeDistance = 1.0;
  @Input() saturation   = 1.0;
  @Input() followMouse  = true;
  @Input() mouseInfluence = 0.1;
  @Input() noiseAmount  = 0.0;
  @Input() distortion   = 0.0;

  private renderer: any;
  private uniforms: any;
  private mesh: any;
  private rafId: number | null = null;
  private mouse = { x: 0.5, y: 0.5 };
  private smoothMouse = { x: 0.5, y: 0.5 };
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) this.initWebGL();
  }

  ngOnChanges() {
    if (this.uniforms && this.renderer && this.containerRef) {
      this.syncUniforms();
    }
  }

  ngOnDestroy() {
    this.cleanup();
  }

  private async initWebGL() {
    const el = this.containerRef.nativeElement;
    const { Renderer, Program, Triangle, Mesh } = await import('ogl') as any;

    const renderer = new Renderer({ dpr: Math.min(window.devicePixelRatio, 2), alpha: true });
    this.renderer = renderer;
    const gl = renderer.gl;
    gl.canvas.style.width  = '100%';
    gl.canvas.style.height = '100%';
    while (el.firstChild) el.removeChild(el.firstChild);
    el.appendChild(gl.canvas);

    const uniforms = {
      iTime:          { value: 0 },
      iResolution:    { value: [1, 1] },
      rayPos:         { value: [0, 0] },
      rayDir:         { value: [0, 1] },
      raysColor:      { value: hexToRgb(this.raysColor) },
      raysSpeed:      { value: this.raysSpeed },
      lightSpread:    { value: this.lightSpread },
      rayLength:      { value: this.rayLength },
      pulsating:      { value: this.pulsating ? 1.0 : 0.0 },
      fadeDistance:   { value: this.fadeDistance },
      saturation:     { value: this.saturation },
      mousePos:       { value: [0.5, 0.5] },
      mouseInfluence: { value: this.mouseInfluence },
      noiseAmount:    { value: this.noiseAmount },
      distortion:     { value: this.distortion }
    };
    this.uniforms = uniforms;

    const geometry = new Triangle(gl);
    const program  = new Program(gl, { vertex: VERT, fragment: FRAG, uniforms });
    this.mesh = new Mesh(gl, { geometry, program });

    const updateSize = () => {
      if (!el || !renderer) return;
      renderer.dpr = Math.min(window.devicePixelRatio, 2);
      renderer.setSize(el.clientWidth, el.clientHeight);
      const dpr = renderer.dpr;
      const w = el.clientWidth * dpr, h = el.clientHeight * dpr;
      uniforms.iResolution.value = [w, h];
      const { anchor, dir } = getAnchorAndDir(this.raysOrigin, w, h);
      uniforms.rayPos.value = anchor;
      uniforms.rayDir.value = dir;
    };

    window.addEventListener('resize', updateSize);
    updateSize();

    const loop = (t: number) => {
      if (!this.renderer || !this.uniforms) return;
      uniforms.iTime.value = t * 0.001;
      if (this.followMouse && this.mouseInfluence > 0) {
        const s = 0.92;
        this.smoothMouse.x = this.smoothMouse.x * s + this.mouse.x * (1 - s);
        this.smoothMouse.y = this.smoothMouse.y * s + this.mouse.y * (1 - s);
        uniforms.mousePos.value = [this.smoothMouse.x, this.smoothMouse.y];
      }
      try {
        renderer.render({ scene: this.mesh });
        this.rafId = requestAnimationFrame(loop);
      } catch { }
    };
    this.rafId = requestAnimationFrame(loop);

    window.addEventListener('mousemove', this.onMouseMove);
    // store cleanup
    (this as any)._removeResize = () => window.removeEventListener('resize', updateSize);
  }

  private onMouseMove = (e: MouseEvent) => {
    if (!this.containerRef || !this.renderer) return;
    const rect = this.containerRef.nativeElement.getBoundingClientRect();
    this.mouse.x = (e.clientX - rect.left) / rect.width;
    this.mouse.y = (e.clientY - rect.top)  / rect.height;
  };

  private syncUniforms() {
    const u = this.uniforms;
    u.raysColor.value      = hexToRgb(this.raysColor);
    u.raysSpeed.value      = this.raysSpeed;
    u.lightSpread.value    = this.lightSpread;
    u.rayLength.value      = this.rayLength;
    u.pulsating.value      = this.pulsating ? 1.0 : 0.0;
    u.fadeDistance.value   = this.fadeDistance;
    u.saturation.value     = this.saturation;
    u.mouseInfluence.value = this.mouseInfluence;
    u.noiseAmount.value    = this.noiseAmount;
    u.distortion.value     = this.distortion;

    const el = this.containerRef.nativeElement;
    const dpr = this.renderer.dpr;
    const { anchor, dir } = getAnchorAndDir(this.raysOrigin, el.clientWidth * dpr, el.clientHeight * dpr);
    u.rayPos.value = anchor;
    u.rayDir.value = dir;
  }

  private cleanup() {
    if (this.rafId !== null) { cancelAnimationFrame(this.rafId); this.rafId = null; }
    window.removeEventListener('mousemove', this.onMouseMove);
    if ((this as any)._removeResize) (this as any)._removeResize();
    if (this.renderer) {
      try {
        const ext = this.renderer.gl.getExtension('WEBGL_lose_context');
        if (ext) ext.loseContext();
      } catch { }
      this.renderer = null;
    }
    this.uniforms = null;
    this.mesh = null;
  }
}
