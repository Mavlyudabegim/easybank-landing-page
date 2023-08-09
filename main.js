// it's show function
function show(id, toggle) {
// comment    

var x = document.getElementById(id);
    var toggle=document.getElementById(toggle);
    if (x.style.display === "none") {
      x.style.display = "block";
    
      toggle.style.backgroundImage="url('./img/toggler-close.svg')";
      
    } else {
      x.style.display = "none";
      toggle.style.backgroundImage="url('./img/toggler-open.svg')";
    }
  }
 
