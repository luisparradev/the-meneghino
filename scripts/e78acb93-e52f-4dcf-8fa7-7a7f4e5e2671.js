var MonoTypeWebFonts = {};
MonoTypeWebFonts.addEvent = function(e, n) {
    if ("undefined" != typeof MonoTypeWebFonts.loadFonts) MonoTypeWebFonts.addEvent(e, n);
    else {
        var o = this;
        setTimeout(function() {
            o.addEvent(e, n)
        }, 0)
    }
};
mti_loadScript(function() {
    if (window.addEventListener) {
        window.addEventListener('load', function() {
            MonoTypeWebFonts.cleanup();
        }, false);
    } else if (window.attachEvent) {
        window.attachEvent('onload', function() {
            MonoTypeWebFonts.cleanup();
        });
    }
    MonoTypeWebFonts.loadColo = function() {};
    MonoTypeWebFonts.cleanupExecuted = false;
    MonoTypeWebFonts.cleanup = function() {
        if (MonoTypeWebFonts.cleanupExecuted === true) {
            return;
        }
        MonoTypeWebFonts.cleanupExecuted = (window['mti_element_cache'].length > 0);
        var className = document.documentElement.className;
        var MTIConfig = window['MTIConfig'] || {
            'RemoveMTIClass': false
        };
        if (MTIConfig['RemoveMTIClass'] == true) {
            eval(function(p, a, c, k, e, d) {
                e = function(c) {
                    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
                };
                if (!''.replace(/^/, String)) {
                    while (c--) {
                        d[e(c)] = k[c] || e(c)
                    }
                    k = [function(e) {
                        return d[e]
                    }];
                    e = function() {
                        return '\\w+'
                    };
                    c = 1
                };
                while (c--) {
                    if (k[c]) {
                        p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
                    }
                }
                return p
            }('8 l(2,n){n(2);2=2.D;r(2){l(2,n);2=2.A}}8 e(4){9(j.e){o j.e(4)}x{5 k=[];l(j.I,8(2){5 a,c=2.4,i;9(c){a=c.z(\' \');p(i=0;i<a.f;i++){9(a[i]===4){k.F(2);J}}}});o k}}H(8(){5 3=e(\'m\');5 u=E.K;5 h=u.B(),C=8(t){o h.G(t)>-1},b=(!(/R|T/i.q(h))&&/S\\s(\\d)/.q(h)),c=L;9((v.$1==6)||(v.$1==7)){c=Q}r(3.f>0){p(5 i=0;i<3.f;i++){5 w=3[i].4.z(\' \');9(w.f==1&&!c){3[i].M(\'N\')}x{3[i].4=3[i].4.y(/m/O,\' \').y(/^\\s+|\\s+$/g,\'\')}}3=e(\'m\')}},P);', 56, 56, '||node|mti_elements|className|var|||function|if|||||getElementsByClassName|length||ua||document|results|walkTheDOM|mti_font_element|func|return|for|test|while||||RegExp|classList|else|replace|split|nextSibling|toLowerCase|is|firstChild|navigator|push|indexOf|setTimeout|body|break|userAgent|false|removeAttribute|class|ig|40000|true|opera|msie|webtv'.split('|'), 0, {}))
        }
        className = className;
        if (!document.getElementById('MonoTypeFontApiFontTracker')) {
            eval(function(p, a, c, k, e, d) {
                e = function(c) {
                    return c.toString(36)
                };
                if (!''.replace(/^/, String)) {
                    while (c--) {
                        d[e(c)] = k[c] || e(c)
                    }
                    k = [function(e) {
                        return d[e]
                    }];
                    e = function() {
                        return '\\w+'
                    };
                    c = 1
                };
                while (c--) {
                    if (k[c]) {
                        p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
                    }
                }
                return p
            }('5 3="6://j.i.z/t/1.7";a(k.l.h==\'8:\'){3=3.g(/6:/,\'8:\')}5 b=9.d(\'e\')[0];5 2=9.v(\'w\');a(2){2.4(\'y\',\'u\');2.4(\'s\',\'o/7\');2.4(\'q\',\'r\');2.4(\'f\',3+"?p=x&n=m");b.c(2)}', 36, 36, '||cssEle|fontTrackingUrl|setAttribute|var|http|css|https|document|if|head|appendChild|getElementsByTagName|HEAD|href|replace|protocol|fonts|fast|window|location|e78acb93-e52f-4dcf-8fa7-7a7f4e5e2671|projectid|text|apiType|rel|stylesheet|type||MonoTypeFontApiFontTracker|createElement|LINK|js|id|net'.split('|'), 0, {}))
        }
        window['mti_element_cache'] = [];
    };
    MonoTypeWebFonts._fontActiveEventList = [];
    MonoTypeWebFonts._fontLoadingEventList = [];
    MonoTypeWebFonts._activeEventList = [];
    MonoTypeWebFonts._inActiveEventList = [];
    MonoTypeWebFonts.addEvent = function(eventName, callbackFunction) {
        if (eventName.toLowerCase() == 'fontactive') {
            MonoTypeWebFonts._fontActiveEventList.push(callbackFunction);
        } else if (eventName.toLowerCase() == 'fontloading') {
            MonoTypeWebFonts._fontLoadingEventList.push(callbackFunction);
        } else if (eventName.toLowerCase() == 'inactive') {
            MonoTypeWebFonts._inActiveEventList.push(callbackFunction);
        } else if (eventName.toLowerCase() == 'active') {
            MonoTypeWebFonts._activeEventList.push(callbackFunction);
        }
    };
    MonoTypeWebFonts.loadFonts = function() {
        MonoTypeWebFonts.load({
            monotype: {
                efg: true,
                reqSub: false,
                enableOtf: false,
                otfJsParentUrl: 'https://fast.fonts.net/jsapi/otjs/',
                pfL: [{
                    'fontfamily': "Proxima Nova W15",
                    'fontWeight': "700",
                    'fontStyle': "normal",
                    contentIds: {
                        EOT: '9682bb7d-efd6-4254-8771-e146c89a72d4',
                        WOFF: 'a3a867b8-141c-4865-9f8d-6dc5766a6bc5',
                        WOFF2: '4db8e0c6-4c06-45f0-a821-ec66fa7bf2f3',
                        TTF: 'b9d6d5ca-ba9b-4fa1-a81e-366891676e4a'
                    },
                    enableSubsetting: false,
                    enableOtf: false
                }, {
                    'fontfamily': "Proxima Nova W15",
                    'fontWeight': "700",
                    'fontStyle': "italic",
                    contentIds: {
                        EOT: '715a0342-db92-4c36-b812-04212361621b',
                        WOFF: 'f015d7cb-8f83-497f-b23e-157a01bfbeb1',
                        WOFF2: 'b0da47e4-2674-430d-8de9-b25a45fa61b7',
                        TTF: '2c5a2cf6-d798-4ecb-9116-dcbd92a8b3e5'
                    },
                    enableSubsetting: false,
                    enableOtf: false
                }, {
                    'fontfamily': "Proxima Nova W15",
                    'fontWeight': "200",
                    'fontStyle': "normal",
                    contentIds: {
                        EOT: '53f72e41-ffd4-47d4-b8bf-b1ab3cada2e5',
                        WOFF: 'fb5639f2-f57b-487d-9610-3dc50820ab27',
                        WOFF2: 'b9ce9aa7-8898-48a1-9ff9-480158287708',
                        TTF: '2eafe9b7-5a21-49c0-84ca-54c54f899019'
                    },
                    enableSubsetting: false,
                    enableOtf: false
                }, {
                    'fontfamily': "Proxima Nova W15",
                    'fontWeight': "200",
                    'fontStyle': "italic",
                    contentIds: {
                        EOT: '8fec2708-71b6-4d6c-858f-47fcb99e7601',
                        WOFF: '5dcab973-758a-4f4b-beee-965124bc39b6',
                        WOFF2: '9c75b68b-3aae-4a60-8a93-f79099fa3051',
                        TTF: 'c729f755-cac7-421c-b045-a161883bdf71'
                    },
                    enableSubsetting: false,
                    enableOtf: false
                }, {
                    'fontfamily': "Proxima Nova W15",
                    'fontWeight': "400",
                    'fontStyle': "normal",
                    contentIds: {
                        EOT: 'ccd538c8-85a6-4215-9f3f-643c415bbb19',
                        WOFF: 'e8e438df-9715-40ed-b1ae-58760b01a3c0',
                        WOFF2: 'f9f065ee-94ee-4f13-80d2-10a7f6cd826e',
                        TTF: 'baf65064-a8a8-459d-96ad-d315581d5181'
                    },
                    enableSubsetting: false,
                    enableOtf: false
                }, {
                    'fontfamily': "Proxima Nova W15",
                    'fontWeight': "400",
                    'fontStyle': "italic",
                    contentIds: {
                        EOT: '39b8a8a4-edc9-4785-af87-d2bcad9cc963',
                        WOFF: 'ddfa5815-0439-455c-ab0a-704be1e727e3',
                        WOFF2: 'e1c4dbe8-b723-4e07-a014-4f809a03c0dd',
                        TTF: '561cb800-4365-4d2a-8971-7fb5524aa7bd'
                    },
                    enableSubsetting: false,
                    enableOtf: false
                }, {
                    'fontfamily': "Proxima Nova W15",
                    'fontWeight': "600",
                    'fontStyle': "normal",
                    contentIds: {
                        EOT: 'f0900b9e-436e-4bb2-ba92-174617a6b4bc',
                        WOFF: '91b14d48-ff2a-4a42-87df-b04c76cfb67f',
                        WOFF2: 'da9990b8-32d9-4402-86e8-bec78e679403',
                        TTF: '65e3a762-7125-4d24-9247-fc73d4786cd0'
                    },
                    enableSubsetting: false,
                    enableOtf: false
                }, {
                    'fontfamily': "Proxima Nova W15",
                    'fontWeight': "600",
                    'fontStyle': "italic",
                    contentIds: {
                        EOT: 'da821cac-572d-47e0-8320-82a02dec3a33',
                        WOFF: 'da1887f8-f4f1-4bf8-ba4a-800c75895f58',
                        WOFF2: 'b7444d2b-943a-45cb-bef2-493c666bb92b',
                        TTF: '8a90f222-9a43-42ad-8100-cefe67360d60'
                    },
                    enableSubsetting: false,
                    enableOtf: false
                }],
                selectorFontMap: {},
                ck: 'd44f19a684109620e484167ca390e818ae06e117366460e18aa8ea1f67795fbcd10c3900b3ea3bc7c026af622eb5a83477d0aa6e64b0adc311177dd183ca9fcccc428d8db69d26ff198519c4d04ee3e5bf51bd512ce48b94a3d39ea4450cec2d959ed8685de240b58b91e41fdc1ac5f8abf85a6e74ee0769b60e5fe9d66dc054d4915747391209e8326106c96e3e39a973c3d716cee034dcd1041c99f8d98416f8d97ef3697ba117416a3394dbd327dbf6cbd20f03d4be7c67ba91ed4ae60f290c81c0872244d419408ba4eecf9c8828230a04be149f26e36aeb73e5b3a256a2e677aaae5d984dbe7926cca2057edc4680eb2273bffb00ff0613ce64055b',
                fcURL: 'http://fast.fonts.net/dv2/',
                env: '',
                projectId: 'e78acb93-e52f-4dcf-8fa7-7a7f4e5e2671',
                EOD: null
            },
            fontloading: function(fontFamily, fontDescription) {
                for (var i = 0; i < MonoTypeWebFonts._fontLoadingEventList.length; i++) {
                    MonoTypeWebFonts._fontLoadingEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);
                }
            },
            fontactive: function(fontFamily, fontDescription) {
                for (var i = 0; i < MonoTypeWebFonts._fontActiveEventList.length; i++) {
                    MonoTypeWebFonts._fontActiveEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);
                }
            },
            inactive: function() {
                MonoTypeWebFonts.cleanup();
                for (var i = 0; i < MonoTypeWebFonts._inActiveEventList.length; i++) {
                    MonoTypeWebFonts._inActiveEventList[i].call(MonoTypeWebFonts);
                }
            },
            active: function() {
                MonoTypeWebFonts.cleanup();
                for (var i = 0; i < MonoTypeWebFonts._activeEventList.length; i++) {
                    MonoTypeWebFonts._activeEventList[i].call(MonoTypeWebFonts);
                }
            }
        });
    };
    try {
        MonoTypeWebFonts.loadFonts();
    } catch (e) {}
    setTimeout(function() {
        MonoTypeWebFonts.cleanup();
    }, 40000);
});

