function MarkerClusterer(t, e, i) {
    this.extend(MarkerClusterer, google.maps.OverlayView), this.map_ = t, this.markers_ = [], this.clusters_ = [], this.sizes = [53], this.styles_ = [], this.ready_ = !1;
    var r = i || {};
    this.gridSize_ = r.gridSize || 60, this.minClusterSize_ = r.minimumClusterSize || 2, this.maxZoom_ = r.maxZoom || null, this.styles_ = r.styles || [], this.imagePath_ = r.imagePath || this.MARKER_CLUSTER_IMAGE_PATH_, this.imageExtension_ = r.imageExtension || this.MARKER_CLUSTER_IMAGE_EXTENSION_, this.zoomOnClick_ = !0, null != r.zoomOnClick && (this.zoomOnClick_ = r.zoomOnClick), this.averageCenter_ = !1, null != r.averageCenter && (this.averageCenter_ = r.averageCenter), this.setupStyles_(), this.setMap(t), this.prevZoom_ = this.map_.getZoom();
    var n = this;
    google.maps.event.addListener(this.map_, "zoom_changed", function() {
        var t = n.map_.getZoom(),
            e = n.map_.minZoom || 0,
            i = Math.min(n.map_.maxZoom || 100, n.map_.mapTypes[n.map_.getMapTypeId()].maxZoom);
        t = Math.min(Math.max(t, e), i), n.prevZoom_ != t && (n.prevZoom_ = t, n.resetViewport())
    }), google.maps.event.addListener(this.map_, "idle", function() {
        n.redraw()
    }), e && (e.length || Object.keys(e).length) && this.addMarkers(e, !1)
}

function Cluster(t) {
    this.markerClusterer_ = t, this.map_ = t.getMap(), this.gridSize_ = t.getGridSize(), this.minClusterSize_ = t.getMinClusterSize(), this.averageCenter_ = t.isAverageCenter(), this.center_ = null, this.markers_ = [], this.bounds_ = null, this.clusterIcon_ = new ClusterIcon(this, t.getStyles(), t.getGridSize())
}

