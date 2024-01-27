function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "username",
    Password: "password",
    To: "them@website.com",
    From: "you@isp.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

// all the other shit (awful code, sorry mum)
document.addEventListener("DOMContentLoaded", function () {});

console.log("Hi!");

const headerWideEl = document.querySelector(".header-wide");
// const navTitleEl = document.querySelector(".nav-title");
// const navLinksEl = document.querySelectorAll(".nav-links");

// const linesIcon = document.querySelector(".nav-bar-lines");
// const crossIcon = document.querySelector(".nav-bar-cross");
// const navLinksContainer = document.querySelector(".nav-links-container");

// linesIcon.addEventListener("click", function () {
//   navLinksContainer.classList.add("show");
//   linesIcon.style.display = "none";
//   setTimeout(() => {
//     crossIcon.style.display = "inline";
//   }, 800);
// });

// crossIcon.addEventListener("click", function () {
//   navLinksContainer.classList.remove("show");
//   crossIcon.style.display = "none";
//   setTimeout(() => {
//     linesIcon.style.display = "inline";
//   }, 500);
// });

window.addEventListener("scroll", () => {
  if (window.scrollY >= 333) {
    headerWideEl.classList.remove("header-wide-no-scroll");
    headerWideEl.classList.add("header-wide-scrolled");
  } else if (window.scrollY < 333) {
    headerWideEl.classList.remove("header-wide-scrolled");
    headerWideEl.classList.add("header-wide-no-scroll");
  }
});

const navLinkBackground = document.querySelector(
  ".header-narrow-nav-link-background"
);
const navContainer = document.querySelector(".header-narrow-nav-container");
const linesIcon = document.querySelector(".header-narrow-lines");
const crossIcon = document.querySelector(".header-narrow-cross");

linesIcon.addEventListener("click", function () {
  // Slide in the navigation elements
  navLinkBackground.style.transform = "translateX(0)";
  navContainer.style.transform = "translateX(0)";

  // Hide lines icon, show cross icon
  linesIcon.style.display = "none";
  crossIcon.style.display = "block";
});

crossIcon.addEventListener("click", function () {
  // Slide out the navigation elements
  navLinkBackground.style.transform = "translateX(100%)";
  navContainer.style.transform = "translateX(100%)";

  // Hide cross icon, show lines icon
  crossIcon.style.display = "none";
  linesIcon.style.display = "block";
});

// window.addEventListener("scroll", () => {
//   if (window.scrollY >= 210) {
//     navLinksContainer.style.backgroundColor = "white";
//     navLinksEl.forEach((link) => {
//       link.classList.add("nav-text-scrolled", "nav-links-scrolled");
//       link.classList.remove("nav-links-no-scroll");
//     });
//     linesIcon.classList.remove("nav-bar-lines");
//     crossIcon.classList.remove("nav-bar-cross");
//     linesIcon.classList.add("nav-bar-lines-black");
//     crossIcon.classList.add("nav-bar-cross-black");
//   } else if (window.scrollY < 210) {
//     navLinksContainer.style.backgroundColor = "inherit";
//     navLinksEl.forEach((link) => {
//       link.classList.add("nav-links-no-scroll");
//       link.classList.remove("nav-text-scrolled", "nav-links-scrolled");
//     });
//     linesIcon.classList.remove("nav-bar-lines-black");
//     crossIcon.classList.remove("nav-bar-cross-black");
//     linesIcon.classList.add("nav-bar-lines");
//     crossIcon.classList.add("nav-bar-cross");
//   }
// });

// down btn
const downBtn = document.querySelector(".down-btn");
function handleScroll() {
  if (window.scrollY >= 80) {
    downBtn.classList.add("hide");
  } else {
    downBtn.classList.remove("hide");
  }
}
function handleButtonClick() {
  window.scrollBy({
    top: 380,
    behavior: "smooth",
  });
}
window.addEventListener("scroll", handleScroll);
downBtn.addEventListener("click", handleButtonClick);

// text fade in/ out
const observerText = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Stop observing once the element is visible
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenText = document.querySelectorAll(".hidden");
hiddenText.forEach((el) => observerText.observe(el));

// Repeat the same modification for the other observers
const observerImgLeft = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-left");
      observer.unobserve(entry.target); // Stop observing once the element is visible
    } else {
      entry.target.classList.remove("show-left");
    }
  });
});

const hiddenLeft = document.querySelectorAll(".hidden-left");
hiddenLeft.forEach((el) => observerImgLeft.observe(el));

const observerImgRight = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-right");
      observer.unobserve(entry.target); // Stop observing once the element is visible
    } else {
      entry.target.classList.remove("show-right");
    }
  });
});

const hiddenRight = document.querySelectorAll(".hidden-right");
hiddenRight.forEach((el) => observerImgRight.observe(el));

const contentImages = document.querySelectorAll(".content-img-container");
function redirectToPortfolio() {
  window.location.href = "./portfolio.html";
}
contentImages.forEach((img) => {
  img.addEventListener("click", redirectToPortfolio);
});

// hero image slideshow
// const images = [
//   "./assets/images/hero-1.jpg",
//   "./assets/images/hero-2.webp",
//   "./assets/images/hero-3.jpg",
//   "./assets/images/hero-4.jpg",
//   "./assets/images/hero-5.jpg",
//   "./assets/images/hero-6.jpg",
//   "./assets/images/hero-7.jpg",
// ];
// const imgSlideEl = document.querySelector(".hero-img-slide");
// // do a ```Math.floor random number for start index
// let currentIndex = 1;

// function changeImage() {
//   imgSlideEl.style.opacity = 0;
//   imgSlideEl.src = images[currentIndex];
//   imgSlideEl.style.opacity = 1;
//   // Wait for the transition duration
//   currentIndex = (currentIndex + 1) % images.length;
//   setTimeout(changeImage, 10000); // Change image every 10 seconds
// }
// changeImage(); // Start the initial image change

const workCards = document.querySelectorAll(".work-card");
const carouselEl = document.querySelector(".t-carousel");
const popUpImg = document.querySelector(".t-carousel-img");
const popUpText = document.querySelector(".t-carousel-text");
// const carouselCross = document.querySelector(".t-carousel-cross");
const hoverBlock = document.querySelector(".job-info-container");

function changeImg(workCard) {
  carouselEl.style.display = "block";
  const workCardImg = workCard.querySelector(".work-card-img");
  const workCardText = workCard.querySelector(".job-info-text");

  popUpImg.src = workCardImg.src;
  popUpText.innerHTML = workCardText.innerHTML;
}

workCards.forEach((workCard) => {
  workCard.addEventListener("click", function (event) {
    event.stopPropagation(); // Stop the click event from reaching the document level
    changeImg(workCard);
  });
});

document.addEventListener("click", function () {
  carouselEl.style.display = "none";
});

// carouselCross.addEventListener("click", function () {
//   carouselEl.style.display = "none";
// });
