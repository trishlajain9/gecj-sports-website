
import { Component, OnInit, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularsports';
  private lenis: any;
  private rafId: number | null = null;

  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: object) {}

  isHomePage() {
    return this.router.url === '/home' || this.router.url === '/';
  }

  async ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const { default: Lenis } = await import('lenis');
    this.lenis = new Lenis({
      lerp: 0.08,          // smoothing factor (0 = instant, 1 = no movement)
      smoothWheel: true,
      syncTouch: false,    // let mobile use native scroll
    });

    const raf = (time: number) => {
      this.lenis.raf(time);
      this.rafId = requestAnimationFrame(raf);
    };
    this.rafId = requestAnimationFrame(raf);
  }

  ngOnDestroy() {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    if (this.lenis) this.lenis.destroy();
  }
}