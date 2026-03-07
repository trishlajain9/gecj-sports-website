import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-QKIANUNH.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QOX7GY5A.js";
import "./chunk-WDMUDEB6.js";

// src/app/gallery/gallery.component.ts
function GalleryComponent_div_6_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(b_r2.description);
  }
}
function GalleryComponent_div_6_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("click", function GalleryComponent_div_6_div_10_div_1_Template_div_click_0_listener() {
      const p_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openPhoto(p_r5));
    });
    \u0275\u0275element(1, "img", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", p_r5.src, \u0275\u0275sanitizeUrl)("alt", p_r5.alt);
  }
}
function GalleryComponent_div_6_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275template(1, GalleryComponent_div_6_div_10_div_1_Template, 2, 2, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", b_r2.photos)("ngForTrackBy", ctx_r2.trackByPhoto);
  }
}
function GalleryComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "button", 5);
    \u0275\u0275listener("click", function GalleryComponent_div_6_Template_button_click_1_listener() {
      const b_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleBatch(b_r2.id));
    });
    \u0275\u0275elementStart(2, "div", 6)(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, GalleryComponent_div_6_p_9_Template, 2, 1, "p", 9)(10, GalleryComponent_div_6_div_10_Template, 2, 2, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const b_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-expanded", ctx_r2.activeBatchId === b_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(b_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(b_r2.yearRange);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.activeBatchId === b_r2.id ? "Hide Photos" : "View Photos");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", b_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.activeBatchId === b_r2.id);
  }
}
function GalleryComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("click", function GalleryComponent_div_7_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePhoto());
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275listener("click", function GalleryComponent_div_7_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 18);
    \u0275\u0275listener("click", function GalleryComponent_div_7_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closePhoto());
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.selectedPhoto.src, \u0275\u0275sanitizeUrl)("alt", ctx_r2.selectedPhoto.alt);
  }
}
var GalleryComponent = class _GalleryComponent {
  activeBatchId = "2022-23";
  // Show Intercollege Tournaments by default
  selectedPhoto = null;
  // Track selected photo for lightbox
  batches = [
    {
      id: "2023-24",
      title: "Annual Sports Meet",
      yearRange: "2023-24",
      description: "Highlights from the 2023-24 sports events and ceremonies.",
      photos: [
        { src: "assets/collage.jpg", alt: "Sports collage 2023-24 - 1" },
        { src: "assets/collage.jpg", alt: "Sports collage 2023-24 - 2" },
        { src: "assets/collage.jpg", alt: "Sports collage 2023-24 - 3" }
      ]
    },
    {
      id: "2022-23",
      title: "Intercollege Tournaments",
      yearRange: "2022-23",
      description: "Memories from intercollege competitions and awards.",
      photos: [
        { src: "assets/gallery/22-23/E1.jpg", alt: "Sports collage 2022-23 - 1" },
        { src: "assets/gallery/22-23/E2.jpg", alt: "Sports collage 2022-23 - 2" },
        { src: "assets/gallery/22-23/E3.jpg", alt: "Sports collage 2022-23 - 3" },
        { src: "assets/gallery/22-23/E5.jpg", alt: "Sports collage 2022-23 - 4" },
        { src: "assets/gallery/22-23/E6.jpg", alt: "Sports collage 2022-23 - 5" },
        { src: "assets/gallery/22-23/E7.jpg", alt: "Sports collage 2022-23 - 6" },
        { src: "assets/gallery/22-23/E8.jpg", alt: "Sports collage 2022-23 - 7" },
        { src: "assets/gallery/22-23/E9.jpg", alt: "Sports collage 2022-23 - 8" },
        { src: "assets/gallery/22-23/E10.jpg", alt: "Sports collage 2022-23 - 9" },
        { src: "assets/gallery/22-23/E11.jpg", alt: "Sports collage 2022-23 - 10" },
        { src: "assets/gallery/22-23/W1.jpg", alt: "Sports collage 2022-23 - 11" },
        { src: "assets/gallery/22-23/W2.jpg", alt: "Sports collage 2022-23 - 12" },
        { src: "assets/gallery/22-23/W3.jpg", alt: "Sports collage 2022-23 - 13" },
        { src: "assets/gallery/22-23/W4.jpg", alt: "Sports collage 2022-23 - 14" },
        { src: "assets/gallery/22-23/W5.jpg", alt: "Sports collage 2022-23 - 15" },
        { src: "assets/gallery/22-23/W6.jpg", alt: "Sports collage 2022-23 - 16" },
        { src: "assets/gallery/22-23/W7.jpg", alt: "Sports collage 2022-23 - 17" },
        { src: "assets/gallery/22-23/W8.jpg", alt: "Sports collage 2022-23 - 18" }
      ]
    }
  ];
  toggleBatch(id) {
    this.activeBatchId = this.activeBatchId === id ? null : id;
  }
  openPhoto(photo) {
    this.selectedPhoto = photo;
    try {
      document.body.style.overflow = "hidden";
    } catch {
    }
  }
  closePhoto() {
    this.selectedPhoto = null;
    document.body.style.overflow = "auto";
  }
  trackByBatch = (_, b) => b.id;
  trackByPhoto = (_, p) => p.src + p.alt;
  static \u0275fac = function GalleryComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleryComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["app-gallery"]], decls: 8, vars: 3, consts: [[1, "gallery-hero"], [1, "batches"], ["class", "batch-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "lightbox-overlay", 3, "click", 4, "ngIf"], [1, "batch-card"], ["type", "button", 1, "batch-header", 3, "click"], [1, "left"], [1, "year"], [1, "right"], ["class", "desc", 4, "ngIf"], ["class", "photos", 4, "ngIf"], [1, "desc"], [1, "photos"], ["class", "photo", "role", "button", "tabindex", "0", 3, "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "button", "tabindex", "0", 1, "photo", 3, "click"], ["title", "Gallery photo", "loading", "lazy", 1, "clickable", 3, "src", "alt"], [1, "lightbox-overlay", 3, "click"], [1, "lightbox-wrapper", 3, "click"], ["type", "button", 1, "lightbox-close-btn", 3, "click"], ["title", "Gallery photo", 1, "lightbox-img", 3, "src", "alt"]], template: function GalleryComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Gallery");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "Explore event photos by batch.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "section", 1);
      \u0275\u0275template(6, GalleryComponent_div_6_Template, 11, 6, "div", 2);
      \u0275\u0275elementEnd();
      \u0275\u0275template(7, GalleryComponent_div_7_Template, 5, 2, "div", 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.batches)("ngForTrackBy", ctx.trackByBatch);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedPhoto);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.gallery-hero[_ngcontent-%COMP%] {\n  position: sticky;\n  top: var(--navbar-height, 84px);\n  z-index: 5;\n  padding: 12px 16px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(10, 18, 36, 0.92),\n      rgba(27, 38, 59, 0.88));\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.gallery-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #22D3EE;\n  margin: 0;\n}\n.gallery-hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #d2e0f0;\n  margin: 6px 0 0;\n  font-weight: 600;\n}\n.batches[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 16px auto 80px;\n  padding: 0 16px;\n  display: grid;\n  gap: 16px;\n}\n.batch-card[_ngcontent-%COMP%] {\n  background: #0f1e33;\n  color: #e6f4ff;\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 12px 12px 16px;\n}\n.batch-header[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  background: transparent;\n  color: inherit;\n  border: none;\n  cursor: pointer;\n  padding: 6px 6px 8px;\n  border-radius: 10px;\n}\n.batch-header[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 230, 255, 0.10);\n}\n.batch-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.batch-header[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .year[_ngcontent-%COMP%] {\n  color: #7dd3fc;\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n.batch-header[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  color: #22D3EE;\n  font-weight: 700;\n}\n.desc[_ngcontent-%COMP%] {\n  margin: 6px 2px 10px;\n  color: #cbd5e1;\n}\n.photos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 10px;\n}\n.photo[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  display: block;\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n.photo[_ngcontent-%COMP%]   img.clickable[_ngcontent-%COMP%] {\n  cursor: zoom-in;\n}\n.lightbox-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.98);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.lightbox-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 90%;\n  height: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.lightbox-close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: #22D3EE;\n  color: #0a1224;\n  border: none;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  font-size: 28px;\n  cursor: pointer;\n  font-weight: bold;\n  z-index: 10000;\n  transition: background-color 0.2s;\n}\n.lightbox-close-btn[_ngcontent-%COMP%]:hover {\n  background: #06B6D4;\n}\n@media (max-width: 700px) {\n  .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n}\n/*# sourceMappingURL=gallery.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleryComponent, [{
    type: Component,
    args: [{ selector: "app-gallery", standalone: true, imports: [CommonModule], template: `<section class="gallery-hero">\r
  <h1>Gallery</h1>\r
  <p>Explore event photos by batch.</p>\r
  </section>\r
\r
<section class="batches">\r
  <div class="batch-card" *ngFor="let b of batches; trackBy: trackByBatch">\r
    <button type="button" class="batch-header" (click)="toggleBatch(b.id)" [attr.aria-expanded]="activeBatchId === b.id">\r
      <div class="left">\r
        <h3>{{ b.title }}</h3>\r
        <span class="year">{{ b.yearRange }}</span>\r
      </div>\r
      <div class="right">{{ activeBatchId === b.id ? 'Hide Photos' : 'View Photos' }}</div>\r
    </button>\r
    <p class="desc" *ngIf="b.description">{{ b.description }}</p>\r
\r
    <div class="photos" *ngIf="activeBatchId === b.id">\r
      <div class="photo" *ngFor="let p of b.photos; trackBy: trackByPhoto" (click)="openPhoto(p)" role="button" tabindex="0">\r
        <!-- cSpell:disable -->\r
        <img [src]="p.src" [alt]="p.alt" title="Gallery photo" loading="lazy" class="clickable" />\r
        <!-- cSpell:enable -->\r
      </div>\r
    </div>\r
  </div>\r
</section>\r
\r
<!-- Lightbox Modal -->\r
<div *ngIf="selectedPhoto" class="lightbox-overlay" (click)="closePhoto()">\r
  <div class="lightbox-wrapper" (click)="$event.stopPropagation()">\r
    <button type="button" class="lightbox-close-btn" (click)="closePhoto()">\u2715</button>\r
    <!-- cSpell:disable -->\r
    <img class="lightbox-img" [src]="selectedPhoto.src" [alt]="selectedPhoto.alt" title="Gallery photo" />\r
    <!-- cSpell:enable -->\r
  </div>\r
</div>\r
`, styles: ["/* src/app/gallery/gallery.component.css */\n.gallery-hero {\n  position: sticky;\n  top: var(--navbar-height, 84px);\n  z-index: 5;\n  padding: 12px 16px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  background:\n    linear-gradient(\n      180deg,\n      rgba(10, 18, 36, 0.92),\n      rgba(27, 38, 59, 0.88));\n  border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n}\n.gallery-hero h1 {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #22D3EE;\n  margin: 0;\n}\n.gallery-hero p {\n  color: #d2e0f0;\n  margin: 6px 0 0;\n  font-weight: 600;\n}\n.batches {\n  max-width: 1100px;\n  margin: 16px auto 80px;\n  padding: 0 16px;\n  display: grid;\n  gap: 16px;\n}\n.batch-card {\n  background: #0f1e33;\n  color: #e6f4ff;\n  border-radius: 14px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 12px 12px 16px;\n}\n.batch-header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  background: transparent;\n  color: inherit;\n  border: none;\n  cursor: pointer;\n  padding: 6px 6px 8px;\n  border-radius: 10px;\n}\n.batch-header:hover {\n  background: rgba(0, 230, 255, 0.10);\n}\n.batch-header .left h3 {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.batch-header .left .year {\n  color: #7dd3fc;\n  font-weight: 700;\n  font-size: 0.95rem;\n}\n.batch-header .right {\n  color: #22D3EE;\n  font-weight: 700;\n}\n.desc {\n  margin: 6px 2px 10px;\n  color: #cbd5e1;\n}\n.photos {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 10px;\n}\n.photo {\n  position: relative;\n  overflow: hidden;\n  border-radius: 10px;\n}\n.photo img {\n  width: 100%;\n  height: 160px;\n  object-fit: cover;\n  display: block;\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.10);\n  cursor: pointer;\n  transition: transform 0.2s ease;\n}\n.photo img:hover {\n  transform: scale(1.05);\n}\n.photo img.clickable {\n  cursor: zoom-in;\n}\n.lightbox-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.98);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n}\n.lightbox-wrapper {\n  position: relative;\n  width: 90%;\n  height: 90%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.lightbox-img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.lightbox-close-btn {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  background: #22D3EE;\n  color: #0a1224;\n  border: none;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  font-size: 28px;\n  cursor: pointer;\n  font-weight: bold;\n  z-index: 10000;\n  transition: background-color 0.2s;\n}\n.lightbox-close-btn:hover {\n  background: #06B6D4;\n}\n@media (max-width: 700px) {\n  .photo img {\n    height: 120px;\n  }\n}\n/*# sourceMappingURL=gallery.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "src/app/gallery/gallery.component.ts", lineNumber: 20 });
})();
export {
  GalleryComponent
};
//# sourceMappingURL=chunk-WK7QZE3H.js.map
