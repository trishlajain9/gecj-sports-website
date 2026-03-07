import './polyfills.server.mjs';
import {
  LightRaysComponent
} from "./chunk-HEJLCTUR.mjs";
import {
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
} from "./chunk-JS4AU3CQ.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/contact/contact.component.ts
function ContactComponent_section_12_div_2_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Call: ", m_r3.phone, "");
  }
}
function ContactComponent_section_12_div_2_a_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "rect", 35)(3, "circle", 36)(4, "circle", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", m_r3.instagram, \u0275\u0275sanitizeUrl);
  }
}
function ContactComponent_section_12_div_2_a_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 38);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 34);
    \u0275\u0275element(2, "rect", 39)(3, "polyline", 40);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", "mailto:" + m_r3.email, \u0275\u0275sanitizeUrl);
  }
}
function ContactComponent_section_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "p", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 25)(4, "img", 26);
    \u0275\u0275listener("error", function ContactComponent_section_12_div_2_Template_img_error_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPhotoError($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3", 27);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ContactComponent_section_12_div_2_p_7_Template, 2, 1, "p", 28);
    \u0275\u0275elementStart(8, "div", 29);
    \u0275\u0275template(9, ContactComponent_section_12_div_2_a_9_Template, 5, 1, "a", 30)(10, ContactComponent_section_12_div_2_a_10_Template, 4, 1, "a", 31);
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
function ContactComponent_section_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 20)(1, "div", 21);
    \u0275\u0275template(2, ContactComponent_section_12_div_2_Template, 11, 8, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.councilMembers);
  }
}
var ContactComponent = class _ContactComponent {
  showCouncil = false;
  councilMembers = [
    {
      role: "Website Owner ",
      name: "Rajveer Verma",
      phone: "8302186985",
      instagram: "https://www.instagram.com/rajveer____.01",
      email: "rajveerverma99830@gmail.com",
      photo: "assets/council-general-secretary.jpg"
    },
    {
      role: "Organiser",
      name: "Mohd. Kaif khan",
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
  toggleCouncil() {
    this.showCouncil = !this.showCouncil;
  }
  onPhotoError(ev) {
    const img = ev.target;
    img.src = "assets/Logo/logo.png";
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 63, vars: 15, consts: [[1, "contact-page-wrap"], [3, "raysOrigin", "raysColor", "raysSpeed", "lightSpread", "rayLength", "fadeDistance", "saturation", "followMouse", "mouseInfluence", "pulsating"], [1, "contact-hero"], ["aria-label", "Discover the Council", 1, "cta-banner"], ["role", "button", "tabindex", "0", "aria-label", "Discover the council", 1, "cta-flip", 3, "click", "keydown.enter"], [1, "cta-flip-inner"], [1, "cta-front"], [1, "cta-back"], ["class", "council-cards-section", "aria-label", "Council Members", 4, "ngIf"], [1, "info-card"], [1, "contact-info"], [1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], ["aria-hidden", "true", 1, "icon"], [1, "flip-hint"], [1, "flip-card-back"], ["href", "mailto:abhishek11_soni@yahoo.co.in", "aria-label", "Email us"], ["href", "tel:+919252519997", "aria-label", "Call us"], ["href", "https://www.google.com/maps/search/?api=1&query=Chandlai%2C%20Sunel%20Rd%2C%20Tehsil%2C%20Jhalrapatan%2C%20Rajasthan%20326023", "target", "_blank", "rel", "noopener", "aria-label", "Open address in Google Maps"], ["aria-label", "Council Members", 1, "council-cards-section"], [1, "council-cards-grid"], ["class", "cc-card", 4, "ngFor", "ngForOf"], [1, "cc-card"], [1, "council-card-role"], [1, "council-card-avatar-wrap"], [1, "council-card-avatar", 3, "error", "src", "alt"], [1, "council-card-name"], ["class", "council-card-phone", 4, "ngIf"], [1, "council-card-socials"], ["target", "_blank", "rel", "noopener", "aria-label", "Instagram", "class", "social-icon-btn", 3, "href", 4, "ngIf"], ["target", "_blank", "rel", "noopener", "aria-label", "Email", "class", "social-icon-btn", 3, "href", 4, "ngIf"], [1, "council-card-phone"], ["target", "_blank", "rel", "noopener", "aria-label", "Instagram", 1, "social-icon-btn", 3, "href"], ["width", "22", "height", "22", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["x", "2", "y", "2", "width", "20", "height", "20", "rx", "5", "ry", "5"], ["cx", "12", "cy", "12", "r", "4"], ["cx", "17.5", "cy", "6.5", "r", "0.7", "fill", "currentColor"], ["target", "_blank", "rel", "noopener", "aria-label", "Email", 1, "social-icon-btn", 3, "href"], ["x", "2", "y", "4", "width", "20", "height", "16", "rx", "2"], ["points", "2,4 12,13 22,4"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-light-rays", 1);
      \u0275\u0275elementStart(2, "section", 2)(3, "h1");
      \u0275\u0275text(4, "Get in Touch with College Sports Hub");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "section", 3)(6, "div", 4);
      \u0275\u0275listener("click", function ContactComponent_Template_div_click_6_listener() {
        return ctx.toggleCouncil();
      })("keydown.enter", function ContactComponent_Template_div_keydown_enter_6_listener() {
        return ctx.toggleCouncil();
      });
      \u0275\u0275elementStart(7, "div", 5)(8, "div", 6);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(12, ContactComponent_section_12_Template, 3, 1, "section", 8);
      \u0275\u0275elementStart(13, "section", 9)(14, "div", 10)(15, "div", 11)(16, "div", 12)(17, "div", 13)(18, "div", 14);
      \u0275\u0275text(19, "\u2709\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h3");
      \u0275\u0275text(21, "Email Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "span", 15);
      \u0275\u0275text(23, "Hover to see details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 16)(25, "div", 14);
      \u0275\u0275text(26, "\u2709\uFE0F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "h3");
      \u0275\u0275text(28, "Email Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 17);
      \u0275\u0275text(30, "abhishek11_soni@yahoo.co.in");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(31, "div", 11)(32, "div", 12)(33, "div", 13)(34, "div", 14);
      \u0275\u0275text(35, "\u{1F4DE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "h3");
      \u0275\u0275text(37, "Call Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span", 15);
      \u0275\u0275text(39, "Hover to see details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 16)(41, "div", 14);
      \u0275\u0275text(42, "\u{1F4DE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "h3");
      \u0275\u0275text(44, "Call Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "a", 18);
      \u0275\u0275text(46, "+91 9252519997");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(47, "div", 11)(48, "div", 12)(49, "div", 13)(50, "div", 14);
      \u0275\u0275text(51, "\u{1F4CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "h3");
      \u0275\u0275text(53, "Visit Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 15);
      \u0275\u0275text(55, "Hover to see details");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "div", 16)(57, "div", 14);
      \u0275\u0275text(58, "\u{1F4CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "h3");
      \u0275\u0275text(60, "Visit Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "a", 19);
      \u0275\u0275text(62, " Chandlai, Sunel Rd, Tehsil, Jhalrapatan, Rajasthan 326023 ");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("raysOrigin", "top-center")("raysColor", "#22d3ee")("raysSpeed", 0.8)("lightSpread", 0.6)("rayLength", 3)("fadeDistance", 1.2)("saturation", 0.9)("followMouse", true)("mouseInfluence", 0.12)("pulsating", true);
      \u0275\u0275advance(5);
      \u0275\u0275classProp("open", ctx.showCouncil);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.showCouncil ? "CLOSE THE COUNCIL" : "DISCOVER THE COUNCIL");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.showCouncil ? "Click to Close" : "Meet the Sports Council \u2192");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showCouncil);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, LightRaysComponent], styles: ["\n\n[_ngcontent-%COMP%]:root {\n  --primary: #00e6ff;\n}\n.contact-page-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #07101f;\n  min-height: 100vh;\n}\n.contact-hero[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  padding: 64px 16px 0;\n  text-align: center;\n}\n.contact-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #22D3EE;\n  font-size: 2rem;\n  font-weight: 800;\n}\n.info-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1100px;\n  margin: 12px auto;\n  padding: 0 16px;\n}\n.info-card[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2.5rem 2rem;\n  justify-items: center;\n}\n.flip-card[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 240px;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n.flip-card-front[_ngcontent-%COMP%], \n.flip-card-back[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.8rem;\n  text-align: center;\n  gap: 0.4rem;\n}\n.flip-card-front[_ngcontent-%COMP%] {\n  background: #17213a;\n  border: 1.5px solid rgba(34, 211, 238, 0.15);\n  box-shadow: 0 4px 32px rgba(0, 188, 212, 0.13);\n}\n.flip-card-front[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 2.4rem;\n}\n.flip-card-front[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.4rem 0 0.2rem;\n  color: #d6f6fa;\n  font-size: 1.35rem;\n  font-weight: 800;\n}\n.flip-hint[_ngcontent-%COMP%] {\n  color: #22D3EE;\n  font-size: 0.88rem;\n  opacity: 0.7;\n  letter-spacing: 0.04em;\n}\n.flip-card-back[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0e3a5c 0%,\n      #17213a 60%,\n      #0a2540 100%);\n  border: 1.5px solid rgba(34, 211, 238, 0.35);\n  box-shadow: 0 8px 40px rgba(0, 230, 255, 0.22);\n  transform: rotateY(180deg);\n}\n.flip-card-back[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.flip-card-back[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0.5rem;\n  color: #22D3EE;\n  font-size: 1.25rem;\n  font-weight: 800;\n}\n.flip-card-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #7dd3fc;\n  text-decoration: underline;\n  font-size: 1rem;\n  line-height: 1.5;\n  word-break: break-word;\n}\n.flip-card-back[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #bae6fd;\n}\n@media (max-width: 900px) {\n  .info-card[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .flip-card[_ngcontent-%COMP%] {\n    width: min(320px, 90vw);\n    height: 220px;\n  }\n}\n.cta-banner[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 28px auto 48px;\n  padding: 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(13, 27, 42, 0.9),\n      rgba(27, 38, 59, 0.9));\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25), inset 0 -20px 60px rgba(0, 0, 0, 0.15);\n  display: flex;\n  justify-content: center;\n}\n.cta-banner[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 28px auto 48px;\n  padding: 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(13, 27, 42, 0.9),\n      rgba(27, 38, 59, 0.9));\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25), inset 0 -20px 60px rgba(0, 0, 0, 0.15);\n  display: flex;\n  justify-content: center;\n}\n.cta-flip[_ngcontent-%COMP%] {\n  width: 260px;\n  height: 52px;\n  perspective: 800px;\n  cursor: pointer;\n}\n.cta-flip-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n.cta-flip[_ngcontent-%COMP%]:hover   .cta-flip-inner[_ngcontent-%COMP%] {\n  transform: rotateX(180deg);\n}\n.cta-front[_ngcontent-%COMP%], \n.cta-back[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 12px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  letter-spacing: 0.8px;\n  font-size: 0.95rem;\n  color: #fff;\n}\n.cta-front[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #8b5cf6);\n  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.25);\n}\n.cta-back[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #ec4899);\n  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);\n  transform: rotateX(180deg);\n}\n.council-modal-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 10, 20, 0.65);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n}\n.council-modal[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(92vw, 760px);\n  background:\n    linear-gradient(\n      180deg,\n      #1c273d,\n      #2a3a54);\n  color: #e6f0ff;\n  border-radius: 20px;\n  padding: 24px 20px 28px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  background: transparent;\n  border: none;\n  color: #9fb7d3;\n  font-size: 20px;\n  cursor: pointer;\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  color: #cfe4ff;\n}\n.council-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 10px;\n}\n.council-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.1rem;\n  font-weight: 900;\n  color: #98e1ff;\n}\n.council-year[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #8ed3ff;\n  font-weight: 700;\n}\n.council-card[_ngcontent-%COMP%] {\n  margin: 14px auto 0;\n  max-width: 520px;\n  background: #2a3a54;\n  border-radius: 22px;\n  padding: 24px 18px;\n  box-shadow: 0 12px 45px rgba(0, 0, 0, 0.35), inset 0 -20px 50px rgba(0, 0, 0, 0.12);\n  text-align: center;\n}\n.council-role[_ngcontent-%COMP%] {\n  color: #ef5350;\n  font-weight: 800;\n  margin: 0 0 14px;\n  font-size: 1.4rem;\n}\n.avatar-wrap[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 180px;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n  padding: 6px;\n  background:\n    radial-gradient(\n      circle at 50% 40%,\n      rgba(255, 80, 80, 0.9),\n      rgba(255, 80, 80, 0.2));\n  box-shadow: 0 8px 30px rgba(255, 80, 80, 0.25);\n}\n.avatar-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n}\n.council-name[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 1.2rem;\n  color: #dbeafe;\n  margin-top: 6px;\n}\n.council-call[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: #d1e2f7;\n  font-weight: 700;\n}\n.council-call[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #a5d8ff;\n  text-decoration: none;\n}\n.council-call[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.socials[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n  margin-top: 14px;\n}\n.icon-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #cbe3ff;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition: all .2s ease;\n}\n.icon-btn[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);\n}\n.icon-btn.ig[_ngcontent-%COMP%] {\n  color: #e879f9;\n}\n.icon-btn.li[_ngcontent-%COMP%] {\n  color: #60a5fa;\n}\n.icon-btn.mail[_ngcontent-%COMP%] {\n  color: #93c5fd;\n}\n.icon-btn.wa[_ngcontent-%COMP%] {\n  color: #34d399;\n}\n.council-cards-section[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto 60px;\n  padding: 0 20px;\n}\n.council-cards-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n  justify-items: center;\n}\n.cc-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 300px;\n  background: #1a2744;\n  border: 1.5px solid rgba(34, 211, 238, 0.18);\n  border-radius: 20px;\n  padding: 28px 20px 24px;\n  text-align: center;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.45);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease;\n  animation: _ngcontent-%COMP%_ccCardIn 0.45s ease both;\n}\n.cc-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 60px rgba(34, 211, 238, 0.18);\n  border-color: rgba(34, 211, 238, 0.45);\n}\n@keyframes _ngcontent-%COMP%_ccCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.12s;\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.19s;\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.26s;\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: 0.33s;\n}\n.cc-card[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: 0.40s;\n}\n.council-card-role[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  line-height: 1.35;\n  margin: 0 0 18px;\n  letter-spacing: 0.02em;\n}\n.council-card-avatar-wrap[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2.5px solid rgba(34, 211, 238, 0.35);\n  box-shadow: 0 4px 20px rgba(34, 211, 238, 0.18);\n  background: #0e1a2e;\n}\n.council-card-avatar[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.council-card-name[_ngcontent-%COMP%] {\n  color: #e2eeff;\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n}\n.council-card-phone[_ngcontent-%COMP%] {\n  color: #22d3ee;\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin: 0 0 14px;\n  letter-spacing: 0.03em;\n}\n.council-card-socials[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n}\n.social-icon-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(34, 211, 238, 0.4);\n  color: #22d3ee;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.social-icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(34, 211, 238, 0.12);\n  border-color: #22d3ee;\n  transform: scale(1.12);\n}\n@media (max-width: 900px) {\n  .council-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 18px;\n  }\n}\n@media (max-width: 560px) {\n  .council-cards-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cc-card[_ngcontent-%COMP%] {\n    max-width: 340px;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{ selector: "app-contact", standalone: true, imports: [CommonModule, RouterModule, LightRaysComponent], template: `<div class="contact-page-wrap">\r
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
<section class="contact-hero">\r
	<h1>Get in Touch with College Sports Hub</h1>\r
</section>\r
\r
<section class="cta-banner" aria-label="Discover the Council">\r
	<div class="cta-flip" (click)="toggleCouncil()" role="button" tabindex="0"\r
	     (keydown.enter)="toggleCouncil()" [class.open]="showCouncil"\r
	     aria-label="Discover the council">\r
		<div class="cta-flip-inner">\r
			<div class="cta-front">{{ showCouncil ? 'CLOSE THE COUNCIL' : 'DISCOVER THE COUNCIL' }}</div>\r
			<div class="cta-back">{{ showCouncil ? 'Click to Close' : 'Meet the Sports Council \u2192' }}</div>\r
		</div>\r
	</div>\r
</section>\r
\r
<section class="council-cards-section" *ngIf="showCouncil" aria-label="Council Members">\r
	<div class="council-cards-grid">\r
		<div class="cc-card" *ngFor="let m of councilMembers">\r
			<p class="council-card-role">{{ m.role }}</p>\r
			<div class="council-card-avatar-wrap">\r
				<img class="council-card-avatar"\r
				     [src]="m.photo || 'assets/Logo/logo.png'"\r
				     [alt]="m.name"\r
				     [attr.title]="m.name"\r
				     (error)="onPhotoError($event)" />\r
			</div>\r
			<h3 class="council-card-name">{{ m.name }}</h3>\r
			<p class="council-card-phone" *ngIf="m.phone">Call: {{ m.phone }}</p>\r
			<div class="council-card-socials">\r
				<a *ngIf="m.instagram" [href]="m.instagram" target="_blank" rel="noopener"\r
				   aria-label="Instagram" class="social-icon-btn">\r
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">\r
						<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>\r
						<circle cx="12" cy="12" r="4"/>\r
						<circle cx="17.5" cy="6.5" r="0.7" fill="currentColor"/>\r
					</svg>\r
				</a>\r
				<a *ngIf="m.email" [href]="'mailto:' + m.email" target="_blank" rel="noopener"\r
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
<section class="info-card">\r
	<div class="contact-info">\r
\r
		<!-- Email Us -->\r
		<div class="flip-card">\r
			<div class="flip-card-inner">\r
				<div class="flip-card-front">\r
					<div class="icon" aria-hidden="true">\u2709\uFE0F</div>\r
					<h3>Email Us</h3>\r
					<span class="flip-hint">Hover to see details</span>\r
				</div>\r
				<div class="flip-card-back">\r
					<div class="icon" aria-hidden="true">\u2709\uFE0F</div>\r
					<h3>Email Us</h3>\r
					<a href="mailto:abhishek11_soni&#64;yahoo.co.in" aria-label="Email us">abhishek11_soni&#64;yahoo.co.in</a>\r
				</div>\r
			</div>\r
		</div>\r
\r
		<!-- Call Us -->\r
		<div class="flip-card">\r
			<div class="flip-card-inner">\r
				<div class="flip-card-front">\r
					<div class="icon" aria-hidden="true">\u{1F4DE}</div>\r
					<h3>Call Us</h3>\r
					<span class="flip-hint">Hover to see details</span>\r
				</div>\r
				<div class="flip-card-back">\r
					<div class="icon" aria-hidden="true">\u{1F4DE}</div>\r
					<h3>Call Us</h3>\r
					<a href="tel:+919252519997" aria-label="Call us">+91 9252519997</a>\r
				</div>\r
			</div>\r
		</div>\r
\r
		<!-- Visit Us -->\r
		<div class="flip-card">\r
			<div class="flip-card-inner">\r
				<div class="flip-card-front">\r
					<div class="icon" aria-hidden="true">\u{1F4CD}</div>\r
					<h3>Visit Us</h3>\r
					<span class="flip-hint">Hover to see details</span>\r
				</div>\r
				<div class="flip-card-back">\r
					<div class="icon" aria-hidden="true">\u{1F4CD}</div>\r
					<h3>Visit Us</h3>\r
					<a href="https://www.google.com/maps/search/?api=1&query=Chandlai%2C%20Sunel%20Rd%2C%20Tehsil%2C%20Jhalrapatan%2C%20Rajasthan%20326023"\r
					   target="_blank" rel="noopener" aria-label="Open address in Google Maps">\r
						Chandlai, Sunel Rd, Tehsil, Jhalrapatan, Rajasthan 326023\r
					</a>\r
				</div>\r
			</div>\r
		</div>\r
\r
	</div>\r
</section>\r
</div>\r
`, styles: ["/* src/app/contact/contact.component.css */\n:root {\n  --primary: #00e6ff;\n}\n.contact-page-wrap {\n  position: relative;\n  overflow: hidden;\n  background: #07101f;\n  min-height: 100vh;\n}\n.contact-hero {\n  position: relative;\n  z-index: 1;\n  padding: 64px 16px 0;\n  text-align: center;\n}\n.contact-hero h1 {\n  color: #22D3EE;\n  font-size: 2rem;\n  font-weight: 800;\n}\n.info-card {\n  position: relative;\n  z-index: 1;\n  max-width: 1100px;\n  margin: 12px auto;\n  padding: 0 16px;\n}\n.info-card .contact-info {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  gap: 2.5rem 2rem;\n  justify-items: center;\n}\n.flip-card {\n  width: 320px;\n  height: 240px;\n  perspective: 1000px;\n  cursor: pointer;\n}\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n.flip-card-front,\n.flip-card-back {\n  position: absolute;\n  inset: 0;\n  border-radius: 22px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem 1.8rem;\n  text-align: center;\n  gap: 0.4rem;\n}\n.flip-card-front {\n  background: #17213a;\n  border: 1.5px solid rgba(34, 211, 238, 0.15);\n  box-shadow: 0 4px 32px rgba(0, 188, 212, 0.13);\n}\n.flip-card-front .icon {\n  font-size: 2.4rem;\n}\n.flip-card-front h3 {\n  margin: 0.4rem 0 0.2rem;\n  color: #d6f6fa;\n  font-size: 1.35rem;\n  font-weight: 800;\n}\n.flip-hint {\n  color: #22D3EE;\n  font-size: 0.88rem;\n  opacity: 0.7;\n  letter-spacing: 0.04em;\n}\n.flip-card-back {\n  background:\n    linear-gradient(\n      135deg,\n      #0e3a5c 0%,\n      #17213a 60%,\n      #0a2540 100%);\n  border: 1.5px solid rgba(34, 211, 238, 0.35);\n  box-shadow: 0 8px 40px rgba(0, 230, 255, 0.22);\n  transform: rotateY(180deg);\n}\n.flip-card-back .icon {\n  font-size: 2rem;\n}\n.flip-card-back h3 {\n  margin: 0.3rem 0 0.5rem;\n  color: #22D3EE;\n  font-size: 1.25rem;\n  font-weight: 800;\n}\n.flip-card-back a {\n  color: #7dd3fc;\n  text-decoration: underline;\n  font-size: 1rem;\n  line-height: 1.5;\n  word-break: break-word;\n}\n.flip-card-back a:hover {\n  color: #bae6fd;\n}\n@media (max-width: 900px) {\n  .info-card .contact-info {\n    grid-template-columns: 1fr;\n    gap: 1.5rem;\n  }\n  .flip-card {\n    width: min(320px, 90vw);\n    height: 220px;\n  }\n}\n.cta-banner {\n  max-width: 1100px;\n  margin: 28px auto 48px;\n  padding: 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(13, 27, 42, 0.9),\n      rgba(27, 38, 59, 0.9));\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25), inset 0 -20px 60px rgba(0, 0, 0, 0.15);\n  display: flex;\n  justify-content: center;\n}\n.cta-banner {\n  max-width: 1100px;\n  margin: 28px auto 48px;\n  padding: 18px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(13, 27, 42, 0.9),\n      rgba(27, 38, 59, 0.9));\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25), inset 0 -20px 60px rgba(0, 0, 0, 0.15);\n  display: flex;\n  justify-content: center;\n}\n.cta-flip {\n  width: 260px;\n  height: 52px;\n  perspective: 800px;\n  cursor: pointer;\n}\n.cta-flip-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  transform-style: preserve-3d;\n  transition: transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1);\n}\n.cta-flip:hover .cta-flip-inner {\n  transform: rotateX(180deg);\n}\n.cta-front,\n.cta-back {\n  position: absolute;\n  inset: 0;\n  border-radius: 12px;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  letter-spacing: 0.8px;\n  font-size: 0.95rem;\n  color: #fff;\n}\n.cta-front {\n  background:\n    linear-gradient(\n      90deg,\n      #3b82f6,\n      #8b5cf6);\n  box-shadow: 0 10px 30px rgba(59, 130, 246, 0.25);\n}\n.cta-back {\n  background:\n    linear-gradient(\n      90deg,\n      #8b5cf6,\n      #ec4899);\n  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);\n  transform: rotateX(180deg);\n}\n.council-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 10, 20, 0.65);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n}\n.council-modal {\n  position: relative;\n  width: min(92vw, 760px);\n  background:\n    linear-gradient(\n      180deg,\n      #1c273d,\n      #2a3a54);\n  color: #e6f0ff;\n  border-radius: 20px;\n  padding: 24px 20px 28px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.45);\n}\n.close-btn {\n  position: absolute;\n  top: 10px;\n  right: 12px;\n  background: transparent;\n  border: none;\n  color: #9fb7d3;\n  font-size: 20px;\n  cursor: pointer;\n}\n.close-btn:hover {\n  color: #cfe4ff;\n}\n.council-header {\n  text-align: center;\n  margin-bottom: 10px;\n}\n.council-header h2 {\n  margin: 0;\n  font-size: 2.1rem;\n  font-weight: 900;\n  color: #98e1ff;\n}\n.council-year {\n  margin: 8px 0 0;\n  color: #8ed3ff;\n  font-weight: 700;\n}\n.council-card {\n  margin: 14px auto 0;\n  max-width: 520px;\n  background: #2a3a54;\n  border-radius: 22px;\n  padding: 24px 18px;\n  box-shadow: 0 12px 45px rgba(0, 0, 0, 0.35), inset 0 -20px 50px rgba(0, 0, 0, 0.12);\n  text-align: center;\n}\n.council-role {\n  color: #ef5350;\n  font-weight: 800;\n  margin: 0 0 14px;\n  font-size: 1.4rem;\n}\n.avatar-wrap {\n  width: 180px;\n  height: 180px;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n  padding: 6px;\n  background:\n    radial-gradient(\n      circle at 50% 40%,\n      rgba(255, 80, 80, 0.9),\n      rgba(255, 80, 80, 0.2));\n  box-shadow: 0 8px 30px rgba(255, 80, 80, 0.25);\n}\n.avatar-wrap img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 50%;\n  display: block;\n}\n.council-name {\n  font-weight: 900;\n  font-size: 1.2rem;\n  color: #dbeafe;\n  margin-top: 6px;\n}\n.council-call {\n  margin-top: 6px;\n  color: #d1e2f7;\n  font-weight: 700;\n}\n.council-call a {\n  color: #a5d8ff;\n  text-decoration: none;\n}\n.council-call a:hover {\n  text-decoration: underline;\n}\n.socials {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n  margin-top: 14px;\n}\n.icon-btn {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #cbe3ff;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.08);\n  transition: all .2s ease;\n}\n.icon-btn:hover {\n  color: #fff;\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);\n}\n.icon-btn.ig {\n  color: #e879f9;\n}\n.icon-btn.li {\n  color: #60a5fa;\n}\n.icon-btn.mail {\n  color: #93c5fd;\n}\n.icon-btn.wa {\n  color: #34d399;\n}\n.council-cards-section {\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto 60px;\n  padding: 0 20px;\n}\n.council-cards-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 28px;\n  justify-items: center;\n}\n.cc-card {\n  width: 100%;\n  max-width: 300px;\n  background: #1a2744;\n  border: 1.5px solid rgba(34, 211, 238, 0.18);\n  border-radius: 20px;\n  padding: 28px 20px 24px;\n  text-align: center;\n  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.45);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease,\n    border-color 0.3s ease;\n  animation: ccCardIn 0.45s ease both;\n}\n.cc-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 16px 60px rgba(34, 211, 238, 0.18);\n  border-color: rgba(34, 211, 238, 0.45);\n}\n@keyframes ccCardIn {\n  from {\n    opacity: 0;\n    transform: translateY(24px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.cc-card:nth-child(1) {\n  animation-delay: 0.05s;\n}\n.cc-card:nth-child(2) {\n  animation-delay: 0.12s;\n}\n.cc-card:nth-child(3) {\n  animation-delay: 0.19s;\n}\n.cc-card:nth-child(4) {\n  animation-delay: 0.26s;\n}\n.cc-card:nth-child(5) {\n  animation-delay: 0.33s;\n}\n.cc-card:nth-child(6) {\n  animation-delay: 0.40s;\n}\n.council-card-role {\n  color: #ffffff;\n  font-size: 1rem;\n  font-weight: 800;\n  line-height: 1.35;\n  margin: 0 0 18px;\n  letter-spacing: 0.02em;\n}\n.council-card-avatar-wrap {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 2.5px solid rgba(34, 211, 238, 0.35);\n  box-shadow: 0 4px 20px rgba(34, 211, 238, 0.18);\n  background: #0e1a2e;\n}\n.council-card-avatar {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.council-card-name {\n  color: #e2eeff;\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0 0 6px;\n}\n.council-card-phone {\n  color: #22d3ee;\n  font-size: 0.9rem;\n  font-weight: 600;\n  margin: 0 0 14px;\n  letter-spacing: 0.03em;\n}\n.council-card-socials {\n  display: flex;\n  gap: 14px;\n  justify-content: center;\n}\n.social-icon-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: 1.5px solid rgba(34, 211, 238, 0.4);\n  color: #22d3ee;\n  transition: all 0.2s ease;\n  text-decoration: none;\n}\n.social-icon-btn:hover {\n  background: rgba(34, 211, 238, 0.12);\n  border-color: #22d3ee;\n  transform: scale(1.12);\n}\n@media (max-width: 900px) {\n  .council-cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 18px;\n  }\n}\n@media (max-width: 560px) {\n  .council-cards-grid {\n    grid-template-columns: 1fr;\n  }\n  .cc-card {\n    max-width: 340px;\n  }\n}\n/*# sourceMappingURL=contact.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/contact/contact.component.ts", lineNumber: 13 });
})();
export {
  ContactComponent
};
//# sourceMappingURL=chunk-C67L3N4O.mjs.map
