//define functions here
function getIt() {
  alert("Hey!")
}

function frameIt() {
  
}

function pressIt() {
  
}

function submitIt() {
  if ($( "input:first").val() === "submit") {
  alert("Your form is going to be submitted now.");
  
    return;
  }
}
$(document).ready(function(){

// call functions here
submitIt()
});
