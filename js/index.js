window.onscroll = function() {stickyFunction()};

function stickyFunction() {
  
  var navbar = document.getElementById("headr");
  
  var sticky = navbar.offsetTop;
  
  if (window.pageYOffset > sticky) {
    
    console.log("world")
    navbar.classList.add("sticky");
  } 
  else {
    console.log("hello")
    navbar.classList.remove("sticky");
  }
}



function crossFunc(x) {
  x.classList.toggle("change");
}
