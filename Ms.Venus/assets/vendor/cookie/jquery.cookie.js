/*
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a) { if (typeof define === "function" && define.amd) { define(["jquery"], a) } else { if (typeof exports === "object") { a(require("jquery")) } else { a(jQuery) } } }(function(a) { var f = /\+/g;

    function d(i) { return b.raw ? i : encodeURIComponent(i) }

    function c(i) { return b.raw ? i : decodeURIComponent(i) }

    function h(i) { return d(b.json ? JSON.stringify(i) : String(i)) }

    function e(j) { if (j.indexOf('"') === 0) { j = j.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\") } try { j = decodeURIComponent(j.replace(f, " ")); return b.json ? JSON.parse(j) : j } catch (i) {} }

    function g(j, i) { var k = b.raw ? j : e(j); return a.isFunction(i) ? i(k) : k } var b = a.cookie = function(o, w, r) { if (w !== undefined && !a.isFunction(w)) { r = a.extend({}, b.defaults, r); if (typeof r.expires === "number") { var m = r.expires,
                    v = r.expires = new Date();
                v.setTime(+v + m * 86400000) } return (document.cookie = [d(o), "=", h(w), r.expires ? "; expires=" + r.expires.toUTCString() : "", r.path ? "; path=" + r.path : "", r.domain ? "; domain=" + r.domain : "", r.secure ? "; secure" : ""].join("")) } var u = o ? undefined : {}; var k = document.cookie ? document.cookie.split("; ") : []; for (var n = 0, p = k.length; n < p; n++) { var s = k[n].split("="); var q = c(s.shift()); var j = s.join("="); if (o && o === q) { u = g(j, w); break } if (!o && (j = g(j)) !== undefined) { u[q] = j } } return u };
    b.defaults = {};
    a.removeCookie = function(i, j) { if (a.cookie(i) === undefined) { return false } a.cookie(i, "", a.extend({}, j, { expires: -1 })); return !a.cookie(i) } }));