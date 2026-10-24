(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) o(d);
  new MutationObserver((d) => {
    for (const h of d)
      if (h.type === "childList")
        for (const f of h.addedNodes)
          f.tagName === "LINK" && f.rel === "modulepreload" && o(f);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(d) {
    const h = {};
    return (
      d.integrity && (h.integrity = d.integrity),
      d.referrerPolicy && (h.referrerPolicy = d.referrerPolicy),
      d.crossOrigin === "use-credentials"
        ? (h.credentials = "include")
        : d.crossOrigin === "anonymous"
          ? (h.credentials = "omit")
          : (h.credentials = "same-origin"),
      h
    );
  }
  function o(d) {
    if (d.ep) return;
    d.ep = !0;
    const h = l(d);
    fetch(d.href, h);
  }
})();
function C1(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default")
    ? n.default
    : n;
}
var td = { exports: {} },
  vl = {};
var Ep;
function D1() {
  if (Ep) return vl;
  Ep = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function l(o, d, h) {
    var f = null;
    if (
      (h !== void 0 && (f = "" + h),
      d.key !== void 0 && (f = "" + d.key),
      "key" in d)
    ) {
      h = {};
      for (var x in d) x !== "key" && (h[x] = d[x]);
    } else h = d;
    return (
      (d = h.ref),
      { $$typeof: n, type: o, key: f, ref: d !== void 0 ? d : null, props: h }
    );
  }
  return ((vl.Fragment = i), (vl.jsx = l), (vl.jsxs = l), vl);
}
var Ap;
function R1() {
  return (Ap || ((Ap = 1), (td.exports = D1())), td.exports);
}
var r = R1(),
  ad = { exports: {} },
  ge = {};
var Mp;
function k1() {
  if (Mp) return ge;
  Mp = 1;
  var n = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    l = Symbol.for("react.fragment"),
    o = Symbol.for("react.strict_mode"),
    d = Symbol.for("react.profiler"),
    h = Symbol.for("react.consumer"),
    f = Symbol.for("react.context"),
    x = Symbol.for("react.forward_ref"),
    p = Symbol.for("react.suspense"),
    g = Symbol.for("react.memo"),
    y = Symbol.for("react.lazy"),
    b = Symbol.for("react.activity"),
    w = Symbol.iterator;
  function T(M) {
    return M === null || typeof M != "object"
      ? null
      : ((M = (w && M[w]) || M["@@iterator"]),
        typeof M == "function" ? M : null);
  }
  var R = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    C = Object.assign,
    D = {};
  function _(M, G, ee) {
    ((this.props = M),
      (this.context = G),
      (this.refs = D),
      (this.updater = ee || R));
  }
  ((_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (M, G) {
      if (typeof M != "object" && typeof M != "function" && M != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, M, G, "setState");
    }),
    (_.prototype.forceUpdate = function (M) {
      this.updater.enqueueForceUpdate(this, M, "forceUpdate");
    }));
  function V() {}
  V.prototype = _.prototype;
  function E(M, G, ee) {
    ((this.props = M),
      (this.context = G),
      (this.refs = D),
      (this.updater = ee || R));
  }
  var Q = (E.prototype = new V());
  ((Q.constructor = E), C(Q, _.prototype), (Q.isPureReactComponent = !0));
  var X = Array.isArray;
  function W() {}
  var P = { H: null, A: null, T: null, S: null },
    Z = Object.prototype.hasOwnProperty;
  function ie(M, G, ee) {
    var re = ee.ref;
    return {
      $$typeof: n,
      type: M,
      key: G,
      ref: re !== void 0 ? re : null,
      props: ee,
    };
  }
  function I(M, G) {
    return ie(M.type, G, M.props);
  }
  function he(M) {
    return typeof M == "object" && M !== null && M.$$typeof === n;
  }
  function we(M) {
    var G = { "=": "=0", ":": "=2" };
    return (
      "$" +
      M.replace(/[=:]/g, function (ee) {
        return G[ee];
      })
    );
  }
  var ze = /\/+/g;
  function je(M, G) {
    return typeof M == "object" && M !== null && M.key != null
      ? we("" + M.key)
      : G.toString(36);
  }
  function ke(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (
          (typeof M.status == "string"
            ? M.then(W, W)
            : ((M.status = "pending"),
              M.then(
                function (G) {
                  M.status === "pending" &&
                    ((M.status = "fulfilled"), (M.value = G));
                },
                function (G) {
                  M.status === "pending" &&
                    ((M.status = "rejected"), (M.reason = G));
                },
              )),
          M.status)
        ) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function H(M, G, ee, re, me) {
    var ve = typeof M;
    (ve === "undefined" || ve === "boolean") && (M = null);
    var De = !1;
    if (M === null) De = !0;
    else
      switch (ve) {
        case "bigint":
        case "string":
        case "number":
          De = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case n:
            case i:
              De = !0;
              break;
            case y:
              return ((De = M._init), H(De(M._payload), G, ee, re, me));
          }
      }
    if (De)
      return (
        (me = me(M)),
        (De = re === "" ? "." + je(M, 0) : re),
        X(me)
          ? ((ee = ""),
            De != null && (ee = De.replace(ze, "$&/") + "/"),
            H(me, G, ee, "", function (sn) {
              return sn;
            }))
          : me != null &&
            (he(me) &&
              (me = I(
                me,
                ee +
                  (me.key == null || (M && M.key === me.key)
                    ? ""
                    : ("" + me.key).replace(ze, "$&/") + "/") +
                  De,
              )),
            G.push(me)),
        1
      );
    De = 0;
    var at = re === "" ? "." : re + ":";
    if (X(M))
      for (var Fe = 0; Fe < M.length; Fe++)
        ((re = M[Fe]), (ve = at + je(re, Fe)), (De += H(re, G, ee, ve, me)));
    else if (((Fe = T(M)), typeof Fe == "function"))
      for (M = Fe.call(M), Fe = 0; !(re = M.next()).done; )
        ((re = re.value),
          (ve = at + je(re, Fe++)),
          (De += H(re, G, ee, ve, me)));
    else if (ve === "object") {
      if (typeof M.then == "function") return H(ke(M), G, ee, re, me);
      throw (
        (G = String(M)),
        Error(
          "Objects are not valid as a React child (found: " +
            (G === "[object Object]"
              ? "object with keys {" + Object.keys(M).join(", ") + "}"
              : G) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return De;
  }
  function K(M, G, ee) {
    if (M == null) return M;
    var re = [],
      me = 0;
    return (
      H(M, re, "", "", function (ve) {
        return G.call(ee, ve, me++);
      }),
      re
    );
  }
  function ae(M) {
    if (M._status === -1) {
      var G = M._result;
      ((G = G()),
        G.then(
          function (ee) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 1), (M._result = ee));
          },
          function (ee) {
            (M._status === 0 || M._status === -1) &&
              ((M._status = 2), (M._result = ee));
          },
        ),
        M._status === -1 && ((M._status = 0), (M._result = G)));
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var xe =
      typeof reportError == "function"
        ? reportError
        : function (M) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var G = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof M == "object" &&
                  M !== null &&
                  typeof M.message == "string"
                    ? String(M.message)
                    : String(M),
                error: M,
              });
              if (!window.dispatchEvent(G)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", M);
              return;
            }
            console.error(M);
          },
    Se = {
      map: K,
      forEach: function (M, G, ee) {
        K(
          M,
          function () {
            G.apply(this, arguments);
          },
          ee,
        );
      },
      count: function (M) {
        var G = 0;
        return (
          K(M, function () {
            G++;
          }),
          G
        );
      },
      toArray: function (M) {
        return (
          K(M, function (G) {
            return G;
          }) || []
        );
      },
      only: function (M) {
        if (!he(M))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return M;
      },
    };
  return (
    (ge.Activity = b),
    (ge.Children = Se),
    (ge.Component = _),
    (ge.Fragment = l),
    (ge.Profiler = d),
    (ge.PureComponent = E),
    (ge.StrictMode = o),
    (ge.Suspense = p),
    (ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P),
    (ge.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (M) {
        return P.H.useMemoCache(M);
      },
    }),
    (ge.cache = function (M) {
      return function () {
        return M.apply(null, arguments);
      };
    }),
    (ge.cacheSignal = function () {
      return null;
    }),
    (ge.cloneElement = function (M, G, ee) {
      if (M == null)
        throw Error(
          "The argument must be a React element, but you passed " + M + ".",
        );
      var re = C({}, M.props),
        me = M.key;
      if (G != null)
        for (ve in (G.key !== void 0 && (me = "" + G.key), G))
          !Z.call(G, ve) ||
            ve === "key" ||
            ve === "__self" ||
            ve === "__source" ||
            (ve === "ref" && G.ref === void 0) ||
            (re[ve] = G[ve]);
      var ve = arguments.length - 2;
      if (ve === 1) re.children = ee;
      else if (1 < ve) {
        for (var De = Array(ve), at = 0; at < ve; at++)
          De[at] = arguments[at + 2];
        re.children = De;
      }
      return ie(M.type, me, re);
    }),
    (ge.createContext = function (M) {
      return (
        (M = {
          $$typeof: f,
          _currentValue: M,
          _currentValue2: M,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (M.Provider = M),
        (M.Consumer = { $$typeof: h, _context: M }),
        M
      );
    }),
    (ge.createElement = function (M, G, ee) {
      var re,
        me = {},
        ve = null;
      if (G != null)
        for (re in (G.key !== void 0 && (ve = "" + G.key), G))
          Z.call(G, re) &&
            re !== "key" &&
            re !== "__self" &&
            re !== "__source" &&
            (me[re] = G[re]);
      var De = arguments.length - 2;
      if (De === 1) me.children = ee;
      else if (1 < De) {
        for (var at = Array(De), Fe = 0; Fe < De; Fe++)
          at[Fe] = arguments[Fe + 2];
        me.children = at;
      }
      if (M && M.defaultProps)
        for (re in ((De = M.defaultProps), De))
          me[re] === void 0 && (me[re] = De[re]);
      return ie(M, ve, me);
    }),
    (ge.createRef = function () {
      return { current: null };
    }),
    (ge.forwardRef = function (M) {
      return { $$typeof: x, render: M };
    }),
    (ge.isValidElement = he),
    (ge.lazy = function (M) {
      return { $$typeof: y, _payload: { _status: -1, _result: M }, _init: ae };
    }),
    (ge.memo = function (M, G) {
      return { $$typeof: g, type: M, compare: G === void 0 ? null : G };
    }),
    (ge.startTransition = function (M) {
      var G = P.T,
        ee = {};
      P.T = ee;
      try {
        var re = M(),
          me = P.S;
        (me !== null && me(ee, re),
          typeof re == "object" &&
            re !== null &&
            typeof re.then == "function" &&
            re.then(W, xe));
      } catch (ve) {
        xe(ve);
      } finally {
        (G !== null && ee.types !== null && (G.types = ee.types), (P.T = G));
      }
    }),
    (ge.unstable_useCacheRefresh = function () {
      return P.H.useCacheRefresh();
    }),
    (ge.use = function (M) {
      return P.H.use(M);
    }),
    (ge.useActionState = function (M, G, ee) {
      return P.H.useActionState(M, G, ee);
    }),
    (ge.useCallback = function (M, G) {
      return P.H.useCallback(M, G);
    }),
    (ge.useContext = function (M) {
      return P.H.useContext(M);
    }),
    (ge.useDebugValue = function () {}),
    (ge.useDeferredValue = function (M, G) {
      return P.H.useDeferredValue(M, G);
    }),
    (ge.useEffect = function (M, G) {
      return P.H.useEffect(M, G);
    }),
    (ge.useEffectEvent = function (M) {
      return P.H.useEffectEvent(M);
    }),
    (ge.useId = function () {
      return P.H.useId();
    }),
    (ge.useImperativeHandle = function (M, G, ee) {
      return P.H.useImperativeHandle(M, G, ee);
    }),
    (ge.useInsertionEffect = function (M, G) {
      return P.H.useInsertionEffect(M, G);
    }),
    (ge.useLayoutEffect = function (M, G) {
      return P.H.useLayoutEffect(M, G);
    }),
    (ge.useMemo = function (M, G) {
      return P.H.useMemo(M, G);
    }),
    (ge.useOptimistic = function (M, G) {
      return P.H.useOptimistic(M, G);
    }),
    (ge.useReducer = function (M, G, ee) {
      return P.H.useReducer(M, G, ee);
    }),
    (ge.useRef = function (M) {
      return P.H.useRef(M);
    }),
    (ge.useState = function (M) {
      return P.H.useState(M);
    }),
    (ge.useSyncExternalStore = function (M, G, ee) {
      return P.H.useSyncExternalStore(M, G, ee);
    }),
    (ge.useTransition = function () {
      return P.H.useTransition();
    }),
    (ge.version = "19.2.3"),
    ge
  );
}
var Cp;
function nf() {
  return (Cp || ((Cp = 1), (ad.exports = k1())), ad.exports);
}
var j = nf();
const OT = C1(j);
var nd = { exports: {} },
  wl = {},
  id = { exports: {} },
  sd = {};
var Dp;
function z1() {
  return (
    Dp ||
      ((Dp = 1),
      (function (n) {
        function i(H, K) {
          var ae = H.length;
          H.push(K);
          e: for (; 0 < ae; ) {
            var xe = (ae - 1) >>> 1,
              Se = H[xe];
            if (0 < d(Se, K)) ((H[xe] = K), (H[ae] = Se), (ae = xe));
            else break e;
          }
        }
        function l(H) {
          return H.length === 0 ? null : H[0];
        }
        function o(H) {
          if (H.length === 0) return null;
          var K = H[0],
            ae = H.pop();
          if (ae !== K) {
            H[0] = ae;
            e: for (var xe = 0, Se = H.length, M = Se >>> 1; xe < M; ) {
              var G = 2 * (xe + 1) - 1,
                ee = H[G],
                re = G + 1,
                me = H[re];
              if (0 > d(ee, ae))
                re < Se && 0 > d(me, ee)
                  ? ((H[xe] = me), (H[re] = ae), (xe = re))
                  : ((H[xe] = ee), (H[G] = ae), (xe = G));
              else if (re < Se && 0 > d(me, ae))
                ((H[xe] = me), (H[re] = ae), (xe = re));
              else break e;
            }
          }
          return K;
        }
        function d(H, K) {
          var ae = H.sortIndex - K.sortIndex;
          return ae !== 0 ? ae : H.id - K.id;
        }
        if (
          ((n.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var h = performance;
          n.unstable_now = function () {
            return h.now();
          };
        } else {
          var f = Date,
            x = f.now();
          n.unstable_now = function () {
            return f.now() - x;
          };
        }
        var p = [],
          g = [],
          y = 1,
          b = null,
          w = 3,
          T = !1,
          R = !1,
          C = !1,
          D = !1,
          _ = typeof setTimeout == "function" ? setTimeout : null,
          V = typeof clearTimeout == "function" ? clearTimeout : null,
          E = typeof setImmediate < "u" ? setImmediate : null;
        function Q(H) {
          for (var K = l(g); K !== null; ) {
            if (K.callback === null) o(g);
            else if (K.startTime <= H)
              (o(g), (K.sortIndex = K.expirationTime), i(p, K));
            else break;
            K = l(g);
          }
        }
        function X(H) {
          if (((C = !1), Q(H), !R))
            if (l(p) !== null) ((R = !0), W || ((W = !0), we()));
            else {
              var K = l(g);
              K !== null && ke(X, K.startTime - H);
            }
        }
        var W = !1,
          P = -1,
          Z = 5,
          ie = -1;
        function I() {
          return D ? !0 : !(n.unstable_now() - ie < Z);
        }
        function he() {
          if (((D = !1), W)) {
            var H = n.unstable_now();
            ie = H;
            var K = !0;
            try {
              e: {
                ((R = !1), C && ((C = !1), V(P), (P = -1)), (T = !0));
                var ae = w;
                try {
                  t: {
                    for (
                      Q(H), b = l(p);
                      b !== null && !(b.expirationTime > H && I());
                    ) {
                      var xe = b.callback;
                      if (typeof xe == "function") {
                        ((b.callback = null), (w = b.priorityLevel));
                        var Se = xe(b.expirationTime <= H);
                        if (((H = n.unstable_now()), typeof Se == "function")) {
                          ((b.callback = Se), Q(H), (K = !0));
                          break t;
                        }
                        (b === l(p) && o(p), Q(H));
                      } else o(p);
                      b = l(p);
                    }
                    if (b !== null) K = !0;
                    else {
                      var M = l(g);
                      (M !== null && ke(X, M.startTime - H), (K = !1));
                    }
                  }
                  break e;
                } finally {
                  ((b = null), (w = ae), (T = !1));
                }
                K = void 0;
              }
            } finally {
              K ? we() : (W = !1);
            }
          }
        }
        var we;
        if (typeof E == "function")
          we = function () {
            E(he);
          };
        else if (typeof MessageChannel < "u") {
          var ze = new MessageChannel(),
            je = ze.port2;
          ((ze.port1.onmessage = he),
            (we = function () {
              je.postMessage(null);
            }));
        } else
          we = function () {
            _(he, 0);
          };
        function ke(H, K) {
          P = _(function () {
            H(n.unstable_now());
          }, K);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (H) {
            H.callback = null;
          }),
          (n.unstable_forceFrameRate = function (H) {
            0 > H || 125 < H
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Z = 0 < H ? Math.floor(1e3 / H) : 5);
          }),
          (n.unstable_getCurrentPriorityLevel = function () {
            return w;
          }),
          (n.unstable_next = function (H) {
            switch (w) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = w;
            }
            var ae = w;
            w = K;
            try {
              return H();
            } finally {
              w = ae;
            }
          }),
          (n.unstable_requestPaint = function () {
            D = !0;
          }),
          (n.unstable_runWithPriority = function (H, K) {
            switch (H) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                H = 3;
            }
            var ae = w;
            w = H;
            try {
              return K();
            } finally {
              w = ae;
            }
          }),
          (n.unstable_scheduleCallback = function (H, K, ae) {
            var xe = n.unstable_now();
            switch (
              (typeof ae == "object" && ae !== null
                ? ((ae = ae.delay),
                  (ae = typeof ae == "number" && 0 < ae ? xe + ae : xe))
                : (ae = xe),
              H)
            ) {
              case 1:
                var Se = -1;
                break;
              case 2:
                Se = 250;
                break;
              case 5:
                Se = 1073741823;
                break;
              case 4:
                Se = 1e4;
                break;
              default:
                Se = 5e3;
            }
            return (
              (Se = ae + Se),
              (H = {
                id: y++,
                callback: K,
                priorityLevel: H,
                startTime: ae,
                expirationTime: Se,
                sortIndex: -1,
              }),
              ae > xe
                ? ((H.sortIndex = ae),
                  i(g, H),
                  l(p) === null &&
                    H === l(g) &&
                    (C ? (V(P), (P = -1)) : (C = !0), ke(X, ae - xe)))
                : ((H.sortIndex = Se),
                  i(p, H),
                  R || T || ((R = !0), W || ((W = !0), we()))),
              H
            );
          }),
          (n.unstable_shouldYield = I),
          (n.unstable_wrapCallback = function (H) {
            var K = w;
            return function () {
              var ae = w;
              w = K;
              try {
                return H.apply(this, arguments);
              } finally {
                w = ae;
              }
            };
          }));
      })(sd)),
    sd
  );
}
var Rp;
function _1() {
  return (Rp || ((Rp = 1), (id.exports = z1())), id.exports);
}
var ld = { exports: {} },
  Ct = {};
var kp;
function O1() {
  if (kp) return Ct;
  kp = 1;
  var n = nf();
  function i(p) {
    var g = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        g += "&args[]=" + encodeURIComponent(arguments[y]);
    }
    return (
      "Minified React error #" +
      p +
      "; visit " +
      g +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function l() {}
  var o = {
      d: {
        f: l,
        r: function () {
          throw Error(i(522));
        },
        D: l,
        C: l,
        L: l,
        m: l,
        X: l,
        S: l,
        M: l,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for("react.portal");
  function h(p, g, y) {
    var b =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: b == null ? null : "" + b,
      children: p,
      containerInfo: g,
      implementation: y,
    };
  }
  var f = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function x(p, g) {
    if (p === "font") return "";
    if (typeof g == "string") return g === "use-credentials" ? g : "";
  }
  return (
    (Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o),
    (Ct.createPortal = function (p, g) {
      var y =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!g || (g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11))
        throw Error(i(299));
      return h(p, g, null, y);
    }),
    (Ct.flushSync = function (p) {
      var g = f.T,
        y = o.p;
      try {
        if (((f.T = null), (o.p = 2), p)) return p();
      } finally {
        ((f.T = g), (o.p = y), o.d.f());
      }
    }),
    (Ct.preconnect = function (p, g) {
      typeof p == "string" &&
        (g
          ? ((g = g.crossOrigin),
            (g =
              typeof g == "string"
                ? g === "use-credentials"
                  ? g
                  : ""
                : void 0))
          : (g = null),
        o.d.C(p, g));
    }),
    (Ct.prefetchDNS = function (p) {
      typeof p == "string" && o.d.D(p);
    }),
    (Ct.preinit = function (p, g) {
      if (typeof p == "string" && g && typeof g.as == "string") {
        var y = g.as,
          b = x(y, g.crossOrigin),
          w = typeof g.integrity == "string" ? g.integrity : void 0,
          T = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
        y === "style"
          ? o.d.S(p, typeof g.precedence == "string" ? g.precedence : void 0, {
              crossOrigin: b,
              integrity: w,
              fetchPriority: T,
            })
          : y === "script" &&
            o.d.X(p, {
              crossOrigin: b,
              integrity: w,
              fetchPriority: T,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
      }
    }),
    (Ct.preinitModule = function (p, g) {
      if (typeof p == "string")
        if (typeof g == "object" && g !== null) {
          if (g.as == null || g.as === "script") {
            var y = x(g.as, g.crossOrigin);
            o.d.M(p, {
              crossOrigin: y,
              integrity: typeof g.integrity == "string" ? g.integrity : void 0,
              nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            });
          }
        } else g == null && o.d.M(p);
    }),
    (Ct.preload = function (p, g) {
      if (
        typeof p == "string" &&
        typeof g == "object" &&
        g !== null &&
        typeof g.as == "string"
      ) {
        var y = g.as,
          b = x(y, g.crossOrigin);
        o.d.L(p, y, {
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          type: typeof g.type == "string" ? g.type : void 0,
          fetchPriority:
            typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
          referrerPolicy:
            typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
          imageSrcSet:
            typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
          imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
          media: typeof g.media == "string" ? g.media : void 0,
        });
      }
    }),
    (Ct.preloadModule = function (p, g) {
      if (typeof p == "string")
        if (g) {
          var y = x(g.as, g.crossOrigin);
          o.d.m(p, {
            as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
            crossOrigin: y,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          });
        } else o.d.m(p);
    }),
    (Ct.requestFormReset = function (p) {
      o.d.r(p);
    }),
    (Ct.unstable_batchedUpdates = function (p, g) {
      return p(g);
    }),
    (Ct.useFormState = function (p, g, y) {
      return f.H.useFormState(p, g, y);
    }),
    (Ct.useFormStatus = function () {
      return f.H.useHostTransitionStatus();
    }),
    (Ct.version = "19.2.3"),
    Ct
  );
}
var zp;
function B1() {
  if (zp) return ld.exports;
  zp = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (ld.exports = O1()), ld.exports);
}
var _p;
function L1() {
  if (_p) return wl;
  _p = 1;
  var n = _1(),
    i = nf(),
    l = B1();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function d(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function h(e) {
    var t = e,
      a = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return));
      while (e);
    }
    return t.tag === 3 ? a : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function x(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (h(e) !== e) throw Error(o(188));
  }
  function g(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = h(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var a = e, s = t; ; ) {
      var c = a.return;
      if (c === null) break;
      var u = c.alternate;
      if (u === null) {
        if (((s = c.return), s !== null)) {
          a = s;
          continue;
        }
        break;
      }
      if (c.child === u.child) {
        for (u = c.child; u; ) {
          if (u === a) return (p(c), e);
          if (u === s) return (p(c), t);
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (a.return !== s.return) ((a = c), (s = u));
      else {
        for (var m = !1, v = c.child; v; ) {
          if (v === a) {
            ((m = !0), (a = c), (s = u));
            break;
          }
          if (v === s) {
            ((m = !0), (s = c), (a = u));
            break;
          }
          v = v.sibling;
        }
        if (!m) {
          for (v = u.child; v; ) {
            if (v === a) {
              ((m = !0), (a = u), (s = c));
              break;
            }
            if (v === s) {
              ((m = !0), (s = u), (a = c));
              break;
            }
            v = v.sibling;
          }
          if (!m) throw Error(o(189));
        }
      }
      if (a.alternate !== s) throw Error(o(190));
    }
    if (a.tag !== 3) throw Error(o(188));
    return a.stateNode.current === a ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = y(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign,
    w = Symbol.for("react.element"),
    T = Symbol.for("react.transitional.element"),
    R = Symbol.for("react.portal"),
    C = Symbol.for("react.fragment"),
    D = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    V = Symbol.for("react.consumer"),
    E = Symbol.for("react.context"),
    Q = Symbol.for("react.forward_ref"),
    X = Symbol.for("react.suspense"),
    W = Symbol.for("react.suspense_list"),
    P = Symbol.for("react.memo"),
    Z = Symbol.for("react.lazy"),
    ie = Symbol.for("react.activity"),
    I = Symbol.for("react.memo_cache_sentinel"),
    he = Symbol.iterator;
  function we(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (he && e[he]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ze = Symbol.for("react.client.reference");
  function je(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ze ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case C:
        return "Fragment";
      case _:
        return "Profiler";
      case D:
        return "StrictMode";
      case X:
        return "Suspense";
      case W:
        return "SuspenseList";
      case ie:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case R:
          return "Portal";
        case E:
          return e.displayName || "Context";
        case V:
          return (e._context.displayName || "Context") + ".Consumer";
        case Q:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case P:
          return (
            (t = e.displayName || null),
            t !== null ? t : je(e.type) || "Memo"
          );
        case Z:
          ((t = e._payload), (e = e._init));
          try {
            return je(e(t));
          } catch {}
      }
    return null;
  }
  var ke = Array.isArray,
    H = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ae = { pending: !1, data: null, method: null, action: null },
    xe = [],
    Se = -1;
  function M(e) {
    return { current: e };
  }
  function G(e) {
    0 > Se || ((e.current = xe[Se]), (xe[Se] = null), Se--);
  }
  function ee(e, t) {
    (Se++, (xe[Se] = e.current), (e.current = t));
  }
  var re = M(null),
    me = M(null),
    ve = M(null),
    De = M(null);
  function at(e, t) {
    switch ((ee(ve, t), ee(me, e), ee(re, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Q0(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          ((t = Q0(t)), (e = Z0(t, e)));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    (G(re), ee(re, e));
  }
  function Fe() {
    (G(re), G(me), G(ve));
  }
  function sn(e) {
    e.memoizedState !== null && ee(De, e);
    var t = re.current,
      a = Z0(t, e.type);
    t !== a && (ee(me, e), ee(re, a));
  }
  function wa(e) {
    (me.current === e && (G(re), G(me)),
      De.current === e && (G(De), (gl._currentValue = ae)));
  }
  var ln, Es;
  function Ft(e) {
    if (ln === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((ln = (t && t[1]) || ""),
          (Es =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      ln +
      e +
      Es
    );
  }
  var vi = !1;
  function ka(e, t) {
    if (!e || vi) return "";
    vi = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var Y = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(Y.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(Y, []);
                } catch (U) {
                  var L = U;
                }
                Reflect.construct(e, [], Y);
              } else {
                try {
                  Y.call();
                } catch (U) {
                  L = U;
                }
                e.call(Y.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (U) {
                L = U;
              }
              (Y = e()) &&
                typeof Y.catch == "function" &&
                Y.catch(function () {});
            }
          } catch (U) {
            if (U && L && typeof U.stack == "string") return [U.stack, L.stack];
          }
          return [null, null];
        },
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name",
      );
      c &&
        c.configurable &&
        Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var u = s.DetermineComponentFrameRoot(),
        m = u[0],
        v = u[1];
      if (m && v) {
        var N = m.split(`
`),
          B = v.split(`
`);
        for (
          c = s = 0;
          s < N.length && !N[s].includes("DetermineComponentFrameRoot");
        )
          s++;
        for (; c < B.length && !B[c].includes("DetermineComponentFrameRoot"); )
          c++;
        if (s === N.length || c === B.length)
          for (
            s = N.length - 1, c = B.length - 1;
            1 <= s && 0 <= c && N[s] !== B[c];
          )
            c--;
        for (; 1 <= s && 0 <= c; s--, c--)
          if (N[s] !== B[c]) {
            if (s !== 1 || c !== 1)
              do
                if ((s--, c--, 0 > c || N[s] !== B[c])) {
                  var q =
                    `
` + N[s].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      q.includes("<anonymous>") &&
                      (q = q.replace("<anonymous>", e.displayName)),
                    q
                  );
                }
              while (1 <= s && 0 <= c);
            break;
          }
      }
    } finally {
      ((vi = !1), (Error.prepareStackTrace = a));
    }
    return (a = e ? e.displayName || e.name : "") ? Ft(a) : "";
  }
  function wi(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ft(e.type);
      case 16:
        return Ft("Lazy");
      case 13:
        return e.child !== t && t !== null
          ? Ft("Suspense Fallback")
          : Ft("Suspense");
      case 19:
        return Ft("SuspenseList");
      case 0:
      case 15:
        return ka(e.type, !1);
      case 11:
        return ka(e.type.render, !1);
      case 1:
        return ka(e.type, !0);
      case 31:
        return Ft("Activity");
      default:
        return "";
    }
  }
  function As(e) {
    try {
      var t = "",
        a = null;
      do ((t += wi(e, a)), (a = e), (e = e.return));
      while (e);
      return t;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  var Yn = Object.prototype.hasOwnProperty,
    ji = n.unstable_scheduleCallback,
    Xn = n.unstable_cancelCallback,
    Si = n.unstable_shouldYield,
    Fl = n.unstable_requestPaint,
    At = n.unstable_now,
    Kn = n.unstable_getCurrentPriorityLevel,
    J = n.unstable_ImmediatePriority,
    Ql = n.unstable_UserBlockingPriority,
    da = n.unstable_NormalPriority,
    Pn = n.unstable_LowPriority,
    Zl = n.unstable_IdlePriority,
    Ni = n.log,
    Ti = n.unstable_setDisableYieldValue,
    rn = null,
    Mt = null;
  function Ht(e) {
    if (
      (typeof Ni == "function" && Ti(e),
      Mt && typeof Mt.setStrictMode == "function")
    )
      try {
        Mt.setStrictMode(rn, e);
      } catch {}
  }
  var xt = Math.clz32 ? Math.clz32 : Jl,
    Po = Math.log,
    Fo = Math.LN2;
  function Jl(e) {
    return ((e >>>= 0), e === 0 ? 32 : (31 - ((Po(e) / Fo) | 0)) | 0);
  }
  var Ei = 256,
    za = 262144,
    fa = 4194304;
  function Qt(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function on(e, t, a) {
    var s = e.pendingLanes;
    if (s === 0) return 0;
    var c = 0,
      u = e.suspendedLanes,
      m = e.pingedLanes;
    e = e.warmLanes;
    var v = s & 134217727;
    return (
      v !== 0
        ? ((s = v & ~u),
          s !== 0
            ? (c = Qt(s))
            : ((m &= v),
              m !== 0
                ? (c = Qt(m))
                : a || ((a = v & ~e), a !== 0 && (c = Qt(a)))))
        : ((v = s & ~u),
          v !== 0
            ? (c = Qt(v))
            : m !== 0
              ? (c = Qt(m))
              : a || ((a = s & ~e), a !== 0 && (c = Qt(a)))),
      c === 0
        ? 0
        : t !== 0 &&
            t !== c &&
            (t & u) === 0 &&
            ((u = c & -c),
            (a = t & -t),
            u >= a || (u === 32 && (a & 4194048) !== 0))
          ? t
          : c
    );
  }
  function Zt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Ie(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function lt() {
    var e = fa;
    return ((fa <<= 1), (fa & 62914560) === 0 && (fa = 4194304), e);
  }
  function Ai(e) {
    for (var t = [], a = 0; 31 > a; a++) t.push(e);
    return t;
  }
  function cn(e, t) {
    ((e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
  }
  function Il(e, t, a, s, c, u) {
    var m = e.pendingLanes;
    ((e.pendingLanes = a),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= a),
      (e.entangledLanes &= a),
      (e.errorRecoveryDisabledLanes &= a),
      (e.shellSuspendCounter = 0));
    var v = e.entanglements,
      N = e.expirationTimes,
      B = e.hiddenUpdates;
    for (a = m & ~a; 0 < a; ) {
      var q = 31 - xt(a),
        Y = 1 << q;
      ((v[q] = 0), (N[q] = -1));
      var L = B[q];
      if (L !== null)
        for (B[q] = null, q = 0; q < L.length; q++) {
          var U = L[q];
          U !== null && (U.lane &= -536870913);
        }
      a &= ~Y;
    }
    (s !== 0 && Fn(e, s, 0),
      u !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(m & ~t)));
  }
  function Fn(e, t, a) {
    ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
    var s = 31 - xt(t);
    ((e.entangledLanes |= t),
      (e.entanglements[s] = e.entanglements[s] | 1073741824 | (a & 261930)));
  }
  function wt(e, t) {
    var a = (e.entangledLanes |= t);
    for (e = e.entanglements; a; ) {
      var s = 31 - xt(a),
        c = 1 << s;
      ((c & t) | (e[s] & t) && (e[s] |= t), (a &= ~c));
    }
  }
  function Mi(e, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : Ms(a)),
      (a & (e.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function Ms(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Ci(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Di() {
    var e = K.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : bp(e.type));
  }
  function Wl(e, t) {
    var a = K.p;
    try {
      return ((K.p = e), t());
    } finally {
      K.p = a;
    }
  }
  var ha = Math.random().toString(36).slice(2),
    nt = "__reactFiber$" + ha,
    yt = "__reactProps$" + ha,
    ma = "__reactContainer$" + ha,
    Cs = "__reactEvents$" + ha,
    Qo = "__reactListeners$" + ha,
    Zo = "__reactHandles$" + ha,
    er = "__reactResources$" + ha,
    un = "__reactMarker$" + ha;
  function Ds(e) {
    (delete e[nt], delete e[yt], delete e[Cs], delete e[Qo], delete e[Zo]);
  }
  function dn(e) {
    var t = e[nt];
    if (t) return t;
    for (var a = e.parentNode; a; ) {
      if ((t = a[ma] || a[nt])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (e = np(e); e !== null; ) {
            if ((a = e[nt])) return a;
            e = np(e);
          }
        return t;
      }
      ((e = a), (a = e.parentNode));
    }
    return null;
  }
  function fn(e) {
    if ((e = e[nt] || e[ma])) {
      var t = e.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return e;
    }
    return null;
  }
  function hn(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function mn(e) {
    var t = e[er];
    return (
      t ||
        (t = e[er] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function rt(e) {
    e[un] = !0;
  }
  var tr = new Set(),
    Rs = {};
  function ja(e, t) {
    (pn(e, t), pn(e + "Capture", t));
  }
  function pn(e, t) {
    for (Rs[e] = t, e = 0; e < t.length; e++) tr.add(t[e]);
  }
  var ar = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    ks = {},
    nr = {};
  function S(e) {
    return Yn.call(nr, e)
      ? !0
      : Yn.call(ks, e)
        ? !1
        : ar.test(e)
          ? (nr[e] = !0)
          : ((ks[e] = !0), !1);
  }
  function k(e, t, a) {
    if (S(t))
      if (a === null) e.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var s = t.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + a);
      }
  }
  function F(e, t, a) {
    if (a === null) e.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + a);
    }
  }
  function te(e, t, a, s) {
    if (s === null) e.removeAttribute(a);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(t, a, "" + s);
    }
  }
  function ce(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ne(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function $e(e, t, a) {
    var s = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (
      !e.hasOwnProperty(t) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var c = s.get,
        u = s.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return c.call(this);
          },
          set: function (m) {
            ((a = "" + m), u.call(this, m));
          },
        }),
        Object.defineProperty(e, t, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (m) {
            a = "" + m;
          },
          stopTracking: function () {
            ((e._valueTracker = null), delete e[t]);
          },
        }
      );
    }
  }
  function Jt(e) {
    if (!e._valueTracker) {
      var t = Ne(e) ? "checked" : "value";
      e._valueTracker = $e(e, t, "" + e[t]);
    }
  }
  function Te(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      s = "";
    return (
      e && (s = Ne(e) ? (e.checked ? "true" : "false") : e.value),
      (e = s),
      e !== a ? (t.setValue(e), !0) : !1
    );
  }
  function ot(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var It = /[\n"\\]/g;
  function pe(e) {
    return e.replace(It, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Qe(e, t, a, s, c, u, m, v) {
    ((e.name = ""),
      m != null &&
      typeof m != "function" &&
      typeof m != "symbol" &&
      typeof m != "boolean"
        ? (e.type = m)
        : e.removeAttribute("type"),
      t != null
        ? m === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + ce(t))
          : e.value !== "" + ce(t) && (e.value = "" + ce(t))
        : (m !== "submit" && m !== "reset") || e.removeAttribute("value"),
      t != null
        ? Qn(e, m, ce(t))
        : a != null
          ? Qn(e, m, ce(a))
          : s != null && e.removeAttribute("value"),
      c == null && u != null && (e.defaultChecked = !!u),
      c != null &&
        (e.checked = c && typeof c != "function" && typeof c != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (e.name = "" + ce(v))
        : e.removeAttribute("name"));
  }
  function _a(e, t, a, s, c, u, m, v) {
    if (
      (u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        typeof u != "boolean" &&
        (e.type = u),
      t != null || a != null)
    ) {
      if (!((u !== "submit" && u !== "reset") || t != null)) {
        Jt(e);
        return;
      }
      ((a = a != null ? "" + ce(a) : ""),
        (t = t != null ? "" + ce(t) : a),
        v || t === e.value || (e.value = t),
        (e.defaultValue = t));
    }
    ((s = s ?? c),
      (s = typeof s != "function" && typeof s != "symbol" && !!s),
      (e.checked = v ? e.checked : !!s),
      (e.defaultChecked = !!s),
      m != null &&
        typeof m != "function" &&
        typeof m != "symbol" &&
        typeof m != "boolean" &&
        (e.name = m),
      Jt(e));
  }
  function Qn(e, t, a) {
    (t === "number" && ot(e.ownerDocument) === e) ||
      e.defaultValue === "" + a ||
      (e.defaultValue = "" + a);
  }
  function Oa(e, t, a, s) {
    if (((e = e.options), t)) {
      t = {};
      for (var c = 0; c < a.length; c++) t["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        ((c = t.hasOwnProperty("$" + e[a].value)),
          e[a].selected !== c && (e[a].selected = c),
          c && s && (e[a].defaultSelected = !0));
    } else {
      for (a = "" + ce(a), t = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          ((e[c].selected = !0), s && (e[c].defaultSelected = !0));
          return;
        }
        t !== null || e[c].disabled || (t = e[c]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ri(e, t, a) {
    if (
      t != null &&
      ((t = "" + ce(t)), t !== e.value && (e.value = t), a == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = a != null ? "" + ce(a) : "";
  }
  function Xf(e, t, a, s) {
    if (t == null) {
      if (s != null) {
        if (a != null) throw Error(o(92));
        if (ke(s)) {
          if (1 < s.length) throw Error(o(93));
          s = s[0];
        }
        a = s;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ce(t)),
      (e.defaultValue = a),
      (s = e.textContent),
      s === a && s !== "" && s !== null && (e.value = s),
      Jt(e));
  }
  function ki(e, t) {
    if (t) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Nb = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Kf(e, t, a) {
    var s = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? s
        ? e.setProperty(t, "")
        : t === "float"
          ? (e.cssFloat = "")
          : (e[t] = "")
      : s
        ? e.setProperty(t, a)
        : typeof a != "number" || a === 0 || Nb.has(t)
          ? t === "float"
            ? (e.cssFloat = a)
            : (e[t] = ("" + a).trim())
          : (e[t] = a + "px");
  }
  function Pf(e, t, a) {
    if (t != null && typeof t != "object") throw Error(o(62));
    if (((e = e.style), a != null)) {
      for (var s in a)
        !a.hasOwnProperty(s) ||
          (t != null && t.hasOwnProperty(s)) ||
          (s.indexOf("--") === 0
            ? e.setProperty(s, "")
            : s === "float"
              ? (e.cssFloat = "")
              : (e[s] = ""));
      for (var c in t)
        ((s = t[c]), t.hasOwnProperty(c) && a[c] !== s && Kf(e, c, s));
    } else for (var u in t) t.hasOwnProperty(u) && Kf(e, u, t[u]);
  }
  function Jo(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Tb = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    Eb =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function ir(e) {
    return Eb.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  function Ba() {}
  var Io = null;
  function Wo(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var zi = null,
    _i = null;
  function Ff(e) {
    var t = fn(e);
    if (t && (e = t.stateNode)) {
      var a = e[yt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            (Qe(
              e,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + pe("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var s = a[t];
              if (s !== e && s.form === e.form) {
                var c = s[yt] || null;
                if (!c) throw Error(o(90));
                Qe(
                  s,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((s = a[t]), s.form === e.form && Te(s));
          }
          break e;
        case "textarea":
          Ri(e, a.value, a.defaultValue);
          break e;
        case "select":
          ((t = a.value), t != null && Oa(e, !!a.multiple, t, !1));
      }
    }
  }
  var ec = !1;
  function Qf(e, t, a) {
    if (ec) return e(t, a);
    ec = !0;
    try {
      var s = e(t);
      return s;
    } finally {
      if (
        ((ec = !1),
        (zi !== null || _i !== null) &&
          (Xr(), zi && ((t = zi), (e = _i), (_i = zi = null), Ff(t), e)))
      )
        for (t = 0; t < e.length; t++) Ff(e[t]);
    }
  }
  function zs(e, t) {
    var a = e.stateNode;
    if (a === null) return null;
    var s = a[yt] || null;
    if (s === null) return null;
    a = s[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((s = !s.disabled) ||
          ((e = e.type),
          (s = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !s));
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function") throw Error(o(231, t, typeof a));
    return a;
  }
  var La = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    tc = !1;
  if (La)
    try {
      var _s = {};
      (Object.defineProperty(_s, "passive", {
        get: function () {
          tc = !0;
        },
      }),
        window.addEventListener("test", _s, _s),
        window.removeEventListener("test", _s, _s));
    } catch {
      tc = !1;
    }
  var gn = null,
    ac = null,
    sr = null;
  function Zf() {
    if (sr) return sr;
    var e,
      t = ac,
      a = t.length,
      s,
      c = "value" in gn ? gn.value : gn.textContent,
      u = c.length;
    for (e = 0; e < a && t[e] === c[e]; e++);
    var m = a - e;
    for (s = 1; s <= m && t[a - s] === c[u - s]; s++);
    return (sr = c.slice(e, 1 < s ? 1 - s : void 0));
  }
  function lr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function rr() {
    return !0;
  }
  function Jf() {
    return !1;
  }
  function kt(e) {
    function t(a, s, c, u, m) {
      ((this._reactName = a),
        (this._targetInst = c),
        (this.type = s),
        (this.nativeEvent = u),
        (this.target = m),
        (this.currentTarget = null));
      for (var v in e)
        e.hasOwnProperty(v) && ((a = e[v]), (this[v] = a ? a(u) : u[v]));
      return (
        (this.isDefaultPrevented = (
          u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
        )
          ? rr
          : Jf),
        (this.isPropagationStopped = Jf),
        this
      );
    }
    return (
      b(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = rr));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = rr));
        },
        persist: function () {},
        isPersistent: rr,
      }),
      t
    );
  }
  var Zn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    or = kt(Zn),
    Os = b({}, Zn, { view: 0, detail: 0 }),
    Ab = kt(Os),
    nc,
    ic,
    Bs,
    cr = b({}, Os, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: lc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Bs &&
              (Bs && e.type === "mousemove"
                ? ((nc = e.screenX - Bs.screenX), (ic = e.screenY - Bs.screenY))
                : (ic = nc = 0),
              (Bs = e)),
            nc);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ic;
      },
    }),
    If = kt(cr),
    Mb = b({}, cr, { dataTransfer: 0 }),
    Cb = kt(Mb),
    Db = b({}, Os, { relatedTarget: 0 }),
    sc = kt(Db),
    Rb = b({}, Zn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    kb = kt(Rb),
    zb = b({}, Zn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    _b = kt(zb),
    Ob = b({}, Zn, { data: 0 }),
    Wf = kt(Ob),
    Bb = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    Lb = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    Vb = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Ub(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = Vb[e])
        ? !!t[e]
        : !1;
  }
  function lc() {
    return Ub;
  }
  var Hb = b({}, Os, {
      key: function (e) {
        if (e.key) {
          var t = Bb[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = lr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
            ? Lb[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: lc,
      charCode: function (e) {
        return e.type === "keypress" ? lr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? lr(e)
          : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
    }),
    qb = kt(Hb),
    $b = b({}, cr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    eh = kt($b),
    Gb = b({}, Os, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: lc,
    }),
    Yb = kt(Gb),
    Xb = b({}, Zn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Kb = kt(Xb),
    Pb = b({}, cr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Fb = kt(Pb),
    Qb = b({}, Zn, { newState: 0, oldState: 0 }),
    Zb = kt(Qb),
    Jb = [9, 13, 27, 32],
    rc = La && "CompositionEvent" in window,
    Ls = null;
  La && "documentMode" in document && (Ls = document.documentMode);
  var Ib = La && "TextEvent" in window && !Ls,
    th = La && (!rc || (Ls && 8 < Ls && 11 >= Ls)),
    ah = " ",
    nh = !1;
  function ih(e, t) {
    switch (e) {
      case "keyup":
        return Jb.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function sh(e) {
    return (
      (e = e.detail),
      typeof e == "object" && "data" in e ? e.data : null
    );
  }
  var Oi = !1;
  function Wb(e, t) {
    switch (e) {
      case "compositionend":
        return sh(t);
      case "keypress":
        return t.which !== 32 ? null : ((nh = !0), ah);
      case "textInput":
        return ((e = t.data), e === ah && nh ? null : e);
      default:
        return null;
    }
  }
  function ev(e, t) {
    if (Oi)
      return e === "compositionend" || (!rc && ih(e, t))
        ? ((e = Zf()), (sr = ac = gn = null), (Oi = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return th && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var tv = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function lh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tv[e.type] : t === "textarea";
  }
  function rh(e, t, a, s) {
    (zi ? (_i ? _i.push(s) : (_i = [s])) : (zi = s),
      (t = Ir(t, "onChange")),
      0 < t.length &&
        ((a = new or("onChange", "change", null, a, s)),
        e.push({ event: a, listeners: t })));
  }
  var Vs = null,
    Us = null;
  function av(e) {
    G0(e, 0);
  }
  function ur(e) {
    var t = hn(e);
    if (Te(t)) return e;
  }
  function oh(e, t) {
    if (e === "change") return t;
  }
  var ch = !1;
  if (La) {
    var oc;
    if (La) {
      var cc = "oninput" in document;
      if (!cc) {
        var uh = document.createElement("div");
        (uh.setAttribute("oninput", "return;"),
          (cc = typeof uh.oninput == "function"));
      }
      oc = cc;
    } else oc = !1;
    ch = oc && (!document.documentMode || 9 < document.documentMode);
  }
  function dh() {
    Vs && (Vs.detachEvent("onpropertychange", fh), (Us = Vs = null));
  }
  function fh(e) {
    if (e.propertyName === "value" && ur(Us)) {
      var t = [];
      (rh(t, Us, e, Wo(e)), Qf(av, t));
    }
  }
  function nv(e, t, a) {
    e === "focusin"
      ? (dh(), (Vs = t), (Us = a), Vs.attachEvent("onpropertychange", fh))
      : e === "focusout" && dh();
  }
  function iv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return ur(Us);
  }
  function sv(e, t) {
    if (e === "click") return ur(t);
  }
  function lv(e, t) {
    if (e === "input" || e === "change") return ur(t);
  }
  function rv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var qt = typeof Object.is == "function" ? Object.is : rv;
  function Hs(e, t) {
    if (qt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(e),
      s = Object.keys(t);
    if (a.length !== s.length) return !1;
    for (s = 0; s < a.length; s++) {
      var c = a[s];
      if (!Yn.call(t, c) || !qt(e[c], t[c])) return !1;
    }
    return !0;
  }
  function hh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function mh(e, t) {
    var a = hh(e);
    e = 0;
    for (var s; a; ) {
      if (a.nodeType === 3) {
        if (((s = e + a.textContent.length), e <= t && s >= t))
          return { node: a, offset: t - e };
        e = s;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = hh(a);
    }
  }
  function ph(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ph(e, t.parentNode)
            : "contains" in e
              ? e.contains(t)
              : e.compareDocumentPosition
                ? !!(e.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function gh(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = ot(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = t.contentWindow;
      else break;
      t = ot(e.document);
    }
    return t;
  }
  function uc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var ov = La && "documentMode" in document && 11 >= document.documentMode,
    Bi = null,
    dc = null,
    qs = null,
    fc = !1;
  function xh(e, t, a) {
    var s =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    fc ||
      Bi == null ||
      Bi !== ot(s) ||
      ((s = Bi),
      "selectionStart" in s && uc(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (qs && Hs(qs, s)) ||
        ((qs = s),
        (s = Ir(dc, "onSelect")),
        0 < s.length &&
          ((t = new or("onSelect", "select", null, t, a)),
          e.push({ event: t, listeners: s }),
          (t.target = Bi))));
  }
  function Jn(e, t) {
    var a = {};
    return (
      (a[e.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + e] = "webkit" + t),
      (a["Moz" + e] = "moz" + t),
      a
    );
  }
  var Li = {
      animationend: Jn("Animation", "AnimationEnd"),
      animationiteration: Jn("Animation", "AnimationIteration"),
      animationstart: Jn("Animation", "AnimationStart"),
      transitionrun: Jn("Transition", "TransitionRun"),
      transitionstart: Jn("Transition", "TransitionStart"),
      transitioncancel: Jn("Transition", "TransitionCancel"),
      transitionend: Jn("Transition", "TransitionEnd"),
    },
    hc = {},
    yh = {};
  La &&
    ((yh = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Li.animationend.animation,
      delete Li.animationiteration.animation,
      delete Li.animationstart.animation),
    "TransitionEvent" in window || delete Li.transitionend.transition);
  function In(e) {
    if (hc[e]) return hc[e];
    if (!Li[e]) return e;
    var t = Li[e],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in yh) return (hc[e] = t[a]);
    return e;
  }
  var bh = In("animationend"),
    vh = In("animationiteration"),
    wh = In("animationstart"),
    cv = In("transitionrun"),
    uv = In("transitionstart"),
    dv = In("transitioncancel"),
    jh = In("transitionend"),
    Sh = new Map(),
    mc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  mc.push("scrollEnd");
  function pa(e, t) {
    (Sh.set(e, t), ja(t, [e]));
  }
  var dr =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof e == "object" &&
                  e !== null &&
                  typeof e.message == "string"
                    ? String(e.message)
                    : String(e),
                error: e,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", e);
              return;
            }
            console.error(e);
          },
    Wt = [],
    Vi = 0,
    pc = 0;
  function fr() {
    for (var e = Vi, t = (pc = Vi = 0); t < e; ) {
      var a = Wt[t];
      Wt[t++] = null;
      var s = Wt[t];
      Wt[t++] = null;
      var c = Wt[t];
      Wt[t++] = null;
      var u = Wt[t];
      if (((Wt[t++] = null), s !== null && c !== null)) {
        var m = s.pending;
        (m === null ? (c.next = c) : ((c.next = m.next), (m.next = c)),
          (s.pending = c));
      }
      u !== 0 && Nh(a, c, u);
    }
  }
  function hr(e, t, a, s) {
    ((Wt[Vi++] = e),
      (Wt[Vi++] = t),
      (Wt[Vi++] = a),
      (Wt[Vi++] = s),
      (pc |= s),
      (e.lanes |= s),
      (e = e.alternate),
      e !== null && (e.lanes |= s));
  }
  function gc(e, t, a, s) {
    return (hr(e, t, a, s), mr(e));
  }
  function Wn(e, t) {
    return (hr(e, null, null, t), mr(e));
  }
  function Nh(e, t, a) {
    e.lanes |= a;
    var s = e.alternate;
    s !== null && (s.lanes |= a);
    for (var c = !1, u = e.return; u !== null; )
      ((u.childLanes |= a),
        (s = u.alternate),
        s !== null && (s.childLanes |= a),
        u.tag === 22 &&
          ((e = u.stateNode), e === null || e._visibility & 1 || (c = !0)),
        (e = u),
        (u = u.return));
    return e.tag === 3
      ? ((u = e.stateNode),
        c &&
          t !== null &&
          ((c = 31 - xt(a)),
          (e = u.hiddenUpdates),
          (s = e[c]),
          s === null ? (e[c] = [t]) : s.push(t),
          (t.lane = a | 536870912)),
        u)
      : null;
  }
  function mr(e) {
    if (50 < cl) throw ((cl = 0), (Tu = null), Error(o(185)));
    for (var t = e.return; t !== null; ) ((e = t), (t = e.return));
    return e.tag === 3 ? e.stateNode : null;
  }
  var Ui = {};
  function fv(e, t, a, s) {
    ((this.tag = e),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function $t(e, t, a, s) {
    return new fv(e, t, a, s);
  }
  function xc(e) {
    return ((e = e.prototype), !(!e || !e.isReactComponent));
  }
  function Va(e, t) {
    var a = e.alternate;
    return (
      a === null
        ? ((a = $t(e.tag, t, e.key, e.mode)),
          (a.elementType = e.elementType),
          (a.type = e.type),
          (a.stateNode = e.stateNode),
          (a.alternate = e),
          (e.alternate = a))
        : ((a.pendingProps = t),
          (a.type = e.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = e.flags & 65011712),
      (a.childLanes = e.childLanes),
      (a.lanes = e.lanes),
      (a.child = e.child),
      (a.memoizedProps = e.memoizedProps),
      (a.memoizedState = e.memoizedState),
      (a.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = e.sibling),
      (a.index = e.index),
      (a.ref = e.ref),
      (a.refCleanup = e.refCleanup),
      a
    );
  }
  function Th(e, t) {
    e.flags &= 65011714;
    var a = e.alternate;
    return (
      a === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = a.childLanes),
          (e.lanes = a.lanes),
          (e.child = a.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = a.memoizedProps),
          (e.memoizedState = a.memoizedState),
          (e.updateQueue = a.updateQueue),
          (e.type = a.type),
          (t = a.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function pr(e, t, a, s, c, u) {
    var m = 0;
    if (((s = e), typeof e == "function")) xc(e) && (m = 1);
    else if (typeof e == "string")
      m = x1(e, a, re.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
          ? 27
          : 5;
    else
      e: switch (e) {
        case ie:
          return (
            (e = $t(31, a, t, c)),
            (e.elementType = ie),
            (e.lanes = u),
            e
          );
        case C:
          return ei(a.children, c, u, t);
        case D:
          ((m = 8), (c |= 24));
          break;
        case _:
          return (
            (e = $t(12, a, t, c | 2)),
            (e.elementType = _),
            (e.lanes = u),
            e
          );
        case X:
          return ((e = $t(13, a, t, c)), (e.elementType = X), (e.lanes = u), e);
        case W:
          return ((e = $t(19, a, t, c)), (e.elementType = W), (e.lanes = u), e);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case E:
                m = 10;
                break e;
              case V:
                m = 9;
                break e;
              case Q:
                m = 11;
                break e;
              case P:
                m = 14;
                break e;
              case Z:
                ((m = 16), (s = null));
                break e;
            }
          ((m = 29),
            (a = Error(o(130, e === null ? "null" : typeof e, ""))),
            (s = null));
      }
    return (
      (t = $t(m, a, t, c)),
      (t.elementType = e),
      (t.type = s),
      (t.lanes = u),
      t
    );
  }
  function ei(e, t, a, s) {
    return ((e = $t(7, e, s, t)), (e.lanes = a), e);
  }
  function yc(e, t, a) {
    return ((e = $t(6, e, null, t)), (e.lanes = a), e);
  }
  function Eh(e) {
    var t = $t(18, null, null, 0);
    return ((t.stateNode = e), t);
  }
  function bc(e, t, a) {
    return (
      (t = $t(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var Ah = new WeakMap();
  function ea(e, t) {
    if (typeof e == "object" && e !== null) {
      var a = Ah.get(e);
      return a !== void 0
        ? a
        : ((t = { value: e, source: t, stack: As(t) }), Ah.set(e, t), t);
    }
    return { value: e, source: t, stack: As(t) };
  }
  var Hi = [],
    qi = 0,
    gr = null,
    $s = 0,
    ta = [],
    aa = 0,
    xn = null,
    Sa = 1,
    Na = "";
  function Ua(e, t) {
    ((Hi[qi++] = $s), (Hi[qi++] = gr), (gr = e), ($s = t));
  }
  function Mh(e, t, a) {
    ((ta[aa++] = Sa), (ta[aa++] = Na), (ta[aa++] = xn), (xn = e));
    var s = Sa;
    e = Na;
    var c = 32 - xt(s) - 1;
    ((s &= ~(1 << c)), (a += 1));
    var u = 32 - xt(t) + c;
    if (30 < u) {
      var m = c - (c % 5);
      ((u = (s & ((1 << m) - 1)).toString(32)),
        (s >>= m),
        (c -= m),
        (Sa = (1 << (32 - xt(t) + c)) | (a << c) | s),
        (Na = u + e));
    } else ((Sa = (1 << u) | (a << c) | s), (Na = e));
  }
  function vc(e) {
    e.return !== null && (Ua(e, 1), Mh(e, 1, 0));
  }
  function wc(e) {
    for (; e === gr; )
      ((gr = Hi[--qi]), (Hi[qi] = null), ($s = Hi[--qi]), (Hi[qi] = null));
    for (; e === xn; )
      ((xn = ta[--aa]),
        (ta[aa] = null),
        (Na = ta[--aa]),
        (ta[aa] = null),
        (Sa = ta[--aa]),
        (ta[aa] = null));
  }
  function Ch(e, t) {
    ((ta[aa++] = Sa),
      (ta[aa++] = Na),
      (ta[aa++] = xn),
      (Sa = t.id),
      (Na = t.overflow),
      (xn = e));
  }
  var jt = null,
    Xe = null,
    Re = !1,
    yn = null,
    na = !1,
    jc = Error(o(519));
  function bn(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Gs(ea(t, e)), jc);
  }
  function Dh(e) {
    var t = e.stateNode,
      a = e.type,
      s = e.memoizedProps;
    switch (((t[nt] = e), (t[yt] = s), a)) {
      case "dialog":
        (Ae("cancel", t), Ae("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        Ae("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < dl.length; a++) Ae(dl[a], t);
        break;
      case "source":
        Ae("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (Ae("error", t), Ae("load", t));
        break;
      case "details":
        Ae("toggle", t);
        break;
      case "input":
        (Ae("invalid", t),
          _a(
            t,
            s.value,
            s.defaultValue,
            s.checked,
            s.defaultChecked,
            s.type,
            s.name,
            !0,
          ));
        break;
      case "select":
        Ae("invalid", t);
        break;
      case "textarea":
        (Ae("invalid", t), Xf(t, s.value, s.defaultValue, s.children));
    }
    ((a = s.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      s.suppressHydrationWarning === !0 ||
      P0(t.textContent, a)
        ? (s.popover != null && (Ae("beforetoggle", t), Ae("toggle", t)),
          s.onScroll != null && Ae("scroll", t),
          s.onScrollEnd != null && Ae("scrollend", t),
          s.onClick != null && (t.onclick = Ba),
          (t = !0))
        : (t = !1),
      t || bn(e, !0));
  }
  function Rh(e) {
    for (jt = e.return; jt; )
      switch (jt.tag) {
        case 5:
        case 31:
        case 13:
          na = !1;
          return;
        case 27:
        case 3:
          na = !0;
          return;
        default:
          jt = jt.return;
      }
  }
  function $i(e) {
    if (e !== jt) return !1;
    if (!Re) return (Rh(e), (Re = !0), !1);
    var t = e.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = e.type),
          (a =
            !(a !== "form" && a !== "button") || Hu(e.type, e.memoizedProps))),
        (a = !a)),
      a && Xe && bn(e),
      Rh(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      Xe = ap(e);
    } else if (t === 31) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      Xe = ap(e);
    } else
      t === 27
        ? ((t = Xe), zn(e.type) ? ((e = Xu), (Xu = null), (Xe = e)) : (Xe = t))
        : (Xe = jt ? sa(e.stateNode.nextSibling) : null);
    return !0;
  }
  function ti() {
    ((Xe = jt = null), (Re = !1));
  }
  function Sc() {
    var e = yn;
    return (
      e !== null &&
        (Bt === null ? (Bt = e) : Bt.push.apply(Bt, e), (yn = null)),
      e
    );
  }
  function Gs(e) {
    yn === null ? (yn = [e]) : yn.push(e);
  }
  var Nc = M(null),
    ai = null,
    Ha = null;
  function vn(e, t, a) {
    (ee(Nc, t._currentValue), (t._currentValue = a));
  }
  function qa(e) {
    ((e._currentValue = Nc.current), G(Nc));
  }
  function Tc(e, t, a) {
    for (; e !== null; ) {
      var s = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), s !== null && (s.childLanes |= t))
          : s !== null && (s.childLanes & t) !== t && (s.childLanes |= t),
        e === a)
      )
        break;
      e = e.return;
    }
  }
  function Ec(e, t, a, s) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var u = c.dependencies;
      if (u !== null) {
        var m = c.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var v = u;
          u = c;
          for (var N = 0; N < t.length; N++)
            if (v.context === t[N]) {
              ((u.lanes |= a),
                (v = u.alternate),
                v !== null && (v.lanes |= a),
                Tc(u.return, a, e),
                s || (m = null));
              break e;
            }
          u = v.next;
        }
      } else if (c.tag === 18) {
        if (((m = c.return), m === null)) throw Error(o(341));
        ((m.lanes |= a),
          (u = m.alternate),
          u !== null && (u.lanes |= a),
          Tc(m, a, e),
          (m = null));
      } else m = c.child;
      if (m !== null) m.return = c;
      else
        for (m = c; m !== null; ) {
          if (m === e) {
            m = null;
            break;
          }
          if (((c = m.sibling), c !== null)) {
            ((c.return = m.return), (m = c));
            break;
          }
          m = m.return;
        }
      c = m;
    }
  }
  function Gi(e, t, a, s) {
    e = null;
    for (var c = t, u = !1; c !== null; ) {
      if (!u) {
        if ((c.flags & 524288) !== 0) u = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var m = c.alternate;
        if (m === null) throw Error(o(387));
        if (((m = m.memoizedProps), m !== null)) {
          var v = c.type;
          qt(c.pendingProps.value, m.value) ||
            (e !== null ? e.push(v) : (e = [v]));
        }
      } else if (c === De.current) {
        if (((m = c.alternate), m === null)) throw Error(o(387));
        m.memoizedState.memoizedState !== c.memoizedState.memoizedState &&
          (e !== null ? e.push(gl) : (e = [gl]));
      }
      c = c.return;
    }
    (e !== null && Ec(t, e, a, s), (t.flags |= 262144));
  }
  function xr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!qt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function ni(e) {
    ((ai = e),
      (Ha = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null));
  }
  function St(e) {
    return kh(ai, e);
  }
  function yr(e, t) {
    return (ai === null && ni(e), kh(e, t));
  }
  function kh(e, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Ha === null)) {
      if (e === null) throw Error(o(308));
      ((Ha = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288));
    } else Ha = Ha.next = t;
    return a;
  }
  var hv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, s) {
                  e.push(s);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                e.forEach(function (a) {
                  return a();
                }));
            };
          },
    mv = n.unstable_scheduleCallback,
    pv = n.unstable_NormalPriority,
    ct = {
      $$typeof: E,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Ac() {
    return { controller: new hv(), data: new Map(), refCount: 0 };
  }
  function Ys(e) {
    (e.refCount--,
      e.refCount === 0 &&
        mv(pv, function () {
          e.controller.abort();
        }));
  }
  var Xs = null,
    Mc = 0,
    Yi = 0,
    Xi = null;
  function gv(e, t) {
    if (Xs === null) {
      var a = (Xs = []);
      ((Mc = 0),
        (Yi = Ru()),
        (Xi = {
          status: "pending",
          value: void 0,
          then: function (s) {
            a.push(s);
          },
        }));
    }
    return (Mc++, t.then(zh, zh), t);
  }
  function zh() {
    if (--Mc === 0 && Xs !== null) {
      Xi !== null && (Xi.status = "fulfilled");
      var e = Xs;
      ((Xs = null), (Yi = 0), (Xi = null));
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function xv(e, t) {
    var a = [],
      s = {
        status: "pending",
        value: null,
        reason: null,
        then: function (c) {
          a.push(c);
        },
      };
    return (
      e.then(
        function () {
          ((s.status = "fulfilled"), (s.value = t));
          for (var c = 0; c < a.length; c++) (0, a[c])(t);
        },
        function (c) {
          for (s.status = "rejected", s.reason = c, c = 0; c < a.length; c++)
            (0, a[c])(void 0);
        },
      ),
      s
    );
  }
  var _h = H.S;
  H.S = function (e, t) {
    ((x0 = At()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        gv(e, t),
      _h !== null && _h(e, t));
  };
  var ii = M(null);
  function Cc() {
    var e = ii.current;
    return e !== null ? e : Ge.pooledCache;
  }
  function br(e, t) {
    t === null ? ee(ii, ii.current) : ee(ii, t.pool);
  }
  function Oh() {
    var e = Cc();
    return e === null ? null : { parent: ct._currentValue, pool: e };
  }
  var Ki = Error(o(460)),
    Dc = Error(o(474)),
    vr = Error(o(542)),
    wr = { then: function () {} };
  function Bh(e) {
    return ((e = e.status), e === "fulfilled" || e === "rejected");
  }
  function Lh(e, t, a) {
    switch (
      ((a = e[a]),
      a === void 0 ? e.push(t) : a !== t && (t.then(Ba, Ba), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Uh(e), e);
      default:
        if (typeof t.status == "string") t.then(Ba, Ba);
        else {
          if (((e = Ge), e !== null && 100 < e.shellSuspendCounter))
            throw Error(o(482));
          ((e = t),
            (e.status = "pending"),
            e.then(
              function (s) {
                if (t.status === "pending") {
                  var c = t;
                  ((c.status = "fulfilled"), (c.value = s));
                }
              },
              function (s) {
                if (t.status === "pending") {
                  var c = t;
                  ((c.status = "rejected"), (c.reason = s));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Uh(e), e);
        }
        throw ((li = t), Ki);
    }
  }
  function si(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((li = a), Ki)
        : a;
    }
  }
  var li = null;
  function Vh() {
    if (li === null) throw Error(o(459));
    var e = li;
    return ((li = null), e);
  }
  function Uh(e) {
    if (e === Ki || e === vr) throw Error(o(483));
  }
  var Pi = null,
    Ks = 0;
  function jr(e) {
    var t = Ks;
    return ((Ks += 1), Pi === null && (Pi = []), Lh(Pi, e, t));
  }
  function Ps(e, t) {
    ((t = t.props.ref), (e.ref = t !== void 0 ? t : null));
  }
  function Sr(e, t) {
    throw t.$$typeof === w
      ? Error(o(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          o(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        ));
  }
  function Hh(e) {
    function t(z, A) {
      if (e) {
        var O = z.deletions;
        O === null ? ((z.deletions = [A]), (z.flags |= 16)) : O.push(A);
      }
    }
    function a(z, A) {
      if (!e) return null;
      for (; A !== null; ) (t(z, A), (A = A.sibling));
      return null;
    }
    function s(z) {
      for (var A = new Map(); z !== null; )
        (z.key !== null ? A.set(z.key, z) : A.set(z.index, z), (z = z.sibling));
      return A;
    }
    function c(z, A) {
      return ((z = Va(z, A)), (z.index = 0), (z.sibling = null), z);
    }
    function u(z, A, O) {
      return (
        (z.index = O),
        e
          ? ((O = z.alternate),
            O !== null
              ? ((O = O.index), O < A ? ((z.flags |= 67108866), A) : O)
              : ((z.flags |= 67108866), A))
          : ((z.flags |= 1048576), A)
      );
    }
    function m(z) {
      return (e && z.alternate === null && (z.flags |= 67108866), z);
    }
    function v(z, A, O, $) {
      return A === null || A.tag !== 6
        ? ((A = yc(O, z.mode, $)), (A.return = z), A)
        : ((A = c(A, O)), (A.return = z), A);
    }
    function N(z, A, O, $) {
      var ue = O.type;
      return ue === C
        ? q(z, A, O.props.children, $, O.key)
        : A !== null &&
            (A.elementType === ue ||
              (typeof ue == "object" &&
                ue !== null &&
                ue.$$typeof === Z &&
                si(ue) === A.type))
          ? ((A = c(A, O.props)), Ps(A, O), (A.return = z), A)
          : ((A = pr(O.type, O.key, O.props, null, z.mode, $)),
            Ps(A, O),
            (A.return = z),
            A);
    }
    function B(z, A, O, $) {
      return A === null ||
        A.tag !== 4 ||
        A.stateNode.containerInfo !== O.containerInfo ||
        A.stateNode.implementation !== O.implementation
        ? ((A = bc(O, z.mode, $)), (A.return = z), A)
        : ((A = c(A, O.children || [])), (A.return = z), A);
    }
    function q(z, A, O, $, ue) {
      return A === null || A.tag !== 7
        ? ((A = ei(O, z.mode, $, ue)), (A.return = z), A)
        : ((A = c(A, O)), (A.return = z), A);
    }
    function Y(z, A, O) {
      if (
        (typeof A == "string" && A !== "") ||
        typeof A == "number" ||
        typeof A == "bigint"
      )
        return ((A = yc("" + A, z.mode, O)), (A.return = z), A);
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case T:
            return (
              (O = pr(A.type, A.key, A.props, null, z.mode, O)),
              Ps(O, A),
              (O.return = z),
              O
            );
          case R:
            return ((A = bc(A, z.mode, O)), (A.return = z), A);
          case Z:
            return ((A = si(A)), Y(z, A, O));
        }
        if (ke(A) || we(A))
          return ((A = ei(A, z.mode, O, null)), (A.return = z), A);
        if (typeof A.then == "function") return Y(z, jr(A), O);
        if (A.$$typeof === E) return Y(z, yr(z, A), O);
        Sr(z, A);
      }
      return null;
    }
    function L(z, A, O, $) {
      var ue = A !== null ? A.key : null;
      if (
        (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
      )
        return ue !== null ? null : v(z, A, "" + O, $);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case T:
            return O.key === ue ? N(z, A, O, $) : null;
          case R:
            return O.key === ue ? B(z, A, O, $) : null;
          case Z:
            return ((O = si(O)), L(z, A, O, $));
        }
        if (ke(O) || we(O)) return ue !== null ? null : q(z, A, O, $, null);
        if (typeof O.then == "function") return L(z, A, jr(O), $);
        if (O.$$typeof === E) return L(z, A, yr(z, O), $);
        Sr(z, O);
      }
      return null;
    }
    function U(z, A, O, $, ue) {
      if (
        (typeof $ == "string" && $ !== "") ||
        typeof $ == "number" ||
        typeof $ == "bigint"
      )
        return ((z = z.get(O) || null), v(A, z, "" + $, ue));
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case T:
            return (
              (z = z.get($.key === null ? O : $.key) || null),
              N(A, z, $, ue)
            );
          case R:
            return (
              (z = z.get($.key === null ? O : $.key) || null),
              B(A, z, $, ue)
            );
          case Z:
            return (($ = si($)), U(z, A, O, $, ue));
        }
        if (ke($) || we($))
          return ((z = z.get(O) || null), q(A, z, $, ue, null));
        if (typeof $.then == "function") return U(z, A, O, jr($), ue);
        if ($.$$typeof === E) return U(z, A, O, yr(A, $), ue);
        Sr(A, $);
      }
      return null;
    }
    function se(z, A, O, $) {
      for (
        var ue = null, _e = null, oe = A, be = (A = 0), Ce = null;
        oe !== null && be < O.length;
        be++
      ) {
        oe.index > be ? ((Ce = oe), (oe = null)) : (Ce = oe.sibling);
        var Oe = L(z, oe, O[be], $);
        if (Oe === null) {
          oe === null && (oe = Ce);
          break;
        }
        (e && oe && Oe.alternate === null && t(z, oe),
          (A = u(Oe, A, be)),
          _e === null ? (ue = Oe) : (_e.sibling = Oe),
          (_e = Oe),
          (oe = Ce));
      }
      if (be === O.length) return (a(z, oe), Re && Ua(z, be), ue);
      if (oe === null) {
        for (; be < O.length; be++)
          ((oe = Y(z, O[be], $)),
            oe !== null &&
              ((A = u(oe, A, be)),
              _e === null ? (ue = oe) : (_e.sibling = oe),
              (_e = oe)));
        return (Re && Ua(z, be), ue);
      }
      for (oe = s(oe); be < O.length; be++)
        ((Ce = U(oe, z, be, O[be], $)),
          Ce !== null &&
            (e &&
              Ce.alternate !== null &&
              oe.delete(Ce.key === null ? be : Ce.key),
            (A = u(Ce, A, be)),
            _e === null ? (ue = Ce) : (_e.sibling = Ce),
            (_e = Ce)));
      return (
        e &&
          oe.forEach(function (Vn) {
            return t(z, Vn);
          }),
        Re && Ua(z, be),
        ue
      );
    }
    function de(z, A, O, $) {
      if (O == null) throw Error(o(151));
      for (
        var ue = null,
          _e = null,
          oe = A,
          be = (A = 0),
          Ce = null,
          Oe = O.next();
        oe !== null && !Oe.done;
        be++, Oe = O.next()
      ) {
        oe.index > be ? ((Ce = oe), (oe = null)) : (Ce = oe.sibling);
        var Vn = L(z, oe, Oe.value, $);
        if (Vn === null) {
          oe === null && (oe = Ce);
          break;
        }
        (e && oe && Vn.alternate === null && t(z, oe),
          (A = u(Vn, A, be)),
          _e === null ? (ue = Vn) : (_e.sibling = Vn),
          (_e = Vn),
          (oe = Ce));
      }
      if (Oe.done) return (a(z, oe), Re && Ua(z, be), ue);
      if (oe === null) {
        for (; !Oe.done; be++, Oe = O.next())
          ((Oe = Y(z, Oe.value, $)),
            Oe !== null &&
              ((A = u(Oe, A, be)),
              _e === null ? (ue = Oe) : (_e.sibling = Oe),
              (_e = Oe)));
        return (Re && Ua(z, be), ue);
      }
      for (oe = s(oe); !Oe.done; be++, Oe = O.next())
        ((Oe = U(oe, z, be, Oe.value, $)),
          Oe !== null &&
            (e &&
              Oe.alternate !== null &&
              oe.delete(Oe.key === null ? be : Oe.key),
            (A = u(Oe, A, be)),
            _e === null ? (ue = Oe) : (_e.sibling = Oe),
            (_e = Oe)));
      return (
        e &&
          oe.forEach(function (M1) {
            return t(z, M1);
          }),
        Re && Ua(z, be),
        ue
      );
    }
    function qe(z, A, O, $) {
      if (
        (typeof O == "object" &&
          O !== null &&
          O.type === C &&
          O.key === null &&
          (O = O.props.children),
        typeof O == "object" && O !== null)
      ) {
        switch (O.$$typeof) {
          case T:
            e: {
              for (var ue = O.key; A !== null; ) {
                if (A.key === ue) {
                  if (((ue = O.type), ue === C)) {
                    if (A.tag === 7) {
                      (a(z, A.sibling),
                        ($ = c(A, O.props.children)),
                        ($.return = z),
                        (z = $));
                      break e;
                    }
                  } else if (
                    A.elementType === ue ||
                    (typeof ue == "object" &&
                      ue !== null &&
                      ue.$$typeof === Z &&
                      si(ue) === A.type)
                  ) {
                    (a(z, A.sibling),
                      ($ = c(A, O.props)),
                      Ps($, O),
                      ($.return = z),
                      (z = $));
                    break e;
                  }
                  a(z, A);
                  break;
                } else t(z, A);
                A = A.sibling;
              }
              O.type === C
                ? (($ = ei(O.props.children, z.mode, $, O.key)),
                  ($.return = z),
                  (z = $))
                : (($ = pr(O.type, O.key, O.props, null, z.mode, $)),
                  Ps($, O),
                  ($.return = z),
                  (z = $));
            }
            return m(z);
          case R:
            e: {
              for (ue = O.key; A !== null; ) {
                if (A.key === ue)
                  if (
                    A.tag === 4 &&
                    A.stateNode.containerInfo === O.containerInfo &&
                    A.stateNode.implementation === O.implementation
                  ) {
                    (a(z, A.sibling),
                      ($ = c(A, O.children || [])),
                      ($.return = z),
                      (z = $));
                    break e;
                  } else {
                    a(z, A);
                    break;
                  }
                else t(z, A);
                A = A.sibling;
              }
              (($ = bc(O, z.mode, $)), ($.return = z), (z = $));
            }
            return m(z);
          case Z:
            return ((O = si(O)), qe(z, A, O, $));
        }
        if (ke(O)) return se(z, A, O, $);
        if (we(O)) {
          if (((ue = we(O)), typeof ue != "function")) throw Error(o(150));
          return ((O = ue.call(O)), de(z, A, O, $));
        }
        if (typeof O.then == "function") return qe(z, A, jr(O), $);
        if (O.$$typeof === E) return qe(z, A, yr(z, O), $);
        Sr(z, O);
      }
      return (typeof O == "string" && O !== "") ||
        typeof O == "number" ||
        typeof O == "bigint"
        ? ((O = "" + O),
          A !== null && A.tag === 6
            ? (a(z, A.sibling), ($ = c(A, O)), ($.return = z), (z = $))
            : (a(z, A), ($ = yc(O, z.mode, $)), ($.return = z), (z = $)),
          m(z))
        : a(z, A);
    }
    return function (z, A, O, $) {
      try {
        Ks = 0;
        var ue = qe(z, A, O, $);
        return ((Pi = null), ue);
      } catch (oe) {
        if (oe === Ki || oe === vr) throw oe;
        var _e = $t(29, oe, null, z.mode);
        return ((_e.lanes = $), (_e.return = z), _e);
      }
    };
  }
  var ri = Hh(!0),
    qh = Hh(!1),
    wn = !1;
  function Rc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function kc(e, t) {
    ((e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        }));
  }
  function jn(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Sn(e, t, a) {
    var s = e.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (Be & 2) !== 0)) {
      var c = s.pending;
      return (
        c === null ? (t.next = t) : ((t.next = c.next), (c.next = t)),
        (s.pending = t),
        (t = mr(e)),
        Nh(e, null, a),
        t
      );
    }
    return (hr(e, s, t, a), mr(e));
  }
  function Fs(e, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var s = t.lanes;
      ((s &= e.pendingLanes), (a |= s), (t.lanes = a), wt(e, a));
    }
  }
  function zc(e, t) {
    var a = e.updateQueue,
      s = e.alternate;
    if (s !== null && ((s = s.updateQueue), a === s)) {
      var c = null,
        u = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var m = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (u === null ? (c = u = m) : (u = u.next = m), (a = a.next));
        } while (a !== null);
        u === null ? (c = u = t) : (u = u.next = t);
      } else c = u = t;
      ((a = {
        baseState: s.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: u,
        shared: s.shared,
        callbacks: s.callbacks,
      }),
        (e.updateQueue = a));
      return;
    }
    ((e = a.lastBaseUpdate),
      e === null ? (a.firstBaseUpdate = t) : (e.next = t),
      (a.lastBaseUpdate = t));
  }
  var _c = !1;
  function Qs() {
    if (_c) {
      var e = Xi;
      if (e !== null) throw e;
    }
  }
  function Zs(e, t, a, s) {
    _c = !1;
    var c = e.updateQueue;
    wn = !1;
    var u = c.firstBaseUpdate,
      m = c.lastBaseUpdate,
      v = c.shared.pending;
    if (v !== null) {
      c.shared.pending = null;
      var N = v,
        B = N.next;
      ((N.next = null), m === null ? (u = B) : (m.next = B), (m = N));
      var q = e.alternate;
      q !== null &&
        ((q = q.updateQueue),
        (v = q.lastBaseUpdate),
        v !== m &&
          (v === null ? (q.firstBaseUpdate = B) : (v.next = B),
          (q.lastBaseUpdate = N)));
    }
    if (u !== null) {
      var Y = c.baseState;
      ((m = 0), (q = B = N = null), (v = u));
      do {
        var L = v.lane & -536870913,
          U = L !== v.lane;
        if (U ? (Me & L) === L : (s & L) === L) {
          (L !== 0 && L === Yi && (_c = !0),
            q !== null &&
              (q = q.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                }));
          e: {
            var se = e,
              de = v;
            L = t;
            var qe = a;
            switch (de.tag) {
              case 1:
                if (((se = de.payload), typeof se == "function")) {
                  Y = se.call(qe, Y, L);
                  break e;
                }
                Y = se;
                break e;
              case 3:
                se.flags = (se.flags & -65537) | 128;
              case 0:
                if (
                  ((se = de.payload),
                  (L = typeof se == "function" ? se.call(qe, Y, L) : se),
                  L == null)
                )
                  break e;
                Y = b({}, Y, L);
                break e;
              case 2:
                wn = !0;
            }
          }
          ((L = v.callback),
            L !== null &&
              ((e.flags |= 64),
              U && (e.flags |= 8192),
              (U = c.callbacks),
              U === null ? (c.callbacks = [L]) : U.push(L)));
        } else
          ((U = {
            lane: L,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            q === null ? ((B = q = U), (N = Y)) : (q = q.next = U),
            (m |= L));
        if (((v = v.next), v === null)) {
          if (((v = c.shared.pending), v === null)) break;
          ((U = v),
            (v = U.next),
            (U.next = null),
            (c.lastBaseUpdate = U),
            (c.shared.pending = null));
        }
      } while (!0);
      (q === null && (N = Y),
        (c.baseState = N),
        (c.firstBaseUpdate = B),
        (c.lastBaseUpdate = q),
        u === null && (c.shared.lanes = 0),
        (Mn |= m),
        (e.lanes = m),
        (e.memoizedState = Y));
    }
  }
  function $h(e, t) {
    if (typeof e != "function") throw Error(o(191, e));
    e.call(t);
  }
  function Gh(e, t) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++) $h(a[e], t);
  }
  var Fi = M(null),
    Nr = M(0);
  function Yh(e, t) {
    ((e = Za), ee(Nr, e), ee(Fi, t), (Za = e | t.baseLanes));
  }
  function Oc() {
    (ee(Nr, Za), ee(Fi, Fi.current));
  }
  function Bc() {
    ((Za = Nr.current), G(Fi), G(Nr));
  }
  var Gt = M(null),
    ia = null;
  function Nn(e) {
    var t = e.alternate;
    (ee(it, it.current & 1),
      ee(Gt, e),
      ia === null &&
        (t === null || Fi.current !== null || t.memoizedState !== null) &&
        (ia = e));
  }
  function Lc(e) {
    (ee(it, it.current), ee(Gt, e), ia === null && (ia = e));
  }
  function Xh(e) {
    e.tag === 22
      ? (ee(it, it.current), ee(Gt, e), ia === null && (ia = e))
      : Tn();
  }
  function Tn() {
    (ee(it, it.current), ee(Gt, Gt.current));
  }
  function Yt(e) {
    (G(Gt), ia === e && (ia = null), G(it));
  }
  var it = M(0);
  function Tr(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Gu(a) || Yu(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var $a = 0,
    ye = null,
    Ue = null,
    ut = null,
    Er = !1,
    Qi = !1,
    oi = !1,
    Ar = 0,
    Js = 0,
    Zi = null,
    yv = 0;
  function We() {
    throw Error(o(321));
  }
  function Vc(e, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < e.length; a++)
      if (!qt(e[a], t[a])) return !1;
    return !0;
  }
  function Uc(e, t, a, s, c, u) {
    return (
      ($a = u),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (H.H = e === null || e.memoizedState === null ? Mm : eu),
      (oi = !1),
      (u = a(s, c)),
      (oi = !1),
      Qi && (u = Ph(t, a, s, c)),
      Kh(e),
      u
    );
  }
  function Kh(e) {
    H.H = el;
    var t = Ue !== null && Ue.next !== null;
    if ((($a = 0), (ut = Ue = ye = null), (Er = !1), (Js = 0), (Zi = null), t))
      throw Error(o(300));
    e === null ||
      dt ||
      ((e = e.dependencies), e !== null && xr(e) && (dt = !0));
  }
  function Ph(e, t, a, s) {
    ye = e;
    var c = 0;
    do {
      if ((Qi && (Zi = null), (Js = 0), (Qi = !1), 25 <= c))
        throw Error(o(301));
      if (((c += 1), (ut = Ue = null), e.updateQueue != null)) {
        var u = e.updateQueue;
        ((u.lastEffect = null),
          (u.events = null),
          (u.stores = null),
          u.memoCache != null && (u.memoCache.index = 0));
      }
      ((H.H = Cm), (u = t(a, s)));
    } while (Qi);
    return u;
  }
  function bv() {
    var e = H.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? Is(t) : t),
      (e = e.useState()[0]),
      (Ue !== null ? Ue.memoizedState : null) !== e && (ye.flags |= 1024),
      t
    );
  }
  function Hc() {
    var e = Ar !== 0;
    return ((Ar = 0), e);
  }
  function qc(e, t, a) {
    ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a));
  }
  function $c(e) {
    if (Er) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        (t !== null && (t.pending = null), (e = e.next));
      }
      Er = !1;
    }
    (($a = 0), (ut = Ue = ye = null), (Qi = !1), (Js = Ar = 0), (Zi = null));
  }
  function Dt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (ut === null ? (ye.memoizedState = ut = e) : (ut = ut.next = e), ut);
  }
  function st() {
    if (Ue === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ue.next;
    var t = ut === null ? ye.memoizedState : ut.next;
    if (t !== null) ((ut = t), (Ue = e));
    else {
      if (e === null)
        throw ye.alternate === null ? Error(o(467)) : Error(o(310));
      ((Ue = e),
        (e = {
          memoizedState: Ue.memoizedState,
          baseState: Ue.baseState,
          baseQueue: Ue.baseQueue,
          queue: Ue.queue,
          next: null,
        }),
        ut === null ? (ye.memoizedState = ut = e) : (ut = ut.next = e));
    }
    return ut;
  }
  function Mr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Is(e) {
    var t = Js;
    return (
      (Js += 1),
      Zi === null && (Zi = []),
      (e = Lh(Zi, e, t)),
      (t = ye),
      (ut === null ? t.memoizedState : ut.next) === null &&
        ((t = t.alternate),
        (H.H = t === null || t.memoizedState === null ? Mm : eu)),
      e
    );
  }
  function Cr(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Is(e);
      if (e.$$typeof === E) return St(e);
    }
    throw Error(o(438, String(e)));
  }
  function Gc(e) {
    var t = null,
      a = ye.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var s = ye.alternate;
      s !== null &&
        ((s = s.updateQueue),
        s !== null &&
          ((s = s.memoCache),
          s != null &&
            (t = {
              data: s.data.map(function (c) {
                return c.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Mr()), (ye.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(e), s = 0; s < e; s++) a[s] = I;
    return (t.index++, a);
  }
  function Ga(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Dr(e) {
    var t = st();
    return Yc(t, Ue, e);
  }
  function Yc(e, t, a) {
    var s = e.queue;
    if (s === null) throw Error(o(311));
    s.lastRenderedReducer = a;
    var c = e.baseQueue,
      u = s.pending;
    if (u !== null) {
      if (c !== null) {
        var m = c.next;
        ((c.next = u.next), (u.next = m));
      }
      ((t.baseQueue = c = u), (s.pending = null));
    }
    if (((u = e.baseState), c === null)) e.memoizedState = u;
    else {
      t = c.next;
      var v = (m = null),
        N = null,
        B = t,
        q = !1;
      do {
        var Y = B.lane & -536870913;
        if (Y !== B.lane ? (Me & Y) === Y : ($a & Y) === Y) {
          var L = B.revertLane;
          if (L === 0)
            (N !== null &&
              (N = N.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: B.action,
                  hasEagerState: B.hasEagerState,
                  eagerState: B.eagerState,
                  next: null,
                }),
              Y === Yi && (q = !0));
          else if (($a & L) === L) {
            ((B = B.next), L === Yi && (q = !0));
            continue;
          } else
            ((Y = {
              lane: 0,
              revertLane: B.revertLane,
              gesture: null,
              action: B.action,
              hasEagerState: B.hasEagerState,
              eagerState: B.eagerState,
              next: null,
            }),
              N === null ? ((v = N = Y), (m = u)) : (N = N.next = Y),
              (ye.lanes |= L),
              (Mn |= L));
          ((Y = B.action),
            oi && a(u, Y),
            (u = B.hasEagerState ? B.eagerState : a(u, Y)));
        } else
          ((L = {
            lane: Y,
            revertLane: B.revertLane,
            gesture: B.gesture,
            action: B.action,
            hasEagerState: B.hasEagerState,
            eagerState: B.eagerState,
            next: null,
          }),
            N === null ? ((v = N = L), (m = u)) : (N = N.next = L),
            (ye.lanes |= Y),
            (Mn |= Y));
        B = B.next;
      } while (B !== null && B !== t);
      if (
        (N === null ? (m = u) : (N.next = v),
        !qt(u, e.memoizedState) && ((dt = !0), q && ((a = Xi), a !== null)))
      )
        throw a;
      ((e.memoizedState = u),
        (e.baseState = m),
        (e.baseQueue = N),
        (s.lastRenderedState = u));
    }
    return (c === null && (s.lanes = 0), [e.memoizedState, s.dispatch]);
  }
  function Xc(e) {
    var t = st(),
      a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = e;
    var s = a.dispatch,
      c = a.pending,
      u = t.memoizedState;
    if (c !== null) {
      a.pending = null;
      var m = (c = c.next);
      do ((u = e(u, m.action)), (m = m.next));
      while (m !== c);
      (qt(u, t.memoizedState) || (dt = !0),
        (t.memoizedState = u),
        t.baseQueue === null && (t.baseState = u),
        (a.lastRenderedState = u));
    }
    return [u, s];
  }
  function Fh(e, t, a) {
    var s = ye,
      c = st(),
      u = Re;
    if (u) {
      if (a === void 0) throw Error(o(407));
      a = a();
    } else a = t();
    var m = !qt((Ue || c).memoizedState, a);
    if (
      (m && ((c.memoizedState = a), (dt = !0)),
      (c = c.queue),
      Fc(Jh.bind(null, s, c, e), [e]),
      c.getSnapshot !== t || m || (ut !== null && ut.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Ji(9, { destroy: void 0 }, Zh.bind(null, s, c, a, t), null),
        Ge === null)
      )
        throw Error(o(349));
      u || ($a & 127) !== 0 || Qh(s, t, a);
    }
    return a;
  }
  function Qh(e, t, a) {
    ((e.flags |= 16384),
      (e = { getSnapshot: t, value: a }),
      (t = ye.updateQueue),
      t === null
        ? ((t = Mr()), (ye.updateQueue = t), (t.stores = [e]))
        : ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)));
  }
  function Zh(e, t, a, s) {
    ((t.value = a), (t.getSnapshot = s), Ih(t) && Wh(e));
  }
  function Jh(e, t, a) {
    return a(function () {
      Ih(t) && Wh(e);
    });
  }
  function Ih(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var a = t();
      return !qt(e, a);
    } catch {
      return !0;
    }
  }
  function Wh(e) {
    var t = Wn(e, 2);
    t !== null && Lt(t, e, 2);
  }
  function Kc(e) {
    var t = Dt();
    if (typeof e == "function") {
      var a = e;
      if (((e = a()), oi)) {
        Ht(!0);
        try {
          a();
        } finally {
          Ht(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ga,
        lastRenderedState: e,
      }),
      t
    );
  }
  function em(e, t, a, s) {
    return ((e.baseState = a), Yc(e, Ue, typeof s == "function" ? s : Ga));
  }
  function vv(e, t, a, s, c) {
    if (zr(e)) throw Error(o(485));
    if (((e = t.action), e !== null)) {
      var u = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (m) {
          u.listeners.push(m);
        },
      };
      (H.T !== null ? a(!0) : (u.isTransition = !1),
        s(u),
        (a = t.pending),
        a === null
          ? ((u.next = t.pending = u), tm(t, u))
          : ((u.next = a.next), (t.pending = a.next = u)));
    }
  }
  function tm(e, t) {
    var a = t.action,
      s = t.payload,
      c = e.state;
    if (t.isTransition) {
      var u = H.T,
        m = {};
      H.T = m;
      try {
        var v = a(c, s),
          N = H.S;
        (N !== null && N(m, v), am(e, t, v));
      } catch (B) {
        Pc(e, t, B);
      } finally {
        (u !== null && m.types !== null && (u.types = m.types), (H.T = u));
      }
    } else
      try {
        ((u = a(c, s)), am(e, t, u));
      } catch (B) {
        Pc(e, t, B);
      }
  }
  function am(e, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (s) {
            nm(e, t, s);
          },
          function (s) {
            return Pc(e, t, s);
          },
        )
      : nm(e, t, a);
  }
  function nm(e, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      im(t),
      (e.state = a),
      (t = e.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (e.pending = null) : ((a = a.next), (t.next = a), tm(e, a))));
  }
  function Pc(e, t, a) {
    var s = e.pending;
    if (((e.pending = null), s !== null)) {
      s = s.next;
      do ((t.status = "rejected"), (t.reason = a), im(t), (t = t.next));
      while (t !== s);
    }
    e.action = null;
  }
  function im(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function sm(e, t) {
    return t;
  }
  function lm(e, t) {
    if (Re) {
      var a = Ge.formState;
      if (a !== null) {
        e: {
          var s = ye;
          if (Re) {
            if (Xe) {
              t: {
                for (var c = Xe, u = na; c.nodeType !== 8; ) {
                  if (!u) {
                    c = null;
                    break t;
                  }
                  if (((c = sa(c.nextSibling)), c === null)) {
                    c = null;
                    break t;
                  }
                }
                ((u = c.data), (c = u === "F!" || u === "F" ? c : null));
              }
              if (c) {
                ((Xe = sa(c.nextSibling)), (s = c.data === "F!"));
                break e;
              }
            }
            bn(s);
          }
          s = !1;
        }
        s && (t = a[0]);
      }
    }
    return (
      (a = Dt()),
      (a.memoizedState = a.baseState = t),
      (s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: sm,
        lastRenderedState: t,
      }),
      (a.queue = s),
      (a = Tm.bind(null, ye, s)),
      (s.dispatch = a),
      (s = Kc(!1)),
      (u = Wc.bind(null, ye, !1, s.queue)),
      (s = Dt()),
      (c = { state: t, dispatch: null, action: e, pending: null }),
      (s.queue = c),
      (a = vv.bind(null, ye, c, u, a)),
      (c.dispatch = a),
      (s.memoizedState = e),
      [t, a, !1]
    );
  }
  function rm(e) {
    var t = st();
    return om(t, Ue, e);
  }
  function om(e, t, a) {
    if (
      ((t = Yc(e, t, sm)[0]),
      (e = Dr(Ga)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var s = Is(t);
      } catch (m) {
        throw m === Ki ? vr : m;
      }
    else s = t;
    t = st();
    var c = t.queue,
      u = c.dispatch;
    return (
      a !== t.memoizedState &&
        ((ye.flags |= 2048),
        Ji(9, { destroy: void 0 }, wv.bind(null, c, a), null)),
      [s, u, e]
    );
  }
  function wv(e, t) {
    e.action = t;
  }
  function cm(e) {
    var t = st(),
      a = Ue;
    if (a !== null) return om(t, a, e);
    (st(), (t = t.memoizedState), (a = st()));
    var s = a.queue.dispatch;
    return ((a.memoizedState = e), [t, s, !1]);
  }
  function Ji(e, t, a, s) {
    return (
      (e = { tag: e, create: a, deps: s, inst: t, next: null }),
      (t = ye.updateQueue),
      t === null && ((t = Mr()), (ye.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = e.next = e)
        : ((s = a.next), (a.next = e), (e.next = s), (t.lastEffect = e)),
      e
    );
  }
  function um() {
    return st().memoizedState;
  }
  function Rr(e, t, a, s) {
    var c = Dt();
    ((ye.flags |= e),
      (c.memoizedState = Ji(
        1 | t,
        { destroy: void 0 },
        a,
        s === void 0 ? null : s,
      )));
  }
  function kr(e, t, a, s) {
    var c = st();
    s = s === void 0 ? null : s;
    var u = c.memoizedState.inst;
    Ue !== null && s !== null && Vc(s, Ue.memoizedState.deps)
      ? (c.memoizedState = Ji(t, u, a, s))
      : ((ye.flags |= e), (c.memoizedState = Ji(1 | t, u, a, s)));
  }
  function dm(e, t) {
    Rr(8390656, 8, e, t);
  }
  function Fc(e, t) {
    kr(2048, 8, e, t);
  }
  function jv(e) {
    ye.flags |= 4;
    var t = ye.updateQueue;
    if (t === null) ((t = Mr()), (ye.updateQueue = t), (t.events = [e]));
    else {
      var a = t.events;
      a === null ? (t.events = [e]) : a.push(e);
    }
  }
  function fm(e) {
    var t = st().memoizedState;
    return (
      jv({ ref: t, nextImpl: e }),
      function () {
        if ((Be & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function hm(e, t) {
    return kr(4, 2, e, t);
  }
  function mm(e, t) {
    return kr(4, 4, e, t);
  }
  function pm(e, t) {
    if (typeof t == "function") {
      e = e();
      var a = t(e);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function gm(e, t, a) {
    ((a = a != null ? a.concat([e]) : null), kr(4, 4, pm.bind(null, t, e), a));
  }
  function Qc() {}
  function xm(e, t) {
    var a = st();
    t = t === void 0 ? null : t;
    var s = a.memoizedState;
    return t !== null && Vc(t, s[1]) ? s[0] : ((a.memoizedState = [e, t]), e);
  }
  function ym(e, t) {
    var a = st();
    t = t === void 0 ? null : t;
    var s = a.memoizedState;
    if (t !== null && Vc(t, s[1])) return s[0];
    if (((s = e()), oi)) {
      Ht(!0);
      try {
        e();
      } finally {
        Ht(!1);
      }
    }
    return ((a.memoizedState = [s, t]), s);
  }
  function Zc(e, t, a) {
    return a === void 0 || (($a & 1073741824) !== 0 && (Me & 261930) === 0)
      ? (e.memoizedState = t)
      : ((e.memoizedState = a), (e = b0()), (ye.lanes |= e), (Mn |= e), a);
  }
  function bm(e, t, a, s) {
    return qt(a, t)
      ? a
      : Fi.current !== null
        ? ((e = Zc(e, a, s)), qt(e, t) || (dt = !0), e)
        : ($a & 42) === 0 || (($a & 1073741824) !== 0 && (Me & 261930) === 0)
          ? ((dt = !0), (e.memoizedState = a))
          : ((e = b0()), (ye.lanes |= e), (Mn |= e), t);
  }
  function vm(e, t, a, s, c) {
    var u = K.p;
    K.p = u !== 0 && 8 > u ? u : 8;
    var m = H.T,
      v = {};
    ((H.T = v), Wc(e, !1, t, a));
    try {
      var N = c(),
        B = H.S;
      if (
        (B !== null && B(v, N),
        N !== null && typeof N == "object" && typeof N.then == "function")
      ) {
        var q = xv(N, s);
        Ws(e, t, q, Pt(e));
      } else Ws(e, t, s, Pt(e));
    } catch (Y) {
      Ws(e, t, { then: function () {}, status: "rejected", reason: Y }, Pt());
    } finally {
      ((K.p = u),
        m !== null && v.types !== null && (m.types = v.types),
        (H.T = m));
    }
  }
  function Sv() {}
  function Jc(e, t, a, s) {
    if (e.tag !== 5) throw Error(o(476));
    var c = wm(e).queue;
    vm(
      e,
      c,
      t,
      ae,
      a === null
        ? Sv
        : function () {
            return (jm(e), a(s));
          },
    );
  }
  function wm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ae,
      baseState: ae,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ga,
        lastRenderedState: ae,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ga,
          lastRenderedState: a,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function jm(e) {
    var t = wm(e);
    (t.next === null && (t = e.alternate.memoizedState),
      Ws(e, t.next.queue, {}, Pt()));
  }
  function Ic() {
    return St(gl);
  }
  function Sm() {
    return st().memoizedState;
  }
  function Nm() {
    return st().memoizedState;
  }
  function Nv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Pt();
          e = jn(a);
          var s = Sn(t, e, a);
          (s !== null && (Lt(s, t, a), Fs(s, t, a)),
            (t = { cache: Ac() }),
            (e.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function Tv(e, t, a) {
    var s = Pt();
    ((a = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      zr(e)
        ? Em(t, a)
        : ((a = gc(e, t, a, s)), a !== null && (Lt(a, e, s), Am(a, t, s))));
  }
  function Tm(e, t, a) {
    var s = Pt();
    Ws(e, t, a, s);
  }
  function Ws(e, t, a, s) {
    var c = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (zr(e)) Em(t, c);
    else {
      var u = e.alternate;
      if (
        e.lanes === 0 &&
        (u === null || u.lanes === 0) &&
        ((u = t.lastRenderedReducer), u !== null)
      )
        try {
          var m = t.lastRenderedState,
            v = u(m, a);
          if (((c.hasEagerState = !0), (c.eagerState = v), qt(v, m)))
            return (hr(e, t, c, 0), Ge === null && fr(), !1);
        } catch {}
      if (((a = gc(e, t, c, s)), a !== null))
        return (Lt(a, e, s), Am(a, t, s), !0);
    }
    return !1;
  }
  function Wc(e, t, a, s) {
    if (
      ((s = {
        lane: 2,
        revertLane: Ru(),
        gesture: null,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      zr(e))
    ) {
      if (t) throw Error(o(479));
    } else ((t = gc(e, a, s, 2)), t !== null && Lt(t, e, 2));
  }
  function zr(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
  }
  function Em(e, t) {
    Qi = Er = !0;
    var a = e.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (e.pending = t));
  }
  function Am(e, t, a) {
    if ((a & 4194048) !== 0) {
      var s = t.lanes;
      ((s &= e.pendingLanes), (a |= s), (t.lanes = a), wt(e, a));
    }
  }
  var el = {
    readContext: St,
    use: Cr,
    useCallback: We,
    useContext: We,
    useEffect: We,
    useImperativeHandle: We,
    useLayoutEffect: We,
    useInsertionEffect: We,
    useMemo: We,
    useReducer: We,
    useRef: We,
    useState: We,
    useDebugValue: We,
    useDeferredValue: We,
    useTransition: We,
    useSyncExternalStore: We,
    useId: We,
    useHostTransitionStatus: We,
    useFormState: We,
    useActionState: We,
    useOptimistic: We,
    useMemoCache: We,
    useCacheRefresh: We,
  };
  el.useEffectEvent = We;
  var Mm = {
      readContext: St,
      use: Cr,
      useCallback: function (e, t) {
        return ((Dt().memoizedState = [e, t === void 0 ? null : t]), e);
      },
      useContext: St,
      useEffect: dm,
      useImperativeHandle: function (e, t, a) {
        ((a = a != null ? a.concat([e]) : null),
          Rr(4194308, 4, pm.bind(null, t, e), a));
      },
      useLayoutEffect: function (e, t) {
        return Rr(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Rr(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var a = Dt();
        t = t === void 0 ? null : t;
        var s = e();
        if (oi) {
          Ht(!0);
          try {
            e();
          } finally {
            Ht(!1);
          }
        }
        return ((a.memoizedState = [s, t]), s);
      },
      useReducer: function (e, t, a) {
        var s = Dt();
        if (a !== void 0) {
          var c = a(t);
          if (oi) {
            Ht(!0);
            try {
              a(t);
            } finally {
              Ht(!1);
            }
          }
        } else c = t;
        return (
          (s.memoizedState = s.baseState = c),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: c,
          }),
          (s.queue = e),
          (e = e.dispatch = Tv.bind(null, ye, e)),
          [s.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Dt();
        return ((e = { current: e }), (t.memoizedState = e));
      },
      useState: function (e) {
        e = Kc(e);
        var t = e.queue,
          a = Tm.bind(null, ye, t);
        return ((t.dispatch = a), [e.memoizedState, a]);
      },
      useDebugValue: Qc,
      useDeferredValue: function (e, t) {
        var a = Dt();
        return Zc(a, e, t);
      },
      useTransition: function () {
        var e = Kc(!1);
        return (
          (e = vm.bind(null, ye, e.queue, !0, !1)),
          (Dt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, a) {
        var s = ye,
          c = Dt();
        if (Re) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (((a = t()), Ge === null)) throw Error(o(349));
          (Me & 127) !== 0 || Qh(s, t, a);
        }
        c.memoizedState = a;
        var u = { value: a, getSnapshot: t };
        return (
          (c.queue = u),
          dm(Jh.bind(null, s, u, e), [e]),
          (s.flags |= 2048),
          Ji(9, { destroy: void 0 }, Zh.bind(null, s, u, a, t), null),
          a
        );
      },
      useId: function () {
        var e = Dt(),
          t = Ge.identifierPrefix;
        if (Re) {
          var a = Na,
            s = Sa;
          ((a = (s & ~(1 << (32 - xt(s) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Ar++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = yv++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Ic,
      useFormState: lm,
      useActionState: lm,
      useOptimistic: function (e) {
        var t = Dt();
        t.memoizedState = t.baseState = e;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = Wc.bind(null, ye, !0, a)),
          (a.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Gc,
      useCacheRefresh: function () {
        return (Dt().memoizedState = Nv.bind(null, ye));
      },
      useEffectEvent: function (e) {
        var t = Dt(),
          a = { impl: e };
        return (
          (t.memoizedState = a),
          function () {
            if ((Be & 2) !== 0) throw Error(o(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    eu = {
      readContext: St,
      use: Cr,
      useCallback: xm,
      useContext: St,
      useEffect: Fc,
      useImperativeHandle: gm,
      useInsertionEffect: hm,
      useLayoutEffect: mm,
      useMemo: ym,
      useReducer: Dr,
      useRef: um,
      useState: function () {
        return Dr(Ga);
      },
      useDebugValue: Qc,
      useDeferredValue: function (e, t) {
        var a = st();
        return bm(a, Ue.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Dr(Ga)[0],
          t = st().memoizedState;
        return [typeof e == "boolean" ? e : Is(e), t];
      },
      useSyncExternalStore: Fh,
      useId: Sm,
      useHostTransitionStatus: Ic,
      useFormState: rm,
      useActionState: rm,
      useOptimistic: function (e, t) {
        var a = st();
        return em(a, Ue, e, t);
      },
      useMemoCache: Gc,
      useCacheRefresh: Nm,
    };
  eu.useEffectEvent = fm;
  var Cm = {
    readContext: St,
    use: Cr,
    useCallback: xm,
    useContext: St,
    useEffect: Fc,
    useImperativeHandle: gm,
    useInsertionEffect: hm,
    useLayoutEffect: mm,
    useMemo: ym,
    useReducer: Xc,
    useRef: um,
    useState: function () {
      return Xc(Ga);
    },
    useDebugValue: Qc,
    useDeferredValue: function (e, t) {
      var a = st();
      return Ue === null ? Zc(a, e, t) : bm(a, Ue.memoizedState, e, t);
    },
    useTransition: function () {
      var e = Xc(Ga)[0],
        t = st().memoizedState;
      return [typeof e == "boolean" ? e : Is(e), t];
    },
    useSyncExternalStore: Fh,
    useId: Sm,
    useHostTransitionStatus: Ic,
    useFormState: cm,
    useActionState: cm,
    useOptimistic: function (e, t) {
      var a = st();
      return Ue !== null
        ? em(a, Ue, e, t)
        : ((a.baseState = e), [e, a.queue.dispatch]);
    },
    useMemoCache: Gc,
    useCacheRefresh: Nm,
  };
  Cm.useEffectEvent = fm;
  function tu(e, t, a, s) {
    ((t = e.memoizedState),
      (a = a(s, t)),
      (a = a == null ? t : b({}, t, a)),
      (e.memoizedState = a),
      e.lanes === 0 && (e.updateQueue.baseState = a));
  }
  var au = {
    enqueueSetState: function (e, t, a) {
      e = e._reactInternals;
      var s = Pt(),
        c = jn(s);
      ((c.payload = t),
        a != null && (c.callback = a),
        (t = Sn(e, c, s)),
        t !== null && (Lt(t, e, s), Fs(t, e, s)));
    },
    enqueueReplaceState: function (e, t, a) {
      e = e._reactInternals;
      var s = Pt(),
        c = jn(s);
      ((c.tag = 1),
        (c.payload = t),
        a != null && (c.callback = a),
        (t = Sn(e, c, s)),
        t !== null && (Lt(t, e, s), Fs(t, e, s)));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var a = Pt(),
        s = jn(a);
      ((s.tag = 2),
        t != null && (s.callback = t),
        (t = Sn(e, s, a)),
        t !== null && (Lt(t, e, a), Fs(t, e, a)));
    },
  };
  function Dm(e, t, a, s, c, u, m) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(s, u, m)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Hs(a, s) || !Hs(c, u)
          : !0
    );
  }
  function Rm(e, t, a, s) {
    ((e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, s),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, s),
      t.state !== e && au.enqueueReplaceState(t, t.state, null));
  }
  function ci(e, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var s in t) s !== "ref" && (a[s] = t[s]);
    }
    if ((e = e.defaultProps)) {
      a === t && (a = b({}, a));
      for (var c in e) a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  function km(e) {
    dr(e);
  }
  function zm(e) {
    console.error(e);
  }
  function _m(e) {
    dr(e);
  }
  function _r(e, t) {
    try {
      var a = e.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Om(e, t, a) {
    try {
      var s = e.onCaughtError;
      s(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (c) {
      setTimeout(function () {
        throw c;
      });
    }
  }
  function nu(e, t, a) {
    return (
      (a = jn(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        _r(e, t);
      }),
      a
    );
  }
  function Bm(e) {
    return ((e = jn(e)), (e.tag = 3), e);
  }
  function Lm(e, t, a, s) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var u = s.value;
      ((e.payload = function () {
        return c(u);
      }),
        (e.callback = function () {
          Om(t, a, s);
        }));
    }
    var m = a.stateNode;
    m !== null &&
      typeof m.componentDidCatch == "function" &&
      (e.callback = function () {
        (Om(t, a, s),
          typeof c != "function" &&
            (Cn === null ? (Cn = new Set([this])) : Cn.add(this)));
        var v = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function Ev(e, t, a, s, c) {
    if (
      ((a.flags |= 32768),
      s !== null && typeof s == "object" && typeof s.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && Gi(t, a, c, !0),
        (a = Gt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              ia === null ? Kr() : a.alternate === null && et === 0 && (et = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = c),
              s === wr
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([s])) : t.add(s),
                  Mu(e, s, c)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              s === wr
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([s])) : a.add(s)),
                  Mu(e, s, c)),
              !1
            );
        }
        throw Error(o(435, a.tag));
      }
      return (Mu(e, s, c), Kr(), !1);
    }
    if (Re)
      return (
        (t = Gt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = c),
            s !== jc && ((e = Error(o(422), { cause: s })), Gs(ea(e, a))))
          : (s !== jc && ((t = Error(o(423), { cause: s })), Gs(ea(t, a))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (c &= -c),
            (e.lanes |= c),
            (s = ea(s, a)),
            (c = nu(e.stateNode, s, c)),
            zc(e, c),
            et !== 4 && (et = 2)),
        !1
      );
    var u = Error(o(520), { cause: s });
    if (
      ((u = ea(u, a)),
      ol === null ? (ol = [u]) : ol.push(u),
      et !== 4 && (et = 2),
      t === null)
    )
      return !0;
    ((s = ea(s, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (e = c & -c),
            (a.lanes |= e),
            (e = nu(a.stateNode, s, e)),
            zc(a, e),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (u = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (u !== null &&
                  typeof u.componentDidCatch == "function" &&
                  (Cn === null || !Cn.has(u)))))
          )
            return (
              (a.flags |= 65536),
              (c &= -c),
              (a.lanes |= c),
              (c = Bm(c)),
              Lm(c, e, a, s),
              zc(a, c),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var iu = Error(o(461)),
    dt = !1;
  function Nt(e, t, a, s) {
    t.child = e === null ? qh(t, null, a, s) : ri(t, e.child, a, s);
  }
  function Vm(e, t, a, s, c) {
    a = a.render;
    var u = t.ref;
    if ("ref" in s) {
      var m = {};
      for (var v in s) v !== "ref" && (m[v] = s[v]);
    } else m = s;
    return (
      ni(t),
      (s = Uc(e, t, a, m, u, c)),
      (v = Hc()),
      e !== null && !dt
        ? (qc(e, t, c), Ya(e, t, c))
        : (Re && v && vc(t), (t.flags |= 1), Nt(e, t, s, c), t.child)
    );
  }
  function Um(e, t, a, s, c) {
    if (e === null) {
      var u = a.type;
      return typeof u == "function" &&
        !xc(u) &&
        u.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = u), Hm(e, t, u, s, c))
        : ((e = pr(a.type, null, s, t, t.mode, c)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((u = e.child), !fu(e, c))) {
      var m = u.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Hs), a(m, s) && e.ref === t.ref)
      )
        return Ya(e, t, c);
    }
    return (
      (t.flags |= 1),
      (e = Va(u, s)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Hm(e, t, a, s, c) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Hs(u, s) && e.ref === t.ref)
        if (((dt = !1), (t.pendingProps = s = u), fu(e, c)))
          (e.flags & 131072) !== 0 && (dt = !0);
        else return ((t.lanes = e.lanes), Ya(e, t, c));
    }
    return su(e, t, a, s, c);
  }
  function qm(e, t, a, s) {
    var c = s.children,
      u = e !== null ? e.memoizedState : null;
    if (
      (e === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      s.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((u = u !== null ? u.baseLanes | a : a), e !== null)) {
          for (s = t.child = e.child, c = 0; s !== null; )
            ((c = c | s.lanes | s.childLanes), (s = s.sibling));
          s = c & ~u;
        } else ((s = 0), (t.child = null));
        return $m(e, t, u, a, s);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && br(t, u !== null ? u.cachePool : null),
          u !== null ? Yh(t, u) : Oc(),
          Xh(t));
      else
        return (
          (s = t.lanes = 536870912),
          $m(e, t, u !== null ? u.baseLanes | a : a, a, s)
        );
    } else
      u !== null
        ? (br(t, u.cachePool), Yh(t, u), Tn(), (t.memoizedState = null))
        : (e !== null && br(t, null), Oc(), Tn());
    return (Nt(e, t, c, a), t.child);
  }
  function tl(e, t) {
    return (
      (e !== null && e.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function $m(e, t, a, s, c) {
    var u = Cc();
    return (
      (u = u === null ? null : { parent: ct._currentValue, pool: u }),
      (t.memoizedState = { baseLanes: a, cachePool: u }),
      e !== null && br(t, null),
      Oc(),
      Xh(t),
      e !== null && Gi(e, t, s, !0),
      (t.childLanes = c),
      null
    );
  }
  function Or(e, t) {
    return (
      (t = Lr({ mode: t.mode, children: t.children }, e.mode)),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Gm(e, t, a) {
    return (
      ri(t, e.child, null, a),
      (e = Or(t, t.pendingProps)),
      (e.flags |= 2),
      Yt(t),
      (t.memoizedState = null),
      e
    );
  }
  function Av(e, t, a) {
    var s = t.pendingProps,
      c = (t.flags & 128) !== 0;
    if (((t.flags &= -129), e === null)) {
      if (Re) {
        if (s.mode === "hidden")
          return ((e = Or(t, s)), (t.lanes = 536870912), tl(null, e));
        if (
          (Lc(t),
          (e = Xe)
            ? ((e = tp(e, na)),
              (e = e !== null && e.data === "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: xn !== null ? { id: Sa, overflow: Na } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Eh(e)),
                (a.return = t),
                (t.child = a),
                (jt = t),
                (Xe = null)))
            : (e = null),
          e === null)
        )
          throw bn(t);
        return ((t.lanes = 536870912), null);
      }
      return Or(t, s);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var m = u.dehydrated;
      if ((Lc(t), c))
        if (t.flags & 256) ((t.flags &= -257), (t = Gm(e, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = e.child), (t.flags |= 128), (t = null));
        else throw Error(o(558));
      else if (
        (dt || Gi(e, t, a, !1), (c = (a & e.childLanes) !== 0), dt || c)
      ) {
        if (
          ((s = Ge),
          s !== null && ((m = Mi(s, a)), m !== 0 && m !== u.retryLane))
        )
          throw ((u.retryLane = m), Wn(e, m), Lt(s, e, m), iu);
        (Kr(), (t = Gm(e, t, a)));
      } else
        ((e = u.treeContext),
          (Xe = sa(m.nextSibling)),
          (jt = t),
          (Re = !0),
          (yn = null),
          (na = !1),
          e !== null && Ch(t, e),
          (t = Or(t, s)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (e = Va(e.child, { mode: s.mode, children: s.children })),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Br(e, t) {
    var a = t.ref;
    if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(o(284));
      (e === null || e.ref !== a) && (t.flags |= 4194816);
    }
  }
  function su(e, t, a, s, c) {
    return (
      ni(t),
      (a = Uc(e, t, a, s, void 0, c)),
      (s = Hc()),
      e !== null && !dt
        ? (qc(e, t, c), Ya(e, t, c))
        : (Re && s && vc(t), (t.flags |= 1), Nt(e, t, a, c), t.child)
    );
  }
  function Ym(e, t, a, s, c, u) {
    return (
      ni(t),
      (t.updateQueue = null),
      (a = Ph(t, s, a, c)),
      Kh(e),
      (s = Hc()),
      e !== null && !dt
        ? (qc(e, t, u), Ya(e, t, u))
        : (Re && s && vc(t), (t.flags |= 1), Nt(e, t, a, u), t.child)
    );
  }
  function Xm(e, t, a, s, c) {
    if ((ni(t), t.stateNode === null)) {
      var u = Ui,
        m = a.contextType;
      (typeof m == "object" && m !== null && (u = St(m)),
        (u = new a(s, u)),
        (t.memoizedState =
          u.state !== null && u.state !== void 0 ? u.state : null),
        (u.updater = au),
        (t.stateNode = u),
        (u._reactInternals = t),
        (u = t.stateNode),
        (u.props = s),
        (u.state = t.memoizedState),
        (u.refs = {}),
        Rc(t),
        (m = a.contextType),
        (u.context = typeof m == "object" && m !== null ? St(m) : Ui),
        (u.state = t.memoizedState),
        (m = a.getDerivedStateFromProps),
        typeof m == "function" && (tu(t, a, m, s), (u.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function" ||
          (typeof u.UNSAFE_componentWillMount != "function" &&
            typeof u.componentWillMount != "function") ||
          ((m = u.state),
          typeof u.componentWillMount == "function" && u.componentWillMount(),
          typeof u.UNSAFE_componentWillMount == "function" &&
            u.UNSAFE_componentWillMount(),
          m !== u.state && au.enqueueReplaceState(u, u.state, null),
          Zs(t, s, u, c),
          Qs(),
          (u.state = t.memoizedState)),
        typeof u.componentDidMount == "function" && (t.flags |= 4194308),
        (s = !0));
    } else if (e === null) {
      u = t.stateNode;
      var v = t.memoizedProps,
        N = ci(a, v);
      u.props = N;
      var B = u.context,
        q = a.contextType;
      ((m = Ui), typeof q == "object" && q !== null && (m = St(q)));
      var Y = a.getDerivedStateFromProps;
      ((q =
        typeof Y == "function" ||
        typeof u.getSnapshotBeforeUpdate == "function"),
        (v = t.pendingProps !== v),
        q ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((v || B !== m) && Rm(t, u, s, m)),
        (wn = !1));
      var L = t.memoizedState;
      ((u.state = L),
        Zs(t, s, u, c),
        Qs(),
        (B = t.memoizedState),
        v || L !== B || wn
          ? (typeof Y == "function" && (tu(t, a, Y, s), (B = t.memoizedState)),
            (N = wn || Dm(t, a, N, s, L, B, m))
              ? (q ||
                  (typeof u.UNSAFE_componentWillMount != "function" &&
                    typeof u.componentWillMount != "function") ||
                  (typeof u.componentWillMount == "function" &&
                    u.componentWillMount(),
                  typeof u.UNSAFE_componentWillMount == "function" &&
                    u.UNSAFE_componentWillMount()),
                typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof u.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = s),
                (t.memoizedState = B)),
            (u.props = s),
            (u.state = B),
            (u.context = m),
            (s = N))
          : (typeof u.componentDidMount == "function" && (t.flags |= 4194308),
            (s = !1)));
    } else {
      ((u = t.stateNode),
        kc(e, t),
        (m = t.memoizedProps),
        (q = ci(a, m)),
        (u.props = q),
        (Y = t.pendingProps),
        (L = u.context),
        (B = a.contextType),
        (N = Ui),
        typeof B == "object" && B !== null && (N = St(B)),
        (v = a.getDerivedStateFromProps),
        (B =
          typeof v == "function" ||
          typeof u.getSnapshotBeforeUpdate == "function") ||
          (typeof u.UNSAFE_componentWillReceiveProps != "function" &&
            typeof u.componentWillReceiveProps != "function") ||
          ((m !== Y || L !== N) && Rm(t, u, s, N)),
        (wn = !1),
        (L = t.memoizedState),
        (u.state = L),
        Zs(t, s, u, c),
        Qs());
      var U = t.memoizedState;
      m !== Y ||
      L !== U ||
      wn ||
      (e !== null && e.dependencies !== null && xr(e.dependencies))
        ? (typeof v == "function" && (tu(t, a, v, s), (U = t.memoizedState)),
          (q =
            wn ||
            Dm(t, a, q, s, L, U, N) ||
            (e !== null && e.dependencies !== null && xr(e.dependencies)))
            ? (B ||
                (typeof u.UNSAFE_componentWillUpdate != "function" &&
                  typeof u.componentWillUpdate != "function") ||
                (typeof u.componentWillUpdate == "function" &&
                  u.componentWillUpdate(s, U, N),
                typeof u.UNSAFE_componentWillUpdate == "function" &&
                  u.UNSAFE_componentWillUpdate(s, U, N)),
              typeof u.componentDidUpdate == "function" && (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof u.componentDidUpdate != "function" ||
                (m === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 4),
              typeof u.getSnapshotBeforeUpdate != "function" ||
                (m === e.memoizedProps && L === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = s),
              (t.memoizedState = U)),
          (u.props = s),
          (u.state = U),
          (u.context = N),
          (s = q))
        : (typeof u.componentDidUpdate != "function" ||
            (m === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 4),
          typeof u.getSnapshotBeforeUpdate != "function" ||
            (m === e.memoizedProps && L === e.memoizedState) ||
            (t.flags |= 1024),
          (s = !1));
    }
    return (
      (u = s),
      Br(e, t),
      (s = (t.flags & 128) !== 0),
      u || s
        ? ((u = t.stateNode),
          (a =
            s && typeof a.getDerivedStateFromError != "function"
              ? null
              : u.render()),
          (t.flags |= 1),
          e !== null && s
            ? ((t.child = ri(t, e.child, null, c)),
              (t.child = ri(t, null, a, c)))
            : Nt(e, t, a, c),
          (t.memoizedState = u.state),
          (e = t.child))
        : (e = Ya(e, t, c)),
      e
    );
  }
  function Km(e, t, a, s) {
    return (ti(), (t.flags |= 256), Nt(e, t, a, s), t.child);
  }
  var lu = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function ru(e) {
    return { baseLanes: e, cachePool: Oh() };
  }
  function ou(e, t, a) {
    return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= Kt), e);
  }
  function Pm(e, t, a) {
    var s = t.pendingProps,
      c = !1,
      u = (t.flags & 128) !== 0,
      m;
    if (
      ((m = u) ||
        (m =
          e !== null && e.memoizedState === null ? !1 : (it.current & 2) !== 0),
      m && ((c = !0), (t.flags &= -129)),
      (m = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (Re) {
        if (
          (c ? Nn(t) : Tn(),
          (e = Xe)
            ? ((e = tp(e, na)),
              (e = e !== null && e.data !== "&" ? e : null),
              e !== null &&
                ((t.memoizedState = {
                  dehydrated: e,
                  treeContext: xn !== null ? { id: Sa, overflow: Na } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = Eh(e)),
                (a.return = t),
                (t.child = a),
                (jt = t),
                (Xe = null)))
            : (e = null),
          e === null)
        )
          throw bn(t);
        return (Yu(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var v = s.children;
      return (
        (s = s.fallback),
        c
          ? (Tn(),
            (c = t.mode),
            (v = Lr({ mode: "hidden", children: v }, c)),
            (s = ei(s, c, a, null)),
            (v.return = t),
            (s.return = t),
            (v.sibling = s),
            (t.child = v),
            (s = t.child),
            (s.memoizedState = ru(a)),
            (s.childLanes = ou(e, m, a)),
            (t.memoizedState = lu),
            tl(null, s))
          : (Nn(t), cu(t, v))
      );
    }
    var N = e.memoizedState;
    if (N !== null && ((v = N.dehydrated), v !== null)) {
      if (u)
        t.flags & 256
          ? (Nn(t), (t.flags &= -257), (t = uu(e, t, a)))
          : t.memoizedState !== null
            ? (Tn(), (t.child = e.child), (t.flags |= 128), (t = null))
            : (Tn(),
              (v = s.fallback),
              (c = t.mode),
              (s = Lr({ mode: "visible", children: s.children }, c)),
              (v = ei(v, c, a, null)),
              (v.flags |= 2),
              (s.return = t),
              (v.return = t),
              (s.sibling = v),
              (t.child = s),
              ri(t, e.child, null, a),
              (s = t.child),
              (s.memoizedState = ru(a)),
              (s.childLanes = ou(e, m, a)),
              (t.memoizedState = lu),
              (t = tl(null, s)));
      else if ((Nn(t), Yu(v))) {
        if (((m = v.nextSibling && v.nextSibling.dataset), m)) var B = m.dgst;
        ((m = B),
          (s = Error(o(419))),
          (s.stack = ""),
          (s.digest = m),
          Gs({ value: s, source: null, stack: null }),
          (t = uu(e, t, a)));
      } else if (
        (dt || Gi(e, t, a, !1), (m = (a & e.childLanes) !== 0), dt || m)
      ) {
        if (
          ((m = Ge),
          m !== null && ((s = Mi(m, a)), s !== 0 && s !== N.retryLane))
        )
          throw ((N.retryLane = s), Wn(e, s), Lt(m, e, s), iu);
        (Gu(v) || Kr(), (t = uu(e, t, a)));
      } else
        Gu(v)
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = N.treeContext),
            (Xe = sa(v.nextSibling)),
            (jt = t),
            (Re = !0),
            (yn = null),
            (na = !1),
            e !== null && Ch(t, e),
            (t = cu(t, s.children)),
            (t.flags |= 4096));
      return t;
    }
    return c
      ? (Tn(),
        (v = s.fallback),
        (c = t.mode),
        (N = e.child),
        (B = N.sibling),
        (s = Va(N, { mode: "hidden", children: s.children })),
        (s.subtreeFlags = N.subtreeFlags & 65011712),
        B !== null ? (v = Va(B, v)) : ((v = ei(v, c, a, null)), (v.flags |= 2)),
        (v.return = t),
        (s.return = t),
        (s.sibling = v),
        (t.child = s),
        tl(null, s),
        (s = t.child),
        (v = e.child.memoizedState),
        v === null
          ? (v = ru(a))
          : ((c = v.cachePool),
            c !== null
              ? ((N = ct._currentValue),
                (c = c.parent !== N ? { parent: N, pool: N } : c))
              : (c = Oh()),
            (v = { baseLanes: v.baseLanes | a, cachePool: c })),
        (s.memoizedState = v),
        (s.childLanes = ou(e, m, a)),
        (t.memoizedState = lu),
        tl(e.child, s))
      : (Nn(t),
        (a = e.child),
        (e = a.sibling),
        (a = Va(a, { mode: "visible", children: s.children })),
        (a.return = t),
        (a.sibling = null),
        e !== null &&
          ((m = t.deletions),
          m === null ? ((t.deletions = [e]), (t.flags |= 16)) : m.push(e)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function cu(e, t) {
    return (
      (t = Lr({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Lr(e, t) {
    return ((e = $t(22, e, null, t)), (e.lanes = 0), e);
  }
  function uu(e, t, a) {
    return (
      ri(t, e.child, null, a),
      (e = cu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function Fm(e, t, a) {
    e.lanes |= t;
    var s = e.alternate;
    (s !== null && (s.lanes |= t), Tc(e.return, t, a));
  }
  function du(e, t, a, s, c, u) {
    var m = e.memoizedState;
    m === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: a,
          tailMode: c,
          treeForkCount: u,
        })
      : ((m.isBackwards = t),
        (m.rendering = null),
        (m.renderingStartTime = 0),
        (m.last = s),
        (m.tail = a),
        (m.tailMode = c),
        (m.treeForkCount = u));
  }
  function Qm(e, t, a) {
    var s = t.pendingProps,
      c = s.revealOrder,
      u = s.tail;
    s = s.children;
    var m = it.current,
      v = (m & 2) !== 0;
    if (
      (v ? ((m = (m & 1) | 2), (t.flags |= 128)) : (m &= 1),
      ee(it, m),
      Nt(e, t, s, a),
      (s = Re ? $s : 0),
      !v && e !== null && (e.flags & 128) !== 0)
    )
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fm(e, a, t);
        else if (e.tag === 19) Fm(e, a, t);
        else if (e.child !== null) {
          ((e.child.return = e), (e = e.child));
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    switch (c) {
      case "forwards":
        for (a = t.child, c = null; a !== null; )
          ((e = a.alternate),
            e !== null && Tr(e) === null && (c = a),
            (a = a.sibling));
        ((a = c),
          a === null
            ? ((c = t.child), (t.child = null))
            : ((c = a.sibling), (a.sibling = null)),
          du(t, !1, c, a, u, s));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, c = t.child, t.child = null; c !== null; ) {
          if (((e = c.alternate), e !== null && Tr(e) === null)) {
            t.child = c;
            break;
          }
          ((e = c.sibling), (c.sibling = a), (a = c), (c = e));
        }
        du(t, !0, a, null, u, s);
        break;
      case "together":
        du(t, !1, null, null, void 0, s);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ya(e, t, a) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Mn |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((Gi(e, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, a = Va(e, e.pendingProps), t.child = a, a.return = t;
        e.sibling !== null;
      )
        ((e = e.sibling),
          (a = a.sibling = Va(e, e.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function fu(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && xr(e)));
  }
  function Mv(e, t, a) {
    switch (t.tag) {
      case 3:
        (at(t, t.stateNode.containerInfo),
          vn(t, ct, e.memoizedState.cache),
          ti());
        break;
      case 27:
      case 5:
        sn(t);
        break;
      case 4:
        at(t, t.stateNode.containerInfo);
        break;
      case 10:
        vn(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Lc(t), null);
        break;
      case 13:
        var s = t.memoizedState;
        if (s !== null)
          return s.dehydrated !== null
            ? (Nn(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Pm(e, t, a)
              : (Nn(t), (e = Ya(e, t, a)), e !== null ? e.sibling : null);
        Nn(t);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (
          ((s = (a & t.childLanes) !== 0),
          s || (Gi(e, t, a, !1), (s = (a & t.childLanes) !== 0)),
          c)
        ) {
          if (s) return Qm(e, t, a);
          t.flags |= 128;
        }
        if (
          ((c = t.memoizedState),
          c !== null &&
            ((c.rendering = null), (c.tail = null), (c.lastEffect = null)),
          ee(it, it.current),
          s)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), qm(e, t, a, t.pendingProps));
      case 24:
        vn(t, ct, e.memoizedState.cache);
    }
    return Ya(e, t, a);
  }
  function Zm(e, t, a) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) dt = !0;
      else {
        if (!fu(e, a) && (t.flags & 128) === 0) return ((dt = !1), Mv(e, t, a));
        dt = (e.flags & 131072) !== 0;
      }
    else ((dt = !1), Re && (t.flags & 1048576) !== 0 && Mh(t, $s, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          var s = t.pendingProps;
          if (((e = si(t.elementType)), (t.type = e), typeof e == "function"))
            xc(e)
              ? ((s = ci(e, s)), (t.tag = 1), (t = Xm(null, t, e, s, a)))
              : ((t.tag = 0), (t = su(null, t, e, s, a)));
          else {
            if (e != null) {
              var c = e.$$typeof;
              if (c === Q) {
                ((t.tag = 11), (t = Vm(null, t, e, s, a)));
                break e;
              } else if (c === P) {
                ((t.tag = 14), (t = Um(null, t, e, s, a)));
                break e;
              }
            }
            throw ((t = je(e) || e), Error(o(306, t, "")));
          }
        }
        return t;
      case 0:
        return su(e, t, t.type, t.pendingProps, a);
      case 1:
        return ((s = t.type), (c = ci(s, t.pendingProps)), Xm(e, t, s, c, a));
      case 3:
        e: {
          if ((at(t, t.stateNode.containerInfo), e === null))
            throw Error(o(387));
          s = t.pendingProps;
          var u = t.memoizedState;
          ((c = u.element), kc(e, t), Zs(t, s, null, a));
          var m = t.memoizedState;
          if (
            ((s = m.cache),
            vn(t, ct, s),
            s !== u.cache && Ec(t, [ct], a, !0),
            Qs(),
            (s = m.element),
            u.isDehydrated)
          )
            if (
              ((u = { element: s, isDehydrated: !1, cache: m.cache }),
              (t.updateQueue.baseState = u),
              (t.memoizedState = u),
              t.flags & 256)
            ) {
              t = Km(e, t, s, a);
              break e;
            } else if (s !== c) {
              ((c = ea(Error(o(424)), t)), Gs(c), (t = Km(e, t, s, a)));
              break e;
            } else
              for (
                e = t.stateNode.containerInfo,
                  e.nodeType === 9
                    ? (e = e.body)
                    : (e = e.nodeName === "HTML" ? e.ownerDocument.body : e),
                  Xe = sa(e.firstChild),
                  jt = t,
                  Re = !0,
                  yn = null,
                  na = !0,
                  a = qh(t, null, s, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((ti(), s === c)) {
              t = Ya(e, t, a);
              break e;
            }
            Nt(e, t, s, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Br(e, t),
          e === null
            ? (a = rp(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : Re ||
                ((a = t.type),
                (e = t.pendingProps),
                (s = Wr(ve.current).createElement(a)),
                (s[nt] = t),
                (s[yt] = e),
                Tt(s, a, e),
                rt(s),
                (t.stateNode = s))
            : (t.memoizedState = rp(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState,
              )),
          null
        );
      case 27:
        return (
          sn(t),
          e === null &&
            Re &&
            ((s = t.stateNode = ip(t.type, t.pendingProps, ve.current)),
            (jt = t),
            (na = !0),
            (c = Xe),
            zn(t.type) ? ((Xu = c), (Xe = sa(s.firstChild))) : (Xe = c)),
          Nt(e, t, t.pendingProps.children, a),
          Br(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            Re &&
            ((c = s = Xe) &&
              ((s = i1(s, t.type, t.pendingProps, na)),
              s !== null
                ? ((t.stateNode = s),
                  (jt = t),
                  (Xe = sa(s.firstChild)),
                  (na = !1),
                  (c = !0))
                : (c = !1)),
            c || bn(t)),
          sn(t),
          (c = t.type),
          (u = t.pendingProps),
          (m = e !== null ? e.memoizedProps : null),
          (s = u.children),
          Hu(c, u) ? (s = null) : m !== null && Hu(c, m) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((c = Uc(e, t, bv, null, null, a)), (gl._currentValue = c)),
          Br(e, t),
          Nt(e, t, s, a),
          t.child
        );
      case 6:
        return (
          e === null &&
            Re &&
            ((e = a = Xe) &&
              ((a = s1(a, t.pendingProps, na)),
              a !== null
                ? ((t.stateNode = a), (jt = t), (Xe = null), (e = !0))
                : (e = !1)),
            e || bn(t)),
          null
        );
      case 13:
        return Pm(e, t, a);
      case 4:
        return (
          at(t, t.stateNode.containerInfo),
          (s = t.pendingProps),
          e === null ? (t.child = ri(t, null, s, a)) : Nt(e, t, s, a),
          t.child
        );
      case 11:
        return Vm(e, t, t.type, t.pendingProps, a);
      case 7:
        return (Nt(e, t, t.pendingProps, a), t.child);
      case 8:
        return (Nt(e, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Nt(e, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (s = t.pendingProps),
          vn(t, t.type, s.value),
          Nt(e, t, s.children, a),
          t.child
        );
      case 9:
        return (
          (c = t.type._context),
          (s = t.pendingProps.children),
          ni(t),
          (c = St(c)),
          (s = s(c)),
          (t.flags |= 1),
          Nt(e, t, s, a),
          t.child
        );
      case 14:
        return Um(e, t, t.type, t.pendingProps, a);
      case 15:
        return Hm(e, t, t.type, t.pendingProps, a);
      case 19:
        return Qm(e, t, a);
      case 31:
        return Av(e, t, a);
      case 22:
        return qm(e, t, a, t.pendingProps);
      case 24:
        return (
          ni(t),
          (s = St(ct)),
          e === null
            ? ((c = Cc()),
              c === null &&
                ((c = Ge),
                (u = Ac()),
                (c.pooledCache = u),
                u.refCount++,
                u !== null && (c.pooledCacheLanes |= a),
                (c = u)),
              (t.memoizedState = { parent: s, cache: c }),
              Rc(t),
              vn(t, ct, c))
            : ((e.lanes & a) !== 0 && (kc(e, t), Zs(t, null, null, a), Qs()),
              (c = e.memoizedState),
              (u = t.memoizedState),
              c.parent !== s
                ? ((c = { parent: s, cache: s }),
                  (t.memoizedState = c),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = c),
                  vn(t, ct, s))
                : ((s = u.cache),
                  vn(t, ct, s),
                  s !== c.cache && Ec(t, [ct], a, !0))),
          Nt(e, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function Xa(e) {
    e.flags |= 4;
  }
  function hu(e, t, a, s, c) {
    if (((t = (e.mode & 32) !== 0) && (t = !1), t)) {
      if (((e.flags |= 16777216), (c & 335544128) === c))
        if (e.stateNode.complete) e.flags |= 8192;
        else if (S0()) e.flags |= 8192;
        else throw ((li = wr), Dc);
    } else e.flags &= -16777217;
  }
  function Jm(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !fp(t)))
      if (S0()) e.flags |= 8192;
      else throw ((li = wr), Dc);
  }
  function Vr(e, t) {
    (t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? lt() : 536870912), (e.lanes |= t), (ts |= t)));
  }
  function al(e, t) {
    if (!Re)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (e.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = e.tail;
          for (var s = null; a !== null; )
            (a.alternate !== null && (s = a), (a = a.sibling));
          s === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      a = 0,
      s = 0;
    if (t)
      for (var c = e.child; c !== null; )
        ((a |= c.lanes | c.childLanes),
          (s |= c.subtreeFlags & 65011712),
          (s |= c.flags & 65011712),
          (c.return = e),
          (c = c.sibling));
    else
      for (c = e.child; c !== null; )
        ((a |= c.lanes | c.childLanes),
          (s |= c.subtreeFlags),
          (s |= c.flags),
          (c.return = e),
          (c = c.sibling));
    return ((e.subtreeFlags |= s), (e.childLanes = a), t);
  }
  function Cv(e, t, a) {
    var s = t.pendingProps;
    switch ((wc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Ke(t), null);
      case 1:
        return (Ke(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (s = null),
          e !== null && (s = e.memoizedState.cache),
          t.memoizedState.cache !== s && (t.flags |= 2048),
          qa(ct),
          Fe(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (e === null || e.child === null) &&
            ($i(t)
              ? Xa(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Sc())),
          Ke(t),
          null
        );
      case 26:
        var c = t.type,
          u = t.memoizedState;
        return (
          e === null
            ? (Xa(t),
              u !== null ? (Ke(t), Jm(t, u)) : (Ke(t), hu(t, c, null, s, a)))
            : u
              ? u !== e.memoizedState
                ? (Xa(t), Ke(t), Jm(t, u))
                : (Ke(t), (t.flags &= -16777217))
              : ((e = e.memoizedProps),
                e !== s && Xa(t),
                Ke(t),
                hu(t, c, e, s, a)),
          null
        );
      case 27:
        if (
          (wa(t),
          (a = ve.current),
          (c = t.type),
          e !== null && t.stateNode != null)
        )
          e.memoizedProps !== s && Xa(t);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return (Ke(t), null);
          }
          ((e = re.current),
            $i(t) ? Dh(t) : ((e = ip(c, s, a)), (t.stateNode = e), Xa(t)));
        }
        return (Ke(t), null);
      case 5:
        if ((wa(t), (c = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== s && Xa(t);
        else {
          if (!s) {
            if (t.stateNode === null) throw Error(o(166));
            return (Ke(t), null);
          }
          if (((u = re.current), $i(t))) Dh(t);
          else {
            var m = Wr(ve.current);
            switch (u) {
              case 1:
                u = m.createElementNS("http://www.w3.org/2000/svg", c);
                break;
              case 2:
                u = m.createElementNS("http://www.w3.org/1998/Math/MathML", c);
                break;
              default:
                switch (c) {
                  case "svg":
                    u = m.createElementNS("http://www.w3.org/2000/svg", c);
                    break;
                  case "math":
                    u = m.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      c,
                    );
                    break;
                  case "script":
                    ((u = m.createElement("div")),
                      (u.innerHTML = "<script><\/script>"),
                      (u = u.removeChild(u.firstChild)));
                    break;
                  case "select":
                    ((u =
                      typeof s.is == "string"
                        ? m.createElement("select", { is: s.is })
                        : m.createElement("select")),
                      s.multiple
                        ? (u.multiple = !0)
                        : s.size && (u.size = s.size));
                    break;
                  default:
                    u =
                      typeof s.is == "string"
                        ? m.createElement(c, { is: s.is })
                        : m.createElement(c);
                }
            }
            ((u[nt] = t), (u[yt] = s));
            e: for (m = t.child; m !== null; ) {
              if (m.tag === 5 || m.tag === 6) u.appendChild(m.stateNode);
              else if (m.tag !== 4 && m.tag !== 27 && m.child !== null) {
                ((m.child.return = m), (m = m.child));
                continue;
              }
              if (m === t) break e;
              for (; m.sibling === null; ) {
                if (m.return === null || m.return === t) break e;
                m = m.return;
              }
              ((m.sibling.return = m.return), (m = m.sibling));
            }
            t.stateNode = u;
            e: switch ((Tt(u, c, s), c)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break e;
              case "img":
                s = !0;
                break e;
              default:
                s = !1;
            }
            s && Xa(t);
          }
        }
        return (
          Ke(t),
          hu(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== s && Xa(t);
        else {
          if (typeof s != "string" && t.stateNode === null) throw Error(o(166));
          if (((e = ve.current), $i(t))) {
            if (
              ((e = t.stateNode),
              (a = t.memoizedProps),
              (s = null),
              (c = jt),
              c !== null)
            )
              switch (c.tag) {
                case 27:
                case 5:
                  s = c.memoizedProps;
              }
            ((e[nt] = t),
              (e = !!(
                e.nodeValue === a ||
                (s !== null && s.suppressHydrationWarning === !0) ||
                P0(e.nodeValue, a)
              )),
              e || bn(t, !0));
          } else
            ((e = Wr(e).createTextNode(s)), (e[nt] = t), (t.stateNode = e));
        }
        return (Ke(t), null);
      case 31:
        if (((a = t.memoizedState), e === null || e.memoizedState !== null)) {
          if (((s = $i(t)), a !== null)) {
            if (e === null) {
              if (!s) throw Error(o(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(o(557));
              e[nt] = t;
            } else
              (ti(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ke(t), (e = !1));
          } else
            ((a = Sc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = a),
              (e = !0));
          if (!e) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
          if ((t.flags & 128) !== 0) throw Error(o(558));
        }
        return (Ke(t), null);
      case 13:
        if (
          ((s = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((c = $i(t)), s !== null && s.dehydrated !== null)) {
            if (e === null) {
              if (!c) throw Error(o(318));
              if (
                ((c = t.memoizedState),
                (c = c !== null ? c.dehydrated : null),
                !c)
              )
                throw Error(o(317));
              c[nt] = t;
            } else
              (ti(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (Ke(t), (c = !1));
          } else
            ((c = Sc()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = c),
              (c = !0));
          if (!c) return t.flags & 256 ? (Yt(t), t) : (Yt(t), null);
        }
        return (
          Yt(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = s !== null),
              (e = e !== null && e.memoizedState !== null),
              a &&
                ((s = t.child),
                (c = null),
                s.alternate !== null &&
                  s.alternate.memoizedState !== null &&
                  s.alternate.memoizedState.cachePool !== null &&
                  (c = s.alternate.memoizedState.cachePool.pool),
                (u = null),
                s.memoizedState !== null &&
                  s.memoizedState.cachePool !== null &&
                  (u = s.memoizedState.cachePool.pool),
                u !== c && (s.flags |= 2048)),
              a !== e && a && (t.child.flags |= 8192),
              Vr(t, t.updateQueue),
              Ke(t),
              null)
        );
      case 4:
        return (Fe(), e === null && Ou(t.stateNode.containerInfo), Ke(t), null);
      case 10:
        return (qa(t.type), Ke(t), null);
      case 19:
        if ((G(it), (s = t.memoizedState), s === null)) return (Ke(t), null);
        if (((c = (t.flags & 128) !== 0), (u = s.rendering), u === null))
          if (c) al(s, !1);
          else {
            if (et !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((u = Tr(e)), u !== null)) {
                  for (
                    t.flags |= 128,
                      al(s, !1),
                      e = u.updateQueue,
                      t.updateQueue = e,
                      Vr(t, e),
                      t.subtreeFlags = 0,
                      e = a,
                      a = t.child;
                    a !== null;
                  )
                    (Th(a, e), (a = a.sibling));
                  return (
                    ee(it, (it.current & 1) | 2),
                    Re && Ua(t, s.treeForkCount),
                    t.child
                  );
                }
                e = e.sibling;
              }
            s.tail !== null &&
              At() > Gr &&
              ((t.flags |= 128), (c = !0), al(s, !1), (t.lanes = 4194304));
          }
        else {
          if (!c)
            if (((e = Tr(u)), e !== null)) {
              if (
                ((t.flags |= 128),
                (c = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Vr(t, e),
                al(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !u.alternate &&
                  !Re)
              )
                return (Ke(t), null);
            } else
              2 * At() - s.renderingStartTime > Gr &&
                a !== 536870912 &&
                ((t.flags |= 128), (c = !0), al(s, !1), (t.lanes = 4194304));
          s.isBackwards
            ? ((u.sibling = t.child), (t.child = u))
            : ((e = s.last),
              e !== null ? (e.sibling = u) : (t.child = u),
              (s.last = u));
        }
        return s.tail !== null
          ? ((e = s.tail),
            (s.rendering = e),
            (s.tail = e.sibling),
            (s.renderingStartTime = At()),
            (e.sibling = null),
            (a = it.current),
            ee(it, c ? (a & 1) | 2 : a & 1),
            Re && Ua(t, s.treeForkCount),
            e)
          : (Ke(t), null);
      case 22:
      case 23:
        return (
          Yt(t),
          Bc(),
          (s = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== s && (t.flags |= 8192)
            : s && (t.flags |= 8192),
          s
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ke(t),
          (a = t.updateQueue),
          a !== null && Vr(t, a.retryQueue),
          (a = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (a = e.memoizedState.cachePool.pool),
          (s = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (s = t.memoizedState.cachePool.pool),
          s !== a && (t.flags |= 2048),
          e !== null && G(ii),
          null
        );
      case 24:
        return (
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          qa(ct),
          Ke(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function Dv(e, t) {
    switch ((wc(t), t.tag)) {
      case 1:
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          qa(ct),
          Fe(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (wa(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((Yt(t), t.alternate === null)) throw Error(o(340));
          ti();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 13:
        if (
          (Yt(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          ti();
        }
        return (
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return (G(it), null);
      case 4:
        return (Fe(), null);
      case 10:
        return (qa(t.type), null);
      case 22:
      case 23:
        return (
          Yt(t),
          Bc(),
          e !== null && G(ii),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return (qa(ct), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Im(e, t) {
    switch ((wc(t), t.tag)) {
      case 3:
        (qa(ct), Fe());
        break;
      case 26:
      case 27:
      case 5:
        wa(t);
        break;
      case 4:
        Fe();
        break;
      case 31:
        t.memoizedState !== null && Yt(t);
        break;
      case 13:
        Yt(t);
        break;
      case 19:
        G(it);
        break;
      case 10:
        qa(t.type);
        break;
      case 22:
      case 23:
        (Yt(t), Bc(), e !== null && G(ii));
        break;
      case 24:
        qa(ct);
    }
  }
  function nl(e, t) {
    try {
      var a = t.updateQueue,
        s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var c = s.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            s = void 0;
            var u = a.create,
              m = a.inst;
            ((s = u()), (m.destroy = s));
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (v) {
      Ve(t, t.return, v);
    }
  }
  function En(e, t, a) {
    try {
      var s = t.updateQueue,
        c = s !== null ? s.lastEffect : null;
      if (c !== null) {
        var u = c.next;
        s = u;
        do {
          if ((s.tag & e) === e) {
            var m = s.inst,
              v = m.destroy;
            if (v !== void 0) {
              ((m.destroy = void 0), (c = t));
              var N = a,
                B = v;
              try {
                B();
              } catch (q) {
                Ve(c, N, q);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    } catch (q) {
      Ve(t, t.return, q);
    }
  }
  function Wm(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var a = e.stateNode;
      try {
        Gh(t, a);
      } catch (s) {
        Ve(e, e.return, s);
      }
    }
  }
  function e0(e, t, a) {
    ((a.props = ci(e.type, e.memoizedProps)), (a.state = e.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (s) {
      Ve(e, t, s);
    }
  }
  function il(e, t) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var s = e.stateNode;
            break;
          case 30:
            s = e.stateNode;
            break;
          default:
            s = e.stateNode;
        }
        typeof a == "function" ? (e.refCleanup = a(s)) : (a.current = s);
      }
    } catch (c) {
      Ve(e, t, c);
    }
  }
  function Ta(e, t) {
    var a = e.ref,
      s = e.refCleanup;
    if (a !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (c) {
          Ve(e, t, c);
        } finally {
          ((e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          Ve(e, t, c);
        }
      else a.current = null;
  }
  function t0(e) {
    var t = e.type,
      a = e.memoizedProps,
      s = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && s.focus();
          break e;
        case "img":
          a.src ? (s.src = a.src) : a.srcSet && (s.srcset = a.srcSet);
      }
    } catch (c) {
      Ve(e, e.return, c);
    }
  }
  function mu(e, t, a) {
    try {
      var s = e.stateNode;
      (Iv(s, e.type, a, t), (s[yt] = t));
    } catch (c) {
      Ve(e, e.return, c);
    }
  }
  function a0(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && zn(e.type)) ||
      e.tag === 4
    );
  }
  function pu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || a0(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
      ) {
        if (
          (e.tag === 27 && zn(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        ((e.child.return = e), (e = e.child));
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gu(e, t, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      ((e = e.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(e, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(e),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Ba)));
    else if (
      s !== 4 &&
      (s === 27 && zn(e.type) && ((a = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (gu(e, t, a), e = e.sibling; e !== null; )
        (gu(e, t, a), (e = e.sibling));
  }
  function Ur(e, t, a) {
    var s = e.tag;
    if (s === 5 || s === 6)
      ((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e));
    else if (
      s !== 4 &&
      (s === 27 && zn(e.type) && (a = e.stateNode), (e = e.child), e !== null)
    )
      for (Ur(e, t, a), e = e.sibling; e !== null; )
        (Ur(e, t, a), (e = e.sibling));
  }
  function n0(e) {
    var t = e.stateNode,
      a = e.memoizedProps;
    try {
      for (var s = e.type, c = t.attributes; c.length; )
        t.removeAttributeNode(c[0]);
      (Tt(t, s, a), (t[nt] = e), (t[yt] = a));
    } catch (u) {
      Ve(e, e.return, u);
    }
  }
  var Ka = !1,
    ft = !1,
    xu = !1,
    i0 = typeof WeakSet == "function" ? WeakSet : Set,
    bt = null;
  function Rv(e, t) {
    if (((e = e.containerInfo), (Vu = lo), (e = gh(e)), uc(e))) {
      if ("selectionStart" in e)
        var a = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          a = ((a = e.ownerDocument) && a.defaultView) || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var c = s.anchorOffset,
              u = s.focusNode;
            s = s.focusOffset;
            try {
              (a.nodeType, u.nodeType);
            } catch {
              a = null;
              break e;
            }
            var m = 0,
              v = -1,
              N = -1,
              B = 0,
              q = 0,
              Y = e,
              L = null;
            t: for (;;) {
              for (
                var U;
                Y !== a || (c !== 0 && Y.nodeType !== 3) || (v = m + c),
                  Y !== u || (s !== 0 && Y.nodeType !== 3) || (N = m + s),
                  Y.nodeType === 3 && (m += Y.nodeValue.length),
                  (U = Y.firstChild) !== null;
              )
                ((L = Y), (Y = U));
              for (;;) {
                if (Y === e) break t;
                if (
                  (L === a && ++B === c && (v = m),
                  L === u && ++q === s && (N = m),
                  (U = Y.nextSibling) !== null)
                )
                  break;
                ((Y = L), (L = Y.parentNode));
              }
              Y = U;
            }
            a = v === -1 || N === -1 ? null : { start: v, end: N };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Uu = { focusedElem: e, selectionRange: a }, lo = !1, bt = t;
      bt !== null;
    )
      if (
        ((t = bt), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
      )
        ((e.return = t), (bt = e));
      else
        for (; bt !== null; ) {
          switch (((t = bt), (u = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              if (
                (e & 4) !== 0 &&
                ((e = t.updateQueue),
                (e = e !== null ? e.events : null),
                e !== null)
              )
                for (a = 0; a < e.length; a++)
                  ((c = e[a]), (c.ref.impl = c.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && u !== null) {
                ((e = void 0),
                  (a = t),
                  (c = u.memoizedProps),
                  (u = u.memoizedState),
                  (s = a.stateNode));
                try {
                  var se = ci(a.type, c);
                  ((e = s.getSnapshotBeforeUpdate(se, u)),
                    (s.__reactInternalSnapshotBeforeUpdate = e));
                } catch (de) {
                  Ve(a, a.return, de);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
                )
                  $u(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      $u(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (((e = t.sibling), e !== null)) {
            ((e.return = t.return), (bt = e));
            break;
          }
          bt = t.return;
        }
  }
  function s0(e, t, a) {
    var s = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Fa(e, a), s & 4 && nl(5, a));
        break;
      case 1:
        if ((Fa(e, a), s & 4))
          if (((e = a.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (m) {
              Ve(a, a.return, m);
            }
          else {
            var c = ci(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(c, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (m) {
              Ve(a, a.return, m);
            }
          }
        (s & 64 && Wm(a), s & 512 && il(a, a.return));
        break;
      case 3:
        if ((Fa(e, a), s & 64 && ((e = a.updateQueue), e !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Gh(e, t);
          } catch (m) {
            Ve(a, a.return, m);
          }
        }
        break;
      case 27:
        t === null && s & 4 && n0(a);
      case 26:
      case 5:
        (Fa(e, a), t === null && s & 4 && t0(a), s & 512 && il(a, a.return));
        break;
      case 12:
        Fa(e, a);
        break;
      case 31:
        (Fa(e, a), s & 4 && o0(e, a));
        break;
      case 13:
        (Fa(e, a),
          s & 4 && c0(e, a),
          s & 64 &&
            ((e = a.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((a = Hv.bind(null, a)), l1(e, a)))));
        break;
      case 22:
        if (((s = a.memoizedState !== null || Ka), !s)) {
          ((t = (t !== null && t.memoizedState !== null) || ft), (c = Ka));
          var u = ft;
          ((Ka = s),
            (ft = t) && !u ? Qa(e, a, (a.subtreeFlags & 8772) !== 0) : Fa(e, a),
            (Ka = c),
            (ft = u));
        }
        break;
      case 30:
        break;
      default:
        Fa(e, a);
    }
  }
  function l0(e) {
    var t = e.alternate;
    (t !== null && ((e.alternate = null), l0(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Ds(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null));
  }
  var Pe = null,
    zt = !1;
  function Pa(e, t, a) {
    for (a = a.child; a !== null; ) (r0(e, t, a), (a = a.sibling));
  }
  function r0(e, t, a) {
    if (Mt && typeof Mt.onCommitFiberUnmount == "function")
      try {
        Mt.onCommitFiberUnmount(rn, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (ft || Ta(a, t),
          Pa(e, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        ft || Ta(a, t);
        var s = Pe,
          c = zt;
        (zn(a.type) && ((Pe = a.stateNode), (zt = !1)),
          Pa(e, t, a),
          hl(a.stateNode),
          (Pe = s),
          (zt = c));
        break;
      case 5:
        ft || Ta(a, t);
      case 6:
        if (
          ((s = Pe),
          (c = zt),
          (Pe = null),
          Pa(e, t, a),
          (Pe = s),
          (zt = c),
          Pe !== null)
        )
          if (zt)
            try {
              (Pe.nodeType === 9
                ? Pe.body
                : Pe.nodeName === "HTML"
                  ? Pe.ownerDocument.body
                  : Pe
              ).removeChild(a.stateNode);
            } catch (u) {
              Ve(a, t, u);
            }
          else
            try {
              Pe.removeChild(a.stateNode);
            } catch (u) {
              Ve(a, t, u);
            }
        break;
      case 18:
        Pe !== null &&
          (zt
            ? ((e = Pe),
              W0(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                    ? e.ownerDocument.body
                    : e,
                a.stateNode,
              ),
              cs(e))
            : W0(Pe, a.stateNode));
        break;
      case 4:
        ((s = Pe),
          (c = zt),
          (Pe = a.stateNode.containerInfo),
          (zt = !0),
          Pa(e, t, a),
          (Pe = s),
          (zt = c));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (En(2, a, t), ft || En(4, a, t), Pa(e, t, a));
        break;
      case 1:
        (ft ||
          (Ta(a, t),
          (s = a.stateNode),
          typeof s.componentWillUnmount == "function" && e0(a, t, s)),
          Pa(e, t, a));
        break;
      case 21:
        Pa(e, t, a);
        break;
      case 22:
        ((ft = (s = ft) || a.memoizedState !== null), Pa(e, t, a), (ft = s));
        break;
      default:
        Pa(e, t, a);
    }
  }
  function o0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
    ) {
      e = e.dehydrated;
      try {
        cs(e);
      } catch (a) {
        Ve(t, t.return, a);
      }
    }
  }
  function c0(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        cs(e);
      } catch (a) {
        Ve(t, t.return, a);
      }
  }
  function kv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return (t === null && (t = e.stateNode = new i0()), t);
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new i0()),
          t
        );
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Hr(e, t) {
    var a = kv(e);
    t.forEach(function (s) {
      if (!a.has(s)) {
        a.add(s);
        var c = qv.bind(null, e, s);
        s.then(c, c);
      }
    });
  }
  function _t(e, t) {
    var a = t.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var c = a[s],
          u = e,
          m = t,
          v = m;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (zn(v.type)) {
                ((Pe = v.stateNode), (zt = !1));
                break e;
              }
              break;
            case 5:
              ((Pe = v.stateNode), (zt = !1));
              break e;
            case 3:
            case 4:
              ((Pe = v.stateNode.containerInfo), (zt = !0));
              break e;
          }
          v = v.return;
        }
        if (Pe === null) throw Error(o(160));
        (r0(u, m, c),
          (Pe = null),
          (zt = !1),
          (u = c.alternate),
          u !== null && (u.return = null),
          (c.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (u0(t, e), (t = t.sibling));
  }
  var ga = null;
  function u0(e, t) {
    var a = e.alternate,
      s = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (_t(t, e),
          Ot(e),
          s & 4 && (En(3, e, e.return), nl(3, e), En(5, e, e.return)));
        break;
      case 1:
        (_t(t, e),
          Ot(e),
          s & 512 && (ft || a === null || Ta(a, a.return)),
          s & 64 &&
            Ka &&
            ((e = e.updateQueue),
            e !== null &&
              ((s = e.callbacks),
              s !== null &&
                ((a = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = a === null ? s : a.concat(s))))));
        break;
      case 26:
        var c = ga;
        if (
          (_t(t, e),
          Ot(e),
          s & 512 && (ft || a === null || Ta(a, a.return)),
          s & 4)
        ) {
          var u = a !== null ? a.memoizedState : null;
          if (((s = e.memoizedState), a === null))
            if (s === null)
              if (e.stateNode === null) {
                e: {
                  ((s = e.type),
                    (a = e.memoizedProps),
                    (c = c.ownerDocument || c));
                  t: switch (s) {
                    case "title":
                      ((u = c.getElementsByTagName("title")[0]),
                        (!u ||
                          u[un] ||
                          u[nt] ||
                          u.namespaceURI === "http://www.w3.org/2000/svg" ||
                          u.hasAttribute("itemprop")) &&
                          ((u = c.createElement(s)),
                          c.head.insertBefore(
                            u,
                            c.querySelector("head > title"),
                          )),
                        Tt(u, s, a),
                        (u[nt] = e),
                        rt(u),
                        (s = u));
                      break e;
                    case "link":
                      var m = up("link", "href", c).get(s + (a.href || ""));
                      if (m) {
                        for (var v = 0; v < m.length; v++)
                          if (
                            ((u = m[v]),
                            u.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              u.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              u.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              u.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      ((u = c.createElement(s)),
                        Tt(u, s, a),
                        c.head.appendChild(u));
                      break;
                    case "meta":
                      if (
                        (m = up("meta", "content", c).get(
                          s + (a.content || ""),
                        ))
                      ) {
                        for (v = 0; v < m.length; v++)
                          if (
                            ((u = m[v]),
                            u.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              u.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              u.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              u.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              u.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            m.splice(v, 1);
                            break t;
                          }
                      }
                      ((u = c.createElement(s)),
                        Tt(u, s, a),
                        c.head.appendChild(u));
                      break;
                    default:
                      throw Error(o(468, s));
                  }
                  ((u[nt] = e), rt(u), (s = u));
                }
                e.stateNode = s;
              } else dp(c, e.type, e.stateNode);
            else e.stateNode = cp(c, s, e.memoizedProps);
          else
            u !== s
              ? (u === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : u.count--,
                s === null
                  ? dp(c, e.type, e.stateNode)
                  : cp(c, s, e.memoizedProps))
              : s === null &&
                e.stateNode !== null &&
                mu(e, e.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (_t(t, e),
          Ot(e),
          s & 512 && (ft || a === null || Ta(a, a.return)),
          a !== null && s & 4 && mu(e, e.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (_t(t, e),
          Ot(e),
          s & 512 && (ft || a === null || Ta(a, a.return)),
          e.flags & 32)
        ) {
          c = e.stateNode;
          try {
            ki(c, "");
          } catch (se) {
            Ve(e, e.return, se);
          }
        }
        (s & 4 &&
          e.stateNode != null &&
          ((c = e.memoizedProps), mu(e, c, a !== null ? a.memoizedProps : c)),
          s & 1024 && (xu = !0));
        break;
      case 6:
        if ((_t(t, e), Ot(e), s & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          ((s = e.memoizedProps), (a = e.stateNode));
          try {
            a.nodeValue = s;
          } catch (se) {
            Ve(e, e.return, se);
          }
        }
        break;
      case 3:
        if (
          ((ao = null),
          (c = ga),
          (ga = eo(t.containerInfo)),
          _t(t, e),
          (ga = c),
          Ot(e),
          s & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            cs(t.containerInfo);
          } catch (se) {
            Ve(e, e.return, se);
          }
        xu && ((xu = !1), d0(e));
        break;
      case 4:
        ((s = ga),
          (ga = eo(e.stateNode.containerInfo)),
          _t(t, e),
          Ot(e),
          (ga = s));
        break;
      case 12:
        (_t(t, e), Ot(e));
        break;
      case 31:
        (_t(t, e),
          Ot(e),
          s & 4 &&
            ((s = e.updateQueue),
            s !== null && ((e.updateQueue = null), Hr(e, s))));
        break;
      case 13:
        (_t(t, e),
          Ot(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            ($r = At()),
          s & 4 &&
            ((s = e.updateQueue),
            s !== null && ((e.updateQueue = null), Hr(e, s))));
        break;
      case 22:
        c = e.memoizedState !== null;
        var N = a !== null && a.memoizedState !== null,
          B = Ka,
          q = ft;
        if (
          ((Ka = B || c),
          (ft = q || N),
          _t(t, e),
          (ft = q),
          (Ka = B),
          Ot(e),
          s & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = c ? t._visibility & -2 : t._visibility | 1,
              c && (a === null || N || Ka || ft || ui(e)),
              a = null,
              t = e;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                N = a = t;
                try {
                  if (((u = N.stateNode), c))
                    ((m = u.style),
                      typeof m.setProperty == "function"
                        ? m.setProperty("display", "none", "important")
                        : (m.display = "none"));
                  else {
                    v = N.stateNode;
                    var Y = N.memoizedProps.style,
                      L =
                        Y != null && Y.hasOwnProperty("display")
                          ? Y.display
                          : null;
                    v.style.display =
                      L == null || typeof L == "boolean" ? "" : ("" + L).trim();
                  }
                } catch (se) {
                  Ve(N, N.return, se);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                N = t;
                try {
                  N.stateNode.nodeValue = c ? "" : N.memoizedProps;
                } catch (se) {
                  Ve(N, N.return, se);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                N = t;
                try {
                  var U = N.stateNode;
                  c ? ep(U, !0) : ep(N.stateNode, !1);
                } catch (se) {
                  Ve(N, N.return, se);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        s & 4 &&
          ((s = e.updateQueue),
          s !== null &&
            ((a = s.retryQueue),
            a !== null && ((s.retryQueue = null), Hr(e, a))));
        break;
      case 19:
        (_t(t, e),
          Ot(e),
          s & 4 &&
            ((s = e.updateQueue),
            s !== null && ((e.updateQueue = null), Hr(e, s))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (_t(t, e), Ot(e));
    }
  }
  function Ot(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var a, s = e.return; s !== null; ) {
          if (a0(s)) {
            a = s;
            break;
          }
          s = s.return;
        }
        if (a == null) throw Error(o(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode,
              u = pu(e);
            Ur(e, u, c);
            break;
          case 5:
            var m = a.stateNode;
            a.flags & 32 && (ki(m, ""), (a.flags &= -33));
            var v = pu(e);
            Ur(e, v, m);
            break;
          case 3:
          case 4:
            var N = a.stateNode.containerInfo,
              B = pu(e);
            gu(e, B, N);
            break;
          default:
            throw Error(o(161));
        }
      } catch (q) {
        Ve(e, e.return, q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function d0(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        (d0(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling));
      }
  }
  function Fa(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (s0(e, t.alternate, t), (t = t.sibling));
  }
  function ui(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (En(4, t, t.return), ui(t));
          break;
        case 1:
          Ta(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && e0(t, t.return, a),
            ui(t));
          break;
        case 27:
          hl(t.stateNode);
        case 26:
        case 5:
          (Ta(t, t.return), ui(t));
          break;
        case 22:
          t.memoizedState === null && ui(t);
          break;
        case 30:
          ui(t);
          break;
        default:
          ui(t);
      }
      e = e.sibling;
    }
  }
  function Qa(e, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var s = t.alternate,
        c = e,
        u = t,
        m = u.flags;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          (Qa(c, u, a), nl(4, u));
          break;
        case 1:
          if (
            (Qa(c, u, a),
            (s = u),
            (c = s.stateNode),
            typeof c.componentDidMount == "function")
          )
            try {
              c.componentDidMount();
            } catch (B) {
              Ve(s, s.return, B);
            }
          if (((s = u), (c = s.updateQueue), c !== null)) {
            var v = s.stateNode;
            try {
              var N = c.shared.hiddenCallbacks;
              if (N !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < N.length; c++)
                  $h(N[c], v);
            } catch (B) {
              Ve(s, s.return, B);
            }
          }
          (a && m & 64 && Wm(u), il(u, u.return));
          break;
        case 27:
          n0(u);
        case 26:
        case 5:
          (Qa(c, u, a), a && s === null && m & 4 && t0(u), il(u, u.return));
          break;
        case 12:
          Qa(c, u, a);
          break;
        case 31:
          (Qa(c, u, a), a && m & 4 && o0(c, u));
          break;
        case 13:
          (Qa(c, u, a), a && m & 4 && c0(c, u));
          break;
        case 22:
          (u.memoizedState === null && Qa(c, u, a), il(u, u.return));
          break;
        case 30:
          break;
        default:
          Qa(c, u, a);
      }
      t = t.sibling;
    }
  }
  function yu(e, t) {
    var a = null;
    (e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (a = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== a && (e != null && e.refCount++, a != null && Ys(a)));
  }
  function bu(e, t) {
    ((e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && Ys(e)));
  }
  function xa(e, t, a, s) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (f0(e, t, a, s), (t = t.sibling));
  }
  function f0(e, t, a, s) {
    var c = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (xa(e, t, a, s), c & 2048 && nl(9, t));
        break;
      case 1:
        xa(e, t, a, s);
        break;
      case 3:
        (xa(e, t, a, s),
          c & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && Ys(e))));
        break;
      case 12:
        if (c & 2048) {
          (xa(e, t, a, s), (e = t.stateNode));
          try {
            var u = t.memoizedProps,
              m = u.id,
              v = u.onPostCommit;
            typeof v == "function" &&
              v(
                m,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0,
              );
          } catch (N) {
            Ve(t, t.return, N);
          }
        } else xa(e, t, a, s);
        break;
      case 31:
        xa(e, t, a, s);
        break;
      case 13:
        xa(e, t, a, s);
        break;
      case 23:
        break;
      case 22:
        ((u = t.stateNode),
          (m = t.alternate),
          t.memoizedState !== null
            ? u._visibility & 2
              ? xa(e, t, a, s)
              : sl(e, t)
            : u._visibility & 2
              ? xa(e, t, a, s)
              : ((u._visibility |= 2),
                Ii(e, t, a, s, (t.subtreeFlags & 10256) !== 0 || !1)),
          c & 2048 && yu(m, t));
        break;
      case 24:
        (xa(e, t, a, s), c & 2048 && bu(t.alternate, t));
        break;
      default:
        xa(e, t, a, s);
    }
  }
  function Ii(e, t, a, s, c) {
    for (
      c = c && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var u = e,
        m = t,
        v = a,
        N = s,
        B = m.flags;
      switch (m.tag) {
        case 0:
        case 11:
        case 15:
          (Ii(u, m, v, N, c), nl(8, m));
          break;
        case 23:
          break;
        case 22:
          var q = m.stateNode;
          (m.memoizedState !== null
            ? q._visibility & 2
              ? Ii(u, m, v, N, c)
              : sl(u, m)
            : ((q._visibility |= 2), Ii(u, m, v, N, c)),
            c && B & 2048 && yu(m.alternate, m));
          break;
        case 24:
          (Ii(u, m, v, N, c), c && B & 2048 && bu(m.alternate, m));
          break;
        default:
          Ii(u, m, v, N, c);
      }
      t = t.sibling;
    }
  }
  function sl(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = e,
          s = t,
          c = s.flags;
        switch (s.tag) {
          case 22:
            (sl(a, s), c & 2048 && yu(s.alternate, s));
            break;
          case 24:
            (sl(a, s), c & 2048 && bu(s.alternate, s));
            break;
          default:
            sl(a, s);
        }
        t = t.sibling;
      }
  }
  var ll = 8192;
  function Wi(e, t, a) {
    if (e.subtreeFlags & ll)
      for (e = e.child; e !== null; ) (h0(e, t, a), (e = e.sibling));
  }
  function h0(e, t, a) {
    switch (e.tag) {
      case 26:
        (Wi(e, t, a),
          e.flags & ll &&
            e.memoizedState !== null &&
            y1(a, ga, e.memoizedState, e.memoizedProps));
        break;
      case 5:
        Wi(e, t, a);
        break;
      case 3:
      case 4:
        var s = ga;
        ((ga = eo(e.stateNode.containerInfo)), Wi(e, t, a), (ga = s));
        break;
      case 22:
        e.memoizedState === null &&
          ((s = e.alternate),
          s !== null && s.memoizedState !== null
            ? ((s = ll), (ll = 16777216), Wi(e, t, a), (ll = s))
            : Wi(e, t, a));
        break;
      default:
        Wi(e, t, a);
    }
  }
  function m0(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do ((t = e.sibling), (e.sibling = null), (e = t));
      while (e !== null);
    }
  }
  function rl(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var s = t[a];
          ((bt = s), g0(s, e));
        }
      m0(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) (p0(e), (e = e.sibling));
  }
  function p0(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (rl(e), e.flags & 2048 && En(9, e, e.return));
        break;
      case 3:
        rl(e);
        break;
      case 12:
        rl(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), qr(e))
          : rl(e);
        break;
      default:
        rl(e);
    }
  }
  function qr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var s = t[a];
          ((bt = s), g0(s, e));
        }
      m0(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          (En(8, t, t.return), qr(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), qr(t)));
          break;
        default:
          qr(t);
      }
      e = e.sibling;
    }
  }
  function g0(e, t) {
    for (; bt !== null; ) {
      var a = bt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          En(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var s = a.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          Ys(a.memoizedState.cache);
      }
      if (((s = a.child), s !== null)) ((s.return = a), (bt = s));
      else
        e: for (a = e; bt !== null; ) {
          s = bt;
          var c = s.sibling,
            u = s.return;
          if ((l0(s), s === a)) {
            bt = null;
            break e;
          }
          if (c !== null) {
            ((c.return = u), (bt = c));
            break e;
          }
          bt = u;
        }
    }
  }
  var zv = {
      getCacheForType: function (e) {
        var t = St(ct),
          a = t.data.get(e);
        return (a === void 0 && ((a = e()), t.data.set(e, a)), a);
      },
      cacheSignal: function () {
        return St(ct).controller.signal;
      },
    },
    _v = typeof WeakMap == "function" ? WeakMap : Map,
    Be = 0,
    Ge = null,
    Ee = null,
    Me = 0,
    Le = 0,
    Xt = null,
    An = !1,
    es = !1,
    vu = !1,
    Za = 0,
    et = 0,
    Mn = 0,
    di = 0,
    wu = 0,
    Kt = 0,
    ts = 0,
    ol = null,
    Bt = null,
    ju = !1,
    $r = 0,
    x0 = 0,
    Gr = 1 / 0,
    Yr = null,
    Cn = null,
    pt = 0,
    Dn = null,
    as = null,
    Ja = 0,
    Su = 0,
    Nu = null,
    y0 = null,
    cl = 0,
    Tu = null;
  function Pt() {
    return (Be & 2) !== 0 && Me !== 0 ? Me & -Me : H.T !== null ? Ru() : Di();
  }
  function b0() {
    if (Kt === 0)
      if ((Me & 536870912) === 0 || Re) {
        var e = za;
        ((za <<= 1), (za & 3932160) === 0 && (za = 262144), (Kt = e));
      } else Kt = 536870912;
    return ((e = Gt.current), e !== null && (e.flags |= 32), Kt);
  }
  function Lt(e, t, a) {
    (((e === Ge && (Le === 2 || Le === 9)) || e.cancelPendingCommit !== null) &&
      (ns(e, 0), Rn(e, Me, Kt, !1)),
      cn(e, a),
      ((Be & 2) === 0 || e !== Ge) &&
        (e === Ge &&
          ((Be & 2) === 0 && (di |= a), et === 4 && Rn(e, Me, Kt, !1)),
        Ea(e)));
  }
  function v0(e, t, a) {
    if ((Be & 6) !== 0) throw Error(o(327));
    var s = (!a && (t & 127) === 0 && (t & e.expiredLanes) === 0) || Zt(e, t),
      c = s ? Lv(e, t) : Au(e, t, !0),
      u = s;
    do {
      if (c === 0) {
        es && !s && Rn(e, t, 0, !1);
        break;
      } else {
        if (((a = e.current.alternate), u && !Ov(a))) {
          ((c = Au(e, t, !1)), (u = !1));
          continue;
        }
        if (c === 2) {
          if (((u = t), e.errorRecoveryDisabledLanes & u)) var m = 0;
          else
            ((m = e.pendingLanes & -536870913),
              (m = m !== 0 ? m : m & 536870912 ? 536870912 : 0));
          if (m !== 0) {
            t = m;
            e: {
              var v = e;
              c = ol;
              var N = v.current.memoizedState.isDehydrated;
              if ((N && (ns(v, m).flags |= 256), (m = Au(v, m, !1)), m !== 2)) {
                if (vu && !N) {
                  ((v.errorRecoveryDisabledLanes |= u), (di |= u), (c = 4));
                  break e;
                }
                ((u = Bt),
                  (Bt = c),
                  u !== null &&
                    (Bt === null ? (Bt = u) : Bt.push.apply(Bt, u)));
              }
              c = m;
            }
            if (((u = !1), c !== 2)) continue;
          }
        }
        if (c === 1) {
          (ns(e, 0), Rn(e, t, 0, !0));
          break;
        }
        e: {
          switch (((s = e), (u = c), u)) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Rn(s, t, Kt, !An);
              break e;
            case 2:
              Bt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && ((c = $r + 300 - At()), 10 < c)) {
            if ((Rn(s, t, Kt, !An), on(s, 0, !0) !== 0)) break e;
            ((Ja = t),
              (s.timeoutHandle = J0(
                w0.bind(
                  null,
                  s,
                  a,
                  Bt,
                  Yr,
                  ju,
                  t,
                  Kt,
                  di,
                  ts,
                  An,
                  u,
                  "Throttled",
                  -0,
                  0,
                ),
                c,
              )));
            break e;
          }
          w0(s, a, Bt, Yr, ju, t, Kt, di, ts, An, u, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ea(e);
  }
  function w0(e, t, a, s, c, u, m, v, N, B, q, Y, L, U) {
    if (
      ((e.timeoutHandle = -1),
      (Y = t.subtreeFlags),
      Y & 8192 || (Y & 16785408) === 16785408)
    ) {
      ((Y = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ba,
      }),
        h0(t, u, Y));
      var se =
        (u & 62914560) === u ? $r - At() : (u & 4194048) === u ? x0 - At() : 0;
      if (((se = b1(Y, se)), se !== null)) {
        ((Ja = u),
          (e.cancelPendingCommit = se(
            C0.bind(null, e, t, u, a, s, c, m, v, N, q, Y, null, L, U),
          )),
          Rn(e, u, m, !B));
        return;
      }
    }
    C0(e, t, u, a, s, c, m, v, N);
  }
  function Ov(e) {
    for (var t = e; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var s = 0; s < a.length; s++) {
          var c = a[s],
            u = c.getSnapshot;
          c = c.value;
          try {
            if (!qt(u(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function Rn(e, t, a, s) {
    ((t &= ~wu),
      (t &= ~di),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      s && (e.warmLanes |= t),
      (s = e.expirationTimes));
    for (var c = t; 0 < c; ) {
      var u = 31 - xt(c),
        m = 1 << u;
      ((s[u] = -1), (c &= ~m));
    }
    a !== 0 && Fn(e, a, t);
  }
  function Xr() {
    return (Be & 6) === 0 ? (ul(0), !1) : !0;
  }
  function Eu() {
    if (Ee !== null) {
      if (Le === 0) var e = Ee.return;
      else ((e = Ee), (Ha = ai = null), $c(e), (Pi = null), (Ks = 0), (e = Ee));
      for (; e !== null; ) (Im(e.alternate, e), (e = e.return));
      Ee = null;
    }
  }
  function ns(e, t) {
    var a = e.timeoutHandle;
    (a !== -1 && ((e.timeoutHandle = -1), t1(a)),
      (a = e.cancelPendingCommit),
      a !== null && ((e.cancelPendingCommit = null), a()),
      (Ja = 0),
      Eu(),
      (Ge = e),
      (Ee = a = Va(e.current, null)),
      (Me = t),
      (Le = 0),
      (Xt = null),
      (An = !1),
      (es = Zt(e, t)),
      (vu = !1),
      (ts = Kt = wu = di = Mn = et = 0),
      (Bt = ol = null),
      (ju = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var s = e.entangledLanes;
    if (s !== 0)
      for (e = e.entanglements, s &= t; 0 < s; ) {
        var c = 31 - xt(s),
          u = 1 << c;
        ((t |= e[c]), (s &= ~u));
      }
    return ((Za = t), fr(), a);
  }
  function j0(e, t) {
    ((ye = null),
      (H.H = el),
      t === Ki || t === vr
        ? ((t = Vh()), (Le = 3))
        : t === Dc
          ? ((t = Vh()), (Le = 4))
          : (Le =
              t === iu
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (Xt = t),
      Ee === null && ((et = 1), _r(e, ea(t, e.current))));
  }
  function S0() {
    var e = Gt.current;
    return e === null
      ? !0
      : (Me & 4194048) === Me
        ? ia === null
        : (Me & 62914560) === Me || (Me & 536870912) !== 0
          ? e === ia
          : !1;
  }
  function N0() {
    var e = H.H;
    return ((H.H = el), e === null ? el : e);
  }
  function T0() {
    var e = H.A;
    return ((H.A = zv), e);
  }
  function Kr() {
    ((et = 4),
      An || ((Me & 4194048) !== Me && Gt.current !== null) || (es = !0),
      ((Mn & 134217727) === 0 && (di & 134217727) === 0) ||
        Ge === null ||
        Rn(Ge, Me, Kt, !1));
  }
  function Au(e, t, a) {
    var s = Be;
    Be |= 2;
    var c = N0(),
      u = T0();
    ((Ge !== e || Me !== t) && ((Yr = null), ns(e, t)), (t = !1));
    var m = et;
    e: do
      try {
        if (Le !== 0 && Ee !== null) {
          var v = Ee,
            N = Xt;
          switch (Le) {
            case 8:
              (Eu(), (m = 6));
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (t = !0);
              var B = Le;
              if (((Le = 0), (Xt = null), is(e, v, N, B), a && es)) {
                m = 0;
                break e;
              }
              break;
            default:
              ((B = Le), (Le = 0), (Xt = null), is(e, v, N, B));
          }
        }
        (Bv(), (m = et));
        break;
      } catch (q) {
        j0(e, q);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Ha = ai = null),
      (Be = s),
      (H.H = c),
      (H.A = u),
      Ee === null && ((Ge = null), (Me = 0), fr()),
      m
    );
  }
  function Bv() {
    for (; Ee !== null; ) E0(Ee);
  }
  function Lv(e, t) {
    var a = Be;
    Be |= 2;
    var s = N0(),
      c = T0();
    Ge !== e || Me !== t
      ? ((Yr = null), (Gr = At() + 500), ns(e, t))
      : (es = Zt(e, t));
    e: do
      try {
        if (Le !== 0 && Ee !== null) {
          t = Ee;
          var u = Xt;
          t: switch (Le) {
            case 1:
              ((Le = 0), (Xt = null), is(e, t, u, 1));
              break;
            case 2:
            case 9:
              if (Bh(u)) {
                ((Le = 0), (Xt = null), A0(t));
                break;
              }
              ((t = function () {
                ((Le !== 2 && Le !== 9) || Ge !== e || (Le = 7), Ea(e));
              }),
                u.then(t, t));
              break e;
            case 3:
              Le = 7;
              break e;
            case 4:
              Le = 5;
              break e;
            case 7:
              Bh(u)
                ? ((Le = 0), (Xt = null), A0(t))
                : ((Le = 0), (Xt = null), is(e, t, u, 7));
              break;
            case 5:
              var m = null;
              switch (Ee.tag) {
                case 26:
                  m = Ee.memoizedState;
                case 5:
                case 27:
                  var v = Ee;
                  if (m ? fp(m) : v.stateNode.complete) {
                    ((Le = 0), (Xt = null));
                    var N = v.sibling;
                    if (N !== null) Ee = N;
                    else {
                      var B = v.return;
                      B !== null ? ((Ee = B), Pr(B)) : (Ee = null);
                    }
                    break t;
                  }
              }
              ((Le = 0), (Xt = null), is(e, t, u, 5));
              break;
            case 6:
              ((Le = 0), (Xt = null), is(e, t, u, 6));
              break;
            case 8:
              (Eu(), (et = 6));
              break e;
            default:
              throw Error(o(462));
          }
        }
        Vv();
        break;
      } catch (q) {
        j0(e, q);
      }
    while (!0);
    return (
      (Ha = ai = null),
      (H.H = s),
      (H.A = c),
      (Be = a),
      Ee !== null ? 0 : ((Ge = null), (Me = 0), fr(), et)
    );
  }
  function Vv() {
    for (; Ee !== null && !Si(); ) E0(Ee);
  }
  function E0(e) {
    var t = Zm(e.alternate, e, Za);
    ((e.memoizedProps = e.pendingProps), t === null ? Pr(e) : (Ee = t));
  }
  function A0(e) {
    var t = e,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ym(a, t, t.pendingProps, t.type, void 0, Me);
        break;
      case 11:
        t = Ym(a, t, t.pendingProps, t.type.render, t.ref, Me);
        break;
      case 5:
        $c(t);
      default:
        (Im(a, t), (t = Ee = Th(t, Za)), (t = Zm(a, t, Za)));
    }
    ((e.memoizedProps = e.pendingProps), t === null ? Pr(e) : (Ee = t));
  }
  function is(e, t, a, s) {
    ((Ha = ai = null), $c(t), (Pi = null), (Ks = 0));
    var c = t.return;
    try {
      if (Ev(e, c, t, a, Me)) {
        ((et = 1), _r(e, ea(a, e.current)), (Ee = null));
        return;
      }
    } catch (u) {
      if (c !== null) throw ((Ee = c), u);
      ((et = 1), _r(e, ea(a, e.current)), (Ee = null));
      return;
    }
    t.flags & 32768
      ? (Re || s === 1
          ? (e = !0)
          : es || (Me & 536870912) !== 0
            ? (e = !1)
            : ((An = e = !0),
              (s === 2 || s === 9 || s === 3 || s === 6) &&
                ((s = Gt.current),
                s !== null && s.tag === 13 && (s.flags |= 16384))),
        M0(t, e))
      : Pr(t);
  }
  function Pr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        M0(t, An);
        return;
      }
      e = t.return;
      var a = Cv(t.alternate, t, Za);
      if (a !== null) {
        Ee = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        Ee = t;
        return;
      }
      Ee = t = e;
    } while (t !== null);
    et === 0 && (et = 5);
  }
  function M0(e, t) {
    do {
      var a = Dv(e.alternate, e);
      if (a !== null) {
        ((a.flags &= 32767), (Ee = a));
        return;
      }
      if (
        ((a = e.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        Ee = e;
        return;
      }
      Ee = e = a;
    } while (e !== null);
    ((et = 6), (Ee = null));
  }
  function C0(e, t, a, s, c, u, m, v, N) {
    e.cancelPendingCommit = null;
    do Fr();
    while (pt !== 0);
    if ((Be & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (
        ((u = t.lanes | t.childLanes),
        (u |= pc),
        Il(e, a, u, m, v, N),
        e === Ge && ((Ee = Ge = null), (Me = 0)),
        (as = t),
        (Dn = e),
        (Ja = a),
        (Su = u),
        (Nu = c),
        (y0 = s),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            $v(da, function () {
              return (_0(), null);
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (s = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || s)
      ) {
        ((s = H.T), (H.T = null), (c = K.p), (K.p = 2), (m = Be), (Be |= 4));
        try {
          Rv(e, t, a);
        } finally {
          ((Be = m), (K.p = c), (H.T = s));
        }
      }
      ((pt = 1), D0(), R0(), k0());
    }
  }
  function D0() {
    if (pt === 1) {
      pt = 0;
      var e = Dn,
        t = as,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = H.T), (H.T = null));
        var s = K.p;
        K.p = 2;
        var c = Be;
        Be |= 4;
        try {
          u0(t, e);
          var u = Uu,
            m = gh(e.containerInfo),
            v = u.focusedElem,
            N = u.selectionRange;
          if (
            m !== v &&
            v &&
            v.ownerDocument &&
            ph(v.ownerDocument.documentElement, v)
          ) {
            if (N !== null && uc(v)) {
              var B = N.start,
                q = N.end;
              if ((q === void 0 && (q = B), "selectionStart" in v))
                ((v.selectionStart = B),
                  (v.selectionEnd = Math.min(q, v.value.length)));
              else {
                var Y = v.ownerDocument || document,
                  L = (Y && Y.defaultView) || window;
                if (L.getSelection) {
                  var U = L.getSelection(),
                    se = v.textContent.length,
                    de = Math.min(N.start, se),
                    qe = N.end === void 0 ? de : Math.min(N.end, se);
                  !U.extend && de > qe && ((m = qe), (qe = de), (de = m));
                  var z = mh(v, de),
                    A = mh(v, qe);
                  if (
                    z &&
                    A &&
                    (U.rangeCount !== 1 ||
                      U.anchorNode !== z.node ||
                      U.anchorOffset !== z.offset ||
                      U.focusNode !== A.node ||
                      U.focusOffset !== A.offset)
                  ) {
                    var O = Y.createRange();
                    (O.setStart(z.node, z.offset),
                      U.removeAllRanges(),
                      de > qe
                        ? (U.addRange(O), U.extend(A.node, A.offset))
                        : (O.setEnd(A.node, A.offset), U.addRange(O)));
                  }
                }
              }
            }
            for (Y = [], U = v; (U = U.parentNode); )
              U.nodeType === 1 &&
                Y.push({ element: U, left: U.scrollLeft, top: U.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < Y.length;
              v++
            ) {
              var $ = Y[v];
              (($.element.scrollLeft = $.left), ($.element.scrollTop = $.top));
            }
          }
          ((lo = !!Vu), (Uu = Vu = null));
        } finally {
          ((Be = c), (K.p = s), (H.T = a));
        }
      }
      ((e.current = t), (pt = 2));
    }
  }
  function R0() {
    if (pt === 2) {
      pt = 0;
      var e = Dn,
        t = as,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = H.T), (H.T = null));
        var s = K.p;
        K.p = 2;
        var c = Be;
        Be |= 4;
        try {
          s0(e, t.alternate, t);
        } finally {
          ((Be = c), (K.p = s), (H.T = a));
        }
      }
      pt = 3;
    }
  }
  function k0() {
    if (pt === 4 || pt === 3) {
      ((pt = 0), Fl());
      var e = Dn,
        t = as,
        a = Ja,
        s = y0;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (pt = 5)
        : ((pt = 0), (as = Dn = null), z0(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (
        (c === 0 && (Cn = null),
        Ci(a),
        (t = t.stateNode),
        Mt && typeof Mt.onCommitFiberRoot == "function")
      )
        try {
          Mt.onCommitFiberRoot(rn, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (s !== null) {
        ((t = H.T), (c = K.p), (K.p = 2), (H.T = null));
        try {
          for (var u = e.onRecoverableError, m = 0; m < s.length; m++) {
            var v = s[m];
            u(v.value, { componentStack: v.stack });
          }
        } finally {
          ((H.T = t), (K.p = c));
        }
      }
      ((Ja & 3) !== 0 && Fr(),
        Ea(e),
        (c = e.pendingLanes),
        (a & 261930) !== 0 && (c & 42) !== 0
          ? e === Tu
            ? cl++
            : ((cl = 0), (Tu = e))
          : (cl = 0),
        ul(0));
    }
  }
  function z0(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), Ys(t)));
  }
  function Fr() {
    return (D0(), R0(), k0(), _0());
  }
  function _0() {
    if (pt !== 5) return !1;
    var e = Dn,
      t = Su;
    Su = 0;
    var a = Ci(Ja),
      s = H.T,
      c = K.p;
    try {
      ((K.p = 32 > a ? 32 : a), (H.T = null), (a = Nu), (Nu = null));
      var u = Dn,
        m = Ja;
      if (((pt = 0), (as = Dn = null), (Ja = 0), (Be & 6) !== 0))
        throw Error(o(331));
      var v = Be;
      if (
        ((Be |= 4),
        p0(u.current),
        f0(u, u.current, m, a),
        (Be = v),
        ul(0, !1),
        Mt && typeof Mt.onPostCommitFiberRoot == "function")
      )
        try {
          Mt.onPostCommitFiberRoot(rn, u);
        } catch {}
      return !0;
    } finally {
      ((K.p = c), (H.T = s), z0(e, t));
    }
  }
  function O0(e, t, a) {
    ((t = ea(a, t)),
      (t = nu(e.stateNode, t, 2)),
      (e = Sn(e, t, 2)),
      e !== null && (cn(e, 2), Ea(e)));
  }
  function Ve(e, t, a) {
    if (e.tag === 3) O0(e, e, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          O0(t, e, a);
          break;
        } else if (t.tag === 1) {
          var s = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (Cn === null || !Cn.has(s)))
          ) {
            ((e = ea(a, e)),
              (a = Bm(2)),
              (s = Sn(t, a, 2)),
              s !== null && (Lm(a, s, t, e), cn(s, 2), Ea(s)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Mu(e, t, a) {
    var s = e.pingCache;
    if (s === null) {
      s = e.pingCache = new _v();
      var c = new Set();
      s.set(t, c);
    } else ((c = s.get(t)), c === void 0 && ((c = new Set()), s.set(t, c)));
    c.has(a) ||
      ((vu = !0), c.add(a), (e = Uv.bind(null, e, t, a)), t.then(e, e));
  }
  function Uv(e, t, a) {
    var s = e.pingCache;
    (s !== null && s.delete(t),
      (e.pingedLanes |= e.suspendedLanes & a),
      (e.warmLanes &= ~a),
      Ge === e &&
        (Me & a) === a &&
        (et === 4 || (et === 3 && (Me & 62914560) === Me && 300 > At() - $r)
          ? (Be & 2) === 0 && ns(e, 0)
          : (wu |= a),
        ts === Me && (ts = 0)),
      Ea(e));
  }
  function B0(e, t) {
    (t === 0 && (t = lt()), (e = Wn(e, t)), e !== null && (cn(e, t), Ea(e)));
  }
  function Hv(e) {
    var t = e.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), B0(e, a));
  }
  function qv(e, t) {
    var a = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var s = e.stateNode,
          c = e.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        s = e.stateNode;
        break;
      case 22:
        s = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    (s !== null && s.delete(t), B0(e, a));
  }
  function $v(e, t) {
    return ji(e, t);
  }
  var Qr = null,
    ss = null,
    Cu = !1,
    Zr = !1,
    Du = !1,
    kn = 0;
  function Ea(e) {
    (e !== ss &&
      e.next === null &&
      (ss === null ? (Qr = ss = e) : (ss = ss.next = e)),
      (Zr = !0),
      Cu || ((Cu = !0), Yv()));
  }
  function ul(e, t) {
    if (!Du && Zr) {
      Du = !0;
      do
        for (var a = !1, s = Qr; s !== null; ) {
          if (e !== 0) {
            var c = s.pendingLanes;
            if (c === 0) var u = 0;
            else {
              var m = s.suspendedLanes,
                v = s.pingedLanes;
              ((u = (1 << (31 - xt(42 | e) + 1)) - 1),
                (u &= c & ~(m & ~v)),
                (u = u & 201326741 ? (u & 201326741) | 1 : u ? u | 2 : 0));
            }
            u !== 0 && ((a = !0), H0(s, u));
          } else
            ((u = Me),
              (u = on(
                s,
                s === Ge ? u : 0,
                s.cancelPendingCommit !== null || s.timeoutHandle !== -1,
              )),
              (u & 3) === 0 || Zt(s, u) || ((a = !0), H0(s, u)));
          s = s.next;
        }
      while (a);
      Du = !1;
    }
  }
  function Gv() {
    L0();
  }
  function L0() {
    Zr = Cu = !1;
    var e = 0;
    kn !== 0 && e1() && (e = kn);
    for (var t = At(), a = null, s = Qr; s !== null; ) {
      var c = s.next,
        u = V0(s, t);
      (u === 0
        ? ((s.next = null),
          a === null ? (Qr = c) : (a.next = c),
          c === null && (ss = a))
        : ((a = s), (e !== 0 || (u & 3) !== 0) && (Zr = !0)),
        (s = c));
    }
    ((pt !== 0 && pt !== 5) || ul(e), kn !== 0 && (kn = 0));
  }
  function V0(e, t) {
    for (
      var a = e.suspendedLanes,
        s = e.pingedLanes,
        c = e.expirationTimes,
        u = e.pendingLanes & -62914561;
      0 < u;
    ) {
      var m = 31 - xt(u),
        v = 1 << m,
        N = c[m];
      (N === -1
        ? ((v & a) === 0 || (v & s) !== 0) && (c[m] = Ie(v, t))
        : N <= t && (e.expiredLanes |= v),
        (u &= ~v));
    }
    if (
      ((t = Ge),
      (a = Me),
      (a = on(
        e,
        e === t ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      (s = e.callbackNode),
      a === 0 ||
        (e === t && (Le === 2 || Le === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        s !== null && s !== null && Xn(s),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Zt(e, a)) {
      if (((t = a & -a), t === e.callbackPriority)) return t;
      switch ((s !== null && Xn(s), Ci(a))) {
        case 2:
        case 8:
          a = Ql;
          break;
        case 32:
          a = da;
          break;
        case 268435456:
          a = Zl;
          break;
        default:
          a = da;
      }
      return (
        (s = U0.bind(null, e)),
        (a = ji(a, s)),
        (e.callbackPriority = t),
        (e.callbackNode = a),
        t
      );
    }
    return (
      s !== null && s !== null && Xn(s),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function U0(e, t) {
    if (pt !== 0 && pt !== 5)
      return ((e.callbackNode = null), (e.callbackPriority = 0), null);
    var a = e.callbackNode;
    if (Fr() && e.callbackNode !== a) return null;
    var s = Me;
    return (
      (s = on(
        e,
        e === Ge ? s : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
      )),
      s === 0
        ? null
        : (v0(e, s, t),
          V0(e, At()),
          e.callbackNode != null && e.callbackNode === a
            ? U0.bind(null, e)
            : null)
    );
  }
  function H0(e, t) {
    if (Fr()) return null;
    v0(e, t, !0);
  }
  function Yv() {
    a1(function () {
      (Be & 6) !== 0 ? ji(J, Gv) : L0();
    });
  }
  function Ru() {
    if (kn === 0) {
      var e = Yi;
      (e === 0 && ((e = Ei), (Ei <<= 1), (Ei & 261888) === 0 && (Ei = 256)),
        (kn = e));
    }
    return kn;
  }
  function q0(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
        ? e
        : ir("" + e);
  }
  function $0(e, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      e.id && a.setAttribute("form", e.id),
      t.parentNode.insertBefore(a, t),
      (e = new FormData(e)),
      a.parentNode.removeChild(a),
      e
    );
  }
  function Xv(e, t, a, s, c) {
    if (t === "submit" && a && a.stateNode === c) {
      var u = q0((c[yt] || null).action),
        m = s.submitter;
      m &&
        ((t = (t = m[yt] || null)
          ? q0(t.formAction)
          : m.getAttribute("formAction")),
        t !== null && ((u = t), (m = null)));
      var v = new or("action", "action", null, s, c);
      e.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (s.defaultPrevented) {
                if (kn !== 0) {
                  var N = m ? $0(c, m) : new FormData(c);
                  Jc(
                    a,
                    { pending: !0, data: N, method: c.method, action: u },
                    null,
                    N,
                  );
                }
              } else
                typeof u == "function" &&
                  (v.preventDefault(),
                  (N = m ? $0(c, m) : new FormData(c)),
                  Jc(
                    a,
                    { pending: !0, data: N, method: c.method, action: u },
                    u,
                    N,
                  ));
            },
            currentTarget: c,
          },
        ],
      });
    }
  }
  for (var ku = 0; ku < mc.length; ku++) {
    var zu = mc[ku],
      Kv = zu.toLowerCase(),
      Pv = zu[0].toUpperCase() + zu.slice(1);
    pa(Kv, "on" + Pv);
  }
  (pa(bh, "onAnimationEnd"),
    pa(vh, "onAnimationIteration"),
    pa(wh, "onAnimationStart"),
    pa("dblclick", "onDoubleClick"),
    pa("focusin", "onFocus"),
    pa("focusout", "onBlur"),
    pa(cv, "onTransitionRun"),
    pa(uv, "onTransitionStart"),
    pa(dv, "onTransitionCancel"),
    pa(jh, "onTransitionEnd"),
    pn("onMouseEnter", ["mouseout", "mouseover"]),
    pn("onMouseLeave", ["mouseout", "mouseover"]),
    pn("onPointerEnter", ["pointerout", "pointerover"]),
    pn("onPointerLeave", ["pointerout", "pointerover"]),
    ja(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    ja(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    ja("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    ja(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    ja(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    ja(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var dl =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Fv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(dl),
    );
  function G0(e, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var s = e[a],
        c = s.event;
      s = s.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var m = s.length - 1; 0 <= m; m--) {
            var v = s[m],
              N = v.instance,
              B = v.currentTarget;
            if (((v = v.listener), N !== u && c.isPropagationStopped()))
              break e;
            ((u = v), (c.currentTarget = B));
            try {
              u(c);
            } catch (q) {
              dr(q);
            }
            ((c.currentTarget = null), (u = N));
          }
        else
          for (m = 0; m < s.length; m++) {
            if (
              ((v = s[m]),
              (N = v.instance),
              (B = v.currentTarget),
              (v = v.listener),
              N !== u && c.isPropagationStopped())
            )
              break e;
            ((u = v), (c.currentTarget = B));
            try {
              u(c);
            } catch (q) {
              dr(q);
            }
            ((c.currentTarget = null), (u = N));
          }
      }
    }
  }
  function Ae(e, t) {
    var a = t[Cs];
    a === void 0 && (a = t[Cs] = new Set());
    var s = e + "__bubble";
    a.has(s) || (Y0(t, e, 2, !1), a.add(s));
  }
  function _u(e, t, a) {
    var s = 0;
    (t && (s |= 4), Y0(a, e, s, t));
  }
  var Jr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ou(e) {
    if (!e[Jr]) {
      ((e[Jr] = !0),
        tr.forEach(function (a) {
          a !== "selectionchange" && (Fv.has(a) || _u(a, !1, e), _u(a, !0, e));
        }));
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Jr] || ((t[Jr] = !0), _u("selectionchange", !1, t));
    }
  }
  function Y0(e, t, a, s) {
    switch (bp(t)) {
      case 2:
        var c = j1;
        break;
      case 8:
        c = S1;
        break;
      default:
        c = Zu;
    }
    ((a = c.bind(null, t, a, e)),
      (c = void 0),
      !tc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (c = !0),
      s
        ? c !== void 0
          ? e.addEventListener(t, a, { capture: !0, passive: c })
          : e.addEventListener(t, a, !0)
        : c !== void 0
          ? e.addEventListener(t, a, { passive: c })
          : e.addEventListener(t, a, !1));
  }
  function Bu(e, t, a, s, c) {
    var u = s;
    if ((t & 1) === 0 && (t & 2) === 0 && s !== null)
      e: for (;;) {
        if (s === null) return;
        var m = s.tag;
        if (m === 3 || m === 4) {
          var v = s.stateNode.containerInfo;
          if (v === c) break;
          if (m === 4)
            for (m = s.return; m !== null; ) {
              var N = m.tag;
              if ((N === 3 || N === 4) && m.stateNode.containerInfo === c)
                return;
              m = m.return;
            }
          for (; v !== null; ) {
            if (((m = dn(v)), m === null)) return;
            if (((N = m.tag), N === 5 || N === 6 || N === 26 || N === 27)) {
              s = u = m;
              continue e;
            }
            v = v.parentNode;
          }
        }
        s = s.return;
      }
    Qf(function () {
      var B = u,
        q = Wo(a),
        Y = [];
      e: {
        var L = Sh.get(e);
        if (L !== void 0) {
          var U = or,
            se = e;
          switch (e) {
            case "keypress":
              if (lr(a) === 0) break e;
            case "keydown":
            case "keyup":
              U = qb;
              break;
            case "focusin":
              ((se = "focus"), (U = sc));
              break;
            case "focusout":
              ((se = "blur"), (U = sc));
              break;
            case "beforeblur":
            case "afterblur":
              U = sc;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              U = If;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Cb;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = Yb;
              break;
            case bh:
            case vh:
            case wh:
              U = kb;
              break;
            case jh:
              U = Kb;
              break;
            case "scroll":
            case "scrollend":
              U = Ab;
              break;
            case "wheel":
              U = Fb;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = _b;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = eh;
              break;
            case "toggle":
            case "beforetoggle":
              U = Zb;
          }
          var de = (t & 4) !== 0,
            qe = !de && (e === "scroll" || e === "scrollend"),
            z = de ? (L !== null ? L + "Capture" : null) : L;
          de = [];
          for (var A = B, O; A !== null; ) {
            var $ = A;
            if (
              ((O = $.stateNode),
              ($ = $.tag),
              ($ !== 5 && $ !== 26 && $ !== 27) ||
                O === null ||
                z === null ||
                (($ = zs(A, z)), $ != null && de.push(fl(A, $, O))),
              qe)
            )
              break;
            A = A.return;
          }
          0 < de.length &&
            ((L = new U(L, se, null, a, q)),
            Y.push({ event: L, listeners: de }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((L = e === "mouseover" || e === "pointerover"),
            (U = e === "mouseout" || e === "pointerout"),
            L &&
              a !== Io &&
              (se = a.relatedTarget || a.fromElement) &&
              (dn(se) || se[ma]))
          )
            break e;
          if (
            (U || L) &&
            ((L =
              q.window === q
                ? q
                : (L = q.ownerDocument)
                  ? L.defaultView || L.parentWindow
                  : window),
            U
              ? ((se = a.relatedTarget || a.toElement),
                (U = B),
                (se = se ? dn(se) : null),
                se !== null &&
                  ((qe = h(se)),
                  (de = se.tag),
                  se !== qe || (de !== 5 && de !== 27 && de !== 6)) &&
                  (se = null))
              : ((U = null), (se = B)),
            U !== se)
          ) {
            if (
              ((de = If),
              ($ = "onMouseLeave"),
              (z = "onMouseEnter"),
              (A = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((de = eh),
                ($ = "onPointerLeave"),
                (z = "onPointerEnter"),
                (A = "pointer")),
              (qe = U == null ? L : hn(U)),
              (O = se == null ? L : hn(se)),
              (L = new de($, A + "leave", U, a, q)),
              (L.target = qe),
              (L.relatedTarget = O),
              ($ = null),
              dn(q) === B &&
                ((de = new de(z, A + "enter", se, a, q)),
                (de.target = O),
                (de.relatedTarget = qe),
                ($ = de)),
              (qe = $),
              U && se)
            )
              t: {
                for (de = Qv, z = U, A = se, O = 0, $ = z; $; $ = de($)) O++;
                $ = 0;
                for (var ue = A; ue; ue = de(ue)) $++;
                for (; 0 < O - $; ) ((z = de(z)), O--);
                for (; 0 < $ - O; ) ((A = de(A)), $--);
                for (; O--; ) {
                  if (z === A || (A !== null && z === A.alternate)) {
                    de = z;
                    break t;
                  }
                  ((z = de(z)), (A = de(A)));
                }
                de = null;
              }
            else de = null;
            (U !== null && X0(Y, L, U, de, !1),
              se !== null && qe !== null && X0(Y, qe, se, de, !0));
          }
        }
        e: {
          if (
            ((L = B ? hn(B) : window),
            (U = L.nodeName && L.nodeName.toLowerCase()),
            U === "select" || (U === "input" && L.type === "file"))
          )
            var _e = oh;
          else if (lh(L))
            if (ch) _e = lv;
            else {
              _e = iv;
              var oe = nv;
            }
          else
            ((U = L.nodeName),
              !U ||
              U.toLowerCase() !== "input" ||
              (L.type !== "checkbox" && L.type !== "radio")
                ? B && Jo(B.elementType) && (_e = oh)
                : (_e = sv));
          if (_e && (_e = _e(e, B))) {
            rh(Y, _e, a, q);
            break e;
          }
          (oe && oe(e, L, B),
            e === "focusout" &&
              B &&
              L.type === "number" &&
              B.memoizedProps.value != null &&
              Qn(L, "number", L.value));
        }
        switch (((oe = B ? hn(B) : window), e)) {
          case "focusin":
            (lh(oe) || oe.contentEditable === "true") &&
              ((Bi = oe), (dc = B), (qs = null));
            break;
          case "focusout":
            qs = dc = Bi = null;
            break;
          case "mousedown":
            fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fc = !1), xh(Y, a, q));
            break;
          case "selectionchange":
            if (ov) break;
          case "keydown":
          case "keyup":
            xh(Y, a, q);
        }
        var be;
        if (rc)
          e: {
            switch (e) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          Oi
            ? ih(e, a) && (Ce = "onCompositionEnd")
            : e === "keydown" &&
              a.keyCode === 229 &&
              (Ce = "onCompositionStart");
        (Ce &&
          (th &&
            a.locale !== "ko" &&
            (Oi || Ce !== "onCompositionStart"
              ? Ce === "onCompositionEnd" && Oi && (be = Zf())
              : ((gn = q),
                (ac = "value" in gn ? gn.value : gn.textContent),
                (Oi = !0))),
          (oe = Ir(B, Ce)),
          0 < oe.length &&
            ((Ce = new Wf(Ce, e, null, a, q)),
            Y.push({ event: Ce, listeners: oe }),
            be
              ? (Ce.data = be)
              : ((be = sh(a)), be !== null && (Ce.data = be)))),
          (be = Ib ? Wb(e, a) : ev(e, a)) &&
            ((Ce = Ir(B, "onBeforeInput")),
            0 < Ce.length &&
              ((oe = new Wf("onBeforeInput", "beforeinput", null, a, q)),
              Y.push({ event: oe, listeners: Ce }),
              (oe.data = be))),
          Xv(Y, e, B, a, q));
      }
      G0(Y, t);
    });
  }
  function fl(e, t, a) {
    return { instance: e, listener: t, currentTarget: a };
  }
  function Ir(e, t) {
    for (var a = t + "Capture", s = []; e !== null; ) {
      var c = e,
        u = c.stateNode;
      if (
        ((c = c.tag),
        (c !== 5 && c !== 26 && c !== 27) ||
          u === null ||
          ((c = zs(e, a)),
          c != null && s.unshift(fl(e, c, u)),
          (c = zs(e, t)),
          c != null && s.push(fl(e, c, u))),
        e.tag === 3)
      )
        return s;
      e = e.return;
    }
    return [];
  }
  function Qv(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function X0(e, t, a, s, c) {
    for (var u = t._reactName, m = []; a !== null && a !== s; ) {
      var v = a,
        N = v.alternate,
        B = v.stateNode;
      if (((v = v.tag), N !== null && N === s)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        B === null ||
        ((N = B),
        c
          ? ((B = zs(a, u)), B != null && m.unshift(fl(a, B, N)))
          : c || ((B = zs(a, u)), B != null && m.push(fl(a, B, N)))),
        (a = a.return));
    }
    m.length !== 0 && e.push({ event: t, listeners: m });
  }
  var Zv = /\r\n?/g,
    Jv = /\u0000|\uFFFD/g;
  function K0(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Zv,
        `
`,
      )
      .replace(Jv, "");
  }
  function P0(e, t) {
    return ((t = K0(t)), K0(e) === t);
  }
  function He(e, t, a, s, c, u) {
    switch (a) {
      case "children":
        typeof s == "string"
          ? t === "body" || (t === "textarea" && s === "") || ki(e, s)
          : (typeof s == "number" || typeof s == "bigint") &&
            t !== "body" &&
            ki(e, "" + s);
        break;
      case "className":
        F(e, "class", s);
        break;
      case "tabIndex":
        F(e, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        F(e, a, s);
        break;
      case "style":
        Pf(e, s, u);
        break;
      case "data":
        if (t !== "object") {
          F(e, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (t !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "symbol" ||
          typeof s == "boolean"
        ) {
          e.removeAttribute(a);
          break;
        }
        ((s = ir("" + s)), e.setAttribute(a, s));
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof u == "function" &&
            (a === "formAction"
              ? (t !== "input" && He(e, t, "name", c.name, c, null),
                He(e, t, "formEncType", c.formEncType, c, null),
                He(e, t, "formMethod", c.formMethod, c, null),
                He(e, t, "formTarget", c.formTarget, c, null))
              : (He(e, t, "encType", c.encType, c, null),
                He(e, t, "method", c.method, c, null),
                He(e, t, "target", c.target, c, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          e.removeAttribute(a);
          break;
        }
        ((s = ir("" + s)), e.setAttribute(a, s));
        break;
      case "onClick":
        s != null && (e.onclick = Ba);
        break;
      case "onScroll":
        s != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        s != null && Ae("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(o(61));
          if (((a = s.__html), a != null)) {
            if (c.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        e.muted = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "boolean" ||
          typeof s == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        ((a = ir("" + s)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol"
          ? e.setAttribute(a, "" + s)
          : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        s && typeof s != "function" && typeof s != "symbol"
          ? e.setAttribute(a, "")
          : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        s === !0
          ? e.setAttribute(a, "")
          : s !== !1 &&
              s != null &&
              typeof s != "function" &&
              typeof s != "symbol"
            ? e.setAttribute(a, s)
            : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        !isNaN(s) &&
        1 <= s
          ? e.setAttribute(a, s)
          : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s)
          ? e.removeAttribute(a)
          : e.setAttribute(a, s);
        break;
      case "popover":
        (Ae("beforetoggle", e), Ae("toggle", e), k(e, "popover", s));
        break;
      case "xlinkActuate":
        te(e, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
        break;
      case "xlinkArcrole":
        te(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
        break;
      case "xlinkRole":
        te(e, "http://www.w3.org/1999/xlink", "xlink:role", s);
        break;
      case "xlinkShow":
        te(e, "http://www.w3.org/1999/xlink", "xlink:show", s);
        break;
      case "xlinkTitle":
        te(e, "http://www.w3.org/1999/xlink", "xlink:title", s);
        break;
      case "xlinkType":
        te(e, "http://www.w3.org/1999/xlink", "xlink:type", s);
        break;
      case "xmlBase":
        te(e, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
        break;
      case "xmlLang":
        te(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
        break;
      case "xmlSpace":
        te(e, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
        break;
      case "is":
        k(e, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Tb.get(a) || a), k(e, a, s));
    }
  }
  function Lu(e, t, a, s, c, u) {
    switch (a) {
      case "style":
        Pf(e, s, u);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(o(61));
          if (((a = s.__html), a != null)) {
            if (c.children != null) throw Error(o(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof s == "string"
          ? ki(e, s)
          : (typeof s == "number" || typeof s == "bigint") && ki(e, "" + s);
        break;
      case "onScroll":
        s != null && Ae("scroll", e);
        break;
      case "onScrollEnd":
        s != null && Ae("scrollend", e);
        break;
      case "onClick":
        s != null && (e.onclick = Ba);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Rs.hasOwnProperty(a))
          e: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((c = a.endsWith("Capture")),
              (t = a.slice(2, c ? a.length - 7 : void 0)),
              (u = e[yt] || null),
              (u = u != null ? u[a] : null),
              typeof u == "function" && e.removeEventListener(t, u, c),
              typeof s == "function")
            ) {
              (typeof u != "function" &&
                u !== null &&
                (a in e
                  ? (e[a] = null)
                  : e.hasAttribute(a) && e.removeAttribute(a)),
                e.addEventListener(t, s, c));
              break e;
            }
            a in e ? (e[a] = s) : s === !0 ? e.setAttribute(a, "") : k(e, a, s);
          }
    }
  }
  function Tt(e, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (Ae("error", e), Ae("load", e));
        var s = !1,
          c = !1,
          u;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var m = a[u];
            if (m != null)
              switch (u) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  He(e, t, u, m, a, null);
              }
          }
        (c && He(e, t, "srcSet", a.srcSet, a, null),
          s && He(e, t, "src", a.src, a, null));
        return;
      case "input":
        Ae("invalid", e);
        var v = (u = m = c = null),
          N = null,
          B = null;
        for (s in a)
          if (a.hasOwnProperty(s)) {
            var q = a[s];
            if (q != null)
              switch (s) {
                case "name":
                  c = q;
                  break;
                case "type":
                  m = q;
                  break;
                case "checked":
                  N = q;
                  break;
                case "defaultChecked":
                  B = q;
                  break;
                case "value":
                  u = q;
                  break;
                case "defaultValue":
                  v = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null) throw Error(o(137, t));
                  break;
                default:
                  He(e, t, s, q, a, null);
              }
          }
        _a(e, u, v, N, B, m, c, !1);
        return;
      case "select":
        (Ae("invalid", e), (s = m = u = null));
        for (c in a)
          if (a.hasOwnProperty(c) && ((v = a[c]), v != null))
            switch (c) {
              case "value":
                u = v;
                break;
              case "defaultValue":
                m = v;
                break;
              case "multiple":
                s = v;
              default:
                He(e, t, c, v, a, null);
            }
        ((t = u),
          (a = m),
          (e.multiple = !!s),
          t != null ? Oa(e, !!s, t, !1) : a != null && Oa(e, !!s, a, !0));
        return;
      case "textarea":
        (Ae("invalid", e), (u = c = s = null));
        for (m in a)
          if (a.hasOwnProperty(m) && ((v = a[m]), v != null))
            switch (m) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                c = v;
                break;
              case "children":
                u = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(o(91));
                break;
              default:
                He(e, t, m, v, a, null);
            }
        Xf(e, s, c, u);
        return;
      case "option":
        for (N in a)
          a.hasOwnProperty(N) &&
            ((s = a[N]), s != null) &&
            (N === "selected"
              ? (e.selected =
                  s && typeof s != "function" && typeof s != "symbol")
              : He(e, t, N, s, a, null));
        return;
      case "dialog":
        (Ae("beforetoggle", e),
          Ae("toggle", e),
          Ae("cancel", e),
          Ae("close", e));
        break;
      case "iframe":
      case "object":
        Ae("load", e);
        break;
      case "video":
      case "audio":
        for (s = 0; s < dl.length; s++) Ae(dl[s], e);
        break;
      case "image":
        (Ae("error", e), Ae("load", e));
        break;
      case "details":
        Ae("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        (Ae("error", e), Ae("load", e));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (B in a)
          if (a.hasOwnProperty(B) && ((s = a[B]), s != null))
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                He(e, t, B, s, a, null);
            }
        return;
      default:
        if (Jo(t)) {
          for (q in a)
            a.hasOwnProperty(q) &&
              ((s = a[q]), s !== void 0 && Lu(e, t, q, s, a, void 0));
          return;
        }
    }
    for (v in a)
      a.hasOwnProperty(v) && ((s = a[v]), s != null && He(e, t, v, s, a, null));
  }
  function Iv(e, t, a, s) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null,
          u = null,
          m = null,
          v = null,
          N = null,
          B = null,
          q = null;
        for (U in a) {
          var Y = a[U];
          if (a.hasOwnProperty(U) && Y != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                N = Y;
              default:
                s.hasOwnProperty(U) || He(e, t, U, null, s, Y);
            }
        }
        for (var L in s) {
          var U = s[L];
          if (((Y = a[L]), s.hasOwnProperty(L) && (U != null || Y != null)))
            switch (L) {
              case "type":
                u = U;
                break;
              case "name":
                c = U;
                break;
              case "checked":
                B = U;
                break;
              case "defaultChecked":
                q = U;
                break;
              case "value":
                m = U;
                break;
              case "defaultValue":
                v = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null) throw Error(o(137, t));
                break;
              default:
                U !== Y && He(e, t, L, U, s, Y);
            }
        }
        Qe(e, m, v, N, B, q, u, c);
        return;
      case "select":
        U = m = v = L = null;
        for (u in a)
          if (((N = a[u]), a.hasOwnProperty(u) && N != null))
            switch (u) {
              case "value":
                break;
              case "multiple":
                U = N;
              default:
                s.hasOwnProperty(u) || He(e, t, u, null, s, N);
            }
        for (c in s)
          if (
            ((u = s[c]),
            (N = a[c]),
            s.hasOwnProperty(c) && (u != null || N != null))
          )
            switch (c) {
              case "value":
                L = u;
                break;
              case "defaultValue":
                v = u;
                break;
              case "multiple":
                m = u;
              default:
                u !== N && He(e, t, c, u, s, N);
            }
        ((t = v),
          (a = m),
          (s = U),
          L != null
            ? Oa(e, !!a, L, !1)
            : !!s != !!a &&
              (t != null ? Oa(e, !!a, t, !0) : Oa(e, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        U = L = null;
        for (v in a)
          if (
            ((c = a[v]),
            a.hasOwnProperty(v) && c != null && !s.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                He(e, t, v, null, s, c);
            }
        for (m in s)
          if (
            ((c = s[m]),
            (u = a[m]),
            s.hasOwnProperty(m) && (c != null || u != null))
          )
            switch (m) {
              case "value":
                L = c;
                break;
              case "defaultValue":
                U = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(o(91));
                break;
              default:
                c !== u && He(e, t, m, c, s, u);
            }
        Ri(e, L, U);
        return;
      case "option":
        for (var se in a)
          ((L = a[se]),
            a.hasOwnProperty(se) &&
              L != null &&
              !s.hasOwnProperty(se) &&
              (se === "selected"
                ? (e.selected = !1)
                : He(e, t, se, null, s, L)));
        for (N in s)
          ((L = s[N]),
            (U = a[N]),
            s.hasOwnProperty(N) &&
              L !== U &&
              (L != null || U != null) &&
              (N === "selected"
                ? (e.selected =
                    L && typeof L != "function" && typeof L != "symbol")
                : He(e, t, N, L, s, U)));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var de in a)
          ((L = a[de]),
            a.hasOwnProperty(de) &&
              L != null &&
              !s.hasOwnProperty(de) &&
              He(e, t, de, null, s, L));
        for (B in s)
          if (
            ((L = s[B]),
            (U = a[B]),
            s.hasOwnProperty(B) && L !== U && (L != null || U != null))
          )
            switch (B) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (L != null) throw Error(o(137, t));
                break;
              default:
                He(e, t, B, L, s, U);
            }
        return;
      default:
        if (Jo(t)) {
          for (var qe in a)
            ((L = a[qe]),
              a.hasOwnProperty(qe) &&
                L !== void 0 &&
                !s.hasOwnProperty(qe) &&
                Lu(e, t, qe, void 0, s, L));
          for (q in s)
            ((L = s[q]),
              (U = a[q]),
              !s.hasOwnProperty(q) ||
                L === U ||
                (L === void 0 && U === void 0) ||
                Lu(e, t, q, L, s, U));
          return;
        }
    }
    for (var z in a)
      ((L = a[z]),
        a.hasOwnProperty(z) &&
          L != null &&
          !s.hasOwnProperty(z) &&
          He(e, t, z, null, s, L));
    for (Y in s)
      ((L = s[Y]),
        (U = a[Y]),
        !s.hasOwnProperty(Y) ||
          L === U ||
          (L == null && U == null) ||
          He(e, t, Y, L, s, U));
  }
  function F0(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function Wv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var e = 0, t = 0, a = performance.getEntriesByType("resource"), s = 0;
        s < a.length;
        s++
      ) {
        var c = a[s],
          u = c.transferSize,
          m = c.initiatorType,
          v = c.duration;
        if (u && v && F0(m)) {
          for (m = 0, v = c.responseEnd, s += 1; s < a.length; s++) {
            var N = a[s],
              B = N.startTime;
            if (B > v) break;
            var q = N.transferSize,
              Y = N.initiatorType;
            q &&
              F0(Y) &&
              ((N = N.responseEnd), (m += q * (N < v ? 1 : (v - B) / (N - B))));
          }
          if ((--s, (t += (8 * (u + m)) / (c.duration / 1e3)), e++, 10 < e))
            break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection &&
      ((e = navigator.connection.downlink), typeof e == "number")
      ? e
      : 5;
  }
  var Vu = null,
    Uu = null;
  function Wr(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Q0(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Z0(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Hu(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var qu = null;
  function e1() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === qu
        ? !1
        : ((qu = e), !0)
      : ((qu = null), !1);
  }
  var J0 = typeof setTimeout == "function" ? setTimeout : void 0,
    t1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    I0 = typeof Promise == "function" ? Promise : void 0,
    a1 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof I0 < "u"
          ? function (e) {
              return I0.resolve(null).then(e).catch(n1);
            }
          : J0;
  function n1(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function zn(e) {
    return e === "head";
  }
  function W0(e, t) {
    var a = t,
      s = 0;
    do {
      var c = a.nextSibling;
      if ((e.removeChild(a), c && c.nodeType === 8))
        if (((a = c.data), a === "/$" || a === "/&")) {
          if (s === 0) {
            (e.removeChild(c), cs(t));
            return;
          }
          s--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          s++;
        else if (a === "html") hl(e.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = e.ownerDocument.head), hl(a));
          for (var u = a.firstChild; u; ) {
            var m = u.nextSibling,
              v = u.nodeName;
            (u[un] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && u.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(u),
              (u = m));
          }
        } else a === "body" && hl(e.ownerDocument.body);
      a = c;
    } while (a);
    cs(t);
  }
  function ep(e, t) {
    var a = e;
    e = 0;
    do {
      var s = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        s && s.nodeType === 8)
      )
        if (((a = s.data), a === "/$")) {
          if (e === 0) break;
          e--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || e++;
      a = s;
    } while (a);
  }
  function $u(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ($u(a), Ds(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function i1(e, t, a, s) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!s && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (s) {
        if (!e[un])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((u = e.getAttribute("rel")),
                u === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                u !== c.rel ||
                e.getAttribute("href") !==
                  (c.href == null || c.href === "" ? null : c.href) ||
                e.getAttribute("crossorigin") !==
                  (c.crossOrigin == null ? null : c.crossOrigin) ||
                e.getAttribute("title") !== (c.title == null ? null : c.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((u = e.getAttribute("src")),
                (u !== (c.src == null ? null : c.src) ||
                  e.getAttribute("type") !== (c.type == null ? null : c.type) ||
                  e.getAttribute("crossorigin") !==
                    (c.crossOrigin == null ? null : c.crossOrigin)) &&
                  u &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === u) return e;
      } else return e;
      if (((e = sa(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function s1(e, t, a) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !a) ||
        ((e = sa(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function tp(e, t) {
    for (; e.nodeType !== 8; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !t) ||
        ((e = sa(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Gu(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Yu(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState !== "loading")
    );
  }
  function l1(e, t) {
    var a = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || a.readyState !== "loading") t();
    else {
      var s = function () {
        (t(), a.removeEventListener("DOMContentLoaded", s));
      };
      (a.addEventListener("DOMContentLoaded", s), (e._reactRetry = s));
    }
  }
  function sa(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var Xu = null;
  function ap(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return sa(e.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function np(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return e;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function ip(e, t, a) {
    switch (((t = Wr(a)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(o(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(o(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function hl(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Ds(e);
  }
  var la = new Map(),
    sp = new Set();
  function eo(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
        ? e
        : e.ownerDocument;
  }
  var Ia = K.d;
  K.d = { f: r1, r: o1, D: c1, C: u1, L: d1, m: f1, X: m1, S: h1, M: p1 };
  function r1() {
    var e = Ia.f(),
      t = Xr();
    return e || t;
  }
  function o1(e) {
    var t = fn(e);
    t !== null && t.tag === 5 && t.type === "form" ? jm(t) : Ia.r(e);
  }
  var ls = typeof document > "u" ? null : document;
  function lp(e, t, a) {
    var s = ls;
    if (s && typeof t == "string" && t) {
      var c = pe(t);
      ((c = 'link[rel="' + e + '"][href="' + c + '"]'),
        typeof a == "string" && (c += '[crossorigin="' + a + '"]'),
        sp.has(c) ||
          (sp.add(c),
          (e = { rel: e, crossOrigin: a, href: t }),
          s.querySelector(c) === null &&
            ((t = s.createElement("link")),
            Tt(t, "link", e),
            rt(t),
            s.head.appendChild(t))));
    }
  }
  function c1(e) {
    (Ia.D(e), lp("dns-prefetch", e, null));
  }
  function u1(e, t) {
    (Ia.C(e, t), lp("preconnect", e, t));
  }
  function d1(e, t, a) {
    Ia.L(e, t, a);
    var s = ls;
    if (s && e && t) {
      var c = 'link[rel="preload"][as="' + pe(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((c += '[imagesrcset="' + pe(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (c += '[imagesizes="' + pe(a.imageSizes) + '"]'))
        : (c += '[href="' + pe(e) + '"]');
      var u = c;
      switch (t) {
        case "style":
          u = rs(e);
          break;
        case "script":
          u = os(e);
      }
      la.has(u) ||
        ((e = b(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : e,
            as: t,
          },
          a,
        )),
        la.set(u, e),
        s.querySelector(c) !== null ||
          (t === "style" && s.querySelector(ml(u))) ||
          (t === "script" && s.querySelector(pl(u))) ||
          ((t = s.createElement("link")),
          Tt(t, "link", e),
          rt(t),
          s.head.appendChild(t)));
    }
  }
  function f1(e, t) {
    Ia.m(e, t);
    var a = ls;
    if (a && e) {
      var s = t && typeof t.as == "string" ? t.as : "script",
        c =
          'link[rel="modulepreload"][as="' + pe(s) + '"][href="' + pe(e) + '"]',
        u = c;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = os(e);
      }
      if (
        !la.has(u) &&
        ((e = b({ rel: "modulepreload", href: e }, t)),
        la.set(u, e),
        a.querySelector(c) === null)
      ) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(pl(u))) return;
        }
        ((s = a.createElement("link")),
          Tt(s, "link", e),
          rt(s),
          a.head.appendChild(s));
      }
    }
  }
  function h1(e, t, a) {
    Ia.S(e, t, a);
    var s = ls;
    if (s && e) {
      var c = mn(s).hoistableStyles,
        u = rs(e);
      t = t || "default";
      var m = c.get(u);
      if (!m) {
        var v = { loading: 0, preload: null };
        if ((m = s.querySelector(ml(u)))) v.loading = 5;
        else {
          ((e = b({ rel: "stylesheet", href: e, "data-precedence": t }, a)),
            (a = la.get(u)) && Ku(e, a));
          var N = (m = s.createElement("link"));
          (rt(N),
            Tt(N, "link", e),
            (N._p = new Promise(function (B, q) {
              ((N.onload = B), (N.onerror = q));
            })),
            N.addEventListener("load", function () {
              v.loading |= 1;
            }),
            N.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            to(m, t, s));
        }
        ((m = { type: "stylesheet", instance: m, count: 1, state: v }),
          c.set(u, m));
      }
    }
  }
  function m1(e, t) {
    Ia.X(e, t);
    var a = ls;
    if (a && e) {
      var s = mn(a).hoistableScripts,
        c = os(e),
        u = s.get(c);
      u ||
        ((u = a.querySelector(pl(c))),
        u ||
          ((e = b({ src: e, async: !0 }, t)),
          (t = la.get(c)) && Pu(e, t),
          (u = a.createElement("script")),
          rt(u),
          Tt(u, "link", e),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        s.set(c, u));
    }
  }
  function p1(e, t) {
    Ia.M(e, t);
    var a = ls;
    if (a && e) {
      var s = mn(a).hoistableScripts,
        c = os(e),
        u = s.get(c);
      u ||
        ((u = a.querySelector(pl(c))),
        u ||
          ((e = b({ src: e, async: !0, type: "module" }, t)),
          (t = la.get(c)) && Pu(e, t),
          (u = a.createElement("script")),
          rt(u),
          Tt(u, "link", e),
          a.head.appendChild(u)),
        (u = { type: "script", instance: u, count: 1, state: null }),
        s.set(c, u));
    }
  }
  function rp(e, t, a, s) {
    var c = (c = ve.current) ? eo(c) : null;
    if (!c) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = rs(a.href)),
            (a = mn(c).hoistableStyles),
            (s = a.get(t)),
            s ||
              ((s = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, s)),
            s)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          e = rs(a.href);
          var u = mn(c).hoistableStyles,
            m = u.get(e);
          if (
            (m ||
              ((c = c.ownerDocument || c),
              (m = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              u.set(e, m),
              (u = c.querySelector(ml(e))) &&
                !u._p &&
                ((m.instance = u), (m.state.loading = 5)),
              la.has(e) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                la.set(e, a),
                u || g1(c, e, a, m.state))),
            t && s === null)
          )
            throw Error(o(528, ""));
          return m;
        }
        if (t && s !== null) throw Error(o(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = os(a)),
              (a = mn(c).hoistableScripts),
              (s = a.get(t)),
              s ||
                ((s = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, s)),
              s)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(o(444, e));
    }
  }
  function rs(e) {
    return 'href="' + pe(e) + '"';
  }
  function ml(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function op(e) {
    return b({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function g1(e, t, a, s) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (s.loading = 1)
      : ((t = e.createElement("link")),
        (s.preload = t),
        t.addEventListener("load", function () {
          return (s.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (s.loading |= 2);
        }),
        Tt(t, "link", a),
        rt(t),
        e.head.appendChild(t));
  }
  function os(e) {
    return '[src="' + pe(e) + '"]';
  }
  function pl(e) {
    return "script[async]" + e;
  }
  function cp(e, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var s = e.querySelector('style[data-href~="' + pe(a.href) + '"]');
          if (s) return ((t.instance = s), rt(s), s);
          var c = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (s = (e.ownerDocument || e).createElement("style")),
            rt(s),
            Tt(s, "style", c),
            to(s, a.precedence, e),
            (t.instance = s)
          );
        case "stylesheet":
          c = rs(a.href);
          var u = e.querySelector(ml(c));
          if (u) return ((t.state.loading |= 4), (t.instance = u), rt(u), u);
          ((s = op(a)),
            (c = la.get(c)) && Ku(s, c),
            (u = (e.ownerDocument || e).createElement("link")),
            rt(u));
          var m = u;
          return (
            (m._p = new Promise(function (v, N) {
              ((m.onload = v), (m.onerror = N));
            })),
            Tt(u, "link", s),
            (t.state.loading |= 4),
            to(u, a.precedence, e),
            (t.instance = u)
          );
        case "script":
          return (
            (u = os(a.src)),
            (c = e.querySelector(pl(u)))
              ? ((t.instance = c), rt(c), c)
              : ((s = a),
                (c = la.get(u)) && ((s = b({}, a)), Pu(s, c)),
                (e = e.ownerDocument || e),
                (c = e.createElement("script")),
                rt(c),
                Tt(c, "link", s),
                e.head.appendChild(c),
                (t.instance = c))
          );
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((s = t.instance), (t.state.loading |= 4), to(s, a.precedence, e));
    return t.instance;
  }
  function to(e, t, a) {
    for (
      var s = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        c = s.length ? s[s.length - 1] : null,
        u = c,
        m = 0;
      m < s.length;
      m++
    ) {
      var v = s[m];
      if (v.dataset.precedence === t) u = v;
      else if (u !== c) break;
    }
    u
      ? u.parentNode.insertBefore(e, u.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild));
  }
  function Ku(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title));
  }
  function Pu(e, t) {
    (e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity));
  }
  var ao = null;
  function up(e, t, a) {
    if (ao === null) {
      var s = new Map(),
        c = (ao = new Map());
      c.set(a, s);
    } else ((c = ao), (s = c.get(a)), s || ((s = new Map()), c.set(a, s)));
    if (s.has(e)) return s;
    for (
      s.set(e, null), a = a.getElementsByTagName(e), c = 0;
      c < a.length;
      c++
    ) {
      var u = a[c];
      if (
        !(
          u[un] ||
          u[nt] ||
          (e === "link" && u.getAttribute("rel") === "stylesheet")
        ) &&
        u.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var m = u.getAttribute(t) || "";
        m = e + m;
        var v = s.get(m);
        v ? v.push(u) : s.set(m, [u]);
      }
    }
    return s;
  }
  function dp(e, t, a) {
    ((e = e.ownerDocument || e),
      e.head.insertBefore(
        a,
        t === "title" ? e.querySelector("head > title") : null,
      ));
  }
  function x1(e, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((e = t.disabled), typeof t.precedence == "string" && e == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function fp(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function y1(e, t, a, s) {
    if (
      a.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var c = rs(s.href),
          u = t.querySelector(ml(c));
        if (u) {
          ((t = u._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (e.count++, (e = no.bind(e)), t.then(e, e)),
            (a.state.loading |= 4),
            (a.instance = u),
            rt(u));
          return;
        }
        ((u = t.ownerDocument || t),
          (s = op(s)),
          (c = la.get(c)) && Ku(s, c),
          (u = u.createElement("link")),
          rt(u));
        var m = u;
        ((m._p = new Promise(function (v, N) {
          ((m.onload = v), (m.onerror = N));
        })),
          Tt(u, "link", s),
          (a.instance = u));
      }
      (e.stylesheets === null && (e.stylesheets = new Map()),
        e.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (e.count++,
          (a = no.bind(e)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Fu = 0;
  function b1(e, t) {
    return (
      e.stylesheets && e.count === 0 && so(e, e.stylesheets),
      0 < e.count || 0 < e.imgCount
        ? function (a) {
            var s = setTimeout(function () {
              if ((e.stylesheets && so(e, e.stylesheets), e.unsuspend)) {
                var u = e.unsuspend;
                ((e.unsuspend = null), u());
              }
            }, 6e4 + t);
            0 < e.imgBytes && Fu === 0 && (Fu = 62500 * Wv());
            var c = setTimeout(
              function () {
                if (
                  ((e.waitingForImages = !1),
                  e.count === 0 &&
                    (e.stylesheets && so(e, e.stylesheets), e.unsuspend))
                ) {
                  var u = e.unsuspend;
                  ((e.unsuspend = null), u());
                }
              },
              (e.imgBytes > Fu ? 50 : 800) + t,
            );
            return (
              (e.unsuspend = a),
              function () {
                ((e.unsuspend = null), clearTimeout(s), clearTimeout(c));
              }
            );
          }
        : null
    );
  }
  function no() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) so(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        ((this.unsuspend = null), e());
      }
    }
  }
  var io = null;
  function so(e, t) {
    ((e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (io = new Map()),
        t.forEach(v1, e),
        (io = null),
        no.call(e)));
  }
  function v1(e, t) {
    if (!(t.state.loading & 4)) {
      var a = io.get(e);
      if (a) var s = a.get(null);
      else {
        ((a = new Map()), io.set(e, a));
        for (
          var c = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            u = 0;
          u < c.length;
          u++
        ) {
          var m = c[u];
          (m.nodeName === "LINK" || m.getAttribute("media") !== "not all") &&
            (a.set(m.dataset.precedence, m), (s = m));
        }
        s && a.set(null, s);
      }
      ((c = t.instance),
        (m = c.getAttribute("data-precedence")),
        (u = a.get(m) || s),
        u === s && a.set(null, c),
        a.set(m, c),
        this.count++,
        (s = no.bind(this)),
        c.addEventListener("load", s),
        c.addEventListener("error", s),
        u
          ? u.parentNode.insertBefore(c, u.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(c, e.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var gl = {
    $$typeof: E,
    Provider: null,
    Consumer: null,
    _currentValue: ae,
    _currentValue2: ae,
    _threadCount: 0,
  };
  function w1(e, t, a, s, c, u, m, v, N) {
    ((this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Ai(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Ai(0)),
      (this.hiddenUpdates = Ai(null)),
      (this.identifierPrefix = s),
      (this.onUncaughtError = c),
      (this.onCaughtError = u),
      (this.onRecoverableError = m),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = N),
      (this.incompleteTransitions = new Map()));
  }
  function hp(e, t, a, s, c, u, m, v, N, B, q, Y) {
    return (
      (e = new w1(e, t, a, m, N, B, q, Y, v)),
      (t = 1),
      u === !0 && (t |= 24),
      (u = $t(3, null, null, t)),
      (e.current = u),
      (u.stateNode = e),
      (t = Ac()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (u.memoizedState = { element: s, isDehydrated: a, cache: t }),
      Rc(u),
      e
    );
  }
  function mp(e) {
    return e ? ((e = Ui), e) : Ui;
  }
  function pp(e, t, a, s, c, u) {
    ((c = mp(c)),
      s.context === null ? (s.context = c) : (s.pendingContext = c),
      (s = jn(t)),
      (s.payload = { element: a }),
      (u = u === void 0 ? null : u),
      u !== null && (s.callback = u),
      (a = Sn(e, s, t)),
      a !== null && (Lt(a, e, t), Fs(a, e, t)));
  }
  function gp(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function Qu(e, t) {
    (gp(e, t), (e = e.alternate) && gp(e, t));
  }
  function xp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Wn(e, 67108864);
      (t !== null && Lt(t, e, 67108864), Qu(e, 67108864));
    }
  }
  function yp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Pt();
      t = Ms(t);
      var a = Wn(e, t);
      (a !== null && Lt(a, e, t), Qu(e, t));
    }
  }
  var lo = !0;
  function j1(e, t, a, s) {
    var c = H.T;
    H.T = null;
    var u = K.p;
    try {
      ((K.p = 2), Zu(e, t, a, s));
    } finally {
      ((K.p = u), (H.T = c));
    }
  }
  function S1(e, t, a, s) {
    var c = H.T;
    H.T = null;
    var u = K.p;
    try {
      ((K.p = 8), Zu(e, t, a, s));
    } finally {
      ((K.p = u), (H.T = c));
    }
  }
  function Zu(e, t, a, s) {
    if (lo) {
      var c = Ju(s);
      if (c === null) (Bu(e, t, s, ro, a), vp(e, s));
      else if (T1(c, e, t, a, s)) s.stopPropagation();
      else if ((vp(e, s), t & 4 && -1 < N1.indexOf(e))) {
        for (; c !== null; ) {
          var u = fn(c);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (((u = u.stateNode), u.current.memoizedState.isDehydrated)) {
                  var m = Qt(u.pendingLanes);
                  if (m !== 0) {
                    var v = u;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; m; ) {
                      var N = 1 << (31 - xt(m));
                      ((v.entanglements[1] |= N), (m &= ~N));
                    }
                    (Ea(u), (Be & 6) === 0 && ((Gr = At() + 500), ul(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((v = Wn(u, 2)), v !== null && Lt(v, u, 2), Xr(), Qu(u, 2));
            }
          if (((u = Ju(s)), u === null && Bu(e, t, s, ro, a), u === c)) break;
          c = u;
        }
        c !== null && s.stopPropagation();
      } else Bu(e, t, s, null, a);
    }
  }
  function Ju(e) {
    return ((e = Wo(e)), Iu(e));
  }
  var ro = null;
  function Iu(e) {
    if (((ro = null), (e = dn(e)), e !== null)) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((e = f(t)), e !== null)) return e;
          e = null;
        } else if (a === 31) {
          if (((e = x(t)), e !== null)) return e;
          e = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return ((ro = e), null);
  }
  function bp(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Kn()) {
          case J:
            return 2;
          case Ql:
            return 8;
          case da:
          case Pn:
            return 32;
          case Zl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wu = !1,
    _n = null,
    On = null,
    Bn = null,
    xl = new Map(),
    yl = new Map(),
    Ln = [],
    N1 =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function vp(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        _n = null;
        break;
      case "dragenter":
      case "dragleave":
        On = null;
        break;
      case "mouseover":
      case "mouseout":
        Bn = null;
        break;
      case "pointerover":
      case "pointerout":
        xl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yl.delete(t.pointerId);
    }
  }
  function bl(e, t, a, s, c, u) {
    return e === null || e.nativeEvent !== u
      ? ((e = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: s,
          nativeEvent: u,
          targetContainers: [c],
        }),
        t !== null && ((t = fn(t)), t !== null && xp(t)),
        e)
      : ((e.eventSystemFlags |= s),
        (t = e.targetContainers),
        c !== null && t.indexOf(c) === -1 && t.push(c),
        e);
  }
  function T1(e, t, a, s, c) {
    switch (t) {
      case "focusin":
        return ((_n = bl(_n, e, t, a, s, c)), !0);
      case "dragenter":
        return ((On = bl(On, e, t, a, s, c)), !0);
      case "mouseover":
        return ((Bn = bl(Bn, e, t, a, s, c)), !0);
      case "pointerover":
        var u = c.pointerId;
        return (xl.set(u, bl(xl.get(u) || null, e, t, a, s, c)), !0);
      case "gotpointercapture":
        return (
          (u = c.pointerId),
          yl.set(u, bl(yl.get(u) || null, e, t, a, s, c)),
          !0
        );
    }
    return !1;
  }
  function wp(e) {
    var t = dn(e.target);
    if (t !== null) {
      var a = h(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = f(a)), t !== null)) {
            ((e.blockedOn = t),
              Wl(e.priority, function () {
                yp(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = x(a)), t !== null)) {
            ((e.blockedOn = t),
              Wl(e.priority, function () {
                yp(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function oo(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var a = Ju(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var s = new a.constructor(a.type, a);
        ((Io = s), a.target.dispatchEvent(s), (Io = null));
      } else return ((t = fn(a)), t !== null && xp(t), (e.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function jp(e, t, a) {
    oo(e) && a.delete(t);
  }
  function E1() {
    ((Wu = !1),
      _n !== null && oo(_n) && (_n = null),
      On !== null && oo(On) && (On = null),
      Bn !== null && oo(Bn) && (Bn = null),
      xl.forEach(jp),
      yl.forEach(jp));
  }
  function co(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Wu ||
        ((Wu = !0),
        n.unstable_scheduleCallback(n.unstable_NormalPriority, E1)));
  }
  var uo = null;
  function Sp(e) {
    uo !== e &&
      ((uo = e),
      n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
        uo === e && (uo = null);
        for (var t = 0; t < e.length; t += 3) {
          var a = e[t],
            s = e[t + 1],
            c = e[t + 2];
          if (typeof s != "function") {
            if (Iu(s || a) === null) continue;
            break;
          }
          var u = fn(a);
          u !== null &&
            (e.splice(t, 3),
            (t -= 3),
            Jc(u, { pending: !0, data: c, method: a.method, action: s }, s, c));
        }
      }));
  }
  function cs(e) {
    function t(N) {
      return co(N, e);
    }
    (_n !== null && co(_n, e),
      On !== null && co(On, e),
      Bn !== null && co(Bn, e),
      xl.forEach(t),
      yl.forEach(t));
    for (var a = 0; a < Ln.length; a++) {
      var s = Ln[a];
      s.blockedOn === e && (s.blockedOn = null);
    }
    for (; 0 < Ln.length && ((a = Ln[0]), a.blockedOn === null); )
      (wp(a), a.blockedOn === null && Ln.shift());
    if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
      for (s = 0; s < a.length; s += 3) {
        var c = a[s],
          u = a[s + 1],
          m = c[yt] || null;
        if (typeof u == "function") m || Sp(a);
        else if (m) {
          var v = null;
          if (u && u.hasAttribute("formAction")) {
            if (((c = u), (m = u[yt] || null))) v = m.formAction;
            else if (Iu(c) !== null) continue;
          } else v = m.action;
          (typeof v == "function" ? (a[s + 1] = v) : (a.splice(s, 3), (s -= 3)),
            Sp(a));
        }
      }
  }
  function Np() {
    function e(u) {
      u.canIntercept &&
        u.info === "react-transition" &&
        u.intercept({
          handler: function () {
            return new Promise(function (m) {
              return (c = m);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (c !== null && (c(), (c = null)), s || setTimeout(a, 20));
    }
    function a() {
      if (!s && !navigation.transition) {
        var u = navigation.currentEntry;
        u &&
          u.url != null &&
          navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var s = !1,
        c = null;
      return (
        navigation.addEventListener("navigate", e),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((s = !0),
            navigation.removeEventListener("navigate", e),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            c !== null && (c(), (c = null)));
        }
      );
    }
  }
  function ed(e) {
    this._internalRoot = e;
  }
  ((fo.prototype.render = ed.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var a = t.current,
        s = Pt();
      pp(a, s, e, t, null, null);
    }),
    (fo.prototype.unmount = ed.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          (pp(e.current, 2, null, e, null, null), Xr(), (t[ma] = null));
        }
      }));
  function fo(e) {
    this._internalRoot = e;
  }
  fo.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Di();
      e = { blockedOn: null, target: e, priority: t };
      for (var a = 0; a < Ln.length && t !== 0 && t < Ln[a].priority; a++);
      (Ln.splice(a, 0, e), a === 0 && wp(e));
    }
  };
  var Tp = i.version;
  if (Tp !== "19.2.3") throw Error(o(527, Tp, "19.2.3"));
  K.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(o(188))
        : ((e = Object.keys(e).join(",")), Error(o(268, e)));
    return (
      (e = g(t)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var A1 = {
    bundleType: 0,
    version: "19.2.3",
    rendererPackageName: "react-dom",
    currentDispatcherRef: H,
    reconcilerVersion: "19.2.3",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ho = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ho.isDisabled && ho.supportsFiber)
      try {
        ((rn = ho.inject(A1)), (Mt = ho));
      } catch {}
  }
  return (
    (wl.createRoot = function (e, t) {
      if (!d(e)) throw Error(o(299));
      var a = !1,
        s = "",
        c = km,
        u = zm,
        m = _m;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (s = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (c = t.onUncaughtError),
          t.onCaughtError !== void 0 && (u = t.onCaughtError),
          t.onRecoverableError !== void 0 && (m = t.onRecoverableError)),
        (t = hp(e, 1, !1, null, null, a, s, null, c, u, m, Np)),
        (e[ma] = t.current),
        Ou(e),
        new ed(t)
      );
    }),
    (wl.hydrateRoot = function (e, t, a) {
      if (!d(e)) throw Error(o(299));
      var s = !1,
        c = "",
        u = km,
        m = zm,
        v = _m,
        N = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (s = !0),
          a.identifierPrefix !== void 0 && (c = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (u = a.onUncaughtError),
          a.onCaughtError !== void 0 && (m = a.onCaughtError),
          a.onRecoverableError !== void 0 && (v = a.onRecoverableError),
          a.formState !== void 0 && (N = a.formState)),
        (t = hp(e, 1, !0, t, a ?? null, s, c, N, u, m, v, Np)),
        (t.context = mp(null)),
        (a = t.current),
        (s = Pt()),
        (s = Ms(s)),
        (c = jn(s)),
        (c.callback = null),
        Sn(a, c, s),
        (a = s),
        (t.current.lanes = a),
        cn(t, a),
        Ea(t),
        (e[ma] = t.current),
        Ou(e),
        new fo(t)
      );
    }),
    (wl.version = "19.2.3"),
    wl
  );
}
var Op;
function V1() {
  if (Op) return nd.exports;
  Op = 1;
  function n() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (i) {
        console.error(i);
      }
  }
  return (n(), (nd.exports = L1()), nd.exports);
}
var U1 = V1();
var sf = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
  xx = /^[\\/]{2}/;
function H1(n, i) {
  return i + n.replace(/\\/g, "/");
}
var Bp = "popstate";
function Lp(n) {
  return (
    typeof n == "object" &&
    n != null &&
    "pathname" in n &&
    "search" in n &&
    "hash" in n &&
    "state" in n &&
    "key" in n
  );
}
function q1(n = {}) {
  function i(o, d) {
    let h = d.state?.masked,
      { pathname: f, search: x, hash: p } = h || o.location;
    return Ad(
      "",
      { pathname: f, search: x, hash: p },
      (d.state && d.state.usr) || null,
      (d.state && d.state.key) || "default",
      h
        ? {
            pathname: o.location.pathname,
            search: o.location.search,
            hash: o.location.hash,
          }
        : void 0,
    );
  }
  function l(o, d) {
    return typeof d == "string" ? d : kl(d);
  }
  return G1(i, l, null, n);
}
function Je(n, i) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(i);
}
function Ca(n, i) {
  if (!n) {
    typeof console < "u" && console.warn(i);
    try {
      throw new Error(i);
    } catch {}
  }
}
function $1() {
  return Math.random().toString(36).substring(2, 10);
}
function Vp(n, i) {
  return {
    usr: n.state,
    key: n.key,
    idx: i,
    masked: n.mask
      ? { pathname: n.pathname, search: n.search, hash: n.hash }
      : void 0,
  };
}
function Ad(n, i, l = null, o, d) {
  return {
    pathname: typeof n == "string" ? n : n.pathname,
    search: "",
    hash: "",
    ...(typeof i == "string" ? vs(i) : i),
    state: l,
    key: (i && i.key) || o || $1(),
    mask: d,
  };
}
function kl({ pathname: n = "/", search: i = "", hash: l = "" }) {
  return (
    i && i !== "?" && (n += i.charAt(0) === "?" ? i : "?" + i),
    l && l !== "#" && (n += l.charAt(0) === "#" ? l : "#" + l),
    n
  );
}
function vs(n) {
  let i = {};
  if (n) {
    let l = n.indexOf("#");
    l >= 0 && ((i.hash = n.substring(l)), (n = n.substring(0, l)));
    let o = n.indexOf("?");
    (o >= 0 && ((i.search = n.substring(o)), (n = n.substring(0, o))),
      n && (i.pathname = n));
  }
  return i;
}
function G1(n, i, l, o = {}) {
  let { window: d = document.defaultView, v5Compat: h = !1 } = o,
    f = d.history,
    x = "POP",
    p = null,
    g = y();
  g == null && ((g = 0), f.replaceState({ ...f.state, idx: g }, ""));
  function y() {
    return (f.state || { idx: null }).idx;
  }
  function b() {
    x = "POP";
    let D = y(),
      _ = D == null ? null : D - g;
    ((g = D), p && p({ action: x, location: C.location, delta: _ }));
  }
  function w(D, _) {
    x = "PUSH";
    let V = Lp(D) ? D : Ad(C.location, D, _);
    g = y() + 1;
    let E = Vp(V, g),
      Q = C.createHref(V.mask || V);
    try {
      f.pushState(E, "", Q);
    } catch (X) {
      if (X instanceof DOMException && X.name === "DataCloneError") throw X;
      d.location.assign(Q);
    }
    h && p && p({ action: x, location: C.location, delta: 1 });
  }
  function T(D, _) {
    x = "REPLACE";
    let V = Lp(D) ? D : Ad(C.location, D, _);
    g = y();
    let E = Vp(V, g),
      Q = C.createHref(V.mask || V);
    (f.replaceState(E, "", Q),
      h && p && p({ action: x, location: C.location, delta: 0 }));
  }
  function R(D) {
    return Y1(d, D);
  }
  let C = {
    get action() {
      return x;
    },
    get location() {
      return n(d, f);
    },
    listen(D) {
      if (p) throw new Error("A history only accepts one active listener");
      return (
        d.addEventListener(Bp, b),
        (p = D),
        () => {
          (d.removeEventListener(Bp, b), (p = null));
        }
      );
    },
    createHref(D) {
      return i(d, D);
    },
    createURL: R,
    encodeLocation(D) {
      let _ = R(D);
      return { pathname: _.pathname, search: _.search, hash: _.hash };
    },
    push: w,
    replace: T,
    go(D) {
      return f.go(D);
    },
  };
  return C;
}
function Y1(n, i, l = !1) {
  let o = "http://localhost";
  (n &&
    (o = n.location.origin !== "null" ? n.location.origin : n.location.href),
    Je(o, "No window.location.(origin|href) available to create URL"));
  let d = typeof i == "string" ? i : kl(i);
  return (
    (d = d.replace(/ $/, "%20")),
    !l && xx.test(d) && (d = o + d),
    new URL(d, o)
  );
}
function yx(n, i, l = "/") {
  return X1(n, i, l, !1);
}
function X1(n, i, l, o, d) {
  let h = typeof i == "string" ? vs(i) : i,
    f = en(h.pathname || "/", l);
  if (f == null) return null;
  let x = K1(n),
    p = null,
    g = n2(f);
  for (let y = 0; p == null && y < x.length; ++y) p = a2(x[y], g, o);
  return p;
}
function K1(n) {
  let i = bx(n);
  return (P1(i), i);
}
function bx(n, i = [], l = [], o = "", d = !1) {
  let h = (f, x, p = d, g) => {
    let y = {
      relativePath: g === void 0 ? f.path || "" : g,
      caseSensitive: f.caseSensitive === !0,
      childrenIndex: x,
      route: f,
    };
    if (y.relativePath.startsWith("/")) {
      if (!y.relativePath.startsWith(o) && p) return;
      (Je(
        y.relativePath.startsWith(o),
        `Absolute route path "${y.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (y.relativePath = y.relativePath.slice(o.length)));
    }
    let b = va([o, y.relativePath]),
      w = l.concat(y);
    (f.children &&
      f.children.length > 0 &&
      (Je(
        f.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${b}".`,
      ),
      bx(f.children, i, w, b, p)),
      !(f.path == null && !f.index) &&
        i.push({
          path: b,
          score: e2(b, f.index),
          routesMeta: w.map((T, R) => {
            let [C, D] = jx(
              T.relativePath,
              T.caseSensitive,
              R === w.length - 1,
            );
            return { ...T, matcher: C, compiledParams: D };
          }),
        }));
  };
  return (
    n.forEach((f, x) => {
      if (f.path === "" || !f.path?.includes("?")) h(f, x);
      else for (let p of vx(f.path)) h(f, x, !0, p);
    }),
    i
  );
}
function vx(n) {
  let i = n.split("/");
  if (i.length === 0) return [];
  let [l, ...o] = i,
    d = l.endsWith("?"),
    h = l.replace(/\?$/, "");
  if (o.length === 0) return d ? [h, ""] : [h];
  let f = vx(o.join("/")),
    x = [];
  return (
    x.push(...f.map((p) => (p === "" ? h : [h, p].join("/")))),
    d && x.push(...f),
    x.map((p) => (n.startsWith("/") && p === "" ? "/" : p))
  );
}
function P1(n) {
  n.sort((i, l) =>
    i.score !== l.score
      ? l.score - i.score
      : t2(
          i.routesMeta.map((o) => o.childrenIndex),
          l.routesMeta.map((o) => o.childrenIndex),
        ),
  );
}
var F1 = /^:[\w-]+$/,
  Q1 = 3,
  Z1 = 2,
  J1 = 1,
  I1 = 10,
  W1 = -2,
  Up = (n) => n === "*";
function e2(n, i) {
  let l = n.split("/"),
    o = l.length;
  return (
    l.some(Up) && (o += W1),
    i && (o += Z1),
    l
      .filter((d) => !Up(d))
      .reduce((d, h) => d + (F1.test(h) ? Q1 : h === "" ? J1 : I1), o)
  );
}
function t2(n, i) {
  return n.length === i.length && n.slice(0, -1).every((o, d) => o === i[d])
    ? n[n.length - 1] - i[i.length - 1]
    : 0;
}
function a2(n, i, l = !1) {
  let { routesMeta: o } = n,
    d = {},
    h = "/",
    f = [];
  for (let x = 0; x < o.length; ++x) {
    let p = o[x],
      g = x === o.length - 1,
      y = h === "/" ? i : i.slice(h.length) || "/",
      b = { path: p.relativePath, caseSensitive: p.caseSensitive, end: g },
      w =
        p.matcher && p.compiledParams
          ? wx(b, y, p.matcher, p.compiledParams)
          : Mo(b, y),
      T = p.route;
    if (
      (!w &&
        g &&
        l &&
        !o[o.length - 1].route.index &&
        (w = Mo(
          { path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
          y,
        )),
      !w)
    )
      return null;
    (Object.assign(d, w.params),
      f.push({
        params: d,
        pathname: va([h, w.pathname]),
        pathnameBase: l2(va([h, w.pathnameBase])),
        route: T,
      }),
      w.pathnameBase !== "/" && (h = va([h, w.pathnameBase])));
  }
  return f;
}
function Mo(n, i) {
  typeof n == "string" && (n = { path: n, caseSensitive: !1, end: !0 });
  let [l, o] = jx(n.path, n.caseSensitive, n.end);
  return wx(n, i, l, o);
}
function wx(n, i, l, o) {
  let d = i.match(l);
  if (!d) return null;
  let h = d[0],
    f = h.replace(/(.)\/+$/, "$1"),
    x = d.slice(1);
  return {
    params: o.reduce((g, { paramName: y, isOptional: b }, w) => {
      if (y === "*") {
        let R = x[w] || "";
        f = h.slice(0, h.length - R.length).replace(/(.)\/+$/, "$1");
      }
      const T = x[w];
      return (
        b && !T ? (g[y] = void 0) : (g[y] = (T || "").replace(/%2F/g, "/")),
        g
      );
    }, {}),
    pathname: h,
    pathnameBase: f,
    pattern: n,
  };
}
function jx(n, i = !1, l = !0) {
  Ca(
    n === "*" || !n.endsWith("*") || n.endsWith("/*"),
    `Route path "${n}" will be treated as if it were "${n.replace(/\*$/, "/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, "/*")}".`,
  );
  let o = [],
    d =
      "^" +
      n
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(/\/:([\w-]+)(\?)?/g, (f, x, p, g, y) => {
          if ((o.push({ paramName: x, isOptional: p != null }), p)) {
            let b = y.charAt(g + f.length);
            return b && b !== "/" ? "/([^\\/]*)" : "(?:/([^\\/]*))?";
          }
          return "/([^\\/]+)";
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, "(/$1)?$2");
  return (
    n.endsWith("*")
      ? (o.push({ paramName: "*" }),
        (d += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : l
        ? (d += "\\/*$")
        : n !== "" && n !== "/" && (d += "(?:(?=\\/|$))"),
    [new RegExp(d, i ? void 0 : "i"), o]
  );
}
function n2(n) {
  try {
    return n
      .split("/")
      .map((i) => decodeURIComponent(i).replace(/\//g, "%2F"))
      .join("/");
  } catch (i) {
    return (
      Ca(
        !1,
        `The URL path "${n}" could not be    because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`,
      ),
      n
    );
  }
}
function en(n, i) {
  if (i === "/") return n;
  if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
  let l = i.endsWith("/") ? i.length - 1 : i.length,
    o = n.charAt(l);
  return o && o !== "/" ? null : n.slice(l) || "/";
}
function i2(n, i = "/") {
  let {
      pathname: l,
      search: o = "",
      hash: d = "",
    } = typeof n == "string" ? vs(n) : n,
    h;
  return (
    l
      ? ((l = Nx(l)),
        l.startsWith("/") ? (h = Hp(l.substring(1), "/")) : (h = Hp(l, i)))
      : (h = i),
    { pathname: h, search: r2(o), hash: o2(d) }
  );
}
function Hp(n, i) {
  let l = Co(i).split("/");
  return (
    n.split("/").forEach((d) => {
      d === ".." ? l.length > 1 && l.pop() : d !== "." && l.push(d);
    }),
    l.length > 1 ? l.join("/") : "/"
  );
}
function rd(n, i, l, o) {
  return `Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function s2(n) {
  return n.filter(
    (i, l) => l === 0 || (i.route.path && i.route.path.length > 0),
  );
}
function Sx(n) {
  let i = s2(n);
  return i.map((l, o) => (o === i.length - 1 ? l.pathname : l.pathnameBase));
}
function lf(n, i, l, o = !1) {
  let d;
  typeof n == "string"
    ? (d = vs(n))
    : ((d = { ...n }),
      Je(
        !d.pathname || !d.pathname.includes("?"),
        rd("?", "pathname", "search", d),
      ),
      Je(
        !d.pathname || !d.pathname.includes("#"),
        rd("#", "pathname", "hash", d),
      ),
      Je(!d.search || !d.search.includes("#"), rd("#", "search", "hash", d)));
  let h = n === "" || d.pathname === "",
    f = h ? "/" : d.pathname,
    x;
  if (f == null) x = l;
  else {
    let b = i.length - 1;
    if (!o && f.startsWith("..")) {
      let w = f.split("/");
      for (; w[0] === ".."; ) (w.shift(), (b -= 1));
      d.pathname = w.join("/");
    }
    x = b >= 0 ? i[b] : "/";
  }
  let p = i2(d, x),
    g = f && f !== "/" && f.endsWith("/"),
    y = (h || f === ".") && l.endsWith("/");
  return (!p.pathname.endsWith("/") && (g || y) && (p.pathname += "/"), p);
}
var Nx = (n) => n.replace(/[\\/]{2,}/g, "/"),
  va = (n) => Nx(n.join("/")),
  Co = (n) => n.replace(/\/+$/, ""),
  l2 = (n) => Co(n).replace(/^\/*/, "/"),
  r2 = (n) => (!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n),
  o2 = (n) => (!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n),
  c2 = class {
    constructor(n, i, l, o = !1) {
      ((this.status = n),
        (this.statusText = i || ""),
        (this.internal = o),
        l instanceof Error
          ? ((this.data = l.toString()), (this.error = l))
          : (this.data = l));
    }
  };
function u2(n) {
  return (
    n != null &&
    typeof n.status == "number" &&
    typeof n.statusText == "string" &&
    typeof n.internal == "boolean" &&
    "data" in n
  );
}
function d2(n) {
  let i = n.map((l) => l.route.path).filter(Boolean);
  return va(i) || "/";
}
var Tx =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
function Ex(n, i) {
  let l = n;
  if (typeof l != "string" || !sf.test(l))
    return { absoluteURL: void 0, isExternal: !1, to: l };
  let o = l,
    d = !1;
  if (Tx)
    try {
      let h = new URL(window.location.href),
        f = xx.test(l) ? new URL(H1(l, h.protocol)) : new URL(l),
        x = en(f.pathname, i);
      f.origin === h.origin && x != null
        ? (l = x + f.search + f.hash)
        : (d = !0);
    } catch {
      Ca(
        !1,
        `<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: o, isExternal: d, to: l };
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
var Ax = ["POST", "PUT", "PATCH", "DELETE"];
new Set(Ax);
var f2 = ["GET", ...Ax];
new Set(f2);
var h2 = [
  "about:",
  "blob:",
  "chrome:",
  "chrome-untrusted:",
  "content:",
  "data:",
  "devtools:",
  "file:",
  "filesystem:",
  "javascript:",
];
function m2(n) {
  try {
    return h2.includes(new URL(n).protocol);
  } catch {
    return !1;
  }
}
var ws = j.createContext(null);
ws.displayName = "DataRouter";
var Uo = j.createContext(null);
Uo.displayName = "DataRouterState";
var Mx = j.createContext(!1);
function p2() {
  return j.useContext(Mx);
}
var Cx = j.createContext({ isTransitioning: !1 });
Cx.displayName = "ViewTransition";
var g2 = j.createContext(new Map());
g2.displayName = "Fetchers";
var x2 = j.createContext(null);
x2.displayName = "Await";
var ua = j.createContext(null);
ua.displayName = "Navigation";
var Ul = j.createContext(null);
Ul.displayName = "Location";
var Da = j.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Da.displayName = "Route";
var rf = j.createContext(null);
rf.displayName = "RouteError";
var Dx = "REACT_ROUTER_ERROR",
  y2 = "REDIRECT",
  b2 = "ROUTE_ERROR_RESPONSE";
function v2(n) {
  if (n.startsWith(`${Dx}:${y2}:{`))
    try {
      let i = JSON.parse(n.slice(28));
      if (
        typeof i == "object" &&
        i &&
        typeof i.status == "number" &&
        typeof i.statusText == "string" &&
        typeof i.location == "string" &&
        typeof i.reloadDocument == "boolean" &&
        typeof i.replace == "boolean"
      )
        return i;
    } catch {}
}
function w2(n) {
  if (n.startsWith(`${Dx}:${b2}:{`))
    try {
      let i = JSON.parse(n.slice(40));
      if (
        typeof i == "object" &&
        i &&
        typeof i.status == "number" &&
        typeof i.statusText == "string"
      )
        return new c2(i.status, i.statusText, i.data);
    } catch {}
}
function j2(n, { relative: i } = {}) {
  Je(
    Hl(),
    "useHref() may be used only in the context of a <Router> component.",
  );
  let { basename: l, navigator: o } = j.useContext(ua),
    { hash: d, pathname: h, search: f } = ql(n, { relative: i }),
    x = h;
  return (
    l !== "/" && (x = h === "/" ? l : va([l, h])),
    o.createHref({ pathname: x, search: f, hash: d })
  );
}
function Hl() {
  return j.useContext(Ul) != null;
}
function Ra() {
  return (
    Je(
      Hl(),
      "useLocation() may be used only in the context of a <Router> component.",
    ),
    j.useContext(Ul).location
  );
}
var Rx =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function kx(n) {
  j.useContext(ua).static || j.useLayoutEffect(n);
}
function zx() {
  let { isDataRoute: n } = j.useContext(Da);
  return n ? O2() : S2();
}
function S2() {
  Je(
    Hl(),
    "useNavigate() may be used only in the context of a <Router> component.",
  );
  let n = j.useContext(ws),
    { basename: i, navigator: l } = j.useContext(ua),
    { matches: o } = j.useContext(Da),
    { pathname: d } = Ra(),
    h = JSON.stringify(Sx(o)),
    f = j.useRef(!1);
  return (
    kx(() => {
      f.current = !0;
    }),
    j.useCallback(
      (p, g = {}) => {
        if ((Ca(f.current, Rx), !f.current)) return;
        if (typeof p == "number") {
          l.go(p);
          return;
        }
        let y = lf(p, JSON.parse(h), d, g.relative === "path");
        (n == null &&
          i !== "/" &&
          (y.pathname = y.pathname === "/" ? i : va([i, y.pathname])),
          (g.replace ? l.replace : l.push)(y, g.state, g));
      },
      [i, l, h, d, n],
    )
  );
}
j.createContext(null);
function _x() {
  let { matches: n } = j.useContext(Da);
  return n[n.length - 1]?.params ?? {};
}
function ql(n, { relative: i } = {}) {
  let { matches: l } = j.useContext(Da),
    { pathname: o } = Ra(),
    d = JSON.stringify(Sx(l));
  return j.useMemo(() => lf(n, JSON.parse(d), o, i === "path"), [n, d, o, i]);
}
function N2(n, i) {
  return Ox(n, i);
}
function Ox(n, i, l) {
  Je(
    Hl(),
    "useRoutes() may be used only in the context of a <Router> component.",
  );
  let { navigator: o } = j.useContext(ua),
    { matches: d } = j.useContext(Da),
    h = d[d.length - 1],
    f = h ? h.params : {},
    x = h ? h.pathname : "/",
    p = h ? h.pathnameBase : "/",
    g = h && h.route;
  {
    let D = (g && g.path) || "";
    Lx(
      x,
      !g || D.endsWith("*") || D.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${x}" (under <Route path="${D}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${D}"> to <Route path="${D === "/" ? "*" : `${D}/*`}">.`,
    );
  }
  let y = Ra(),
    b;
  if (i) {
    let D = typeof i == "string" ? vs(i) : i;
    (Je(
      p === "/" || D.pathname?.startsWith(p),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${D.pathname}" was given in the \`location\` prop.`,
    ),
      (b = D));
  } else b = y;
  let w = b.pathname || "/",
    T = w;
  if (p !== "/") {
    let D = p.replace(/^\//, "").split("/");
    T = "/" + w.replace(/^\//, "").split("/").slice(D.length).join("/");
  }
  let R =
    l && l.state.matches.length
      ? l.state.matches.map((D) =>
          Object.assign(D, { route: l.manifest[D.route.id] || D.route }),
        )
      : yx(n, { pathname: T });
  (Ca(
    g || R != null,
    `No routes matched location "${b.pathname}${b.search}${b.hash}" `,
  ),
    Ca(
      R == null ||
        R[R.length - 1].route.element !== void 0 ||
        R[R.length - 1].route.Component !== void 0 ||
        R[R.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let C = C2(
    R &&
      R.map((D) =>
        Object.assign({}, D, {
          params: Object.assign({}, f, D.params),
          pathname: va([
            p,
            o.encodeLocation
              ? o.encodeLocation(
                  D.pathname
                    .replace(/%/g, "%25")
                    .replace(/\?/g, "%3F")
                    .replace(/#/g, "%23"),
                ).pathname
              : D.pathname,
          ]),
          pathnameBase:
            D.pathnameBase === "/"
              ? p
              : va([
                  p,
                  o.encodeLocation
                    ? o.encodeLocation(
                        D.pathnameBase
                          .replace(/%/g, "%25")
                          .replace(/\?/g, "%3F")
                          .replace(/#/g, "%23"),
                      ).pathname
                    : D.pathnameBase,
                ]),
        }),
      ),
    d,
    l,
  );
  return i && C
    ? j.createElement(
        Ul.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              mask: void 0,
              ...b,
            },
            navigationType: "POP",
          },
        },
        C,
      )
    : C;
}
function T2() {
  let n = _2(),
    i = u2(n)
      ? `${n.status} ${n.statusText}`
      : n instanceof Error
        ? n.message
        : JSON.stringify(n),
    l = n instanceof Error ? n.stack : null,
    o = "rgba(200,200,200, 0.5)",
    d = { padding: "0.5rem", backgroundColor: o },
    h = { padding: "2px 4px", backgroundColor: o },
    f = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", n),
    (f = j.createElement(
      j.Fragment,
      null,
      j.createElement("p", null, "💿 Hey developer 👋"),
      j.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        j.createElement("code", { style: h }, "ErrorBoundary"),
        " or",
        " ",
        j.createElement("code", { style: h }, "errorElement"),
        " prop on your route.",
      ),
    )),
    j.createElement(
      j.Fragment,
      null,
      j.createElement("h2", null, "Unexpected Application Error!"),
      j.createElement("h3", { style: { fontStyle: "italic" } }, i),
      l ? j.createElement("pre", { style: d }, l) : null,
      f,
    )
  );
}
var E2 = j.createElement(T2, null),
  Bx = class extends j.Component {
    constructor(n) {
      (super(n),
        (this.state = {
          location: n.location,
          revalidation: n.revalidation,
          error: n.error,
        }));
    }
    static getDerivedStateFromError(n) {
      return { error: n };
    }
    static getDerivedStateFromProps(n, i) {
      return i.location !== n.location ||
        (i.revalidation !== "idle" && n.revalidation === "idle")
        ? { error: n.error, location: n.location, revalidation: n.revalidation }
        : {
            error: n.error !== void 0 ? n.error : i.error,
            location: i.location,
            revalidation: n.revalidation || i.revalidation,
          };
    }
    componentDidCatch(n, i) {
      this.props.onError
        ? this.props.onError(n, i)
        : console.error(
            "React Router caught the following error during render",
            n,
          );
    }
    render() {
      let n = this.state.error;
      if (
        this.context &&
        typeof n == "object" &&
        n &&
        "digest" in n &&
        typeof n.digest == "string"
      ) {
        const l = w2(n.digest);
        l && (n = l);
      }
      let i =
        n !== void 0
          ? j.createElement(
              Da.Provider,
              { value: this.props.routeContext },
              j.createElement(rf.Provider, {
                value: n,
                children: this.props.component,
              }),
            )
          : this.props.children;
      return this.context ? j.createElement(A2, { error: n }, i) : i;
    }
  };
Bx.contextType = Mx;
var od = new WeakMap();
function A2({ children: n, error: i }) {
  let { basename: l } = j.useContext(ua);
  if (
    typeof i == "object" &&
    i &&
    "digest" in i &&
    typeof i.digest == "string"
  ) {
    let o = v2(i.digest);
    if (o) {
      let d = od.get(i);
      if (d) throw d;
      let h = Ex(o.location, l),
        f = h.absoluteURL || h.to;
      if (m2(f)) throw new Error("Invalid redirect location");
      if (Tx && !od.get(i))
        if (h.isExternal || o.reloadDocument) window.location.href = f;
        else {
          const x = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(h.to, {
              replace: o.replace,
            }),
          );
          throw (od.set(i, x), x);
        }
      return j.createElement("meta", {
        httpEquiv: "refresh",
        content: `0;url=${f}`,
      });
    }
  }
  return n;
}
function M2({ routeContext: n, match: i, children: l }) {
  let o = j.useContext(ws);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (i.route.errorElement || i.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = i.route.id),
    j.createElement(Da.Provider, { value: n }, l)
  );
}
function C2(n, i = [], l) {
  let o = l?.state;
  if (n == null) {
    if (!o) return null;
    if (o.errors) n = o.matches;
    else if (i.length === 0 && !o.initialized && o.matches.length > 0)
      n = o.matches;
    else return null;
  }
  let d = n,
    h = o?.errors;
  if (h != null) {
    let y = d.findIndex((b) => b.route.id && h?.[b.route.id] !== void 0);
    (Je(
      y >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(h).join(",")}`,
    ),
      (d = d.slice(0, Math.min(d.length, y + 1))));
  }
  let f = !1,
    x = -1;
  if (l && o) {
    f = o.renderFallback;
    for (let y = 0; y < d.length; y++) {
      let b = d[y];
      if (
        ((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (x = y),
        b.route.id)
      ) {
        let { loaderData: w, errors: T } = o,
          R =
            b.route.loader &&
            !w.hasOwnProperty(b.route.id) &&
            (!T || T[b.route.id] === void 0);
        if (b.route.lazy || R) {
          (l.isStatic && (f = !0),
            x >= 0 ? (d = d.slice(0, x + 1)) : (d = [d[0]]));
          break;
        }
      }
    }
  }
  let p = l?.onError,
    g =
      o && p
        ? (y, b) => {
            p(y, {
              location: o.location,
              params: o.matches?.[0]?.params ?? {},
              pattern: d2(o.matches),
              errorInfo: b,
            });
          }
        : void 0;
  return d.reduceRight((y, b, w) => {
    let T,
      R = !1,
      C = null,
      D = null;
    o &&
      ((T = h && b.route.id ? h[b.route.id] : void 0),
      (C = b.route.errorElement || E2),
      f &&
        (x < 0 && w === 0
          ? (Lx(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (R = !0),
            (D = null))
          : x === w &&
            ((R = !0), (D = b.route.hydrateFallbackElement || null))));
    let _ = i.concat(d.slice(0, w + 1)),
      V = () => {
        let E;
        return (
          T
            ? (E = C)
            : R
              ? (E = D)
              : b.route.Component
                ? (E = j.createElement(b.route.Component, null))
                : b.route.element
                  ? (E = b.route.element)
                  : (E = y),
          j.createElement(M2, {
            match: b,
            routeContext: { outlet: y, matches: _, isDataRoute: o != null },
            children: E,
          })
        );
      };
    return o && (b.route.ErrorBoundary || b.route.errorElement || w === 0)
      ? j.createElement(Bx, {
          location: o.location,
          revalidation: o.revalidation,
          component: C,
          error: T,
          children: V(),
          routeContext: { outlet: null, matches: _, isDataRoute: !0 },
          onError: g,
        })
      : V();
  }, null);
}
function of(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function D2(n) {
  let i = j.useContext(ws);
  return (Je(i, of(n)), i);
}
function R2(n) {
  let i = j.useContext(Uo);
  return (Je(i, of(n)), i);
}
function k2(n) {
  let i = j.useContext(Da);
  return (Je(i, of(n)), i);
}
function cf(n) {
  let i = k2(n),
    l = i.matches[i.matches.length - 1];
  return (
    Je(
      l.route.id,
      `${n} can only be used on routes that contain a unique "id"`,
    ),
    l.route.id
  );
}
function z2() {
  return cf("useRouteId");
}
function _2() {
  let n = j.useContext(rf),
    i = R2("useRouteError"),
    l = cf("useRouteError");
  return n !== void 0 ? n : i.errors?.[l];
}
function O2() {
  let { router: n } = D2("useNavigate"),
    i = cf("useNavigate"),
    l = j.useRef(!1);
  return (
    kx(() => {
      l.current = !0;
    }),
    j.useCallback(
      async (d, h = {}) => {
        (Ca(l.current, Rx),
          l.current &&
            (typeof d == "number"
              ? await n.navigate(d)
              : await n.navigate(d, { fromRouteId: i, ...h })));
      },
      [n, i],
    )
  );
}
var qp = {};
function Lx(n, i, l) {
  !i && !qp[n] && ((qp[n] = !0), Ca(!1, l));
}
j.memo(B2);
function B2({
  routes: n,
  manifest: i,
  future: l,
  state: o,
  isStatic: d,
  onError: h,
}) {
  return Ox(n, void 0, { manifest: i, state: o, isStatic: d, onError: h });
}
function Wa(n) {
  Je(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.",
  );
}
function L2({
  basename: n = "/",
  children: i = null,
  location: l,
  navigationType: o = "POP",
  navigator: d,
  static: h = !1,
  useTransitions: f,
}) {
  Je(
    !Hl(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.",
  );
  let x = n.replace(/^\/*/, "/"),
    p = j.useMemo(
      () => ({
        basename: x,
        navigator: d,
        static: h,
        useTransitions: f,
        future: {},
      }),
      [x, d, h, f],
    );
  typeof l == "string" && (l = vs(l));
  let {
      pathname: g = "/",
      search: y = "",
      hash: b = "",
      state: w = null,
      key: T = "default",
      mask: R,
    } = l,
    C = j.useMemo(() => {
      let D = en(g, x);
      return D == null
        ? null
        : {
            location: {
              pathname: D,
              search: y,
              hash: b,
              state: w,
              key: T,
              mask: R,
            },
            navigationType: o,
          };
    }, [x, g, y, b, w, T, o, R]);
  return (
    Ca(
      C != null,
      `<Router basename="${x}"> is not able to match the URL "${g}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    C == null
      ? null
      : j.createElement(
          ua.Provider,
          { value: p },
          j.createElement(Ul.Provider, { children: i, value: C }),
        )
  );
}
function V2({ children: n, location: i }) {
  return N2(Md(n), i);
}
function Md(n, i = []) {
  let l = [];
  return (
    j.Children.forEach(n, (o, d) => {
      if (!j.isValidElement(o)) return;
      let h = [...i, d];
      if (o.type === j.Fragment) {
        l.push.apply(l, Md(o.props.children, h));
        return;
      }
      (Je(
        o.type === Wa,
        `[${typeof o.type == "string" ? o.type : o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        Je(
          !o.props.index || !o.props.children,
          "An index route cannot have child routes.",
        ));
      let f = {
        id: o.props.id || h.join("-"),
        caseSensitive: o.props.caseSensitive,
        element: o.props.element,
        Component: o.props.Component,
        index: o.props.index,
        path: o.props.path,
        middleware: o.props.middleware,
        loader: o.props.loader,
        action: o.props.action,
        hydrateFallbackElement: o.props.hydrateFallbackElement,
        HydrateFallback: o.props.HydrateFallback,
        errorElement: o.props.errorElement,
        ErrorBoundary: o.props.ErrorBoundary,
        hasErrorBoundary:
          o.props.hasErrorBoundary === !0 ||
          o.props.ErrorBoundary != null ||
          o.props.errorElement != null,
        shouldRevalidate: o.props.shouldRevalidate,
        handle: o.props.handle,
        lazy: o.props.lazy,
      };
      (o.props.children && (f.children = Md(o.props.children, h)), l.push(f));
    }),
    l
  );
}
var jo = "get",
  So = "application/x-www-form-urlencoded";
function Ho(n) {
  return typeof HTMLElement < "u" && n instanceof HTMLElement;
}
function U2(n) {
  return Ho(n) && n.tagName.toLowerCase() === "button";
}
function H2(n) {
  return Ho(n) && n.tagName.toLowerCase() === "form";
}
function q2(n) {
  return Ho(n) && n.tagName.toLowerCase() === "input";
}
function $2(n) {
  return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
}
function G2(n, i) {
  return n.button === 0 && (!i || i === "_self") && !$2(n);
}
var mo = null;
function Y2() {
  if (mo === null)
    try {
      (new FormData(document.createElement("form"), 0), (mo = !1));
    } catch {
      mo = !0;
    }
  return mo;
}
var X2 = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function cd(n) {
  return n != null && !X2.has(n)
    ? (Ca(
        !1,
        `"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${So}"`,
      ),
      null)
    : n;
}
function K2(n, i) {
  let l, o, d, h, f;
  if (H2(n)) {
    let x = n.getAttribute("action");
    ((o = x ? en(x, i) : null),
      (l = n.getAttribute("method") || jo),
      (d = cd(n.getAttribute("enctype")) || So),
      (h = new FormData(n)));
  } else if (U2(n) || (q2(n) && (n.type === "submit" || n.type === "image"))) {
    let x = n.form;
    if (x == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>',
      );
    let p = n.getAttribute("formaction") || x.getAttribute("action");
    if (
      ((o = p ? en(p, i) : null),
      (l = n.getAttribute("formmethod") || x.getAttribute("method") || jo),
      (d =
        cd(n.getAttribute("formenctype")) ||
        cd(x.getAttribute("enctype")) ||
        So),
      (h = new FormData(x, n)),
      !Y2())
    ) {
      let { name: g, type: y, value: b } = n;
      if (y === "image") {
        let w = g ? `${g}.` : "";
        (h.append(`${w}x`, "0"), h.append(`${w}y`, "0"));
      } else g && h.append(g, b);
    }
  } else {
    if (Ho(n))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">',
      );
    ((l = jo), (o = null), (d = So), (f = n));
  }
  return (
    h && d === "text/plain" && ((f = h), (h = void 0)),
    { action: o, method: l.toLowerCase(), encType: d, formData: h, body: f }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function uf(n, i) {
  if (n === !1 || n === null || typeof n > "u") throw new Error(i);
}
function Vx(n, i, l, o) {
  let d =
    typeof n == "string"
      ? new URL(
          n,
          typeof window > "u"
            ? "server://singlefetch/"
            : window.location.origin,
        )
      : n;
  return (
    l
      ? d.pathname.endsWith("/")
        ? (d.pathname = `${d.pathname}_.${o}`)
        : (d.pathname = `${d.pathname}.${o}`)
      : d.pathname === "/"
        ? (d.pathname = `_root.${o}`)
        : i && en(d.pathname, i) === "/"
          ? (d.pathname = `${Co(i)}/_root.${o}`)
          : (d.pathname = `${Co(d.pathname)}.${o}`),
    d
  );
}
async function P2(n, i) {
  if (n.id in i) return i[n.id];
  try {
    let l = await import(n.module);
    return ((i[n.id] = l), l);
  } catch (l) {
    return (
      console.error(
        `Error loading route module \`${n.module}\`, reloading page...`,
      ),
      console.error(l),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function F2(n) {
  return n == null
    ? !1
    : n.href == null
      ? n.rel === "preload" &&
        typeof n.imageSrcSet == "string" &&
        typeof n.imageSizes == "string"
      : typeof n.rel == "string" && typeof n.href == "string";
}
async function Q2(n, i, l) {
  let o = await Promise.all(
    n.map(async (d) => {
      let h = i.routes[d.route.id];
      if (h) {
        let f = await P2(h, l);
        return f.links ? f.links() : [];
      }
      return [];
    }),
  );
  return W2(
    o
      .flat(1)
      .filter(F2)
      .filter((d) => d.rel === "stylesheet" || d.rel === "preload")
      .map((d) =>
        d.rel === "stylesheet"
          ? { ...d, rel: "prefetch", as: "style" }
          : { ...d, rel: "prefetch" },
      ),
  );
}
function $p(n, i, l, o, d, h) {
  let f = (p, g) => (l[g] ? p.route.id !== l[g].route.id : !0),
    x = (p, g) =>
      l[g].pathname !== p.pathname ||
      (l[g].route.path?.endsWith("*") && l[g].params["*"] !== p.params["*"]);
  return h === "assets"
    ? i.filter((p, g) => f(p, g) || x(p, g))
    : h === "data"
      ? i.filter((p, g) => {
          let y = o.routes[p.route.id];
          if (!y || !y.hasLoader) return !1;
          if (f(p, g) || x(p, g)) return !0;
          if (p.route.shouldRevalidate) {
            let b = p.route.shouldRevalidate({
              currentUrl: new URL(
                d.pathname + d.search + d.hash,
                window.origin,
              ),
              currentParams: l[0]?.params || {},
              nextUrl: new URL(n, window.origin),
              nextParams: p.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof b == "boolean") return b;
          }
          return !0;
        })
      : [];
}
function Z2(n, i, { includeHydrateFallback: l } = {}) {
  return J2(
    n
      .map((o) => {
        let d = i.routes[o.route.id];
        if (!d) return [];
        let h = [d.module];
        return (
          d.clientActionModule && (h = h.concat(d.clientActionModule)),
          d.clientLoaderModule && (h = h.concat(d.clientLoaderModule)),
          l &&
            d.hydrateFallbackModule &&
            (h = h.concat(d.hydrateFallbackModule)),
          d.imports && (h = h.concat(d.imports)),
          h
        );
      })
      .flat(1),
  );
}
function J2(n) {
  return [...new Set(n)];
}
function I2(n) {
  let i = {},
    l = Object.keys(n).sort();
  for (let o of l) i[o] = n[o];
  return i;
}
function W2(n, i) {
  let l = new Set();
  return (
    new Set(i),
    n.reduce((o, d) => {
      let h = JSON.stringify(I2(d));
      return (l.has(h) || (l.add(h), o.push({ key: h, link: d })), o);
    }, [])
  );
}
function df() {
  let n = j.useContext(ws);
  return (
    uf(
      n,
      "You must render this element inside a <DataRouterContext.Provider> element",
    ),
    n
  );
}
function ew() {
  let n = j.useContext(Uo);
  return (
    uf(
      n,
      "You must render this element inside a <DataRouterStateContext.Provider> element",
    ),
    n
  );
}
var ff = j.createContext(void 0);
ff.displayName = "FrameworkContext";
function qo() {
  let n = j.useContext(ff);
  return (
    uf(n, "You must render this element inside a <HydratedRouter> element"),
    n
  );
}
function tw(n, i) {
  let l = j.useContext(ff),
    [o, d] = j.useState(!1),
    [h, f] = j.useState(!1),
    {
      onFocus: x,
      onBlur: p,
      onMouseEnter: g,
      onMouseLeave: y,
      onTouchStart: b,
    } = i,
    w = j.useRef(null);
  (j.useEffect(() => {
    if ((n === "render" && f(!0), n === "viewport")) {
      let C = (_) => {
          _.forEach((V) => {
            f(V.isIntersecting);
          });
        },
        D = new IntersectionObserver(C, { threshold: 0.5 });
      return (
        w.current && D.observe(w.current),
        () => {
          D.disconnect();
        }
      );
    }
  }, [n]),
    j.useEffect(() => {
      if (o) {
        let C = setTimeout(() => {
          f(!0);
        }, 100);
        return () => {
          clearTimeout(C);
        };
      }
    }, [o]));
  let T = () => {
      d(!0);
    },
    R = () => {
      (d(!1), f(!1));
    };
  return l
    ? n !== "intent"
      ? [h, w, {}]
      : [
          h,
          w,
          {
            onFocus: jl(x, T),
            onBlur: jl(p, R),
            onMouseEnter: jl(g, T),
            onMouseLeave: jl(y, R),
            onTouchStart: jl(b, T),
          },
        ]
    : [!1, w, {}];
}
function jl(n, i) {
  return (l) => {
    (n && n(l), l.defaultPrevented || i(l));
  };
}
function aw({ page: n, ...i }) {
  let l = p2(),
    { nonce: o } = qo(),
    { router: d } = df(),
    h = j.useMemo(() => yx(d.routes, n, d.basename), [d.routes, n, d.basename]);
  return h
    ? (i.nonce == null && o && (i = { ...i, nonce: o }),
      l
        ? j.createElement(iw, { page: n, matches: h, ...i })
        : j.createElement(sw, { page: n, matches: h, ...i }))
    : null;
}
function nw(n) {
  let { manifest: i, routeModules: l } = qo(),
    [o, d] = j.useState([]);
  return (
    j.useEffect(() => {
      let h = !1;
      return (
        Q2(n, i, l).then((f) => {
          h || d(f);
        }),
        () => {
          h = !0;
        }
      );
    }, [n, i, l]),
    o
  );
}
function iw({ page: n, matches: i, ...l }) {
  let o = Ra(),
    { future: d } = qo(),
    { basename: h } = df(),
    f = j.useMemo(() => {
      if (n === o.pathname + o.search + o.hash) return [];
      let x = Vx(n, h, d.v8_trailingSlashAwareDataRequests, "rsc"),
        p = !1,
        g = [];
      for (let y of i)
        typeof y.route.shouldRevalidate == "function"
          ? (p = !0)
          : g.push(y.route.id);
      return (
        p && g.length > 0 && x.searchParams.set("_routes", g.join(",")),
        [x.pathname + x.search]
      );
    }, [h, d.v8_trailingSlashAwareDataRequests, n, o, i]);
  return j.createElement(
    j.Fragment,
    null,
    f.map((x) =>
      j.createElement("link", {
        key: x,
        rel: "prefetch",
        as: "fetch",
        href: x,
        ...l,
      }),
    ),
  );
}
function sw({ page: n, matches: i, ...l }) {
  let o = Ra(),
    { future: d, manifest: h, routeModules: f } = qo(),
    { basename: x } = df(),
    { loaderData: p, matches: g } = ew(),
    y = j.useMemo(() => $p(n, i, g, h, o, "data"), [n, i, g, h, o]),
    b = j.useMemo(() => $p(n, i, g, h, o, "assets"), [n, i, g, h, o]),
    w = j.useMemo(() => {
      if (n === o.pathname + o.search + o.hash) return [];
      let C = new Set(),
        D = !1;
      if (
        (i.forEach((V) => {
          let E = h.routes[V.route.id];
          !E ||
            !E.hasLoader ||
            ((!y.some((Q) => Q.route.id === V.route.id) &&
              V.route.id in p &&
              f[V.route.id]?.shouldRevalidate) ||
            E.hasClientLoader
              ? (D = !0)
              : C.add(V.route.id));
        }),
        C.size === 0)
      )
        return [];
      let _ = Vx(n, x, d.v8_trailingSlashAwareDataRequests, "data");
      return (
        D &&
          C.size > 0 &&
          _.searchParams.set(
            "_routes",
            i
              .filter((V) => C.has(V.route.id))
              .map((V) => V.route.id)
              .join(","),
          ),
        [_.pathname + _.search]
      );
    }, [x, d.v8_trailingSlashAwareDataRequests, p, o, h, y, i, n, f]),
    T = j.useMemo(() => Z2(b, h), [b, h]),
    R = nw(b);
  return j.createElement(
    j.Fragment,
    null,
    w.map((C) =>
      j.createElement("link", {
        key: C,
        rel: "prefetch",
        as: "fetch",
        href: C,
        ...l,
      }),
    ),
    T.map((C) =>
      j.createElement("link", { key: C, rel: "modulepreload", href: C, ...l }),
    ),
    R.map(({ key: C, link: D }) =>
      j.createElement("link", {
        key: C,
        nonce: l.nonce,
        ...D,
        crossOrigin: D.crossOrigin ?? l.crossOrigin,
      }),
    ),
  );
}
function lw(...n) {
  return (i) => {
    n.forEach((l) => {
      typeof l == "function" ? l(i) : l != null && (l.current = i);
    });
  };
}
var rw =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  rw && (window.__reactRouterVersion = "7.18.1");
} catch {}
function ow({ basename: n, children: i, useTransitions: l, window: o }) {
  let d = j.useRef();
  d.current == null && (d.current = q1({ window: o, v5Compat: !0 }));
  let h = d.current,
    [f, x] = j.useState({ action: h.action, location: h.location }),
    p = j.useCallback(
      (g) => {
        l === !1 ? x(g) : j.startTransition(() => x(g));
      },
      [l],
    );
  return (
    j.useLayoutEffect(() => h.listen(p), [h, p]),
    j.createElement(L2, {
      basename: n,
      children: i,
      location: f.location,
      navigationType: f.action,
      navigator: h,
      useTransitions: l,
    })
  );
}
var mt = j.forwardRef(function (
  {
    onClick: i,
    discover: l = "render",
    prefetch: o = "none",
    relative: d,
    reloadDocument: h,
    replace: f,
    mask: x,
    state: p,
    target: g,
    to: y,
    preventScrollReset: b,
    viewTransition: w,
    defaultShouldRevalidate: T,
    ...R
  },
  C,
) {
  let { basename: D, navigator: _, useTransitions: V } = j.useContext(ua),
    E = typeof y == "string" && sf.test(y),
    Q = Ex(y, D);
  y = Q.to;
  let X = j2(y, { relative: d }),
    W = Ra(),
    P = null;
  if (x) {
    let ke = lf(x, [], W.mask ? W.mask.pathname : "/", !0);
    (D !== "/" &&
      (ke.pathname = ke.pathname === "/" ? D : va([D, ke.pathname])),
      (P = _.createHref(ke)));
  }
  let [Z, ie, I] = tw(o, R),
    he = fw(y, {
      replace: f,
      mask: x,
      state: p,
      target: g,
      preventScrollReset: b,
      relative: d,
      viewTransition: w,
      defaultShouldRevalidate: T,
      useTransitions: V,
    });
  function we(ke) {
    (i && i(ke), ke.defaultPrevented || he(ke));
  }
  let ze = !(Q.isExternal || h),
    je = j.createElement("a", {
      ...R,
      ...I,
      href: (ze ? P : void 0) || Q.absoluteURL || X,
      onClick: ze ? we : i,
      ref: lw(C, ie),
      target: g,
      "data-discover": !E && l === "render" ? "true" : void 0,
    });
  return Z && !E
    ? j.createElement(j.Fragment, null, je, j.createElement(aw, { page: X }))
    : je;
});
mt.displayName = "Link";
var cw = j.forwardRef(function (
  {
    "aria-current": i = "page",
    caseSensitive: l = !1,
    className: o = "",
    end: d = !1,
    style: h,
    to: f,
    viewTransition: x,
    children: p,
    ...g
  },
  y,
) {
  let b = ql(f, { relative: g.relative }),
    w = Ra(),
    T = j.useContext(Uo),
    { navigator: R, basename: C } = j.useContext(ua),
    D = T != null && xw(b) && x === !0,
    _ = R.encodeLocation ? R.encodeLocation(b).pathname : b.pathname,
    V = w.pathname,
    E =
      T && T.navigation && T.navigation.location
        ? T.navigation.location.pathname
        : null;
  (l ||
    ((V = V.toLowerCase()),
    (E = E ? E.toLowerCase() : null),
    (_ = _.toLowerCase())),
    E && C && (E = en(E, C) || E));
  const Q = _ !== "/" && _.endsWith("/") ? _.length - 1 : _.length;
  let X = V === _ || (!d && V.startsWith(_) && V.charAt(Q) === "/"),
    W =
      E != null &&
      (E === _ || (!d && E.startsWith(_) && E.charAt(_.length) === "/")),
    P = { isActive: X, isPending: W, isTransitioning: D },
    Z = X ? i : void 0,
    ie;
  typeof o == "function"
    ? (ie = o(P))
    : (ie = [
        o,
        X ? "active" : null,
        W ? "pending" : null,
        D ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let I = typeof h == "function" ? h(P) : h;
  return j.createElement(
    mt,
    {
      ...g,
      "aria-current": Z,
      className: ie,
      ref: y,
      style: I,
      to: f,
      viewTransition: x,
    },
    typeof p == "function" ? p(P) : p,
  );
});
cw.displayName = "NavLink";
var uw = j.forwardRef(
  (
    {
      discover: n = "render",
      fetcherKey: i,
      navigate: l,
      reloadDocument: o,
      replace: d,
      state: h,
      method: f = jo,
      action: x,
      onSubmit: p,
      relative: g,
      preventScrollReset: y,
      viewTransition: b,
      defaultShouldRevalidate: w,
      ...T
    },
    R,
  ) => {
    let { useTransitions: C } = j.useContext(ua),
      D = pw(),
      _ = gw(x, { relative: g }),
      V = f.toLowerCase() === "get" ? "get" : "post",
      E = typeof x == "string" && sf.test(x),
      Q = (X) => {
        if ((p && p(X), X.defaultPrevented)) return;
        X.preventDefault();
        let W = X.nativeEvent.submitter,
          P = W?.getAttribute("formmethod") || f,
          Z = () =>
            D(W || X.currentTarget, {
              fetcherKey: i,
              method: P,
              navigate: l,
              replace: d,
              state: h,
              relative: g,
              preventScrollReset: y,
              viewTransition: b,
              defaultShouldRevalidate: w,
            });
        C && l !== !1 ? j.startTransition(() => Z()) : Z();
      };
    return j.createElement("form", {
      ref: R,
      method: V,
      action: _,
      onSubmit: o ? p : Q,
      ...T,
      "data-discover": !E && n === "render" ? "true" : void 0,
    });
  },
);
uw.displayName = "Form";
function dw(n) {
  return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Ux(n) {
  let i = j.useContext(ws);
  return (Je(i, dw(n)), i);
}
function fw(
  n,
  {
    target: i,
    replace: l,
    mask: o,
    state: d,
    preventScrollReset: h,
    relative: f,
    viewTransition: x,
    defaultShouldRevalidate: p,
    useTransitions: g,
  } = {},
) {
  let y = zx(),
    b = Ra(),
    w = ql(n, { relative: f });
  return j.useCallback(
    (T) => {
      if (G2(T, i)) {
        T.preventDefault();
        let R = l !== void 0 ? l : kl(b) === kl(w),
          C = () =>
            y(n, {
              replace: R,
              mask: o,
              state: d,
              preventScrollReset: h,
              relative: f,
              viewTransition: x,
              defaultShouldRevalidate: p,
            });
        g ? j.startTransition(() => C()) : C();
      }
    },
    [b, y, w, l, o, d, i, n, h, f, x, p, g],
  );
}
var hw = 0,
  mw = () => `__${String(++hw)}__`;
function pw() {
  let { router: n } = Ux("useSubmit"),
    { basename: i } = j.useContext(ua),
    l = z2(),
    o = n.fetch,
    d = n.navigate;
  return j.useCallback(
    async (h, f = {}) => {
      let { action: x, method: p, encType: g, formData: y, body: b } = K2(h, i);
      if (f.navigate === !1) {
        let w = f.fetcherKey || mw();
        await o(w, l, f.action || x, {
          defaultShouldRevalidate: f.defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: y,
          body: b,
          formMethod: f.method || p,
          formEncType: f.encType || g,
          flushSync: f.flushSync,
        });
      } else
        await d(f.action || x, {
          defaultShouldRevalidate: f.defaultShouldRevalidate,
          preventScrollReset: f.preventScrollReset,
          formData: y,
          body: b,
          formMethod: f.method || p,
          formEncType: f.encType || g,
          replace: f.replace,
          state: f.state,
          fromRouteId: l,
          flushSync: f.flushSync,
          viewTransition: f.viewTransition,
        });
    },
    [o, d, i, l],
  );
}
function gw(n, { relative: i } = {}) {
  let { basename: l } = j.useContext(ua),
    o = j.useContext(Da);
  Je(o, "useFormAction must be used inside a RouteContext");
  let [d] = o.matches.slice(-1),
    h = { ...ql(n || ".", { relative: i }) },
    f = Ra();
  if (n == null) {
    h.search = f.search;
    let x = new URLSearchParams(h.search),
      p = x.getAll("index");
    if (p.some((y) => y === "")) {
      (x.delete("index"),
        p.filter((b) => b).forEach((b) => x.append("index", b)));
      let y = x.toString();
      h.search = y ? `?${y}` : "";
    }
  }
  return (
    (!n || n === ".") &&
      d.route.index &&
      (h.search = h.search ? h.search.replace(/^\?/, "?index&") : "?index"),
    l !== "/" && (h.pathname = h.pathname === "/" ? l : va([l, h.pathname])),
    kl(h)
  );
}
function xw(n, { relative: i } = {}) {
  let l = j.useContext(Cx);
  Je(
    l != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: o } = Ux("useViewTransitionState"),
    d = ql(n, { relative: i });
  if (!l.isTransitioning) return !1;
  let h = en(l.currentLocation.pathname, o) || l.currentLocation.pathname,
    f = en(l.nextLocation.pathname, o) || l.nextLocation.pathname;
  return Mo(d.pathname, f) != null || Mo(d.pathname, h) != null;
}
const yw = "modulepreload",
  bw = function (n) {
    return "/" + n;
  },
  Gp = {},
  js = function (i, l, o) {
    let d = Promise.resolve();
    if (l && l.length > 0) {
      let p = function (g) {
        return Promise.all(
          g.map((y) =>
            Promise.resolve(y).then(
              (b) => ({ status: "fulfilled", value: b }),
              (b) => ({ status: "rejected", reason: b }),
            ),
          ),
        );
      };
      document.getElementsByTagName("link");
      const f = document.querySelector("meta[property=csp-nonce]"),
        x = f?.nonce || f?.getAttribute("nonce");
      d = p(
        l.map((g) => {
          if (((g = bw(g)), g in Gp)) return;
          Gp[g] = !0;
          const y = g.endsWith(".css"),
            b = y ? '[rel="stylesheet"]' : "";
          if (document.querySelector(`link[href="${g}"]${b}`)) return;
          const w = document.createElement("link");
          if (
            ((w.rel = y ? "stylesheet" : yw),
            y || (w.as = "script"),
            (w.crossOrigin = ""),
            (w.href = g),
            x && w.setAttribute("nonce", x),
            document.head.appendChild(w),
            y)
          )
            return new Promise((T, R) => {
              (w.addEventListener("load", T),
                w.addEventListener("error", () =>
                  R(new Error(`Unable to preload CSS for ${g}`)),
                ));
            });
        }),
      );
    }
    function h(f) {
      const x = new Event("vite:preloadError", { cancelable: !0 });
      if (((x.payload = f), window.dispatchEvent(x), !x.defaultPrevented))
        throw f;
    }
    return d.then((f) => {
      for (const x of f || []) x.status === "rejected" && h(x.reason);
      return i().catch(h);
    });
  },
  hf = j.createContext({});
function $l(n) {
  const i = j.useRef(null);
  return (i.current === null && (i.current = n()), i.current);
}
const mf = typeof window < "u",
  pf = mf ? j.useLayoutEffect : j.useEffect,
  $o = j.createContext(null);
function gf(n, i) {
  n.indexOf(i) === -1 && n.push(i);
}
function xf(n, i) {
  const l = n.indexOf(i);
  l > -1 && n.splice(l, 1);
}
const tn = (n, i, l) => (l > i ? i : l < n ? n : l);
let yf = () => {};
const an = {},
  Hx = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);
function qx(n) {
  return typeof n == "object" && n !== null;
}
const $x = (n) => /^0[^.\s]+$/u.test(n);
function bf(n) {
  let i;
  return () => (i === void 0 && (i = n()), i);
}
const ca = (n) => n,
  vw = (n, i) => (l) => i(n(l)),
  Gl = (...n) => n.reduce(vw),
  zl = (n, i, l) => {
    const o = i - n;
    return o === 0 ? 1 : (l - n) / o;
  };
class vf {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (gf(this.subscriptions, i), () => xf(this.subscriptions, i));
  }
  notify(i, l, o) {
    const d = this.subscriptions.length;
    if (d)
      if (d === 1) this.subscriptions[0](i, l, o);
      else
        for (let h = 0; h < d; h++) {
          const f = this.subscriptions[h];
          f && f(i, l, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Aa = (n) => n * 1e3,
  oa = (n) => n / 1e3;
function Gx(n, i) {
  return i ? n * (1e3 / i) : 0;
}
const Yx = (n, i, l) =>
    (((1 - 3 * l + 3 * i) * n + (3 * l - 6 * i)) * n + 3 * i) * n,
  ww = 1e-7,
  jw = 12;
function Sw(n, i, l, o, d) {
  let h,
    f,
    x = 0;
  do ((f = i + (l - i) / 2), (h = Yx(f, o, d) - n), h > 0 ? (l = f) : (i = f));
  while (Math.abs(h) > ww && ++x < jw);
  return f;
}
function Yl(n, i, l, o) {
  if (n === i && l === o) return ca;
  const d = (h) => Sw(h, 0, 1, n, l);
  return (h) => (h === 0 || h === 1 ? h : Yx(d(h), i, o));
}
const Xx = (n) => (i) => (i <= 0.5 ? n(2 * i) / 2 : (2 - n(2 * (1 - i))) / 2),
  Kx = (n) => (i) => 1 - n(1 - i),
  Px = Yl(0.33, 1.53, 0.69, 0.99),
  wf = Kx(Px),
  Fx = Xx(wf),
  Qx = (n) =>
    (n *= 2) < 1 ? 0.5 * wf(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
  jf = (n) => 1 - Math.sin(Math.acos(n)),
  Zx = Kx(jf),
  Jx = Xx(jf),
  Nw = Yl(0.42, 0, 1, 1),
  Tw = Yl(0, 0, 0.58, 1),
  Ix = Yl(0.42, 0, 0.58, 1),
  Ew = (n) => Array.isArray(n) && typeof n[0] != "number",
  Wx = (n) => Array.isArray(n) && typeof n[0] == "number",
  Aw = {
    linear: ca,
    easeIn: Nw,
    easeInOut: Ix,
    easeOut: Tw,
    circIn: jf,
    circInOut: Jx,
    circOut: Zx,
    backIn: wf,
    backInOut: Fx,
    backOut: Px,
    anticipate: Qx,
  },
  Mw = (n) => typeof n == "string",
  Yp = (n) => {
    if (Wx(n)) {
      yf(n.length === 4);
      const [i, l, o, d] = n;
      return Yl(i, l, o, d);
    } else if (Mw(n)) return Aw[n];
    return n;
  },
  po = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Cw(n, i) {
  let l = new Set(),
    o = new Set(),
    d = !1,
    h = !1;
  const f = new WeakSet();
  let x = { delta: 0, timestamp: 0, isProcessing: !1 };
  function p(y) {
    (f.has(y) && (g.schedule(y), n()), y(x));
  }
  const g = {
    schedule: (y, b = !1, w = !1) => {
      const R = w && d ? l : o;
      return (b && f.add(y), R.has(y) || R.add(y), y);
    },
    cancel: (y) => {
      (o.delete(y), f.delete(y));
    },
    process: (y) => {
      if (((x = y), d)) {
        h = !0;
        return;
      }
      ((d = !0),
        ([l, o] = [o, l]),
        l.forEach(p),
        l.clear(),
        (d = !1),
        h && ((h = !1), g.process(y)));
    },
  };
  return g;
}
const Dw = 40;
function ey(n, i) {
  let l = !1,
    o = !0;
  const d = { delta: 0, timestamp: 0, isProcessing: !1 },
    h = () => (l = !0),
    f = po.reduce((E, Q) => ((E[Q] = Cw(h)), E), {}),
    {
      setup: x,
      read: p,
      resolveKeyframes: g,
      preUpdate: y,
      update: b,
      preRender: w,
      render: T,
      postRender: R,
    } = f,
    C = () => {
      const E = an.useManualTiming ? d.timestamp : performance.now();
      ((l = !1),
        an.useManualTiming ||
          (d.delta = o ? 1e3 / 60 : Math.max(Math.min(E - d.timestamp, Dw), 1)),
        (d.timestamp = E),
        (d.isProcessing = !0),
        x.process(d),
        p.process(d),
        g.process(d),
        y.process(d),
        b.process(d),
        w.process(d),
        T.process(d),
        R.process(d),
        (d.isProcessing = !1),
        l && i && ((o = !1), n(C)));
    },
    D = () => {
      ((l = !0), (o = !0), d.isProcessing || n(C));
    };
  return {
    schedule: po.reduce((E, Q) => {
      const X = f[Q];
      return (
        (E[Q] = (W, P = !1, Z = !1) => (l || D(), X.schedule(W, P, Z))),
        E
      );
    }, {}),
    cancel: (E) => {
      for (let Q = 0; Q < po.length; Q++) f[po[Q]].cancel(E);
    },
    state: d,
    steps: f,
  };
}
const {
  schedule: Ye,
  cancel: nn,
  state: Et,
  steps: ud,
} = ey(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ca, !0);
let No;
function Rw() {
  No = void 0;
}
const Ut = {
    now: () => (
      No === void 0 &&
        Ut.set(
          Et.isProcessing || an.useManualTiming
            ? Et.timestamp
            : performance.now(),
        ),
      No
    ),
    set: (n) => {
      ((No = n), queueMicrotask(Rw));
    },
  },
  ty = (n) => (i) => typeof i == "string" && i.startsWith(n),
  ay = ty("--"),
  kw = ty("var(--"),
  Sf = (n) => (kw(n) ? zw.test(n.split("/*")[0].trim()) : !1),
  zw =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  Ss = {
    test: (n) => typeof n == "number",
    parse: parseFloat,
    transform: (n) => n,
  },
  _l = { ...Ss, transform: (n) => tn(0, 1, n) },
  go = { ...Ss, default: 1 },
  El = (n) => Math.round(n * 1e5) / 1e5,
  Nf = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function _w(n) {
  return n == null;
}
const Ow =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  Tf = (n, i) => (l) =>
    !!(
      (typeof l == "string" && Ow.test(l) && l.startsWith(n)) ||
      (i && !_w(l) && Object.prototype.hasOwnProperty.call(l, i))
    ),
  ny = (n, i, l) => (o) => {
    if (typeof o != "string") return o;
    const [d, h, f, x] = o.match(Nf);
    return {
      [n]: parseFloat(d),
      [i]: parseFloat(h),
      [l]: parseFloat(f),
      alpha: x !== void 0 ? parseFloat(x) : 1,
    };
  },
  Bw = (n) => tn(0, 255, n),
  dd = { ...Ss, transform: (n) => Math.round(Bw(n)) },
  mi = {
    test: Tf("rgb", "red"),
    parse: ny("red", "green", "blue"),
    transform: ({ red: n, green: i, blue: l, alpha: o = 1 }) =>
      "rgba(" +
      dd.transform(n) +
      ", " +
      dd.transform(i) +
      ", " +
      dd.transform(l) +
      ", " +
      El(_l.transform(o)) +
      ")",
  };
function Lw(n) {
  let i = "",
    l = "",
    o = "",
    d = "";
  return (
    n.length > 5
      ? ((i = n.substring(1, 3)),
        (l = n.substring(3, 5)),
        (o = n.substring(5, 7)),
        (d = n.substring(7, 9)))
      : ((i = n.substring(1, 2)),
        (l = n.substring(2, 3)),
        (o = n.substring(3, 4)),
        (d = n.substring(4, 5)),
        (i += i),
        (l += l),
        (o += o),
        (d += d)),
    {
      red: parseInt(i, 16),
      green: parseInt(l, 16),
      blue: parseInt(o, 16),
      alpha: d ? parseInt(d, 16) / 255 : 1,
    }
  );
}
const Cd = { test: Tf("#"), parse: Lw, transform: mi.transform },
  Xl = (n) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(n) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${n}`,
  }),
  Un = Xl("deg"),
  Ma = Xl("%"),
  fe = Xl("px"),
  Vw = Xl("vh"),
  Uw = Xl("vw"),
  Xp = {
    ...Ma,
    parse: (n) => Ma.parse(n) / 100,
    transform: (n) => Ma.transform(n * 100),
  },
  us = {
    test: Tf("hsl", "hue"),
    parse: ny("hue", "saturation", "lightness"),
    transform: ({ hue: n, saturation: i, lightness: l, alpha: o = 1 }) =>
      "hsla(" +
      Math.round(n) +
      ", " +
      Ma.transform(El(i)) +
      ", " +
      Ma.transform(El(l)) +
      ", " +
      El(_l.transform(o)) +
      ")",
  },
  ht = {
    test: (n) => mi.test(n) || Cd.test(n) || us.test(n),
    parse: (n) =>
      mi.test(n) ? mi.parse(n) : us.test(n) ? us.parse(n) : Cd.parse(n),
    transform: (n) =>
      typeof n == "string"
        ? n
        : n.hasOwnProperty("red")
          ? mi.transform(n)
          : us.transform(n),
    getAnimatableNone: (n) => {
      const i = ht.parse(n);
      return ((i.alpha = 0), ht.transform(i));
    },
  },
  Hw =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function qw(n) {
  return (
    isNaN(n) &&
    typeof n == "string" &&
    (n.match(Nf)?.length || 0) + (n.match(Hw)?.length || 0) > 0
  );
}
const iy = "number",
  sy = "color",
  $w = "var",
  Gw = "var(",
  Kp = "${}",
  Yw =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Ol(n) {
  const i = n.toString(),
    l = [],
    o = { color: [], number: [], var: [] },
    d = [];
  let h = 0;
  const x = i
    .replace(
      Yw,
      (p) => (
        ht.test(p)
          ? (o.color.push(h), d.push(sy), l.push(ht.parse(p)))
          : p.startsWith(Gw)
            ? (o.var.push(h), d.push($w), l.push(p))
            : (o.number.push(h), d.push(iy), l.push(parseFloat(p))),
        ++h,
        Kp
      ),
    )
    .split(Kp);
  return { values: l, split: x, indexes: o, types: d };
}
function ly(n) {
  return Ol(n).values;
}
function ry(n) {
  const { split: i, types: l } = Ol(n),
    o = i.length;
  return (d) => {
    let h = "";
    for (let f = 0; f < o; f++)
      if (((h += i[f]), d[f] !== void 0)) {
        const x = l[f];
        x === iy
          ? (h += El(d[f]))
          : x === sy
            ? (h += ht.transform(d[f]))
            : (h += d[f]);
      }
    return h;
  };
}
const Xw = (n) =>
  typeof n == "number" ? 0 : ht.test(n) ? ht.getAnimatableNone(n) : n;
function Kw(n) {
  const i = ly(n);
  return ry(n)(i.map(Xw));
}
const $n = {
  test: qw,
  parse: ly,
  createTransformer: ry,
  getAnimatableNone: Kw,
};
function fd(n, i, l) {
  return (
    l < 0 && (l += 1),
    l > 1 && (l -= 1),
    l < 1 / 6
      ? n + (i - n) * 6 * l
      : l < 1 / 2
        ? i
        : l < 2 / 3
          ? n + (i - n) * (2 / 3 - l) * 6
          : n
  );
}
function Pw({ hue: n, saturation: i, lightness: l, alpha: o }) {
  ((n /= 360), (i /= 100), (l /= 100));
  let d = 0,
    h = 0,
    f = 0;
  if (!i) d = h = f = l;
  else {
    const x = l < 0.5 ? l * (1 + i) : l + i - l * i,
      p = 2 * l - x;
    ((d = fd(p, x, n + 1 / 3)), (h = fd(p, x, n)), (f = fd(p, x, n - 1 / 3)));
  }
  return {
    red: Math.round(d * 255),
    green: Math.round(h * 255),
    blue: Math.round(f * 255),
    alpha: o,
  };
}
function Do(n, i) {
  return (l) => (l > 0 ? i : n);
}
const Ze = (n, i, l) => n + (i - n) * l,
  hd = (n, i, l) => {
    const o = n * n,
      d = l * (i * i - o) + o;
    return d < 0 ? 0 : Math.sqrt(d);
  },
  Fw = [Cd, mi, us],
  Qw = (n) => Fw.find((i) => i.test(n));
function Pp(n) {
  const i = Qw(n);
  if (!i) return !1;
  let l = i.parse(n);
  return (i === us && (l = Pw(l)), l);
}
const Fp = (n, i) => {
    const l = Pp(n),
      o = Pp(i);
    if (!l || !o) return Do(n, i);
    const d = { ...l };
    return (h) => (
      (d.red = hd(l.red, o.red, h)),
      (d.green = hd(l.green, o.green, h)),
      (d.blue = hd(l.blue, o.blue, h)),
      (d.alpha = Ze(l.alpha, o.alpha, h)),
      mi.transform(d)
    );
  },
  Dd = new Set(["none", "hidden"]);
function Zw(n, i) {
  return Dd.has(n) ? (l) => (l <= 0 ? n : i) : (l) => (l >= 1 ? i : n);
}
function Jw(n, i) {
  return (l) => Ze(n, i, l);
}
function Ef(n) {
  return typeof n == "number"
    ? Jw
    : typeof n == "string"
      ? Sf(n)
        ? Do
        : ht.test(n)
          ? Fp
          : e5
      : Array.isArray(n)
        ? oy
        : typeof n == "object"
          ? ht.test(n)
            ? Fp
            : Iw
          : Do;
}
function oy(n, i) {
  const l = [...n],
    o = l.length,
    d = n.map((h, f) => Ef(h)(h, i[f]));
  return (h) => {
    for (let f = 0; f < o; f++) l[f] = d[f](h);
    return l;
  };
}
function Iw(n, i) {
  const l = { ...n, ...i },
    o = {};
  for (const d in l)
    n[d] !== void 0 && i[d] !== void 0 && (o[d] = Ef(n[d])(n[d], i[d]));
  return (d) => {
    for (const h in o) l[h] = o[h](d);
    return l;
  };
}
function Ww(n, i) {
  const l = [],
    o = { color: 0, var: 0, number: 0 };
  for (let d = 0; d < i.values.length; d++) {
    const h = i.types[d],
      f = n.indexes[h][o[h]],
      x = n.values[f] ?? 0;
    ((l[d] = x), o[h]++);
  }
  return l;
}
const e5 = (n, i) => {
  const l = $n.createTransformer(i),
    o = Ol(n),
    d = Ol(i);
  return o.indexes.var.length === d.indexes.var.length &&
    o.indexes.color.length === d.indexes.color.length &&
    o.indexes.number.length >= d.indexes.number.length
    ? (Dd.has(n) && !d.values.length) || (Dd.has(i) && !o.values.length)
      ? Zw(n, i)
      : Gl(oy(Ww(o, d), d.values), l)
    : Do(n, i);
};
function cy(n, i, l) {
  return typeof n == "number" && typeof i == "number" && typeof l == "number"
    ? Ze(n, i, l)
    : Ef(n)(n, i);
}
const t5 = (n) => {
    const i = ({ timestamp: l }) => n(l);
    return {
      start: (l = !0) => Ye.update(i, l),
      stop: () => nn(i),
      now: () => (Et.isProcessing ? Et.timestamp : Ut.now()),
    };
  },
  uy = (n, i, l = 10) => {
    let o = "";
    const d = Math.max(Math.round(i / l), 2);
    for (let h = 0; h < d; h++)
      o += Math.round(n(h / (d - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${o.substring(0, o.length - 2)})`;
  },
  Ro = 2e4;
function Af(n) {
  let i = 0;
  const l = 50;
  let o = n.next(i);
  for (; !o.done && i < Ro; ) ((i += l), (o = n.next(i)));
  return i >= Ro ? 1 / 0 : i;
}
function a5(n, i = 100, l) {
  const o = l({ ...n, keyframes: [0, i] }),
    d = Math.min(Af(o), Ro);
  return {
    type: "keyframes",
    ease: (h) => o.next(d * h).value / i,
    duration: oa(d),
  };
}
const n5 = 5;
function dy(n, i, l) {
  const o = Math.max(i - n5, 0);
  return Gx(l - n(o), i - o);
}
const tt = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  md = 0.001;
function i5({
  duration: n = tt.duration,
  bounce: i = tt.bounce,
  velocity: l = tt.velocity,
  mass: o = tt.mass,
}) {
  let d,
    h,
    f = 1 - i;
  ((f = tn(tt.minDamping, tt.maxDamping, f)),
    (n = tn(tt.minDuration, tt.maxDuration, oa(n))),
    f < 1
      ? ((d = (g) => {
          const y = g * f,
            b = y * n,
            w = y - l,
            T = Rd(g, f),
            R = Math.exp(-b);
          return md - (w / T) * R;
        }),
        (h = (g) => {
          const b = g * f * n,
            w = b * l + l,
            T = Math.pow(f, 2) * Math.pow(g, 2) * n,
            R = Math.exp(-b),
            C = Rd(Math.pow(g, 2), f);
          return ((-d(g) + md > 0 ? -1 : 1) * ((w - T) * R)) / C;
        }))
      : ((d = (g) => {
          const y = Math.exp(-g * n),
            b = (g - l) * n + 1;
          return -md + y * b;
        }),
        (h = (g) => {
          const y = Math.exp(-g * n),
            b = (l - g) * (n * n);
          return y * b;
        })));
  const x = 5 / n,
    p = l5(d, h, x);
  if (((n = Aa(n)), isNaN(p)))
    return { stiffness: tt.stiffness, damping: tt.damping, duration: n };
  {
    const g = Math.pow(p, 2) * o;
    return { stiffness: g, damping: f * 2 * Math.sqrt(o * g), duration: n };
  }
}
const s5 = 12;
function l5(n, i, l) {
  let o = l;
  for (let d = 1; d < s5; d++) o = o - n(o) / i(o);
  return o;
}
function Rd(n, i) {
  return n * Math.sqrt(1 - i * i);
}
const r5 = ["duration", "bounce"],
  o5 = ["stiffness", "damping", "mass"];
function Qp(n, i) {
  return i.some((l) => n[l] !== void 0);
}
function c5(n) {
  let i = {
    velocity: tt.velocity,
    stiffness: tt.stiffness,
    damping: tt.damping,
    mass: tt.mass,
    isResolvedFromDuration: !1,
    ...n,
  };
  if (!Qp(n, o5) && Qp(n, r5))
    if (n.visualDuration) {
      const l = n.visualDuration,
        o = (2 * Math.PI) / (l * 1.2),
        d = o * o,
        h = 2 * tn(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(d);
      i = { ...i, mass: tt.mass, stiffness: d, damping: h };
    } else {
      const l = i5(n);
      ((i = { ...i, ...l, mass: tt.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function ko(n = tt.visualDuration, i = tt.bounce) {
  const l =
    typeof n != "object"
      ? { visualDuration: n, keyframes: [0, 1], bounce: i }
      : n;
  let { restSpeed: o, restDelta: d } = l;
  const h = l.keyframes[0],
    f = l.keyframes[l.keyframes.length - 1],
    x = { done: !1, value: h },
    {
      stiffness: p,
      damping: g,
      mass: y,
      duration: b,
      velocity: w,
      isResolvedFromDuration: T,
    } = c5({ ...l, velocity: -oa(l.velocity || 0) }),
    R = w || 0,
    C = g / (2 * Math.sqrt(p * y)),
    D = f - h,
    _ = oa(Math.sqrt(p / y)),
    V = Math.abs(D) < 5;
  (o || (o = V ? tt.restSpeed.granular : tt.restSpeed.default),
    d || (d = V ? tt.restDelta.granular : tt.restDelta.default));
  let E;
  if (C < 1) {
    const X = Rd(_, C);
    E = (W) => {
      const P = Math.exp(-C * _ * W);
      return (
        f - P * (((R + C * _ * D) / X) * Math.sin(X * W) + D * Math.cos(X * W))
      );
    };
  } else if (C === 1) E = (X) => f - Math.exp(-_ * X) * (D + (R + _ * D) * X);
  else {
    const X = _ * Math.sqrt(C * C - 1);
    E = (W) => {
      const P = Math.exp(-C * _ * W),
        Z = Math.min(X * W, 300);
      return (
        f - (P * ((R + C * _ * D) * Math.sinh(Z) + X * D * Math.cosh(Z))) / X
      );
    };
  }
  const Q = {
    calculatedDuration: (T && b) || null,
    next: (X) => {
      const W = E(X);
      if (T) x.done = X >= b;
      else {
        let P = X === 0 ? R : 0;
        C < 1 && (P = X === 0 ? Aa(R) : dy(E, X, W));
        const Z = Math.abs(P) <= o,
          ie = Math.abs(f - W) <= d;
        x.done = Z && ie;
      }
      return ((x.value = x.done ? f : W), x);
    },
    toString: () => {
      const X = Math.min(Af(Q), Ro),
        W = uy((P) => Q.next(X * P).value, X, 30);
      return X + "ms " + W;
    },
    toTransition: () => {},
  };
  return Q;
}
ko.applyToOptions = (n) => {
  const i = a5(n, 100, ko);
  return (
    (n.ease = i.ease),
    (n.duration = Aa(i.duration)),
    (n.type = "keyframes"),
    n
  );
};
function kd({
  keyframes: n,
  velocity: i = 0,
  power: l = 0.8,
  timeConstant: o = 325,
  bounceDamping: d = 10,
  bounceStiffness: h = 500,
  modifyTarget: f,
  min: x,
  max: p,
  restDelta: g = 0.5,
  restSpeed: y,
}) {
  const b = n[0],
    w = { done: !1, value: b },
    T = (Z) => (x !== void 0 && Z < x) || (p !== void 0 && Z > p),
    R = (Z) =>
      x === void 0
        ? p
        : p === void 0 || Math.abs(x - Z) < Math.abs(p - Z)
          ? x
          : p;
  let C = l * i;
  const D = b + C,
    _ = f === void 0 ? D : f(D);
  _ !== D && (C = _ - b);
  const V = (Z) => -C * Math.exp(-Z / o),
    E = (Z) => _ + V(Z),
    Q = (Z) => {
      const ie = V(Z),
        I = E(Z);
      ((w.done = Math.abs(ie) <= g), (w.value = w.done ? _ : I));
    };
  let X, W;
  const P = (Z) => {
    T(w.value) &&
      ((X = Z),
      (W = ko({
        keyframes: [w.value, R(w.value)],
        velocity: dy(E, Z, w.value),
        damping: d,
        stiffness: h,
        restDelta: g,
        restSpeed: y,
      })));
  };
  return (
    P(0),
    {
      calculatedDuration: null,
      next: (Z) => {
        let ie = !1;
        return (
          !W && X === void 0 && ((ie = !0), Q(Z), P(Z)),
          X !== void 0 && Z >= X ? W.next(Z - X) : (!ie && Q(Z), w)
        );
      },
    }
  );
}
function u5(n, i, l) {
  const o = [],
    d = l || an.mix || cy,
    h = n.length - 1;
  for (let f = 0; f < h; f++) {
    let x = d(n[f], n[f + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[f] || ca : i;
      x = Gl(p, x);
    }
    o.push(x);
  }
  return o;
}
function fy(n, i, { clamp: l = !0, ease: o, mixer: d } = {}) {
  const h = n.length;
  if ((yf(h === i.length), h === 1)) return () => i[0];
  if (h === 2 && i[0] === i[1]) return () => i[1];
  const f = n[0] === n[1];
  n[0] > n[h - 1] && ((n = [...n].reverse()), (i = [...i].reverse()));
  const x = u5(i, o, d),
    p = x.length,
    g = (y) => {
      if (f && y < n[0]) return i[0];
      let b = 0;
      if (p > 1) for (; b < n.length - 2 && !(y < n[b + 1]); b++);
      const w = zl(n[b], n[b + 1], y);
      return x[b](w);
    };
  return l ? (y) => g(tn(n[0], n[h - 1], y)) : g;
}
function d5(n, i) {
  const l = n[n.length - 1];
  for (let o = 1; o <= i; o++) {
    const d = zl(0, i, o);
    n.push(Ze(l, 1, d));
  }
}
function f5(n) {
  const i = [0];
  return (d5(i, n.length - 1), i);
}
function h5(n, i) {
  return n.map((l) => l * i);
}
function m5(n, i) {
  return n.map(() => i || Ix).splice(0, n.length - 1);
}
function Al({
  duration: n = 300,
  keyframes: i,
  times: l,
  ease: o = "easeInOut",
}) {
  const d = Ew(o) ? o.map(Yp) : Yp(o),
    h = { done: !1, value: i[0] },
    f = h5(l && l.length === i.length ? l : f5(i), n),
    x = fy(f, i, { ease: Array.isArray(d) ? d : m5(i, d) });
  return {
    calculatedDuration: n,
    next: (p) => ((h.value = x(p)), (h.done = p >= n), h),
  };
}
const p5 = (n) => n !== null;
function Mf(n, { repeat: i, repeatType: l = "loop" }, o, d = 1) {
  const h = n.filter(p5),
    x = d < 0 || (i && l !== "loop" && i % 2 === 1) ? 0 : h.length - 1;
  return !x || o === void 0 ? h[x] : o;
}
const g5 = { decay: kd, inertia: kd, tween: Al, keyframes: Al, spring: ko };
function hy(n) {
  typeof n.type == "string" && (n.type = g5[n.type]);
}
class Cf {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, l) {
    return this.finished.then(i, l);
  }
}
const x5 = (n) => n / 100;
class Go extends Cf {
  constructor(i) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.stop = () => {
        const { motionValue: l } = this.options;
        (l && l.updatedAt !== Ut.now() && this.tick(Ut.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: i } = this;
    hy(i);
    const {
      type: l = Al,
      repeat: o = 0,
      repeatDelay: d = 0,
      repeatType: h,
      velocity: f = 0,
    } = i;
    let { keyframes: x } = i;
    const p = l || Al;
    p !== Al &&
      typeof x[0] != "number" &&
      ((this.mixKeyframes = Gl(x5, cy(x[0], x[1]))), (x = [0, 100]));
    const g = p({ ...i, keyframes: x });
    (h === "mirror" &&
      (this.mirroredGenerator = p({
        ...i,
        keyframes: [...x].reverse(),
        velocity: -f,
      })),
      g.calculatedDuration === null && (g.calculatedDuration = Af(g)));
    const { calculatedDuration: y } = g;
    ((this.calculatedDuration = y),
      (this.resolvedDuration = y + d),
      (this.totalDuration = this.resolvedDuration * (o + 1) - d),
      (this.generator = g));
  }
  updateTime(i) {
    const l = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = l);
  }
  tick(i, l = !1) {
    const {
      generator: o,
      totalDuration: d,
      mixKeyframes: h,
      mirroredGenerator: f,
      resolvedDuration: x,
      calculatedDuration: p,
    } = this;
    if (this.startTime === null) return o.next(0);
    const {
      delay: g = 0,
      keyframes: y,
      repeat: b,
      repeatType: w,
      repeatDelay: T,
      type: R,
      onUpdate: C,
      finalKeyframe: D,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - d / this.speed, this.startTime)),
      l ? (this.currentTime = i) : this.updateTime(i));
    const _ = this.currentTime - g * (this.playbackSpeed >= 0 ? 1 : -1),
      V = this.playbackSpeed >= 0 ? _ < 0 : _ > d;
    ((this.currentTime = Math.max(_, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d));
    let E = this.currentTime,
      Q = o;
    if (b) {
      const Z = Math.min(this.currentTime, d) / x;
      let ie = Math.floor(Z),
        I = Z % 1;
      (!I && Z >= 1 && (I = 1),
        I === 1 && ie--,
        (ie = Math.min(ie, b + 1)),
        ie % 2 &&
          (w === "reverse"
            ? ((I = 1 - I), T && (I -= T / x))
            : w === "mirror" && (Q = f)),
        (E = tn(0, 1, I) * x));
    }
    const X = V ? { done: !1, value: y[0] } : Q.next(E);
    h && (X.value = h(X.value));
    let { done: W } = X;
    !V &&
      p !== null &&
      (W =
        this.playbackSpeed >= 0
          ? this.currentTime >= d
          : this.currentTime <= 0);
    const P =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && W));
    return (
      P && R !== kd && (X.value = Mf(y, this.options, D, this.speed)),
      C && C(X.value),
      P && this.finish(),
      X
    );
  }
  then(i, l) {
    return this.finished.then(i, l);
  }
  get duration() {
    return oa(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + oa(i);
  }
  get time() {
    return oa(this.currentTime);
  }
  set time(i) {
    ((i = Aa(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver?.start(!1));
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    this.updateTime(Ut.now());
    const l = this.playbackSpeed !== i;
    ((this.playbackSpeed = i), l && (this.time = oa(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: i = t5, startTime: l } = this.options;
    (this.driver || (this.driver = i((d) => this.tick(d))),
      this.options.onPlay?.());
    const o = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = o))
      : this.holdTime !== null
        ? (this.startTime = o - this.holdTime)
        : this.startTime || (this.startTime = l ?? o),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(Ut.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return ((this.startTime = 0), this.tick(i, !0));
  }
  attachTimeline(i) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
    );
  }
}
function y5(n) {
  for (let i = 1; i < n.length; i++) n[i] ?? (n[i] = n[i - 1]);
}
const pi = (n) => (n * 180) / Math.PI,
  zd = (n) => {
    const i = pi(Math.atan2(n[1], n[0]));
    return _d(i);
  },
  b5 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (n) => (Math.abs(n[0]) + Math.abs(n[3])) / 2,
    rotate: zd,
    rotateZ: zd,
    skewX: (n) => pi(Math.atan(n[1])),
    skewY: (n) => pi(Math.atan(n[2])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[2])) / 2,
  },
  _d = (n) => ((n = n % 360), n < 0 && (n += 360), n),
  Zp = zd,
  Jp = (n) => Math.sqrt(n[0] * n[0] + n[1] * n[1]),
  Ip = (n) => Math.sqrt(n[4] * n[4] + n[5] * n[5]),
  v5 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Jp,
    scaleY: Ip,
    scale: (n) => (Jp(n) + Ip(n)) / 2,
    rotateX: (n) => _d(pi(Math.atan2(n[6], n[5]))),
    rotateY: (n) => _d(pi(Math.atan2(-n[2], n[0]))),
    rotateZ: Zp,
    rotate: Zp,
    skewX: (n) => pi(Math.atan(n[4])),
    skewY: (n) => pi(Math.atan(n[1])),
    skew: (n) => (Math.abs(n[1]) + Math.abs(n[4])) / 2,
  };
function Od(n) {
  return n.includes("scale") ? 1 : 0;
}
function Bd(n, i) {
  if (!n || n === "none") return Od(i);
  const l = n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, d;
  if (l) ((o = v5), (d = l));
  else {
    const x = n.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((o = b5), (d = x));
  }
  if (!d) return Od(i);
  const h = o[i],
    f = d[1].split(",").map(j5);
  return typeof h == "function" ? h(f) : f[h];
}
const w5 = (n, i) => {
  const { transform: l = "none" } = getComputedStyle(n);
  return Bd(l, i);
};
function j5(n) {
  return parseFloat(n.trim());
}
const Ns = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Ts = new Set(Ns),
  Wp = (n) => n === Ss || n === fe,
  S5 = new Set(["x", "y", "z"]),
  N5 = Ns.filter((n) => !S5.has(n));
function T5(n) {
  const i = [];
  return (
    N5.forEach((l) => {
      const o = n.getValue(l);
      o !== void 0 &&
        (i.push([l, o.get()]), o.set(l.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const gi = {
  width: ({ x: n }, { paddingLeft: i = "0", paddingRight: l = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(l),
  height: ({ y: n }, { paddingTop: i = "0", paddingBottom: l = "0" }) =>
    n.max - n.min - parseFloat(i) - parseFloat(l),
  top: (n, { top: i }) => parseFloat(i),
  left: (n, { left: i }) => parseFloat(i),
  bottom: ({ y: n }, { top: i }) => parseFloat(i) + (n.max - n.min),
  right: ({ x: n }, { left: i }) => parseFloat(i) + (n.max - n.min),
  x: (n, { transform: i }) => Bd(i, "x"),
  y: (n, { transform: i }) => Bd(i, "y"),
};
gi.translateX = gi.x;
gi.translateY = gi.y;
const xi = new Set();
let Ld = !1,
  Vd = !1,
  Ud = !1;
function my() {
  if (Vd) {
    const n = Array.from(xi).filter((o) => o.needsMeasurement),
      i = new Set(n.map((o) => o.element)),
      l = new Map();
    (i.forEach((o) => {
      const d = T5(o);
      d.length && (l.set(o, d), o.render());
    }),
      n.forEach((o) => o.measureInitialState()),
      i.forEach((o) => {
        o.render();
        const d = l.get(o);
        d &&
          d.forEach(([h, f]) => {
            o.getValue(h)?.set(f);
          });
      }),
      n.forEach((o) => o.measureEndState()),
      n.forEach((o) => {
        o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY);
      }));
  }
  ((Vd = !1), (Ld = !1), xi.forEach((n) => n.complete(Ud)), xi.clear());
}
function py() {
  xi.forEach((n) => {
    (n.readKeyframes(), n.needsMeasurement && (Vd = !0));
  });
}
function E5() {
  ((Ud = !0), py(), my(), (Ud = !1));
}
class Df {
  constructor(i, l, o, d, h, f = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = l),
      (this.name = o),
      (this.motionValue = d),
      (this.element = h),
      (this.isAsync = f));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (xi.add(this),
          Ld || ((Ld = !0), Ye.read(py), Ye.resolveKeyframes(my)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: l,
      element: o,
      motionValue: d,
    } = this;
    if (i[0] === null) {
      const h = d?.get(),
        f = i[i.length - 1];
      if (h !== void 0) i[0] = h;
      else if (o && l) {
        const x = o.readValue(l, f);
        x != null && (i[0] = x);
      }
      (i[0] === void 0 && (i[0] = f), d && h === void 0 && d.set(i[0]));
    }
    y5(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      xi.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (xi.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const A5 = (n) => n.startsWith("--");
function M5(n, i, l) {
  A5(i) ? n.style.setProperty(i, l) : (n.style[i] = l);
}
const C5 = bf(() => window.ScrollTimeline !== void 0),
  D5 = {};
function R5(n, i) {
  const l = bf(n);
  return () => D5[i] ?? l();
}
const gy = R5(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Nl = ([n, i, l, o]) => `cubic-bezier(${n}, ${i}, ${l}, ${o})`,
  eg = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Nl([0, 0.65, 0.55, 1]),
    circOut: Nl([0.55, 0, 1, 0.45]),
    backIn: Nl([0.31, 0.01, 0.66, -0.59]),
    backOut: Nl([0.33, 1.53, 0.69, 0.99]),
  };
function xy(n, i) {
  if (n)
    return typeof n == "function"
      ? gy()
        ? uy(n, i)
        : "ease-out"
      : Wx(n)
        ? Nl(n)
        : Array.isArray(n)
          ? n.map((l) => xy(l, i) || eg.easeOut)
          : eg[n];
}
function k5(
  n,
  i,
  l,
  {
    delay: o = 0,
    duration: d = 300,
    repeat: h = 0,
    repeatType: f = "loop",
    ease: x = "easeOut",
    times: p,
  } = {},
  g = void 0,
) {
  const y = { [i]: l };
  p && (y.offset = p);
  const b = xy(x, d);
  Array.isArray(b) && (y.easing = b);
  const w = {
    delay: o,
    duration: d,
    easing: Array.isArray(b) ? "linear" : b,
    fill: "both",
    iterations: h + 1,
    direction: f === "reverse" ? "alternate" : "normal",
  };
  return (g && (w.pseudoElement = g), n.animate(y, w));
}
function yy(n) {
  return typeof n == "function" && "applyToOptions" in n;
}
function z5({ type: n, ...i }) {
  return yy(n) && gy()
    ? n.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class _5 extends Cf {
  constructor(i) {
    if ((super(), (this.finishedTime = null), (this.isStopped = !1), !i))
      return;
    const {
      element: l,
      name: o,
      keyframes: d,
      pseudoElement: h,
      allowFlatten: f = !1,
      finalKeyframe: x,
      onComplete: p,
    } = i;
    ((this.isPseudoElement = !!h),
      (this.allowFlatten = f),
      (this.options = i),
      yf(typeof i.type != "string"));
    const g = z5(i);
    ((this.animation = k5(l, o, d, g, h)),
      g.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !h)) {
          const y = Mf(d, this.options, x, this.speed);
          (this.updateMotionValue ? this.updateMotionValue(y) : M5(l, o, y),
            this.animation.cancel());
        }
        (p?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      (this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    this.isPseudoElement || this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return oa(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + oa(i);
  }
  get time() {
    return oa(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    ((this.finishedTime = null), (this.animation.currentTime = Aa(i)));
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    (i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return Number(this.animation.startTime);
  }
  set startTime(i) {
    this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, observe: l }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      i && C5() ? ((this.animation.timeline = i), ca) : l(this)
    );
  }
}
const by = { anticipate: Qx, backInOut: Fx, circInOut: Jx };
function O5(n) {
  return n in by;
}
function B5(n) {
  typeof n.ease == "string" && O5(n.ease) && (n.ease = by[n.ease]);
}
const tg = 10;
class L5 extends _5 {
  constructor(i) {
    (B5(i),
      hy(i),
      super(i),
      i.startTime && (this.startTime = i.startTime),
      (this.options = i));
  }
  updateMotionValue(i) {
    const {
      motionValue: l,
      onUpdate: o,
      onComplete: d,
      element: h,
      ...f
    } = this.options;
    if (!l) return;
    if (i !== void 0) {
      l.set(i);
      return;
    }
    const x = new Go({ ...f, autoplay: !1 }),
      p = Aa(this.finishedTime ?? this.time);
    (l.setWithVelocity(x.sample(p - tg).value, x.sample(p).value, tg),
      x.stop());
  }
}
const ag = (n, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof n == "number" ||
        Array.isArray(n) ||
        (typeof n == "string" &&
          ($n.test(n) || n === "0") &&
          !n.startsWith("url("))
      );
function V5(n) {
  const i = n[0];
  if (n.length === 1) return !0;
  for (let l = 0; l < n.length; l++) if (n[l] !== i) return !0;
}
function U5(n, i, l, o) {
  const d = n[0];
  if (d === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const h = n[n.length - 1],
    f = ag(d, i),
    x = ag(h, i);
  return !f || !x ? !1 : V5(n) || ((l === "spring" || yy(l)) && o);
}
function Hd(n) {
  ((n.duration = 0), (n.type = "keyframes"));
}
const H5 = new Set(["opacity", "clipPath", "filter", "transform"]),
  q5 = bf(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function $5(n) {
  const {
    motionValue: i,
    name: l,
    repeatDelay: o,
    repeatType: d,
    damping: h,
    type: f,
  } = n;
  if (!(i?.owner?.current instanceof HTMLElement)) return !1;
  const { onUpdate: p, transformTemplate: g } = i.owner.getProps();
  return (
    q5() &&
    l &&
    H5.has(l) &&
    (l !== "transform" || !g) &&
    !p &&
    !o &&
    d !== "mirror" &&
    h !== 0 &&
    f !== "inertia"
  );
}
const G5 = 40;
class Y5 extends Cf {
  constructor({
    autoplay: i = !0,
    delay: l = 0,
    type: o = "keyframes",
    repeat: d = 0,
    repeatDelay: h = 0,
    repeatType: f = "loop",
    keyframes: x,
    name: p,
    motionValue: g,
    element: y,
    ...b
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = Ut.now()));
    const w = {
        autoplay: i,
        delay: l,
        type: o,
        repeat: d,
        repeatDelay: h,
        repeatType: f,
        name: p,
        motionValue: g,
        element: y,
        ...b,
      },
      T = y?.KeyframeResolver || Df;
    ((this.keyframeResolver = new T(
      x,
      (R, C, D) => this.onKeyframesResolved(R, C, w, !D),
      p,
      g,
      y,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(i, l, o, d) {
    this.keyframeResolver = void 0;
    const {
      name: h,
      type: f,
      velocity: x,
      delay: p,
      isHandoff: g,
      onUpdate: y,
    } = o;
    ((this.resolvedAt = Ut.now()),
      U5(i, h, f, x) ||
        ((an.instantAnimations || !p) && y?.(Mf(i, o, l)),
        (i[0] = i[i.length - 1]),
        Hd(o),
        (o.repeat = 0)));
    const w = {
        startTime: d
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > G5
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: l,
        ...o,
        keyframes: i,
      },
      T =
        !g && $5(w)
          ? new L5({ ...w, element: w.motionValue.owner.current })
          : new Go(w);
    (T.finished.then(() => this.notifyFinished()).catch(ca),
      this.pendingTimeline &&
        ((this.stopTimeline = T.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = T));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, l) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), E5()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
const X5 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function K5(n) {
  const i = X5.exec(n);
  if (!i) return [,];
  const [, l, o, d] = i;
  return [`--${l ?? o}`, d];
}
function vy(n, i, l = 1) {
  const [o, d] = K5(n);
  if (!o) return;
  const h = window.getComputedStyle(i).getPropertyValue(o);
  if (h) {
    const f = h.trim();
    return Hx(f) ? parseFloat(f) : f;
  }
  return Sf(d) ? vy(d, i, l + 1) : d;
}
function Rf(n, i) {
  return n?.[i] ?? n?.default ?? n;
}
const wy = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...Ns,
  ]),
  P5 = { test: (n) => n === "auto", parse: (n) => n },
  jy = (n) => (i) => i.test(n),
  Sy = [Ss, fe, Ma, Un, Uw, Vw, P5],
  ng = (n) => Sy.find(jy(n));
function F5(n) {
  return typeof n == "number"
    ? n === 0
    : n !== null
      ? n === "none" || n === "0" || $x(n)
      : !0;
}
const Q5 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Z5(n) {
  const [i, l] = n.slice(0, -1).split("(");
  if (i === "drop-shadow") return n;
  const [o] = l.match(Nf) || [];
  if (!o) return n;
  const d = l.replace(o, "");
  let h = Q5.has(i) ? 1 : 0;
  return (o !== l && (h *= 100), i + "(" + h + d + ")");
}
const J5 = /\b([a-z-]*)\(.*?\)/gu,
  qd = {
    ...$n,
    getAnimatableNone: (n) => {
      const i = n.match(J5);
      return i ? i.map(Z5).join(" ") : n;
    },
  },
  ig = { ...Ss, transform: Math.round },
  I5 = {
    rotate: Un,
    rotateX: Un,
    rotateY: Un,
    rotateZ: Un,
    scale: go,
    scaleX: go,
    scaleY: go,
    scaleZ: go,
    skew: Un,
    skewX: Un,
    skewY: Un,
    distance: fe,
    translateX: fe,
    translateY: fe,
    translateZ: fe,
    x: fe,
    y: fe,
    z: fe,
    perspective: fe,
    transformPerspective: fe,
    opacity: _l,
    originX: Xp,
    originY: Xp,
    originZ: fe,
  },
  kf = {
    borderWidth: fe,
    borderTopWidth: fe,
    borderRightWidth: fe,
    borderBottomWidth: fe,
    borderLeftWidth: fe,
    borderRadius: fe,
    radius: fe,
    borderTopLeftRadius: fe,
    borderTopRightRadius: fe,
    borderBottomRightRadius: fe,
    borderBottomLeftRadius: fe,
    width: fe,
    maxWidth: fe,
    height: fe,
    maxHeight: fe,
    top: fe,
    right: fe,
    bottom: fe,
    left: fe,
    padding: fe,
    paddingTop: fe,
    paddingRight: fe,
    paddingBottom: fe,
    paddingLeft: fe,
    margin: fe,
    marginTop: fe,
    marginRight: fe,
    marginBottom: fe,
    marginLeft: fe,
    backgroundPositionX: fe,
    backgroundPositionY: fe,
    ...I5,
    zIndex: ig,
    fillOpacity: _l,
    strokeOpacity: _l,
    numOctaves: ig,
  },
  W5 = {
    ...kf,
    color: ht,
    backgroundColor: ht,
    outlineColor: ht,
    fill: ht,
    stroke: ht,
    borderColor: ht,
    borderTopColor: ht,
    borderRightColor: ht,
    borderBottomColor: ht,
    borderLeftColor: ht,
    filter: qd,
    WebkitFilter: qd,
  },
  Ny = (n) => W5[n];
function Ty(n, i) {
  let l = Ny(n);
  return (
    l !== qd && (l = $n),
    l.getAnimatableNone ? l.getAnimatableNone(i) : void 0
  );
}
const ej = new Set(["auto", "none", "0"]);
function tj(n, i, l) {
  let o = 0,
    d;
  for (; o < n.length && !d; ) {
    const h = n[o];
    (typeof h == "string" && !ej.has(h) && Ol(h).values.length && (d = n[o]),
      o++);
  }
  if (d && l) for (const h of i) n[h] = Ty(l, d);
}
class aj extends Df {
  constructor(i, l, o, d, h) {
    super(i, l, o, d, h, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: l, name: o } = this;
    if (!l || !l.current) return;
    super.readKeyframes();
    for (let p = 0; p < i.length; p++) {
      let g = i[p];
      if (typeof g == "string" && ((g = g.trim()), Sf(g))) {
        const y = vy(g, l.current);
        (y !== void 0 && (i[p] = y),
          p === i.length - 1 && (this.finalKeyframe = g));
      }
    }
    if ((this.resolveNoneKeyframes(), !wy.has(o) || i.length !== 2)) return;
    const [d, h] = i,
      f = ng(d),
      x = ng(h);
    if (f !== x)
      if (Wp(f) && Wp(x))
        for (let p = 0; p < i.length; p++) {
          const g = i[p];
          typeof g == "string" && (i[p] = parseFloat(g));
        }
      else gi[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: l } = this,
      o = [];
    for (let d = 0; d < i.length; d++) (i[d] === null || F5(i[d])) && o.push(d);
    o.length && tj(i, o, l);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: l, name: o } = this;
    if (!i || !i.current) return;
    (o === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = gi[o](
        i.measureViewportBox(),
        window.getComputedStyle(i.current),
      )),
      (l[0] = this.measuredOrigin));
    const d = l[l.length - 1];
    d !== void 0 && i.getValue(o, d).jump(d, !1);
  }
  measureEndState() {
    const { element: i, name: l, unresolvedKeyframes: o } = this;
    if (!i || !i.current) return;
    const d = i.getValue(l);
    d && d.jump(this.measuredOrigin, !1);
    const h = o.length - 1,
      f = o[h];
    ((o[h] = gi[l](i.measureViewportBox(), window.getComputedStyle(i.current))),
      f !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = f),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([x, p]) => {
          i.getValue(x).set(p);
        }),
      this.resolveNoneKeyframes());
  }
}
function nj(n, i, l) {
  if (n instanceof EventTarget) return [n];
  if (typeof n == "string") {
    let o = document;
    const d = l?.[n] ?? o.querySelectorAll(n);
    return d ? Array.from(d) : [];
  }
  return Array.from(n);
}
const Ey = (n, i) => (i && typeof n == "number" ? i.transform(n) : n);
function Ay(n) {
  return qx(n) && "offsetHeight" in n;
}
const sg = 30,
  ij = (n) => !isNaN(parseFloat(n)),
  Ml = { current: void 0 };
class sj {
  constructor(i, l = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (o) => {
        const d = Ut.now();
        if (
          (this.updatedAt !== d && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(o),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const h of this.dependents) h.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = l.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = Ut.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = ij(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, l) {
    this.events[i] || (this.events[i] = new vf());
    const o = this.events[i].add(l);
    return i === "change"
      ? () => {
          (o(),
            Ye.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : o;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, l) {
    ((this.passiveEffect = i), (this.stopPassiveEffect = l));
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, l, o) {
    (this.set(l),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - o));
  }
  jump(i, l = !0) {
    (this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      l && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(i));
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return (Ml.current && Ml.current.push(this), this.current);
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = Ut.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > sg
    )
      return 0;
    const l = Math.min(this.updatedAt - this.prevUpdatedAt, sg);
    return Gx(parseFloat(this.current) - parseFloat(this.prevFrameValue), l);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((l) => {
        ((this.hasAnimated = !0),
          (this.animation = i(l)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function yi(n, i) {
  return new sj(n, i);
}
const { schedule: zf } = ey(queueMicrotask, !1),
  ba = { x: !1, y: !1 };
function My() {
  return ba.x || ba.y;
}
function lj(n) {
  return n === "x" || n === "y"
    ? ba[n]
      ? null
      : ((ba[n] = !0),
        () => {
          ba[n] = !1;
        })
    : ba.x || ba.y
      ? null
      : ((ba.x = ba.y = !0),
        () => {
          ba.x = ba.y = !1;
        });
}
function Cy(n, i) {
  const l = nj(n),
    o = new AbortController(),
    d = { passive: !0, ...i, signal: o.signal };
  return [l, d, () => o.abort()];
}
function lg(n) {
  return !(n.pointerType === "touch" || My());
}
function rj(n, i, l = {}) {
  const [o, d, h] = Cy(n, l),
    f = (x) => {
      if (!lg(x)) return;
      const { target: p } = x,
        g = i(p, x);
      if (typeof g != "function" || !p) return;
      const y = (b) => {
        lg(b) && (g(b), p.removeEventListener("pointerleave", y));
      };
      p.addEventListener("pointerleave", y, d);
    };
  return (
    o.forEach((x) => {
      x.addEventListener("pointerenter", f, d);
    }),
    h
  );
}
const Dy = (n, i) => (i ? (n === i ? !0 : Dy(n, i.parentElement)) : !1),
  _f = (n) =>
    n.pointerType === "mouse"
      ? typeof n.button != "number" || n.button <= 0
      : n.isPrimary !== !1,
  oj = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function cj(n) {
  return oj.has(n.tagName) || n.tabIndex !== -1;
}
const To = new WeakSet();
function rg(n) {
  return (i) => {
    i.key === "Enter" && n(i);
  };
}
function pd(n, i) {
  n.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }),
  );
}
const uj = (n, i) => {
  const l = n.currentTarget;
  if (!l) return;
  const o = rg(() => {
    if (To.has(l)) return;
    pd(l, "down");
    const d = rg(() => {
        pd(l, "up");
      }),
      h = () => pd(l, "cancel");
    (l.addEventListener("keyup", d, i), l.addEventListener("blur", h, i));
  });
  (l.addEventListener("keydown", o, i),
    l.addEventListener("blur", () => l.removeEventListener("keydown", o), i));
};
function og(n) {
  return _f(n) && !My();
}
function dj(n, i, l = {}) {
  const [o, d, h] = Cy(n, l),
    f = (x) => {
      const p = x.currentTarget;
      if (!og(x)) return;
      To.add(p);
      const g = i(p, x),
        y = (T, R) => {
          (window.removeEventListener("pointerup", b),
            window.removeEventListener("pointercancel", w),
            To.has(p) && To.delete(p),
            og(T) && typeof g == "function" && g(T, { success: R }));
        },
        b = (T) => {
          y(
            T,
            p === window ||
              p === document ||
              l.useGlobalTarget ||
              Dy(p, T.target),
          );
        },
        w = (T) => {
          y(T, !1);
        };
      (window.addEventListener("pointerup", b, d),
        window.addEventListener("pointercancel", w, d));
    };
  return (
    o.forEach((x) => {
      ((l.useGlobalTarget ? window : x).addEventListener("pointerdown", f, d),
        Ay(x) &&
          (x.addEventListener("focus", (g) => uj(g, d)),
          !cj(x) && !x.hasAttribute("tabindex") && (x.tabIndex = 0)));
    }),
    h
  );
}
function Ry(n) {
  return qx(n) && "ownerSVGElement" in n;
}
function fj(n) {
  return Ry(n) && n.tagName === "svg";
}
function hj(...n) {
  const i = !Array.isArray(n[0]),
    l = i ? 0 : -1,
    o = n[0 + l],
    d = n[1 + l],
    h = n[2 + l],
    f = n[3 + l],
    x = fy(d, h, f);
  return i ? x(o) : x;
}
const vt = (n) => !!(n && n.getVelocity);
function mj(n, i, l) {
  const o = n.get();
  let d = null,
    h = o,
    f;
  const x = typeof o == "string" ? o.replace(/[\d.-]/g, "") : void 0,
    p = () => {
      d && (d.stop(), (d = null));
    },
    g = () => {
      (p(),
        (d = new Go({
          keyframes: [ug(n.get()), ug(h)],
          velocity: n.getVelocity(),
          type: "spring",
          restDelta: 0.001,
          restSpeed: 0.01,
          ...l,
          onUpdate: f,
        })));
    };
  if (
    (n.attach((y, b) => {
      ((h = y), (f = (w) => b(cg(w, x))), Ye.postRender(g));
    }, p),
    vt(i))
  ) {
    const y = i.on("change", (w) => n.set(cg(w, x))),
      b = n.on("destroy", y);
    return () => {
      (y(), b());
    };
  }
  return p;
}
function cg(n, i) {
  return i ? n + i : n;
}
function ug(n) {
  return typeof n == "number" ? n : parseFloat(n);
}
const pj = [...Sy, ht, $n],
  gj = (n) => pj.find(jy(n)),
  Kl = j.createContext({
    transformPagePoint: (n) => n,
    isStatic: !1,
    reducedMotion: "never",
  });
function dg(n, i) {
  if (typeof n == "function") return n(i);
  n != null && (n.current = i);
}
function xj(...n) {
  return (i) => {
    let l = !1;
    const o = n.map((d) => {
      const h = dg(d, i);
      return (!l && typeof h == "function" && (l = !0), h);
    });
    if (l)
      return () => {
        for (let d = 0; d < o.length; d++) {
          const h = o[d];
          typeof h == "function" ? h() : dg(n[d], null);
        }
      };
  };
}
function yj(...n) {
  return j.useCallback(xj(...n), n);
}
class bj extends j.Component {
  getSnapshotBeforeUpdate(i) {
    const l = this.props.childRef.current;
    if (l && i.isPresent && !this.props.isPresent) {
      const o = l.offsetParent,
        d = (Ay(o) && o.offsetWidth) || 0,
        h = this.props.sizeRef.current;
      ((h.height = l.offsetHeight || 0),
        (h.width = l.offsetWidth || 0),
        (h.top = l.offsetTop),
        (h.left = l.offsetLeft),
        (h.right = d - h.width - h.left));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function vj({ children: n, isPresent: i, anchorX: l, root: o }) {
  const d = j.useId(),
    h = j.useRef(null),
    f = j.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: x } = j.useContext(Kl),
    p = yj(h, n?.ref);
  return (
    j.useInsertionEffect(() => {
      const { width: g, height: y, top: b, left: w, right: T } = f.current;
      if (i || !h.current || !g || !y) return;
      const R = l === "left" ? `left: ${w}` : `right: ${T}`;
      h.current.dataset.motionPopId = d;
      const C = document.createElement("style");
      x && (C.nonce = x);
      const D = o ?? document.head;
      return (
        D.appendChild(C),
        C.sheet &&
          C.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${g}px !important;
            height: ${y}px !important;
            ${R}px !important;
            top: ${b}px !important;
          }
        `),
        () => {
          D.contains(C) && D.removeChild(C);
        }
      );
    }, [i]),
    r.jsx(bj, {
      isPresent: i,
      childRef: h,
      sizeRef: f,
      children: j.cloneElement(n, { ref: p }),
    })
  );
}
const wj = ({
  children: n,
  initial: i,
  isPresent: l,
  onExitComplete: o,
  custom: d,
  presenceAffectsLayout: h,
  mode: f,
  anchorX: x,
  root: p,
}) => {
  const g = $l(jj),
    y = j.useId();
  let b = !0,
    w = j.useMemo(
      () => (
        (b = !1),
        {
          id: y,
          initial: i,
          isPresent: l,
          custom: d,
          onExitComplete: (T) => {
            g.set(T, !0);
            for (const R of g.values()) if (!R) return;
            o && o();
          },
          register: (T) => (g.set(T, !1), () => g.delete(T)),
        }
      ),
      [l, g, o],
    );
  return (
    h && b && (w = { ...w }),
    j.useMemo(() => {
      g.forEach((T, R) => g.set(R, !1));
    }, [l]),
    j.useEffect(() => {
      !l && !g.size && o && o();
    }, [l]),
    f === "popLayout" &&
      (n = r.jsx(vj, { isPresent: l, anchorX: x, root: p, children: n })),
    r.jsx($o.Provider, { value: w, children: n })
  );
};
function jj() {
  return new Map();
}
function ky(n = !0) {
  const i = j.useContext($o);
  if (i === null) return [!0, null];
  const { isPresent: l, onExitComplete: o, register: d } = i,
    h = j.useId();
  j.useEffect(() => {
    if (n) return d(h);
  }, [n]);
  const f = j.useCallback(() => n && o && o(h), [h, o, n]);
  return !l && o ? [!1, f] : [!0];
}
const xo = (n) => n.key || "";
function fg(n) {
  const i = [];
  return (
    j.Children.forEach(n, (l) => {
      j.isValidElement(l) && i.push(l);
    }),
    i
  );
}
const Hn = ({
    children: n,
    custom: i,
    initial: l = !0,
    onExitComplete: o,
    presenceAffectsLayout: d = !0,
    mode: h = "sync",
    propagate: f = !1,
    anchorX: x = "left",
    root: p,
  }) => {
    const [g, y] = ky(f),
      b = j.useMemo(() => fg(n), [n]),
      w = f && !g ? [] : b.map(xo),
      T = j.useRef(!0),
      R = j.useRef(b),
      C = $l(() => new Map()),
      [D, _] = j.useState(b),
      [V, E] = j.useState(b);
    pf(() => {
      ((T.current = !1), (R.current = b));
      for (let W = 0; W < V.length; W++) {
        const P = xo(V[W]);
        w.includes(P) ? C.delete(P) : C.get(P) !== !0 && C.set(P, !1);
      }
    }, [V, w.length, w.join("-")]);
    const Q = [];
    if (b !== D) {
      let W = [...b];
      for (let P = 0; P < V.length; P++) {
        const Z = V[P],
          ie = xo(Z);
        w.includes(ie) || (W.splice(P, 0, Z), Q.push(Z));
      }
      return (h === "wait" && Q.length && (W = Q), E(fg(W)), _(b), null);
    }
    const { forceRender: X } = j.useContext(hf);
    return r.jsx(r.Fragment, {
      children: V.map((W) => {
        const P = xo(W),
          Z = f && !g ? !1 : b === V || w.includes(P),
          ie = () => {
            if (C.has(P)) C.set(P, !0);
            else return;
            let I = !0;
            (C.forEach((he) => {
              he || (I = !1);
            }),
              I && (X?.(), E(R.current), f && y?.(), o && o()));
          };
        return r.jsx(
          wj,
          {
            isPresent: Z,
            initial: !T.current || l ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: d,
            mode: h,
            root: p,
            onExitComplete: Z ? void 0 : ie,
            anchorX: x,
            children: W,
          },
          P,
        );
      }),
    });
  },
  zy = j.createContext({ strict: !1 }),
  hg = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  ys = {};
for (const n in hg) ys[n] = { isEnabled: (i) => hg[n].some((l) => !!i[l]) };
function Sj(n) {
  for (const i in n) ys[i] = { ...ys[i], ...n[i] };
}
const Nj = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function zo(n) {
  return (
    n.startsWith("while") ||
    (n.startsWith("drag") && n !== "draggable") ||
    n.startsWith("layout") ||
    n.startsWith("onTap") ||
    n.startsWith("onPan") ||
    n.startsWith("onLayout") ||
    Nj.has(n)
  );
}
let _y = (n) => !zo(n);
function Tj(n) {
  typeof n == "function" && (_y = (i) => (i.startsWith("on") ? !zo(i) : n(i)));
}
try {
  Tj(require("@emotion/is-prop-valid").default);
} catch {}
function Ej(n, i, l) {
  const o = {};
  for (const d in n)
    (d === "values" && typeof n.values == "object") ||
      ((_y(d) ||
        (l === !0 && zo(d)) ||
        (!i && !zo(d)) ||
        (n.draggable && d.startsWith("onDrag"))) &&
        (o[d] = n[d]));
  return o;
}
const Yo = j.createContext({});
function Xo(n) {
  return n !== null && typeof n == "object" && typeof n.start == "function";
}
function Bl(n) {
  return typeof n == "string" || Array.isArray(n);
}
const Of = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Bf = ["initial", ...Of];
function Ko(n) {
  return Xo(n.animate) || Bf.some((i) => Bl(n[i]));
}
function Oy(n) {
  return !!(Ko(n) || n.variants);
}
function Aj(n, i) {
  if (Ko(n)) {
    const { initial: l, animate: o } = n;
    return {
      initial: l === !1 || Bl(l) ? l : void 0,
      animate: Bl(o) ? o : void 0,
    };
  }
  return n.inherit !== !1 ? i : {};
}
function Mj(n) {
  const { initial: i, animate: l } = Aj(n, j.useContext(Yo));
  return j.useMemo(() => ({ initial: i, animate: l }), [mg(i), mg(l)]);
}
function mg(n) {
  return Array.isArray(n) ? n.join(" ") : n;
}
function pg(n, i) {
  return i.max === i.min ? 0 : (n / (i.max - i.min)) * 100;
}
const Sl = {
    correct: (n, i) => {
      if (!i.target) return n;
      if (typeof n == "string")
        if (fe.test(n)) n = parseFloat(n);
        else return n;
      const l = pg(n, i.target.x),
        o = pg(n, i.target.y);
      return `${l}% ${o}%`;
    },
  },
  Cj = {
    correct: (n, { treeScale: i, projectionDelta: l }) => {
      const o = n,
        d = $n.parse(n);
      if (d.length > 5) return o;
      const h = $n.createTransformer(n),
        f = typeof d[0] != "number" ? 1 : 0,
        x = l.x.scale * i.x,
        p = l.y.scale * i.y;
      ((d[0 + f] /= x), (d[1 + f] /= p));
      const g = Ze(x, p, 0.5);
      return (
        typeof d[2 + f] == "number" && (d[2 + f] /= g),
        typeof d[3 + f] == "number" && (d[3 + f] /= g),
        h(d)
      );
    },
  },
  $d = {
    borderRadius: {
      ...Sl,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: Sl,
    borderTopRightRadius: Sl,
    borderBottomLeftRadius: Sl,
    borderBottomRightRadius: Sl,
    boxShadow: Cj,
  };
function By(n, { layout: i, layoutId: l }) {
  return (
    Ts.has(n) ||
    n.startsWith("origin") ||
    ((i || l !== void 0) && (!!$d[n] || n === "opacity"))
  );
}
const Dj = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  Rj = Ns.length;
function kj(n, i, l) {
  let o = "",
    d = !0;
  for (let h = 0; h < Rj; h++) {
    const f = Ns[h],
      x = n[f];
    if (x === void 0) continue;
    let p = !0;
    if (
      (typeof x == "number"
        ? (p = x === (f.startsWith("scale") ? 1 : 0))
        : (p = parseFloat(x) === 0),
      !p || l)
    ) {
      const g = Ey(x, kf[f]);
      if (!p) {
        d = !1;
        const y = Dj[f] || f;
        o += `${y}(${g}) `;
      }
      l && (i[f] = g);
    }
  }
  return ((o = o.trim()), l ? (o = l(i, d ? "" : o)) : d && (o = "none"), o);
}
function Lf(n, i, l) {
  const { style: o, vars: d, transformOrigin: h } = n;
  let f = !1,
    x = !1;
  for (const p in i) {
    const g = i[p];
    if (Ts.has(p)) {
      f = !0;
      continue;
    } else if (ay(p)) {
      d[p] = g;
      continue;
    } else {
      const y = Ey(g, kf[p]);
      p.startsWith("origin") ? ((x = !0), (h[p] = y)) : (o[p] = y);
    }
  }
  if (
    (i.transform ||
      (f || l
        ? (o.transform = kj(i, n.transform, l))
        : o.transform && (o.transform = "none")),
    x)
  ) {
    const { originX: p = "50%", originY: g = "50%", originZ: y = 0 } = h;
    o.transformOrigin = `${p} ${g} ${y}`;
  }
}
const Vf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Ly(n, i, l) {
  for (const o in i) !vt(i[o]) && !By(o, l) && (n[o] = i[o]);
}
function zj({ transformTemplate: n }, i) {
  return j.useMemo(() => {
    const l = Vf();
    return (Lf(l, i, n), Object.assign({}, l.vars, l.style));
  }, [i]);
}
function _j(n, i) {
  const l = n.style || {},
    o = {};
  return (Ly(o, l, n), Object.assign(o, zj(n, i)), o);
}
function Oj(n, i) {
  const l = {},
    o = _j(n, i);
  return (
    n.drag &&
      n.dragListener !== !1 &&
      ((l.draggable = !1),
      (o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none"),
      (o.touchAction =
        n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
    n.tabIndex === void 0 &&
      (n.onTap || n.onTapStart || n.whileTap) &&
      (l.tabIndex = 0),
    (l.style = o),
    l
  );
}
const Bj = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  Lj = { offset: "strokeDashoffset", array: "strokeDasharray" };
function Vj(n, i, l = 1, o = 0, d = !0) {
  n.pathLength = 1;
  const h = d ? Bj : Lj;
  n[h.offset] = fe.transform(-o);
  const f = fe.transform(i),
    x = fe.transform(l);
  n[h.array] = `${f} ${x}`;
}
function Vy(
  n,
  {
    attrX: i,
    attrY: l,
    attrScale: o,
    pathLength: d,
    pathSpacing: h = 1,
    pathOffset: f = 0,
    ...x
  },
  p,
  g,
  y,
) {
  if ((Lf(n, x, g), p)) {
    n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
    return;
  }
  ((n.attrs = n.style), (n.style = {}));
  const { attrs: b, style: w } = n;
  (b.transform && ((w.transform = b.transform), delete b.transform),
    (w.transform || b.transformOrigin) &&
      ((w.transformOrigin = b.transformOrigin ?? "50% 50%"),
      delete b.transformOrigin),
    w.transform &&
      ((w.transformBox = y?.transformBox ?? "fill-box"), delete b.transformBox),
    i !== void 0 && (b.x = i),
    l !== void 0 && (b.y = l),
    o !== void 0 && (b.scale = o),
    d !== void 0 && Vj(b, d, h, f, !1));
}
const Uy = () => ({ ...Vf(), attrs: {} }),
  Hy = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function Uj(n, i, l, o) {
  const d = j.useMemo(() => {
    const h = Uy();
    return (
      Vy(h, i, Hy(o), n.transformTemplate, n.style),
      { ...h.attrs, style: { ...h.style } }
    );
  }, [i]);
  if (n.style) {
    const h = {};
    (Ly(h, n.style, n), (d.style = { ...h, ...d.style }));
  }
  return d;
}
const Hj = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function Uf(n) {
  return typeof n != "string" || n.includes("-")
    ? !1
    : !!(Hj.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
function qj(n, i, l, { latestValues: o }, d, h = !1) {
  const x = (Uf(n) ? Uj : Oj)(i, o, d, n),
    p = Ej(i, typeof n == "string", h),
    g = n !== j.Fragment ? { ...p, ...x, ref: l } : {},
    { children: y } = i,
    b = j.useMemo(() => (vt(y) ? y.get() : y), [y]);
  return j.createElement(n, { ...g, children: b });
}
function gg(n) {
  const i = [{}, {}];
  return (
    n?.values.forEach((l, o) => {
      ((i[0][o] = l.get()), (i[1][o] = l.getVelocity()));
    }),
    i
  );
}
function Hf(n, i, l, o) {
  if (typeof i == "function") {
    const [d, h] = gg(o);
    i = i(l !== void 0 ? l : n.custom, d, h);
  }
  if (
    (typeof i == "string" && (i = n.variants && n.variants[i]),
    typeof i == "function")
  ) {
    const [d, h] = gg(o);
    i = i(l !== void 0 ? l : n.custom, d, h);
  }
  return i;
}
function Eo(n) {
  return vt(n) ? n.get() : n;
}
function $j({ scrapeMotionValuesFromProps: n, createRenderState: i }, l, o, d) {
  return { latestValues: Gj(l, o, d, n), renderState: i() };
}
function Gj(n, i, l, o) {
  const d = {},
    h = o(n, {});
  for (const w in h) d[w] = Eo(h[w]);
  let { initial: f, animate: x } = n;
  const p = Ko(n),
    g = Oy(n);
  i &&
    g &&
    !p &&
    n.inherit !== !1 &&
    (f === void 0 && (f = i.initial), x === void 0 && (x = i.animate));
  let y = l ? l.initial === !1 : !1;
  y = y || f === !1;
  const b = y ? x : f;
  if (b && typeof b != "boolean" && !Xo(b)) {
    const w = Array.isArray(b) ? b : [b];
    for (let T = 0; T < w.length; T++) {
      const R = Hf(n, w[T]);
      if (R) {
        const { transitionEnd: C, transition: D, ..._ } = R;
        for (const V in _) {
          let E = _[V];
          if (Array.isArray(E)) {
            const Q = y ? E.length - 1 : 0;
            E = E[Q];
          }
          E !== null && (d[V] = E);
        }
        for (const V in C) d[V] = C[V];
      }
    }
  }
  return d;
}
const qy = (n) => (i, l) => {
  const o = j.useContext(Yo),
    d = j.useContext($o),
    h = () => $j(n, i, o, d);
  return l ? h() : $l(h);
};
function qf(n, i, l) {
  const { style: o } = n,
    d = {};
  for (const h in o)
    (vt(o[h]) ||
      (i.style && vt(i.style[h])) ||
      By(h, n) ||
      l?.getValue(h)?.liveStyle !== void 0) &&
      (d[h] = o[h]);
  return d;
}
const Yj = qy({ scrapeMotionValuesFromProps: qf, createRenderState: Vf });
function $y(n, i, l) {
  const o = qf(n, i, l);
  for (const d in n)
    if (vt(n[d]) || vt(i[d])) {
      const h =
        Ns.indexOf(d) !== -1
          ? "attr" + d.charAt(0).toUpperCase() + d.substring(1)
          : d;
      o[h] = n[d];
    }
  return o;
}
const Xj = qy({ scrapeMotionValuesFromProps: $y, createRenderState: Uy }),
  Kj = Symbol.for("motionComponentSymbol");
function ds(n) {
  return (
    n &&
    typeof n == "object" &&
    Object.prototype.hasOwnProperty.call(n, "current")
  );
}
function Pj(n, i, l) {
  return j.useCallback(
    (o) => {
      (o && n.onMount && n.onMount(o),
        i && (o ? i.mount(o) : i.unmount()),
        l && (typeof l == "function" ? l(o) : ds(l) && (l.current = o)));
    },
    [i],
  );
}
const $f = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Fj = "framerAppearId",
  Gy = "data-" + $f(Fj),
  Yy = j.createContext({});
function Qj(n, i, l, o, d) {
  const { visualElement: h } = j.useContext(Yo),
    f = j.useContext(zy),
    x = j.useContext($o),
    p = j.useContext(Kl).reducedMotion,
    g = j.useRef(null);
  ((o = o || f.renderer),
    !g.current &&
      o &&
      (g.current = o(n, {
        visualState: i,
        parent: h,
        props: l,
        presenceContext: x,
        blockInitialAnimation: x ? x.initial === !1 : !1,
        reducedMotionConfig: p,
      })));
  const y = g.current,
    b = j.useContext(Yy);
  y &&
    !y.projection &&
    d &&
    (y.type === "html" || y.type === "svg") &&
    Zj(g.current, l, d, b);
  const w = j.useRef(!1);
  j.useInsertionEffect(() => {
    y && w.current && y.update(l, x);
  });
  const T = l[Gy],
    R = j.useRef(
      !!T &&
        !window.MotionHandoffIsComplete?.(T) &&
        window.MotionHasOptimisedAnimation?.(T),
    );
  return (
    pf(() => {
      y &&
        ((w.current = !0),
        (window.MotionIsMounted = !0),
        y.updateFeatures(),
        y.scheduleRenderMicrotask(),
        R.current && y.animationState && y.animationState.animateChanges());
    }),
    j.useEffect(() => {
      y &&
        (!R.current && y.animationState && y.animationState.animateChanges(),
        R.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(T);
          }),
          (R.current = !1)),
        (y.enteringChildren = void 0));
    }),
    y
  );
}
function Zj(n, i, l, o) {
  const {
    layoutId: d,
    layout: h,
    drag: f,
    dragConstraints: x,
    layoutScroll: p,
    layoutRoot: g,
    layoutCrossfade: y,
  } = i;
  ((n.projection = new l(
    n.latestValues,
    i["data-framer-portal-id"] ? void 0 : Xy(n.parent),
  )),
    n.projection.setOptions({
      layoutId: d,
      layout: h,
      alwaysMeasureLayout: !!f || (x && ds(x)),
      visualElement: n,
      animationType: typeof h == "string" ? h : "both",
      initialPromotionConfig: o,
      crossfade: y,
      layoutScroll: p,
      layoutRoot: g,
    }));
}
function Xy(n) {
  if (n) return n.options.allowProjection !== !1 ? n.projection : Xy(n.parent);
}
function gd(n, { forwardMotionProps: i = !1 } = {}, l, o) {
  l && Sj(l);
  const d = Uf(n) ? Xj : Yj;
  function h(x, p) {
    let g;
    const y = { ...j.useContext(Kl), ...x, layoutId: Jj(x) },
      { isStatic: b } = y,
      w = Mj(x),
      T = d(x, b);
    if (!b && mf) {
      Ij();
      const R = Wj(y);
      ((g = R.MeasureLayout),
        (w.visualElement = Qj(n, T, y, o, R.ProjectionNode)));
    }
    return r.jsxs(Yo.Provider, {
      value: w,
      children: [
        g && w.visualElement
          ? r.jsx(g, { visualElement: w.visualElement, ...y })
          : null,
        qj(n, x, Pj(T, w.visualElement, p), T, b, i),
      ],
    });
  }
  h.displayName = `motion.${typeof n == "string" ? n : `create(${n.displayName ?? n.name ?? ""})`}`;
  const f = j.forwardRef(h);
  return ((f[Kj] = n), f);
}
function Jj({ layoutId: n }) {
  const i = j.useContext(hf).id;
  return i && n !== void 0 ? i + "-" + n : n;
}
function Ij(n, i) {
  j.useContext(zy).strict;
}
function Wj(n) {
  const { drag: i, layout: l } = ys;
  if (!i && !l) return {};
  const o = { ...i, ...l };
  return {
    MeasureLayout:
      i?.isEnabled(n) || l?.isEnabled(n) ? o.MeasureLayout : void 0,
    ProjectionNode: o.ProjectionNode,
  };
}
function eS(n, i) {
  if (typeof Proxy > "u") return gd;
  const l = new Map(),
    o = (h, f) => gd(h, f, n, i),
    d = (h, f) => o(h, f);
  return new Proxy(d, {
    get: (h, f) =>
      f === "create"
        ? o
        : (l.has(f) || l.set(f, gd(f, void 0, n, i)), l.get(f)),
  });
}
function Ky({ top: n, left: i, right: l, bottom: o }) {
  return { x: { min: i, max: l }, y: { min: n, max: o } };
}
function tS({ x: n, y: i }) {
  return { top: i.min, right: n.max, bottom: i.max, left: n.min };
}
function aS(n, i) {
  if (!i) return n;
  const l = i({ x: n.left, y: n.top }),
    o = i({ x: n.right, y: n.bottom });
  return { top: l.y, left: l.x, bottom: o.y, right: o.x };
}
function xd(n) {
  return n === void 0 || n === 1;
}
function Gd({ scale: n, scaleX: i, scaleY: l }) {
  return !xd(n) || !xd(i) || !xd(l);
}
function hi(n) {
  return (
    Gd(n) ||
    Py(n) ||
    n.z ||
    n.rotate ||
    n.rotateX ||
    n.rotateY ||
    n.skewX ||
    n.skewY
  );
}
function Py(n) {
  return xg(n.x) || xg(n.y);
}
function xg(n) {
  return n && n !== "0%";
}
function _o(n, i, l) {
  const o = n - l,
    d = i * o;
  return l + d;
}
function yg(n, i, l, o, d) {
  return (d !== void 0 && (n = _o(n, d, o)), _o(n, l, o) + i);
}
function Yd(n, i = 0, l = 1, o, d) {
  ((n.min = yg(n.min, i, l, o, d)), (n.max = yg(n.max, i, l, o, d)));
}
function Fy(n, { x: i, y: l }) {
  (Yd(n.x, i.translate, i.scale, i.originPoint),
    Yd(n.y, l.translate, l.scale, l.originPoint));
}
const bg = 0.999999999999,
  vg = 1.0000000000001;
function nS(n, i, l, o = !1) {
  const d = l.length;
  if (!d) return;
  i.x = i.y = 1;
  let h, f;
  for (let x = 0; x < d; x++) {
    ((h = l[x]), (f = h.projectionDelta));
    const { visualElement: p } = h.options;
    (p && p.props.style && p.props.style.display === "contents") ||
      (o &&
        h.options.layoutScroll &&
        h.scroll &&
        h !== h.root &&
        hs(n, { x: -h.scroll.offset.x, y: -h.scroll.offset.y }),
      f && ((i.x *= f.x.scale), (i.y *= f.y.scale), Fy(n, f)),
      o && hi(h.latestValues) && hs(n, h.latestValues));
  }
  (i.x < vg && i.x > bg && (i.x = 1), i.y < vg && i.y > bg && (i.y = 1));
}
function fs(n, i) {
  ((n.min = n.min + i), (n.max = n.max + i));
}
function wg(n, i, l, o, d = 0.5) {
  const h = Ze(n.min, n.max, d);
  Yd(n, i, l, h, o);
}
function hs(n, i) {
  (wg(n.x, i.x, i.scaleX, i.scale, i.originX),
    wg(n.y, i.y, i.scaleY, i.scale, i.originY));
}
function Qy(n, i) {
  return Ky(aS(n.getBoundingClientRect(), i));
}
function iS(n, i, l) {
  const o = Qy(n, l),
    { scroll: d } = i;
  return (d && (fs(o.x, d.offset.x), fs(o.y, d.offset.y)), o);
}
const jg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  ms = () => ({ x: jg(), y: jg() }),
  Sg = () => ({ min: 0, max: 0 }),
  gt = () => ({ x: Sg(), y: Sg() }),
  Xd = { current: null },
  Zy = { current: !1 };
function sS() {
  if (((Zy.current = !0), !!mf))
    if (window.matchMedia) {
      const n = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Xd.current = n.matches);
      (n.addEventListener("change", i), i());
    } else Xd.current = !1;
}
const lS = new WeakMap();
function rS(n, i, l) {
  for (const o in i) {
    const d = i[o],
      h = l[o];
    if (vt(d)) n.addValue(o, d);
    else if (vt(h)) n.addValue(o, yi(d, { owner: n }));
    else if (h !== d)
      if (n.hasValue(o)) {
        const f = n.getValue(o);
        f.liveStyle === !0 ? f.jump(d) : f.hasAnimated || f.set(d);
      } else {
        const f = n.getStaticValue(o);
        n.addValue(o, yi(f !== void 0 ? f : d, { owner: n }));
      }
  }
  for (const o in l) i[o] === void 0 && n.removeValue(o);
  return i;
}
const Ng = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class oS {
  scrapeMotionValuesFromProps(i, l, o) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: l,
      presenceContext: o,
      reducedMotionConfig: d,
      blockInitialAnimation: h,
      visualState: f,
    },
    x = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = Df),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const w = Ut.now();
        this.renderScheduledAt < w &&
          ((this.renderScheduledAt = w), Ye.render(this.render, !1, !0));
      }));
    const { latestValues: p, renderState: g } = f;
    ((this.latestValues = p),
      (this.baseTarget = { ...p }),
      (this.initialValues = l.initial ? { ...p } : {}),
      (this.renderState = g),
      (this.parent = i),
      (this.props = l),
      (this.presenceContext = o),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = d),
      (this.options = x),
      (this.blockInitialAnimation = !!h),
      (this.isControllingVariants = Ko(l)),
      (this.isVariantNode = Oy(l)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: y, ...b } = this.scrapeMotionValuesFromProps(
      l,
      {},
      this,
    );
    for (const w in b) {
      const T = b[w];
      p[w] !== void 0 && vt(T) && T.set(p[w]);
    }
  }
  mount(i) {
    ((this.current = i),
      lS.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((l, o) => this.bindToMotionValue(o, l)),
      Zy.current || sS(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
            ? !0
            : Xd.current),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      nn(this.notifyUpdate),
      nn(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const l = this.features[i];
      l && (l.unmount(), (l.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    (this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i));
  }
  removeChild(i) {
    (this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i));
  }
  bindToMotionValue(i, l) {
    this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)();
    const o = Ts.has(i);
    o && this.onBindTransform && this.onBindTransform();
    const d = l.on("change", (f) => {
      ((this.latestValues[i] = f),
        this.props.onUpdate && Ye.preRender(this.notifyUpdate),
        o && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let h;
    (window.MotionCheckAppearSync &&
      (h = window.MotionCheckAppearSync(this, i, l)),
      this.valueSubscriptions.set(i, () => {
        (d(), h && h(), l.owner && l.stop());
      }));
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in ys) {
      const l = ys[i];
      if (!l) continue;
      const { isEnabled: o, Feature: d } = l;
      if (
        (!this.features[i] &&
          d &&
          o(this.props) &&
          (this.features[i] = new d(this)),
        this.features[i])
      ) {
        const h = this.features[i];
        h.isMounted ? h.update() : (h.mount(), (h.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : gt();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, l) {
    this.latestValues[i] = l;
  }
  update(i, l) {
    ((i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = l));
    for (let o = 0; o < Ng.length; o++) {
      const d = Ng[o];
      this.propEventSubscriptions[d] &&
        (this.propEventSubscriptions[d](),
        delete this.propEventSubscriptions[d]);
      const h = "on" + d,
        f = i[h];
      f && (this.propEventSubscriptions[d] = this.on(d, f));
    }
    ((this.prevMotionValues = rS(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(i) {
    const l = this.getClosestVariantNode();
    if (l)
      return (
        l.variantChildren && l.variantChildren.add(i),
        () => l.variantChildren.delete(i)
      );
  }
  addValue(i, l) {
    const o = this.values.get(i);
    l !== o &&
      (o && this.removeValue(i),
      this.bindToMotionValue(i, l),
      this.values.set(i, l),
      (this.latestValues[i] = l.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const l = this.valueSubscriptions.get(i);
    (l && (l(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState));
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, l) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let o = this.values.get(i);
    return (
      o === void 0 &&
        l !== void 0 &&
        ((o = yi(l === null ? void 0 : l, { owner: this })),
        this.addValue(i, o)),
      o
    );
  }
  readValue(i, l) {
    let o =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options));
    return (
      o != null &&
        (typeof o == "string" && (Hx(o) || $x(o))
          ? (o = parseFloat(o))
          : !gj(o) && $n.test(l) && (o = Ty(i, l)),
        this.setBaseTarget(i, vt(o) ? o.get() : o)),
      vt(o) ? o.get() : o
    );
  }
  setBaseTarget(i, l) {
    this.baseTarget[i] = l;
  }
  getBaseTarget(i) {
    const { initial: l } = this.props;
    let o;
    if (typeof l == "string" || typeof l == "object") {
      const h = Hf(this.props, l, this.presenceContext?.custom);
      h && (o = h[i]);
    }
    if (l && o !== void 0) return o;
    const d = this.getBaseTargetFromProps(this.props, i);
    return d !== void 0 && !vt(d)
      ? d
      : this.initialValues[i] !== void 0 && o === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, l) {
    return (
      this.events[i] || (this.events[i] = new vf()),
      this.events[i].add(l)
    );
  }
  notify(i, ...l) {
    this.events[i] && this.events[i].notify(...l);
  }
  scheduleRenderMicrotask() {
    zf.render(this.render);
  }
}
class Jy extends oS {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = aj));
  }
  sortInstanceNodePosition(i, l) {
    return i.compareDocumentPosition(l) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, l) {
    return i.style ? i.style[l] : void 0;
  }
  removeValueFromRenderState(i, { vars: l, style: o }) {
    (delete l[i], delete o[i]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    vt(i) &&
      (this.childSubscription = i.on("change", (l) => {
        this.current && (this.current.textContent = `${l}`);
      }));
  }
}
function Iy(n, { style: i, vars: l }, o, d) {
  const h = n.style;
  let f;
  for (f in i) h[f] = i[f];
  d?.applyProjectionStyles(h, o);
  for (f in l) h.setProperty(f, l[f]);
}
function cS(n) {
  return window.getComputedStyle(n);
}
class uS extends Jy {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = Iy));
  }
  readValueFromInstance(i, l) {
    if (Ts.has(l)) return this.projection?.isProjecting ? Od(l) : w5(i, l);
    {
      const o = cS(i),
        d = (ay(l) ? o.getPropertyValue(l) : o[l]) || 0;
      return typeof d == "string" ? d.trim() : d;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: l }) {
    return Qy(i, l);
  }
  build(i, l, o) {
    Lf(i, l, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, l, o) {
    return qf(i, l, o);
  }
}
const Wy = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function dS(n, i, l, o) {
  Iy(n, i, void 0, o);
  for (const d in i.attrs) n.setAttribute(Wy.has(d) ? d : $f(d), i.attrs[d]);
}
class fS extends Jy {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = gt));
  }
  getBaseTargetFromProps(i, l) {
    return i[l];
  }
  readValueFromInstance(i, l) {
    if (Ts.has(l)) {
      const o = Ny(l);
      return (o && o.default) || 0;
    }
    return ((l = Wy.has(l) ? l : $f(l)), i.getAttribute(l));
  }
  scrapeMotionValuesFromProps(i, l, o) {
    return $y(i, l, o);
  }
  build(i, l, o) {
    Vy(i, l, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(i, l, o, d) {
    dS(i, l, o, d);
  }
  mount(i) {
    ((this.isSVGTag = Hy(i.tagName)), super.mount(i));
  }
}
const hS = (n, i) =>
  Uf(n) ? new fS(i) : new uS(i, { allowProjection: n !== j.Fragment });
function gs(n, i, l) {
  const o = n.getProps();
  return Hf(o, i, l !== void 0 ? l : o.custom, n);
}
const Kd = (n) => Array.isArray(n);
function mS(n, i, l) {
  n.hasValue(i) ? n.getValue(i).set(l) : n.addValue(i, yi(l));
}
function pS(n) {
  return Kd(n) ? n[n.length - 1] || 0 : n;
}
function gS(n, i) {
  const l = gs(n, i);
  let { transitionEnd: o = {}, transition: d = {}, ...h } = l || {};
  h = { ...h, ...o };
  for (const f in h) {
    const x = pS(h[f]);
    mS(n, f, x);
  }
}
function xS(n) {
  return !!(vt(n) && n.add);
}
function Pd(n, i) {
  const l = n.getValue("willChange");
  if (xS(l)) return l.add(i);
  if (!l && an.WillChange) {
    const o = new an.WillChange("auto");
    (n.addValue("willChange", o), o.add(i));
  }
}
function eb(n) {
  return n.props[Gy];
}
const yS = (n) => n !== null;
function bS(n, { repeat: i, repeatType: l = "loop" }, o) {
  const d = n.filter(yS),
    h = i && l !== "loop" && i % 2 === 1 ? 0 : d.length - 1;
  return d[h];
}
const vS = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  wS = (n) => ({
    type: "spring",
    stiffness: 550,
    damping: n === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  jS = { type: "keyframes", duration: 0.8 },
  SS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  NS = (n, { keyframes: i }) =>
    i.length > 2
      ? jS
      : Ts.has(n)
        ? n.startsWith("scale")
          ? wS(i[1])
          : vS
        : SS;
function TS({
  when: n,
  delay: i,
  delayChildren: l,
  staggerChildren: o,
  staggerDirection: d,
  repeat: h,
  repeatType: f,
  repeatDelay: x,
  from: p,
  elapsed: g,
  ...y
}) {
  return !!Object.keys(y).length;
}
const Gf =
  (n, i, l, o = {}, d, h) =>
  (f) => {
    const x = Rf(o, n) || {},
      p = x.delay || o.delay || 0;
    let { elapsed: g = 0 } = o;
    g = g - Aa(p);
    const y = {
      keyframes: Array.isArray(l) ? l : [null, l],
      ease: "easeOut",
      velocity: i.getVelocity(),
      ...x,
      delay: -g,
      onUpdate: (w) => {
        (i.set(w), x.onUpdate && x.onUpdate(w));
      },
      onComplete: () => {
        (f(), x.onComplete && x.onComplete());
      },
      name: n,
      motionValue: i,
      element: h ? void 0 : d,
    };
    (TS(x) || Object.assign(y, NS(n, y)),
      y.duration && (y.duration = Aa(y.duration)),
      y.repeatDelay && (y.repeatDelay = Aa(y.repeatDelay)),
      y.from !== void 0 && (y.keyframes[0] = y.from));
    let b = !1;
    if (
      ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
        (Hd(y), y.delay === 0 && (b = !0)),
      (an.instantAnimations || an.skipAnimations) &&
        ((b = !0), Hd(y), (y.delay = 0)),
      (y.allowFlatten = !x.type && !x.ease),
      b && !h && i.get() !== void 0)
    ) {
      const w = bS(y.keyframes, x);
      if (w !== void 0) {
        Ye.update(() => {
          (y.onUpdate(w), y.onComplete());
        });
        return;
      }
    }
    return x.isSync ? new Go(y) : new Y5(y);
  };
function ES({ protectedKeys: n, needsAnimating: i }, l) {
  const o = n.hasOwnProperty(l) && i[l] !== !0;
  return ((i[l] = !1), o);
}
function tb(n, i, { delay: l = 0, transitionOverride: o, type: d } = {}) {
  let { transition: h = n.getDefaultTransition(), transitionEnd: f, ...x } = i;
  o && (h = o);
  const p = [],
    g = d && n.animationState && n.animationState.getState()[d];
  for (const y in x) {
    const b = n.getValue(y, n.latestValues[y] ?? null),
      w = x[y];
    if (w === void 0 || (g && ES(g, y))) continue;
    const T = { delay: l, ...Rf(h || {}, y) },
      R = b.get();
    if (
      R !== void 0 &&
      !b.isAnimating &&
      !Array.isArray(w) &&
      w === R &&
      !T.velocity
    )
      continue;
    let C = !1;
    if (window.MotionHandoffAnimation) {
      const _ = eb(n);
      if (_) {
        const V = window.MotionHandoffAnimation(_, y, Ye);
        V !== null && ((T.startTime = V), (C = !0));
      }
    }
    (Pd(n, y),
      b.start(
        Gf(y, b, w, n.shouldReduceMotion && wy.has(y) ? { type: !1 } : T, n, C),
      ));
    const D = b.animation;
    D && p.push(D);
  }
  return (
    f &&
      Promise.all(p).then(() => {
        Ye.update(() => {
          f && gS(n, f);
        });
      }),
    p
  );
}
function ab(n, i, l, o = 0, d = 1) {
  const h = Array.from(n)
      .sort((g, y) => g.sortNodePosition(y))
      .indexOf(i),
    f = n.size,
    x = (f - 1) * o;
  return typeof l == "function" ? l(h, f) : d === 1 ? h * o : x - h * o;
}
function Fd(n, i, l = {}) {
  const o = gs(n, i, l.type === "exit" ? n.presenceContext?.custom : void 0);
  let { transition: d = n.getDefaultTransition() || {} } = o || {};
  l.transitionOverride && (d = l.transitionOverride);
  const h = o ? () => Promise.all(tb(n, o, l)) : () => Promise.resolve(),
    f =
      n.variantChildren && n.variantChildren.size
        ? (p = 0) => {
            const {
              delayChildren: g = 0,
              staggerChildren: y,
              staggerDirection: b,
            } = d;
            return AS(n, i, p, g, y, b, l);
          }
        : () => Promise.resolve(),
    { when: x } = d;
  if (x) {
    const [p, g] = x === "beforeChildren" ? [h, f] : [f, h];
    return p().then(() => g());
  } else return Promise.all([h(), f(l.delay)]);
}
function AS(n, i, l = 0, o = 0, d = 0, h = 1, f) {
  const x = [];
  for (const p of n.variantChildren)
    (p.notify("AnimationStart", i),
      x.push(
        Fd(p, i, {
          ...f,
          delay:
            l +
            (typeof o == "function" ? 0 : o) +
            ab(n.variantChildren, p, o, d, h),
        }).then(() => p.notify("AnimationComplete", i)),
      ));
  return Promise.all(x);
}
function MS(n, i, l = {}) {
  n.notify("AnimationStart", i);
  let o;
  if (Array.isArray(i)) {
    const d = i.map((h) => Fd(n, h, l));
    o = Promise.all(d);
  } else if (typeof i == "string") o = Fd(n, i, l);
  else {
    const d = typeof i == "function" ? gs(n, i, l.custom) : i;
    o = Promise.all(tb(n, d, l));
  }
  return o.then(() => {
    n.notify("AnimationComplete", i);
  });
}
function nb(n, i) {
  if (!Array.isArray(i)) return !1;
  const l = i.length;
  if (l !== n.length) return !1;
  for (let o = 0; o < l; o++) if (i[o] !== n[o]) return !1;
  return !0;
}
const CS = Bf.length;
function ib(n) {
  if (!n) return;
  if (!n.isControllingVariants) {
    const l = n.parent ? ib(n.parent) || {} : {};
    return (n.props.initial !== void 0 && (l.initial = n.props.initial), l);
  }
  const i = {};
  for (let l = 0; l < CS; l++) {
    const o = Bf[l],
      d = n.props[o];
    (Bl(d) || d === !1) && (i[o] = d);
  }
  return i;
}
const DS = [...Of].reverse(),
  RS = Of.length;
function kS(n) {
  return (i) =>
    Promise.all(i.map(({ animation: l, options: o }) => MS(n, l, o)));
}
function zS(n) {
  let i = kS(n),
    l = Tg(),
    o = !0;
  const d = (p) => (g, y) => {
    const b = gs(n, y, p === "exit" ? n.presenceContext?.custom : void 0);
    if (b) {
      const { transition: w, transitionEnd: T, ...R } = b;
      g = { ...g, ...R, ...T };
    }
    return g;
  };
  function h(p) {
    i = p(n);
  }
  function f(p) {
    const { props: g } = n,
      y = ib(n.parent) || {},
      b = [],
      w = new Set();
    let T = {},
      R = 1 / 0;
    for (let D = 0; D < RS; D++) {
      const _ = DS[D],
        V = l[_],
        E = g[_] !== void 0 ? g[_] : y[_],
        Q = Bl(E),
        X = _ === p ? V.isActive : null;
      X === !1 && (R = D);
      let W = E === y[_] && E !== g[_] && Q;
      if (
        (W && o && n.manuallyAnimateOnMount && (W = !1),
        (V.protectedKeys = { ...T }),
        (!V.isActive && X === null) ||
          (!E && !V.prevProp) ||
          Xo(E) ||
          typeof E == "boolean")
      )
        continue;
      const P = _S(V.prevProp, E);
      let Z = P || (_ === p && V.isActive && !W && Q) || (D > R && Q),
        ie = !1;
      const I = Array.isArray(E) ? E : [E];
      let he = I.reduce(d(_), {});
      X === !1 && (he = {});
      const { prevResolvedValues: we = {} } = V,
        ze = { ...we, ...he },
        je = (K) => {
          ((Z = !0),
            w.has(K) && ((ie = !0), w.delete(K)),
            (V.needsAnimating[K] = !0));
          const ae = n.getValue(K);
          ae && (ae.liveStyle = !1);
        };
      for (const K in ze) {
        const ae = he[K],
          xe = we[K];
        if (T.hasOwnProperty(K)) continue;
        let Se = !1;
        (Kd(ae) && Kd(xe) ? (Se = !nb(ae, xe)) : (Se = ae !== xe),
          Se
            ? ae != null
              ? je(K)
              : w.add(K)
            : ae !== void 0 && w.has(K)
              ? je(K)
              : (V.protectedKeys[K] = !0));
      }
      ((V.prevProp = E),
        (V.prevResolvedValues = he),
        V.isActive && (T = { ...T, ...he }),
        o && n.blockInitialAnimation && (Z = !1));
      const ke = W && P;
      Z &&
        (!ke || ie) &&
        b.push(
          ...I.map((K) => {
            const ae = { type: _ };
            if (
              typeof K == "string" &&
              o &&
              !ke &&
              n.manuallyAnimateOnMount &&
              n.parent
            ) {
              const { parent: xe } = n,
                Se = gs(xe, K);
              if (xe.enteringChildren && Se) {
                const { delayChildren: M } = Se.transition || {};
                ae.delay = ab(xe.enteringChildren, n, M);
              }
            }
            return { animation: K, options: ae };
          }),
        );
    }
    if (w.size) {
      const D = {};
      if (typeof g.initial != "boolean") {
        const _ = gs(n, Array.isArray(g.initial) ? g.initial[0] : g.initial);
        _ && _.transition && (D.transition = _.transition);
      }
      (w.forEach((_) => {
        const V = n.getBaseTarget(_),
          E = n.getValue(_);
        (E && (E.liveStyle = !0), (D[_] = V ?? null));
      }),
        b.push({ animation: D }));
    }
    let C = !!b.length;
    return (
      o &&
        (g.initial === !1 || g.initial === g.animate) &&
        !n.manuallyAnimateOnMount &&
        (C = !1),
      (o = !1),
      C ? i(b) : Promise.resolve()
    );
  }
  function x(p, g) {
    if (l[p].isActive === g) return Promise.resolve();
    (n.variantChildren?.forEach((b) => b.animationState?.setActive(p, g)),
      (l[p].isActive = g));
    const y = f(p);
    for (const b in l) l[b].protectedKeys = {};
    return y;
  }
  return {
    animateChanges: f,
    setActive: x,
    setAnimateFunction: h,
    getState: () => l,
    reset: () => {
      l = Tg();
    },
  };
}
function _S(n, i) {
  return typeof i == "string" ? i !== n : Array.isArray(i) ? !nb(i, n) : !1;
}
function fi(n = !1) {
  return {
    isActive: n,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function Tg() {
  return {
    animate: fi(!0),
    whileInView: fi(),
    whileHover: fi(),
    whileTap: fi(),
    whileDrag: fi(),
    whileFocus: fi(),
    exit: fi(),
  };
}
class Gn {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
class OS extends Gn {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = zS(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Xo(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: l } = this.node.prevProps || {};
    i !== l && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let BS = 0;
class LS extends Gn {
  constructor() {
    (super(...arguments), (this.id = BS++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: l } = this.node.presenceContext,
      { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === o) return;
    const d = this.node.animationState.setActive("exit", !i);
    l &&
      !i &&
      d.then(() => {
        l(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: l } = this.node.presenceContext || {};
    (l && l(this.id), i && (this.unmount = i(this.id)));
  }
  unmount() {}
}
const VS = { animation: { Feature: OS }, exit: { Feature: LS } };
function Ll(n, i, l, o = { passive: !0 }) {
  return (n.addEventListener(i, l, o), () => n.removeEventListener(i, l));
}
function Pl(n) {
  return { point: { x: n.pageX, y: n.pageY } };
}
const US = (n) => (i) => _f(i) && n(i, Pl(i));
function Cl(n, i, l, o) {
  return Ll(n, i, US(l), o);
}
const sb = 1e-4,
  HS = 1 - sb,
  qS = 1 + sb,
  lb = 0.01,
  $S = 0 - lb,
  GS = 0 + lb;
function Rt(n) {
  return n.max - n.min;
}
function YS(n, i, l) {
  return Math.abs(n - i) <= l;
}
function Eg(n, i, l, o = 0.5) {
  ((n.origin = o),
    (n.originPoint = Ze(i.min, i.max, n.origin)),
    (n.scale = Rt(l) / Rt(i)),
    (n.translate = Ze(l.min, l.max, n.origin) - n.originPoint),
    ((n.scale >= HS && n.scale <= qS) || isNaN(n.scale)) && (n.scale = 1),
    ((n.translate >= $S && n.translate <= GS) || isNaN(n.translate)) &&
      (n.translate = 0));
}
function Dl(n, i, l, o) {
  (Eg(n.x, i.x, l.x, o ? o.originX : void 0),
    Eg(n.y, i.y, l.y, o ? o.originY : void 0));
}
function Ag(n, i, l) {
  ((n.min = l.min + i.min), (n.max = n.min + Rt(i)));
}
function XS(n, i, l) {
  (Ag(n.x, i.x, l.x), Ag(n.y, i.y, l.y));
}
function Mg(n, i, l) {
  ((n.min = i.min - l.min), (n.max = n.min + Rt(i)));
}
function Oo(n, i, l) {
  (Mg(n.x, i.x, l.x), Mg(n.y, i.y, l.y));
}
function ra(n) {
  return [n("x"), n("y")];
}
const rb = ({ current: n }) => (n ? n.ownerDocument.defaultView : null),
  Cg = (n, i) => Math.abs(n - i);
function KS(n, i) {
  const l = Cg(n.x, i.x),
    o = Cg(n.y, i.y);
  return Math.sqrt(l ** 2 + o ** 2);
}
class ob {
  constructor(
    i,
    l,
    {
      transformPagePoint: o,
      contextWindow: d = window,
      dragSnapToOrigin: h = !1,
      distanceThreshold: f = 3,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const w = bd(this.lastMoveEventInfo, this.history),
          T = this.startEvent !== null,
          R = KS(w.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!T && !R) return;
        const { point: C } = w,
          { timestamp: D } = Et;
        this.history.push({ ...C, timestamp: D });
        const { onStart: _, onMove: V } = this.handlers;
        (T ||
          (_ && _(this.lastMoveEvent, w),
          (this.startEvent = this.lastMoveEvent)),
          V && V(this.lastMoveEvent, w));
      }),
      (this.handlePointerMove = (w, T) => {
        ((this.lastMoveEvent = w),
          (this.lastMoveEventInfo = yd(T, this.transformPagePoint)),
          Ye.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (w, T) => {
        this.end();
        const { onEnd: R, onSessionEnd: C, resumeAnimation: D } = this.handlers;
        if (
          (this.dragSnapToOrigin && D && D(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const _ = bd(
          w.type === "pointercancel"
            ? this.lastMoveEventInfo
            : yd(T, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && R && R(w, _), C && C(w, _));
      }),
      !_f(i))
    )
      return;
    ((this.dragSnapToOrigin = h),
      (this.handlers = l),
      (this.transformPagePoint = o),
      (this.distanceThreshold = f),
      (this.contextWindow = d || window));
    const x = Pl(i),
      p = yd(x, this.transformPagePoint),
      { point: g } = p,
      { timestamp: y } = Et;
    this.history = [{ ...g, timestamp: y }];
    const { onSessionStart: b } = l;
    (b && b(i, bd(p, this.history)),
      (this.removeListeners = Gl(
        Cl(this.contextWindow, "pointermove", this.handlePointerMove),
        Cl(this.contextWindow, "pointerup", this.handlePointerUp),
        Cl(this.contextWindow, "pointercancel", this.handlePointerUp),
      )));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(), nn(this.updatePoint));
  }
}
function yd(n, i) {
  return i ? { point: i(n.point) } : n;
}
function Dg(n, i) {
  return { x: n.x - i.x, y: n.y - i.y };
}
function bd({ point: n }, i) {
  return {
    point: n,
    delta: Dg(n, cb(i)),
    offset: Dg(n, PS(i)),
    velocity: FS(i, 0.1),
  };
}
function PS(n) {
  return n[0];
}
function cb(n) {
  return n[n.length - 1];
}
function FS(n, i) {
  if (n.length < 2) return { x: 0, y: 0 };
  let l = n.length - 1,
    o = null;
  const d = cb(n);
  for (; l >= 0 && ((o = n[l]), !(d.timestamp - o.timestamp > Aa(i))); ) l--;
  if (!o) return { x: 0, y: 0 };
  const h = oa(d.timestamp - o.timestamp);
  if (h === 0) return { x: 0, y: 0 };
  const f = { x: (d.x - o.x) / h, y: (d.y - o.y) / h };
  return (f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f);
}
function QS(n, { min: i, max: l }, o) {
  return (
    i !== void 0 && n < i
      ? (n = o ? Ze(i, n, o.min) : Math.max(n, i))
      : l !== void 0 && n > l && (n = o ? Ze(l, n, o.max) : Math.min(n, l)),
    n
  );
}
function Rg(n, i, l) {
  return {
    min: i !== void 0 ? n.min + i : void 0,
    max: l !== void 0 ? n.max + l - (n.max - n.min) : void 0,
  };
}
function ZS(n, { top: i, left: l, bottom: o, right: d }) {
  return { x: Rg(n.x, l, d), y: Rg(n.y, i, o) };
}
function kg(n, i) {
  let l = i.min - n.min,
    o = i.max - n.max;
  return (
    i.max - i.min < n.max - n.min && ([l, o] = [o, l]),
    { min: l, max: o }
  );
}
function JS(n, i) {
  return { x: kg(n.x, i.x), y: kg(n.y, i.y) };
}
function IS(n, i) {
  let l = 0.5;
  const o = Rt(n),
    d = Rt(i);
  return (
    d > o
      ? (l = zl(i.min, i.max - o, n.min))
      : o > d && (l = zl(n.min, n.max - d, i.min)),
    tn(0, 1, l)
  );
}
function WS(n, i) {
  const l = {};
  return (
    i.min !== void 0 && (l.min = i.min - n.min),
    i.max !== void 0 && (l.max = i.max - n.min),
    l
  );
}
const Qd = 0.35;
function eN(n = Qd) {
  return (
    n === !1 ? (n = 0) : n === !0 && (n = Qd),
    { x: zg(n, "left", "right"), y: zg(n, "top", "bottom") }
  );
}
function zg(n, i, l) {
  return { min: _g(n, i), max: _g(n, l) };
}
function _g(n, i) {
  return typeof n == "number" ? n : n[i] || 0;
}
const tN = new WeakMap();
class aN {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = gt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: l = !1, distanceThreshold: o } = {}) {
    const { presenceContext: d } = this.visualElement;
    if (d && d.isPresent === !1) return;
    const h = (b) => {
        const { dragSnapToOrigin: w } = this.getProps();
        (w ? this.pauseAnimation() : this.stopAnimation(),
          l && this.snapToCursor(Pl(b).point));
      },
      f = (b, w) => {
        const { drag: T, dragPropagation: R, onDragStart: C } = this.getProps();
        if (
          T &&
          !R &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = lj(T)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = w),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          ra((_) => {
            let V = this.getAxisMotionValue(_).get() || 0;
            if (Ma.test(V)) {
              const { projection: E } = this.visualElement;
              if (E && E.layout) {
                const Q = E.layout.layoutBox[_];
                Q && (V = Rt(Q) * (parseFloat(V) / 100));
              }
            }
            this.originPoint[_] = V;
          }),
          C && Ye.postRender(() => C(b, w)),
          Pd(this.visualElement, "transform"));
        const { animationState: D } = this.visualElement;
        D && D.setActive("whileDrag", !0);
      },
      x = (b, w) => {
        ((this.latestPointerEvent = b), (this.latestPanInfo = w));
        const {
          dragPropagation: T,
          dragDirectionLock: R,
          onDirectionLock: C,
          onDrag: D,
        } = this.getProps();
        if (!T && !this.openDragLock) return;
        const { offset: _ } = w;
        if (R && this.currentDirection === null) {
          ((this.currentDirection = nN(_)),
            this.currentDirection !== null && C && C(this.currentDirection));
          return;
        }
        (this.updateAxis("x", w.point, _),
          this.updateAxis("y", w.point, _),
          this.visualElement.render(),
          D && D(b, w));
      },
      p = (b, w) => {
        ((this.latestPointerEvent = b),
          (this.latestPanInfo = w),
          this.stop(b, w),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      g = () =>
        ra(
          (b) =>
            this.getAnimationState(b) === "paused" &&
            this.getAxisMotionValue(b).animation?.play(),
        ),
      { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new ob(
      i,
      {
        onSessionStart: h,
        onStart: f,
        onMove: x,
        onSessionEnd: p,
        resumeAnimation: g,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: y,
        distanceThreshold: o,
        contextWindow: rb(this.visualElement),
      },
    );
  }
  stop(i, l) {
    const o = i || this.latestPointerEvent,
      d = l || this.latestPanInfo,
      h = this.isDragging;
    if ((this.cancel(), !h || !d || !o)) return;
    const { velocity: f } = d;
    this.startAnimation(f);
    const { onDragEnd: x } = this.getProps();
    x && Ye.postRender(() => x(o, d));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: l } = this.visualElement;
    (i && (i.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0));
    const { dragPropagation: o } = this.getProps();
    (!o &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      l && l.setActive("whileDrag", !1));
  }
  updateAxis(i, l, o) {
    const { drag: d } = this.getProps();
    if (!o || !yo(i, d, this.currentDirection)) return;
    const h = this.getAxisMotionValue(i);
    let f = this.originPoint[i] + o[i];
    (this.constraints &&
      this.constraints[i] &&
      (f = QS(f, this.constraints[i], this.elastic[i])),
      h.set(f));
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: l } = this.getProps(),
      o =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      d = this.constraints;
    (i && ds(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && o
        ? (this.constraints = ZS(o.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = eN(l)),
      d !== this.constraints &&
        o &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        ra((h) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(h) &&
            (this.constraints[h] = WS(o.layoutBox[h], this.constraints[h]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: l } = this.getProps();
    if (!i || !ds(i)) return !1;
    const o = i.current,
      { projection: d } = this.visualElement;
    if (!d || !d.layout) return !1;
    const h = iS(o, d.root, this.visualElement.getTransformPagePoint());
    let f = JS(d.layout.layoutBox, h);
    if (l) {
      const x = l(tS(f));
      ((this.hasMutatedConstraints = !!x), x && (f = Ky(x)));
    }
    return f;
  }
  startAnimation(i) {
    const {
        drag: l,
        dragMomentum: o,
        dragElastic: d,
        dragTransition: h,
        dragSnapToOrigin: f,
        onDragTransitionEnd: x,
      } = this.getProps(),
      p = this.constraints || {},
      g = ra((y) => {
        if (!yo(y, l, this.currentDirection)) return;
        let b = (p && p[y]) || {};
        f && (b = { min: 0, max: 0 });
        const w = d ? 200 : 1e6,
          T = d ? 40 : 1e7,
          R = {
            type: "inertia",
            velocity: o ? i[y] : 0,
            bounceStiffness: w,
            bounceDamping: T,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...h,
            ...b,
          };
        return this.startAxisValueAnimation(y, R);
      });
    return Promise.all(g).then(x);
  }
  startAxisValueAnimation(i, l) {
    const o = this.getAxisMotionValue(i);
    return (
      Pd(this.visualElement, i),
      o.start(Gf(i, o, 0, l, this.visualElement, !1))
    );
  }
  stopAnimation() {
    ra((i) => this.getAxisMotionValue(i).stop());
  }
  pauseAnimation() {
    ra((i) => this.getAxisMotionValue(i).animation?.pause());
  }
  getAnimationState(i) {
    return this.getAxisMotionValue(i).animation?.state;
  }
  getAxisMotionValue(i) {
    const l = `_drag${i.toUpperCase()}`,
      o = this.visualElement.getProps(),
      d = o[l];
    return (
      d ||
      this.visualElement.getValue(i, (o.initial ? o.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    ra((l) => {
      const { drag: o } = this.getProps();
      if (!yo(l, o, this.currentDirection)) return;
      const { projection: d } = this.visualElement,
        h = this.getAxisMotionValue(l);
      if (d && d.layout) {
        const { min: f, max: x } = d.layout.layoutBox[l];
        h.set(i[l] - Ze(f, x, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: l } = this.getProps(),
      { projection: o } = this.visualElement;
    if (!ds(l) || !o || !this.constraints) return;
    this.stopAnimation();
    const d = { x: 0, y: 0 };
    ra((f) => {
      const x = this.getAxisMotionValue(f);
      if (x && this.constraints !== !1) {
        const p = x.get();
        d[f] = IS({ min: p, max: p }, this.constraints[f]);
      }
    });
    const { transformTemplate: h } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = h ? h({}, "") : "none"),
      o.root && o.root.updateScroll(),
      o.updateLayout(),
      this.resolveConstraints(),
      ra((f) => {
        if (!yo(f, i, null)) return;
        const x = this.getAxisMotionValue(f),
          { min: p, max: g } = this.constraints[f];
        x.set(Ze(p, g, d[f]));
      }));
  }
  addListeners() {
    if (!this.visualElement.current) return;
    tN.set(this.visualElement, this);
    const i = this.visualElement.current,
      l = Cl(i, "pointerdown", (p) => {
        const { drag: g, dragListener: y = !0 } = this.getProps();
        g && y && this.start(p);
      }),
      o = () => {
        const { dragConstraints: p } = this.getProps();
        ds(p) && p.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: d } = this.visualElement,
      h = d.addEventListener("measure", o);
    (d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()),
      Ye.read(o));
    const f = Ll(window, "resize", () => this.scalePositionWithinConstraints()),
      x = d.addEventListener(
        "didUpdate",
        ({ delta: p, hasLayoutChanged: g }) => {
          this.isDragging &&
            g &&
            (ra((y) => {
              const b = this.getAxisMotionValue(y);
              b &&
                ((this.originPoint[y] += p[y].translate),
                b.set(b.get() + p[y].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (f(), l(), h(), x && x());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: l = !1,
        dragDirectionLock: o = !1,
        dragPropagation: d = !1,
        dragConstraints: h = !1,
        dragElastic: f = Qd,
        dragMomentum: x = !0,
      } = i;
    return {
      ...i,
      drag: l,
      dragDirectionLock: o,
      dragPropagation: d,
      dragConstraints: h,
      dragElastic: f,
      dragMomentum: x,
    };
  }
}
function yo(n, i, l) {
  return (i === !0 || i === n) && (l === null || l === n);
}
function nN(n, i = 10) {
  let l = null;
  return (Math.abs(n.y) > i ? (l = "y") : Math.abs(n.x) > i && (l = "x"), l);
}
class iN extends Gn {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = ca),
      (this.removeListeners = ca),
      (this.controls = new aN(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ca));
  }
  unmount() {
    (this.removeGroupControls(), this.removeListeners());
  }
}
const Og = (n) => (i, l) => {
  n && Ye.postRender(() => n(i, l));
};
class sN extends Gn {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = ca));
  }
  onPointerDown(i) {
    this.session = new ob(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: rb(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: l,
      onPan: o,
      onPanEnd: d,
    } = this.node.getProps();
    return {
      onSessionStart: Og(i),
      onStart: Og(l),
      onMove: o,
      onEnd: (h, f) => {
        (delete this.session, d && Ye.postRender(() => d(h, f)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Cl(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
const Ao = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
let vd = !1;
class lN extends j.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: l,
        switchLayoutGroup: o,
        layoutId: d,
      } = this.props,
      { projection: h } = i;
    (h &&
      (l.group && l.group.add(h),
      o && o.register && d && o.register(h),
      vd && h.root.didUpdate(),
      h.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      h.setOptions({
        ...h.options,
        onExitComplete: () => this.safeToRemove(),
      })),
      (Ao.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: l,
        visualElement: o,
        drag: d,
        isPresent: h,
      } = this.props,
      { projection: f } = o;
    return (
      f &&
        ((f.isPresent = h),
        (vd = !0),
        d || i.layoutDependency !== l || l === void 0 || i.isPresent !== h
          ? f.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== h &&
          (h
            ? f.promote()
            : f.relegate() ||
              Ye.postRender(() => {
                const x = f.getStack();
                (!x || !x.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      zf.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: l,
        switchLayoutGroup: o,
      } = this.props,
      { projection: d } = i;
    ((vd = !0),
      d &&
        (d.scheduleCheckAfterUnmount(),
        l && l.group && l.group.remove(d),
        o && o.deregister && o.deregister(d)));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function ub(n) {
  const [i, l] = ky(),
    o = j.useContext(hf);
  return r.jsx(lN, {
    ...n,
    layoutGroup: o,
    switchLayoutGroup: j.useContext(Yy),
    isPresent: i,
    safeToRemove: l,
  });
}
function rN(n, i, l) {
  const o = vt(n) ? n : yi(n);
  return (o.start(Gf("", o, i, l)), o.animation);
}
const oN = (n, i) => n.depth - i.depth;
class cN {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (gf(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (xf(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(oN),
      (this.isDirty = !1),
      this.children.forEach(i));
  }
}
function uN(n, i) {
  const l = Ut.now(),
    o = ({ timestamp: d }) => {
      const h = d - l;
      h >= i && (nn(o), n(h - i));
    };
  return (Ye.setup(o, !0), () => nn(o));
}
const db = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  dN = db.length,
  Bg = (n) => (typeof n == "string" ? parseFloat(n) : n),
  Lg = (n) => typeof n == "number" || fe.test(n);
function fN(n, i, l, o, d, h) {
  d
    ? ((n.opacity = Ze(0, l.opacity ?? 1, hN(o))),
      (n.opacityExit = Ze(i.opacity ?? 1, 0, mN(o))))
    : h && (n.opacity = Ze(i.opacity ?? 1, l.opacity ?? 1, o));
  for (let f = 0; f < dN; f++) {
    const x = `border${db[f]}Radius`;
    let p = Vg(i, x),
      g = Vg(l, x);
    if (p === void 0 && g === void 0) continue;
    (p || (p = 0),
      g || (g = 0),
      p === 0 || g === 0 || Lg(p) === Lg(g)
        ? ((n[x] = Math.max(Ze(Bg(p), Bg(g), o), 0)),
          (Ma.test(g) || Ma.test(p)) && (n[x] += "%"))
        : (n[x] = g));
  }
  (i.rotate || l.rotate) && (n.rotate = Ze(i.rotate || 0, l.rotate || 0, o));
}
function Vg(n, i) {
  return n[i] !== void 0 ? n[i] : n.borderRadius;
}
const hN = fb(0, 0.5, Zx),
  mN = fb(0.5, 0.95, ca);
function fb(n, i, l) {
  return (o) => (o < n ? 0 : o > i ? 1 : l(zl(n, i, o)));
}
function Ug(n, i) {
  ((n.min = i.min), (n.max = i.max));
}
function ya(n, i) {
  (Ug(n.x, i.x), Ug(n.y, i.y));
}
function Hg(n, i) {
  ((n.translate = i.translate),
    (n.scale = i.scale),
    (n.originPoint = i.originPoint),
    (n.origin = i.origin));
}
function qg(n, i, l, o, d) {
  return (
    (n -= i),
    (n = _o(n, 1 / l, o)),
    d !== void 0 && (n = _o(n, 1 / d, o)),
    n
  );
}
function pN(n, i = 0, l = 1, o = 0.5, d, h = n, f = n) {
  if (
    (Ma.test(i) &&
      ((i = parseFloat(i)), (i = Ze(f.min, f.max, i / 100) - f.min)),
    typeof i != "number")
  )
    return;
  let x = Ze(h.min, h.max, o);
  (n === h && (x -= i),
    (n.min = qg(n.min, i, l, x, d)),
    (n.max = qg(n.max, i, l, x, d)));
}
function $g(n, i, [l, o, d], h, f) {
  pN(n, i[l], i[o], i[d], i.scale, h, f);
}
const gN = ["x", "scaleX", "originX"],
  xN = ["y", "scaleY", "originY"];
function Gg(n, i, l, o) {
  ($g(n.x, i, gN, l ? l.x : void 0, o ? o.x : void 0),
    $g(n.y, i, xN, l ? l.y : void 0, o ? o.y : void 0));
}
function Yg(n) {
  return n.translate === 0 && n.scale === 1;
}
function hb(n) {
  return Yg(n.x) && Yg(n.y);
}
function Xg(n, i) {
  return n.min === i.min && n.max === i.max;
}
function yN(n, i) {
  return Xg(n.x, i.x) && Xg(n.y, i.y);
}
function Kg(n, i) {
  return (
    Math.round(n.min) === Math.round(i.min) &&
    Math.round(n.max) === Math.round(i.max)
  );
}
function mb(n, i) {
  return Kg(n.x, i.x) && Kg(n.y, i.y);
}
function Pg(n) {
  return Rt(n.x) / Rt(n.y);
}
function Fg(n, i) {
  return (
    n.translate === i.translate &&
    n.scale === i.scale &&
    n.originPoint === i.originPoint
  );
}
class bN {
  constructor() {
    this.members = [];
  }
  add(i) {
    (gf(this.members, i), i.scheduleRender());
  }
  remove(i) {
    if (
      (xf(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const l = this.members[this.members.length - 1];
      l && this.promote(l);
    }
  }
  relegate(i) {
    const l = this.members.findIndex((d) => i === d);
    if (l === 0) return !1;
    let o;
    for (let d = l; d >= 0; d--) {
      const h = this.members[d];
      if (h.isPresent !== !1) {
        o = h;
        break;
      }
    }
    return o ? (this.promote(o), !0) : !1;
  }
  promote(i, l) {
    const o = this.lead;
    if (i !== o && ((this.prevLead = o), (this.lead = i), i.show(), o)) {
      (o.instance && o.scheduleRender(),
        i.scheduleRender(),
        (i.resumeFrom = o),
        l && (i.resumeFrom.preserveOpacity = !0),
        o.snapshot &&
          ((i.snapshot = o.snapshot),
          (i.snapshot.latestValues = o.animationValues || o.latestValues)),
        i.root && i.root.isUpdating && (i.isLayoutDirty = !0));
      const { crossfade: d } = i.options;
      d === !1 && o.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      const { options: l, resumingFrom: o } = i;
      (l.onExitComplete && l.onExitComplete(),
        o && o.options.onExitComplete && o.options.onExitComplete());
    });
  }
  scheduleRender() {
    this.members.forEach((i) => {
      i.instance && i.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function vN(n, i, l) {
  let o = "";
  const d = n.x.translate / i.x,
    h = n.y.translate / i.y,
    f = l?.z || 0;
  if (
    ((d || h || f) && (o = `translate3d(${d}px, ${h}px, ${f}px) `),
    (i.x !== 1 || i.y !== 1) && (o += `scale(${1 / i.x}, ${1 / i.y}) `),
    l)
  ) {
    const {
      transformPerspective: g,
      rotate: y,
      rotateX: b,
      rotateY: w,
      skewX: T,
      skewY: R,
    } = l;
    (g && (o = `perspective(${g}px) ${o}`),
      y && (o += `rotate(${y}deg) `),
      b && (o += `rotateX(${b}deg) `),
      w && (o += `rotateY(${w}deg) `),
      T && (o += `skewX(${T}deg) `),
      R && (o += `skewY(${R}deg) `));
  }
  const x = n.x.scale * i.x,
    p = n.y.scale * i.y;
  return ((x !== 1 || p !== 1) && (o += `scale(${x}, ${p})`), o || "none");
}
const wd = ["", "X", "Y", "Z"],
  wN = 1e3;
let jN = 0;
function jd(n, i, l, o) {
  const { latestValues: d } = i;
  d[n] && ((l[n] = d[n]), i.setStaticValue(n, 0), o && (o[n] = 0));
}
function pb(n) {
  if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
  const { visualElement: i } = n.options;
  if (!i) return;
  const l = eb(i);
  if (window.MotionHasOptimisedAnimation(l, "transform")) {
    const { layout: d, layoutId: h } = n.options;
    window.MotionCancelOptimisedAnimation(l, "transform", Ye, !(d || h));
  }
  const { parent: o } = n;
  o && !o.hasCheckedOptimisedAppear && pb(o);
}
function gb({
  attachResizeListener: n,
  defaultParent: i,
  measureScroll: l,
  checkIsScrollRoot: o,
  resetTransform: d,
}) {
  return class {
    constructor(f = {}, x = i?.()) {
      ((this.id = jN++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(TN),
            this.nodes.forEach(CN),
            this.nodes.forEach(DN),
            this.nodes.forEach(EN));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = f),
        (this.root = x ? x.root || x : this),
        (this.path = x ? [...x.path, x] : []),
        (this.parent = x),
        (this.depth = x ? x.depth + 1 : 0));
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new cN());
    }
    addEventListener(f, x) {
      return (
        this.eventHandlers.has(f) || this.eventHandlers.set(f, new vf()),
        this.eventHandlers.get(f).add(x)
      );
    }
    notifyListeners(f, ...x) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...x);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    mount(f) {
      if (this.instance) return;
      ((this.isSVG = Ry(f) && !fj(f)), (this.instance = f));
      const { layoutId: x, layout: p, visualElement: g } = this.options;
      if (
        (g && !g.current && g.mount(f),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || x) && (this.isLayoutDirty = !0),
        n)
      ) {
        let y,
          b = 0;
        const w = () => (this.root.updateBlockedByResize = !1);
        (Ye.read(() => {
          b = window.innerWidth;
        }),
          n(f, () => {
            const T = window.innerWidth;
            T !== b &&
              ((b = T),
              (this.root.updateBlockedByResize = !0),
              y && y(),
              (y = uN(w, 250)),
              Ao.hasAnimatedSinceResize &&
                ((Ao.hasAnimatedSinceResize = !1), this.nodes.forEach(Jg)));
          }));
      }
      (x && this.root.registerSharedNode(x, this),
        this.options.animate !== !1 &&
          g &&
          (x || p) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: y,
              hasLayoutChanged: b,
              hasRelativeLayoutChanged: w,
              layout: T,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const R =
                  this.options.transition || g.getDefaultTransition() || ON,
                { onLayoutAnimationStart: C, onLayoutAnimationComplete: D } =
                  g.getProps(),
                _ = !this.targetLayout || !mb(this.targetLayout, T),
                V = !b && w;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                V ||
                (b && (_ || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const E = { ...Rf(R, "layout"), onPlay: C, onComplete: D };
                ((g.shouldReduceMotion || this.options.layoutRoot) &&
                  ((E.delay = 0), (E.type = !1)),
                  this.startAnimation(E),
                  this.setAnimationOrigin(y, V));
              } else
                (b || Jg(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = T;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const f = this.getStack();
      (f && f.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        nn(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(RN),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          pb(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const b = this.path[y];
        ((b.shouldResetTransform = !0),
          b.updateScroll("snapshot"),
          b.options.layoutRoot && b.willUpdate(!1));
      }
      const { layoutId: x, layout: p } = this.options;
      if (x === void 0 && !p) return;
      const g = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = g
        ? g(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        f && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        (this.unblockUpdate(),
          this.clearAllSnapshots(),
          this.nodes.forEach(Qg));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Zg);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(MN),
            this.nodes.forEach(SN),
            this.nodes.forEach(NN))
          : this.nodes.forEach(Zg),
        this.clearAllSnapshots());
      const x = Ut.now();
      ((Et.delta = tn(0, 1e3 / 60, x - Et.timestamp)),
        (Et.timestamp = x),
        (Et.isProcessing = !0),
        ud.update.process(Et),
        ud.preRender.process(Et),
        ud.render.process(Et),
        (Et.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), zf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(AN), this.sharedNodes.forEach(kN));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        Ye.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Ye.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !Rt(this.snapshot.measuredBox.x) &&
          !Rt(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++) this.path[p].updateScroll();
      const f = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        (this.layoutCorrected = gt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: x } = this.options;
      x &&
        x.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          f ? f.layoutBox : void 0,
        );
    }
    updateScroll(f = "measure") {
      let x = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === f &&
          (x = !1),
        x && this.instance)
      ) {
        const p = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: l(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p,
        };
      }
    }
    resetTransform() {
      if (!d) return;
      const f =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        x = this.projectionDelta && !hb(this.projectionDelta),
        p = this.getTransformTemplate(),
        g = p ? p(this.latestValues, "") : void 0,
        y = g !== this.prevTransformTemplateValue;
      f &&
        this.instance &&
        (x || hi(this.latestValues) || y) &&
        (d(this.instance, g),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(f = !0) {
      const x = this.measurePageBox();
      let p = this.removeElementScroll(x);
      return (
        f && (p = this.removeTransform(p)),
        BN(p),
        {
          animationId: this.root.animationId,
          measuredBox: x,
          layoutBox: p,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f) return gt();
      const x = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(LN))) {
        const { scroll: g } = this.root;
        g && (fs(x.x, g.offset.x), fs(x.y, g.offset.y));
      }
      return x;
    }
    removeElementScroll(f) {
      const x = gt();
      if ((ya(x, f), this.scroll?.wasRoot)) return x;
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p],
          { scroll: y, options: b } = g;
        g !== this.root &&
          y &&
          b.layoutScroll &&
          (y.wasRoot && ya(x, f), fs(x.x, y.offset.x), fs(x.y, y.offset.y));
      }
      return x;
    }
    applyTransform(f, x = !1) {
      const p = gt();
      ya(p, f);
      for (let g = 0; g < this.path.length; g++) {
        const y = this.path[g];
        (!x &&
          y.options.layoutScroll &&
          y.scroll &&
          y !== y.root &&
          hs(p, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
          hi(y.latestValues) && hs(p, y.latestValues));
      }
      return (hi(this.latestValues) && hs(p, this.latestValues), p);
    }
    removeTransform(f) {
      const x = gt();
      ya(x, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        if (!g.instance || !hi(g.latestValues)) continue;
        Gd(g.latestValues) && g.updateSnapshot();
        const y = gt(),
          b = g.measurePageBox();
        (ya(y, b),
          Gg(x, g.latestValues, g.snapshot ? g.snapshot.layoutBox : void 0, y));
      }
      return (hi(this.latestValues) && Gg(x, this.latestValues), x);
    }
    setTargetDelta(f) {
      ((this.targetDelta = f),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Et.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const x = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = x.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = x.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = x.isSharedProjectionDirty));
      const p = !!this.resumingFrom || this !== x;
      if (
        !(
          f ||
          (p && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          this.parent?.isProjectionDirty ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: y, layoutId: b } = this.options;
      if (!this.layout || !(y || b)) return;
      this.resolvedRelativeTargetAt = Et.timestamp;
      const w = this.getClosestProjectingParent();
      (w &&
        this.linkedParentVersion !== w.layoutVersion &&
        !w.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (w && w.layout
            ? this.createRelativeTarget(
                w,
                this.layout.layoutBox,
                w.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = gt()), (this.targetWithTransforms = gt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              XS(this.target, this.relativeTarget, this.relativeParent.target))
            : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : ya(this.target, this.layout.layoutBox),
                Fy(this.target, this.targetDelta))
              : ya(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            w &&
            !!w.resumingFrom == !!this.resumingFrom &&
            !w.options.layoutScroll &&
            w.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(w, this.target, w.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Gd(this.parent.latestValues) ||
          Py(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(f, x, p) {
      ((this.relativeParent = f),
        (this.linkedParentVersion = f.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = gt()),
        (this.relativeTargetOrigin = gt()),
        Oo(this.relativeTargetOrigin, x, p),
        ya(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(),
        x = !!this.resumingFrom || this !== f;
      let p = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1),
        x &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (p = !1),
        this.resolvedRelativeTargetAt === Et.timestamp && (p = !1),
        p)
      )
        return;
      const { layout: g, layoutId: y } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(g || y))
      )
        return;
      ya(this.layoutCorrected, this.layout.layoutBox);
      const b = this.treeScale.x,
        w = this.treeScale.y;
      (nS(this.layoutCorrected, this.treeScale, this.path, x),
        f.layout &&
          !f.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((f.target = f.layout.layoutBox), (f.targetWithTransforms = gt())));
      const { target: T } = f;
      if (!T) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Hg(this.prevProjectionDelta.x, this.projectionDelta.x),
          Hg(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Dl(this.projectionDelta, this.layoutCorrected, T, this.latestValues),
        (this.treeScale.x !== b ||
          this.treeScale.y !== w ||
          !Fg(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Fg(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", T)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if ((this.options.visualElement?.scheduleRender(), f)) {
        const x = this.getStack();
        x && x.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = ms()),
        (this.projectionDelta = ms()),
        (this.projectionDeltaWithTransform = ms()));
    }
    setAnimationOrigin(f, x = !1) {
      const p = this.snapshot,
        g = p ? p.latestValues : {},
        y = { ...this.latestValues },
        b = ms();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !x));
      const w = gt(),
        T = p ? p.source : void 0,
        R = this.layout ? this.layout.source : void 0,
        C = T !== R,
        D = this.getStack(),
        _ = !D || D.members.length <= 1,
        V = !!(C && !_ && this.options.crossfade === !0 && !this.path.some(_N));
      this.animationProgress = 0;
      let E;
      ((this.mixTargetDelta = (Q) => {
        const X = Q / 1e3;
        (Ig(b.x, f.x, X),
          Ig(b.y, f.y, X),
          this.setTargetDelta(b),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Oo(w, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            zN(this.relativeTarget, this.relativeTargetOrigin, w, X),
            E && yN(this.relativeTarget, E) && (this.isProjectionDirty = !1),
            E || (E = gt()),
            ya(E, this.relativeTarget)),
          C &&
            ((this.animationValues = y), fN(y, g, this.latestValues, X, V, _)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = X));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(f) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (nn(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = Ye.update(() => {
          ((Ao.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = yi(0)),
            (this.currentAnimation = rN(this.motionValue, [0, 1e3], {
              ...f,
              velocity: 0,
              isSync: !0,
              onUpdate: (x) => {
                (this.mixTargetDelta(x), f.onUpdate && f.onUpdate(x));
              },
              onStop: () => {},
              onComplete: () => {
                (f.onComplete && f.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const f = this.getStack();
      (f && f.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(wN),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const f = this.getLead();
      let {
        targetWithTransforms: x,
        target: p,
        layout: g,
        latestValues: y,
      } = f;
      if (!(!x || !p || !g)) {
        if (
          this !== f &&
          this.layout &&
          g &&
          xb(this.options.animationType, this.layout.layoutBox, g.layoutBox)
        ) {
          p = this.target || gt();
          const b = Rt(this.layout.layoutBox.x);
          ((p.x.min = f.target.x.min), (p.x.max = p.x.min + b));
          const w = Rt(this.layout.layoutBox.y);
          ((p.y.min = f.target.y.min), (p.y.max = p.y.min + w));
        }
        (ya(x, p),
          hs(x, y),
          Dl(this.projectionDeltaWithTransform, this.layoutCorrected, x, y));
      }
    }
    registerSharedNode(f, x) {
      (this.sharedNodes.has(f) || this.sharedNodes.set(f, new bN()),
        this.sharedNodes.get(f).add(x));
      const g = x.options.initialPromotionConfig;
      x.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity:
          g && g.shouldPreserveFollowOpacity
            ? g.shouldPreserveFollowOpacity(x)
            : void 0,
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f) return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: x, preserveFollowOpacity: p } = {}) {
      const g = this.getStack();
      (g && g.promote(this, p),
        f && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        x && this.setOptions({ transition: x }));
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f) return;
      let x = !1;
      const { latestValues: p } = f;
      if (
        ((p.z ||
          p.rotate ||
          p.rotateX ||
          p.rotateY ||
          p.rotateZ ||
          p.skewX ||
          p.skewY) &&
          (x = !0),
        !x)
      )
        return;
      const g = {};
      p.z && jd("z", f, g, this.animationValues);
      for (let y = 0; y < wd.length; y++)
        (jd(`rotate${wd[y]}`, f, g, this.animationValues),
          jd(`skew${wd[y]}`, f, g, this.animationValues));
      f.render();
      for (const y in g)
        (f.setStaticValue(y, g[y]),
          this.animationValues && (this.animationValues[y] = g[y]));
      f.scheduleRender();
    }
    applyProjectionStyles(f, x) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (f.visibility = ""),
          (f.opacity = ""),
          (f.pointerEvents = Eo(x?.pointerEvents) || ""),
          (f.transform = p ? p(this.latestValues, "") : "none"));
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        (this.options.layoutId &&
          ((f.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (f.pointerEvents = Eo(x?.pointerEvents) || "")),
          this.hasProjected &&
            !hi(this.latestValues) &&
            ((f.transform = p ? p({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      f.visibility = "";
      const y = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let b = vN(this.projectionDeltaWithTransform, this.treeScale, y);
      (p && (b = p(y, b)), (f.transform = b));
      const { x: w, y: T } = this.projectionDelta;
      ((f.transformOrigin = `${w.origin * 100}% ${T.origin * 100}% 0`),
        g.animationValues
          ? (f.opacity =
              g === this
                ? (y.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : y.opacityExit)
          : (f.opacity =
              g === this
                ? y.opacity !== void 0
                  ? y.opacity
                  : ""
                : y.opacityExit !== void 0
                  ? y.opacityExit
                  : 0));
      for (const R in $d) {
        if (y[R] === void 0) continue;
        const { correct: C, applyTo: D, isCSSVariable: _ } = $d[R],
          V = b === "none" ? y[R] : C(y[R], g);
        if (D) {
          const E = D.length;
          for (let Q = 0; Q < E; Q++) f[D[Q]] = V;
        } else
          _ ? (this.options.visualElement.renderState.vars[R] = V) : (f[R] = V);
      }
      this.options.layoutId &&
        (f.pointerEvents = g === this ? Eo(x?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((f) => f.currentAnimation?.stop()),
        this.root.nodes.forEach(Qg),
        this.root.sharedNodes.clear());
    }
  };
}
function SN(n) {
  n.updateLayout();
}
function NN(n) {
  const i = n.resumeFrom?.snapshot || n.snapshot;
  if (n.isLead() && n.layout && i && n.hasListeners("didUpdate")) {
    const { layoutBox: l, measuredBox: o } = n.layout,
      { animationType: d } = n.options,
      h = i.source !== n.layout.source;
    d === "size"
      ? ra((y) => {
          const b = h ? i.measuredBox[y] : i.layoutBox[y],
            w = Rt(b);
          ((b.min = l[y].min), (b.max = b.min + w));
        })
      : xb(d, i.layoutBox, l) &&
        ra((y) => {
          const b = h ? i.measuredBox[y] : i.layoutBox[y],
            w = Rt(l[y]);
          ((b.max = b.min + w),
            n.relativeTarget &&
              !n.currentAnimation &&
              ((n.isProjectionDirty = !0),
              (n.relativeTarget[y].max = n.relativeTarget[y].min + w)));
        });
    const f = ms();
    Dl(f, l, i.layoutBox);
    const x = ms();
    h ? Dl(x, n.applyTransform(o, !0), i.measuredBox) : Dl(x, l, i.layoutBox);
    const p = !hb(f);
    let g = !1;
    if (!n.resumeFrom) {
      const y = n.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: b, layout: w } = y;
        if (b && w) {
          const T = gt();
          Oo(T, i.layoutBox, b.layoutBox);
          const R = gt();
          (Oo(R, l, w.layoutBox),
            mb(T, R) || (g = !0),
            y.options.layoutRoot &&
              ((n.relativeTarget = R),
              (n.relativeTargetOrigin = T),
              (n.relativeParent = y)));
        }
      }
    }
    n.notifyListeners("didUpdate", {
      layout: l,
      snapshot: i,
      delta: x,
      layoutDelta: f,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: g,
    });
  } else if (n.isLead()) {
    const { onExitComplete: l } = n.options;
    l && l();
  }
  n.options.transition = void 0;
}
function TN(n) {
  n.parent &&
    (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
    n.isSharedProjectionDirty ||
      (n.isSharedProjectionDirty = !!(
        n.isProjectionDirty ||
        n.parent.isProjectionDirty ||
        n.parent.isSharedProjectionDirty
      )),
    n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function EN(n) {
  n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function AN(n) {
  n.clearSnapshot();
}
function Qg(n) {
  n.clearMeasurements();
}
function Zg(n) {
  n.isLayoutDirty = !1;
}
function MN(n) {
  const { visualElement: i } = n.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    n.resetTransform());
}
function Jg(n) {
  (n.finishAnimation(),
    (n.targetDelta = n.relativeTarget = n.target = void 0),
    (n.isProjectionDirty = !0));
}
function CN(n) {
  n.resolveTargetDelta();
}
function DN(n) {
  n.calcProjection();
}
function RN(n) {
  n.resetSkewAndRotation();
}
function kN(n) {
  n.removeLeadSnapshot();
}
function Ig(n, i, l) {
  ((n.translate = Ze(i.translate, 0, l)),
    (n.scale = Ze(i.scale, 1, l)),
    (n.origin = i.origin),
    (n.originPoint = i.originPoint));
}
function Wg(n, i, l, o) {
  ((n.min = Ze(i.min, l.min, o)), (n.max = Ze(i.max, l.max, o)));
}
function zN(n, i, l, o) {
  (Wg(n.x, i.x, l.x, o), Wg(n.y, i.y, l.y, o));
}
function _N(n) {
  return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const ON = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  ex = (n) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(n),
  tx = ex("applewebkit/") && !ex("chrome/") ? Math.round : ca;
function ax(n) {
  ((n.min = tx(n.min)), (n.max = tx(n.max)));
}
function BN(n) {
  (ax(n.x), ax(n.y));
}
function xb(n, i, l) {
  return (
    n === "position" || (n === "preserve-aspect" && !YS(Pg(i), Pg(l), 0.2))
  );
}
function LN(n) {
  return n !== n.root && n.scroll?.wasRoot;
}
const VN = gb({
    attachResizeListener: (n, i) => Ll(n, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Sd = { current: void 0 },
  yb = gb({
    measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
    defaultParent: () => {
      if (!Sd.current) {
        const n = new VN({});
        (n.mount(window), n.setOptions({ layoutScroll: !0 }), (Sd.current = n));
      }
      return Sd.current;
    },
    resetTransform: (n, i) => {
      n.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (n) => window.getComputedStyle(n).position === "fixed",
  }),
  UN = {
    pan: { Feature: sN },
    drag: { Feature: iN, ProjectionNode: yb, MeasureLayout: ub },
  };
function nx(n, i, l) {
  const { props: o } = n;
  n.animationState &&
    o.whileHover &&
    n.animationState.setActive("whileHover", l === "Start");
  const d = "onHover" + l,
    h = o[d];
  h && Ye.postRender(() => h(i, Pl(i)));
}
class HN extends Gn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = rj(
        i,
        (l, o) => (nx(this.node, o, "Start"), (d) => nx(this.node, d, "End")),
      ));
  }
  unmount() {}
}
class qN extends Gn {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = Gl(
      Ll(this.node.current, "focus", () => this.onFocus()),
      Ll(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function ix(n, i, l) {
  const { props: o } = n;
  if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
  n.animationState &&
    o.whileTap &&
    n.animationState.setActive("whileTap", l === "Start");
  const d = "onTap" + (l === "End" ? "" : l),
    h = o[d];
  h && Ye.postRender(() => h(i, Pl(i)));
}
class $N extends Gn {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = dj(
        i,
        (l, o) => (
          ix(this.node, o, "Start"),
          (d, { success: h }) => ix(this.node, d, h ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget },
      ));
  }
  unmount() {}
}
const Zd = new WeakMap(),
  Nd = new WeakMap(),
  GN = (n) => {
    const i = Zd.get(n.target);
    i && i(n);
  },
  YN = (n) => {
    n.forEach(GN);
  };
function XN({ root: n, ...i }) {
  const l = n || document;
  Nd.has(l) || Nd.set(l, {});
  const o = Nd.get(l),
    d = JSON.stringify(i);
  return (
    o[d] || (o[d] = new IntersectionObserver(YN, { root: n, ...i })),
    o[d]
  );
}
function KN(n, i, l) {
  const o = XN(i);
  return (
    Zd.set(n, l),
    o.observe(n),
    () => {
      (Zd.delete(n), o.unobserve(n));
    }
  );
}
const PN = { some: 0, all: 1 };
class FN extends Gn {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: l, margin: o, amount: d = "some", once: h } = i,
      f = {
        root: l ? l.current : void 0,
        rootMargin: o,
        threshold: typeof d == "number" ? d : PN[d],
      },
      x = (p) => {
        const { isIntersecting: g } = p;
        if (
          this.isInView === g ||
          ((this.isInView = g), h && !g && this.hasEnteredView)
        )
          return;
        (g && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", g));
        const { onViewportEnter: y, onViewportLeave: b } = this.node.getProps(),
          w = g ? y : b;
        w && w(p);
      };
    return KN(this.node.current, f, x);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: l } = this.node;
    ["amount", "margin", "root"].some(QN(i, l)) && this.startObserver();
  }
  unmount() {}
}
function QN({ viewport: n = {} }, { viewport: i = {} } = {}) {
  return (l) => n[l] !== i[l];
}
const ZN = {
    inView: { Feature: FN },
    tap: { Feature: $N },
    focus: { Feature: qN },
    hover: { Feature: HN },
  },
  JN = { layout: { ProjectionNode: yb, MeasureLayout: ub } },
  IN = { ...VS, ...ZN, ...UN, ...JN },
  le = eS(IN, hS);
function Bo(n) {
  const i = $l(() => yi(n)),
    { isStatic: l } = j.useContext(Kl);
  if (l) {
    const [, o] = j.useState(n);
    j.useEffect(() => i.on("change", o), []);
  }
  return i;
}
function bb(n, i) {
  const l = Bo(i()),
    o = () => l.set(i());
  return (
    o(),
    pf(() => {
      const d = () => Ye.preRender(o, !1, !0),
        h = n.map((f) => f.on("change", d));
      return () => {
        (h.forEach((f) => f()), nn(o));
      };
    }),
    l
  );
}
function WN(n) {
  ((Ml.current = []), n());
  const i = bb(Ml.current, n);
  return ((Ml.current = void 0), i);
}
function e4(n, i, l, o) {
  if (typeof n == "function") return WN(n);
  const d = hj(i, l, o);
  return Array.isArray(n) ? sx(n, d) : sx([n], ([h]) => d(h));
}
function sx(n, i) {
  const l = $l(() => []);
  return bb(n, () => {
    l.length = 0;
    const o = n.length;
    for (let d = 0; d < o; d++) l[d] = n[d].get();
    return i(l);
  });
}
function lx(n, i = {}) {
  const { isStatic: l } = j.useContext(Kl),
    o = () => (vt(n) ? n.get() : n);
  if (l) return e4(o);
  const d = Bo(o());
  return (j.useInsertionEffect(() => mj(d, n, i), [d, JSON.stringify(i)]), d);
}
const t4 = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  a4 = (n) =>
    n.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, l, o) =>
      o ? o.toUpperCase() : l.toLowerCase(),
    ),
  rx = (n) => {
    const i = a4(n);
    return i.charAt(0).toUpperCase() + i.slice(1);
  },
  vb = (...n) =>
    n
      .filter((i, l, o) => !!i && i.trim() !== "" && o.indexOf(i) === l)
      .join(" ")
      .trim(),
  n4 = (n) => {
    for (const i in n)
      if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  };
var i4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const s4 = j.forwardRef(
  (
    {
      color: n = "currentColor",
      size: i = 24,
      strokeWidth: l = 2,
      absoluteStrokeWidth: o,
      className: d = "",
      children: h,
      iconNode: f,
      ...x
    },
    p,
  ) =>
    j.createElement(
      "svg",
      {
        ref: p,
        ...i4,
        width: i,
        height: i,
        stroke: n,
        strokeWidth: o ? (Number(l) * 24) / Number(i) : l,
        className: vb("lucide", d),
        ...(!h && !n4(x) && { "aria-hidden": "true" }),
        ...x,
      },
      [
        ...f.map(([g, y]) => j.createElement(g, y)),
        ...(Array.isArray(h) ? h : [h]),
      ],
    ),
);
const ne = (n, i) => {
  const l = j.forwardRef(({ className: o, ...d }, h) =>
    j.createElement(s4, {
      ref: h,
      iconNode: i,
      className: vb(`lucide-${t4(rx(n))}`, `lucide-${n}`, o),
      ...d,
    }),
  );
  return ((l.displayName = rx(n)), l);
};
const l4 = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  bs = ne("arrow-left", l4);
const r4 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  bi = ne("arrow-right", r4);
const o4 = [
    [
      "path",
      {
        d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",
        key: "mg9rjx",
      },
    ],
  ],
  c4 = ne("bold", o4);
const u4 = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  ps = ne("book-open", u4);
const d4 = [
    ["path", { d: "M12 18V5", key: "adv99a" }],
    [
      "path",
      { d: "M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4", key: "1e3is1" },
    ],
    [
      "path",
      { d: "M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5", key: "1gqd8o" },
    ],
    ["path", { d: "M17.997 5.125a4 4 0 0 1 2.526 5.77", key: "iwvgf7" }],
    ["path", { d: "M18 18a4 4 0 0 0 2-7.464", key: "efp6ie" }],
    [
      "path",
      {
        d: "M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",
        key: "1gq6am",
      },
    ],
    ["path", { d: "M6 18a4 4 0 0 1-2-7.464", key: "k1g0md" }],
    ["path", { d: "M6.003 5.125a4 4 0 0 0-2.526 5.77", key: "q97ue3" }],
  ],
  f4 = ne("brain", d4);
const h4 = [
    ["path", { d: "M8 2v4", key: "1cmpym" }],
    ["path", { d: "M16 2v4", key: "4m81vk" }],
    [
      "rect",
      { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
    ],
    ["path", { d: "M3 10h18", key: "8toen8" }],
  ],
  qn = ne("calendar", h4);
const m4 = [
    ["path", { d: "M5 21v-6", key: "1hz6c0" }],
    ["path", { d: "M12 21V3", key: "1lcnhd" }],
    ["path", { d: "M19 21V9", key: "unv183" }],
  ],
  p4 = ne("chart-no-axes-column", m4);
const g4 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  wb = ne("check", g4);
const x4 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  y4 = ne("chevron-left", x4);
const b4 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  xs = ne("chevron-right", b4);
const v4 = [
    ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
    ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
  ],
  Tl = ne("circle-check-big", v4);
const w4 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m15 9-6 6", key: "1uzhvr" }],
    ["path", { d: "m9 9 6 6", key: "z0biqf" }],
  ],
  bo = ne("circle-x", w4);
const j4 = [
    ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ],
  Vl = ne("clock", j4);
const S4 = [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
  ],
  N4 = ne("code-xml", S4);
const T4 = [
    ["path", { d: "m16 18 6-6-6-6", key: "eg8j8" }],
    ["path", { d: "m8 6-6 6 6 6", key: "ppft3o" }],
  ],
  E4 = ne("code", T4);
const A4 = [
    [
      "rect",
      {
        width: "14",
        height: "14",
        x: "8",
        y: "8",
        rx: "2",
        ry: "2",
        key: "17jyea",
      },
    ],
    [
      "path",
      {
        d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
        key: "zix9uf",
      },
    ],
  ],
  M4 = ne("copy", A4);
const C4 = [
    ["line", { x1: "12", x2: "12", y1: "2", y2: "22", key: "7eqyqh" }],
    [
      "path",
      { d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6", key: "1b0p4s" },
    ],
  ],
  D4 = ne("dollar-sign", C4);
const R4 = [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }],
  ],
  ox = ne("download", R4);
const k4 = [
    [
      "path",
      {
        d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
        key: "ct8e1f",
      },
    ],
    ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
    [
      "path",
      {
        d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
        key: "13bj9a",
      },
    ],
    ["path", { d: "m2 2 20 20", key: "1ooewy" }],
  ],
  z4 = ne("eye-off", k4);
const _4 = [
    [
      "path",
      {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  Jd = ne("eye", _4);
const O4 = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6",
      },
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }],
  ],
  jb = ne("file-text", O4);
const B4 = [
    [
      "path",
      {
        d: "M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",
        key: "sc7q7i",
      },
    ],
  ],
  L4 = ne("funnel", B4);
const V4 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    [
      "path",
      { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
    ],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
  ],
  Td = ne("globe", V4);
const U4 = [
    ["path", { d: "M4 12h8", key: "17cfdx" }],
    ["path", { d: "M4 18V6", key: "1rz3zl" }],
    ["path", { d: "M12 18V6", key: "zqpxq5" }],
    ["path", { d: "m17 12 3-2v8", key: "1hhhft" }],
  ],
  H4 = ne("heading-1", U4);
const q4 = [
    ["path", { d: "M4 12h8", key: "17cfdx" }],
    ["path", { d: "M4 18V6", key: "1rz3zl" }],
    ["path", { d: "M12 18V6", key: "zqpxq5" }],
    ["path", { d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1", key: "9jr5yi" }],
  ],
  $4 = ne("heading-2", q4);
const G4 = [
    ["path", { d: "M4 12h8", key: "17cfdx" }],
    ["path", { d: "M4 18V6", key: "1rz3zl" }],
    ["path", { d: "M12 18V6", key: "zqpxq5" }],
    [
      "path",
      { d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2", key: "68ncm8" },
    ],
    ["path", { d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2", key: "1ejuhz" }],
  ],
  Y4 = ne("heading-3", G4);
const X4 = [
    [
      "path",
      { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" },
    ],
    [
      "path",
      {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1",
      },
    ],
  ],
  K4 = ne("house", X4);
const P4 = [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn",
      },
    ],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
  ],
  Id = ne("image", P4);
const F4 = [
    [
      "polyline",
      { points: "22 12 16 12 14 15 10 15 8 12 2 12", key: "o97t9d" },
    ],
    [
      "path",
      {
        d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
        key: "oot6mr",
      },
    ],
  ],
  cx = ne("inbox", F4);
const Q4 = [
    ["path", { d: "M6 3h12", key: "ggurg9" }],
    ["path", { d: "M6 8h12", key: "6g4wlu" }],
    ["path", { d: "m6 13 8.5 8", key: "u1kupk" }],
    ["path", { d: "M6 13h3", key: "wdp6ag" }],
    ["path", { d: "M9 13c6.667 0 6.667-10 0-10", key: "1nkvk2" }],
  ],
  Z4 = ne("indian-rupee", Q4);
const J4 = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  I4 = ne("instagram", J4);
const W4 = [
    ["line", { x1: "19", x2: "10", y1: "4", y2: "4", key: "15jd3p" }],
    ["line", { x1: "14", x2: "5", y1: "20", y2: "20", key: "bu0au3" }],
    ["line", { x1: "15", x2: "9", y1: "4", y2: "20", key: "uljnxc" }],
  ],
  e3 = ne("italic", W4);
const t3 = [
    ["path", { d: "M9 17H7A5 5 0 0 1 7 7h2", key: "8i5ue5" }],
    ["path", { d: "M15 7h2a5 5 0 1 1 0 10h-2", key: "1b9ql8" }],
    ["line", { x1: "8", x2: "16", y1: "12", y2: "12", key: "1jonct" }],
  ],
  ux = ne("link-2", t3);
const a3 = [
    [
      "path",
      {
        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
        key: "c2jq9f",
      },
    ],
    ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
    ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
  ],
  n3 = ne("linkedin", a3);
const i3 = [
    ["path", { d: "M11 5h10", key: "1cz7ny" }],
    ["path", { d: "M11 12h10", key: "1438ji" }],
    ["path", { d: "M11 19h10", key: "11t30w" }],
    ["path", { d: "M4 4h1v5", key: "10yrso" }],
    ["path", { d: "M4 9h2", key: "r1h2o0" }],
    [
      "path",
      {
        d: "M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",
        key: "xtkcd5",
      },
    ],
  ],
  s3 = ne("list-ordered", i3);
const l3 = [
    ["path", { d: "M3 5h.01", key: "18ugdj" }],
    ["path", { d: "M3 12h.01", key: "nlz23k" }],
    ["path", { d: "M3 19h.01", key: "noohij" }],
    ["path", { d: "M8 5h13", key: "1pao27" }],
    ["path", { d: "M8 12h13", key: "1za7za" }],
    ["path", { d: "M8 19h13", key: "m83p4d" }],
  ],
  r3 = ne("list", l3);
const o3 = [
    [
      "rect",
      {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1",
      },
    ],
    ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }],
  ],
  c3 = ne("lock", o3);
const u3 = [
    ["path", { d: "m16 17 5-5-5-5", key: "1bji2h" }],
    ["path", { d: "M21 12H9", key: "dn1m92" }],
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ],
  d3 = ne("log-out", u3);
const f3 = [
    ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
    [
      "rect",
      { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" },
    ],
  ],
  Wd = ne("mail", f3);
const h3 = [
    [
      "path",
      {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z",
      },
    ],
    ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
  ],
  dx = ne("map-pin", h3);
const m3 = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  p3 = ne("menu", m3);
const g3 = [
    [
      "path",
      {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s",
      },
    ],
  ],
  x3 = ne("message-circle", g3);
const y3 = [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p",
      },
    ],
  ],
  vo = ne("message-square", y3);
const b3 = [["path", { d: "M5 12h14", key: "1ays0h" }]],
  v3 = ne("minus", b3);
const w3 = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm",
      },
    ],
  ],
  j3 = ne("moon", w3);
const S3 = [
    ["path", { d: "M13 21h8", key: "1jsn5i" }],
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu",
      },
    ],
  ],
  ef = ne("pen-line", S3);
const N3 = [
    [
      "path",
      {
        d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
        key: "9njp5v",
      },
    ],
  ],
  T3 = ne("phone", N3);
const E3 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }],
  ],
  A3 = ne("plus", E3);
const M3 = [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0",
      },
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd",
      },
    ],
  ],
  C3 = ne("quote", M3);
const D3 = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  Yf = ne("search", D3);
const R3 = [
    [
      "path",
      {
        d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
        key: "1ffxy3",
      },
    ],
    ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
  ],
  fx = ne("send", R3);
const k3 = [
    [
      "path",
      {
        d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
        key: "1i5ecw",
      },
    ],
    ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
  ],
  z3 = ne("settings", k3);
const _3 = [
    ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
    ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
    ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
    [
      "line",
      { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
    ],
    [
      "line",
      { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" },
    ],
  ],
  O3 = ne("share-2", _3);
const B3 = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
  ],
  L3 = ne("shield", B3);
const V3 = [
    [
      "rect",
      {
        width: "14",
        height: "20",
        x: "5",
        y: "2",
        rx: "2",
        ry: "2",
        key: "1yt0o3",
      },
    ],
    ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ],
  U3 = ne("smartphone", V3);
const H3 = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  q3 = ne("sparkles", H3);
const $3 = [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s",
      },
    ],
  ],
  G3 = ne("star", $3);
const Y3 = [
    ["path", { d: "M16 4H9a3 3 0 0 0-2.83 4", key: "43sutm" }],
    ["path", { d: "M14 12a4 4 0 0 1 0 8H6", key: "nlfj13" }],
    ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ],
  X3 = ne("strikethrough", Y3);
const K3 = [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
  ],
  P3 = ne("sun", K3);
const F3 = [
    [
      "path",
      {
        d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
        key: "vktsd0",
      },
    ],
    [
      "circle",
      { cx: "7.5", cy: "7.5", r: ".5", fill: "currentColor", key: "kqv944" },
    ],
  ],
  Sb = ne("tag", F3);
const Q3 = [
    ["path", { d: "M21 5H3", key: "1fi0y6" }],
    ["path", { d: "M15 12H3", key: "6jk70r" }],
    ["path", { d: "M17 19H3", key: "z6ezky" }],
  ],
  Z3 = ne("text-align-start", Q3);
const J3 = [
    ["circle", { cx: "9", cy: "12", r: "3", key: "u3jwor" }],
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" },
    ],
  ],
  hx = ne("toggle-left", J3);
const I3 = [
    ["circle", { cx: "15", cy: "12", r: "3", key: "1afu0r" }],
    [
      "rect",
      { width: "20", height: "14", x: "2", y: "5", rx: "7", key: "g7kal2" },
    ],
  ],
  mx = ne("toggle-right", I3);
const W3 = [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }],
  ],
  wo = ne("trash-2", W3);
const eT = [
    ["path", { d: "M16 7h6v6", key: "box55l" }],
    ["path", { d: "m22 7-8.5 8.5-5-5L2 17", key: "1t1m79" }],
  ],
  tf = ne("trending-up", eT);
const tT = [
    [
      "path",
      {
        d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
        key: "pff0z6",
      },
    ],
  ],
  aT = ne("twitter", tT);
const nT = [
    ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
    ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
  ],
  iT = ne("user", nT);
const sT = [
    [
      "path",
      {
        d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
        key: "ftymec",
      },
    ],
    [
      "rect",
      { x: "2", y: "6", width: "14", height: "12", rx: "2", key: "158x01" },
    ],
  ],
  lT = ne("video", sT);
const rT = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  af = ne("x", rT),
  px = ({ children: n, className: i }) => {
    const l = j.useRef(null),
      o = Bo(0),
      d = Bo(0),
      h = lx(o, { stiffness: 150, damping: 15, mass: 0.1 }),
      f = lx(d, { stiffness: 150, damping: 15, mass: 0.1 }),
      x = (p) => {
        const { clientX: g, clientY: y } = p,
          {
            height: b,
            width: w,
            left: T,
            top: R,
          } = l.current.getBoundingClientRect();
        (o.set((g - (T + w / 2)) / 5), d.set((y - (R + b / 2)) / 5));
      };
    return r.jsx(le.div, {
      ref: l,
      onMouseMove: x,
      onMouseLeave: () => {
        (o.set(0), d.set(0));
      },
      style: { x: h, y: f },
      className: i,
      children: n,
    });
  },
  Rl = () => {
    const [n, i] = j.useState(!1),
      [l, o] = j.useState(!0),
      [d, h] = j.useState(0),
      [f, x] = j.useState(!1),
      [p, g] = j.useState(null),
      y = Ra(),
      b = y.pathname === "/";
    (j.useEffect(() => {
      const D = () => {
        const _ = window.scrollY;
        (i(_ > 20),
          _ < 100 ? o(!0) : _ > d && _ > 100 ? (o(!1), x(!1)) : _ < d && o(!0),
          h(_));
      };
      return (
        window.addEventListener("scroll", D, { passive: !0 }),
        () => window.removeEventListener("scroll", D)
      );
    }, [d]),
      j.useEffect(() => {
        x(!1);
      }, [y.pathname]));
    const w = (D, _) => {
        if ((D.preventDefault(), x(!1), _ === "/blog")) {
          window.location.href = "/blog";
          return;
        }
        const V = _.startsWith("/#") ? _.slice(1) : _;
        if (b) {
          const E = document.querySelector(V);
          E && E.scrollIntoView({ behavior: "smooth" });
        } else window.location.href = _;
      },
      T = (D) => {
        (D.preventDefault(),
          x(!1),
          b
            ? window.scrollTo({ top: 0, behavior: "smooth" })
            : (window.location.href = "/"));
      },
      R = [
        { name: "About", href: "/#about" },
        { name: "Skills", href: "/#skills" },
        { name: "Projects", href: "/#projects" },
        { name: "Resume", href: "/#resume" },
      ],
      C = n || f;
    return r.jsx("nav", {
      className: `fixed top-0 left-0 right-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-5 pointer-events-none transition-transform duration-300 ease-out ${l ? "translate-y-0" : "-translate-y-[calc(100%+1.5rem)]"}`,
      children: r.jsxs("div", {
        className: `pointer-events-auto mx-auto max-w-6xl overflow-hidden transition-all duration-300 rounded-2xl md:rounded-full border shadow-[0_8px_32px_rgba(0,0,0,0.45)] ${C ? "bg-neutral-950/85 backdrop-blur-xl border-white/10" : "bg-neutral-950/50 backdrop-blur-md border-white/[0.08]"}`,
        children: [
          r.jsxs(le.div, {
            layout: !0,
            className:
              "flex justify-between items-center px-4 py-3 sm:px-5 sm:py-3.5 md:px-6",
            children: [
              r.jsxs("a", {
                href: "/",
                onClick: T,
                className:
                  "text-xl sm:text-2xl font-bold tracking-tighter text-white shrink-0 cursor-pointer",
                children: [
                  "Sumit Kumar",
                  r.jsx("span", { className: "text-primary", children: "." }),
                ],
              }),
              r.jsxs(le.div, {
                layout: !0,
                className: "hidden md:flex items-center gap-1",
                children: [
                  R.map((D) =>
                    r.jsx(
                      px,
                      {
                        children: r.jsxs("a", {
                          href: D.href,
                          onClick: (_) => w(_, D.href),
                          onMouseEnter: () => g(D.name),
                          onMouseLeave: () => g(null),
                          className:
                            "relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 block cursor-pointer",
                          children: [
                            p === D.name &&
                              r.jsx(le.span, {
                                layoutId: "nav-hover",
                                className:
                                  "absolute inset-0 bg-primary/10 border border-primary/20 rounded-full -z-10 shadow-[0_0_15px_rgba(220,38,38,0.3)]",
                                initial: { opacity: 0, scale: 0.95 },
                                animate: { opacity: 1, scale: 1 },
                                exit: { opacity: 0, scale: 0.95 },
                                transition: {
                                  type: "spring",
                                  stiffness: 350,
                                  damping: 25,
                                },
                              }),
                            r.jsx("span", {
                              className: `relative z-10 transition-colors duration-200 ${p === D.name ? "text-white" : "text-gray-300"}`,
                              children: D.name,
                            }),
                          ],
                        }),
                      },
                      D.name,
                    ),
                  ),
                  r.jsx(px, {
                    className: "ml-2",
                    children: r.jsxs("a", {
                      href: "/#contact",
                      onClick: (D) => w(D, "/#contact"),
                      className: "liquid-glow-button group cursor-pointer",
                      children: [
                        r.jsx("span", { className: "liquid-glow-bg" }),
                        r.jsxs("span", {
                          className: "liquid-glow-content",
                          children: [
                            r.jsx("span", {
                              className: "liquid-glow-text",
                              children: "Let's Talk",
                            }),
                            r.jsx("svg", {
                              className: "liquid-glow-arrow",
                              width: "16",
                              height: "16",
                              viewBox: "0 0 24 24",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              strokeLinejoin: "round",
                              children: r.jsx("path", {
                                d: "M5 12h14M12 5l7 7-7 7",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              r.jsx("button", {
                className:
                  "md:hidden text-white focus:outline-none p-1 rounded-lg hover:bg-white/5 transition-colors",
                onClick: () => x(!f),
                "aria-label": f ? "Close menu" : "Open menu",
                children: f ? r.jsx(af, { size: 26 }) : r.jsx(p3, { size: 26 }),
              }),
            ],
          }),
          r.jsx(Hn, {
            children:
              f &&
              r.jsx(le.div, {
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                transition: { duration: 0.25, ease: "easeInOut" },
                className: "md:hidden border-t border-white/10 overflow-hidden",
                children: r.jsxs(le.div, {
                  initial: { opacity: 0, y: -8 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -8 },
                  transition: { duration: 0.2, delay: 0.05 },
                  className: "flex flex-col space-y-1 p-4 pb-5",
                  children: [
                    R.map((D) =>
                      r.jsx(
                        "a",
                        {
                          href: D.href,
                          onClick: (_) => w(_, D.href),
                          className:
                            "text-gray-300 hover:text-white hover:bg-white/5 text-lg font-medium py-3 px-4 rounded-xl block transition-colors cursor-pointer",
                          children: D.name,
                        },
                        D.name,
                      ),
                    ),
                    r.jsx("a", {
                      href: "/#contact",
                      onClick: (D) => w(D, "/#contact"),
                      className:
                        "relative overflow-hidden bg-gradient-to-r from-primary to-red-700 text-white px-6 py-3 rounded-xl text-center font-medium mt-2 block shadow-lg shadow-primary/20 border border-white/10 cursor-pointer",
                      children: "Let's Talk",
                    }),
                  ],
                }),
              }),
          }),
        ],
      }),
    });
  },
  Lo = () =>
    r.jsxs("footer", {
      className: "bg-black pt-20 pb-10 relative",
      children: [
        r.jsx("div", {
          className:
            "absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent pointer-events-none",
        }),
        r.jsxs("div", {
          className: "container mx-auto px-6 relative z-10",
          children: [
            r.jsxs("div", {
              className:
                "flex flex-col md:flex-row justify-between items-center mb-10",
              children: [
                r.jsxs("div", {
                  className: "mb-6 md:mb-0 text-center md:text-left",
                  children: [
                    r.jsxs("h2", {
                      className: "text-2xl font-bold text-white mb-2",
                      children: [
                        "Sumit Kumar",
                        r.jsx("span", {
                          className: "text-primary",
                          children: ".",
                        }),
                      ],
                    }),
                    r.jsx("p", {
                      className: "text-gray-400 max-w-sm",
                      children:
                        "I analyze security threats, monitor suspicious activity, troubleshoot network issues, and identify vulnerabilities to help protect digital systems. I combine cybersecurity knowledge with hands-on security testing to build safer, more reliable digital experiences. I also bring ideas to life through creative video editing and graphic design.",
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex space-x-6",
                  children: [
                    r.jsx(le.a, {
                      href: "https://x.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-gray-400",
                      whileHover: { scale: 1.2, color: "#FFFFFF" },
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                      children: r.jsx(aT, { size: 24 }),
                    }),
                    r.jsx(le.a, {
                      href: "https://www.linkedin.com/in/sumitkumar0007/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-gray-400",
                      whileHover: { scale: 1.2, color: "#0A66C2" },
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                      children: r.jsx(n3, { size: 24 }),
                    }),
                    r.jsx(le.a, {
                      href: "https://www.instagram.com",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "text-gray-400",
                      whileHover: { scale: 1.2, color: "#E1306C" },
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                      children: r.jsx(I4, { size: 24 }),
                    }),
                    r.jsx(le.a, {
                      href: "mailto:kumarsumit14355@gmail.com",
                      className: "text-gray-400",
                      whileHover: { scale: 1.2, color: "#8B5CF6" },
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                      children: r.jsx(Wd, { size: 24 }),
                    }),
                  ],
                }),
              ],
            }),
            r.jsxs("div", {
              className:
                "border-t border-white/10 pt-8 flex flex-col items-center text-center",
              children: [
                r.jsx("p", {
                  className: "text-gray-500 text-sm mb-3",
                  children: r.jsx("span", {
                    className: "inline-flex items-center gap-1.5",
                    children: "",
                  }),
                }),
                r.jsxs("p", {
                  className: "text-gray-500 text-sm mb-4",
                  children: [
                    "Designed and developed by ",
                    r.jsxs("a", {
                      href: "https://sumitkumar.vercel.app/",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className:
                        "text-white font-bold hover:text-primary transition-colors",
                      children: [
                        "Sumit Kumar",
                        r.jsx("span", {
                          className: "text-primary",
                          children: ".",
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className:
                    "flex items-center space-x-3 text-gray-500 text-sm",
                  children: [
                    r.jsxs("span", {
                      children: ["© ", new Date().getFullYear()],
                    }),
                    r.jsx("span", {
                      className: "text-gray-700",
                      children: "•",
                    }),
                    r.jsx(mt, {
                      to: "/privacy",
                      className:
                        "hover:text-primary transition-colors duration-300",
                      children: "Privacy",
                    }),
                    r.jsx("span", {
                      className: "text-gray-700",
                      children: "•",
                    }),
                    r.jsx(mt, {
                      to: "/terms",
                      className:
                        "hover:text-primary transition-colors duration-300",
                      children: "Terms",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  oT = "/assets/Profile.jpg",
  cT = () => {
    const n = j.useRef(null);
    return (
      j.useEffect(() => {
        const i = n.current;
        if (!i) return;
        const l = i.getContext("2d");
        if (!l) return;
        const o = window.innerWidth < 768,
          d = o ? 60 : 120,
          h = o ? 80 : 130,
          f = 120,
          x = 0.4;
        let p = i.offsetWidth,
          g = i.offsetHeight;
        ((i.width = p), (i.height = g));
        const y = { x: -999, y: -999 },
          b = (E) => {
            const Q = i.getBoundingClientRect();
            ((y.x = E.clientX - Q.left), (y.y = E.clientY - Q.top));
          },
          w = () => {
            ((y.x = -999), (y.y = -999));
          };
        (i.addEventListener("mousemove", b),
          i.addEventListener("mouseleave", w));
        const T = [
            "rgba(255,255,255,",
            "rgba(255,255,255,",
            "rgba(220,38,38,",
            "rgba(248,113,113,",
            "rgba(200,200,220,",
          ],
          R = Array.from({ length: d }, () => ({
            x: Math.random() * p,
            y: Math.random() * g,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 1.8 + 0.4,
            opacity: Math.random() * 0.6 + 0.2,
            color: T[Math.floor(Math.random() * T.length)],
            pulseOffset: Math.random() * Math.PI * 2,
          }));
        let C,
          D = 0;
        const _ = () => {
          (l.clearRect(0, 0, p, g),
            (D += 0.012),
            R.forEach((E, Q) => {
              const X = E.x - y.x,
                W = E.y - y.y,
                P = Math.sqrt(X * X + W * W);
              if (P < f && P > 0) {
                const he = (f - P) / f;
                ((E.vx += (X / P) * he * x), (E.vy += (W / P) * he * x));
              }
              ((E.vx *= 0.97), (E.vy *= 0.97));
              const Z = Math.sqrt(E.vx * E.vx + E.vy * E.vy);
              (Z > 1.5 &&
                ((E.vx = (E.vx / Z) * 1.5), (E.vy = (E.vy / Z) * 1.5)),
                (E.x += E.vx),
                (E.y += E.vy),
                E.x < 0 && (E.x = p),
                E.x > p && (E.x = 0),
                E.y < 0 && (E.y = g),
                E.y > g && (E.y = 0));
              const ie = Math.sin(D + E.pulseOffset) * 0.15,
                I = Math.max(0.05, Math.min(1, E.opacity + ie));
              (l.beginPath(),
                l.arc(E.x, E.y, E.size, 0, Math.PI * 2),
                (l.fillStyle = `${E.color}${I})`),
                l.fill(),
                E.size > 1.2 &&
                  (l.beginPath(),
                  l.arc(E.x, E.y, E.size * 2.5, 0, Math.PI * 2),
                  (l.fillStyle = `${E.color}${I * 0.15})`),
                  l.fill()));
              for (let he = Q + 1; he < R.length; he++) {
                const we = R[he],
                  ze = E.x - we.x,
                  je = E.y - we.y,
                  ke = Math.sqrt(ze * ze + je * je);
                if (ke < h) {
                  const H = (1 - ke / h) * 0.18,
                    K =
                      E.color.includes("220,38") || we.color.includes("220,38");
                  (l.beginPath(),
                    l.moveTo(E.x, E.y),
                    l.lineTo(we.x, we.y),
                    (l.strokeStyle = K
                      ? `rgba(220,38,38,${H})`
                      : `rgba(255,255,255,${H})`),
                    (l.lineWidth = 0.6),
                    l.stroke());
                }
              }
              if (P < f * 1.4) {
                const he = (1 - P / (f * 1.4)) * 0.35;
                (l.beginPath(),
                  l.moveTo(E.x, E.y),
                  l.lineTo(y.x, y.y),
                  (l.strokeStyle = `rgba(220,38,38,${he})`),
                  (l.lineWidth = 0.8),
                  l.stroke());
              }
            }),
            (C = requestAnimationFrame(_)));
        };
        _();
        const V = () => {
          ((p = i.offsetWidth),
            (g = i.offsetHeight),
            (i.width = p),
            (i.height = g));
        };
        return (
          window.addEventListener("resize", V),
          () => {
            (cancelAnimationFrame(C),
              i.removeEventListener("mousemove", b),
              i.removeEventListener("mouseleave", w),
              window.removeEventListener("resize", V));
          }
        );
      }, []),
      r.jsx("canvas", {
        ref: n,
        className: "absolute inset-0 w-full h-full z-0 pointer-events-auto",
        style: { opacity: 0.85 },
      })
    );
  },
  uT = () => (
    j.useEffect(() => {
      window.scrollTo(0, 0);
    }, []),
    r.jsxs("section", {
      id: "hero",
      className:
        "relative min-h-screen flex items-center pt-24 md:pt-20 overflow-hidden bg-black",
      children: [
        r.jsxs("div", {
          className: "absolute inset-0 z-0",
          children: [
            r.jsx(cT, {}),
            r.jsxs("div", {
              className: "absolute inset-0 pointer-events-none",
              children: [
                r.jsx("div", {
                  className:
                    "absolute top-0 right-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-primary/15 blur-[80px] md:blur-[130px] animate-pulse",
                }),
                r.jsx("div", {
                  className:
                    "absolute bottom-0 left-0 w-[250px] h-[250px] md:w-[500px] md:h-[500px] rounded-full bg-secondary/15 blur-[80px] md:blur-[130px]",
                }),
              ],
            }),
          ],
        }),
        r.jsx("div", {
          className: "container mx-auto px-6 relative z-10",
          children: r.jsxs("div", {
            className:
              "flex flex-col lg:flex-row items-center justify-between gap-12",
            children: [
              r.jsxs(le.div, {
                className:
                  "lg:w-1/2 text-center lg:text-left order-2 lg:order-1",
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                children: [
                  r.jsxs(le.span, {
                    className:
                      "inline-flex items-center gap-2 py-2 px-4 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/40 text-sm font-semibold mb-6 shadow-lg shadow-primary/20",
                    animate: {
                      boxShadow: [
                        "0 0 15px rgba(220, 38, 38, 0.2)",
                        "0 0 30px rgba(220, 38, 38, 0.35)",
                        "0 0 15px rgba(220, 38, 38, 0.2)",
                      ],
                    },
                    transition: {
                      duration: 3,
                      repeat: 1 / 0,
                      ease: "easeInOut",
                    },
                    children: [
                      r.jsx("span", {
                        className:
                          "w-2 h-2 bg-green-500 rounded-full animate-pulse",
                      }),
                      r.jsx("span", {
                        className:
                          "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent",
                        children: "Currently Open to New Opportunities",
                      }),
                    ],
                  }),
                  r.jsxs("h1", {
                    className:
                      "text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 leading-tight tracking-tight",
                    children: [
                      "I Secure Systems & Networks",
                      r.jsx("br", {}),
                      "Find Vulnerabilities, ",
                      r.jsx("br", {}),
                      r.jsx("span", {
                        className: "text-shimmer",
                        children: "Defend Against Threats.",
                      }),
                    ],
                  }),
                  r.jsxs("p", {
  className:
    "text-lg md:text-xl text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0",
  children: [
    "• Security Analyst • Ethical Hacker • Network Engineer",
    r.jsx("br", {}),
    "• Video Editor & Graphic Designer",
    r.jsx("br", {}),
    "I analyze security threats, monitor suspicious activity, troubleshoot network issues, and identify vulnerabilities to help protect digital systems. I combine cybersecurity knowledge with hands-on security testing to build safer, more reliable digital experiences. I also bring ideas to life through creative video editing and graphic design.",
  ],
}),
                  r.jsxs("div", {
                    className:
                      "flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-6",
                    children: [
                      r.jsxs("a", {
                        href: "#contact",
                        className: "premium-button",
                        children: [
                          r.jsx("div", { className: "blob1" }),
                          r.jsxs("div", {
                            className: "inner flex items-center",
                            children: [
                              "Let's Connect ",
                              r.jsx(bi, { className: "ml-2 w-4 h-4" }),
                            ],
                          }),
                        ],
                      }),
                      r.jsx("a", {
                        href: "#projects",
                        className:
                          "cursor-pointer bg-gradient-to-b from-red-600 to-red-700 shadow-[0px_4px_32px_0_rgba(220,38,38,.70)] px-5 py-2.5 rounded-xl border-[1px] border-red-500/50 text-white font-medium group",
                        children: r.jsxs("div", {
                          className:
                            "relative overflow-hidden flex items-center",
                          children: [
                            r.jsx("p", {
                              className:
                                "group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]",
                              children: "View Projects",
                            }),
                            r.jsx("p", {
                              className:
                                "absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]",
                              children: "View Projects",
                            }),
                            r.jsx(bi, { className: "ml-2 w-4 h-4" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              r.jsx(le.div, {
                className:
                  "lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end",
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, delay: 0.2 },
                children: r.jsxs(le.div, {
                  className:
                    "relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]",
                  animate: { y: [0, -8, 0] },
                  transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
                  children: [
                    r.jsx("div", {
                      className:
                        "absolute inset-2 md:inset-4 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-30 blur-[20px] md:blur-[30px]",
                    }),
                    r.jsx("div", {
                      className:
                        "relative w-full h-full rounded-full p-2 bg-gradient-to-br from-white/10 to-transparent border border-white/20",
                      children: r.jsx("img", {
                        src: oT,
                        alt: "Sumit Kumar Portrait",
                        loading: "eager",
                        className:
                          "w-full h-full object-cover object-[50%_25%] rounded-full border-4 border-black/50 shadow-2xl",
                      }),
                    }),
                    r.jsx(le.div, {
                      animate: { y: [0, -10, 0] },
                      transition: {
                        duration: 4,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                      },
                      className:
                        "absolute bottom-4 -left-2 md:bottom-8 md:-left-2 glass-panel px-2 py-1 md:px-3 md:py-1.5 rounded-md text-[10px] md:text-xs text-white font-medium shadow-lg border-primary/30",
                      children: "Ethical Hacker",
                    }),
                    r.jsx(le.div, {
  animate: { y: [0, -10, 0] },
  transition: {
    duration: 4,
    repeat: 1 / 0,
    ease: "easeInOut",
  },
  className:
    "absolute bottom-4 -right-2 md:bottom-8 md:-right-2 glass-panel px-2 py-1 md:px-3 md:py-1.5 rounded-md text-[10px] md:text-xs text-white font-medium shadow-lg border-primary/30",
  children: "Video Editor & Graphic Designer",
}),
                    r.jsx(le.div, {
                      animate: { y: [0, 10, 0] },
                      transition: {
                        duration: 5,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 1,
                      },
                      className:
                        "absolute top-8 -right-2 glass-panel px-2 py-1 md:px-3 md:py-1.5 rounded-md text-[10px] md:text-xs text-white font-medium shadow-lg border-primary/30",
                      children: "Network Engineer",
                    }),
                    r.jsx(le.div, {
                      animate: { x: [0, 10, 0] },
                      transition: {
                        duration: 6,
                        repeat: 1 / 0,
                        ease: "easeInOut",
                        delay: 2,
                      },
                      className:
                        "absolute top-20 -left-6 md:top-1/3 md:-translate-y-1/2 md:-left-8 glass-panel px-2 py-1 md:px-3 md:py-1.5 rounded-md text-[10px] md:text-xs text-white font-medium shadow-lg border-primary/30",
                      children: "Security Analyst",
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        r.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-black/70 to-neutral-900 pointer-events-none",
        }),
      ],
    })
  ),
  dT = ({
    children: n,
    className: i = "",
    spotlightColor: l = "rgba(220, 38, 38, 0.2)",
  }) => {
    const o = j.useRef(null),
      [d, h] = j.useState({ x: 0, y: 0 }),
      [f, x] = j.useState(0),
      p = (b) => {
        if (!o.current) return;
        const w = o.current.getBoundingClientRect();
        h({ x: b.clientX - w.left, y: b.clientY - w.top });
      },
      g = () => {
        x(1);
      },
      y = () => {
        x(0);
      };
    return r.jsxs(le.div, {
      ref: o,
      onMouseMove: p,
      onMouseEnter: g,
      onMouseLeave: y,
      className: `relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl ${i}`,
      whileHover: { scale: 1.02 },
      transition: { duration: 0.2 },
      children: [
        r.jsx("div", {
          className:
            "pointer-events-none absolute -inset-px opacity-0 transition duration-300",
          style: {
            opacity: f,
            background: `radial-gradient(600px circle at ${d.x}px ${d.y}px, ${l}, transparent 40%)`,
          },
        }),
        r.jsx("div", { className: "relative", children: n }),
      ],
    });
  },
  fT = () =>
    r.jsxs("section", {
      id: "about",
      className: "py-20 bg-neutral-900 relative",
      children: [
        r.jsx("div", {
          className:
            "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black pointer-events-none",
        }),
        r.jsx("div", {
          className: "container mx-auto px-6 max-w-4xl relative z-10",
          children: r.jsxs(le.div, {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: !0 },
            transition: { duration: 0.6 },
            children: [
              r.jsxs("h2", {
                className:
                  "text-3xl md:text-4xl font-bold text-white mb-8 text-center",
                children: [
                  "About ",
                  r.jsx("span", { className: "text-primary", children: "Me" }),
                ],
              }),
              r.jsx(dT, {
                className: "p-8 md:p-12 h-auto min-h-0",
                children: r.jsxs("div", {
                  className:
                    "relative z-10 space-y-5 text-gray-300 text-base md:text-lg leading-relaxed",
                  children: [
                    
                    r.jsxs("p", {
                      children: [
                        "I'm ",
                        r.jsx("strong", {
                        className: "text-primary",
                        children: "Sumit Kumar",
                        }),
                        ", a Bachelor of Computer Applications (BCA) graduate with a strong interest in cybersecurity, networking, and digital media. I have foundational knowledge of SOC operations, network security, TCP/IP, subnetting, network troubleshooting, SIEM concepts, security monitoring, log analysis, threat detection, incident response and vulnerability assessment, with practical exposure to tools such as Splunk, Wireshark, Nmap, Metasploit, and Burp Suite. I am comfortable working in both Windows and Linux environments. ",
                        
                      ],
                    }),
                    r.jsxs("p", {
                      children: [
                        "I have developed hands-on projects, including a Cyber Security AI Toolkit, a Python-based Malware Scanner, a Network Vulnerability Scanner, and a Subnet Optimizer. These projects have helped me apply my technical knowledge to security analysis, network scanning, and efficient network planning. I have also completed cybersecurity training at CETPA Infotech. ",
    
                      ],
                    }),
                    r.jsxs("p", {
                      children: [
                        "In addition to my technical background, I have experience in video editing and graphic design, creating engaging digital content, social media graphics, thumbnails, and promotional materials. I bring together analytical thinking, problem-solving, and visual creativity to deliver practical technical solutions and compelling digital experiences. I am committed to continuous learning and developing my expertise across networking, cybersecurity, and creative media.",
                                            
                      ],
                    }),
                    
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  hT = ({ onComplete: n }) => (
    j.useEffect(() => {
      const l = setTimeout(() => {
        n();
      }, 2500);
      return () => clearTimeout(l);
    }, [n]),
    r.jsx(le.div, {
      className:
        "fixed inset-0 z-[100] flex items-center justify-center bg-black",
      exit: { opacity: 0 },
      transition: { duration: 0.3 },
      children: r.jsx("div", {
        className: "flex flex-col items-center relative z-10",
        children: r.jsxs("div", {
          className: "loader-wrapper",
          children: [
            "Sumit Kumar   "
              .split("")
              .map((l, o) =>
                r.jsx(
                  "span",
                  {
                    className: `loader-letter ${l === " " ? "loader-space" : ""}`,
                    style: { animationDelay: `${0.1 + o * 0.105}s` },
                    children: l === " " ? " " : l,
                  },
                  o,
                ),
              ),
            r.jsx("div", { className: "loader" }),
          ],
        }),
      }),
    })
  ),
  mT = j.lazy(() => js(() => import("./Skills.js"), [])),
  pT = j.lazy(() => js(() => import("./Projects.js"), [])),
  gT = j.lazy(() => js(() => import("./Resume.js"), [])),
  bT = j.lazy(() => js(() => import("./Contact.js"), []));
function vT() {
  const [n, i] = j.useState(!0);
  (j.useEffect(() => {
    n ||
      fetch("/api/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ path: window.location.pathname }),
      }).catch(() => {});
  }, [n]),
    j.useEffect(() => {
      if (n) return;
      const x = [
          "about",
          "skills",
          "projects",
          "resume",
          "contact",
        ],
        p = new IntersectionObserver(
          (w) => {
            w.forEach((T) => {
              T.isIntersecting &&
                window.location.hash &&
                history.replaceState(null, "", window.location.pathname);
            });
          },
          { rootMargin: "-10% 0px -70% 0px", threshold: 0 },
        ),
        g = document.getElementById("hero");
      g && p.observe(g);
      const y = (w) => {
          w.forEach((T) => {
            if (T.isIntersecting) {
              const R = T.target.id;
              R &&
                window.location.hash !== `#${R}` &&
                history.replaceState(null, "", `#${R}`);
            }
          });
        },
        b = new IntersectionObserver(y, {
          rootMargin: "-20% 0px -60% 0px",
          threshold: 0,
        });
      return (
        x.forEach((w) => {
          const T = document.getElementById(w);
          T && b.observe(T);
        }),
        () => {
          (p.disconnect(), b.disconnect());
        }
      );
    }, [n]),
    j.useEffect(() => {
      if (
        ("scrollRestoration" in history &&
          (history.scrollRestoration = "manual"),
        !n)
      )
        if (window.location.hash) {
          const x = window.location.hash.slice(1),
            p = document.getElementById(x);
          p &&
            setTimeout(() => {
              p.scrollIntoView({ behavior: "instant" });
            }, 100);
        } else
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "instant" });
          }, 50);
    }, [n]));
  const [l, o] = j.useState(!1),
    [d, h] = j.useState(0);
  j.useEffect(() => {
    const x = () => {
      const p = window.scrollY,
        g = document.documentElement.scrollHeight - window.innerHeight,
        y = Math.min(p / g, 1);
      (o(p > 500), h(y));
    };
    return (
      window.addEventListener("scroll", x, { passive: !0 }),
      () => window.removeEventListener("scroll", x)
    );
  }, []);
  const f = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return r.jsxs(r.Fragment, {
    children: [
      r.jsx(Hn, {
        mode: "wait",
        children: n && r.jsx(hT, { onComplete: () => i(!1) }),
      }),
      r.jsxs("div", {
        className: `min-h-screen bg-black text-white selection:bg-primary selection:text-white overflow-x-hidden ${n ? "opacity-0" : "opacity-100"} transition-opacity duration-500`,
        children: [
          r.jsx(Rl, {}),
          r.jsxs("main", {
            children: [
              r.jsx(uT, {}),
              r.jsx(fT, {}),
              r.jsxs(j.Suspense, {
                fallback: null,
                children: [
                  r.jsx(mT, {}),
                  r.jsx(pT, {}),
                  r.jsx(gT, {}),
                  r.jsx(bT, {}),
                ],
              }),
            ],
          }),
          r.jsx(Lo, {}),
        ],
      }),
      r.jsx(Hn, {
        children:
          l &&
          r.jsx(le.button, {
            initial: { opacity: 0, x: 100 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: 100 },
            transition: { type: "spring", damping: 20, stiffness: 200 },
            onClick: f,
            className: "fixed bottom-8 right-6 z-50 group cursor-pointer",
            "aria-label": "Scroll to top",
            children: r.jsx("div", {
              className:
                "relative flex items-center px-2.5 py-2 rounded-full bg-neutral-900/90 backdrop-blur-md border border-white/10 shadow-xl shadow-black/40 hover:border-primary/30 transition-all duration-300",
              children: r.jsxs("div", {
                className: "relative w-6 h-6",
                children: [
                  r.jsxs("svg", {
                    className: "w-6 h-6 -rotate-90",
                    viewBox: "0 0 36 36",
                    children: [
                      r.jsx("circle", {
                        cx: "18",
                        cy: "18",
                        r: "14",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2.5",
                        className: "text-white/10",
                      }),
                      r.jsx("circle", {
                        cx: "18",
                        cy: "18",
                        r: "14",
                        fill: "none",
                        stroke: "url(#progressGradient)",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeDasharray: 88,
                        strokeDashoffset: 88 - 88 * d,
                        className:
                          "drop-shadow-[0_0_4px_rgba(220,38,38,0.5)] transition-[stroke-dashoffset] duration-150",
                      }),
                      r.jsx("defs", {
                        children: r.jsxs("linearGradient", {
                          id: "progressGradient",
                          x1: "0%",
                          y1: "0%",
                          x2: "100%",
                          y2: "0%",
                          children: [
                            r.jsx("stop", {
                              offset: "0%",
                              stopColor: "#DC2626",
                            }),
                            r.jsx("stop", {
                              offset: "100%",
                              stopColor: "#EF4444",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  r.jsx("div", {
                    className:
                      "absolute inset-0 flex items-center justify-center",
                    children: r.jsx("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      className:
                        "w-3 h-3 text-white group-hover:text-primary transition-colors animate-bounce",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      stroke: "currentColor",
                      strokeWidth: 2.5,
                      children: r.jsx("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        d: "M5 15l7-7 7 7",
                      }),
                    }),
                  }),
                ],
              }),
            }),
          }),
      }),
    ],
  });
}
const wT = [
    {
      title: "1. Information We Collect",
      content:
        "When you use our contact form or book a mentorship session, we may collect your name, email address, phone number, and UPI transaction ID. We do not collect any information automatically beyond standard web analytics.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "Your information is used solely to respond to your inquiries, confirm mentorship bookings, verify payments, and improve our services. We will never sell, rent, or share your personal data with third parties for marketing purposes.",
    },
    {
      title: "3. Third-Party Services",
      content: `We use the following third-party services:

• EmailJS — to process contact form submissions and booking confirmations. Your name, email, and message are transmitted securely to our inbox.
• Vercel — for website hosting and deployment.
• Google Fonts — for typography (Inter font family).

These services have their own privacy policies governing the use of your information.`,
    },
    {
      title: "4. Cookies & Tracking",
      content:
        "This website does not use cookies for tracking or advertising. We do not use Google Analytics or any third-party tracking scripts. Your browsing activity on this site is not monitored or stored.",
    },
    {
      title: "5. Data Security",
      content:
        "We take reasonable measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. While we strive to protect your data, we cannot guarantee its absolute security.",
    },
    {
      title: "6. Data Retention",
      content:
        "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. Booking and payment records are retained for accounting and verification purposes.",
    },
    {
      title: "7. Your Rights",
      content:
        "You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us using the information provided below.",
    },
    {
      title: "8. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Continued use of the website after changes constitutes acceptance of the updated policy.",
    },
    {
      title: "9. Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please reach out through the contact form on our website or email us directly.",
    },
  ],
  jT = () =>
    r.jsxs("div", {
      className: "min-h-screen bg-black text-white",
      children: [
        r.jsx("div", {
          className: "border-b border-neutral-800",
          children: r.jsxs("div", {
            className:
              "container mx-auto px-6 py-6 flex items-center justify-between",
            children: [
              r.jsxs(mt, {
                to: "/",
                className:
                  "inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300",
                children: [
                  r.jsx(bs, { size: 18 }),
                  r.jsx("span", {
                    className: "text-sm font-medium",
                    children: "Back to Home",
                  }),
                ],
              }),
              r.jsx(L3, { className: "text-primary", size: 24 }),
            ],
          }),
        }),
        r.jsxs("div", {
          className: "container mx-auto px-6 py-16 max-w-3xl",
          children: [
            r.jsxs(le.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: [
                r.jsxs("h1", {
                  className: "text-4xl md:text-5xl font-bold mb-4",
                  children: [
                    "Privacy ",
                    r.jsx("span", {
                      className: "text-primary",
                      children: "Policy",
                    }),
                  ],
                }),
                r.jsx("p", {
                  className: "text-gray-500 text-sm mb-12",
                  children: "Last updated: June 2026",
                }),
                r.jsxs("p", {
                  className: "text-gray-300 leading-relaxed mb-12",
                  children: [
                    'Your privacy is important to us. This Privacy Policy explains how Sumit Kumar    ("we", "us", or "our") collects, uses, and protects your personal information when you visit ',
                    r.jsx("span", {
                      className: "text-white font-medium",
                      children: "Sumit Kumar  .vercel.app",
                    }),
                    ".",
                  ],
                }),
              ],
            }),
            r.jsx("div", {
              className: "space-y-8",
              children: wT.map((n, i) =>
                r.jsxs(
                  le.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.1 * i },
                    className:
                      "p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300",
                    children: [
                      r.jsx("h2", {
                        className: "text-xl font-semibold text-white mb-3",
                        children: n.title,
                      }),
                      r.jsx("p", {
                        className:
                          "text-gray-400 leading-relaxed whitespace-pre-line",
                        children: n.content,
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
            r.jsx(le.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1 },
              className: "mt-16 pt-8 border-t border-neutral-800 text-center",
              children: r.jsxs(mt, {
                to: "/",
                className:
                  "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 font-medium",
                children: [r.jsx(bs, { size: 16 }), "Back to Home"],
              }),
            }),
          ],
        }),
      ],
    }),
  ST = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using this website (Sumit Kumar  .vercel.app), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use this website.",
    },
    {
      title: "2. Services Offered",
      content: `Sumit Kumar    offers the following professional services:

• Web Development — Custom websites using React, Next.js, TypeScript & Tailwind CSS
• Video Editing — YouTube videos, Instagram Reels, promotional & corporate video editing
• AI & Automation — ChatGPT integration, AI workflow automation, prompt engineering
• SEO Services — On-page SEO, technical SEO, keyword research & optimization
• Content Creation — Social media content, scripts, blogs & copywriting
• 1-on-1 Tech Mentorship — Personalized coding & career guidance sessions`,
    },
    {
      title: "3. Mentorship & Payment Terms",
      content: `Mentorship sessions are available in two tiers:

• Power Session (30 minutes) — ₹999
• Deep Dive Session (1 hour) — ₹1,999

Payment is required before session confirmation. We accept payments via UPI (PhonePe, Google Pay, Paytm). A valid UPI Transaction ID (UTR) must be submitted during booking. No confirmation email will be sent until payment is verified.

Session scheduling is subject to availability. You will receive a confirmation email with session details after successful payment verification.`,
    },
    {
      title: "4. Refund Policy",
      content: `• If a session is cancelled by us, you will receive a full refund.
• Cancellation requests made at least 24 hours before the scheduled session are eligible for a full refund.
• Cancellations made less than 24 hours before the session are non-refundable.
• No-shows are non-refundable.
• For custom project work, refund terms will be discussed on a case-by-case basis before project commencement.`,
    },
    {
      title: "5. Intellectual Property",
      content: `All content on this website — including but not limited to text, graphics, logos, code, and design — is the intellectual property of Sumit Kumar    and is protected under applicable copyright laws.

For client projects, intellectual property rights will be transferred to the client upon full payment, unless otherwise agreed in writing.`,
    },
    {
      title: "6. User Responsibilities",
      content: `When using this website or our services, you agree to:

• Provide accurate and truthful information
• Not submit fraudulent payment details or fake transaction IDs
• Not attempt to exploit, hack, or disrupt the website
• Respect scheduled session times and cancellation policies`,
    },
    {
      title: "7. Limitation of Liability",
      content:
        "Sumit Kumar    shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of this website or services. Our total liability shall not exceed the amount paid by you for the specific service in question.",
    },
    {
      title: "8. Disclaimer",
      content:
        'This website and its services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee specific results from our mentorship sessions or services.',
    },
    {
      title: "9. Governing Law",
      content:
        "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in India.",
    },
    {
      title: "10. Changes to Terms",
      content:
        "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website constitutes acceptance of any modified terms.",
    },
    {
      title: "11. Contact",
      content:
        "For any questions regarding these Terms of Service, please reach out through the contact form on our website.",
    },
  ],
  NT = () =>
    r.jsxs("div", {
      className: "min-h-screen bg-black text-white",
      children: [
        r.jsx("div", {
          className: "border-b border-neutral-800",
          children: r.jsxs("div", {
            className:
              "container mx-auto px-6 py-6 flex items-center justify-between",
            children: [
              r.jsxs(mt, {
                to: "/",
                className:
                  "inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300",
                children: [
                  r.jsx(bs, { size: 18 }),
                  r.jsx("span", {
                    className: "text-sm font-medium",
                    children: "Back to Home",
                  }),
                ],
              }),
              r.jsx(jb, { className: "text-primary", size: 24 }),
            ],
          }),
        }),
        r.jsxs("div", {
          className: "container mx-auto px-6 py-16 max-w-3xl",
          children: [
            r.jsxs(le.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6 },
              children: [
                r.jsxs("h1", {
                  className: "text-4xl md:text-5xl font-bold mb-4",
                  children: [
                    "Terms of ",
                    r.jsx("span", {
                      className: "text-primary",
                      children: "Service",
                    }),
                  ],
                }),
                r.jsx("p", {
                  className: "text-gray-500 text-sm mb-12",
                  children: "Last updated: June 2026",
                }),
                r.jsxs("p", {
                  className: "text-gray-300 leading-relaxed mb-12",
                  children: [
                    "Please read these Terms of Service carefully before using the website operated by Sumit Kumar    (",
                    r.jsx("span", {
                      className: "text-white font-medium",
                      children: "Sumit Kumar  .vercel.app",
                    }),
                    ").",
                  ],
                }),
              ],
            }),
            r.jsx("div", {
              className: "space-y-8",
              children: ST.map((n, i) =>
                r.jsxs(
                  le.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5, delay: 0.1 * i },
                    className:
                      "p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-neutral-700 transition-colors duration-300",
                    children: [
                      r.jsx("h2", {
                        className: "text-xl font-semibold text-white mb-3",
                        children: n.title,
                      }),
                      r.jsx("p", {
                        className:
                          "text-gray-400 leading-relaxed whitespace-pre-line",
                        children: n.content,
                      }),
                    ],
                  },
                  i,
                ),
              ),
            }),
            r.jsx(le.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { delay: 1 },
              className: "mt-16 pt-8 border-t border-neutral-800 text-center",
              children: r.jsxs(mt, {
                to: "/",
                className:
                  "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300 font-medium",
                children: [r.jsx(bs, { size: 16 }), "Back to Home"],
              }),
            }),
          ],
        }),
      ],
    }),
  TT = (n) => {
    const i = n.split(`
`),
      l = [];
    let o = [],
      d = null,
      h = [],
      f = !1,
      x = "";
    const p = (b) =>
        b
          .replace(
            /!\[([^\]]*)\]\(([^)]+)\)/g,
            '<img src="$2" alt="$1" style="max-width:100%;border-radius:6px;margin:4px 0">',
          )
          .replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<a href="$2" target="_blank" rel="noopener" style="color:#ef4444;text-decoration:underline">$1</a>',
          )
          .replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>")
          .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
          .replace(/\*([^*]+)\*/g, "<em>$1</em>")
          .replace(/~~([^~]+)~~/g, "<del>$1</del>")
          .replace(
            /`([^`]+)`/g,
            '<code style="background:rgba(239,68,68,0.15);padding:2px 6px;border-radius:4px;color:#fca5a5;font-size:0.85em;font-family:monospace">$1</code>',
          ),
      g = (b) => {
        if (!o.length || !d) return;
        const w = d === "ol" ? "ol" : "ul";
        (l.push(
          r.jsx(
            w,
            {
              style: {
                paddingLeft: "1.5rem",
                marginBottom: "1rem",
                color: "#d1d5db",
              },
              children: o.map((T, R) =>
                r.jsx(
                  "li",
                  {
                    dangerouslySetInnerHTML: { __html: p(T) },
                    style: { marginBottom: "0.3rem", lineHeight: 1.7 },
                  },
                  R,
                ),
              ),
            },
            b,
          ),
        ),
          (o = []),
          (d = null));
      },
      y = (b) => {
        h.length &&
          (l.push(
            r.jsx(
              "pre",
              {
                style: {
                  background: "#0d0d17",
                  border: "1px solid #27272a",
                  borderRadius: "0.75rem",
                  padding: "1rem 1.25rem",
                  overflowX: "auto",
                  marginBottom: "1.25rem",
                  position: "relative",
                },
                children: r.jsx("code", {
                  style: {
                    color: "#a5f3fc",
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    fontSize: "0.8rem",
                    lineHeight: 1.8,
                  },
                  children: h.join(`
`),
                }),
              },
              b,
            ),
          ),
          (h = []));
      };
    return (
      i.forEach((b, w) => {
        const T = b.trim(),
          R = `ln-${w}`;
        if (T.startsWith("```")) {
          f ? (y(x), (f = !1)) : (g(R), (f = !0), (x = R));
          return;
        }
        if (f) {
          h.push(b);
          return;
        }
        if (T === "") {
          g(R);
          return;
        }
        if (T.startsWith("# ")) {
          (g(R),
            l.push(
              r.jsx(
                "h1",
                {
                  style: {
                    fontSize: "2rem",
                    fontWeight: 800,
                    color: "#fff",
                    margin: "1.75rem 0 0.75rem",
                    lineHeight: 1.2,
                  },
                  dangerouslySetInnerHTML: { __html: p(T.slice(2)) },
                },
                R,
              ),
            ));
          return;
        }
        if (T.startsWith("## ")) {
          (g(R),
            l.push(
              r.jsx(
                "h2",
                {
                  style: {
                    fontSize: "1.45rem",
                    fontWeight: 700,
                    color: "#f3f4f6",
                    margin: "1.5rem 0 0.6rem",
                    paddingBottom: "0.4rem",
                    borderBottom: "1px solid #27272a",
                    lineHeight: 1.3,
                  },
                  dangerouslySetInnerHTML: { __html: p(T.slice(3)) },
                },
                R,
              ),
            ));
          return;
        }
        if (T.startsWith("### ")) {
          (g(R),
            l.push(
              r.jsx(
                "h3",
                {
                  style: {
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#e5e7eb",
                    margin: "1.25rem 0 0.5rem",
                  },
                  dangerouslySetInnerHTML: { __html: p(T.slice(4)) },
                },
                R,
              ),
            ));
          return;
        }
        if (T.startsWith("#### ")) {
          (g(R),
            l.push(
              r.jsx(
                "h4",
                {
                  style: {
                    fontSize: "1rem",
                    fontWeight: 600,
                    color: "#d1d5db",
                    margin: "1rem 0 0.4rem",
                  },
                  dangerouslySetInnerHTML: { __html: p(T.slice(5)) },
                },
                R,
              ),
            ));
          return;
        }
        if (T.startsWith("> ")) {
          (g(R),
            l.push(
              r.jsx(
                "blockquote",
                {
                  style: {
                    borderLeft: "3px solid #ef4444",
                    margin: "1rem 0",
                    background: "rgba(239,68,68,0.07)",
                    borderRadius: "0 0.5rem 0.5rem 0",
                    padding: "0.75rem 1.25rem",
                    color: "#9ca3af",
                    fontStyle: "italic",
                  },
                  dangerouslySetInnerHTML: { __html: p(T.slice(2)) },
                },
                R,
              ),
            ));
          return;
        }
        if (T === "---" || T === "***" || T === "___") {
          (g(R),
            l.push(
              r.jsx(
                "hr",
                {
                  style: {
                    border: "none",
                    borderTop: "1px solid #27272a",
                    margin: "1.75rem 0",
                  },
                },
                R,
              ),
            ));
          return;
        }
        if (T.startsWith("- ") || T.startsWith("* ")) {
          (d !== "ul" && g(R), (d = "ul"), o.push(T.slice(2)));
          return;
        }
        if (/^\d+\.\s/.test(T)) {
          (d !== "ol" && g(R), (d = "ol"), o.push(T.replace(/^\d+\.\s/, "")));
          return;
        }
        (g(R),
          l.push(
            r.jsx(
              "p",
              {
                style: {
                  color: "#d1d5db",
                  lineHeight: 1.85,
                  marginBottom: "0.85rem",
                  fontSize: "0.925rem",
                },
                dangerouslySetInnerHTML: { __html: p(T) },
              },
              R,
            ),
          ));
      }),
      g("end"),
      y("end-code"),
      l
    );
  },
  Vt = ({ title: n, onClick: i, children: l }) =>
    r.jsx("button", {
      type: "button",
      title: n,
      onClick: i,
      className:
        "w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer text-gray-400 hover:bg-white/10 hover:text-white active:scale-95",
      children: l,
    }),
  Ed = () =>
    r.jsx("div", { className: "w-px h-5 bg-white/10 mx-0.5 shrink-0" }),
  ET = ({ value: n, onChange: i, theme: l, placeholder: o }) => {
    const d = j.useRef(null),
      [h, f] = j.useState("write"),
      [x, p] = j.useState(!1),
      [g, y] = j.useState(""),
      [b, w] = j.useState(""),
      [T, R] = j.useState(!1),
      [C, D] = j.useState(""),
      [_, V] = j.useState(""),
      E = l === "dark",
      Q = j.useCallback((I, he, we = "") => {
        const ze = d.current;
        if (!ze) return;
        const je = ze.selectionStart,
          ke = ze.selectionEnd,
          H = ze.value.substring(je, ke),
          K = H || we,
          ae = ze.value.substring(0, je) + I + K + he + ze.value.substring(ke);
        (Object.getOwnPropertyDescriptor(
          HTMLTextAreaElement.prototype,
          "value",
        )?.set?.call(ze, ae),
          ze.dispatchEvent(new Event("input", { bubbles: !0 })),
          requestAnimationFrame(() => {
            (ze.focus(),
              H
                ? ze.setSelectionRange(je + I.length, je + I.length + H.length)
                : ze.setSelectionRange(
                    je + I.length,
                    je + I.length + K.length,
                  ));
          }));
      }, []),
      X = j.useCallback((I, he = "text") => {
        const we = d.current;
        if (!we) return;
        const ze = we.selectionStart,
          je = we.value.substring(0, ze),
          ke = we.value.substring(ze),
          H =
            je.length > 0 &&
            !je.endsWith(`
`)
              ? `
`
              : "",
          K =
            je +
            H +
            I +
            he +
            `
` +
            ke;
        (Object.getOwnPropertyDescriptor(
          HTMLTextAreaElement.prototype,
          "value",
        )?.set?.call(we, K),
          we.dispatchEvent(new Event("input", { bubbles: !0 })),
          requestAnimationFrame(() => {
            we.focus();
            const xe = je.length + H.length + I.length;
            we.setSelectionRange(xe, xe + he.length);
          }));
      }, []);
    j.useEffect(() => {
      const I = d.current;
      if (!I) return;
      const he = () => i(I.value);
      return (
        I.addEventListener("input", he),
        () => I.removeEventListener("input", he)
      );
    }, [i]);
    const W = (I) => {
        if (I.ctrlKey || I.metaKey) {
          if (I.key === "b") {
            (I.preventDefault(), Q("**", "**", "bold text"));
            return;
          }
          if (I.key === "i") {
            (I.preventDefault(), Q("*", "*", "italic text"));
            return;
          }
          if (I.key === "k") {
            (I.preventDefault(), p(!0), y(""), w(""));
            return;
          }
        }
        I.key === "Tab" && (I.preventDefault(), Q("  ", "", ""));
      },
      P = n.trim() ? n.trim().split(/\s+/).length : 0,
      Z = n.length,
      ie = Math.max(1, Math.ceil(P / 200));
    return r.jsxs("div", {
      className: `rounded-2xl border overflow-hidden flex flex-col ${E ? "bg-neutral-900 border-white/10" : "bg-white border-slate-200"}`,
      children: [
        r.jsxs("div", {
          className: `flex items-center gap-0.5 px-2 py-2 border-b flex-wrap ${E ? "border-white/8 bg-neutral-900" : "border-slate-200 bg-slate-50"}`,
          children: [
            r.jsx(Vt, {
              title: "Heading 1  (# )",
              onClick: () => X("# ", "Heading 1"),
              children: r.jsx(H4, { size: 14 }),
            }),
            r.jsx(Vt, {
              title: "Heading 2  (## )",
              onClick: () => X("## ", "Heading 2"),
              children: r.jsx($4, { size: 14 }),
            }),
            r.jsx(Vt, {
              title: "Heading 3  (### )",
              onClick: () => X("### ", "Heading 3"),
              children: r.jsx(Y4, { size: 14 }),
            }),
            r.jsx(Ed, {}),
            r.jsx(Vt, {
              title: "Bold  (Ctrl+B)",
              onClick: () => Q("**", "**", "bold text"),
              children: r.jsx(c4, { size: 13 }),
            }),
            r.jsx(Vt, {
              title: "Italic  (Ctrl+I)",
              onClick: () => Q("*", "*", "italic text"),
              children: r.jsx(e3, { size: 13 }),
            }),
            r.jsx(Vt, {
              title: "Strikethrough",
              onClick: () => Q("~~", "~~", "strikethrough"),
              children: r.jsx(X3, { size: 13 }),
            }),
            r.jsx(Vt, {
              title: "Inline Code",
              onClick: () => Q("`", "`", "code"),
              children: r.jsx(E4, { size: 13 }),
            }),
            r.jsx(Ed, {}),
            r.jsx(Vt, {
              title: "Insert Link  (Ctrl+K)",
              onClick: () => {
                (p(!0), y(""), w(""));
              },
              children: r.jsx(ux, { size: 13 }),
            }),
            r.jsx(Vt, {
              title: "Insert Image",
              onClick: () => {
                (R(!0), D(""), V(""));
              },
              children: r.jsx(Id, { size: 13 }),
            }),
            r.jsx(Ed, {}),
            r.jsx(Vt, {
              title: "Bullet List  (- )",
              onClick: () => X("- ", "list item"),
              children: r.jsx(r3, { size: 13 }),
            }),
            r.jsx(Vt, {
              title: "Numbered List  (1. )",
              onClick: () => X("1. ", "list item"),
              children: r.jsx(s3, { size: 13 }),
            }),
            r.jsx(Vt, {
              title: "Blockquote  (> )",
              onClick: () => X("> ", "quote text"),
              children: r.jsx(C3, { size: 13 }),
            }),
            r.jsx(Vt, {
              title: "Code Block",
              onClick: () => X("```\n", "code here\n```"),
              children: r.jsx("span", {
                className: "font-mono text-[10px] font-bold",
                children: "{}",
              }),
            }),
            r.jsx(Vt, {
              title: "Horizontal Rule  (---)",
              onClick: () => X("---", ""),
              children: r.jsx(v3, { size: 13 }),
            }),
            r.jsx("div", { className: "flex-1" }),
            r.jsx("div", {
              className: `flex items-center rounded-lg overflow-hidden border ${E ? "bg-neutral-800 border-white/8" : "bg-slate-100 border-slate-200"}`,
              children: ["write", "split", "preview"].map((I) =>
                r.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => f(I),
                    className: `flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium transition-all cursor-pointer capitalize ${h === I ? "bg-primary text-white shadow-sm" : E ? "text-gray-500 hover:text-gray-200" : "text-slate-500 hover:text-slate-700"}`,
                    children: [
                      I === "write" && r.jsx(ef, { size: 10 }),
                      I === "split" && r.jsx(Z3, { size: 10 }),
                      I === "preview" && r.jsx(Jd, { size: 10 }),
                      I,
                    ],
                  },
                  I,
                ),
              ),
            }),
          ],
        }),
        r.jsxs("div", {
          className: `flex flex-1 ${h === "split" ? "divide-x divide-white/8" : ""}`,
          style: { minHeight: 440 },
          children: [
            h !== "preview" &&
              r.jsx("textarea", {
                ref: d,
                value: n,
                onChange: (I) => i(I.target.value),
                onKeyDown: W,
                placeholder:
                  o ||
                  `## Introduction

Write your blog post here...

## Section 1

Your content goes here...

- Bullet point 1
- Bullet point 2

> 💡 Tip or quote

\`\`\`
code block
\`\`\``,
                spellCheck: !1,
                className: `flex-1 resize-none p-5 text-sm font-mono leading-7 focus:outline-none ${h === "split" ? "w-1/2" : "w-full"} ${E ? "bg-neutral-900 text-gray-200 placeholder:text-neutral-700" : "bg-white text-slate-800 placeholder:text-slate-300"}`,
                style: { minHeight: 440 },
              }),
            h !== "write" &&
              r.jsx("div", {
                className: `flex-1 overflow-y-auto p-5 ${h === "split" ? "w-1/2" : "w-full"} ${E ? "bg-neutral-950" : "bg-slate-50"}`,
                style: { minHeight: 440 },
                children: n.trim()
                  ? r.jsx("div", { children: TT(n) })
                  : r.jsxs("div", {
                      className:
                        "h-full flex flex-col items-center justify-center gap-3 text-gray-600",
                      children: [
                        r.jsx(Jd, { size: 32, className: "opacity-30" }),
                        r.jsx("p", {
                          className: "text-sm",
                          children: "Start writing to see preview...",
                        }),
                      ],
                    }),
              }),
          ],
        }),
        r.jsxs("div", {
          className: `flex items-center justify-between px-4 py-2 border-t text-[11px] ${E ? "border-white/5 bg-neutral-900/60 text-neutral-600" : "border-slate-100 bg-slate-50 text-slate-400"}`,
          children: [
            r.jsxs("div", {
              className: "flex items-center gap-4",
              children: [
                r.jsxs("span", { children: [P, " words"] }),
                r.jsxs("span", { children: [Z, " chars"] }),
                r.jsxs("span", { children: ["~", ie, " min read"] }),
              ],
            }),
            r.jsxs("div", {
              className:
                "hidden sm:flex items-center gap-3 text-[10px] opacity-70",
              children: [
                r.jsx("span", { children: "**bold**" }),
                r.jsx("span", { children: "*italic*" }),
                r.jsx("span", { children: "## H2" }),
                r.jsx("span", { children: "> quote" }),
                r.jsx("span", { children: "- list" }),
                r.jsx("span", { children: "Ctrl+B/I/K" }),
              ],
            }),
          ],
        }),
        x &&
          r.jsx("div", {
            className:
              "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",
            onClick: (I) => {
              I.target === I.currentTarget && p(!1);
            },
            children: r.jsxs("div", {
              className: `w-full max-w-sm rounded-2xl border p-6 shadow-2xl ${E ? "bg-neutral-900 border-white/10" : "bg-white border-slate-200"}`,
              children: [
                r.jsxs("h3", {
                  className: `text-sm font-bold mb-4 flex items-center gap-2 ${E ? "text-white" : "text-slate-800"}`,
                  children: [
                    r.jsx(ux, { size: 15, className: "text-primary" }),
                    " Insert Link",
                  ],
                }),
                r.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className: "text-xs text-gray-500 mb-1.5 block",
                          children: "Display Text",
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: g,
                          onChange: (I) => y(I.target.value),
                          placeholder: "Click here",
                          autoFocus: !0,
                          className: `w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 transition-colors ${E ? "bg-neutral-800 border-white/10 text-white placeholder:text-gray-600" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                          onKeyDown: (I) => {
                            if (I.key === "Enter") {
                              I.preventDefault();
                              const he = g || b;
                              he && b && (Q(`[${he}](${b})`, "", ""), p(!1));
                            }
                          },
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className: "text-xs text-gray-500 mb-1.5 block",
                          children: "URL",
                        }),
                        r.jsx("input", {
                          type: "url",
                          value: b,
                          onChange: (I) => w(I.target.value),
                          placeholder: "https://example.com",
                          className: `w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 transition-colors ${E ? "bg-neutral-800 border-white/10 text-white placeholder:text-gray-600" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                          onKeyDown: (I) => {
                            if (I.key === "Enter") {
                              I.preventDefault();
                              const he = g || b;
                              he && b && (Q(`[${he}](${b})`, "", ""), p(!1));
                            }
                          },
                        }),
                      ],
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex gap-2 mt-5",
                  children: [
                    r.jsx("button", {
                      type: "button",
                      onClick: () => p(!1),
                      className: `flex-1 py-2.5 rounded-xl text-sm border cursor-pointer hover:bg-white/5 transition-colors ${E ? "border-white/10 text-gray-400" : "border-slate-200 text-slate-500"}`,
                      children: "Cancel",
                    }),
                    r.jsx("button", {
                      type: "button",
                      disabled: !b,
                      onClick: () => {
                        (Q(`[${g || b}](${b})`, "", ""), p(!1));
                      },
                      className:
                        "flex-1 py-2.5 rounded-xl text-sm bg-primary text-white font-semibold cursor-pointer hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                      children: "Insert Link",
                    }),
                  ],
                }),
              ],
            }),
          }),
        T &&
          r.jsx("div", {
            className:
              "fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",
            onClick: (I) => {
              I.target === I.currentTarget && R(!1);
            },
            children: r.jsxs("div", {
              className: `w-full max-w-sm rounded-2xl border p-6 shadow-2xl ${E ? "bg-neutral-900 border-white/10" : "bg-white border-slate-200"}`,
              children: [
                r.jsxs("h3", {
                  className: `text-sm font-bold mb-4 flex items-center gap-2 ${E ? "text-white" : "text-slate-800"}`,
                  children: [
                    r.jsx(Id, { size: 15, className: "text-primary" }),
                    " Insert Image",
                  ],
                }),
                r.jsxs("div", {
                  className: "space-y-3",
                  children: [
                    r.jsxs("div", {
                      children: [
                        r.jsx("label", {
                          className: "text-xs text-gray-500 mb-1.5 block",
                          children: "Image URL",
                        }),
                        r.jsx("input", {
                          type: "url",
                          value: C,
                          onChange: (I) => D(I.target.value),
                          placeholder: "https://example.com/image.jpg",
                          autoFocus: !0,
                          className: `w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 transition-colors ${E ? "bg-neutral-800 border-white/10 text-white placeholder:text-gray-600" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                        }),
                      ],
                    }),
                    r.jsxs("div", {
                      children: [
                        r.jsxs("label", {
                          className: "text-xs text-gray-500 mb-1.5 block",
                          children: [
                            "Alt Text ",
                            r.jsx("span", {
                              className: "text-gray-600",
                              children: "(optional)",
                            }),
                          ],
                        }),
                        r.jsx("input", {
                          type: "text",
                          value: _,
                          onChange: (I) => V(I.target.value),
                          placeholder: "Image description",
                          className: `w-full border rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:border-primary/60 transition-colors ${E ? "bg-neutral-800 border-white/10 text-white placeholder:text-gray-600" : "bg-slate-50 border-slate-200 text-slate-800"}`,
                        }),
                      ],
                    }),
                    C &&
                      r.jsx("img", {
                        src: C,
                        alt: "preview",
                        className:
                          "w-full h-28 object-cover rounded-xl border border-white/10",
                        onError: (I) =>
                          (I.currentTarget.style.display = "none"),
                      }),
                  ],
                }),
                r.jsxs("div", {
                  className: "flex gap-2 mt-5",
                  children: [
                    r.jsx("button", {
                      type: "button",
                      onClick: () => R(!1),
                      className: `flex-1 py-2.5 rounded-xl text-sm border cursor-pointer hover:bg-white/5 transition-colors ${E ? "border-white/10 text-gray-400" : "border-slate-200 text-slate-500"}`,
                      children: "Cancel",
                    }),
                    r.jsx("button", {
                      type: "button",
                      disabled: !C,
                      onClick: () => {
                        (Q(`![${_ || "image"}](${C})`, "", ""), R(!1));
                      },
                      className:
                        "flex-1 py-2.5 rounded-xl text-sm bg-primary text-white font-semibold cursor-pointer hover:bg-red-700 transition-colors disabled:opacity-40 disabled:cursor-not-allowed",
                      children: "Insert Image",
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  AT = () => {
    const [n, i] = j.useState(!1),
      [l, o] = j.useState(""),
      [d, h] = j.useState(""),
      [f, x] = j.useState(!1),
      [p, g] = j.useState(""),
      [y, b] = j.useState(!1),
      [w, T] = j.useState("bookings"),
      [R, C] = j.useState(new Date()),
      [D, _] = j.useState(null),
      [V, E] = j.useState([]),
      [Q, X] = j.useState(!1),
      [W, P] = j.useState(""),
      [Z, ie] = j.useState([]),
      [I, he] = j.useState(!1),
      [we, ze] = j.useState(""),
      [je, ke] = j.useState(""),
      [H, K] = j.useState("all"),
      [ae, xe] = j.useState("all"),
      [Se, M] = j.useState({}),
      [G, ee] = j.useState(null),
      [re, me] = j.useState(null),
      [ve, De] = j.useState(null),
      [at, Fe] = j.useState("booking"),
      [sn, wa] = j.useState(null),
      [ln, Es] = j.useState(!1),
      [Ft, vi] = j.useState(null),
      [ka, wi] = j.useState(null),
      [As, Yn] = j.useState(""),
      [ji, Xn] = j.useState(""),
      [Si, Fl] = j.useState(!1),
      [At, Kn] = j.useState(null),
      [J, Ql] = j.useState(() => localStorage.getItem("admin_theme") || "dark"),
      [da, Pn] = j.useState([]),
      [Zl, Ni] = j.useState(!1),
      [Ti, rn] = j.useState(!1),
      [Mt, Ht] = j.useState(null),
      [xt, Po] = j.useState([]),
      [Fo, Jl] = j.useState(!1),
      [Ei, za] = j.useState(!1),
      [fa, Qt] = j.useState(null),
      [on, Zt] = j.useState(""),
      [Ie, lt] = j.useState({
        title: "",
        content: "",
        excerpt: "",
        coverImage: "",
        tags: [],
        published: !1,
        metaTitle: "",
        metaDescription: "",
      }),
      [Ai, cn] = j.useState(!1),
      [Il, Fn] = j.useState(null),
      wt = (S, k = "success") => {
        (vi({ message: S, type: k }), setTimeout(() => vi(null), 3e3));
      },
      Mi = (S) => {
        const k = new FileReader();
        ((k.onload = (F) => {
          const te = F.target?.result,
            ce = new Image();
          ((ce.onload = () => {
            const Ne = document.createElement("canvas");
            ((Ne.width = 1200), (Ne.height = 630));
            const $e = Ne.getContext("2d");
            (($e.fillStyle = "#000"), $e.fillRect(0, 0, 1200, 630));
            const Jt = ce.width / ce.height,
              Te = 1200 / 630;
            let ot = 0,
              It = 0,
              pe = ce.width,
              Qe = ce.height;
            (Jt > Te
              ? ((pe = ce.height * Te), (ot = (ce.width - pe) / 2))
              : ((Qe = ce.width / Te), (It = (ce.height - Qe) / 2)),
              $e.drawImage(ce, ot, It, pe, Qe, 0, 0, 1200, 630));
            const _a = Ne.toDataURL("image/jpeg", 0.85);
            lt((Qn) => ({ ...Qn, coverImage: _a }));
          }),
            (ce.src = te));
        }),
          k.readAsDataURL(S));
      },
      Ms = () => {
        const S = J === "dark" ? "light" : "dark";
        (Ql(S), localStorage.setItem("admin_theme", S));
      };
    (j.useEffect(() => {
      const S = localStorage.getItem("admin_token");
      S && (i(!0), nt(S), yt(S), Di(), Ci(S));
    }, []),
      j.useEffect(() => {
        if (n) {
          const S = localStorage.getItem("admin_token");
          S && ma(S);
        }
      }, [n]));
    const Ci = async (S) => {
        try {
          const k = await fetch("/api/admin/analytics", {
            headers: { Authorization: `Bearer ${S}` },
          });
          if (k.ok) {
            const F = await k.json();
            _(F);
          }
        } catch (k) {
          console.error("Visitor stats error:", k);
        }
      },
      Di = async () => {
        try {
          const S = await fetch("/api/pricing");
          if (S.ok) {
            const k = await S.json();
            Pn(k);
          }
        } catch (S) {
          console.error("Error loading pricing plans:", S);
        }
      },
      Wl = async (S) => {
        (S.preventDefault(), g(""), b(!0));
        try {
          const k = await fetch("/api/admin/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: l, password: d }),
          });
          if (!k.ok) {
            let te = "Invalid credentials. Please try again.";
            try {
              const ce = await k.json();
              ce?.message && (te = ce.message);
            } catch {}
            throw new Error(te);
          }
          const F = await k.json();
          (localStorage.setItem("admin_token", F.token),
            i(!0),
            nt(F.token),
            yt(F.token),
            Di());
        } catch (k) {
          g(k.message || "Login failed. Please try again.");
        } finally {
          b(!1);
        }
      },
      ha = () => {
        (localStorage.removeItem("admin_token"),
          i(!1),
          E([]),
          ie([]),
          o(""),
          h(""),
          g(""));
      },
      nt = async (S) => {
        (X(!0), P(""));
        try {
          const k = await fetch("/api/admin/bookings", {
            headers: { Authorization: `Bearer ${S}` },
          });
          if (k.status === 401 || k.status === 403) {
            ha();
            return;
          }
          if (!k.ok) throw new Error("Failed to fetch bookings.");
          const F = await k.json();
          E(F.bookings || []);
        } catch (k) {
          P(k.message || "Failed to load bookings.");
        } finally {
          X(!1);
        }
      },
      yt = async (S) => {
        (he(!0), ze(""));
        try {
          const k = await fetch("/api/admin/messages", {
            headers: { Authorization: `Bearer ${S}` },
          });
          if (k.ok) {
            const F = await k.json();
            ie(F.messages || []);
          } else throw new Error("Failed to fetch inbox messages.");
        } catch (k) {
          ze(k.message || "Failed to load messages.");
        } finally {
          he(!1);
        }
      },
      ma = async (S) => {
        Jl(!0);
        try {
          const k = await fetch("/api/blogs/all", {
            headers: { Authorization: `Bearer ${S}` },
          });
          if (k.ok) {
            const F = await k.json();
            Po(F);
          }
        } catch (k) {
          console.error("Failed to fetch blogs:", k);
        } finally {
          Jl(!1);
        }
      },
      Cs = async () => {
        const S = localStorage.getItem("admin_token");
        if (S) {
          (cn(!0), Fn(null));
          try {
            const k = { ...Ie, tags: Ie.tags },
              F = fa ? `/api/blogs/${fa._id}` : "/api/blogs",
              ce = await fetch(F, {
                method: fa ? "PUT" : "POST",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${S}`,
                },
                body: JSON.stringify(k),
              });
            if (!ce.ok) {
              const Ne = await ce.json();
              throw new Error(Ne.message || "Failed to save blog");
            }
            (wt(
              fa ? "Blog updated successfully!" : "Blog created successfully!",
              "success",
            ),
              za(!1),
              Qt(null),
              Fn(null),
              Zt(""),
              lt({
                title: "",
                content: "",
                excerpt: "",
                coverImage: "",
                tags: [],
                published: !1,
                metaTitle: "",
                metaDescription: "",
              }),
              ma(S));
          } catch (k) {
            const F = k.message || "Failed to save blog. Please try again.";
            (Fn(F), wt(F, "error"));
          } finally {
            cn(!1);
          }
        }
      },
      Qo = async (S, k) => {
        if (!window.confirm(`Delete "${k}"? This cannot be undone.`)) return;
        const F = localStorage.getItem("admin_token");
        if (F)
          try {
            (
              await fetch(`/api/blogs/${S}`, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${F}` },
              })
            ).ok
              ? (wt("Blog deleted!", "success"), ma(F))
              : wt("Failed to delete blog", "error");
          } catch {
            wt("Failed to delete blog", "error");
          }
      },
      Zo = async (S) => {
        const k = localStorage.getItem("admin_token");
        if (k)
          try {
            (await fetch(`/api/blogs/${S._id}`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${k}`,
              },
              body: JSON.stringify({ published: !S.published }),
            }),
              wt(
                S.published ? "Blog unpublished" : "Blog published!",
                "success",
              ),
              ma(k));
          } catch {
            wt("Failed to update", "error");
          }
      },
      er = (S) => {
        (Qt(S),
          lt({
            title: S.title,
            content: S.content,
            excerpt: S.excerpt,
            coverImage: S.coverImage || "",
            tags: S.tags || [],
            published: S.published,
            metaTitle: S.metaTitle || "",
            metaDescription: S.metaDescription || "",
          }),
          Zt(""),
          za(!0));
      },
      un = async (S, k) => {
        const F = localStorage.getItem("admin_token");
        if (!F) return;
        ee(S);
        const te = Se[S] || "";
        try {
          if (
            !(
              await fetch(`/api/admin/bookings/${S}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${F}`,
                },
                body: JSON.stringify({ status: k, adminNotes: te }),
              })
            ).ok
          )
            throw new Error(`Failed to update booking to ${k}`);
          (E((Ne) =>
            Ne.map(($e) => ($e._id === S ? { ...$e, status: k } : $e)),
          ),
            M((Ne) => {
              const $e = { ...Ne };
              return (delete $e[S], $e);
            }),
            wt(`Booking status updated to ${k}.`));
        } catch (ce) {
          wt(ce.message || "Error updating status.", "error");
        } finally {
          ee(null);
        }
      },
      Ds = async (S, k) => {
        const F = localStorage.getItem("admin_token");
        if (F)
          try {
            const te = await fetch(`/api/admin/messages/${S}/read`, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${F}`,
              },
              body: JSON.stringify({ read: !k }),
            });
            if (!te.ok) throw new Error("Failed to update message status.");
            const ce = await te.json();
            (ie((Ne) =>
              Ne.map(($e) =>
                $e._id === S ? { ...$e, read: ce.message.read } : $e,
              ),
            ),
              wt(`Message marked as ${ce.message.read ? "read" : "unread"}.`));
          } catch (te) {
            wt(te.message || "Error updating message status.", "error");
          }
      },
      dn = (S) => {
        (wi(S._id),
          Yn("Re: Your inquiry on Sumit Kumar Portfolio website"),
          Xn(`Hi ${S.name},

Thank you for reaching out! Regarding your query:



Best regards,
Sumit Kumar   `),
          Kn(null));
      },
      fn = async (S) => {
        S.preventDefault();
        const k = localStorage.getItem("admin_token");
        if (!(!k || !ka)) {
          (Fl(!0), Kn(null));
          try {
            const F = await fetch(`/api/admin/messages/${ka}/reply`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${k}`,
              },
              body: JSON.stringify({ subject: As, replyText: ji }),
            });
            if (!F.ok) throw new Error("Failed to send reply email.");
            const te = await F.json();
            (ie((ce) => ce.map((Ne) => (Ne._id === ka ? te.message : Ne))),
              wi(null),
              Yn(""),
              Xn(""),
              wt("Email reply sent successfully!"));
          } catch (F) {
            Kn(F.message || "Error sending reply.");
          } finally {
            Fl(!1);
          }
        }
      },
      hn = (S, k) => {
        (wa(null), Fe(k), De(S));
      },
      mn = async (S) => {
        const k = localStorage.getItem("admin_token");
        if (!k) return;
        (Es(!0), wa(null));
        const F =
          at === "booking"
            ? `/api/admin/bookings/${S}`
            : `/api/admin/messages/${S}`;
        try {
          if (
            !(
              await fetch(F, {
                method: "DELETE",
                headers: { Authorization: `Bearer ${k}` },
              })
            ).ok
          )
            throw new Error(
              "Failed to delete resource. Ensure the backend server is running and restarted.",
            );
          (at === "booking"
            ? E((ce) => ce.filter((Ne) => Ne._id !== S))
            : ie((ce) => ce.filter((Ne) => Ne._id !== S)),
            De(null),
            wt(
              `${at === "booking" ? "Booking" : "Message"} deleted successfully.`,
            ));
        } catch (te) {
          (console.error("Delete error:", te),
            wa(te.message || "Error deleting resource."));
        } finally {
          Es(!1);
        }
      },
      rt = async (S) => {
        S.preventDefault();
        const k = localStorage.getItem("admin_token");
        if (k) {
          (rn(!0), Ht(null));
          try {
            const F = await fetch("/api/admin/pricing", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${k}`,
              },
              body: JSON.stringify({ plans: da }),
            });
            if (!F.ok) throw new Error("Failed to update pricing plans.");
            const te = await F.json();
            (Pn(te.plans || da), Ni(!1), wt("Pricing updated successfully!"));
          } catch (F) {
            Ht(F.message || "Error updating pricing.");
          } finally {
            rn(!1);
          }
        }
      },
      tr = async (S, k) => {
        try {
          (await navigator.clipboard.writeText(S),
            me(k),
            setTimeout(() => me(null), 2e3));
        } catch (F) {
          console.error("Failed to copy text:", F);
        }
      },
      Rs = (S) => {
        if (S === "bookings") {
          const k = [
              "Name",
              "Email",
              "WhatsApp",
              "Plan",
              "Amount (₹)",
              "Date",
              "Time Slot",
              "Status",
              "Transaction ID",
              "Notes",
              "Booked At",
            ],
            F = V.map((te) => [
              te.name,
              te.email,
              te.whatsapp,
              te.planName,
              te.amount,
              te.date,
              te.timeSlot,
              te.status,
              te.transactionId || "",
              te.notes || "",
              new Date(te.createdAt).toLocaleString(),
            ]);
          ja([k, ...F], "bookings_export.csv");
        } else {
          const k = [
              "Name",
              "Email",
              "Message",
              "Status",
              "Replies",
              "Received At",
            ],
            F = Z.map((te) => [
              te.name,
              te.email,
              `"${te.message.replace(/"/g, '""')}"`,
              te.read ? "Read" : "Unread",
              te.replies.length,
              new Date(te.createdAt).toLocaleString(),
            ]);
          ja([k, ...F], "messages_export.csv");
        }
      },
      ja = (S, k) => {
        const F = S.map(($e) => $e.join(",")).join(`
`),
          te = new Blob([F], { type: "text/csv;charset=utf-8;" }),
          ce = URL.createObjectURL(te),
          Ne = document.createElement("a");
        ((Ne.href = ce),
          (Ne.download = k),
          Ne.click(),
          URL.revokeObjectURL(ce));
      },
      pn = () => {
        const S = V.filter((Te) => Te.status === "approved").reduce(
            (Te, ot) => Te + ot.amount,
            0,
          ),
          k = V.filter((Te) => Te.status === "pending_approval").reduce(
            (Te, ot) => Te + ot.amount,
            0,
          ),
          F = V.filter((Te) => Te.status === "approved").length,
          te = V.filter((Te) => Te.status === "pending_approval").length,
          ce = V.filter((Te) => Te.status === "rejected").length,
          Ne = Z.filter((Te) => !Te.read).length,
          $e = [];
        for (let Te = 13; Te >= 0; Te--) {
          const ot = new Date();
          ot.setDate(ot.getDate() - Te);
          const It = ot.toISOString().split("T")[0],
            pe = ot.toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
            });
          $e.push({
            label: pe,
            bookings: V.filter((Qe) => Qe.createdAt?.startsWith(It)).length,
            messages: Z.filter((Qe) => Qe.createdAt?.startsWith(It)).length,
          });
        }
        const Jt = Math.max(1, ...$e.map((Te) => Te.bookings + Te.messages));
        return {
          totalRevenue: S,
          pendingRevenue: k,
          approved: F,
          pending: te,
          rejected: ce,
          unread: Ne,
          days: $e,
          maxVal: Jt,
        };
      },
      ar = V.filter((S) => {
        const k =
            S.name.toLowerCase().includes(je.toLowerCase()) ||
            S.email.toLowerCase().includes(je.toLowerCase()) ||
            (S.transactionId &&
              S.transactionId.toLowerCase().includes(je.toLowerCase())),
          F = H === "all" || S.status === H;
        return k && F;
      }),
      ks = Z.filter((S) => {
        const k =
            S.name.toLowerCase().includes(je.toLowerCase()) ||
            S.email.toLowerCase().includes(je.toLowerCase()) ||
            S.message.toLowerCase().includes(je.toLowerCase()),
          F =
            ae === "all" ||
            (ae === "unread" && !S.read) ||
            (ae === "read" && S.read);
        return k && F;
      }),
      nr = Z.filter((S) => !S.read).length;
    return r.jsxs("div", {
      className: `min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans transition-colors duration-300 ${J === "dark" ? "bg-black text-white" : "bg-slate-50 text-slate-900"}`,
      children: [
        r.jsx("div", {
          className: "max-w-7xl mx-auto",
          children: r.jsx(Hn, {
            mode: "wait",
            children: n
              ? r.jsxs(
                  le.div,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    children: [
                      r.jsxs("div", {
                        className: `flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 mb-8 border-b ${J === "dark" ? "border-white/10" : "border-slate-200"}`,
                        children: [
                          r.jsxs("div", {
                            children: [
                              r.jsx("h1", {
                                className: `text-2xl sm:text-3xl font-extrabold tracking-tight ${J === "dark" ? "text-white" : "text-slate-800"}`,
                                children: "Mentorship Portal",
                              }),
                              r.jsx("p", {
                                className:
                                  "text-xs sm:text-sm text-gray-400 mt-1",
                                children:
                                  "Manage bookings, pricing plans, and respond to incoming contact messages.",
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "flex flex-wrap items-center gap-2",
                            children: [
                              r.jsxs("button", {
                                onClick: () => Rs("bookings"),
                                disabled: V.length === 0,
                                className: `flex items-center gap-1.5 border px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:opacity-40 ${J === "dark" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/20" : "bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100"}`,
                                title: "Export all bookings as CSV",
                                children: [
                                  r.jsx(ox, { className: "w-3.5 h-3.5" }),
                                  r.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "Bookings CSV",
                                  }),
                                ],
                              }),
                              r.jsxs("button", {
                                onClick: () => Rs("messages"),
                                disabled: Z.length === 0,
                                className: `flex items-center gap-1.5 border px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer disabled:opacity-40 ${J === "dark" ? "bg-blue-500/10 border-blue-500/20 text-blue-400 hover:bg-blue-500/20" : "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"}`,
                                title: "Export all messages as CSV",
                                children: [
                                  r.jsx(ox, { className: "w-3.5 h-3.5" }),
                                  r.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "Messages CSV",
                                  }),
                                ],
                              }),
                              r.jsxs("a", {
                                href: "/",
                                className: `flex items-center gap-1.5 border px-3 py-2 rounded-xl text-xs font-semibold transition-colors duration-200 cursor-pointer ${J === "dark" ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
                                children: [
                                  r.jsx(Td, { className: "w-3.5 h-3.5" }),
                                  r.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "Website",
                                  }),
                                ],
                              }),
                              r.jsxs("button", {
                                onClick: () => Ni(!0),
                                className: `flex items-center gap-1.5 border px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${J === "dark" ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
                                children: [
                                  r.jsx(z3, { className: "w-3.5 h-3.5" }),
                                  r.jsx("span", {
                                    className: "hidden sm:inline",
                                    children: "Pricing",
                                  }),
                                ],
                              }),
                              r.jsx("button", {
                                onClick: Ms,
                                className: `p-2 border rounded-xl transition-all cursor-pointer ${J === "dark" ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10" : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"}`,
                                children:
                                  J === "dark"
                                    ? r.jsx(P3, {
                                        className: "w-4 h-4 text-yellow-400",
                                      })
                                    : r.jsx(j3, {
                                        className: "w-4 h-4 text-slate-700",
                                      }),
                              }),
                              r.jsx("button", {
                                onClick: ha,
                                className: `flex items-center gap-1.5 border px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${J === "dark" ? "bg-white/5 border-white/10 text-gray-400 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-500" : "bg-white border-slate-200 text-slate-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600"}`,
                                children: r.jsx(d3, { className: "w-4 h-4" }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      r.jsx("div", {
                        className: `flex border-b mb-8 gap-1 sm:gap-4 overflow-x-auto ${J === "dark" ? "border-white/10" : "border-slate-200"}`,
                        children: [
                          {
                            key: "bookings",
                            icon: r.jsx(qn, { className: "w-4 h-4" }),
                            label: "Bookings",
                            badge: V.filter(
                              (S) => S.status === "pending_approval",
                            ).length,
                          },
                          {
                            key: "messages",
                            icon: r.jsx(cx, { className: "w-4 h-4" }),
                            label: "Messages",
                            badge: nr,
                          },
                          {
                            key: "blog",
                            icon: r.jsx(jb, { className: "w-4 h-4" }),
                            label: "Blog",
                            badge: 0,
                          },
                          {
                            key: "analytics",
                            icon: r.jsx(p4, { className: "w-4 h-4" }),
                            label: "Analytics",
                            badge: 0,
                          },
                          {
                            key: "calendar",
                            icon: r.jsx(qn, { className: "w-4 h-4" }),
                            label: "Calendar",
                            badge: 0,
                          },
                        ].map((S) =>
                          r.jsxs(
                            "button",
                            {
                              onClick: () => {
                                if ((T(S.key), ke(""), S.key === "analytics")) {
                                  const k = localStorage.getItem("admin_token");
                                  k && Ci(k);
                                }
                              },
                              className: `pb-4 px-2 text-sm font-semibold border-b-2 transition-colors duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap ${w === S.key ? "border-red-600 text-red-600" : J === "dark" ? "border-transparent text-gray-500 hover:text-gray-400" : "border-transparent text-slate-500 hover:text-slate-800"}`,
                              children: [
                                S.icon,
                                S.label,
                                S.badge > 0 &&
                                  r.jsx("span", {
                                    className:
                                      "bg-red-500/10 text-red-600 border border-red-500/20 text-[10px] font-bold px-2 py-0.5 rounded-full",
                                    children: S.badge,
                                  }),
                              ],
                            },
                            S.key,
                          ),
                        ),
                      }),
                      (w === "bookings" || w === "messages") &&
                        r.jsxs("div", {
                          className: "grid sm:grid-cols-3 gap-4 mb-6",
                          children: [
                            r.jsxs("div", {
                              className: "relative sm:col-span-2",
                              children: [
                                r.jsx("span", {
                                  className:
                                    "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none",
                                  children: r.jsx(Yf, {
                                    className: "h-5 h-5 text-gray-500",
                                  }),
                                }),
                                r.jsx("input", {
                                  type: "text",
                                  placeholder:
                                    w === "bookings"
                                      ? "Search bookings by name, email, transaction ID..."
                                      : "Search messages by name, email, content...",
                                  value: je,
                                  onChange: (S) => ke(S.target.value),
                                  className: `w-full border rounded-xl pl-10 pr-4 py-3 transition-all text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 ${J === "dark" ? "bg-neutral-900/50 border-white/10 text-white placeholder:text-gray-600" : "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400"}`,
                                }),
                              ],
                            }),
                            r.jsxs("div", {
                              className: "relative",
                              children: [
                                r.jsx("span", {
                                  className:
                                    "absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none",
                                  children: r.jsx(L4, {
                                    className: "h-5 h-5 text-gray-500",
                                  }),
                                }),
                                w === "bookings"
                                  ? r.jsxs("select", {
                                      value: H,
                                      onChange: (S) => K(S.target.value),
                                      className: `w-full border rounded-xl pl-10 pr-4 py-3 transition-all text-sm appearance-none cursor-pointer focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 ${J === "dark" ? "bg-neutral-900/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                                      children: [
                                        r.jsx("option", {
                                          value: "all",
                                          children: "All Statuses",
                                        }),
                                        r.jsx("option", {
                                          value: "pending_approval",
                                          children: "Pending Verification",
                                        }),
                                        r.jsx("option", {
                                          value: "approved",
                                          children: "Approved",
                                        }),
                                        r.jsx("option", {
                                          value: "rejected",
                                          children: "Rejected",
                                        }),
                                      ],
                                    })
                                  : r.jsxs("select", {
                                      value: ae,
                                      onChange: (S) => xe(S.target.value),
                                      className: `w-full border rounded-xl pl-10 pr-4 py-3 transition-all text-sm appearance-none cursor-pointer focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 ${J === "dark" ? "bg-neutral-900/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                                      children: [
                                        r.jsx("option", {
                                          value: "all",
                                          children: "All Messages",
                                        }),
                                        r.jsx("option", {
                                          value: "unread",
                                          children: "Unread Only",
                                        }),
                                        r.jsx("option", {
                                          value: "read",
                                          children: "Read Only",
                                        }),
                                      ],
                                    }),
                              ],
                            }),
                          ],
                        }),
                      w === "analytics" &&
                        (() => {
                          const S = pn();
                          return r.jsxs(le.div, {
                            initial: { opacity: 0, y: 16 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.4 },
                            children: [
                              r.jsx("div", {
                                className: "grid grid-cols-2 gap-4 mb-4",
                                children: [
                                  {
                                    label: "Today's Visitors",
                                    value: D ? D.todayViews : "—",
                                    sub: "Page views today",
                                    icon: r.jsx(Td, { className: "w-5 h-5" }),
                                    grad: "from-cyan-500 to-sky-600",
                                    glow: "rgba(6,182,212,0.25)",
                                  },
                                  {
                                    label: "30-Day Page Views",
                                    value: D ? D.totalViews30d : "—",
                                    sub: "Last 30 days",
                                    icon: r.jsx(tf, { className: "w-5 h-5" }),
                                    grad: "from-violet-500 to-purple-600",
                                    glow: "rgba(139,92,246,0.25)",
                                  },
                                ].map((k, F) =>
                                  r.jsxs(
                                    le.div,
                                    {
                                      initial: { opacity: 0, y: 20 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: {
                                        delay: F * 0.08,
                                        duration: 0.4,
                                      },
                                      className:
                                        "relative group rounded-2xl p-5 overflow-hidden border border-white/5 bg-neutral-900/60 hover:-translate-y-1 transition-all duration-300 cursor-default",
                                      style: {
                                        boxShadow: `0 0 30px ${k.glow}`,
                                      },
                                      children: [
                                        r.jsx("div", {
                                          className: `absolute inset-0 bg-gradient-to-br ${k.grad} opacity-10 group-hover:opacity-20 transition-opacity duration-300`,
                                        }),
                                        r.jsx("div", {
                                          className: `inline-flex p-2 rounded-xl bg-gradient-to-br ${k.grad} mb-3 shadow-lg`,
                                          children: r.jsx("span", {
                                            className: "text-white",
                                            children: k.icon,
                                          }),
                                        }),
                                        r.jsx("div", {
                                          className:
                                            "text-2xl font-extrabold text-white tracking-tight",
                                          children: k.value,
                                        }),
                                        r.jsx("div", {
                                          className:
                                            "text-xs font-semibold text-gray-400 mt-0.5",
                                          children: k.label,
                                        }),
                                        r.jsx("div", {
                                          className:
                                            "text-[10px] text-gray-600 mt-1",
                                          children: k.sub,
                                        }),
                                        !D &&
                                          r.jsx("div", {
                                            className:
                                              "absolute inset-0 flex items-center justify-center",
                                            children: r.jsx("div", {
                                              className:
                                                "w-5 h-5 border-2 border-cyan-500/30 border-t-cyan-500 rounded-full animate-spin",
                                            }),
                                          }),
                                      ],
                                    },
                                    F,
                                  ),
                                ),
                              }),
                              r.jsx("div", {
                                className:
                                  "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8",
                                children: [
                                  {
                                    label: "Total Revenue",
                                    value: `₹${S.totalRevenue.toLocaleString("en-IN")}`,
                                    sub: `₹${S.pendingRevenue.toLocaleString("en-IN")} pending`,
                                    icon: r.jsx(Z4, { className: "w-5 h-5" }),
                                    grad: "from-emerald-500 to-teal-600",
                                    glow: "rgba(16,185,129,0.25)",
                                  },
                                  {
                                    label: "Total Bookings",
                                    value: V.length,
                                    sub: `${S.approved} approved`,
                                    icon: r.jsx(qn, { className: "w-5 h-5" }),
                                    grad: "from-red-500 to-rose-600",
                                    glow: "rgba(220,38,38,0.25)",
                                  },
                                  {
                                    label: "Pending Review",
                                    value: S.pending,
                                    sub: "Needs action",
                                    icon: r.jsx(Vl, { className: "w-5 h-5" }),
                                    grad: "from-amber-500 to-orange-500",
                                    glow: "rgba(245,158,11,0.25)",
                                  },
                                  {
                                    label: "Contact Messages",
                                    value: Z.length,
                                    sub: `${S.unread} unread`,
                                    icon: r.jsx(vo, { className: "w-5 h-5" }),
                                    grad: "from-blue-500 to-indigo-600",
                                    glow: "rgba(59,130,246,0.25)",
                                  },
                                  {
                                    label: "Approved Sessions",
                                    value: S.approved,
                                    sub: "Confirmed",
                                    icon: r.jsx(Tl, { className: "w-5 h-5" }),
                                    grad: "from-green-500 to-emerald-600",
                                    glow: "rgba(34,197,94,0.25)",
                                  },
                                  {
                                    label: "Rejected Bookings",
                                    value: S.rejected,
                                    sub: "Declined",
                                    icon: r.jsx(bo, { className: "w-5 h-5" }),
                                    grad: "from-slate-500 to-slate-600",
                                    glow: "rgba(100,116,139,0.25)",
                                  },
                                  {
                                    label: "Unread Messages",
                                    value: S.unread,
                                    sub: "Awaiting reply",
                                    icon: r.jsx(cx, { className: "w-5 h-5" }),
                                    grad: "from-purple-500 to-violet-600",
                                    glow: "rgba(139,92,246,0.25)",
                                  },
                                  {
                                    label: "Avg Session Value",
                                    value:
                                      S.approved > 0
                                        ? `₹${Math.round(S.totalRevenue / S.approved).toLocaleString("en-IN")}`
                                        : "—",
                                    sub: "Per approved booking",
                                    icon: r.jsx(tf, { className: "w-5 h-5" }),
                                    grad: "from-pink-500 to-rose-500",
                                    glow: "rgba(236,72,153,0.25)",
                                  },
                                ].map((k, F) =>
                                  r.jsxs(
                                    le.div,
                                    {
                                      initial: { opacity: 0, y: 20 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: {
                                        delay: F * 0.06,
                                        duration: 0.4,
                                      },
                                      className:
                                        "relative group rounded-2xl p-5 overflow-hidden border border-white/5 bg-neutral-900/60 hover:-translate-y-1 transition-all duration-300 cursor-default",
                                      style: {
                                        boxShadow: `0 0 30px ${k.glow}`,
                                      },
                                      children: [
                                        r.jsx("div", {
                                          className: `absolute inset-0 bg-gradient-to-br ${k.grad} opacity-10 group-hover:opacity-20 transition-opacity duration-300`,
                                        }),
                                        r.jsx("div", {
                                          className: `absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${k.grad} opacity-5 rounded-full blur-2xl group-hover:opacity-15 transition-opacity`,
                                        }),
                                        r.jsx("div", {
                                          className: `inline-flex p-2 rounded-xl bg-gradient-to-br ${k.grad} mb-3 shadow-lg`,
                                          children: r.jsx("span", {
                                            className: "text-white",
                                            children: k.icon,
                                          }),
                                        }),
                                        r.jsx("div", {
                                          className:
                                            "text-2xl font-extrabold text-white tracking-tight",
                                          children: k.value,
                                        }),
                                        r.jsx("div", {
                                          className:
                                            "text-xs font-semibold text-gray-400 mt-0.5",
                                          children: k.label,
                                        }),
                                        r.jsx("div", {
                                          className:
                                            "text-[10px] text-gray-600 mt-1",
                                          children: k.sub,
                                        }),
                                      ],
                                    },
                                    F,
                                  ),
                                ),
                              }),
                              r.jsxs(le.div, {
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: 0.3 },
                                className:
                                  "rounded-2xl p-6 border border-white/5 bg-neutral-900/60 mb-6",
                                style: {
                                  boxShadow: "0 0 40px rgba(220,38,38,0.08)",
                                },
                                children: [
                                  r.jsxs("div", {
                                    className:
                                      "flex items-center justify-between mb-6",
                                    children: [
                                      r.jsxs("div", {
                                        children: [
                                          r.jsx("h3", {
                                            className:
                                              "text-white font-bold text-lg",
                                            children: "Activity — Last 14 Days",
                                          }),
                                          r.jsx("p", {
                                            className:
                                              "text-gray-500 text-xs mt-0.5",
                                            children:
                                              "Bookings & messages received per day",
                                          }),
                                        ],
                                      }),
                                      r.jsxs("div", {
                                        className:
                                          "flex items-center gap-4 text-xs",
                                        children: [
                                          r.jsxs("span", {
                                            className:
                                              "flex items-center gap-1.5",
                                            children: [
                                              r.jsx("span", {
                                                className:
                                                  "w-3 h-3 rounded-sm bg-red-500 inline-block",
                                              }),
                                              "Bookings",
                                            ],
                                          }),
                                          r.jsxs("span", {
                                            className:
                                              "flex items-center gap-1.5",
                                            children: [
                                              r.jsx("span", {
                                                className:
                                                  "w-3 h-3 rounded-sm bg-blue-500 inline-block",
                                              }),
                                              "Messages",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  r.jsx("div", {
                                    className: "flex items-end gap-1.5 h-44",
                                    children: S.days.map((k, F) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          className:
                                            "flex-1 flex flex-col items-center gap-1 group/bar h-full justify-end",
                                          children: [
                                            r.jsxs("div", {
                                              className:
                                                "w-full flex flex-col gap-0.5 items-center justify-end",
                                              style: { height: "160px" },
                                              children: [
                                                r.jsx(le.div, {
                                                  initial: { height: 0 },
                                                  animate: {
                                                    height: `${(k.messages / S.maxVal) * 130}px`,
                                                  },
                                                  transition: {
                                                    delay: 0.4 + F * 0.04,
                                                    duration: 0.5,
                                                    ease: "easeOut",
                                                  },
                                                  className:
                                                    "w-full rounded-t bg-gradient-to-t from-blue-600 to-blue-400 opacity-80 group-hover/bar:opacity-100 transition-opacity min-h-[2px]",
                                                  title: `Messages: ${k.messages}`,
                                                }),
                                                r.jsx(le.div, {
                                                  initial: { height: 0 },
                                                  animate: {
                                                    height: `${(k.bookings / S.maxVal) * 130}px`,
                                                  },
                                                  transition: {
                                                    delay: 0.4 + F * 0.04,
                                                    duration: 0.5,
                                                    ease: "easeOut",
                                                  },
                                                  className:
                                                    "w-full rounded-t bg-gradient-to-t from-red-700 to-red-400 group-hover/bar:from-red-600 group-hover/bar:to-red-300 transition-all min-h-[2px]",
                                                  title: `Bookings: ${k.bookings}`,
                                                }),
                                              ],
                                            }),
                                            r.jsx("span", {
                                              className:
                                                "text-[9px] text-gray-600 group-hover/bar:text-gray-400 transition-colors rotate-45 origin-left mt-1 whitespace-nowrap",
                                              children:
                                                F % 2 === 0 ? k.label : "",
                                            }),
                                          ],
                                        },
                                        F,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: [
                                  r.jsxs(le.div, {
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { delay: 0.45 },
                                    className:
                                      "rounded-2xl p-6 border border-white/5 bg-neutral-900/60",
                                    children: [
                                      r.jsx("h3", {
                                        className: "text-white font-bold mb-5",
                                        children: "Booking Status Breakdown",
                                      }),
                                      V.length === 0
                                        ? r.jsx("p", {
                                            className:
                                              "text-gray-600 text-sm text-center py-8",
                                            children: "No bookings yet",
                                          })
                                        : r.jsxs("div", {
                                            className:
                                              "flex items-center gap-6",
                                            children: [
                                              r.jsxs("svg", {
                                                viewBox: "0 0 100 100",
                                                className:
                                                  "w-32 h-32 flex-shrink-0 -rotate-90",
                                                children: [
                                                  (() => {
                                                    const k = V.length || 1,
                                                      F = [
                                                        {
                                                          val: S.approved,
                                                          color: "#22c55e",
                                                        },
                                                        {
                                                          val: S.pending,
                                                          color: "#f59e0b",
                                                        },
                                                        {
                                                          val: S.rejected,
                                                          color: "#6b7280",
                                                        },
                                                      ];
                                                    let te = 0;
                                                    const ce = 35,
                                                      Ne = 2 * Math.PI * ce;
                                                    return F.map(($e, Jt) => {
                                                      const Te =
                                                          ($e.val / k) * Ne,
                                                        ot = r.jsx(
                                                          "circle",
                                                          {
                                                            cx: "50",
                                                            cy: "50",
                                                            r: ce,
                                                            fill: "none",
                                                            stroke: $e.color,
                                                            strokeWidth: "14",
                                                            strokeDasharray: `${Te} ${Ne - Te}`,
                                                            strokeDashoffset:
                                                              -te,
                                                            strokeLinecap:
                                                              "butt",
                                                          },
                                                          Jt,
                                                        );
                                                      return ((te += Te), ot);
                                                    });
                                                  })(),
                                                  r.jsx("circle", {
                                                    cx: "50",
                                                    cy: "50",
                                                    r: "28",
                                                    fill: "#111",
                                                  }),
                                                ],
                                              }),
                                              r.jsx("div", {
                                                className: "space-y-3 flex-1",
                                                children: [
                                                  {
                                                    label: "Approved",
                                                    val: S.approved,
                                                    color: "bg-green-500",
                                                  },
                                                  {
                                                    label: "Pending",
                                                    val: S.pending,
                                                    color: "bg-amber-500",
                                                  },
                                                  {
                                                    label: "Rejected",
                                                    val: S.rejected,
                                                    color: "bg-gray-500",
                                                  },
                                                ].map((k) =>
                                                  r.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "flex items-center justify-between",
                                                      children: [
                                                        r.jsxs("div", {
                                                          className:
                                                            "flex items-center gap-2",
                                                          children: [
                                                            r.jsx("span", {
                                                              className: `w-2.5 h-2.5 rounded-full ${k.color}`,
                                                            }),
                                                            r.jsx("span", {
                                                              className:
                                                                "text-xs text-gray-400",
                                                              children: k.label,
                                                            }),
                                                          ],
                                                        }),
                                                        r.jsxs("div", {
                                                          className:
                                                            "text-right",
                                                          children: [
                                                            r.jsx("span", {
                                                              className:
                                                                "text-sm font-bold text-white",
                                                              children: k.val,
                                                            }),
                                                            r.jsxs("span", {
                                                              className:
                                                                "text-xs text-gray-600 ml-1",
                                                              children: [
                                                                "(",
                                                                V.length
                                                                  ? Math.round(
                                                                      (k.val /
                                                                        V.length) *
                                                                        100,
                                                                    )
                                                                  : 0,
                                                                "%)",
                                                              ],
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    },
                                                    k.label,
                                                  ),
                                                ),
                                              }),
                                            ],
                                          }),
                                    ],
                                  }),
                                  r.jsxs(le.div, {
                                    initial: { opacity: 0, y: 20 },
                                    animate: { opacity: 1, y: 0 },
                                    transition: { delay: 0.5 },
                                    className:
                                      "rounded-2xl p-6 border border-white/5 bg-neutral-900/60 relative overflow-hidden",
                                    children: [
                                      r.jsx("div", {
                                        className:
                                          "absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-600/5",
                                      }),
                                      r.jsx("h3", {
                                        className:
                                          "text-white font-bold mb-5 relative",
                                        children: "Revenue Overview",
                                      }),
                                      r.jsxs("div", {
                                        className: "space-y-4 relative",
                                        children: [
                                          [
                                            {
                                              label: "Confirmed Revenue",
                                              val: `₹${S.totalRevenue.toLocaleString("en-IN")}`,
                                              color: "text-emerald-400",
                                              barColor: "bg-emerald-500",
                                              pct:
                                                S.totalRevenue +
                                                  S.pendingRevenue >
                                                0
                                                  ? (S.totalRevenue /
                                                      (S.totalRevenue +
                                                        S.pendingRevenue)) *
                                                    100
                                                  : 0,
                                            },
                                            {
                                              label: "Pending Revenue",
                                              val: `₹${S.pendingRevenue.toLocaleString("en-IN")}`,
                                              color: "text-amber-400",
                                              barColor: "bg-amber-500",
                                              pct:
                                                S.totalRevenue +
                                                  S.pendingRevenue >
                                                0
                                                  ? (S.pendingRevenue /
                                                      (S.totalRevenue +
                                                        S.pendingRevenue)) *
                                                    100
                                                  : 0,
                                            },
                                          ].map((k) =>
                                            r.jsxs(
                                              "div",
                                              {
                                                children: [
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex justify-between mb-1.5",
                                                    children: [
                                                      r.jsx("span", {
                                                        className:
                                                          "text-xs text-gray-400",
                                                        children: k.label,
                                                      }),
                                                      r.jsx("span", {
                                                        className: `text-sm font-bold ${k.color}`,
                                                        children: k.val,
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "h-2 rounded-full bg-white/5 overflow-hidden",
                                                    children: r.jsx(le.div, {
                                                      className: `h-full rounded-full ${k.barColor}`,
                                                      initial: { width: 0 },
                                                      animate: {
                                                        width: `${k.pct}%`,
                                                      },
                                                      transition: {
                                                        delay: 0.6,
                                                        duration: 0.8,
                                                        ease: "easeOut",
                                                      },
                                                    }),
                                                  }),
                                                ],
                                              },
                                              k.label,
                                            ),
                                          ),
                                          r.jsx("div", {
                                            className:
                                              "mt-4 pt-4 border-t border-white/5",
                                            children: r.jsxs("div", {
                                              className: "flex justify-between",
                                              children: [
                                                r.jsx("span", {
                                                  className:
                                                    "text-xs text-gray-500",
                                                  children: "Total Pipeline",
                                                }),
                                                r.jsxs("span", {
                                                  className:
                                                    "text-base font-extrabold text-white",
                                                  children: [
                                                    "₹",
                                                    (
                                                      S.totalRevenue +
                                                      S.pendingRevenue
                                                    ).toLocaleString("en-IN"),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          });
                        })(),
                      w === "calendar" &&
                        (() => {
                          const S = R.getFullYear(),
                            k = R.getMonth(),
                            F = new Date(S, k, 1).getDay(),
                            te = new Date(S, k + 1, 0).getDate(),
                            ce = R.toLocaleDateString("en-IN", {
                              month: "long",
                              year: "numeric",
                            }),
                            [Ne, $e] = j.useState(null),
                            Jt = (pe) => {
                              const Qe = `${S}-${String(k + 1).padStart(2, "0")}-${String(pe).padStart(2, "0")}`;
                              return V.filter(
                                (_a) =>
                                  _a.date === Qe || _a.date?.startsWith(Qe),
                              );
                            },
                            Te = new Date(),
                            ot = (pe) =>
                              Te.getFullYear() === S &&
                              Te.getMonth() === k &&
                              Te.getDate() === pe,
                            It = Ne ? Jt(Ne) : [];
                          return r.jsx(le.div, {
                            initial: { opacity: 0, y: 16 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.4 },
                            children: r.jsxs("div", {
                              className: "grid lg:grid-cols-3 gap-6",
                              children: [
                                r.jsxs("div", {
                                  className:
                                    "lg:col-span-2 rounded-2xl p-6 border border-white/5 bg-neutral-900/60",
                                  children: [
                                    r.jsxs("div", {
                                      className:
                                        "flex items-center justify-between mb-6",
                                      children: [
                                        r.jsx("button", {
                                          onClick: () => C(new Date(S, k - 1)),
                                          className:
                                            "p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer",
                                          children: r.jsx(y4, {
                                            className: "w-4 h-4 text-gray-400",
                                          }),
                                        }),
                                        r.jsx("h3", {
                                          className:
                                            "text-white font-bold text-lg",
                                          children: ce,
                                        }),
                                        r.jsx("button", {
                                          onClick: () => C(new Date(S, k + 1)),
                                          className:
                                            "p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer",
                                          children: r.jsx(xs, {
                                            className: "w-4 h-4 text-gray-400",
                                          }),
                                        }),
                                      ],
                                    }),
                                    r.jsx("div", {
                                      className: "grid grid-cols-7 mb-2",
                                      children: [
                                        "Sun",
                                        "Mon",
                                        "Tue",
                                        "Wed",
                                        "Thu",
                                        "Fri",
                                        "Sat",
                                      ].map((pe) =>
                                        r.jsx(
                                          "div",
                                          {
                                            className:
                                              "text-center text-[10px] font-bold text-gray-600 uppercase py-2",
                                            children: pe,
                                          },
                                          pe,
                                        ),
                                      ),
                                    }),
                                    r.jsxs("div", {
                                      className: "grid grid-cols-7 gap-1",
                                      children: [
                                        Array.from({ length: F }).map(
                                          (pe, Qe) =>
                                            r.jsx("div", {}, `e${Qe}`),
                                        ),
                                        Array.from(
                                          { length: te },
                                          (pe, Qe) => Qe + 1,
                                        ).map((pe) => {
                                          const Qe = Jt(pe),
                                            _a = Qe.some(
                                              (Ri) => Ri.status === "approved",
                                            ),
                                            Qn = Qe.some(
                                              (Ri) =>
                                                Ri.status ===
                                                "pending_approval",
                                            ),
                                            Oa = Ne === pe;
                                          return r.jsxs(
                                            "button",
                                            {
                                              onClick: () => $e(Oa ? null : pe),
                                              className: `relative aspect-square rounded-xl flex flex-col items-center justify-start pt-1.5 text-sm font-medium transition-all cursor-pointer ${Oa ? "bg-red-600 text-white shadow-lg shadow-red-600/30" : ot(pe) ? "bg-white/10 text-white ring-1 ring-red-500/50" : Qe.length > 0 ? "bg-white/5 hover:bg-white/10 text-white" : "text-gray-500 hover:bg-white/5 hover:text-gray-300"}`,
                                              children: [
                                                pe,
                                                Qe.length > 0 &&
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex gap-0.5 mt-0.5",
                                                    children: [
                                                      _a &&
                                                        r.jsx("span", {
                                                          className:
                                                            "w-1.5 h-1.5 rounded-full bg-green-400",
                                                        }),
                                                      Qn &&
                                                        r.jsx("span", {
                                                          className:
                                                            "w-1.5 h-1.5 rounded-full bg-amber-400",
                                                        }),
                                                    ],
                                                  }),
                                              ],
                                            },
                                            pe,
                                          );
                                        }),
                                      ],
                                    }),
                                    r.jsxs("div", {
                                      className:
                                        "flex items-center gap-4 mt-4 pt-4 border-t border-white/5 text-xs text-gray-500",
                                      children: [
                                        r.jsxs("span", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            r.jsx("span", {
                                              className:
                                                "w-2 h-2 rounded-full bg-green-400",
                                            }),
                                            "Approved",
                                          ],
                                        }),
                                        r.jsxs("span", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            r.jsx("span", {
                                              className:
                                                "w-2 h-2 rounded-full bg-amber-400",
                                            }),
                                            "Pending",
                                          ],
                                        }),
                                        r.jsxs("span", {
                                          className:
                                            "flex items-center gap-1.5",
                                          children: [
                                            r.jsx("span", {
                                              className:
                                                "w-2 h-2 rounded-full bg-white/20",
                                            }),
                                            "Today",
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                r.jsx("div", {
                                  className:
                                    "rounded-2xl p-6 border border-white/5 bg-neutral-900/60",
                                  children: Ne
                                    ? r.jsxs(r.Fragment, {
                                        children: [
                                          r.jsxs("h3", {
                                            className:
                                              "text-white font-bold mb-1",
                                            children: [Ne, " ", ce],
                                          }),
                                          r.jsxs("p", {
                                            className:
                                              "text-xs text-gray-500 mb-4",
                                            children: [
                                              It.length,
                                              " booking",
                                              It.length !== 1 ? "s" : "",
                                            ],
                                          }),
                                          It.length === 0
                                            ? r.jsx("p", {
                                                className:
                                                  "text-gray-600 text-sm text-center py-8",
                                                children:
                                                  "No bookings on this day",
                                              })
                                            : r.jsx("div", {
                                                className: "space-y-3",
                                                children: It.map((pe) =>
                                                  r.jsxs(
                                                    "div",
                                                    {
                                                      className:
                                                        "p-3 rounded-xl border border-white/5 bg-white/5",
                                                      children: [
                                                        r.jsxs("div", {
                                                          className:
                                                            "flex items-center justify-between mb-1",
                                                          children: [
                                                            r.jsx("span", {
                                                              className:
                                                                "text-sm font-bold text-white",
                                                              children: pe.name,
                                                            }),
                                                            r.jsx("span", {
                                                              className: `text-[10px] font-bold px-2 py-0.5 rounded-full ${pe.status === "approved" ? "bg-green-500/20 text-green-400" : pe.status === "pending_approval" ? "bg-amber-500/20 text-amber-400" : "bg-gray-500/20 text-gray-400"}`,
                                                              children:
                                                                pe.status ===
                                                                "pending_approval"
                                                                  ? "Pending"
                                                                  : pe.status,
                                                            }),
                                                          ],
                                                        }),
                                                        r.jsxs("p", {
                                                          className:
                                                            "text-xs text-gray-500",
                                                          children: [
                                                            pe.planName,
                                                            " — ",
                                                            pe.timeSlot,
                                                          ],
                                                        }),
                                                        r.jsx("p", {
                                                          className:
                                                            "text-xs text-gray-600 mt-0.5",
                                                          children: pe.email,
                                                        }),
                                                      ],
                                                    },
                                                    pe._id,
                                                  ),
                                                ),
                                              }),
                                        ],
                                      })
                                    : r.jsxs("div", {
                                        className:
                                          "flex flex-col items-center justify-center h-full py-16 text-center",
                                        children: [
                                          r.jsx(qn, {
                                            className:
                                              "w-8 h-8 text-gray-700 mb-3",
                                          }),
                                          r.jsx("p", {
                                            className: "text-gray-600 text-sm",
                                            children:
                                              "Click on a date to see bookings",
                                          }),
                                        ],
                                      }),
                                }),
                              ],
                            }),
                          });
                        })(),
                      w === "blog" &&
                        r.jsxs(le.div, {
                          initial: { opacity: 0, y: 10 },
                          animate: { opacity: 1, y: 0 },
                          transition: { duration: 0.3 },
                          children: [
                            r.jsxs("div", {
                              className:
                                "flex items-center justify-between mb-6",
                              children: [
                                r.jsxs("div", {
                                  children: [
                                    r.jsx("h2", {
                                      className: `text-xl font-bold ${J === "dark" ? "text-white" : "text-slate-800"}`,
                                      children: "Blog Posts",
                                    }),
                                    r.jsxs("p", {
                                      className: `text-sm mt-0.5 ${J === "dark" ? "text-gray-500" : "text-slate-500"}`,
                                      children: [
                                        xt.length,
                                        " total — ",
                                        xt.filter((S) => S.published).length,
                                        " published",
                                      ],
                                    }),
                                  ],
                                }),
                                r.jsxs("button", {
                                  onClick: () => {
                                    (Qt(null),
                                      Zt(""),
                                      lt({
                                        title: "",
                                        content: "",
                                        excerpt: "",
                                        coverImage: "",
                                        tags: [],
                                        published: !1,
                                        metaTitle: "",
                                        metaDescription: "",
                                      }),
                                      za(!0));
                                  },
                                  className:
                                    "flex items-center gap-2 bg-gradient-to-r from-primary to-red-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity cursor-pointer",
                                  children: [
                                    r.jsx(A3, { className: "w-4 h-4" }),
                                    " New Post",
                                  ],
                                }),
                              ],
                            }),
                            Ei &&
                              r.jsxs("div", {
                                className: `rounded-2xl border p-6 mb-8 ${J === "dark" ? "bg-neutral-900/60 border-white/10" : "bg-white border-slate-200"}`,
                                children: [
                                  r.jsxs("h3", {
                                    className: `text-base font-bold mb-5 flex items-center gap-2 ${J === "dark" ? "text-white" : "text-slate-800"}`,
                                    children: [
                                      r.jsx(ef, {
                                        className: "w-4 h-4 text-primary",
                                      }),
                                      fa ? "Edit Post" : "New Post",
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "grid gap-4",
                                    children: [
                                      r.jsxs("div", {
                                        children: [
                                          r.jsx("label", {
                                            className: `block text-xs font-semibold mb-1.5 ${J === "dark" ? "text-gray-400" : "text-slate-600"}`,
                                            children: "Title *",
                                          }),
                                          r.jsx("input", {
                                            type: "text",
                                            placeholder:
                                              "e.g. Best Web Developer in Patna, Bihar",
                                            value: Ie.title,
                                            onChange: (S) =>
                                              lt((k) => ({
                                                ...k,
                                                title: S.target.value,
                                              })),
                                            className: `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all ${J === "dark" ? "bg-neutral-800 border-white/10 text-white placeholder:text-gray-600" : "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400"}`,
                                          }),
                                        ],
                                      }),
                                      r.jsxs("div", {
                                        children: [
                                          r.jsxs("label", {
                                            className: `block text-xs font-semibold mb-1.5 ${J === "dark" ? "text-gray-400" : "text-slate-600"}`,
                                            children: [
                                              "Excerpt * ",
                                              r.jsx("span", {
                                                className:
                                                  "font-normal text-gray-500",
                                                children:
                                                  "(short preview, 1-2 sentences)",
                                              }),
                                            ],
                                          }),
                                          r.jsx("textarea", {
                                            rows: 2,
                                            placeholder:
                                              "Short summary shown on blog listing page...",
                                            value: Ie.excerpt,
                                            onChange: (S) =>
                                              lt((k) => ({
                                                ...k,
                                                excerpt: S.target.value,
                                              })),
                                            className: `w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-all resize-none ${J === "dark" ? "bg-neutral-800 border-white/10 text-white placeholder:text-gray-600" : "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400"}`,
                                          }),
                                        ],
                                      }),
                                      r.jsxs("div", {
                                        children: [
                                          r.jsx("label", {
                                            className: `block text-xs font-semibold mb-1.5 ${J === "dark" ? "text-gray-400" : "text-slate-600"}`,
                                            children: "Content *",
                                          }),
                                          r.jsx(ET, {
                                            value: Ie.content,
                                            onChange: (S) =>
                                              lt((k) => ({ ...k, content: S })),
                                            theme: J,
                                          }),
                                        ],
                                      }),
                                      r.jsxs("div", {
                                        children: [
                                          r.jsxs("label", {
                                            className: `block text-xs font-semibold mb-2 ${J === "dark" ? "text-gray-400" : "text-slate-600"}`,
                                            children: [
                                              "Cover Image ",
                                              r.jsx("span", {
                                                className:
                                                  "font-normal text-gray-500",
                                                children:
                                                  "— 1200×630px (OG 16:9 standard, auto-resized)",
                                              }),
                                            ],
                                          }),
                                          Ie.coverImage
                                            ? r.jsxs("div", {
                                                className:
                                                  "relative rounded-xl overflow-hidden border border-white/10 group",
                                                children: [
                                                  r.jsx("img", {
                                                    src: Ie.coverImage,
                                                    alt: "Cover preview",
                                                    className:
                                                      "w-full h-44 object-cover",
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "absolute top-2 left-2 px-2 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-xs text-white font-mono",
                                                    children:
                                                      "1200 × 630 · 16:9",
                                                  }),
                                                  r.jsx("button", {
                                                    type: "button",
                                                    onClick: () =>
                                                      lt((S) => ({
                                                        ...S,
                                                        coverImage: "",
                                                      })),
                                                    className:
                                                      "absolute top-2 right-2 w-8 h-8 rounded-lg bg-red-600/80 hover:bg-red-600 text-white flex items-center justify-center transition-colors cursor-pointer opacity-0 group-hover:opacity-100",
                                                    children: r.jsx(af, {
                                                      className: "w-4 h-4",
                                                    }),
                                                  }),
                                                  r.jsx("div", {
                                                    className:
                                                      "absolute bottom-0 inset-x-0 p-2 bg-gradient-to-t from-black/80 to-transparent",
                                                    children: r.jsx("button", {
                                                      type: "button",
                                                      onClick: () => {
                                                        const S =
                                                          document.createElement(
                                                            "input",
                                                          );
                                                        ((S.type = "file"),
                                                          (S.accept =
                                                            "image/*"),
                                                          (S.onchange = (k) => {
                                                            const F =
                                                              k.target
                                                                .files?.[0];
                                                            F && Mi(F);
                                                          }),
                                                          S.click());
                                                      },
                                                      className:
                                                        "text-xs text-gray-300 hover:text-white cursor-pointer underline underline-offset-2",
                                                      children: "Change image",
                                                    }),
                                                  }),
                                                ],
                                              })
                                            : r.jsxs("div", {
                                                className: `border-2 border-dashed rounded-xl transition-all duration-200 ${J === "dark" ? "border-white/10 hover:border-primary/40 bg-neutral-800/40" : "border-slate-200 hover:border-primary/40 bg-slate-50"}`,
                                                onDragOver: (S) => {
                                                  (S.preventDefault(),
                                                    S.currentTarget.classList.add(
                                                      "border-primary/60",
                                                      "bg-primary/5",
                                                    ));
                                                },
                                                onDragLeave: (S) => {
                                                  S.currentTarget.classList.remove(
                                                    "border-primary/60",
                                                    "bg-primary/5",
                                                  );
                                                },
                                                onDrop: (S) => {
                                                  (S.preventDefault(),
                                                    S.currentTarget.classList.remove(
                                                      "border-primary/60",
                                                      "bg-primary/5",
                                                    ));
                                                  const k =
                                                    S.dataTransfer.files?.[0];
                                                  k &&
                                                    k.type.startsWith(
                                                      "image/",
                                                    ) &&
                                                    Mi(k);
                                                },
                                                children: [
                                                  r.jsxs("label", {
                                                    className:
                                                      "flex flex-col items-center justify-center py-7 px-4 cursor-pointer gap-3",
                                                    children: [
                                                      r.jsx("input", {
                                                        type: "file",
                                                        accept: "image/*",
                                                        className: "sr-only",
                                                        onChange: (S) => {
                                                          const k =
                                                            S.target.files?.[0];
                                                          k && Mi(k);
                                                        },
                                                      }),
                                                      r.jsx("div", {
                                                        className: `w-12 h-12 rounded-2xl flex items-center justify-center ${J === "dark" ? "bg-neutral-700" : "bg-slate-200"}`,
                                                        children: r.jsx(Id, {
                                                          className:
                                                            "w-6 h-6 text-gray-400",
                                                        }),
                                                      }),
                                                      r.jsxs("div", {
                                                        className:
                                                          "text-center",
                                                        children: [
                                                          r.jsxs("p", {
                                                            className: `text-sm font-semibold mb-0.5 ${J === "dark" ? "text-gray-300" : "text-slate-700"}`,
                                                            children: [
                                                              "Drag & drop or ",
                                                              r.jsx("span", {
                                                                className:
                                                                  "text-primary",
                                                                children:
                                                                  "click to browse",
                                                              }),
                                                            ],
                                                          }),
                                                          r.jsx("p", {
                                                            className:
                                                              "text-xs text-gray-500",
                                                            children:
                                                              "Auto-resized to 1200×630px · JPEG 85% quality",
                                                          }),
                                                          r.jsx("p", {
                                                            className:
                                                              "text-xs text-gray-600 mt-0.5",
                                                            children:
                                                              "PNG, JPG, WEBP — any size accepted",
                                                          }),
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    className: `border-t px-4 py-3 ${J === "dark" ? "border-white/5" : "border-slate-200"}`,
                                                    children: [
                                                      r.jsx("p", {
                                                        className:
                                                          "text-xs text-gray-600 mb-1.5",
                                                        children:
                                                          "Or paste image URL:",
                                                      }),
                                                      r.jsx("input", {
                                                        type: "url",
                                                        placeholder:
                                                          "https://example.com/image.jpg",
                                                        className: `w-full border rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary/50 transition-all ${J === "dark" ? "bg-neutral-800 border-white/10 text-white placeholder:text-gray-600" : "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400"}`,
                                                        onBlur: (S) => {
                                                          S.target.value &&
                                                            lt((k) => ({
                                                              ...k,
                                                              coverImage:
                                                                S.target.value,
                                                            }));
                                                        },
                                                        onKeyDown: (S) => {
                                                          S.key === "Enter" &&
                                                            S.target.value &&
                                                            lt((k) => ({
                                                              ...k,
                                                              coverImage:
                                                                S.target.value,
                                                            }));
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                        ],
                                      }),
                                      r.jsxs("div", {
                                        children: [
                                          r.jsxs("label", {
                                            className: `block text-xs font-semibold mb-1.5 ${J === "dark" ? "text-gray-400" : "text-slate-600"}`,
                                            children: [
                                              "Tags ",
                                              r.jsx("span", {
                                                className:
                                                  "font-normal text-gray-500",
                                                children:
                                                  "— press Enter or comma to add",
                                              }),
                                            ],
                                          }),
                                          r.jsxs("div", {
                                            className: `flex flex-wrap gap-2 min-h-[46px] border rounded-xl px-3 py-2.5 transition-all focus-within:border-primary/50 focus-within:ring-1 focus-within:ring-primary/30 ${J === "dark" ? "bg-neutral-800 border-white/10" : "bg-slate-50 border-slate-200"}`,
                                            children: [
                                              Ie.tags.map((S, k) =>
                                                r.jsxs(
                                                  "span",
                                                  {
                                                    className:
                                                      "inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary/15 border border-primary/25 text-primary text-xs font-semibold shrink-0",
                                                    children: [
                                                      "#",
                                                      S,
                                                      r.jsx("button", {
                                                        type: "button",
                                                        onClick: () =>
                                                          lt((F) => ({
                                                            ...F,
                                                            tags: F.tags.filter(
                                                              (te, ce) =>
                                                                ce !== k,
                                                            ),
                                                          })),
                                                        className:
                                                          "hover:text-red-400 transition-colors cursor-pointer ml-0.5",
                                                        children: r.jsx(af, {
                                                          className: "w-3 h-3",
                                                        }),
                                                      }),
                                                    ],
                                                  },
                                                  k,
                                                ),
                                              ),
                                              r.jsx("input", {
                                                type: "text",
                                                value: on,
                                                onChange: (S) => {
                                                  const k = S.target.value;
                                                  if (k.endsWith(",")) {
                                                    const F = k
                                                      .slice(0, -1)
                                                      .trim();
                                                    (F &&
                                                      !Ie.tags.includes(F) &&
                                                      lt((te) => ({
                                                        ...te,
                                                        tags: [...te.tags, F],
                                                      })),
                                                      Zt(""));
                                                  } else Zt(k);
                                                },
                                                onKeyDown: (S) => {
                                                  if (S.key === "Enter") {
                                                    S.preventDefault();
                                                    const k = on.trim();
                                                    (k &&
                                                      !Ie.tags.includes(k) &&
                                                      lt((F) => ({
                                                        ...F,
                                                        tags: [...F.tags, k],
                                                      })),
                                                      Zt(""));
                                                  } else
                                                    S.key === "Backspace" &&
                                                      !on &&
                                                      Ie.tags.length > 0 &&
                                                      lt((k) => ({
                                                        ...k,
                                                        tags: k.tags.slice(
                                                          0,
                                                          -1,
                                                        ),
                                                      }));
                                                },
                                                placeholder:
                                                  Ie.tags.length === 0
                                                    ? "React, Web Dev, Bihar..."
                                                    : "Add tag...",
                                                className:
                                                  "flex-1 min-w-[120px] bg-transparent text-sm outline-none placeholder:text-gray-500 text-white py-0.5",
                                              }),
                                            ],
                                          }),
                                          r.jsxs("p", {
                                            className:
                                              "text-xs text-gray-600 mt-1.5",
                                            children: [
                                              "Press ",
                                              r.jsx("kbd", {
                                                className: `px-1.5 py-0.5 rounded text-[10px] font-mono ${J === "dark" ? "bg-neutral-700 text-gray-400" : "bg-slate-200 text-slate-500"}`,
                                                children: "Enter",
                                              }),
                                              " or ",
                                              r.jsx("kbd", {
                                                className: `px-1.5 py-0.5 rounded text-[10px] font-mono ${J === "dark" ? "bg-neutral-700 text-gray-400" : "bg-slate-200 text-slate-500"}`,
                                                children: ",",
                                              }),
                                              " to add · Backspace to remove last tag",
                                            ],
                                          }),
                                        ],
                                      }),
                                      r.jsxs("div", {
                                        className: `rounded-xl border p-4 ${J === "dark" ? "bg-neutral-800/50 border-white/5" : "bg-slate-50 border-slate-200"}`,
                                        children: [
                                          r.jsxs("p", {
                                            className: `text-xs font-bold mb-3 flex items-center gap-1.5 ${J === "dark" ? "text-gray-400" : "text-slate-600"}`,
                                            children: [
                                              r.jsx(Td, {
                                                className:
                                                  "w-3.5 h-3.5 text-primary",
                                              }),
                                              " SEO Fields ",
                                              r.jsx("span", {
                                                className: "font-normal",
                                                children:
                                                  "(optional — auto-filled from title/excerpt)",
                                              }),
                                            ],
                                          }),
                                          r.jsxs("div", {
                                            className:
                                              "grid sm:grid-cols-2 gap-3",
                                            children: [
                                              r.jsx("input", {
                                                type: "text",
                                                placeholder:
                                                  "SEO Title (max 60 chars)",
                                                value: Ie.metaTitle,
                                                onChange: (S) =>
                                                  lt((k) => ({
                                                    ...k,
                                                    metaTitle: S.target.value,
                                                  })),
                                                className: `w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-all ${J === "dark" ? "bg-neutral-800 border-white/10 text-white placeholder:text-gray-600" : "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400"}`,
                                              }),
                                              r.jsx("input", {
                                                type: "text",
                                                placeholder:
                                                  "Meta Description (max 160 chars)",
                                                value: Ie.metaDescription,
                                                onChange: (S) =>
                                                  lt((k) => ({
                                                    ...k,
                                                    metaDescription:
                                                      S.target.value,
                                                  })),
                                                className: `w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary/50 transition-all ${J === "dark" ? "bg-neutral-800 border-white/10 text-white placeholder:text-gray-600" : "bg-white border-slate-200 text-slate-800 placeholder:text-slate-400"}`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      r.jsxs("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                          r.jsx("button", {
                                            type: "button",
                                            onClick: () =>
                                              lt((S) => ({
                                                ...S,
                                                published: !S.published,
                                              })),
                                            className: "cursor-pointer",
                                            children: Ie.published
                                              ? r.jsx(mx, {
                                                  className:
                                                    "w-8 h-8 text-green-500",
                                                })
                                              : r.jsx(hx, {
                                                  className:
                                                    "w-8 h-8 text-gray-500",
                                                }),
                                          }),
                                          r.jsx("span", {
                                            className: `text-sm font-medium ${Ie.published ? "text-green-400" : J === "dark" ? "text-gray-400" : "text-slate-500"}`,
                                            children: Ie.published
                                              ? "Published (visible on site)"
                                              : "Draft (not visible)",
                                          }),
                                        ],
                                      }),
                                      Il &&
                                        r.jsxs("div", {
                                          className:
                                            "flex items-start gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm",
                                          children: [
                                            r.jsx(bo, {
                                              className:
                                                "w-4 h-4 mt-0.5 shrink-0",
                                            }),
                                            r.jsx("span", { children: Il }),
                                          ],
                                        }),
                                      r.jsxs("div", {
                                        className: "flex gap-3 pt-2",
                                        children: [
                                          r.jsx("button", {
                                            onClick: Cs,
                                            disabled:
                                              Ai ||
                                              !Ie.title ||
                                              !Ie.content ||
                                              !Ie.excerpt,
                                            className:
                                              "flex items-center gap-2 bg-gradient-to-r from-primary to-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold disabled:opacity-40 hover:opacity-90 transition-opacity cursor-pointer shadow-lg shadow-primary/20",
                                            children: Ai
                                              ? r.jsxs(r.Fragment, {
                                                  children: [
                                                    r.jsx("div", {
                                                      className:
                                                        "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin",
                                                    }),
                                                    " Saving...",
                                                  ],
                                                })
                                              : r.jsxs(r.Fragment, {
                                                  children: [
                                                    r.jsx(Tl, {
                                                      className: "w-4 h-4",
                                                    }),
                                                    " ",
                                                    fa
                                                      ? "Update Post"
                                                      : "Save Post",
                                                  ],
                                                }),
                                          }),
                                          r.jsx("button", {
                                            onClick: () => {
                                              (za(!1), Qt(null), Fn(null));
                                            },
                                            className: `px-5 py-2.5 rounded-xl text-sm font-semibold border transition-colors cursor-pointer ${J === "dark" ? "border-white/10 text-gray-400 hover:bg-white/5" : "border-slate-200 text-slate-500 hover:bg-slate-50"}`,
                                            children: "Cancel",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            Fo
                              ? r.jsxs("div", {
                                  className:
                                    "flex flex-col items-center justify-center py-20",
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4",
                                    }),
                                    r.jsx("p", {
                                      className: "text-gray-400 text-sm",
                                      children: "Loading blog posts...",
                                    }),
                                  ],
                                })
                              : xt.length === 0
                                ? r.jsxs("div", {
                                    className: `text-center py-16 border rounded-2xl ${J === "dark" ? "bg-neutral-900/20 border-white/5" : "bg-white border-slate-200"}`,
                                    children: [
                                      r.jsx(ps, {
                                        className: "mx-auto mb-3 text-gray-600",
                                        size: 40,
                                      }),
                                      r.jsx("p", {
                                        className: `text-sm ${J === "dark" ? "text-gray-500" : "text-slate-400"}`,
                                        children:
                                          'No blog posts yet. Click "New Post" to create one.',
                                      }),
                                    ],
                                  })
                                : r.jsx("div", {
                                    className: "grid gap-4",
                                    children: xt.map((S) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          className: `flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl border transition-all ${J === "dark" ? "bg-neutral-900/50 border-white/10 hover:border-white/20" : "bg-white border-slate-200 hover:border-slate-300"}`,
                                          children: [
                                            S.coverImage &&
                                              r.jsx("img", {
                                                src: S.coverImage,
                                                alt: S.title,
                                                className:
                                                  "w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10",
                                              }),
                                            r.jsxs("div", {
                                              className: "flex-1 min-w-0",
                                              children: [
                                                r.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 flex-wrap mb-1",
                                                  children: [
                                                    r.jsx("span", {
                                                      className: `text-[10px] font-bold px-2 py-0.5 rounded-full border ${S.published ? "bg-green-500/10 border-green-500/20 text-green-400" : "bg-neutral-700/50 border-white/10 text-gray-500"}`,
                                                      children: S.published
                                                        ? "Published"
                                                        : "Draft",
                                                    }),
                                                    (S.tags || [])
                                                      .slice(0, 2)
                                                      .map((k) =>
                                                        r.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20",
                                                            children: k,
                                                          },
                                                          k,
                                                        ),
                                                      ),
                                                  ],
                                                }),
                                                r.jsx("h4", {
                                                  className: `font-semibold text-sm truncate ${J === "dark" ? "text-white" : "text-slate-800"}`,
                                                  children: S.title,
                                                }),
                                                r.jsx("p", {
                                                  className: `text-xs mt-0.5 ${J === "dark" ? "text-gray-500" : "text-slate-400"}`,
                                                  children: new Date(
                                                    S.createdAt,
                                                  ).toLocaleDateString(
                                                    "en-IN",
                                                    {
                                                      year: "numeric",
                                                      month: "short",
                                                      day: "numeric",
                                                    },
                                                  ),
                                                }),
                                              ],
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "flex items-center gap-2 shrink-0",
                                              children: [
                                                r.jsx("button", {
                                                  onClick: () => Zo(S),
                                                  title: S.published
                                                    ? "Unpublish"
                                                    : "Publish",
                                                  className: `p-2 rounded-lg border text-xs font-medium transition-all cursor-pointer ${S.published ? "bg-green-500/10 border-green-500/20 text-green-400 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400" : "bg-neutral-800 border-white/10 text-gray-400 hover:bg-green-500/10 hover:border-green-500/20 hover:text-green-400"}`,
                                                  children: S.published
                                                    ? r.jsx(mx, {
                                                        className: "w-4 h-4",
                                                      })
                                                    : r.jsx(hx, {
                                                        className: "w-4 h-4",
                                                      }),
                                                }),
                                                r.jsx("button", {
                                                  onClick: () => er(S),
                                                  className: `p-2 rounded-lg border transition-all cursor-pointer ${J === "dark" ? "bg-neutral-800 border-white/10 text-gray-400 hover:text-white hover:border-white/20" : "bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-700"}`,
                                                  children: r.jsx(ef, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                                r.jsx("button", {
                                                  onClick: () =>
                                                    Qo(S._id, S.title),
                                                  className:
                                                    "p-2 rounded-lg border bg-red-500/5 border-red-500/10 text-red-500 hover:bg-red-500/10 transition-all cursor-pointer",
                                                  children: r.jsx(wo, {
                                                    className: "w-4 h-4",
                                                  }),
                                                }),
                                              ],
                                            }),
                                          ],
                                        },
                                        S._id,
                                      ),
                                    ),
                                  }),
                          ],
                        }),
                      w === "bookings" &&
                        r.jsx(r.Fragment, {
                          children: Q
                            ? r.jsxs("div", {
                                className:
                                  "flex flex-col items-center justify-center py-20",
                                children: [
                                  r.jsx("div", {
                                    className:
                                      "w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4",
                                  }),
                                  r.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children:
                                      "Fetching bookings from MongoDB...",
                                  }),
                                ],
                              })
                            : W
                              ? r.jsxs("div", {
                                  className:
                                    "text-center py-10 bg-red-500/5 border border-red-500/10 rounded-xl",
                                  children: [
                                    r.jsxs("p", {
                                      className: "text-red-500 text-sm",
                                      children: ["⚠️ ", W],
                                    }),
                                    r.jsx("button", {
                                      onClick: () =>
                                        nt(
                                          localStorage.getItem("admin_token") ||
                                            "",
                                        ),
                                      className:
                                        "mt-4 text-xs text-primary underline hover:text-red-400",
                                      children: "Try Again",
                                    }),
                                  ],
                                })
                              : ar.length === 0
                                ? r.jsx("div", {
                                    className: `text-center py-16 border rounded-2xl ${J === "dark" ? "bg-neutral-900/20 border-white/5 text-gray-500" : "bg-white border-slate-200 text-slate-400"}`,
                                    children: r.jsx("p", {
                                      className: "text-sm",
                                      children:
                                        "No bookings found matching filters.",
                                    }),
                                  })
                                : r.jsx("div", {
                                    className: "grid gap-6",
                                    children: ar.map((S) => {
                                      const k = {
                                        pending_approval:
                                          "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400",
                                        approved:
                                          "bg-red-600 border-transparent text-white dark:bg-red-500",
                                        rejected:
                                          "bg-slate-100 border-slate-200 text-slate-500 dark:bg-white/5 dark:border-white/10 dark:text-slate-400",
                                      };
                                      return r.jsxs(
                                        "div",
                                        {
                                          className: `rounded-2xl p-5 sm:p-6 transition-all border ${J === "dark" ? "bg-neutral-900/40 border-white/10 hover:border-white/15" : "bg-white border-slate-200/80 shadow-md shadow-slate-100/50 hover:border-slate-300"}`,
                                          children: [
                                            r.jsxs("div", {
                                              className: `flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 mb-4 border-b ${J === "dark" ? "border-white/5" : "border-slate-100"}`,
                                              children: [
                                                r.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-3",
                                                  children: [
                                                    r.jsx("h3", {
                                                      className: `font-bold text-lg ${J === "dark" ? "text-white" : "text-slate-800"}`,
                                                      children: S.planName,
                                                    }),
                                                    r.jsxs("span", {
                                                      className:
                                                        "text-red-600 dark:text-red-400 font-bold text-sm bg-red-500/10 px-2.5 py-0.5 rounded-full border border-red-500/20",
                                                      children: ["₹", S.amount],
                                                    }),
                                                  ],
                                                }),
                                                r.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 flex-wrap sm:flex-nowrap",
                                                  children: [
                                                    r.jsx("span", {
                                                      className: `px-3 py-1 rounded-full text-xs font-semibold border ${k[S.status]}`,
                                                      children:
                                                        S.status ===
                                                        "pending_approval"
                                                          ? "Pending Verification"
                                                          : S.status.toUpperCase(),
                                                    }),
                                                    r.jsx("button", {
                                                      disabled: G !== null,
                                                      onClick: () =>
                                                        hn(S._id, "booking"),
                                                      className: `p-1.5 rounded-lg border transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${J === "dark" ? "bg-white/5 border-white/10 text-slate-400 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-500" : "bg-slate-100 border-slate-200 text-slate-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600"}`,
                                                      title: "Delete booking",
                                                      children: r.jsx(wo, {
                                                        className:
                                                          "w-3.5 h-3.5",
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "grid md:grid-cols-3 gap-6",
                                              children: [
                                                r.jsxs("div", {
                                                  className: "space-y-3.5",
                                                  children: [
                                                    r.jsxs("div", {
                                                      className: `flex items-center gap-2.5 text-sm ${J === "dark" ? "text-gray-300" : "text-slate-600"}`,
                                                      children: [
                                                        r.jsx(qn, {
                                                          className:
                                                            "w-4 h-4 text-red-500 flex-shrink-0",
                                                        }),
                                                        r.jsx("span", {
                                                          children: S.date,
                                                        }),
                                                      ],
                                                    }),
                                                    r.jsxs("div", {
                                                      className: `flex items-center gap-2.5 text-sm ${J === "dark" ? "text-gray-300" : "text-slate-600"}`,
                                                      children: [
                                                        r.jsx(Vl, {
                                                          className:
                                                            "w-4 h-4 text-red-500 flex-shrink-0",
                                                        }),
                                                        r.jsx("span", {
                                                          children: S.timeSlot,
                                                        }),
                                                      ],
                                                    }),
                                                    r.jsxs("div", {
                                                      className: `flex items-center gap-2.5 text-sm ${J === "dark" ? "text-gray-300" : "text-slate-600"}`,
                                                      children: [
                                                        r.jsx(iT, {
                                                          className:
                                                            "w-4 h-4 text-red-500 flex-shrink-0",
                                                        }),
                                                        r.jsx("span", {
                                                          className:
                                                            "font-semibold",
                                                          children: S.name,
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                r.jsxs("div", {
                                                  className: "space-y-3.5",
                                                  children: [
                                                    r.jsxs("div", {
                                                      className: `flex items-center gap-2.5 text-sm ${J === "dark" ? "text-gray-300" : "text-slate-600"}`,
                                                      children: [
                                                        r.jsx(Wd, {
                                                          className:
                                                            "w-4 h-4 text-gray-500 flex-shrink-0",
                                                        }),
                                                        r.jsx("a", {
                                                          href: `mailto:${S.email}`,
                                                          className:
                                                            "hover:text-red-500 transition-colors underline truncate block",
                                                          children: S.email,
                                                        }),
                                                      ],
                                                    }),
                                                    r.jsxs("div", {
                                                      className: `flex items-center gap-2.5 text-sm ${J === "dark" ? "text-gray-300" : "text-slate-600"}`,
                                                      children: [
                                                        r.jsx(T3, {
                                                          className:
                                                            "w-4 h-4 text-slate-400 flex-shrink-0",
                                                        }),
                                                        r.jsx("a", {
                                                          href: `https://wa.me/${S.whatsapp.replace(/[^0-9]/g, "")}`,
                                                          target: "_blank",
                                                          rel: "noopener noreferrer",
                                                          className:
                                                            "hover:text-red-500 transition-colors underline",
                                                          children: S.whatsapp,
                                                        }),
                                                      ],
                                                    }),
                                                    r.jsx("div", {
                                                      className:
                                                        "text-xs text-gray-500 flex items-start gap-1",
                                                      children: r.jsxs("span", {
                                                        children: [
                                                          "Booked: ",
                                                          new Date(
                                                            S.createdAt,
                                                          ).toLocaleString(),
                                                        ],
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                                r.jsxs("div", {
                                                  className: `border rounded-xl p-4 flex flex-col justify-between ${J === "dark" ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-100"}`,
                                                  children: [
                                                    r.jsxs("div", {
                                                      children: [
                                                        r.jsx("p", {
                                                          className:
                                                            "text-xs text-gray-500 uppercase tracking-wider font-semibold mb-1",
                                                          children:
                                                            "Transaction ID",
                                                        }),
                                                        S.transactionId
                                                          ? r.jsxs("div", {
                                                              className: `flex items-center justify-between gap-2 border p-2 rounded-lg ${J === "dark" ? "bg-black/40 border-white/5" : "bg-white border-slate-200"}`,
                                                              children: [
                                                                r.jsx("span", {
                                                                  className: `font-mono text-sm truncate select-all ${J === "dark" ? "text-gray-300" : "text-slate-700"}`,
                                                                  children:
                                                                    S.transactionId,
                                                                }),
                                                                r.jsx(
                                                                  "button",
                                                                  {
                                                                    onClick:
                                                                      () =>
                                                                        tr(
                                                                          S.transactionId ||
                                                                            "",
                                                                          S._id,
                                                                        ),
                                                                    className:
                                                                      "p-1 rounded bg-white/5 hover:bg-white/10 transition-colors flex-shrink-0",
                                                                    title:
                                                                      "Copy transaction ID",
                                                                    children:
                                                                      re ===
                                                                      S._id
                                                                        ? r.jsx(
                                                                            wb,
                                                                            {
                                                                              className:
                                                                                "w-3.5 h-3.5 text-red-500",
                                                                            },
                                                                          )
                                                                        : r.jsx(
                                                                            M4,
                                                                            {
                                                                              className:
                                                                                "w-3.5 h-3.5 text-gray-400",
                                                                            },
                                                                          ),
                                                                  },
                                                                ),
                                                              ],
                                                            })
                                                          : r.jsx("span", {
                                                              className:
                                                                "text-xs text-slate-400 italic",
                                                              children:
                                                                "No transaction ID submitted.",
                                                            }),
                                                      ],
                                                    }),
                                                    S.notes &&
                                                      r.jsxs("div", {
                                                        className:
                                                          "mt-3 text-xs text-gray-500 flex gap-1",
                                                        children: [
                                                          r.jsx(vo, {
                                                            className:
                                                              "w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5",
                                                          }),
                                                          r.jsxs("span", {
                                                            className:
                                                              "italic truncate",
                                                            title: S.notes,
                                                            children: [
                                                              '"',
                                                              S.notes,
                                                              '"',
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            S.status === "pending_approval" &&
                                              r.jsxs("div", {
                                                className: `mt-5 pt-4 border-t space-y-4 ${J === "dark" ? "border-white/5" : "border-slate-100"}`,
                                                children: [
                                                  r.jsxs("div", {
                                                    children: [
                                                      r.jsx("label", {
                                                        className: `block text-xs font-semibold mb-1.5 uppercase ${J === "dark" ? "text-gray-400" : "text-slate-500"}`,
                                                        children:
                                                          "Action Notes / Google Meet Link",
                                                      }),
                                                      r.jsx("input", {
                                                        type: "text",
                                                        placeholder:
                                                          "Enter meeting link or reject reason to email the user...",
                                                        value: Se[S._id] || "",
                                                        onChange: (F) =>
                                                          M((te) => ({
                                                            ...te,
                                                            [S._id]:
                                                              F.target.value,
                                                          })),
                                                        className: `w-full border rounded-xl px-4 py-2.5 transition-colors duration-200 text-xs focus:outline-none focus:border-red-500/40 focus:ring-1 focus:ring-red-500/20 ${J === "dark" ? "bg-black/30 border-white/5 text-white placeholder:text-gray-700" : "bg-slate-50 border-slate-200 text-slate-800 placeholder:text-slate-400"}`,
                                                      }),
                                                    ],
                                                  }),
                                                  r.jsxs("div", {
                                                    className:
                                                      "flex gap-3 justify-end",
                                                    children: [
                                                      r.jsxs("button", {
                                                        onClick: () =>
                                                          un(S._id, "rejected"),
                                                        disabled: G !== null,
                                                        className: `flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${J === "dark" ? "bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 text-gray-300" : "bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-700"}`,
                                                        children: [
                                                          r.jsx(bo, {
                                                            className:
                                                              "w-4 h-4",
                                                          }),
                                                          "Reject Booking",
                                                        ],
                                                      }),
                                                      r.jsxs("button", {
                                                        onClick: () =>
                                                          un(S._id, "approved"),
                                                        disabled: G !== null,
                                                        className: `flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${J === "dark" ? "bg-red-600 hover:bg-red-500 text-white border border-transparent" : "bg-red-600 hover:bg-red-700 text-white border border-transparent"}`,
                                                        children: [
                                                          r.jsx(Tl, {
                                                            className:
                                                              "w-4 h-4",
                                                          }),
                                                          "Approve Booking",
                                                        ],
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            S.status !== "pending_approval" &&
                                              r.jsx("div", {
                                                className: `mt-4 pt-3 border-t flex justify-end ${J === "dark" ? "border-white/5" : "border-slate-100"}`,
                                                children: r.jsx("span", {
                                                  className: `text-[10px] ${J === "dark" ? "text-gray-500" : "text-slate-400"}`,
                                                  children:
                                                    "No actions required. Customer email sent.",
                                                }),
                                              }),
                                          ],
                                        },
                                        S._id,
                                      );
                                    }),
                                  }),
                        }),
                      w === "messages" &&
                        r.jsx(r.Fragment, {
                          children: I
                            ? r.jsxs("div", {
                                className:
                                  "flex flex-col items-center justify-center py-20",
                                children: [
                                  r.jsx("div", {
                                    className:
                                      "w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4",
                                  }),
                                  r.jsx("p", {
                                    className: "text-gray-400 text-sm",
                                    children: "Fetching contact inquiries...",
                                  }),
                                ],
                              })
                            : we
                              ? r.jsxs("div", {
                                  className:
                                    "text-center py-10 bg-red-500/5 border border-red-500/10 rounded-xl",
                                  children: [
                                    r.jsxs("p", {
                                      className: "text-red-500 text-sm",
                                      children: ["⚠️ ", we],
                                    }),
                                    r.jsx("button", {
                                      onClick: () =>
                                        yt(
                                          localStorage.getItem("admin_token") ||
                                            "",
                                        ),
                                      className:
                                        "mt-4 text-xs text-primary underline hover:text-red-400",
                                      children: "Try Again",
                                    }),
                                  ],
                                })
                              : ks.length === 0
                                ? r.jsx("div", {
                                    className: `text-center py-16 border rounded-2xl ${J === "dark" ? "bg-neutral-900/20 border-white/5 text-gray-500" : "bg-white border-slate-200 text-slate-400"}`,
                                    children: r.jsx("p", {
                                      className: "text-sm",
                                      children:
                                        "No messages found matching filters.",
                                    }),
                                  })
                                : r.jsx("div", {
                                    className: "grid gap-6",
                                    children: ks.map((S) =>
                                      r.jsxs(
                                        "div",
                                        {
                                          className: `rounded-2xl p-5 sm:p-6 transition-all border ${J === "dark" ? "bg-neutral-900/40 border-white/10 hover:border-white/15" : "bg-white border-slate-200/80 shadow-md shadow-slate-100/50 hover:border-slate-300"} ${S.read ? "" : "border-l-4 border-l-red-500"}`,
                                          children: [
                                            r.jsxs("div", {
                                              className: `flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pb-4 mb-4 border-b ${J === "dark" ? "border-white/5" : "border-slate-100"}`,
                                              children: [
                                                r.jsxs("div", {
                                                  children: [
                                                    r.jsxs("h3", {
                                                      className: `font-bold text-lg flex items-center gap-2 ${J === "dark" ? "text-white" : "text-slate-800"}`,
                                                      children: [
                                                        S.name,
                                                        !S.read &&
                                                          r.jsx("span", {
                                                            className:
                                                              "bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 text-[9px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider",
                                                            children: "New",
                                                          }),
                                                      ],
                                                    }),
                                                    r.jsxs("div", {
                                                      className:
                                                        "flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-500 mt-1",
                                                      children: [
                                                        r.jsx("a", {
                                                          href: `mailto:${S.email}`,
                                                          className:
                                                            "hover:text-red-500 transition-colors underline",
                                                          children: S.email,
                                                        }),
                                                        r.jsxs("span", {
                                                          children: [
                                                            "Received: ",
                                                            new Date(
                                                              S.createdAt,
                                                            ).toLocaleString(),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                r.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-2 self-stretch sm:self-auto justify-end",
                                                  children: [
                                                    r.jsx("button", {
                                                      onClick: () =>
                                                        Ds(S._id, S.read),
                                                      className: `px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer ${J === "dark" ? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10" : "bg-slate-100 border-slate-200 text-slate-600 hover:text-slate-800 hover:bg-slate-200"}`,
                                                      title: "Mark Read/Unread",
                                                      children: S.read
                                                        ? "Mark Unread"
                                                        : "Mark Read",
                                                    }),
                                                    r.jsx("button", {
                                                      disabled: G !== null,
                                                      onClick: () =>
                                                        hn(S._id, "message"),
                                                      className: `p-1.5 rounded-lg border transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer ${J === "dark" ? "bg-white/5 border-white/10 text-slate-400 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-500" : "bg-slate-100 border-slate-200 text-slate-500 hover:bg-red-50 hover:border-red-200 hover:text-red-600"}`,
                                                      title: "Delete Message",
                                                      children: r.jsx(wo, {
                                                        className:
                                                          "w-3.5 h-3.5",
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            r.jsx("div", {
                                              className: `p-4 rounded-xl border text-sm leading-relaxed whitespace-pre-line ${J === "dark" ? "bg-black/30 border-white/5 text-gray-300" : "bg-slate-50 border-slate-100 text-slate-700"}`,
                                              children: S.message,
                                            }),
                                            S.replies &&
                                              S.replies.length > 0 &&
                                              r.jsxs("div", {
                                                className: "mt-4 space-y-3",
                                                children: [
                                                  r.jsxs("p", {
                                                    className:
                                                      "text-xs font-bold text-gray-500 uppercase tracking-wider",
                                                    children: [
                                                      "Reply History (",
                                                      S.replies.length,
                                                      ")",
                                                    ],
                                                  }),
                                                  S.replies.map((k, F) =>
                                                    r.jsxs(
                                                      "div",
                                                      {
                                                        className: `p-3.5 rounded-xl border text-xs leading-relaxed ${J === "dark" ? "bg-white/5 border-white/5 text-gray-400" : "bg-slate-100/50 border-slate-200/50 text-slate-600"}`,
                                                        children: [
                                                          r.jsxs("div", {
                                                            className:
                                                              "flex justify-between items-center mb-1.5 font-bold",
                                                            children: [
                                                              r.jsxs("span", {
                                                                className:
                                                                  "flex items-center gap-1",
                                                                children: [
                                                                  r.jsx(fx, {
                                                                    className:
                                                                      "w-3 h-3 text-red-500",
                                                                  }),
                                                                  k.subject,
                                                                ],
                                                              }),
                                                              r.jsx("span", {
                                                                className:
                                                                  "text-[10px] text-gray-500 font-normal",
                                                                children:
                                                                  new Date(
                                                                    k.sentAt,
                                                                  ).toLocaleString(),
                                                              }),
                                                            ],
                                                          }),
                                                          r.jsx("p", {
                                                            className:
                                                              "whitespace-pre-line",
                                                            children: k.body,
                                                          }),
                                                        ],
                                                      },
                                                      F,
                                                    ),
                                                  ),
                                                ],
                                              }),
                                            r.jsx("div", {
                                              className:
                                                "mt-4 flex justify-end",
                                              children: r.jsxs("button", {
                                                onClick: () => dn(S),
                                                className:
                                                  "flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-semibold hover:shadow-lg hover:shadow-red-500/20 transition-all cursor-pointer",
                                                children: [
                                                  r.jsx(vo, {
                                                    className: "w-3.5 h-3.5",
                                                  }),
                                                  "Reply via Email",
                                                ],
                                              }),
                                            }),
                                          ],
                                        },
                                        S._id,
                                      ),
                                    ),
                                  }),
                        }),
                    ],
                  },
                  "dashboard",
                )
              : r.jsx(
                  le.div,
                  {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    className: "max-w-md mx-auto mt-20",
                    children: r.jsx("div", {
                      className:
                        "bg-neutral-900/60 backdrop-blur-md rounded-[25px] p-8 border border-white/10 transition-all duration-300 hover:scale-105 hover:border-red-500/30 shadow-[0_0_50px_rgba(220,38,38,0.15)]",
                      children: r.jsxs("form", {
                        onSubmit: Wl,
                        className: "flex flex-col gap-4",
                        children: [
                          r.jsxs("div", {
                            className: "text-center mb-4",
                            children: [
                              r.jsxs("span", {
                                className:
                                  "font-extrabold text-2xl tracking-tight text-white",
                                children: [
                                  "Sumit Kumar",
                                  r.jsx("span", {
                                    className: "text-red-600",
                                    children: "  ",
                                  }),
                                ],
                              }),
                              r.jsx("div", {
                                className:
                                  "text-[10px] text-gray-500 font-semibold uppercase tracking-wider mt-1",
                                children: "Admin Portal",
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className:
                              "flex items-center gap-2.5 rounded-[25px] p-3 text-white bg-black/40 border border-white/5 focus-within:border-red-500/40 focus-within:ring-1 focus-within:ring-red-500/20 transition-all",
                            children: [
                              r.jsx(Wd, {
                                className:
                                  "w-5 h-5 text-gray-400 ml-1.5 flex-shrink-0",
                              }),
                              r.jsx("input", {
                                type: "email",
                                name: "email",
                                autoComplete: "email",
                                placeholder: "Admin Email",
                                value: l,
                                onChange: (S) => o(S.target.value),
                                required: !0,
                                className:
                                  "bg-transparent border-none outline-none w-full text-[#d3d3d3] text-sm placeholder:text-gray-600",
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className:
                              "flex items-center gap-2.5 rounded-[25px] p-3 text-white bg-black/40 border border-white/5 focus-within:border-red-500/40 focus-within:ring-1 focus-within:ring-red-500/20 transition-all relative",
                            children: [
                              r.jsx(c3, {
                                className:
                                  "w-5 h-5 text-gray-400 ml-1.5 flex-shrink-0",
                              }),
                              r.jsx("input", {
                                type: f ? "text" : "password",
                                name: "password",
                                autoComplete: "current-password",
                                placeholder: "Password",
                                value: d,
                                onChange: (S) => h(S.target.value),
                                required: !0,
                                className:
                                  "bg-transparent border-none outline-none w-full text-[#d3d3d3] text-sm placeholder:text-gray-600 pr-10",
                              }),
                              r.jsx("button", {
                                type: "button",
                                onClick: () => x(!f),
                                className:
                                  "absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors",
                                children: f
                                  ? r.jsx(z4, { className: "w-4 h-4" })
                                  : r.jsx(Jd, { className: "w-4 h-4" }),
                              }),
                            ],
                          }),
                          p &&
                            r.jsxs("div", {
                              className:
                                "text-red-500 text-xs text-center font-medium bg-red-500/10 border border-red-500/20 py-2.5 rounded-xl mt-2 animate-pulse",
                              children: ["⚠️ ", p],
                            }),
                          r.jsxs("div", {
                            className: "flex justify-center gap-3 mt-6",
                            children: [
                              r.jsx("button", {
                                type: "submit",
                                disabled: y,
                                className:
                                  "w-1/2 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-lg shadow-red-600/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",
                                children: y
                                  ? r.jsxs("div", {
                                      className:
                                        "flex items-center justify-center gap-1.5",
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin",
                                        }),
                                        r.jsx("span", {
                                          children: "Signing In...",
                                        }),
                                      ],
                                    })
                                  : "Sign In",
                              }),
                              r.jsx("a", {
                                href: "/",
                                className:
                                  "w-1/2 py-3 rounded-xl font-bold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 text-center hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer block",
                                children: "Back to Website",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  },
                  "login",
                ),
          }),
        }),
        r.jsx(Hn, {
          children:
            Ft &&
            r.jsxs(le.div, {
              initial: { opacity: 0, y: 50, x: "-50%" },
              animate: { opacity: 1, y: 0, x: "-50%" },
              exit: { opacity: 0, y: 50, x: "-50%" },
              className: `fixed bottom-6 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-2.5 px-5 py-3 rounded-xl border shadow-xl bg-neutral-900/90 backdrop-blur-md ${Ft.type === "success" ? "border-green-500/30 text-green-400" : "border-red-500/30 text-red-400"}`,
              children: [
                Ft.type === "success"
                  ? r.jsx(Tl, { className: "w-4 h-4 text-green-500" })
                  : r.jsx(bo, { className: "w-4 h-4 text-red-500" }),
                r.jsx("span", {
                  className: "text-sm font-medium",
                  children: Ft.message,
                }),
              ],
            }),
        }),
        r.jsx(Hn, {
          children:
            ve &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsx(le.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: () => {
                    ln || (De(null), wa(null));
                  },
                  className:
                    "fixed inset-0 bg-black/80 backdrop-blur-sm z-[150]",
                }),
                r.jsx("div", {
                  className:
                    "fixed inset-0 z-[150] flex items-center justify-center p-4",
                  children: r.jsxs(le.div, {
                    initial: { opacity: 0, scale: 0.95, y: 20 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.95, y: 20 },
                    className:
                      "w-full max-w-md bg-neutral-950 border border-white/10 rounded-2xl p-6 shadow-2xl",
                    children: [
                      r.jsxs("h3", {
                        className:
                          "text-lg font-bold text-white mb-2 flex items-center gap-2",
                        children: [
                          r.jsx(wo, { className: "w-5 h-5 text-red-500" }),
                          "Delete ",
                          at === "booking" ? "Booking" : "Message",
                          "?",
                        ],
                      }),
                      r.jsxs("p", {
                        className: "text-gray-400 text-sm mb-6 leading-relaxed",
                        children: [
                          "Are you sure you want to permanently delete this ",
                          at === "booking" ? "booking" : "message",
                          "? This action will remove it from your database and cannot be undone.",
                        ],
                      }),
                      sn &&
                        r.jsxs("div", {
                          className:
                            "text-red-500 text-xs text-center font-medium bg-red-500/10 border border-red-500/20 py-2.5 mb-4 rounded-xl",
                          children: ["⚠️ ", sn],
                        }),
                      r.jsxs("div", {
                        className: "flex gap-3 justify-end",
                        children: [
                          r.jsx("button", {
                            disabled: ln,
                            onClick: () => {
                              (De(null), wa(null));
                            },
                            className:
                              "px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 text-sm font-semibold transition-colors disabled:opacity-40 cursor-pointer",
                            children: "Cancel",
                          }),
                          r.jsx("button", {
                            disabled: ln,
                            onClick: () => mn(ve),
                            className:
                              "flex items-center gap-1.5 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 cursor-pointer shadow-lg shadow-red-600/20",
                            children: ln
                              ? r.jsxs(r.Fragment, {
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin",
                                    }),
                                    "Deleting...",
                                  ],
                                })
                              : "Delete",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
        }),
        r.jsx(Hn, {
          children:
            Zl &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsx(le.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: () => {
                    Ti || (Ni(!1), Ht(null));
                  },
                  className:
                    "fixed inset-0 bg-black/80 backdrop-blur-sm z-[150]",
                }),
                r.jsx("div", {
                  className:
                    "fixed inset-0 z-[150] flex items-center justify-center p-4",
                  children: r.jsxs(le.div, {
                    initial: { opacity: 0, scale: 0.95, y: 20 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.95, y: 20 },
                    className: `w-full max-w-lg border rounded-2xl p-6 shadow-2xl ${J === "dark" ? "bg-neutral-950 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                    children: [
                      r.jsx("div", {
                        className: "flex justify-between items-center mb-4",
                        children: r.jsxs("h3", {
                          className:
                            "text-lg font-bold flex items-center gap-2",
                          children: [
                            r.jsx(D4, { className: "w-5 h-5 text-primary" }),
                            "Manage Mentorship Pricing",
                          ],
                        }),
                      }),
                      Mt &&
                        r.jsxs("div", {
                          className:
                            "text-red-500 text-xs text-center font-medium bg-red-500/10 border border-red-500/20 py-2.5 mb-4 rounded-xl",
                          children: ["⚠️ ", Mt],
                        }),
                      r.jsxs("form", {
                        onSubmit: rt,
                        className: "space-y-4",
                        children: [
                          da.map((S, k) =>
                            r.jsxs(
                              "div",
                              {
                                className: `p-4 rounded-xl border ${J === "dark" ? "bg-white/5 border-white/5" : "bg-slate-50 border-slate-100"}`,
                                children: [
                                  r.jsx("h4", {
                                    className:
                                      "font-bold text-sm text-primary mb-3",
                                    children: S.name,
                                  }),
                                  r.jsxs("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                      r.jsxs("div", {
                                        children: [
                                          r.jsx("label", {
                                            className:
                                              "block text-xs font-semibold text-gray-500 mb-1",
                                            children: "Price (₹)",
                                          }),
                                          r.jsx("input", {
                                            type: "number",
                                            required: !0,
                                            min: "0",
                                            value: S.amount,
                                            onChange: (F) => {
                                              const te = [...da];
                                              ((te[k].amount = Number(
                                                F.target.value,
                                              )),
                                                Pn(te));
                                            },
                                            className: `w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50 ${J === "dark" ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                                          }),
                                        ],
                                      }),
                                      r.jsxs("div", {
                                        children: [
                                          r.jsx("label", {
                                            className:
                                              "block text-xs font-semibold text-gray-500 mb-1",
                                            children: "Duration",
                                          }),
                                          r.jsx("input", {
                                            type: "text",
                                            required: !0,
                                            value: S.duration,
                                            onChange: (F) => {
                                              const te = [...da];
                                              ((te[k].duration =
                                                F.target.value),
                                                Pn(te));
                                            },
                                            className: `w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50 ${J === "dark" ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  r.jsxs("div", {
                                    className: "mt-3",
                                    children: [
                                      r.jsx("label", {
                                        className:
                                          "block text-xs font-semibold text-gray-500 mb-1",
                                        children: "Description",
                                      }),
                                      r.jsx("textarea", {
                                        required: !0,
                                        rows: 2,
                                        value: S.description,
                                        onChange: (F) => {
                                          const te = [...da];
                                          ((te[k].description = F.target.value),
                                            Pn(te));
                                        },
                                        className: `w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50 resize-none ${J === "dark" ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              S.planId,
                            ),
                          ),
                          r.jsxs("div", {
                            className: "flex gap-3 justify-end pt-2",
                            children: [
                              r.jsx("button", {
                                type: "button",
                                disabled: Ti,
                                onClick: () => {
                                  (Ni(!1), Ht(null), Di());
                                },
                                className: `px-4 py-2.5 rounded-xl border text-sm font-semibold transition-colors disabled:opacity-40 cursor-pointer ${J === "dark" ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"}`,
                                children: "Cancel",
                              }),
                              r.jsx("button", {
                                type: "submit",
                                disabled: Ti,
                                className:
                                  "flex items-center gap-1.5 bg-gradient-to-r from-primary to-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 cursor-pointer shadow-lg shadow-primary/20",
                                children: Ti
                                  ? r.jsxs(r.Fragment, {
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin",
                                        }),
                                        "Saving...",
                                      ],
                                    })
                                  : "Save Changes",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
        }),
        r.jsx(Hn, {
          children:
            ka &&
            r.jsxs(r.Fragment, {
              children: [
                r.jsx(le.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  onClick: () => {
                    Si || (wi(null), Kn(null));
                  },
                  className:
                    "fixed inset-0 bg-black/80 backdrop-blur-sm z-[150]",
                }),
                r.jsx("div", {
                  className:
                    "fixed inset-0 z-[150] flex items-center justify-center p-4",
                  children: r.jsxs(le.div, {
                    initial: { opacity: 0, scale: 0.95, y: 20 },
                    animate: { opacity: 1, scale: 1, y: 0 },
                    exit: { opacity: 0, scale: 0.95, y: 20 },
                    className: `w-full max-w-lg border rounded-2xl p-6 shadow-2xl ${J === "dark" ? "bg-neutral-950 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                    children: [
                      r.jsx("div", {
                        className: "flex justify-between items-center mb-4",
                        children: r.jsxs("h3", {
                          className:
                            "text-lg font-bold flex items-center gap-2",
                          children: [
                            r.jsx(vo, { className: "w-5 h-5 text-primary" }),
                            "Reply via Email",
                          ],
                        }),
                      }),
                      At &&
                        r.jsxs("div", {
                          className:
                            "text-red-500 text-xs text-center font-medium bg-red-500/10 border border-red-500/20 py-2.5 mb-4 rounded-xl",
                          children: ["⚠️ ", At],
                        }),
                      r.jsxs("form", {
                        onSubmit: fn,
                        className: "space-y-4",
                        children: [
                          r.jsxs("div", {
                            children: [
                              r.jsx("label", {
                                className:
                                  "block text-xs font-semibold text-gray-500 mb-1",
                                children: "To:",
                              }),
                              r.jsx("input", {
                                type: "email",
                                disabled: !0,
                                value: Z.find((S) => S._id === ka)?.email || "",
                                className: `w-full border rounded-lg px-3 py-2 text-sm focus:outline-none opacity-60 ${J === "dark" ? "bg-black/50 border-white/10 text-white" : "bg-slate-100 border-slate-200 text-slate-800"}`,
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            children: [
                              r.jsx("label", {
                                className:
                                  "block text-xs font-semibold text-gray-500 mb-1",
                                children: "Subject",
                              }),
                              r.jsx("input", {
                                type: "text",
                                required: !0,
                                value: As,
                                onChange: (S) => Yn(S.target.value),
                                className: `w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50 ${J === "dark" ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            children: [
                              r.jsx("label", {
                                className:
                                  "block text-xs font-semibold text-gray-500 mb-1",
                                children: "Email Body",
                              }),
                              r.jsx("textarea", {
                                required: !0,
                                rows: 8,
                                value: ji,
                                onChange: (S) => Xn(S.target.value),
                                className: `w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary/50 ${J === "dark" ? "bg-black/50 border-white/10 text-white" : "bg-white border-slate-200 text-slate-800"}`,
                              }),
                            ],
                          }),
                          r.jsxs("div", {
                            className: "flex gap-3 justify-end pt-2",
                            children: [
                              r.jsx("button", {
                                type: "button",
                                disabled: Si,
                                onClick: () => {
                                  (wi(null), Kn(null));
                                },
                                className: `px-4 py-2.5 rounded-xl border text-sm font-semibold transition-colors disabled:opacity-40 cursor-pointer ${J === "dark" ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10" : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"}`,
                                children: "Cancel",
                              }),
                              r.jsx("button", {
                                type: "submit",
                                disabled: Si,
                                className:
                                  "flex items-center gap-1.5 bg-gradient-to-r from-primary to-red-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all disabled:opacity-40 cursor-pointer shadow-lg shadow-primary/20",
                                children: Si
                                  ? r.jsxs(r.Fragment, {
                                      children: [
                                        r.jsx("div", {
                                          className:
                                            "w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin",
                                        }),
                                        "Sending...",
                                      ],
                                    })
                                  : r.jsxs(r.Fragment, {
                                      children: [
                                        r.jsx(fx, { className: "w-3.5 h-3.5" }),
                                        "Send Reply",
                                      ],
                                    }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
        }),
      ],
    });
  },
  MT = () => {
    const [n, i] = j.useState([]),
      [l, o] = j.useState(!0),
      [d, h] = j.useState(""),
      [f, x] = j.useState(null);
    j.useEffect(() => {
      document.title =
        "Blog | Sumit Kumar    - Web Development, Tech & AI Articles";
      const C = document.querySelector('meta[name="description"]');
      (C &&
        C.setAttribute(
          "content",
          "Read articles on web development, React.js, freelancing, AI tools, and tech career tips by Sumit Kumar    from Bihar, India.",
        ),
        window.scrollTo(0, 0),
        p());
    }, []);
    const p = async () => {
        try {
          const C = await fetch("/api/blogs");
          if (C.ok) {
            const D = await C.json();
            i(D);
          }
        } catch (C) {
          console.error("Failed to fetch blogs:", C);
        } finally {
          o(!1);
        }
      },
      g = [...new Set(n.flatMap((C) => C.tags))],
      y = n.filter((C) => {
        const D =
            C.title.toLowerCase().includes(d.toLowerCase()) ||
            C.excerpt.toLowerCase().includes(d.toLowerCase()),
          _ = !f || C.tags.includes(f);
        return D && _;
      }),
      b = (C) =>
        new Date(C).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
      w = (C) =>
        C
          ? Math.max(1, Math.ceil(C.split(/\s+/).length / 200)).toString()
          : "3",
      T = y[0],
      R = y.slice(1);
    return r.jsxs(r.Fragment, {
      children: [
        r.jsx(Rl, {}),
        r.jsxs("main", {
          className: "min-h-screen bg-black text-white overflow-x-hidden",
          children: [
            r.jsxs("section", {
              className: "relative pt-32 pb-20 px-6",
              children: [
                r.jsxs("div", {
                  className:
                    "absolute inset-0 overflow-hidden pointer-events-none",
                  children: [
                    r.jsx("div", {
                      className:
                        "absolute top-20 left-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl",
                    }),
                    r.jsx("div", {
                      className:
                        "absolute top-40 right-1/4 w-80 h-80 bg-red-900/10 rounded-full blur-3xl",
                    }),
                  ],
                }),
                r.jsxs("div", {
                  className: "container mx-auto max-w-6xl relative z-10",
                  children: [
                    r.jsxs(le.div, {
                      initial: { opacity: 0, y: 30 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.7 },
                      className: "text-center max-w-4xl mx-auto",
                      children: [
                        r.jsxs(le.div, {
                          initial: { opacity: 0, scale: 0.9 },
                          animate: { opacity: 1, scale: 1 },
                          transition: { duration: 0.5, delay: 0.1 },
                          className:
                            "inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/25 text-sm font-semibold text-primary mb-8 backdrop-blur-sm",
                          children: [
                            r.jsx(q3, { size: 14, className: "animate-pulse" }),
                            "Knowledge Hub",
                          ],
                        }),
                        r.jsxs("h1", {
                          className:
                            "text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight",
                          children: [
                            "Insights &",
                            " ",
                            r.jsxs("span", {
                              className: "relative",
                              children: [
                                r.jsx("span", {
                                  className:
                                    "bg-gradient-to-r from-primary via-red-400 to-orange-500 bg-clip-text text-transparent",
                                  children: "Articles",
                                }),
                                r.jsx(le.span, {
                                  className:
                                    "absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-orange-500 rounded-full",
                                  initial: { scaleX: 0 },
                                  animate: { scaleX: 1 },
                                  transition: { duration: 0.8, delay: 0.6 },
                                }),
                              ],
                            }),
                          ],
                        }),
                        r.jsx("p", {
                          className:
                            "text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10",
                          children:
                            "Web development, React.js, freelancing guides, AI tools, and tech career advice — written for developers in India.",
                        }),
                        r.jsxs("div", {
                          className:
                            "flex items-center justify-center gap-8 text-sm text-gray-500 mb-12",
                          children: [
                            r.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                r.jsx(ps, {
                                  size: 15,
                                  className: "text-primary",
                                }),
                                r.jsxs("span", {
                                  children: [
                                    r.jsx("strong", {
                                      className: "text-white",
                                      children: n.length,
                                    }),
                                    " Articles",
                                  ],
                                }),
                              ],
                            }),
                            r.jsx("div", {
                              className: "w-px h-4 bg-neutral-800",
                            }),
                            r.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                r.jsx(Sb, {
                                  size: 15,
                                  className: "text-primary",
                                }),
                                r.jsxs("span", {
                                  children: [
                                    r.jsx("strong", {
                                      className: "text-white",
                                      children: g.length,
                                    }),
                                    " Topics",
                                  ],
                                }),
                              ],
                            }),
                            r.jsx("div", {
                              className: "w-px h-4 bg-neutral-800",
                            }),
                            r.jsxs("div", {
                              className: "flex items-center gap-2",
                              children: [
                                r.jsx(tf, {
                                  size: 15,
                                  className: "text-primary",
                                }),
                                r.jsx("span", { children: "Weekly updates" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    r.jsxs(le.div, {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.5, delay: 0.3 },
                      className: "max-w-2xl mx-auto space-y-4",
                      children: [
                        r.jsxs("div", {
                          className: "relative group",
                          children: [
                            r.jsx("div", {
                              className:
                                "absolute inset-0 bg-gradient-to-r from-primary/20 to-red-600/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300",
                            }),
                            r.jsxs("div", {
                              className:
                                "relative flex items-center bg-neutral-900/80 border border-neutral-800 rounded-2xl overflow-hidden backdrop-blur-sm focus-within:border-primary/50 transition-colors",
                              children: [
                                r.jsx(Yf, {
                                  className: "ml-5 text-gray-500 shrink-0",
                                  size: 18,
                                }),
                                r.jsx("input", {
                                  type: "text",
                                  placeholder: "Search articles...",
                                  value: d,
                                  onChange: (C) => h(C.target.value),
                                  className:
                                    "w-full bg-transparent py-4 px-4 text-white placeholder-gray-500 focus:outline-none text-sm",
                                }),
                                d &&
                                  r.jsx("button", {
                                    onClick: () => h(""),
                                    className:
                                      "mr-4 text-gray-500 hover:text-white transition-colors text-xs font-medium cursor-pointer",
                                    children: "Clear",
                                  }),
                              ],
                            }),
                          ],
                        }),
                        g.length > 0 &&
                          r.jsxs("div", {
                            className: "flex flex-wrap gap-2 justify-center",
                            children: [
                              r.jsx("button", {
                                onClick: () => x(null),
                                className: `px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${f ? "bg-neutral-900 border border-neutral-800 text-gray-400 hover:border-primary/40 hover:text-white" : "bg-primary text-white shadow-lg shadow-primary/30 scale-105"}`,
                                children: "All Posts",
                              }),
                              g.map((C) =>
                                r.jsxs(
                                  "button",
                                  {
                                    onClick: () => x(C === f ? null : C),
                                    className: `px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${f === C ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105" : "bg-neutral-900 border border-neutral-800 text-gray-400 hover:border-primary/40 hover:text-white"}`,
                                    children: ["#", C],
                                  },
                                  C,
                                ),
                              ),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            r.jsx("section", {
              className: "container mx-auto max-w-6xl px-6 pb-24",
              children: l
                ? r.jsxs("div", {
                    className:
                      "flex flex-col items-center justify-center py-32 gap-4",
                    children: [
                      r.jsxs("div", {
                        className: "relative w-12 h-12",
                        children: [
                          r.jsx("div", {
                            className:
                              "w-12 h-12 rounded-full border-2 border-neutral-800",
                          }),
                          r.jsx("div", {
                            className:
                              "absolute inset-0 w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin",
                          }),
                        ],
                      }),
                      r.jsx("p", {
                        className: "text-gray-500 text-sm animate-pulse",
                        children: "Loading articles...",
                      }),
                    ],
                  })
                : y.length === 0
                  ? r.jsxs(le.div, {
                      initial: { opacity: 0, scale: 0.95 },
                      animate: { opacity: 1, scale: 1 },
                      className:
                        "flex flex-col items-center justify-center py-32 text-center",
                      children: [
                        r.jsx("div", {
                          className:
                            "w-20 h-20 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6",
                          children: r.jsx(ps, {
                            size: 32,
                            className: "text-neutral-700",
                          }),
                        }),
                        r.jsx("h3", {
                          className: "text-xl font-bold text-white mb-2",
                          children:
                            d || f ? "No articles found" : "No articles yet",
                        }),
                        r.jsx("p", {
                          className: "text-gray-500 max-w-sm",
                          children:
                            d || f
                              ? "Try searching with different keywords or clear the filters."
                              : "First article coming soon. Check back shortly!",
                        }),
                        (d || f) &&
                          r.jsx("button", {
                            onClick: () => {
                              (h(""), x(null));
                            },
                            className:
                              "mt-6 px-5 py-2.5 rounded-xl bg-primary/10 border border-primary/25 text-primary text-sm font-medium hover:bg-primary/20 transition-colors cursor-pointer",
                            children: "Clear Filters",
                          }),
                      ],
                    })
                  : r.jsxs(r.Fragment, {
                      children: [
                        T &&
                          !d &&
                          !f &&
                          r.jsxs(le.div, {
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.6 },
                            className: "mb-12",
                            children: [
                              r.jsxs("div", {
                                className: "flex items-center gap-2 mb-6",
                                children: [
                                  r.jsx("div", {
                                    className:
                                      "w-1 h-5 bg-gradient-to-b from-primary to-red-600 rounded-full",
                                  }),
                                  r.jsx("span", {
                                    className:
                                      "text-xs font-bold uppercase tracking-widest text-primary",
                                    children: "Featured",
                                  }),
                                ],
                              }),
                              r.jsx(mt, {
                                to: `/blog/${T.slug}`,
                                className: "group block",
                                children: r.jsx("article", {
                                  className:
                                    "relative rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900/50 hover:border-primary/30 transition-all duration-500 hover:shadow-[0_0_60px_rgba(220,38,38,0.08)] backdrop-blur-sm",
                                  children: r.jsxs("div", {
                                    className: "grid md:grid-cols-2 gap-0",
                                    children: [
                                      r.jsx("div", {
                                        className:
                                          "relative overflow-hidden h-64 md:h-auto min-h-[280px]",
                                        children: T.coverImage
                                          ? r.jsxs(r.Fragment, {
                                              children: [
                                                r.jsx("img", {
                                                  src: T.coverImage,
                                                  alt: T.title,
                                                  className:
                                                    "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                                                  loading: "lazy",
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "absolute inset-0 bg-gradient-to-r from-transparent to-neutral-900/60 md:block hidden",
                                                }),
                                                r.jsx("div", {
                                                  className:
                                                    "absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent md:hidden",
                                                }),
                                              ],
                                            })
                                          : r.jsx("div", {
                                              className:
                                                "w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center",
                                              children: r.jsx(ps, {
                                                size: 48,
                                                className: "text-neutral-700",
                                              }),
                                            }),
                                      }),
                                      r.jsxs("div", {
                                        className:
                                          "p-8 md:p-10 flex flex-col justify-center",
                                        children: [
                                          T.tags.length > 0 &&
                                            r.jsx("div", {
                                              className:
                                                "flex flex-wrap gap-2 mb-4",
                                              children: T.tags
                                                .slice(0, 3)
                                                .map((C) =>
                                                  r.jsxs(
                                                    "span",
                                                    {
                                                      className:
                                                        "px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold",
                                                      children: ["#", C],
                                                    },
                                                    C,
                                                  ),
                                                ),
                                            }),
                                          r.jsx("h2", {
                                            className:
                                              "text-2xl md:text-3xl font-bold text-white mb-4 leading-snug group-hover:text-primary transition-colors duration-300 line-clamp-3",
                                            children: T.title,
                                          }),
                                          r.jsx("p", {
                                            className:
                                              "text-gray-400 leading-relaxed mb-6 line-clamp-3",
                                            children: T.excerpt,
                                          }),
                                          r.jsxs("div", {
                                            className:
                                              "flex items-center justify-between",
                                            children: [
                                              r.jsxs("div", {
                                                className:
                                                  "flex items-center gap-4 text-xs text-gray-500",
                                                children: [
                                                  r.jsxs("span", {
                                                    className:
                                                      "flex items-center gap-1.5",
                                                    children: [
                                                      r.jsx(qn, { size: 12 }),
                                                      b(T.createdAt),
                                                    ],
                                                  }),
                                                  r.jsxs("span", {
                                                    className:
                                                      "flex items-center gap-1.5",
                                                    children: [
                                                      r.jsx(Vl, { size: 12 }),
                                                      w(T.content),
                                                      " min read",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              r.jsxs("span", {
                                                className:
                                                  "flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300",
                                                children: [
                                                  "Read Article ",
                                                  r.jsx(bi, { size: 14 }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        (d || f ? y : R).length > 0 &&
                          r.jsxs(r.Fragment, {
                            children: [
                              !d &&
                                !f &&
                                R.length > 0 &&
                                r.jsxs("div", {
                                  className: "flex items-center gap-2 mb-8",
                                  children: [
                                    r.jsx("div", {
                                      className:
                                        "w-1 h-5 bg-gradient-to-b from-neutral-600 to-neutral-800 rounded-full",
                                    }),
                                    r.jsx("span", {
                                      className:
                                        "text-xs font-bold uppercase tracking-widest text-gray-500",
                                      children: "All Articles",
                                    }),
                                  ],
                                }),
                              r.jsx("div", {
                                className:
                                  "grid sm:grid-cols-2 lg:grid-cols-3 gap-6",
                                children: (d || f ? y : R).map((C, D) =>
                                  r.jsx(
                                    le.div,
                                    {
                                      initial: { opacity: 0, y: 24 },
                                      animate: { opacity: 1, y: 0 },
                                      transition: {
                                        duration: 0.5,
                                        delay: D * 0.08,
                                      },
                                      children: r.jsx(mt, {
                                        to: `/blog/${C.slug}`,
                                        className: "group block h-full",
                                        children: r.jsxs("article", {
                                          className:
                                            "h-full rounded-2xl bg-neutral-900/60 border border-neutral-800/80 overflow-hidden hover:border-primary/30 hover:shadow-[0_8px_40px_rgba(220,38,38,0.1)] transition-all duration-400 hover:-translate-y-1.5 flex flex-col backdrop-blur-sm",
                                          children: [
                                            r.jsxs("div", {
                                              className:
                                                "relative overflow-hidden h-44 shrink-0",
                                              children: [
                                                C.coverImage
                                                  ? r.jsxs(r.Fragment, {
                                                      children: [
                                                        r.jsx("img", {
                                                          src: C.coverImage,
                                                          alt: C.title,
                                                          className:
                                                            "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
                                                          loading: "lazy",
                                                        }),
                                                        r.jsx("div", {
                                                          className:
                                                            "absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent",
                                                        }),
                                                      ],
                                                    })
                                                  : r.jsx("div", {
                                                      className:
                                                        "w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center",
                                                      children: r.jsx("div", {
                                                        className:
                                                          "w-12 h-12 rounded-2xl bg-neutral-700/50 flex items-center justify-center",
                                                        children: r.jsx(ps, {
                                                          size: 20,
                                                          className:
                                                            "text-neutral-500",
                                                        }),
                                                      }),
                                                    }),
                                                r.jsxs("div", {
                                                  className:
                                                    "absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-xs text-gray-300 font-medium flex items-center gap-1.5",
                                                  children: [
                                                    r.jsx(Vl, { size: 10 }),
                                                    w(C.content),
                                                    " min",
                                                  ],
                                                }),
                                              ],
                                            }),
                                            r.jsxs("div", {
                                              className:
                                                "p-5 flex flex-col flex-1",
                                              children: [
                                                C.tags.length > 0 &&
                                                  r.jsx("div", {
                                                    className:
                                                      "flex flex-wrap gap-1.5 mb-3",
                                                    children: C.tags
                                                      .slice(0, 2)
                                                      .map((_) =>
                                                        r.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "px-2.5 py-0.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-[10px] font-bold uppercase tracking-wider",
                                                            children: _,
                                                          },
                                                          _,
                                                        ),
                                                      ),
                                                  }),
                                                r.jsx("h2", {
                                                  className:
                                                    "text-base font-bold text-white mb-2.5 group-hover:text-primary transition-colors duration-300 line-clamp-2 leading-snug",
                                                  children: C.title,
                                                }),
                                                r.jsx("p", {
                                                  className:
                                                    "text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-4",
                                                  children: C.excerpt,
                                                }),
                                                r.jsxs("div", {
                                                  className:
                                                    "flex items-center justify-between pt-4 border-t border-neutral-800/60",
                                                  children: [
                                                    r.jsxs("span", {
                                                      className:
                                                        "flex items-center gap-1.5 text-gray-600 text-xs",
                                                      children: [
                                                        r.jsx(qn, { size: 11 }),
                                                        b(C.createdAt),
                                                      ],
                                                    }),
                                                    r.jsxs("span", {
                                                      className:
                                                        "flex items-center gap-1 text-primary text-xs font-bold group-hover:gap-2 transition-all duration-300",
                                                      children: [
                                                        "Read more ",
                                                        r.jsx(bi, { size: 11 }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                    },
                                    C._id,
                                  ),
                                ),
                              }),
                            ],
                          }),
                      ],
                    }),
            }),
          ],
        }),
        r.jsx(Lo, {}),
      ],
    });
  },
  CT = () => {
    const { slug: n } = _x(),
      [i, l] = j.useState(null),
      [o, d] = j.useState(!0),
      [h, f] = j.useState(!1),
      [x, p] = j.useState(!1),
      [g, y] = j.useState(0);
    (j.useEffect(() => {
      const _ = () => {
        const V = document.documentElement,
          E = V.scrollTop || document.body.scrollTop,
          Q = V.scrollHeight - V.clientHeight,
          X = Q > 0 ? (E / Q) * 100 : 0;
        y(Math.min(100, X));
      };
      return (
        window.addEventListener("scroll", _, { passive: !0 }),
        () => window.removeEventListener("scroll", _)
      );
    }, []),
      j.useEffect(() => {
        (window.scrollTo(0, 0), b());
      }, [n]));
    const b = async () => {
      (d(!0), f(!1));
      try {
        const _ = await fetch(`/api/blogs/${n}`);
        if (_.ok) {
          const V = await _.json();
          (l(V), (document.title = `${V.metaTitle || V.title} | Sumit Kumar   `));
          const E = document.querySelector('meta[name="description"]');
          E && E.setAttribute("content", V.metaDescription || V.excerpt);
          const Q = document.getElementById("blog-schema");
          Q && Q.remove();
          const X = document.createElement("script");
          ((X.id = "blog-schema"),
            (X.type = "application/ld+json"),
            (X.textContent = JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: V.title,
              description: V.metaDescription || V.excerpt,
              image:
                V.coverImage || "https://Sumit Kumar  .vercel.app/og-image.png",
              author: { "@type": "Person", name: V.author || "Sumit Kumar   " },
              publisher: { "@type": "Person", name: "Sumit Kumar   " },
              datePublished: V.createdAt,
              dateModified: V.updatedAt,
              url: `https://Sumit Kumar  .vercel.app/blog/${V.slug}`,
              keywords: V.tags.join(", "),
            })),
            document.head.appendChild(X));
        } else f(!0);
      } catch {
        f(!0);
      } finally {
        d(!1);
      }
    };
    j.useEffect(
      () => () => {
        const _ = document.getElementById("blog-schema");
        _ && _.remove();
      },
      [],
    );
    const w = (_) =>
        new Date(_).toLocaleDateString("en-IN", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      T = (_) => Math.max(1, Math.ceil(_.split(/\s+/).length / 200)),
      R = () => {
        (navigator.clipboard.writeText(window.location.href),
          p(!0),
          setTimeout(() => p(!1), 2500));
      },
      C = (_) =>
        _.replace(
          /\*\*(.*?)\*\*/g,
          '<strong class="text-white font-bold">$1</strong>',
        )
          .replace(/\*(.*?)\*/g, '<em class="text-gray-200 italic">$1</em>')
          .replace(
            /`(.*?)`/g,
            '<code class="bg-neutral-800/80 border border-neutral-700 px-2 py-0.5 rounded-md text-primary text-sm font-mono">$1</code>',
          )
          .replace(
            /\[(.*?)\]\((.*?)\)/g,
            '<a href="$2" class="text-primary underline underline-offset-2 hover:text-red-400 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>',
          ),
      D = (_) => {
        const V = _.split(`
`),
          E = [];
        let Q = [],
          X = null;
        const W = () => {
          if (Q.length > 0 && X) {
            const P = X === "ol" ? "ol" : "ul";
            (E.push(
              r.jsx(
                P,
                {
                  className: `${X === "ol" ? "list-decimal" : "list-disc"} pl-7 mb-7 space-y-2.5 text-gray-300`,
                  children: Q.map((Z, ie) =>
                    r.jsx(
                      "li",
                      {
                        className: "leading-relaxed",
                        dangerouslySetInnerHTML: { __html: C(Z) },
                      },
                      ie,
                    ),
                  ),
                },
                `list-${E.length}`,
              ),
            ),
              (Q = []),
              (X = null));
          }
        };
        return (
          V.forEach((P, Z) => {
            const ie = P.trim();
            if (ie === "") {
              W();
              return;
            }
            if (ie.startsWith("# ")) {
              (W(),
                E.push(
                  r.jsx(
                    "h1",
                    {
                      className:
                        "text-4xl font-black text-white mt-12 mb-5 leading-tight",
                      dangerouslySetInnerHTML: { __html: C(ie.slice(2)) },
                    },
                    Z,
                  ),
                ));
              return;
            }
            if (ie.startsWith("## ")) {
              (W(),
                E.push(
                  r.jsx(
                    "h2",
                    {
                      className:
                        "text-2xl md:text-3xl font-bold text-white mt-12 mb-4 pb-3 border-b border-neutral-800/60 leading-snug",
                      dangerouslySetInnerHTML: { __html: C(ie.slice(3)) },
                    },
                    Z,
                  ),
                ));
              return;
            }
            if (ie.startsWith("### ")) {
              (W(),
                E.push(
                  r.jsxs(
                    "h3",
                    {
                      className:
                        "text-xl font-bold text-white mt-8 mb-3 flex items-center gap-2",
                      children: [
                        r.jsx("span", {
                          className:
                            "w-1 h-5 bg-gradient-to-b from-primary to-red-700 rounded-full shrink-0 inline-block",
                        }),
                        r.jsx("span", {
                          dangerouslySetInnerHTML: { __html: C(ie.slice(4)) },
                        }),
                      ],
                    },
                    Z,
                  ),
                ));
              return;
            }
            if (ie.startsWith("#### ")) {
              (W(),
                E.push(
                  r.jsx(
                    "h4",
                    {
                      className:
                        "text-lg font-semibold text-gray-100 mt-6 mb-2",
                      dangerouslySetInnerHTML: { __html: C(ie.slice(5)) },
                    },
                    Z,
                  ),
                ));
              return;
            }
            if (ie.startsWith("- ") || ie.startsWith("* ")) {
              (X !== "ul" && (W(), (X = "ul")), Q.push(ie.slice(2)));
              return;
            }
            if (/^\d+\.\s/.test(ie)) {
              (X !== "ol" && (W(), (X = "ol")),
                Q.push(ie.replace(/^\d+\.\s/, "")));
              return;
            }
            if (ie.startsWith("> ")) {
              (W(),
                E.push(
                  r.jsx(
                    "blockquote",
                    {
                      className:
                        "relative my-8 pl-6 py-4 pr-4 border-l-4 border-primary bg-gradient-to-r from-primary/5 to-transparent rounded-r-2xl",
                      children: r.jsx("p", {
                        className: "text-gray-300 italic leading-relaxed",
                        dangerouslySetInnerHTML: { __html: C(ie.slice(2)) },
                      }),
                    },
                    Z,
                  ),
                ));
              return;
            }
            if (ie === "---" || ie === "***") {
              (W(),
                E.push(
                  r.jsxs(
                    "div",
                    {
                      className: "flex items-center gap-4 my-10",
                      children: [
                        r.jsx("div", {
                          className:
                            "flex-1 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent",
                        }),
                        r.jsx("div", {
                          className: "w-2 h-2 rounded-full bg-primary/50",
                        }),
                        r.jsx("div", {
                          className:
                            "flex-1 h-px bg-gradient-to-r from-transparent via-neutral-800 to-transparent",
                        }),
                      ],
                    },
                    Z,
                  ),
                ));
              return;
            }
            if (ie.startsWith("```")) {
              W();
              return;
            }
            (W(),
              E.push(
                r.jsx(
                  "p",
                  {
                    className: "text-gray-300 leading-8 mb-5 text-[15px]",
                    dangerouslySetInnerHTML: { __html: C(ie) },
                  },
                  Z,
                ),
              ));
          }),
          W(),
          E
        );
      };
    return o
      ? r.jsxs(r.Fragment, {
          children: [
            r.jsx(Rl, {}),
            r.jsxs("main", {
              className:
                "min-h-screen bg-black text-white pt-28 flex flex-col items-center justify-center gap-4",
              children: [
                r.jsxs("div", {
                  className: "relative w-12 h-12",
                  children: [
                    r.jsx("div", {
                      className:
                        "w-12 h-12 rounded-full border-2 border-neutral-800",
                    }),
                    r.jsx("div", {
                      className:
                        "absolute inset-0 border-2 border-primary border-t-transparent rounded-full animate-spin",
                    }),
                  ],
                }),
                r.jsx("p", {
                  className: "text-gray-500 text-sm animate-pulse",
                  children: "Loading article...",
                }),
              ],
            }),
          ],
        })
      : h || !i
        ? r.jsxs(r.Fragment, {
            children: [
              r.jsx(Rl, {}),
              r.jsxs("main", {
                className:
                  "min-h-screen bg-black text-white pt-28 pb-20 flex flex-col items-center justify-center px-6 text-center",
                children: [
                  r.jsx("div", {
                    className:
                      "w-24 h-24 rounded-3xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-8",
                    children: r.jsx(ps, {
                      size: 36,
                      className: "text-neutral-600",
                    }),
                  }),
                  r.jsx("h1", {
                    className: "text-4xl font-black text-white mb-4",
                    children: "Article Not Found",
                  }),
                  r.jsx("p", {
                    className: "text-gray-500 max-w-sm mb-8",
                    children: "This article doesn't exist or has been removed.",
                  }),
                  r.jsxs(mt, {
                    to: "/blog",
                    className:
                      "inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/25 text-primary font-semibold hover:bg-primary/20 transition-colors",
                    children: [r.jsx(bs, { size: 16 }), " Back to Blog"],
                  }),
                ],
              }),
              r.jsx(Lo, {}),
            ],
          })
        : r.jsxs(r.Fragment, {
            children: [
              r.jsx("div", {
                className: "fixed top-0 left-0 right-0 z-[100] h-0.5",
                children: r.jsx(le.div, {
                  className:
                    "h-full bg-gradient-to-r from-primary via-red-400 to-orange-500",
                  style: { width: `${g}%` },
                  transition: { ease: "linear", duration: 0 },
                }),
              }),
              r.jsx(Rl, {}),
              r.jsxs("main", {
                className: "min-h-screen bg-black text-white",
                children: [
                  r.jsxs("section", {
                    className: "relative pt-28 pb-0 overflow-hidden",
                    children: [
                      r.jsx("div", {
                        className:
                          "absolute inset-0 overflow-hidden pointer-events-none",
                        children: r.jsx("div", {
                          className:
                            "absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-80 bg-primary/6 rounded-full blur-3xl",
                        }),
                      }),
                      r.jsxs("div", {
                        className:
                          "container mx-auto max-w-4xl px-6 relative z-10",
                        children: [
                          r.jsxs(le.nav, {
                            initial: { opacity: 0, x: -20 },
                            animate: { opacity: 1, x: 0 },
                            transition: { duration: 0.4 },
                            className:
                              "flex items-center gap-2 text-sm text-gray-500 mb-10",
                            children: [
                              r.jsx(mt, {
                                to: "/",
                                className: "hover:text-white transition-colors",
                                children: "Home",
                              }),
                              r.jsx(xs, {
                                size: 14,
                                className: "text-neutral-700",
                              }),
                              r.jsx(mt, {
                                to: "/blog",
                                className: "hover:text-white transition-colors",
                                children: "Blog",
                              }),
                              r.jsx(xs, {
                                size: 14,
                                className: "text-neutral-700",
                              }),
                              r.jsx("span", {
                                className:
                                  "text-gray-400 truncate max-w-[200px]",
                                children: i.title,
                              }),
                            ],
                          }),
                          r.jsxs(le.div, {
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.7 },
                            children: [
                              i.tags.length > 0 &&
                                r.jsx("div", {
                                  className: "flex flex-wrap gap-2 mb-6",
                                  children: i.tags.map((_) =>
                                    r.jsxs(
                                      "span",
                                      {
                                        className:
                                          "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-bold uppercase tracking-wider",
                                        children: [r.jsx(Sb, { size: 10 }), _],
                                      },
                                      _,
                                    ),
                                  ),
                                }),
                              r.jsx("h1", {
                                className:
                                  "text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1] tracking-tight",
                                children: i.title,
                              }),
                              r.jsx("p", {
                                className:
                                  "text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl",
                                children: i.excerpt,
                              }),
                              r.jsxs("div", {
                                className:
                                  "flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-500 pb-8 border-b border-neutral-800/60",
                                children: [
                                  r.jsxs("span", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      r.jsx("div", {
                                        className:
                                          "w-7 h-7 rounded-full bg-gradient-to-br from-primary to-red-700 flex items-center justify-center text-white text-xs font-bold",
                                        children: "F",
                                      }),
                                      r.jsx("span", {
                                        className: "text-gray-300 font-medium",
                                        children: i.author || "Sumit Kumar   ",
                                      }),
                                    ],
                                  }),
                                  r.jsxs("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                      r.jsx(qn, { size: 14 }),
                                      w(i.createdAt),
                                    ],
                                  }),
                                  r.jsxs("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                      r.jsx(Vl, { size: 14 }),
                                      T(i.content),
                                      " min read",
                                    ],
                                  }),
                                  r.jsx("button", {
                                    onClick: R,
                                    className: `ml-auto flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-300 cursor-pointer text-xs font-semibold ${x ? "bg-green-500/10 border-green-500/30 text-green-400" : "bg-neutral-900 border-neutral-800 text-gray-400 hover:border-primary/40 hover:text-primary"}`,
                                    children: x
                                      ? r.jsxs(r.Fragment, {
                                          children: [
                                            r.jsx(wb, { size: 13 }),
                                            " Copied!",
                                          ],
                                        })
                                      : r.jsxs(r.Fragment, {
                                          children: [
                                            r.jsx(O3, { size: 13 }),
                                            " Share",
                                          ],
                                        }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.coverImage &&
                    r.jsx(le.div, {
                      initial: { opacity: 0, y: 20 },
                      animate: { opacity: 1, y: 0 },
                      transition: { duration: 0.7, delay: 0.2 },
                      className: "container mx-auto max-w-4xl px-6 mt-10",
                      children: r.jsx("div", {
                        className:
                          "rounded-2xl overflow-hidden border border-neutral-800/50 shadow-[0_0_60px_rgba(0,0,0,0.5)]",
                        children: r.jsx("img", {
                          src: i.coverImage,
                          alt: i.title,
                          className: "w-full h-auto object-cover max-h-[500px]",
                        }),
                      }),
                    }),
                  r.jsxs(le.article, {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    transition: { duration: 0.6, delay: 0.35 },
                    className: "container mx-auto max-w-3xl px-6 pt-12 pb-16",
                    children: [
                      r.jsx("div", {
                        className: "prose-custom",
                        children: D(i.content),
                      }),
                      i.tags.length > 0 &&
                        r.jsxs("div", {
                          className:
                            "mt-12 pt-8 border-t border-neutral-800/50",
                          children: [
                            r.jsx("p", {
                              className:
                                "text-xs font-bold uppercase tracking-widest text-gray-600 mb-4",
                              children: "Tagged Under",
                            }),
                            r.jsx("div", {
                              className: "flex flex-wrap gap-2",
                              children: i.tags.map((_) =>
                                r.jsxs(
                                  mt,
                                  {
                                    to: "/blog",
                                    className:
                                      "px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-gray-400 text-sm font-medium hover:border-primary/40 hover:text-primary transition-all",
                                    children: ["#", _],
                                  },
                                  _,
                                ),
                              ),
                            }),
                          ],
                        }),
                    ],
                  }),
                  r.jsx(le.section, {
                    initial: { opacity: 0, y: 30 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: !0 },
                    transition: { duration: 0.6 },
                    className: "container mx-auto max-w-4xl px-6 pb-24",
                    children: r.jsxs("div", {
                      className: "relative rounded-3xl overflow-hidden",
                      children: [
                        r.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-black",
                        }),
                        r.jsx("div", {
                          className:
                            "absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-red-900/5",
                        }),
                        r.jsx("div", {
                          className:
                            "absolute top-0 right-0 w-64 h-64 bg-primary/8 rounded-full blur-3xl",
                        }),
                        r.jsx("div", {
                          className:
                            "absolute bottom-0 left-0 w-48 h-48 bg-red-900/10 rounded-full blur-3xl",
                        }),
                        r.jsx("div", {
                          className: "relative z-10 p-8 md:p-12",
                          children: r.jsxs("div", {
                            className:
                              "flex flex-col md:flex-row items-start md:items-center justify-between gap-8",
                            children: [
                              r.jsxs("div", {
                                className: "max-w-lg",
                                children: [
                                  r.jsx("div", {
                                    className:
                                      "inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4",
                                    children: "Let's Build Together",
                                  }),
                                  r.jsxs("h3", {
                                    className:
                                      "text-2xl md:text-3xl font-black text-white mb-3 leading-snug",
                                    children: [
                                      "Need a Website or",
                                      r.jsx("br", {}),
                                      "Tech Guidance?",
                                    ],
                                  }),
                                  r.jsx("p", {
                                    className: "text-gray-400 leading-relaxed",
                                    children:
                                      "I build premium, fast websites and offer 1-on-1 mentorship for developers. Let's discuss your project.",
                                  }),
                                ],
                              }),
                              r.jsxs("div", {
                                className:
                                  "flex flex-col sm:flex-row md:flex-col gap-3 shrink-0",
                                children: [
                                  r.jsx(mt, {
                                    to: "/#contact",
                                    className:
                                      "px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-red-600 text-white font-bold text-sm hover:shadow-lg hover:shadow-primary/30 hover:scale-105 transition-all duration-300 text-center",
                                    children: "Hire Me",
                                  }),
                                  r.jsx(mt, {
                                    to: "/#mentorship",
                                    className:
                                      "px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all text-center",
                                    children: "Book Mentorship",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  r.jsx("div", {
                    className: "container mx-auto max-w-4xl px-6 pb-12",
                    children: r.jsxs(mt, {
                      to: "/blog",
                      className:
                        "inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-medium group",
                      children: [
                        r.jsx(bs, {
                          size: 15,
                          className:
                            "group-hover:-translate-x-1 transition-transform",
                        }),
                        "Back to all articles",
                      ],
                    }),
                  }),
                ],
              }),
              r.jsx(Lo, {}),
            ],
          });
  },
  DT = () =>
    r.jsxs("div", {
      className:
        "min-h-screen bg-black flex items-center justify-center relative overflow-hidden px-6",
      children: [
        r.jsx("div", {
          className:
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none",
        }),
        r.jsxs("div", {
          className: "text-center relative z-10",
          children: [
            r.jsx(le.div, {
              initial: { opacity: 0, scale: 0.5 },
              animate: { opacity: 1, scale: 1 },
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
              children: r.jsx("h1", {
                className:
                  "text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-b from-red-500 via-red-600 to-red-900 bg-clip-text text-transparent select-none",
                style: {
                  textShadow: "0 0 80px rgba(220, 38, 38, 0.3)",
                  filter: "drop-shadow(0 0 40px rgba(220, 38, 38, 0.2))",
                },
                children: "404",
              }),
            }),
            r.jsx(le.h2, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.3 },
              className: "text-2xl md:text-3xl font-bold text-white -mt-6 mb-4",
              children: "Page Not Found",
            }),
            r.jsx(le.p, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.5 },
              className: "text-gray-400 text-lg max-w-md mx-auto mb-10",
              children:
                "The page you're looking for doesn't exist or has been moved.",
            }),
            r.jsx(le.div, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: 0.7 },
              children: r.jsxs(mt, {
                to: "/",
                className:
                  "group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold text-lg shadow-lg shadow-red-500/25 hover:shadow-red-500/40 hover:scale-105 transition-all duration-300",
                children: [
                  r.jsx(K4, { size: 20 }),
                  "Go Home",
                  r.jsx(bi, {
                    size: 18,
                    className:
                      "group-hover:translate-x-1 transition-transform duration-300",
                  }),
                ],
              }),
            }),
            r.jsx(le.div, {
              initial: { scaleX: 0 },
              animate: { scaleX: 1 },
              transition: { duration: 1, delay: 1 },
              className:
                "mt-16 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-red-500/50 to-transparent",
            }),
          ],
        }),
      ],
    }),


  _T = () => {
    const { city: n } = _x(),
      i = zx(),
      l = RT(n || "");
    if (
      (j.useEffect(() => {
        if (!l) {
          i("/404", { replace: !0 });
          return;
        }
        document.title = `Web Developer in ${l.name}, Bihar — Sumit Kumar   `;
        const d = document.querySelector('meta[name="description"]');
        d && d.setAttribute("content", l.description);
        const h = document.querySelector('meta[name="keywords"]');
        h &&
          h.setAttribute(
            "content",
            l.keywords.join(", ") +
              ", Sumit Kumar   , web developer Bihar, website development Bihar",
          );
        const f = document.getElementById("city-schema");
        f && f.remove();
        const x = document.createElement("script");
        return (
          (x.id = "city-schema"),
          (x.type = "application/ld+json"),
          (x.text = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: `Sumit Kumar    — Web Developer in ${l.name}`,
            url: `https://Sumit Kumar  .vercel.app/web-developer-${l.slug}`,
            description: l.description,
            areaServed: {
              "@type": "City",
              name: l.name,
              containedInPlace: {
                "@type": "State",
                name: "Bihar",
                containedInPlace: { "@type": "Country", name: "India" },
              },
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: l.lat,
              longitude: l.lng,
            },
            priceRange: "₹999 - ₹50000",
            telephone: "+918579022140",
            address: {
              "@type": "PostalAddress",
              addressLocality: l.name,
              addressRegion: "Bihar",
              addressCountry: "IN",
            },
            provider: {
              "@type": "Person",
              name: "Sumit Kumar   ",
              url: "https://SumitKumar.vercel.app",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Web Development Services",
              itemListElement: gx.map((p) => ({
                "@type": "Offer",
                name: p.title,
                description: p.desc,
              })),
            },
          })),
          document.head.appendChild(x),
          () => {
            document.title =
              "Sumit Kumar    — Web Developer, Designer & AI Expert";
          }
        );
      }, [l, i]),
      !l)
    )
      return null;

  };
U1.createRoot(document.getElementById("root")).render(
  r.jsx(j.StrictMode, {
    children: r.jsx(ow, {
      children: r.jsxs(V2, {
        children: [
          r.jsx(Wa, { path: "/", element: r.jsx(vT, {}) }),
          r.jsx(Wa, { path: "/index.html", element: r.jsx(vT, {}) }),
          r.jsx(Wa, { path: "/blog", element: r.jsx(MT, {}) }),
          r.jsx(Wa, { path: "/blog/:slug", element: r.jsx(CT, {}) }),
          r.jsx(Wa, { path: "/privacy", element: r.jsx(jT, {}) }),
          r.jsx(Wa, { path: "/terms", element: r.jsx(NT, {}) }),
          r.jsx(Wa, { path: "/admin", element: r.jsx(AT, {}) }),
          r.jsx(Wa, { path: "/web-developer-:city", element: r.jsx(_T, {}) }),
          r.jsx(Wa, { path: "*", element: r.jsx(DT, {}) }),
        ],
      }),
    }),
  }),
);
export {
  Hn as A,
  N4 as C,
  ox as D,
  Jd as E,
  Wd as M,
  T3 as P,
  OT as R,
  z3 as S,
  tf as T,
  iT as U,
  lT as V,
  af as X,
  wb as a,
  Tl as b,
  ne as c,
  U3 as d,
  M4 as e,
  bi as f,
  qn as g,
  y4 as h,
  xs as i,
  r as j,
  Vl as k,
  bs as l,
  le as m,
  vo as n,
  dT as o,
  E4 as p,
  dx as q,
  j as r,
  q3 as s,
};
