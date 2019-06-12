$(document).ready(function(){

    $('#column1 .paragraph').hide();
    $('#column2 .paragraph').hide();
    $('#column3 .paragraph').hide();

 

  $('#column1').click(function(){
    $('#column1 .services-image').toggle();
    $('#column1 .paragraph').toggle();
  });

  $('#column2').click(function(){
    $('#column2 .services-image').toggle();
    $('#column2 .paragraph').toggle();
  });

  $('#column3').click(function(){
    $('#column3 .services-image').toggle();
    $('#column3 .paragraph').toggle();
  });
  $(".pt").mouseenter(function(){
    $(".pg").show();
  });
  $(".pt").mouseleave(function(){
    $(".pg").hide();
  });

  $(".pt1").mouseenter(function(){
    $(".pg1").show();
  });
  $(".pt1").mouseleave(function(){
    $(".pg1").hide();
  });

  $(".pt2").mouseenter(function(){
    $(".pg2").show();
  });
  $(".pt2").mouseleave(function(){
    $(".pg2").hide();
  });

  $(".pt3").mouseenter(function(){
    $(".pg3").show();
  });
  $(".pt3").mouseleave(function(){
    $(".pg3").hide();
  });
  $(".pt4").mouseenter(function(){
    $(".pg4").show();
  });
  $(".pt4").mouseleave(function(){
    $(".pg4").hide();
  });
  $(".pt5").mouseenter(function(){
    $(".pg5").show();
  });
  $(".pt5").mouseleave(function(){
    $(".pg5").hide();
  });
  $(".pt6").mouseenter(function(){
    $(".pg6").show();
  });
  $(".pt6").mouseleave(function(){
    $(".pg6").hide();
  });
  $(".pt7").mouseenter(function(){
    $(".pg7").show();
  });
  $(".pt7").mouseleave(function(){
    $(".pg7").hide();
  });







  $('button#btn').click(function(){
      alert("Thanks we have received your message")

  });
});
