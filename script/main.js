$(document).ready(function(){

// header gomb effekt

    setInterval(function(){ 
        $(".arrow-box").fadeOut(1000).fadeIn(1000);
     }, 2000);

// scroll effektek
     var h = $(window).height();
    //var h = window.innerHeight;  

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

    if( h < 380){
        $('.header-logo').css({ "margin-top" : "50px",
                                "animation" : "none" });
    }

// waypoint function == animation

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
       
});