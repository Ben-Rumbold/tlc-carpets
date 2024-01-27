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

const navEL = document.querySelector("header");
const navTitleEl = document.querySelector(".nav-title");
const navLinksEl = document.querySelectorAll(".nav-links");

const linesIcon = document.querySelector(".nav-bar-lines");
const crossIcon = document.querySelector(".nav-bar-cross");
const navLinksContainer = document.querySelector(".nav-links-container");

linesIcon.addEventListener("click", function () {
  navLinksContainer.classList.add("show");
  linesIcon.style.display = "none";
  setTimeout(() => {
    crossIcon.style.display = "inline";
  }, 800);
});

crossIcon.addEventListener("click", function () {
  navLinksContainer.classList.remove("show");
  crossIcon.style.display = "none";
  setTimeout(() => {
    linesIcon.style.display = "inline";
  }, 500);
});

window.addEventListener("scroll", () => {
  if (window.scrollY >= 210) {
    navEL.classList.add("nav-scrolled");
    navTitleEl.classList.add("nav-text-scrolled");
    // navLinksContainer.style.backgroundColor = "white";
    navLinksContainer.classList.remove("nav-links-no-scroll");
    navLinksContainer.classList.add("nav-links-scrolled");
    navLinksEl.forEach((link) => {
      link.classList.add("nav-text-scrolled", "nav-links-scrolled");
      link.classList.remove("nav-links-no-scroll");
    });
    linesIcon.classList.remove("nav-bar-lines");
    crossIcon.classList.remove("nav-bar-cross");
    linesIcon.classList.add("nav-bar-lines-black");
    crossIcon.classList.add("nav-bar-cross-black");
  } else if (window.scrollY < 210) {
    navEL.classList.remove("nav-scrolled");
    navTitleEl.classList.remove("nav-text-scrolled");
    // navLinksContainer.style.backgroundColor = "inherit";
    navLinksContainer.classList.remove("nav-links-scrolled");
    navLinksContainer.classList.add("nav-links-no-scroll");
    navLinksEl.forEach((link) => {
      link.classList.add("nav-links-no-scroll");
      link.classList.remove("nav-text-scrolled", "nav-links-scrolled");
    });
    linesIcon.classList.remove("nav-bar-lines-black");
    crossIcon.classList.remove("nav-bar-cross-black");
    linesIcon.classList.add("nav-bar-lines");
    crossIcon.classList.add("nav-bar-cross");
  }
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

// // Add scroll event listener
// window.addEventListener("scroll", handleScroll);

// // Add click event listener to the down-btn
// downBtn.addEventListener("click", handleButtonClick);

// text fade in/ out
const observerText = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const hiddenText = document.querySelectorAll(".hidden");
hiddenText.forEach((el) => observerText.observe(el));

const observerImgLeft = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-left");
    } else {
      entry.target.classList.remove("show-left");
    }
  });
});
const hiddenLeft = document.querySelectorAll(".hidden-left");
hiddenLeft.forEach((el) => observerImgLeft.observe(el));

const observerImgRight = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show-right");
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

// hero images
const images = [
  "./assets/images/hero-1.jpg",
  "./assets/images/hero-2.webp",
  "./assets/images/hero-3.jpg",
  "./assets/images/hero-4.jpg",
  "./assets/images/hero-5.jpg",
  "./assets/images/hero-6.jpg",
  "./assets/images/hero-7.jpg",
];
const imgSlideEl = document.querySelector(".hero-img-slide");
// do a ```Math.floor random number for start index
let currentIndex = 1;

function changeImage() {
  imgSlideEl.style.opacity = 0;
  imgSlideEl.src = images[currentIndex];
  imgSlideEl.style.opacity = 1;
  // Wait for the transition duration
  currentIndex = (currentIndex + 1) % images.length;
  setTimeout(changeImage, 10000); // Change image every 10 seconds
}
changeImage(); // Start the initial image change

// ---------------------------------------------------------------------------------

// portfolio test section
// const boxes = document.querySelectorAll(".box");
// const popUps = document.querySelectorAll(".pop-up");
// boxes.forEach((box, index) => {
//   box.addEventListener("mousemove", (e) => {
//     const popUp = popUps[index];
//     popUp.style.left = e.clientX - box.getBoundingClientRect().left + "px";
//     popUp.style.top = e.clientY - box.getBoundingClientRect().top + "px";
//   });
// });

// const workCardEls = document.querySelectorAll(".work-card");
// const workCardPopUpEls = document.querySelectorAll(".job-info-container");
// workCardEls.forEach((card, index) => {
//   card.addEventListener("mousemove", (e) => {
//     const targetPopUp = workCardPopUpEls[index];
//     targetPopUp.style.left =
//       e.clientX - card.getBoundingClientRect().left + "px";
//     targetPopUp.style.top = e.clientY - card.getBoundingClientRect().top + "px";
//   });
// });

// carousel test section
// const workCards = document.querySelectorAll(".work-cards .work-card");
// const carouselImg = document.querySelector(".t-carousel-img");
// const carouselText = document.querySelector(".t-carousel-text");
// const leftBtn = document.querySelector(".t-carousel-left-btn");
// const rightBtn = document.querySelector(".t-carousel-right-btn");

// let currentCarouselIndex = 0;

// // Function to update carousel content
// function updateCarousel(index) {
//   const currentWorkCard = workCards[index];
//   const imgSrc = currentWorkCard.querySelector(".work-card-img").src;
//   const jobInfoText =
//     currentWorkCard.querySelector(".job-info-text").textContent;

//   carouselImg.src = imgSrc;
//   carouselText.textContent = jobInfoText;
// }

// // Initial update
// updateCarousel(currentCarouselIndex);

// // Event listeners for left and right buttons
// leftBtn.addEventListener("click", function () {
//   currentCarouselIndex =
//     (currentCarouselIndex - 1 + workCards.length) % workCards.length;
//   updateCarousel(currentCarouselIndex);
// });

// rightBtn.addEventListener("click", function () {
//   currentCarouselIndex = (currentCarouselIndex + 1) % workCards.length;
//   updateCarousel(currentCarouselIndex);
// });

// const workCard = document.querySelector(".work-card");
// const carouselEl = document.querySelector(".t-carousel");
// const workCardImg = document.querySelector(".work-card-img");
// const workCardtext = document.querySelector(".job-info-text");
// const popUpImg = document.querySelector(".t-carousel-img");
// const popUpText = document.querySelector(".t-carousel-text");

// function changeImg() {
//   carouselEl.style.display = "block";
//   popUpImg.src = workCardImg.src;
//   popUpText.innerHTML = workCardtext.innerHTML;
// }

// workCard.addEventListener("click", function () {
//   // event.stopPropagation(); // Stop the click event from reaching the document level
//   changeImg();
// });

// document.addEventListener("click", function (event) {
//   const clickedInsideCarousel = carouselEl.contains(event.target);
//   const clickedInsideWorkCard = workCard.contains(event.target);

//   if (!clickedInsideCarousel && !clickedInsideWorkCard) {
//     carouselEl.style.display = "none";
//   }
// });

const workCards = document.querySelectorAll(".work-card");
const carouselEl = document.querySelector(".t-carousel");
const popUpImg = document.querySelector(".t-carousel-img");
const popUpText = document.querySelector(".t-carousel-text");
const carouselCross = document.querySelector(".t-carousel-cross");
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

carouselCross.addEventListener("click", function () {
  carouselEl.style.display = "none";
});
