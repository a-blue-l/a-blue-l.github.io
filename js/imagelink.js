(function(e) {
    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(i.exports, i, i.exports, n),
        i.loaded = !0,
        i.exports
    }
    var t = {};
    return n.m = e,
    n.c = t,
    n.p = "",
    n(0)
})([function(e, t, n) {
    var r, i, s, o, u, a, f, l = [].slice;
    s = n(6),
    f = n(17),
    r = n(22),
    o = n(21),
    u = function() {
        var e;
        e = 1 <= arguments.length ? l.call(arguments, 0) : [];
        if ((e != null ? e.length: void 0) > 0) return a({},
        function(t) {
            var n, r, i, s, o, u;
            s = [];
            for (n = 0, i = e.length; n < i; n++) u = e[n],
            s.push(function() {
                var e;
                e = [];
                for (r in u) o = u[r],
                e.push(t[r] = o);
                return e
            } ());
            return s
        })
    },
    a = function(e, t) {
        return t(e),
        e
    },
    i = function(e, t, n) {
        if (e) return e.replace(/(http:\/\/\S*.com\/)(\S+\/)*(\w*\.\w+)/, "$1dr/" + t + "_" + n + "_90/$3")
    },
    window.template = function() {
        var e, t, n, a, l, c, h, p, d, v, m, g, y, b, w, E, S, x, N, C, k, L, A;
        g = !1,
        L = 20,
        x = req.ls,
        N = req.qid,
        l = req.ctype,
        e = req.ad,
        A = req.w,
        v = req.h,
        N = N != null ? N: "",
        S = o.setUrl(e[0]) + "&ls=" + x + "&ctype=" + l,
        n = conf.imglinkBorderSize,
        y = conf.imglinkImageBorderSize,
        t = conf.imglinkBorderColor,
        d = conf.imglinkHColor,
        p = conf.imglinkFsSize,
        h = conf.imglinkFsFamily,
        c = conf.imglinkFsColor,
        a = {
            borderSize: n != null ? n: 1,
            imgBorderSize: y != null ? y: 1,
            borderColor: t != null ? t: "CFD8DC",
            hColor: d != null ? d: "00BE35",
            fsSize: p != null ? p: 14,
            fsFamily: h != null ? h: "Microsoft Yahei",
            fsColor: c != null ? c: "333333",
            logoSrc: S,
            textHeight: L,
            imageScale: g
        },
        w = s.getLayout(A, v);
        if (g) {
            C = req.ad;
            for (m = 0, E = C.length; m < E; m++) b = C[m],
            b.pic = i(b.pic, w.unitWidth, w.unitHeight)
        }
        return k = u(req, w, a),
        f.init(l, N, e, x),
        r(k)
    }
},
, , , , ,
function(e, t) {
    var n;
    n = {
        getLayout: function(e, t) {
            var n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T;
            l = 32,
            T = 86,
            x = 86,
            S = 180,
            E = 180,
            y = 2,
            w = 2,
            g = 20,
            b = 20,
            i = !1;
            if (e < T || t < x) return {
                column: 0,
                line: 0
            };
            a = Math.floor(e / T),
            f = Math.floor(t / x),
            c = [],
            m = [],
            n = function(n, r) {
                var i, s, o, u, a;
                i = Math.floor(e / n),
                s = Math.floor(t / r),
                s = Math.min(s, Math.floor(l / i)),
                u = Math.floor((e - n * i) / (i + 1)),
                a = Math.floor((t - r * s) / (s + 1)),
                o = Math.abs(n / (r - 20) - 1.8);
                if (s > 0 && i > 0 && a > 1 && u > 1) return m.push({
                    column: i,
                    line: s,
                    unitWidth: n,
                    unitHeight: r,
                    spaceX: u,
                    spaceY: a,
                    rate: o
                })
            };
            for (r = o = h = T, p = S; o <= p; r = o += 5) for (s = u = d = x, v = E; u <= v; s = u += 5) n(r, s);
            return c = m.sort(function(e, t) {
                return e.spaceX + e.spaceY - (t.spaceX + t.spaceY)
            }).slice(0, 10).sort(function(e, t) {
                return e.rate - t.rate
            }),
            c[0]
        }
    },
    e.exports = n
},
, , , , , , , , , ,
function(e, t) {
    var n;
    n = {
        init: function(e, t, n, r) {
            return this.pvSrc = "http://stat.lianmeng.360.cn/s2/srp.gif?lm_extend=ctype:" + e + "&qid=" + t + "&nu=" + n.length + "&ls=" + r + "&_r=" + (new Date).getTime(),
            this.clkSrc = "http://stat.lianmeng.360.cn/s2/clk.gif?lm_extend=ctype:" + e + "&qid=" + t + "&nu=" + n.length + "&ls=" + r + "&_r=" + (new Date).getTime(),
            this.sendLog(this.pvSrc),
            $(document).ready(function(e) {
                return function() {
                    return $(document).delegate("a.clk", "click",
                    function(t) {
                        var n, r, i, s, o, u;
                        return s = $(t.currentTarget),
                        n = (r = s.attr("data-index")) != null ? r: "",
                        o = (i = s.attr("title")) != null ? i: "",
                        u = e.clkSrc + "&index=" + n + "&txt=" + encodeURIComponent(o) + "&_r=" + (new Date).getTime(),
                        e.sendLog(u)
                    })
                }
            } (this))
        },
        sendLog: function(e) {
            var t;
            return t = new Image,
            t.onload = t.onerror = function() {
                return t = null
            },
            t.src = e
        }
    },
    e.exports = n
},
,
function(e, t, n) {
    "use strict";
    function r(e) {
        return e != null && e !== ""
    }
    function i(e) {
        return (Array.isArray(e) ? e.map(i) : e && typeof e == "object" ? Object.keys(e).filter(function(t) {
            return e[t]
        }) : [e]).filter(r).join(" ")
    }
    function u(e) {
        return s[e] || e
    }
    function a(e) {
        var t = String(e).replace(o, u);
        return t === "" + e ? e: t
    }
    t.merge = function f(e, t) {
        if (arguments.length === 1) {
            var n = e[0];
            for (var i = 1; i < e.length; i++) n = f(n, e[i]);
            return n
        }
        var s = e["class"],
        o = t["class"];
        if (s || o) s = s || [],
        o = o || [],
        Array.isArray(s) || (s = [s]),
        Array.isArray(o) || (o = [o]),
        e["class"] = s.concat(o).filter(r);
        for (var u in t) u != "class" && (e[u] = t[u]);
        return e
    },
    t.joinClasses = i,
    t.cls = function(n, r) {
        var s = [];
        for (var o = 0; o < n.length; o++) r && r[o] ? s.push(t.escape(i([n[o]]))) : s.push(i(n[o]));
        var u = i(s);
        return u.length ? ' class="' + u + '"': ""
    },
    t.style = function(e) {
        return e && typeof e == "object" ? Object.keys(e).map(function(t) {
            return t + ":" + e[t]
        }).join(";") : e
    },
    t.attr = function(n, r, i, s) {
        return n === "style" && (r = t.style(r)),
        "boolean" == typeof r || null == r ? r ? " " + (s ? n: n + '="' + n + '"') : "": 0 == n.indexOf("data") && "string" != typeof r ? (JSON.stringify(r).indexOf("&") !== -1 && console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"), r && typeof r.toISOString == "function" && console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0"), " " + n + "='" + JSON.stringify(r).replace(/'/g, "&apos;") + "'") : i ? (r && typeof r.toISOString == "function" && console.warn("Jade will stringify dates in ISO form after 2.0.0"), " " + n + '="' + t.escape(r) + '"') : (r && typeof r.toISOString == "function" && console.warn("Jade will stringify dates in ISO form after 2.0.0"), " " + n + '="' + r + '"')
    },
    t.attrs = function(n, r) {
        var s = [],
        o = Object.keys(n);
        if (o.length) for (var u = 0; u < o.length; ++u) {
            var a = o[u],
            f = n[a];
            "class" == a ? (f = i(f)) && s.push(" " + a + '="' + f + '"') : s.push(t.attr(a, f, !1, r))
        }
        return s.join("")
    };
    var s = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;"
    },
    o = /[&<>"]/g;
    t.escape = a,
    t.rethrow = function l(e, t, r, i) {
        if (e instanceof Error) {
            if ((typeof window != "undefined" || !t) && !i) throw e.message += " on line " + r,
            e;
            try {
                i = i || n(20).readFileSync(t, "utf8")
            } catch(s) {
                l(e, null, r)
            }
            var o = 3,
            u = i.split("\n"),
            a = Math.max(r - o, 0),
            f = Math.min(u.length, r + o),
            o = u.slice(a, f).map(function(e, t) {
                var n = t + a + 1;
                return (n == r ? "  > ": "    ") + n + "| " + e
            }).join("\n");
            throw e.path = t,
            e.message = (t || "Jade") + ":" + r + "\n" + o + "\n\n" + e.message,
            e
        }
        throw e
    },
    t.DebugItem = function(t, n) {
        this.lineno = t,
        this.filename = n
    }
},
function(e, t) {},
function(e, t) {
    var n;
    n = {
        serialize: function(e) {
            var t, n, r, i, s, o;
            i = [],
            r = function(e) {
                return i.push(e.name + "=" + e.val)
            };
            for (t = n = 0, o = e.length; 0 <= o ? n < o: n > o; t = 0 <= o ? ++n: --n) r(e[t]);
            return s = i.join("&"),
            s
        },
        setUrl: function(e) {
            var t, n, r, i;
            return n = [],
            t = e.curl.substr(0, e.curl.search(/\?/) + 1),
            r = e.curl.substr(e.curl.search(/\?/) + 1),
            r.replace(/([^=&]+)=([^&]*)/g,
            function(e, t, r) {
                return t === "q" ? n.push({
                    name: t,
                    val: "360"
                }) : n.push({
                    name: t,
                    val: r
                })
            }),
            t ? i = t + this.serialize(n) : i = e.curl,
            i
        }
    },
    e.exports = n
},
function(e, t, n) {
    var r = n(19);
    e.exports = function(t) {
        var n = [],
        i = {},
        s,
        o = t || {};
        return function(e, t, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x) {
            n.push("<style>html{\n    width: " + r.escape((s = x) == null ? "": s) + "px;\n    height: " + r.escape((s = c) == null ? "": s) + "px;\n}\nhtml,body,div,a,p,img{\n    margin : 0;\n    padding : 0;\n    border : 0;\n    outline : 0;\n    font-size: 100%;\n    font-family: Microsoft Yahei, '\u5b8b\u4f53';\n}\nbody{\n    background-color: white;\n}\na{\n    text-decoration: none;    \n}\n.container{\n    width: " + r.escape((s = x - 2 * o) == null ? "": s) + "px;\n    height: " + r.escape((s = c - 2 * o) == null ? "": s) + "px;\n    border: " + r.escape((s = o) == null ? "": s) + "px solid #" + r.escape((s = t) == null ? "": s) + ";\n    padding: " + r.escape((s = g) == null ? "": s) + "px;\n}\n.container::after{\n    clear: both;\n}\n\n.logo{\n    position:absolute;    \n    right:0;\n    bottom:0;\n    width: 18px;\n    height: 18px;\n    background:url('http://p5.qhimg.com/d/inn/3ac333ef/logo2.png') no-repeat;\n    _filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\"http://p5.qhimg.com/d/inn/3ac333ef/logo2.png\");\n    _background:none;\n}\n.row::after{\n    clear: both;\n}\n.item{\n    float: left;\n    *display: inline;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    border: " + r.escape((s = d) == null ? "": s) + "px solid #fff;\n    width: " + r.escape((s = S - 2 * d) == null ? "": s) + "px;\n    height: " + r.escape((s = E - 2 * d) == null ? "": s) + "px;\n}\n.item img, .item div{\n    display: block;\n    width: " + r.escape((s = S - 2 * d) == null ? "": s) + "px;\n    height: " + r.escape((s = E - w - 2 * d) == null ? "": s) + "px;\n}\n.item div{\n    background-repeat: no-repeat;\n    background-position: center;\n}\n.item p{\n    text-align: center;\n    height: 20px;\n    line-height: 20px;\n    font-size: " + r.escape((s = l) == null ? "": s) + 'px;\n}\n.row a:link{\n    font-family: "' + r.escape((s = f) == null ? "": s) + '","\u5b8b\u4f53";\n    color: #' + r.escape((s = a) == null ? "": s) + ";\n    float: left;\n    overflow: hidden;\n}\n.row a:visited{\n    color: #" + r.escape((s = a) == null ? "": s) + ";\n}\n.row a:hover{\n    background-color: white;\n    color: #" + r.escape((s = h) == null ? "": s) + ";\n    border: " + r.escape((s = d) == null ? "": s) + "px solid #" + r.escape((s = h) == null ? "": s) + ";\n}\n</style>"),
            i.itemLayout = s = function(e, t, i, o, u, a, f) {
                var l = this && this.block,
                c = this && this.attributes || {};
                f ? n.push("<div" + r.attr("style", "background-image: url('" + o[e + t * i].pic + "')", !0, !1) + "></div><p>" + r.escape((s = o[e + t * i].tit) == null ? "": s) + "</p>") : n.push("<img" + r.attr("src", "" + o[e + t * i].pic + "", !0, !1) + "/><p>" + r.escape((s = o[e + t * i].tit) == null ? "": s) + "</p>")
            },
            i.colLayout = s = function(e, t, s, o, u, a, f, l) {
                var c = this && this.block,
                h = this && this.attributes || {},
                p = 0;
                while (p < o) p == 0 ? (n.push("<a" + r.attr("href", t[e + p * s].curl, !0, !1) + ' target="_blank"' + r.attr("title", t[e + p * s].tit, !0, !1) + r.attr("data-index", "" + (e + p * s) + "", !0, !1) + r.attr("style", "margin-left:" + (u - 1) + "px;margin-right:" + u + "px;", !0, !1) + ' class="item clk">'), i.itemLayout(e, p, s, t, a, f, l), n.push("</a>")) : p == o - 1 ? (n.push("<a" + r.attr("href", t[e + p * s].curl, !0, !1) + ' target="_blank"' + r.attr("title", t[e + p * s].tit, !0, !1) + r.attr("data-index", "" + (e + p * s) + "", !0, !1) + ' class="item clk">'), i.itemLayout(e, p, s, t, a, f, l), n.push("</a>")) : (n.push("<a" + r.attr("href", t[e + p * s].curl, !0, !1) + ' target="_blank"' + r.attr("title", t[e + p * s].tit, !0, !1) + r.attr("data-index", "" + (e + p * s) + "", !0, !1) + r.attr("style", "margin-right:" + u + "px;", !0, !1) + ' class="item clk">'), i.itemLayout(e, p, s, t, a, f, l), n.push("</a>")),
                p++
            },
            i.rowLayout = s = function(e, t, s, o, u, a, f, l) {
                var c = this && this.block,
                h = this && this.attributes || {},
                p = 0;
                while (p < e) p == 0 ? (n.push("<div" + r.attr("style", "height:" + f + "px;margin-bottom:" + o + "px;margin-top:" + (o - 1) + "px;", !0, !1) + ' class="row">'), i.colLayout(p, s, e, t, u, a, f, l), n.push("</div>")) : p == e - 1 ? (n.push("<div" + r.attr("style", "height:" + f + "px;", !0, !1) + ' class="row">'), i.colLayout(p, s, e, t, u, a, f, l), n.push("</div>")) : (n.push("<div" + r.attr("style", "height:" + f + "px;margin-bottom:" + o + "px;", !0, !1) + ' class="row">'), i.colLayout(p, s, e, t, u, a, f, l), n.push("</div>")),
                p++
            },
            n.push('<div class="container">'),
            i.rowLayout(v, u, e, b, y, S, E, p),
            n.push("</div><a" + r.attr("href", "" + m + "", !0, !1) + ' target="_blank" data-t="logo"><div class="logo"></div></a>')
        }.call(this, "ad" in o ? o.ad: typeof ad != "undefined" ? ad: undefined, "borderColor" in o ? o.borderColor: typeof borderColor != "undefined" ? borderColor: undefined, "borderSize" in o ? o.borderSize: typeof borderSize != "undefined" ? borderSize: undefined, "column" in o ? o.column: typeof column != "undefined" ? column: undefined, "fsColor" in o ? o.fsColor: typeof fsColor != "undefined" ? fsColor: undefined, "fsFamily" in o ? o.fsFamily: typeof fsFamily != "undefined" ? fsFamily: undefined, "fsSize" in o ? o.fsSize: typeof fsSize != "undefined" ? fsSize: undefined, "h" in o ? o.h: typeof h != "undefined" ? h: undefined, "hColor" in o ? o.hColor: typeof hColor != "undefined" ? hColor: undefined, "imageScale" in o ? o.imageScale: typeof imageScale != "undefined" ? imageScale: undefined, "imgBorderSize" in o ? o.imgBorderSize: typeof imgBorderSize != "undefined" ? imgBorderSize: undefined, "line" in o ? o.line: typeof line != "undefined" ? line: undefined, "logoSrc" in o ? o.logoSrc: typeof logoSrc != "undefined" ? logoSrc: undefined, "padding" in o ? o.padding: typeof padding != "undefined" ? padding: undefined, "spaceX" in o ? o.spaceX: typeof spaceX != "undefined" ? spaceX: undefined, "spaceY" in o ? o.spaceY: typeof spaceY != "undefined" ? spaceY: undefined, "textHeight" in o ? o.textHeight: typeof textHeight != "undefined" ? textHeight: undefined, "unitHeight" in o ? o.unitHeight: typeof unitHeight != "undefined" ? unitHeight: undefined, "unitWidth" in o ? o.unitWidth: typeof unitWidth != "undefined" ? unitWidth: undefined, "w" in o ? o.w: typeof w != "undefined" ? w: undefined),
        n.join("")
    }
}]);