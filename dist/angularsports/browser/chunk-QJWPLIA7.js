import {
  LightRaysComponent
} from "./chunk-3534MA7H.js";
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
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-QOX7GY5A.js";
import "./chunk-WDMUDEB6.js";

// src/app/council/council.component.ts
function CouncilComponent_div_9_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Call: ", m_r3.phone, "");
  }
}
function CouncilComponent_div_9_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 17);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "rect", 19)(3, "circle", 20)(4, "circle", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", m_r3.instagram, \u0275\u0275sanitizeUrl);
  }
}
function CouncilComponent_div_9_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 22);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 18);
    \u0275\u0275element(2, "rect", 23)(3, "polyline", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "mailto:" + m_r3.email, \u0275\u0275sanitizeUrl);
  }
}
function CouncilComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "p", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9)(4, "img", 10);
    \u0275\u0275listener("error", function CouncilComponent_div_9_Template_img_error_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPhotoError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3", 11);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, CouncilComponent_div_9_p_7_Template, 2, 1, "p", 12);
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275template(9, CouncilComponent_div_9_a_9_Template, 5, 1, "a", 14)(10, CouncilComponent_div_9_a_10_Template, 4, 1, "a", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", m_r3.photo || "assets/Logo/logo.png", \u0275\u0275sanitizeUrl)("alt", m_r3.name);
    \u0275\u0275attribute("title", m_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r3.phone);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", m_r3.instagram);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r3.email);
  }
}
var CouncilComponent = class _CouncilComponent {
  members = [
    {
      role: "Website Owner",
      name: "Rajveer Verma",
      phone: "8302186985",
      instagram: "https://www.instagram.com/rajveer____.01",
      email: "rajveerverma99830@gmail.com",
      photo: "assets/council-general-secretary.jpg"
    },
    {
      role: "Organiser",
      name: "Mohd. Kaif Khan",
      phone: "9992888093",
      instagram: "https://www.instagram.com/",
      email: "",
      photo: "assets/council/aryansh.jpg"
    },
    {
      role: "Organiser",
      name: "Tanishq Chaturvedi",
      phone: "9727215454",
      instagram: "https://www.instagram.com/",
      email: "",
      photo: "assets/council/akanksha.jpg"
    },
    {
      role: "Organiser",
      name: "Yaman Singh",
      phone: "9855221266",
      instagram: "https://www.instagram.com/",
      email: "",
      photo: "assets/council/yaman.jpg"
    },
    {
      role: "Organiser",
      name: "TBA",
      phone: "",
      instagram: "",
      email: "",
      photo: ""
    },
    {
      role: "Organiser",
      name: "TBA",
      phone: "",
      instagram: "",
      email: "",
      photo: ""
    }
  ];
  onPhotoError(ev) {
    const img = ev.target;
    img.src = "assets/Logo/logo.png";
  }
  static \u0275fac = function CouncilComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CouncilComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CouncilComponent, selectors: [["app-council"]], decls: 10, vars: 11, consts: [[1, "council-page-wrap"], [3, "raysOrigin", "raysColor", "raysSpeed", "lightSpread", "rayLength", "fadeDistance", "saturation", "followMouse", "mouseInfluence", "pulsating"], [1, "council-hero"], [1, "council-year"], ["aria-label", "Council Members", 1, "council-cards-section"], [1, "council-cards-grid"], ["class", "cc-card", 4, "ngFor", "ngForOf"], [1, "cc-card"], [1, "cc-role"], [1, "cc-avatar-wrap"], [1, "cc-avatar", 3, "error", "src", "alt"], [1, "cc-name"], ["class", "cc-phone", 4, "ngIf"], [1, "cc-socials"], ["target", "_blank", "rel", "noopener", "aria-label", "Instagram", "class", "social-icon-btn", 3, "href", 4, "ngIf"], ["aria-label", "Email", "class", "social-icon-btn", 3, "href", 4, "ngIf"], [1, "cc-phone"], ["target", "_blank", "rel", "noopener", "aria-label", "Instagram", 1, "social-icon-btn", 3, "href"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "0.7", "fill", "currentColor"], ["aria-label", "Email", 1, "social-icon-btn", 3, "href"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["points", "2,4 12,13 22,4"]], template: function CouncilComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-light-rays", 1);
      \u0275\u0275elementStart(2, "section", 2)(3, "h1");
      \u0275\u0275text(4, "Institute Sports Council");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "2025 \u2013 2026");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "section", 4)(8, "div", 5);
      \u0275\u0275template(9, CouncilComponent_div_9_Template, 11, 8, "div", 6);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("raysOrigin", "top-center")("raysColor", "#22d3ee")("raysSpeed", 0.8)("lightSpread", 0.6)("rayLength", 3)("fadeDistance", 1.2)("saturation", 0.9)("followMouse", true)("mouseInfluence", 0.12)("pulsating", true);
      \u0275\u0275advance(8);
      \u0275\u0275property("ngForOf", ctx.members);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, LightRaysComponent], styles: ["\n\n.council-page-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #07101f;\n  min-height: 100vh;\n}\n.council-hero[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  padding: 64px 16px 32px;\n}\n.council-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #22d3ee;\n  font-size: 2.4rem;\n  font-weight: 900;\n  margin: 0 0 8px;\n}\n.council-year[_ngcontent-%COMP%] {\n  color: #7dd3fc;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0;\n}\n.council-cards-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1100px;\n  margin: 0 auto 80px;\n  padding: 0 20px;\n}\n.council-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n  justify-items: center;\n}\n.cc-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  background: #1a2744;\n  border: 1.5px solid rgba(34, 211, 238, 0.18);\n  border-radius: 20px;\n  padding: 28px 20px 24px;\n  text-align: center;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.45);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease;\n  animation: _ngcontent-%COMP%_ccCardIn 0.45s ease both;\n}\n.cc-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 60px rgba(34, 211, 238, 0.18);\n  border-color: rgba(34, 211, 238, 0.45);\n}\n@keyframes _ngcontent-%COMP%_ccCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.12s;\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.19s;\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.26s;\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.33s;\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.40s;\n}\n.cc-role[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  line-height: 1.35;\n  margin: 0 0 18px;\n  letter-spacing: 0.02em;\n}\n.cc-avatar-wrap[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2.5px solid rgba(34, 211, 238, 0.35);\n  box-shadow: 0 4px 20px rgba(34, 211, 238, 0.18);\n  background: #0e1a2e;\n}\n.cc-avatar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.cc-name[_ngcontent-%COMP%] {\n  color: #e2eeff;\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n}\n.cc-phone[_ngcontent-%COMP%] {\n  color: #22d3ee;\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin: 0 0 14px;\n  letter-spacing: 0.03em;\n}\n.cc-socials[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n}\n.social-icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(34, 211, 238, 0.4);\n  color: #22d3ee;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.social-icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 211, 238, 0.12);\n  border-color: #22d3ee;\n  transform: scale(1.12);\n}\n@media (max-width: 900px) {\n  .council-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 18px;\n  }\n}\n@media (max-width: 560px) {\n  .council-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cc-card[_ngcontent-%COMP%] {\n    max-width: 340px;\n  }\n  .council-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.7rem;\n  }\n}\n/*# sourceMappingURL=council.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CouncilComponent, [{
    type: Component,
    args: [{ selector: "app-council", standalone: true, imports: [CommonModule, LightRaysComponent], template: `<div class="council-page-wrap">\r
	<app-light-rays\r
		[raysOrigin]="'top-center'"\r
		[raysColor]="'#22d3ee'"\r
		[raysSpeed]="0.8"\r
		[lightSpread]="0.6"\r
		[rayLength]="3"\r
		[fadeDistance]="1.2"\r
		[saturation]="0.9"\r
		[followMouse]="true"\r
		[mouseInfluence]="0.12"\r
		[pulsating]="true">\r
	</app-light-rays>\r
\r
	<section class="council-hero">\r
		<h1>Institute Sports Council</h1>\r
		<p class="council-year">2025 \u2013 2026</p>\r
	</section>\r
\r
	<section class="council-cards-section" aria-label="Council Members">\r
		<div class="council-cards-grid">\r
			<div class="cc-card" *ngFor="let m of members">\r
				<p class="cc-role">{{ m.role }}</p>\r
				<div class="cc-avatar-wrap">\r
					<img class="cc-avatar"\r
					     [src]="m.photo || 'assets/Logo/logo.png'"\r
					     [alt]="m.name"\r
					     [attr.title]="m.name"\r
					     (error)="onPhotoError($event)" />\r
				</div>\r
				<h3 class="cc-name">{{ m.name }}</h3>\r
				<p class="cc-phone" *ngIf="m.phone">Call: {{ m.phone }}</p>\r
				<div class="cc-socials">\r
					<a *ngIf="m.instagram" [href]="m.instagram" target="_blank" rel="noopener"\r
					   aria-label="Instagram" class="social-icon-btn">\r
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">\r
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>\r
							<circle cx="12" cy="12" r="4"/>\r
							<circle cx="17.5" cy="6.5" r="0.7" fill="currentColor"/>\r
						</svg>\r
					</a>\r
					<a *ngIf="m.email" [href]="'mailto:' + m.email"\r
					   aria-label="Email" class="social-icon-btn">\r
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">\r
							<rect x="2" y="4" width="20" height="16" rx="2"/>\r
							<polyline points="2,4 12,13 22,4"/>\r
						</svg>\r
					</a>\r
				</div>\r
			</div>\r
		</div>\r
	</section>\r
</div>\r
`, styles: ["/* src/app/council/council.component.css */\n.council-page-wrap {\n  position: relative;\n  overflow: hidden;\n  background: #07101f;\n  min-height: 100vh;\n}\n.council-hero {\n  position: relative;\n  z-index: 1;\n  text-align: center;\n  padding: 64px 16px 32px;\n}\n.council-hero h1 {\n  color: #22d3ee;\n  font-size: 2.4rem;\n  font-weight: 900;\n  margin: 0 0 8px;\n}\n.council-year {\n  color: #7dd3fc;\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin: 0;\n}\n.council-cards-section {\n  position: relative;\n  z-index: 1;\n  max-width: 1100px;\n  margin: 0 auto 80px;\n  padding: 0 20px;\n}\n.council-cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n  justify-items: center;\n}\n.cc-card {\n  width: 100%;\n  max-width: 300px;\n  background: #1a2744;\n  border: 1.5px solid rgba(34, 211, 238, 0.18);\n  border-radius: 20px;\n  padding: 28px 20px 24px;\n  text-align: center;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.45);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease;\n  animation: ccCardIn 0.45s ease both;\n}\n.cc-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 60px rgba(34, 211, 238, 0.18);\n  border-color: rgba(34, 211, 238, 0.45);\n}\n@keyframes ccCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.cc-card:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.cc-card:nth-child(2) {\n  animation-delay: 0.12s;\n}\n.cc-card:nth-child(3) {\n  animation-delay: 0.19s;\n}\n.cc-card:nth-child(4) {\n  animation-delay: 0.26s;\n}\n.cc-card:nth-child(5) {\n  animation-delay: 0.33s;\n}\n.cc-card:nth-child(6) {\n  animation-delay: 0.40s;\n}\n.cc-role {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  line-height: 1.35;\n  margin: 0 0 18px;\n  letter-spacing: 0.02em;\n}\n.cc-avatar-wrap {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2.5px solid rgba(34, 211, 238, 0.35);\n  box-shadow: 0 4px 20px rgba(34, 211, 238, 0.18);\n  background: #0e1a2e;\n}\n.cc-avatar {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.cc-name {\n  color: #e2eeff;\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n}\n.cc-phone {\n  color: #22d3ee;\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin: 0 0 14px;\n  letter-spacing: 0.03em;\n}\n.cc-socials {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n}\n.social-icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(34, 211, 238, 0.4);\n  color: #22d3ee;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.social-icon-btn:hover {\n  background: rgba(34, 211, 238, 0.12);\n  border-color: #22d3ee;\n  transform: scale(1.12);\n}\n@media (max-width: 900px) {\n  .council-cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 18px;\n  }\n}\n@media (max-width: 560px) {\n  .council-cards-grid {\n    grid-template-columns: 1fr;\n  }\n  .cc-card {\n    max-width: 340px;\n  }\n  .council-hero h1 {\n    font-size: 1.7rem;\n  }\n}\n/*# sourceMappingURL=council.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CouncilComponent, { className: "CouncilComponent", filePath: "src/app/council/council.component.ts", lineNumber: 21 });
})();
export {
  CouncilComponent
};
//# sourceMappingURL=chunk-QJWPLIA7.js.map
