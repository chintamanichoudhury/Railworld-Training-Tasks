function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  
  // modal
  
  var modal = document.getElementById("mymodal");
  
  var btn = document.getElementById("mybtn");
  
  var span = document.getElementsByClassName("close")[0];
  
  
  btn.onclick = function() {
    modal.style.display = "block";
  }
  
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  // for active nav effect
  document.querySelectorAll('.nav_link').forEach(link=>{
    if(link.href==window.location.href){
      link.classList.add('active');
    }
  })