$("document").ready(function(){
    $('.fade').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false
    });

    $('.left').click(function(){
        $('.fade').slick('slickPrev');
    })

    $('.right').click(function(){
        $('.fade').slick('slickNext');
    })

});