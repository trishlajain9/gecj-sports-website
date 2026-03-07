import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideClientHydration,
  provideRouter,
  withEventReplay
} from "./chunk-K7CTBRBP.js";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi
} from "./chunk-7E6OIKHZ.js";
import {
  CommonModule,
  isPlatformBrowser
} from "./chunk-QKIANUNH.js";
import {
  Component,
  Inject,
  Injectable,
  PLATFORM_ID,
  provideZoneChangeDetection,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-QOX7GY5A.js";
import {
  __async,
  __spreadValues
} from "./chunk-WDMUDEB6.js";

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  __spreadValues({ path: "home", loadComponent: () => import("./chunk-DJT7AGCU.js").then((m) => m.HomeComponent) }, false ? { \u0275entryName: "src/app/home/home.component.ts" } : {}),
  __spreadValues({ path: "sports", loadComponent: () => import("./chunk-HTBNIJA7.js").then((m) => m.SportsComponent) }, false ? { \u0275entryName: "src/app/sports/sports.component.ts" } : {}),
  __spreadValues({ path: "sports/:name", loadComponent: () => import("./chunk-GUG3TMRU.js").then((m) => m.SportDetailComponent) }, false ? { \u0275entryName: "src/app/sports/sport-detail.component.ts" } : {}),
  __spreadValues({ path: "events", loadComponent: () => import("./chunk-XIPMX65I.js").then((m) => m.EventsComponent) }, false ? { \u0275entryName: "src/app/events/events.component.ts" } : {}),
  __spreadValues({ path: "timeline", loadComponent: () => import("./chunk-XHUB74JU.js").then((m) => m.EventsTimelineComponent) }, false ? { \u0275entryName: "src/app/event-timelines/event-timelines.component.ts" } : {}),
  __spreadValues({ path: "gallery", loadComponent: () => import("./chunk-WK7QZE3H.js").then((m) => m.GalleryComponent) }, false ? { \u0275entryName: "src/app/gallery/gallery.component.ts" } : {}),
  __spreadValues({ path: "council", loadComponent: () => import("./chunk-QJWPLIA7.js").then((m) => m.CouncilComponent) }, false ? { \u0275entryName: "src/app/council/council.component.ts" } : {}),
  __spreadValues({ path: "contact", loadComponent: () => import("./chunk-D4Q2BB4B.js").then((m) => m.ContactComponent) }, false ? { \u0275entryName: "src/app/contact/contact.component.ts" } : {})
];

// src/app/interceptors/jwt.interceptor.ts
var JwtInterceptor = class _JwtInterceptor {
  intercept(req, next) {
    let token = null;
    try {
      if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
        token = localStorage.getItem("jwt_token");
      }
    } catch {
      token = null;
    }
    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
  static \u0275fac = function JwtInterceptor_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JwtInterceptor)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JwtInterceptor, factory: _JwtInterceptor.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JwtInterceptor, [{
    type: Injectable
  }], null, null);
})();

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi(), withFetch()),
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ]
};

