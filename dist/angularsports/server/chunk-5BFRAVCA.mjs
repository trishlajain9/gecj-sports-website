import './polyfills.server.mjs';
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-7CZ2RLXY.mjs";
import "./chunk-5XVJZNKB.mjs";
import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-PFGAO2ZZ.mjs";
import {
  Component,
  computed,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JS4AU3CQ.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/sports/sport-detail.component.ts
function SportDetailComponent_section_0_div_9_img_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 6);
    \u0275\u0275listener("error", function SportDetailComponent_section_0_div_9_img_4_Template_img_error_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onImgError($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const src_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("src", src_r4, \u0275\u0275sanitizeUrl)("alt", ctx_r1.sport().name + " photo " + (i_r5 + 1));
  }
}
function SportDetailComponent_section_0_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "h2", 10);
    \u0275\u0275text(2, "Photos");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275template(4, SportDetailComponent_section_0_div_9_img_4_Template, 1, 2, "img", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.sport().images);
  }
}
function SportDetailComponent_section_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "a", 3);
    \u0275\u0275text(2, "\u2190 Back to Sports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5)(6, "img", 6);
    \u0275\u0275listener("error", function SportDetailComponent_section_0_Template_img_error_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImgError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 7);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SportDetailComponent_section_0_div_9_Template, 5, 1, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.sport().name);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.sport().img, \u0275\u0275sanitizeUrl)("alt", ctx_r1.sport().name + " image");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.sport().desc);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_6_0 = ctx_r1.sport().images) == null ? null : tmp_6_0.length);
  }
}
function SportDetailComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 2)(1, "a", 3);
    \u0275\u0275text(2, "\u2190 Back to Sports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 4);
    \u0275\u0275text(4, "Sport not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6, "We couldn't find details for this sport.");
    \u0275\u0275elementEnd()();
  }
}
var SportDetailComponent = class _SportDetailComponent {
  route;
  sports = {
    basketball: {
      name: "Basketball",
      img: "assets/sports/basketball/B1.jpeg",
      desc: "Experience the thrill of basketball with world-class courts and strategic plays.",
      images: [
        "assets/sports/basketball/B1.jpeg",
        "assets/sports/basketball/B2.jpeg",
        "assets/sports/basketball/B3.jpeg",
        "assets/sports/basketball/B4.jpg",
        "assets/sports/basketball/B5.jpg",
        "assets/sports/basketball/B7.jpg",
        "assets/sports/basketball/B8.jpg",
        "assets/sports/basketball/B10.jpg",
        "assets/sports/basketball/B11.jpg",
        "assets/sports/basketball/B12.jpg",
        "assets/sports/basketball/B13.jpg",
        "assets/sports/basketball/B14.jpg",
        "assets/sports/basketball/B16.jpg"
      ]
    },
    carrom: {
      name: "Carrom",
      img: "assets/sports/Carrom/C1.jpeg",
      desc: "Sharpen your precision and tactical thinking on the carrom board.",
      images: [
        "assets/sports/Carrom/C1.jpeg",
        "assets/sports/Carrom/C2.jpg",
        "assets/sports/Carrom/C3.jpg"
      ]
    },
    cricket: {
      name: "Cricket",
      img: "assets/sports/cricket/CR1.jpg",
      desc: "Cricket at GECJ is all about learning, bonding, and fielding winning teams.",
      images: [
        "assets/sports/cricket/CR1.jpg",
        "assets/sports/cricket/CR2.jpg",
        "assets/sports/cricket/princi.jpg"
      ]
    },
    chess: {
      name: "Chess",
      img: "assets/sports/Chess/CH1.jpg",
      desc: "Develop strategy, patience, and discipline with every chess match.",
      images: [
        "assets/sports/Chess/CH1.jpg",
        "assets/sports/Chess/CH2.jpg"
      ]
    },
    badminton: {
      name: "Badminton",
      img: "assets/sports/Badminton/ba1.jpg",
      desc: "Crack smashes and perfect your aim in try by world-class badminton courts.",
      images: [
        "assets/sports/Badminton/ba1.jpg",
        "assets/sports/Badminton/ba2.jpg",
        "assets/sports/Badminton/ba3.jpeg",
        "assets/sports/Badminton/ba4.jpg",
        "assets/sports/Badminton/ba5.jpg"
      ]
    },
    volleyball: {
      name: "Volleyball",
      img: "assets/sports/Volleyball/V1.jpg",
      desc: "Work together to spike, block, and set your way to the national level.",
      images: [
        "assets/sports/Volleyball/V1.jpg",
        "assets/sports/Volleyball/V2.jpg",
        "assets/sports/Volleyball/V3.jpg"
      ]
    }
  };
  param = signal("");
  sport = computed(() => this.sports[this.param()]);
  constructor(route) {
    this.route = route;
    this.route.paramMap.subscribe((pm) => {
      this.param.set((pm.get("name") || "").toLowerCase());
    });
  }
  onImgError(ev) {
    ev.target.src = "assets/collage.jpg";
  }
  static \u0275fac = function SportDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SportDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SportDetailComponent, selectors: [["app-sport-detail"]], decls: 3, vars: 2, consts: [["notFound", ""], ["class", "sport-detail", 4, "ngIf", "ngIfElse"], [1, "sport-detail"], ["routerLink", "/sports", 1, "back"], [1, "title"], [1, "img-wrap"], [3, "error", "src", "alt"], [1, "desc"], ["class", "gallery", 4, "ngIf"], [1, "gallery"], [1, "gallery-title"], [1, "photos"], [3, "src", "alt", "error", 4, "ngFor", "ngForOf"]], template: function SportDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, SportDetailComponent_section_0_Template, 10, 5, "section", 1)(1, SportDetailComponent_ng_template_1_Template, 7, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    }
    if (rf & 2) {
      const notFound_r6 = \u0275\u0275reference(2);
      \u0275\u0275property("ngIf", ctx.sport())("ngIfElse", notFound_r6);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink], styles: ["\n\n.sport-detail[_ngcontent-%COMP%] {\n  max-width: 980px;\n  margin: 0 auto;\n  padding: 100px 16px 40px;\n  color: #e6f4ff;\n}\n.back[_ngcontent-%COMP%] {\n  color: #93c5fd;\n  text-decoration: none;\n  font-weight: 700;\n}\n.back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.title[_ngcontent-%COMP%] {\n  margin: 10px 0 12px;\n  font-size: 2rem;\n  font-weight: 900;\n  color: #98e1ff;\n}\n.img-wrap[_ngcontent-%COMP%] {\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, .35);\n  background: #0f1e33;\n}\n.img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.desc[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 1.05rem;\n  color: #cbe3ff;\n}\n.gallery[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n.gallery-title[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #98e1ff;\n  margin: 12px 0;\n}\n.photos[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 10px;\n}\n.photos[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 10px;\n  box-shadow: 0 6px 22px rgba(0, 0, 0, .35);\n  background: #0f1e33;\n}\n@media (max-width: 700px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=sport-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SportDetailComponent, [{
    type: Component,
    args: [{ selector: "app-sport-detail", standalone: true, imports: [CommonModule, RouterModule], template: `
    <section class="sport-detail" *ngIf="sport(); else notFound">
      <a routerLink="/sports" class="back">\u2190 Back to Sports</a>
      <h1 class="title">{{ sport()!.name }}</h1>
      <div class="img-wrap">
        <img [src]="sport()!.img" [alt]="sport()!.name + ' image'" (error)="onImgError($event)"/>
      </div>
      <p class="desc">{{ sport()!.desc }}</p>
      <div class="gallery" *ngIf="sport()!.images?.length">
        <h2 class="gallery-title">Photos</h2>
        <div class="photos">
          <img *ngFor="let src of sport()!.images; index as i" [src]="src" [alt]="sport()!.name + ' photo ' + (i+1)" (error)="onImgError($event)"/>
        </div>
      </div>
    </section>
    <ng-template #notFound>
      <section class="sport-detail">
        <a routerLink="/sports" class="back">\u2190 Back to Sports</a>
        <h1 class="title">Sport not found</h1>
        <p class="desc">We couldn't find details for this sport.</p>
      </section>
    </ng-template>
  `, styles: ["/* angular:styles/component:css;bcf8606b029acf559e51cfb29ba600caf6354883021415eb514e77f61c7c6473;C:/Users/rajve/Desktop/final/gecj-sports-website/src/app/sports/sport-detail.component.ts */\n.sport-detail {\n  max-width: 980px;\n  margin: 0 auto;\n  padding: 100px 16px 40px;\n  color: #e6f4ff;\n}\n.back {\n  color: #93c5fd;\n  text-decoration: none;\n  font-weight: 700;\n}\n.back:hover {\n  text-decoration: underline;\n}\n.title {\n  margin: 10px 0 12px;\n  font-size: 2rem;\n  font-weight: 900;\n  color: #98e1ff;\n}\n.img-wrap {\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, .35);\n  background: #0f1e33;\n}\n.img-wrap img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.desc {\n  margin-top: 16px;\n  font-size: 1.05rem;\n  color: #cbe3ff;\n}\n.gallery {\n  margin-top: 18px;\n}\n.gallery-title {\n  font-size: 1.4rem;\n  font-weight: 800;\n  color: #98e1ff;\n  margin: 12px 0;\n}\n.photos {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));\n  gap: 10px;\n}\n.photos img {\n  width: 100%;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 10px;\n  box-shadow: 0 6px 22px rgba(0, 0, 0, .35);\n  background: #0f1e33;\n}\n@media (max-width: 700px) {\n  .title {\n    font-size: 1.6rem;\n  }\n}\n/*# sourceMappingURL=sport-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SportDetailComponent, { className: "SportDetailComponent", filePath: "src/app/sports/sport-detail.component.ts", lineNumber: 49 });
})();
export {
  SportDetailComponent
};
//# sourceMappingURL=chunk-5BFRAVCA.mjs.map
