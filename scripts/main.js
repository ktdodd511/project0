$(document).ready(function() {

  console.log("js is connected, wooo!!")

  $( "#car1" ).keyup(function() {
    $( ".block1" ).animate({ "left": "+=50px" }, "fast" );
  });


  $( "#car2" ).click(function() {
    $( ".block2" ).animate({ "left": "+=50px" }, "fast" );
  });





})