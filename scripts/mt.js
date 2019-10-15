;
(function(window, document, undefined) {
    var w, aa = aa || {};

    function ba(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function ca(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, d);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function z(a, b, c) {
        z = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ba : ca;
        return z.apply(null, arguments)
    }
    var da = aa.ya && Date.now || function() {
        return +new Date
    };
    mti = {
        bind: function(a, b, c) {
            var d = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : [];
            return function() {
                d.push.apply(d, arguments);
                return b.apply(a, d)
            }
        }
    };

    function A(a, b) {
        this.i = b || a;
        this.a = this.i.document;
        this.c = void 0
    }
    w = A.prototype;
    w.createElement = function(a, b, c) {
        a = this.a.createElement(a);
        if (b)
            for (var d in b) b.hasOwnProperty(d) && ("style" == d ? F(this, a, b[d]) : a.setAttribute(d, b[d]));
        c && a.appendChild(this.a.createTextNode(c));
        return a
    };

    function G(a, b, c) {
        a = a.a.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a && a.lastChild && a.insertBefore(c, a.lastChild)
    }
    w.Z = function(a) {
        function b() {
            c.a.body ? a() : setTimeout(b, 0)
        }
        var c = this;
        b()
    };

    function H(a) {
        a.parentNode && a.parentNode.removeChild(a)
    }

    function I(a, b) {
        if (!("undefined" !== typeof SVGElement && a instanceof SVGElement)) {
            for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
                if (c[d] == b) return;
            c.push(b);
            a.className = c.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }
    }

    function J(a, b) {
        if (!("undefined" !== typeof SVGElement && a instanceof SVGElement)) {
            for (var c = a.className.split(/\s+/), d = [], e = 0, f = c.length; e < f; e++) c[e] != b && d.push(c[e]);
            a.className = d.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "")
        }
    }

    function ea(a, b) {
        if ("undefined" !== typeof SVGElement && a instanceof SVGElement) return !1;
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
            if (c[d] == b) return !0;
        return !1
    }

    function F(a, b, c) {
        if (void 0 === a.c) {
            var d = a.a.createElement("p");
            d.innerHTML = '<a style="top:1px;">w</a>';
            a.c = /top/.test(d.getElementsByTagName("a")[0].getAttribute("style"))
        }
        a.c ? b.setAttribute("style", c) : b.style.cssText = c
    }
    w.getComputedStyle = function(a) {
        if ("undefined" != typeof a && null != a) {
            if (1 != a.nodeType) return "";
            var b = {};
            if ("undefined" != typeof a.currentStyle && null != a.currentStyle) return b.fontFamily = a.currentStyle.fontFamily, b.fontWeight = "normal" == a.currentStyle.fontWeight ? 400 : "bold" == a.currentStyle.fontWeight ? 700 : a.currentStyle.fontWeight, b.fontStyle = a.currentStyle.fontStyle, b;
            a = this.a.defaultView.getComputedStyle(a, null);
            if ("undefined" != typeof a && null != a) return b.fontFamily = a.getPropertyValue("font-family"), b.fontWeight =
                "normal" == a.getPropertyValue("font-weight") ? 400 : "bold" == a.getPropertyValue("font-weight") ? 700 : a.getPropertyValue("font-weight"), b.fontStyle = a.getPropertyValue("font-style"), b
        }
        return ""
    };
    w.P = function(a) {
        if ("undefined" != typeof a && null != a) {
            if ("undefined" != typeof a.currentStyle) return a.currentStyle.fontFamily;
            if (a = this.a.defaultView.getComputedStyle(a, null)) return a.getPropertyValue("font-family")
        }
        return ""
    };
    w.getElementById = function(a) {
        return this.a.getElementById(a)
    };

    function fa(a, b) {
        if (b) {
            if ("undefined" != typeof b.currentStyle) return b.currentStyle["list-style-type"];
            var c = a.a.defaultView.getComputedStyle(b, null);
            return c ? c.getPropertyValue("list-style-type") : ""
        }
    }
    w.indexOf = function(a, b) {
        if (a) {
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c++)
                if (a[c] == b) return c
        }
        return -1
    };

    function K(a) {
        return a.replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|")
    }
    w.P = function(a) {
        if ("undefined" != typeof a && null != a) {
            if ("undefined" != typeof a.currentStyle) return a.currentStyle.fontFamily;
            if (a = this.a.defaultView.getComputedStyle(a, null)) return a.getPropertyValue("font-family")
        }
        return ""
    };

    function L(a, b) {
        this.c = a;
        this.a = b
    };

    function M(a, b, c, d) {
        this.g = null != a ? a : null;
        this.m = null != b ? b : null;
        this.a = null != c ? c : null;
        this.c = null != d ? d : null
    }
    var ga = /^([0-9]+)(?:[\._-]([0-9]+))?(?:[\._-]([0-9]+))?(?:[\._+-]?(.*))?$/;
    M.prototype.toString = function() {
        return [this.g, this.m || "", this.a || "", this.c || ""].join("")
    };

    function N(a) {
        a = ga.exec(a);
        var b = null,
            c = null,
            d = null,
            e = null;
        a && (null !== a[1] && a[1] && (b = parseInt(a[1], 10)), null !== a[2] && a[2] && (c = parseInt(a[2], 10)), null !== a[3] && a[3] && (d = parseInt(a[3], 10)), null !== a[4] && a[4] && (/^[0-9]+$/.test(a[4]) ? e = parseInt(a[4], 10) : e = a[4]));
        return new M(b, c, d, e)
    };

    function O(a, b, c, d, e, f, g, h) {
        this.B = a;
        this.oa = b;
        this.X = e;
        this.ja = f;
        this.a = h
    }
    O.prototype.getName = function() {
        return this.B
    };

    function ha() {
        this.b = navigator.userAgent
    }
    var ia = new O("Unknown", new M, 0, 0, "Unknown", new M, 0, new L(!1, !1));

    function ja() {
        var a = new ha;
        if (-1 != a.b.indexOf("MSIE") || -1 != a.b.indexOf("Trident/")) {
            var b = Q(a),
                c = N(R(a)),
                d = null,
                e = S(a.b, /Trident\/([\d\w\.]+)/, 1),
                d = -1 != a.b.indexOf("MSIE") ? N(S(a.b, /MSIE ([\d\w\.]+)/, 1)) : N(S(a.b, /rv:([\d\w\.]+)/, 1));
            "" != e && N(e);
            a = new O("MSIE", d, 0, 0, b, c, 0, new L("Windows" == b && 6 <= d.g || "Windows Phone" == b && 8 <= c.g, !1))
        } else if (-1 != a.b.indexOf("Opera")) a: if (c = N(S(a.b, /Presto\/([\d\w\.]+)/, 1)), b = N(R(a)), null !== c.g || N(S(a.b, /rv:([^\)]+)/, 1)), -1 != a.b.indexOf("Opera Mini/")) c = N(S(a.b, /Opera Mini\/([\d\.]+)/,
            1)), a = new O("OperaMini", c, 0, 0, Q(a), b, 0, new L(!1, !1));
        else {
            if (-1 != a.b.indexOf("Version/") && (c = N(S(a.b, /Version\/([\d\.]+)/, 1)), null !== c.g)) {
                a = new O("Opera", c, 0, 0, Q(a), b, 0, new L(10 <= c.g, !1));
                break a
            }
            c = N(S(a.b, /Opera[\/ ]([\d\.]+)/, 1));
            a = null !== c.g ? new O("Opera", c, 0, 0, Q(a), b, 0, new L(10 <= c.g, !1)) : new O("Opera", new M, 0, 0, Q(a), b, 0, new L(!1, !1))
        } else if (/OPR\/[\d.]+/.test(a.b)) a = ka(a);
        else if (/AppleWeb(K|k)it/.test(a.b)) a = ka(a);
        else if (-1 != a.b.indexOf("Gecko")) {
            b = "Unknown";
            c = new M;
            d = N(R(a));
            e = !1; - 1 != a.b.indexOf("Firefox") ?
                (b = "Firefox", c = N(S(a.b, /Firefox\/([\d\w\.]+)/, 1)), e = 3 <= c.g && 5 <= c.m) : -1 != a.b.indexOf("Mozilla") && (b = "Mozilla");
            var f = N(S(a.b, /rv:([^\)]+)/, 1));
            e || (e = 1 < f.g || 1 == f.g && 9 < f.m || 1 == f.g && 9 == f.m && 2 <= f.a);
            a = new O(b, c, 0, 0, Q(a), d, 0, new L(e, !1))
        } else a = ia;
        return a
    }

    function Q(a) {
        var b = S(a.b, /(iPod|iPad|iPhone|Android|Windows Phone|BB\d{2}|BlackBerry)/, 1);
        if ("" != b) return /BB\d{2}/.test(b) && (b = "BlackBerry"), b;
        a = S(a.b, /(Linux|Mac_PowerPC|Macintosh|Windows|CrOS|PlayStation|CrKey)/, 1);
        return "" != a ? ("Mac_PowerPC" == a ? a = "Macintosh" : "PlayStation" == a && (a = "Linux"), a) : "Unknown"
    }

    function R(a) {
        var b = S(a.b, /Windows Phone( OS)? ([^;)]+)/, 2);
        if (b || (b = S(a.b, /(OS X|Windows NT|Android) ([^;)]+)/, 2)) || (b = S(a.b, /(iPhone )?OS ([\d_]+)/, 2))) return b;
        if (b = S(a.b, /(?:Linux|CrOS|CrKey) ([^;)]+)/, 1))
            for (var b = b.split(/\s/), c = 0; c < b.length; c += 1)
                if (/^[\d\._]+$/.test(b[c])) return b[c];
        return (a = S(a.b, /(BB\d{2}|BlackBerry).*?Version\/([^\s]*)/, 2)) ? a : "Unknown"
    }

    function ka(a) {
        var b = Q(a),
            c = N(R(a)),
            d = N(S(a.b, /AppleWeb(?:K|k)it\/([\d\.\+]+)/, 1)),
            e = "Unknown",
            f = new M,
            f = "Unknown",
            g = !1;
        /OPR\/[\d.]+/.test(a.b) ? e = "Opera" : -1 != a.b.indexOf("Edge") ? e = "Edge" : -1 != a.b.indexOf("Chrome") || -1 != a.b.indexOf("CrMo") || -1 != a.b.indexOf("CriOS") ? e = "Chrome" : /Silk\/\d/.test(a.b) ? e = "Silk" : "BlackBerry" == b || "Android" == b ? e = "BuiltinBrowser" : -1 != a.b.indexOf("PhantomJS") ? e = "PhantomJS" : -1 != a.b.indexOf("Safari") ? e = "Safari" : -1 != a.b.indexOf("AdobeAIR") ? e = "AdobeAIR" : -1 != a.b.indexOf("PlayStation") ?
            e = "BuiltinBrowser" : -1 != a.b.indexOf("FBAN") && (e = "FBWebUI");
        "BuiltinBrowser" == e ? f = "Unknown" : "Silk" == e ? f = S(a.b, /Silk\/([\d\._]+)/, 1) : "Chrome" == e ? f = S(a.b, /(Chrome|CrMo|CriOS)\/([\d\.]+)/, 2) : -1 != a.b.indexOf("Version/") ? f = S(a.b, /Version\/([\d\.\w]+)/, 1) : "AdobeAIR" == e ? f = S(a.b, /AdobeAIR\/([\d\.]+)/, 1) : "Opera" == e ? f = S(a.b, /OPR\/([\d.]+)/, 1) : "PhantomJS" == e ? f = S(a.b, /PhantomJS\/([\d.]+)/, 1) : "FBWebUI" == e ? f = S(a.b, /FBSV\/([\d.]+)/, 1) : "Edge" == e && (f = S(a.b, /Edge\/([\d.]+)/, 1));
        f = N(f);
        g = "AdobeAIR" == e ? 2 < f.g || 2 == f.g &&
            5 <= f.m : "BlackBerry" == b ? 10 <= c.g : "Android" == b ? 2 < c.g || 2 == c.g && 1 < c.m : 526 <= d.g || 525 <= d.g && 13 <= d.m;
        return new O(e, f, 0, 0, b, c, 0, new L(g, 536 > d.g || 536 == d.g && 11 > d.m))
    }

    function S(a, b, c) {
        return (a = a.match(b)) && a[c] ? a[c] : ""
    };

    function la(a) {
        this.c = a || "-"
    }
    la.prototype.a = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++) b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.c)
    };

    function ma(a, b, c) {
        this.f = a;
        this.c = b;
        this.i = c;
        this.a = new la("-")
    }

    function na(a) {
        I(a.c, a.a.a("mti", "loading"));
        T(a, "loading")
    }

    function U(a) {
        J(a.c, a.a.a("mti", "loading"));
        ea(a.c, a.a.a("mti", "active")) || I(a.c, a.a.a("mti", "inactive"));
        T(a, "inactive")
    }

    function T(a, b, c) {
        if (a.i[b])
            if (c) a.i[b](c.getName(), V(c));
            else a.i[b]()
    };

    function W(a, b) {
        this.B = a;
        this.C = 4;
        this.A = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.A = c[1], this.C = parseInt(c[2], 10))
    }
    W.prototype.getName = function() {
        return this.B
    };
    W.prototype.Y = function(a) {
        var b = [];
        a = a.split(/,\s*/);
        for (var c = 0; c < a.length; c++) {
            var d = a[c].replace(/['"]/g, ""); - 1 == d.indexOf(" ") ? b.push(d) : b.push("'" + d + "'")
        }
        return b.join(",")
    };

    function V(a) {
        return a.A + a.C
    };

    function oa(a, b) {
        this.f = a;
        this.c = b;
        this.a = this.f.createElement("span", {
            "aria-hidden": "true"
        }, this.c)
    }

    function pa(a) {
        G(a.f, "body", a.a)
    }

    function qa(a) {
        var b = "position:absolute;top:-999px;left:-999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + a.Y(a.B) + "!important;",
            c = "normal",
            d = a.C + "00";
        "o" === a.A ? c = "oblique" : "i" === a.A && (c = "italic");
        return b + ("font-style:" + c + ";font-weight:" + d + ";")
    };

    function ra(a, b, c, d, e, f, g, h) {
        this.J = a;
        this.ga = b;
        this.f = c;
        this.a = d;
        this.F = h || "BESb\uc5d0swy";
        this.L = e;
        this.l = {};
        this.ia = f || 5E4;
        this.K = g || null;
        this.i = this.c = null;
        a = new oa(this.f, this.F);
        pa(a);
        for (var k in X) X.hasOwnProperty(k) && (b = new W(X[k], V(this.a)), F(a.f, a.a, qa(b)), this.l[X[k]] = a.a.offsetWidth);
        H(a.a)
    }
    var X = {
        xa: "serif",
        wa: "sans-serif",
        sa: "monospace"
    };

    function sa(a, b, c) {
        for (var d in X)
            if (X.hasOwnProperty(d) && b === a.l[X[d]] && c === a.l[X[d]]) return !0;
        return !1
    }

    function ta(a) {
        var b = a.c.a.offsetWidth,
            c = a.i.a.offsetWidth;
        b === a.l.serif && c === a.l["sans-serif"] || a.L.a && sa(a, b, c) ? da() - a.ha >= a.ia ? a.L.a && sa(a, b, c) && (null === a.K || a.K.hasOwnProperty(a.a.getName())) ? ua(a, a.J) : ua(a, a.ga) : va(a) : ua(a, a.J)
    }

    function va(a) {
        setTimeout(z(function() {
            ta(this)
        }, a), 25)
    }

    function ua(a, b) {
        H(a.c.a);
        H(a.i.a);
        b(a.a)
    };

    function wa(a, b, c, d) {
        this.f = b;
        this.a = c;
        this.c = 0;
        this.l = this.i = !1;
        this.L = d;
        this.K = a.a
    }

    function xa(a, b, c, d, e) {
        if (0 === b.length && e) U(a.a);
        else
            for (a.c += b.length, e && (a.i = e), e = 0; e < b.length; e++) {
                var f = b[e],
                    g = c[f.getName()],
                    h = a.a,
                    k = f;
                I(h.c, h.a.a("mti", k.getName(), V(k).toString(), "loading"));
                T(h, "fontloading", k);
                f = new ra(z(a.F, a), z(a.J, a), a.f, f, a.K, a.L, d, g);
                f.c = new oa(f.f, f.F);
                pa(f.c);
                f.i = new oa(f.f, f.F);
                pa(f.i);
                f.ha = da();
                g = f.c;
                h = new W(f.a.getName() + ",serif", V(f.a));
                F(g.f, g.a, qa(h));
                g = f.i;
                h = new W(f.a.getName() + ",sans-serif", V(f.a));
                F(g.f, g.a, qa(h));
                ta(f)
            }
    }
    wa.prototype.F = function(a) {
        var b = this.a;
        J(b.c, b.a.a("mti", a.getName(), V(a).toString(), "loading"));
        J(b.c, b.a.a("mti", a.getName(), V(a).toString(), "inactive"));
        I(b.c, b.a.a("mti", a.getName(), V(a).toString(), "active"));
        T(b, "fontactive", a);
        this.l = !0;
        ya(this)
    };
    wa.prototype.J = function(a) {
        var b = this.a;
        J(b.c, b.a.a("mti", a.getName(), V(a).toString(), "loading"));
        ea(b.c, b.a.a("mti", a.getName(), V(a).toString(), "active")) || I(b.c, b.a.a("mti", a.getName(), V(a).toString(), "inactive"));
        T(b, "fontinactive", a);
        ya(this)
    };

    function ya(a) {
        0 == --a.c && a.i && (a.l ? (a = a.a, J(a.c, a.a.a("mti", "loading")), J(a.c, a.a.a("mti", "inactive")), I(a.c, a.a.a("mti", "active")), T(a, "active")) : U(a.a))
    };
    mti.pa = function() {
        this.Y = '"'
    };
    mti.j = function() {
        this.M = mti.j.c;
        this.s = mti.j.i
    };
    mti.j.c = ["font-style", "font-weight"];
    mti.j.i = {
        "font-style": [
            ["n", "normal"]
        ],
        "font-weight": [
            ["4", "normal"]
        ]
    };
    mti.j.a = function(a, b, c) {
        this.U = a;
        this.la = b;
        this.s = c
    };
    mti.j.a.prototype.compact = function(a, b) {
        for (var c = 0; c < this.s.length; c++)
            if (b == this.s[c][1]) {
                a[this.U] = this.s[c][0];
                break
            }
    };
    mti.j.a.prototype.expand = function(a, b) {
        for (var c = 0; c < this.s.length; c++)
            if (b == this.s[c][0]) {
                a[this.U] = this.la + ":" + this.s[c][1];
                break
            }
    };
    mti.j.prototype.compact = function(a) {
        var b = ["n", "4"];
        a = a.split(";");
        for (var c = 0, d = a.length; c < d; c++) {
            var e = a[c].replace(/\s+/g, "").split(":");
            if (2 == e.length) {
                var f = e[1];
                a: {
                    for (var e = e[0], g = 0; g < this.M.length; g++)
                        if (e == this.M[g]) {
                            e = new mti.j.a(g, e, this.s[e]);
                            break a
                        }
                    e = null
                }
                e && e.compact(b, f)
            }
        }
        return b.join("")
    };
    mti.j.prototype.expand = function(a) {
        if (2 != a.length) return null;
        for (var b = [null, null], c = 0, d = this.M.length; c < d; c++) {
            var e = this.M[c];
            (new mti.j.a(c, e, this.s[e])).expand(b, a.substr(c, 1))
        }
        return b[0] && b[1] ? b.join(";") + ";" : null
    };

    function za(a, b, c) {
        this.i = a;
        this.S = b;
        this.b = c;
        this.a = this.c = 0
    }
    za.prototype.load = function(a) {
        var b = a.context || this.i;
        this.f = new A(this.i, b);
        b = new ma(this.f, b.document.documentElement, a);
        if (this.b.a.c) {
            var c = this.S,
                d = this.f,
                e = [],
                f;
            for (f in a)
                if (a.hasOwnProperty(f)) {
                    var g = c.a[f];
                    g && e.push(g(a[f], d))
                }
            a = a.timeout;
            this.a = this.c = e.length;
            a = new wa(this.b, this.f, b, a);
            f = 0;
            for (c = e.length; f < c; f++) d = e[f], d.na(this.b, z(this.l, this, d, b, a))
        } else U(b)
    };
    za.prototype.l = function(a, b, c, d) {
        var e = this;
        d ? a.load(function(a, d, h) {
            Aa(e, b, c, a, d, h)
        }) : (a = 0 == --this.c, this.a--, a && (0 == this.a ? U(b) : na(b)), xa(c, [], {}, null, a))
    };

    function Aa(a, b, c, d, e, f) {
        var g = 0 == --a.c;
        g && na(b);
        setTimeout(function() {
            xa(c, d, e || {}, f || null, g)
        }, 0)
    };
    var Ba = window,
        Ca = ja(),
        Da = Ba.MonoTypeWebFonts = new za(window, new function() {
            this.a = {}
        }, Ca);
    window.MonoTypeWebFonts.load = Da.load;
    mti.ra = 4E4;
    mti.o = function(a, b, c, d, e) {
        this.v = a;
        this.b = b;
        this.f = c;
        this.h = d;
        this.aa = {};
        this.W = e;
        this.u = [];
        this.$ = d.efg;
        this.O = {};
        this.H = d.efg;
        this.v.mti_element_cache = [];
        this.version = this.D = void 0;
        this.R = {
            TTF: "truetype",
            WOFF: "woff",
            SVG: "svg",
            MTX: "truetype",
            OTF: "opentype",
            WOFF2: "woff2"
        };
        1 == Y.UseTextIndent ? this.G = "text-align:left;text-indent:-9999px;font-size:0px" : this.G = "visibility:hidden;";
        this.D = this.b.getName().toLowerCase();
        this.version = this.b.oa;
        this.N = {
            EOT: 2,
            SVG: 11,
            OTF: 13,
            TTF: 1,
            WOFF: 3,
            WOFF2: 14
        }
    };
    mti.o.a = "monotype";
    mti.o.c = !1;
    mti.o.prototype = {
        na: function(a, b) {
            var c = this,
                d = c.h.projectId,
                e;
            if (d) {
                Ea(c);
                if (void 0 !== Y.PreLoadFonts && c.isArray(Y.PreLoadFonts)) {
                    var f = Y.PreLoadFonts;
                    e = [];
                    for (var g = 0; g < f.length; g++) {
                        var h = f[g].split(":"),
                            k = h[0],
                            t = 1 < h.length ? h[1].split(",") : "n4",
                            h = "n4";
                        if (c.isArray(t) && 0 < t.length)
                            for (var B = 0; B < t.length; B++) h = t[B], h = new W(k, h), h.fontfamily = k, e.push(h);
                        else h = new W(k, h), h.fontfamily = k, e.push(h)
                    }
                    Fa(c, e);
                    b(!0)
                } else c.v.mti_element_cache = [], this.Z(function() {
                    var a = new Ga(document.body, c.f, c.h.pfL, !0);
                    a.ba(document.body);
                    e = a.ca();
                    Fa(c, e);
                    c.v.mti_element_cache = a.I;
                    for (var a = c.v.mti_element_cache, d = 0; d < a.length; d++)
                        for (var f in c.O)
                            if (-1 < c.f.P(a[d]).indexOf(f)) {
                                void 0 == a[d].getAttribute("id");
                                var h = a[d],
                                    g = f,
                                    m = c.O[f],
                                    k = [],
                                    n = c.f.P(h).split(","),
                                    l = void 0;
                                a: if (l = !1, n instanceof Array)
                                    for (var q = 0; q < n.length; q++)
                                        if (m instanceof Array)
                                            for (var t = 0; t < m.length; t++) {
                                                if (K(n[q]) == K(m[t])) {
                                                    l = !0;
                                                    break a
                                                }
                                            } else {
                                            if (K(n[q]) == K(m)) {
                                                l = !0;
                                                break
                                            }
                                        } else if (m instanceof Array)
                                    for (q = 0; q < m.length; q++)
                                        if (n == m[q]) {
                                            l = !0;
                                            break
                                        }
                                if (!l) {
                                    if (m instanceof Array)
                                        for (l = 0; l < n.length; l++)
                                            if (K(n[l]) != g)
                                                if (-1 < K(n[l]).indexOf(g))
                                                    for (q = 0; q < m.length; q++) "" != m[q] && (k.push(m[q]), k.push(g));
                                                else k.push(n[l]);
                                            else if (m instanceof Array)
                                                for (q = 0; q < m.length; q++) "" != m[q] && (k.push(m[q]), k.push(g));
                                            else k.push(m), k.push(g);
                                    else
                                        for (l = 0; l < n.length; l++) K(n[l]) != g ? -1 < K(n[l]).indexOf(g) ? (k.push(m), k.push(g)) : k.push(n[l]) : (k.push(m), k.push(g));
                                    m = {};
                                    n = [];
                                    l = 0;
                                    for (q = k.length; l < q; ++l) m.hasOwnProperty(K(k[l])) || (n.push(K(k[l])), m[K(k[l])] = 1);
                                    k = n;
                                    if (1 < k.length && k[0] != g) {
                                        m = "";
                                        for (l =
                                                 0; l < k.length; l++) m += "'" + k[l] + "'", l != k.length - 1 && (m += ",");
                                        m += "";
                                        h.setAttribute("data-mtiFont", g);
                                        g = "" + m;
                                        h.style.setProperty ? h.style.setProperty("font-family", "") : h.style.setAttribute("font-family", "");
                                        h.setAttribute("style", h.style.cssText + "font-family:" + g + " !important;")
                                    }
                                }
                            }!0 === Y.LoadAllFonts && b(!0);
                    b(Y.EnableCustomFOUTHandler)
                });
                1 == Y.EnableCustomFOUTHandler && (document.documentElement.style.visibility = "hidden", setTimeout(function() {
                    document.documentElement.style.visibility = ""
                }, 700));
                var v = [];
                e && (v =
                    e);
                h = null;
                "function" === typeof c.v["__MonotypeConfiguration__" + d] && (h = c.v["__MonotypeConfiguration__" + d]());
                if (void 0 !== h || null !== h) loadAllFonts = h.loadAllFonts;
                if (loadAllFonts)
                    for (v = [], f = 0; f < c.h.pfL.length; f++) h = "n4", g = 400, k = "normal", void 0 != c.h.pfL[f].fontWeight && void 0 != c.h.pfL[f].fontStyle && (k = c.h.pfL[f].fontStyle, g = c.h.pfL[f].fontWeight, h = k.charAt(0) + g / 100), t = c.h.pfL[f].fontfamily, h = new W(t, h), h.fontfamily = t, h.fontWeight = g, h.fontStyle = k, v.push(h);
                c.v["__mti_fntLst" + d] = function() {
                    for (var a = [], c = [], b = 0; b < v.length; b++) a.push({
                        fontfamily: v[b].B,
                        fontStyle: v[b].A,
                        fontWeight: v[b].C
                    }), c.push(v[b]);
                    return a
                }
            } else b(Y.EnableCustomFOUTHandler)
        }
    };
    MonoTypeWebFonts.S.a[mti.o.a] = function(a) {
        var b = ja(),
            c = new A(window),
            d = null;
        a.enableOtf && (d = new mti.ta(c, b, a));
        b = new mti.o(window, b, c, a, d);
        if (a.reqSub || Y.EnableDSForAllFonts || a.enableOtf) {
            var e = new mti.ua(b);
            window.MonoTypeWebFonts.renderPartial = function(a, c) {
                e.Ca(a, c)
            }
        }
        return b
    };
    var Ha = {
        ec: "true",
        dfcURL: "http://api2.fonts.com/FontSubsetter.ashx",
        fontdataversion: "v2",
        sO: "true",
        ffArray: {
            safari: {
                "3.1": "ttf",
                "5.1": "woff"
            },
            msafari: {
                1: "svg",
                "4.2": "ttf",
                "5.1": "woff",
                "10.0": "woff2"
            },
            chrome: {
                3: "svg",
                4: "ttf",
                5: "woff",
                36: "woff2"
            },
            opera: {
                10: "ttf",
                "11.10": "woff",
                "26.0": "woff2"
            },
            msie: {
                4: "eot",
                9: "woff"
            },
            mozilla: {
                "3.5": "ttf",
                "3.6": "woff",
                "39.0": "woff2"
            },
            edge: {
                12: "woff",
                14: "woff2"
            }
        },
        bsmcArray: {
            safari: {
                "3.1": "2000",
                "5.0": "15600"
            },
            msafari: {
                1: "15600"
            },
            chrome: {
                3: "15600"
            },
            opera: {
                10: "15600"
            },
            msie: {
                4: "1000",
                9: "2080"
            },
            mozilla: {
                "3.5": "15600"
            },
            edge: {
                12: "15600"
            }
        },
        fctypeArray: {
            ttf: "1",
            eot: "2",
            woff: "3",
            svg: "11",
            otf: "13",
            woff2: "14"
        },
        specialChar: "%u201C %u201D %u2200 %u2202 %u2203 %u2205 %u2207 %u2208 %u2209 %u220B %u220F %u2211 %u2018 %u2019 %B0 %u2026 %u2122 %A9 %AE %u2014 %u2013 %A7 %B1 %B7 %u2032 %u2033 %u20AC %u2248 %u2260 %u2264 %u2265 %u221A %u221D %u2220 %u2225 %u2227 %u2228 %u2229 %u222A %u222B %u222E %u2234 %u2235 %u2236 %u2237 %u223D %u224C %u2261 %u226E %u226F %u2299 %u22A5 %u0391 %u0392 %u0393 %u0394 %u0395 %u0396 %u0397 %u0398 %u0399 %u039A %u039B %u039C %u039D %u039E %u039F %u03A0 %u03A1 %u03A3 %u03A4 %u03A5 %u03A6 %u03A7 %u03A8 %u03A9 %u221E %u2190 %u2191 %u2192 %u2193 %u2640 %u2642 + %22 %5C %23 %26 %3F %B7 %3B %3A".split(" ")
    };

    function Z(a, b) {
        return void 0 != Ha[b] ? Ha[b] : a.h[b]
    };

    function Fa(a, b) {
        var c = "TTF",
            d = a.h.projectId,
            e = a.h.fcURL,
            f = Z(a, "dfcURL"),
            g = a.f.createElement("style", {
                type: "text/css",
                id: "mti_fontface_" + a.h.projectId
            }),
            h = "";
        a.O = {};
        var k = null,
            t = null;
        b || (b = []);
        for (var B = 0; B < a.h.pfL.length; B++) {
            var c = a.h.pfL[B],
                v = c.fontfamily,
                y = c.contentIds,
                r = c.enableOtf,
                D = c.subsetOption,
                u = null;
            a.H && (k = c.fontWeight, t = c.fontStyle, u = t.charAt(0) + k / 100, a.$ = !0);
            var p = Z(a, "ffArray"),
                m = a.D,
                c = a.version.g + a.version.m / 10;
            "firefox" == a.D && (m = "mozilla");
            /ipad|ipod|iphone/.test(a.b.X.toLowerCase()) &&
            (m = "msafari", c = a.b.ja.g);
            var p = p[m],
                m = "",
                x = void 0;
            for (x in p) parseFloat(c) >= parseFloat(x) && y[p[x].toUpperCase()] && (m = p[x]);
            "" === m && (m = "ttf");
            c = m;
            p = !1;
            if (void 0 === Y.LoadAllFonts && (0 < b.length || a.fa))
                for (p = a.fa ? !0 : !1, m = 0; m < b.length; m++)
                    if (b[m].fontfamily == v && (null != k ? b[m].C == k / 100 : 1) && (null != t ? b[m].A == t.charAt(0) : 1)) {
                        p = !0;
                        break
                    }!0 === Y.LoadAllFonts && (p = !0);
            p && (u = null == u ? new W(v) : new W(v, u), a.u.push(u));
            if (!Y.PreLoadFonts || p) {
                var u = "",
                    p = a,
                    m = y,
                    x = d,
                    n = e,
                    u = f,
                    l = a.h.ck,
                    q = c,
                    E = r,
                    r = D,
                    C = m[q.toUpperCase()],
                    P = void 0,
                    n = n.replace("http://", "").replace("https://", "");
                p.V(r) ? (u = u.replace("http://", "").replace("https://", ""), C = m.TTF, u = "https://" + u + "?" + l + "&fctypeId=" + ("15" == Z(p, "fctypeArray")[Ia(p)] ? "3" : Z(p, "fctypeArray")[Ia(p)]) + "&fcId=" + C + "&env=" + p.h.env + "&projectId=" + x, void 0 != r && (p = r.unicode, m = r.text, x = r.lang, r = r.ot, void 0 != p && (u += "&ranges=" + p), void 0 != m && (u += "&content=" + m.replace('"', "%22").replace("'", "%27").replace("#", "%23").replace("?", "%3F").replace("&", "%26")), void 0 != x && (u += "&languages=" + x), void 0 != r &&
                (u += "&ot=" + r)), P = u) : (n = "https://" + n + (E ? "ot/" : ""), "" !== p.N[q.toUpperCase()] ? n += p.N[q.toUpperCase()] + "/" : n += p.N.WOFF + "/", P = n + C + "." + q.toLowerCase() + "?" + l, P += "&projectId=" + x, null != q && "SVG" == q.toUpperCase() && (P += "#" + C));
                if (u = P) void 0 != D && (c = Ia(a)), h = Ja(a, v, "", h, k, t, v, u, c, y, !0, "", !1, !0, void 0, "", !1)
            }
        }
        "" != h && G(a.f, "head", g);
        g.styleSheet ? g.styleSheet.cssText = h : g.appendChild(document.createTextNode(h))
    };
    mti.o.prototype.load = function(a) {
        a(this.u, this.aa)
    };

    function Ea(a) {
        var b = new la("-"),
            c = a.f.createElement("style", {
                type: "text/css",
                id: "mti_stylesheet_" + a.h.projectId
            }),
            d = "";
        if (1 == Y.EnableCustomFOUTHandler || 1 == Y.UseHybrid) {
            for (var e = a.h.pfL, d = d + (".mti-loading .mti_font_element{" + a.G + "}\n"), f = 0; f < e.length; f++) {
                var g = e[f].fontfamily,
                    h = "4",
                    k = "n";
                a.H && (h = e[f].fontWeight / 100, k = e[f].fontStyle.charAt(0));
                g && (d += "." + b.a("mti", g, k + h, "loading") + " .mti_font_element{" + a.G + "}\n")
            }
            d += ".mti_hide_element{" + a.G + "}"
        }
        for (f in a.h.selectorFontMap)
            if (b = a.h.selectorFontMap[f],
                g = b.familyName, a.H ? (k = b.fontStyle, h = b.fontWeight) : (k = "normal", h = "400"), d = Ja(a, g, f, d, h, k, "", "", "", "", !1, b, !0), 1 == Y.EnableCustomFOUTHandler)
                for (h in d += "/*fout specific code:*/\n", g = f.split(","), h = void 0, g) d += ".mti-loading " + g[h] + "{" + a.G + "}\n";
        "" != d && G(a.f, "head", c);
        c.styleSheet ? c.styleSheet.cssText = d : c.appendChild(document.createTextNode(d))
    }

    function Ja(a, b, c, d, e, f, g, h, k, t, B, v, y, r, D, u, p) {
        1 < a.f.indexOf(g, D) ? D = "" : "";
        r ? d += '@font-face{\nfont-family:"' + g + (D ? D : "") + (u ? u : "") + '";' : "";
        r ? "" : d += c + "{font-family:'" + b + "';";
        a.H && !p && (d = d + ("\n font-style:" + f + ";") + ("\n font-weight:" + e + ";"));
        h ? d += '\nsrc:url("' + h + '")' : "";
        B ? (b = d, null != k && "EOT" == k.toUpperCase() || "MTX" == k.toUpperCase() || (c = a.R[k.toUpperCase()], t[k.toUpperCase()] || (c = a.R.TTF), b += " format('" + c + "')"), d = b) : "";
        y ? (k = d, null != a.W && (t = v.otf, v = v.vrnt, t && null != t && "" != t && (k += a.W.za(t, v))), d = k) : "";
        return d +=
            ";}\n"
    }
    mti.o.prototype.Z = function(a) {
        function b() {
            document.body ? a() : setTimeout(b, 0)
        }
        b()
    };

    function Ia(a) {
        var b = Z(a, "ffArray"),
            c = a.D,
            d = a.version.g + a.version.m / 10;
        "firefox" == a.D && (c = "mozilla");
        /ipad|ipod|iphone/.test(a.b.X.toLowerCase()) && (c = "msafari");
        a = b[c];
        var b = "",
            e;
        for (e in a) parseFloat(d) >= parseFloat(e) && (b = a[e]);
        "" === b && (b = "ttf");
        return b
    }
    mti.o.prototype.V = function(a) {
        var b = !1;
        void 0 != typeof a && null != a && "" != a && (void 0 != typeof a.lang && null != a.lang && "" != a.lang ? b = !0 : void 0 != typeof a.unicode && null != a.unicode && "" != a.unicode ? b = !0 : void 0 != typeof a.text && null != a.text && "" != a.text && (b = !0));
        return b
    };
    mti.o.prototype.isArray = function(a) {
        return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
    };
    var Y = window.MTIConfig || {
        Ba: !1,
        qa: !1,
        va: !1
    };

    function Ga(a, b, c, d) {
        this.ma = a;
        this.f = b;
        this.ka = c;
        this.w = {};
        this.I = [];
        this.u = [];
        d ? this.ea = d : !1;
        this.da = "img script noscript iframe object style param embed link meta head title br hr svg path".split(" ")
    }
    Ga.prototype = function() {
        function a(a) {
            var b = !1;
            void 0 != typeof a && null != a && "" != a && (void 0 != typeof a.lang && null != a.lang && "" != a.lang ? b = !0 : void 0 != typeof a.unicode && null != a.unicode && "" != a.unicode ? b = !0 : void 0 != typeof a.text && null != a.text && "" != a.text ? b = !0 : void 0 != typeof a.ot && null != a.ot && "" != a.ot && (b = !0));
            return b
        }

        function b(a, d, e) {
            if (void 0 !== a && null !== a && "" !== a && a.tagName && 1 === a.nodeType)
                for (0 > e.f.indexOf(e.da, a.tagName.toLowerCase()) && (d ? e.T(a, d) : e.T(a)), a = a.firstChild; a;) b(a, d, e), a = a.nextSibling
        }
        return {
            T: function(b,
                        d) {
                var e = this.ka,
                    f = this.f.getComputedStyle(b),
                    g = f.fontFamily,
                    h = "",
                    k = f.fontStyle,
                    t = 0,
                    B = 0,
                    v = "",
                    g = (g || "").replace(/^\s|\s$/g, "").replace(/'|"/g, "").replace(/,\s*/g, "|");
                if ("" != g)
                    for (var g = g.split("|"), y = "", t = 0; t < g.length; t++)
                        for (B = 0; B < e.length; B++) {
                            var r = e[B],
                                y = r.fontfamily,
                                D, u, p = r.enableSubsetting,
                                m = r.enableOtf,
                                x = r.contentIds,
                                n = r.subsetOption,
                                l = !1,
                                q = new RegExp("^(" + g[t] + ")$", "ig");
                            if (void 0 != r.fontWeight && void 0 != r.fontStyle) D = r.fontWeight, u = r.fontStyle, v = u.charAt(0) + D / 100, h = "normal" == f.fontWeight ?
                                400 : "bold" == f.fontWeight ? 700 : f.fontWeight;
                            else {
                                var E = "h1 h2 h3 h4 h5 h6 strong b".split(" ");
                                1 == b.nodeType && (h = 0 <= this.f.indexOf(E, b.tagName.toLowerCase()) ? 400 : "normal" == f.fontWeight ? 400 : "bold" == f.fontWeight ? 700 : 400)
                            }
                            E = y.replace(/^\s|\s$/g, "");
                            if (q.test(E) && (void 0 != D || void 0 != u ? h == D && k == u && (l = new W(E, v), l.fontfamily = E, l.fontWeight = D, l.fontStyle = u, l.enableSubsetting = p, l.contentIds = x, l.enableOtf = m, l.subsetOption = n, this.u.push(l), this.I.push(b), l = !0) : (v = "n4", l = new W(E), l.fontfamily = E, l.fontWeight = h /
                                100, l.fontStyle = k.charAt(0), l.enableSubsetting = p, l.contentIds = x, l.enableOtf = m, l.subsetOption = n, this.u.push(l), this.I.push(b), l = !0), l && (1 == Y.EnableCustomFOUTHandler && I(b, d ? "mti_font_element" + d : "mti_font_element"), p = b.getAttribute("style"), (p = null != p ? "string" == typeof p ? p : "cssText" in p ? p.cssText : "" : "") && -1 < this.f.indexOf(p, "font-weight") && -1 < this.f.indexOf(p, "font-style") ? y += "_" + k.charAt(0) + h / 100 : y += 1 < v.length ? "_" + v : "", (r.enableSubsetting || Y.EnableDSForAllFonts) && !a(n)))) {
                                r = "";
                                r = this.f;
                                n = b;
                                x = "";
                                if (void 0 !=
                                    typeof n && null != n) {
                                    void 0 != n && null != n && "INPUT" == n.tagName && (x += n.value);
                                    n = n.childNodes || n;
                                    p = "img script noscript iframe object style param embed link meta head title br hr svg path".split(" ");
                                    for (m = 0; m < n.length; m++)
                                        if (8 != n[m].nodeType && 0 > r.indexOf(p, n[m].tagName ? n[m].tagName.toLowerCase() : ""))
                                            if (l = (l = n[m].parentNode) ? "undefined" != typeof l.currentStyle ? l.currentStyle.textTransform : (l = r.a.defaultView.getComputedStyle(l, null)) ? l.getPropertyValue("text-transform") : "" : void 0, "none" != l) l = 1 != n[m].nodeType ?
                                                n[m].nodeValue.replace(/(?:\r\n|\r|\n)/g, " ") : "", x += l.toLowerCase() + l.toUpperCase();
                                            else {
                                                if ("none" != fa(r, n[m].parentNode)) {
                                                    q = n[m].parentNode;
                                                    l = fa(r, n[m].parentNode);
                                                    if ("undefined" != typeof q) {
                                                        for (var C = q.childNodes, E = q = 0; E < C.length; E++) 1 == C[E].nodeType && q++;
                                                        C = "";
                                                        switch (l) {
                                                            case "upper-alpha":
                                                                C = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".substring(0, q);
                                                                break;
                                                            case "lower-latin":
                                                                C = "abcdefghijklmnopqrstuvwxyz".substring(0, q);
                                                                break;
                                                            case "decimal":
                                                                C = "1234567890".substring(0, q);
                                                                break;
                                                            case "decimal-leading-zero":
                                                                C = "0" + "1234567890".substring(0,
                                                                    q);
                                                                break;
                                                            case "lower-roman":
                                                                C = "ivxlcdm";
                                                                break;
                                                            case "upper-roman":
                                                                C = "IVXLCDM";
                                                                break;
                                                            default:
                                                                C = ""
                                                        }
                                                    }
                                                    x = x + C
                                                }
                                                x += 1 != n[m].nodeType ? n[m].nodeValue.replace(/(?:\r\n|\r|\n)/g, " ") : ""
                                            }
                                    r = x
                                } else r = void 0;
                                this.w[y.replace(/^\s|\s$/g, "")] && (r += this.w[y.replace(/^\s|\s$/g, "")]);
                                this.w[y.replace(/^\s|\s$/g, "")] = r
                            }
                        }
            },
            ba: function(a, d) {
                b(this.ma, d, this);
                var e = !1,
                    f;
                for (f in this.w)
                    if (e = !0, this.ea) break;
                    else {
                        var g = this.w,
                            h = f,
                            k;
                        if ((k = this.w[f]) && "string" == typeof k) {
                            var t = "",
                                B = k.length,
                                v = null;
                            if ("from" in Array && "Set" in window) t =
                                Array.from(new Set(k)).join("");
                            else
                                for (var y = 0; y < B; y++) v = k.charAt(y), -1 == t.indexOf(v) && (t += v);
                            k = t
                        } else k = "";
                        g[h] = k
                    }
                return e ? this.w : null
            },
            ca: function() {
                var a = this.u,
                    b = null == a ? 0 : a.length,
                    e = {},
                    f, g = [];
                for (f = 0; f < b; f += 1) e[a[f].B + "||" + a[f].C + "||" + a[f].A] = a[f];
                for (f in e) g.push(e[f]);
                return this.u = g
            },
            Aa: function() {
                return this.I
            },
            V: a
        }
    }();
})(this, document);