$(function () {
  var url = window.location.href;

  $(".sidebar a").each(function () {
    if (url == this.href) {
      $(this).closest("a").addClass("active");
      $(this).closest("a").parent().parent().addClass("active");
    }
  });
});

$(".home-hover").mouseover(function () {
  $(".home-text").css("visibility", "visible");
});

$(".home-hover").mouseout(function () {
  $(".home-text").css("visibility", "hidden");
});

$(".about-hover").mouseover(function () {
  $(".about-text").css("visibility", "visible");
});

$(".about-hover").mouseout(function () {
  $(".about-text").css("visibility", "hidden");
});

$(".portfolio-hover").mouseover(function () {
  $(".portfolio-text").css("visibility", "visible");
});

$(".portfolio-hover").mouseout(function () {
  $(".portfolio-text").css("visibility", "hidden");
});

$(".work-hover").mouseover(function () {
  $(".work-text").css("visibility", "visible");
});

$(".work-hover").mouseout(function () {
  $(".work-text").css("visibility", "hidden");
});

$(".contact-hover").mouseover(function () {
  $(".contact-text").css("visibility", "visible");
});

$(".contact-hover").mouseout(function () {
  $(".contact-text").css("visibility", "hidden");
});

const toggle = document.querySelector('#toggle');

function openNav(){
    toggle.classList.toggle('visible');
}

window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}