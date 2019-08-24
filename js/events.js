//define functions here
function getIt() {
  alert("Hey!")
}

function frameIt() {
  
}

function pressIt() {
  if(key.which == G){
      alert('G was pressed');
  }
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