function ClusterIcon(t, e, i) {
    t.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView), this.styles_ = e, this.padding_ = i || 0, this.cluster_ = t, this.center_ = null, this.map_ = t.getMap(), this.div_ = null, this.sums_ = null, this.visible_ = !1, this.setMap(this.map_)
}! function(i) {
    "use strict";
    var n = i.GreenSockGlobals || i,
        t = function(t) {
            var e, i = t.split("."),
                r = n;
            for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
            return r
        }("com.greensock.utils"),
        C = function(t) {
            var e = t.nodeType,
                i = "";
            if (1 === e || 9 === e || 11 === e) {
                if ("string" == typeof t.textContent) return t.textContent;
                for (t = t.firstChild; t; t = t.nextSibling) i += C(t)
            } else if (3 === e || 4 === e) return t.nodeValue;
            return i
        },
        Z = _gsScope.document || {},
        e = void 0 !== i ? i : Z.defaultView || {
            getComputedStyle: function() {}
        },
        Y = function(t) {
            return e.getComputedStyle(t)
        },
        s = /([A-Z])/g,
        V = function(t, e, i, r) {
            var n;
            return (i = i || Y(t)) ? n = (t = i.getPropertyValue(e.replace(s, "-$1").toLowerCase())) || i.length ? t : i[e] : t.currentStyle && (n = (i = t.currentStyle)[e]), r ? n : parseInt(n, 10) || 0
        },
        o = function(t) {
            return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
        },
        k = function(t, e) {
            for (var i, r = e.length; - 1 < --r;)
                if (i = e[r], t.substr(0, i.length) === i) return i.length
        },
        S = /(?:\r|\n|\t\t)/g,
        P = /(?:\s\s+)/g,
        M = 127462,
        O = 127487,
        A = function(t) {
            return (t.charCodeAt(0) - 55296 << 10) + (t.charCodeAt(1) - 56320) + 65536
        },
        a = " style='position:relative;display:inline-block;" + (Z.all && !Z.addEventListener ? "*display:inline;*zoom:1;'" : "'"),
        l = function(t, e) {
            var i = -1 !== (t = t || "").indexOf("++"),
                r = 1;
            return i && (t = t.split("++").join("")),
                function() {
                    return "<" + e + a + (t ? " class='" + t + (i ? r++ : "") + "'>" : ">")
                }
        },
        r = t.SplitText = n.SplitText = function(t, e) {
            if ("string" == typeof t && (t = r.selector(t)), !t) throw "cannot split a null element.";
            this.elements = o(t) ? function(t) {
                var e, i, r, n = [],
                    s = t.length;
                for (e = 0; e < s; e++)
                    if (i = t[e], o(i))
                        for (r = i.length, r = 0; r < i.length; r++) n.push(i[r]);
                    else n.push(i);
                return n
            }(t) : [t], this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
        },
        j = function(t, e, i) {
            var r = t.nodeType;
            if (1 === r || 9 === r || 11 === r)
                for (t = t.firstChild; t; t = t.nextSibling) j(t, e, i);
            else(3 === r || 4 === r) && (t.nodeValue = t.nodeValue.split(e).join(i))
        },
        W = function(t, e) {
            for (var i = e.length; - 1 < --i;) t.push(e[i])
        },
        h = function(t) {
            var e, i = [],
                r = t.length;
            for (e = 0; e !== r; i.push(t[e++]));
            return i
        },
        U = function(t, e, i) {
            for (var r; t && t !== e;) {
                if (r = t._next || t.nextSibling) return r.textContent.charAt(0) === i;
                t = t.parentNode || t._parent
            }
            return !1
        },
        H = function(t) {
            var e, i, r = h(t.childNodes),
                n = r.length;
            for (e = 0; e < n; e++)(i = r[e])._isSplit ? H(i) : (e && 3 === i.previousSibling.nodeType ? i.previousSibling.nodeValue += 3 === i.nodeType ? i.nodeValue : i.firstChild.nodeValue : 3 !== i.nodeType && t.insertBefore(i.firstChild, i), t.removeChild(i))
        },
        u = function(t, e, i, r, n, s, o) {
            var a, l, h, u, c, p, f, d, _, m, g, v, y = Y(t),
                x = V(t, "paddingLeft", y),
                T = -999,
                w = V(t, "borderBottomWidth", y) + V(t, "borderTopWidth", y),
                b = V(t, "borderLeftWidth", y) + V(t, "borderRightWidth", y),
                C = V(t, "paddingTop", y) + V(t, "paddingBottom", y),
                k = V(t, "paddingLeft", y) + V(t, "paddingRight", y),
                S = .2 * V(t, "fontSize"),
                P = V(t, "textAlign", y, !0),
                M = [],
                O = [],
                A = [],
                R = e.wordDelimiter || " ",
                D = e.tag ? e.tag : e.span ? "span" : "div",
                I = e.type || e.split || "chars,words,lines",
                E = n && -1 !== I.indexOf("lines") ? [] : null,
                z = -1 !== I.indexOf("words"),
                L = -1 !== I.indexOf("chars"),
                N = "absolute" === e.position || !0 === e.absolute,
                F = e.linesClass,
                B = -1 !== (F || "").indexOf("++"),
                X = [];
            for (B && (F = F.split("++").join("")), h = (l = t.getElementsByTagName("*")).length, c = [], a = 0; a < h; a++) c[a] = l[a];
            if (E || N)
                for (a = 0; a < h; a++)((p = (u = c[a]).parentNode === t) || N || L && !z) && (v = u.offsetTop, E && p && Math.abs(v - T) > S && ("BR" !== u.nodeName || 0 === a) && (f = [], E.push(f), T = v), N && (u._x = u.offsetLeft, u._y = v, u._w = u.offsetWidth, u._h = u.offsetHeight), E && ((u._isSplit && p || !L && p || z && p || !z && u.parentNode.parentNode === t && !u.parentNode._isSplit) && (f.push(u), u._x -= x, U(u, t, R) && (u._wordEnd = !0)), "BR" === u.nodeName && (u.nextSibling && "BR" === u.nextSibling.nodeName || 0 === a) && E.push([])));
            for (a = 0; a < h; a++) p = (u = c[a]).parentNode === t, "BR" !== u.nodeName ? (N && (_ = u.style, z || p || (u._x += u.parentNode._x, u._y += u.parentNode._y), _.left = u._x + "px", _.top = u._y + "px", _.position = "absolute", _.display = "block", _.width = u._w + 1 + "px", _.height = u._h + "px"), !z && L ? u._isSplit ? (u._next = u.nextSibling, u.parentNode.appendChild(u)) : u.parentNode._isSplit ? (u._parent = u.parentNode, !u.previousSibling && u.firstChild && (u.firstChild._isFirst = !0), u.nextSibling && " " === u.nextSibling.textContent && !u.nextSibling.nextSibling && X.push(u.nextSibling), u._next = u.nextSibling && u.nextSibling._isFirst ? null : u.nextSibling, u.parentNode.removeChild(u), c.splice(a--, 1), h--) : p || (v = !u.nextSibling && U(u.parentNode, t, R), u.parentNode._parent && u.parentNode._parent.appendChild(u), v && u.parentNode.appendChild(Z.createTextNode(" ")), "span" === D && (u.style.display = "inline"), M.push(u)) : u.parentNode._isSplit && !u._isSplit && "" !== u.innerHTML ? O.push(u) : L && !u._isSplit && ("span" === D && (u.style.display = "inline"), M.push(u))) : E || N ? (u.parentNode && u.parentNode.removeChild(u), c.splice(a--, 1), h--) : z || t.appendChild(u);
            for (a = X.length; - 1 < --a;) X[a].parentNode.removeChild(X[a]);
            if (E) {
                for (N && (m = Z.createElement(D), t.appendChild(m), g = m.offsetWidth + "px", v = m.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(m)), _ = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (d = " " === R && (!N || !z && !L), a = 0; a < E.length; a++) {
                    for (f = E[a], (m = Z.createElement(D)).style.cssText = "display:block;text-align:" + P + ";position:" + (N ? "absolute;" : "relative;"), F && (m.className = F + (B ? a + 1 : "")), A.push(m), h = f.length, l = 0; l < h; l++) "BR" !== f[l].nodeName && (u = f[l], m.appendChild(u), d && u._wordEnd && m.appendChild(Z.createTextNode(" ")), N && (0 === l && (m.style.top = u._y + "px", m.style.left = x + v + "px"), u.style.top = "0px", v && (u.style.left = u._x - v + "px")));
                    0 === h ? m.innerHTML = "&nbsp;" : z || L || (H(m), j(m, String.fromCharCode(160), " ")), N && (m.style.width = g, m.style.height = u._h + "px"), t.appendChild(m)
                }
                t.style.cssText = _
            }
            N && (o > t.clientHeight && (t.style.height = o - C + "px", t.clientHeight < o && (t.style.height = o + w + "px")), s > t.clientWidth && (t.style.width = s - k + "px", t.clientWidth < s && (t.style.width = s + b + "px"))), W(i, M), z && W(r, O), W(n, A)
        },
        c = function(t, e, i, r) {
            var n, s, o = h(t.childNodes),
                a = o.length,
                l = "absolute" === e.position || !0 === e.absolute;
            if (3 !== t.nodeType || 1 < a) {
                for (e.absolute = !1, n = 0; n < a; n++)(3 !== (s = o[n]).nodeType || /\S+/.test(s.nodeValue)) && (l && 3 !== s.nodeType && "inline" === V(s, "display", null, !0) && (s.style.display = "inline-block", s.style.position = "relative"), s._isSplit = !0, c(s, e, i, r));
                return e.absolute = l, void(t._isSplit = !0)
            }! function(t, e, i, r) {
                var n, s, o, a, l, h, u, c, p, f, d = e.tag ? e.tag : e.span ? "span" : "div",
                    _ = -1 !== (e.type || e.split || "chars,words,lines").indexOf("chars"),
                    m = "absolute" === e.position || !0 === e.absolute,
                    g = e.wordDelimiter || " ",
                    v = " " !== g ? "" : m ? "&#173; " : " ",
                    y = "</" + d + ">",
                    x = !0,
                    T = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : k : null,
                    w = Z.createElement("div"),
                    b = t.parentNode;
                for (b.insertBefore(w, t), w.textContent = t.nodeValue, b.removeChild(t), u = -1 !== (n = C(t = w)).indexOf("<"), !1 !== e.reduceWhiteSpace && (n = n.replace(P, " ").replace(S, "")), u && (n = n.split("<").join("{{LT}}")), l = n.length, s = (" " === n.charAt(0) ? v : "") + i(), o = 0; o < l; o++)
                    if (h = n.charAt(o), T && (f = T(n.substr(o), e.specialChars))) h = n.substr(o, f || 1), s += _ && " " !== h ? r() + h + "</" + d + ">" : h, o += f - 1;
                    else if (h === g && n.charAt(o - 1) !== g && o) {
                        for (s += x ? y : "", x = !1; n.charAt(o + 1) === g;) s += v, o++;
                        o === l - 1 ? s += v : ")" !== n.charAt(o + 1) && (s += v + i(), x = !0)
                    } else "{" === h && "{{LT}}" === n.substr(o, 6) ? (s += _ ? r() + "{{LT}}</" + d + ">" : "{{LT}}", o += 5) : 55296 <= h.charCodeAt(0) && h.charCodeAt(0) <= 56319 || 65024 <= n.charCodeAt(o + 1) && n.charCodeAt(o + 1) <= 65039 ? (c = A(n.substr(o, 2)), p = A(n.substr(o + 2, 2)), a = M <= c && c <= O && M <= p && p <= O || 127995 <= p && p <= 127999 ? 4 : 2, s += _ && " " !== h ? r() + n.substr(o, a) + "</" + d + ">" : n.substr(o, a), o += a - 1) : s += _ && " " !== h ? r() + h + "</" + d + ">" : h;
                t.outerHTML = s + (x ? y : ""), u && j(b, "{{LT}}", "<")
            }(t, e, i, r)
        },
        p = r.prototype;
    p.split = function(t) {
        this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
        for (var e, i, r, n = this.elements.length, s = t.tag ? t.tag : t.span ? "span" : "div", o = l(t.wordsClass, s), a = l(t.charsClass, s); - 1 < --n;) r = this.elements[n], this._originals[n] = r.innerHTML, e = r.clientHeight, i = r.clientWidth, c(r, t, o, a), u(r, t, this.chars, this.words, this.lines, i, e);
        return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
    }, p.revert = function() {
        if (!this._originals) throw "revert() call wasn't scoped properly.";
        for (var t = this._originals.length; - 1 < --t;) this.elements[t].innerHTML = this._originals[t];
        return this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
    }, r.selector = i.$ || i.jQuery || function(t) {
        var e = i.$ || i.jQuery;
        return e ? (r.selector = e)(t) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
    }, r.version = "0.7.0"
}(_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope).SplitText
        };
        "undefined" != typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd && define([], e)
    }(),
    function(s, a, t, T) {
        "use strict";

        function l(t, e, i) {
            return setTimeout(n(t, i), e)
        }

        function r(t, e, i) {
            return !!Array.isArray(t) && (o(t, i[e], i), !0)
        }

        function o(t, e, i) {
            var r;
            if (t)
                if (t.forEach) t.forEach(e, i);
                else if (t.length !== T)
                    for (r = 0; r < t.length;) e.call(i, t[r], r, t), r++;
                else
                    for (r in t) t.hasOwnProperty(r) && e.call(i, t[r], r, t)
        }

        function e(r, t, e) {
            var n = "DEPRECATED METHOD: " + t + "\n" + e + " AT \n";
            return function() {
                var t = new Error("get-stack-trace"),
                    e = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                    i = s.console && (s.console.warn || s.console.log);
                return i && i.call(s.console, n, e), r.apply(this, arguments)
            }
        }

        function i(t, e, i) {
            var r, n = e.prototype;
            (r = t.prototype = Object.create(n)).constructor = t, r._super = n, i && K(r, i)
        }

        function n(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        }

        function h(t, e) {
            return typeof t == tt ? t.apply(e && e[0] || T, e) : t
        }

        function u(t, e) {
            return t === T ? e : t
        }

        function c(e, t, i) {
            o(d(t), function(t) {
                e.addEventListener(t, i, !1)
            })
        }

        function p(e, t, i) {
            o(d(t), function(t) {
                e.removeEventListener(t, i, !1)
            })
        }

        function w(t, e) {
            for (; t;) {
                if (t == e) return !0;
                t = t.parentNode
            }
            return !1
        }

        function f(t, e) {
            return -1 < t.indexOf(e)
        }

        function d(t) {
            return t.trim().split(/\s+/g)
        }

        function _(t, e, i) {
            if (t.indexOf && !i) return t.indexOf(e);
            for (var r = 0; r < t.length;) {
                if (i && t[r][i] == e || !i && t[r] === e) return r;
                r++
            }
            return -1
        }

        function m(t) {
            return Array.prototype.slice.call(t, 0)
        }

        function g(t, i, e) {
            for (var r = [], n = [], s = 0; s < t.length;) {
                var o = i ? t[s][i] : t[s];
                _(n, o) < 0 && r.push(t[s]), n[s] = o, s++
            }
            return e && (r = i ? r.sort(function(t, e) {
                return t[i] > e[i]
            }) : r.sort()), r
        }

        function v(t, e) {
            for (var i, r, n = e[0].toUpperCase() + e.slice(1), s = 0; s < Q.length;) {
                if ((r = (i = Q[s]) ? i + n : e) in t) return r;
                s++
            }
            return T
        }

        function y(t) {
            var e = t.ownerDocument || t;
            return e.defaultView || e.parentWindow || s
        }

        function x(e, t) {
            var i = this;
            this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
                h(e.options.enable, [e]) && i.handler(t)
            }, this.init()
        }

        function b(t, e, i) {
            var r = i.pointers.length,
                n = i.changedPointers.length,
                s = e & ft && r - n == 0,
                o = e & (dt | _t) && r - n == 0;
            i.isFirst = !!s, i.isFinal = !!o, s && (t.session = {}), i.eventType = e,
                function(t, e) {
                    var i = t.session,
                        r = e.pointers,
                        n = r.length;
                    i.firstInput || (i.firstInput = C(e)), 1 < n && !i.firstMultiple ? i.firstMultiple = C(e) : 1 === n && (i.firstMultiple = !1);
                    var s = i.firstInput,
                        o = i.firstMultiple,
                        a = o ? o.center : s.center,
                        l = e.center = k(r);
                    e.timeStamp = rt(), e.deltaTime = e.timeStamp - s.timeStamp, e.angle = O(a, l), e.distance = M(a, l), h = i, u = e, c = u.center, p = h.offsetDelta || {}, f = h.prevDelta || {}, d = h.prevInput || {}, u.eventType !== ft && d.eventType !== dt || (f = h.prevDelta = {
                        x: d.deltaX || 0,
                        y: d.deltaY || 0
                    }, p = h.offsetDelta = {
                        x: c.x,
                        y: c.y
                    }), u.deltaX = f.x + (c.x - p.x), u.deltaY = f.y + (c.y - p.y), e.offsetDirection = P(e.deltaX, e.deltaY);
                    var h, u, c, p, f, d;
                    var _ = S(e.deltaTime, e.deltaX, e.deltaY);
                    e.overallVelocityX = _.x, e.overallVelocityY = _.y, e.overallVelocity = it(_.x) > it(_.y) ? _.x : _.y, e.scale = o ? (v = o.pointers, y = r, M(y[0], y[1], kt) / M(v[0], v[1], kt)) : 1, e.rotation = o ? (m = o.pointers, g = r, O(g[1], g[0], kt) + O(m[1], m[0], kt)) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
                        function(t, e) {
                            var i, r, n, s, o = t.lastInterval || e,
                                a = e.timeStamp - o.timeStamp;
                            if (e.eventType != _t && (pt < a || o.velocity === T)) {
                                var l = e.deltaX - o.deltaX,
                                    h = e.deltaY - o.deltaY,
                                    u = S(a, l, h);
                                r = u.x, n = u.y, i = it(u.x) > it(u.y) ? u.x : u.y, s = P(l, h), t.lastInterval = e
                            } else i = o.velocity, r = o.velocityX, n = o.velocityY, s = o.direction;
                            e.velocity = i, e.velocityX = r, e.velocityY = n, e.direction = s
                        }(i, e);
                    var m, g;
                    var v, y;
                    var x = t.element;
                    w(e.srcEvent.target, x) && (x = e.srcEvent.target), e.target = x
                }(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
        }

        function C(t) {
            for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                clientX: et(t.pointers[i].clientX),
                clientY: et(t.pointers[i].clientY)
            }, i++;
            return {
                timeStamp: rt(),
                pointers: e,
                center: k(e),
                deltaX: t.deltaX,
                deltaY: t.deltaY
            }
        }

        function k(t) {
            var e = t.length;
            if (1 === e) return {
                x: et(t[0].clientX),
                y: et(t[0].clientY)
            };
            for (var i = 0, r = 0, n = 0; n < e;) i += t[n].clientX, r += t[n].clientY, n++;
            return {
                x: et(i / e),
                y: et(r / e)
            }
        }

        function S(t, e, i) {
            return {
                x: e / t || 0,
                y: i / t || 0
            }
        }

        function P(t, e) {
            return t === e ? mt : it(t) >= it(e) ? t < 0 ? gt : vt : e < 0 ? yt : xt
        }

        function M(t, e, i) {
            i || (i = Ct);
            var r = e[i[0]] - t[i[0]],
                n = e[i[1]] - t[i[1]];
            return Math.sqrt(r * r + n * n)
        }

        function O(t, e, i) {
            i || (i = Ct);
            var r = e[i[0]] - t[i[0]],
                n = e[i[1]] - t[i[1]];
            return 180 * Math.atan2(n, r) / Math.PI
        }

        function A() {
            this.evEl = Pt, this.evWin = Mt, this.pressed = !1, x.apply(this, arguments)
        }

        function R() {
            this.evEl = Rt, this.evWin = Dt, x.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }

        function D() {
            this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, x.apply(this, arguments)
        }

        function I() {
            this.evTarget = zt, this.targetIds = {}, x.apply(this, arguments)
        }

        function E() {
            x.apply(this, arguments);
            var t = n(this.handler, this);
            this.touch = new I(this.manager, t), this.mouse = new A(this.manager, t), this.primaryTouch = null, this.lastTouches = []
        }

        function z(t) {
            var e = t.changedPointers[0];
            if (e.identifier === this.primaryTouch) {
                var i = {
                    x: e.clientX,
                    y: e.clientY
                };
                this.lastTouches.push(i);
                var r = this.lastTouches;
                setTimeout(function() {
                    var t = r.indexOf(i); - 1 < t && r.splice(t, 1)
                }, Lt)
            }
        }

        function L(t, e) {
            this.manager = t, this.set(e)
        }

        function N(t) {
            this.options = K({}, this.defaults, t || {}), this.id = ot++, this.manager = null, this.options.enable = u(this.options.enable, !0), this.state = Wt, this.simultaneous = {}, this.requireFail = []
        }

        function F(t) {
            return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
        }

        function B(t) {
            return t == xt ? "down" : t == yt ? "up" : t == gt ? "left" : t == vt ? "right" : ""
        }

        function X(t, e) {
            var i = e.manager;
            return i ? i.get(t) : t
        }

        function Z() {
            N.apply(this, arguments)
        }

        function Y() {
            Z.apply(this, arguments), this.pX = null, this.pY = null
        }

        function V() {
            Z.apply(this, arguments)
        }

        function j() {
            N.apply(this, arguments), this._timer = null, this._input = null
        }

        function W() {
            Z.apply(this, arguments)
        }

        function U() {
            Z.apply(this, arguments)
        }

        function H() {
            N.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function q(t, e) {
            return (e = e || {}).recognizers = u(e.recognizers, q.defaults.preset), new G(t, e)
        }

        function G(t, e) {
            var i;
            this.options = K({}, q.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new((i = this).options.inputClass || (lt ? R : ht ? I : at ? E : A))(i, b), this.touchAction = new L(this, this.options.touchAction), $(this, !0), o(this.options.recognizers, function(t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
            }, this)
        }

        function $(i, r) {
            var n, s = i.element;
            s.style && (o(i.options.cssProps, function(t, e) {
                n = v(s.style, e), s.style[n] = r ? (i.oldCssProps[n] = s.style[n], t) : i.oldCssProps[n] || ""
            }), r || (i.oldCssProps = {}))
        }
        var K, Q = ["", "webkit", "Moz", "MS", "ms", "o"],
            J = a.createElement("div"),
            tt = "function",
            et = Math.round,
            it = Math.abs,
            rt = Date.now;
        K = "function" != typeof Object.assign ? function(t) {
            if (t === T || null === t) throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                var r = arguments[i];
                if (r !== T && null !== r)
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
            }
            return e
        } : Object.assign;
        var nt = e(function(t, e, i) {
                for (var r = Object.keys(e), n = 0; n < r.length;)(!i || i && t[r[n]] === T) && (t[r[n]] = e[r[n]]), n++;
                return t
            }, "extend", "Use `assign`."),
            st = e(function(t, e) {
                return nt(t, e, !0)
            }, "merge", "Use `assign`."),
            ot = 1,
            at = "ontouchstart" in s,
            lt = v(s, "PointerEvent") !== T,
            ht = at && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
            ut = "touch",
            ct = "mouse",
            pt = 25,
            ft = 1,
            dt = 4,
            _t = 8,
            mt = 1,
            gt = 2,
            vt = 4,
            yt = 8,
            xt = 16,
            Tt = gt | vt,
            wt = yt | xt,
            bt = Tt | wt,
            Ct = ["x", "y"],
            kt = ["clientX", "clientY"];
        x.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && c(this.element, this.evEl, this.domHandler), this.evTarget && c(this.target, this.evTarget, this.domHandler), this.evWin && c(y(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && p(this.element, this.evEl, this.domHandler), this.evTarget && p(this.target, this.evTarget, this.domHandler), this.evWin && p(y(this.element), this.evWin, this.domHandler)
            }
        };
        var St = {
                mousedown: ft,
                mousemove: 2,
                mouseup: dt
            },
            Pt = "mousedown",
            Mt = "mousemove mouseup";
        i(A, x, {
            handler: function(t) {
                var e = St[t.type];
                e & ft && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = dt), this.pressed && (e & dt && (this.pressed = !1), this.callback(this.manager, e, {
                    pointers: [t],
                    changedPointers: [t],
                    pointerType: ct,
                    srcEvent: t
                }))
            }
        });
        var Ot = {
                pointerdown: ft,
                pointermove: 2,
                pointerup: dt,
                pointercancel: _t,
                pointerout: _t
            },
            At = {
                2: ut,
                3: "pen",
                4: ct,
                5: "kinect"
            },
            Rt = "pointerdown",
            Dt = "pointermove pointerup pointercancel";
        s.MSPointerEvent && !s.PointerEvent && (Rt = "MSPointerDown", Dt = "MSPointerMove MSPointerUp MSPointerCancel"), i(R, x, {
            handler: function(t) {
                var e = this.store,
                    i = !1,
                    r = t.type.toLowerCase().replace("ms", ""),
                    n = Ot[r],
                    s = At[t.pointerType] || t.pointerType,
                    o = s == ut,
                    a = _(e, t.pointerId, "pointerId");
                n & ft && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : n & (dt | _t) && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, n, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: s,
                    srcEvent: t
                }), i && e.splice(a, 1))
            }
        });
        var It = {
            touchstart: ft,
            touchmove: 2,
            touchend: dt,
            touchcancel: _t
        };
        i(D, x, {
            handler: function(t) {
                var e = It[t.type];
                if (e === ft && (this.started = !0), this.started) {
                    var i = function(t, e) {
                        var i = m(t.touches),
                            r = m(t.changedTouches);
                        return e & (dt | _t) && (i = g(i.concat(r), "identifier", !0)), [i, r]
                    }.call(this, t, e);
                    e & (dt | _t) && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: ut,
                        srcEvent: t
                    })
                }
            }
        });
        var Et = {
                touchstart: ft,
                touchmove: 2,
                touchend: dt,
                touchcancel: _t
            },
            zt = "touchstart touchmove touchend touchcancel";
        i(I, x, {
            handler: function(t) {
                var e = Et[t.type],
                    i = function(t, e) {
                        var i = m(t.touches),
                            r = this.targetIds;
                        if (e & (2 | ft) && 1 === i.length) return r[i[0].identifier] = !0, [i, i];
                        var n, s, o = m(t.changedTouches),
                            a = [],
                            l = this.target;
                        if (s = i.filter(function(t) {
                            return w(t.target, l)
                        }), e === ft)
                            for (n = 0; n < s.length;) r[s[n].identifier] = !0, n++;
                        for (n = 0; n < o.length;) r[o[n].identifier] && a.push(o[n]), e & (dt | _t) && delete r[o[n].identifier], n++;
                        return a.length ? [g(s.concat(a), "identifier", !0), a] : void 0
                    }.call(this, t, e);
                i && this.callback(this.manager, e, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: ut,
                    srcEvent: t
                })
            }
        });
        var Lt = 2500;
        i(E, x, {
            handler: function(t, e, i) {
                var r = i.pointerType == ut,
                    n = i.pointerType == ct;
                if (!(n && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                    if (r)(function(t, e) {
                        t & ft ? (this.primaryTouch = e.changedPointers[0].identifier, z.call(this, e)) : t & (dt | _t) && z.call(this, e)
                    }).call(this, e, i);
                    else if (n && function(t) {
                        for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, r = 0; r < this.lastTouches.length; r++) {
                            var n = this.lastTouches[r],
                                s = Math.abs(e - n.x),
                                o = Math.abs(i - n.y);
                            if (s <= 25 && o <= 25) return !0
                        }
                        return !1
                    }.call(this, i)) return;
                    this.callback(t, e, i)
                }
            },
            destroy: function() {
                this.touch.destroy(), this.mouse.destroy()
            }
        });
        var Nt = v(J.style, "touchAction"),
            Ft = Nt !== T,
            Bt = "compute",
            Xt = "manipulation",
            Zt = "none",
            Yt = "pan-x",
            Vt = "pan-y",
            jt = function() {
                if (!Ft) return !1;
                var e = {},
                    i = s.CSS && s.CSS.supports;
                return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(t) {
                    e[t] = !i || s.CSS.supports("touch-action", t)
                }), e
            }();
        L.prototype = {
            set: function(t) {
                t == Bt && (t = this.compute()), Ft && this.manager.element.style && jt[t] && (this.manager.element.style[Nt] = t), this.actions = t.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return o(this.manager.recognizers, function(t) {
                    h(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }),
                    function(t) {
                        if (f(t, Zt)) return Zt;
                        var e = f(t, Yt),
                            i = f(t, Vt);
                        return e && i ? Zt : e || i ? e ? Yt : Vt : f(t, Xt) ? Xt : "auto"
                    }(e.join(" "))
            },
            preventDefaults: function(t) {
                var e = t.srcEvent,
                    i = t.offsetDirection;
                if (!this.manager.session.prevented) {
                    var r = this.actions,
                        n = f(r, Zt) && !jt[Zt],
                        s = f(r, Vt) && !jt[Vt],
                        o = f(r, Yt) && !jt[Yt];
                    if (n) {
                        var a = 1 === t.pointers.length,
                            l = t.distance < 2,
                            h = t.deltaTime < 250;
                        if (a && l && h) return
                    }
                    return o && s ? void 0 : n || s && i & Tt || o && i & wt ? this.preventSrc(e) : void 0
                }
                e.preventDefault()
            },
            preventSrc: function(t) {
                this.manager.session.prevented = !0, t.preventDefault()
            }
        };
        var Wt = 1;
        N.prototype = {
            defaults: {},
            set: function(t) {
                return K(this.options, t), this.manager && this.manager.touchAction.update(), this
            },
            recognizeWith: function(t) {
                if (r(t, "recognizeWith", this)) return this;
                var e = this.simultaneous;
                return e[(t = X(t, this)).id] || (e[t.id] = t).recognizeWith(this), this
            },
            dropRecognizeWith: function(t) {
                return r(t, "dropRecognizeWith", this) || (t = X(t, this), delete this.simultaneous[t.id]), this
            },
            requireFailure: function(t) {
                if (r(t, "requireFailure", this)) return this;
                var e = this.requireFail;
                return -1 === _(e, t = X(t, this)) && (e.push(t), t.requireFailure(this)), this
            },
            dropRequireFailure: function(t) {
                if (r(t, "dropRequireFailure", this)) return this;
                t = X(t, this);
                var e = _(this.requireFail, t);
                return -1 < e && this.requireFail.splice(e, 1), this
            },
            hasRequireFailures: function() {
                return 0 < this.requireFail.length
            },
            canRecognizeWith: function(t) {
                return !!this.simultaneous[t.id]
            },
            emit: function(e) {
                function t(t) {
                    i.manager.emit(t, e)
                }
                var i = this,
                    r = this.state;
                r < 8 && t(i.options.event + F(r)), t(i.options.event), e.additionalEvent && t(e.additionalEvent), 8 <= r && t(i.options.event + F(r))
            },
            tryEmit: function(t) {
                return this.canEmit() ? this.emit(t) : void(this.state = 32)
            },
            canEmit: function() {
                for (var t = 0; t < this.requireFail.length;) {
                    if (!(this.requireFail[t].state & (32 | Wt))) return !1;
                    t++
                }
                return !0
            },
            recognize: function(t) {
                var e = K({}, t);
                return h(this.options.enable, [this, e]) ? (56 & this.state && (this.state = Wt), this.state = this.process(e), void(30 & this.state && this.tryEmit(e))) : (this.reset(), void(this.state = 32))
            },
            process: function(t) {},
            getTouchAction: function() {},
            reset: function() {}
        }, i(Z, N, {
            defaults: {
                pointers: 1
            },
            attrTest: function(t) {
                var e = this.options.pointers;
                return 0 === e || t.pointers.length === e
            },
            process: function(t) {
                var e = this.state,
                    i = t.eventType,
                    r = 6 & e,
                    n = this.attrTest(t);
                return r && (i & _t || !n) ? 16 | e : r || n ? i & dt ? 8 | e : 2 & e ? 4 | e : 2 : 32
            }
        }), i(Y, Z, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: bt
            },
            getTouchAction: function() {
                var t = this.options.direction,
                    e = [];
                return t & Tt && e.push(Vt), t & wt && e.push(Yt), e
            },
            directionTest: function(t) {
                var e = this.options,
                    i = !0,
                    r = t.distance,
                    n = t.direction,
                    s = t.deltaX,
                    o = t.deltaY;
                return n & e.direction || (r = e.direction & Tt ? (n = 0 === s ? mt : s < 0 ? gt : vt, i = s != this.pX, Math.abs(t.deltaX)) : (n = 0 === o ? mt : o < 0 ? yt : xt, i = o != this.pY, Math.abs(t.deltaY))), t.direction = n, i && r > e.threshold && n & e.direction
            },
            attrTest: function(t) {
                return Z.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
            },
            emit: function(t) {
                this.pX = t.deltaX, this.pY = t.deltaY;
                var e = B(t.direction);
                e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
            }
        }), i(V, Z, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Zt]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
            },
            emit: function(t) {
                if (1 !== t.scale) {
                    var e = t.scale < 1 ? "in" : "out";
                    t.additionalEvent = this.options.event + e
                }
                this._super.emit.call(this, t)
            }
        }), i(j, N, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return ["auto"]
            },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    r = t.distance < e.threshold,
                    n = t.deltaTime > e.time;
                if (this._input = t, !r || !i || t.eventType & (dt | _t) && !n) this.reset();
                else if (t.eventType & ft) this.reset(), this._timer = l(function() {
                    this.state = 8, this.tryEmit()
                }, e.time, this);
                else if (t.eventType & dt) return 8;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(t) {
                8 === this.state && (t && t.eventType & dt ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = rt(), this.manager.emit(this.options.event, this._input)))
            }
        }), i(W, Z, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [Zt]
            },
            attrTest: function(t) {
                return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
            }
        }), i(U, Z, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: Tt | wt,
                pointers: 1
            },
            getTouchAction: function() {
                return Y.prototype.getTouchAction.call(this)
            },
            attrTest: function(t) {
                var e, i = this.options.direction;
                return i & (Tt | wt) ? e = t.overallVelocity : i & Tt ? e = t.overallVelocityX : i & wt && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && it(e) > this.options.velocity && t.eventType & dt
            },
            emit: function(t) {
                var e = B(t.offsetDirection);
                e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
            }
        }), i(H, N, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [Xt]
            },
            process: function(t) {
                var e = this.options,
                    i = t.pointers.length === e.pointers,
                    r = t.distance < e.threshold,
                    n = t.deltaTime < e.time;
                if (this.reset(), t.eventType & ft && 0 === this.count) return this.failTimeout();
                if (r && n && i) {
                    if (t.eventType != dt) return this.failTimeout();
                    var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                        o = !this.pCenter || M(this.pCenter, t.center) < e.posThreshold;
                    if (this.pTime = t.timeStamp, this.pCenter = t.center, o && s ? this.count += 1 : this.count = 1, this._input = t, 0 === this.count % e.taps) return this.hasRequireFailures() ? (this._timer = l(function() {
                        this.state = 8, this.tryEmit()
                    }, e.interval, this), 2) : 8
                }
                return 32
            },
            failTimeout: function() {
                return this._timer = l(function() {
                    this.state = 32
                }, this.options.interval, this), 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }), q.VERSION = "2.0.8", q.defaults = {
            domEvents: !1,
            touchAction: Bt,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [W, {
                    enable: !1
                }],
                [V, {
                    enable: !1
                },
                    ["rotate"]
                ],
                [U, {
                    direction: Tt
                }],
                [Y, {
                    direction: Tt
                },
                    ["swipe"]
                ],
                [H],
                [H, {
                    event: "doubletap",
                    taps: 2
                },
                    ["tap"]
                ],
                [j]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        G.prototype = {
            set: function(t) {
                return K(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
            },
            stop: function(t) {
                this.session.stopped = t ? 2 : 1
            },
            recognize: function(t) {
                var e = this.session;
                if (!e.stopped) {
                    this.touchAction.preventDefaults(t);
                    var i, r = this.recognizers,
                        n = e.curRecognizer;
                    (!n || n && 8 & n.state) && (n = e.curRecognizer = null);
                    for (var s = 0; s < r.length;) i = r[s], 2 === e.stopped || n && i != n && !i.canRecognizeWith(n) ? i.reset() : i.recognize(t), !n && 14 & i.state && (n = e.curRecognizer = i), s++
                }
            },
            get: function(t) {
                if (t instanceof N) return t;
                for (var e = this.recognizers, i = 0; i < e.length; i++)
                    if (e[i].options.event == t) return e[i];
                return null
            },
            add: function(t) {
                if (r(t, "add", this)) return this;
                var e = this.get(t.options.event);
                return e && this.remove(e), this.recognizers.push(t), (t.manager = this).touchAction.update(), t
            },
            remove: function(t) {
                if (r(t, "remove", this)) return this;
                if (t = this.get(t)) {
                    var e = this.recognizers,
                        i = _(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update())
                }
                return this
            },
            on: function(t, e) {
                if (t !== T && e !== T) {
                    var i = this.handlers;
                    return o(d(t), function(t) {
                        i[t] = i[t] || [], i[t].push(e)
                    }), this
                }
            },
            off: function(t, e) {
                if (t !== T) {
                    var i = this.handlers;
                    return o(d(t), function(t) {
                        e ? i[t] && i[t].splice(_(i[t], e), 1) : delete i[t]
                    }), this
                }
            },
            emit: function(t, e) {
                var i, r, n;
                this.options.domEvents && (i = t, r = e, (n = a.createEvent("Event")).initEvent(i, !0, !0), (n.gesture = r).target.dispatchEvent(n));
                var s = this.handlers[t] && this.handlers[t].slice();
                if (s && s.length) {
                    e.type = t, e.preventDefault = function() {
                        e.srcEvent.preventDefault()
                    };
                    for (var o = 0; o < s.length;) s[o](e), o++
                }
            },
            destroy: function() {
                this.element && $(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
            }
        }, K(q, {
            INPUT_START: ft,
            INPUT_MOVE: 2,
            INPUT_END: dt,
            INPUT_CANCEL: _t,
            STATE_POSSIBLE: Wt,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: mt,
            DIRECTION_LEFT: gt,
            DIRECTION_RIGHT: vt,
            DIRECTION_UP: yt,
            DIRECTION_DOWN: xt,
            DIRECTION_HORIZONTAL: Tt,
            DIRECTION_VERTICAL: wt,
            DIRECTION_ALL: bt,
            Manager: G,
            Input: x,
            TouchAction: L,
            TouchInput: I,
            MouseInput: A,
            PointerEventInput: R,
            TouchMouseInput: E,
            SingleTouchInput: D,
            Recognizer: N,
            AttrRecognizer: Z,
            Tap: H,
            Pan: Y,
            Swipe: U,
            Pinch: V,
            Rotate: W,
            Press: j,
            on: c,
            off: p,
            each: o,
            merge: st,
            extend: nt,
            assign: K,
            inherit: i,
            bindFn: n,
            prefixed: v
        }), (void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer = q, "function" == typeof define && define.amd ? define(function() {
            return q
        }) : "undefined" != typeof module && module.exports ? module.exports = q : s.Hammer = q
    }(window, document), (window.MarkerClusterer = MarkerClusterer).prototype.MARKER_CLUSTER_IMAGE_PATH_ = "../images/m", MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_ = "png", MarkerClusterer.prototype.extend = function(t, e) {
    return function(t) {
        for (var e in t.prototype) this.prototype[e] = t.prototype[e];
        return this
    }.apply(t, [e])
}, MarkerClusterer.prototype.onAdd = function() {
    this.setReady_(!0)
}, MarkerClusterer.prototype.draw = function() {}, MarkerClusterer.prototype.setupStyles_ = function() {
    if (!this.styles_.length)
        for (var t, e = 0; t = this.sizes[e]; e++) this.styles_.push({
            url: this.imagePath_ + (e + 1) + "." + this.imageExtension_,
            height: t,
            width: t
        })
}, MarkerClusterer.prototype.fitMapToMarkers = function() {
    for (var t, e = this.getMarkers(), i = new google.maps.LatLngBounds, r = 0; t = e[r]; r++) i.extend(t.getPosition());
    this.map_.fitBounds(i)
}, MarkerClusterer.prototype.setStyles = function(t) {
    this.styles_ = t
}, MarkerClusterer.prototype.getStyles = function() {
    return this.styles_
}, MarkerClusterer.prototype.isZoomOnClick = function() {
    return this.zoomOnClick_
}, MarkerClusterer.prototype.isAverageCenter = function() {
    return this.averageCenter_
}, MarkerClusterer.prototype.getMarkers = function() {
    return this.markers_
}, MarkerClusterer.prototype.getTotalMarkers = function() {
    return this.markers_.length
}, MarkerClusterer.prototype.setMaxZoom = function(t) {
    this.maxZoom_ = t
}, MarkerClusterer.prototype.getMaxZoom = function() {
    return this.maxZoom_
}, MarkerClusterer.prototype.calculator_ = function(t, e) {
    for (var i = 0, r = t.length, n = r; 0 !== n;) n = parseInt(n / 10, 10), i++;
    return {
        text: r,
        index: i = Math.min(i, e)
    }
}, MarkerClusterer.prototype.setCalculator = function(t) {
    this.calculator_ = t
}, MarkerClusterer.prototype.getCalculator = function() {
    return this.calculator_
}, MarkerClusterer.prototype.addMarkers = function(t, e) {
    if (t.length)
        for (var i = 0; r = t[i]; i++) this.pushMarkerTo_(r);
    else if (Object.keys(t).length)
        for (var r in t) this.pushMarkerTo_(t[r]);
    e || this.redraw()
}, MarkerClusterer.prototype.pushMarkerTo_ = function(t) {
    if (t.isAdded = !1, t.draggable) {
        var e = this;
        google.maps.event.addListener(t, "dragend", function() {
            t.isAdded = !1, e.repaint()
        })
    }
    this.markers_.push(t)
}, MarkerClusterer.prototype.addMarker = function(t, e) {
    this.pushMarkerTo_(t), e || this.redraw()
}, MarkerClusterer.prototype.removeMarker_ = function(t) {
    var e = -1;
    if (this.markers_.indexOf) e = this.markers_.indexOf(t);
    else
        for (var i, r = 0; i = this.markers_[r]; r++)
            if (i == t) {
                e = r;
                break
            } return -1 != e && (t.setMap(null), this.markers_.splice(e, 1), !0)
}, MarkerClusterer.prototype.removeMarker = function(t, e) {
    var i = this.removeMarker_(t);
    return !(e || !i) && (this.resetViewport(), this.redraw(), !0)
}, MarkerClusterer.prototype.removeMarkers = function(t, e) {
    for (var i, r = t === this.getMarkers() ? t.slice() : t, n = !1, s = 0; i = r[s]; s++) {
        var o = this.removeMarker_(i);
        n = n || o
    }
    if (!e && n) return this.resetViewport(), this.redraw(), !0
}, MarkerClusterer.prototype.setReady_ = function(t) {
    this.ready_ || (this.ready_ = t, this.createClusters_())
}, MarkerClusterer.prototype.getTotalClusters = function() {
    return this.clusters_.length
}, MarkerClusterer.prototype.getMap = function() {
    return this.map_
}, MarkerClusterer.prototype.setMap = function(t) {
    this.map_ = t
}, MarkerClusterer.prototype.getGridSize = function() {
    return this.gridSize_
}, MarkerClusterer.prototype.setGridSize = function(t) {
    this.gridSize_ = t
}, MarkerClusterer.prototype.getMinClusterSize = function() {
    return this.minClusterSize_
}, MarkerClusterer.prototype.setMinClusterSize = function(t) {
    this.minClusterSize_ = t
}, MarkerClusterer.prototype.getExtendedBounds = function(t) {
    var e = this.getProjection(),
        i = new google.maps.LatLng(t.getNorthEast().lat(), t.getNorthEast().lng()),
        r = new google.maps.LatLng(t.getSouthWest().lat(), t.getSouthWest().lng()),
        n = e.fromLatLngToDivPixel(i);
    n.x += this.gridSize_, n.y -= this.gridSize_;
    var s = e.fromLatLngToDivPixel(r);
    s.x -= this.gridSize_, s.y += this.gridSize_;
    var o = e.fromDivPixelToLatLng(n),
        a = e.fromDivPixelToLatLng(s);
    return t.extend(o), t.extend(a), t
}, MarkerClusterer.prototype.isMarkerInBounds_ = function(t, e) {
    return e.contains(t.getPosition())
}, MarkerClusterer.prototype.clearMarkers = function() {
    this.resetViewport(!0), this.markers_ = []
}, MarkerClusterer.prototype.resetViewport = function(t) {
    for (var e, i = 0; e = this.clusters_[i]; i++) e.remove();
    var r;
    for (i = 0; r = this.markers_[i]; i++) r.isAdded = !1, t && r.setMap(null);
    this.clusters_ = []
}, MarkerClusterer.prototype.repaint = function() {
    var i = this.clusters_.slice();
    this.clusters_.length = 0, this.resetViewport(), this.redraw(), window.setTimeout(function() {
        for (var t, e = 0; t = i[e]; e++) t.remove()
    }, 0)
}, MarkerClusterer.prototype.redraw = function() {
    this.createClusters_()
}, MarkerClusterer.prototype.distanceBetweenPoints_ = function(t, e) {
    if (!t || !e) return 0;
    var i = (e.lat() - t.lat()) * Math.PI / 180,
        r = (e.lng() - t.lng()) * Math.PI / 180,
        n = Math.sin(i / 2) * Math.sin(i / 2) + Math.cos(t.lat() * Math.PI / 180) * Math.cos(e.lat() * Math.PI / 180) * Math.sin(r / 2) * Math.sin(r / 2);
    return 6371 * (2 * Math.atan2(Math.sqrt(n), Math.sqrt(1 - n)))
}, MarkerClusterer.prototype.addToClosestCluster_ = function(t) {
    for (var e, i = 4e4, r = null, n = (t.getPosition(), 0); e = this.clusters_[n]; n++) {
        var s = e.getCenter();
        if (s) {
            var o = this.distanceBetweenPoints_(s, t.getPosition());
            o < i && (i = o, r = e)
        }
    }
    r && r.isMarkerInClusterBounds(t) ? r.addMarker(t) : ((e = new Cluster(this)).addMarker(t), this.clusters_.push(e))
}, MarkerClusterer.prototype.createClusters_ = function() {
    if (this.ready_)
        for (var t, e = new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(), this.map_.getBounds().getNorthEast()), i = this.getExtendedBounds(e), r = 0; t = this.markers_[r]; r++) !t.isAdded && this.isMarkerInBounds_(t, i) && this.addToClosestCluster_(t)
}, Cluster.prototype.isMarkerAlreadyAdded = function(t) {
    if (this.markers_.indexOf) return -1 != this.markers_.indexOf(t);
    for (var e, i = 0; e = this.markers_[i]; i++)
        if (e == t) return !0;
    return !1
}, Cluster.prototype.addMarker = function(t) {
    if (this.isMarkerAlreadyAdded(t)) return !1;
    if (this.center_) {
        if (this.averageCenter_) {
            var e = this.markers_.length + 1,
                i = (this.center_.lat() * (e - 1) + t.getPosition().lat()) / e,
                r = (this.center_.lng() * (e - 1) + t.getPosition().lng()) / e;
            this.center_ = new google.maps.LatLng(i, r), this.calculateBounds_()
        }
    } else this.center_ = t.getPosition(), this.calculateBounds_();
    t.isAdded = !0, this.markers_.push(t);
    var n = this.markers_.length;
    if (n < this.minClusterSize_ && t.getMap() != this.map_ && t.setMap(this.map_), n == this.minClusterSize_)
        for (var s = 0; s < n; s++) this.markers_[s].setMap(null);
    return n >= this.minClusterSize_ && t.setMap(null), this.updateIcon(), !0
}, Cluster.prototype.getMarkerClusterer = function() {
    return this.markerClusterer_
}, Cluster.prototype.getBounds = function() {
    for (var t, e = new google.maps.LatLngBounds(this.center_, this.center_), i = this.getMarkers(), r = 0; t = i[r]; r++) e.extend(t.getPosition());
    return e
}, Cluster.prototype.remove = function() {
    this.clusterIcon_.remove(), this.markers_.length = 0, delete this.markers_
}, Cluster.prototype.getSize = function() {
    return this.markers_.length
}, Cluster.prototype.getMarkers = function() {
    return this.markers_
}, Cluster.prototype.getCenter = function() {
    return this.center_
}, Cluster.prototype.calculateBounds_ = function() {
    var t = new google.maps.LatLngBounds(this.center_, this.center_);
    this.bounds_ = this.markerClusterer_.getExtendedBounds(t)
}, Cluster.prototype.isMarkerInClusterBounds = function(t) {
    return this.bounds_.contains(t.getPosition())
}, Cluster.prototype.getMap = function() {
    return this.map_
}, Cluster.prototype.updateIcon = function() {
    var t = this.map_.getZoom(),
        e = this.markerClusterer_.getMaxZoom();
    if (e && e < t)
        for (var i, r = 0; i = this.markers_[r]; r++) i.setMap(this.map_);
    else if (this.markers_.length < this.minClusterSize_) this.clusterIcon_.hide();
    else {
        var n = this.markerClusterer_.getStyles().length,
            s = this.markerClusterer_.getCalculator()(this.markers_, n);
        this.clusterIcon_.setCenter(this.center_), this.clusterIcon_.setSums(s), this.clusterIcon_.show()
    }
}, ClusterIcon.prototype.triggerClusterClick = function() {
    var t = this.cluster_.getMarkerClusterer();
    if (google.maps.event.trigger(t.map_, "clusterclick", this.cluster_), t.isZoomOnClick()) {
        var e = 700 <= window.innerWidth ? .1 * window.innerHeight : 40;
        this.map_.fitBounds(this.cluster_.getBounds(), e)
    }
}, ClusterIcon.prototype.onAdd = function() {
    if (this.div_ = document.createElement("DIV"), this.visible_) {
        var t = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(t), this.div_.innerHTML = this.sums_.text
    }
    this.getPanes().overlayMouseTarget.appendChild(this.div_);
    var e = this;
    google.maps.event.addDomListener(this.div_, "click", function() {
        e.triggerClusterClick()
    })
}, ClusterIcon.prototype.getPosFromLatLng_ = function(t) {
    var e = this.getProjection().fromLatLngToDivPixel(t);
    return e.x -= parseInt(this.width_ / 2, 10), e.y -= parseInt(this.height_ / 2, 10), e
}, ClusterIcon.prototype.draw = function() {
    if (this.visible_) {
        var t = this.getPosFromLatLng_(this.center_);
        this.div_.style.top = t.y + "px", this.div_.style.left = t.x + "px", this.div_.style.zIndex = google.maps.Marker.MAX_ZINDEX + 1
    }
}, ClusterIcon.prototype.hide = function() {
    this.div_ && (this.div_.style.display = "none"), this.visible_ = !1
}, ClusterIcon.prototype.show = function() {
    if (this.div_) {
        var t = this.getPosFromLatLng_(this.center_);
        this.div_.style.cssText = this.createCss(t), this.div_.style.display = ""
    }
    this.visible_ = !0
}, ClusterIcon.prototype.remove = function() {
    this.setMap(null)
}, ClusterIcon.prototype.onRemove = function() {
    this.div_ && this.div_.parentNode && (this.hide(), this.div_.parentNode.removeChild(this.div_), this.div_ = null)
}, ClusterIcon.prototype.setSums = function(t) {
    this.sums_ = t, this.text_ = t.text, this.index_ = t.index, this.div_ && (this.div_.innerHTML = t.text), this.useStyle()
}, ClusterIcon.prototype.useStyle = function() {
    var t = Math.max(0, this.sums_.index - 1);
    t = Math.min(this.styles_.length - 1, t);
    var e = this.styles_[t];
    this.url_ = e.url, this.height_ = e.height, this.width_ = e.width, this.textColor_ = e.textColor, this.anchor_ = e.anchor, this.textSize_ = e.textSize, this.backgroundPosition_ = e.backgroundPosition
}, ClusterIcon.prototype.setCenter = function(t) {
    this.center_ = t
}, ClusterIcon.prototype.createCss = function(t) {
    var e = [];
    e.push("background-image:url(" + this.url_ + ");");
    var i = this.backgroundPosition_ ? this.backgroundPosition_ : "0 0";
    e.push("background-position:" + i + ";"), "object" == typeof this.anchor_ ? ("number" == typeof this.anchor_[0] && 0 < this.anchor_[0] && this.anchor_[0] < this.height_ ? e.push("height:" + (this.height_ - this.anchor_[0]) + "px; padding-top:" + this.anchor_[0] + "px;") : e.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px;"), "number" == typeof this.anchor_[1] && 0 < this.anchor_[1] && this.anchor_[1] < this.width_ ? e.push("width:" + (this.width_ - this.anchor_[1]) + "px; padding-left:" + this.anchor_[1] + "px;") : e.push("width:" + this.width_ + "px; text-align:center;")) : e.push("height:" + this.height_ + "px; line-height:" + this.height_ + "px; width:" + this.width_ + "px; text-align:center;");
    var r = this.textColor_ ? this.textColor_ : "black",
        n = this.textSize_ ? this.textSize_ : 11;
    return e.push("cursor:pointer; top:" + t.y + "px; left:" + t.x + "px; color:" + r + "; position:absolute; font-size:" + n + "px; font-family:Arial,sans-serif; font-weight:bold"), e.join("")
};
var _gsScope, window = window || {};
(window.MarkerClusterer = MarkerClusterer).prototype.addMarker = MarkerClusterer.prototype.addMarker, MarkerClusterer.prototype.addMarkers = MarkerClusterer.prototype.addMarkers, MarkerClusterer.prototype.clearMarkers = MarkerClusterer.prototype.clearMarkers, MarkerClusterer.prototype.fitMapToMarkers = MarkerClusterer.prototype.fitMapToMarkers, MarkerClusterer.prototype.getCalculator = MarkerClusterer.prototype.getCalculator, MarkerClusterer.prototype.getGridSize = MarkerClusterer.prototype.getGridSize, MarkerClusterer.prototype.getExtendedBounds = MarkerClusterer.prototype.getExtendedBounds, MarkerClusterer.prototype.getMap = MarkerClusterer.prototype.getMap, MarkerClusterer.prototype.getMarkers = MarkerClusterer.prototype.getMarkers, MarkerClusterer.prototype.getMaxZoom = MarkerClusterer.prototype.getMaxZoom, MarkerClusterer.prototype.getStyles = MarkerClusterer.prototype.getStyles, MarkerClusterer.prototype.getTotalClusters = MarkerClusterer.prototype.getTotalClusters, MarkerClusterer.prototype.getTotalMarkers = MarkerClusterer.prototype.getTotalMarkers, MarkerClusterer.prototype.redraw = MarkerClusterer.prototype.redraw, MarkerClusterer.prototype.removeMarker = MarkerClusterer.prototype.removeMarker, MarkerClusterer.prototype.removeMarkers = MarkerClusterer.prototype.removeMarkers, MarkerClusterer.prototype.resetViewport = MarkerClusterer.prototype.resetViewport, MarkerClusterer.prototype.repaint = MarkerClusterer.prototype.repaint, MarkerClusterer.prototype.setCalculator = MarkerClusterer.prototype.setCalculator, MarkerClusterer.prototype.setGridSize = MarkerClusterer.prototype.setGridSize, MarkerClusterer.prototype.setMaxZoom = MarkerClusterer.prototype.setMaxZoom, MarkerClusterer.prototype.onAdd = MarkerClusterer.prototype.onAdd, MarkerClusterer.prototype.draw = MarkerClusterer.prototype.draw, Cluster.prototype.getCenter = Cluster.prototype.getCenter, Cluster.prototype.getSize = Cluster.prototype.getSize, Cluster.prototype.getMarkers = Cluster.prototype.getMarkers, ClusterIcon.prototype.onAdd = ClusterIcon.prototype.onAdd, ClusterIcon.prototype.draw = ClusterIcon.prototype.draw, ClusterIcon.prototype.onRemove = ClusterIcon.prototype.onRemove, Object.keys = Object.keys || function(t) {
    var e = [];
    for (var i in t) t.hasOwnProperty(i) && e.push(i);
    return e
}, "object" == typeof module && (module.exports = MarkerClusterer),
    function(t, e) {
        "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.PhotoSwipe = e()
    }(this, function() {
        "use strict";
        return function(f, r, t, e) {
            var d = {
                features: null,
                bind: function(t, e, i, r) {
                    var n = (r ? "remove" : "add") + "EventListener";
                    e = e.split(" ");
                    for (var s = 0; s < e.length; s++) e[s] && t[n](e[s], i, !1)
                },
                isArray: function(t) {
                    return t instanceof Array
                },
                createEl: function(t, e) {
                    var i = document.createElement(e || "div");
                    return t && (i.className = t), i
                },
                getScrollY: function() {
                    var t = window.pageYOffset;
                    return void 0 !== t ? t : document.documentElement.scrollTop
                },
                unbind: function(t, e, i) {
                    d.bind(t, e, i, !0)
                },
                removeClass: function(t, e) {
                    var i = new RegExp("(\\s|^)" + e + "(\\s|$)");
                    t.className = t.className.replace(i, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
                },
                addClass: function(t, e) {
                    d.hasClass(t, e) || (t.className += (t.className ? " " : "") + e)
                },
                hasClass: function(t, e) {
                    return t.className && new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
                },
                getChildByClass: function(t, e) {
                    for (var i = t.firstChild; i;) {
                        if (d.hasClass(i, e)) return i;
                        i = i.nextSibling
                    }
                },
                arraySearch: function(t, e, i) {
                    for (var r = t.length; r--;)
                        if (t[r][i] === e) return r;
                    return -1
                },
                extend: function(t, e, i) {
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            if (i && t.hasOwnProperty(r)) continue;
                            t[r] = e[r]
                        }
                },
                easing: {
                    sine: {
                        out: function(t) {
                            return Math.sin(t * (Math.PI / 2))
                        },
                        inOut: function(t) {
                            return -(Math.cos(Math.PI * t) - 1) / 2
                        }
                    },
                    cubic: {
                        out: function(t) {
                            return --t * t * t + 1
                        }
                    }
                },
                detectFeatures: function() {
                    if (d.features) return d.features;
                    var t = d.createEl().style,
                        e = "",
                        i = {};
                    if (i.oldIE = document.all && !document.addEventListener, i.touch = "ontouchstart" in window, window.requestAnimationFrame && (i.raf = window.requestAnimationFrame, i.caf = window.cancelAnimationFrame), i.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !i.pointerEvent) {
                        var r = navigator.userAgent;
                        if (/iP(hone|od)/.test(navigator.platform)) {
                            var n = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                            n && 0 < n.length && 1 <= (n = parseInt(n[1], 10)) && n < 8 && (i.isOldIOSPhone = !0)
                        }
                        var s = r.match(/Android\s([0-9\.]*)/),
                            o = s ? s[1] : 0;
                        1 <= (o = parseFloat(o)) && (o < 4.4 && (i.isOldAndroid = !0), i.androidVersion = o), i.isMobileOpera = /opera mini|opera mobi/i.test(r)
                    }
                    for (var a, l, h = ["transform", "perspective", "animationName"], u = ["", "webkit", "Moz", "ms", "O"], c = 0; c < 4; c++) {
                        e = u[c];
                        for (var p = 0; p < 3; p++) a = h[p], l = e + (e ? a.charAt(0).toUpperCase() + a.slice(1) : a), !i[a] && l in t && (i[a] = l);
                        e && !i.raf && (e = e.toLowerCase(), i.raf = window[e + "RequestAnimationFrame"], i.raf && (i.caf = window[e + "CancelAnimationFrame"] || window[e + "CancelRequestAnimationFrame"]))
                    }
                    if (!i.raf) {
                        var f = 0;
                        i.raf = function(t) {
                            var e = (new Date).getTime(),
                                i = Math.max(0, 16 - (e - f)),
                                r = window.setTimeout(function() {
                                    t(e + i)
                                }, i);
                            return f = e + i, r
                        }, i.caf = function(t) {
                            clearTimeout(t)
                        }
                    }
                    return i.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, d.features = i
                }
            };
            d.detectFeatures(), d.features.oldIE && (d.bind = function(t, e, i, r) {
                e = e.split(" ");
                for (var n, s = (r ? "detach" : "attach") + "Event", o = function() {
                    i.handleEvent.call(i)
                }, a = 0; a < e.length; a++)
                    if (n = e[a])
                        if ("object" == typeof i && i.handleEvent) {
                            if (r) {
                                if (!i["oldIE" + n]) return !1
                            } else i["oldIE" + n] = o;
                            t[s]("on" + n, i["oldIE" + n])
                        } else t[s]("on" + n, i)
            });
            var _ = this,
                m = {
                    allowPanToNext: !0,
                    spacing: .12,
                    bgOpacity: 1,
                    mouseUsed: !1,
                    loop: !0,
                    pinchToClose: !0,
                    closeOnScroll: !0,
                    closeOnVerticalDrag: !0,
                    verticalDragRange: .75,
                    hideAnimationDuration: 333,
                    showAnimationDuration: 333,
                    showHideOpacity: !1,
                    focus: !0,
                    escKey: !0,
                    arrowKeys: !0,
                    mainScrollEndFriction: .35,
                    panEndFriction: .35,
                    isClickableElement: function(t) {
                        return "A" === t.tagName
                    },
                    getDoubleTapZoom: function(t, e) {
                        return t ? 1 : e.initialZoomLevel < .7 ? 1 : 1.33
                    },
                    maxSpreadZoom: 1.33,
                    modal: !0,
                    scaleMode: "fit"
                };
            d.extend(m, e);
            var l, n, s, g, o, a, h, u, c, v, p, y, x, T, w, b, C, k, S, P, M, O, A, R, D, I, E, z, L, N, F, B, X, Z, Y, V, j, W, U, H, q, G, i, $, K, Q, J, tt, et, it, rt, nt, st, ot, at, lt, ht = {
                    x: 0,
                    y: 0
                },
                ut = {
                    x: 0,
                    y: 0
                },
                ct = {
                    x: 0,
                    y: 0
                },
                pt = {},
                ft = 0,
                dt = {},
                _t = {
                    x: 0,
                    y: 0
                },
                mt = 0,
                gt = !0,
                vt = [],
                yt = {},
                xt = !1,
                Tt = function(t, e) {
                    d.extend(_, e.publicMethods), vt.push(t)
                },
                wt = function(t) {
                    var e = Ze();
                    return e - 1 < t ? t - e : t < 0 ? e + t : t
                },
                bt = {},
                Ct = function(t, e) {
                    return bt[t] || (bt[t] = []), bt[t].push(e)
                },
                kt = function(t) {
                    var e = bt[t];
                    if (e) {
                        var i = Array.prototype.slice.call(arguments);
                        i.shift();
                        for (var r = 0; r < e.length; r++) e[r].apply(_, i)
                    }
                },
                St = function() {
                    return (new Date).getTime()
                },
                Pt = function(t) {
                    ot = t, _.bg.style.opacity = t * m.bgOpacity
                },
                Mt = function(t, e, i, r, n) {
                    (!xt || n && n !== _.currItem) && (r /= n ? n.fitRatio : _.currItem.fitRatio), t[O] = y + e + "px, " + i + "px" + x + " scale(" + r + ")"
                },
                Ot = function(t) {
                    et && (t && (v > _.currItem.fitRatio ? xt || ($e(_.currItem, !1, !0), xt = !0) : xt && ($e(_.currItem), xt = !1)), Mt(et, ct.x, ct.y, v))
                },
                At = function(t) {
                    t.container && Mt(t.container.style, t.initialPosition.x, t.initialPosition.y, t.initialZoomLevel, t)
                },
                Rt = function(t, e) {
                    e[O] = y + t + "px, 0px" + x
                },
                Dt = function(t, e) {
                    if (!m.loop && e) {
                        var i = g + (_t.x * ft - t) / _t.x,
                            r = Math.round(t - ue.x);
                        (i < 0 && 0 < r || i >= Ze() - 1 && r < 0) && (t = ue.x + r * m.mainScrollEndFriction)
                    }
                    ue.x = t, Rt(t, o)
                },
                It = function(t, e) {
                    var i = ce[t] - dt[t];
                    return ut[t] + ht[t] + i - i * (e / p)
                },
                Et = function(t, e) {
                    t.x = e.x, t.y = e.y, e.id && (t.id = e.id)
                },
                zt = function(t) {
                    t.x = Math.round(t.x), t.y = Math.round(t.y)
                },
                Lt = null,
                Nt = function() {
                    Lt && (d.unbind(document, "mousemove", Nt), d.addClass(f, "pswp--has_mouse"), m.mouseUsed = !0, kt("mouseUsed")), Lt = setTimeout(function() {
                        Lt = null
                    }, 100)
                },
                Ft = function(t, e) {
                    var i = Ue(_.currItem, pt, t);
                    return e && (tt = i), i
                },
                Bt = function(t) {
                    return t || (t = _.currItem), t.initialZoomLevel
                },
                Xt = function(t) {
                    return t || (t = _.currItem), 0 < t.w ? m.maxSpreadZoom : 1
                },
                Zt = function(t, e, i, r) {
                    return r === _.currItem.initialZoomLevel ? (i[t] = _.currItem.initialPosition[t], !0) : (i[t] = It(t, r), i[t] > e.min[t] ? (i[t] = e.min[t], !0) : i[t] < e.max[t] && (i[t] = e.max[t], !0))
                },
                Yt = function(t) {
                    var e = "";
                    m.escKey && 27 === t.keyCode ? e = "close" : m.arrowKeys && (37 === t.keyCode ? e = "prev" : 39 === t.keyCode && (e = "next")), e && (t.ctrlKey || t.altKey || t.shiftKey || t.metaKey || (t.preventDefault ? t.preventDefault() : t.returnValue = !1, _[e]()))
                },
                Vt = function(t) {
                    t && (G || q || it || j) && (t.preventDefault(), t.stopPropagation())
                },
                jt = function() {
                    _.setScrollOffset(0, d.getScrollY())
                },
                Wt = {},
                Ut = 0,
                Ht = function(t) {
                    Wt[t] && (Wt[t].raf && I(Wt[t].raf), Ut--, delete Wt[t])
                },
                qt = function(t) {
                    Wt[t] && Ht(t), Wt[t] || (Ut++, Wt[t] = {})
                },
                Gt = function() {
                    for (var t in Wt) Wt.hasOwnProperty(t) && Ht(t)
                },
                $t = function(t, e, i, r, n, s, o) {
                    var a, l = St();
                    qt(t);
                    var h = function() {
                        if (Wt[t]) {
                            if (a = St() - l, r <= a) return Ht(t), s(i), void(o && o());
                            s((i - e) * n(a / r) + e), Wt[t].raf = D(h)
                        }
                    };
                    h()
                },
                Kt = {
                    shout: kt,
                    listen: Ct,
                    viewportSize: pt,
                    options: m,
                    isMainScrollAnimating: function() {
                        return it
                    },
                    getZoomLevel: function() {
                        return v
                    },
                    getCurrentIndex: function() {
                        return g
                    },
                    isDragging: function() {
                        return U
                    },
                    isZooming: function() {
                        return Q
                    },
                    setScrollOffset: function(t, e) {
                        dt.x = t, N = dt.y = e, kt("updateScrollOffset", dt)
                    },
                    applyZoomPan: function(t, e, i, r) {
                        ct.x = e, ct.y = i, v = t, Ot(r)
                    },
                    init: function() {
                        if (!l && !n) {
                            var t;
                            _.framework = d, _.template = f, _.bg = d.getChildByClass(f, "pswp__bg"), E = f.className, l = !0, F = d.detectFeatures(), D = F.raf, I = F.caf, O = F.transform, L = F.oldIE, _.scrollWrap = d.getChildByClass(f, "pswp__scroll-wrap"), _.container = d.getChildByClass(_.scrollWrap, "pswp__container"), o = _.container.style, _.itemHolders = b = [{
                                el: _.container.children[0],
                                wrap: 0,
                                index: -1
                            }, {
                                el: _.container.children[1],
                                wrap: 0,
                                index: -1
                            }, {
                                el: _.container.children[2],
                                wrap: 0,
                                index: -1
                            }], b[0].el.style.display = b[2].el.style.display = "none",
                                function() {
                                    if (O) {
                                        var t = F.perspective && !R;
                                        return y = "translate" + (t ? "3d(" : "("), x = F.perspective ? ", 0px)" : ")"
                                    }
                                    O = "left", d.addClass(f, "pswp--ie"), Rt = function(t, e) {
                                        e.left = t + "px"
                                    }, At = function(t) {
                                        var e = 1 < t.fitRatio ? 1 : t.fitRatio,
                                            i = t.container.style,
                                            r = e * t.w,
                                            n = e * t.h;
                                        i.width = r + "px", i.height = n + "px", i.left = t.initialPosition.x + "px", i.top = t.initialPosition.y + "px"
                                    }, Ot = function() {
                                        if (et) {
                                            var t = et,
                                                e = _.currItem,
                                                i = 1 < e.fitRatio ? 1 : e.fitRatio,
                                                r = i * e.w,
                                                n = i * e.h;
                                            t.width = r + "px", t.height = n + "px", t.left = ct.x + "px", t.top = ct.y + "px"
                                        }
                                    }
                                }(), c = {
                                resize: _.updateSize,
                                orientationchange: function() {
                                    clearTimeout(B), B = setTimeout(function() {
                                        pt.x !== _.scrollWrap.clientWidth && _.updateSize()
                                    }, 500)
                                },
                                scroll: jt,
                                keydown: Yt,
                                click: Vt
                            };
                            var e = F.isOldIOSPhone || F.isOldAndroid || F.isMobileOpera;
                            for (F.animationName && F.transform && !e || (m.showAnimationDuration = m.hideAnimationDuration = 0), t = 0; t < vt.length; t++) _["init" + vt[t]]();
                            r && (_.ui = new r(_, d)).init(), kt("firstUpdate"), g = g || m.index || 0, (isNaN(g) || g < 0 || g >= Ze()) && (g = 0), _.currItem = Xe(g), (F.isOldIOSPhone || F.isOldAndroid) && (gt = !1), f.setAttribute("aria-hidden", "false"), m.modal && (gt ? f.style.position = "fixed" : (f.style.position = "absolute", f.style.top = d.getScrollY() + "px")), void 0 === N && (kt("initialLayout"), N = z = d.getScrollY());
                            var i = "pswp--open ";
                            for (m.mainClass && (i += m.mainClass + " "), m.showHideOpacity && (i += "pswp--animate_opacity "), i += R ? "pswp--touch" : "pswp--notouch", i += F.animationName ? " pswp--css_animation" : "", i += F.svg ? " pswp--svg" : "", d.addClass(f, i), _.updateSize(), a = -1, mt = null, t = 0; t < 3; t++) Rt((t + a) * _t.x, b[t].el.style);
                            L || d.bind(_.scrollWrap, u, _), Ct("initialZoomInEnd", function() {
                                _.setContent(b[0], g - 1), _.setContent(b[2], g + 1), b[0].el.style.display = b[2].el.style.display = "block", m.focus && f.focus(), d.bind(document, "keydown", _), F.transform && d.bind(_.scrollWrap, "click", _), m.mouseUsed || d.bind(document, "mousemove", Nt), d.bind(window, "resize scroll orientationchange", _), kt("bindEvents")
                            }), _.setContent(b[1], g), _.updateCurrItem(), kt("afterInit"), gt || (T = setInterval(function() {
                                Ut || U || Q || v !== _.currItem.initialZoomLevel || _.updateSize()
                            }, 1e3)), d.addClass(f, "pswp--visible")
                        }
                    },
                    close: function() {
                        l && (n = !(l = !1), kt("close"), d.unbind(window, "resize scroll orientationchange", _), d.unbind(window, "scroll", c.scroll), d.unbind(document, "keydown", _), d.unbind(document, "mousemove", Nt), F.transform && d.unbind(_.scrollWrap, "click", _), U && d.unbind(window, h, _), clearTimeout(B), kt("unbindEvents"), Ye(_.currItem, null, !0, _.destroy))
                    },
                    destroy: function() {
                        kt("destroy"), Le && clearTimeout(Le), f.setAttribute("aria-hidden", "true"), f.className = E, T && clearInterval(T), d.unbind(_.scrollWrap, u, _), d.unbind(window, "scroll", _), de(), Gt(), bt = null
                    },
                    panTo: function(t, e, i) {
                        i || (t > tt.min.x ? t = tt.min.x : t < tt.max.x && (t = tt.max.x), e > tt.min.y ? e = tt.min.y : e < tt.max.y && (e = tt.max.y)), ct.x = t, ct.y = e, Ot()
                    },
                    handleEvent: function(t) {
                        t = t || window.event, c[t.type] && c[t.type](t)
                    },
                    goTo: function(t) {
                        var e = (t = wt(t)) - g;
                        mt = e, g = t, _.currItem = Xe(g), ft -= e, Dt(_t.x * ft), Gt(), it = !1, _.updateCurrItem()
                    },
                    next: function() {
                        _.goTo(g + 1)
                    },
                    prev: function() {
                        _.goTo(g - 1)
                    },
                    updateCurrZoomItem: function(t) {
                        if (t && kt("beforeChange", 0), b[1].el.children.length) {
                            var e = b[1].el.children[0];
                            et = d.hasClass(e, "pswp__zoom-wrap") ? e.style : null
                        } else et = null;
                        tt = _.currItem.bounds, p = v = _.currItem.initialZoomLevel, ct.x = tt.center.x, ct.y = tt.center.y, t && kt("afterChange")
                    },
                    invalidateCurrItems: function() {
                        w = !0;
                        for (var t = 0; t < 3; t++) b[t].item && (b[t].item.needsUpdate = !0)
                    },
                    updateCurrItem: function(t) {
                        if (0 !== mt) {
                            var e, i = Math.abs(mt);
                            if (!(t && i < 2)) {
                                _.currItem = Xe(g), xt = !1, kt("beforeChange", mt), 3 <= i && (a += mt + (0 < mt ? -3 : 3), i = 3);
                                for (var r = 0; r < i; r++) 0 < mt ? (e = b.shift(), b[2] = e, Rt((++a + 2) * _t.x, e.el.style), _.setContent(e, g - i + r + 1 + 1)) : (e = b.pop(), b.unshift(e), Rt(--a * _t.x, e.el.style), _.setContent(e, g + i - r - 1 - 1));
                                if (et && 1 === Math.abs(mt)) {
                                    var n = Xe(C);
                                    n.initialZoomLevel !== v && (Ue(n, pt), $e(n), At(n))
                                }
                                mt = 0, _.updateCurrZoomItem(), C = g, kt("afterChange")
                            }
                        }
                    },
                    updateSize: function(t) {
                        if (!gt && m.modal) {
                            var e = d.getScrollY();
                            if (N !== e && (f.style.top = e + "px", N = e), !t && yt.x === window.innerWidth && yt.y === window.innerHeight) return;
                            yt.x = window.innerWidth, yt.y = window.innerHeight, f.style.height = yt.y + "px"
                        }
                        if (pt.x = _.scrollWrap.clientWidth, pt.y = _.scrollWrap.clientHeight, jt(), _t.x = pt.x + Math.round(pt.x * m.spacing), _t.y = pt.y, Dt(_t.x * ft), kt("beforeResize"), void 0 !== a) {
                            for (var i, r, n, s = 0; s < 3; s++) i = b[s], Rt((s + a) * _t.x, i.el.style), n = g + s - 1, m.loop && 2 < Ze() && (n = wt(n)), (r = Xe(n)) && (w || r.needsUpdate || !r.bounds) ? (_.cleanSlide(r), _.setContent(i, n), 1 === s && (_.currItem = r, _.updateCurrZoomItem(!0)), r.needsUpdate = !1) : -1 === i.index && 0 <= n && _.setContent(i, n), r && r.container && (Ue(r, pt), $e(r), At(r));
                            w = !1
                        }
                        p = v = _.currItem.initialZoomLevel, (tt = _.currItem.bounds) && (ct.x = tt.center.x, ct.y = tt.center.y, Ot(!0)), kt("resize")
                    },
                    zoomTo: function(e, t, i, r, n) {
                        t && (p = v, ce.x = Math.abs(t.x) - ct.x, ce.y = Math.abs(t.y) - ct.y, Et(ut, ct));
                        var s = Ft(e, !1),
                            o = {};
                        Zt("x", s, o, e), Zt("y", s, o, e);
                        var a = v,
                            l = ct.x,
                            h = ct.y;
                        zt(o);
                        var u = function(t) {
                            ct.y = 1 === t ? (v = e, ct.x = o.x, o.y) : (v = (e - a) * t + a, ct.x = (o.x - l) * t + l, (o.y - h) * t + h), n && n(t), Ot(1 === t)
                        };
                        i ? $t("customZoomTo", 0, 1, i, r || d.easing.sine.inOut, u) : u(1)
                    }
                },
                Qt = {},
                Jt = {},
                te = {},
                ee = {},
                ie = {},
                re = [],
                ne = {},
                se = [],
                oe = {},
                ae = 0,
                le = {
                    x: 0,
                    y: 0
                },
                he = 0,
                ue = {
                    x: 0,
                    y: 0
                },
                ce = {
                    x: 0,
                    y: 0
                },
                pe = {
                    x: 0,
                    y: 0
                },
                fe = function(t, e) {
                    return oe.x = Math.abs(t.x - e.x), oe.y = Math.abs(t.y - e.y), Math.sqrt(oe.x * oe.x + oe.y * oe.y)
                },
                de = function() {
                    i && (I(i), i = null)
                },
                _e = function() {
                    U && (i = D(_e), Oe())
                },
                me = function(t, e) {
                    return !(!t || t === document) && !(t.getAttribute("class") && -1 < t.getAttribute("class").indexOf("pswp__scroll-wrap")) && (e(t) ? t : me(t.parentNode, e))
                },
                ge = {},
                ve = function(t, e) {
                    return ge.prevent = !me(t.target, m.isClickableElement), kt("preventDragEvent", t, e, ge), ge.prevent
                },
                ye = function(t, e) {
                    return e.x = t.pageX, e.y = t.pageY, e.id = t.identifier, e
                },
                xe = function(t, e, i) {
                    i.x = .5 * (t.x + e.x), i.y = .5 * (t.y + e.y)
                },
                Te = function() {
                    var t = ct.y - _.currItem.initialPosition.y;
                    return 1 - Math.abs(t / (pt.y / 2))
                },
                we = {},
                be = {},
                Ce = [],
                ke = function(t) {
                    for (; 0 < Ce.length;) Ce.pop();
                    return A ? (lt = 0, re.forEach(function(t) {
                        0 === lt ? Ce[0] = t : 1 === lt && (Ce[1] = t), lt++
                    })) : -1 < t.type.indexOf("touch") ? t.touches && 0 < t.touches.length && (Ce[0] = ye(t.touches[0], we), 1 < t.touches.length && (Ce[1] = ye(t.touches[1], be))) : (we.x = t.pageX, we.y = t.pageY, we.id = "", Ce[0] = we), Ce
                },
                Se = function(t, e) {
                    var i, r, n, s, o = ct[t] + e[t],
                        a = 0 < e[t],
                        l = ue.x + e.x,
                        h = ue.x - ne.x;
                    if (i = o > tt.min[t] || o < tt.max[t] ? m.panEndFriction : 1, o = ct[t] + e[t] * i, (m.allowPanToNext || v === _.currItem.initialZoomLevel) && (et ? "h" !== rt || "x" !== t || q || (a ? (o > tt.min[t] && (i = m.panEndFriction, tt.min[t], r = tt.min[t] - ut[t]), (r <= 0 || h < 0) && 1 < Ze() ? (s = l, h < 0 && l > ne.x && (s = ne.x)) : tt.min.x !== tt.max.x && (n = o)) : (o < tt.max[t] && (i = m.panEndFriction, tt.max[t], r = ut[t] - tt.max[t]), (r <= 0 || 0 < h) && 1 < Ze() ? (s = l, 0 < h && l < ne.x && (s = ne.x)) : tt.min.x !== tt.max.x && (n = o))) : s = l, "x" === t)) return void 0 !== s && (Dt(s, !0), $ = s !== ne.x), tt.min.x !== tt.max.x && (void 0 !== n ? ct.x = n : $ || (ct.x += e.x * i)), void 0 !== s;
                    it || $ || v > _.currItem.fitRatio && (ct[t] += e[t] * i)
                },
                Pe = function(t) {
                    if (!("mousedown" === t.type && 0 < t.button))
                        if (Be) t.preventDefault();
                        else if (!W || "mousedown" !== t.type) {
                            if (ve(t, !0) && t.preventDefault(), kt("pointerDown"), A) {
                                var e = d.arraySearch(re, t.pointerId, "id");
                                e < 0 && (e = re.length), re[e] = {
                                    x: t.pageX,
                                    y: t.pageY,
                                    id: t.pointerId
                                }
                            }
                            var i = ke(t),
                                r = i.length;
                            K = null, Gt(), U && 1 !== r || (U = nt = !0, d.bind(window, h, _), V = at = st = j = $ = G = H = q = !1, rt = null, kt("firstTouchStart", i), Et(ut, ct), ht.x = ht.y = 0, Et(ee, i[0]), Et(ie, ee), ne.x = _t.x * ft, se = [{
                                x: ee.x,
                                y: ee.y
                            }], Z = X = St(), Ft(v, !0), de(), _e()), !Q && 1 < r && !it && !$ && (p = v, Q = H = !(q = !1), ht.y = ht.x = 0, Et(ut, ct), Et(Qt, i[0]), Et(Jt, i[1]), xe(Qt, Jt, pe), ce.x = Math.abs(pe.x) - ct.x, ce.y = Math.abs(pe.y) - ct.y, J = fe(Qt, Jt))
                        }
                },
                Me = function(t) {
                    if (t.preventDefault(), A) {
                        var e = d.arraySearch(re, t.pointerId, "id");
                        if (-1 < e) {
                            var i = re[e];
                            i.x = t.pageX, i.y = t.pageY
                        }
                    }
                    if (U) {
                        var r = ke(t);
                        if (rt || G || Q) K = r;
                        else if (ue.x !== _t.x * ft) rt = "h";
                        else {
                            var n = Math.abs(r[0].x - ee.x) - Math.abs(r[0].y - ee.y);
                            10 <= Math.abs(n) && (rt = 0 < n ? "h" : "v", K = r)
                        }
                    }
                },
                Oe = function() {
                    if (K) {
                        var t, e, i = K.length;
                        if (0 !== i)
                            if (Et(Qt, K[0]), te.x = Qt.x - ee.x, te.y = Qt.y - ee.y, Q && 1 < i) {
                                if (ee.x = Qt.x, ee.y = Qt.y, !te.x && !te.y && (t = K[1], e = Jt, t.x === e.x && t.y === e.y)) return;
                                Et(Jt, K[1]), q || (q = !0, kt("zoomGestureStarted"));
                                var r = fe(Qt, Jt),
                                    n = Ee(r);
                                n > _.currItem.initialZoomLevel + _.currItem.initialZoomLevel / 15 && (at = !0);
                                var s = 1,
                                    o = Bt(),
                                    a = Xt();
                                if (n < o)
                                    if (m.pinchToClose && !at && p <= _.currItem.initialZoomLevel) {
                                        var l = 1 - (o - n) / (o / 1.2);
                                        Pt(l), kt("onPinchClose", l), st = !0
                                    } else 1 < (s = (o - n) / o) && (s = 1), n = o - s * (o / 3);
                                else a < n && (1 < (s = (n - a) / (6 * o)) && (s = 1), n = a + s * o);
                                s < 0 && (s = 0), xe(Qt, Jt, le), ht.x += le.x - pe.x, ht.y += le.y - pe.y, Et(pe, le), ct.x = It("x", n), ct.y = It("y", n), V = v < n, v = n, Ot()
                            } else {
                                if (!rt) return;
                                if (nt && (nt = !1, 10 <= Math.abs(te.x) && (te.x -= K[0].x - ie.x), 10 <= Math.abs(te.y) && (te.y -= K[0].y - ie.y)), ee.x = Qt.x, ee.y = Qt.y, 0 === te.x && 0 === te.y) return;
                                if ("v" === rt && m.closeOnVerticalDrag && "fit" === m.scaleMode && v === _.currItem.initialZoomLevel) {
                                    ht.y += te.y, ct.y += te.y;
                                    var h = Te();
                                    return j = !0, kt("onVerticalDrag", h), Pt(h), void Ot()
                                }! function(t, e, i) {
                                    if (50 < t - Z) {
                                        var r = 2 < se.length ? se.shift() : {};
                                        r.x = e, r.y = i, se.push(r), Z = t
                                    }
                                }(St(), Qt.x, Qt.y), G = !0, tt = _.currItem.bounds, Se("x", te) || (Se("y", te), zt(ct), Ot())
                            }
                    }
                },
                Ae = function(t) {
                    if (F.isOldAndroid) {
                        if (W && "mouseup" === t.type) return; - 1 < t.type.indexOf("touch") && (clearTimeout(W), W = setTimeout(function() {
                            W = 0
                        }, 600))
                    }
                    var e;
                    if (kt("pointerUp"), ve(t, !1) && t.preventDefault(), A) {
                        var i = d.arraySearch(re, t.pointerId, "id"); - 1 < i && (e = re.splice(i, 1)[0], navigator.pointerEnabled ? e.type = t.pointerType || "mouse" : (e.type = {
                            4: "mouse",
                            2: "touch",
                            3: "pen"
                        }[t.pointerType], e.type || (e.type = t.pointerType || "mouse")))
                    }
                    var r, n = ke(t),
                        s = n.length;
                    if ("mouseup" === t.type && (s = 0), 2 === s) return !(K = null);
                    1 === s && Et(ie, n[0]), 0 !== s || rt || it || (e || ("mouseup" === t.type ? e = {
                        x: t.pageX,
                        y: t.pageY,
                        type: "mouse"
                    } : t.changedTouches && t.changedTouches[0] && (e = {
                        x: t.changedTouches[0].pageX,
                        y: t.changedTouches[0].pageY,
                        type: "touch"
                    })), kt("touchRelease", t, e));
                    var o = -1;
                    if (0 === s && (U = !1, d.unbind(window, h, _), de(), Q ? o = 0 : -1 !== he && (o = St() - he)), he = 1 === s ? St() : -1, r = -1 !== o && o < 150 ? "zoom" : "swipe", Q && s < 2 && (Q = !1, 1 === s && (r = "zoomPointerUp"), kt("zoomGestureEnded")), K = null, G || q || it || j)
                        if (Gt(), Y || (Y = Re()), Y.calculateSwipeSpeed("x"), j)
                            if (Te() < m.verticalDragRange) _.close();
                            else {
                                var a = ct.y,
                                    l = ot;
                                $t("verticalDrag", 0, 1, 300, d.easing.cubic.out, function(t) {
                                    ct.y = (_.currItem.initialPosition.y - a) * t + a, Pt((1 - l) * t + l), Ot()
                                }), kt("onVerticalDrag", 1)
                            } else {
                            if (($ || it) && 0 === s) {
                                if (Ie(r, Y)) return;
                                r = "zoomPointerUp"
                            }
                            it || ("swipe" === r ? !$ && v > _.currItem.fitRatio && De(Y) : ze())
                        }
                },
                Re = function() {
                    var e, i, r = {
                        lastFlickOffset: {},
                        lastFlickDist: {},
                        lastFlickSpeed: {},
                        slowDownRatio: {},
                        slowDownRatioReverse: {},
                        speedDecelerationRatio: {},
                        speedDecelerationRatioAbs: {},
                        distanceOffset: {},
                        backAnimDestination: {},
                        backAnimStarted: {},
                        calculateSwipeSpeed: function(t) {
                            i = 1 < se.length ? (e = St() - Z + 50, se[se.length - 2][t]) : (e = St() - X, ie[t]), r.lastFlickOffset[t] = ee[t] - i, r.lastFlickDist[t] = Math.abs(r.lastFlickOffset[t]), 20 < r.lastFlickDist[t] ? r.lastFlickSpeed[t] = r.lastFlickOffset[t] / e : r.lastFlickSpeed[t] = 0, Math.abs(r.lastFlickSpeed[t]) < .1 && (r.lastFlickSpeed[t] = 0), r.slowDownRatio[t] = .95, r.slowDownRatioReverse[t] = 1 - r.slowDownRatio[t], r.speedDecelerationRatio[t] = 1
                        },
                        calculateOverBoundsAnimOffset: function(e, t) {
                            r.backAnimStarted[e] || (ct[e] > tt.min[e] ? r.backAnimDestination[e] = tt.min[e] : ct[e] < tt.max[e] && (r.backAnimDestination[e] = tt.max[e]), void 0 !== r.backAnimDestination[e] && (r.slowDownRatio[e] = .7, r.slowDownRatioReverse[e] = 1 - r.slowDownRatio[e], r.speedDecelerationRatioAbs[e] < .05 && (r.lastFlickSpeed[e] = 0, r.backAnimStarted[e] = !0, $t("bounceZoomPan" + e, ct[e], r.backAnimDestination[e], t || 300, d.easing.sine.out, function(t) {
                                ct[e] = t, Ot()
                            }))))
                        },
                        calculateAnimOffset: function(t) {
                            r.backAnimStarted[t] || (r.speedDecelerationRatio[t] = r.speedDecelerationRatio[t] * (r.slowDownRatio[t] + r.slowDownRatioReverse[t] - r.slowDownRatioReverse[t] * r.timeDiff / 10), r.speedDecelerationRatioAbs[t] = Math.abs(r.lastFlickSpeed[t] * r.speedDecelerationRatio[t]), r.distanceOffset[t] = r.lastFlickSpeed[t] * r.speedDecelerationRatio[t] * r.timeDiff, ct[t] += r.distanceOffset[t])
                        },
                        panAnimLoop: function() {
                            if (Wt.zoomPan && (Wt.zoomPan.raf = D(r.panAnimLoop), r.now = St(), r.timeDiff = r.now - r.lastNow, r.lastNow = r.now, r.calculateAnimOffset("x"), r.calculateAnimOffset("y"), Ot(), r.calculateOverBoundsAnimOffset("x"), r.calculateOverBoundsAnimOffset("y"), r.speedDecelerationRatioAbs.x < .05 && r.speedDecelerationRatioAbs.y < .05)) return ct.x = Math.round(ct.x), ct.y = Math.round(ct.y), Ot(), void Ht("zoomPan")
                        }
                    };
                    return r
                },
                De = function(t) {
                    if (t.calculateSwipeSpeed("y"), tt = _.currItem.bounds, t.backAnimDestination = {}, t.backAnimStarted = {}, Math.abs(t.lastFlickSpeed.x) <= .05 && Math.abs(t.lastFlickSpeed.y) <= .05) return t.speedDecelerationRatioAbs.x = t.speedDecelerationRatioAbs.y = 0, t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), !0;
                    qt("zoomPan"), t.lastNow = St(), t.panAnimLoop()
                },
                Ie = function(t, e) {
                    var i, r, n;
                    if (it || (ae = g), "swipe" === t) {
                        var s = ee.x - ie.x,
                            o = e.lastFlickDist.x < 10;
                        30 < s && (o || 20 < e.lastFlickOffset.x) ? r = -1 : s < -30 && (o || e.lastFlickOffset.x < -20) && (r = 1)
                    }
                    r && ((g += r) < 0 ? (g = m.loop ? Ze() - 1 : 0, n = !0) : g >= Ze() && (g = m.loop ? 0 : Ze() - 1, n = !0), n && !m.loop || (mt += r, ft -= r, i = !0));
                    var a, l = _t.x * ft,
                        h = Math.abs(l - ue.x);
                    return a = i || l > ue.x == 0 < e.lastFlickSpeed.x ? (a = 0 < Math.abs(e.lastFlickSpeed.x) ? h / Math.abs(e.lastFlickSpeed.x) : 333, a = Math.min(a, 400), Math.max(a, 250)) : 333, ae === g && (i = !1), it = !0, kt("mainScrollAnimStart"), $t("mainScroll", ue.x, l, a, d.easing.cubic.out, Dt, function() {
                        Gt(), it = !1, ae = -1, (i || ae !== g) && _.updateCurrItem(), kt("mainScrollAnimComplete")
                    }), i && _.updateCurrItem(!0), i
                },
                Ee = function(t) {
                    return 1 / J * t * p
                },
                ze = function() {
                    var t = v,
                        e = Bt(),
                        i = Xt();
                    v < e ? t = e : i < v && (t = i);
                    var r, n = ot;
                    return st && !V && !at && v < e ? _.close() : (st && (r = function(t) {
                        Pt((1 - n) * t + n)
                    }), _.zoomTo(t, 0, 200, d.easing.cubic.out, r)), !0
                };
            Tt("Gestures", {
                publicMethods: {
                    initGestures: function() {
                        var t = function(t, e, i, r, n) {
                            k = t + e, S = t + i, P = t + r, M = n ? t + n : ""
                        };
                        (A = F.pointerEvent) && F.touch && (F.touch = !1), A ? navigator.pointerEnabled ? t("pointer", "down", "move", "up", "cancel") : t("MSPointer", "Down", "Move", "Up", "Cancel") : F.touch ? (t("touch", "start", "move", "end", "cancel"), R = !0) : t("mouse", "down", "move", "up"), h = S + " " + P + " " + M, u = k, A && !R && (R = 1 < navigator.maxTouchPoints || 1 < navigator.msMaxTouchPoints), _.likelyTouchDevice = R, c[k] = Pe, c[S] = Me, c[P] = Ae, M && (c[M] = c[P]), F.touch && (u += " mousedown", h += " mousemove mouseup", c.mousedown = c[k], c.mousemove = c[S], c.mouseup = c[P]), R || (m.allowPanToNext = !1)
                    }
                }
            });
            var Le, Ne, Fe, Be, Xe, Ze, Ye = function(o, t, a, e) {
                    var l;
                    Le && clearTimeout(Le), Fe = Be = !0, o.initialLayout ? (l = o.initialLayout, o.initialLayout = null) : l = m.getThumbBoundsFn && m.getThumbBoundsFn(g);
                    var h, u, c = a ? m.hideAnimationDuration : m.showAnimationDuration,
                        p = function() {
                            Ht("initialZoom"), a ? (_.template.removeAttribute("style"), _.bg.removeAttribute("style")) : (Pt(1), t && (t.style.display = "block"), d.addClass(f, "pswp--animated-in"), kt("initialZoom" + (a ? "OutEnd" : "InEnd"))), e && e(), Be = !1
                        };
                    if (!c || !l || void 0 === l.x) return kt("initialZoom" + (a ? "Out" : "In")), v = o.initialZoomLevel, Et(ct, o.initialPosition), Ot(), f.style.opacity = a ? 0 : 1, Pt(1), void(c ? setTimeout(function() {
                        p()
                    }, c) : p());
                    h = s, u = !_.currItem.src || _.currItem.loadError || m.showHideOpacity, o.miniImg && (o.miniImg.style.webkitBackfaceVisibility = "hidden"), a || (v = l.w / o.w, ct.x = l.x, ct.y = l.y - z, _[u ? "template" : "bg"].style.opacity = .001, Ot()), qt("initialZoom"), a && !h && d.removeClass(f, "pswp--animated-in"), u && (a ? d[(h ? "remove" : "add") + "Class"](f, "pswp--animate_opacity") : setTimeout(function() {
                        d.addClass(f, "pswp--animate_opacity")
                    }, 30)), Le = setTimeout(function() {
                        if (kt("initialZoom" + (a ? "Out" : "In")), a) {
                            var e = l.w / o.w,
                                i = ct.x,
                                r = ct.y,
                                n = v,
                                s = ot,
                                t = function(t) {
                                    ct.y = 1 === t ? (v = e, ct.x = l.x, l.y - N) : (v = (e - n) * t + n, ct.x = (l.x - i) * t + i, (l.y - N - r) * t + r), Ot(), u ? f.style.opacity = 1 - t : Pt(s - t * s)
                                };
                            h ? $t("initialZoom", 0, 1, c, d.easing.cubic.out, t, p) : (t(1), Le = setTimeout(p, c + 20))
                        } else v = o.initialZoomLevel, Et(ct, o.initialPosition), Ot(), Pt(1), u ? f.style.opacity = 1 : Pt(1), Le = setTimeout(p, c + 20)
                    }, a ? 25 : 90)
                },
                Ve = {},
                je = [],
                We = {
                    index: 0,
                    errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                    forceProgressiveLoading: !1,
                    preload: [1, 1],
                    getNumItemsFn: function() {
                        return Ne.length
                    }
                },
                Ue = function(t, e, i) {
                    if (!t.src || t.loadError) return t.w = t.h = 0, t.initialZoomLevel = t.fitRatio = 1, t.bounds = {
                        center: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: 0,
                            y: 0
                        },
                        min: {
                            x: 0,
                            y: 0
                        }
                    }, t.initialPosition = t.bounds.center, t.bounds;
                    var r, n, s, o, a = !i;
                    if (a && (t.vGap || (t.vGap = {
                        top: 0,
                        bottom: 0
                    }), kt("parseVerticalMargin", t)), Ve.x = e.x, Ve.y = e.y - t.vGap.top - t.vGap.bottom, a) {
                        var l = Ve.x / t.w,
                            h = Ve.y / t.h;
                        t.fitRatio = l < h ? l : h;
                        var u = m.scaleMode;
                        "orig" === u ? i = 1 : "fit" === u && (i = t.fitRatio), 1 < i && (i = 1), t.initialZoomLevel = i, t.bounds || (t.bounds = {
                            center: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: 0,
                                y: 0
                            },
                            min: {
                                x: 0,
                                y: 0
                            }
                        })
                    }
                    return i ? (n = (r = t).w * i, s = t.h * i, (o = r.bounds).center.x = Math.round((Ve.x - n) / 2), o.center.y = Math.round((Ve.y - s) / 2) + r.vGap.top, o.max.x = n > Ve.x ? Math.round(Ve.x - n) : o.center.x, o.max.y = s > Ve.y ? Math.round(Ve.y - s) + r.vGap.top : o.center.y, o.min.x = n > Ve.x ? 0 : o.center.x, o.min.y = s > Ve.y ? r.vGap.top : o.center.y, a && i === t.initialZoomLevel && (t.initialPosition = t.bounds.center), t.bounds) : void 0
                },
                He = function(t, e, i, r, n, s) {
                    e.loadError || r && (e.imageAppended = !0, $e(e, r, e === _.currItem && xt), i.appendChild(r), s && setTimeout(function() {
                        e && e.loaded && e.placeholder && (e.placeholder.style.display = "none", e.placeholder = null)
                    }, 500))
                },
                qe = function(t) {
                    t.loading = !0, t.loaded = !1;
                    var e = t.img = d.createEl("pswp__img", "img"),
                        i = function() {
                            t.loading = !1, t.loaded = !0, t.loadComplete ? t.loadComplete(t) : t.img = null, e.onload = e.onerror = null, e = null
                        };
                    return e.onload = i, e.onerror = function() {
                        t.loadError = !0, i()
                    }, e.src = t.src, e
                },
                Ge = function(t, e) {
                    if (t.src && t.loadError && t.container) return e && (t.container.innerHTML = ""), t.container.innerHTML = m.errorMsg.replace("%url%", t.src), !0
                },
                $e = function(t, e, i) {
                    if (t.src) {
                        e || (e = t.container.lastChild);
                        var r = i ? t.w : Math.round(t.w * t.fitRatio),
                            n = i ? t.h : Math.round(t.h * t.fitRatio);
                        t.placeholder && !t.loaded && (t.placeholder.style.width = r + "px", t.placeholder.style.height = n + "px"), e.style.width = r + "px", e.style.height = n + "px"
                    }
                },
                Ke = function() {
                    if (je.length) {
                        for (var t, e = 0; e < je.length; e++)(t = je[e]).holder.index === t.index && He(t.index, t.item, t.baseDiv, t.img, 0, t.clearPlaceholder);
                        je = []
                    }
                };
            Tt("Controller", {
                publicMethods: {
                    lazyLoadItem: function(t) {
                        t = wt(t);
                        var e = Xe(t);
                        e && (!e.loaded && !e.loading || w) && (kt("gettingData", t, e), e.src && qe(e))
                    },
                    initController: function() {
                        d.extend(m, We, !0), _.items = Ne = t, Xe = _.getItemAt, Ze = m.getNumItemsFn, m.loop, Ze() < 3 && (m.loop = !1), Ct("beforeChange", function(t) {
                            var e, i = m.preload,
                                r = null === t || 0 <= t,
                                n = Math.min(i[0], Ze()),
                                s = Math.min(i[1], Ze());
                            for (e = 1; e <= (r ? s : n); e++) _.lazyLoadItem(g + e);
                            for (e = 1; e <= (r ? n : s); e++) _.lazyLoadItem(g - e)
                        }), Ct("initialLayout", function() {
                            _.currItem.initialLayout = m.getThumbBoundsFn && m.getThumbBoundsFn(g)
                        }), Ct("mainScrollAnimComplete", Ke), Ct("initialZoomInEnd", Ke), Ct("destroy", function() {
                            for (var t, e = 0; e < Ne.length; e++)(t = Ne[e]).container && (t.container = null), t.placeholder && (t.placeholder = null), t.img && (t.img = null), t.preloader && (t.preloader = null), t.loadError && (t.loaded = t.loadError = !1);
                            je = null
                        })
                    },
                    getItemAt: function(t) {
                        return 0 <= t && void 0 !== Ne[t] && Ne[t]
                    },
                    allowProgressiveImg: function() {
                        return m.forceProgressiveLoading || !R || m.mouseUsed || 1200 < screen.width
                    },
                    setContent: function(e, i) {
                        m.loop && (i = wt(i));
                        var t = _.getItemAt(e.index);
                        t && (t.container = null);
                        var r, n = _.getItemAt(i);
                        if (n) {
                            kt("gettingData", i, n), e.index = i;
                            var s = (e.item = n).container = d.createEl("pswp__zoom-wrap");
                            if (!n.src && n.html && (n.html.tagName ? s.appendChild(n.html) : s.innerHTML = n.html), Ge(n), Ue(n, pt), !n.src || n.loadError || n.loaded) n.src && !n.loadError && ((r = d.createEl("pswp__img", "img")).style.opacity = 1, r.src = n.src, $e(n, r), He(0, n, s, r));
                            else {
                                if (n.loadComplete = function(t) {
                                    if (l) {
                                        if (e && e.index === i) {
                                            if (Ge(t, !0)) return t.loadComplete = t.img = null, Ue(t, pt), At(t), void(e.index === g && _.updateCurrZoomItem());
                                            t.imageAppended ? !Be && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null) : F.transform && (it || Be) ? je.push({
                                                item: t,
                                                baseDiv: s,
                                                img: t.img,
                                                index: i,
                                                holder: e,
                                                clearPlaceholder: !0
                                            }) : He(0, t, s, t.img, 0, !0)
                                        }
                                        t.loadComplete = null, t.img = null, kt("imageLoadComplete", i, t)
                                    }
                                }, d.features.transform) {
                                    var o = "pswp__img pswp__img--placeholder";
                                    o += n.msrc ? "" : " pswp__img--placeholder--blank";
                                    var a = d.createEl(o, n.msrc ? "img" : "");
                                    n.msrc && (a.src = n.msrc), $e(n, a), s.appendChild(a), n.placeholder = a
                                }
                                n.loading || qe(n), _.allowProgressiveImg() && (!Fe && F.transform ? je.push({
                                    item: n,
                                    baseDiv: s,
                                    img: n.img,
                                    index: i,
                                    holder: e
                                }) : He(0, n, s, n.img, 0, !0))
                            }
                            Fe || i !== g ? At(n) : (et = s.style, Ye(n, r || n.img)), e.el.innerHTML = "", e.el.appendChild(s)
                        } else e.el.innerHTML = ""
                    },
                    cleanSlide: function(t) {
                        t.img && (t.img.onload = t.img.onerror = null), t.loaded = t.loading = t.img = t.imageAppended = !1
                    }
                }
            });
            var Qe, Je, ti = {},
                ei = function(t, e, i) {
                    var r = document.createEvent("CustomEvent"),
                        n = {
                            origEvent: t,
                            target: t.target,
                            releasePoint: e,
                            pointerType: i || "touch"
                        };
                    r.initCustomEvent("pswpTap", !0, !0, n), t.target.dispatchEvent(r)
                };
            Tt("Tap", {
                publicMethods: {
                    initTap: function() {
                        Ct("firstTouchStart", _.onTapStart), Ct("touchRelease", _.onTapRelease), Ct("destroy", function() {
                            ti = {}, Qe = null
                        })
                    },
                    onTapStart: function(t) {
                        1 < t.length && (clearTimeout(Qe), Qe = null)
                    },
                    onTapRelease: function(t, e) {
                        var i, r;
                        if (e && !G && !H && !Ut) {
                            var n = e;
                            if (Qe && (clearTimeout(Qe), Qe = null, i = n, r = ti, Math.abs(i.x - r.x) < 25 && Math.abs(i.y - r.y) < 25)) return void kt("doubleTap", n);
                            if ("mouse" === e.type) return void ei(t, e, "mouse");
                            if ("BUTTON" === t.target.tagName.toUpperCase() || d.hasClass(t.target, "pswp__single-tap")) return void ei(t, e);
                            Et(ti, n), Qe = setTimeout(function() {
                                ei(t, e), Qe = null
                            }, 300)
                        }
                    }
                }
            }), Tt("DesktopZoom", {
                publicMethods: {
                    initDesktopZoom: function() {
                        L || (R ? Ct("mouseUsed", function() {
                            _.setupDesktopZoom()
                        }) : _.setupDesktopZoom(!0))
                    },
                    setupDesktopZoom: function(t) {
                        Je = {};
                        var e = "wheel mousewheel DOMMouseScroll";
                        Ct("bindEvents", function() {
                            d.bind(f, e, _.handleMouseWheel)
                        }), Ct("unbindEvents", function() {
                            Je && d.unbind(f, e, _.handleMouseWheel)
                        }), _.mouseZoomedIn = !1;
                        var i, r = function() {
                                _.mouseZoomedIn && (d.removeClass(f, "pswp--zoomed-in"), _.mouseZoomedIn = !1), v < 1 ? d.addClass(f, "pswp--zoom-allowed") : d.removeClass(f, "pswp--zoom-allowed"), n()
                            },
                            n = function() {
                                i && (d.removeClass(f, "pswp--dragging"), i = !1)
                            };
                        Ct("resize", r), Ct("afterChange", r), Ct("pointerDown", function() {
                            _.mouseZoomedIn && (i = !0, d.addClass(f, "pswp--dragging"))
                        }), Ct("pointerUp", n), t || r()
                    },
                    handleMouseWheel: function(t) {
                        if (v <= _.currItem.fitRatio) return m.modal && (!m.closeOnScroll || Ut || U ? t.preventDefault() : O && 2 < Math.abs(t.deltaY) && (s = !0, _.close())), !0;
                        if (t.stopPropagation(), Je.x = 0, "deltaX" in t) 1 === t.deltaMode ? (Je.x = 18 * t.deltaX, Je.y = 18 * t.deltaY) : (Je.x = t.deltaX, Je.y = t.deltaY);
                        else if ("wheelDelta" in t) t.wheelDeltaX && (Je.x = -.16 * t.wheelDeltaX), t.wheelDeltaY ? Je.y = -.16 * t.wheelDeltaY : Je.y = -.16 * t.wheelDelta;
                        else {
                            if (!("detail" in t)) return;
                            Je.y = t.detail
                        }
                        Ft(v, !0);
                        var e = ct.x - Je.x,
                            i = ct.y - Je.y;
                        (m.modal || e <= tt.min.x && e >= tt.max.x && i <= tt.min.y && i >= tt.max.y) && t.preventDefault(), _.panTo(e, i)
                    },
                    toggleDesktopZoom: function(t) {
                        t = t || {
                            x: pt.x / 2 + dt.x,
                            y: pt.y / 2 + dt.y
                        };
                        var e = m.getDoubleTapZoom(!0, _.currItem),
                            i = v === e;
                        _.mouseZoomedIn = !i, _.zoomTo(i ? _.currItem.initialZoomLevel : e, t, 333), d[(i ? "remove" : "add") + "Class"](f, "pswp--zoomed-in")
                    }
                }
            });
            var ii, ri, ni, si, oi, ai, li, hi, ui, ci, pi, fi, di = {
                    history: !0,
                    galleryUID: 1
                },
                _i = function() {
                    return pi.hash.substring(1)
                },
                mi = function() {
                    ii && clearTimeout(ii), ni && clearTimeout(ni)
                },
                gi = function() {
                    var t = _i(),
                        e = {};
                    if (t.length < 5) return e;
                    var i, r = t.split("&");
                    for (i = 0; i < r.length; i++)
                        if (r[i]) {
                            var n = r[i].split("=");
                            n.length < 2 || (e[n[0]] = n[1])
                        }
                    if (m.galleryPIDs) {
                        var s = e.pid;
                        for (i = e.pid = 0; i < Ne.length; i++)
                            if (Ne[i].pid === s) {
                                e.pid = i;
                                break
                            }
                    } else e.pid = parseInt(e.pid, 10) - 1;
                    return e.pid < 0 && (e.pid = 0), e
                },
                vi = function() {
                    if (ni && clearTimeout(ni), Ut || U) ni = setTimeout(vi, 500);
                    else {
                        si ? clearTimeout(ri) : si = !0;
                        var t = g + 1,
                            e = Xe(g);
                        e.hasOwnProperty("pid") && (t = e.pid);
                        var i = li + "&gid=" + m.galleryUID + "&pid=" + t;
                        hi || -1 === pi.hash.indexOf(i) && (ci = !0);
                        var r = pi.href.split("#")[0] + "#" + i;
                        fi ? "#" + i !== window.location.hash && history[hi ? "replaceState" : "pushState"]("", document.title, r) : hi ? pi.replace(r) : pi.hash = i, hi = !0, ri = setTimeout(function() {
                            si = !1
                        }, 60)
                    }
                };
            Tt("History", {
                publicMethods: {
                    initHistory: function() {
                        if (d.extend(m, di, !0), m.history) {
                            pi = window.location, hi = ui = ci = !1, li = _i(), fi = "pushState" in history, -1 < li.indexOf("gid=") && (li = (li = li.split("&gid=")[0]).split("?gid=")[0]), Ct("afterChange", _.updateURL), Ct("unbindEvents", function() {
                                d.unbind(window, "hashchange", _.onHashChange)
                            });
                            var t = function() {
                                ai = !0, ui || (ci ? history.back() : li ? pi.hash = li : fi ? history.pushState("", document.title, pi.pathname + pi.search) : pi.hash = ""), mi()
                            };
                            Ct("unbindEvents", function() {
                                s && t()
                            }), Ct("destroy", function() {
                                ai || t()
                            }), Ct("firstUpdate", function() {
                                g = gi().pid
                            });
                            var e = li.indexOf("pid="); - 1 < e && "&" === (li = li.substring(0, e)).slice(-1) && (li = li.slice(0, -1)), setTimeout(function() {
                                l && d.bind(window, "hashchange", _.onHashChange)
                            }, 40)
                        }
                    },
                    onHashChange: function() {
                        if (_i() === li) return ui = !0, void _.close();
                        si || (oi = !0, _.goTo(gi().pid), oi = !1)
                    },
                    updateURL: function() {
                        mi(), oi || (hi ? ii = setTimeout(vi, 800) : vi())
                    }
                }
            }), d.extend(_, Kt)
        }
    }), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t, l, h, e, b, T, w, C, g, i, v, k, y, x, f, d, m, r;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(r, u, v) {
        var m = function(t) {
                var e, i = [],
                    r = t.length;
                for (e = 0; e !== r; i.push(t[e++]));
                return i
            },
            g = function(t, e, i) {
                var r, n, s = t.cycle;
                for (r in s) n = s[r], t[r] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                delete t.cycle
            },
            y = function(t, e, i) {
                v.call(this, t, e, i), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = y.prototype.render
            },
            x = 1e-10,
            T = v._internals,
            w = T.isSelector,
            b = T.isArray,
            t = y.prototype = v.to({}, .1, {}),
            C = [];
        y.version = "2.0.2", t.constructor = y, t.kill()._gc = !1, y.killTweensOf = y.killDelayedCallsTo = v.killTweensOf, y.getTweensOf = v.getTweensOf, y.lagSmoothing = v.lagSmoothing, y.ticker = v.ticker, y.render = v.render, t.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), v.prototype.invalidate.call(this)
        }, t.updateTo = function(t, e) {
            var i, r = this.ratio,
                n = this.vars.immediateRender || t.immediateRender;
            for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), t) this.vars[i] = t[i];
            if (this._initted || n)
                if (e) this._initted = !1, n && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && v._onPluginEvent("_onDisable", this), .998 < this._time / this._duration) {
                    var s = this._totalTime;
                    this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                } else if (this._initted = !1, this._init(), 0 < this._time || n)
                    for (var o, a = 1 / (1 - r), l = this._firstPT; l;) o = l.s + l.c, l.c *= a, l.s = o - l.c, l = l._next;
            return this
        }, t.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var r, n, s, o, a, l, h, u, c, p = this._dirty ? this.totalDuration() : this._totalDuration,
                f = this._time,
                d = this._totalTime,
                _ = this._cycle,
                m = this._duration,
                g = this._rawPrevTime;
            if (p - 1e-7 <= t && 0 <= t ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = m, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === m && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (g < 0 || t <= 0 && -1e-7 <= t || g === x && "isPause" !== this.data) && g !== t && (i = !0, x < g && (n = "onReverseComplete")), this._rawPrevTime = u = !e || t || g === t ? t : x)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === m && 0 < g) && (n = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === m && (this._initted || !this.vars.lazy || i) && (0 <= g && (i = !0), this._rawPrevTime = u = !e || t || g === t ? t : x)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (o = m + this._repeatDelay, this._cycle = this._totalTime / o >> 0, 0 !== this._cycle && this._cycle === this._totalTime / o && d <= t && this._cycle--, this._time = this._totalTime - this._cycle * o, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time, (c = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== c || this._initted ? this._yoyoEase = c = !0 === c ? this._ease : c instanceof Ease ? c : Ease.map[c] : (c = this.vars.ease, this._yoyoEase = c = c ? c instanceof Ease ? c : "function" == typeof c ? new Ease(c, this.vars.easeParams) : Ease.map[c] || v.defaultEase : v.defaultEase)), this.ratio = c ? 1 - c.getRatio((m - this._time) / m) : 0)), this._time > m ? this._time = m : this._time < 0 && (this._time = 0)), this._easeType && !c ? (a = this._time / m, (1 === (l = this._easeType) || 3 === l && .5 <= a) && (a = 1 - a), 3 === l && (a *= 2), 1 === (h = this._easePower) ? a *= a : 2 === h ? a *= a * a : 3 === h ? a *= a * a * a : 4 === h && (a *= a * a * a * a), 1 === l ? this.ratio = 1 - a : 2 === l ? this.ratio = a : this._time / m < .5 ? this.ratio = a / 2 : this.ratio = 1 - a / 2) : c || (this.ratio = this._ease.getRatio(this._time / m))), f !== this._time || i || _ !== this._cycle) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = d, this._rawPrevTime = g, this._cycle = _, T.lazyTweens.push(this), void(this._lazy = [t, e]);
                    !this._time || r || c ? r && this._ease._calcEnd && !c && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / m)
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== f && 0 <= t && (this._active = !0), 0 === d && (2 === this._initted && 0 < t && this._init(), this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === m) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i), e || (this._totalTime !== d || n) && this._callback("onUpdate")), this._cycle !== _ && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === m && this._rawPrevTime === x && u !== x && (this._rawPrevTime = 0))
            } else d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }, y.to = function(t, e, i) {
            return new y(t, e, i)
        }, y.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new y(t, e, i)
        }, y.fromTo = function(t, e, i, r) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new y(t, e, r)
        }, y.staggerTo = y.allTo = function(t, e, i, r, n, s, o) {
            r = r || 0;
            var a, l, h, u, c = 0,
                p = [],
                f = function() {
                    i.onComplete && i.onComplete.apply(i.onCompleteScope || this, arguments), n.apply(o || i.callbackScope || this, s || C)
                },
                d = i.cycle,
                _ = i.startAt && i.startAt.cycle;
            for (b(t) || ("string" == typeof t && (t = v.selector(t) || t), w(t) && (t = m(t))), t = t || [], r < 0 && ((t = m(t)).reverse(), r *= -1), a = t.length - 1, h = 0; h <= a; h++) {
                for (u in l = {}, i) l[u] = i[u];
                if (d && (g(l, t, h), null != l.duration && (e = l.duration, delete l.duration)), _) {
                    for (u in _ = l.startAt = {}, i.startAt) _[u] = i.startAt[u];
                    g(l.startAt, t, h)
                }
                l.delay = c + (l.delay || 0), h === a && n && (l.onComplete = f), p[h] = new y(t[h], e, l), c += r
            }
            return p
        }, y.staggerFrom = y.allFrom = function(t, e, i, r, n, s, o) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, y.staggerTo(t, e, i, r, n, s, o)
        }, y.staggerFromTo = y.allFromTo = function(t, e, i, r, n, s, o, a) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, y.staggerTo(t, e, r, n, s, o, a)
        }, y.delayedCall = function(t, e, i, r, n) {
            return new y(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: n,
                overwrite: 0
            })
        }, y.set = function(t, e) {
            return new y(t, 0, e)
        }, y.isTweening = function(t) {
            return 0 < v.getTweensOf(t, !0).length
        };
        var s = function(t, e) {
                for (var i = [], r = 0, n = t._first; n;) n instanceof v ? i[r++] = n : (e && (i[r++] = n), r = (i = i.concat(s(n, e))).length), n = n._next;
                return i
            },
            c = y.getAllTweens = function(t) {
                return s(r._rootTimeline, t).concat(s(r._rootFramesTimeline, t))
            };
        y.killAll = function(t, e, i, r) {
            null == e && (e = !0), null == i && (i = !0);
            var n, s, o, a = c(0 != r),
                l = a.length,
                h = e && i && r;
            for (o = 0; o < l; o++) s = a[o], (h || s instanceof u || (n = s.target === s.vars.onComplete) && i || e && !n) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
        }, y.killChildTweensOf = function(t, e) {
            if (null != t) {
                var i, r, n, s, o, a = T.tweenLookup;
                if ("string" == typeof t && (t = v.selector(t) || t), w(t) && (t = m(t)), b(t))
                    for (s = t.length; - 1 < --s;) y.killChildTweensOf(t[s], e);
                else {
                    for (n in i = [], a)
                        for (r = a[n].target.parentNode; r;) r === t && (i = i.concat(a[n].tweens)), r = r.parentNode;
                    for (o = i.length, s = 0; s < o; s++) e && i[s].totalTime(i[s].totalDuration()), i[s]._enabled(!1, !1)
                }
            }
        };
        var n = function(t, e, i, r) {
            e = !1 !== e, i = !1 !== i;
            for (var n, s, o = c(r = !1 !== r), a = e && i && r, l = o.length; - 1 < --l;) s = o[l], (a || s instanceof u || (n = s.target === s.vars.onComplete) && i || e && !n) && s.paused(t)
        };
        return y.pauseAll = function(t, e, i) {
            n(!0, t, e, i)
        }, y.resumeAll = function(t, e, i) {
            n(!1, t, e, i)
        }, y.globalTimeScale = function(t) {
            var e = r._rootTimeline,
                i = v.ticker.time;
            return arguments.length ? (t = t || x, e._startTime = i - (i - e._startTime) * e._timeScale / t, e = r._rootFramesTimeline, i = v.ticker.frame, e._startTime = i - (i - e._startTime) * e._timeScale / t, e._timeScale = r._rootTimeline._timeScale = t, t) : e._timeScale
        }, t.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
        }, t.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
        }, t.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, t.duration = function(t) {
            return arguments.length ? r.prototype.duration.call(this, t) : this._duration
        }, t.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, t.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, t.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, t.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, y
    }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(u, c, p) {
        var f = function(t) {
                c.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var e, i, r = this.vars;
                for (i in r) e = r[i], m(e) && -1 !== e.join("").indexOf("{self}") && (r[i] = this._swapSelfInParams(e));
                m(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
            },
            _ = 1e-10,
            t = p._internals,
            e = f._internals = {},
            d = t.isSelector,
            m = t.isArray,
            g = t.lazyTweens,
            v = t.lazyRender,
            o = _gsScope._gsDefine.globals,
            y = function(t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
            },
            x = function(t, e, i) {
                var r, n, s = t.cycle;
                for (r in s) n = s[r], t[r] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                delete t.cycle
            },
            s = e.pauseCallback = function() {},
            T = function(t) {
                var e, i = [],
                    r = t.length;
                for (e = 0; e !== r; i.push(t[e++]));
                return i
            },
            i = f.prototype = new c;
        return f.version = "2.0.2", i.constructor = f, i.kill()._gc = i._forcingPlayhead = i._hasPause = !1, i.to = function(t, e, i, r) {
            var n = i.repeat && o.TweenMax || p;
            return e ? this.add(new n(t, e, i), r) : this.set(t, i, r)
        }, i.from = function(t, e, i, r) {
            return this.add((i.repeat && o.TweenMax || p).from(t, e, i), r)
        }, i.fromTo = function(t, e, i, r, n) {
            var s = r.repeat && o.TweenMax || p;
            return e ? this.add(s.fromTo(t, e, i, r), n) : this.set(t, r, n)
        }, i.staggerTo = function(t, e, i, r, n, s, o, a) {
            var l, h, u = new f({
                    onComplete: s,
                    onCompleteParams: o,
                    callbackScope: a,
                    smoothChildTiming: this.smoothChildTiming
                }),
                c = i.cycle;
            for ("string" == typeof t && (t = p.selector(t) || t), d(t = t || []) && (t = T(t)), (r = r || 0) < 0 && ((t = T(t)).reverse(), r *= -1), h = 0; h < t.length; h++)(l = y(i)).startAt && (l.startAt = y(l.startAt), l.startAt.cycle && x(l.startAt, t, h)), c && (x(l, t, h), null != l.duration && (e = l.duration, delete l.duration)), u.to(t[h], e, l, h * r);
            return this.add(u, n)
        }, i.staggerFrom = function(t, e, i, r, n, s, o, a) {
            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, r, n, s, o, a)
        }, i.staggerFromTo = function(t, e, i, r, n, s, o, a, l) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, r, n, s, o, a, l)
        }, i.call = function(t, e, i, r) {
            return this.add(p.delayedCall(0, t, e, i), r)
        }, i.set = function(t, e, i) {
            return i = this._parseTimeOrLabel(i, 0, !0), null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused), this.add(new p(t, 0, e), i)
        }, f.exportRoot = function(t, e) {
            null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
            var i, r, n, s, o = new f(t),
                a = o._timeline;
            for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, n = a._first; n;) s = n._next, e && n instanceof p && n.target === n.vars.onComplete || ((r = n._startTime - n._delay) < 0 && (i = 1), o.add(n, r)), n = s;
            return a.add(o, 0), i && o.totalDuration(), o
        }, i.add = function(t, e, i, r) {
            var n, s, o, a, l, h;
            if ("number" != typeof e && (e = this._parseTimeOrLabel(e, 0, !0, t)), !(t instanceof u)) {
                if (t instanceof Array || t && t.push && m(t)) {
                    for (i = i || "normal", r = r || 0, n = e, s = t.length, o = 0; o < s; o++) m(a = t[o]) && (a = new f({
                        tweens: a
                    })), this.add(a, n), "string" != typeof a && "function" != typeof a && ("sequence" === i ? n = a._startTime + a.totalDuration() / a._timeScale : "start" === i && (a._startTime -= a.delay())), n += r;
                    return this._uncache(!0)
                }
                if ("string" == typeof t) return this.addLabel(t, e);
                if ("function" != typeof t) throw "Cannot add " + t + " into the timeline; it is not a tween, timeline, function, or string.";
                t = p.delayedCall(0, t)
            }
            if (c.prototype.add.call(this, t, e), t._time && (n = Math.max(0, Math.min(t.totalDuration(), (this.rawTime() - t._startTime) * t._timeScale)), 1e-5 < Math.abs(n - t._totalTime) && t.render(n, !1, !1)), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (h = (l = this).rawTime() > t._startTime; l._timeline;) h && l._timeline.smoothChildTiming ? l.totalTime(l._totalTime, !0) : l._gc && l._enabled(!0, !1), l = l._timeline;
            return this
        }, i.remove = function(t) {
            if (t instanceof u) {
                this._remove(t, !1);
                var e = t._timeline = t.vars.useFrames ? u._rootFramesTimeline : u._rootTimeline;
                return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
            }
            if (t instanceof Array || t && t.push && m(t)) {
                for (var i = t.length; - 1 < --i;) this.remove(t[i]);
                return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }, i._remove = function(t, e) {
            return c.prototype._remove.call(this, t, e), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, i.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
        }, i.insert = i.insertMultiple = function(t, e, i, r) {
            return this.add(t, e || 0, i, r)
        }, i.appendMultiple = function(t, e, i, r) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
        }, i.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e), this
        }, i.addPause = function(t, e, i, r) {
            var n = p.delayedCall(0, s, i, r || this);
            return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
        }, i.removeLabel = function(t) {
            return delete this._labels[t], this
        }, i.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
        }, i._parseTimeOrLabel = function(t, e, i, r) {
            var n, s;
            if (r instanceof u && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || r.push && m(r)))
                for (s = r.length; - 1 < --s;) r[s] instanceof u && r[s].timeline === this && this.remove(r[s]);
            if (n = "number" != typeof t || e ? 99999999999 < this.duration() ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof e) return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - n : 0, i);
            if (e = e || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = n);
            else {
                if (-1 === (s = t.indexOf("="))) return null == this._labels[t] ? i ? this._labels[t] = n + e : e : this._labels[t] + e;
                e = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = 1 < s ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, i) : n
            }
            return Number(t) + e
        }, i.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
        }, i.stop = function() {
            return this.paused(!0)
        }, i.gotoAndPlay = function(t, e) {
            return this.play(t, e)
        }, i.gotoAndStop = function(t, e) {
            return this.pause(t, e)
        }, i.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var r, n, s, o, a, l, h, u = this._time,
                c = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._startTime,
                f = this._timeScale,
                d = this._paused;
            if (u !== this._time && (t += this._time - u), c - 1e-7 <= t && 0 <= t) this._totalTime = this._time = c, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || this._rawPrevTime < 0 || this._rawPrevTime === _) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > _ && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : _, t = c + 1e-4;
            else if (t < 1e-7)
                if (this._totalTime = this._time = 0, (0 !== u || 0 === this._duration && this._rawPrevTime !== _ && (0 < this._rawPrevTime || t < 0 && 0 <= this._rawPrevTime)) && (o = "onReverseComplete", n = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = n = !0, o = "onReverseComplete") : 0 <= this._rawPrevTime && this._first && (a = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : _, 0 === t && n)
                        for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                    t = 0, this._initted || (a = !0)
                } else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                    if (u <= t)
                        for (r = this._first; r && r._startTime <= t && !l;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (l = r), r = r._next;
                    else
                        for (r = this._last; r && r._startTime >= t && !l;) r._duration || "isPause" === r.data && 0 < r._rawPrevTime && (l = r), r = r._prev;
                    l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
            }
            if (this._time !== u && this._first || i || a || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== u && 0 < t && (this._active = !0), 0 === u && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), u <= (h = this._time))
                    for (r = this._first; r && (s = r._next, h === this._time && (!this._paused || d));)(r._active || r._startTime <= h && !r._paused && !r._gc) && (l === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s;
                else
                    for (r = this._last; r && (s = r._prev, h === this._time && (!this._paused || d));) {
                        if (r._active || r._startTime <= u && !r._paused && !r._gc) {
                            if (l === r) {
                                for (l = r._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                                l = null, this.pause()
                            }
                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                        }
                        r = s
                    }
                this._onUpdate && (e || (g.length && v(), this._callback("onUpdate"))), o && (this._gc || (p === this._startTime || f !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (n && (g.length && v(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
            }
        }, i._hasPausedChild = function() {
            for (var t = this._first; t;) {
                if (t._paused || t instanceof f && t._hasPausedChild()) return !0;
                t = t._next
            }
            return !1
        }, i.getChildren = function(t, e, i, r) {
            r = r || -9999999999;
            for (var n = [], s = this._first, o = 0; s;) s._startTime < r || (s instanceof p ? !1 !== e && (n[o++] = s) : (!1 !== i && (n[o++] = s), !1 !== t && (o = (n = n.concat(s.getChildren(!0, e, i))).length))), s = s._next;
            return n
        }, i.getTweensOf = function(t, e) {
            var i, r, n = this._gc,
                s = [],
                o = 0;
            for (n && this._enabled(!0, !0), r = (i = p.getTweensOf(t)).length; - 1 < --r;)(i[r].timeline === this || e && this._contains(i[r])) && (s[o++] = i[r]);
            return n && this._enabled(!1, !0), s
        }, i.recent = function() {
            return this._recent
        }, i._contains = function(t) {
            for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
            }
            return !1
        }, i.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var r, n = this._first, s = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
            if (e)
                for (r in s) s[r] >= i && (s[r] += t);
            return this._uncache(!0)
        }, i._kill = function(t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, n = !1; - 1 < --r;) i[r]._kill(t, e) && (n = !0);
            return n
        }, i.clear = function(t) {
            var e = this.getChildren(!1, !0, !0),
                i = e.length;
            for (this._time = this._totalTime = 0; - 1 < --i;) e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}), this._uncache(!0)
        }, i.invalidate = function() {
            for (var t = this._first; t;) t.invalidate(), t = t._next;
            return u.prototype.invalidate.call(this)
        }, i._enabled = function(t, e) {
            if (t === this._gc)
                for (var i = this._first; i;) i._enabled(t, !0), i = i._next;
            return c.prototype._enabled.call(this, t, e)
        }, i.totalTime = function(t, e, i) {
            this._forcingPlayhead = !0;
            var r = u.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1, r
        }, i.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
        }, i.totalDuration = function(t) {
            if (arguments.length) return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this;
            if (this._dirty) {
                for (var e, i, r = 0, n = this._last, s = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > s && this._sortChildren && !n._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(n, n._startTime - n._delay), this._calculatingDuration = 0) : s = n._startTime, n._startTime < 0 && !n._paused && (r -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale, this._time -= n._startTime, this._totalTime -= n._startTime, this._rawPrevTime -= n._startTime), this.shiftChildren(-n._startTime, !1, -9999999999), s = 0), r < (i = n._startTime + n._totalDuration / n._timeScale) && (r = i), n = e;
                this._duration = this._totalDuration = r, this._dirty = !1
            }
            return this._totalDuration
        }, i.paused = function(t) {
            if (!t)
                for (var e = this._first, i = this._time; e;) e._startTime === i && "isPause" === e.data && (e._rawPrevTime = 0), e = e._next;
            return u.prototype.paused.apply(this, arguments)
        }, i.usesFrames = function() {
            for (var t = this._timeline; t._timeline;) t = t._timeline;
            return t === u._rootFramesTimeline
        }, i.rawTime = function(t) {
            return t && (this._paused || this._repeat && 0 < this.time() && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
        }, f
    }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, a, t) {
        var i = function(t) {
                e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
            },
            S = 1e-10,
            r = a._internals,
            P = r.lazyTweens,
            M = r.lazyRender,
            l = _gsScope._gsDefine.globals,
            h = new t(null, null, 1, 0),
            n = i.prototype = new e;
        return n.constructor = i, n.kill()._gc = !1, i.version = "2.0.2", n.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, n.addCallback = function(t, e, i, r) {
            return this.add(a.delayedCall(0, t, i, r), e)
        }, n.removeCallback = function(t, e) {
            if (t)
                if (null == e) this._kill(null, t);
                else
                    for (var i = this.getTweensOf(t, !1), r = i.length, n = this._parseTimeOrLabel(e); - 1 < --r;) i[r]._startTime === n && i[r]._enabled(!1, !1);
            return this
        }, n.removePause = function(t) {
            return this.removeCallback(e._internals.pauseCallback, t)
        }, n.tweenTo = function(t, e) {
            e = e || {};
            var i, r, n, s = {
                    ease: h,
                    useFrames: this.usesFrames(),
                    immediateRender: !1,
                    lazy: !1
                },
                o = e.repeat && l.TweenMax || a;
            for (r in e) s[r] = e[r];
            return s.time = this._parseTimeOrLabel(t), i = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, n = new o(this, i, s), s.onStart = function() {
                n.target.paused(!0), n.vars.time === n.target.time() || i !== n.duration() || n.isFromTo || n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale).render(n.time(), !0, !0), e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || n, e.onStartParams || [])
            }, n
        }, n.tweenFromTo = function(t, e, i) {
            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
            }, i.immediateRender = !1 !== i.immediateRender;
            var r = this.tweenTo(e, i);
            return r.isFromTo = 1, r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001)
        }, n.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var r, n, s, o, a, l, h, u, c = this._time,
                p = this._dirty ? this.totalDuration() : this._totalDuration,
                f = this._duration,
                d = this._totalTime,
                _ = this._startTime,
                m = this._timeScale,
                g = this._rawPrevTime,
                v = this._paused,
                y = this._cycle;
            if (c !== this._time && (t += this._time - c), p - 1e-7 <= t && 0 <= t) this._locked || (this._totalTime = p, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && -1e-7 <= t || g < 0 || g === S) && g !== t && this._first && (a = !0, S < g && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : S, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : t = (this._time = f) + 1e-4;
            else if (t < 1e-7)
                if (this._locked || (this._totalTime = this._cycle = 0), ((this._time = 0) !== c || 0 === f && g !== S && (0 < g || t < 0 && 0 <= g) && !this._locked) && (o = "onReverseComplete", n = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = n = !0, o = "onReverseComplete") : 0 <= g && this._first && (a = !0), this._rawPrevTime = t;
                else {
                    if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : S, 0 === t && n)
                        for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                    t = 0, this._initted || (a = !0)
                } else if (0 === f && g < 0 && (a = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = f + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && d <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = f - this._time), this._time > f ? t = (this._time = f) + 1e-4 : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if (c <= (t = this._time) || this._repeat && y !== this._cycle)
                    for (r = this._first; r && r._startTime <= t && !h;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (h = r), r = r._next;
                else
                    for (r = this._last; r && r._startTime >= t && !h;) r._duration || "isPause" === r.data && 0 < r._rawPrevTime && (h = r), r = r._prev;
                h && h._startTime < f && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            if (this._cycle !== y && !this._locked) {
                var x = this._yoyo && 0 != (1 & y),
                    T = x === (this._yoyo && 0 != (1 & this._cycle)),
                    w = this._totalTime,
                    b = this._cycle,
                    C = this._rawPrevTime,
                    k = this._time;
                if (this._totalTime = y * f, this._cycle < y ? x = !x : this._totalTime += f, this._time = c, this._rawPrevTime = 0 === f ? g - 1e-4 : g, this._cycle = y, this._locked = !0, c = x ? 0 : f, this.render(c, e, 0 === f), e || this._gc || this.vars.onRepeat && (this._cycle = b, this._locked = !1, this._callback("onRepeat")), c !== this._time) return;
                if (T && (this._cycle = y, this._locked = !0, c = x ? f + 1e-4 : -1e-4, this.render(c, !0, !1)), this._locked = !1, this._paused && !v) return;
                this._time = k, this._totalTime = w, this._cycle = b, this._rawPrevTime = C
            }
            if (this._time !== c && this._first || i || a || h) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && 0 < t && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), c <= (u = this._time))
                    for (r = this._first; r && (s = r._next, u === this._time && (!this._paused || v));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (h === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s;
                else
                    for (r = this._last; r && (s = r._prev, u === this._time && (!this._paused || v));) {
                        if (r._active || r._startTime <= c && !r._paused && !r._gc) {
                            if (h === r) {
                                for (h = r._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                h = null, this.pause()
                            }
                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                        }
                        r = s
                    }
                this._onUpdate && (e || (P.length && M(), this._callback("onUpdate"))), o && (this._locked || this._gc || (_ === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (P.length && M(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
            } else d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
        }, n.getActive = function(t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var r, n, s = [],
                o = this.getChildren(t, e, i),
                a = 0,
                l = o.length;
            for (r = 0; r < l; r++)(n = o[r]).isActive() && (s[a++] = n);
            return s
        }, n.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(),
                r = i.length;
            for (e = 0; e < r; e++)
                if (i[e].time > t) return i[e].name;
            return null
        }, n.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; - 1 < --i;)
                if (e[i].time < t) return e[i].name;
            return null
        }, n.getLabelsArray = function() {
            var t, e = [],
                i = 0;
            for (t in this._labels) e[i++] = {
                time: this._labels[t],
                name: t
            };
            return e.sort(function(t, e) {
                return t.time - e.time
            }), e
        }, n.invalidate = function() {
            return this._locked = !1, e.prototype.invalidate.call(this)
        }, n.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
        }, n.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
        }, n.totalDuration = function(t) {
            return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, n.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
        }, n.repeat = function(t) {
            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
        }, n.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
        }, n.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, n.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
        }, i
    }, !0), b = 180 / Math.PI, T = [], w = [], C = [], g = {}, i = _gsScope._gsDefine.globals, v = function(t, e, i, r) {
        i === r && (i = r - (r - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t
    }, k = function(t, e, i, r) {
        var n = {
                a: t
            },
            s = {},
            o = {},
            a = {
                c: r
            },
            l = (t + e) / 2,
            h = (e + i) / 2,
            u = (i + r) / 2,
            c = (l + h) / 2,
            p = (h + u) / 2,
            f = (p - c) / 8;
        return n.b = l + (t - l) / 4, s.b = c + f, n.c = s.a = (n.b + s.b) / 2, s.c = o.a = (c + p) / 2, o.b = p - f, a.b = u + (r - u) / 4, o.c = a.a = (o.b + a.b) / 2, [n, s, o, a]
    }, y = function(t, e, i, r, n) {
        var s, o, a, l, h, u, c, p, f, d, _, m, g, v = t.length - 1,
            y = 0,
            x = t[0].a;
        for (s = 0; s < v; s++) o = (h = t[y]).a, a = h.d, l = t[y + 1].d, p = n ? (_ = T[s], g = ((m = w[s]) + _) * e * .25 / (r ? .5 : C[s] || .5), a - ((u = a - (a - o) * (r ? .5 * e : 0 !== _ ? g / _ : 0)) + (((c = a + (l - a) * (r ? .5 * e : 0 !== m ? g / m : 0)) - u) * (3 * _ / (_ + m) + .5) / 4 || 0))) : a - ((u = a - (a - o) * e * .5) + (c = a + (l - a) * e * .5)) / 2, u += p, c += p, h.c = f = u, h.b = 0 !== s ? x : x = h.a + .6 * (h.c - h.a), h.da = a - o, h.ca = f - o, h.ba = x - o, i ? (d = k(o, x, f, a), t.splice(y, 1, d[0], d[1], d[2], d[3]), y += 4) : y++, x = c;
        (h = t[y]).b = x, h.c = x + .4 * (h.d - x), h.da = h.d - h.a, h.ca = h.c - h.a, h.ba = x - h.a, i && (d = k(h.a, x, h.c, h.d), t.splice(y, 1, d[0], d[1], d[2], d[3]))
    }, x = function(t, e, i, r) {
        var n, s, o, a, l, h, u = [];
        if (r)
            for (s = (t = [r].concat(t)).length; - 1 < --s;) "string" == typeof(h = t[s][e]) && "=" === h.charAt(1) && (t[s][e] = r[e] + Number(h.charAt(0) + h.substr(2)));
        if ((n = t.length - 2) < 0) return u[0] = new v(t[0][e], 0, 0, t[0][e]), u;
        for (s = 0; s < n; s++) o = t[s][e], a = t[s + 1][e], u[s] = new v(o, 0, 0, a), i && (l = t[s + 2][e], T[s] = (T[s] || 0) + (a - o) * (a - o), w[s] = (w[s] || 0) + (l - a) * (l - a));
        return u[s] = new v(t[s][e], 0, 0, t[s + 1][e]), u
    }, f = function(t, e, i, r, n, s) {
        var o, a, l, h, u, c, p, f, d = {},
            _ = [],
            m = s || t[0];
        for (a in n = "string" == typeof n ? "," + n + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == e && (e = 1), t[0]) _.push(a);
        if (1 < t.length) {
            for (f = t[t.length - 1], p = !0, o = _.length; - 1 < --o;)
                if (a = _[o], .05 < Math.abs(m[a] - f[a])) {
                    p = !1;
                    break
                }
            p && (t = t.concat(), s && t.unshift(s), t.push(t[1]), s = t[t.length - 3])
        }
        for (T.length = w.length = C.length = 0, o = _.length; - 1 < --o;) a = _[o], g[a] = -1 !== n.indexOf("," + a + ","), d[a] = x(t, a, g[a], s);
        for (o = T.length; - 1 < --o;) T[o] = Math.sqrt(T[o]), w[o] = Math.sqrt(w[o]);
        if (!r) {
            for (o = _.length; - 1 < --o;)
                if (g[a])
                    for (c = (l = d[_[o]]).length - 1, h = 0; h < c; h++) u = l[h + 1].da / w[h] + l[h].da / T[h] || 0, C[h] = (C[h] || 0) + u * u;
            for (o = C.length; - 1 < --o;) C[o] = Math.sqrt(C[o])
        }
        for (o = _.length, h = i ? 4 : 1; - 1 < --o;) l = d[a = _[o]], y(l, e, i, r, g[a]), p && (l.splice(0, h), l.splice(l.length - h, h));
        return d
    }, d = function(t, e, i) {
        for (var r, n, s, o, a, l, h, u, c, p, f, d = 1 / i, _ = t.length; - 1 < --_;)
            for (s = (p = t[_]).a, o = p.d - s, a = p.c - s, l = p.b - s, r = n = 0, u = 1; u <= i; u++) r = n - (n = ((h = d * u) * h * o + 3 * (c = 1 - h) * (h * a + c * l)) * h), e[f = _ * i + u - 1] = (e[f] || 0) + r * r
    }, m = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.8",
        API: 2,
        global: !0,
        init: function(t, e, i) {
            this._target = t, e instanceof Array && (e = {
                values: e
            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
            var r, n, s, o, a, l = e.values || [],
                h = {},
                u = l[0],
                c = e.autoRotate || i.vars.orientToBezier;
            for (r in this._autoRotate = c ? c instanceof Array ? c : [
                ["x", "y", "rotation", !0 === c ? 0 : Number(c) || 0]
            ] : null, u) this._props.push(r);
            for (s = this._props.length; - 1 < --s;) r = this._props[s], this._overwriteProps.push(r), n = this._func[r] = "function" == typeof t[r], h[r] = n ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), a || h[r] !== l[0][r] && (a = h);
            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? f(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : function(t, e, i) {
                var r, n, s, o, a, l, h, u, c, p, f, d = {},
                    _ = "cubic" === (e = e || "soft") ? 3 : 2,
                    m = "soft" === e,
                    g = [];
                if (m && i && (t = [i].concat(t)), null == t || t.length < _ + 1) throw "invalid Bezier data";
                for (c in t[0]) g.push(c);
                for (l = g.length; - 1 < --l;) {
                    for (d[c = g[l]] = a = [], p = 0, u = t.length, h = 0; h < u; h++) r = null == i ? t[h][c] : "string" == typeof(f = t[h][c]) && "=" === f.charAt(1) ? i[c] + Number(f.charAt(0) + f.substr(2)) : Number(f), m && 1 < h && h < u - 1 && (a[p++] = (r + a[p - 2]) / 2), a[p++] = r;
                    for (u = p - _ + 1, h = p = 0; h < u; h += _) r = a[h], n = a[h + 1], s = a[h + 2], o = 2 === _ ? 0 : a[h + 3], a[p++] = f = 3 === _ ? new v(r, n, s, o) : new v(r, (2 * n + r) / 3, (2 * n + s) / 3, s);
                    a.length = p
                }
                return d
            }(l, e.type, h), this._segCount = this._beziers[r].length, this._timeRes) {
                var p = function(t, e) {
                    var i, r, n, s, o = [],
                        a = [],
                        l = 0,
                        h = 0,
                        u = (e = e >> 0 || 6) - 1,
                        c = [],
                        p = [];
                    for (i in t) d(t[i], o, e);
                    for (n = o.length, r = 0; r < n; r++) l += Math.sqrt(o[r]), p[s = r % e] = l, s === u && (h += l, c[s = r / e >> 0] = p, a[s] = h, l = 0, p = []);
                    return {
                        length: h,
                        lengths: a,
                        segments: c
                    }
                }(this._beziers, this._timeRes);
                this._length = p.length, this._lengths = p.lengths, this._segments = p.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
            }
            if (c = this._autoRotate)
                for (this._initialRotations = [], c[0] instanceof Array || (this._autoRotate = c = [c]), s = c.length; - 1 < --s;) {
                    for (o = 0; o < 3; o++) r = c[s][o], this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                    r = c[s][2], this._initialRotations[s] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0, this._overwriteProps.push(r)
                }
            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
        },
        set: function(t) {
            var e, i, r, n, s, o, a, l, h, u, c = this._segCount,
                p = this._func,
                f = this._target,
                d = t !== this._startRatio;
            if (this._timeRes) {
                if (h = this._lengths, u = this._curSeg, t *= this._length, r = this._li, t > this._l2 && r < c - 1) {
                    for (l = c - 1; r < l && (this._l2 = h[++r]) <= t;);
                    this._l1 = h[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                } else if (t < this._l1 && 0 < r) {
                    for (; 0 < r && (this._l1 = h[--r]) >= t;);
                    0 === r && t < this._l1 ? this._l1 = 0 : r++, this._l2 = h[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                }
                if (e = r, t -= this._l1, r = this._si, t > this._s2 && r < u.length - 1) {
                    for (l = u.length - 1; r < l && (this._s2 = u[++r]) <= t;);
                    this._s1 = u[r - 1], this._si = r
                } else if (t < this._s1 && 0 < r) {
                    for (; 0 < r && (this._s1 = u[--r]) >= t;);
                    0 === r && t < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                }
                o = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else o = (t - (e = t < 0 ? 0 : 1 <= t ? c - 1 : c * t >> 0) * (1 / c)) * c;
            for (i = 1 - o, r = this._props.length; - 1 < --r;) n = this._props[r], a = (o * o * (s = this._beziers[n][e]).da + 3 * i * (o * s.ca + i * s.ba)) * o + s.a, this._mod[n] && (a = this._mod[n](a, f)), p[n] ? f[n](a) : f[n] = a;
            if (this._autoRotate) {
                var _, m, g, v, y, x, T, w = this._autoRotate;
                for (r = w.length; - 1 < --r;) n = w[r][2], x = w[r][3] || 0, T = !0 === w[r][4] ? 1 : b, s = this._beziers[w[r][0]], _ = this._beziers[w[r][1]], s && _ && (s = s[e], _ = _[e], m = s.a + (s.b - s.a) * o, m += ((v = s.b + (s.c - s.b) * o) - m) * o, v += (s.c + (s.d - s.c) * o - v) * o, g = _.a + (_.b - _.a) * o, g += ((y = _.b + (_.c - _.b) * o) - g) * o, y += (_.c + (_.d - _.c) * o - y) * o, a = d ? Math.atan2(y - g, v - m) * T + x : this._initialRotations[r], this._mod[n] && (a = this._mod[n](a, f)), p[n] ? f[n](a) : f[n] = a)
            }
        }
    }), r = m.prototype, m.bezierThrough = f, m.cubicToQuadratic = k, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
        return new v(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
    }, m._cssRegister = function() {
        var t = i.CSSPlugin;
        if (t) {
            var e = t._internals,
                f = e._parseToProxy,
                d = e._setPluginRatio,
                _ = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
                parser: function(t, e, i, r, n, s) {
                    e instanceof Array && (e = {
                        values: e
                    }), s = new m;
                    var o, a, l, h = e.values,
                        u = h.length - 1,
                        c = [],
                        p = {};
                    if (u < 0) return n;
                    for (o = 0; o <= u; o++) l = f(t, h[o], r, n, s, u !== o), c[o] = l.end;
                    for (a in e) p[a] = e[a];
                    return p.values = c, (n = new _(t, "bezier", 0, 0, l.pt, 2)).data = l, n.plugin = s, n.setRatio = d, 0 === p.autoRotate && (p.autoRotate = !0), !p.autoRotate || p.autoRotate instanceof Array || (o = !0 === p.autoRotate ? 0 : Number(p.autoRotate), p.autoRotate = null != l.end.left ? [
                        ["left", "top", "rotation", o, !1]
                    ] : null != l.end.x && [
                        ["x", "y", "rotation", o, !1]
                    ]), p.autoRotate && (r._transform || r._enableTransforms(!1), l.autoRotate = r._target._gsTransform, l.proxy.rotation = l.autoRotate.rotation || 0, r._overwriteProps.push("rotation")), s._onInitTween(l.proxy, p, r._tween), n
                }
            })
        }
    }, r._mod = function(t) {
        for (var e, i = this._overwriteProps, r = i.length; - 1 < --r;)(e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e)
    }, r._kill = function(t) {
        var e, i, r = this._props;
        for (e in this._beziers)
            if (e in t)
                for (delete this._beziers[e], delete this._func[e], i = r.length; - 1 < --i;) r[i] === e && r.splice(i, 1);
        if (r = this._autoRotate)
            for (i = r.length; - 1 < --i;) t[r[i][2]] && r.splice(i, 1);
        return this._super._kill.call(this, t)
    }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(s, X) {
        var d, C, S, _, Z = function() {
                s.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = Z.prototype.setRatio
            },
            h = _gsScope._gsDefine.globals,
            m = {},
            t = Z.prototype = new s("css");
        (t.constructor = Z).version = "2.0.2", Z.API = 2, Z.defaultTransformPerspective = 0, Z.defaultSkewType = "compensated", Z.defaultSmoothOrigin = !0, t = "px", Z.suffixMap = {
            top: t,
            right: t,
            bottom: t,
            left: t,
            width: t,
            height: t,
            fontSize: t,
            padding: t,
            margin: t,
            perspective: t,
            lineHeight: ""
        };
        var P, g, v, Y, y, k, M, O, e, i, A = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            R = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            u = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            D = /(?:\d|\-|\+|=|#|\.)*/g,
            I = /opacity *= *([^)]*)/i,
            T = /opacity:([^;]*)/i,
            o = /alpha\(opacity *=.+?\)/i,
            w = /^(rgb|hsl)/,
            a = /([A-Z])/g,
            l = /-([a-z])/gi,
            b = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
            c = function(t, e) {
                return e.toUpperCase()
            },
            f = /(?:Left|Right|Width)/i,
            p = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
            E = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            z = /,(?=[^\)]*(?:\(|$))/gi,
            L = /[\s,\(]/i,
            V = Math.PI / 180,
            j = 180 / Math.PI,
            N = {},
            r = {
                style: {}
            },
            F = _gsScope.document || {
                createElement: function() {
                    return r
                }
            },
            B = function(t, e) {
                return F.createElementNS ? F.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : F.createElement(t)
            },
            W = B("div"),
            U = B("img"),
            n = Z._internals = {
                _specialProps: m
            },
            H = (_gsScope.navigator || {}).userAgent || "",
            q = (e = H.indexOf("Android"), i = B("a"), v = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === e || 3 < parseFloat(H.substr(e + 8, 2))), y = v && parseFloat(H.substr(H.indexOf("Version/") + 8, 2)) < 6, Y = -1 !== H.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (k = parseFloat(RegExp.$1)), !!i && (i.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(i.style.opacity))),
            G = function(t) {
                return I.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            },
            $ = function(t) {
                _gsScope.console && console.log(t)
            },
            K = "",
            Q = "",
            J = function(t, e) {
                var i, r, n = (e = e || W).style;
                if (void 0 !== n[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; - 1 < --r && void 0 === n[i[r] + t];);
                return 0 <= r ? (K = "-" + (Q = 3 === r ? "ms" : i[r]).toLowerCase() + "-", Q + t) : null
            },
            tt = (void 0 !== window ? window : F.defaultView || {
                getComputedStyle: function() {}
            }).getComputedStyle,
            et = Z.getStyle = function(t, e, i, r, n) {
                var s;
                return q || "opacity" !== e ? (!r && t.style[e] ? s = t.style[e] : (i = i || tt(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(a, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == n || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : n) : G(t)
            },
            it = n.convertToPixels = function(t, e, i, r, n) {
                if ("px" === r || !r && "lineHeight" !== e) return i;
                if ("auto" === r || !i) return 0;
                var s, o, a, l = f.test(e),
                    h = t,
                    u = W.style,
                    c = i < 0,
                    p = 1 === i;
                if (c && (i = -i), p && (i *= 100), "lineHeight" !== e || r)
                    if ("%" === r && -1 !== e.indexOf("border")) s = i / 100 * (l ? t.clientWidth : t.clientHeight);
                    else {
                        if (u.cssText = "border:0 solid red;position:" + et(t, "position") + ";line-height:0;", "%" !== r && h.appendChild && "v" !== r.charAt(0) && "rem" !== r) u[l ? "borderLeftWidth" : "borderTopWidth"] = i + r;
                        else {
                            if (h = t.parentNode || F.body, -1 !== et(h, "display").indexOf("flex") && (u.position = "absolute"), o = h._gsCache, a = X.ticker.frame, o && l && o.time === a) return o.width * i / 100;
                            u[l ? "width" : "height"] = i + r
                        }
                        h.appendChild(W), s = parseFloat(W[l ? "offsetWidth" : "offsetHeight"]), h.removeChild(W), l && "%" === r && !1 !== Z.cacheWidths && ((o = h._gsCache = h._gsCache || {}).time = a, o.width = s / i * 100), 0 !== s || n || (s = it(t, e, i, r, !0))
                    } else o = tt(t).lineHeight, t.style.lineHeight = i, s = parseFloat(tt(t).lineHeight), t.style.lineHeight = o;
                return p && (s /= 100), c ? -s : s
            },
            rt = n.calculateOffset = function(t, e, i) {
                if ("absolute" !== et(t, "position", i)) return 0;
                var r = "left" === e ? "Left" : "Top",
                    n = et(t, "margin" + r, i);
                return t["offset" + r] - (it(t, e, parseFloat(n), n.replace(D, "")) || 0)
            },
            nt = function(t, e) {
                var i, r, n, s = {};
                if (e = e || tt(t, null))
                    if (i = e.length)
                        for (; - 1 < --i;)(-1 === (n = e[i]).indexOf("-transform") || zt === n) && (s[n.replace(l, c)] = e.getPropertyValue(n));
                    else
                        for (i in e)(-1 === i.indexOf("Transform") || Et === i) && (s[i] = e[i]);
                else if (e = t.currentStyle || t.style)
                    for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(l, c)] = e[i]);
                return q || (s.opacity = G(t)), r = qt(t, e, !1), s.rotation = r.rotation, s.skewX = r.skewX, s.scaleX = r.scaleX, s.scaleY = r.scaleY, s.x = r.x, s.y = r.y, Nt && (s.z = r.z, s.rotationX = r.rotationX, s.rotationY = r.rotationY, s.scaleZ = r.scaleZ), s.filters && delete s.filters, s
            },
            st = function(t, e, i, r, n) {
                var s, o, a, l = {},
                    h = t.style;
                for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || n && n[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(u, "") ? s : 0 : rt(t, o), void 0 !== h[o] && (a = new xt(h, o, h[o], a)));
                if (r)
                    for (o in r) "className" !== o && (l[o] = r[o]);
                return {
                    difs: l,
                    firstMPT: a
                }
            },
            ot = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
            },
            at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            lt = function(t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || tt(t))[e] || 0;
                if (t.getCTM && Wt(t)) return t.getBBox()[e] || 0;
                var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                    n = ot[e],
                    s = n.length;
                for (i = i || tt(t, null); - 1 < --s;) r -= parseFloat(et(t, "padding" + n[s], i, !0)) || 0, r -= parseFloat(et(t, "border" + n[s] + "Width", i, !0)) || 0;
                return r
            },
            ht = function(t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                (null == t || "" === t) && (t = "0 0");
                var i, r = t.split(" "),
                    n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0],
                    s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                if (3 < r.length && !e) {
                    for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++) t.push(ht(r[i]));
                    return t.join(",")
                }
                return null == s ? s = "center" === n ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + s + (2 < r.length ? " " + r[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(n.replace(u, "")), e.oy = parseFloat(s.replace(u, "")), e.v = t), e || t
            },
            ut = function(t, e) {
                return "function" == typeof t && (t = t(O, M)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
            },
            ct = function(t, e) {
                "function" == typeof t && (t = t(O, M));
                var i = "string" == typeof t && "=" === t.charAt(1);
                return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)), null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
            },
            pt = function(t, e, i, r) {
                var n, s, o, a, l;
                return "function" == typeof t && (t = t(O, M)), (a = null == t ? e : "number" == typeof t ? t : (n = 360, s = t.split("_"), o = ((l = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : j) - (l ? 0 : e), s.length && (r && (r[i] = e + o), -1 !== t.indexOf("short") && ((o %= n) !== o % 180 && (o = o < 0 ? o + n : o - n)), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 3599999999640) % n - (o / n | 0) * n : -1 !== t.indexOf("ccw") && 0 < o && (o = (o - 3599999999640) % n - (o / n | 0) * n)), e + o)) < 1e-6 && -1e-6 < a && (a = 0), a
            },
            ft = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
            },
            dt = function(t, e, i) {
                return 255 * (6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
            },
            _t = Z.parseColor = function(t, e) {
                var i, r, n, s, o, a, l, h, u, c, p;
                if (t)
                    if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                    else {
                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) i = ft[t];
                        else if ("#" === t.charAt(0)) 4 === t.length && (t = "#" + (r = t.charAt(1)) + r + (n = t.charAt(2)) + n + (s = t.charAt(3)) + s), i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                        else if ("hsl" === t.substr(0, 3))
                            if (i = p = t.match(A), e) {
                                if (-1 !== t.indexOf("=")) return t.match(R)
                            } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, r = 2 * (l = Number(i[2]) / 100) - (n = l <= .5 ? l * (a + 1) : l + a - l * a), 3 < i.length && (i[3] = Number(i[3])), i[0] = dt(o + 1 / 3, r, n), i[1] = dt(o, r, n), i[2] = dt(o - 1 / 3, r, n);
                        else i = t.match(A) || ft.transparent;
                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), 3 < i.length && (i[3] = Number(i[3]))
                    } else i = ft.black;
                return e && !p && (r = i[0] / 255, n = i[1] / 255, s = i[2] / 255, l = ((h = Math.max(r, n, s)) + (u = Math.min(r, n, s))) / 2, h === u ? o = a = 0 : (c = h - u, a = .5 < l ? c / (2 - h - u) : c / (h + u), o = h === r ? (n - s) / c + (n < s ? 6 : 0) : h === n ? (s - r) / c + 2 : (r - n) / c + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
            },
            mt = function(t, e) {
                var i, r, n, s = t.match(gt) || [],
                    o = 0,
                    a = "";
                if (!s.length) return t;
                for (i = 0; i < s.length; i++) r = s[i], o += (n = t.substr(o, t.indexOf(r, o) - o)).length + r.length, 3 === (r = _t(r, e)).length && r.push(1), a += n + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                return a + t.substr(o)
            },
            gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (t in ft) gt += "|" + t + "\\b";
        gt = new RegExp(gt + ")", "gi"), Z.colorStringFilter = function(t) {
            var e, i = t[0] + " " + t[1];
            gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), gt.lastIndex = 0
        }, X.defaultStringFilter || (X.defaultStringFilter = Z.colorStringFilter);
        var vt = function(t, e, s, o) {
                if (null == t) return function(t) {
                    return t
                };
                var a, l = e ? (t.match(gt) || [""])[0] : "",
                    h = t.split(l).join("").match(x) || [],
                    u = t.substr(0, t.indexOf(h[0])),
                    c = ")" === t.charAt(t.length - 1) ? ")" : "",
                    p = -1 !== t.indexOf(" ") ? " " : ",",
                    f = h.length,
                    d = 0 < f ? h[0].replace(A, "") : "";
                return f ? a = e ? function(t) {
                    var e, i, r, n;
                    if ("number" == typeof t) t += d;
                    else if (o && z.test(t)) {
                        for (n = t.replace(z, "|").split("|"), r = 0; r < n.length; r++) n[r] = a(n[r]);
                        return n.join(",")
                    }
                    if (e = (t.match(gt) || [l])[0], r = (i = t.split(e).join("").match(x) || []).length, f > r--)
                        for (; ++r < f;) i[r] = s ? i[(r - 1) / 2 | 0] : h[r];
                    return u + i.join(p) + p + e + c + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function(t) {
                    var e, i, r;
                    if ("number" == typeof t) t += d;
                    else if (o && z.test(t)) {
                        for (i = t.replace(z, "|").split("|"), r = 0; r < i.length; r++) i[r] = a(i[r]);
                        return i.join(",")
                    }
                    if (r = (e = t.match(x) || []).length, f > r--)
                        for (; ++r < f;) e[r] = s ? e[(r - 1) / 2 | 0] : h[r];
                    return u + e.join(p) + c
                } : function(t) {
                    return t
                }
            },
            yt = function(h) {
                return h = h.split(","),
                    function(t, e, i, r, n, s, o) {
                        var a, l = (e + "").split(" ");
                        for (o = {}, a = 0; a < 4; a++) o[h[a]] = l[a] = l[a] || l[(a - 1) / 2 >> 0];
                        return r.parse(t, o, n, s)
                    }
            },
            xt = (n._setPluginRatio = function(t) {
                this.plugin.setRatio(t);
                for (var e, i, r, n, s, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = l.r(e) : e < 1e-6 && -1e-6 < e && (e = 0), l.t[l.p] = e, l = l._next;
                if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod.call(this._tween, a.rotation, this.t, this._tween) : a.rotation), 1 === t || 0 === t)
                    for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                        if ((i = l.t).type) {
                            if (1 === i.type) {
                                for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                i[s] = n
                            }
                        } else i[s] = i.s + i.xs0;
                        l = l._next
                    }
            }, function(t, e, i, r, n) {
                this.t = t, this.p = e, this.v = i, this.r = n, r && ((r._prev = this)._next = r)
            }),
            Tt = (n._parseToProxy = function(t, e, i, r, n, s) {
                var o, a, l, h, u, c = r,
                    p = {},
                    f = {},
                    d = i._transform,
                    _ = N;
                for (i._transform = null, N = e, r = u = i.parse(t, e, r, n), N = _, s && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
                    if (r.type <= 1 && (f[a = r.p] = r.s + r.c, p[a] = r.s, s || (h = new xt(r, "s", a, h, r.r), r.c = 0), 1 === r.type))
                        for (o = r.l; 0 < --o;) l = "xn" + o, f[a = r.p + "_" + l] = r.data[l], p[a] = r[l], s || (h = new xt(r, l, a, h, r.rxp[l]));
                    r = r._next
                }
                return {
                    proxy: p,
                    end: f,
                    firstMPT: h,
                    pt: u
                }
            }, n.CSSPropTween = function(t, e, i, r, n, s, o, a, l, h, u) {
                this.t = t, this.p = e, this.s = i, this.c = r, this.n = o || e, t instanceof Tt || _.push(this.n), this.r = a ? "function" == typeof a ? a : Math.round : a, this.type = s || 0, l && (this.pr = l, d = !0), this.b = void 0 === h ? i : h, this.e = void 0 === u ? i + r : u, n && ((this._next = n)._prev = this)
            }),
            wt = function(t, e, i, r, n, s) {
                var o = new Tt(t, e, i, r - i, n, -1, s);
                return o.b = i, o.e = o.xs0 = r, o
            },
            bt = Z.parseComplex = function(t, e, i, r, n, s, o, a, l, h) {
                i = i || s || "", "function" == typeof r && (r = r(O, M)), o = new Tt(t, e, 0, 0, o, h ? 2 : 1, null, !1, a, i, r), r += "", n && gt.test(r + i) && (r = [i, r], Z.colorStringFilter(r), i = r[0], r = r[1]);
                var u, c, p, f, d, _, m, g, v, y, x, T, w, b = i.split(", ").join(",").split(" "),
                    C = r.split(", ").join(",").split(" "),
                    k = b.length,
                    S = !1 !== P;
                for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (C = -1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl") ? (b = b.join(" ").replace(z, ", ").split(" "), C.join(" ").replace(z, ", ").split(" ")) : (b = b.join(" ").split(",").join(", ").split(" "), C.join(" ").split(",").join(", ").split(" ")), k = b.length), k !== C.length && (k = (b = (s || "").split(" ")).length), o.plugin = l, o.setRatio = h, u = gt.lastIndex = 0; u < k; u++)
                    if (f = b[u], d = C[u] + "", (g = parseFloat(f)) || 0 === g) o.appendXtra("", g, ut(d, g), d.replace(R, ""), !(!S || -1 === d.indexOf("px")) && Math.round, !0);
                    else if (n && gt.test(f)) T = ")" + ((T = d.indexOf(")") + 1) ? d.substr(T) : ""), w = -1 !== d.indexOf("hsl") && q, y = d, f = _t(f, w), d = _t(d, w), (v = 6 < f.length + d.length) && !q && 0 === d[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[u]).join("transparent")) : (q || (v = !1), w ? o.appendXtra(y.substr(0, y.indexOf("hsl")) + (v ? "hsla(" : "hsl("), f[0], ut(d[0], f[0]), ",", !1, !0).appendXtra("", f[1], ut(d[1], f[1]), "%,", !1).appendXtra("", f[2], ut(d[2], f[2]), v ? "%," : "%" + T, !1) : o.appendXtra(y.substr(0, y.indexOf("rgb")) + (v ? "rgba(" : "rgb("), f[0], d[0] - f[0], ",", Math.round, !0).appendXtra("", f[1], d[1] - f[1], ",", Math.round).appendXtra("", f[2], d[2] - f[2], v ? "," : T, Math.round), v && (f = f.length < 4 ? 1 : f[3], o.appendXtra("", f, (d.length < 4 ? 1 : d[3]) - f, T, !1))), gt.lastIndex = 0;
                    else if (_ = f.match(A)) {
                        if (!(m = d.match(R)) || m.length !== _.length) return o;
                        for (c = p = 0; c < _.length; c++) x = _[c], y = f.indexOf(x, p), o.appendXtra(f.substr(p, y - p), Number(x), ut(m[c], x), "", !(!S || "px" !== f.substr(y + x.length, 2)) && Math.round, 0 === c), p = y + x.length;
                        o["xs" + o.l] += f.substr(p)
                    } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + d : d;
                if (-1 !== r.indexOf("=") && o.data) {
                    for (T = o.xs0 + o.data.s, u = 1; u < o.l; u++) T += o["xs" + u] + o.data["xn" + u];
                    o.e = T + o["xs" + u]
                }
                return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
            },
            Ct = 9;
        for ((t = Tt.prototype).l = t.pr = 0; 0 < --Ct;) t["xn" + Ct] = 0, t["xs" + Ct] = "";
        t.xs0 = "", t._next = t._prev = t.xfirst = t.data = t.plugin = t.setRatio = t.rxp = null, t.appendXtra = function(t, e, i, r, n, s) {
            var o = this,
                a = o.l;
            return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = r || "", 0 < a ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = n, o["xn" + a] = e, o.plugin || (o.xfirst = new Tt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, n, o.pr), o.xfirst.xs0 = 0)) : (o.data = {
                s: e + i
            }, o.rxp = {}, o.s = e, o.c = i, o.r = n)) : o["xs" + a] += e + (r || ""), o
        };
        var kt = function(t, e) {
                e = e || {}, this.p = e.prefix && J(t) || t, m[t] = m[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
            },
            St = n._registerComplexSpecialProp = function(t, e, i) {
                "object" != typeof e && (e = {
                    parser: i
                });
                var r, n = t.split(","),
                    s = e.defaultValue;
                for (i = i || [s], r = 0; r < n.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || s, new kt(n[r], e)
            },
            Pt = n._registerPluginProp = function(t) {
                if (!m[t]) {
                    var l = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                    St(t, {
                        parser: function(t, e, i, r, n, s, o) {
                            var a = h.com.greensock.plugins[l];
                            return a ? (a._cssRegister(), m[i].parse(t, e, i, r, n, s, o)) : ($("Error: " + l + " js file not loaded."), n)
                        }
                    })
                }
            };
        (t = kt.prototype).parseComplex = function(t, e, i, r, n, s) {
            var o, a, l, h, u, c, p = this.keyword;
            if (this.multi && (z.test(i) || z.test(e) ? (a = e.replace(z, "|").split("|"), l = i.replace(z, "|").split("|")) : p && (a = [e], l = [i])), l) {
                for (h = l.length > a.length ? l.length : a.length, o = 0; o < h; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && ((u = e.indexOf(p)) !== (c = i.indexOf(p)) && (-1 === c ? a[o] = a[o].split(p).join("") : -1 === u && (a[o] += " " + p)));
                e = a.join(", "), i = l.join(", ")
            }
            return bt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, s)
        }, t.parse = function(t, e, i, r, n, s, o) {
            return this.parseComplex(t.style, this.format(et(t, this.p, S, !1, this.dflt)), this.format(e), n, s)
        }, Z.registerSpecialProp = function(t, l, h) {
            St(t, {
                parser: function(t, e, i, r, n, s, o) {
                    var a = new Tt(t, i, 0, 0, n, 2, i, !1, h);
                    return a.plugin = s, a.setRatio = l(t, e, r._tween, i), a
                },
                priority: h
            })
        }, Z.useSVGTransformAttr = !0;
        var Mt, Ot, At, Rt, Dt, It = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
            Et = J("transform"),
            zt = K + "transform",
            Lt = J("transformOrigin"),
            Nt = null !== J("perspective"),
            Ft = n.Transform = function() {
                this.perspective = parseFloat(Z.defaultTransformPerspective) || 0, this.force3D = !(!1 === Z.defaultForce3D || !Nt) && (Z.defaultForce3D || "auto")
            },
            Bt = _gsScope.SVGElement,
            Xt = function(t, e, i) {
                var r, n = F.createElementNS("http://www.w3.org/2000/svg", t),
                    s = /([a-z])([A-Z])/g;
                for (r in i) n.setAttributeNS(null, r.replace(s, "$1-$2").toLowerCase(), i[r]);
                return e.appendChild(n), n
            },
            Zt = F.documentElement || {},
            Yt = (Dt = k || /Android/i.test(H) && !_gsScope.chrome, F.createElementNS && !Dt && (Ot = Xt("svg", Zt), Rt = (At = Xt("rect", Ot, {
                width: 100,
                height: 50,
                x: 100
            })).getBoundingClientRect().width, At.style[Lt] = "50% 50%", At.style[Et] = "scaleX(0.5)", Dt = Rt === At.getBoundingClientRect().width && !(Y && Nt), Zt.removeChild(Ot)), Dt),
            Vt = function(t, e, i, r, n, s) {
                var o, a, l, h, u, c, p, f, d, _, m, g, v, y, x = t._gsTransform,
                    T = Ht(t, !0);
                x && (v = x.xOrigin, y = x.yOrigin), (!r || (o = r.split(" ")).length < 2) && (0 === (p = t.getBBox()).x && 0 === p.y && p.width + p.height === 0 && (p = {
                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                    width: 0,
                    height: 0
                }), o = [(-1 !== (e = ht(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = h = parseFloat(o[0]), i.yOrigin = u = parseFloat(o[1]), r && T !== Ut && (c = T[0], p = T[1], f = T[2], d = T[3], _ = T[4], m = T[5], (g = c * d - p * f) && (a = h * (d / g) + u * (-f / g) + (f * m - d * _) / g, l = h * (-p / g) + u * (c / g) - (c * m - p * _) / g, h = i.xOrigin = o[0] = a, u = i.yOrigin = o[1] = l)), x && (s && (i.xOffset = x.xOffset, i.yOffset = x.yOffset, x = i), n || !1 !== n && !1 !== Z.defaultSmoothOrigin ? (a = h - v, l = u - y, x.xOffset += a * T[0] + l * T[2] - a, x.yOffset += a * T[1] + l * T[3] - l) : x.xOffset = x.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" "))
            },
            jt = function(t) {
                var e, i = B("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                    r = this.parentNode,
                    n = this.nextSibling,
                    s = this.style.cssText;
                if (Zt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                    e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = jt
                } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                return n ? r.insertBefore(this, n) : r.appendChild(this), Zt.removeChild(i), this.style.cssText = s, e
            },
            Wt = function(t) {
                return !(!Bt || !t.getCTM || t.parentNode && !t.ownerSVGElement || ! function(e) {
                    try {
                        return e.getBBox()
                    } catch (t) {
                        return jt.call(e, !0)
                    }
                }(t))
            },
            Ut = [1, 0, 0, 1, 0, 0],
            Ht = function(t, e) {
                var i, r, n, s, o, a, l = t._gsTransform || new Ft,
                    h = t.style;
                if (Et ? r = et(t, zt, null, !0) : t.currentStyle && (r = (r = t.currentStyle.filter.match(p)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, !Et || !(a = !tt(t) || "none" === tt(t).display) && t.parentNode || (a && (s = h.display, h.display = "block"), t.parentNode || (o = 1, Zt.appendChild(t)), i = !(r = et(t, zt, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, s ? h.display = s : a && Qt(h, "display"), o && Zt.removeChild(t)), (l.svg || t.getCTM && Wt(t)) && (i && -1 !== (h[Et] + "").indexOf("matrix") && (r = h[Et], i = 0), n = t.getAttribute("transform"), i && n && (r = "matrix(" + (n = t.transform.baseVal.consolidate().matrix).a + "," + n.b + "," + n.c + "," + n.d + "," + n.e + "," + n.f + ")", i = 0)), i) return Ut;
                for (n = (r || "").match(A) || [], Ct = n.length; - 1 < --Ct;) s = Number(n[Ct]), n[Ct] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s;
                return e && 6 < n.length ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
            },
            qt = n.getTransform = function(t, e, i, r) {
                if (t._gsTransform && i && !r) return t._gsTransform;
                var n, s, o, a, l, h, u = i && t._gsTransform || new Ft,
                    c = u.scaleX < 0,
                    p = Nt && (parseFloat(et(t, Lt, e, !1, "0 0 0").split(" ")[2]) || u.zOrigin) || 0,
                    f = parseFloat(Z.defaultTransformPerspective) || 0;
                if (u.svg = !(!t.getCTM || !Wt(t)), u.svg && (Vt(t, et(t, Lt, e, !1, "50% 50%") + "", u, t.getAttribute("data-svg-origin")), Mt = Z.useSVGTransformAttr || Yt), (n = Ht(t)) !== Ut) {
                    if (16 === n.length) {
                        var d, _, m, g, v, y = n[0],
                            x = n[1],
                            T = n[2],
                            w = n[3],
                            b = n[4],
                            C = n[5],
                            k = n[6],
                            S = n[7],
                            P = n[8],
                            M = n[9],
                            O = n[10],
                            A = n[12],
                            R = n[13],
                            D = n[14],
                            I = n[11],
                            E = Math.atan2(k, O);
                        u.zOrigin && (A = P * (D = -u.zOrigin) - n[12], R = M * D - n[13], D = O * D + u.zOrigin - n[14]), u.rotationX = E * j, E && (d = b * (g = Math.cos(-E)) + P * (v = Math.sin(-E)), _ = C * g + M * v, m = k * g + O * v, P = b * -v + P * g, M = C * -v + M * g, O = k * -v + O * g, I = S * -v + I * g, b = d, C = _, k = m), E = Math.atan2(-T, O), u.rotationY = E * j, E && (_ = x * (g = Math.cos(-E)) - M * (v = Math.sin(-E)), m = T * g - O * v, M = x * v + M * g, O = T * v + O * g, I = w * v + I * g, y = d = y * g - P * v, x = _, T = m), E = Math.atan2(x, y), u.rotation = E * j, E && (d = y * (g = Math.cos(E)) + x * (v = Math.sin(E)), _ = b * g + C * v, m = P * g + M * v, x = x * g - y * v, C = C * g - b * v, M = M * g - P * v, y = d, b = _, P = m), u.rotationX && 359.9 < Math.abs(u.rotationX) + Math.abs(u.rotation) && (u.rotationX = u.rotation = 0, u.rotationY = 180 - u.rotationY), E = Math.atan2(b, C), u.scaleX = (1e5 * Math.sqrt(y * y + x * x + T * T) + .5 | 0) / 1e5, u.scaleY = (1e5 * Math.sqrt(C * C + k * k) + .5 | 0) / 1e5, u.scaleZ = (1e5 * Math.sqrt(P * P + M * M + O * O) + .5 | 0) / 1e5, y /= u.scaleX, b /= u.scaleY, x /= u.scaleX, C /= u.scaleY, 2e-5 < Math.abs(E) ? (u.skewX = E * j, b = 0, "simple" !== u.skewType && (u.scaleY *= 1 / Math.cos(E))) : u.skewX = 0, u.perspective = I ? 1 / (I < 0 ? -I : I) : 0, u.x = A, u.y = R, u.z = D, u.svg && (u.x -= u.xOrigin - (u.xOrigin * y - u.yOrigin * b), u.y -= u.yOrigin - (u.yOrigin * x - u.xOrigin * C))
                    } else if (!Nt || r || !n.length || u.x !== n[4] || u.y !== n[5] || !u.rotationX && !u.rotationY) {
                        var z = 6 <= n.length,
                            L = z ? n[0] : 1,
                            N = n[1] || 0,
                            F = n[2] || 0,
                            B = z ? n[3] : 1;
                        u.x = n[4] || 0, u.y = n[5] || 0, o = Math.sqrt(L * L + N * N), a = Math.sqrt(B * B + F * F), l = L || N ? Math.atan2(N, L) * j : u.rotation || 0, h = F || B ? Math.atan2(F, B) * j + l : u.skewX || 0, u.scaleX = o, u.scaleY = a, u.rotation = l, u.skewX = h, Nt && (u.rotationX = u.rotationY = u.z = 0, u.perspective = f, u.scaleZ = 1), u.svg && (u.x -= u.xOrigin - (u.xOrigin * L + u.yOrigin * F), u.y -= u.yOrigin - (u.xOrigin * N + u.yOrigin * B))
                    }
                    for (s in 90 < Math.abs(u.skewX) && Math.abs(u.skewX) < 270 && (c ? (u.scaleX *= -1, u.skewX += u.rotation <= 0 ? 180 : -180, u.rotation += u.rotation <= 0 ? 180 : -180) : (u.scaleY *= -1, u.skewX += u.skewX <= 0 ? 180 : -180)), u.zOrigin = p, u) u[s] < 2e-5 && -2e-5 < u[s] && (u[s] = 0)
                }
                return i && ((t._gsTransform = u).svg && (Mt && t.style[Et] ? X.delayedCall(.001, function() {
                    Qt(t.style, Et)
                }) : !Mt && t.getAttribute("transform") && X.delayedCall(.001, function() {
                    t.removeAttribute("transform")
                }))), u
            },
            Gt = function(t) {
                var e, i, r = this.data,
                    n = -r.rotation * V,
                    s = n + r.skewX * V,
                    o = 1e5,
                    a = (Math.cos(n) * r.scaleX * o | 0) / o,
                    l = (Math.sin(n) * r.scaleX * o | 0) / o,
                    h = (Math.sin(s) * -r.scaleY * o | 0) / o,
                    u = (Math.cos(s) * r.scaleY * o | 0) / o,
                    c = this.t.style,
                    p = this.t.currentStyle;
                if (p) {
                    i = l, l = -h, h = -i, e = p.filter, c.filter = "";
                    var f, d, _ = this.t.offsetWidth,
                        m = this.t.offsetHeight,
                        g = "absolute" !== p.position,
                        v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                        y = r.x + _ * r.xPercent / 100,
                        x = r.y + m * r.yPercent / 100;
                    if (null != r.ox && (y += (f = (r.oxp ? _ * r.ox * .01 : r.ox) - _ / 2) - (f * a + (d = (r.oyp ? m * r.oy * .01 : r.oy) - m / 2) * l), x += d - (f * h + d * u)), g ? v += ", Dx=" + ((f = _ / 2) - (f * a + (d = m / 2) * l) + y) + ", Dy=" + (d - (f * h + d * u) + x) + ")" : v += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(E, v) : c.filter = v + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === u && (g && -1 === v.indexOf("Dx=0, Dy=0") || I.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !g) {
                        var T, w, b, C = k < 8 ? 1 : -1;
                        for (f = r.ieOffsetX || 0, d = r.ieOffsetY || 0, r.ieOffsetX = Math.round((_ - ((a < 0 ? -a : a) * _ + (l < 0 ? -l : l) * m)) / 2 + y), r.ieOffsetY = Math.round((m - ((u < 0 ? -u : u) * m + (h < 0 ? -h : h) * _)) / 2 + x), Ct = 0; Ct < 4; Ct++) b = (i = -1 !== (T = p[w = at[Ct]]).indexOf("px") ? parseFloat(T) : it(this.t, w, parseFloat(T), T.replace(D, "")) || 0) !== r[w] ? Ct < 2 ? -r.ieOffsetX : -r.ieOffsetY : Ct < 2 ? f - r.ieOffsetX : d - r.ieOffsetY, c[w] = (r[w] = Math.round(i - b * (0 === Ct || 2 === Ct ? 1 : C))) + "px"
                    }
                }
            },
            $t = n.set3DTransformRatio = n.setTransformRatio = function(t) {
                var e, i, r, n, s, o, a, l, h, u, c, p, f, d, _, m, g, v, y, x, T, w, b, C = this.data,
                    k = this.t.style,
                    S = C.rotation,
                    P = C.rotationX,
                    M = C.rotationY,
                    O = C.scaleX,
                    A = C.scaleY,
                    R = C.scaleZ,
                    D = C.x,
                    I = C.y,
                    E = C.z,
                    z = C.svg,
                    L = C.perspective,
                    N = C.force3D,
                    F = C.skewY,
                    B = C.skewX;
                if (F && (B += F, S += F), !((1 !== t && 0 !== t || "auto" !== N || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && N || E || L || M || P || 1 !== R) || Mt && z || !Nt) S || B || z ? (S *= V, w = B * V, b = 1e5, i = Math.cos(S) * O, s = Math.sin(S) * O, r = Math.sin(S - w) * -A, o = Math.cos(S - w) * A, w && "simple" === C.skewType && (e = Math.tan(w - F * V), r *= e = Math.sqrt(1 + e * e), o *= e, F && (e = Math.tan(F * V), i *= e = Math.sqrt(1 + e * e), s *= e)), z && (D += C.xOrigin - (C.xOrigin * i + C.yOrigin * r) + C.xOffset, I += C.yOrigin - (C.xOrigin * s + C.yOrigin * o) + C.yOffset, Mt && (C.xPercent || C.yPercent) && (_ = this.t.getBBox(), D += .01 * C.xPercent * _.width, I += .01 * C.yPercent * _.height), D < (_ = 1e-6) && -_ < D && (D = 0), I < _ && -_ < I && (I = 0)), y = (i * b | 0) / b + "," + (s * b | 0) / b + "," + (r * b | 0) / b + "," + (o * b | 0) / b + "," + D + "," + I + ")", z && Mt ? this.t.setAttribute("transform", "matrix(" + y) : k[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + y) : k[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + A + "," + D + "," + I + ")";
                else {
                    if (Y && (O < (_ = 1e-4) && -_ < O && (O = R = 2e-5), A < _ && -_ < A && (A = R = 2e-5), !L || C.z || C.rotationX || C.rotationY || (L = 0)), S || B) S *= V, m = i = Math.cos(S), g = s = Math.sin(S), B && (S -= B * V, m = Math.cos(S), g = Math.sin(S), "simple" === C.skewType && (e = Math.tan((B - F) * V), m *= e = Math.sqrt(1 + e * e), g *= e, C.skewY && (e = Math.tan(F * V), i *= e = Math.sqrt(1 + e * e), s *= e))), r = -g, o = m;
                    else {
                        if (!(M || P || 1 !== R || L || z)) return void(k[Et] = (C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + I + "px," + E + "px)" + (1 !== O || 1 !== A ? " scale(" + O + "," + A + ")" : ""));
                        i = o = 1, r = s = 0
                    }
                    u = 1, n = a = l = h = c = p = 0, f = L ? -1 / L : 0, d = C.zOrigin, _ = 1e-6, x = ",", T = "0", (S = M * V) && (m = Math.cos(S), c = f * (l = -(g = Math.sin(S))), n = i * g, a = s * g, f *= u = m, i *= m, s *= m), (S = P * V) && (e = r * (m = Math.cos(S)) + n * (g = Math.sin(S)), v = o * m + a * g, h = u * g, p = f * g, n = r * -g + n * m, a = o * -g + a * m, u *= m, f *= m, r = e, o = v), 1 !== R && (n *= R, a *= R, u *= R, f *= R), 1 !== A && (r *= A, o *= A, h *= A, p *= A), 1 !== O && (i *= O, s *= O, l *= O, c *= O), (d || z) && (d && (D += n * -d, I += a * -d, E += u * -d + d), z && (D += C.xOrigin - (C.xOrigin * i + C.yOrigin * r) + C.xOffset, I += C.yOrigin - (C.xOrigin * s + C.yOrigin * o) + C.yOffset), D < _ && -_ < D && (D = T), I < _ && -_ < I && (I = T), E < _ && -_ < E && (E = 0)), y = C.xPercent || C.yPercent ? "translate(" + C.xPercent + "%," + C.yPercent + "%) matrix3d(" : "matrix3d(", y += (i < _ && -_ < i ? T : i) + x + (s < _ && -_ < s ? T : s) + x + (l < _ && -_ < l ? T : l), y += x + (c < _ && -_ < c ? T : c) + x + (r < _ && -_ < r ? T : r) + x + (o < _ && -_ < o ? T : o), P || M || 1 !== R ? (y += x + (h < _ && -_ < h ? T : h) + x + (p < _ && -_ < p ? T : p) + x + (n < _ && -_ < n ? T : n), y += x + (a < _ && -_ < a ? T : a) + x + (u < _ && -_ < u ? T : u) + x + (f < _ && -_ < f ? T : f) + x) : y += ",0,0,0,0,1,0,", y += D + x + I + x + E + x + (L ? 1 + -E / L : 1) + ")", k[Et] = y
                }
            };
        (t = Ft.prototype).x = t.y = t.z = t.skewX = t.skewY = t.rotation = t.rotationX = t.rotationY = t.zOrigin = t.xPercent = t.yPercent = t.xOffset = t.yOffset = 0, t.scaleX = t.scaleY = t.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, r, n, s, o) {
                if (r._lastParsedTransform === o) return n;
                var a, l = (r._lastParsedTransform = o).scale && "function" == typeof o.scale ? o.scale : 0;
                "function" == typeof o[i] && (a = o[i], o[i] = e), l && (o.scale = l(O, t));
                var h, u, c, p, f, d, _, m, g, v = t._gsTransform,
                    y = t.style,
                    x = It.length,
                    T = o,
                    w = {},
                    b = "transformOrigin",
                    C = qt(t, S, !0, T.parseTransform),
                    k = T.transform && ("function" == typeof T.transform ? T.transform(O, M) : T.transform);
                if (C.skewType = T.skewType || C.skewType || Z.defaultSkewType, r._transform = C, "rotationZ" in T && (T.rotation = T.rotationZ), k && "string" == typeof k && Et)(u = W.style)[Et] = k, u.display = "block", u.position = "absolute", -1 !== k.indexOf("%") && (u.width = et(t, "width"), u.height = et(t, "height")), F.body.appendChild(W), h = qt(W, null, !1), "simple" === C.skewType && (h.scaleY *= Math.cos(h.skewX * V)), C.svg && (d = C.xOrigin, _ = C.yOrigin, h.x -= C.xOffset, h.y -= C.yOffset, (T.transformOrigin || T.svgOrigin) && (k = {}, Vt(t, ht(T.transformOrigin), k, T.svgOrigin, T.smoothOrigin, !0), d = k.xOrigin, _ = k.yOrigin, h.x -= k.xOffset - C.xOffset, h.y -= k.yOffset - C.yOffset), (d || _) && (m = Ht(W, !0), h.x -= d - (d * m[0] + _ * m[2]), h.y -= _ - (d * m[1] + _ * m[3]))), F.body.removeChild(W), h.perspective || (h.perspective = C.perspective), null != T.xPercent && (h.xPercent = ct(T.xPercent, C.xPercent)), null != T.yPercent && (h.yPercent = ct(T.yPercent, C.yPercent));
                else if ("object" == typeof T) {
                    if (h = {
                        scaleX: ct(null != T.scaleX ? T.scaleX : T.scale, C.scaleX),
                        scaleY: ct(null != T.scaleY ? T.scaleY : T.scale, C.scaleY),
                        scaleZ: ct(T.scaleZ, C.scaleZ),
                        x: ct(T.x, C.x),
                        y: ct(T.y, C.y),
                        z: ct(T.z, C.z),
                        xPercent: ct(T.xPercent, C.xPercent),
                        yPercent: ct(T.yPercent, C.yPercent),
                        perspective: ct(T.transformPerspective, C.perspective)
                    }, null != (f = T.directionalRotation))
                        if ("object" == typeof f)
                            for (u in f) T[u] = f[u];
                        else T.rotation = f;
                    "string" == typeof T.x && -1 !== T.x.indexOf("%") && (h.x = 0, h.xPercent = ct(T.x, C.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (h.y = 0, h.yPercent = ct(T.y, C.yPercent)), h.rotation = pt("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : C.rotation, C.rotation, "rotation", w), Nt && (h.rotationX = pt("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", w), h.rotationY = pt("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", w)), h.skewX = pt(T.skewX, C.skewX), h.skewY = pt(T.skewY, C.skewY)
                }
                for (Nt && null != T.force3D && (C.force3D = T.force3D, p = !0), (c = C.force3D || C.z || C.rotationX || C.rotationY || h.z || h.rotationX || h.rotationY || h.perspective) || null == T.scale || (h.scaleZ = 1); - 1 < --x;)(1e-6 < (k = h[g = It[x]] - C[g]) || k < -1e-6 || null != T[g] || null != N[g]) && (p = !0, n = new Tt(C, g, C[g], k, n), g in w && (n.e = w[g]), n.xs0 = 0, n.plugin = s, r._overwriteProps.push(n.n));
                return k = T.transformOrigin, C.svg && (k || T.svgOrigin) && (d = C.xOffset, _ = C.yOffset, Vt(t, ht(k), h, T.svgOrigin, T.smoothOrigin), n = wt(C, "xOrigin", (v ? C : h).xOrigin, h.xOrigin, n, b), n = wt(C, "yOrigin", (v ? C : h).yOrigin, h.yOrigin, n, b), (d !== C.xOffset || _ !== C.yOffset) && (n = wt(C, "xOffset", v ? d : C.xOffset, C.xOffset, n, b), n = wt(C, "yOffset", v ? _ : C.yOffset, C.yOffset, n, b)), k = "0px 0px"), (k || Nt && c && C.zOrigin) && (Et ? (p = !0, g = Lt, k = (k || et(t, g, S, !1, "50% 50%")) + "", (n = new Tt(y, g, 0, 0, n, -1, b)).b = y[g], n.plugin = s, n.xs0 = n.e = Nt ? (u = C.zOrigin, k = k.split(" "), C.zOrigin = (2 < k.length && (0 === u || "0px" !== k[2]) ? parseFloat(k[2]) : u) || 0, n.xs0 = n.e = k[0] + " " + (k[1] || "50%") + " 0px", (n = new Tt(C, "zOrigin", 0, 0, n, -1, n.n)).b = u, C.zOrigin) : k) : ht(k + "", C)), p && (r._transformType = C.svg && Mt || !c && 3 !== this._transformType ? 2 : 3), a && (o[i] = a), l && (o.scale = l), n
            },
            prefix: !0
        }), St("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }), St("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, r, n, s) {
                e = this.format(e);
                var o, a, l, h, u, c, p, f, d, _, m, g, v, y, x, T, w = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    b = t.style;
                for (d = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), o = e.split(" "), a = 0; a < w.length; a++) this.p.indexOf("border") && (w[a] = J(w[a])), -1 !== (u = h = et(t, w[a], S, !1, "0px")).indexOf(" ") && (u = (h = u.split(" "))[0], h = h[1]), c = l = o[a], p = parseFloat(u), g = u.substr((p + "").length), "" === (m = (v = "=" === c.charAt(1)) ? (f = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), f *= parseFloat(c), c.substr((f + "").length - (f < 0 ? 1 : 0)) || "") : (f = parseFloat(c), c.substr((f + "").length))) && (m = C[i] || g), m !== g && (y = it(t, "borderLeft", p, g), x = it(t, "borderTop", p, g), h = "%" === m ? (u = y / d * 100 + "%", x / _ * 100 + "%") : "em" === m ? (u = y / (T = it(t, "borderLeft", 1, "em")) + "em", x / T + "em") : (u = y + "px", x + "px"), v && (c = parseFloat(u) + f + m, l = parseFloat(h) + f + m)), n = bt(b, w[a], u + " " + h, c + " " + l, !1, "0px", n);
                return n
            },
            prefix: !0,
            formatter: vt("0px 0px 0px 0px", !1, !0)
        }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, r, n, s) {
                return bt(t.style, i, this.format(et(t, i, S, !1, "0px 0px")), this.format(e), !1, "0px", n)
            },
            prefix: !0,
            formatter: vt("0px 0px", !1, !0)
        }), St("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, r, n, s) {
                var o, a, l, h, u, c, p = "background-position",
                    f = S || tt(t, null),
                    d = this.format((f ? k ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                    _ = this.format(e);
                if (-1 !== d.indexOf("%") != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && ((c = et(t, "backgroundImage").replace(b, "")) && "none" !== c)) {
                    for (o = d.split(" "), a = _.split(" "), U.setAttribute("src", c), l = 2; - 1 < --l;)(h = -1 !== (d = o[l]).indexOf("%")) !== (-1 !== a[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - U.width : t.offsetHeight - U.height, o[l] = h ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                    d = o.join(" ")
                }
                return this.parseComplex(t.style, d, _, n, s)
            },
            formatter: ht
        }), St("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
                return "co" === (t += "").substr(0, 2) ? t : ht(-1 === t.indexOf(" ") ? t + " " + t : t)
            }
        }), St("perspective", {
            defaultValue: "0px",
            prefix: !0
        }), St("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }), St("transformStyle", {
            prefix: !0
        }), St("backfaceVisibility", {
            prefix: !0
        }), St("userSelect", {
            prefix: !0
        }), St("margin", {
            parser: yt("marginTop,marginRight,marginBottom,marginLeft")
        }), St("padding", {
            parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), St("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, r, n, s) {
                var o, a, l;
                return e = k < 9 ? (a = t.currentStyle, l = k < 8 ? " " : ",", o = "rect(" + a.clipTop + l + a.clipRight + l + a.clipBottom + l + a.clipLeft + ")", this.format(e).split(",").join(l)) : (o = this.format(et(t, this.p, S, !1, this.dflt)), this.format(e)), this.parseComplex(t.style, o, e, n, s)
            }
        }), St("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }), St("autoRound,strictUnits", {
            parser: function(t, e, i, r, n) {
                return n
            }
        }), St("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, r, n, s) {
                var o = et(t, "borderTopWidth", S, !1, "0px"),
                    a = this.format(e).split(" "),
                    l = a[0].replace(D, "");
                return "px" !== l && (o = parseFloat(o) / it(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(o + " " + et(t, "borderTopStyle", S, !1, "solid") + " " + et(t, "borderTopColor", S, !1, "#000")), a.join(" "), n, s)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0]
            }
        }), St("borderWidth", {
            parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), St("float,cssFloat,styleFloat", {
            parser: function(t, e, i, r, n, s) {
                var o = t.style,
                    a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                return new Tt(o, a, 0, 0, n, -1, i, !1, 0, o[a], e)
            }
        });
        var Kt = function(t) {
            var e, i = this.t,
                r = i.filter || et(this.data, "filter") || "",
                n = this.s + this.c * t | 0;
            100 === n && (e = -1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), !et(this.data, "filter")) : (i.filter = r.replace(o, ""), !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"), -1 === r.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(I, "opacity=" + n))
        };
        St("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, r, n, s) {
                var o = parseFloat(et(t, "opacity", S, !1, "1")),
                    a = t.style,
                    l = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === et(t, "visibility", S) && 0 !== e && (o = 0), q ? n = new Tt(a, "opacity", o, e - o, n) : ((n = new Tt(a, "opacity", 100 * o, 100 * (e - o), n)).xn1 = l ? 1 : 0, a.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = s, n.setRatio = Kt), l && ((n = new Tt(a, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit")).xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
            }
        });
        var Qt = function(t, e) {
                e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(a, "-$1").toLowerCase())) : t.removeAttribute(e))
            },
            Jt = function(t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Qt(i, e.p), e = e._next;
                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            };
        St("className", {
            parser: function(t, e, i, r, n, s, o) {
                var a, l, h, u, c, p = t.getAttribute("class") || "",
                    f = t.style.cssText;
                if ((n = r._classNamePT = new Tt(t, i, 0, 0, n, 2)).setRatio = Jt, n.pr = -11, d = !0, n.b = p, l = nt(t, S), h = t._gsClassPT) {
                    for (u = {}, c = h.data; c;) u[c.p] = 1, c = c._next;
                    h.setRatio(1)
                }
                return (t._gsClassPT = n).e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", n.e), a = st(t, l, nt(t), o, u), t.setAttribute("class", p), n.data = a.firstMPT, t.style.cssText = f, n.xfirst = r.parse(t, a.difs, n, s)
            }
        });
        var te = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, r, n, s, o = this.t.style,
                    a = m.transform.parse;
                if ("all" === this.e) n = !(o.cssText = "");
                else
                    for (r = (e = this.e.split(" ").join("").split(",")).length; - 1 < --r;) i = e[r], m[i] && (m[i].parse === a ? n = !0 : i = "transformOrigin" === i ? Lt : m[i].p), Qt(o, i);
                n && (Qt(o, Et), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
            }
        };
        for (St("clearProps", {
            parser: function(t, e, i, r, n) {
                return (n = new Tt(t, i, 0, 0, n, 2)).setRatio = te, n.e = e, n.pr = -10, n.data = r._tween, d = !0, n
            }
        }), t = "bezier,throwProps,physicsProps,physics2D".split(","), Ct = t.length; Ct--;) Pt(t[Ct]);
        (t = Z.prototype)._firstPT = t._lastParsedTransform = t._transform = null, t._onInitTween = function(t, e, i, r) {
            if (!t.nodeType) return !1;
            this._target = M = t, this._tween = i, this._vars = e, O = r, P = e.autoRound, d = !1, C = e.suffixMap || Z.suffixMap, S = tt(t, ""), _ = this._overwriteProps;
            var n, s, o, a, l, h, u, c, p, f = t.style;
            if (g && "" === f.zIndex && (("auto" === (n = et(t, "zIndex", S)) || "" === n) && this._addLazySet(f, "zIndex", 0)), "string" == typeof e && (a = f.cssText, n = nt(t, S), f.cssText = a + ";" + e, n = st(t, n, nt(t)).difs, !q && T.test(e) && (n.opacity = parseFloat(RegExp.$1)), e = n, f.cssText = a), e.className ? this._firstPT = s = m.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = s = this.parse(t, e, null), this._transformType) {
                for (p = 3 === this._transformType, Et ? v && (g = !0, "" === f.zIndex && (("auto" === (u = et(t, "zIndex", S)) || "" === u) && this._addLazySet(f, "zIndex", 0)), y && this._addLazySet(f, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (p ? "visible" : "hidden"))) : f.zoom = 1, o = s; o && o._next;) o = o._next;
                c = new Tt(t, "transform", 0, 0, null, 2), this._linkCSSP(c, null, o), c.setRatio = Et ? $t : Gt, c.data = this._transform || qt(t, S, !0), c.tween = i, c.pr = -1, _.pop()
            }
            if (d) {
                for (; s;) {
                    for (h = s._next, o = a; o && o.pr > s.pr;) o = o._next;
                    (s._prev = o ? o._prev : l) ? s._prev._next = s: a = s, (s._next = o) ? o._prev = s : l = s, s = h
                }
                this._firstPT = a
            }
            return !0
        }, t.parse = function(t, e, i, r) {
            var n, s, o, a, l, h, u, c, p, f, d = t.style;
            for (n in e) {
                if ("function" == typeof(h = e[n]) && (h = h(O, M)), s = m[n]) i = s.parse(t, h, n, this, i, r, e);
                else {
                    if ("--" === n.substr(0, 2)) {
                        this._tween._propLookup[n] = this._addTween.call(this._tween, t.style, "setProperty", tt(t).getPropertyValue(n) + "", h + "", n, !1, n);
                        continue
                    }
                    l = et(t, n, S) + "", p = "string" == typeof h, "color" === n || "fill" === n || "stroke" === n || -1 !== n.indexOf("Color") || p && w.test(h) ? (p || (h = (3 < (h = _t(h)).length ? "rgba(" : "rgb(") + h.join(",") + ")"), i = bt(d, n, l, h, !0, "transparent", i, 0, r)) : p && L.test(h) ? i = bt(d, n, l, h, !0, null, i, 0, r) : (u = (o = parseFloat(l)) || 0 === o ? l.substr((o + "").length) : "", ("" === l || "auto" === l) && (u = "width" === n || "height" === n ? (o = lt(t, n, S), "px") : "left" === n || "top" === n ? (o = rt(t, n, S), "px") : (o = "opacity" !== n ? 0 : 1, "")), "" === (c = (f = p && "=" === h.charAt(1)) ? (a = parseInt(h.charAt(0) + "1", 10), h = h.substr(2), a *= parseFloat(h), h.replace(D, "")) : (a = parseFloat(h), p ? h.replace(D, "") : "")) && (c = n in C ? C[n] : u), h = a || 0 === a ? (f ? a + o : a) + c : e[n], u !== c && ("" !== c || "lineHeight" === n) && (a || 0 === a) && o && (o = it(t, n, o, u), "%" === c ? (o /= it(t, n, 100, "%") / 100, !0 !== e.strictUnits && (l = o + "%")) : "em" === c || "rem" === c || "vw" === c || "vh" === c ? o /= it(t, n, 1, c) : "px" !== c && (a = it(t, n, a, c), c = "px"), f && (a || 0 === a) && (h = a + o + c)), f && (a += o), !o && 0 !== o || !a && 0 !== a ? void 0 !== d[n] && (h || h + "" != "NaN" && null != h) ? (i = new Tt(d, n, a || o || 0, 0, i, -1, n, !1, 0, l, h)).xs0 = "none" !== h || "display" !== n && -1 === n.indexOf("Style") ? h : l : $("invalid " + n + " tween value: " + e[n]) : (i = new Tt(d, n, o, a - o, i, 0, n, !1 !== P && ("px" === c || "zIndex" === n), 0, l, h)).xs0 = c)
                }
                r && i && !i.plugin && (i.plugin = r)
            }
            return i
        }, t.setRatio = function(t) {
            var e, i, r, n = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                    for (; n;) {
                        if (e = n.c * t + n.s, n.r ? e = n.r(e) : e < 1e-6 && -1e-6 < e && (e = 0), n.type)
                            if (1 === n.type)
                                if (2 === (r = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                else if (3 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                else if (4 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                else if (5 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                else {
                                    for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                    n.t[n.p] = i
                                } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                        else n.t[n.p] = e + n.xs0;
                        n = n._next
                    } else
                    for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
            else
                for (; n;) {
                    if (2 !== n.type)
                        if (n.r && -1 !== n.type)
                            if (e = n.r(n.s + n.c), n.type) {
                                if (1 === n.type) {
                                    for (r = n.l, i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                    n.t[n.p] = i
                                }
                            } else n.t[n.p] = e + n.xs0;
                        else n.t[n.p] = n.e;
                    else n.setRatio(t);
                    n = n._next
                }
        }, t._enableTransforms = function(t) {
            this._transform = this._transform || qt(this._target, S, !0), this._transformType = this._transform.svg && Mt || !t && 3 !== this._transformType ? 2 : 3
        };
        var ee = function(t) {
            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        t._addLazySet = function(t, e, i) {
            var r = this._firstPT = new Tt(t, e, 0, 0, this._firstPT, 2);
            r.e = i, r.setRatio = ee, r.data = this
        }, t._linkCSSP = function(t, e, i, r) {
            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
        }, t._mod = function(t) {
            for (var e = this._firstPT; e;) "function" == typeof t[e.p] && (e.r = t[e.p]), e = e._next
        }, t._kill = function(t) {
            var e, i, r, n = t;
            if (t.autoAlpha || t.alpha) {
                for (i in n = {}, t) n[i] = t[i];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
            }
            for (t.className && (e = this._classNamePT) && ((r = e.xfirst) && r._prev ? this._linkCSSP(r._prev, e._next, r._prev._prev) : r === this._firstPT && (this._firstPT = e._next), e._next && this._linkCSSP(e._next, e._next._next, r._prev), this._classNamePT = null), e = this._firstPT; e;) e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t), i = e.plugin), e = e._next;
            return s.prototype._kill.call(this, n)
        };
        var ie = function(t, e, i) {
            var r, n, s, o;
            if (t.slice)
                for (n = t.length; - 1 < --n;) ie(t[n], e, i);
            else
                for (n = (r = t.childNodes).length; - 1 < --n;) o = (s = r[n]).type, s.style && (e.push(nt(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || ie(s, e, i)
        };
        return Z.cascadeTo = function(t, e, i) {
            var r, n, s, o, a = X.to(t, e, i),
                l = [a],
                h = [],
                u = [],
                c = [],
                p = X._internals.reservedProps;
            for (t = a._targets || a.target, ie(t, h, c), a.render(e, !0, !0), ie(t, u), a.render(0, !0, !0), a._enabled(!0), r = c.length; - 1 < --r;)
                if ((n = st(c[r], h[r], u[r])).firstMPT) {
                    for (s in n = n.difs, i) p[s] && (n[s] = i[s]);
                    for (s in o = {}, n) o[s] = h[r][s];
                    l.push(X.fromTo(c[r], e, o, n))
                }
            return l
        }, s.activate([Z]), Z
    }, !0), t = _gsScope._gsDefine.plugin({
        propName: "roundProps",
        version: "1.7.0",
        priority: -1,
        API: 2,
        init: function(t, e, i) {
            return this._tween = i, !0
        }
    }), l = function(e) {
        var i = e < 1 ? Math.pow(10, (e + "").length - 2) : 1;
        return function(t) {
            return (Math.round(t / e) * e * i | 0) / i
        }
    }, h = function(t, e) {
        for (; t;) t.f || t.blob || (t.m = e || Math.round), t = t._next
    }, (e = t.prototype)._onInitAllProps = function() {
        var t, e, i, r, n = this._tween,
            s = n.vars.roundProps,
            o = {},
            a = n._propLookup.roundProps;
        if ("object" != typeof s || s.push)
            for ("string" == typeof s && (s = s.split(",")), i = s.length; - 1 < --i;) o[s[i]] = Math.round;
        else
            for (r in s) o[r] = l(s[r]);
        for (r in o)
            for (t = n._firstPT; t;) e = t._next, t.pg ? t.t._mod(o) : t.n === r && (2 === t.f && t.t ? h(t.t._firstPT, o[r]) : (this._add(t.t, r, t.s, t.c, o[r]), e && (e._prev = t._prev), t._prev ? t._prev._next = e : n._firstPT === t && (n._firstPT = e), t._next = t._prev = null, n._propLookup[r] = a)), t = e;
        return !1
    }, e._add = function(t, e, i, r, n) {
        this._addTween(t, e, i, i + r, e, n || Math.round), this._overwriteProps.push(e)
    }, _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.1",
        init: function(t, e, i, r) {
            var n, s;
            if ("function" != typeof t.setAttribute) return !1;
            for (n in e) "function" == typeof(s = e[n]) && (s = s(r, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", s + "", n, !1, n), this._overwriteProps.push(n);
            return !0
        }
    }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.3.1",
        API: 2,
        init: function(t, e, i, r) {
            "object" != typeof e && (e = {
                rotation: e
            }), this.finals = {};
            var n, s, o, a, l, h, u = !0 === e.useRadians ? 2 * Math.PI : 360;
            for (n in e) "useRadians" !== n && ("function" == typeof(a = e[n]) && (a = a(r, t)), s = (h = (a + "").split("_"))[0], o = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), l = (a = this.finals[n] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0) - o, h.length && (-1 !== (s = h.join("_")).indexOf("short") && ((l %= u) !== l % (u / 2) && (l = l < 0 ? l + u : l - u)), -1 !== s.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : -1 !== s.indexOf("ccw") && 0 < l && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)), (1e-6 < l || l < -1e-6) && (this._addTween(t, n, o, o + l, n), this._overwriteProps.push(n)));
            return !0
        },
        set: function(t) {
            var e;
            if (1 !== t) this._super.setRatio.call(this, t);
            else
                for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
        }
    })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(m) {
        var i, r, e, t, n = _gsScope.GreenSockGlobals || _gsScope,
            s = n.com.greensock,
            o = 2 * Math.PI,
            a = Math.PI / 2,
            l = s._class,
            h = function(t, e) {
                var i = l("easing." + t, function() {}, !0),
                    r = i.prototype = new m;
                return r.constructor = i, r.getRatio = e, i
            },
            u = m.register || function() {},
            c = function(t, e, i, r, n) {
                var s = l("easing." + t, {
                    easeOut: new e,
                    easeIn: new i,
                    easeInOut: new r
                }, !0);
                return u(s, t), s
            },
            g = function(t, e, i) {
                this.t = t, this.v = e, i && (((this.next = i).prev = this).c = i.v - e, this.gap = i.t - t)
            },
            p = function(t, e) {
                var i = l("easing." + t, function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                    }, !0),
                    r = i.prototype = new m;
                return r.constructor = i, r.getRatio = e, r.config = function(t) {
                    return new i(t)
                }, i
            },
            f = c("Back", p("BackOut", function(t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }), p("BackIn", function(t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
            }), p("BackInOut", function(t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            })),
            d = l("easing.SlowMo", function(t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : 1 < t && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
            }, !0),
            _ = d.prototype = new m;
        return _.constructor = d, _.getRatio = function(t) {
            var e = t + (.5 - t) * this._p;
            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
        }, d.ease = new d(.7, .7), _.config = d.config = function(t, e, i) {
            return new d(t, e, i)
        }, (_ = (i = l("easing.SteppedEase", function(t, e) {
            t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
        }, !0)).prototype = new m).constructor = i, _.getRatio = function(t) {
            return t < 0 ? t = 0 : 1 <= t && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
        }, _.config = i.config = function(t, e) {
            return new i(t, e)
        }, (_ = (r = l("easing.ExpoScaleEase", function(t, e, i) {
            this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
        }, !0)).prototype = new m).constructor = r, _.getRatio = function(t) {
            return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
        }, _.config = r.config = function(t, e, i) {
            return new r(t, e, i)
        }, (_ = (e = l("easing.RoughEase", function(t) {
            for (var e, i, r, n, s, o, a = (t = t || {}).taper || "none", l = [], h = 0, u = 0 | (t.points || 20), c = u, p = !1 !== t.randomize, f = !0 === t.clamp, d = t.template instanceof m ? t.template : null, _ = "number" == typeof t.strength ? .4 * t.strength : .4; - 1 < --c;) e = p ? Math.random() : 1 / u * c, i = d ? d.getRatio(e) : e, r = "none" === a ? _ : "out" === a ? (n = 1 - e) * n * _ : "in" === a ? e * e * _ : (n = e < .5 ? 2 * e : 2 * (1 - e)) * n * .5 * _, p ? i += Math.random() * r - .5 * r : c % 2 ? i += .5 * r : i -= .5 * r, f && (1 < i ? i = 1 : i < 0 && (i = 0)), l[h++] = {
                x: e,
                y: i
            };
            for (l.sort(function(t, e) {
                return t.x - e.x
            }), o = new g(1, 1, null), c = u; - 1 < --c;) s = l[c], o = new g(s.x, s.y, o);
            this._prev = new g(0, 0, 0 !== o.t ? o : o.next)
        }, !0)).prototype = new m).constructor = e, _.getRatio = function(t) {
            var e = this._prev;
            if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
            } else
                for (; e.prev && t <= e.t;) e = e.prev;
            return (this._prev = e).v + (t - e.t) / e.gap * e.c
        }, _.config = function(t) {
            return new e(t)
        }, e.ease = new e, c("Bounce", h("BounceOut", function(t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        }), h("BounceIn", function(t) {
            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
        }), h("BounceInOut", function(t) {
            var e = t < .5;
            return t = (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
        })), c("Circ", h("CircOut", function(t) {
            return Math.sqrt(1 - (t -= 1) * t)
        }), h("CircIn", function(t) {
            return -(Math.sqrt(1 - t * t) - 1)
        }), h("CircInOut", function(t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        })), c("Elastic", (t = function(t, e, i) {
            var r = l("easing." + t, function(t, e) {
                    this._p1 = 1 <= t ? t : 1, this._p2 = (e || i) / (t < 1 ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                }, !0),
                n = r.prototype = new m;
            return n.constructor = r, n.getRatio = e, n.config = function(t, e) {
                return new r(t, e)
            }, r
        })("ElasticOut", function(t) {
            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
        }, .3), t("ElasticIn", function(t) {
            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
        }, .3), t("ElasticInOut", function(t) {
            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
        }, .45)), c("Expo", h("ExpoOut", function(t) {
            return 1 - Math.pow(2, -10 * t)
        }), h("ExpoIn", function(t) {
            return Math.pow(2, 10 * (t - 1)) - .001
        }), h("ExpoInOut", function(t) {
            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        })), c("Sine", h("SineOut", function(t) {
            return Math.sin(t * a)
        }), h("SineIn", function(t) {
            return 1 - Math.cos(t * a)
        }), h("SineInOut", function(t) {
            return -.5 * (Math.cos(Math.PI * t) - 1)
        })), l("easing.EaseLookup", {
            find: function(t) {
                return m.map[t]
            }
        }, !0), u(n.SlowMo, "SlowMo", "ease,"), u(e, "RoughEase", "ease,"), u(i, "SteppedEase", "ease,"), f
    }, !0)
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(p, f) {
        "use strict";
        var d = {},
            r = p.document,
            _ = p.GreenSockGlobals = p.GreenSockGlobals || p,
            t = _[f];
        if (t) return "undefined" != typeof module && module.exports && (module.exports = t);
        var e, i, n, m, g, s, o, v = function(t) {
                var e, i = t.split("."),
                    r = _;
                for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
                return r
            },
            c = v("com.greensock"),
            y = 1e-10,
            l = function(t) {
                var e, i = [],
                    r = t.length;
                for (e = 0; e !== r; i.push(t[e++]));
                return i
            },
            x = function() {},
            T = (s = Object.prototype.toString, o = s.call([]), function(t) {
                return null != t && (t instanceof Array || "object" == typeof t && !!t.push && s.call(t) === o)
            }),
            w = {},
            b = function(a, l, h, u) {
                this.sc = w[a] ? w[a].sc : [], (w[a] = this).gsClass = null, this.func = h;
                var c = [];
                this.check = function(t) {
                    for (var e, i, r, n, s = l.length, o = s; - 1 < --s;)(e = w[l[s]] || new b(l[s], [])).gsClass ? (c[s] = e.gsClass, o--) : t && e.sc.push(this);
                    if (0 === o && h) {
                        if (r = (i = ("com.greensock." + a).split(".")).pop(), n = v(i.join("."))[r] = this.gsClass = h.apply(h, c), u)
                            if (_[r] = d[r] = n, "undefined" != typeof module && module.exports)
                                if (a === f)
                                    for (s in module.exports = d[f] = n, d) n[s] = d[s];
                                else d[f] && (d[f][r] = n);
                            else "function" == typeof define && define.amd && define((p.GreenSockAMDPath ? p.GreenSockAMDPath + "/" : "") + a.split(".").pop(), [], function() {
                                return n
                            });
                        for (s = 0; s < this.sc.length; s++) this.sc[s].check()
                    }
                }, this.check(!0)
            },
            a = p._gsDefine = function(t, e, i, r) {
                return new b(t, e, i, r)
            },
            C = c._class = function(t, e, i) {
                return e = e || function() {}, a(t, [], function() {
                    return e
                }, i), e
            };
        a.globals = _;
        var h = [0, 0, 1, 1],
            k = C("easing.Ease", function(t, e, i, r) {
                this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? h.concat(e) : h
            }, !0),
            S = k.map = {},
            u = k.register = function(t, e, i, r) {
                for (var n, s, o, a, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); - 1 < --h;)
                    for (s = l[h], n = r ? C("easing." + s, null, !0) : c.easing[s] || {}, o = u.length; - 1 < --o;) a = u[o], S[s + "." + a] = S[a + s] = n[a] = t.getRatio ? t : t[a] || new t
            };
        for ((n = k.prototype)._calcEnd = !1, n.getRatio = function(t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type,
                i = this._power,
                r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
            return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
        }, i = (e = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; - 1 < --i;) n = e[i] + ",Power" + i, u(new k(null, null, 1, i), n, "easeOut", !0), u(new k(null, null, 2, i), n, "easeIn" + (0 === i ? ",easeNone" : "")), u(new k(null, null, 3, i), n, "easeInOut");
        S.linear = c.easing.Linear.easeIn, S.swing = c.easing.Quad.easeInOut;
        var P = C("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        (n = P.prototype).addEventListener = function(t, e, i, r, n) {
            n = n || 0;
            var s, o, a = this._listeners[t],
                l = 0;
            for (this !== m || g || m.wake(), null == a && (this._listeners[t] = a = []), o = a.length; - 1 < --o;)(s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === l && s.pr < n && (l = o + 1);
            a.splice(l, 0, {
                c: e,
                s: i,
                up: r,
                pr: n
            })
        }, n.removeEventListener = function(t, e) {
            var i, r = this._listeners[t];
            if (r)
                for (i = r.length; - 1 < --i;)
                    if (r[i].c === e) return void r.splice(i, 1)
        }, n.dispatchEvent = function(t) {
            var e, i, r, n = this._listeners[t];
            if (n)
                for (1 < (e = n.length) && (n = n.slice(0)), i = this._eventTarget; - 1 < --e;)(r = n[e]) && (r.up ? r.c.call(r.s || i, {
                    type: t,
                    target: i
                }) : r.c.call(r.s || i))
        };
        var M = p.requestAnimationFrame,
            O = p.cancelAnimationFrame,
            A = Date.now || function() {
                return (new Date).getTime()
            },
            R = A();
        for (i = (e = ["ms", "moz", "webkit", "o"]).length; - 1 < --i && !M;) M = p[e[i] + "RequestAnimationFrame"], O = p[e[i] + "CancelAnimationFrame"] || p[e[i] + "CancelRequestAnimationFrame"];
        C("Ticker", function(t, e) {
            var n, s, o, a, l, h = this,
                u = A(),
                i = !(!1 === e || !M) && "auto",
                c = 500,
                p = 33,
                f = function(t) {
                    var e, i, r = A() - R;
                    c < r && (u += r - p), R += r, h.time = (R - u) / 1e3, e = h.time - l, (!n || 0 < e || !0 === t) && (h.frame++, l += e + (a <= e ? .004 : a - e), i = !0), !0 !== t && (o = s(f)), i && h.dispatchEvent("tick")
                };
            P.call(h), h.time = h.frame = 0, h.tick = function() {
                f(!0)
            }, h.lagSmoothing = function(t, e) {
                return arguments.length ? (c = t || 1e10, void(p = Math.min(e, c, 0))) : c < 1e10
            }, h.sleep = function() {
                null != o && (i && O ? O(o) : clearTimeout(o), s = x, o = null, h === m && (g = !1))
            }, h.wake = function(t) {
                null !== o ? h.sleep() : t ? u += -R + (R = A()) : 10 < h.frame && (R = A() - c + 5), s = 0 === n ? x : i && M ? M : function(t) {
                    return setTimeout(t, 1e3 * (l - h.time) + 1 | 0)
                }, h === m && (g = !0), f(2)
            }, h.fps = function(t) {
                return arguments.length ? (a = 1 / ((n = t) || 60), l = this.time + a, void h.wake()) : n
            }, h.useRAF = function(t) {
                return arguments.length ? (h.sleep(), i = t, void h.fps(n)) : i
            }, h.fps(t), setTimeout(function() {
                "auto" === i && h.frame < 5 && "hidden" !== (r || {}).visibilityState && h.useRAF(!1)
            }, 1500)
        }), (n = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
        var D = C("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, K) {
                g || m.wake();
                var i = this.vars.useFrames ? $ : K;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        m = D.ticker = new c.Ticker, (n = D.prototype)._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
        var I = function() {
            g && 2e3 < A() - R && ("hidden" !== (r || {}).visibilityState || !m.lagSmoothing()) && m.wake();
            var t = setTimeout(I, 2e3);
            t.unref && t.unref()
        };
        I(), n.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, n.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, n.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, n.seek = function(t, e) {
            return this.totalTime(Number(t), !1 !== e)
        }, n.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, n.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, n.render = function(t, e, i) {}, n.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, n.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
        }, n._enabled = function(t, e) {
            return g || m.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, n._kill = function(t, e) {
            return this._enabled(!1, !1)
        }, n.kill = function(t, e) {
            return this._kill(t, e), this
        }, n._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, n._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); - 1 < --e;) "{self}" === t[e] && (i[e] = this);
            return i
        }, n._callback = function(t) {
            var e = this.vars,
                i = e[t],
                r = e[t + "Params"],
                n = e[t + "Scope"] || e.callbackScope || this;
            switch (r ? r.length : 0) {
                case 0:
                    i.call(n);
                    break;
                case 1:
                    i.call(n, r[0]);
                    break;
                case 2:
                    i.call(n, r[0], r[1]);
                    break;
                default:
                    i.apply(n, r)
            }
        }, n.eventCallback = function(t, e, i, r) {
            if ("on" === (t || "").substr(0, 2)) {
                var n = this.vars;
                if (1 === arguments.length) return n[t];
                null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = T(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, n.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, n.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, n.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, n.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, n.totalTime = function(t, e, i) {
            if (g || m.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration,
                        n = this._timeline;
                    if (r < t && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                        for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (N.length && J(), this.render(t, e, !1), N.length && J())
            }
            return this
        }, n.progress = n.totalProgress = function(t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, n.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, n.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, n.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            var e, i;
            for (t = t || y, this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
            return this
        }, n.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, n.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, r = this._timeline;
            return t != this._paused && r && (g || t || m.wake(), i = (e = r.rawTime()) - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var E = C("core.SimpleTimeline", function(t) {
            D.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        (n = E.prototype = new D).constructor = E, n.kill()._gc = !1, n._first = n._last = n._recent = null, n._sortChildren = !1, n.add = n.insert = function(t, e, i, r) {
            var n, s;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                for (s = t._startTime; n && n._startTime > s;) n = n._prev;
            return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
        }, n._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, n.render = function(t, e, i) {
            var r, n = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; n;) r = n._next, (n._active || t >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r
        }, n.rawTime = function() {
            return g || m.wake(), this._totalTime
        };
        var z = C("TweenLite", function(t, e, i) {
                if (D.call(this, e, i), this.render = z.prototype.render, null == t) throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : z.selector(t) || t;
                var r, n, s, o = t.jquery || t.length && t !== p && t[0] && (t[0] === p || t[0].nodeType && t[0].style && !t.nodeType),
                    a = this.vars.overwrite;
                if (this._overwrite = a = null == a ? G[z.defaultOverwrite] : "number" == typeof a ? a >> 0 : G[a], (o || t instanceof Array || t.push && T(t)) && "number" != typeof t[0])
                    for (this._targets = s = l(t), this._propLookup = [], this._siblings = [], r = 0; r < s.length; r++)(n = s[r]) ? "string" != typeof n ? n.length && n !== p && n[0] && (n[0] === p || n[0].nodeType && n[0].style && !n.nodeType) ? (s.splice(r--, 1), this._targets = s = s.concat(l(n))) : (this._siblings[r] = tt(n, this, !1), 1 === a && 1 < this._siblings[r].length && it(n, this, null, 1, this._siblings[r])) : "string" == typeof(n = s[r--] = z.selector(n)) && s.splice(r + 1, 1) : s.splice(r--, 1);
                else this._propLookup = {}, this._siblings = tt(t, this, !1), 1 === a && 1 < this._siblings.length && it(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -y, this.render(Math.min(0, -this._delay)))
            }, !0),
            L = function(t) {
                return t && t.length && t !== p && t[0] && (t[0] === p || t[0].nodeType && t[0].style && !t.nodeType)
            };
        (n = z.prototype = new D).constructor = z, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, z.version = "2.0.2", z.defaultEase = n._ease = new k(null, null, 1, 1), z.defaultOverwrite = "auto", z.ticker = m, z.autoSleep = 120, z.lagSmoothing = function(t, e) {
            m.lagSmoothing(t, e)
        }, z.selector = p.$ || p.jQuery || function(t) {
            var e = p.$ || p.jQuery;
            return e ? (z.selector = e)(t) : (r || (r = p.document), r ? r.querySelectorAll ? r.querySelectorAll(t) : r.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
        };
        var N = [],
            F = {},
            B = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            X = /[\+-]=-?[\.\d]/,
            Z = function(t) {
                for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && -1e-6 < e && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            },
            Y = function(t, e, i, r) {
                var n, s, o, a, l, h, u, c = [],
                    p = 0,
                    f = "",
                    d = 0;
                for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, n = t.match(B) || [], s = e.match(B) || [], r && (r._next = null, r.blob = 1, c._firstPT = c._applyPT = r), l = s.length, a = 0; a < l; a++) u = s[a], f += (h = e.substr(p, e.indexOf(u, p) - p)) || !a ? h : ",", p += h.length, d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), u === n[a] || n.length <= a ? f += u : (f && (c.push(f), f = ""), o = parseFloat(n[a]), c.push(o), c._firstPT = {
                    _next: c._firstPT,
                    t: c,
                    p: c.length - 1,
                    s: o,
                    c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0,
                    f: 0,
                    m: d && d < 4 ? Math.round : 0
                }), p += u.length;
                return (f += e.substr(p)) && c.push(f), c.setRatio = Z, X.test(e) && (c.end = null), c
            },
            V = function(t, e, i, r, n, s, o, a, l) {
                "function" == typeof r && (r = r(l || 0, t));
                var h = typeof t[e],
                    u = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                    c = "get" !== i ? i : u ? o ? t[u](o) : t[u]() : t[e],
                    p = "string" == typeof r && "=" === r.charAt(1),
                    f = {
                        t: t,
                        p: e,
                        s: c,
                        f: "function" === h,
                        pg: 0,
                        n: n || e,
                        m: s ? "function" == typeof s ? s : Math.round : 0,
                        pr: 0,
                        c: p ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - c || 0
                    };
                return ("number" != typeof c || "number" != typeof r && !p) && (o || isNaN(c) || !p && isNaN(r) || "boolean" == typeof c || "boolean" == typeof r ? (f.fp = o, f = {
                    t: Y(c, p ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : r, a || z.defaultStringFilter, f),
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: n || e,
                    pr: 0,
                    m: 0
                }) : (f.s = parseFloat(c), p || (f.c = parseFloat(r) - f.s || 0))), f.c ? ((f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f) : void 0
            },
            j = z._internals = {
                isArray: T,
                isSelector: L,
                lazyTweens: N,
                blobDif: Y
            },
            W = z._plugins = {},
            U = j.tweenLookup = {},
            H = 0,
            q = j.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1
            },
            G = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
            },
            $ = D._rootFramesTimeline = new E,
            K = D._rootTimeline = new E,
            Q = 30,
            J = j.lazyRender = function() {
                var t, e = N.length;
                for (F = {}; - 1 < --e;)(t = N[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                N.length = 0
            };
        K._startTime = m.time, $._startTime = m.frame, K._active = $._active = !0, setTimeout(J, 1), D._updateRoot = z.render = function() {
            var t, e, i;
            if (N.length && J(), K.render((m.time - K._startTime) * K._timeScale, !1, !1), $.render((m.frame - $._startTime) * $._timeScale, !1, !1), N.length && J(), m.frame >= Q) {
                for (i in Q = m.frame + (parseInt(z.autoSleep, 10) || 120), U) {
                    for (t = (e = U[i].tweens).length; - 1 < --t;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete U[i]
                }
                if ((!(i = K._first) || i._paused) && z.autoSleep && !$._first && 1 === m._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || m.sleep()
                }
            }
        }, m.addEventListener("tick", D._updateRoot);
        var tt = function(t, e, i) {
                var r, n, s = t._gsTweenID;
                if (U[s || (t._gsTweenID = s = "t" + H++)] || (U[s] = {
                    target: t,
                    tweens: []
                }), e && ((r = U[s].tweens)[n = r.length] = e, i))
                    for (; - 1 < --n;) r[n] === e && r.splice(n, 1);
                return U[s].tweens
            },
            et = function(t, e, i, r) {
                var n, s, o = t.vars.onOverwrite;
                return o && (n = o(t, e, i, r)), (o = z.onOverwrite) && (s = o(t, e, i, r)), !1 !== n && !1 !== s
            },
            it = function(t, e, i, r, n) {
                var s, o, a, l;
                if (1 === r || 4 <= r) {
                    for (l = n.length, s = 0; s < l; s++)
                        if ((a = n[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                        else if (5 === r) break;
                    return o
                }
                var h, u = e._startTime + y,
                    c = [],
                    p = 0,
                    f = 0 === e._duration;
                for (s = n.length; - 1 < --s;)(a = n[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || rt(e, 0, f), 0 === rt(a, h, f) && (c[p++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((f || !a._initted) && u - a._startTime <= 2e-10 || (c[p++] = a)));
                for (s = p; - 1 < --s;)
                    if (l = (a = c[s])._firstPT, 2 === r && a._kill(i, t, e) && (o = !0), 2 !== r || !a._firstPT && a._initted && l) {
                        if (2 !== r && !et(a, e)) continue;
                        a._enabled(!1, !1) && (o = !0)
                    }
                return o
            },
            rt = function(t, e, i) {
                for (var r = t._timeline, n = r._timeScale, s = t._startTime; r._timeline;) {
                    if (s += r._startTime, n *= r._timeScale, r._paused) return -100;
                    r = r._timeline
                }
                return e < (s /= n) ? s - e : i && s === e || !t._initted && s - e < 2 * y ? y : (s += t.totalDuration() / t._timeScale / n) > e + y ? 0 : s - e - y
            };
        n._init = function() {
            var t, e, i, r, n, s, o = this.vars,
                a = this._overwrittenProps,
                l = this._duration,
                h = !!o.immediateRender,
                u = o.ease;
            if (o.startAt) {
                for (r in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {}, o.startAt) n[r] = o.startAt[r];
                if (n.data = "isStart", n.overwrite = !1, n.immediateRender = !0, n.lazy = h && !1 !== o.lazy, n.startAt = n.delay = null, n.onUpdate = o.onUpdate, n.onUpdateParams = o.onUpdateParams, n.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = z.to(this.target || {}, 0, n), h)
                    if (0 < this._time) this._startAt = null;
                    else if (0 !== l) return
            } else if (o.runBackwards && 0 !== l)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    for (r in 0 !== this._time && (h = !1), i = {}, o) q[r] && "autoCSS" !== r || (i[r] = o[r]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = z.to(this.target, 0, i), h) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = u = u ? u instanceof k ? u : "function" == typeof u ? new k(u, o.easeParams) : S[u] || z.defaultEase : z.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (s = this._targets.length, t = 0; t < s; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
            if (e && z._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = o.onUpdate, this._initted = !0
        }, n._initProps = function(t, e, i, r, n) {
            var s, o, a, l, h, u;
            if (null == t) return !1;
            for (s in F[t._gsTweenID] && J(), this.vars.css || t.style && t !== p && t.nodeType && W.css && !1 !== this.vars.autoCSS && function(t, e) {
                var i, r = {};
                for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!W[i] || W[i] && W[i]._autoCSS) || (r[i] = t[i], delete t[i]);
                t.css = r
            }(this.vars, t), this.vars)
                if (u = this.vars[s], q[s]) u && (u instanceof Array || u.push && T(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[s] = u = this._swapSelfInParams(u, this));
                else if (W[s] && (l = new W[s])._onInitTween(t, this.vars[s], this, n)) {
                    for (this._firstPT = h = {
                        _next: this._firstPT,
                        t: l,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 1,
                        n: s,
                        pg: 1,
                        pr: l._priority,
                        m: 0
                    }, o = l._overwriteProps.length; - 1 < --o;) e[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), h._next && (h._next._prev = h)
                } else e[s] = V.call(this, t, s, "get", u, s, 0, null, this.vars.stringFilter, n);
            return r && this._kill(r, t) ? this._initProps(t, e, i, r, n) : 1 < this._overwrite && this._firstPT && 1 < i.length && it(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, r, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (F[t._gsTweenID] = !0), a)
        }, n.render = function(t, e, i) {
            var r, n, s, o, a = this._time,
                l = this._duration,
                h = this._rawPrevTime;
            if (l - 1e-7 <= t && 0 <= t) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && -1e-7 <= t || h === y && "isPause" !== this.data) && h !== t && (i = !0, y < h && (n = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : y);
            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && 0 < h) && (n = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (0 <= h && (h !== y || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : y)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var u = t / l,
                    c = this._easeType,
                    p = this._easePower;
                (1 === c || 3 === c && .5 <= u) && (u = 1 - u), 3 === c && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : t / l < .5 ? u / 2 : 1 - u / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, N.push(this), void(this._lazy = [t, e]);
                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && 0 <= t && (this._active = !0), 0 === a && (this._startAt && (0 <= t ? this._startAt.render(t, !0, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || r || i) && this._callback("onUpdate")), n && (!this._gc || i) && (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === l && this._rawPrevTime === y && o !== y && (this._rawPrevTime = 0))
            }
        }, n._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
            var r, n, s, o, a, l, h, u, c, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline,
                f = this._firstPT;
            if ((T(e) || L(e)) && "number" != typeof e[0])
                for (r = e.length; - 1 < --r;) this._kill(t, e[r], i) && (l = !0);
            else {
                if (this._targets) {
                    for (r = this._targets.length; - 1 < --r;)
                        if (e === this._targets[r]) {
                            a = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (h = t || a, u = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill), i && (z.onOverwrite || this.vars.onOverwrite)) {
                        for (s in h) a[s] && (c || (c = []), c.push(s));
                        if ((c || !t) && !et(this, i, e, c)) return !1
                    }
                    for (s in h)(o = a[s]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), u && (n[s] = 1);
                    !this._firstPT && this._initted && f && this._enabled(!1, !1)
                }
            }
            return l
        }, n.invalidate = function() {
            return this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -y, this.render(Math.min(0, -this._delay))), this
        }, n._enabled = function(t, e) {
            if (g || m.wake(), t && this._gc) {
                var i, r = this._targets;
                if (r)
                    for (i = r.length; - 1 < --i;) this._siblings[i] = tt(r[i], this, !0);
                else this._siblings = tt(this.target, this, !0)
            }
            return D.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, z.to = function(t, e, i) {
            return new z(t, e, i)
        }, z.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new z(t, e, i)
        }, z.fromTo = function(t, e, i, r) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new z(t, e, r)
        }, z.delayedCall = function(t, e, i, r, n) {
            return new z(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: n,
                overwrite: 0
            })
        }, z.set = function(t, e) {
            return new z(t, 0, e)
        }, z.getTweensOf = function(t, e) {
            if (null == t) return [];
            var i, r, n, s;
            if (t = "string" != typeof t ? t : z.selector(t) || t, (T(t) || L(t)) && "number" != typeof t[0]) {
                for (i = t.length, r = []; - 1 < --i;) r = r.concat(z.getTweensOf(t[i], e));
                for (i = r.length; - 1 < --i;)
                    for (s = r[i], n = i; - 1 < --n;) s === r[n] && r.splice(i, 1)
            } else if (t._gsTweenID)
                for (i = (r = tt(t).concat()).length; - 1 < --i;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
            return r || []
        }, z.killTweensOf = z.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var r = z.getTweensOf(t, e), n = r.length; - 1 < --n;) r[n]._kill(i, t)
        };
        var nt = C("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype
        }, !0);
        if (n = nt.prototype, nt.version = "1.19.0", nt.API = 2, n._firstPT = null, n._addTween = V, n.setRatio = Z, n._kill = function(t) {
            var e, i = this._overwriteProps,
                r = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = [];
            else
                for (e = i.length; - 1 < --e;) null != t[i[e]] && i.splice(e, 1);
            for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
            return !1
        }, n._mod = n._roundProps = function(t) {
            for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
        }, z._onPluginEvent = function(t, e) {
            var i, r, n, s, o, a = e._firstPT;
            if ("_onInitAllProps" === t) {
                for (; a;) {
                    for (o = a._next, r = n; r && r.pr > a.pr;) r = r._next;
                    (a._prev = r ? r._prev : s) ? a._prev._next = a: n = a, (a._next = r) ? r._prev = a : s = a, a = o
                }
                a = e._firstPT = n
            }
            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
            return i
        }, nt.activate = function(t) {
            for (var e = t.length; - 1 < --e;) t[e].API === nt.API && (W[(new t[e])._propName] = t[e]);
            return !0
        }, a.plugin = function(t) {
            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
            var e, i = t.propName,
                r = t.priority || 0,
                n = t.overwriteProps,
                s = {
                    init: "_onInitTween",
                    set: "setRatio",
                    kill: "_kill",
                    round: "_mod",
                    mod: "_mod",
                    initAll: "_onInitAllProps"
                },
                o = C("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                    nt.call(this, i, r), this._overwriteProps = n || []
                }, !0 === t.global),
                a = o.prototype = new nt(i);
            for (e in (a.constructor = o).API = t.API, s) "function" == typeof t[e] && (a[s[e]] = t[e]);
            return o.version = t.version, nt.activate([o]), o
        }, e = p._gsQueue) {
            for (i = 0; i < e.length; i++) e[i]();
            for (n in w) w[n].func || p.console.log("GSAP encountered missing dependency: " + n)
        }
        g = !1
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t, e, i) {
        "undefined" != typeof module && module.exports ? module.exports = i() : "function" == typeof define && define.amd ? define("bowser", i) : t.bowser = i()
    }(this, 0, function() {
        function o(i) {
            function t(t) {
                var e = i.match(t);
                return e && 1 < e.length && e[1] || ""
            }

            function e(t) {
                var e = i.match(t);
                return e && 1 < e.length && e[2] || ""
            }
            var r, n = t(/(ipod|iphone|ipad)/i).toLowerCase(),
                s = !/like android/i.test(i) && /android/i.test(i),
                o = /nexus\s*[0-6]\s*/i.test(i),
                a = !o && /nexus\s*[0-9]+/i.test(i),
                l = /CrOS/.test(i),
                h = /silk/i.test(i),
                u = /sailfish/i.test(i),
                c = /tizen/i.test(i),
                p = /(web|hpw)(o|0)s/i.test(i),
                f = /windows phone/i.test(i),
                d = (/SamsungBrowser/i.test(i), !f && /windows/i.test(i)),
                _ = !n && !h && /macintosh/i.test(i),
                m = !s && !u && !c && !p && /linux/i.test(i),
                g = e(/edg([ea]|ios)\/(\d+(\.\d+)?)/i),
                v = t(/version\/(\d+(\.\d+)?)/i),
                y = /tablet/i.test(i) && !/tablet pc/i.test(i),
                x = !y && /[^-]mobi/i.test(i),
                T = /xbox/i.test(i);
            /opera/i.test(i) ? r = {
                name: "Opera",
                opera: k,
                version: v || t(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)
            } : /opr\/|opios/i.test(i) ? r = {
                name: "Opera",
                opera: k,
                version: t(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i) || v
            } : /SamsungBrowser/i.test(i) ? r = {
                name: "Samsung Internet for Android",
                samsungBrowser: k,
                version: v || t(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /Whale/i.test(i) ? r = {
                name: "NAVER Whale browser",
                whale: k,
                version: t(/(?:whale)[\s\/](\d+(?:\.\d+)+)/i)
            } : /MZBrowser/i.test(i) ? r = {
                name: "MZ Browser",
                mzbrowser: k,
                version: t(/(?:MZBrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /coast/i.test(i) ? r = {
                name: "Opera Coast",
                coast: k,
                version: v || t(/(?:coast)[\s\/](\d+(\.\d+)?)/i)
            } : /focus/i.test(i) ? r = {
                name: "Focus",
                focus: k,
                version: t(/(?:focus)[\s\/](\d+(?:\.\d+)+)/i)
            } : /yabrowser/i.test(i) ? r = {
                name: "Yandex Browser",
                yandexbrowser: k,
                version: v || t(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)
            } : /ucbrowser/i.test(i) ? r = {
                name: "UC Browser",
                ucbrowser: k,
                version: t(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)
            } : /mxios/i.test(i) ? r = {
                name: "Maxthon",
                maxthon: k,
                version: t(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)
            } : /epiphany/i.test(i) ? r = {
                name: "Epiphany",
                epiphany: k,
                version: t(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)
            } : /puffin/i.test(i) ? r = {
                name: "Puffin",
                puffin: k,
                version: t(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)
            } : /sleipnir/i.test(i) ? r = {
                name: "Sleipnir",
                sleipnir: k,
                version: t(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)
            } : /k-meleon/i.test(i) ? r = {
                name: "K-Meleon",
                kMeleon: k,
                version: t(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)
            } : f ? (r = {
                name: "Windows Phone",
                osname: "Windows Phone",
                windowsphone: k
            }).version = g ? (r.msedge = k, g) : (r.msie = k, t(/iemobile\/(\d+(\.\d+)?)/i)) : /msie|trident/i.test(i) ? r = {
                name: "Internet Explorer",
                msie: k,
                version: t(/(?:msie |rv:)(\d+(\.\d+)?)/i)
            } : l ? r = {
                name: "Chrome",
                osname: "Chrome OS",
                chromeos: k,
                chromeBook: k,
                chrome: k,
                version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : /edg([ea]|ios)/i.test(i) ? r = {
                name: "Microsoft Edge",
                msedge: k,
                version: g
            } : /vivaldi/i.test(i) ? r = {
                name: "Vivaldi",
                vivaldi: k,
                version: t(/vivaldi\/(\d+(\.\d+)?)/i) || v
            } : u ? r = {
                name: "Sailfish",
                osname: "Sailfish OS",
                sailfish: k,
                version: t(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
            } : /seamonkey\//i.test(i) ? r = {
                name: "SeaMonkey",
                seamonkey: k,
                version: t(/seamonkey\/(\d+(\.\d+)?)/i)
            } : /firefox|iceweasel|fxios/i.test(i) ? (r = {
                name: "Firefox",
                firefox: k,
                version: t(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)
            }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(i) && (r.firefoxos = k, r.osname = "Firefox OS")) : h ? r = {
                name: "Amazon Silk",
                silk: k,
                version: t(/silk\/(\d+(\.\d+)?)/i)
            } : /phantom/i.test(i) ? r = {
                name: "PhantomJS",
                phantom: k,
                version: t(/phantomjs\/(\d+(\.\d+)?)/i)
            } : /slimerjs/i.test(i) ? r = {
                name: "SlimerJS",
                slimer: k,
                version: t(/slimerjs\/(\d+(\.\d+)?)/i)
            } : /blackberry|\bbb\d+/i.test(i) || /rim\stablet/i.test(i) ? r = {
                name: "BlackBerry",
                osname: "BlackBerry OS",
                blackberry: k,
                version: v || t(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
            } : p ? (r = {
                name: "WebOS",
                osname: "WebOS",
                webos: k,
                version: v || t(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
            }, /touchpad\//i.test(i) && (r.touchpad = k)) : /bada/i.test(i) ? r = {
                name: "Bada",
                osname: "Bada",
                bada: k,
                version: t(/dolfin\/(\d+(\.\d+)?)/i)
            } : c ? r = {
                name: "Tizen",
                osname: "Tizen",
                tizen: k,
                version: t(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || v
            } : /qupzilla/i.test(i) ? r = {
                name: "QupZilla",
                qupzilla: k,
                version: t(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i) || v
            } : /chromium/i.test(i) ? r = {
                name: "Chromium",
                chromium: k,
                version: t(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i) || v
            } : /chrome|crios|crmo/i.test(i) ? r = {
                name: "Chrome",
                chrome: k,
                version: t(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
            } : s ? r = {
                name: "Android",
                version: v
            } : /safari|applewebkit/i.test(i) ? (r = {
                name: "Safari",
                safari: k
            }, v && (r.version = v)) : n ? (r = {
                name: "iphone" == n ? "iPhone" : "ipad" == n ? "iPad" : "iPod"
            }, v && (r.version = v)) : r = /googlebot/i.test(i) ? {
                name: "Googlebot",
                googlebot: k,
                version: t(/googlebot\/(\d+(\.\d+))/i) || v
            } : {
                name: t(/^(.*)\/(.*) /),
                version: e(/^(.*)\/(.*) /)
            }, !r.msedge && /(apple)?webkit/i.test(i) ? (/(apple)?webkit\/537\.36/i.test(i) ? (r.name = r.name || "Blink", r.blink = k) : (r.name = r.name || "Webkit", r.webkit = k), !r.version && v && (r.version = v)) : !r.opera && /gecko\//i.test(i) && (r.name = r.name || "Gecko", r.gecko = k, r.version = r.version || t(/gecko\/(\d+(\.\d+)?)/i)), r.windowsphone || !s && !r.silk ? !r.windowsphone && n ? (r[n] = k, r.ios = k, r.osname = "iOS") : _ ? (r.mac = k, r.osname = "macOS") : T ? (r.xbox = k, r.osname = "Xbox") : d ? (r.windows = k, r.osname = "Windows") : m && (r.linux = k, r.osname = "Linux") : (r.android = k, r.osname = "Android");
            var w = "";
            r.windows ? w = function(t) {
                switch (t) {
                    case "NT":
                        return "NT";
                    case "XP":
                        return "XP";
                    case "NT 5.0":
                        return "2000";
                    case "NT 5.1":
                        return "XP";
                    case "NT 5.2":
                        return "2003";
                    case "NT 6.0":
                        return "Vista";
                    case "NT 6.1":
                        return "7";
                    case "NT 6.2":
                        return "8";
                    case "NT 6.3":
                        return "8.1";
                    case "NT 10.0":
                        return "10";
                    default:
                        return
                }
            }(t(/Windows ((NT|XP)( \d\d?.\d)?)/i)) : r.windowsphone ? w = t(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : r.mac ? w = (w = t(/Mac OS X (\d+([_\.\s]\d+)*)/i)).replace(/[_\s]/g, ".") : n ? w = (w = t(/os (\d+([_\s]\d+)*) like mac os x/i)).replace(/[_\s]/g, ".") : s ? w = t(/android[ \/-](\d+(\.\d+)*)/i) : r.webos ? w = t(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : r.blackberry ? w = t(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : r.bada ? w = t(/bada\/(\d+(\.\d+)*)/i) : r.tizen && (w = t(/tizen[\/\s](\d+(\.\d+)*)/i)), w && (r.osversion = w);
            var b = !r.windows && w.split(".")[0];
            return y || a || "ipad" == n || s && (3 == b || 4 <= b && !x) || r.silk ? r.tablet = k : (x || "iphone" == n || "ipod" == n || s || o || r.blackberry || r.webos || r.bada) && (r.mobile = k), r.msedge || r.msie && 10 <= r.version || r.yandexbrowser && 15 <= r.version || r.vivaldi && 1 <= r.version || r.chrome && 20 <= r.version || r.samsungBrowser && 4 <= r.version || r.whale && 1 === C([r.version, "1.0"]) || r.mzbrowser && 1 === C([r.version, "6.0"]) || r.focus && 1 === C([r.version, "1.0"]) || r.firefox && 20 <= r.version || r.safari && 6 <= r.version || r.opera && 10 <= r.version || r.ios && r.osversion && 6 <= r.osversion.split(".")[0] || r.blackberry && 10.1 <= r.version || r.chromium && 20 <= r.version ? r.a = k : r.msie && r.version < 10 || r.chrome && r.version < 20 || r.firefox && r.version < 20 || r.safari && r.version < 6 || r.opera && r.version < 10 || r.ios && r.osversion && r.osversion.split(".")[0] < 6 || r.chromium && r.version < 20 ? r.c = k : r.x = k, r
        }

        function r(t) {
            return t.split(".").length
        }

        function n(t, e) {
            var i, r = [];
            if (Array.prototype.map) return Array.prototype.map.call(t, e);
            for (i = 0; i < t.length; i++) r.push(e(t[i]));
            return r
        }

        function C(t) {
            for (var i = Math.max(r(t[0]), r(t[1])), e = n(t, function(t) {
                var e = i - r(t);
                return n((t += new Array(e + 1).join(".0")).split("."), function(t) {
                    return new Array(20 - t.length).join("0") + t
                }).reverse()
            }); 0 <= --i;) {
                if (e[0][i] > e[1][i]) return 1;
                if (e[0][i] !== e[1][i]) return -1;
                if (0 === i) return 0
            }
        }

        function s(t, e, i) {
            var r = a;
            "string" == typeof e && (i = e, e = void 0), void 0 === e && (e = !1), i && (r = o(i));
            var n = "" + r.version;
            for (var s in t)
                if (t.hasOwnProperty(s) && r[s]) {
                    if ("string" != typeof t[s]) throw new Error("Browser version in the minVersion map should be a string: " + s + ": " + String(t));
                    return C([n, t[s]]) < 0
                }
            return e
        }
        var k = !0,
            a = o("undefined" != typeof navigator && navigator.userAgent || "");
        return a.test = function(t) {
            for (var e = 0; e < t.length; ++e) {
                var i = t[e];
                if ("string" == typeof i && i in a) return !0
            }
            return !1
        }, a.isUnsupportedBrowser = s, a.compareVersions = C, a.check = function(t, e, i) {
            return !s(t, e, i)
        }, a._detect = o, a.detect = o, a
    });