//define functions here
function getIt() {
  alert("Hey!")
}

function frameIt() {
  
}

function pressIt() {
  if(e.key == G){
      alert('G was pressed');
  } else{
    return;
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
