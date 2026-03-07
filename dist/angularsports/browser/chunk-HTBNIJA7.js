import {
  RouterLink,
  RouterModule
} from "./chunk-K7CTBRBP.js";
import "./chunk-7E6OIKHZ.js";
import {
  CommonModule,
  NgForOf
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
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-QOX7GY5A.js";
import "./chunk-WDMUDEB6.js";

// src/app/sports/sports.component.ts
var _c0 = (a0) => ["/sports", a0];
function SportsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7);
    \u0275\u0275element(3, "img", 8);
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7, "Hover to explore");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 11)(14, "span");
    \u0275\u0275text(15, "View Details");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const sport_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", sport_r1.img, \u0275\u0275sanitizeUrl)("alt", "Image of " + sport_r1.name);
    \u0275\u0275attribute("title", sport_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sport_r1.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(sport_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(sport_r1.desc);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c0, sport_r1.name.toLowerCase()));
  }
}
var SportsComponent = class _SportsComponent {
  sports = [
    {
      name: "Basketball",
      img: "assets/sports/basketball/B1.jpeg",
      desc: "Where the court becomes a battleground. Play bold, lead fearless and let your victory echo across campus."
    },
    {
      name: "Carrom",
      img: "assets/sports/Carrom/C1.jpeg",
      desc: "Master precision and strategy as every strike sharpens focus. Read the board, control the pace, and own the final move."
    },
    {
      name: "Cricket",
      img: "assets/sports/cricket/CR1.jpg",
      desc: "Where every run carries pride and every wicket builds legacy. Stand tall and turn pressure into pure dominance."
    },
    {
      name: "Chess",
      img: "assets/sports/Chess/CH1.jpg",
      desc: "Think three moves ahead with calm confidence and sharp tactics. Build your attack, guard your king, and checkmate with purpose."
    },
    {
      name: "Badminton",
      img: "assets/sports/Badminton/ba1.jpg",
      desc: "Strike with lightning speed and unshakable determination. Smash with pride, move with purpose and claim every rally as yours."
    },
    {
      name: "Volleyball",
      img: "assets/sports/Volleyball/V1.jpg",
      desc: "Rise above the net with unity, power and fearless spirit. Block strong, strike harder and lead your team to championship glory."
    }
  ];
  static \u0275fac = function SportsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SportsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SportsComponent, selectors: [["app-sports"]], decls: 7, vars: 1, consts: [[1, "featured-sports-section"], [1, "section-title"], [1, "section-desc"], [1, "sports-grid"], ["class", "flip-card", 4, "ngFor", "ngForOf"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], [1, "sport-img", 3, "src", "alt"], [1, "flip-hint"], [1, "flip-card-back"], [1, "sport-btn", 3, "routerLink"]], template: function SportsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Featured Sports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Discover a wide range of sports activities and join the GECJ sports community.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 3);
      \u0275\u0275template(6, SportsComponent_div_6_Template, 16, 9, "div", 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.sports);
    }
  }, dependencies: [CommonModule, NgForOf, RouterModule, RouterLink], styles: ['\n\n.featured-sports-section[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 3rem auto 2rem auto;\n  padding: 0 1.5rem;\n  text-align: center;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 900;\n  color: #22D3EE;\n  margin-bottom: 0.5rem;\n}\n.section-desc[_ngcontent-%COMP%] {\n  color: #b2c2d6;\n  font-size: 1.15rem;\n  margin-bottom: 2.5rem;\n}\n.sports-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2.5rem 2rem;\n  justify-items: center;\n}\n.flip-card[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 340px;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.flip-card-front[_ngcontent-%COMP%], \n.flip-card-back[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.8rem;\n  text-align: center;\n}\n.flip-card-front[_ngcontent-%COMP%] {\n  background: #17213a;\n  border: 1.5px solid rgba(34, 211, 238, 0.15);\n  box-shadow: 0 4px 32px rgba(0, 188, 212, 0.13);\n}\n.flip-card-front[_ngcontent-%COMP%]   .sport-img[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 16px;\n  margin-bottom: 1.2rem;\n  box-shadow: 0 2px 16px rgba(0, 230, 255, 0.18);\n}\n.flip-card-front[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #d6f6fa;\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n}\n.flip-hint[_ngcontent-%COMP%] {\n  color: #22D3EE;\n  font-size: 0.88rem;\n  opacity: 0.7;\n  letter-spacing: 0.04em;\n}\n.flip-card-back[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0e3a5c 0%,\n      #17213a 60%,\n      #0a2540 100%);\n  border: 1.5px solid rgba(34, 211, 238, 0.35);\n  box-shadow: 0 8px 40px rgba(0, 230, 255, 0.22);\n  transform: rotateY(180deg);\n  gap: 0.8rem;\n}\n.flip-card-back[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #22D3EE;\n  font-size: 1.45rem;\n  font-weight: 800;\n  margin-bottom: 0.3rem;\n}\n.flip-card-back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #b2c2d6;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin-bottom: 0.5rem;\n}\n.sport-btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #22D3EE;\n  color: #0a2540;\n  font-weight: 700;\n  font-size: 1.05rem;\n  border-radius: 2rem;\n  padding: 0.55rem 2rem;\n  text-decoration: none;\n  box-shadow: 0 2px 12px rgba(0, 230, 255, 0.25);\n  margin-top: 0.3rem;\n  overflow: hidden;\n  position: relative;\n}\n.sport-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  z-index: 10;\n}\n.sport-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sportMoveScaleUpInitial 0.3s forwards, _ngcontent-%COMP%_sportMoveScaleUpEnd 0.3s forwards 0.3s;\n}\n@keyframes _ngcontent-%COMP%_sportMoveScaleUpInitial {\n  to {\n    transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_sportMoveScaleUpEnd {\n  from {\n    transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.sport-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  background: #0a2540;\n  width: 120%;\n  height: 0;\n  padding-bottom: 120%;\n  top: -110%;\n  left: -10%;\n  border-radius: 50%;\n  transform: translate3d(0, 68%, 0) scale3d(0, 0, 0);\n  z-index: 1;\n}\n.sport-btn[_ngcontent-%COMP%]:hover::before {\n  transform: translate3d(0, 0, 0) scale3d(1, 1, 1);\n  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);\n}\n.sport-btn[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #0a2540;\n  transform: translate3d(0, -100%, 0);\n  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);\n  z-index: 2;\n}\n.sport-btn[_ngcontent-%COMP%]:hover::after {\n  transform: translate3d(0, 0, 0);\n  transition-duration: 0.05s;\n  transition-delay: 0.4s;\n  transition-timing-function: linear;\n}\n@media (max-width: 900px) {\n  .sports-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .flip-card[_ngcontent-%COMP%] {\n    width: min(320px, 90vw);\n    height: 320px;\n  }\n}\n/*# sourceMappingURL=sports.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SportsComponent, [{
    type: Component,
    args: [{ selector: "app-sports", standalone: true, imports: [CommonModule, RouterModule], template: `\r
<section class="featured-sports-section">\r
	<h2 class="section-title">Featured Sports</h2>\r
	<p class="section-desc">Discover a wide range of sports activities and join the GECJ sports community.</p>\r
	<div class="sports-grid">\r
		<div class="flip-card" *ngFor="let sport of sports">\r
			<div class="flip-card-inner">\r
				<!-- Front Face -->\r
				<div class="flip-card-front">\r
					<img [src]="sport.img" [alt]="'Image of ' + sport.name" [attr.title]="sport.name" class="sport-img" />\r
					<h3>{{ sport.name }}</h3>\r
					<span class="flip-hint">Hover to explore</span>\r
				</div>\r
				<!-- Back Face -->\r
				<div class="flip-card-back">\r
					<h3>{{ sport.name }}</h3>\r
					<p>{{ sport.desc }}</p>\r
					<a [routerLink]="['/sports', sport.name.toLowerCase()]" class="sport-btn"><span>View Details</span></a>\r
					<!-- class="sport-btn"><span>View Details</span></a> -->\r
				</div>\r
			</div>\r
		</div>\r
	</div>\r
</section>\r
\r
`, styles: ['/* src/app/sports/sports.component.css */\n.featured-sports-section {\n  max-width: 1200px;\n  margin: 3rem auto 2rem auto;\n  padding: 0 1.5rem;\n  text-align: center;\n}\n.section-title {\n  font-size: 2.3rem;\n  font-weight: 900;\n  color: #22D3EE;\n  margin-bottom: 0.5rem;\n}\n.section-desc {\n  color: #b2c2d6;\n  font-size: 1.15rem;\n  margin-bottom: 2.5rem;\n}\n.sports-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2.5rem 2rem;\n  justify-items: center;\n}\n.flip-card {\n  width: 320px;\n  height: 340px;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n.flip-card-front,\n.flip-card-back {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.8rem;\n  text-align: center;\n}\n.flip-card-front {\n  background: #17213a;\n  border: 1.5px solid rgba(34, 211, 238, 0.15);\n  box-shadow: 0 4px 32px rgba(0, 188, 212, 0.13);\n}\n.flip-card-front .sport-img {\n  width: 130px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 16px;\n  margin-bottom: 1.2rem;\n  box-shadow: 0 2px 16px rgba(0, 230, 255, 0.18);\n}\n.flip-card-front h3 {\n  color: #d6f6fa;\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin-bottom: 0.5rem;\n}\n.flip-hint {\n  color: #22D3EE;\n  font-size: 0.88rem;\n  opacity: 0.7;\n  letter-spacing: 0.04em;\n}\n.flip-card-back {\n  background:\n    linear-gradient(\n      135deg,\n      #0e3a5c 0%,\n      #17213a 60%,\n      #0a2540 100%);\n  border: 1.5px solid rgba(34, 211, 238, 0.35);\n  box-shadow: 0 8px 40px rgba(0, 230, 255, 0.22);\n  transform: rotateY(180deg);\n  gap: 0.8rem;\n}\n.flip-card-back h3 {\n  color: #22D3EE;\n  font-size: 1.45rem;\n  font-weight: 800;\n  margin-bottom: 0.3rem;\n}\n.flip-card-back p {\n  color: #b2c2d6;\n  font-size: 1rem;\n  line-height: 1.6;\n  margin-bottom: 0.5rem;\n}\n.sport-btn {\n  display: inline-block;\n  background: #22D3EE;\n  color: #0a2540;\n  font-weight: 700;\n  font-size: 1.05rem;\n  border-radius: 2rem;\n  padding: 0.55rem 2rem;\n  text-decoration: none;\n  box-shadow: 0 2px 12px rgba(0, 230, 255, 0.25);\n  margin-top: 0.3rem;\n  overflow: hidden;\n  position: relative;\n}\n.sport-btn span {\n  display: block;\n  position: relative;\n  z-index: 10;\n}\n.sport-btn:hover span {\n  animation: sportMoveScaleUpInitial 0.3s forwards, sportMoveScaleUpEnd 0.3s forwards 0.3s;\n}\n@keyframes sportMoveScaleUpInitial {\n  to {\n    transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);\n    opacity: 0;\n  }\n}\n@keyframes sportMoveScaleUpEnd {\n  from {\n    transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.sport-btn::before {\n  content: "";\n  position: absolute;\n  background: #0a2540;\n  width: 120%;\n  height: 0;\n  padding-bottom: 120%;\n  top: -110%;\n  left: -10%;\n  border-radius: 50%;\n  transform: translate3d(0, 68%, 0) scale3d(0, 0, 0);\n  z-index: 1;\n}\n.sport-btn:hover::before {\n  transform: translate3d(0, 0, 0) scale3d(1, 1, 1);\n  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);\n}\n.sport-btn::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #0a2540;\n  transform: translate3d(0, -100%, 0);\n  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);\n  z-index: 2;\n}\n.sport-btn:hover::after {\n  transform: translate3d(0, 0, 0);\n  transition-duration: 0.05s;\n  transition-delay: 0.4s;\n  transition-timing-function: linear;\n}\n@media (max-width: 900px) {\n  .sports-grid {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .flip-card {\n    width: min(320px, 90vw);\n    height: 320px;\n  }\n}\n/*# sourceMappingURL=sports.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SportsComponent, { className: "SportsComponent", filePath: "src/app/sports/sports.component.ts", lineNumber: 12 });
})();
export {
  SportsComponent
};
//# sourceMappingURL=chunk-HTBNIJA7.js.map
