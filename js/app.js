$(document).ready(function () {
  $(".slider").slider();
});

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
