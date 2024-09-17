import { jsx as O } from "react/jsx-runtime";
import * as V from "react";
import '../../assets/index.css';/**
  * @pigment-css/react v0.0.22
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
var $ = Object.defineProperty, q = Object.defineProperties, W = Object.getOwnPropertyDescriptors, u = Object.getOwnPropertySymbols, _ = Object.prototype.hasOwnProperty, C = Object.prototype.propertyIsEnumerable, S = (e, r, t) => r in e ? $(e, r, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: t
}) : e[r] = t, l = (e, r) => {
  for (var t in r || (r = {})) _.call(r, t) && S(e, t, r[t]);
  if (u) for (var t of u(r))
    C.call(r, t) && S(e, t, r[t]);
  return e;
}, A = (e, r) => q(e, W(r)), R = (e, r) => {
  var t = {};
  for (var n in e) _.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
  if (e != null && u) for (var n of u(e))
    r.indexOf(n) < 0 && C.call(e, n) && (t[n] = e[n]);
  return t;
};
function T(e) {
  var r, t, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (r = 0; r < a; r++) e[r] && (t = T(e[r])) && (n && (n += " "), n += t);
  } else for (t in e) e[t] && (n && (n += " "), n += t);
  return n;
}
function X() {
  for (var e, r, t = 0, n = "", a = arguments.length; t < a; t++) (e = arguments[t]) && (r = T(e)) && (n && (n += " "), n += r);
  return n;
}
function Y(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var G = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, K = /* @__PURE__ */ Y(
  function(e) {
    return G.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
/**
  * @pigment-css/react v0.0.22
  *
  * @license MIT
  * This source code is licensed under the MIT license found in the
  * LICENSE file in the root directory of this source tree.
  */
function Z(e, r) {
  var t = e, {
    ownerState: n = {}
  } = t, a = R(t, ["ownerState"]);
  return r.filter(({
    props: i
  }) => typeof i == "function" ? i(A(l(l({}, a), n), {
    ownerState: n
  })) : Object.entries(i).every(([d, p]) => n[d] === p || a[d] === p)).map(({
    className: i
  }) => i);
}
function w(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
var y = (e) => e !== "as" && e !== "ownerState", P = (e) => y(e) && e !== "classes";
function J(e, r = {}) {
  const {
    name: t,
    slot: n,
    shouldForwardProp: a
  } = r;
  let s = a;
  a || (w(e) ? s = K : n === "Root" || n === "root" ? s = P : s = y);
  let i = !s("as");
  function d(p = {}) {
    const {
      displayName: L,
      classes: M = [],
      vars: j = {},
      variants: H = []
    } = p, m = V.forwardRef(function(c, I) {
      const v = c, {
        className: z,
        sx: te,
        style: E,
        ownerState: F
      } = v, k = R(v, ["className", "sx", "style", "ownerState"]), h = i && c.as || e, N = Object.entries(j).reduce((o, [b, [D, B]]) => {
        const f = D(c);
        return typeof f > "u" || (typeof f == "string" || B ? o[`--${b}`] = f : o[`--${b}`] = `${f}px`), o;
      }, {}), U = X(M, z, Z(c, H));
      c.as && !a && (w(h) || (n === "Root" || n === "root" ? s = P : s = y));
      const x = {};
      for (const o in k)
        i && o === "as" || (s(o) || !i && o === "as") && (x[o] = k[o]);
      return /* @__PURE__ */ O(h, A(l(l({}, x), h.__styled_by_pigment_css && {
        ownerState: F
      }), {
        ref: I,
        className: U,
        style: l(l({}, N), E)
      }));
    });
    let g = L;
    return !g && t && (g = `${t}${n ? `-${n}` : ""}`), m.displayName = `Styled(${g})`, m.__styled_by_pigment_css = !0, m;
  }
  return d;
}
const Q = /* @__PURE__ */ J("button")({
  classes: ["b1w668cj"]
}), ne = ({
  children: e,
  sx: r,
  ...t
}) => /* @__PURE__ */ O(Q, {
  sx: () => ({
    ...r
  }),
  ...t,
  children: e
});
export {
  ne as default
};
