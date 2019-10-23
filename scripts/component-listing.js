! function(e) {
    var t = {};

    function s(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(n.exports, n, n.exports, s), n.l = !0, n.exports
    }
    s.m = e, s.c = t, s.d = function(e, t, i) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, s.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, t) {
        if (1 & t && (e = s(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (s.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var n in e) s.d(i, n, function(t) {
                return e[t]
            }.bind(null, n));
        return i
    }, s.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return s.d(t, "a", t), t
    }, s.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, s.p = "/app/plugins/emergence-component-listing/", s(s.s = 2)
}([function(e, t, s) {}, function(e, t, s) {}, function(e, t, s) {
    "use strict";
    s.r(t);
    s(0);
    var i = "undefined" == typeof document ? {
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
            document: i,
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
    class a {
        constructor(e) {
            const t = this;
            for (let s = 0; s < e.length; s += 1) t[s] = e[s];
            return t.length = e.length, this
        }
    }

    function r(e, t) {
        const s = [];
        let r = 0;
        if (e && !t && e instanceof a) return e;
        if (e)
            if ("string" == typeof e) {
                let n, a;
                const o = e.trim();
                if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                    let e = "div";
                    for (0 === o.indexOf("<li") && (e = "ul"), 0 === o.indexOf("<tr") && (e = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (e = "tr"), 0 === o.indexOf("<tbody") && (e = "table"), 0 === o.indexOf("<option") && (e = "select"), (a = i.createElement(e)).innerHTML = o, r = 0; r < a.childNodes.length; r += 1) s.push(a.childNodes[r])
                } else
                    for (n = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])], r = 0; r < n.length; r += 1) n[r] && s.push(n[r])
            } else if (e.nodeType || e === n || e === i) s.push(e);
            else if (e.length > 0 && e[0].nodeType)
                for (r = 0; r < e.length; r += 1) s.push(e[r]);
        return new a(s)
    }

    function o(e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1) - 1 === t.indexOf(e[s]) && t.push(e[s]);
        return t
    }
    r.fn = a.prototype, r.Class = a, r.Dom7 = a;
    "resize scroll".split(" ");
    const l = {
        addClass: function(e) {
            if (void 0 === e) return this;
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.add(t[e]);
            return this
        },
        removeClass: function(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.remove(t[e]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            const t = e.split(" ");
            for (let e = 0; e < t.length; e += 1)
                for (let s = 0; s < this.length; s += 1) void 0 !== this[s] && void 0 !== this[s].classList && this[s].classList.toggle(t[e]);
            return this
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (let s = 0; s < this.length; s += 1)
                if (2 === arguments.length) this[s].setAttribute(e, t);
                else
                    for (const t in e) this[s][t] = e[t], this[s].setAttribute(t, e[t]);
            return this
        },
        removeAttr: function(e) {
            for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            let s;
            if (void 0 !== t) {
                for (let i = 0; i < this.length; i += 1)(s = this[i]).dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = t;
                return this
            }
            if (s = this[0]) {
                if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage) return s.dom7ElementDataStorage[e];
                const t = s.getAttribute(`data-${e}`);
                return t || void 0
            }
        },
        transform: function(e) {
            for (let t = 0; t < this.length; t += 1) {
                const s = this[t].style;
                s.webkitTransform = e, s.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e = `${e}ms`);
            for (let t = 0; t < this.length; t += 1) {
                const s = this[t].style;
                s.webkitTransitionDuration = e, s.transitionDuration = e
            }
            return this
        },
        on: function(...e) {
            let [t, s, i, n] = e;

            function a(e) {
                const t = e.target;
                if (!t) return;
                const n = e.target.dom7EventData || [];
                if (n.indexOf(e) < 0 && n.unshift(e), r(t).is(s)) i.apply(t, n);
                else {
                    const e = r(t).parents();
                    for (let t = 0; t < e.length; t += 1) r(e[t]).is(s) && i.apply(e[t], n)
                }
            }

            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t)
            }
            "function" == typeof e[1] && ([t, i, n] = e, s = void 0), n || (n = !1);
            const l = t.split(" ");
            let d;
            for (let e = 0; e < this.length; e += 1) {
                const t = this[e];
                if (s)
                    for (d = 0; d < l.length; d += 1) {
                        const e = l[d];
                        t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                            listener: i,
                            proxyListener: a
                        }), t.addEventListener(e, a, n)
                    } else
                    for (d = 0; d < l.length; d += 1) {
                        const e = l[d];
                        t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                            listener: i,
                            proxyListener: o
                        }), t.addEventListener(e, o, n)
                    }
            }
            return this
        },
        off: function(...e) {
            let [t, s, i, n] = e;
            "function" == typeof e[1] && ([t, i, n] = e, s = void 0), n || (n = !1);
            const a = t.split(" ");
            for (let e = 0; e < a.length; e += 1) {
                const t = a[e];
                for (let e = 0; e < this.length; e += 1) {
                    const a = this[e];
                    let r;
                    if (!s && a.dom7Listeners ? r = a.dom7Listeners[t] : s && a.dom7LiveListeners && (r = a.dom7LiveListeners[t]), r && r.length)
                        for (let e = r.length - 1; e >= 0; e -= 1) {
                            const s = r[e];
                            i && s.listener === i ? (a.removeEventListener(t, s.proxyListener, n), r.splice(e, 1)) : i && s.listener && s.listener.dom7proxy && s.listener.dom7proxy === i ? (a.removeEventListener(t, s.proxyListener, n), r.splice(e, 1)) : i || (a.removeEventListener(t, s.proxyListener, n), r.splice(e, 1))
                        }
                }
            }
            return this
        },
        trigger: function(...e) {
            const t = e[0].split(" "),
                s = e[1];
            for (let a = 0; a < t.length; a += 1) {
                const r = t[a];
                for (let t = 0; t < this.length; t += 1) {
                    const a = this[t];
                    let o;
                    try {
                        o = new n.CustomEvent(r, {
                            detail: s,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (o = i.createEvent("Event")).initEvent(r, !0, !0), o.detail = s
                    }
                    a.dom7EventData = e.filter((e, t) => t > 0), a.dispatchEvent(o), a.dom7EventData = [], delete a.dom7EventData
                }
            }
            return this
        },
        transitionEnd: function(e) {
            const t = ["webkitTransitionEnd", "transitionend"],
                s = this;
            let i;

            function n(a) {
                if (a.target === this)
                    for (e.call(this, a), i = 0; i < t.length; i += 1) s.off(t[i], n)
            }
            if (e)
                for (i = 0; i < t.length; i += 1) s.on(t[i], n);
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
                    s = i.body,
                    a = e.clientTop || s.clientTop || 0,
                    r = e.clientLeft || s.clientLeft || 0,
                    o = e === n ? n.scrollY : e.scrollTop,
                    l = e === n ? n.scrollX : e.scrollLeft;
                return {
                    top: t.top + o - a,
                    left: t.left + l - r
                }
            }
            return null
        },
        css: function(e, t) {
            let s;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (s = 0; s < this.length; s += 1)
                        for (let t in e) this[s].style[t] = e[t];
                    return this
                }
                if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (s = 0; s < this.length; s += 1) this[s].style[e] = t;
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
            let s, o;
            if (!t || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (t.matches) return t.matches(e);
                if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
                if (t.msMatchesSelector) return t.msMatchesSelector(e);
                for (s = r(e), o = 0; o < s.length; o += 1)
                    if (s[o] === t) return !0;
                return !1
            }
            if (e === i) return t === i;
            if (e === n) return t === n;
            if (e.nodeType || e instanceof a) {
                for (s = e.nodeType ? [e] : e, o = 0; o < s.length; o += 1)
                    if (s[o] === t) return !0;
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
            let s;
            return new a(e > t - 1 ? [] : e < 0 ? (s = t + e) < 0 ? [] : [this[s]] : [this[e]])
        },
        append: function(...e) {
            let t;
            for (let s = 0; s < e.length; s += 1) {
                t = e[s];
                for (let e = 0; e < this.length; e += 1)
                    if ("string" == typeof t) {
                        const s = i.createElement("div");
                        for (s.innerHTML = t; s.firstChild;) this[e].appendChild(s.firstChild)
                    } else if (t instanceof a)
                        for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
                    else this[e].appendChild(t)
            }
            return this
        },
        prepend: function(e) {
            let t, s;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    const n = i.createElement("div");
                    for (n.innerHTML = e, s = n.childNodes.length - 1; s >= 0; s -= 1) this[t].insertBefore(n.childNodes[s], this[t].childNodes[0])
                } else if (e instanceof a)
                    for (s = 0; s < e.length; s += 1) this[t].insertBefore(e[s], this[t].childNodes[0]);
                else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && r(this[0].nextElementSibling).is(e) ? new a([this[0].nextElementSibling]) : new a([]) : this[0].nextElementSibling ? new a([this[0].nextElementSibling]) : new a([]) : new a([])
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return new a([]);
            for (; s.nextElementSibling;) {
                const i = s.nextElementSibling;
                e ? r(i).is(e) && t.push(i) : t.push(i), s = i
            }
            return new a(t)
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && r(t.previousElementSibling).is(e) ? new a([t.previousElementSibling]) : new a([]) : t.previousElementSibling ? new a([t.previousElementSibling]) : new a([])
            }
            return new a([])
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return new a([]);
            for (; s.previousElementSibling;) {
                const i = s.previousElementSibling;
                e ? r(i).is(e) && t.push(i) : t.push(i), s = i
            }
            return new a(t)
        },
        parent: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) null !== this[s].parentNode && (e ? r(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return r(o(t))
        },
        parents: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                let i = this[s].parentNode;
                for (; i;) e ? r(i).is(e) && t.push(i) : t.push(i), i = i.parentNode
            }
            return r(o(t))
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? new a([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const i = this[s].querySelectorAll(e);
                for (let e = 0; e < i.length; e += 1) t.push(i[e])
            }
            return new a(t)
        },
        children: function(e) {
            const t = [];
            for (let s = 0; s < this.length; s += 1) {
                const i = this[s].childNodes;
                for (let s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && r(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s])
            }
            return new a(o(t))
        },
        remove: function() {
            for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function(...e) {
            const t = this;
            let s, i;
            for (s = 0; s < e.length; s += 1) {
                const n = r(e[s]);
                for (i = 0; i < n.length; i += 1) t[t.length] = n[i], t.length += 1
            }
            return t
        },
        styles: function() {
            return this[0] ? n.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(l).forEach(e => {
        r.fn[e] = l[e]
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
                let s, i, a;
                const r = n.getComputedStyle(e, null);
                return n.WebKitCSSMatrix ? ((i = r.transform || r.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(e => e.replace(",", ".")).join(", ")), a = new n.WebKitCSSMatrix("none" === i ? "" : i)) : s = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = n.WebKitCSSMatrix ? a.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (i = n.WebKitCSSMatrix ? a.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), i || 0
            }, parseUrlQuery(e) {
                const t = {};
                let s, i, a, r, o = e || n.location.href;
                if ("string" == typeof o && o.length)
                    for (r = (i = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(e => "" !== e)).length, s = 0; s < r; s += 1) a = i[s].replace(/#\S+/g, "").split("="), t[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
                return t
            }, isObject: e => "object" == typeof e && null !== e && e.constructor && e.constructor === Object, extend(...e) {
                const t = Object(e[0]);
                for (let s = 1; s < e.length; s += 1) {
                    const i = e[s];
                    if (null != i) {
                        const e = Object.keys(Object(i));
                        for (let s = 0, n = e.length; s < n; s += 1) {
                            const n = e[s],
                                a = Object.getOwnPropertyDescriptor(i, n);
                            void 0 !== a && a.enumerable && (d.isObject(t[n]) && d.isObject(i[n]) ? d.extend(t[n], i[n]) : !d.isObject(t[n]) && d.isObject(i[n]) ? (t[n] = {}, d.extend(t[n], i[n])) : t[n] = i[n])
                        }
                    }
                }
                return t
            }
        },
        p = function() {
            const e = i.createElement("div");
            return {
                touch: n.Modernizr && !0 === n.Modernizr.touch || !!(n.navigator.maxTouchPoints > 0 || "ontouchstart" in n || n.DocumentTouch && i instanceof n.DocumentTouch),
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
                        s = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");
                    for (let e = 0; e < s.length; e += 1)
                        if (s[e] in t) return !0;
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
        c = function() {
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
    class u {
        constructor(e = {}) {
            const t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(e => {
                t.on(e, t.params.on[e])
            })
        }
        on(e, t, s) {
            const i = this;
            if ("function" != typeof t) return i;
            const n = s ? "unshift" : "push";
            return e.split(" ").forEach(e => {
                i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t)
            }), i
        }
        once(e, t, s) {
            const i = this;
            if ("function" != typeof t) return i;

            function n(...s) {
                t.apply(i, s), i.off(e, n), n.f7proxy && delete n.f7proxy
            }
            return n.f7proxy = t, i.on(e, n, s)
        }
        off(e, t) {
            const s = this;
            return s.eventsListeners ? (e.split(" ").forEach(e => {
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].length && s.eventsListeners[e].forEach((i, n) => {
                    (i === t || i.f7proxy && i.f7proxy === t) && s.eventsListeners[e].splice(n, 1)
                })
            }), s) : s
        }
        emit(...e) {
            const t = this;
            if (!t.eventsListeners) return t;
            let s, i, n;
            return "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), n = t) : (s = e[0].events, i = e[0].data, n = e[0].context || t), (Array.isArray(s) ? s : s.split(" ")).forEach(e => {
                if (t.eventsListeners && t.eventsListeners[e]) {
                    const s = [];
                    t.eventsListeners[e].forEach(e => {
                        s.push(e)
                    }), s.forEach(e => {
                        e.apply(n, i)
                    })
                }
            }), t
        }
        useModulesParams(e) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach(s => {
                const i = t.modules[s];
                i.params && d.extend(e, i.params)
            })
        }
        useModules(e = {}) {
            const t = this;
            t.modules && Object.keys(t.modules).forEach(s => {
                const i = t.modules[s],
                    n = e[s] || {};
                i.instance && Object.keys(i.instance).forEach(e => {
                    const s = i.instance[e];
                    t[e] = "function" == typeof s ? s.bind(t) : s
                }), i.on && t.on && Object.keys(i.on).forEach(e => {
                    t.on(e, i.on[e])
                }), i.create && i.create.bind(t)(n)
            })
        }
        static set components(e) {
            this.use && this.use(e)
        }
        static installModule(e, ...t) {
            const s = this;
            s.prototype.modules || (s.prototype.modules = {});
            const i = e.name || `${Object.keys(s.prototype.modules).length}_${d.now()}`;
            return s.prototype.modules[i] = e, e.proto && Object.keys(e.proto).forEach(t => {
                s.prototype[t] = e.proto[t]
            }), e.static && Object.keys(e.static).forEach(t => {
                s[t] = e.static[t]
            }), e.install && e.install.apply(s, t), s
        }
        static use(e, ...t) {
            const s = this;
            return Array.isArray(e) ? (e.forEach(e => s.installModule(e)), s) : s.installModule(e, ...t)
        }
    }
    var h = {
        updateSize: function() {
            const e = this;
            let t, s;
            const i = e.$el;
            t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth, s = void 0 !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), s = s - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }))
        },
        updateSlides: function() {
            const e = this,
                t = e.params,
                {
                    $wrapperEl: s,
                    size: i,
                    rtlTranslate: a,
                    wrongRTL: r
                } = e,
                o = e.virtual && t.virtual.enabled,
                l = o ? e.virtual.slides.length : e.slides.length,
                c = s.children(`.${e.params.slideClass}`),
                u = o ? e.virtual.slides.length : c.length;
            let h = [];
            const f = [],
                m = [];
            let v = t.slidesOffsetBefore;
            "function" == typeof v && (v = t.slidesOffsetBefore.call(e));
            let g = t.slidesOffsetAfter;
            "function" == typeof g && (g = t.slidesOffsetAfter.call(e));
            const w = e.snapGrid.length,
                b = e.snapGrid.length;
            let T, x, y = t.spaceBetween,
                C = -v,
                S = 0,
                E = 0;
            if (void 0 === i) return;
            "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * i), e.virtualSize = -y, a ? c.css({
                marginLeft: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: ""
            }), t.slidesPerColumn > 1 && (T = Math.floor(u / t.slidesPerColumn) === u / e.params.slidesPerColumn ? u : Math.ceil(u / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (T = Math.max(T, t.slidesPerView * t.slidesPerColumn)));
            const M = t.slidesPerColumn,
                P = T / M,
                k = Math.floor(u / t.slidesPerColumn);
            for (let s = 0; s < u; s += 1) {
                x = 0;
                const a = c.eq(s);
                if (t.slidesPerColumn > 1) {
                    let i, n, r;
                    "column" === t.slidesPerColumnFill ? (r = s - (n = Math.floor(s / M)) * M, (n > k || n === k && r === M - 1) && (r += 1) >= M && (r = 0, n += 1), i = n + r * T / M, a.css({
                        "-webkit-box-ordinal-group": i,
                        "-moz-box-ordinal-group": i,
                        "-ms-flex-order": i,
                        "-webkit-order": i,
                        order: i
                    })) : n = s - (r = Math.floor(s / P)) * P, a.css(`margin-${e.isHorizontal()?"top":"left"}`, 0 !== r && t.spaceBetween && `${t.spaceBetween}px`).attr("data-swiper-column", n).attr("data-swiper-row", r)
                }
                if ("none" !== a.css("display")) {
                    if ("auto" === t.slidesPerView) {
                        const s = n.getComputedStyle(a[0], null),
                            i = a[0].style.transform,
                            r = a[0].style.webkitTransform;
                        if (i && (a[0].style.transform = "none"), r && (a[0].style.webkitTransform = "none"), t.roundLengths) x = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                        else if (e.isHorizontal()) {
                            const e = parseFloat(s.getPropertyValue("width")),
                                t = parseFloat(s.getPropertyValue("padding-left")),
                                i = parseFloat(s.getPropertyValue("padding-right")),
                                n = parseFloat(s.getPropertyValue("margin-left")),
                                a = parseFloat(s.getPropertyValue("margin-right")),
                                r = s.getPropertyValue("box-sizing");
                            x = r && "border-box" === r ? e + n + a : e + t + i + n + a
                        } else {
                            const e = parseFloat(s.getPropertyValue("height")),
                                t = parseFloat(s.getPropertyValue("padding-top")),
                                i = parseFloat(s.getPropertyValue("padding-bottom")),
                                n = parseFloat(s.getPropertyValue("margin-top")),
                                a = parseFloat(s.getPropertyValue("margin-bottom")),
                                r = s.getPropertyValue("box-sizing");
                            x = r && "border-box" === r ? e + n + a : e + t + i + n + a
                        }
                        i && (a[0].style.transform = i), r && (a[0].style.webkitTransform = r), t.roundLengths && (x = Math.floor(x))
                    } else x = (i - (t.slidesPerView - 1) * y) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), c[s] && (e.isHorizontal() ? c[s].style.width = `${x}px` : c[s].style.height = `${x}px`);
                    c[s] && (c[s].swiperSlideSize = x), m.push(x), t.centeredSlides ? (C = C + x / 2 + S / 2 + y, 0 === S && 0 !== s && (C = C - i / 2 - y), 0 === s && (C = C - i / 2 - y), Math.abs(C) < .001 && (C = 0), t.roundLengths && (C = Math.floor(C)), E % t.slidesPerGroup == 0 && h.push(C), f.push(C)) : (t.roundLengths && (C = Math.floor(C)), E % t.slidesPerGroup == 0 && h.push(C), f.push(C), C = C + x + y), e.virtualSize += x + y, S = x, E += 1
                }
            }
            let $;
            if (e.virtualSize = Math.max(e.virtualSize, i) + g, a && r && ("slide" === t.effect || "coverflow" === t.effect) && s.css({
                width: `${e.virtualSize+t.spaceBetween}px`
            }), p.flexbox && !t.setWrapperSize || (e.isHorizontal() ? s.css({
                width: `${e.virtualSize+t.spaceBetween}px`
            }) : s.css({
                height: `${e.virtualSize+t.spaceBetween}px`
            })), t.slidesPerColumn > 1 && (e.virtualSize = (x + t.spaceBetween) * T, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? s.css({
                width: `${e.virtualSize+t.spaceBetween}px`
            }) : s.css({
                height: `${e.virtualSize+t.spaceBetween}px`
            }), t.centeredSlides)) {
                $ = [];
                for (let s = 0; s < h.length; s += 1) {
                    let i = h[s];
                    t.roundLengths && (i = Math.floor(i)), h[s] < e.virtualSize + h[0] && $.push(i)
                }
                h = $
            }
            if (!t.centeredSlides) {
                $ = [];
                for (let s = 0; s < h.length; s += 1) {
                    let n = h[s];
                    t.roundLengths && (n = Math.floor(n)), h[s] <= e.virtualSize - i && $.push(n)
                }
                h = $, Math.floor(e.virtualSize - i) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - i)
            }
            if (0 === h.length && (h = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? a ? c.css({
                marginLeft: `${y}px`
            }) : c.css({
                marginRight: `${y}px`
            }) : c.css({
                marginBottom: `${y}px`
            })), t.centerInsufficientSlides) {
                let e = 0;
                if (m.forEach(s => {
                    e += s + (t.spaceBetween ? t.spaceBetween : 0)
                }), (e -= t.spaceBetween) < i) {
                    const t = (i - e) / 2;
                    h.forEach((e, s) => {
                        h[s] = e - t
                    }), f.forEach((e, s) => {
                        f[s] = e + t
                    })
                }
            }
            d.extend(e, {
                slides: c,
                snapGrid: h,
                slidesGrid: f,
                slidesSizesGrid: m
            }), u !== l && e.emit("slidesLengthChange"), h.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
        },
        updateAutoHeight: function(e) {
            const t = this,
                s = [];
            let i, n = 0;
            if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                    const e = t.activeIndex + i;
                    if (e > t.slides.length) break;
                    s.push(t.slides.eq(e)[0])
                } else s.push(t.slides.eq(t.activeIndex)[0]);
            for (i = 0; i < s.length; i += 1)
                if (void 0 !== s[i]) {
                    const e = s[i].offsetHeight;
                    n = e > n ? e : n
                }
            n && t.$wrapperEl.css("height", `${n}px`)
        },
        updateSlidesOffset: function() {
            const e = this,
                t = e.slides;
            for (let s = 0; s < t.length; s += 1) t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop
        },
        updateSlidesProgress: function(e = this && this.translate || 0) {
            const t = this,
                s = t.params,
                {
                    slides: i,
                    rtlTranslate: n
                } = t;
            if (0 === i.length) return;
            void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
            let a = -e;
            n && (a = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for (let e = 0; e < i.length; e += 1) {
                const r = i[e],
                    o = (a + (s.centeredSlides ? t.minTranslate() : 0) - r.swiperSlideOffset) / (r.swiperSlideSize + s.spaceBetween);
                if (s.watchSlidesVisibility) {
                    const n = -(a - r.swiperSlideOffset),
                        o = n + t.slidesSizesGrid[e];
                    (n >= 0 && n < t.size || o > 0 && o <= t.size || n <= 0 && o >= t.size) && (t.visibleSlides.push(r), t.visibleSlidesIndexes.push(e), i.eq(e).addClass(s.slideVisibleClass))
                }
                r.progress = n ? -o : o
            }
            t.visibleSlides = r(t.visibleSlides)
        },
        updateProgress: function(e = this && this.translate || 0) {
            const t = this,
                s = t.params,
                i = t.maxTranslate() - t.minTranslate();
            let {
                progress: n,
                isBeginning: a,
                isEnd: r
            } = t;
            const o = a,
                l = r;
            0 === i ? (n = 0, a = !0, r = !0) : (a = (n = (e - t.minTranslate()) / i) <= 0, r = n >= 1), d.extend(t, {
                progress: n,
                isBeginning: a,
                isEnd: r
            }), (s.watchSlidesProgress || s.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (o && !a || l && !r) && t.emit("fromEdge"), t.emit("progress", n)
        },
        updateSlidesClasses: function() {
            const e = this,
                {
                    slides: t,
                    params: s,
                    $wrapperEl: i,
                    activeIndex: n,
                    realIndex: a
                } = e,
                r = e.virtual && s.virtual.enabled;
            let o;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), (o = r ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`) : t.eq(n)).addClass(s.slideActiveClass), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${a}"]`).addClass(s.slideDuplicateActiveClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${a}"]`).addClass(s.slideDuplicateActiveClass));
            let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === l.length && (l = t.eq(0)).addClass(s.slideNextClass);
            let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1)).addClass(s.slidePrevClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            const t = this,
                s = t.rtlTranslate ? t.translate : -t.translate,
                {
                    slidesGrid: i,
                    snapGrid: n,
                    params: a,
                    activeIndex: r,
                    realIndex: o,
                    snapIndex: l
                } = t;
            let p, c = e;
            if (void 0 === c) {
                for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2 ? c = e : s >= i[e] && s < i[e + 1] && (c = e + 1) : s >= i[e] && (c = e);
                a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
            }
            if ((p = n.indexOf(s) >= 0 ? n.indexOf(s) : Math.floor(c / a.slidesPerGroup)) >= n.length && (p = n.length - 1), c === r) return void(p !== l && (t.snapIndex = p, t.emit("snapIndexChange")));
            const u = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            d.extend(t, {
                snapIndex: p,
                realIndex: u,
                previousIndex: r,
                activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== u && t.emit("realIndexChange"), t.emit("slideChange")
        },
        updateClickedSlide: function(e) {
            const t = this,
                s = t.params,
                i = r(e.target).closest(`.${s.slideClass}`)[0];
            let n = !1;
            if (i)
                for (let e = 0; e < t.slides.length; e += 1) t.slides[e] === i && (n = !0);
            if (!i || !n) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = r(i).index(), s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var f = {
        getTranslate: function(e = (this.isHorizontal() ? "x" : "y")) {
            const {
                params: t,
                rtlTranslate: s,
                translate: i,
                $wrapperEl: n
            } = this;
            if (t.virtualTranslate) return s ? -i : i;
            let a = d.getTranslate(n[0], e);
            return s && (a = -a), a || 0
        },
        setTranslate: function(e, t) {
            const s = this,
                {
                    rtlTranslate: i,
                    params: n,
                    $wrapperEl: a,
                    progress: r
                } = s;
            let o, l = 0,
                d = 0;
            s.isHorizontal() ? l = i ? -e : e : d = e, n.roundLengths && (l = Math.floor(l), d = Math.floor(d)), n.virtualTranslate || (p.transforms3d ? a.transform(`translate3d(${l}px, ${d}px, 0px)`) : a.transform(`translate(${l}px, ${d}px)`)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d;
            const c = s.maxTranslate() - s.minTranslate();
            (o = 0 === c ? 0 : (e - s.minTranslate()) / c) !== r && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
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
            const s = this,
                {
                    activeIndex: i,
                    params: n,
                    previousIndex: a
                } = s;
            n.autoHeight && s.updateAutoHeight();
            let r = t;
            if (r || (r = i > a ? "next" : i < a ? "prev" : "reset"), s.emit("transitionStart"), e && i !== a) {
                if ("reset" === r) return void s.emit("slideResetTransitionStart");
                s.emit("slideChangeTransitionStart"), "next" === r ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e = !0, t) {
            const s = this,
                {
                    activeIndex: i,
                    previousIndex: n
                } = s;
            s.animating = !1, s.setTransition(0);
            let a = t;
            if (a || (a = i > n ? "next" : i < n ? "prev" : "reset"), s.emit("transitionEnd"), e && i !== n) {
                if ("reset" === a) return void s.emit("slideResetTransitionEnd");
                s.emit("slideChangeTransitionEnd"), "next" === a ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd")
            }
        }
    };
    var v = {
        slideTo: function(e = 0, t = this.params.speed, s = !0, i) {
            const n = this;
            let a = e;
            a < 0 && (a = 0);
            const {
                params: r,
                snapGrid: o,
                slidesGrid: l,
                previousIndex: d,
                activeIndex: c,
                rtlTranslate: u
            } = n;
            if (n.animating && r.preventInteractionOnTransition) return !1;
            let h = Math.floor(a / r.slidesPerGroup);
            h >= o.length && (h = o.length - 1), (c || r.initialSlide || 0) === (d || 0) && s && n.emit("beforeSlideChangeStart");
            const f = -o[h];
            if (n.updateProgress(f), r.normalizeSlideIndex)
                for (let e = 0; e < l.length; e += 1) - Math.floor(100 * f) >= Math.floor(100 * l[e]) && (a = e);
            if (n.initialized && a !== c) {
                if (!n.allowSlideNext && f < n.translate && f < n.minTranslate()) return !1;
                if (!n.allowSlidePrev && f > n.translate && f > n.maxTranslate() && (c || 0) !== a) return !1
            }
            let m;
            return m = a > c ? "next" : a < c ? "prev" : "reset", u && -f === n.translate || !u && f === n.translate ? (n.updateActiveIndex(a), r.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== r.effect && n.setTranslate(f), "reset" !== m && (n.transitionStart(s, m), n.transitionEnd(s, m)), !1) : (0 !== t && p.transition ? (n.setTransition(t), n.setTranslate(f), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, m), n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                n && !n.destroyed && e.target === this && (n.$wrapperEl[0].removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].removeEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, m))
            }), n.$wrapperEl[0].addEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.$wrapperEl[0].addEventListener("webkitTransitionEnd", n.onSlideToWrapperTransitionEnd))) : (n.setTransition(0), n.setTranslate(f), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, i), n.transitionStart(s, m), n.transitionEnd(s, m)), !0)
        },
        slideToLoop: function(e = 0, t = this.params.speed, s = !0, i) {
            const n = this;
            let a = e;
            return n.params.loop && (a += n.loopedSlides), n.slideTo(a, t, s, i)
        },
        slideNext: function(e = this.params.speed, t = !0, s) {
            const i = this,
                {
                    params: n,
                    animating: a
                } = i;
            return n.loop ? !a && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + n.slidesPerGroup, e, t, s)) : i.slideTo(i.activeIndex + n.slidesPerGroup, e, t, s)
        },
        slidePrev: function(e = this.params.speed, t = !0, s) {
            const i = this,
                {
                    params: n,
                    animating: a,
                    snapGrid: r,
                    slidesGrid: o,
                    rtlTranslate: l
                } = i;
            if (n.loop) {
                if (a) return !1;
                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const p = d(l ? i.translate : -i.translate),
                c = r.map(e => d(e)),
                u = (o.map(e => d(e)), r[c.indexOf(p)], r[c.indexOf(p) - 1]);
            let h;
            return void 0 !== u && (h = o.indexOf(u)) < 0 && (h = i.activeIndex - 1), i.slideTo(h, e, t, s)
        },
        slideReset: function(e = this.params.speed, t = !0, s) {
            return this.slideTo(this.activeIndex, e, t, s)
        },
        slideToClosest: function(e = this.params.speed, t = !0, s) {
            const i = this;
            let n = i.activeIndex;
            const a = Math.floor(n / i.params.slidesPerGroup);
            if (a < i.snapGrid.length - 1) {
                const e = i.rtlTranslate ? i.translate : -i.translate,
                    t = i.snapGrid[a];
                e - t > (i.snapGrid[a + 1] - t) / 2 && (n = i.params.slidesPerGroup)
            }
            return i.slideTo(n, e, t, s)
        },
        slideToClickedSlide: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: s
                } = e,
                i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let n, a = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                n = parseInt(r(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - i / 2 || a > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), a = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), d.nextTick(() => {
                    e.slideTo(a)
                })) : e.slideTo(a) : a > e.slides.length - i ? (e.loopFix(), a = s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), d.nextTick(() => {
                    e.slideTo(a)
                })) : e.slideTo(a)
            } else e.slideTo(a)
        }
    };
    var g = {
        loopCreate: function() {
            const e = this,
                {
                    params: t,
                    $wrapperEl: s
                } = e;
            s.children(`.${t.slideClass}.${t.slideDuplicateClass}`).remove();
            let n = s.children(`.${t.slideClass}`);
            if (t.loopFillGroupWithBlank) {
                const e = t.slidesPerGroup - n.length % t.slidesPerGroup;
                if (e !== t.slidesPerGroup) {
                    for (let n = 0; n < e; n += 1) {
                        const e = r(i.createElement("div")).addClass(`${t.slideClass} ${t.slideBlankClass}`);
                        s.append(e)
                    }
                    n = s.children(`.${t.slideClass}`)
                }
            }
            "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = n.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
            const a = [],
                o = [];
            n.each((t, s) => {
                const i = r(s);
                t < e.loopedSlides && o.push(s), t < n.length && t >= n.length - e.loopedSlides && a.push(s), i.attr("data-swiper-slide-index", t)
            });
            for (let e = 0; e < o.length; e += 1) s.append(r(o[e].cloneNode(!0)).addClass(t.slideDuplicateClass));
            for (let e = a.length - 1; e >= 0; e -= 1) s.prepend(r(a[e].cloneNode(!0)).addClass(t.slideDuplicateClass))
        },
        loopFix: function() {
            const e = this,
                {
                    params: t,
                    activeIndex: s,
                    slides: i,
                    loopedSlides: n,
                    allowSlidePrev: a,
                    allowSlideNext: r,
                    snapGrid: o,
                    rtlTranslate: l
                } = e;
            let d;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const p = -o[s] - e.getTranslate();
            s < n ? (d = i.length - 3 * n + s, d += n, e.slideTo(d, 0, !1, !0) && 0 !== p && e.setTranslate((l ? -e.translate : e.translate) - p)) : ("auto" === t.slidesPerView && s >= 2 * n || s >= i.length - n) && (d = -i.length + s + n, d += n, e.slideTo(d, 0, !1, !0) && 0 !== p && e.setTranslate((l ? -e.translate : e.translate) - p));
            e.allowSlidePrev = a, e.allowSlideNext = r
        },
        loopDestroy: function() {
            const {
                $wrapperEl: e,
                params: t,
                slides: s
            } = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index")
        }
    };
    var w = {
        setGrabCursor: function(e) {
            if (p.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked) return;
            const t = this.el;
            t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
        },
        unsetGrabCursor: function() {
            p.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var b = {
        appendSlide: function(e) {
            const t = this,
                {
                    $wrapperEl: s,
                    params: i
                } = t;
            if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
            else s.append(e);
            i.loop && t.loopCreate(), i.observer && p.observer || t.update()
        },
        prependSlide: function(e) {
            const t = this,
                {
                    params: s,
                    $wrapperEl: i,
                    activeIndex: n
                } = t;
            s.loop && t.loopDestroy();
            let a = n + 1;
            if ("object" == typeof e && "length" in e) {
                for (let t = 0; t < e.length; t += 1) e[t] && i.prepend(e[t]);
                a = n + e.length
            } else i.prepend(e);
            s.loop && t.loopCreate(), s.observer && p.observer || t.update(), t.slideTo(a, 0, !1)
        },
        addSlide: function(e, t) {
            const s = this,
                {
                    $wrapperEl: i,
                    params: n,
                    activeIndex: a
                } = s;
            let r = a;
            n.loop && (r -= s.loopedSlides, s.loopDestroy(), s.slides = i.children(`.${n.slideClass}`));
            const o = s.slides.length;
            if (e <= 0) return void s.prependSlide(t);
            if (e >= o) return void s.appendSlide(t);
            let l = r > e ? r + 1 : r;
            const d = [];
            for (let t = o - 1; t >= e; t -= 1) {
                const e = s.slides.eq(t);
                e.remove(), d.unshift(e)
            }
            if ("object" == typeof t && "length" in t) {
                for (let e = 0; e < t.length; e += 1) t[e] && i.append(t[e]);
                l = r > e ? r + t.length : r
            } else i.append(t);
            for (let e = 0; e < d.length; e += 1) i.append(d[e]);
            n.loop && s.loopCreate(), n.observer && p.observer || s.update(), n.loop ? s.slideTo(l + s.loopedSlides, 0, !1) : s.slideTo(l, 0, !1)
        },
        removeSlide: function(e) {
            const t = this,
                {
                    params: s,
                    $wrapperEl: i,
                    activeIndex: n
                } = t;
            let a = n;
            s.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(`.${s.slideClass}`));
            let r, o = a;
            if ("object" == typeof e && "length" in e) {
                for (let s = 0; s < e.length; s += 1) r = e[s], t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1);
                o = Math.max(o, 0)
            } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1), o = Math.max(o, 0);
            s.loop && t.loopCreate(), s.observer && p.observer || t.update(), s.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
        },
        removeAllSlides: function() {
            const e = this,
                t = [];
            for (let s = 0; s < e.slides.length; s += 1) t.push(s);
            e.removeSlide(t)
        }
    };
    const T = function() {
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
            s = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
            a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
            r = e.match(/(iPad).*OS\s([\d_]+)/),
            o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
            l = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (s && (t.os = "windows", t.osVersion = s[2], t.windows = !0), a && !s && (t.os = "android", t.osVersion = a[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || l || o) && (t.os = "ios", t.ios = !0), l && !o && (t.osVersion = l[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), o && (t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || r || o) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
            const e = t.osVersion.split("."),
                s = i.querySelector('meta[name="viewport"]');
            t.minimalUi = !t.webView && (o || l) && (1 * e[0] == 7 ? 1 * e[1] >= 1 : 1 * e[0] > 7) && s && s.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return t.pixelRatio = n.devicePixelRatio || 1, t
    }();

    function x() {
        const e = this,
            {
                params: t,
                el: s
            } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
            allowSlideNext: i,
            allowSlidePrev: n,
            snapGrid: a
        } = e;
        if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
            const s = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
        } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
        e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
    }
    var y = {
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
            manipulation: b,
            events: {
                attachEvents: function() {
                    const e = this,
                        {
                            params: t,
                            touchEvents: s,
                            el: a,
                            wrapperEl: o
                        } = e;
                    e.onTouchStart = function(e) {
                        const t = this,
                            s = t.touchEventsData,
                            {
                                params: a,
                                touches: o
                            } = t;
                        if (t.animating && a.preventInteractionOnTransition) return;
                        let l = e;
                        if (l.originalEvent && (l = l.originalEvent), s.isTouchEvent = "touchstart" === l.type, !s.isTouchEvent && "which" in l && 3 === l.which) return;
                        if (!s.isTouchEvent && "button" in l && l.button > 0) return;
                        if (s.isTouched && s.isMoved) return;
                        if (a.noSwiping && r(l.target).closest(a.noSwipingSelector ? a.noSwipingSelector : `.${a.noSwipingClass}`)[0]) return void(t.allowClick = !0);
                        if (a.swipeHandler && !r(l).closest(a.swipeHandler)[0]) return;
                        o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
                        const p = o.currentX,
                            c = o.currentY,
                            u = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                            h = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                        if (!u || !(p <= h || p >= n.screen.width - h)) {
                            if (d.extend(s, {
                                isTouched: !0,
                                isMoved: !1,
                                allowTouchCallbacks: !0,
                                isScrolling: void 0,
                                startMoving: void 0
                            }), o.startX = p, o.startY = c, s.touchStartTime = d.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== l.type) {
                                let e = !0;
                                r(l.target).is(s.formElements) && (e = !1), i.activeElement && r(i.activeElement).is(s.formElements) && i.activeElement !== l.target && i.activeElement.blur();
                                const n = e && t.allowTouchMove && a.touchStartPreventDefault;
                                (a.touchStartForcePreventDefault || n) && l.preventDefault()
                            }
                            t.emit("touchStart", l)
                        }
                    }.bind(e), e.onTouchMove = function(e) {
                        const t = this,
                            s = t.touchEventsData,
                            {
                                params: n,
                                touches: a,
                                rtlTranslate: o
                            } = t;
                        let l = e;
                        if (l.originalEvent && (l = l.originalEvent), !s.isTouched) return void(s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", l));
                        if (s.isTouchEvent && "mousemove" === l.type) return;
                        const p = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
                            c = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
                        if (l.preventedByNestedSwiper) return a.startX = p, void(a.startY = c);
                        if (!t.allowTouchMove) return t.allowClick = !1, void(s.isTouched && (d.extend(a, {
                            startX: p,
                            startY: c,
                            currentX: p,
                            currentY: c
                        }), s.touchStartTime = d.now()));
                        if (s.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                            if (t.isVertical()) {
                                if (c < a.startY && t.translate <= t.maxTranslate() || c > a.startY && t.translate >= t.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
                            } else if (p < a.startX && t.translate <= t.maxTranslate() || p > a.startX && t.translate >= t.minTranslate()) return;
                        if (s.isTouchEvent && i.activeElement && l.target === i.activeElement && r(l.target).is(s.formElements)) return s.isMoved = !0, void(t.allowClick = !1);
                        if (s.allowTouchCallbacks && t.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
                        a.currentX = p, a.currentY = c;
                        const u = a.currentX - a.startX,
                            h = a.currentY - a.startY;
                        if (t.params.threshold && Math.sqrt(u * * 2 + h * * 2) < t.params.threshold) return;
                        if (void 0 === s.isScrolling) {
                            let e;
                            t.isHorizontal() && a.currentY === a.startY || t.isVertical() && a.currentX === a.startX ? s.isScrolling = !1 : u * u + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, s.isScrolling = t.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle)
                        }
                        if (s.isScrolling && t.emit("touchMoveOpposite", l), void 0 === s.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (s.startMoving = !0)), s.isScrolling) return void(s.isTouched = !1);
                        if (!s.startMoving) return;
                        t.allowClick = !1, l.preventDefault(), n.touchMoveStopPropagation && !n.nested && l.stopPropagation(), s.isMoved || (n.loop && t.loopFix(), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", l)), t.emit("sliderMove", l), s.isMoved = !0;
                        let f = t.isHorizontal() ? u : h;
                        a.diff = f, f *= n.touchRatio, o && (f = -f), t.swipeDirection = f > 0 ? "prev" : "next", s.currentTranslate = f + s.startTranslate;
                        let m = !0,
                            v = n.resistanceRatio;
                        if (n.touchReleaseOnEdges && (v = 0), f > 0 && s.currentTranslate > t.minTranslate() ? (m = !1, n.resistance && (s.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + s.startTranslate + f) * * v)) : f < 0 && s.currentTranslate < t.maxTranslate() && (m = !1, n.resistance && (s.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - s.startTranslate - f) * * v)), m && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), n.threshold > 0) {
                            if (!(Math.abs(f) > n.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
                            if (!s.allowThresholdMove) return s.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, s.currentTranslate = s.startTranslate, void(a.diff = t.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                        }
                        n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && (0 === s.velocities.length && s.velocities.push({
                            position: a[t.isHorizontal() ? "startX" : "startY"],
                            time: s.touchStartTime
                        }), s.velocities.push({
                            position: a[t.isHorizontal() ? "currentX" : "currentY"],
                            time: d.now()
                        })), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate))
                    }.bind(e), e.onTouchEnd = function(e) {
                        const t = this,
                            s = t.touchEventsData,
                            {
                                params: i,
                                touches: n,
                                rtlTranslate: a,
                                $wrapperEl: r,
                                slidesGrid: o,
                                snapGrid: l
                            } = t;
                        let p = e;
                        if (p.originalEvent && (p = p.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", p), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
                        i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                        const c = d.now(),
                            u = c - s.touchStartTime;
                        if (t.allowClick && (t.updateClickedSlide(p), t.emit("tap", p), u < 300 && c - s.lastClickTime > 300 && (s.clickTimeout && clearTimeout(s.clickTimeout), s.clickTimeout = d.nextTick(() => {
                            t && !t.destroyed && t.emit("click", p)
                        }, 300)), u < 300 && c - s.lastClickTime < 300 && (s.clickTimeout && clearTimeout(s.clickTimeout), t.emit("doubleTap", p))), s.lastClickTime = d.now(), d.nextTick(() => {
                            t.destroyed || (t.allowClick = !0)
                        }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === n.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
                        let h;
                        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = i.followFinger ? a ? t.translate : -t.translate : -s.currentTranslate, i.freeMode) {
                            if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                            if (h > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                            if (i.freeModeMomentum) {
                                if (s.velocities.length > 1) {
                                    const e = s.velocities.pop(),
                                        n = s.velocities.pop(),
                                        a = e.position - n.position,
                                        r = e.time - n.time;
                                    t.velocity = a / r, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (r > 150 || d.now() - e.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= i.freeModeMomentumVelocityRatio, s.velocities.length = 0;
                                let e = 1e3 * i.freeModeMomentumRatio;
                                const n = t.velocity * e;
                                let o = t.translate + n;
                                a && (o = -o);
                                let p, c = !1;
                                const u = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                let h;
                                if (o < t.maxTranslate()) i.freeModeMomentumBounce ? (o + t.maxTranslate() < -u && (o = t.maxTranslate() - u), p = t.maxTranslate(), c = !0, s.allowMomentumBounce = !0) : o = t.maxTranslate(), i.loop && i.centeredSlides && (h = !0);
                                else if (o > t.minTranslate()) i.freeModeMomentumBounce ? (o - t.minTranslate() > u && (o = t.minTranslate() + u), p = t.minTranslate(), c = !0, s.allowMomentumBounce = !0) : o = t.minTranslate(), i.loop && i.centeredSlides && (h = !0);
                                else if (i.freeModeSticky) {
                                    let e;
                                    for (let t = 0; t < l.length; t += 1)
                                        if (l[t] > -o) {
                                            e = t;
                                            break
                                        }
                                    o = -(o = Math.abs(l[e] - o) < Math.abs(l[e - 1] - o) || "next" === t.swipeDirection ? l[e] : l[e - 1])
                                }
                                if (h && t.once("transitionEnd", () => {
                                    t.loopFix()
                                }), 0 !== t.velocity) e = a ? Math.abs((-o - t.translate) / t.velocity) : Math.abs((o - t.translate) / t.velocity);
                                else if (i.freeModeSticky) return void t.slideToClosest();
                                i.freeModeMomentumBounce && c ? (t.updateProgress(p), t.setTransition(e), t.setTranslate(o), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(() => {
                                    t && !t.destroyed && s.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(p), r.transitionEnd(() => {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                })) : t.velocity ? (t.updateProgress(o), t.setTransition(e), t.setTranslate(o), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(() => {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(o), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else if (i.freeModeSticky) return void t.slideToClosest();
                            return void((!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()))
                        }
                        let f = 0,
                            m = t.slidesSizesGrid[0];
                        for (let e = 0; e < o.length; e += i.slidesPerGroup) void 0 !== o[e + i.slidesPerGroup] ? h >= o[e] && h < o[e + i.slidesPerGroup] && (f = e, m = o[e + i.slidesPerGroup] - o[e]) : h >= o[e] && (f = e, m = o[o.length - 1] - o[o.length - 2]);
                        const v = (h - o[f]) / m;
                        if (u > i.longSwipesMs) {
                            if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (v >= i.longSwipesRatio ? t.slideTo(f + i.slidesPerGroup) : t.slideTo(f)), "prev" === t.swipeDirection && (v > 1 - i.longSwipesRatio ? t.slideTo(f + i.slidesPerGroup) : t.slideTo(f))
                        } else {
                            if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && t.slideTo(f + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(f)
                        }
                    }.bind(e), e.onClick = function(e) {
                        const t = this;
                        t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                    }.bind(e);
                    const l = "container" === t.touchEventsTarget ? a : o,
                        c = !!t.nested;
                    if (p.touch || !p.pointerEvents && !p.prefixedPointerEvents) {
                        if (p.touch) {
                            const i = !("touchstart" !== s.start || !p.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            l.addEventListener(s.start, e.onTouchStart, i), l.addEventListener(s.move, e.onTouchMove, p.passiveListener ? {
                                passive: !1,
                                capture: c
                            } : c), l.addEventListener(s.end, e.onTouchEnd, i)
                        }(t.simulateTouch && !T.ios && !T.android || t.simulateTouch && !p.touch && T.ios) && (l.addEventListener("mousedown", e.onTouchStart, !1), i.addEventListener("mousemove", e.onTouchMove, c), i.addEventListener("mouseup", e.onTouchEnd, !1))
                    } else l.addEventListener(s.start, e.onTouchStart, !1), i.addEventListener(s.move, e.onTouchMove, c), i.addEventListener(s.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && l.addEventListener("click", e.onClick, !0), e.on(T.ios || T.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x, !0)
                },
                detachEvents: function() {
                    const e = this,
                        {
                            params: t,
                            touchEvents: s,
                            el: n,
                            wrapperEl: a
                        } = e,
                        r = "container" === t.touchEventsTarget ? n : a,
                        o = !!t.nested;
                    if (p.touch || !p.pointerEvents && !p.prefixedPointerEvents) {
                        if (p.touch) {
                            const i = !("onTouchStart" !== s.start || !p.passiveListener || !t.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.removeEventListener(s.start, e.onTouchStart, i), r.removeEventListener(s.move, e.onTouchMove, o), r.removeEventListener(s.end, e.onTouchEnd, i)
                        }(t.simulateTouch && !T.ios && !T.android || t.simulateTouch && !p.touch && T.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), i.removeEventListener("mousemove", e.onTouchMove, o), i.removeEventListener("mouseup", e.onTouchEnd, !1))
                    } else r.removeEventListener(s.start, e.onTouchStart, !1), i.removeEventListener(s.move, e.onTouchMove, o), i.removeEventListener(s.end, e.onTouchEnd, !1);
                    (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(T.ios || T.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", x)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    const e = this,
                        {
                            activeIndex: t,
                            initialized: s,
                            loopedSlides: i = 0,
                            params: n
                        } = e,
                        a = n.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    const r = e.getBreakpoint(a);
                    if (r && e.currentBreakpoint !== r) {
                        const o = r in a ? a[r] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(e => {
                            const t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        const l = o || e.originalParams,
                            p = l.direction && l.direction !== n.direction,
                            c = n.loop && (l.slidesPerView !== n.slidesPerView || p);
                        p && s && e.changeDirection(), d.extend(e.params, l), d.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), e.currentBreakpoint = r, c && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                    }
                },
                getBreakpoint: function(e) {
                    const t = this;
                    if (!e) return;
                    let s = !1;
                    const i = [];
                    Object.keys(e).forEach(e => {
                        i.push(e)
                    }), i.sort((e, t) => parseInt(e, 10) - parseInt(t, 10));
                    for (let e = 0; e < i.length; e += 1) {
                        const a = i[e];
                        t.params.breakpointsInverse ? a <= n.innerWidth && (s = a) : a >= n.innerWidth && !s && (s = a)
                    }
                    return s || "max"
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
                        rtl: s,
                        $el: i
                    } = this, n = [];
                    n.push("initialized"), n.push(t.direction), t.freeMode && n.push("free-mode"), p.flexbox || n.push("no-flexbox"), t.autoHeight && n.push("autoheight"), s && n.push("rtl"), t.slidesPerColumn > 1 && n.push("multirow"), T.android && n.push("android"), T.ios && n.push("ios"), (c.isIE || c.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && n.push(`wp8-${t.direction}`), n.forEach(s => {
                        e.push(t.containerModifierClass + s)
                    }), i.addClass(e.join(" "))
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
                loadImage: function(e, t, s, i, a, r) {
                    let o;

                    function l() {
                        r && r()
                    }
                    e.complete && a ? l() : t ? ((o = new n.Image).onload = l, o.onerror = l, i && (o.sizes = i), s && (o.srcset = s), t && (o.src = t)) : l()
                },
                preloadImages: function() {
                    const e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                        const i = e.imagesToLoad[s];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        S = {};
    class E extends u {
        constructor(...e) {
            let t, s;
            1 === e.length && e[0].constructor && e[0].constructor === Object ? s = e[0] : [t, s] = e, s || (s = {}), s = d.extend({}, s), t && !s.el && (s.el = t), super(s), Object.keys(C).forEach(e => {
                Object.keys(C[e]).forEach(t => {
                    E.prototype[t] || (E.prototype[t] = C[e][t])
                })
            });
            const i = this;
            void 0 === i.modules && (i.modules = {}), Object.keys(i.modules).forEach(e => {
                const t = i.modules[e];
                if (t.params) {
                    const e = Object.keys(t.params)[0],
                        i = t.params[e];
                    if ("object" != typeof i || null === i) return;
                    if (!(e in s && "enabled" in i)) return;
                    !0 === s[e] && (s[e] = {
                        enabled: !0
                    }), "object" != typeof s[e] || "enabled" in s[e] || (s[e].enabled = !0), s[e] || (s[e] = {
                        enabled: !1
                    })
                }
            });
            const n = d.extend({}, y);
            i.useModulesParams(n), i.params = d.extend({}, n, S, s), i.originalParams = d.extend({}, i.params), i.passedParams = d.extend({}, s), i.$ = r;
            const a = r(i.params.el);
            if (!(t = a[0])) return;
            if (a.length > 1) {
                const e = [];
                return a.each((t, i) => {
                    const n = d.extend({}, s, {
                        el: i
                    });
                    e.push(new E(n))
                }), e
            }
            t.swiper = i, a.data("swiper", i);
            const o = a.children(`.${i.params.wrapperClass}`);
            return d.extend(i, {
                $el: a,
                el: t,
                $wrapperEl: o,
                wrapperEl: o[0],
                classNames: [],
                slides: r(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === i.params.direction,
                isVertical: () => "vertical" === i.params.direction,
                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction"),
                rtlTranslate: "horizontal" === i.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction")),
                wrongRTL: "-webkit-box" === o.css("display"),
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: i.params.allowSlideNext,
                allowSlidePrev: i.params.allowSlidePrev,
                touchEvents: function() {
                    const e = ["touchstart", "touchmove", "touchend"];
                    let t = ["mousedown", "mousemove", "mouseup"];
                    return p.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : p.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), i.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2]
                    }, i.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, p.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
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
                allowTouchMove: i.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), i.useModules(), i.params.init && i.init(), i
        }
        slidesPerViewDynamic() {
            const {
                params: e,
                slides: t,
                slidesGrid: s,
                size: i,
                activeIndex: n
            } = this;
            let a = 1;
            if (e.centeredSlides) {
                let e, s = t[n].swiperSlideSize;
                for (let r = n + 1; r < t.length; r += 1) t[r] && !e && (a += 1, (s += t[r].swiperSlideSize) > i && (e = !0));
                for (let r = n - 1; r >= 0; r -= 1) t[r] && !e && (a += 1, (s += t[r].swiperSlideSize) > i && (e = !0))
            } else
                for (let e = n + 1; e < t.length; e += 1) s[e] - s[n] < i && (a += 1);
            return a
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const {
                snapGrid: t,
                params: s
            } = e;

            function i() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                    s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
            }
            let n;
            s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (n = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t = !0) {
            const s = this,
                i = s.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? s : ("vertical" === i && (s.$el.removeClass(`${s.params.containerModifierClass}vertical wp8-vertical`).addClass(`${s.params.containerModifierClass}${e}`), (c.isIE || c.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && s.$el.addClass(`${s.params.containerModifierClass}wp8-${e}`)), "horizontal" === i && (s.$el.removeClass(`${s.params.containerModifierClass}horizontal wp8-horizontal`).addClass(`${s.params.containerModifierClass}${e}`), (c.isIE || c.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && s.$el.addClass(`${s.params.containerModifierClass}wp8-${e}`)), s.params.direction = e, s.slides.each((t, s) => {
                "vertical" === e ? s.style.width = "" : s.style.height = ""
            }), s.emit("changeDirection"), t && s.update(), s)
        }
        init() {
            const e = this;
            e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
        }
        destroy(e = !0, t = !0) {
            const s = this,
                {
                    params: i,
                    $el: n,
                    $wrapperEl: a,
                    slides: r
                } = s;
            return void 0 === s.params || s.destroyed ? null : (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), n.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(e => {
                s.off(e)
            }), !1 !== e && (s.$el[0].swiper = null, s.$el.data("swiper", null), d.deleteProps(s)), s.destroyed = !0, null)
        }
        static extendDefaults(e) {
            d.extend(S, e)
        }
        static get extendedDefaults() {
            return S
        }
        static get defaults() {
            return y
        }
        static get Class() {
            return u
        }
        static get $() {
            return r
        }
    }
    var M = {
            name: "device",
            proto: {
                device: T
            },
            static: {
                device: T
            }
        },
        P = {
            name: "support",
            proto: {
                support: p
            },
            static: {
                support: p
            }
        },
        k = {
            name: "browser",
            proto: {
                browser: c
            },
            static: {
                browser: c
            }
        },
        $ = {
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
    const L = {
        func: n.MutationObserver || n.WebkitMutationObserver,
        attach(e, t = {}) {
            const s = this,
                i = new(0, L.func)(e => {
                    if (1 === e.length) return void s.emit("observerUpdate", e[0]);
                    const t = function() {
                        s.emit("observerUpdate", e[0])
                    };
                    n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)
                });
            i.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData
            }), s.observer.observers.push(i)
        },
        init() {
            const e = this;
            if (p.observer && e.params.observer) {
                if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let s = 0; s < t.length; s += 1) e.observer.attach(t[s])
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
    var O = {
        name: "observer",
        params: {
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        },
        create() {
            d.extend(this, {
                observer: {
                    init: L.init.bind(this),
                    attach: L.attach.bind(this),
                    destroy: L.destroy.bind(this),
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
    const I = {
        lastScrollTime: d.now(),
        event: n.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
            let e = "onwheel" in i;
            if (!e) {
                const t = i.createElement("div");
                t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
            }
            return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")), e
        }() ? "wheel" : "mousewheel",
        normalize(e) {
            let t = 0,
                s = 0,
                i = 0,
                n = 0;
            return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, n = 10 * s, "deltaY" in e && (n = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || n) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, n *= 40) : (i *= 800, n *= 800)), i && !t && (t = i < 1 ? -1 : 1), n && !s && (s = n < 1 ? -1 : 1), {
                spinX: t,
                spinY: s,
                pixelX: i,
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
            const s = this,
                i = s.params.mousewheel;
            if (!s.mouseEntered && !i.releaseOnEdges) return !0;
            t.originalEvent && (t = t.originalEvent);
            let a = 0;
            const r = s.rtlTranslate ? -1 : 1,
                o = I.normalize(t);
            if (i.forceToAxis)
                if (s.isHorizontal()) {
                    if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                    a = o.pixelX * r
                } else {
                    if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                    a = o.pixelY
                } else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
            if (0 === a) return !0;
            if (i.invert && (a = -a), s.params.freeMode) {
                s.params.loop && s.loopFix();
                let e = s.getTranslate() + a * i.sensitivity;
                const n = s.isBeginning,
                    r = s.isEnd;
                if (e >= s.minTranslate() && (e = s.minTranslate()), e <= s.maxTranslate() && (e = s.maxTranslate()), s.setTransition(0), s.setTranslate(e), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!n && s.isBeginning || !r && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(() => {
                    s.slideToClosest()
                }, 300)), s.emit("scroll", t), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(), e === s.minTranslate() || e === s.maxTranslate()) return !0
            } else {
                if (d.now() - s.mousewheel.lastScrollTime > 60)
                    if (a < 0)
                        if (s.isEnd && !s.params.loop || s.animating) {
                            if (i.releaseOnEdges) return !0
                        } else s.slideNext(), s.emit("scroll", t);
                    else if (s.isBeginning && !s.params.loop || s.animating) {
                        if (i.releaseOnEdges) return !0
                    } else s.slidePrev(), s.emit("scroll", t);
                s.mousewheel.lastScrollTime = (new n.Date).getTime()
            }
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        },
        enable() {
            const e = this;
            if (!I.event) return !1;
            if (e.mousewheel.enabled) return !1;
            let t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = r(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(I.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
        },
        disable() {
            const e = this;
            if (!I.event) return !1;
            if (!e.mousewheel.enabled) return !1;
            let t = e.$el;
            return "container" !== e.params.mousewheel.eventsTarged && (t = r(e.params.mousewheel.eventsTarged)), t.off(I.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
        }
    };
    const z = {
        update() {
            const e = this,
                t = e.rtl,
                s = e.params.pagination;
            if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                n = e.pagination.$el;
            let a;
            const o = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? ((a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (a -= i - 2 * e.loopedSlides), a > o - 1 && (a -= o), a < 0 && "bullets" !== e.params.paginationType && (a = o + a)) : a = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                const i = e.pagination.bullets;
                let o, l, d;
                if (s.dynamicBullets && (e.pagination.bulletSize = i.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), n.css(e.isHorizontal() ? "width" : "height", `${e.pagination.bulletSize*(s.dynamicMainBullets+4)}px`), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += a - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = a - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(i.length, s.dynamicMainBullets) - 1)) + o) / 2), i.removeClass(`${s.bulletActiveClass} ${s.bulletActiveClass}-next ${s.bulletActiveClass}-next-next ${s.bulletActiveClass}-prev ${s.bulletActiveClass}-prev-prev ${s.bulletActiveClass}-main`), n.length > 1) i.each((e, t) => {
                    const i = r(t),
                        n = i.index();
                    n === a && i.addClass(s.bulletActiveClass), s.dynamicBullets && (n >= o && n <= l && i.addClass(`${s.bulletActiveClass}-main`), n === o && i.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), n === l && i.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`))
                });
                else {
                    if (i.eq(a).addClass(s.bulletActiveClass), s.dynamicBullets) {
                        const e = i.eq(o),
                            t = i.eq(l);
                        for (let e = o; e <= l; e += 1) i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                        e.prev().addClass(`${s.bulletActiveClass}-prev`).prev().addClass(`${s.bulletActiveClass}-prev-prev`), t.next().addClass(`${s.bulletActiveClass}-next`).next().addClass(`${s.bulletActiveClass}-next-next`)
                    }
                }
                if (s.dynamicBullets) {
                    const n = Math.min(i.length, s.dynamicMainBullets + 4),
                        a = (e.pagination.bulletSize * n - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                        r = t ? "right" : "left";
                    i.css(e.isHorizontal() ? r : "top", `${a}px`)
                }
            }
            if ("fraction" === s.type && (n.find(`.${s.currentClass}`).text(s.formatFractionCurrent(a + 1)), n.find(`.${s.totalClass}`).text(s.formatFractionTotal(o))), "progressbar" === s.type) {
                let t;
                t = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                const i = (a + 1) / o;
                let r = 1,
                    l = 1;
                "horizontal" === t ? r = i : l = i, n.find(`.${s.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${r}) scaleY(${l})`).transition(e.params.speed)
            }
            "custom" === s.type && s.renderCustom ? (n.html(s.renderCustom(e, a + 1, o)), e.emit("paginationRender", e, n[0])) : e.emit("paginationUpdate", e, n[0]), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
        }, render() {
            const e = this,
                t = e.params.pagination;
            if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
            const s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                i = e.pagination.$el;
            let n = "";
            if ("bullets" === t.type) {
                const a = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                for (let s = 0; s < a; s += 1) t.renderBullet ? n += t.renderBullet.call(e, s, t.bulletClass) : n += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`;
                i.html(n), e.pagination.bullets = i.find(`.${t.bulletClass}`)
            }
            "fraction" === t.type && (n = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span>` + " / " + `<span class="${t.totalClass}"></span>`, i.html(n)), "progressbar" === t.type && (n = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`, i.html(n)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
        }, init() {
            const e = this,
                t = e.params.pagination;
            if (!t.el) return;
            let s = r(t.el);
            0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && 1 === e.$el.find(t.el).length && (s = e.$el.find(t.el)), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (s.addClass(`${t.modifierClass}${t.type}-dynamic`), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", `.${t.bulletClass}`, function(t) {
                t.preventDefault();
                let s = r(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides), e.slideTo(s)
            }), d.extend(e.pagination, {
                $el: s,
                el: s[0]
            }))
        }, destroy() {
            const e = this.params.pagination;
            if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
            const t = this.pagination.$el;
            t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", `.${e.bulletClass}`)
        }
    };
    var D = {
        name: "pagination",
        params: {
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                modifierClass: "swiper-pagination-",
                currentClass: "swiper-pagination-current",
                totalClass: "swiper-pagination-total",
                hiddenClass: "swiper-pagination-hidden",
                progressbarFillClass: "swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                clickableClass: "swiper-pagination-clickable",
                lockClass: "swiper-pagination-lock"
            }
        },
        create() {
            d.extend(this, {
                pagination: {
                    init: z.init.bind(this),
                    render: z.render.bind(this),
                    update: z.update.bind(this),
                    destroy: z.destroy.bind(this),
                    dynamicBulletIndex: 0
                }
            })
        },
        on: {
            init() {
                this.pagination.init(), this.pagination.render(), this.pagination.update()
            }, activeIndexChange() {
                const e = this;
                e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update()
            }, snapIndexChange() {
                const e = this;
                e.params.loop || e.pagination.update()
            }, slidesLengthChange() {
                const e = this;
                e.params.loop && (e.pagination.render(), e.pagination.update())
            }, snapGridLengthChange() {
                const e = this;
                e.params.loop || (e.pagination.render(), e.pagination.update())
            }, destroy() {
                this.pagination.destroy()
            }, click(e) {
                const t = this;
                if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !r(e.target).hasClass(t.params.pagination.bulletClass)) {
                    !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                }
            }
        }
    };
    const A = {
        run() {
            const e = this,
                t = e.slides.eq(e.activeIndex);
            let s = e.params.autoplay.delay;
            t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(() => {
                e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
            }, s)
        }, start() {
            return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
        }, stop() {
            const e = this;
            return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
        }, pause(e) {
            const t = this;
            t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
        }
    };
    var B = {
        name: "autoplay",
        params: {
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !0,
                stopOnLastSlide: !1,
                reverseDirection: !1
            }
        },
        create() {
            const e = this;
            d.extend(e, {
                autoplay: {
                    running: !1,
                    paused: !1,
                    run: A.run.bind(e),
                    start: A.start.bind(e),
                    stop: A.stop.bind(e),
                    pause: A.pause.bind(e),
                    onTransitionEnd(t) {
                        e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                    }
                }
            })
        },
        on: {
            init() {
                const e = this;
                e.params.autoplay.enabled && e.autoplay.start()
            }, beforeTransitionStart(e, t) {
                const s = this;
                s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop())
            }, sliderFirstMove() {
                const e = this;
                e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
            }, destroy() {
                const e = this;
                e.autoplay.running && e.autoplay.stop()
            }
        }
    };
    const V = {
        setTranslate() {
            const e = this,
                {
                    slides: t
                } = e;
            for (let s = 0; s < t.length; s += 1) {
                const t = e.slides.eq(s);
                let i = -t[0].swiperSlideOffset;
                e.params.virtualTranslate || (i -= e.translate);
                let n = 0;
                e.isHorizontal() || (n = i, i = 0);
                const a = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                t.css({
                    opacity: a
                }).transform(`translate3d(${i}px, ${n}px, 0px)`)
            }
        }, setTransition(e) {
            const t = this,
                {
                    slides: s,
                    $wrapperEl: i
                } = t;
            if (s.transition(e), t.params.virtualTranslate && 0 !== e) {
                let e = !1;
                s.transitionEnd(() => {
                    if (e) return;
                    if (!t || t.destroyed) return;
                    e = !0, t.animating = !1;
                    const s = ["webkitTransitionEnd", "transitionend"];
                    for (let e = 0; e < s.length; e += 1) i.trigger(s[e])
                })
            }
        }
    };
    var G = {
        name: "effect-fade",
        params: {
            fadeEffect: {
                crossFade: !1
            }
        },
        create() {
            d.extend(this, {
                fadeEffect: {
                    setTranslate: V.setTranslate.bind(this),
                    setTransition: V.setTransition.bind(this)
                }
            })
        },
        on: {
            beforeInit() {
                if ("fade" !== this.params.effect) return;
                this.classNames.push(`${this.params.containerModifierClass}fade`);
                const e = {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !0
                };
                d.extend(this.params, e), d.extend(this.originalParams, e)
            }, setTranslate() {
                "fade" === this.params.effect && this.fadeEffect.setTranslate()
            }, setTransition(e) {
                "fade" === this.params.effect && this.fadeEffect.setTransition(e)
            }
        }
    };
    const N = [M, P, k, $, O];
    void 0 === E.use && (E.use = E.Class.use, E.installModule = E.Class.installModule), E.use(N);
    s(1);

    function F(e, t) {
        for (var s = 0; s < t.length; s++) {
            var i = t[s];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }
    var H = function() {
        function e(t, s, i, n, a, r) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.el = t, this.wrapper = s, this.slides = i, this.next = n, this.prev = a, this.pagination = r, this.handlePrevClick = this.handlePrevClick.bind(this), this.handleNextClick = this.handleNextClick.bind(this), E.use([G, D, B])
        }
        var t, s, i;
        return t = e, (s = [{
            key: "mount",
            value: function() {
                this.el.classList.add("swiper-container"), this.wrapper.classList.add("swiper-wrapper"), this.slides.forEach(function(e) {
                    e.classList.add("swiper-slide")
                }), this.swiper = new E(this.el, {
                    init: !1,
                    centeredSlides: !0,
                    loop: !0,
                    slidesPerView: 1,
                    spaceBetween: 0,
                    speed: 500,
                    breakpointsInverse: !0,
                    roundLengths: !0,
                    pagination: {
                        el: this.pagination,
                        type: "fraction"
                    },
                    autoplay: {
                        delay: 3e3
                    },
                    effect: "fade"
                }), this.next.addEventListener("click", this.handleNextClick), this.prev.addEventListener("click", this.handlePrevClick), this.swiper.init()
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
        }]) && F(t.prototype, s), i && F(t, i), e
    }();
    [].slice.call(document.querySelectorAll("[data-cardslider]")).map(function(e) {
        return new H(e.querySelector("[data-cardslider-el]"), e.querySelector("[data-cardslider-container]"), [].slice.call(e.querySelectorAll("[data-cardslider-slide]")), e.querySelector("[data-cardslider-next]"), e.querySelector("[data-cardslider-prev]"), e.querySelector("[data-cardslider-pagination]"))
    }).forEach(function(e) {
        e.mount()
    })
}]);