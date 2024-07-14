const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const widthRatio = Math.floor(window.innerWidth / 300);
  console.log(Math.floor(window.innerWidth / 300));
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    if (imageItem - (5 + clickCounter) + (5-widthRatio) >= 0) {
      clickCounter++;
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});
