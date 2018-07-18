$(document).ready(function(){

// touchmenu 

    $('.nav').slideAndSwipe();

// owl carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout: 4000,
        autoplayHoverPause:true,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1
            }
        }
    });

    $(".owl-carousel").owlCarousel();

// header button 

    setInterval(function(){ 
        $(".arrow-box").fadeOut(1000).fadeIn(1000);
     }, 2000);

// header logo scrolling fadeout

    var fadeStart=0,
        fadeEnd=180, 
        fading = $('.header-logo, .row-typeit');

    $(window).on('scroll', function(){
        var offset = $(document).scrollTop(),
            opacity=0;

        if( offset<=fadeStart ){
            opacity=1;
        }else if( offset<=fadeEnd ){
            opacity=1-offset/fadeEnd;
        }
        fading.css('opacity',opacity);
    });

// scroll down animation

     var h = $(window).height();

    $(window).on("scroll",function() {

        if($(window).scrollTop() >= h - 75) {
            $("#desktop").addClass("menu-effect");
            }   
        else {
            $("#desktop").removeClass("menu-effect");
            }    
        }); 

    $(".header-arrow-down").on("click", function(){
        window.scrollTo({
            top: h - 75,
            behavior: "smooth"
            });
        });

    if( h < 420){
        $('.header-logo').css({ "animation" : "none" });
    }
    else {}


// waypoint function animation

    $('.box-img').waypoint(function() {
        $(this).addClass('imgscale');
    }, { offset: '55%'  
    });

    $('.box-text').waypoint(function() {
        $(this).delay(300).addClass('text-animation');
    }, { offset: '65%'  
    });

// back to top animation

     $(document).on("scroll", function() {

        if($(document).scrollTop()>600) {
            $(".btntop").show(250);
        }
        else {
            $(".btntop").hide(250);
        }
    });

    $('.btntop').on("click", function() {

            $('html,body').animate( {
                scrollTop: 0
            }, 700);
        }
    );

// typeit 

$('.example2').typeIt({
    strings: 'gl fratz bt.',
    typeSpeed: 100,
    cursor: false,
    startDelay: 250,});
       
  $('.example4').typeIt({
    strings: 'Our SWENCY database has many activities designed to help <br> your students succeed and perfect their language skills. <br> You’ll see which questions are the most difficult and can <br> figure out what topics your students need to go over again.',
    typeSpeed: 50,
    cursor: true,
    deleteSpeed: 20,
    loop: true ,
    loopDelay: 1750,
    breakLines: false,
    startDelay: 2750,
    autoStart: true});
       
});