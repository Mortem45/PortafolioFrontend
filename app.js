function Animate() {
  !function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";
    function n(e, t, n) {
        var r, o = (t = t || Z).createElement("script");
        if (o.text = e,
        n)
            for (r in pe)
                n[r] && (o[r] = n[r]);
        t.head.appendChild(o).parentNode.removeChild(o)
    }
    function r(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ie[se.call(e)] || "object" : typeof e
    }
    function o(e) {
        var t = !!e && "length"in e && e.length
          , n = r(e);
        return !de(e) && !fe(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function s(e, t, n) {
        return de(t) ? he.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? he.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? he.grep(e, function(e) {
            return oe.call(t, e) > -1 !== n
        }) : he.filter(t, e, n)
    }
    function a(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; )
            ;
        return e
    }
    function l(e) {
        return e
    }
    function c(e) {
        throw e
    }
    function u(e, t, n, r) {
        var o;
        try {
            e && de(o = e.promise) ? o.call(e).done(t).fail(n) : e && de(o = e.then) ? o.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    function d() {
        Z.removeEventListener("DOMContentLoaded", d),
        e.removeEventListener("load", d),
        he.ready()
    }
    function f(e, t) {
        return t.toUpperCase()
    }
    function p(e) {
        return e.replace(Se, "ms-").replace(De, f)
    }
    function h() {
        this.expando = he.expando + h.uid++
    }
    function m(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Le, "-$&").toLowerCase(),
            "string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = function(e) {
                        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : je.test(e) ? JSON.parse(e) : e)
                    }(n)
                } catch (e) {}
                Ne.set(e, t, n)
            } else
                n = void 0;
        return n
    }
    function g(e, t, n, r) {
        var o, i, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return he.css(e, t, "")
        }
        , l = a(), c = n && n[3] || (he.cssNumber[t] ? "" : "px"), u = (he.cssNumber[t] || "px" !== c && +l) && He.exec(he.css(e, t));
        if (u && u[3] !== c) {
            for (l /= 2,
            c = c || u[3],
            u = +l || 1; s--; )
                he.style(e, t, u + c),
                (1 - i) * (1 - (i = a() / l || .5)) <= 0 && (s = 0),
                u /= i;
            u *= 2,
            he.style(e, t, u + c),
            n = n || []
        }
        return n && (u = +u || +l || 0,
        o = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = c,
        r.start = u,
        r.end = o)),
        o
    }
    function v(e) {
        var t, n = e.ownerDocument, r = e.nodeName, o = Re[r];
        return o || (t = n.body.appendChild(n.createElement(r)),
        o = he.css(t, "display"),
        t.parentNode.removeChild(t),
        "none" === o && (o = "block"),
        Re[r] = o,
        o)
    }
    function b(e, t) {
        for (var n, r, o = [], i = 0, s = e.length; i < s; i++)
            (r = e[i]).style && (n = r.style.display,
            t ? ("none" === n && (o[i] = Ae.get(r, "display") || null,
            o[i] || (r.style.display = "")),
            "" === r.style.display && Be(r) && (o[i] = v(r))) : "none" !== n && (o[i] = "none",
            Ae.set(r, "display", n)));
        for (i = 0; i < s; i++)
            null != o[i] && (e[i].style.display = o[i]);
        return e
    }
    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
        void 0 === t || t && i(e, t) ? he.merge([e], n) : n
    }
    function _(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
            Ae.set(e[n], "globalEval", !t || Ae.get(t[n], "globalEval"))
    }
    function x(e, t, n, o, i) {
        for (var s, a, l, c, u, d, f = t.createDocumentFragment(), p = [], h = 0, m = e.length; h < m; h++)
            if ((s = e[h]) || 0 === s)
                if ("object" === r(s))
                    he.merge(p, s.nodeType ? [s] : s);
                else if (Xe.test(s)) {
                    for (a = a || f.appendChild(t.createElement("div")),
                    l = (ze.exec(s) || ["", ""])[1].toLowerCase(),
                    c = Ue[l] || Ue._default,
                    a.innerHTML = c[1] + he.htmlPrefilter(s) + c[2],
                    d = c[0]; d--; )
                        a = a.lastChild;
                    he.merge(p, a.childNodes),
                    (a = f.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(s));
        for (f.textContent = "",
        h = 0; s = p[h++]; )
            if (o && he.inArray(s, o) > -1)
                i && i.push(s);
            else if (u = he.contains(s.ownerDocument, s),
            a = y(f.appendChild(s), "script"),
            u && _(a),
            n)
                for (d = 0; s = a[d++]; )
                    Fe.test(s.type || "") && n.push(s);
        return f
    }
    function w() {
        return !0
    }
    function $() {
        return !1
    }
    function k() {
        try {
            return Z.activeElement
        } catch (e) {}
    }
    function C(e, t, n, r, o, i) {
        var s, a;
        if ("object" == typeof t) {
            for (a in "string" != typeof n && (r = r || n,
            n = void 0),
            t)
                C(e, a, n, r, t[a], i);
            return e
        }
        if (null == r && null == o ? (o = n,
        r = n = void 0) : null == o && ("string" == typeof n ? (o = r,
        r = void 0) : (o = r,
        r = n,
        n = void 0)),
        !1 === o)
            o = $;
        else if (!o)
            return e;
        return 1 === i && (s = o,
        (o = function(e) {
            return he().off(e),
            s.apply(this, arguments)
        }
        ).guid = s.guid || (s.guid = he.guid++)),
        e.each(function() {
            he.event.add(this, t, o, r, n)
        })
    }
    function E(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") && he(e).children("tbody")[0] || e
    }
    function T(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
        e
    }
    function P(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
        e
    }
    function S(e, t) {
        var n, r, o, i, s, a, l, c;
        if (1 === t.nodeType) {
            if (Ae.hasData(e) && (i = Ae.access(e),
            s = Ae.set(t, i),
            c = i.events))
                for (o in delete s.handle,
                s.events = {},
                c)
                    for (n = 0,
                    r = c[o].length; n < r; n++)
                        he.event.add(t, o, c[o][n]);
            Ne.hasData(e) && (a = Ne.access(e),
            l = he.extend({}, a),
            Ne.set(t, l))
        }
    }
    function D(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && We.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }
    function I(e, t, r, o) {
        t = ne.apply([], t);
        var i, s, a, l, c, u, d = 0, f = e.length, p = f - 1, h = t[0], m = de(h);
        if (m || f > 1 && "string" == typeof h && !ue.checkClone && Ze.test(h))
            return e.each(function(n) {
                var i = e.eq(n);
                m && (t[0] = h.call(this, n, i.html())),
                I(i, t, r, o)
            });
        if (f && (s = (i = x(t, e[0].ownerDocument, !1, e, o)).firstChild,
        1 === i.childNodes.length && (i = s),
        s || o)) {
            for (l = (a = he.map(y(i, "script"), T)).length; d < f; d++)
                c = i,
                d !== p && (c = he.clone(c, !0, !0),
                l && he.merge(a, y(c, "script"))),
                r.call(e[d], c, d);
            if (l)
                for (u = a[a.length - 1].ownerDocument,
                he.map(a, P),
                d = 0; d < l; d++)
                    c = a[d],
                    Fe.test(c.type || "") && !Ae.access(c, "globalEval") && he.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? he._evalUrl && he._evalUrl(c.src) : n(c.textContent.replace(et, ""), u, c))
        }
        return e
    }
    function A(e, t, n) {
        for (var r, o = t ? he.filter(t, e) : e, i = 0; null != (r = o[i]); i++)
            n || 1 !== r.nodeType || he.cleanData(y(r)),
            r.parentNode && (n && he.contains(r.ownerDocument, r) && _(y(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function N(e, t, n) {
        var r, o, i, s, a = e.style;
        return (n = n || nt(e)) && ("" !== (s = n.getPropertyValue(t) || n[t]) || he.contains(e.ownerDocument, e) || (s = he.style(e, t)),
        !ue.pixelBoxStyles() && tt.test(s) && rt.test(t) && (r = a.width,
        o = a.minWidth,
        i = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = r,
        a.minWidth = o,
        a.maxWidth = i)),
        void 0 !== s ? s + "" : s
    }
    function j(e, t) {
        return {
            get: function() {
                if (!e())
                    return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    function L(e) {
        var t = he.cssProps[e];
        return t || (t = he.cssProps[e] = function(e) {
            if (e in ct)
                return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = lt.length; n--; )
                if ((e = lt[n] + t)in ct)
                    return e
        }(e) || e),
        t
    }
    function O(e, t, n) {
        var r = He.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }
    function H(e, t, n, r, o, i) {
        var s = "width" === t ? 1 : 0
          , a = 0
          , l = 0;
        if (n === (r ? "border" : "content"))
            return 0;
        for (; s < 4; s += 2)
            "margin" === n && (l += he.css(e, n + qe[s], !0, o)),
            r ? ("content" === n && (l -= he.css(e, "padding" + qe[s], !0, o)),
            "margin" !== n && (l -= he.css(e, "border" + qe[s] + "Width", !0, o))) : (l += he.css(e, "padding" + qe[s], !0, o),
            "padding" !== n ? l += he.css(e, "border" + qe[s] + "Width", !0, o) : a += he.css(e, "border" + qe[s] + "Width", !0, o));
        return !r && i >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - i - l - a - .5))),
        l
    }
    function q(e, t, n) {
        var r = nt(e)
          , o = N(e, t, r)
          , i = "border-box" === he.css(e, "boxSizing", !1, r)
          , s = i;
        if (tt.test(o)) {
            if (!n)
                return o;
            o = "auto"
        }
        return s = s && (ue.boxSizingReliable() || o === e.style[t]),
        ("auto" === o || !parseFloat(o) && "inline" === he.css(e, "display", !1, r)) && (o = e["offset" + t[0].toUpperCase() + t.slice(1)],
        s = !0),
        (o = parseFloat(o) || 0) + H(e, t, n || (i ? "border" : "content"), s, r, o) + "px"
    }
    function B(e, t, n, r, o) {
        return new B.prototype.init(e,t,n,r,o)
    }
    function M() {
        dt && (!1 === Z.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(M) : e.setTimeout(M, he.fx.interval),
        he.fx.tick())
    }
    function R() {
        return e.setTimeout(function() {
            ut = void 0
        }),
        ut = Date.now()
    }
    function W(e, t) {
        var n, r = 0, o = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
            o["margin" + (n = qe[r])] = o["padding" + n] = e;
        return t && (o.opacity = o.width = e),
        o
    }
    function z(e, t, n) {
        for (var r, o = (F.tweeners[t] || []).concat(F.tweeners["*"]), i = 0, s = o.length; i < s; i++)
            if (r = o[i].call(n, t, e))
                return r
    }
    function F(e, t, n) {
        var r, o, i = 0, s = F.prefilters.length, a = he.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (o)
                return !1;
            for (var t = ut || R(), n = Math.max(0, c.startTime + c.duration - t), r = 1 - (n / c.duration || 0), i = 0, s = c.tweens.length; i < s; i++)
                c.tweens[i].run(r);
            return a.notifyWith(e, [c, r, n]),
            r < 1 && s ? n : (s || a.notifyWith(e, [c, 1, 0]),
            a.resolveWith(e, [c]),
            !1)
        }, c = a.promise({
            elem: e,
            props: he.extend({}, t),
            opts: he.extend(!0, {
                specialEasing: {},
                easing: he.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ut || R(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = he.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? c.tweens.length : 0;
                if (o)
                    return this;
                for (o = !0; n < r; n++)
                    c.tweens[n].run(1);
                return t ? (a.notifyWith(e, [c, 1, 0]),
                a.resolveWith(e, [c, t])) : a.rejectWith(e, [c, t]),
                this
            }
        }), u = c.props;
        for (function(e, t) {
            var n, r, o, i, s;
            for (n in e)
                if (o = t[r = p(n)],
                i = e[n],
                Array.isArray(i) && (o = i[1],
                i = e[n] = i[0]),
                n !== r && (e[r] = i,
                delete e[n]),
                (s = he.cssHooks[r]) && "expand"in s)
                    for (n in i = s.expand(i),
                    delete e[r],
                    i)
                        n in e || (e[n] = i[n],
                        t[n] = o);
                else
                    t[r] = o
        }(u, c.opts.specialEasing); i < s; i++)
            if (r = F.prefilters[i].call(c, e, u, c.opts))
                return de(r.stop) && (he._queueHooks(c.elem, c.opts.queue).stop = r.stop.bind(r)),
                r;
        return he.map(u, z, c),
        de(c.opts.start) && c.opts.start.call(e, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        he.fx.timer(he.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    function U(e) {
        return (e.match(Ce) || []).join(" ")
    }
    function X(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Y(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(Ce) || []
    }
    function V(e, t, n, o) {
        var i;
        if (Array.isArray(t))
            he.each(t, function(t, r) {
                n || kt.test(e) ? o(e, r) : V(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, o)
            });
        else if (n || "object" !== r(t))
            o(e, t);
        else
            for (i in t)
                V(e + "[" + i + "]", t[i], n, o)
    }
    function Q(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, o = 0, i = t.toLowerCase().match(Ce) || [];
            if (de(n))
                for (; r = i[o++]; )
                    "+" === r[0] ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function G(e, t, n, r) {
        function o(a) {
            var l;
            return i[a] = !0,
            he.each(e[a] || [], function(e, a) {
                var c = a(t, n, r);
                return "string" != typeof c || s || i[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                o(c),
                !1)
            }),
            l
        }
        var i = {}
          , s = e === Lt;
        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }
    function J(e, t) {
        var n, r, o = he.ajaxSettings.flatOptions || {};
        for (n in t)
            void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);
        return r && he.extend(!0, e, r),
        e
    }
    var K = []
      , Z = e.document
      , ee = Object.getPrototypeOf
      , te = K.slice
      , ne = K.concat
      , re = K.push
      , oe = K.indexOf
      , ie = {}
      , se = ie.toString
      , ae = ie.hasOwnProperty
      , le = ae.toString
      , ce = le.call(Object)
      , ue = {}
      , de = function(e) {
        return "function" == typeof e && "number" != typeof e.nodeType
    }
      , fe = function(e) {
        return null != e && e === e.window
    }
      , pe = {
        type: !0,
        src: !0,
        noModule: !0
    }
      , he = function(e, t) {
        return new he.fn.init(e,t)
    }
      , me = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    he.fn = he.prototype = {
        jquery: "3.3.1",
        constructor: he,
        length: 0,
        toArray: function() {
            return te.call(this)
        },
        get: function(e) {
            return null == e ? te.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = he.merge(this.constructor(), e);
            return t.prevObject = this,
            t
        },
        each: function(e) {
            return he.each(this, e)
        },
        map: function(e) {
            return this.pushStack(he.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(te.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: re,
        sort: K.sort,
        splice: K.splice
    },
    he.extend = he.fn.extend = function() {
        var e, t, n, r, o, i, s = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || de(s) || (s = {}),
        a === l && (s = this,
        a--); a < l; a++)
            if (null != (e = arguments[a]))
                for (t in e)
                    n = s[t],
                    s !== (r = e[t]) && (c && r && (he.isPlainObject(r) || (o = Array.isArray(r))) ? (o ? (o = !1,
                    i = n && Array.isArray(n) ? n : []) : i = n && he.isPlainObject(n) ? n : {},
                    s[t] = he.extend(c, i, r)) : void 0 !== r && (s[t] = r));
        return s
    }
    ,
    he.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== se.call(e) || (t = ee(e)) && ("function" != typeof (n = ae.call(t, "constructor") && t.constructor) || le.call(n) !== ce))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        globalEval: function(e) {
            n(e)
        },
        each: function(e, t) {
            var n, r = 0;
            if (o(e))
                for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++)
                    ;
            else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r]))
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(me, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (o(Object(e)) ? he.merge(n, "string" == typeof e ? [e] : e) : re.call(n, e)),
            n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : oe.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, o = e.length; r < n; r++)
                e[o++] = t[r];
            return e.length = o,
            e
        },
        grep: function(e, t, n) {
            for (var r = [], o = 0, i = e.length, s = !n; o < i; o++)
                !t(e[o], o) !== s && r.push(e[o]);
            return r
        },
        map: function(e, t, n) {
            var r, i, s = 0, a = [];
            if (o(e))
                for (r = e.length; s < r; s++)
                    null != (i = t(e[s], s, n)) && a.push(i);
            else
                for (s in e)
                    null != (i = t(e[s], s, n)) && a.push(i);
            return ne.apply([], a)
        },
        guid: 1,
        support: ue
    }),
    "function" == typeof Symbol && (he.fn[Symbol.iterator] = K[Symbol.iterator]),
    he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ie["[object " + t + "]"] = t.toLowerCase()
    });
    var ge = function(e) {
        function t(e, t, n, r) {
            var o, i, s, a, l, u, f, p = t && t.ownerDocument, h = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h)
                return n;
            if (!r && ((t ? t.ownerDocument || t : B) !== I && D(t),
            t = t || I,
            N)) {
                if (11 !== h && (l = me.exec(e)))
                    if (o = l[1]) {
                        if (9 === h) {
                            if (!(s = t.getElementById(o)))
                                return n;
                            if (s.id === o)
                                return n.push(s),
                                n
                        } else if (p && (s = p.getElementById(o)) && H(t, s) && s.id === o)
                            return n.push(s),
                            n
                    } else {
                        if (l[2])
                            return G.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((o = l[3]) && _.getElementsByClassName && t.getElementsByClassName)
                            return G.apply(n, t.getElementsByClassName(o)),
                            n
                    }
                if (_.qsa && !F[e + " "] && (!j || !j.test(e))) {
                    if (1 !== h)
                        p = t,
                        f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ye, _e) : t.setAttribute("id", a = q),
                        i = (u = k(e)).length; i--; )
                            u[i] = "#" + a + " " + d(u[i]);
                        f = u.join(","),
                        p = ge.test(e) && c(t.parentNode) || t
                    }
                    if (f)
                        try {
                            return G.apply(n, p.querySelectorAll(f)),
                            n
                        } catch (e) {} finally {
                            a === q && t.removeAttribute("id")
                        }
                }
            }
            return E(e.replace(ie, "$1"), t, n, r)
        }
        function n() {
            var e = [];
            return function t(n, r) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()],
                t[n + " "] = r
            }
        }
        function r(e) {
            return e[q] = !0,
            e
        }
        function o(e) {
            var t = I.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function i(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                x.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                return "form"in t ? t.parentNode && !1 === t.disabled ? "label"in t ? "label"in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && we(t) === e : t.disabled === e : "label"in t && t.disabled === e
            }
        }
        function l(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var o, i = e([], n.length, t), s = i.length; s--; )
                        n[o = i[s]] && (n[o] = !(r[o] = n[o]))
                })
            })
        }
        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        function u() {}
        function d(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++)
                r += e[t].value;
            return r
        }
        function f(e, t, n) {
            var r = t.dir
              , o = t.next
              , i = o || r
              , s = n && "parentNode" === i
              , a = R++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || s)
                        return e(t, n, o);
                return !1
            }
            : function(t, n, l) {
                var c, u, d, f = [M, a];
                if (l) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || s) && e(t, n, l))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || s)
                            if (u = (d = t[q] || (t[q] = {}))[t.uniqueID] || (d[t.uniqueID] = {}),
                            o && o === t.nodeName.toLowerCase())
                                t = t[r] || t;
                            else {
                                if ((c = u[i]) && c[0] === M && c[1] === a)
                                    return f[2] = c[2];
                                if (u[i] = f,
                                f[2] = e(t, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var o = e.length; o--; )
                    if (!e[o](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function h(e, n, r) {
            for (var o = 0, i = n.length; o < i; o++)
                t(e, n[o], r);
            return r
        }
        function m(e, t, n, r, o) {
            for (var i, s = [], a = 0, l = e.length, c = null != t; a < l; a++)
                (i = e[a]) && (n && !n(i, r, o) || (s.push(i),
                c && t.push(a)));
            return s
        }
        function g(e, t, n, o, i, s) {
            return o && !o[q] && (o = g(o)),
            i && !i[q] && (i = g(i, s)),
            r(function(r, s, a, l) {
                var c, u, d, f = [], p = [], g = s.length, v = r || h(t || "*", a.nodeType ? [a] : a, []), b = !e || !r && t ? v : m(v, f, e, a, l), y = n ? i || (r ? e : g || o) ? [] : s : b;
                if (n && n(b, y, a, l),
                o)
                    for (c = m(y, p),
                    o(c, [], a, l),
                    u = c.length; u--; )
                        (d = c[u]) && (y[p[u]] = !(b[p[u]] = d));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (c = [],
                            u = y.length; u--; )
                                (d = y[u]) && c.push(b[u] = d);
                            i(null, y = [], c, l)
                        }
                        for (u = y.length; u--; )
                            (d = y[u]) && (c = i ? K(r, d) : f[u]) > -1 && (r[c] = !(s[c] = d))
                    }
                } else
                    y = m(y === s ? y.splice(g, y.length) : y),
                    i ? i(null, s, y, l) : G.apply(s, y)
            })
        }
        function v(e) {
            for (var t, n, r, o = e.length, i = x.relative[e[0].type], s = i || x.relative[" "], a = i ? 1 : 0, l = f(function(e) {
                return e === t
            }, s, !0), c = f(function(e) {
                return K(t, e) > -1
            }, s, !0), u = [function(e, n, r) {
                var o = !i && (r || n !== T) || ((t = n).nodeType ? l(e, n, r) : c(e, n, r));
                return t = null,
                o
            }
            ]; a < o; a++)
                if (n = x.relative[e[a].type])
                    u = [f(p(u), n)];
                else {
                    if ((n = x.filter[e[a].type].apply(null, e[a].matches))[q]) {
                        for (r = ++a; r < o && !x.relative[e[r].type]; r++)
                            ;
                        return g(a > 1 && p(u), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ie, "$1"), n, a < r && v(e.slice(a, r)), r < o && v(e = e.slice(r)), r < o && d(e))
                    }
                    u.push(n)
                }
            return p(u)
        }
        function b(e, n) {
            var o = n.length > 0
              , i = e.length > 0
              , s = function(r, s, a, l, c) {
                var u, d, f, p = 0, h = "0", g = r && [], v = [], b = T, y = r || i && x.find.TAG("*", c), _ = M += null == b ? 1 : Math.random() || .1, w = y.length;
                for (c && (T = s === I || s || c); h !== w && null != (u = y[h]); h++) {
                    if (i && u) {
                        for (d = 0,
                        s || u.ownerDocument === I || (D(u),
                        a = !N); f = e[d++]; )
                            if (f(u, s || I, a)) {
                                l.push(u);
                                break
                            }
                        c && (M = _)
                    }
                    o && ((u = !f && u) && p--,
                    r && g.push(u))
                }
                if (p += h,
                o && h !== p) {
                    for (d = 0; f = n[d++]; )
                        f(g, v, s, a);
                    if (r) {
                        if (p > 0)
                            for (; h--; )
                                g[h] || v[h] || (v[h] = V.call(l));
                        v = m(v)
                    }
                    G.apply(l, v),
                    c && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l)
                }
                return c && (M = _,
                T = b),
                g
            };
            return o ? r(s) : s
        }
        var y, _, x, w, $, k, C, E, T, P, S, D, I, A, N, j, L, O, H, q = "sizzle" + 1 * new Date, B = e.document, M = 0, R = 0, W = n(), z = n(), F = n(), U = function(e, t) {
            return e === t && (S = !0),
            0
        }, X = {}.hasOwnProperty, Y = [], V = Y.pop, Q = Y.push, G = Y.push, J = Y.slice, K = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", oe = new RegExp(ee + "+","g"), ie = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$","g"), se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]","g"), ce = new RegExp(re), ue = new RegExp("^" + te + "$"), de = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)","i"),
            bool: new RegExp("^(?:" + Z + ")$","i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)","i")
        }, fe = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)","ig"), be = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, _e = function(e, t) {
            return t ? "\0" === e ? "?" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, xe = function() {
            D()
        }, we = f(function(e) {
            return !0 === e.disabled && ("form"in e || "label"in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            G.apply(Y = J.call(B.childNodes), B.childNodes),
            Y[B.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: Y.length ? function(e, t) {
                    Q.apply(e, J.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        for (y in _ = t.support = {},
        $ = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }
        ,
        D = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : B;
            return r !== I && 9 === r.nodeType && r.documentElement ? (A = (I = r).documentElement,
            N = !$(I),
            B !== I && (n = I.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", xe, !1) : n.attachEvent && n.attachEvent("onunload", xe)),
            _.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            _.getElementsByTagName = o(function(e) {
                return e.appendChild(I.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            _.getElementsByClassName = he.test(I.getElementsByClassName),
            _.getById = o(function(e) {
                return A.appendChild(e).id = q,
                !I.getElementsByName || !I.getElementsByName(q).length
            }),
            _.getById ? (x.filter.ID = function(e) {
                var t = e.replace(ve, be);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && N) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ) : (x.filter.ID = function(e) {
                var t = e.replace(ve, be);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ,
            x.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && N) {
                    var n, r, o, i = t.getElementById(e);
                    if (i) {
                        if ((n = i.getAttributeNode("id")) && n.value === e)
                            return [i];
                        for (o = t.getElementsByName(e),
                        r = 0; i = o[r++]; )
                            if ((n = i.getAttributeNode("id")) && n.value === e)
                                return [i]
                    }
                    return []
                }
            }
            ),
            x.find.TAG = _.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], o = 0, i = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = i[o++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return i
            }
            ,
            x.find.CLASS = _.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && N)
                    return t.getElementsByClassName(e)
            }
            ,
            L = [],
            j = [],
            (_.qsa = he.test(I.querySelectorAll)) && (o(function(e) {
                A.appendChild(e).innerHTML = "<a id='" + q + "'></a><select id='" + q + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ee + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || j.push("\\[" + ee + "*(?:value|" + Z + ")"),
                e.querySelectorAll("[id~=" + q + "-]").length || j.push("~="),
                e.querySelectorAll(":checked").length || j.push(":checked"),
                e.querySelectorAll("a#" + q + "+*").length || j.push(".#.+[+~]")
            }),
            o(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = I.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && j.push("name" + ee + "*[*^$|!~]?="),
                2 !== e.querySelectorAll(":enabled").length && j.push(":enabled", ":disabled"),
                A.appendChild(e).disabled = !0,
                2 !== e.querySelectorAll(":disabled").length && j.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                j.push(",.*:")
            })),
            (_.matchesSelector = he.test(O = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && o(function(e) {
                _.disconnectedMatch = O.call(e, "*"),
                O.call(e, "[s!='']:x"),
                L.push("!=", re)
            }),
            j = j.length && new RegExp(j.join("|")),
            L = L.length && new RegExp(L.join("|")),
            t = he.test(A.compareDocumentPosition),
            H = t || he.test(A.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            U = t ? function(e, t) {
                if (e === t)
                    return S = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === I || e.ownerDocument === B && H(B, e) ? -1 : t === I || t.ownerDocument === B && H(B, t) ? 1 : P ? K(P, e) - K(P, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return S = !0,
                    0;
                var n, r = 0, o = e.parentNode, i = t.parentNode, a = [e], l = [t];
                if (!o || !i)
                    return e === I ? -1 : t === I ? 1 : o ? -1 : i ? 1 : P ? K(P, e) - K(P, t) : 0;
                if (o === i)
                    return s(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; a[r] === l[r]; )
                    r++;
                return r ? s(a[r], l[r]) : a[r] === B ? -1 : l[r] === B ? 1 : 0
            }
            ,
            I) : I
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== I && D(e),
            n = n.replace(le, "='$1']"),
            _.matchesSelector && N && !F[n + " "] && (!L || !L.test(n)) && (!j || !j.test(n)))
                try {
                    var r = O.call(e, n);
                    if (r || _.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (e) {}
            return t(n, I, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== I && D(e),
            H(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== I && D(e);
            var n = x.attrHandle[t.toLowerCase()]
              , r = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !N) : void 0;
            return void 0 !== r ? r : _.attributes || !N ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.escape = function(e) {
            return (e + "").replace(ye, _e)
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, o = 0;
            if (S = !_.detectDuplicates,
            P = !_.sortStable && e.slice(0),
            e.sort(U),
            S) {
                for (; t = e[o++]; )
                    t === e[o] && (r = n.push(o));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return P = null,
            e
        }
        ,
        w = t.getText = function(e) {
            var t, n = "", r = 0, o = e.nodeType;
            if (o) {
                if (1 === o || 9 === o || 11 === o) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += w(e)
                } else if (3 === o || 4 === o)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += w(t);
            return n
        }
        ,
        (x = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: de,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ve, be),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(ve, be),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = k(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ve, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(o) {
                        var i = t.attr(o, e);
                        return null == i ? "!=" === n : !n || (i += "",
                        "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i.replace(oe, " ") + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, o) {
                    var i = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === r && 0 === o ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var c, u, d, f, p, h, m = i !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), b = !l && !a, y = !1;
                        if (g) {
                            if (i) {
                                for (; m; ) {
                                    for (f = t; f = f[m]; )
                                        if (a ? f.nodeName.toLowerCase() === v : 1 === f.nodeType)
                                            return !1;
                                    h = m = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [s ? g.firstChild : g.lastChild],
                            s && b) {
                                for (y = (p = (c = (u = (d = (f = g)[q] || (f[q] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === M && c[1]) && c[2],
                                f = p && g.childNodes[p]; f = ++p && f && f[m] || (y = p = 0) || h.pop(); )
                                    if (1 === f.nodeType && ++y && f === t) {
                                        u[e] = [M, p, y];
                                        break
                                    }
                            } else if (b && (y = p = (c = (u = (d = (f = t)[q] || (f[q] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] || [])[0] === M && c[1]),
                            !1 === y)
                                for (; (f = ++p && f && f[m] || (y = p = 0) || h.pop()) && ((a ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++y || (b && ((u = (d = f[q] || (f[q] = {}))[f.uniqueID] || (d[f.uniqueID] = {}))[e] = [M, y]),
                                f !== t)); )
                                    ;
                            return (y -= o) === r || y % r == 0 && y / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var o, i = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return i[q] ? i(n) : i.length > 1 ? (o = [e, e, "", n],
                    x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, o = i(e, n), s = o.length; s--; )
                            e[r = K(e, o[s])] = !(t[r] = o[s])
                    }) : function(e) {
                        return i(e, 0, o)
                    }
                    ) : i
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , o = C(e.replace(ie, "$1"));
                    return o[q] ? r(function(e, t, n, r) {
                        for (var i, s = o(e, null, r, []), a = e.length; a--; )
                            (i = s[a]) && (e[a] = !(t[a] = i))
                    }) : function(e, r, i) {
                        return t[0] = e,
                        o(t, null, i, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(ve, be),
                    function(t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return ue.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(ve, be).toLowerCase(),
                    function(t) {
                        var n;
                        do {
                            if (n = N ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                        } while ((t = t.parentNode) && 1 === t.nodeType);return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === A
                },
                focus: function(e) {
                    return e === I.activeElement && (!I.hasFocus || I.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: a(!1),
                disabled: a(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !x.pseudos.empty(e)
                },
                header: function(e) {
                    return pe.test(e.nodeName)
                },
                input: function(e) {
                    return fe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: l(function() {
                    return [0]
                }),
                last: l(function(e, t) {
                    return [t - 1]
                }),
                eq: l(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: l(function(e, t) {
                    for (var n = 0; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                odd: l(function(e, t) {
                    for (var n = 1; n < t; n += 2)
                        e.push(n);
                    return e
                }),
                lt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: l(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        }).pseudos.nth = x.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[y] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(y);
        for (y in {
            submit: !0,
            reset: !0
        })
            x.pseudos[y] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(y);
        return u.prototype = x.filters = x.pseudos,
        x.setFilters = new u,
        k = t.tokenize = function(e, n) {
            var r, o, i, s, a, l, c, u = z[e + " "];
            if (u)
                return n ? 0 : u.slice(0);
            for (a = e,
            l = [],
            c = x.preFilter; a; ) {
                for (s in r && !(o = se.exec(a)) || (o && (a = a.slice(o[0].length) || a),
                l.push(i = [])),
                r = !1,
                (o = ae.exec(a)) && (r = o.shift(),
                i.push({
                    value: r,
                    type: o[0].replace(ie, " ")
                }),
                a = a.slice(r.length)),
                x.filter)
                    !(o = de[s].exec(a)) || c[s] && !(o = c[s](o)) || (r = o.shift(),
                    i.push({
                        value: r,
                        type: s,
                        matches: o
                    }),
                    a = a.slice(r.length));
                if (!r)
                    break
            }
            return n ? a.length : a ? t.error(e) : z(e, l).slice(0)
        }
        ,
        C = t.compile = function(e, t) {
            var n, r = [], o = [], i = F[e + " "];
            if (!i) {
                for (t || (t = k(e)),
                n = t.length; n--; )
                    (i = v(t[n]))[q] ? r.push(i) : o.push(i);
                (i = F(e, b(o, r))).selector = e
            }
            return i
        }
        ,
        E = t.select = function(e, t, n, r) {
            var o, i, s, a, l, u = "function" == typeof e && e, f = !r && k(e = u.selector || e);
            if (n = n || [],
            1 === f.length) {
                if ((i = f[0] = f[0].slice(0)).length > 2 && "ID" === (s = i[0]).type && 9 === t.nodeType && N && x.relative[i[1].type]) {
                    if (!(t = (x.find.ID(s.matches[0].replace(ve, be), t) || [])[0]))
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(i.shift().value.length)
                }
                for (o = de.needsContext.test(e) ? 0 : i.length; o-- && (s = i[o],
                !x.relative[a = s.type]); )
                    if ((l = x.find[a]) && (r = l(s.matches[0].replace(ve, be), ge.test(i[0].type) && c(t.parentNode) || t))) {
                        if (i.splice(o, 1),
                        !(e = r.length && d(i)))
                            return G.apply(n, r),
                            n;
                        break
                    }
            }
            return (u || C(e, f))(r, t, !N, n, !t || ge.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        _.sortStable = q.split("").sort(U).join("") === q,
        _.detectDuplicates = !!S,
        D(),
        _.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(I.createElement("fieldset"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || i("type|href|height|width", function(e, t, n) {
            if (!n)
                return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        _.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || i("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
                return e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || i(Z, function(e, t, n) {
            var r;
            if (!n)
                return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    he.find = ge,
    he.expr = ge.selectors,
    he.expr[":"] = he.expr.pseudos,
    he.uniqueSort = he.unique = ge.uniqueSort,
    he.text = ge.getText,
    he.isXMLDoc = ge.isXML,
    he.contains = ge.contains,
    he.escapeSelector = ge.escape;
    var ve = function(e, t, n) {
        for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (o && he(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , be = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , ye = he.expr.match.needsContext
      , _e = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    he.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? he.find.matchesSelector(r, e) ? [r] : [] : he.find.matches(e, he.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    he.fn.extend({
        find: function(e) {
            var t, n, r = this.length, o = this;
            if ("string" != typeof e)
                return this.pushStack(he(e).filter(function() {
                    for (t = 0; t < r; t++)
                        if (he.contains(o[t], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            t = 0; t < r; t++)
                he.find(e, o[t], n);
            return r > 1 ? he.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(s(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(s(this, e || [], !0))
        },
        is: function(e) {
            return !!s(this, "string" == typeof e && ye.test(e) ? he(e) : e || [], !1).length
        }
    });
    var xe, we = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (he.fn.init = function(e, t, n) {
        var r, o;
        if (!e)
            return this;
        if (n = n || xe,
        "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : we.exec(e)) || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof he ? t[0] : t,
                he.merge(this, he.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)),
                _e.test(r[1]) && he.isPlainObject(t))
                    for (r in t)
                        de(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (o = Z.getElementById(r[2])) && (this[0] = o,
            this.length = 1),
            this
        }
        return e.nodeType ? (this[0] = e,
        this.length = 1,
        this) : de(e) ? void 0 !== n.ready ? n.ready(e) : e(he) : he.makeArray(e, this)
    }
    ).prototype = he.fn,
    xe = he(Z);
    var $e = /^(?:parents|prev(?:Until|All))/
      , ke = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    he.fn.extend({
        has: function(e) {
            var t = he(e, this)
              , n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (he.contains(this, t[e]))
                        return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0, o = this.length, i = [], s = "string" != typeof e && he(e);
            if (!ye.test(e))
                for (; r < o; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && he.find.matchesSelector(n, e))) {
                            i.push(n);
                            break
                        }
            return this.pushStack(i.length > 1 ? he.uniqueSort(i) : i)
        },
        index: function(e) {
            return e ? "string" == typeof e ? oe.call(he(e), this[0]) : oe.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(he.uniqueSort(he.merge(this.get(), he(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    he.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return ve(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ve(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return ve(e, "nextSibling")
        },
        prevAll: function(e) {
            return ve(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ve(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ve(e, "previousSibling", n)
        },
        siblings: function(e) {
            return be((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return be(e.firstChild)
        },
        contents: function(e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e),
            he.merge([], e.childNodes))
        }
    }, function(e, t) {
        he.fn[e] = function(n, r) {
            var o = he.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (o = he.filter(r, o)),
            this.length > 1 && (ke[e] || he.uniqueSort(o),
            $e.test(e) && o.reverse()),
            this.pushStack(o)
        }
    });
    var Ce = /[^\x20\t\r\n\f]+/g;
    he.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return he.each(e.match(Ce) || [], function(e, n) {
                t[n] = !0
            }),
            t
        }(e) : he.extend({}, e);
        var t, n, o, i, s = [], a = [], l = -1, c = function() {
            for (i = i || e.once,
            o = t = !0; a.length; l = -1)
                for (n = a.shift(); ++l < s.length; )
                    !1 === s[l].apply(n[0], n[1]) && e.stopOnFalse && (l = s.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (s = n ? [] : "")
        }, u = {
            add: function() {
                return s && (n && !t && (l = s.length - 1,
                a.push(n)),
                function t(n) {
                    he.each(n, function(n, o) {
                        de(o) ? e.unique && u.has(o) || s.push(o) : o && o.length && "string" !== r(o) && t(o)
                    })
                }(arguments),
                n && !t && c()),
                this
            },
            remove: function() {
                return he.each(arguments, function(e, t) {
                    for (var n; (n = he.inArray(t, s, n)) > -1; )
                        s.splice(n, 1),
                        n <= l && l--
                }),
                this
            },
            has: function(e) {
                return e ? he.inArray(e, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return i = a = [],
                s = n = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return i = a = [],
                n || t || (s = n = ""),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = [e, (n = n || []).slice ? n.slice() : n],
                a.push(n),
                t || c()),
                this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!o
            }
        };
        return u
    }
    ,
    he.extend({
        Deferred: function(t) {
            var n = [["notify", "progress", he.Callbacks("memory"), he.Callbacks("memory"), 2], ["resolve", "done", he.Callbacks("once memory"), he.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", he.Callbacks("once memory"), he.Callbacks("once memory"), 1, "rejected"]]
              , r = "pending"
              , o = {
                state: function() {
                    return r
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                catch: function(e) {
                    return o.then(null, e)
                },
                pipe: function() {
                    var e = arguments;
                    return he.Deferred(function(t) {
                        he.each(n, function(n, r) {
                            var o = de(e[r[4]]) && e[r[4]];
                            i[r[1]](function() {
                                var e = o && o.apply(this, arguments);
                                e && de(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, o ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                then: function(t, r, o) {
                    function i(t, n, r, o) {
                        return function() {
                            var a = this
                              , u = arguments
                              , d = function() {
                                var e, d;
                                if (!(t < s)) {
                                    if ((e = r.apply(a, u)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    d = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                    de(d) ? o ? d.call(e, i(s, n, l, o), i(s, n, c, o)) : (s++,
                                    d.call(e, i(s, n, l, o), i(s, n, c, o), i(s, n, l, n.notifyWith))) : (r !== l && (a = void 0,
                                    u = [e]),
                                    (o || n.resolveWith)(a, u))
                                }
                            }
                              , f = o ? d : function() {
                                try {
                                    d()
                                } catch (e) {
                                    he.Deferred.exceptionHook && he.Deferred.exceptionHook(e, f.stackTrace),
                                    t + 1 >= s && (r !== c && (a = void 0,
                                    u = [e]),
                                    n.rejectWith(a, u))
                                }
                            }
                            ;
                            t ? f() : (he.Deferred.getStackHook && (f.stackTrace = he.Deferred.getStackHook()),
                            e.setTimeout(f))
                        }
                    }
                    var s = 0;
                    return he.Deferred(function(e) {
                        n[0][3].add(i(0, e, de(o) ? o : l, e.notifyWith)),
                        n[1][3].add(i(0, e, de(t) ? t : l)),
                        n[2][3].add(i(0, e, de(r) ? r : c))
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? he.extend(e, o) : o
                }
            }
              , i = {};
            return he.each(n, function(e, t) {
                var s = t[2]
                  , a = t[5];
                o[t[1]] = s.add,
                a && s.add(function() {
                    r = a
                }, n[3 - e][2].disable, n[3 - e][3].disable, n[0][2].lock, n[0][3].lock),
                s.add(t[3].fire),
                i[t[0]] = function() {
                    return i[t[0] + "With"](this === i ? void 0 : this, arguments),
                    this
                }
                ,
                i[t[0] + "With"] = s.fireWith
            }),
            o.promise(i),
            t && t.call(i, i),
            i
        },
        when: function(e) {
            var t = arguments.length
              , n = t
              , r = Array(n)
              , o = te.call(arguments)
              , i = he.Deferred()
              , s = function(e) {
                return function(n) {
                    r[e] = this,
                    o[e] = arguments.length > 1 ? te.call(arguments) : n,
                    --t || i.resolveWith(r, o)
                }
            };
            if (t <= 1 && (u(e, i.done(s(n)).resolve, i.reject, !t),
            "pending" === i.state() || de(o[n] && o[n].then)))
                return i.then();
            for (; n--; )
                u(o[n], s(n), i.reject);
            return i.promise()
        }
    });
    var Ee = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    he.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && Ee.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }
    ,
    he.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    }
    ;
    var Te = he.Deferred();
    he.fn.ready = function(e) {
        return Te.then(e).catch(function(e) {
            he.readyException(e)
        }),
        this
    }
    ,
    he.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --he.readyWait : he.isReady) || (he.isReady = !0,
            !0 !== e && --he.readyWait > 0 || Te.resolveWith(Z, [he]))
        }
    }),
    he.ready.then = Te.then,
    "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? e.setTimeout(he.ready) : (Z.addEventListener("DOMContentLoaded", d),
    e.addEventListener("load", d));
    var Pe = function(e, t, n, o, i, s, a) {
        var l = 0
          , c = e.length
          , u = null == n;
        if ("object" === r(n))
            for (l in i = !0,
            n)
                Pe(e, t, l, n[l], !0, s, a);
        else if (void 0 !== o && (i = !0,
        de(o) || (a = !0),
        u && (a ? (t.call(e, o),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(he(e), n)
        }
        )),
        t))
            for (; l < c; l++)
                t(e[l], n, a ? o : o.call(e[l], l, t(e[l], n)));
        return i ? e : u ? t.call(e) : c ? t(e[0], n) : s
    }
      , Se = /^-ms-/
      , De = /-([a-z])/g
      , Ie = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };
    h.uid = 1,
    h.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {},
            Ie(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))),
            t
        },
        set: function(e, t, n) {
            var r, o = this.cache(e);
            if ("string" == typeof t)
                o[p(t)] = n;
            else
                for (r in t)
                    o[p(r)] = t[r];
            return o
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][p(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
            void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(p) : (t = p(t))in r ? [t] : t.match(Ce) || []).length;
                    for (; n--; )
                        delete r[t[n]]
                }
                (void 0 === t || he.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !he.isEmptyObject(t)
        }
    };
    var Ae = new h
      , Ne = new h
      , je = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Le = /[A-Z]/g;
    he.extend({
        hasData: function(e) {
            return Ne.hasData(e) || Ae.hasData(e)
        },
        data: function(e, t, n) {
            return Ne.access(e, t, n)
        },
        removeData: function(e, t) {
            Ne.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ae.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ae.remove(e, t)
        }
    }),
    he.fn.extend({
        data: function(e, t) {
            var n, r, o, i = this[0], s = i && i.attributes;
            if (void 0 === e) {
                if (this.length && (o = Ne.get(i),
                1 === i.nodeType && !Ae.get(i, "hasDataAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = p(r.slice(5)),
                        m(i, r, o[r]));
                    Ae.set(i, "hasDataAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                Ne.set(this, e)
            }) : Pe(this, function(t) {
                var n;
                if (i && void 0 === t) {
                    if (void 0 !== (n = Ne.get(i, e)))
                        return n;
                    if (void 0 !== (n = m(i, e)))
                        return n
                } else
                    this.each(function() {
                        Ne.set(this, e, t)
                    })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Ne.remove(this, e)
            })
        }
    }),
    he.extend({
        queue: function(e, t, n) {
            var r;
            if (e)
                return t = (t || "fx") + "queue",
                r = Ae.get(e, t),
                n && (!r || Array.isArray(n) ? r = Ae.access(e, t, he.makeArray(n)) : r.push(n)),
                r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = he.queue(e, t)
              , r = n.length
              , o = n.shift()
              , i = he._queueHooks(e, t);
            "inprogress" === o && (o = n.shift(),
            r--),
            o && ("fx" === t && n.unshift("inprogress"),
            delete i.stop,
            o.call(e, function() {
                he.dequeue(e, t)
            }, i)),
            !r && i && i.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ae.get(e, n) || Ae.access(e, n, {
                empty: he.Callbacks("once memory").add(function() {
                    Ae.remove(e, [t + "queue", n])
                })
            })
        }
    }),
    he.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? he.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = he.queue(this, e, t);
                he._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && he.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                he.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, o = he.Deferred(), i = this, s = this.length, a = function() {
                --r || o.resolveWith(i, [i])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                (n = Ae.get(i[s], e + "queueHooks")) && n.empty && (r++,
                n.empty.add(a));
            return a(),
            o.promise(t)
        }
    });
    var Oe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , He = new RegExp("^(?:([+-])=|)(" + Oe + ")([a-z%]*)$","i")
      , qe = ["Top", "Right", "Bottom", "Left"]
      , Be = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && he.contains(e.ownerDocument, e) && "none" === he.css(e, "display")
    }
      , Me = function(e, t, n, r) {
        var o, i, s = {};
        for (i in t)
            s[i] = e.style[i],
            e.style[i] = t[i];
        for (i in o = n.apply(e, r || []),
        t)
            e.style[i] = s[i];
        return o
    }
      , Re = {};
    he.fn.extend({
        show: function() {
            return b(this, !0)
        },
        hide: function() {
            return b(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Be(this) ? he(this).show() : he(this).hide()
            })
        }
    });
    var We = /^(?:checkbox|radio)$/i
      , ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , Fe = /^$|^module$|\/(?:java|ecma)script/i
      , Ue = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ue.optgroup = Ue.option,
    Ue.tbody = Ue.tfoot = Ue.colgroup = Ue.caption = Ue.thead,
    Ue.th = Ue.td;
    var Xe = /<|&#?\w+;/;
    !function() {
        var e = Z.createDocumentFragment().appendChild(Z.createElement("div"))
          , t = Z.createElement("input");
        t.setAttribute("type", "radio"),
        t.setAttribute("checked", "checked"),
        t.setAttribute("name", "t"),
        e.appendChild(t),
        ue.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        e.innerHTML = "<textarea>x</textarea>",
        ue.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var Ye = Z.documentElement
      , Ve = /^key/
      , Qe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Ge = /^([^.]*)(?:\.(.+)|)/;
    he.event = {
        global: {},
        add: function(e, t, n, r, o) {
            var i, s, a, l, c, u, d, f, p, h, m, g = Ae.get(e);
            if (g)
                for (n.handler && (n = (i = n).handler,
                o = i.selector),
                o && he.find.matchesSelector(Ye, o),
                n.guid || (n.guid = he.guid++),
                (l = g.events) || (l = g.events = {}),
                (s = g.handle) || (s = g.handle = function(t) {
                    return void 0 !== he && he.event.triggered !== t.type ? he.event.dispatch.apply(e, arguments) : void 0
                }
                ),
                c = (t = (t || "").match(Ce) || [""]).length; c--; )
                    p = m = (a = Ge.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    p && (d = he.event.special[p] || {},
                    p = (o ? d.delegateType : d.bindType) || p,
                    d = he.event.special[p] || {},
                    u = he.extend({
                        type: p,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && he.expr.match.needsContext.test(o),
                        namespace: h.join(".")
                    }, i),
                    (f = l[p]) || ((f = l[p] = []).delegateCount = 0,
                    d.setup && !1 !== d.setup.call(e, r, h, s) || e.addEventListener && e.addEventListener(p, s)),
                    d.add && (d.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    o ? f.splice(f.delegateCount++, 0, u) : f.push(u),
                    he.event.global[p] = !0)
        },
        remove: function(e, t, n, r, o) {
            var i, s, a, l, c, u, d, f, p, h, m, g = Ae.hasData(e) && Ae.get(e);
            if (g && (l = g.events)) {
                for (c = (t = (t || "").match(Ce) || [""]).length; c--; )
                    if (p = m = (a = Ge.exec(t[c]) || [])[1],
                    h = (a[2] || "").split(".").sort(),
                    p) {
                        for (d = he.event.special[p] || {},
                        f = l[p = (r ? d.delegateType : d.bindType) || p] || [],
                        a = a[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        s = i = f.length; i--; )
                            u = f[i],
                            !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(i, 1),
                            u.selector && f.delegateCount--,
                            d.remove && d.remove.call(e, u));
                        s && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || he.removeEvent(e, p, g.handle),
                        delete l[p])
                    } else
                        for (p in l)
                            he.event.remove(e, p + t[c], n, r, !0);
                he.isEmptyObject(l) && Ae.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, o, i, s, a = he.event.fix(e), l = new Array(arguments.length), c = (Ae.get(this, "events") || {})[a.type] || [], u = he.event.special[a.type] || {};
            for (l[0] = a,
            t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (a.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (s = he.event.handlers.call(this, a, c),
                t = 0; (o = s[t++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = o.elem,
                    n = 0; (i = o.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(i.namespace) || (a.handleObj = i,
                        a.data = i.data,
                        void 0 !== (r = ((he.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)) && !1 === (a.result = r) && (a.preventDefault(),
                        a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(e, t) {
            var n, r, o, i, s, a = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (i = [],
                        s = {},
                        n = 0; n < l; n++)
                            void 0 === s[o = (r = t[n]).selector + " "] && (s[o] = r.needsContext ? he(o, this).index(c) > -1 : he.find(o, this, null, [c]).length),
                            s[o] && i.push(r);
                        i.length && a.push({
                            elem: c,
                            handlers: i
                        })
                    }
            return c = this,
            l < t.length && a.push({
                elem: c,
                handlers: t.slice(l)
            }),
            a
        },
        addProp: function(e, t) {
            Object.defineProperty(he.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: de(t) ? function() {
                    if (this.originalEvent)
                        return t(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[e]
                }
                ,
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[he.expando] ? e : new he.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === k() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && i(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
    he.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    ,
    he.Event = function(e, t) {
        if (!(this instanceof he.Event))
            return new he.Event(e,t);
        e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : $,
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
        this.currentTarget = e.currentTarget,
        this.relatedTarget = e.relatedTarget) : this.type = e,
        t && he.extend(this, t),
        this.timeStamp = e && e.timeStamp || Date.now(),
        this[he.expando] = !0
    }
    ,
    he.Event.prototype = {
        constructor: he.Event,
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w,
            e && !this.isSimulated
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w,
            e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w,
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    he.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Ve.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Qe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, he.event.addProp),
    he.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        he.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget, o = e.handleObj;
                return r && (r === this || he.contains(this, r)) || (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    he.fn.extend({
        on: function(e, t, n, r) {
            return C(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return C(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, o;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                he(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (o in e)
                    this.off(o, t, e[o]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t,
            t = void 0),
            !1 === n && (n = $),
            this.each(function() {
                he.event.remove(this, e, n, t)
            })
        }
    });
    var Je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ke = /<script|<style|<link/i
      , Ze = /checked\s*(?:[^=]|=\s*.checked.)/i
      , et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    he.extend({
        htmlPrefilter: function(e) {
            return e.replace(Je, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, o, i, s, a = e.cloneNode(!0), l = he.contains(e.ownerDocument, e);
            if (!(ue.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || he.isXMLDoc(e)))
                for (s = y(a),
                r = 0,
                o = (i = y(e)).length; r < o; r++)
                    D(i[r], s[r]);
            if (t)
                if (n)
                    for (i = i || y(e),
                    s = s || y(a),
                    r = 0,
                    o = i.length; r < o; r++)
                        S(i[r], s[r]);
                else
                    S(e, a);
            return (s = y(a, "script")).length > 0 && _(s, !l && y(e, "script")),
            a
        },
        cleanData: function(e) {
            for (var t, n, r, o = he.event.special, i = 0; void 0 !== (n = e[i]); i++)
                if (Ie(n)) {
                    if (t = n[Ae.expando]) {
                        if (t.events)
                            for (r in t.events)
                                o[r] ? he.event.remove(n, r) : he.removeEvent(n, r, t.handle);
                        n[Ae.expando] = void 0
                    }
                    n[Ne.expando] && (n[Ne.expando] = void 0)
                }
        }
    }),
    he.fn.extend({
        detach: function(e) {
            return A(this, e, !0)
        },
        remove: function(e) {
            return A(this, e)
        },
        text: function(e) {
            return Pe(this, function(e) {
                return void 0 === e ? he.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return I(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || E(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return I(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = E(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return I(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return I(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (he.cleanData(y(e, !1)),
                e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e,
            t = null == t ? e : t,
            this.map(function() {
                return he.clone(this, e, t)
            })
        },
        html: function(e) {
            return Pe(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e && 1 === t.nodeType)
                    return t.innerHTML;
                if ("string" == typeof e && !Ke.test(e) && !Ue[(ze.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = he.htmlPrefilter(e);
                    try {
                        for (; n < r; n++)
                            1 === (t = this[n] || {}).nodeType && (he.cleanData(y(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return I(this, arguments, function(t) {
                var n = this.parentNode;
                he.inArray(this, e) < 0 && (he.cleanData(y(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    he.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        he.fn[e] = function(e) {
            for (var n, r = [], o = he(e), i = o.length - 1, s = 0; s <= i; s++)
                n = s === i ? this : this.clone(!0),
                he(o[s])[t](n),
                re.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var tt = new RegExp("^(" + Oe + ")(?!px)[a-z%]+$","i")
      , nt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
      , rt = new RegExp(qe.join("|"),"i");
    !function() {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                Ye.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                r = "1%" !== t.top,
                a = 12 === n(t.marginLeft),
                c.style.right = "60%",
                s = 36 === n(t.right),
                o = 36 === n(t.width),
                c.style.position = "absolute",
                i = 36 === c.offsetWidth || "absolute",
                Ye.removeChild(l),
                c = null
            }
        }
        function n(e) {
            return Math.round(parseFloat(e))
        }
        var r, o, i, s, a, l = Z.createElement("div"), c = Z.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
        c.cloneNode(!0).style.backgroundClip = "",
        ue.clearCloneStyle = "content-box" === c.style.backgroundClip,
        he.extend(ue, {
            boxSizingReliable: function() {
                return t(),
                o
            },
            pixelBoxStyles: function() {
                return t(),
                s
            },
            pixelPosition: function() {
                return t(),
                r
            },
            reliableMarginLeft: function() {
                return t(),
                a
            },
            scrollboxSize: function() {
                return t(),
                i
            }
        }))
    }();
    var ot = /^(none|table(?!-c[ea]).+)/
      , it = /^--/
      , st = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , at = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , lt = ["Webkit", "Moz", "ms"]
      , ct = Z.createElement("div").style;
    he.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = N(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, i, s, a = p(t), l = it.test(t), c = e.style;
                if (l || (t = L(a)),
                s = he.cssHooks[t] || he.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (o = s.get(e, !1, r)) ? o : c[t];
                "string" == (i = typeof n) && (o = He.exec(n)) && o[1] && (n = g(e, t, o),
                i = "number"),
                null != n && n == n && ("number" === i && (n += o && o[3] || (he.cssNumber[a] ? "" : "px")),
                ue.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                s && "set"in s && void 0 === (n = s.set(e, n, r)) || (l ? c.setProperty(t, n) : c[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var o, i, s, a = p(t);
            return it.test(t) || (t = L(a)),
            (s = he.cssHooks[t] || he.cssHooks[a]) && "get"in s && (o = s.get(e, !0, n)),
            void 0 === o && (o = N(e, t, r)),
            "normal" === o && t in at && (o = at[t]),
            "" === n || n ? (i = parseFloat(o),
            !0 === n || isFinite(i) ? i || 0 : o) : o
        }
    }),
    he.each(["height", "width"], function(e, t) {
        he.cssHooks[t] = {
            get: function(e, n, r) {
                if (n)
                    return !ot.test(he.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? q(e, t, r) : Me(e, st, function() {
                        return q(e, t, r)
                    })
            },
            set: function(e, n, r) {
                var o, i = nt(e), s = "border-box" === he.css(e, "boxSizing", !1, i), a = r && H(e, t, r, s, i);
                return s && ue.scrollboxSize() === i.position && (a -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(i[t]) - H(e, t, "border", !1, i) - .5)),
                a && (o = He.exec(n)) && "px" !== (o[3] || "px") && (e.style[t] = n,
                n = he.css(e, t)),
                O(0, n, a)
            }
        }
    }),
    he.cssHooks.marginLeft = j(ue.reliableMarginLeft, function(e, t) {
        if (t)
            return (parseFloat(N(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
    }),
    he.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        he.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
                    o[e + qe[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        },
        "margin" !== e && (he.cssHooks[e + t].set = O)
    }),
    he.fn.extend({
        css: function(e, t) {
            return Pe(this, function(e, t, n) {
                var r, o, i = {}, s = 0;
                if (Array.isArray(t)) {
                    for (r = nt(e),
                    o = t.length; s < o; s++)
                        i[t[s]] = he.css(e, t[s], !1, r);
                    return i
                }
                return void 0 !== n ? he.style(e, t, n) : he.css(e, t)
            }, e, t, arguments.length > 1)
        }
    }),
    he.Tween = B,
    B.prototype = {
        constructor: B,
        init: function(e, t, n, r, o, i) {
            this.elem = e,
            this.prop = n,
            this.easing = o || he.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = i || (he.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = B.propHooks[this.prop];
            return e && e.get ? e.get(this) : B.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = B.propHooks[this.prop];
            return this.options.duration ? this.pos = t = he.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : B.propHooks._default.set(this),
            this
        }
    },
    B.prototype.init.prototype = B.prototype,
    B.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = he.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                he.fx.step[e.prop] ? he.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[he.cssProps[e.prop]] && !he.cssHooks[e.prop] ? e.elem[e.prop] = e.now : he.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    B.propHooks.scrollTop = B.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    he.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    he.fx = B.prototype.init,
    he.fx.step = {};
    var ut, dt, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
    he.Animation = he.extend(F, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return g(n.elem, e, He.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            de(e) ? (t = e,
            e = ["*"]) : e = e.match(Ce);
            for (var n, r = 0, o = e.length; r < o; r++)
                n = e[r],
                F.tweeners[n] = F.tweeners[n] || [],
                F.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, o, i, s, a, l, c, u, d = "width"in t || "height"in t, f = this, p = {}, h = e.style, m = e.nodeType && Be(e), g = Ae.get(e, "fxshow");
            for (r in n.queue || (null == (s = he._queueHooks(e, "fx")).unqueued && (s.unqueued = 0,
            a = s.empty.fire,
            s.empty.fire = function() {
                s.unqueued || a()
            }
            ),
            s.unqueued++,
            f.always(function() {
                f.always(function() {
                    s.unqueued--,
                    he.queue(e, "fx").length || s.empty.fire()
                })
            })),
            t)
                if (o = t[r],
                ft.test(o)) {
                    if (delete t[r],
                    i = i || "toggle" === o,
                    o === (m ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[r])
                            continue;
                        m = !0
                    }
                    p[r] = g && g[r] || he.style(e, r)
                }
            if ((l = !he.isEmptyObject(t)) || !he.isEmptyObject(p))
                for (r in d && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                null == (c = g && g.display) && (c = Ae.get(e, "display")),
                "none" === (u = he.css(e, "display")) && (c ? u = c : (b([e], !0),
                c = e.style.display || c,
                u = he.css(e, "display"),
                b([e]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === he.css(e, "float") && (l || (f.done(function() {
                    h.display = c
                }),
                null == c && (u = h.display,
                c = "none" === u ? "" : u)),
                h.display = "inline-block")),
                n.overflow && (h.overflow = "hidden",
                f.always(function() {
                    h.overflow = n.overflow[0],
                    h.overflowX = n.overflow[1],
                    h.overflowY = n.overflow[2]
                })),
                l = !1,
                p)
                    l || (g ? "hidden"in g && (m = g.hidden) : g = Ae.access(e, "fxshow", {
                        display: c
                    }),
                    i && (g.hidden = !m),
                    m && b([e], !0),
                    f.done(function() {
                        for (r in m || b([e]),
                        Ae.remove(e, "fxshow"),
                        p)
                            he.style(e, r, p[r])
                    })),
                    l = z(m ? g[r] : 0, r, f),
                    r in g || (g[r] = l.start,
                    m && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(e, t) {
            t ? F.prefilters.unshift(e) : F.prefilters.push(e)
        }
    }),
    he.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? he.extend({}, e) : {
            complete: n || !n && t || de(e) && e,
            duration: e,
            easing: n && t || t && !de(t) && t
        };
        return he.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in he.fx.speeds ? r.duration = he.fx.speeds[r.duration] : r.duration = he.fx.speeds._default),
        null != r.queue && !0 !== r.queue || (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            de(r.old) && r.old.call(this),
            r.queue && he.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    he.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(Be).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var o = he.isEmptyObject(e)
              , i = he.speed(t, n, r)
              , s = function() {
                var t = F(this, he.extend({}, e), i);
                (o || Ae.get(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            o || !1 === i.queue ? this.each(s) : this.queue(i.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , o = null != e && e + "queueHooks"
                  , i = he.timers
                  , s = Ae.get(this);
                if (o)
                    s[o] && s[o].stop && r(s[o]);
                else
                    for (o in s)
                        s[o] && s[o].stop && pt.test(o) && r(s[o]);
                for (o = i.length; o--; )
                    i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n),
                    t = !1,
                    i.splice(o, 1));
                !t && n || he.dequeue(this, e)
            })
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"),
            this.each(function() {
                var t, n = Ae.get(this), r = n[e + "queue"], o = n[e + "queueHooks"], i = he.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                he.queue(this, e, []),
                o && o.stop && o.stop.call(this, !0),
                t = i.length; t--; )
                    i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0),
                    i.splice(t, 1));
                for (t = 0; t < s; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    he.each(["toggle", "show", "hide"], function(e, t) {
        var n = he.fn[t];
        he.fn[t] = function(e, r, o) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(W(t, !0), e, r, o)
        }
    }),
    he.each({
        slideDown: W("show"),
        slideUp: W("hide"),
        slideToggle: W("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        he.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    he.timers = [],
    he.fx.tick = function() {
        var e, t = 0, n = he.timers;
        for (ut = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || he.fx.stop(),
        ut = void 0
    }
    ,
    he.fx.timer = function(e) {
        he.timers.push(e),
        he.fx.start()
    }
    ,
    he.fx.interval = 13,
    he.fx.start = function() {
        dt || (dt = !0,
        M())
    }
    ,
    he.fx.stop = function() {
        dt = null
    }
    ,
    he.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    he.fn.delay = function(t, n) {
        return t = he.fx && he.fx.speeds[t] || t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var o = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(o)
            }
        })
    }
    ,
    function() {
        var e = Z.createElement("input")
          , t = Z.createElement("select").appendChild(Z.createElement("option"));
        e.type = "checkbox",
        ue.checkOn = "" !== e.value,
        ue.optSelected = t.selected,
        (e = Z.createElement("input")).value = "t",
        e.type = "radio",
        ue.radioValue = "t" === e.value
    }();
    var ht, mt = he.expr.attrHandle;
    he.fn.extend({
        attr: function(e, t) {
            return Pe(this, he.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                he.removeAttr(this, e)
            })
        }
    }),
    he.extend({
        attr: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return void 0 === e.getAttribute ? he.prop(e, t, n) : (1 === i && he.isXMLDoc(e) || (o = he.attrHooks[t.toLowerCase()] || (he.expr.match.bool.test(t) ? ht : void 0)),
                void 0 !== n ? null === n ? void he.removeAttr(e, t) : o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : o && "get"in o && null !== (r = o.get(e, t)) ? r : null == (r = he.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ue.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, o = t && t.match(Ce);
            if (o && 1 === e.nodeType)
                for (; n = o[r++]; )
                    e.removeAttribute(n)
        }
    }),
    ht = {
        set: function(e, t, n) {
            return !1 === t ? he.removeAttr(e, n) : e.setAttribute(n, n),
            n
        }
    },
    he.each(he.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = mt[t] || he.find.attr;
        mt[t] = function(e, t, r) {
            var o, i, s = t.toLowerCase();
            return r || (i = mt[s],
            mt[s] = o,
            o = null != n(e, t, r) ? s : null,
            mt[s] = i),
            o
        }
    });
    var gt = /^(?:input|select|textarea|button)$/i
      , vt = /^(?:a|area)$/i;
    he.fn.extend({
        prop: function(e, t) {
            return Pe(this, he.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[he.propFix[e] || e]
            })
        }
    }),
    he.extend({
        prop: function(e, t, n) {
            var r, o, i = e.nodeType;
            if (3 !== i && 8 !== i && 2 !== i)
                return 1 === i && he.isXMLDoc(e) || (t = he.propFix[t] || t,
                o = he.propHooks[t]),
                void 0 !== n ? o && "set"in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get"in o && null !== (r = o.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = he.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : gt.test(e.nodeName) || vt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    ue.optSelected || (he.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex,
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    he.each(["tabIndex", "readOnly", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        he.propFix[this.toLowerCase()] = this
    }),
    he.fn.extend({
        addClass: function(e) {
            var t, n, r, o, i, s, a, l = 0;
            if (de(e))
                return this.each(function(t) {
                    he(this).addClass(e.call(this, t, X(this)))
                });
            if ((t = Y(e)).length)
                for (; n = this[l++]; )
                    if (o = X(n),
                    r = 1 === n.nodeType && " " + U(o) + " ") {
                        for (s = 0; i = t[s++]; )
                            r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                        o !== (a = U(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, o, i, s, a, l = 0;
            if (de(e))
                return this.each(function(t) {
                    he(this).removeClass(e.call(this, t, X(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ((t = Y(e)).length)
                for (; n = this[l++]; )
                    if (o = X(n),
                    r = 1 === n.nodeType && " " + U(o) + " ") {
                        for (s = 0; i = t[s++]; )
                            for (; r.indexOf(" " + i + " ") > -1; )
                                r = r.replace(" " + i + " ", " ");
                        o !== (a = U(r)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e
              , r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r ? t ? this.addClass(e) : this.removeClass(e) : de(e) ? this.each(function(n) {
                he(this).toggleClass(e.call(this, n, X(this), t), t)
            }) : this.each(function() {
                var t, o, i, s;
                if (r)
                    for (o = 0,
                    i = he(this),
                    s = Y(e); t = s[o++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    void 0 !== e && "boolean" !== n || ((t = X(this)) && Ae.set(this, "__className__", t),
                    this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ae.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + U(X(n)) + " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    });
    var bt = /\r/g;
    he.fn.extend({
        val: function(e) {
            var t, n, r, o = this[0];
            return arguments.length ? (r = de(e),
            this.each(function(n) {
                var o;
                1 === this.nodeType && (null == (o = r ? e.call(this, n, he(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : Array.isArray(o) && (o = he.map(o, function(e) {
                    return null == e ? "" : e + ""
                })),
                (t = he.valHooks[this.type] || he.valHooks[this.nodeName.toLowerCase()]) && "set"in t && void 0 !== t.set(this, o, "value") || (this.value = o))
            })) : o ? (t = he.valHooks[o.type] || he.valHooks[o.nodeName.toLowerCase()]) && "get"in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(bt, "") : null == n ? "" : n : void 0
        }
    }),
    he.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = he.find.attr(e, "value");
                    return null != t ? t : U(he.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options, s = e.selectedIndex, a = "select-one" === e.type, l = a ? null : [], c = a ? s + 1 : o.length;
                    for (r = s < 0 ? c : a ? s : 0; r < c; r++)
                        if (((n = o[r]).selected || r === s) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = he(n).val(),
                            a)
                                return t;
                            l.push(t)
                        }
                    return l
                },
                set: function(e, t) {
                    for (var n, r, o = e.options, i = he.makeArray(t), s = o.length; s--; )
                        ((r = o[s]).selected = he.inArray(he.valHooks.option.get(r), i) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    he.each(["radio", "checkbox"], function() {
        he.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t))
                    return e.checked = he.inArray(he(e).val(), t) > -1
            }
        },
        ue.checkOn || (he.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    }),
    ue.focusin = "onfocusin"in e;
    var yt = /^(?:focusinfocus|focusoutblur)$/
      , _t = function(e) {
        e.stopPropagation()
    };
    he.extend(he.event, {
        trigger: function(t, n, r, o) {
            var i, s, a, l, c, u, d, f, p = [r || Z], h = ae.call(t, "type") ? t.type : t, m = ae.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = f = a = r = r || Z,
            3 !== r.nodeType && 8 !== r.nodeType && !yt.test(h + he.event.triggered) && (h.indexOf(".") > -1 && (h = (m = h.split(".")).shift(),
            m.sort()),
            c = h.indexOf(":") < 0 && "on" + h,
            (t = t[he.expando] ? t : new he.Event(h,"object" == typeof t && t)).isTrigger = o ? 2 : 3,
            t.namespace = m.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : he.makeArray(n, [t]),
            d = he.event.special[h] || {},
            o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
                if (!o && !d.noBubble && !fe(r)) {
                    for (l = d.delegateType || h,
                    yt.test(l + h) || (s = s.parentNode); s; s = s.parentNode)
                        p.push(s),
                        a = s;
                    a === (r.ownerDocument || Z) && p.push(a.defaultView || a.parentWindow || e)
                }
                for (i = 0; (s = p[i++]) && !t.isPropagationStopped(); )
                    f = s,
                    t.type = i > 1 ? l : d.bindType || h,
                    (u = (Ae.get(s, "events") || {})[t.type] && Ae.get(s, "handle")) && u.apply(s, n),
                    (u = c && s[c]) && u.apply && Ie(s) && (t.result = u.apply(s, n),
                    !1 === t.result && t.preventDefault());
                return t.type = h,
                o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), n) || !Ie(r) || c && de(r[h]) && !fe(r) && ((a = r[c]) && (r[c] = null),
                he.event.triggered = h,
                t.isPropagationStopped() && f.addEventListener(h, _t),
                r[h](),
                t.isPropagationStopped() && f.removeEventListener(h, _t),
                he.event.triggered = void 0,
                a && (r[c] = a)),
                t.result
            }
        },
        simulate: function(e, t, n) {
            var r = he.extend(new he.Event, n, {
                type: e,
                isSimulated: !0
            });
            he.event.trigger(r, null, t)
        }
    }),
    he.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                he.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n)
                return he.event.trigger(e, t, n, !0)
        }
    }),
    ue.focusin || he.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            he.event.simulate(t, e.target, he.event.fix(e))
        };
        he.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , o = Ae.access(r, t);
                o || r.addEventListener(e, n, !0),
                Ae.access(r, t, (o || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , o = Ae.access(r, t) - 1;
                o ? Ae.access(r, t, o) : (r.removeEventListener(e, n, !0),
                Ae.remove(r, t))
            }
        }
    });
    var xt = e.location
      , wt = Date.now()
      , $t = /\?/;
    he.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t)
            return null;
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (e) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || he.error("Invalid XML: " + t),
        n
    }
    ;
    var kt = /\[\]$/
      , Ct = /\r?\n/g
      , Et = /^(?:submit|button|image|reset|file)$/i
      , Tt = /^(?:input|select|textarea|keygen)/i;
    he.param = function(e, t) {
        var n, r = [], o = function(e, t) {
            var n = de(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(e) || e.jquery && !he.isPlainObject(e))
            he.each(e, function() {
                o(this.name, this.value)
            });
        else
            for (n in e)
                V(n, e[n], t, o);
        return r.join("&")
    }
    ,
    he.fn.extend({
        serialize: function() {
            return he.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = he.prop(this, "elements");
                return e ? he.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !he(this).is(":disabled") && Tt.test(this.nodeName) && !Et.test(e) && (this.checked || !We.test(e))
            }).map(function(e, t) {
                var n = he(this).val();
                return null == n ? null : Array.isArray(n) ? he.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                }
            }).get()
        }
    });
    var Pt = /%20/g
      , St = /#.*$/
      , Dt = /([?&])_=[^&]*/
      , It = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , At = /^(?:GET|HEAD)$/
      , Nt = /^\/\//
      , jt = {}
      , Lt = {}
      , Ot = "*/".concat("*")
      , Ht = Z.createElement("a");
    Ht.href = xt.href,
    he.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ot,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": he.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? J(J(e, he.ajaxSettings), t) : J(he.ajaxSettings, e)
        },
        ajaxPrefilter: Q(jt),
        ajaxTransport: Q(Lt),
        ajax: function(t, n) {
            function r(t, n, r, a) {
                var c, f, p, _, x, w = n;
                u || (u = !0,
                l && e.clearTimeout(l),
                o = void 0,
                s = a || "",
                $.readyState = t > 0 ? 4 : 0,
                c = t >= 200 && t < 300 || 304 === t,
                r && (_ = function(e, t, n) {
                    for (var r, o, i, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (o in a)
                            if (a[o] && a[o].test(r)) {
                                l.unshift(o);
                                break
                            }
                    if (l[0]in n)
                        i = l[0];
                    else {
                        for (o in n) {
                            if (!l[0] || e.converters[o + " " + l[0]]) {
                                i = o;
                                break
                            }
                            s || (s = o)
                        }
                        i = i || s
                    }
                    if (i)
                        return i !== l[0] && l.unshift(i),
                        n[i]
                }(h, $, r)),
                _ = function(e, t, n, r) {
                    var o, i, s, a, l, c = {}, u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters)
                            c[s.toLowerCase()] = e.converters[s];
                    for (i = u.shift(); i; )
                        if (e.responseFields[i] && (n[e.responseFields[i]] = t),
                        !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        l = i,
                        i = u.shift())
                            if ("*" === i)
                                i = l;
                            else if ("*" !== l && l !== i) {
                                if (!(s = c[l + " " + i] || c["* " + i]))
                                    for (o in c)
                                        if ((a = o.split(" "))[1] === i && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === s ? s = c[o] : !0 !== c[o] && (i = a[0],
                                            u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && e.throws)
                                        t = s(t);
                                    else
                                        try {
                                            t = s(t)
                                        } catch (e) {
                                            return {
                                                state: "parsererror",
                                                error: s ? e : "No conversion from " + l + " to " + i
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: t
                    }
                }(h, _, $, c),
                c ? (h.ifModified && ((x = $.getResponseHeader("Last-Modified")) && (he.lastModified[i] = x),
                (x = $.getResponseHeader("etag")) && (he.etag[i] = x)),
                204 === t || "HEAD" === h.type ? w = "nocontent" : 304 === t ? w = "notmodified" : (w = _.state,
                f = _.data,
                c = !(p = _.error))) : (p = w,
                !t && w || (w = "error",
                t < 0 && (t = 0))),
                $.status = t,
                $.statusText = (n || w) + "",
                c ? v.resolveWith(m, [f, w, $]) : v.rejectWith(m, [$, w, p]),
                $.statusCode(y),
                y = void 0,
                d && g.trigger(c ? "ajaxSuccess" : "ajaxError", [$, h, c ? f : p]),
                b.fireWith(m, [$, w]),
                d && (g.trigger("ajaxComplete", [$, h]),
                --he.active || he.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var o, i, s, a, l, c, u, d, f, p, h = he.ajaxSetup({}, n), m = h.context || h, g = h.context && (m.nodeType || m.jquery) ? he(m) : he.event, v = he.Deferred(), b = he.Callbacks("once memory"), y = h.statusCode || {}, _ = {}, x = {}, w = "canceled", $ = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (u) {
                        if (!a)
                            for (a = {}; t = It.exec(s); )
                                a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return u ? s : null
                },
                setRequestHeader: function(e, t) {
                    return null == u && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                    _[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return null == u && (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (u)
                            $.always(e[$.status]);
                        else
                            for (t in e)
                                y[t] = [y[t], e[t]];
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return o && o.abort(t),
                    r(0, t),
                    this
                }
            };
            if (v.promise($),
            h.url = ((t || h.url || xt.href) + "").replace(Nt, xt.protocol + "//"),
            h.type = n.method || n.type || h.method || h.type,
            h.dataTypes = (h.dataType || "*").toLowerCase().match(Ce) || [""],
            null == h.crossDomain) {
                c = Z.createElement("a");
                try {
                    c.href = h.url,
                    c.href = c.href,
                    h.crossDomain = Ht.protocol + "//" + Ht.host != c.protocol + "//" + c.host
                } catch (e) {
                    h.crossDomain = !0
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = he.param(h.data, h.traditional)),
            G(jt, h, n, $),
            u)
                return $;
            for (f in (d = he.event && h.global) && 0 == he.active++ && he.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !At.test(h.type),
            i = h.url.replace(St, ""),
            h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Pt, "+")) : (p = h.url.slice(i.length),
            h.data && (h.processData || "string" == typeof h.data) && (i += ($t.test(i) ? "&" : "?") + h.data,
            delete h.data),
            !1 === h.cache && (i = i.replace(Dt, "$1"),
            p = ($t.test(i) ? "&" : "?") + "_=" + wt++ + p),
            h.url = i + p),
            h.ifModified && (he.lastModified[i] && $.setRequestHeader("If-Modified-Since", he.lastModified[i]),
            he.etag[i] && $.setRequestHeader("If-None-Match", he.etag[i])),
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && $.setRequestHeader("Content-Type", h.contentType),
            $.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ot + "; q=0.01" : "") : h.accepts["*"]),
            h.headers)
                $.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(m, $, h) || u))
                return $.abort();
            if (w = "abort",
            b.add(h.complete),
            $.done(h.success),
            $.fail(h.error),
            o = G(Lt, h, n, $)) {
                if ($.readyState = 1,
                d && g.trigger("ajaxSend", [$, h]),
                u)
                    return $;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    $.abort("timeout")
                }, h.timeout));
                try {
                    u = !1,
                    o.send(_, r)
                } catch (e) {
                    if (u)
                        throw e;
                    r(-1, e)
                }
            } else
                r(-1, "No Transport");
            return $
        },
        getJSON: function(e, t, n) {
            return he.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return he.get(e, void 0, t, "script")
        }
    }),
    he.each(["get", "post"], function(e, t) {
        he[t] = function(e, n, r, o) {
            return de(n) && (o = o || r,
            r = n,
            n = void 0),
            he.ajax(he.extend({
                url: e,
                type: t,
                dataType: o,
                data: n,
                success: r
            }, he.isPlainObject(e) && e))
        }
    }),
    he._evalUrl = function(e) {
        return he.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    he.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (de(e) && (e = e.call(this[0])),
            t = he(e, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && t.insertBefore(this[0]),
            t.map(function() {
                for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                return e
            }).append(this)),
            this
        },
        wrapInner: function(e) {
            return de(e) ? this.each(function(t) {
                he(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = he(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = de(e);
            return this.each(function(n) {
                he(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                he(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    he.expr.pseudos.hidden = function(e) {
        return !he.expr.pseudos.visible(e)
    }
    ,
    he.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }
    ,
    he.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var qt = {
        0: 200,
        1223: 204
    }
      , Bt = he.ajaxSettings.xhr();
    ue.cors = !!Bt && "withCredentials"in Bt,
    ue.ajax = Bt = !!Bt,
    he.ajaxTransport(function(t) {
        var n, r;
        if (ue.cors || Bt && !t.crossDomain)
            return {
                send: function(o, i) {
                    var s, a = t.xhr();
                    if (a.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (s in t.xhrFields)
                            a[s] = t.xhrFields[s];
                    for (s in t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType),
                    t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"),
                    o)
                        a.setRequestHeader(s, o[s]);
                    n = function(e) {
                        return function() {
                            n && (n = r = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null,
                            "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? i(0, "error") : i(a.status, a.statusText) : i(qt[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    r = a.onerror = a.ontimeout = n("error"),
                    void 0 !== a.onabort ? a.onabort = r : a.onreadystatechange = function() {
                        4 === a.readyState && e.setTimeout(function() {
                            n && r()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (e) {
                        if (n)
                            throw e
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    he.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }),
    he.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return he.globalEval(e),
                e
            }
        }
    }),
    he.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET")
    }),
    he.ajaxTransport("script", function(e) {
        var t, n;
        if (e.crossDomain)
            return {
                send: function(r, o) {
                    t = he("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(),
                        n = null,
                        e && o("error" === e.type ? 404 : 200, e.type)
                    }
                    ),
                    Z.head.appendChild(t[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var Mt = []
      , Rt = /(=)\?(?=&|$)|\?\?/;
    he.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mt.pop() || he.expando + "_" + wt++;
            return this[e] = !0,
            e
        }
    }),
    he.ajaxPrefilter("json jsonp", function(t, n, r) {
        var o, i, s, a = !1 !== t.jsonp && (Rt.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Rt.test(t.data) && "data");
        if (a || "jsonp" === t.dataTypes[0])
            return o = t.jsonpCallback = de(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
            a ? t[a] = t[a].replace(Rt, "$1" + o) : !1 !== t.jsonp && (t.url += ($t.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
            t.converters["script json"] = function() {
                return s || he.error(o + " was not called"),
                s[0]
            }
            ,
            t.dataTypes[0] = "json",
            i = e[o],
            e[o] = function() {
                s = arguments
            }
            ,
            r.always(function() {
                void 0 === i ? he(e).removeProp(o) : e[o] = i,
                t[o] && (t.jsonpCallback = n.jsonpCallback,
                Mt.push(o)),
                s && de(i) && i(s[0]),
                s = i = void 0
            }),
            "script"
    }),
    ue.createHTMLDocument = function() {
        var e = Z.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length
    }(),
    he.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
        t = !1),
        t || (ue.createHTMLDocument ? ((r = (t = Z.implementation.createHTMLDocument("")).createElement("base")).href = Z.location.href,
        t.head.appendChild(r)) : t = Z),
        i = !n && [],
        (o = _e.exec(e)) ? [t.createElement(o[1])] : (o = x([e], t, i),
        i && i.length && he(i).remove(),
        he.merge([], o.childNodes)));
        var r, o, i
    }
    ,
    he.fn.load = function(e, t, n) {
        var r, o, i, s = this, a = e.indexOf(" ");
        return a > -1 && (r = U(e.slice(a)),
        e = e.slice(0, a)),
        de(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (o = "POST"),
        s.length > 0 && he.ajax({
            url: e,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            i = arguments,
            s.html(r ? he("<div>").append(he.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, i || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    he.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        he.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    he.expr.pseudos.animated = function(e) {
        return he.grep(he.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    he.offset = {
        setOffset: function(e, t, n) {
            var r, o, i, s, a, l, c = he.css(e, "position"), u = he(e), d = {};
            "static" === c && (e.style.position = "relative"),
            a = u.offset(),
            i = he.css(e, "top"),
            l = he.css(e, "left"),
            ("absolute" === c || "fixed" === c) && (i + l).indexOf("auto") > -1 ? (s = (r = u.position()).top,
            o = r.left) : (s = parseFloat(i) || 0,
            o = parseFloat(l) || 0),
            de(t) && (t = t.call(e, n, he.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + o),
            "using"in t ? t.using.call(e, d) : u.css(d)
        }
    },
    he.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    he.offset.setOffset(this, e, t)
                });
            var t, n, r = this[0];
            return r ? r.getClientRects().length ? (t = r.getBoundingClientRect(),
            n = r.ownerDocument.defaultView,
            {
                top: t.top + n.pageYOffset,
                left: t.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0], o = {
                    top: 0,
                    left: 0
                };
                if ("fixed" === he.css(r, "position"))
                    t = r.getBoundingClientRect();
                else {
                    for (t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === he.css(e, "position"); )
                        e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((o = he(e).offset()).top += he.css(e, "borderTopWidth", !0),
                    o.left += he.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - o.top - he.css(r, "marginTop", !0),
                    left: t.left - o.left - he.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === he.css(e, "position"); )
                    e = e.offsetParent;
                return e || Ye
            })
        }
    }),
    he.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        he.fn[e] = function(r) {
            return Pe(this, function(e, r, o) {
                var i;
                if (fe(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                void 0 === o)
                    return i ? i[t] : e[r];
                i ? i.scrollTo(n ? i.pageXOffset : o, n ? o : i.pageYOffset) : e[r] = o
            }, e, r, arguments.length)
        }
    }),
    he.each(["top", "left"], function(e, t) {
        he.cssHooks[t] = j(ue.pixelPosition, function(e, n) {
            if (n)
                return n = N(e, t),
                tt.test(n) ? he(e).position()[t] + "px" : n
        })
    }),
    he.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        he.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            he.fn[r] = function(o, i) {
                var s = arguments.length && (n || "boolean" != typeof o)
                  , a = n || (!0 === o || !0 === i ? "margin" : "border");
                return Pe(this, function(t, n, o) {
                    var i;
                    return fe(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === o ? he.css(t, n, a) : he.style(t, n, o, a)
                }, t, s ? o : void 0, s)
            }
        })
    }),
    he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        he.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    he.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }),
    he.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    he.proxy = function(e, t) {
        var n, r, o;
        if ("string" == typeof t && (n = e[t],
        t = e,
        e = n),
        de(e))
            return r = te.call(arguments, 2),
            (o = function() {
                return e.apply(t || this, r.concat(te.call(arguments)))
            }
            ).guid = e.guid = e.guid || he.guid++,
            o
    }
    ,
    he.holdReady = function(e) {
        e ? he.readyWait++ : he.ready(!0)
    }
    ,
    he.isArray = Array.isArray,
    he.parseJSON = JSON.parse,
    he.nodeName = i,
    he.isFunction = de,
    he.isWindow = fe,
    he.camelCase = p,
    he.type = r,
    he.now = Date.now,
    he.isNumeric = function(e) {
        var t = he.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }
    ,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return he
    });
    var Wt = e.jQuery
      , zt = e.$;
    return he.noConflict = function(t) {
        return e.$ === he && (e.$ = zt),
        t && e.jQuery === he && (e.jQuery = Wt),
        he
    }
    ,
    t || (e.jQuery = e.$ = he),
    he
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(n) {
        return t(n, e, e.document)
    }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), e, e.document) : t(jQuery, e, e.document)
}("undefined" != typeof window ? window : this, function(e, t, n, r) {
    "use strict";
    function o() {
        return w.height() + j.offset
    }
    function i(n, r, i, s) {
        if (y === n && (i = !1),
        !0 === T)
            return !0;
        if (m[n]) {
            if (k = !1,
            !0 === D && (j.afterRender(),
            D = !1),
            i && "function" == typeof j.before && !1 === j.before(n, g))
                return !0;
            if (_ = 1,
            A = h[n],
            !1 === D && y > n && !1 === s && v[n] && (u = o(),
            _ = parseInt(g[n].outerHeight() / u),
            A = parseInt(h[n]) + (g[n].outerHeight() - u)),
            j.updateHash && j.sectionName && (!0 !== D || 0 !== n))
                if (history.pushState)
                    try {
                        history.replaceState(null, null, m[n])
                    } catch (e) {
                        t.console && console.warn("Scrollify warning: Page must be hosted to manipulate the hash value.")
                    }
                else
                    t.location.hash = m[n];
            if (y = n,
            r)
                e(j.target).stop().scrollTop(A),
                i && j.after(n, g);
            else {
                if (C = !0,
                e().velocity ? e(j.target).stop().velocity("scroll", {
                    duration: j.scrollSpeed,
                    easing: j.easing,
                    offset: A,
                    mobileHA: !1
                }) : e(j.target).stop().animate({
                    scrollTop: A
                }, j.scrollSpeed, j.easing),
                t.location.hash.length && j.sectionName && t.console)
                    try {
                        e(t.location.hash).length && console.warn("Scrollify warning: ID matches hash value - this will cause the page to anchor.")
                    } catch (e) {}
                e(j.target).promise().done(function() {
                    C = !1,
                    D = !1,
                    i && j.after(n, g)
                })
            }
        }
    }
    function s(e) {
        function t(t) {
            for (var n = 0, r = e.slice(Math.max(e.length - t, 1)), o = 0; o < r.length; o++)
                n += r[o];
            return Math.ceil(n / t)
        }
        return t(10) >= t(70)
    }
    function a(e, t) {
        for (var n = m.length; n >= 0; n--)
            "string" == typeof e ? m[n] === e && (b = n,
            i(n, t, !0, !0)) : n === e && (b = n,
            i(n, t, !0, !0))
    }
    var l, c, u, d, f, p, h = [], m = [], g = [], v = [], b = 0, y = 0, _ = 1, x = !1, w = e(t), $ = w.scrollTop(), k = !1, C = !1, E = !1, T = !1, P = [], S = (new Date).getTime(), D = !0, I = !1, A = 0, N = "onwheel"in n ? "wheel" : n.onmousewheel !== r ? "mousewheel" : "DOMMouseScroll", j = {
        section: ".section",
        sectionName: "section-name",
        interstitialSection: "",
        easing: "easeOutExpo",
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: !0,
        target: "html,body",
        standardScrollElements: ".about_us__seoWrap_text, .about_us__seoWrap_text, .scroll-wrapper, .scroll-scrolly_visible, .scroll-content",
        setHeights: !0,
        overflowScroll: !0,
        updateHash: !0,
        touchScroll: !0,
        before: function() {},
        after: function() {},
        afterResize: function() {},
        afterRender: function() {}
    }, L = function(r) {
        function a(t) {
            e().velocity ? e(j.target).stop().velocity("scroll", {
                duration: j.scrollSpeed,
                easing: j.easing,
                offset: t,
                mobileHA: !1
            }) : e(j.target).stop().animate({
                scrollTop: t
            }, j.scrollSpeed, j.easing)
        }
        function y(t) {
            t && ($ = w.scrollTop());
            var n = j.section;
            v = [],
            j.interstitialSection.length && (n += "," + j.interstitialSection),
            !1 === j.scrollbars && (j.overflowScroll = !1),
            u = o(),
            e(n).each(function(t) {
                var n = e(this);
                j.setHeights ? n.is(j.interstitialSection) ? v[t] = !1 : n.css("height", "auto").outerHeight() < u || "hidden" === n.css("overflow") ? (n.css({
                    height: u
                }),
                v[t] = !1) : (n.css({
                    height: n.height()
                }),
                j.overflowScroll ? v[t] = !0 : v[t] = !1) : n.outerHeight() < u || !1 === j.overflowScroll ? v[t] = !1 : v[t] = !0
            }),
            t && w.scrollTop($)
        }
        function D(n, r) {
            var o = j.section;
            j.interstitialSection.length && (o += "," + j.interstitialSection),
            h = [],
            m = [],
            g = [],
            e(o).each(function(n) {
                var r = e(this);
                h[n] = n > 0 ? parseInt(r.offset().top) + j.offset : parseInt(r.offset().top),
                j.sectionName && r.data(j.sectionName) ? m[n] = "#" + r.data(j.sectionName).toString().replace(/ /g, "-") : !1 === r.is(j.interstitialSection) ? m[n] = "#" + (n + 1) : (m[n] = "#",
                n === e(o).length - 1 && n > 1 && (h[n] = h[n - 1] + (parseInt(e(e(o)[n - 1]).outerHeight()) - parseInt(e(t).height())) + parseInt(r.outerHeight()))),
                g[n] = r;
                try {
                    e(m[n]).length && t.console && console.warn("Scrollify warning: Section names can't match IDs - this will cause the browser to anchor.")
                } catch (e) {}
                t.location.hash === m[n] && (b = n,
                x = !0)
            }),
            !0 === n && i(b, !1, !1, !1)
        }
        function A() {
            return !(v[b] && ($ = w.scrollTop()) > parseInt(h[b]))
        }
        function L() {
            return !(v[b] && ($ = w.scrollTop(),
            u = o(),
            $ < parseInt(h[b]) + (g[b].outerHeight() - u) - 28))
        }
        I = !0,
        e.easing.easeOutExpo = function(e, t, n, r, o) {
            return t == o ? n + r : r * (1 - Math.pow(2, -10 * t / o)) + n
        }
        ,
        d = {
            handleMousedown: function() {
                if (!0 === T)
                    return !0;
                k = !1,
                E = !1
            },
            handleMouseup: function() {
                if (!0 === T)
                    return !0;
                k = !0,
                E && d.calculateNearest(!1, !0)
            },
            handleScroll: function() {
                if (!0 === T)
                    return !0;
                l && clearTimeout(l),
                l = setTimeout(function() {
                    if (E = !0,
                    !1 === k)
                        return !1;
                    k = !1,
                    d.calculateNearest(!1, !0)
                }, 200)
            },
            calculateNearest: function(e, t) {
                $ = w.scrollTop();
                for (var n, r = 1, o = h.length, s = 0, a = Math.abs(h[0] - $); r < o; r++)
                    (n = Math.abs(h[r] - $)) < a && (a = n,
                    s = r);
                (L() && s > b || A()) && (b = s,
                i(s, e, t, !1))
            },
            wheelHandler: function(n) {
                if (!0 === T)
                    return !0;
                if (j.standardScrollElements && (e(n.target).is(j.standardScrollElements) || e(n.target).closest(j.standardScrollElements).length))
                    return !0;
                v[b] || n.preventDefault();
                var r = (new Date).getTime()
                  , o = (n = n || t.event).originalEvent.wheelDelta || -n.originalEvent.deltaY || -n.originalEvent.detail
                  , a = Math.max(-1, Math.min(1, o));
                if (P.length > 149 && P.shift(),
                P.push(Math.abs(o)),
                r - S > 200 && (P = []),
                S = r,
                C)
                    return !1;
                if (a < 0) {
                    if (b < h.length - 1 && L()) {
                        if (!s(P))
                            return !1;
                        n.preventDefault(),
                        C = !0,
                        i(++b, !1, !0, !1)
                    }
                } else if (a > 0 && b > 0 && A()) {
                    if (!s(P))
                        return !1;
                    n.preventDefault(),
                    C = !0,
                    i(--b, !1, !0, !1)
                }
            },
            keyHandler: function(t) {
                return !0 === T || !1 === n.activeElement.readOnly || !(!j.standardScrollElements || !e(t.target).is(j.standardScrollElements) && !e(t.target).closest(j.standardScrollElements).length) || !0 !== C && void (38 == t.keyCode || 33 == t.keyCode ? b > 0 && A() && (t.preventDefault(),
                b--,
                i(b, !1, !0, !1)) : 40 != t.keyCode && 34 != t.keyCode || b < h.length - 1 && L() && (t.preventDefault(),
                b++,
                i(b, !1, !0, !1)))
            },
            init: function() {
                j.scrollbars ? (w.on("mousedown", d.handleMousedown),
                w.on("mouseup", d.handleMouseup),
                w.on("scroll", d.handleScroll)) : e("body").css({
                    overflow: "block"
                }),
                w.on(N, d.wheelHandler),
                w.on("keydown", d.keyHandler)
            }
        },
        f = {
            touches: {
                touchstart: {
                    y: -1,
                    x: -1
                },
                touchmove: {
                    y: -1,
                    x: -1
                },
                touchend: !1,
                direction: "undetermined"
            },
            options: {
                distance: 30,
                timeGap: 800,
                timeStamp: (new Date).getTime()
            },
            touchHandler: function(t) {
                if (!0 === T)
                    return !0;
                if (j.standardScrollElements && (e(t.target).is(j.standardScrollElements) || e(t.target).closest(j.standardScrollElements).length))
                    return !0;
                var n;
                if (void 0 !== t && void 0 !== t.touches)
                    switch (n = t.touches[0],
                    t.type) {
                    case "touchstart":
                        f.touches.touchstart.y = n.pageY,
                        f.touches.touchmove.y = -1,
                        f.touches.touchstart.x = n.pageX,
                        f.touches.touchmove.x = -1,
                        f.options.timeStamp = (new Date).getTime(),
                        f.touches.touchend = !1;
                    case "touchmove":
                        f.touches.touchmove.y = n.pageY,
                        f.touches.touchmove.x = n.pageX,
                        f.touches.touchstart.y !== f.touches.touchmove.y && Math.abs(f.touches.touchstart.y - f.touches.touchmove.y) > Math.abs(f.touches.touchstart.x - f.touches.touchmove.x) && (t.preventDefault(),
                        f.touches.direction = "y",
                        f.options.timeStamp + f.options.timeGap < (new Date).getTime() && 0 == f.touches.touchend && (f.touches.touchend = !0,
                        f.touches.touchstart.y > -1 && Math.abs(f.touches.touchmove.y - f.touches.touchstart.y) > f.options.distance && (f.touches.touchstart.y < f.touches.touchmove.y ? f.up() : f.down())));
                        break;
                    case "touchend":
                        !1 === f.touches[t.type] && (f.touches[t.type] = !0,
                        f.touches.touchstart.y > -1 && f.touches.touchmove.y > -1 && "y" === f.touches.direction && (Math.abs(f.touches.touchmove.y - f.touches.touchstart.y) > f.options.distance && (f.touches.touchstart.y < f.touches.touchmove.y ? f.up() : f.down()),
                        f.touches.touchstart.y = -1,
                        f.touches.touchstart.x = -1,
                        f.touches.direction = "undetermined"))
                    }
            },
            down: function() {
                b < h.length && (L() && b < h.length - 1 ? i(++b, !1, !0, !1) : (u = o(),
                Math.floor(g[b].height() / u) > _ ? (a(parseInt(h[b]) + u * _),
                _ += 1) : a(parseInt(h[b]) + (g[b].outerHeight() - u))))
            },
            up: function() {
                b >= 0 && (A() && b > 0 ? i(--b, !1, !0, !1) : _ > 2 ? (u = o(),
                _ -= 1,
                a(parseInt(h[b]) + u * _)) : (_ = 1,
                a(parseInt(h[b]))))
            },
            init: function() {
                if (n.addEventListener && j.touchScroll) {
                    var e = {
                        passive: !1
                    };
                    n.addEventListener("touchstart", f.touchHandler, e),
                    n.addEventListener("touchmove", f.touchHandler, e),
                    n.addEventListener("touchend", f.touchHandler, e)
                }
            }
        },
        p = {
            refresh: function(e, t) {
                clearTimeout(c),
                c = setTimeout(function() {
                    y(!0),
                    D(t),
                    e && j.afterResize()
                }, 400)
            },
            handleUpdate: function() {
                p.refresh(!1, !1)
            },
            handleResize: function() {
                p.refresh(!0, !1)
            },
            handleOrientation: function() {
                p.refresh(!0, !0)
            }
        },
        j = e.extend(j, r),
        y(!1),
        D(!1),
        !0 === x ? i(b, !1, !0, !0) : setTimeout(function() {
            d.calculateNearest(!0, !1)
        }, 200),
        h.length && (d.init(),
        f.init(),
        w.on("resize", p.handleResize),
        n.addEventListener && t.addEventListener("orientationchange", p.handleOrientation, !1))
    };
    return L.move = function(t) {
        if (t === r)
            return !1;
        t.originalEvent && (t = e(this).attr("href")),
        a(t, !1)
    }
    ,
    L.instantMove = function(e) {
        if (e === r)
            return !1;
        a(e, !0)
    }
    ,
    L.next = function() {
        b < m.length && i(b += 1, !1, !0, !0)
    }
    ,
    L.previous = function() {
        b > 0 && i(b -= 1, !1, !0, !0)
    }
    ,
    L.instantNext = function() {
        b < m.length && i(b += 1, !0, !0, !0)
    }
    ,
    L.instantPrevious = function() {
        b > 0 && i(b -= 1, !0, !0, !0)
    }
    ,
    L.destroy = function() {
        if (!I)
            return !1;
        j.setHeights && e(j.section).each(function() {
            e(this).css("height", "auto")
        }),
        w.off("resize", p.handleResize),
        j.scrollbars && (w.off("mousedown", d.handleMousedown),
        w.off("mouseup", d.handleMouseup),
        w.off("scroll", d.handleScroll)),
        w.off(N, d.wheelHandler),
        w.off("keydown", d.keyHandler),
        n.addEventListener && j.touchScroll && (n.removeEventListener("touchstart", f.touchHandler, !1),
        n.removeEventListener("touchmove", f.touchHandler, !1),
        n.removeEventListener("touchend", f.touchHandler, !1)),
        h = [],
        m = [],
        g = [],
        v = []
    }
    ,
    L.update = function() {
        if (!I)
            return !1;
        p.handleUpdate()
    }
    ,
    L.current = function() {
        return g[b]
    }
    ,
    L.currentIndex = function() {
        return b
    }
    ,
    L.disable = function() {
        T = !0
    }
    ,
    L.enable = function() {
        T = !1,
        I && d.calculateNearest(!1, !1)
    }
    ,
    L.isDisabled = function() {
        return T
    }
    ,
    L.setOptions = function(n) {
        if (!I)
            return !1;
        "object" == typeof n ? (j = e.extend(j, n),
        p.handleUpdate()) : t.console && console.warn("Scrollify warning: setOptions expects an object.")
    }
    ,
    e.scrollify = L,
    L
}),

$(function() {
    $(window).width() > 960 && ($(function() {
        $(".section").css({
            height: $(window).height()
        }),
        $.scrollify({
            section: ".section",
            scrollSpeed: 800,
            scrollbars: !1,
            before: function() {
                $(".section .services_bg__text").removeClass("fadeIn"),
                $(".section .services_bg__text").addClass("animated"),
                $(".section .services_title").removeClass("fadeInLeft"),
                $(".section .services_title").addClass("animated"),
                $(".section .services_title__sub").removeClass("fadeInLeft"),
                $(".section .services_title__sub").addClass("animated"),
                $(".section .services_btn").removeClass("fadeInLeft"),
                $(".section .services_btn").addClass("animated"),
                $(".section .services_list__wrap").removeClass("fadeInLeft"),
                $(".section .services_list__wrap").addClass("animated"),
                $(".section .project_wrap").removeClass("fadeInLeft"),
                $(".section .project_wrap").addClass("animated"),
                $(".section .about_us__seoWrap").removeClass("fadeInLeft"),
                $(".section .about_us__seoWrap").addClass("animated"),
                $(".section .about_us_bg__text").removeClass("fadeIn"),
                $(".section .about_us_bg__text").addClass("animated"),
                $(".section .contact_us__bgText").removeClass("fadeInUp"),
                $(".section .contact_us__bgText").addClass("animated"),
                $(".section .contact_us__bgImg").removeClass("fadeInUp"),
                $(".section .contact_us__bgImg").addClass("animated"),
                $(".section .contact_us_bgTreangle").removeClass("fadeIn"),
                $(".section .contact_us_bgTreangle").addClass("animated"),
                $(".section .contact_us__bgText__grey").removeClass("fadeInDown"),
                $(".section .contact_us__bgText__grey").addClass("animated"),
                $(".section .contact_us__formWrap").removeClass("fadeInLeft"),
                $(".section .contact_us__formWrap").addClass("animated"),
                $(".section .contact_us__leftWrap").removeClass("fadeInRight"),
                $(".section .contact_us__leftWrap").addClass("animated"),
                $(".numberPage_item .numberPage_item__line").css("background-color", "#1E1E1E"),
                $(".numberPage_item .numberPage_item__count").css("color", "#1E1E1E"),
                $(".numberPage_item .numberPage_item__dot").css("background-color", "#1E1E1E"),
                $(".numberPage_item ").css("padding-top", "0px"),
                $(".numberPage_item ").css("padding-bottom", "0px"),
                $(".numberPage_item .numberPage_item__line").css("opacity", "0"),
                $(".numberPage_item .numberPage_item__line").css("background-color", "#1E1E1E"),
                $(".numberPage_item .numberPage_item__count").css("top", "0px"),
                $(".numberPage_item .numberPage_item__count").css("opacity", "0"),
                $(".numberPage_item .numberPage_item__count").css("color", "#1E1E1E"),
                $(".numberPage_item .numberPage_item__dot").css("background-color", "#1E1E1E"),
                0 == $.scrollify.currentIndex() && ($(".numberPage_item:nth-child(1) ").css("padding-top", "30px"),
                $(".numberPage_item:nth-child(1) ").css("padding-bottom", "60px"),
                $(".numberPage_item:nth-child(1) .numberPage_item__line").css("opacity", "1"),
                $(".numberPage_item:nth-child(1) .numberPage_item__count").css("top", "10px"),
                $(".numberPage_item:nth-child(1) .numberPage_item__count").css("opacity", "1"),
                $(".numberPage_item:nth-child(1) .numberPage_item__dot").css("background-color", "#EBD300"),
                $(".nav_container__word").css("background", 'transparent url("../img/menu.svg") no-repeat center')),
                1 == $.scrollify.currentIndex() && ($(".numberPage_item:nth-child(2) ").css("padding-top", "30px"),
                $(".numberPage_item:nth-child(2) ").css("padding-bottom", "60px"),
                $(".numberPage_item:nth-child(2) .numberPage_item__line").css("opacity", "1"),
                $(".numberPage_item:nth-child(2) .numberPage_item__count").css("top", "10px"),
                $(".numberPage_item:nth-child(2) .numberPage_item__count").css("opacity", "1"),
                $(".numberPage_item:nth-child(2) .numberPage_item__dot").css("background-color", "#EBD300"),
                $(".nav_container__word").css("background", 'transparent url("../img/web_development.svg") no-repeat center')),
                2 == $.scrollify.currentIndex() && ($(".numberPage_item:nth-child(3) ").css("padding-top", "30px"),
                $(".numberPage_item:nth-child(3) ").css("padding-bottom", "60px"),
                $(".numberPage_item:nth-child(3) .numberPage_item__line").css("opacity", "1"),
                $(".numberPage_item:nth-child(3) .numberPage_item__count").css("top", "10px"),
                $(".numberPage_item:nth-child(3) .numberPage_item__count").css("opacity", "1"),
                $(".numberPage_item:nth-child(3) .numberPage_item__dot").css("background-color", "#EBD300")),
                3 == $.scrollify.currentIndex() && ($(".numberPage_item:nth-child(4) ").css("padding-top", "30px"),
                $(".numberPage_item__count ").css("color", "white"),
                $(".numberPage_item__dot").css("background-color", "white"),
                $(".numberPage_item__line").css("background-color", "white"),
                $(".numberPage_item:nth-child(4) ").css("padding-bottom", "60px"),
                $(".numberPage_item:nth-child(4) .numberPage_item__line").css("opacity", "1"),
                $(".numberPage_item:nth-child(4) .numberPage_item__count").css("top", "10px"),
                $(".numberPage_item:nth-child(4) .numberPage_item__count").css("opacity", "1"),
                $(".numberPage_item:nth-child(4) .numberPage_item__dot").css("background-color", "#EBD300")),
                4 == $.scrollify.currentIndex() && (
                $(".numberPage_item:nth-child(5) ").css("padding-top", "30px"),
                $(".numberPage_item:nth-child(5) ").css("padding-bottom", "60px"),
                $(".numberPage_item:nth-child(5) .numberPage_item__line").css("opacity", "0"),
                $(".numberPage_item:nth-child(5) .numberPage_item__count").css("top", "10px"),
                $(".numberPage_item:nth-child(5) .numberPage_item__count").css("opacity", "1"),
                $(".numberPage_item:nth-child(5) .numberPage_item__dot").css("background-color", "#EBD300"))
            },
            after: function() {
                0 == $.scrollify.currentIndex() && $(".nav_container__word").css("background", 'transparent url("../img/menu.svg") no-repeat center'),
                1 == $.scrollify.currentIndex() && ($("#about-me .services_title").addClass("fadeInLeft"),
                $("#about-me .services_title__sub").addClass("fadeInLeft"),
                $("#about-me .services_btn").addClass("fadeInLeft"),
                $("#about-me .services_list__wrap").addClass("fadeInLeft"),
                $("#about-me .services_bg__text").addClass("fadeIn"),
                $(".nav_container__word").css("background", 'transparent url("../img/web_development.svg") no-repeat center')),
                2 == $.scrollify.currentIndex() && ($("#skills .services_title").addClass("fadeInLeft"),
                $("#skills .services_title__sub").addClass("fadeInLeft"),
                $("#skills .services_btn").addClass("fadeInLeft"),
                $("#skills .services_list__wrap").addClass("fadeInLeft"),
                $("#skills .services_bg__text").addClass("fadeIn"),
                $(".nav_container__word").css("background", 'transparent url("../img/brand_identity.svg") no-repeat center')),
                3 == $.scrollify.currentIndex() && ($("#portfolio .services_title").addClass("fadeInLeft"),
                $("#portfolio .services_title__sub").addClass("fadeInLeft"),
                $("#portfolio .services_btn").addClass("fadeInLeft"),
                $("#portfolio .services_list__wrap").addClass("fadeInLeft"),
                $("#portfolio .services_bg__text").addClass("fadeIn"),
                $(".nav_container__word").css("background", 'transparent url("../img/internet_marketing.svg") no-repeat center')),
                4 == $.scrollify.currentIndex() && (
                $("#contactMe .contact_us__bgText").addClass("fadeInUp"),
                $("#contactMe .contact_us__bgImg").addClass("fadeInUp"),
                $("#contactMe .contact_us_bgTreangle").addClass("fadeIn"),
                $("#contactMe .contact_us__bgText__grey").addClass("fadeInDown"),
                $("#contactMe .contact_us__formWrap").addClass("fadeInLeft"),
                $("#contactMe .contact_us__leftWrap").addClass("fadeInRight"),
                $("#contactMe .services_btn").addClass("fadeInLeft"),
                $(".nav_container__word").css("background", 'transparent url("../img/contact.svg") no-repeat center'))
            }
        }),
        $(".nav_menu__item a").click(function(e) {
            e.preventDefault(),
            $.scrollify.enable(),
            $.scrollify.move($(this).attr("href"))
        })
    }),
    0 == $.scrollify.currentIndex() && ($(".numberPage_item:nth-child(1) ").css("padding-top", "30px"),
    $(".numberPage_item:nth-child(1) ").css("padding-bottom", "60px"),
    $(".numberPage_item:nth-child(1) .numberPage_item__line").css("opacity", "1"),
    $(".numberPage_item:nth-child(1) .numberPage_item__count").css("top", "10px"),
    $(".numberPage_item:nth-child(1) .numberPage_item__count").css("opacity", "1"),
    $(".numberPage_item:nth-child(1) .numberPage_item__dot").css("background-color", "#EBD300"),
    $(".nav_container__word").css("background", 'transparent url("../img/menu.svg") no-repeat center'))),
    $(window).width() < 960 && $(function() {
        $(".section").css({
            height: "none"
        }),
        $.scrollify({
            section: "",
            scrollSpeed: 800,
            scrollbars: !0,
            before: function() {},
            after: function() {}
        }),
        $(".nav_menu__item a").click(function(e) {
            e.preventDefault(),
            $.scrollify.disable(),
            $.scrollify.move($(this).attr("href"))
        })
    })
}),
function(e, t) {
    if ("function" == typeof define && define.amd)
        define(["module", "exports"], t);
    else if ("undefined" != typeof exports)
        t(module, exports);
    else {
        var n = {
            exports: {}
        };
        t(n, n.exports),
        e.WOW = n.exports
    }
}(this, function(e, t) {
    "use strict";
    function n(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    function r(e, t) {
        return t.indexOf(e) >= 0
    }
    function o(e, t, n) {
        null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
    }
    function i(e, t, n) {
        null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s, a, l = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        return function(t, n, r) {
            return n && e(t.prototype, n),
            r && e(t, r),
            t
        }
    }(), c = window.WeakMap || window.MozWeakMap || function() {
        function e() {
            n(this, e),
            this.keys = [],
            this.values = []
        }
        return l(e, [{
            key: "get",
            value: function(e) {
                for (var t = 0; t < this.keys.length; t++)
                    if (this.keys[t] === e)
                        return this.values[t]
            }
        }, {
            key: "set",
            value: function(e, t) {
                for (var n = 0; n < this.keys.length; n++)
                    if (this.keys[n] === e)
                        return this.values[n] = t,
                        this;
                return this.keys.push(e),
                this.values.push(t),
                this
            }
        }]),
        e
    }(), u = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (a = s = function() {
        function e() {
            n(this, e),
            "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
        }
        return l(e, [{
            key: "observe",
            value: function() {}
        }]),
        e
    }(),
    s.notSupported = !0,
    a), d = window.getComputedStyle || function(e) {
        var t = /(\-([a-z]){1})/g;
        return {
            getPropertyValue: function(n) {
                "float" === n && (n = "styleFloat"),
                t.test(n) && n.replace(t, function(e, t) {
                    return t.toUpperCase()
                });
                var r = e.currentStyle;
                return (null != r ? r[n] : void 0) || null
            }
        }
    }
    , f = function() {
        function e() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            n(this, e),
            this.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0,
                live: !0,
                callback: null,
                scrollContainer: null,
                resetAnimation: !0
            },
            this.animate = "requestAnimationFrame"in window ? function(e) {
                return window.requestAnimationFrame(e)
            }
            : function(e) {
                return e()
            }
            ,
            this.vendors = ["moz", "webkit"],
            this.start = this.start.bind(this),
            this.resetAnimation = this.resetAnimation.bind(this),
            this.scrollHandler = this.scrollHandler.bind(this),
            this.scrollCallback = this.scrollCallback.bind(this),
            this.scrolled = !0,
            this.config = function(e, t) {
                for (var n in t)
                    if (null == e[n]) {
                        var r = t[n];
                        e[n] = r
                    }
                return e
            }(t, this.defaults),
            null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)),
            this.animationNameCache = new c,
            this.wowEvent = function(e) {
                var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1]
                  , n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2]
                  , r = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3]
                  , o = void 0;
                return null != document.createEvent ? (o = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, r) : null != document.createEventObject ? (o = document.createEventObject()).eventType = e : o.eventName = e,
                o
            }(this.config.boxClass)
        }
        return l(e, [{
            key: "init",
            value: function() {
                this.element = window.document.documentElement,
                r(document.readyState, ["interactive", "complete"]) ? this.start() : o(document, "DOMContentLoaded", this.start),
                this.finished = []
            }
        }, {
            key: "start",
            value: function() {
                var e = this;
                if (this.stopped = !1,
                this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)),
                this.all = this.boxes.slice(0),
                this.boxes.length)
                    if (this.disabled())
                        this.resetStyle();
                    else
                        for (var t = 0; t < this.boxes.length; t++) {
                            var n = this.boxes[t];
                            this.applyStyle(n, !0)
                        }
                this.disabled() || (o(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                o(window, "resize", this.scrollHandler),
                this.interval = setInterval(this.scrollCallback, 50)),
                this.config.live && new u(function(t) {
                    for (var n = 0; n < t.length; n++)
                        for (var r = t[n], o = 0; o < r.addedNodes.length; o++) {
                            var i = r.addedNodes[o];
                            e.doSync(i)
                        }
                }
                ).observe(document.body, {
                    childList: !0,
                    subtree: !0
                })
            }
        }, {
            key: "stop",
            value: function() {
                this.stopped = !0,
                i(this.config.scrollContainer || window, "scroll", this.scrollHandler),
                i(window, "resize", this.scrollHandler),
                null != this.interval && clearInterval(this.interval)
            }
        }, {
            key: "sync",
            value: function() {
                u.notSupported && this.doSync(this.element)
            }
        }, {
            key: "doSync",
            value: function(e) {
                if (null != e || (e = this.element),
                1 === e.nodeType)
                    for (var t = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass), n = 0; n < t.length; n++) {
                        var o = t[n];
                        r(o, this.all) || (this.boxes.push(o),
                        this.all.push(o),
                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(o, !0),
                        this.scrolled = !0)
                    }
            }
        }, {
            key: "show",
            value: function(e) {
                return this.applyStyle(e),
                e.className = e.className + " " + this.config.animateClass,
                null != this.config.callback && this.config.callback(e),
                function(e, t) {
                    null != e.dispatchEvent ? e.dispatchEvent(t) : t in (null != e) ? e[t]() : "on" + t in (null != e) && e["on" + t]()
                }(e, this.wowEvent),
                this.config.resetAnimation && (o(e, "animationend", this.resetAnimation),
                o(e, "oanimationend", this.resetAnimation),
                o(e, "webkitAnimationEnd", this.resetAnimation),
                o(e, "MSAnimationEnd", this.resetAnimation)),
                e
            }
        }, {
            key: "applyStyle",
            value: function(e, t) {
                var n = this
                  , r = e.getAttribute("data-wow-duration")
                  , o = e.getAttribute("data-wow-delay")
                  , i = e.getAttribute("data-wow-iteration");
                return this.animate(function() {
                    return n.customStyle(e, t, r, o, i)
                })
            }
        }, {
            key: "resetStyle",
            value: function() {
                for (var e = 0; e < this.boxes.length; e++)
                    this.boxes[e].style.visibility = "visible"
            }
        }, {
            key: "resetAnimation",
            value: function(e) {
                if (e.type.toLowerCase().indexOf("animationend") >= 0) {
                    var t = e.target || e.srcElement;
                    t.className = t.className.replace(this.config.animateClass, "").trim()
                }
            }
        }, {
            key: "customStyle",
            value: function(e, t, n, r, o) {
                return t && this.cacheAnimationName(e),
                e.style.visibility = t ? "hidden" : "visible",
                n && this.vendorSet(e.style, {
                    animationDuration: n
                }),
                r && this.vendorSet(e.style, {
                    animationDelay: r
                }),
                o && this.vendorSet(e.style, {
                    animationIterationCount: o
                }),
                this.vendorSet(e.style, {
                    animationName: t ? "none" : this.cachedAnimationName(e)
                }),
                e
            }
        }, {
            key: "vendorSet",
            value: function(e, t) {
                for (var n in t)
                    if (t.hasOwnProperty(n)) {
                        var r = t[n];
                        e["" + n] = r;
                        for (var o = 0; o < this.vendors.length; o++) {
                            e["" + this.vendors[o] + n.charAt(0).toUpperCase() + n.substr(1)] = r
                        }
                    }
            }
        }, {
            key: "vendorCSS",
            value: function(e, t) {
                for (var n = d(e), r = n.getPropertyCSSValue(t), o = 0; o < this.vendors.length; o++) {
                    var i = this.vendors[o];
                    r = r || n.getPropertyCSSValue("-" + i + "-" + t)
                }
                return r
            }
        }, {
            key: "animationName",
            value: function(e) {
                var t = void 0;
                try {
                    t = this.vendorCSS(e, "animation-name").cssText
                } catch (n) {
                    t = d(e).getPropertyValue("animation-name")
                }
                return "none" === t ? "" : t
            }
        }, {
            key: "cacheAnimationName",
            value: function(e) {
                return this.animationNameCache.set(e, this.animationName(e))
            }
        }, {
            key: "cachedAnimationName",
            value: function(e) {
                return this.animationNameCache.get(e)
            }
        }, {
            key: "scrollHandler",
            value: function() {
                this.scrolled = !0
            }
        }, {
            key: "scrollCallback",
            value: function() {
                if (this.scrolled) {
                    this.scrolled = !1;
                    for (var e = [], t = 0; t < this.boxes.length; t++) {
                        var n = this.boxes[t];
                        if (n) {
                            if (this.isVisible(n)) {
                                this.show(n);
                                continue
                            }
                            e.push(n)
                        }
                    }
                    this.boxes = e,
                    this.boxes.length || this.config.live || this.stop()
                }
            }
        }, {
            key: "offsetTop",
            value: function(e) {
                for (; void 0 === e.offsetTop; )
                    e = e.parentNode;
                for (var t = e.offsetTop; e.offsetParent; )
                    t += (e = e.offsetParent).offsetTop;
                return t
            }
        }, {
            key: "isVisible",
            value: function(e) {
                var t = e.getAttribute("data-wow-offset") || this.config.offset
                  , n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset
                  , r = n + Math.min(this.element.clientHeight, "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight) - t
                  , o = this.offsetTop(e)
                  , i = o + e.clientHeight;
                return o <= r && i >= n
            }
        }, {
            key: "disabled",
            value: function() {
                return !this.config.mobile && (e = navigator.userAgent,
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));
                var e
            }
        }]),
        e
    }();
    t.default = f,
    e.exports = t.default
});
var wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 200,
    mobile: !0,
    live: !0,
    callback: function(e) {},
    scrollContainer: null,
    resetAnimation: !0
});
$(window).width() > 960 && wow.init(),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(0, function(e) {
    "use strict";
    function t(t) {
        if (r.webkit && !t)
            return {
                height: 0,
                width: 0
            };
        if (!r.data.outer) {
            var n = {
                border: "none",
                "box-sizing": "content-box",
                height: "200px",
                margin: "0",
                padding: "0",
                width: "200px"
            };
            r.data.inner = e("<div>").css(e.extend({}, n)),
            r.data.outer = e("<div>").css(e.extend({
                left: "-1000px",
                overflow: "scroll",
                position: "absolute",
                top: "-1000px"
            }, n)).append(r.data.inner).appendTo("body")
        }
        return r.data.outer.scrollLeft(1e3).scrollTop(1e3),
        {
            height: Math.ceil(r.data.outer.offset().top - r.data.inner.offset().top || 0),
            width: Math.ceil(r.data.outer.offset().left - r.data.inner.offset().left || 0)
        }
    }
    function n(e) {
        var t = e.originalEvent;
        return !(t.axis && t.axis === t.HORIZONTAL_AXIS || t.wheelDeltaX)
    }
    var r = {
        data: {
            index: 0,
            name: "scrollbar"
        },
        firefox: /firefox/i.test(navigator.userAgent),
        macosx: /mac/i.test(navigator.platform),
        msedge: /edge\/\d+/i.test(navigator.userAgent),
        msie: /(msie|trident)/i.test(navigator.userAgent),
        mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
        overlay: null,
        scroll: null,
        scrolls: [],
        webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent)
    };
    r.scrolls.add = function(e) {
        this.remove(e).push(e)
    }
    ,
    r.scrolls.remove = function(t) {
        for (; e.inArray(t, this) >= 0; )
            this.splice(e.inArray(t, this), 1);
        return this
    }
    ;
    var o = {
        autoScrollSize: !0,
        autoUpdate: !0,
        debug: !1,
        disableBodyScroll: !1,
        duration: 200,
        ignoreMobile: !1,
        ignoreOverlay: !1,
        isRtl: !1,
        scrollStep: 30,
        showArrows: !1,
        stepScrolling: !0,
        scrollx: null,
        scrolly: null,
        onDestroy: null,
        onFallback: null,
        onInit: null,
        onScroll: null,
        onUpdate: null
    }
      , i = function(n) {
        r.scroll || (r.overlay = function() {
            var e = t(!0);
            return !(e.height || e.width)
        }(),
        r.scroll = t(),
        a(),
        e(window).resize(function() {
            var e = !1;
            if (r.scroll && (r.scroll.height || r.scroll.width)) {
                var n = t();
                n.height === r.scroll.height && n.width === r.scroll.width || (r.scroll = n,
                e = !0)
            }
            a(e)
        })),
        this.container = n,
        this.namespace = ".scrollbar_" + r.data.index++,
        this.options = e.extend({}, o, window.jQueryScrollbarOptions || {}),
        this.scrollTo = null,
        this.scrollx = {},
        this.scrolly = {},
        n.data(r.data.name, this),
        r.scrolls.add(this)
    };
    i.prototype = {
        destroy: function() {
            if (this.wrapper) {
                this.container.removeData(r.data.name),
                r.scrolls.remove(this);
                var t = this.container.scrollLeft()
                  , n = this.container.scrollTop();
                this.container.insertBefore(this.wrapper).css({
                    height: "",
                    margin: "",
                    "max-height": ""
                }).removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible").off(this.namespace).scrollLeft(t).scrollTop(n),
                this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").addBack().off(this.namespace),
                this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").addBack().off(this.namespace),
                this.wrapper.remove(),
                e(document).add("body").off(this.namespace),
                e.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container])
            }
        },
        init: function(t) {
            var o = this
              , i = this.container
              , s = this.containerWrapper || i
              , a = this.namespace
              , l = e.extend(this.options, t || {})
              , c = {
                x: this.scrollx,
                y: this.scrolly
            }
              , u = this.wrapper
              , d = {}
              , f = {
                scrollLeft: i.scrollLeft(),
                scrollTop: i.scrollTop()
            };
            if (r.mobile && l.ignoreMobile || r.overlay && l.ignoreOverlay || r.macosx && !r.webkit)
                return e.isFunction(l.onFallback) && l.onFallback.apply(this, [i]),
                !1;
            if (u)
                (d = {
                    height: "auto",
                    "margin-bottom": -1 * r.scroll.height + "px",
                    "max-height": ""
                })[l.isRtl ? "margin-left" : "margin-right"] = -1 * r.scroll.width + "px",
                s.css(d);
            else {
                if (this.wrapper = u = e("<div>").addClass("scroll-wrapper").addClass(i.attr("class")).css("position", "absolute" === i.css("position") ? "absolute" : "relative").insertBefore(i).append(i),
                l.isRtl && u.addClass("scroll--rtl"),
                i.is("textarea") && (this.containerWrapper = s = e("<div>").insertBefore(i).append(i),
                u.addClass("scroll-textarea")),
                (d = {
                    height: "auto",
                    "margin-bottom": -1 * r.scroll.height + "px",
                    "max-height": ""
                })[l.isRtl ? "margin-left" : "margin-right"] = -1 * r.scroll.width + "px",
                s.addClass("scroll-content").css(d),
                i.on("scroll" + a, function(t) {
                    var n = i.scrollLeft()
                      , s = i.scrollTop();
                    if (l.isRtl)
                        switch (!0) {
                        case r.firefox:
                            n = Math.abs(n);
                        case r.msedge || r.msie:
                            n = i[0].scrollWidth - i[0].clientWidth - n
                        }
                    e.isFunction(l.onScroll) && l.onScroll.call(o, {
                        maxScroll: c.y.maxScrollOffset,
                        scroll: s,
                        size: c.y.size,
                        visible: c.y.visible
                    }, {
                        maxScroll: c.x.maxScrollOffset,
                        scroll: n,
                        size: c.x.size,
                        visible: c.x.visible
                    }),
                    c.x.isVisible && c.x.scroll.bar.css("left", n * c.x.kx + "px"),
                    c.y.isVisible && c.y.scroll.bar.css("top", s * c.y.kx + "px")
                }),
                u.on("scroll" + a, function() {
                    u.scrollTop(0).scrollLeft(0)
                }),
                l.disableBodyScroll) {
                    var p = function(e) {
                        n(e) ? c.y.isVisible && c.y.mousewheel(e) : c.x.isVisible && c.x.mousewheel(e)
                    };
                    u.on("MozMousePixelScroll" + a, p),
                    u.on("mousewheel" + a, p),
                    r.mobile && u.on("touchstart" + a, function(t) {
                        var n = t.originalEvent.touches && t.originalEvent.touches[0] || t
                          , r = n.pageX
                          , o = n.pageY
                          , s = i.scrollLeft()
                          , l = i.scrollTop();
                        e(document).on("touchmove" + a, function(e) {
                            var t = e.originalEvent.targetTouches && e.originalEvent.targetTouches[0] || e;
                            i.scrollLeft(s + r - t.pageX),
                            i.scrollTop(l + o - t.pageY),
                            e.preventDefault()
                        }),
                        e(document).on("touchend" + a, function() {
                            e(document).off(a)
                        })
                    })
                }
                e.isFunction(l.onInit) && l.onInit.apply(this, [i])
            }
            e.each(c, function(t, s) {
                var u = null
                  , d = 1
                  , f = "x" === t ? "scrollLeft" : "scrollTop"
                  , p = l.scrollStep
                  , h = function() {
                    var e = i[f]();
                    i[f](e + p),
                    1 == d && e + p >= m && (e = i[f]()),
                    -1 == d && e + p <= m && (e = i[f]()),
                    i[f]() == e && u && u()
                }
                  , m = 0;
                s.scroll || (s.scroll = o._getScroll(l["scroll" + t]).addClass("scroll-" + t),
                l.showArrows && s.scroll.addClass("scroll-element_arrows_visible"),
                s.mousewheel = function(e) {
                    if (!s.isVisible || "x" === t && n(e))
                        return !0;
                    if ("y" === t && !n(e))
                        return c.x.mousewheel(e),
                        !0;
                    var r = -1 * e.originalEvent.wheelDelta || e.originalEvent.detail
                      , a = s.size - s.visible - s.offset;
                    return r || ("x" === t && e.originalEvent.deltaX ? r = 40 * e.originalEvent.deltaX : "y" === t && e.originalEvent.deltaY && (r = 40 * e.originalEvent.deltaY)),
                    (r > 0 && m < a || r < 0 && m > 0) && ((m += r) < 0 && (m = 0),
                    m > a && (m = a),
                    o.scrollTo = o.scrollTo || {},
                    o.scrollTo[f] = m,
                    setTimeout(function() {
                        o.scrollTo && (i.stop().animate(o.scrollTo, 240, "linear", function() {
                            m = i[f]()
                        }),
                        o.scrollTo = null)
                    }, 1)),
                    e.preventDefault(),
                    !1
                }
                ,
                s.scroll.on("MozMousePixelScroll" + a, s.mousewheel).on("mousewheel" + a, s.mousewheel).on("mouseenter" + a, function() {
                    m = i[f]()
                }),
                s.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + a, function(n) {
                    if (1 != n.which)
                        return !0;
                    d = 1;
                    var a = {
                        eventOffset: n["x" === t ? "pageX" : "pageY"],
                        maxScrollValue: s.size - s.visible - s.offset,
                        scrollbarOffset: s.scroll.bar.offset()["x" === t ? "left" : "top"],
                        scrollbarSize: s.scroll.bar["x" === t ? "outerWidth" : "outerHeight"]()
                    }
                      , c = 0
                      , g = 0;
                    if (e(this).hasClass("scroll-arrow")) {
                        if (d = e(this).hasClass("scroll-arrow_more") ? 1 : -1,
                        p = l.scrollStep * d,
                        m = d > 0 ? a.maxScrollValue : 0,
                        l.isRtl)
                            switch (!0) {
                            case r.firefox:
                                m = d > 0 ? 0 : -1 * a.maxScrollValue;
                                break;
                            case r.msie || r.msedge:
                            }
                    } else
                        d = a.eventOffset > a.scrollbarOffset + a.scrollbarSize ? 1 : a.eventOffset < a.scrollbarOffset ? -1 : 0,
                        "x" === t && l.isRtl && (r.msie || r.msedge) && (d *= -1),
                        p = Math.round(.75 * s.visible) * d,
                        m = a.eventOffset - a.scrollbarOffset - (l.stepScrolling ? 1 == d ? a.scrollbarSize : 0 : Math.round(a.scrollbarSize / 2)),
                        m = i[f]() + m / s.kx;
                    return o.scrollTo = o.scrollTo || {},
                    o.scrollTo[f] = l.stepScrolling ? i[f]() + p : m,
                    l.stepScrolling && (u = function() {
                        m = i[f](),
                        clearInterval(g),
                        clearTimeout(c),
                        c = 0,
                        g = 0
                    }
                    ,
                    c = setTimeout(function() {
                        g = setInterval(h, 40)
                    }, l.duration + 100)),
                    setTimeout(function() {
                        o.scrollTo && (i.animate(o.scrollTo, l.duration),
                        o.scrollTo = null)
                    }, 1),
                    o._handleMouseDown(u, n)
                }),
                s.scroll.bar.on("mousedown" + a, function(n) {
                    if (1 != n.which)
                        return !0;
                    var c = n["x" === t ? "pageX" : "pageY"]
                      , u = i[f]();
                    return s.scroll.addClass("scroll-draggable"),
                    e(document).on("mousemove" + a, function(e) {
                        var n = parseInt((e["x" === t ? "pageX" : "pageY"] - c) / s.kx, 10);
                        "x" === t && l.isRtl && (r.msie || r.msedge) && (n *= -1),
                        i[f](u + n)
                    }),
                    o._handleMouseDown(function() {
                        s.scroll.removeClass("scroll-draggable"),
                        m = i[f]()
                    }, n)
                }))
            }),
            e.each(c, function(e, t) {
                var n = "scroll-scroll" + e + "_visible"
                  , r = "x" == e ? c.y : c.x;
                t.scroll.removeClass(n),
                r.scroll.removeClass(n),
                s.removeClass(n)
            }),
            e.each(c, function(t, n) {
                e.extend(n, "x" == t ? {
                    offset: parseInt(i.css("left"), 10) || 0,
                    size: i.prop("scrollWidth"),
                    visible: u.width()
                } : {
                    offset: parseInt(i.css("top"), 10) || 0,
                    size: i.prop("scrollHeight"),
                    visible: u.height()
                })
            }),
            this._updateScroll("x", this.scrollx),
            this._updateScroll("y", this.scrolly),
            e.isFunction(l.onUpdate) && l.onUpdate.apply(this, [i]),
            e.each(c, function(e, t) {
                var n = "x" === e ? "left" : "top"
                  , r = "x" === e ? "outerWidth" : "outerHeight"
                  , o = "x" === e ? "width" : "height"
                  , s = parseInt(i.css(n), 10) || 0
                  , a = t.size
                  , c = t.visible + s
                  , u = t.scroll.size[r]() + (parseInt(t.scroll.size.css(n), 10) || 0);
                l.autoScrollSize && (t.scrollbarSize = parseInt(u * c / a, 10),
                t.scroll.bar.css(o, t.scrollbarSize + "px")),
                t.scrollbarSize = t.scroll.bar[r](),
                t.kx = (u - t.scrollbarSize) / (a - c) || 1,
                t.maxScrollOffset = a - c
            }),
            i.scrollLeft(f.scrollLeft).scrollTop(f.scrollTop).trigger("scroll")
        },
        _getScroll: function(t) {
            var n = {
                advanced: ['<div class="scroll-element">', '<div class="scroll-element_corner"></div>', '<div class="scroll-arrow scroll-arrow_less"></div>', '<div class="scroll-arrow scroll-arrow_more"></div>', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_inner-wrapper">', '<div class="scroll-element_inner scroll-element_track">', '<div class="scroll-element_inner-bottom"></div>', "</div>", "</div>", '<div class="scroll-bar">', '<div class="scroll-bar_body">', '<div class="scroll-bar_body-inner"></div>', "</div>", '<div class="scroll-bar_bottom"></div>', '<div class="scroll-bar_center"></div>', "</div>", "</div>", "</div>"].join(""),
                simple: ['<div class="scroll-element">', '<div class="scroll-element_outer">', '<div class="scroll-element_size"></div>', '<div class="scroll-element_track"></div>', '<div class="scroll-bar"></div>', "</div>", "</div>"].join("")
            };
            return n[t] && (t = n[t]),
            t || (t = n.simple),
            t = "string" == typeof t ? e(t).appendTo(this.wrapper) : e(t),
            e.extend(t, {
                bar: t.find(".scroll-bar"),
                size: t.find(".scroll-element_size"),
                track: t.find(".scroll-element_track")
            }),
            t
        },
        _handleMouseDown: function(t, n) {
            var r = this.namespace;
            return e(document).on("blur" + r, function() {
                e(document).add("body").off(r),
                t && t()
            }),
            e(document).on("dragstart" + r, function(e) {
                return e.preventDefault(),
                !1
            }),
            e(document).on("mouseup" + r, function() {
                e(document).add("body").off(r),
                t && t()
            }),
            e("body").on("selectstart" + r, function(e) {
                return e.preventDefault(),
                !1
            }),
            n && n.preventDefault(),
            !1
        },
        _updateScroll: function(t, n) {
            var o = this.container
              , i = this.containerWrapper || o
              , s = "scroll-scroll" + t + "_visible"
              , a = "x" === t ? this.scrolly : this.scrollx
              , l = parseInt(this.container.css("x" === t ? "left" : "top"), 10) || 0
              , c = this.wrapper
              , u = n.size
              , d = n.visible + l;
            n.isVisible = u - d > 1,
            n.isVisible ? (n.scroll.addClass(s),
            a.scroll.addClass(s),
            i.addClass(s)) : (n.scroll.removeClass(s),
            a.scroll.removeClass(s),
            i.removeClass(s)),
            "y" === t && (o.is("textarea") || u < d ? i.css({
                height: d + r.scroll.height + "px",
                "max-height": "none"
            }) : i.css({
                "max-height": d + r.scroll.height + "px"
            })),
            n.size == o.prop("scrollWidth") && a.size == o.prop("scrollHeight") && n.visible == c.width() && a.visible == c.height() && n.offset == (parseInt(o.css("left"), 10) || 0) && a.offset == (parseInt(o.css("top"), 10) || 0) || (e.extend(this.scrollx, {
                offset: parseInt(o.css("left"), 10) || 0,
                size: o.prop("scrollWidth"),
                visible: c.width()
            }),
            e.extend(this.scrolly, {
                offset: parseInt(o.css("top"), 10) || 0,
                size: this.container.prop("scrollHeight"),
                visible: c.height()
            }),
            this._updateScroll("x" === t ? "y" : "x", a))
        }
    };
    var s = i;
    e.fn.scrollbar = function(t, n) {
        return "string" != typeof t && (n = t,
        t = "init"),
        void 0 === n && (n = []),
        e.isArray(n) || (n = [n]),
        this.not("body, .scroll-wrapper").each(function() {
            var o = e(this)
              , i = o.data(r.data.name);
            (i || "init" === t) && (i || (i = new s(o)),
            i[t] && i[t].apply(i, n))
        }),
        this
    }
    ,
    e.fn.scrollbar.options = o;
    var a = function() {
        var e = 0;
        return function(t) {
            var n, o, i, s, l, c, u;
            for (n = 0; n < r.scrolls.length; n++)
                o = (s = r.scrolls[n]).container,
                i = s.options,
                l = s.wrapper,
                c = s.scrollx,
                u = s.scrolly,
                (t || i.autoUpdate && l && l.is(":visible") && (o.prop("scrollWidth") != c.size || o.prop("scrollHeight") != u.size || l.width() != c.visible || l.height() != u.visible)) && (s.init(),
                i.debug && (window.console && console.log({
                    scrollHeight: o.prop("scrollHeight") + ":" + s.scrolly.size,
                    scrollWidth: o.prop("scrollWidth") + ":" + s.scrollx.size,
                    visibleHeight: l.height() + ":" + s.scrolly.visible,
                    visibleWidth: l.width() + ":" + s.scrollx.visible
                }, !0),
                0));
            clearTimeout(e),
            e = setTimeout(a, 300)
        }
    }();
    window.angular && function(e) {
        e.module("jQueryScrollbar", []).provider("jQueryScrollbar", function() {
            var t = o;
            return {
                setOptions: function(n) {
                    e.extend(t, n)
                },
                $get: function() {
                    return {
                        options: e.copy(t)
                    }
                }
            }
        }).directive("jqueryScrollbar", ["jQueryScrollbar", "$parse", function(e, t) {
            return {
                restrict: "AC",
                link: function(n, r, o) {
                    var i = t(o.jqueryScrollbar)(n);
                    r.scrollbar(i || e.options).on("$destroy", function() {
                        r.scrollbar("destroy")
                    })
                }
            }
        }
        ])
    }(window.angular)
}),
jQuery(document).ready(function() {
    jQuery(".about_us__seoWrap_text").scrollbar()
}),
$(document).ready(function() {
    $.support.placeholder = "placeholder"in document.createElement("input"),
    $.support.placeholder && ($(".form-label").each(function() {
        $(this).addClass("js-hide-label")
    }),
    $(".form-group").find("input, textarea").on("keyup blur focus", function(e) {
        var t = $(this)
          , n = t.parent().find("label");
        switch (e.type) {
        case "keyup":
            n.toggleClass("js-hide-label", "" == t.val());
            break;
        case "blur":
            "" == t.val() ? n.addClass("js-hide-label") : n.removeClass("js-hide-label").addClass("js-unhighlight-label");
            break;
        case "focus":
            "" !== t.val() && n.removeClass("js-unhighlight-label")
        }
    }))
}),
$(document).ready(function() {
    var e = $("#overlay")
      , t = $(".open_modal")
      , n = $("#modal_close, #modal_close_bg, #overlay, .menu_btn__container")
      , r = $(".modal_div");
    t.click(function(t) {
      $.scrollify.move("#contactMe.")
    }),
    n.click(function() {
        r.animate({
            opacity: 0
        }, 200, function() {
            $(this).css("display", "none"),
            e.fadeOut(400)
        }),
        $(".social_wrap a").css("color", "black"),
        $(".call_back a").css("color", "black"),
        $(".local_wrap .local_item").css("color", "black"),
        $(".numberPage_item__count").css("color", "#1E1E1E"),
        $(".logo ").css(" color", "black"),
        $(".numberPage_item__count").css("color", "#1E1E1E"),
        $(".numberPage_item__line").css("background-color", "#1E1E1E"),
        $(".numberPage_item__dot").css("background-color", "#1E1E1E"),
        0 == $.scrollify.currentIndex() && $(".numberPage_item:nth-child(1) .numberPage_item__dot").css("background-color", "#EBD300"),
        1 == $.scrollify.currentIndex() && $(".numberPage_item:nth-child(2) .numberPage_item__dot").css("background-color", "#EBD300"),
        2 == $.scrollify.currentIndex() && $(".numberPage_item:nth-child(3) .numberPage_item__dot").css("background-color", "#EBD300"),
        3 == $.scrollify.currentIndex() && $(".numberPage_item:nth-child(4) .numberPage_item__dot").css("background-color", "#EBD300"),
        4 == $.scrollify.currentIndex() && $(".numberPage_item:nth-child(5) .numberPage_item__dot").css("background-color", "#EBD300"),
        $.scrollify.enable()

        // TODO 1
    })
}),
$(function() {
    $(".menu_btn").change(function() {
        $(".nav_container").css("left", "0px"),
        $(".nav_menu__container").css("animation", "fadeInUp 1s")
    }),
    $(".nav-btn__exid").change(function() {
        $(".nav_container").css("left", "-100%")
    }),
    $(".menu_btn").click(function() {
        $.scrollify.disable(),
        $(".menu_btn").change()
    }),
    $(".nav-btn__exid").click(function() {
        $.scrollify.enable(),
        $(".nav-btn__exid").change()
    }),
    $(".nav_menu__item a").click(function() {
        $(".nav-btn__exid").change()
    }),
    $(".small_menu_btn__wrapper").click(function() {
        $.scrollify.disable(),
        $(".menu_btn").change()
    })
}),
$(document).ready(function() {
    var e = document.querySelector("#portfolio");
    window.addEventListener("scroll", function() {
         !function(e) {
            var t = window.pageYOffset + e.getBoundingClientRect().top
               , n = window.pageXOffset + e.getBoundingClientRect().left
               , r = window.pageXOffset + e.getBoundingClientRect().right
               , o = window.pageYOffset + e.getBoundingClientRect().bottom
               , i = window.pageYOffset
               , s = window.pageXOffset
               , a = window.pageXOffset + document.documentElement.clientWidth
               , l = window.pageYOffset + document.documentElement.clientHeight;
             o > i && t < l && r > s && n < a ? ($(".social_wrap a").css("color", "white"),
             $(".call_back a").css("color", "white"),
             $(".local_wrap .local_item").css("color", "white"),
             $(".logo ").css("color", "white")) : ($(".social_wrap a").css("color", "black"),
             $(".call_back a").css("color", "black"),
             $(".local_wrap .local_item").css("color", "black"),
             $(".logo ").css("color", "black"))
        }(e)
    }),
    $("#about-me .services_sicret__btn").click(function() {
        $.scrollify.disable(),
        $("#about-me .services_bg__wrap").css("z-index", "100"),
        $("#about-me .services_bg__wrap").css("opacity", "1")
    }),
    $("#about-me .modal_close_wrap").click(function() {
        $.scrollify.enable(),
        $("#about-me .services_bg__wrap").css("z-index", "-1"),
        $("#about-me .services_bg__wrap").css("opacity", "0")
    }),
    $("#skills .services_sicret__btn").click(function() {
        $.scrollify.disable(),
        $("#skills .services_bg__wrap").css("z-index", "100"),
        $("#skills .services_bg__wrap").css("opacity", "1")
    }),
    $("#skills .modal_close_wrap").click(function() {
        $.scrollify.enable(),
        $("#skills .services_bg__wrap").css("z-index", "-1"),
        $("#skills .services_bg__wrap").css("opacity", "0")
    }),
    $("#portfolio .services_sicret__btn").click(function() {
        $.scrollify.disable(),
        $(" .services_bg__wrap").css("z-index", "100"),
        $("#portfolio .services_bg__wrap").css("opacity", "1")
    }),
    $("#portfolio .modal_close_wrap").click(function() {
        $.scrollify.enable(),
        $("#portfolio .services_bg__wrap").css("z-index", "-1"),
        $("#portfolio .services_bg__wrap").css("opacity", "0")
    }),
    $("#contactMe .services_sicret__btn").click(function() {
        $.scrollify.disable(),
        $("#contactMe .services_bg__wrap").css("z-index", "100"),
        $("#contactMe .services_bg__wrap").css("opacity", "1")
    }),
    $("#contactMe .modal_close_wrap").click(function() {
        $.scrollify.enable(),
        $("#contactMe .services_bg__wrap").css("z-index", "-1"),
        $("#contactMe .services_bg__wrap").css("opacity", "")
    }),
    $(".max_modal").click(function() {
        $(".modal_div").css("height", "100%"),
        $(".modal_div").css("width", "100%"),
        $(".left_bord").css("z-index", "1001")
    }),
    $(".services_sicret__btn").click(function() {
        $(".left_bord").css("z-index", "125"),
        $(".left_bord .menu_btn").css("display", "none"),
        $(".left_bord .social_wrap").css("display", "none"),
        $("#modal_close ").css("display", "none"),
        $("#modal_close_bg ").css("display", "block")
    }),
    $(".modal_close_wrap").click(function() {
        $(".left_bord").css("z-index", "99"),
        $(".left_bord .menu_btn").css("display", "block"),
        $(".left_bord .social_wrap").css("display", "block"),
        $("#modal_close ").css("display", "block"),
        $("#modal_close_bg ").css("display", "none")
    }),
    $("#modal_close_bg").click(function() {
        $.scrollify.disable(),
        $(".left_bord").css("z-index", "125"),
        $(".left_bord .menu_btn").css("display", "none"),
        $(".left_bord .social_wrap").css("display", "none"),
        $("#modal_close ").css("display", "none"),
        $("#modal_close_bg ").css("display", "block"),
        $(".modal_div").css("height", "91.5%"),
        $(".modal_div").css("width", "90%")
    }),
    $(".numberPage_item:nth-child(1)").click(function() {
        $.scrollify.move("#home.")
    }),
    $(".numberPage_item:nth-child(2)").click(function() {
        $.scrollify.move("#about-me.")
    }),
    $(".numberPage_item:nth-child(3)").click(function() {
        $.scrollify.move("#skills.")
    }),
    $(".numberPage_item:nth-child(4)").click(function() {
        $.scrollify.move("#portfolio.")
    }),
    $(".numberPage_item:nth-child(5)").click(function() {
        $.scrollify.move("#contactMe.")
    })
}),
$(document).ready(function() {
  $(".local_wrap .local_item:nth-child(1)").click(function() {
    $(".local_wrap .local_item:nth-child(1)").css("font-family", "BebasNeueBold, sans-serif")
    $(".local_wrap .local_item:nth-child(2)").css("font-family", "BebasNeueLight, sans-serif")
  })
  $(".local_wrap .local_item:nth-child(2)").click(function() {
    $(".local_wrap .local_item:nth-child(1)").css("font-family", "BebasNeueLight, sans-serif")
    $(".local_wrap .local_item:nth-child(2)").css("font-family", "BebasNeueBold, sans-serif")
  })
}),

$(function() {
  function expo() {
    function e() {
        for (var e = o[i], s = i == r.length - 1 ? o[0] : o[i + 1], a = 0; a < e.length; a++)
            t(e, a);
        for (a = 0; a < s.length; a++)
            s[a].className = "letter behind",
            s[0].parentElement.style.opacity = 1,
            n(s, a);
        i = i == o.length - 1 ? 0 : i + 1
    }
    function t(e, t) {
        setTimeout(function() {
            e[t].className = "letter out"
        }, 80 * t)
    }
    function n(e, t) {
        setTimeout(function() {
            e[t].className = "letter in"
        }, 340 + 80 * t)
    }
    var r = document.getElementsByClassName("word")
      , o = []
      , i = 0;
    r[i].style.opacity = 1;
    for (var s = 0; s < r.length; s++)
        !function(e) {
            var t = e.innerHTML;
            e.innerHTML = "";
            for (var n = [], r = 0; r < t.length; r++) {
                var i = document.createElement("span");
                i.className = "letter",
                i.innerHTML = t.charAt(r),
                e.appendChild(i),
                n.push(i)
            }
            o.push(n)
        }(r[s]);
    e(),
    setInterval(e, 8e3)
    }
  setTimeout(expo, 1000)
})
}
setTimeout(Animate, 1000)
