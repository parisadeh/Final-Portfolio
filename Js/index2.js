$(".ux").hover(function()
{
    $(".overlay").css("opacity","1");
    
});
$(".ux").on("mouseleave", function(){
    $(".overlay").css("opacity","0");
    
});