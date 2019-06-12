$(document).ready(function(){
  $(".state1").click(function(){
      $(".state1").hide();
      $(".design").show();
      $(".arm1").toggle();
  });

  $(".arm1").click(function(){
      $(".state1").show();
      $(".arm1").toggle();
  });

  

  $("#state2").click(function(){
      $("#state2").hide();
      $(".development").show();
      $(".arm2").toggle();
  });

  $(".arm2").click(function(){
      $("#state2").show();
      $(".arm2").toggle();
  });

  

  $("#state3").click(function(){
      $("#state3").hide();
      $(".development").show();
      $(".arm3").toggle();
  });

  $(".arm3").click(function(){
      $("#state3").show();
      $(".arm3").toggle();
  });
});