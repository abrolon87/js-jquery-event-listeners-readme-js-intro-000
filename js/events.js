//define functions here
function getIt() {
  $('p').on('click', function() {
  alert("Hey!");
 });
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty');
  });
}

function pressIt() {
  $('input').on('keydown', function(key) {
    if(key.which == G){
      alert('G was pressed');
  }
 });
}

function submitIt() {
  if ($( "input:first").val() === "correct") {
  alert("Your form is going to be submitted now.");
  
    return;
  }
}
$(document).ready(function(){

// call functions here

});
