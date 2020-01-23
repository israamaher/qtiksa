$(function() {
  $('.skitter-large').skitter() ;
});




$(window).scroll( function(){

  var windowOffs =$(window).scrollTop();
  var program= $("#prog").offset().top; 
  console.log ( "gh") ;

      if (windowOffs >= program)
      {
        $(".navbar").css("backgroundColor","rgba(3,61,81,0.85)")
      }
      else
      {
        $(".navbar").css("backgroundColor","transparent ")

      } 
    
});


$(".arrow").click(function(){

  $("html,body").animate ( {scrollTop:'0' },1000)
}) ;