function mti_loadScript(a) {
    "undefined" != typeof MTIConfig && 1 == MTIConfig.EnableCustomFOUTHandler && (document.documentElement.style.visibility = "hidden");
    var mti_coreJsURL = "https://fast.fonts.net/jsapi/core/mt.js";
    var env = "";
    var UA = navigator.userAgent.toLowerCase(),
        isIE8 = -1 != UA.indexOf("msie") ? parseInt(UA.split("msie")[1]) : !1;
    isIE8 && (mti_coreJsURL = "https://fast.fonts.net/jsapi/core/mti.js");
    "undefined" != typeof MTIConfig && 1 == MTIConfig.EnableDSForAllFonts && (mti_coreJsURL = isIE8 ? "https://fast.fonts.net/jsapi/core/mti_cjk.js" : "https://fast.fonts.net/jsapi/core/mt_cjk.js");
    if ("undefined" != typeof MTIConfig && "undefined" != typeof MTIConfig.version && "" != MTIConfig.version) {
        var fileName = mti_coreJsURL.split("/").pop();
        mti_coreJsURL = "https://fast.fonts.net/jsapi/core/" + MTIConfig.version + "/" + fileName
    }
    var b = document.createElement("script");
    b.type = "text/javascript", b.readyState ? b.onreadystatechange = function() {
        ("loaded" == b.readyState || "complete" == b.readyState) && (b.onreadystatechange = null, a())
    } : b.onload = function() {
        a()
    }, b.src = mti_coreJsURL, document.getElementsByTagName("head")[0].appendChild(b);
};