//Navigation burger button
const burgerBtn = document.querySelector(".burger");
const burgerBtnLinks = document.querySelector(".second-navigation");
const navList = document.querySelector(".second-navigation");
const burgerTopLine = document.querySelector(".top-line");
const burgerMidLine = document.querySelector(".mid-line");
const burgerBotLine = document.querySelector(".bot-line");
const overlay = document.querySelector(".overlay-nav");

function toggleLines() {
  burgerTopLine.classList.toggle("burger__top");
  burgerMidLine.classList.toggle("burger__mid");
  burgerBotLine.classList.toggle("burger__bot");
  burgerTopLine.classList.toggle("color-white");
  burgerMidLine.classList.toggle("color-white");
  burgerBotLine.classList.toggle("color-white");
}

burgerBtn.addEventListener("click", function () {
  navList.classList.toggle("display-none");
  overlay.classList.toggle("display-none");
  toggleLines();
});
burgerBtnLinks.addEventListener("click", (e) => {
  navList.classList.toggle("display-none");
  overlay.classList.toggle("display-none");
  toggleLines();
});

// Navigation end

// Slider start
const track = document.querySelector(".slider-container");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//slides next to one another

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + " )";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("hidden");
    nextButton.classList.remove("hidden");
  }
  if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("hidden");
    nextButton.classList.add("hidden");
  }
  if (targetIndex > 0 && targetIndex < slides.length - 1) {
    prevButton.classList.remove("hidden");
    nextButton.classList.remove("hidden");
  }
};

// right button
nextButton.addEventListener("click", function (e) {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// left button
prevButton.addEventListener("click", function () {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// dots
dotsNav.addEventListener("click", (e) => {
  // what indicator is clicked
  const targetDot = e.target.closest("button");
  if (!targetDot) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

//Slider end

// newsletter start
const newsLetter = document.querySelector(".newsletter__button");
const newsLetterForm = document.querySelector(".newsletter__form");
const newsLetterSubmit = document.querySelector(".news__button");
const newsLetterInput = document.getElementById("#news-email");
const newsCloseBtn = document.querySelector(".news-close-button");
const overlayNews = document.querySelector(".overlay-news");

newsLetter.addEventListener("click", (e) => {
  newsLetterForm.classList.toggle("display-none-2");
  overlayNews.classList.toggle("display-none");
});

newsLetterSubmit.addEventListener("click", (e) => {
  if (newsLetterInput.value != "") {
    newsLetterForm.classList.remove("display-none-2");
    overlayNews.classList.remove("display-none");
  }
});

newsCloseBtn.addEventListener("click", (e) => {
  newsLetterForm.classList.add("display-none-2");
  overlayNews.classList.add("display-none");
});

// CONTACT

$("#submit").click(function () {
  let nume = $("#nume").val();
  let email = $("#email").val();
  let telefon = $("#telefon").val();
  let mesaj = $("#mesaj").val();

  $.post("http://127.0.0.1:8000/contact", {
    nume: nume,
    email: email,
    telefon: telefon,
    mesaj: mesaj,
  }),
    function (response) {
      $("#response").html("<div>" + response.mesaj + "</div>");
      clearFields();
    };
  function clearFields() {
    $("#nume").val("");
    $("#email").val("");
    $("#telefon").val("");
    $("#mesaj").val("");
  }
});
