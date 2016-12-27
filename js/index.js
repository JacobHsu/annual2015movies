;
(function() {
    function a(i, h) {
        return Math.floor(Math.random() * (h - i + 1)) + i }

    function e(i) {
        var h = i.match(/(-?[0-9\.]+)/g);
        if (!h) {
            return [0, 0] }
        return h.slice(4).map(function(j) {
            return parseFloat(j) }) }

    function f() {
        return location.hash.substr(1) | 0 }

    function c() {
        return $(".section[data-anchor=" + f() + "]") }
    var g = ["jquery", "_"];
    if (isMobile) {
        [].push.call(g, "touchSwipe") } else {
        [].push.call(g, "transform", "pause", "keyframes", "fullPage") 
       }
    g.push(b);
    Do.ready.apply(Do, g);

    function b() {
        var B = 1440 / 15;
        var l = $(window);
        var v = $(document);
        var q = $("#header");
        var D = q.outerHeight();
        var K = $(".start-page-widget");
        var J = $(".bg");
        var j = $(".content");
        var m = $(".section");
        var z = J.find(".bg-items");
        var G = "animate";
        var w = $("#note-id").val();
        var k = $(".barrage-form");
        var F = $(".checkbox");
        var r = $('meta[name="activity_id"]').attr("content");
        var I = $("#back-to-top");
        var h = $(['<span class="barrage test">', "</span>"].join(""));
        $("body").append(h);
        _.templateSettings = { interpolate: /\{\{(.+?)\}\}/g };
        I.on("click", function() { $.fn.fullpage.moveTo(0) });
        $(".next").on("click", function() {
            var S = $(this).parents(".section").next(".section");
            P(S) });
        $(".pre").on("click", function() {
            var S = $(this).parents(".section").prev(".section");
            P(S) });
        (function() { R();
            l.on("resize", function() { R() });
            if (w) { i() }

            Q(0);
            Q(f());
            if (isMobile) { n();
                m.swipe({ swipe: function(X, ad, W, aa, ac, Y) {
                        var ab = $(this);
                        var ae, Z;
                        switch (ad) {
                            case "up":
                                Z = ab.next(".section");
                                P(Z, 1000 - aa);
                                break;
                            case "down":
                                ae = ab.prev(".section");
                                P(ae, 1000 - aa);
                                break } } });
                $(".subjects-section").on("touchstart", function(Y) {
                    var X = $(this);
                    var W = Y.originalEvent.touches[0].pageX;
                    X.data("px", W) }).on("touchend touchcancel", function(ac) {
                    var ab = $(this);
                    var aa = ab.find(".subjects-wrapper");
                    var X = aa.width() - l.width();
                    var Z = void 0;
                    var ad = e(aa.css("transform"));
                    var W = ad[0];
                    var Y = { "transform-origin": "0px 0px 0px", "transition-duration": "0ms", "transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)" };
                    if (W > 0) { W = 0;
                        Y["transition-duration"] = "200ms" } else {
                        if (W < -X) { W = -X;
                            Y["transition-duration"] = "200ms" } }
                    Y.transform = "translate(" + W + "px, 0) translateZ(0px)";
                    aa.css(Y);
                    ab.data("px", Z) }).on("touchmove", function(aa) {
                    var ab = $(this);
                    var Z = ab.find(".subjects-wrapper");
                    var ae = ab.data("px");
                    var X = aa.originalEvent.touches[0].pageX;
                    var ag = X - ae;
                    var ac = e(Z.css("transform"));
                    var ad = ac[0];
                    var W = Z.width() - l.width();
                    var af = 30;
                    var Y = { "transform-origin": "0px 0px 0px", "transition-duration": "0ms", "transition-timing-function": "cubic-bezier(0.1, 0.57, 0.1, 1)" };
                    ad += ag;
                    if (ad > af) { ad = af } else {
                        if (ad < -(W + af)) { ad = -(W + af) } else {
                            if (ad > 0 && ad < af) { Y["transition-duration"] = "200ms" } else {
                                if (ad > -(W + af) && ad < -W) { Y["transition-duration"] = "200ms" } else {} } } }
                    Y.transform = "translate(" + ad + "px, 0) translateZ(0px)";
                    Z.css(Y);
                    ab.data("px", X) });
                return }

            var V = c();
            $("#main").fullpage({ afterLoad: function(X, W) { W -= 1;
                    var Y = m.eq(W);
                    V = Y;
                    N(Y);
                    if (W === 0) { I.hide() } else { I.show() } }, onLeave: function(W, Y) { W -= 1;
                    var X = m.eq(W);
                    setTimeout(function() { A(X);
                        o(X) }, 700);
                    Q(Y) }, afterRender: function() { n();
                    var W = m.eq(0);
                    x();
                    N(W) 
                } });
            $(".down-btn").on("click", function() { $.fn.fullpage.moveSectionDown() });

            F.on("click", function() {
                var Y = $(this);
                var X = Y.parents(".section");
                var W = Y.parents("form");
                Y.toggleClass("on");
                if (Y.hasClass("on")) { k.addClass("on");
                    F.addClass("on");
                    t(X);
                    W.find("input").trigger("focus") } else { k.removeClass("on");
                    F.removeClass("on");
                    A(X) } });

            var U, S;
            if (typeof document.hidden !== "undefined") { U = "hidden";
                S = "visibilitychange" } else {
                if (typeof document.mozHidden !== "undefined") { U = "mozHidden";
                    S = "mozvisibilitychange" } else {
                    if (typeof document.msHidden !== "undefined") { U = "msHidden";
                        S = "msvisibilitychange" } else {
                        if (typeof document.webkitHidden !== "undefined") { U = "webkitHidden";
                            S = "webkitvisibilitychange" } } } }

            function T() {
                if (document[U]) { A(V) } else { t(V) } }
            document.addEventListener(S, T, false) })();


        function L(U) {
            var T = Math.min.apply(Math, U);
            var S = U.indexOf(T);
            if (S < 0) {
                return 0 }
            return S }

        function M(S) { h.text(S);
            return h.outerWidth() }

        function R() {
            var T = l.height();
            var X = l.width();
            var Y = $(".lyric-widget .top-section");
            var V = $(".excerpt-widget .top-section");
            var S = $(".excerpt-section");
            var W = parseFloat(Y.css("bottom"));
            var U = parseFloat(V.css("bottom"));
            Y.height(T - W);
            V.height(T - U);
            if (X < 770) { S.width(X - 20) }
            J.height(T);
            J.width(X);
            j.height(T);
            j.width(X) }

        function n() { $(".msk").hide() }

        function x() {
            var S = 10;
            z.each(function() {
                var Y = $(this);
                var ac = Y.find(".bg-items-inner");
                var ab = ac.find(".bg-item");
                var T = Y.outerWidth();
                var Z = ab.outerWidth();
                var W = Math.floor((T - S) / (Z + S)) + 1;
                ac.width((Z + S) * W);
                for (var X = 0; X < W - 1; X++) { ac.append(ab.clone()) }
                var aa = Y.find(".bg-item");
                var V = a(20, 26) * 5 + "s";
                var U = a(20, 26) * 5 + "s";
                aa.each(function(ae) {
                    var ah = $(this);
                    var ag = -(Z + S) * (ae % 10);
                    var ad = "c-bg-animate-" + ae;
                    $.keyframe.define({ name: ad, "0%": { "background-position": ag + "px 0" }, "100%": { "background-position": ag + "px " + (ae % 2 ? "-" : "") + "1175px" } });
                    var af = ad + " " + (ae % 2 ? V : U) + " linear infinite";
                    ah.playKeyframe(af);
                    ah.pauseKeyframe() }) }) }

        function H(S) { S.addClass(G);
            S.find(".bg-item").each(function() {
                var T = $(this);
                T.resumeKeyframe() }) }

        function o(S) { S.removeClass(G);
            S.find(".bg-item").each(function() {
                var T = $(this);
                T.pauseKeyframe() }) }

        function p(W, S) {

        }

        function E(V, S) {
            var X = V.data("anchor") | 0;
            var W = f();
            if (X !== W) {
                return }
            var T = 0;
            var U = 0;
            S.forEach(function(aa, Y) {
                var ab = V.data("timers") || [];
                var Z = U / B * 1000;
                if (Y > 0) { T += Z / a(4, 6) }
                var ac = setTimeout(function() { s(V, aa.content, aa.mine) }, T);
                U = M(aa.content);
                ab.push(ac);
                V.data("timers", ab) }) }

        function t(S) { p(S, function(T) { E(S, T) }) }

        function A(S) { S.data("slot", []);
            S.find(".barrage").remove();
            _.each(S.data("timers") || [], clearTimeout);
            S.data("timers", []) }

        function N(S) { H(S);
            t(S) }

        function u(S) {
            var T = S.data("src");
            if (S.is("img")) { S.attr("src", T) } else {
                if (S.is("div")) { S.css({ "background-image": "url(" + T + ")" }) } } }

        function Q(S) {
            var W = S - 2;
            var U = W + 5;
            if (W < 0) { W = 0 }
            var V = m.slice(W, U);
            var T = V.find("[data-src]");
            T.each(function() {
                var X = $(this);
                u(X) });
            if (!isMobile) { V.each(function() { p($(this)) }) } }

        function P(S, T) { T = T || 800;
            if (!S.length) {
                return }
            Q(m.index(S));
            $("html, body").stop().animate({ scrollTop: S.offset().top }, T, function() { location.hash = "#" + S.attr("id") }) }

        } })();
