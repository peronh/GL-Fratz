$(document).ready(function(){

// touchmenu 

    $('.nav').slideAndSwipe();

    var height = window.outerHeight;

    $('nav').height(height).css("owerflow" , "auto");

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

// manu to turn a page

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-50
        }, 800);
    }
});

// waypoint function animation

    $('.box-img').waypoint(function() {
        $(this).addClass('imgscale');
    }, { offset: '60%'  
    });

    $('.box-text').waypoint(function() {
        $(this).delay(300).addClass('text-animation');
    }, { offset: '70%'  
    });

    $('.col-partners img').waypoint(function() {
        $(this).addClass('col-partners-img-offset');
    }, { offset: '70%'  
    });

// owl carousel

    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav:true,
        autoplayHoverPause:true,
        autoplay:true,
        autoplayTimeout: 2000,
        smartSpeed: 1000
    });

    $(".owl-carousel").owlCarousel();

// back to top animation

     $(document).on("scroll", function() {

        if($(document).scrollTop()>600) {
            $(".btntop").show(250);
        }
        else {
            $(".btntop").hide(250);
        }

        if($(document).scrollTop()>1000) {
            $('#desktop').addClass('desktop');
            $('#desktop a').addClass('desktopA');
        }
        else {
            $('#desktop').removeClass('desktop');
            $('#desktop a').removeClass('desktopA');
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

// picture animation 

    $('.col-picture').hover( function() {
        $(this).find("img").addClass('scale-picture');
        $(this).find(".text-picture").addClass('bottom-picture');
    },
    function() {
        $(this).find("img").removeClass('scale-picture');
        $(this).find(".text-picture").removeClass('bottom-picture');
    });

// form check 


    $('.form-group .btn').click(function(ev) {

        textName = $("#registerName").val();
        textEmail = $('#registerEmail').val();

        if(textName == "" && textEmail == "") {
            ev.preventDefault();
            $("input").attr("placeholder" , "Kötelező mező*");
            $("input").css("border-bottom" , "1px solid #f54444");
        }

        else if(textName == ""){
            ev.preventDefault();
            $("#registerName").attr("placeholder" , "Kérem adja meg a nevét!");
            $("#registerName").css("border-bottom" , "1px solid #f54444");
        }

        else if(textEmail == ""){
            ev.preventDefault();
            $("#registerEmail").attr("placeholder" , "Kérem adja meg e-mail címét!");
            $("#registerEmail").css("border-bottom" , "1px solid #f54444");
        }
    });

    $("form").submit(function(e){
        alert("Köszönjük! Kollégánk hamarosan felveszi Önnel a kapcsolatot.");
    });

    $("#registerName").on("keyup" , function() {

        textName = $("#registerName").val();

        if(textName.length < 4) {
            $(this).css("border-bottom" , "1px solid #f54444"); 
        }
        else{
            $(this).css("border-bottom" , "1px solid #13D0CA"); 
        }    
    });

    $("#registerEmail").on("keyup" , function() {

        var textEmail = $("#registerEmail").val(); 
        var filterEmail = /^.+@.+\..{2,6}$/;

        if(!filterEmail.test(textEmail)) {
            $(this).css("border-bottom" , "1px solid #f54444"); 
        }
        else{
            $(this).css("border-bottom" , "1px solid #13D0CA"); 
        }
    
    });

    // partners pictures hover 

    $('.col-partners').hover( function() {
        $(this).find(".active").css("opacity" , "0");
        $(this).find(".inverse").css("opacity" , "1");
    },
    function() {
        $(this).find(".inverse").css("opacity" , "0");
        $(this).find(".active").css("opacity" , "1");
    });

/*
    
    $('.col-picture img').each(function(){ 

      $('.col-picture img').eq(0).fadeIn(200);
$('.col-picture img').eq(1).delay(100).fadeIn(100);
$('.col-picture img').eq(2).delay(200).fadeIn(100);
$('.col-picture img').eq(3).delay(300).fadeIn(100);
$('.col-picture img').eq(4).delay(400).fadeIn(100);
$('.col-picture img').eq(5).delay(500).fadeIn(100);

     });
*/

});