import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-QOX7GY5A.js";
import "./chunk-WDMUDEB6.js";

// src/app/events/events.component.ts
var EventsComponent = class _EventsComponent {
  static \u0275fac = function EventsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsComponent, selectors: [["app-events"]], decls: 2, vars: 0, template: function EventsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2");
      \u0275\u0275text(1, "Events Page");
      \u0275\u0275elementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsComponent, [{
    type: Component,
    args: [{
      selector: "app-events",
      standalone: true,
      template: `<h2>Events Page</h2>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsComponent, { className: "EventsComponent", filePath: "src/app/events/events.component.ts", lineNumber: 8 });
})();
export {
  EventsComponent
};
//# sourceMappingURL=chunk-XIPMX65I.js.map
