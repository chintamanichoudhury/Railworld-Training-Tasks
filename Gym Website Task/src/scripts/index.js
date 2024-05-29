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

var btn2=document.querySelector(".plan_btn1");

var btn3=document.querySelector(".plan_btn2");

var btn4=document.querySelector(".plan_btn3");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

btn2.onclick = function() {
    modal.style.display = "block";
}

btn3.onclick = function() {
    modal.style.display = "block";
}

btn4.onclick = function() {
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
