// ham burger icon
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

  //slideshow

  let index = 0;
  let transitionDelay = 2000;
  let slideContainer = document.querySelector(".slideshow");
  let slides = slideContainer.querySelectorAll(".slide");
  for (let slide of slides) {
      slide.style.transition = `all ${transitionDelay / 1000}s linear`;
  }
  showSlide(index);
  function showSlide(slideNumber) {
      slides.forEach((slide, i) => {
          slide.style.display = i == slideNumber ? "block" : "none";
      });
      index++;
      if (index >= slides.length) {
          index = 0;
      }
  }

  setInterval(() => showSlide(index), transitionDelay);

  
  // for active nav effect
  document.querySelectorAll('.nav_link').forEach(link=>{
    if(link.href==window.location.href){
      link.classList.add('active');
    }
  })