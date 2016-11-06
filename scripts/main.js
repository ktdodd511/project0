$(document).ready(function() {

  console.log("js is connected, wooo!!")

  $( document ).on('keyup', function(e) {
      switch (e.keyCode) {
          
          case 77: 
            $( ".block1" ).animate({ "left": "+=20px" }, "fast" );
            break;     
          case 87:
            $( ".block2" ).animate({ "left": "+=20px" }, "fast" );
            break;
        };

  });





// maybe put the 'cars' in the divs here


})