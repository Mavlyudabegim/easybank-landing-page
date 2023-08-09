// it's show function
function show(id, toggle) {
    // declare some variable
    var x = document.getElementById(id);
    // var x
    var toggle = document.getElementById(toggle);
    if (x.style.display === "none") {
      x.style.display = "block";
    
      toggle.style.backgroundImage="url('./img/toggler-close.svg')";
      
    } else {
      x.style.display = "none";
      toggle.style.backgroundImage="url('./img/toggler-open.svg')";
    }
  }
 //end function 
