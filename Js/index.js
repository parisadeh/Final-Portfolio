
$("#quail").hover(function()
{
    $(".overflow").css("opacity","1");
    $("#quail img").css("border","none");
});
$("#quail").on("mouseleave", function(){
    $(".overflow").css("opacity","0");
    $("#quail img").css("border","1px solid #707070");
});


$("#mojo").hover(function()
{
    $(".overflow1").css("opacity","1");
    $("#mojo img").css("border","none");
});
$("#mojo").on("mouseleave", function(){
    $(".overflow1").css("opacity","0");
    $("#mojo img").css("border","1px solid #707070");
});

$("#epa").hover(function()
{
    $(".overflow2").css("opacity","1");
    $("#epa img").css("border","none");
});
$("#epa").on("mouseleave", function(){
    $(".overflow2").css("opacity","0");
    $("#epa img").css("border","1px solid #707070");
});


$("#cofas").hover(function()
{
    $(".overflow3").css("opacity","1");
    $("#cofas img").css("border","none");
});
$("#cofas").on("mouseleave", function(){
    $(".overflow3").css("opacity","0");
    $("#cofas img").css("border","1px solid #707070");
});