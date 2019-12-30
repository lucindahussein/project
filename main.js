$("#btn").click(function(){
    // $("button,h1").css('color','blue');
        //  $("h1").hide();
    //  $("h1").text("welcome");
    // $("h1").slideToggle();
    // $("h1").fadeOut();
    $("h1").animate({height:"500px"});
 

});

$(document).ready(function(){
 $("button,h1").css('color','blue');
        //  $("h1").hide();
    //  $("h1").text("welcome");
    // $("h1").slideToggle();
    // $("h1").fadeOut();
    //  $("h1").animate({height:"500px"});
});

$("#name").keyup(function(){
          $("h1").text($(this).val());

});