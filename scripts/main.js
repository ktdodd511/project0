$(document).ready(function() {

  console.log("js is connected, wooo!!")


  var player1;
  var player2;
  var startRace;
  var mCount = 0;
  var wCount = 0;


  function readyToPlay() {
    
    player1 = prompt("Enter player one's name!");
    player2 = prompt("Enter player two's name!");
    startRace = prompt("ARE YOU BOTH READY?");

    if (startRace.toLowerCase() === 'y' || startRace.toLowerCase() === 'yes') {
    start();
    
    }

   }; 



  function start() {
    alert("GO!!!");
    
    $( document ).on('keyup', function(event) {
        switch (event.keyCode) {
            
            case 77: 
              $( ".block1" ).animate({ "left": "+=20px" }, "fast" );  
              mCount+=1;
              winner();  
              break;

            case 87:
              $( ".block2" ).animate({ "left": "+=20px" }, "fast" );
              wCount+=1;
              winner();
              break;
          };


    });
}

  function winner() {
    if (mCount >= 70) {
      alert(player1 + " " + "has won!");
      location.reload();

    } else if (wCount >= 70) {
      alert(player2 + " " + "has won!");
      location.reload();
    } else if (mCount === 70 && wCount === 70) {
      alert("It's a tie!");
      location.reload();
    }

  }


$('#start').click (function() {
  readyToPlay();
});

$('#reset').click (function() {
    location.reload();
  });


// maybe put the 'cars' in the divs here


})