$(document).ready(function() {
    $('#carouselImages').slick({
        autoplay: true
    });
    $("#carouselImages .slick-arrow").css("display", "none")

    $('#carouselImages2').slick({
        autoplay: true,
        prevArrow: "<button type='button' class='buttonSlide-prev'><i class='bx bxs-left-arrow'></i></button>",
        nextArrow: "<button type='button' class='buttonSlide-next'><i class='bx bxs-right-arrow'></i></button>"
    });

    
})
