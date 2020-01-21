function play()
{
   $(".layer2").css("display","block");
} 

$("#close").click(function(){
     $(".layer2").css("display","none");
}) ;



$(".arrow").click(function(){

  $("html,body").animate ( {scrollTop:'0' },1000)
}) ;