import './polyfills.server.mjs';
import {
  LightRaysComponent
} from "./chunk-HEJLCTUR.mjs";
import {
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
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-JS4AU3CQ.mjs";
import "./chunk-DTEGX4RB.mjs";

// src/app/home/home.component.ts
function HomeComponent_div_56_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 38);
  }
  if (rf & 2) {
    const news_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", news_r1.imageUrl, \u0275\u0275sanitizeUrl)("alt", "News: " + news_r1.title);
    \u0275\u0275attribute("title", news_r1.title);
  }
}
function HomeComponent_div_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275template(1, HomeComponent_div_56_img_1_Template, 1, 3, "img", 35);
    \u0275\u0275elementStart(2, "div", 36)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 37);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const news_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", news_r1.imageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(news_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(news_r1.desc);
  }
}
var HomeComponent = class _HomeComponent {
  sports = [
    { title: "Basketball", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80", desc: "Experience the thrill of basketball with world-class courts and strategic plays." },
    { title: "Football", img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", desc: "Join our football squad, featuring top-notch facilities and renowned athletes." },
    { title: "Cricket", img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80", desc: "Cricket at GECJ is all about learning, bonding, and fielding winning teams." },
    { title: "Tennis", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80", desc: "Engage in intense rallies and showcase your skills on our tennis courts." },
    { title: "Badminton", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80", desc: "Crack smashes and perfect your aim in try by world-class badminton courts." },
    { title: "Volleyball", img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=400&q=80", desc: "Work together to spike, block, and set your way to the national level." }
  ];
  newsList = [
    {
      title: "Annual Sports Event 2026 \u2013 Sporion",
      date: "9 March \u2013 12 March 2026",
      desc: "Our college is hosting its Annual Sports Event from 9th March to 12th March 2026. The four-day event will feature various indoor and outdoor sports with participation from students across different departments. The event aims to promote physical fitness, teamwork, and the spirit of healthy competition among students. \u{1F4C5} Event Dates: 9 March \u2013 12 March 2026  \u{1F4CD} Venue: Engineering College Campus"
    }
  ];
  trackBySport(index, sport) {
    return sport.title;
  }
  trackByNews(index, news) {
    return news._id || news.title;
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 57, vars: 12, consts: [[1, "hero-section", "fullscreen-hero"], [1, "hero-bg"], [1, "floating-icons"], [1, "icon-item", "icon-1"], [1, "icon-item", "icon-2"], [1, "icon-item", "icon-3"], [1, "icon-item", "icon-4"], [1, "icon-item", "icon-5"], [1, "icon-item", "icon-6"], [1, "hero-overlay"], [1, "hero-title"], [1, "brand"], [1, "hero-subtitle"], ["routerLink", "/sports", 1, "hero-btn"], [1, "screenshot-section"], [1, "screenshot-content"], [1, "screenshot-text"], [1, "screenshot-main"], [1, "screenshot-desc"], [1, "screenshot-image"], ["src", "/assets/events/Winners.jpeg", "alt", "College sports team "], [1, "legacy-section"], [1, "legacy-content"], [1, "legacy-text"], [1, "legacy-title"], [1, "legacy-desc"], [1, "legacy-image"], ["src", "/assets/events/princi.jpg", "alt", "Principal Sir"], [1, "news-section"], [3, "raysOrigin", "raysColor", "raysSpeed", "lightSpread", "rayLength", "fadeDistance", "saturation", "followMouse", "mouseInfluence", "pulsating"], [1, "section-title"], [1, "section-desc"], [1, "news-list"], ["class", "news-card", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "news-card"], ["class", "news-img", 3, "src", "alt", 4, "ngIf"], [1, "news-content"], [1, "news-date"], [1, "news-img", 3, "src", "alt"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "\u26BD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 4);
      \u0275\u0275text(6, "\u{1F3C0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 5);
      \u0275\u0275text(8, "\u{1F3CF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 6);
      \u0275\u0275text(10, "\u{1F3D0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 7);
      \u0275\u0275text(12, "\u26BE");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8);
      \u0275\u0275text(14, "\u{1F3BE}");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "div", 9)(16, "h1", 10);
      \u0275\u0275text(17, "WELCOME TO ");
      \u0275\u0275elementStart(18, "span", 11);
      \u0275\u0275text(19, "GECJ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 12);
      \u0275\u0275text(21, "Where Passion Meets Performance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "a", 13)(23, "span");
      \u0275\u0275text(24, "Explore Sports");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(25, "section", 14)(26, "div", 15)(27, "div", 16)(28, "h1", 17);
      \u0275\u0275text(29, "About Sporion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p", 18);
      \u0275\u0275text(31, " Sporion is the annual sports fest of our college that brings together passion, teamwork and competitive excellence.");
      \u0275\u0275element(32, "br");
      \u0275\u0275text(33, " The name Sporion is derived from the words Sports and Orion. Orion, the Hunter constellation, symbolizes strength and determination. Its four prominent stars represent the core values of the event: Coordination, Unity, Discipline and Spirit. The event includes a wide range of sports such as cricket, basketball, volleyball, sprint, marathon, badminton, chess, carrom, tug of war, javelin throw, long jump, kabaddi, table tennis, football, shotput and kho-kho, encouraging active student participation. Each event highlights skill, strategy and true sportsmanship. Sporion is not just about winning trophies, but about the experiences, memories and bonds formed along the way.");
      \u0275\u0275element(34, "br");
      \u0275\u0275text(35, " It instills discipline, time management, togetherness and unity, reminding us that growth and learning are the true victories of sports. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 19);
      \u0275\u0275element(37, "img", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(38, "section", 21)(39, "div", 22)(40, "div", 23)(41, "h1", 24);
      \u0275\u0275text(42, "A Legacy of Excellence and Spirit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 25);
      \u0275\u0275text(44, " For decades, College Sports Hub has built a proud legacy of athletic achievement, marked by numerous championships, record-breaking performances, and a strong sense of community. Our history is a testament to the dedication of our athletes, coaches, and loyal fans. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 25);
      \u0275\u0275text(46, " We celebrate our past while continually innovating for the future, striving to maintain our position at the forefront of collegiate athletics. Join us in continuing a tradition of competitive spirit and unwavering passion for sports. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 26);
      \u0275\u0275element(48, "img", 27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "section", 28);
      \u0275\u0275element(50, "app-light-rays", 29);
      \u0275\u0275elementStart(51, "h2", 30);
      \u0275\u0275text(52, "Latest News & Updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p", 31);
      \u0275\u0275text(54, "Stay informed with the latest happenings, results, and announcements from GECJ Sports.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 32);
      \u0275\u0275template(56, HomeComponent_div_56_Template, 9, 4, "div", 33);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(50);
      \u0275\u0275property("raysOrigin", "top-center")("raysColor", "#22d3ee")("raysSpeed", 0.8)("lightSpread", 0.6)("rayLength", 3)("fadeDistance", 1.2)("saturation", 0.9)("followMouse", true)("mouseInfluence", 0.12)("pulsating", true);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngForOf", ctx.newsList)("ngForTrackBy", ctx.trackByNews);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, LightRaysComponent], styles: ['\n\n.legacy-section[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      circle at center,\n      transparent 0%,\n      rgba(15, 23, 42, 0.8) 100%);\n  padding: 5rem 0 5rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.legacy-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3.5rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.legacy-text[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n.legacy-title[_ngcontent-%COMP%] {\n  font-size: 2.3rem;\n  font-weight: 900;\n  color: #22D3EE;\n  margin-bottom: 1.5rem;\n  line-height: 1.15;\n}\n.legacy-desc[_ngcontent-%COMP%] {\n  font-size: 1.18rem;\n  color: #d9d0d0;\n  margin-bottom: 1.2rem;\n  line-height: 1.6;\n}\n.legacy-image[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  display: flex;\n  justify-content: center;\n}\n.legacy-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 430px;\n  border-radius: 12px;\n  object-fit: cover;\n  box-shadow: 0 4px 32px rgba(33, 150, 243, 0.10);\n}\n@media (max-width: 900px) {\n  .legacy-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2rem;\n    padding: 0 0.5rem;\n  }\n  .legacy-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 98vw;\n  }\n}\n.hero-section[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    radial-gradient(\n      circle at center,\n      transparent 0%,\n      rgba(15, 23, 42, 0.8) 100%);\n  overflow: hidden;\n}\n.fullscreen-hero[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  height: 100vh;\n}\n.floating-icons[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.icon-item[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 3rem;\n  opacity: 0.45;\n  animation: _ngcontent-%COMP%_floatIcon 15s infinite ease-in-out;\n  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.9)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));\n}\n.icon-1[_ngcontent-%COMP%] {\n  top: 38%;\n  left: 12%;\n  animation-duration: 12s;\n  animation-delay: 0s;\n}\n.icon-2[_ngcontent-%COMP%] {\n  top: 12%;\n  left: 48%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n}\n.icon-3[_ngcontent-%COMP%] {\n  top: 34%;\n  right: 10%;\n  animation-duration: 14s;\n  animation-delay: 1s;\n}\n.icon-4[_ngcontent-%COMP%] {\n  bottom: 18%;\n  left: 45%;\n  animation-duration: 18s;\n  animation-delay: 3s;\n}\n.icon-5[_ngcontent-%COMP%] {\n  bottom: 28%;\n  left: 8%;\n  animation-duration: 13s;\n  animation-delay: 1.5s;\n}\n.icon-6[_ngcontent-%COMP%] {\n  bottom: 20%;\n  right: 12%;\n  animation-duration: 17s;\n  animation-delay: 2.5s;\n}\n@keyframes _ngcontent-%COMP%_floatIcon {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  25% {\n    transform: translateY(-30px) rotate(5deg);\n  }\n  50% {\n    transform: translateY(0) rotate(-5deg);\n  }\n  75% {\n    transform: translateY(-20px) rotate(3deg);\n  }\n}\n.screenshot-section[_ngcontent-%COMP%] {\n  background: #17213a;\n  padding: 5rem 0 5rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.screenshot-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3.5rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.screenshot-text[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n.screenshot-main[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 900;\n  color: #22D3EE;\n  margin-bottom: 0.7rem;\n  line-height: 1.1;\n}\n.screenshot-desc[_ngcontent-%COMP%] {\n  color: #d6dce2;\n  font-size: 1.1rem;\n  margin-bottom: 2.2rem;\n  text-align: justify;\n  line-height: 1.6;\n}\n.screenshot-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 450px;\n  height: 380px;\n  object-fit: cover;\n  border-radius: 18px;\n  box-shadow: 0 4px 32px rgba(21, 101, 192, 0.10);\n}\n@media (max-width: 900px) {\n  .screenshot-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 2.2rem;\n    text-align: center;\n  }\n  .screenshot-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 350px;\n    height: 220px;\n  }\n}\n.hero-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(/assets/college-photos/Admin.jpeg) center/cover no-repeat;\n  filter: brightness(0.7) blur(3px);\n  z-index: 1;\n}\n.hero-overlay[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: #fff;\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 1.5rem;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  text-shadow: 0 0 30px rgba(34, 211, 238, 0.5);\n  animation: fadeInUp 1s ease-out;\n}\n.hero-title[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%] {\n  display: inline-block;\n  background:\n    linear-gradient(\n      90deg,\n      #00f5ff 0%,\n      #39e0ff 30%,\n      #ffdd7a 65%,\n      #ff7b6b 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: transparent;\n  text-shadow: 0 10px 38px rgba(0, 230, 255, 0.14), 0 0 26px rgba(255, 107, 107, 0.12);\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  margin-bottom: 2rem;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 500;\n  text-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);\n}\n.hero-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #00f5ff 0%,\n      #39e0ff 35%,\n      #ffd36b 70%,\n      #ff7b6b 100%);\n  color: #fff;\n  font-size: 1.05rem;\n  font-weight: 800;\n  padding: 0.95rem 2.6rem;\n  border-radius: 40px;\n  border: none;\n  text-decoration: none;\n  box-shadow: blue;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n.hero-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  position: relative;\n  z-index: 10;\n}\n.hero-btn[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_heroMoveScaleUpInitial 0.3s forwards, _ngcontent-%COMP%_heroMoveScaleUpEnd 0.3s forwards 0.3s;\n}\n@keyframes _ngcontent-%COMP%_heroMoveScaleUpInitial {\n  to {\n    transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_heroMoveScaleUpEnd {\n  from {\n    transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.hero-btn[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  background: #27a7be;\n  width: 120%;\n  height: 0;\n  padding-bottom: 120%;\n  top: -110%;\n  left: -10%;\n  border-radius: 50%;\n  transform: translate3d(0, 68%, 0) scale3d(0, 0, 0);\n  z-index: 1;\n}\n.hero-btn[_ngcontent-%COMP%]:hover::before {\n  transform: translate3d(0, 0, 0) scale3d(1, 1, 1);\n  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);\n}\n.hero-btn[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #ffd36b 0%,\n      #fa9a5f 35%,\n      #00f5ff 70%,\n      #39e0ff 100%);\n  transform: translate3d(0, -100%, 0);\n  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);\n  z-index: 2;\n}\n.hero-btn[_ngcontent-%COMP%]:hover::after {\n  transform: translate3d(0, 0, 0);\n  transition-duration: 0.05s;\n  transition-delay: 0.4s;\n  transition-timing-function: linear;\n}\n.news-section[_ngcontent-%COMP%] {\n  background: #07101f;\n  padding: 3.5rem 0 2.5rem 0;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 2.1rem;\n  color: #22D3EE;\n  font-weight: 800;\n  margin-bottom: 0.7rem;\n  letter-spacing: 2px;\n}\n.section-desc[_ngcontent-%COMP%] {\n  color: #b0c4de;\n  font-size: 1.1rem;\n  margin-bottom: 2.2rem;\n}\n.news-list[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.news-card[_ngcontent-%COMP%] {\n  background: #07101f;\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.10);\n  display: flex;\n  align-items: flex-start;\n  padding: 1.2rem 1.2rem 1.2rem 1.2rem;\n  gap: 1.2rem;\n}\n.news-img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-right: 1rem;\n}\n.news-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #00e6ff;\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 0.2rem;\n}\n.news-date[_ngcontent-%COMP%] {\n  color: #b0c4de;\n  font-size: 0.95rem;\n  margin-bottom: 0.5rem;\n}\n.news-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1rem;\n}\n@media (max-width: 700px) {\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n  .hero-section[_ngcontent-%COMP%] {\n    height: 40vh;\n    min-height: 40vh;\n  }\n  .news-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .news-img[_ngcontent-%COMP%] {\n    margin: 0 0 1rem 0;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", imports: [CommonModule, RouterModule, LightRaysComponent], template: `\r
\r
\r
<!-- 1st Scroll: Fullscreen Welcome Hero -->\r
<section class="hero-section fullscreen-hero">\r
	<div class="hero-bg"></div>\r
  	<!-- Animated Sports Icons -->\r
    <div class="floating-icons">\r
    <div class="icon-item icon-1">\u26BD</div>\r
    <div class="icon-item icon-2">\u{1F3C0}</div>\r
    <div class="icon-item icon-3">\u{1F3CF}</div>\r
    <div class="icon-item icon-4">\u{1F3D0}</div>\r
    <div class="icon-item icon-5">\u26BE</div>\r
    <div class="icon-item icon-6">\u{1F3BE}</div>\r
  </div>\r
\r
	<div class="hero-overlay">\r
		<h1 class="hero-title">WELCOME TO <span class="brand">GECJ</span></h1>\r
		<div class="hero-subtitle">Where Passion Meets Performance</div>\r
		<a routerLink="/sports" class="hero-btn"><span>Explore Sports</span></a>\r
	</div>\r
</section>\r
\r
<!-- 2nd Scroll: Screenshot Section -->\r
<section class="screenshot-section">\r
	<div class="screenshot-content">\r
		<div class="screenshot-text">\r
			<h1 class="screenshot-main">About Sporion</h1>\r
			<p class="screenshot-desc">\r
				Sporion is the annual sports fest of our college that brings together passion, teamwork and competitive excellence.<br>\r
				The name Sporion is derived from the words Sports and Orion. \r
				Orion, the Hunter constellation, symbolizes strength and determination. Its four prominent stars represent the core values of the event: Coordination, Unity, Discipline and Spirit. \r
				The event includes a wide range of sports such as cricket, basketball, volleyball, sprint, marathon, badminton, chess, carrom, tug of war, javelin throw, long jump, kabaddi, table tennis, football, shotput and kho-kho, encouraging active student participation. \r
				Each event highlights skill, strategy and true sportsmanship. Sporion is not just about winning trophies, but about the experiences, memories and bonds formed along the way.<br>\r
				It instills discipline, time management, togetherness and unity, reminding us that growth and learning are the true victories of sports.\r
			</p>\r
		</div>\r
		<div class="screenshot-image">\r
			<img src="/assets/events/Winners.jpeg" alt="College sports team " />\r
		</div>\r
	</div>\r
</section>\r
\r
<!-- 3rd Scroll: Legacy Section -->\r
<section class="legacy-section">\r
	<div class="legacy-content">\r
		<div class="legacy-text">\r
			<h1 class="legacy-title">A Legacy of Excellence and Spirit</h1>\r
			<p class="legacy-desc">\r
				For decades, College Sports Hub has built a proud legacy of athletic achievement, marked by numerous championships, record-breaking performances, and a strong sense of community. Our history is a testament to the dedication of our athletes, coaches, and loyal fans.\r
			</p>\r
			<p class="legacy-desc">\r
				We celebrate our past while continually innovating for the future, striving to maintain our position at the forefront of collegiate athletics. Join us in continuing a tradition of competitive spirit and unwavering passion for sports.\r
			</p>\r
		</div>\r
		<div class="legacy-image">\r
			<img src="/assets/events/princi.jpg"alt="Principal Sir" />\r
		</div>\r
	</div>\r
</section>\r
\r
<!-- 3rd Scroll: Keep existing sports/news -->\r
\r
\r
<section class="news-section">\r
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
		<h2 class="section-title">Latest News & Updates</h2>\r
		<p class="section-desc">Stay informed with the latest happenings, results, and announcements from GECJ Sports.</p>\r
		<div class="news-list">\r
				<div class="news-card" *ngFor="let news of newsList; trackBy: trackByNews">\r
						<img *ngIf="news.imageUrl" [src]="news.imageUrl" [alt]="'News: ' + news.title" [attr.title]="news.title" class="news-img" />\r
						<div class="news-content">\r
								<h4>{{ news.title }}</h4>\r
								<div class="news-date">{{ news.date }}</div>\r
								<p>{{ news.desc }}</p>\r
						</div>\r
				</div>\r
		</div>\r
</section>\r
\r
`, styles: ['/* src/app/home/home.component.css */\n.legacy-section {\n  background:\n    radial-gradient(\n      circle at center,\n      transparent 0%,\n      rgba(15, 23, 42, 0.8) 100%);\n  padding: 5rem 0 5rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.legacy-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3.5rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.legacy-text {\n  max-width: 480px;\n}\n.legacy-title {\n  font-size: 2.3rem;\n  font-weight: 900;\n  color: #22D3EE;\n  margin-bottom: 1.5rem;\n  line-height: 1.15;\n}\n.legacy-desc {\n  font-size: 1.18rem;\n  color: #d9d0d0;\n  margin-bottom: 1.2rem;\n  line-height: 1.6;\n}\n.legacy-image {\n  flex: 1 1 0;\n  display: flex;\n  justify-content: center;\n}\n.legacy-image img {\n  width: 100%;\n  max-width: 430px;\n  border-radius: 12px;\n  object-fit: cover;\n  box-shadow: 0 4px 32px rgba(33, 150, 243, 0.10);\n}\n@media (max-width: 900px) {\n  .legacy-content {\n    flex-direction: column;\n    gap: 2rem;\n    padding: 0 0.5rem;\n  }\n  .legacy-image img {\n    max-width: 98vw;\n  }\n}\n.hero-section {\n  position: relative;\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    radial-gradient(\n      circle at center,\n      transparent 0%,\n      rgba(15, 23, 42, 0.8) 100%);\n  overflow: hidden;\n}\n.fullscreen-hero {\n  min-height: 100vh;\n  height: 100vh;\n}\n.floating-icons {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  pointer-events: none;\n}\n.icon-item {\n  position: absolute;\n  font-size: 3rem;\n  opacity: 0.45;\n  animation: floatIcon 15s infinite ease-in-out;\n  filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.9)) drop-shadow(0 2px 6px rgba(0, 0, 0, 0.8));\n}\n.icon-1 {\n  top: 38%;\n  left: 12%;\n  animation-duration: 12s;\n  animation-delay: 0s;\n}\n.icon-2 {\n  top: 12%;\n  left: 48%;\n  animation-duration: 16s;\n  animation-delay: 2s;\n}\n.icon-3 {\n  top: 34%;\n  right: 10%;\n  animation-duration: 14s;\n  animation-delay: 1s;\n}\n.icon-4 {\n  bottom: 18%;\n  left: 45%;\n  animation-duration: 18s;\n  animation-delay: 3s;\n}\n.icon-5 {\n  bottom: 28%;\n  left: 8%;\n  animation-duration: 13s;\n  animation-delay: 1.5s;\n}\n.icon-6 {\n  bottom: 20%;\n  right: 12%;\n  animation-duration: 17s;\n  animation-delay: 2.5s;\n}\n@keyframes floatIcon {\n  0%, 100% {\n    transform: translateY(0) rotate(0deg);\n  }\n  25% {\n    transform: translateY(-30px) rotate(5deg);\n  }\n  50% {\n    transform: translateY(0) rotate(-5deg);\n  }\n  75% {\n    transform: translateY(-20px) rotate(3deg);\n  }\n}\n.screenshot-section {\n  background: #17213a;\n  padding: 5rem 0 5rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.screenshot-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 3.5rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.screenshot-text {\n  max-width: 480px;\n}\n.screenshot-main {\n  font-size: 2.8rem;\n  font-weight: 900;\n  color: #22D3EE;\n  margin-bottom: 0.7rem;\n  line-height: 1.1;\n}\n.screenshot-desc {\n  color: #d6dce2;\n  font-size: 1.1rem;\n  margin-bottom: 2.2rem;\n  text-align: justify;\n  line-height: 1.6;\n}\n.screenshot-image img {\n  width: 450px;\n  height: 380px;\n  object-fit: cover;\n  border-radius: 18px;\n  box-shadow: 0 4px 32px rgba(21, 101, 192, 0.10);\n}\n@media (max-width: 900px) {\n  .screenshot-content {\n    flex-direction: column;\n    gap: 2.2rem;\n    text-align: center;\n  }\n  .screenshot-image img {\n    width: 100%;\n    max-width: 350px;\n    height: 220px;\n  }\n}\n.hero-bg {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: url(/assets/college-photos/Admin.jpeg) center/cover no-repeat;\n  filter: brightness(0.7) blur(3px);\n  z-index: 1;\n}\n.hero-overlay {\n  position: relative;\n  z-index: 2;\n  text-align: center;\n  color: #fff;\n}\n.hero-title {\n  font-size: 5rem;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 1.5rem;\n  text-transform: uppercase;\n  letter-spacing: 4px;\n  text-shadow: 0 0 30px rgba(34, 211, 238, 0.5);\n  animation: fadeInUp 1s ease-out;\n}\n.hero-title .brand {\n  display: inline-block;\n  background:\n    linear-gradient(\n      90deg,\n      #00f5ff 0%,\n      #39e0ff 30%,\n      #ffdd7a 65%,\n      #ff7b6b 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: transparent;\n  text-shadow: 0 10px 38px rgba(0, 230, 255, 0.14), 0 0 26px rgba(255, 107, 107, 0.12);\n}\n.hero-subtitle {\n  font-size: 1.35rem;\n  margin-bottom: 2rem;\n  color: rgba(255, 255, 255, 0.9);\n  font-weight: 500;\n  text-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);\n}\n.hero-btn {\n  background:\n    linear-gradient(\n      90deg,\n      #00f5ff 0%,\n      #39e0ff 35%,\n      #ffd36b 70%,\n      #ff7b6b 100%);\n  color: #fff;\n  font-size: 1.05rem;\n  font-weight: 800;\n  padding: 0.95rem 2.6rem;\n  border-radius: 40px;\n  border: none;\n  text-decoration: none;\n  box-shadow: blue;\n  overflow: hidden;\n  position: relative;\n  display: inline-block;\n}\n.hero-btn span {\n  display: block;\n  position: relative;\n  z-index: 10;\n}\n.hero-btn:hover span {\n  animation: heroMoveScaleUpInitial 0.3s forwards, heroMoveScaleUpEnd 0.3s forwards 0.3s;\n}\n@keyframes heroMoveScaleUpInitial {\n  to {\n    transform: translate3d(0, -105%, 0) scale3d(1, 2, 1);\n    opacity: 0;\n  }\n}\n@keyframes heroMoveScaleUpEnd {\n  from {\n    transform: translate3d(0, 100%, 0) scale3d(1, 2, 1);\n    opacity: 0;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n    opacity: 1;\n  }\n}\n.hero-btn::before {\n  content: "";\n  position: absolute;\n  background: #27a7be;\n  width: 120%;\n  height: 0;\n  padding-bottom: 120%;\n  top: -110%;\n  left: -10%;\n  border-radius: 50%;\n  transform: translate3d(0, 68%, 0) scale3d(0, 0, 0);\n  z-index: 1;\n}\n.hero-btn:hover::before {\n  transform: translate3d(0, 0, 0) scale3d(1, 1, 1);\n  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);\n}\n.hero-btn::after {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #ffd36b 0%,\n      #fa9a5f 35%,\n      #00f5ff 70%,\n      #39e0ff 100%);\n  transform: translate3d(0, -100%, 0);\n  transition: transform 0.4s cubic-bezier(0.1, 0, 0.3, 1);\n  z-index: 2;\n}\n.hero-btn:hover::after {\n  transform: translate3d(0, 0, 0);\n  transition-duration: 0.05s;\n  transition-delay: 0.4s;\n  transition-timing-function: linear;\n}\n.news-section {\n  background: #07101f;\n  padding: 3.5rem 0 2.5rem 0;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.section-title {\n  font-size: 2.1rem;\n  color: #22D3EE;\n  font-weight: 800;\n  margin-bottom: 0.7rem;\n  letter-spacing: 2px;\n}\n.section-desc {\n  color: #b0c4de;\n  font-size: 1.1rem;\n  margin-bottom: 2.2rem;\n}\n.news-list {\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.news-card {\n  background: #07101f;\n  border-radius: 14px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.10);\n  display: flex;\n  align-items: flex-start;\n  padding: 1.2rem 1.2rem 1.2rem 1.2rem;\n  gap: 1.2rem;\n}\n.news-img {\n  width: 80px;\n  height: 80px;\n  object-fit: cover;\n  border-radius: 10px;\n  margin-right: 1rem;\n}\n.news-content h4 {\n  color: #00e6ff;\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin-bottom: 0.2rem;\n}\n.news-date {\n  color: #b0c4de;\n  font-size: 0.95rem;\n  margin-bottom: 0.5rem;\n}\n.news-content p {\n  color: #fff;\n  font-size: 1rem;\n}\n@media (max-width: 700px) {\n  .hero-title {\n    font-size: 2.1rem;\n  }\n  .hero-section {\n    height: 40vh;\n    min-height: 40vh;\n  }\n  .news-card {\n    flex-direction: column;\n    align-items: center;\n  }\n  .news-img {\n    margin: 0 0 1rem 0;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/home/home.component.ts", lineNumber: 13 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-EUXCLMF6.mjs.map
