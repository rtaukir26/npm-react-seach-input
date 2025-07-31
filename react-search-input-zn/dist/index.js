import te, { useState as D, useEffect as ne } from "react";
var k = { exports: {} }, p = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var V;
function ae() {
  if (V) return p;
  V = 1;
  var u = Symbol.for("react.transitional.element"), A = Symbol.for("react.fragment");
  function d(m, o, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), o.key !== void 0 && (l = "" + o.key), "key" in o) {
      s = {};
      for (var i in o)
        i !== "key" && (s[i] = o[i]);
    } else s = o;
    return o = s.ref, {
      $$typeof: u,
      type: m,
      key: l,
      ref: o !== void 0 ? o : null,
      props: s
    };
  }
  return p.Fragment = A, p.jsx = d, p.jsxs = d, p;
}
var v = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function oe() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case O:
          return "Fragment";
        case q:
          return "Profiler";
        case z:
          return "StrictMode";
        case M:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case w:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case J:
            return (e._context.displayName || "Context") + ".Consumer";
          case Q:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case U:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function A(e) {
      return "" + e;
    }
    function d(e) {
      try {
        A(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), A(e);
      }
    }
    function m(e) {
      if (e === O) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === U)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = x.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function i(e, r) {
      function t() {
        I || (I = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function h() {
      var e = u(this.type);
      return Y[e] || (Y[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function S(e, r, t, n, f, c, C, j) {
      return t = c.ref, e = {
        $$typeof: g,
        type: e,
        key: r,
        props: c,
        _owner: f
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: h
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: j
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, t, n, f, c, C, j) {
      var a = r.children;
      if (a !== void 0)
        if (n)
          if (ee(a)) {
            for (n = 0; n < a.length; n++)
              b(a[n]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else b(a);
      if (y.call(r, "key")) {
        a = u(e);
        var R = Object.keys(r).filter(function(re) {
          return re !== "key";
        });
        n = 0 < R.length ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}", L[a + n] || (R = 0 < R.length ? "{" + R.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          a,
          R,
          a
        ), L[a + n] = !0);
      }
      if (a = null, t !== void 0 && (d(t), a = "" + t), l(r) && (d(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var N in r)
          N !== "key" && (t[N] = r[N]);
      } else t = r;
      return a && i(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        a,
        c,
        f,
        o(),
        t,
        C,
        j
      );
    }
    function b(e) {
      typeof e == "object" && e !== null && e.$$typeof === g && e._store && (e._store.validated = 1);
    }
    var E = te, g = Symbol.for("react.transitional.element"), w = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), q = Symbol.for("react.profiler"), J = Symbol.for("react.consumer"), X = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), H = Symbol.for("react.client.reference"), x = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, ee = Array.isArray, P = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var I, Y = {}, F = E.react_stack_bottom_frame.bind(
      E,
      s
    )(), B = P(m(s)), L = {};
    v.Fragment = O, v.jsx = function(e, r, t, n, f) {
      var c = 1e4 > x.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        t,
        !1,
        n,
        f,
        c ? Error("react-stack-top-frame") : F,
        c ? P(m(e)) : B
      );
    }, v.jsxs = function(e, r, t, n, f) {
      var c = 1e4 > x.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        t,
        !0,
        n,
        f,
        c ? Error("react-stack-top-frame") : F,
        c ? P(m(e)) : B
      );
    };
  }()), v;
}
var W;
function se() {
  return W || (W = 1, process.env.NODE_ENV === "production" ? k.exports = ae() : k.exports = oe()), k.exports;
}
var T = se();
const ce = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAS1JREFUSInt1D1KQ0EUhuFHBQVJtHQBdpogWopFsEqhO9CNCLoEUSK6B8UFiFHcgUXiBhT8w0ptrGIxE5BLcp2bkEb8YGB+zpx3mDnf8K8hVcUh2viMrY0DVFISjPeZn8IxLvCKLczFto03XOIIk0VPPYVrnKKcE1fGGa6KQk5i8rGE2LEIaaQmr+JR/smzmsETFnstTmTGO7hBswDgC9NYFd4sV3dYKpC8q2W0UgI/UBoAUMZ7r4VsmXakPW5WffdkAQ+YHwAwj/sUwCU2BgBsCn74VRWh5IqU6SyesZC64UgwT6rRzhUwGsH2zQiZyYmbjck7qBcBdCEN4bp2sSKUbyn29/ASY+qxXysKIdh/XzDRh/Bdt4Qv/Oed14aBpGotQtZHCanhdpSAP6hv1hk2Sb7pAkUAAAAASUVORK5CYII=", ue = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACbSURBVEiJ7dIxDkFBFIXhL9EjFqFQEjag0WgtQ63RquxCaSUklqAUlqCjeKbBPMkYiWL+cu7NOZNzLoXC39Oomc3RwrFmZ4krTinmI1wwiczX2D8+kUwfZ0yf3lc4oPONeMwkq3ggxLVVxdLOKR7Y4IbZL8RDLGPvO8kiHjKPFZ9FPJDFZIGd+J0PVcUPUg16aH7Y6cp8roXCK3cSgxwkA5AYlwAAAABJRU5ErkJggg==", ie = ({
  data: u = [],
  handleChange: A,
  searchLabel: d = "Search",
  matchesWith: m,
  styles: o
}) => {
  const [s, l] = D(""), [i, h] = D([]);
  ne(() => {
    h(u);
  }, []);
  const S = (_) => {
    let { value: b } = _.target;
    l(b);
    const E = i?.filter((g) => m?.some(
      (w) => g[w]?.toLowerCase().includes(b?.toLowerCase())
    ));
    A(E);
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "search-container", children: [
    /* @__PURE__ */ T.jsx(
      "input",
      {
        className: "rsi-input",
        style: o,
        type: "text",
        placeholder: d,
        value: s,
        onChange: S
      }
    ),
    s && /* @__PURE__ */ T.jsx(
      "img",
      {
        className: "rsi-close zoom-anim",
        src: ue,
        alt: "close",
        onClick: () => {
          l(""), A(i);
        }
      }
    ),
    /* @__PURE__ */ T.jsx("img", { className: "rsi-img", src: ce, alt: "search" })
  ] });
};
export {
  ie as default
};
