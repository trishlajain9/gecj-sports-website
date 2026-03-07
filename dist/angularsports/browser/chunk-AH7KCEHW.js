import{o as w}from"./chunk-BV5GFQVX.js";import{$a as R,Aa as v,Fa as p,Ua as C,V as g,ab as b,bb as D,la as y}from"./chunk-M5NX553R.js";import{d}from"./chunk-4CLCTAJ7.js";var O=["container"],x=n=>{let e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n);return e?[parseInt(e[1],16)/255,parseInt(e[2],16)/255,parseInt(e[3],16)/255]:[1,1,1]},I=(n,e,t)=>{switch(n){case"top-left":return{anchor:[0,-.2*t],dir:[0,1]};case"top-right":return{anchor:[e,-.2*t],dir:[0,1]};case"left":return{anchor:[-.2*e,.5*t],dir:[1,0]};case"right":return{anchor:[(1+.2)*e,.5*t],dir:[-1,0]};case"bottom-left":return{anchor:[0,(1+.2)*t],dir:[0,-1]};case"bottom-center":return{anchor:[.5*e,(1+.2)*t],dir:[0,-1]};case"bottom-right":return{anchor:[e,(1+.2)*t],dir:[0,-1]};default:return{anchor:[.5*e,-.2*t],dir:[0,1]}}},T=`
attribute vec2 position;
varying vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}`,F=`precision highp float;

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
}`,S=class n{containerRef;raysOrigin="top-center";raysColor="#ffffff";raysSpeed=1;lightSpread=.5;rayLength=3;pulsating=!1;fadeDistance=1;saturation=1;followMouse=!0;mouseInfluence=.1;noiseAmount=0;distortion=0;renderer;uniforms;mesh;rafId=null;mouse={x:.5,y:.5};smoothMouse={x:.5,y:.5};isBrowser;constructor(e){this.isBrowser=w(e)}ngAfterViewInit(){this.isBrowser&&this.initWebGL()}ngOnChanges(){this.uniforms&&this.renderer&&this.containerRef&&this.syncUniforms()}ngOnDestroy(){this.cleanup()}initWebGL(){return d(this,null,function*(){let e=this.containerRef.nativeElement,{Renderer:t,Program:o,Triangle:s,Mesh:u}=yield import("./chunk-PGXPSVGV.js"),i=new t({dpr:Math.min(window.devicePixelRatio,2),alpha:!0});this.renderer=i;let a=i.gl;for(a.canvas.style.width="100%",a.canvas.style.height="100%";e.firstChild;)e.removeChild(e.firstChild);e.appendChild(a.canvas);let r={iTime:{value:0},iResolution:{value:[1,1]},rayPos:{value:[0,0]},rayDir:{value:[0,1]},raysColor:{value:x(this.raysColor)},raysSpeed:{value:this.raysSpeed},lightSpread:{value:this.lightSpread},rayLength:{value:this.rayLength},pulsating:{value:this.pulsating?1:0},fadeDistance:{value:this.fadeDistance},saturation:{value:this.saturation},mousePos:{value:[.5,.5]},mouseInfluence:{value:this.mouseInfluence},noiseAmount:{value:this.noiseAmount},distortion:{value:this.distortion}};this.uniforms=r;let A=new s(a),M=new o(a,{vertex:T,fragment:F,uniforms:r});this.mesh=new u(a,{geometry:A,program:M});let c=()=>{if(!e||!i)return;i.dpr=Math.min(window.devicePixelRatio,2),i.setSize(e.clientWidth,e.clientHeight);let l=i.dpr,f=e.clientWidth*l,m=e.clientHeight*l;r.iResolution.value=[f,m];let{anchor:L,dir:P}=I(this.raysOrigin,f,m);r.rayPos.value=L,r.rayDir.value=P};window.addEventListener("resize",c),c();let h=l=>{if(!(!this.renderer||!this.uniforms)){r.iTime.value=l*.001,this.followMouse&&this.mouseInfluence>0&&(this.smoothMouse.x=this.smoothMouse.x*.92+this.mouse.x*(1-.92),this.smoothMouse.y=this.smoothMouse.y*.92+this.mouse.y*(1-.92),r.mousePos.value=[this.smoothMouse.x,this.smoothMouse.y]);try{i.render({scene:this.mesh}),this.rafId=requestAnimationFrame(h)}catch{}}};this.rafId=requestAnimationFrame(h),window.addEventListener("mousemove",this.onMouseMove),this._removeResize=()=>window.removeEventListener("resize",c)})}onMouseMove=e=>{if(!this.containerRef||!this.renderer)return;let t=this.containerRef.nativeElement.getBoundingClientRect();this.mouse.x=(e.clientX-t.left)/t.width,this.mouse.y=(e.clientY-t.top)/t.height};syncUniforms(){let e=this.uniforms;e.raysColor.value=x(this.raysColor),e.raysSpeed.value=this.raysSpeed,e.lightSpread.value=this.lightSpread,e.rayLength.value=this.rayLength,e.pulsating.value=this.pulsating?1:0,e.fadeDistance.value=this.fadeDistance,e.saturation.value=this.saturation,e.mouseInfluence.value=this.mouseInfluence,e.noiseAmount.value=this.noiseAmount,e.distortion.value=this.distortion;let t=this.containerRef.nativeElement,o=this.renderer.dpr,{anchor:s,dir:u}=I(this.raysOrigin,t.clientWidth*o,t.clientHeight*o);e.rayPos.value=s,e.rayDir.value=u}cleanup(){if(this.rafId!==null&&(cancelAnimationFrame(this.rafId),this.rafId=null),window.removeEventListener("mousemove",this.onMouseMove),this._removeResize&&this._removeResize(),this.renderer){try{let e=this.renderer.gl.getExtension("WEBGL_lose_context");e&&e.loseContext()}catch{}this.renderer=null}this.uniforms=null,this.mesh=null}static \u0275fac=function(t){return new(t||n)(v(y))};static \u0275cmp=p({type:n,selectors:[["app-light-rays"]],viewQuery:function(t,o){if(t&1&&R(O,5),t&2){let s;b(s=D())&&(o.containerRef=s.first)}},inputs:{raysOrigin:"raysOrigin",raysColor:"raysColor",raysSpeed:"raysSpeed",lightSpread:"lightSpread",rayLength:"rayLength",pulsating:"pulsating",fadeDistance:"fadeDistance",saturation:"saturation",followMouse:"followMouse",mouseInfluence:"mouseInfluence",noiseAmount:"noiseAmount",distortion:"distortion"},features:[g],decls:2,vars:0,consts:[["container",""],[1,"light-rays-host"]],template:function(t,o){t&1&&C(0,"div",1,0)},styles:["[_nghost-%COMP%]{display:block;position:absolute;inset:0;pointer-events:none}.light-rays-host[_ngcontent-%COMP%]{width:100%;height:100%}"]})};export{S as a};
