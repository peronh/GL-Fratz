$(document).ready(function(){
   

    // header gomb effekt

    setInterval(function(){ 
        $(".arrow-box").fadeOut(1000).fadeIn(1000);
     }, 2000);

    // scroll effektek

    var h = window.innerHeight;  

    $(window).on("scroll",function() {

        if($(window).scrollTop() >= h - 75) {
            $("#desktop").addClass("menu-effect");
            }   
        else {
            $("#desktop").removeClass("menu-effect");
            }  
            
                $('.box-img').waypoint(function() {
                    $(this).addClass('imgscale');
                }, { offset: '50%'  
            });

            $('.box-text').waypoint(function() {
                $(this).delay(300).addClass('text-animation');
            }, { offset: '60%'  
        });


    }); 
      
    
    $(".header-arrow-down").on("click", function(){
        window.scrollTo({
            top: h - 75,
            behavior: "smooth"
        });
     });
    
    


     

    
});