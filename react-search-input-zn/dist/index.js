import { useState as d, useEffect as C } from "react";
var u = { exports: {} }, s = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var m;
function E() {
  if (m) return s;
  m = 1;
  var o = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function n(i, A, e) {
    var r = null;
    if (e !== void 0 && (r = "" + e), A.key !== void 0 && (r = "" + A.key), "key" in A) {
      e = {};
      for (var t in A)
        t !== "key" && (e[t] = A[t]);
    } else e = A;
    return A = e.ref, {
      $$typeof: o,
      type: i,
      key: r,
      ref: A !== void 0 ? A : null,
      props: e
    };
  }
  return s.Fragment = a, s.jsx = n, s.jsxs = n, s;
}
var h;
function k() {
  return h || (h = 1, u.exports = E()), u.exports;
}
var c = k();
const I = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAS1JREFUSInt1D1KQ0EUhuFHBQVJtHQBdpogWopFsEqhO9CNCLoEUSK6B8UFiFHcgUXiBhT8w0ptrGIxE5BLcp2bkEb8YGB+zpx3mDnf8K8hVcUh2viMrY0DVFISjPeZn8IxLvCKLczFto03XOIIk0VPPYVrnKKcE1fGGa6KQk5i8rGE2LEIaaQmr+JR/smzmsETFnstTmTGO7hBswDgC9NYFd4sV3dYKpC8q2W0UgI/UBoAUMZ7r4VsmXakPW5WffdkAQ+YHwAwj/sUwCU2BgBsCn74VRWh5IqU6SyesZC64UgwT6rRzhUwGsH2zQiZyYmbjck7qBcBdCEN4bp2sSKUbyn29/ASY+qxXysKIdh/XzDRh/Bdt4Qv/Oed14aBpGotQtZHCanhdpSAP6hv1hk2Sb7pAkUAAAAASUVORK5CYII=", S = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACbSURBVEiJ7dIxDkFBFIXhL9EjFqFQEjag0WgtQ63RquxCaSUklqAUlqCjeKbBPMkYiWL+cu7NOZNzLoXC39Oomc3RwrFmZ4krTinmI1wwiczX2D8+kUwfZ0yf3lc4oPONeMwkq3ggxLVVxdLOKR7Y4IbZL8RDLGPvO8kiHjKPFZ9FPJDFZIGd+J0PVcUPUg16aH7Y6cp8roXCK3cSgxwkA5AYlwAAAABJRU5ErkJggg==", F = ({
  data: o = [],
  handleChange: a,
  searchLabel: n = "Search",
  matchesWith: i,
  styles: A
}) => {
  const [e, r] = d(""), [t, x] = d([]);
  C(() => {
    x(o);
  }, []);
  const R = (U) => {
    let { value: l } = U.target;
    r(l);
    const B = t?.filter((p) => i?.some(
      (g) => p[g]?.toLowerCase().includes(l?.toLowerCase())
    ));
    a(B);
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "search-container", children: [
    /* @__PURE__ */ c.jsx(
      "input",
      {
        className: "rsi-input",
        style: A,
        type: "text",
        placeholder: n,
        value: e,
        onChange: R
      }
    ),
    e && /* @__PURE__ */ c.jsx(
      "img",
      {
        className: "rsi-close zoom-anim",
        src: S,
        alt: "close",
        onClick: () => {
          r(""), a(t);
        }
      }
    ),
    /* @__PURE__ */ c.jsx("img", { className: "rsi-img", src: I, alt: "search" })
  ] });
};
export {
  F as default
};
