(function(a) { var h = a(window); var g = a("#sidenavWrapper"); var e = a("#headerArea"); var d = a("#footerNav"); var b = a(".sidenav-black-overlay");
    h.on("load", function() { a("#preloader").fadeOut("1000", function() { a(this).remove() }) });
    a("#suhaNavbarToggler").on("click", function() { g.addClass("nav-active");
        e.addClass("header-out");
        d.addClass("footer-out");
        b.addClass("active") });
    a("#goHomeBtn").on("click", function() { g.removeClass("nav-active");
        e.removeClass("header-out");
        d.removeClass("footer-out");
        b.removeClass("active") });
    b.on("click", function() { a(this).removeClass("active");
        g.removeClass("nav-active");
        e.removeClass("header-out");
        d.removeClass("footer-out") });
    a(".choose-size-radio li").on("click", function() { a(".choose-size-radio li").removeClass("active");
        a(this).addClass("active") });
    a(".add2cart-notify").on("click", function() { a("body").append("<div class='add2cart-notification animated fadeIn'>Added to cart successfully!</div>");
        a(".add2cart-notification").delay(2000).fadeOut() }); if (a.fn.owlCarousel) { var i = a(".hero-slides");
        i.owlCarousel({ items: 1, loop: true, autoplay: true, dots: true, center: true, margin: 0, nav: true, navText: [('<i class="icofont-thin-left"></i>'), ('<i class="icofont-thin-right"></i>')] });
        i.on("translate.owl.carousel", function() { var j = a("[data-animation]");
            j.each(function() { var k = a(this).data("animation");
                a(this).removeClass("animated " + k).css("opacity", "0") }) });
        a("[data-delay]").each(function() { var j = a(this).data("delay");
            a(this).css("animation-delay", j) });
        a("[data-duration]").each(function() { var j = a(this).data("duration");
            a(this).css("animation-duration", j) });
        i.on("translated.owl.carousel", function() { var j = i.find(".owl-item.active").find("[data-animation]");
            j.each(function() { var k = a(this).data("animation");
                a(this).addClass("animated " + k).css("opacity", "1") }) }) } if (a.fn.owlCarousel) { var c = a(".flash-sale-slide");
        c.owlCarousel({ items: 3, margin: 10, loop: true, autoplay: true, smartSpeed: 800, autoplayTimeout: 5000, dots: true, nav: false }) } if (a.fn.owlCarousel) { var f = a(".product-slides");
        f.owlCarousel({ items: 1, margin: 0, loop: false, autoplay: true, autoplayTimeout: 5000, dots: true, nav: true, navText: [('<i class="icofont-rounded-left"></i>'), ('<i class="icofont-rounded-right"></i>')] }) } if (a.fn.tooltip) { a('[data-toggle="tooltip"]').tooltip() } if (a.fn.jarallax) { a(".jarallax").jarallax({ speed: 0.5 }) } if (a.fn.counterUp) { a(".counter").counterUp({ delay: 150, time: 3000 }) } a('a[href="#"]').on("click", function(j) { j.preventDefault() }); if (a.fn.passwordStrength) { a("#registerPassword").passwordStrength({ minimumChars: 8 }) } })(jQuery);