"use strict";
$(window).on("load", function() { setTimeout(function() { $(".pageloader").fadeOut("slow") }, 500); if ($("body").scrollTop() >= 30) { $(".header").addClass("active");
        $(".scrollup").addClass("active") } else { $(".header").removeClass("active");
        $(".scrollup").removeClass("active") } $(".float-label .form-control").on("blur", function() { if ($(this).val() || $(this).val().length != 0) { $(this).closest(".float-label").addClass("active") } else { $(this).closest(".float-label").removeClass("active") } });
    $(".search-btn").on("click", function() { $(".search").slideDown().addClass("active") });
    $(".background").each(function() { var a = $(this).find("img");
        $(this).css("background-image", "url(" + a.attr("src") + ")");
        a.hide() });
    // $(".scrollup").on("click", function() { $("html, body").animate({ scrollTop: 0 }, 600); return false }); if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) { $(".scrollup").addClass("atbottom") } else { $(".scrollup").removeClass("atbottom") } $(document).on("click", ".smoothscroll", function(a) { a.preventDefault();
    //     $("html, body").animate({ scrollTop: $($.attr(this, "href")).offset().top }, 750) });
    $(".backbtn").on("click", function(a) { event.preventDefault();
        history.back(1) });
    $(".menu-btn-left").on("click", function(a) { a.stopPropagation();
        $(".sidebar-left").toggleClass("active");
        $(".main-container").toggleClass("active");
        $("body").toggleClass("sidebar-left-open") });
    $(".menu-btn-right").on("click", function(a) { a.stopPropagation();
        $(".sidebar-right").toggleClass("active");
        $(".main-container").toggleClass("active");
        $("body").toggleClass("sidebar-right-open") });
    $(".main-container").on("click", function(a) { if ($(".sidebar-left").hasClass("active") === true) { $(".sidebar-left").removeClass("active");
            $(".main-container").removeClass("active");
            setTimeout(function() { $("body").removeClass("sidebar-left-open") }, 500) } if ($(".sidebar-right").hasClass("active") === true) { $(".sidebar-right").removeClass("active");
            $(".main-container").removeClass("active");
            setTimeout(function() { $("body").removeClass("sidebar-right-open") }, 500) } });
    $(".multilevel-link").on("click", function(a) { $(this).next(".multilevel-dropdown").slideToggle().closest(".multilevel").toggleClass("active") });
    $(".login-container > .row").css({ "min-height": $(window).outerHeight(), });
    $(".content-container > .row").css({ "min-height": ($(window).outerHeight() - $(".header").outerHeight()) }); if ($("footer").length > 0) { $(".main-container").css({ "padding-bottom": $("footer").outerHeight(), }) } $("#overlay").on("click", function(a) { $(this).parent().find(".list-group-item").removeClass("active");
        $(this).addClass("active");
        $(".sidebar-left").addClass("overlay-sidebar");
        $(".sidebar-left").removeClass("reveal-sidebar");
        $(".sidebar-left").removeClass("iconic-sidebar") });
    $("#reveal").on("click", function(a) { $(this).parent().find(".list-group-item").removeClass("active");
        $(this).addClass("active");
        $(".sidebar-left").removeClass("overlay-sidebar");
        $(".sidebar-left").addClass("reveal-sidebar");
        $(".sidebar-left").removeClass("iconic-sidebar") });
    $("#iconic").on("click", function(a) { $(this).parent().find(".list-group-item").removeClass("active");
        $(this).addClass("active");
        $(".sidebar-left").removeClass("overlay-sidebar");
        $(".sidebar-left").removeClass("reveal-sidebar");
        $(".sidebar-left").addClass("iconic-sidebar") }) });
$(window).on("scroll", function() { if ($(this).scrollTop() >= 30) { $(".header").addClass("active");
        $(".scrollup").addClass("active") } else { $(".header").removeClass("active");
        $(".scrollup").removeClass("active") } if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) { $(".scrollup").addClass("atbottom") } else { $(".scrollup").removeClass("atbottom") } });
$(window).on("resize", function() { $(".login-container > .row").css({ "min-height": $(window).outerHeight(), });
    $(".content-container > .row").css({ "min-height": ($(window).outerHeight() - $(".header").outerHeight()) }) });