// src/app/navbar/navbar.component.ts
var NavbarComponent = class _NavbarComponent {
  static \u0275fac = function NavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], decls: 22, vars: 0, consts: [[1, "navbar"], [1, "nav-container"], [1, "logo-area"], [1, "college-name"], ["src", "assets/Logo/Gecjlogo.jpeg", "alt", "Logo", 1, "college-logo"], [1, "nav-links"], ["routerLink", "/home", "routerLinkActive", "active"], ["routerLink", "/sports", "routerLinkActive", "active"], ["routerLink", "/timeline", "routerLinkActive", "active"], ["routerLink", "/gallery", "routerLinkActive", "active"], ["routerLink", "/contact", "routerLinkActive", "active"]], template: function NavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "GECJ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "img", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "ul", 5)(7, "li")(8, "a", 6);
      \u0275\u0275text(9, "Home");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "li")(11, "a", 7);
      \u0275\u0275text(12, "Sports");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "li")(14, "a", 8);
      \u0275\u0275text(15, "Events Timeline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "li")(17, "a", 9);
      \u0275\u0275text(18, "Gallery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "li")(20, "a", 10);
      \u0275\u0275text(21, "Contact Us");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [CommonModule, RouterModule, RouterLink, RouterLinkActive], styles: ["\n\n.nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.logo-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.college-name[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  font-weight: 900;\n  letter-spacing: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #00f5ff 0%,\n      #39e0ff 35%,\n      #ffd36b 70%,\n      #ff7b6b 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: transparent;\n  text-shadow: 0 6px 22px rgba(0, 230, 255, 0.09), 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.college-logo[_ngcontent-%COMP%] {\n  height: 50px;\n  border-radius: 8px;\n  background: #0a1224;\n  padding: 2px;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  margin: 0 32px;\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin-left: auto;\n}\n.admin-logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  border: 2px solid transparent;\n  transition: all 0.25s ease;\n}\n.admin-logo[_ngcontent-%COMP%]:hover, \n.admin-logo[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(0, 230, 255, 0.12);\n  border-color: #00e6ff;\n  outline: none;\n}\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n  background:\n    linear-gradient(\n      90deg,\n      #0a1224 0%,\n      #1b263b 100%);\n  padding: 20px 0;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.10);\n}\n.nav-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: auto;\n  position: relative;\n}\n.logo[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 50px;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  gap: 20px;\n  margin: 0;\n  padding: 0;\n}\n.nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #ffffff;\n  padding: 8px 18px;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.nav-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.nav-links[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border: 2px solid #1976d2;\n  background: rgba(33, 150, 243, 0.10);\n  color: #fff;\n}\n/*# sourceMappingURL=navbar.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavbarComponent, [{
    type: Component,
    args: [{ selector: "app-navbar", standalone: true, imports: [CommonModule, RouterModule], template: '<nav class="navbar">\r\n  <div class="nav-container">\r\n    <!-- College Name and Logo -->\r\n  <div class="logo-area">\r\n  <span class="college-name">GECJ</span>\r\n  <img src="assets/Logo/Gecjlogo.jpeg" alt="Logo" class="college-logo">\r\n  <!-- <img src="data:image/jpeg;base64,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" alt="GECJ Logo" class="college-logo" /> -->\r\n    </div>\r\n\r\n    <!-- Navigation Links -->\r\n  <ul class="nav-links">\r\n      <li><a routerLink="/home" routerLinkActive="active">Home</a></li>\r\n      <li><a routerLink="/sports" routerLinkActive="active">Sports</a></li>\r\n      <li><a routerLink="/timeline" routerLinkActive="active">Events Timeline</a></li>\r\n  <li><a routerLink="/gallery" routerLinkActive="active">Gallery</a></li>\r\n  <li><a routerLink="/contact" routerLinkActive="active">Contact Us</a></li>\r\n \r\n \r\n    </ul>\r\n\r\n\r\n  </div>\r\n\r\n', styles: ["/* src/app/navbar/navbar.component.css */\n.nav-container {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n.logo-area {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.college-name {\n  font-size: 2.2rem;\n  font-weight: 900;\n  letter-spacing: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #00f5ff 0%,\n      #39e0ff 35%,\n      #ffd36b 70%,\n      #ff7b6b 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: transparent;\n  text-shadow: 0 6px 22px rgba(0, 230, 255, 0.09), 0 2px 8px rgba(0, 0, 0, 0.18);\n}\n.college-logo {\n  height: 50px;\n  border-radius: 8px;\n  background: #0a1224;\n  padding: 2px;\n}\n.nav-links {\n  display: flex;\n  gap: 18px;\n  margin: 0 32px;\n}\n.nav-actions {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin-left: auto;\n}\n.admin-logo {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  border: 2px solid transparent;\n  transition: all 0.25s ease;\n}\n.admin-logo:hover,\n.admin-logo:focus-visible {\n  background: rgba(0, 230, 255, 0.12);\n  border-color: #00e6ff;\n  outline: none;\n}\n.navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 1000;\n  background:\n    linear-gradient(\n      90deg,\n      #0a1224 0%,\n      #1b263b 100%);\n  padding: 20px 0;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.10);\n}\n.nav-container {\n  max-width: 1200px;\n  margin: auto;\n  position: relative;\n}\n.logo {\n  position: absolute;\n  left: 20px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.logo img {\n  height: 50px;\n}\n.nav-links {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  gap: 20px;\n  margin: 0;\n  padding: 0;\n}\n.nav-links li {\n  position: relative;\n}\n.nav-links a {\n  color: #ffffff;\n  padding: 8px 18px;\n  border-radius: 12px;\n  text-decoration: none;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.nav-links a:hover,\n.nav-links a.active {\n  border: 2px solid #1976d2;\n  background: rgba(33, 150, 243, 0.10);\n  color: #fff;\n}\n/*# sourceMappingURL=navbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src/app/navbar/navbar.component.ts", lineNumber: 12 });
})();

// src/app/footer.component.ts
var FooterComponent = class _FooterComponent {
  static \u0275fac = function FooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 0, consts: [[1, "site-footer"], [1, "footer-left"], ["routerLink", "/contact"], ["routerLink", "/sports"], [1, "footer-right"], ["href", "mailto:abhishek11_soni@yahoo.co.in"], ["href", "https://www.facebook.com/profile.php?id=61585274101643", "target", "_blank", "rel", "noopener"]], template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "h4");
      \u0275\u0275text(3, "Quick Links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "ul")(5, "li")(6, "a", 2);
      \u0275\u0275text(7, "Contact Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "li")(9, "a", 3);
      \u0275\u0275text(10, "Sports");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "div", 4)(12, "h4");
      \u0275\u0275text(13, "Connect");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "ul")(15, "li")(16, "a", 5);
      \u0275\u0275text(17, "abhishek11_soni@yahoo.co.in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "li")(19, "a", 6);
      \u0275\u0275text(20, "Facebook");
      \u0275\u0275elementEnd()()()()();
    }
  }, dependencies: [RouterModule, RouterLink], styles: ["\n\n.site-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  background:\n    linear-gradient(\n      90deg,\n      #0a1224 0%,\n      #1b263b 100%);\n  color: #fff;\n  padding: 2rem 3rem 1.2rem 3rem;\n  font-size: 1rem;\n}\n.footer-left[_ngcontent-%COMP%], \n.footer-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.footer-left[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], \n.footer-right[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 0.7rem;\n  font-size: 1.1rem;\n  color: #dad2d2;\n}\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #22D3EE;\n  text-decoration: none;\n  transition: color 0.2s;\n  font-weight: 600;\n}\n.site-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1565c0;\n}\n@media (max-width: 700px) {\n  .site-footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 1.2rem 1rem 0.7rem 1rem;\n    font-size: 0.95rem;\n  }\n  .footer-left[_ngcontent-%COMP%], \n   .footer-right[_ngcontent-%COMP%] {\n    margin-bottom: 1.2rem;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterComponent, [{
    type: Component,
    args: [{ selector: "app-footer", standalone: true, imports: [RouterModule], template: '<footer class="site-footer">\r\n  <div class="footer-left">\r\n    <h4>Quick Links</h4>\r\n    <ul>\r\n      <li><a routerLink="/contact">Contact Us</a></li>\r\n      <li><a routerLink="/sports">Sports</a></li>\r\n    </ul>\r\n  </div>\r\n  <div class="footer-right">\r\n    <h4>Connect</h4>\r\n    <ul>\r\n  <li><a href="mailto:abhishek11_soni&#64;yahoo.co.in">abhishek11_soni&#64;yahoo.co.in</a></li>\r\n      <li><a href="https://www.facebook.com/profile.php?id=61585274101643" target="_blank" rel="noopener">Facebook</a></li>\r\n    </ul>\r\n  </div>\r\n</footer>\r\n', styles: ["/* src/app/footer.component.css */\n.site-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  background:\n    linear-gradient(\n      90deg,\n      #0a1224 0%,\n      #1b263b 100%);\n  color: #fff;\n  padding: 2rem 3rem 1.2rem 3rem;\n  font-size: 1rem;\n}\n.footer-left,\n.footer-right {\n  display: flex;\n  flex-direction: column;\n}\n.footer-left h4,\n.footer-right h4 {\n  margin-bottom: 0.7rem;\n  font-size: 1.1rem;\n  color: #dad2d2;\n}\n.site-footer a {\n  color: #22D3EE;\n  text-decoration: none;\n  transition: color 0.2s;\n  font-weight: 600;\n}\n.site-footer a:hover {\n  color: #1565c0;\n}\n@media (max-width: 700px) {\n  .site-footer {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 1.2rem 1rem 0.7rem 1rem;\n    font-size: 0.95rem;\n  }\n  .footer-left,\n  .footer-right {\n    margin-bottom: 1.2rem;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src/app/footer.component.ts", lineNumber: 11 });
})();

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  router;
  platformId;
  title = "angularsports";
  lenis;
  rafId = null;
  constructor(router, platformId) {
    this.router = router;
    this.platformId = platformId;
  }
  isHomePage() {
    return this.router.url === "/home" || this.router.url === "/";
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (!isPlatformBrowser(this.platformId))
        return;
      const { default: Lenis } = yield import("./chunk-5Z62IF6A.js");
      this.lenis = new Lenis({
        lerp: 0.08,
        // smoothing factor (0 = instant, 1 = no movement)
        smoothWheel: true,
        syncTouch: false
        // let mobile use native scroll
      });
      const raf = (time) => {
        this.lenis.raf(time);
        this.rafId = requestAnimationFrame(raf);
      };
      this.rafId = requestAnimationFrame(raf);
    });
  }
  ngOnDestroy() {
    if (this.rafId !== null)
      cancelAnimationFrame(this.rafId);
    if (this.lenis)
      this.lenis.destroy();
  }
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(PLATFORM_ID));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "main-content"]], template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "app-footer");
    }
  }, dependencies: [RouterOutlet, NavbarComponent, FooterComponent], styles: ["\n\n.college-img-container[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n  background-color: #f5f5f5;\n}\n.college-img[_ngcontent-%COMP%] {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{ selector: "app-root", standalone: true, imports: [RouterOutlet, NavbarComponent, FooterComponent], template: '<app-navbar></app-navbar>\r\n<main class="main-content">\r\n	<router-outlet></router-outlet>\r\n  \r\n</main>\r\n<app-footer></app-footer>\r\n', styles: ["/* src/app/app.component.css */\n.college-img-container {\n  width: 100%;\n  text-align: center;\n  background-color: #f5f5f5;\n}\n.college-img {\n  max-width: 100%;\n  height: auto;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=app.component.css.map */\n"] }]
  }], () => [{ type: Router }, { type: void 0, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 16 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
