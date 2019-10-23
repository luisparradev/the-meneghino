! function(e) {
    var t = {};

    function i(s) {
        if (t[s]) return t[s].exports;
        var n = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        return e[s].call(n.exports, n, n.exports, i), n.l = !0, n.exports
    }
    i.m = e, i.c = t, i.d = function(e, t, s) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var n in e) i.d(s, n, function(t) {
                return e[t]
            }.bind(null, n));
        return s
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/app/plugins/emergence-component-staffpicks/", i(i.s = 2)
}([function(e, t, i) {}, function(e, t, i) {}, function(e, t, i) {
    "use strict";
    i.r(t);
    var s = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        n = "undefined" == typeof window ? {
            document: s,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window;
    class r {
        constructor(e) {
            const t = this;
            for (let i = 0; i < e.length; i += 1) t[i] = e[i];
            return t.length = e.length, this
        }
    }

    function o(e, t) {
        const i = [];
        let o = 0;
        if (e && !t && e instanceof r) return e;
        if (e)
            if ("string" == typeof e) {
                let n, r;
                const a = e.trim();
                if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
                    let e = "div";
                    for (0 === a.indexOf("<li") && (e = "ul"), 0 === a.indexOf("<tr") && (e = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (e = "tr"), 0 === a.indexOf("<tbody") && (e = "table"), 0 === a.indexOf("<option") && (e = "select"), (r = s.createElement(e)).innerHTML = a, o = 0; o < r.childNodes.length; o += 1) i.push(r.childNodes[o])
                } else
                    for (n = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || s).querySelectorAll(e.trim()) : [s.getElementById(e.trim().split("#")[1])], o = 0; o < n.length; o += 1) n[o] && i.push(n[o])
            } else if (e.nodeType || e === n || e === s) i.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (o = 0; o < e.length; o += 1) i.push(e[o]);
        return new r(i)
    }

    function a(e) {
        const t = [];
        for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }
    o.fn = r.prototype, o.Class = r, o.Dom7 = r;
    "resize scroll".split(" ");
    const l = {
        addClass: function(e) {
            if (void 0 === e) return this;
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[e]);
            return this
        },
        removeClass: function(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[e]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[e]);
            return this
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let i = 0; i < this.length; i += 1)
                if (2 === arguments.length) this[i].setAttribute(e, t);
                else
                    for (const t in e) this[i][t] = e[t], this[i].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            let i;
            if (void 0 !== t) {
                for (let s = 0; s < this.length; s += 1)(i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                const t = i.getAttribute(`data-${e}`);
                return t || void 0
            }
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e = `${e}ms`);
            for (let t = 0; t < this.length; t += 1) {
                const i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        },
        on: function(...e) {
            let [t, i, s, n] = e;

            function r(e) {
                const t = e.target;
                if (!t) return;
                const n = e.target.dom7EventData || [];
                if (n.indexOf(e) < 0 && n.unshift(e), o(t).is(i)) s.apply(t, n);
                else {
                    const e = o(t).parents();
                    for (let t = 0; t < e.length; t += 1) o(e[t]).is(i) && s.apply(e[t], n)
                }
            }

            function a(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
            }
            "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
            const l = t.split(" ");
            let d;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (i)
                    for (d = 0; d < l.length; d += 1) {
                        const e = l[d];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: s,
                            proxyListener: r
                        }), t.addEventListener(e, r, n)
                    } else
                    for (d = 0; d < l.length; d += 1) {
                        const e = l[d];
                        t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                            listener: s,
                            proxyListener: a
                        }), t.addEventListener(e, a, n)
                    }
            }
            return this
        },
        off: function(...e) {
            let [t, i, s, n] = e;
            "function" == typeof e[1] && ([t, s, n] = e, i = void 0), n || (n = !1);
            const r = t.split(" ");
            for (let e = 0; e < r.length; e += 1) {
                const t = r[e];
                for (let e = 0; e < this.length; e += 1) {
                    const r = this[e];
                    let o;
                    if (!i && r.dom7Listeners ? o = r.dom7Listeners[t] : i && r.dom7LiveListeners && (o = r.dom7LiveListeners[t]), o && o.length)
                        for (let e = o.length - 1; e >= 0; e -= 1) {
                            const i = o[e];
                            s && i.listener === s ? (r.removeEventListener(t, i.proxyListener, n), o.splice(e, 1)) : s && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === s ? (r.removeEventListener(t, i.proxyListener, n), o.splice(e, 1)) : s || (r.removeEventListener(t, i.proxyListener, n), o.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = e[0].split(" "),
                i = e[1];
            for (let r = 0; r < t.length; r += 1) {
                const o = t[r];
                for (let t = 0; t < this.length; t += 1) {
                    const r = this[t];
                    let a;
                    try {
                        a = new n.CustomEvent(o, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (a = s.createEvent("Event")).initEvent(o, !0, !0), a.detail = i
                    }
                    r.dom7EventData = e.filter((e, t) => t > 0), r.dispatchEvent(a), r.dom7EventData = [], delete r.dom7EventData
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = ["webkitTransitionEnd", "transitionend"],
                i = this;
            let s;

            function n(r) {
                if (r.target === this)
                    for (e.call(this, r), s = 0; s < t.length; s += 1) i.off(t[s], n)
            }
            if (e)
                for (s = 0; s < t.length; s += 1) i.on(t[s], n);
            return this
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (this.length > 0) {
                const e = this[0],
                    t = e.getBoundingClientRect(),
                    i = s.body,
                    r = e.clientTop || i.clientTop || 0,
                    o = e.clientLeft || i.clientLeft || 0,
                    a = e === n ? n.scrollY : e.scrollTop,
                    l = e === n ? n.scrollX : e.scrollLeft;
                return {
                    top: t.top + a - r,
                    left: t.left + l - o
                }
            }
            return null
        },
        css: function(e, t) {
            let i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1)
                        for (let t in e) this[i].style[t] = e[t];
                    return this
                }
                if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (let t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            const t = this[0];
            let i, a;
            if (!t || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (t.matches) return t.matches(e);
                if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                if (t.msMatchesSelector) return t.msMatchesSelector(e);
                for (i = o(e), a = 0; a < i.length; a += 1)
                    if (i[a] === t) return !0;
                return !1
            }
            if (e === s) return t === s;
            if (e === n) return t === n;
            if (e.nodeType || e instanceof r) {
                for (i = e.nodeType ? [e] : e, a = 0; a < i.length; a += 1)
                    if (i[a] === t) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            let i;
            return new r(e > t - 1 ? [] : e < 0 ? (i = t + e) < 0 ? [] : [this[i]] : [this[e]])
        },
        append: function(...e) {
            let t;
            for (let i = 0; i < e.length; i += 1) {
                t = e[i];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const i = s.createElement("div");
                        for (i.innerHTML = t; i.firstChild;) this[e].appendChild(i.firstChild)
                    } else if (t instanceof r)
                        for (let i = 0; i < t.length; i += 1) this[e].appendChild(t[i]);
                    else this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            let t, i;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    const n = s.createElement("div");
                    for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
                } else if (e instanceof r)
                    for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && o(this[0].nextElementSibling).is(e) ? new r([this[0].nextElementSibling]) : new r([]) : this[0].nextElementSibling ? new r([this[0].nextElementSibling]) : new r([]) : new r([])
        },
        nextAll: function(e) {
            const t = [];
            let i = this[0];
            if (!i) return new r([]);
            for (; i.nextElementSibling;) {
                const s = i.nextElementSibling;
                e ? o(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return new r(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && o(t.previousElementSibling).is(e) ? new r([t.previousElementSibling]) : new r([]) : t.previousElementSibling ? new r([t.previousElementSibling]) : new r([])
            }
            return new r([])
        },
        prevAll: function(e) {
            const t = [];
            let i = this[0];
            if (!i) return new r([]);
            for (; i.previousElementSibling;) {
                const s = i.previousElementSibling;
                e ? o(s).is(e) && t.push(s) : t.push(s), i = s
            }
            return new r(t)
        },
        parent: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? o(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
            return o(a(t))
        },
        parents: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                let s = this[i].parentNode;
                for (; s;) e ? o(s).is(e) && t.push(s) : t.push(s), s = s.parentNode
            }
            return o(a(t))
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? new r([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const s = this[i].querySelectorAll(e);
                for (let e = 0; e < s.length; e += 1) t.push(s[e])
            }
            return new r(t)
        },
        children: function(e) {
            const t = [];
            for (let i = 0; i < this.length; i += 1) {
                const s = this[i].childNodes;
                for (let i = 0; i < s.length; i += 1) e ? 1 === s[i].nodeType && o(s[i]).is(e) && t.push(s[i]) : 1 === s[i].nodeType && t.push(s[i])
            }
            return new r(a(t))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function(...e) {
            const t = this;
            let i, s;
            for (i = 0; i < e.length; i += 1) {
                const n = o(e[i]);
                for (s = 0; s < n.length; s += 1) t[t.length] = n[s], t.length += 1
            }
            return t
        },
        styles: function() {
            return this[0] ? n.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(l).forEach(e => {
        o.fn[e] = l[e]
    });
    const d = {
            deleteProps(e) {
                const t = e;
                Object.keys(t).forEach(e => {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            }, nextTick: (e, t = 0) => setTimeout(e, t), now: () => Date.now(), getTranslate(e, t = "x") {
                let i, s, r;
                const o = n.getComputedStyle(e, null);
                return n.WebKitCSSMatrix ? ((s = o.transform || o.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new n.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = n.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
            }, parseUrlQuery(e) {
                const t = {};
                let i, s, r, o, a = e || n.location.href;
                if ("string" == typeof a && a.length)
                    for (o = (s = (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "").split("&").filter(e => "" !== e)).length, i = 0; i < o; i += 1) r = s[i].replace(/#\S+/g, "").split("="), t[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
                return t
            }, isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object, extend(...e) {
                const t = Object(e[0]);
                for (let i = 1; i < e.length; i += 1) {
                    const s = e[i];
                    if (null != s) {
                        const e = Object.keys(Object(s));
                        for (let i = 0, n = e.length; i < n; i += 1) {
                            const n = e[i],
                                r = Object.getOwnPropertyDescriptor(s, n);
                            void 0 !== r && r.enumerable && (d.isObject(t[n]) && d.isObject(s[n]) ? d.extend(t[n], s[n]) : !d.isObject(t[n]) && d.isObject(s[n]) ? (t[n] = {}, d.extend(t[n], s[n])) : t[n] = s[n])
                        }
                    }
                }
                return t
            }
        },
        c = function() {
            const e = s.createElement("div");
            return {
                touch: n.Modernizr && !0 === n.Modernizr.touch || !!(n.navigator.maxTouchPoints > 0 || "ontouchstart" in n || n.DocumentTouch && s instanceof n.DocumentTouch),
                pointerEvents: !!(n.navigator.pointerEnabled || n.PointerEvent || "maxTouchPoints" in n.navigator && n.navigator.maxTouchPoints > 0),
                prefixedPointerEvents: !!n.navigator.msPointerEnabled,
                transition: function() {
                    const t = e.style;
                    return "transition" in t || "webkitTransition" in t || "MozTransition" in t
                }(),
                transforms3d: n.Modernizr && !0 === n.Modernizr.csstransforms3d || function() {
                    const t = e.style;
                    return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t
                }(),
                flexbox: function() {
                    const t = e.style,
                        i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
                    for (let e = 0; e < i.length; e += 1)
                        if (i[e] in t) return !0;
                    return !1
                }(),
                observer: "MutationObserver" in n || "WebkitMutationObserver" in n,
                passiveListener: function() {
                    let e = !1;
                    try {
                        const t = Object.defineProperty({}, "passive", {
                            get() {
                                e = !0
                            }
                        });
                        n.addEventListener("testPassiveListener", null, t)
                    } catch (e) {}
                    return e
                }(),
                gestures: "ongesturestart" in n
            }
        }(),
        u = function() {
            return {
                isIE: !!n.navigator.userAgent.match(/Trident/g) || !!n.navigator.userAgent.match(/MSIE/g),
                isEdge: !!n.navigator.userAgent.match(/Edge/g),
                isSafari: function() {
                    const e = n.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent)
            }
        }();
    class p {
        constructor(e = {}) {
            const t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(e => {
                t.on(e, t.params.on[e])
            })
        }
        on(e, t, i) {
            const s = this;
            if ("function" != typeof t) return s;
            const n = i ? "unshift" : "push";
            return e.split(" ").forEach(e => {
                s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][n](t)
            }), s
        }
        once(e, t, i) {
            const s = this;
            if ("function" != typeof t) return s;

            function n(...i) {
                t.apply(s, i), s.off(e, n), n.f7proxy && delete n.f7proxy
            }
            return n.f7proxy = t, s.on(e, n, i)
        }
        off(e, t) {
            const i = this;
            return i.eventsListeners ? (e.split(" ").forEach(e => {
                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((s, n) => {
                    (s === t || s.f7proxy && s.f7proxy === t) && i.eventsListeners[e].splice(n, 1)
                })
            }), i) : i
        }
        emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let i, s, n;
            return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], s = e.slice(1, e.length), n = t) : (i = e[0].events, s = e[0].data, n = e[0].context || t), (Array.isArray(i) ? i : i.split(" ")).forEach(e => {
                if (t.eventsListeners && t.eventsListeners[e]) {
                    const i = [];
                    t.eventsListeners[e].forEach(e => {
                        i.push(e)
                    }), i.forEach(e => {
                        e.apply(n, s)
                    })
                }
            }), t
        }
        useModulesParams(e) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach(i => {
                const s = t.modules[i];
                s.params && d.extend(e, s.params)
            })
        }
        useModules(e = {}) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach(i => {
                const s = t.modules[i],
                    n = e[i] || {};
                s.instance && Object.keys(s.instance).forEach(e => {
                    const i = s.instance[e];
                    t[e] = "function" == typeof i ? i.bind(t) : i
                }), s.on && t.on && Object.keys(s.on).forEach(e => {
                    t.on(e, s.on[e])
                }), s.create && s.create.bind(t)(n)
            })
        }
        static set components(e) {
            this.use && this.use(e)
        }
        static installModule(e, ...t) {
            const i = this;
            i.prototype.modules || (i.prototype.modules = {});
            const s = e.name || `${Object.keys(i.prototype.modules).length}_${d.now()}`;
            return i.prototype.modules[s] = e, e.proto && Object.keys(e.proto).forEach(t => {
                i.prototype[t] = e.proto[t]
            }), e.static && Object.keys(e.static).forEach(t => {
                i[t] = e.static[t]
            }), e.install && e.install.apply(i, t), i
        }
        static use(e, ...t) {
            const i = this;
            return Array.isArray(e) ? (e.forEach(e => i.installModule(e)), i) : i.installModule(e, ...t)
        }
    }
    var h = {
        updateSize: function() {
            const e = this;
            let t, i;
            const s = e.$el;
            t = void 0 !== e.params.width ? e.params.width : s[0].clientWidth, i = void 0 !== e.params.height ? e.params.height : s[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(s.css("padding-left"), 10) - parseInt(s.css("padding-right"), 10), i = i - parseInt(s.css("padding-top"), 10) - parseInt(s.css("padding-bottom"), 10), d.extend(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i
            }))
        },
        updateSlides: function() {
            const e = this,
                t = e.params,
                {
                    $wrapperEl: i,
                    size: s,
                    rtlTranslate: r,
                    wrongRTL: o
                } = e,
                a = e.virtual && t.virtual.enabled,
                l = a ? e.virtual.slides.length : e.slides.length,
                u = i.children(`.${e.params.slideClass}`),
                p = a ? e.virtual.slides.length : u.length;
            let h = [];
            const f = [],
                m = [];
            let v = t.slidesOffsetBefore;
            "function" == typeof v && (v = t.slidesOffsetBefore.call(e));
            let g = t.slidesOffsetAfter;
            "function" == typeof g && (g = t.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length,
                T = e.snapGrid.length;
            let S, x, b = t.spaceBetween,
                C = -v,
                E = 0,
                y = 0;
            if (void 0 === s) return;
            "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * s), e.virtualSize = -b, r ? u.css({
                marginLeft: "",
                marginTop: ""
            }) : u.css({
                marginRight: "",
                marginBottom: ""
            }), t.slidesPerColumn > 1 && (S = Math.floor(p / t.slidesPerColumn) === p / e.params.slidesPerColumn ? p : Math.ceil(p / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (S = Math.max(S, t.slidesPerView * t.slidesPerColumn)));
            const M = t.slidesPerColumn,
                P = S / M,
                k = Math.floor(p / t.slidesPerColumn);
            for (let i = 0; i < p; i += 1) {
                x = 0;
                const r = u.eq(i);
                if (t.slidesPerColumn > 1) {
                    let s, n, o;
                    "column" === t.slidesPerColumnFill ? (o = i - (n = Math.floor(i / M)) * M, (n > k || n === k && o === M - 1) && (o += 1) >= M && (o = 0, n += 1), s = n + o * S / M, r.css({
                        "-webkit-box-ordinal-group": s,
                        "-moz-box-ordinal-group": s,
                        "-ms-flex-order": s,
                        "-webkit-order": s,
                        order: s
                    })) : n = i - (o = Math.floor(i / P)) * P, r.css(`margin-${e.isHorizontal()?"top":"left"}`, 0 !== o && t.spaceBetween && `${t.spaceBetween}px`).attr("data-swiper-column", n).attr("data-swiper-row", o)
                }
                if ("none" !== r.css("display")) {
                    if ("auto" === t.slidesPerView) {
                        const i = n.getComputedStyle(r[0], null),
                            s = r[0].style.transform,
                            o = r[0].style.webkitTransform;
                        if (s && (r[0].style.transform = "none"), o && (r[0].style.webkitTransform = "none"), t.roundLengths) x = e.isHorizontal() ? r.outerWidth(!0) : r.outerHeight(!0);
                        else if (e.isHorizontal()) {
                            const e = parseFloat(i.getPropertyValue("width")),
                                t = parseFloat(i.getPropertyValue("padding-left")),
                                s = parseFloat(i.getPropertyValue("padding-right")),
                                n = parseFloat(i.getPropertyValue("margin-left")),
                                r = parseFloat(i.getPropertyValue("margin-right")),
                                o = i.getPropertyValue("box-sizing");
                            x = o && "border-box" === o ? e + n + r : e + t + s + n + r
                        } else {
                            const e = parseFloat(i.getPropertyValue("height")),
                                t = parseFloat(i.getPropertyValue("padding-top")),
                                s = parseFloat(i.getPropertyValue("padding-bottom")),
                                n = parseFloat(i.getPropertyValue("margin-top")),
                                r = parseFloat(i.getPropertyValue("margin-bottom")),
                                o = i.getPropertyValue("box-sizing");
                            x = o && "border-box" === o ? e + n + r : e + t + s + n + r
                        }
                        s && (r[0].style.transform = s), o && (r[0].style.webkitTransform = o), t.roundLengths && (x = Math.floor(x))
                    } else x = (s - (t.slidesPerView - 1) * b) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), u[i] && (e.isHorizontal() ? u[i].style.width = `${x}px` : u[i].style.height = `${x}px`);
                    u[i] && (u[i].swiperSlideSize = x), m.push(x), t.centeredSlides ? (C = C + x / 2 + E / 2 + b, 0 === E && 0 !== i && (C = C - s / 2 - b), 0 === i && (C = C - s / 2 - b), Math.abs(C) < .001 && (C = 0), t.roundLengths && (C = Math.floor(C)), y % t.slidesPerGroup == 0 && h.push(C), f.push(C)) : (t.roundLengths && (C = Math.floor(C)), y % t.slidesPerGroup == 0 && h.push(C), f.push(C), C = C + x + b), e.virtualSize += x + b, E = x, y += 1
                }
            }
            let L;
            if (e.virtualSize = Math.max(e.virtualSize, s) + g, r && o && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                width: `${e.virtualSize+t.spaceBetween}px`
            }), c.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({
                width: `${e.virtualSize+t.spaceBetween}px`
            }) : i.css({
                height: `${e.virtualSize+t.spaceBetween}px`
            })), t.slidesPerColumn > 1 && (e.virtualSize = (x + t.spaceBetween) * S, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({
                width: `${e.virtualSize+t.spaceBetween}px`
            }) : i.css({
                height: `${e.virtualSize+t.spaceBetween}px`
            }), t.centeredSlides)) {
                L = [];
                for (let i = 0; i < h.length; i += 1) {
                    let s = h[i];
                    t.roundLengths && (s = Math.floor(s)), h[i] < e.virtualSize + h[0] && L.push(s)
                }
                h = L
            }
            if (!t.centeredSlides) {
                L = [];
                for (let i = 0; i < h.length; i += 1) {
                    let n = h[i];
                    t.roundLengths && (n = Math.floor(n)), h[i] <= e.virtualSize - s && L.push(n)
                }
                h = L, Math.floor(e.virtualSize - s) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - s)
            }
            if (0 === h.length && (h = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? u.css({
                marginLeft: `${b}px`
            }) : u.css({
                marginRight: `${b}px`
            }) : u.css({
                marginBottom: `${b}px`
            })), t.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach(i => {
                    e += i + (t.spaceBetween ? t.spaceBetween : 0)
                }), (e -= t.spaceBetween) < s) {
                    const t = (s - e) / 2;
                    h.forEach((e, i) => {
                        h[i] = e - t
                    }), f.forEach((e, i) => {
                        f[i] = e + t
                    })
                }
            }
            d.extend(e, {
                slides: u,
                snapGrid: h,
                slidesGrid: f,
                slidesSizesGrid: m
            }), p !== l && e.emit("slidesLengthChange"), h.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== T && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
        },
        updateAutoHeight: function(e) {
            const t = this,
                i = [];
            let s, n = 0;
            if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                    const e = t.activeIndex + s;
                    if (e > t.slides.length) break;
                    i.push(t.slides.eq(e)[0])
                } else i.push(t.slides.eq(t.activeIndex)[0]);
            for (s = 0; s < i.length; s += 1)
                if (void 0 !== i[s]) {
                    const e = i[s].offsetHeight;
                    n = e > n ? e : n
                }
            n && t.$wrapperEl.css("height", `${n}px`)
        },
        updateSlidesOffset: function() {
            const e = this,
                t = e.slides;
            for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop
        },
        updateSlidesProgress: function(e = this && this.translate || 0) {
            const t = this,
                i = t.params,
                {
                    slides: s,
                    rtlTranslate: n
                } = t;
            if (0 === s.length) return;
            void 0 === s[0].swiperSlideOffset && t.updateSlidesOffset();
            let r = -e;
            n && (r = e), s.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < s.length; e += 1) {
                const o = s[e],
                    a = (r + (i.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);
                if (i.watchSlidesVisibility) {
                    const n = -(r - o.swiperSlideOffset),
                        a = n + t.slidesSizesGrid[e];
                    (n >= 0 && n < t.size || a > 0 && a <= t.size || n <= 0 && a >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(e), s.eq(e).addClass(i.slideVisibleClass))
                }
                o.progress = n ? -a : a
            }
            t.visibleSlides = o(t.visibleSlides)
        },
        updateProgress: function(e = this && this.translate || 0) {
            const t = this,
                i = t.params,
                s = t.maxTranslate() - t.minTranslate();
            let {
                progress: n,
                isBeginning: r,
                isEnd: o
            } = t;
            const a = r,
                l = o;
            0 === s ? (n = 0, r = !0, o = !0) : (r = (n = (e - t.minTranslate()) / s) <= 0, o = n >= 1), d.extend(t, {
                progress: n,
                isBeginning: r,
                isEnd: o
            }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !a && t.emit("reachBeginning toEdge"), o && !l && t.emit("reachEnd toEdge"), (a && !r || l && !o) && t.emit("fromEdge"), t.emit("progress", n)
        },
        updateSlidesClasses: function() {
            const e = this,
                {
                    slides: t,
                    params: i,
                    $wrapperEl: s,
                    activeIndex: n,
                    realIndex: r
                } = e,
                o = e.virtual && i.virtual.enabled;
            let a;
            t.removeClass(`${i.slideActiveClass} ${i.slideNextClass} ${i.slidePrevClass} ${i.slideDuplicateActiveClass} ${i.slideDuplicateNextClass} ${i.slideDuplicatePrevClass}`), (a = o ? e.$wrapperEl.find(`.${i.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n)).addClass(i.slideActiveClass), i.loop && (a.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(i.slideDuplicateActiveClass));
            let l = a.nextAll(`.${i.slideClass}`).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
            let d = a.prevAll(`.${i.slideClass}`).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children(`.${i.slideClass}:not(.${i.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass) : s.children(`.${i.slideClass}.${i.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            const t = this,
                i = t.rtlTranslate ? t.translate : -t.translate,
                {
                    slidesGrid: s,
                    snapGrid: n,
                    params: r,
                    activeIndex: o,
                    realIndex: a,
                    snapIndex: l
                } = t;
            let c, u = e;
            if (void 0 === u) {
                for (let e = 0; e < s.length; e += 1) void 0 !== s[e + 1] ? i >= s[e] && i < s[e + 1] - (s[e + 1] - s[e]) / 2 ? u = e : i >= s[e] && i < s[e + 1] && (u = e + 1) : i >= s[e] && (u = e);
                r.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
            }
            if ((c = n.indexOf(i) >= 0 ? n.indexOf(i) : Math.floor(u / r.slidesPerGroup)) >= n.length && (c = n.length - 1), u === o) return void(c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
            d.extend(t, {
                snapIndex: c,
                realIndex: p,
                previousIndex: o,
                activeIndex: u
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), a !== p && t.emit("realIndexChange"), t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this,
                i = t.params,
                s = o(e.target).closest(`.${i.slideClass}`)[0];
            let n = !1;
            if (s)
                for (let e = 0; e < t.slides.length; e += 1) t.slides[e] === s && (n = !0);
            if (!s || !n) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(o(s).attr("data-swiper-slide-index"), 10) : t.clickedIndex = o(s).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var f = {
        getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
            const {
                params: t,
                rtlTranslate: i,
                translate: s,
                $wrapperEl: n
            } = this;
            if (t.virtualTranslate) return i ? -s : s;
            let r = d.getTranslate(n[0], e);
            return i && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            const i = this,
                {
                    rtlTranslate: s,
                    params: n,
                    $wrapperEl: r,
                    progress: o
                } = i;
            let a, l = 0,
                d = 0;
            i.isHorizontal() ? l = s ? -e : e : d = e, n.roundLengths && (l = Math.floor(l), d = Math.floor(d)), n.virtualTranslate || (c.transforms3d ? r.transform(`translate3d(${l}px, ${d}px, 0px)`) : r.transform(`translate(${l}px, ${d}px)`)), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : d;
            const u = i.maxTranslate() - i.minTranslate();
            (a = 0 === u ? 0 : (e - i.minTranslate()) / u) !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var m = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        },
        transitionStart: function(e = !0, t) {
            const i = this,
                {
                    activeIndex: s,
                    params: n,
                    previousIndex: r
                } = i;
            n.autoHeight && i.updateAutoHeight();
            let o = t;
            if (o || (o = s > r ? "next" : s < r ? "prev" : "reset"), i.emit("transitionStart"), e && s !== r) {
                if ("reset" === o) return void i.emit("slideResetTransitionStart");
                i.emit("slideChangeTransitionStart"), "next" === o ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e = !0, t) {
            const i = this,
                {
                    activeIndex: s,
                    previousIndex: n
                } = i;
            i.animating = !1, i.setTransition(0);
            let r = t;
            if (r || (r = s > n ? "next" : s < n ? "prev" : "reset"), i.emit("transitionEnd"), e && s !== n) {
                if ("reset" === r) return void i.emit("slideResetTransitionEnd");
                i.emit("slideChangeTransitionEnd"), "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
            }
        }
    };
    var v = {
        slideTo: function(e = 0, t = this.params.speed, i = !0, s) {
            const n = this;
            let r = e;
            r < 0 && (r = 0);
            const {
                params: o,
                snapGrid: a,
                slidesGrid: l,
                previousIndex: d,
                activeIndex: u,
                rtlTranslate: p
            } = n;
            if (n.animating && o.preventInteractionOnTransition) return !1;
            let h = Math.floor(r / o.slidesPerGroup);
            h >= a.length && (h = a.length - 1), (u || o.initialSlide || 0) === (d || 0) && i && n.emit("beforeSlideChangeStart");
            const f = -a[h];
            if (n.updateProgress(f), o.normalizeSlideIndex)
                for (let e = 0; e < l.length; e += 1) - Math.floor(100 * f) >= Math.floor(100 * l[e]) && (r = e);
            if (n.initialized && r !== u) {
                if (!n.allowSlideNext && f < n.translate && f < n.minTranslate()) return !1;
                if (!n.allowSlidePrev && f > n.translate && f > n.maxTranslate() && (u || 0) !== r) return !1
            }
            let m;
            return m = r > u ? "next" : r < u ? "prev" : "reset", p && -f === n.translate || !p && f === n.translate ? (n.updateActiveIndex(r), o.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== o.effect && n.setTranslate(f), "reset" !== m && (n.transitionStart(i, m), n.transitionEnd(i, m)), !1) : (0 !== t && c.transition ? (n.setTransition(t), n.setTranslate(f), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, m), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(i, m))
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))) : (n.setTransition(0), n.setTranslate(f), n.updateActiveIndex(r), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, s), n.transitionStart(i, m), n.transitionEnd(i, m)), !0)
        },
        slideToLoop: function(e = 0, t = this.params.speed, i = !0, s) {
            const n = this;
            let r = e;
            return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, i, s)
        },
        slideNext: function(e = this.params.speed, t = !0, i) {
            const s = this,
                {
                    params: n,
                    animating: r
                } = s;
            return n.loop ? !r && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, s.slideTo(s.activeIndex + n.slidesPerGroup, e, t, i)) : s.slideTo(s.activeIndex + n.slidesPerGroup, e, t, i)
        },
        slidePrev: function(e = this.params.speed, t = !0, i) {
            const s = this,
                {
                    params: n,
                    animating: r,
                    snapGrid: o,
                    slidesGrid: a,
                    rtlTranslate: l
                } = s;
            if (n.loop) {
                if (r) return !1;
                s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const c = d(l ? s.translate : -s.translate),
                u = o.map(e => d(e)),
                p = (a.map(e => d(e)), o[u.indexOf(c)], o[u.indexOf(c) - 1]);
            let h;
            return void 0 !== p && (h = a.indexOf(p)) < 0 && (h = s.activeIndex - 1), s.slideTo(h, e, t, i)
        },
        slideReset: function(e = this.params.speed, t = !0, i) {
            return this.slideTo(this.activeIndex, e, t, i)
        },
        slideToClosest: function(e = this.params.speed, t = !0, i) {
            const s = this;
            let n = s.activeIndex;
            const r = Math.floor(n / s.params.slidesPerGroup);
            if (r < s.snapGrid.length - 1) {
                const e = s.rtlTranslate ? s.translate : -s.translate,
                    t = s.snapGrid[r];
                e - t > (s.snapGrid[r + 1] - t) / 2 && (n = s.params.slidesPerGroup)
            }
            return s.slideTo(n, e, t, i)
        },
        slideToClickedSlide: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: i
                } = e,
                s = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let n, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                n = parseInt(o(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), d.nextTick(() => {
                    e.slideTo(r)
                })) : e.slideTo(r) : r > e.slides.length - s ? (e.loopFix(), r = i.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), d.nextTick(() => {
                    e.slideTo(r)
                })) : e.slideTo(r)
            } else e.slideTo(r)
        }
    };
    var g = {
        loopCreate: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: i
                } = e;
            i.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let n = i.children(`.${t.slideClass}`);
            if (t.loopFillGroupWithBlank) {
                const e = t.slidesPerGroup - n.length % t.slidesPerGroup;
                if (e !== t.slidesPerGroup) {
                    for (let n = 0; n < e; n += 1) {
                        const e = o(s.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                        i.append(e)
                    }
                    n = i.children(`.${t.slideClass}`)
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = n.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
            const r = [],
                a = [];
            n.each((t, i) => {
                const s = o(i);
                t < e.loopedSlides && a.push(i), t < n.length && t >= n.length - e.loopedSlides && r.push(i), s.attr("data-swiper-slide-index", t)
            });
            for (let e = 0; e < a.length; e += 1) i.append(o(a[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (let e = r.length - 1; e >= 0; e -= 1) i.prepend(o(r[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix: function() {
            const e = this,
                {
                    params: t,
                    activeIndex: i,
                    slides: s,
                    loopedSlides: n,
                    allowSlidePrev: r,
                    allowSlideNext: o,
                    snapGrid: a,
                    rtlTranslate: l
                } = e;
            let d;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const c = -a[i] - e.getTranslate();
            i < n ? (d = s.length - 3 * n + i, d += n, e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c)) : ("auto" === t.slidesPerView && i >= 2 * n || i >= s.length - n) && (d = -s.length + i + n, d += n, e.slideTo(d, 0, !1, !0) && 0 !== c && e.setTranslate((l ? -e.translate : e.translate) - c));
            e.allowSlidePrev = r, e.allowSlideNext = o
        },
        loopDestroy: function() {
            const {
                $wrapperEl: e,
                params: t,
                slides: i
            } = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
        }
    };
    var w = {
        setGrabCursor: function(e) {
            if (c.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked) return;
            const t = this.el;
            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
        },
        unsetGrabCursor: function() {
            c.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var T = {
        appendSlide: function(e) {
            const t = this,
                {
                    $wrapperEl: i,
                    params: s
                } = t;
            if (s.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1) e[t] && i.append(e[t]);
            else i.append(e);
            s.loop && t.loopCreate(), s.observer && c.observer || t.update()
        },
        prependSlide: function(e) {
            const t = this,
                {
                    params: i,
                    $wrapperEl: s,
                    activeIndex: n
                } = t;
            i.loop && t.loopDestroy();
            let r = n + 1;
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && s.prepend(e[t]);
                r = n + e.length
            } else s.prepend(e);
            i.loop && t.loopCreate(), i.observer && c.observer || t.update(), t.slideTo(r, 0, !1)
        },
        addSlide: function(e, t) {
            const i = this,
                {
                    $wrapperEl: s,
                    params: n,
                    activeIndex: r
                } = i;
            let o = r;
            n.loop && (o -= i.loopedSlides, i.loopDestroy(), i.slides = s.children(`.${n.slideClass}`));
            const a = i.slides.length;
            if (e <= 0) return void i.prependSlide(t);
            if (e >= a) return void i.appendSlide(t);
            let l = o > e ? o + 1 : o;
            const d = [];
            for (let t = a - 1; t >= e; t -= 1) {
                const e = i.slides.eq(t);
                e.remove(), d.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && s.append(t[e]);
                l = o > e ? o + t.length : o
            } else s.append(t);
            for (let e = 0; e < d.length; e += 1) s.append(d[e]);
            n.loop && i.loopCreate(), n.observer && c.observer || i.update(), n.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
        },
        removeSlide: function(e) {
            const t = this,
                {
                    params: i,
                    $wrapperEl: s,
                    activeIndex: n
                } = t;
            let r = n;
            i.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = s.children(`.${i.slideClass}`));
            let o, a = r;
            if ("object" == typeof e && "length" in e) {
                for (let i = 0; i < e.length; i += 1) o = e[i], t.slides[o] && t.slides.eq(o).remove(), o < a && (a -= 1);
                a = Math.max(a, 0)
            } else o = e, t.slides[o] && t.slides.eq(o).remove(), o < a && (a -= 1), a = Math.max(a, 0);
            i.loop && t.loopCreate(), i.observer && c.observer || t.update(), i.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1)
        },
        removeAllSlides: function() {
            const e = this,
                t = [];
            for (let i = 0; i < e.slides.length; i += 1) t.push(i);
            e.removeSlide(t)
        }
    };
    const S = function() {
        const e = n.navigator.userAgent,
            t = {
                ios: !1,
                android: !1,
                androidChrome: !1,
                desktop: !1,
                windows: !1,
                iphone: !1,
                ipod: !1,
                ipad: !1,
                cordova: n.cordova || n.phonegap,
                phonegap: n.cordova || n.phonegap
            },
            i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
            r = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            o = e.match(/(iPad).*OS\s([\d_]+)/),
            a = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            l = !o && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), r && !i && (t.os = "android", t.osVersion = r[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (o || l || a) && (t.os = "ios", t.ios = !0), l && !a && (t.osVersion = l[2].replace(/_/g, "."), t.iphone = !0), o && (t.osVersion = o[2].replace(/_/g, "."), t.ipad = !0), a && (t.osVersion = a[3] ? a[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || o || a) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
            const e = t.osVersion.split("."),
                i = s.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (a || l) && (1 * e[0] == 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) && i && i.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return t.pixelRatio = n.devicePixelRatio || 1, t
    }();

    function x() {
        const e = this,
            {
                params: t,
                el: i
            } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: s,
            allowSlidePrev: n,
            snapGrid: r
        } = e;
        if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
            const i = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
        } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
        e.allowSlidePrev = n, e.allowSlideNext = s, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
    }
    var b = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
    };
    const C = {
            update: h,
            translate: f,
            transition: m,
            slide: v,
            loop: g,
            grabCursor: w,
            manipulation: T,
            events: {
                attachEvents: function() {
                    const e = this,
                        {
                            params: t,
                            touchEvents: i,
                            el: r,
                            wrapperEl: a
                        } = e;
                    e.onTouchStart = function(e) {
                        const t = this,
                            i = t.touchEventsData,
                            {
                                params: r,
                                touches: a
                            } = t;
                        if (t.animating && r.preventInteractionOnTransition) return;
                        let l = e;
                        if (l.originalEvent && (l = l.originalEvent), i.isTouchEvent = "touchstart" === l.type, !i.isTouchEvent && "which" in l && 3 === l.which) return;
                        if (!i.isTouchEvent && "button" in l && l.button > 0) return;
                        if (i.isTouched && i.isMoved) return;
                        if (r.noSwiping && o(l.target).closest(r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`)[0]) return void(t.allowClick = !0);
                        if (r.swipeHandler && !o(l).closest(r.swipeHandler)[0]) return;
                        a.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, a.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                        const c = a.currentX,
                            u = a.currentY,
                            p = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
                            h = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
                        if (!p || !(c <= h || c >= n.screen.width - h)) {
                            if (d.extend(i, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }), a.startX = c, a.startY = u, i.touchStartTime = d.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, r.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== l.type) {
                                let e = !0;
                                o(l.target).is(i.formElements) && (e = !1), s.activeElement && o(s.activeElement).is(i.formElements) && s.activeElement !== l.target && s.activeElement.blur();
                                const n = e && t.allowTouchMove && r.touchStartPreventDefault;
                                (r.touchStartForcePreventDefault || n) && l.preventDefault()
                            }
                            t.emit("touchStart", l)
                        }
                    }.bind(e), e.onTouchMove = function(e) {
                        const t = this,
                            i = t.touchEventsData,
                            {
                                params: n,
                                touches: r,
                                rtlTranslate: a
                            } = t;
                        let l = e;
                        if (l.originalEvent && (l = l.originalEvent), !i.isTouched) return void(i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l));
                        if (i.isTouchEvent && "mousemove" === l.type) return;
                        const c = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                            u = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                        if (l.preventedByNestedSwiper) return r.startX = c, void(r.startY = u);
                        if (!t.allowTouchMove) return t.allowClick = !1, void(i.isTouched && (d.extend(r, {
                            startX: c,
                            startY: u,
                            currentX: c,
                            currentY: u
                        }), i.touchStartTime = d.now()));
                        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                            if (t.isVertical()) {
                                if (u < r.startY && t.translate <= t.maxTranslate() || u > r.startY && t.translate >= t.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                            } else if (c < r.startX && t.translate <= t.maxTranslate() || c > r.startX && t.translate >= t.minTranslate()) return;
                        if (i.isTouchEvent && s.activeElement && l.target === s.activeElement && o(l.target).is(i.formElements)) return i.isMoved = !0, void(t.allowClick = !1);
                        if (i.allowTouchCallbacks && t.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
                        r.currentX = c, r.currentY = u;
                        const p = r.currentX - r.startX,
                            h = r.currentY - r.startY;
                        if (t.params.threshold && Math.sqrt(p * * 2 + h * * 2) < t.params.threshold) return;
                        if (void 0 === i.isScrolling) {
                            let e;
                            t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : p * p + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(p)) / Math.PI, i.isScrolling = t.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
                        }
                        if (i.isScrolling && t.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
                        if (!i.startMoving) return;
                        t.allowClick = !1, l.preventDefault(), n.touchMoveStopPropagation && !n.nested && l.stopPropagation(), i.isMoved || (n.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", l)), t.emit("sliderMove", l), i.isMoved = !0;
                        let f = t.isHorizontal() ? p : h;
                        r.diff = f, f *= n.touchRatio, a && (f = -f), t.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                        let m = !0,
                            v = n.resistanceRatio;
                        if (n.touchReleaseOnEdges && (v = 0), f > 0 && i.currentTranslate > t.minTranslate() ? (m = !1, n.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + f) * * v)) : f < 0 && i.currentTranslate < t.maxTranslate() && (m = !1, n.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - f) * * v)), m && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                            if (!(Math.abs(f) > n.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                        }
                        n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
                            position: r[t.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                        }), i.velocities.push({
                            position: r[t.isHorizontal() ? "currentX" : "currentY"],
                            time: d.now()
                        })), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
                    }.bind(e), e.onTouchEnd = function(e) {
                        const t = this,
                            i = t.touchEventsData,
                            {
                                params: s,
                                touches: n,
                                rtlTranslate: r,
                                $wrapperEl: o,
                                slidesGrid: a,
                                snapGrid: l
                            } = t;
                        let c = e;
                        if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && s.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                        s.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        const u = d.now(),
                            p = u - i.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), p < 300 && u - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = d.nextTick(() => {
                            t && !t.destroyed && t.emit("click", c)
                        }, 300)), p < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", c))), i.lastClickTime = d.now(), d.nextTick(() => {
                            t.destroyed || (t.allowClick = !0)
                        }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === n.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                        let h;
                        if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = s.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, s.freeMode) {
                            if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (h > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                            if (s.freeModeMomentum) {
                                if (i.velocities.length > 1) {
                                    const e = i.velocities.pop(),
                                        n = i.velocities.pop(),
                                        r = e.position - n.position,
                                        o = e.time - n.time;
                                    t.velocity = r / o, t.velocity /= 2, Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0), (o > 150 || d.now() - e.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= s.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                                let e = 1e3 * s.freeModeMomentumRatio;
                                const n = t.velocity * e;
                                let a = t.translate + n;
                                r && (a = -a);
                                let c, u = !1;
                                const p = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
                                let h;
                                if (a < t.maxTranslate()) s.freeModeMomentumBounce ? (a + t.maxTranslate() < -p && (a = t.maxTranslate() - p), c = t.maxTranslate(), u = !0, i.allowMomentumBounce = !0) : a = t.maxTranslate(), s.loop && s.centeredSlides && (h = !0);
                                else if (a > t.minTranslate()) s.freeModeMomentumBounce ? (a - t.minTranslate() > p && (a = t.minTranslate() + p), c = t.minTranslate(), u = !0, i.allowMomentumBounce = !0) : a = t.minTranslate(), s.loop && s.centeredSlides && (h = !0);
                                else if (s.freeModeSticky) {
                                    let e;
                                    for (let t = 0; t < l.length; t += 1)
                                        if (l[t] > -a) {
                                            e = t;
                                            break
                                        }
                                    a = -(a = Math.abs(l[e] - a) < Math.abs(l[e - 1] - a) || "next" === t.swipeDirection ? l[e] : l[e - 1])
                                }
                                if (h && t.once("transitionEnd", () => {
                                    t.loopFix()
                                }), 0 !== t.velocity) e = r ? Math.abs((-a - t.translate) / t.velocity) : Math.abs((a - t.translate) / t.velocity);
                                else if (s.freeModeSticky) return void t.slideToClosest();
                                s.freeModeMomentumBounce && u ? (t.updateProgress(c), t.setTransition(e), t.setTranslate(a), t.transitionStart(!0, t.swipeDirection), t.animating = !0, o.transitionEnd(() => {
                                    t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(s.speed), t.setTranslate(c), o.transitionEnd(() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                })) : t.velocity ? (t.updateProgress(a), t.setTransition(e), t.setTranslate(a), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, o.transitionEnd(() => {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(a), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (s.freeModeSticky) return void t.slideToClosest();
                            return void((!s.freeModeMomentum || p >= s.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
                        }
                        let f = 0,
                            m = t.slidesSizesGrid[0];
                        for (let e = 0; e < a.length; e += s.slidesPerGroup) void 0 !== a[e + s.slidesPerGroup] ? h >= a[e] && h < a[e + s.slidesPerGroup] && (f = e, m = a[e + s.slidesPerGroup] - a[e]) : h >= a[e] && (f = e, m = a[a.length - 1] - a[a.length - 2]);
                        const v = (h - a[f]) / m;
                        if (p > s.longSwipesMs) {
                            if (!s.longSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (v >= s.longSwipesRatio ? t.slideTo(f + s.slidesPerGroup) : t.slideTo(f)), "prev" === t.swipeDirection && (v > 1 - s.longSwipesRatio ? t.slideTo(f + s.slidesPerGroup) : t.slideTo(f))
                        } else {
                            if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(f + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(f)
                        }
                    }.bind(e), e.onClick = function(e) {
                        const t = this;
                        t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(e);
                    const l = "container" === t.touchEventsTarget ? r : a,
                        u = !!t.nested;
                    if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
                        if (c.touch) {
                            const s = !("touchstart" !== i.start || !c.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            l.addEventListener(i.start, e.onTouchStart, s), l.addEventListener(i.move, e.onTouchMove, c.passiveListener ? {
                                passive: !1,
                                capture: u
                            } : u), l.addEventListener(i.end, e.onTouchEnd, s)
                        }(t.simulateTouch && !S.ios && !S.android || t.simulateTouch && !c.touch && S.ios) && (l.addEventListener("mousedown", e.onTouchStart, !1), s.addEventListener("mousemove", e.onTouchMove, u), s.addEventListener("mouseup", e.onTouchEnd, !1))
                    } else l.addEventListener(i.start, e.onTouchStart, !1), s.addEventListener(i.move, e.onTouchMove, u), s.addEventListener(i.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && l.addEventListener("click", e.onClick, !0), e.on(S.ios || S.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x, !0)
                },
                detachEvents: function() {
                    const e = this,
                        {
                            params: t,
                            touchEvents: i,
                            el: n,
                            wrapperEl: r
                        } = e,
                        o = "container" === t.touchEventsTarget ? n : r,
                        a = !!t.nested;
                    if (c.touch || !c.pointerEvents && !c.prefixedPointerEvents) {
                        if (c.touch) {
                            const s = !("onTouchStart" !== i.start || !c.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            o.removeEventListener(i.start, e.onTouchStart, s), o.removeEventListener(i.move, e.onTouchMove, a), o.removeEventListener(i.end, e.onTouchEnd, s)
                        }(t.simulateTouch && !S.ios && !S.android || t.simulateTouch && !c.touch && S.ios) && (o.removeEventListener("mousedown", e.onTouchStart, !1), s.removeEventListener("mousemove", e.onTouchMove, a), s.removeEventListener("mouseup", e.onTouchEnd, !1))
                    } else o.removeEventListener(i.start, e.onTouchStart, !1), s.removeEventListener(i.move, e.onTouchMove, a), s.removeEventListener(i.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && o.removeEventListener("click", e.onClick, !0), e.off(S.ios || S.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: i,
                            loopedSlides: s = 0,
                            params: n
                        } = e,
                        r = n.breakpoints;
                    if (!r || r && 0 === Object.keys(r).length) return;
                    const o = e.getBreakpoint(r);
                    if (o && e.currentBreakpoint !== o) {
                        const a = o in r ? r[o] : void 0;
                        a && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(e => {
                            const t = a[e];
                            void 0 !== t && (a[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        const l = a || e.originalParams,
                            c = l.direction && l.direction !== n.direction,
                            u = n.loop && (l.slidesPerView !== n.slidesPerView || c);
                        c && i && e.changeDirection(), d.extend(e.params, l), d.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), e.currentBreakpoint = o, u && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - s + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                    }
                },
                getBreakpoint: function(e) {
                    const t = this;
                    if (!e) return;
                    let i = !1;
                    const s = [];
                    Object.keys(e).forEach(e => {
                        s.push(e)
                    }), s.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));
                    for (let e = 0; e < s.length; e += 1) {
                        const r = s[e];
                        t.params.breakpointsInverse ? r <= n.innerWidth && (i = r) : r >= n.innerWidth && !i && (i = r)
                    }
                    return i || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    const e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    const {
                        classNames: e,
                        params: t,
                        rtl: i,
                        $el: s
                    } = this, n = [];
                    n.push("initialized"), n.push(t.direction), t.freeMode && n.push("free-mode"), c.flexbox || n.push("no-flexbox"), t.autoHeight && n.push("autoheight"), i && n.push("rtl"), t.slidesPerColumn > 1 && n.push("multirow"), S.android && n.push("android"), S.ios && n.push("ios"), (u.isIE || u.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && n.push(`wp8-${t.direction}`), n.forEach(i => {
                        e.push(t.containerModifierClass + i)
                    }), s.addClass(e.join(" "))
                },
                removeClasses: function() {
                    const {
                        $el: e,
                        classNames: t
                    } = this;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, i, s, r, o) {
                    let a;

                    function l() {
                        o && o()
                    }
                    e.complete && r ? l() : t ? ((a = new n.Image).onload = l, a.onerror = l, s && (a.sizes = s), i && (a.srcset = i), t && (a.src = t)) : l()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                        const s = e.imagesToLoad[i];
                        e.loadImage(s, s.currentSrc || s.getAttribute("src"), s.srcset || s.getAttribute("srcset"), s.sizes || s.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        E = {};
    class y extends p {
        constructor(...e) {
            let t, i;
            1 === e.length && e[0].constructor && e[0].constructor === Object ? i = e[0] : [t, i] = e, i || (i = {}), i = d.extend({}, i), t && !i.el && (i.el = t), super(i), Object.keys(C).forEach(e => {
                Object.keys(C[e]).forEach(t => {
                    y.prototype[t] || (y.prototype[t] = C[e][t])
                })
            });
            const s = this;
            void 0 === s.modules && (s.modules = {}), Object.keys(s.modules).forEach(e => {
                const t = s.modules[e];
                if (t.params) {
                    const e = Object.keys(t.params)[0],
                        s = t.params[e];
                    if ("object" != typeof s || null === s) return;
                    if (!(e in i && "enabled" in s)) return;
                    !0 === i[e] && (i[e] = {
                        enabled: !0
                    }), "object" != typeof i[e] || "enabled" in i[e] || (i[e].enabled = !0), i[e] || (i[e] = {
                        enabled: !1
                    })
                }
            });
            const n = d.extend({}, b);
            s.useModulesParams(n), s.params = d.extend({}, n, E, i), s.originalParams = d.extend({}, s.params), s.passedParams = d.extend({}, i), s.$ = o;
            const r = o(s.params.el);
            if (!(t = r[0])) return;
            if (r.length > 1) {
                const e = [];
                return r.each((t, s) => {
                    const n = d.extend({}, i, {
                        el: s
                    });
                    e.push(new y(n))
                }), e
            }
            t.swiper = s, r.data("swiper", s);
            const a = r.children(`.${s.params.wrapperClass}`);
            return d.extend(s, {
                $el: r,
                el: t,
                $wrapperEl: a,
                wrapperEl: a[0],
                classNames: [],
                slides: o(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === s.params.direction,
                isVertical: () => "vertical" === s.params.direction,
                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction"),
                rtlTranslate: "horizontal" === s.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction")),
                wrongRTL: "-webkit-box" === a.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend"];
                    let t = ["mousedown", "mousemove", "mouseup"];
                    return c.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : c.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), s.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2]
                    }, s.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, c.touch || !s.params.simulateTouch ? s.touchEventsTouch : s.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    formElements: "input, select, option, textarea, button, video",
                    lastClickTime: d.now(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), s.useModules(), s.params.init && s.init(), s
        }
        slidesPerViewDynamic() {
            const {
                params: e,
                slides: t,
                slidesGrid: i,
                size: s,
                activeIndex: n
            } = this;
            let r = 1;
            if (e.centeredSlides) {
                let e, i = t[n].swiperSlideSize;
                for (let o = n + 1; o < t.length; o += 1) t[o] && !e && (r += 1, (i += t[o].swiperSlideSize) > s && (e = !0));
                for (let o = n - 1; o >= 0; o -= 1) t[o] && !e && (r += 1, (i += t[o].swiperSlideSize) > s && (e = !0))
            } else
                for (let e = n + 1; e < t.length; e += 1) i[e] - i[n] < s && (r += 1);
            return r
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: i
            } = e;

            function s() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let n;
            i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (s(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || s(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t = !0) {
            const i = this,
                s = i.params.direction;
            return e || (e = "horizontal" === s ? "vertical" : "horizontal"), e === s || "horizontal" !== e && "vertical" !== e ? i : ("vertical" === s && (i.$el.removeClass(`${i.params.containerModifierClass}vertical wp8-vertical`).addClass(`${i.params.containerModifierClass}${e}`), (u.isIE || u.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && i.$el.addClass(`${i.params.containerModifierClass}wp8-${e}`)), "horizontal" === s && (i.$el.removeClass(`${i.params.containerModifierClass}horizontal wp8-horizontal`).addClass(`${i.params.containerModifierClass}${e}`), (u.isIE || u.isEdge) && (c.pointerEvents || c.prefixedPointerEvents) && i.$el.addClass(`${i.params.containerModifierClass}wp8-${e}`)), i.params.direction = e, i.slides.each((t, i) => {
                "vertical" === e ? i.style.width = "" : i.style.height = ""
            }), i.emit("changeDirection"), t && i.update(), i)
        }
        init() {
            const e = this;
            e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
        }
        destroy(e = !0, t = !0) {
            const i = this,
                {
                    params: s,
                    $el: n,
                    $wrapperEl: r,
                    slides: o
                } = i;
            return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                i.off(e)
            }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), d.deleteProps(i)), i.destroyed = !0, null)
        }
        static extendDefaults(e) {
            d.extend(E, e)
        }
        static get extendedDefaults() {
            return E
        }
        static get defaults() {
            return b
        }
        static get Class() {
            return p
        }
        static get $() {
            return o
        }
    }
    var M = {
            name: "device",
            proto: {
                device: S
            },
            static: {
                device: S
            }
        },
        P = {
            name: "support",
            proto: {
                support: c
            },
            static: {
                support: c
            }
        },
        k = {
            name: "browser",
            proto: {
                browser: u
            },
            static: {
                browser: u
            }
        },
        L = {
            name: "resize",
            create() {
                const e = this;
                d.extend(e, {
                    resize: {
                        resizeHandler() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init() {
                    n.addEventListener("resize", this.resize.resizeHandler), n.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy() {
                    n.removeEventListener("resize", this.resize.resizeHandler), n.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        };
    const O = {
        func: n.MutationObserver || n.WebkitMutationObserver,
        attach(e, t = {}) {
            const i = this,
                s = new(0, O.func)(e => {
                    if (1 === e.length) return void i.emit("observerUpdate", e[0]);
                    const t = function() {
                        i.emit("observerUpdate", e[0])
                    };
                    n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                });
            s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), i.observer.observers.push(s)
        },
        init() {
            const e = this;
            if (c.observer && e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let i = 0; i < t.length; i += 1) e.observer.attach(t[i])
                }
                e.observer.attach(e.$el[0], {
                    childList: e.params.observeSlideChildren
                }), e.observer.attach(e.$wrapperEl[0], {
                    attributes: !1
                })
            }
        },
        destroy() {
            this.observer.observers.forEach(e => {
                e.disconnect()
            }), this.observer.observers = []
        }
    };
    var $ = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create() {
            d.extend(this, {
                observer: {
                    init: O.init.bind(this),
                    attach: O.attach.bind(this),
                    destroy: O.destroy.bind(this),
                    observers: []
                }
            })
        },
        on: {
            init() {
                this.observer.init()
            }, destroy() {
                this.observer.destroy()
            }
        }
    };
    const z = {
        lastScrollTime: d.now(),
        event: n.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            let e = "onwheel" in s;
            if (!e) {
                const t = s.createElement("div");
                t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
            }
            return !e && s.implementation && s.implementation.hasFeature && !0 !== s.implementation.hasFeature("", "") && (e = s.implementation.hasFeature("Events.wheel", "3.0")), e
        }() ? "wheel" : "mousewheel",
        normalize(e) {
            let t = 0,
                i = 0,
                s = 0,
                n = 0;
            return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), s = 10 * t, n = 10 * i, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || n) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, n *= 40) : (s *= 800, n *= 800)), s && !t && (t = s < 1 ? -1 : 1), n && !i && (i = n < 1 ? -1 : 1), {
                spinX: t,
                spinY: i,
                pixelX: s,
                pixelY: n
            }
        },
        handleMouseEnter() {
            this.mouseEntered = !0
        },
        handleMouseLeave() {
            this.mouseEntered = !1
        },
        handle(e) {
            let t = e;
            const i = this,
                s = i.params.mousewheel;
            if (!i.mouseEntered && !s.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            let r = 0;
            const o = i.rtlTranslate ? -1 : 1,
                a = z.normalize(t);
            if (s.forceToAxis)
                if (i.isHorizontal()) {
                    if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
                    r = a.pixelX * o
                } else {
                    if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
                    r = a.pixelY
                } else r = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * o : -a.pixelY;
            if (0 === r) return !0;
            if (s.invert && (r = -r), i.params.freeMode) {
                i.params.loop && i.loopFix();
                let e = i.getTranslate() + r * s.sensitivity;
                const n = i.isBeginning,
                    o = i.isEnd;
                if (e >= i.minTranslate() && (e = i.minTranslate()), e <= i.maxTranslate() && (e = i.maxTranslate()), i.setTransition(0), i.setTranslate(e), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!n && i.isBeginning || !o && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = d.nextTick(() => {
                    i.slideToClosest()
                }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), e === i.minTranslate() || e === i.maxTranslate()) return !0
            } else {
                if (d.now() - i.mousewheel.lastScrollTime > 60)
                    if (r < 0)
                        if (i.isEnd && !i.params.loop || i.animating) {
                            if (s.releaseOnEdges) return !0
                        } else i.slideNext(), i.emit("scroll", t);
                    else if (i.isBeginning && !i.params.loop || i.animating) {
                        if (s.releaseOnEdges) return !0
                    } else i.slidePrev(), i.emit("scroll", t);
                i.mousewheel.lastScrollTime = (new n.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        },
        enable() {
            const e = this;
            if (!z.event) return !1;
            if (e.mousewheel.enabled) return !1;
            let t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = o(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(z.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
        },
        disable() {
            const e = this;
            if (!z.event) return !1;
            if (!e.mousewheel.enabled) return !1;
            let t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = o(e.params.mousewheel.eventsTarged)), t.off(z.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
        }
    };
    const I = [M, P, k, L, $];
    void 0 === y.use && (y.use = y.Class.use, y.installModule = y.Class.installModule), y.use(I);
    i(0);

    function D(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    var A, V, B = function() {
        function e(t, i, s, n, r, o) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.el = t, this.wrapper = i, this.slides = s, this.next = n, this.prev = r, this.onSlideChange = o, this.handlePrevClick = this.handlePrevClick.bind(this), this.handleNextClick = this.handleNextClick.bind(this), this.handleSlideChange = this.handleSlideChange.bind(this)
        }
        var t, i, s;
        return t = e, (i = [{
            key: "mount",
            value: function() {
                this.el && (this.el.classList.add("swiper-container"), this.wrapper.classList.add("swiper-wrapper"), this.slides.forEach(function(e) {
                    e.classList.add("swiper-slide")
                }), this.swiper = new y(this.el, {
                    init: !1,
                    centeredSlides: !0,
                    loop: !0,
                    slidesPerView: 1.25,
                    spaceBetween: 16,
                    speed: 500,
                    breakpointsInverse: !0,
                    roundLengths: !0,
                    breakpoints: {
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 70
                        }
                    }
                }), this.next.addEventListener("click", this.handleNextClick), this.prev.addEventListener("click", this.handlePrevClick), this.swiper.on("init", this.handleSlideChange), this.swiper.on("slideChange", this.handleSlideChange), this.swiper.init())
            }
        }, {
            key: "handleSlideChange",
            value: function() {
                var e = this.swiper.activeIndex,
                    t = this.swiper.slides[e];
                this.onSlideChange && "function" == typeof this.onSlideChange && this.onSlideChange(t)
            }
        }, {
            key: "handleNextClick",
            value: function() {
                this.swiper && this.swiper.slideNext()
            }
        }, {
            key: "handlePrevClick",
            value: function() {
                this.swiper && this.swiper.slidePrev()
            }
        }]) && D(t.prototype, i), s && D(t, s), e
    }();
    i(1);

    function N(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(e, s.key, s)
        }
    }
    A = new(function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.el = t, this.changeColour = this.changeColour.bind(this)
        }
        var t, i, s;
        return t = e, (i = [{
            key: "changeColour",
            value: function(e) {
                var t = e.dataset.staffpicksBg;
                this.el.style.backgroundColor = t
            }
        }]) && N(t.prototype, i), s && N(t, s), e
    }())(document.querySelector("[data-staffpicks-colourchanger]")), (V = document.querySelector("[data-staffpicks-slider]")) && new B(V, V.querySelector("[data-staffpicks-container]"), [].slice.call(V.querySelectorAll("[data-staffpicks-slide]")), V.querySelector("[data-staffpicks-next]"), V.querySelector("[data-staffpicks-prev]"), A.changeColour).mount()
}]);