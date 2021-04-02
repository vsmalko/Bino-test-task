//AOS Animations initialization
AOS.init();

// Slider initialization
$(document).ready(function () {
  $(".slider").slider();
});
// Dropdown initialization
$(".dropdown-trigger").dropdown();

// Carousel initialization
$(document).ready(function () {
  $(".carousel").carousel();
});


// Team events
$(".team__person_1").on("mouseover", function() {
  $("#teamtext1").addClass("show");
});
$(".team__person_1").on("mouseout", function () {
  $("#teamtext1").removeClass("show");
});
 
$(".team__person_2").on("mouseover", function () {
  $("#teamtext2").addClass("show");
});
$(".team__person_2").on("mouseout", function () {
  $("#teamtext2").removeClass("show");
});

$(".team__person_3").on("mouseover", function () {
  $("#teamtext3").addClass("show");
});
$(".team__person_3").on("mouseout", function () {
  $("#teamtext3").removeClass("show");
});

$(".team__person_4").on("mouseover", function () {
  $("#teamtext4").addClass("show");
});
$(".team__person_4").on("mouseout", function () {
  $("#teamtext4").removeClass("show");
});

$(".team__person_5").on("mouseover", function () {
  $("#teamtext5").addClass("show");
});
$(".team__person_5").on("mouseout", function () {
  $("#teamtext5").removeClass("show");
});

// Floating action button initialization
$(document).ready(function () {
  $(".fixed-action-btn").floatingActionButton();
});
$(".btn-floating").on("click", function() {
  window.scrollTo(0, 0);
});
$(".btn-floating").on("click", function () {
  window.scrollTo(0, 0);
});
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    $(".btn-floating").show();
  } else {
    $(".btn-floating").hide();
  }
}

// Counter animation
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const fav = document.querySelector("#fav_num");
animateValue(fav, 0, 3891, 2000);

const all_posts = document.querySelector("#all_posts");
animateValue(all_posts, 0, 281000, 2000);

const new_posts = document.querySelector("#new_posts");
animateValue(new_posts, 0, 618, 2000);

const campaigns = document.querySelector("#campaigns");
animateValue(campaigns, 0, 178, 2000);

const features = document.querySelector("#features");
animateValue(features, 0, 285, 2000);
