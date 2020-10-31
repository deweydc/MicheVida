

$(function () {

    // Carousel Buttons
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause")
            $("#carouselButton").children("i").addClass("fa-play")
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });

    // Contact modal
    $("#contactUsButton").click(function () {
        $("#contactUsModal").modal("show");
    });

     // Watermelon Card Modal
    $("#watermelonCardButton").click(function () {
        $("#watermelonModal").modal("show");
    });

    // Spicy Cucumber Modal
    $("#spicyCuCardButton").click(function () {
        $("#spicyCuModal").modal("show");
    });

    // Mango Modal
    $("#mangoCardButton").click(function () {
        $("#mangoModal").modal("show");
    });
});


const tl = gsap.timeline({defaults: {ease: 'power1.out'}});

tl.to('.jumbo-body', {x:"0%", duration: 2});

tl.to('.from-right', {y:"0%", duration: 1}, "-=2");
tl.to('.from-left', {y: "0%", duration: 1}, "-=2");
