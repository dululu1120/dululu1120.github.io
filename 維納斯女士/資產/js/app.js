"use strict";
$(window).on("load", function() {
    if ($("body").attr("data-page") === "intropage") {
        var c = new Swiper(".swiper-container", { autoplay: { delay: 2500, disableOnInteraction: false, }, navigation: { nextEl: ".swiper-button-next-intro", prevEl: ".swiper-button-prev-intro", }, pagination: { el: ".swiper-pagination-intro", }, });
        c.on("reachEnd", function(i) {
            $(".swiper-button-next-intro,  .swiper-button-prev-intro").hide();
            $(".continue").addClass("d-inline-block")
        })
    }
    if ($("body").attr("data-page") === "homepage") {
        var d = new Swiper(".offerslidetab1", { slidesPerView: "auto", spaceBetween: 0, pagination: { el: ".swiper-pagination", clickable: true, }, });
        var e = new Swiper(".offerslide2tab1", { slidesPerView: "auto", spaceBetween: 0, });
        var f = new Swiper(".categoriestab1", { slidesPerView: "auto", spaceBetween: 0, });
        var g = new Swiper(".categories2tab1", { slidesPerView: "auto", spaceBetween: 10, });
        $("#search-tab").on("shown.bs.tab", function(i) { var j = new Swiper(".offerslide2tab2", { slidesPerView: "auto", spaceBetween: 0, }); var k = new Swiper(".categories2tab2", { slidesPerView: "auto", spaceBetween: 10, }) })
    }
    if ($("body").attr("data-page") === "payment") { var h = new Swiper(".swipercards", { effect: "coverflow", grabCursor: true, centeredSlides: true, slidesPerView: "auto", spaceBetween: 15, coverflowEffect: { rotate: 30, stretch: 0, depth: 80, modifier: 1, slideShadows: true, } }) }
    if ($("body").attr("data-page") === "thankyou") { setTimeout(function() { window.location.replace("index.html") }, 3500) }
    if ($("body").attr("data-page") === "productpage") { var a = new Swiper(".gallery-thumbs", { spaceBetween: 10, slidesPerView: 4, freeMode: true, watchSlidesVisibility: true, watchSlidesProgress: true, }); var b = new Swiper(".gallery-top", { spaceBetween: 10, navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev", }, thumbs: { swiper: a } }) }
});