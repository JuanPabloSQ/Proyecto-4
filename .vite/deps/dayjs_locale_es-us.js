import {
  require_dayjs_min
} from "./chunk-CCPUJRHH.js";
import {
  __commonJS
} from "./chunk-CEQRFMJQ.js";

// node_modules/dayjs/locale/es-us.js
var require_es_us = __commonJS({
  "node_modules/dayjs/locale/es-us.js"(exports, module) {
    !function(e, s) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = s(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], s) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_es_us = s(e.dayjs);
    }(exports, function(e) {
      "use strict";
      function s(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var o = s(e), d = { name: "es-us", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e2) {
        return e2 + "º";
      }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
      return o.default.locale(d, null, true), d;
    });
  }
});
export default require_es_us();
//# sourceMappingURL=dayjs_locale_es-us.js.map
