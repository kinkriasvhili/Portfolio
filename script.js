let homeContainerElement = document.querySelector(".conainer-home");
let aboutLeftElement = document.querySelector(".aboutMe-left");
let aboutRightElement = document.querySelector(".aboutMe-right");
let aboutConatiner = document.querySelector(".container-about");
let aboutMeTitle = document.querySelector(".aboutMe-title");
let projectsElement = document.querySelector(".projects");
let projectsEachElement = document.querySelectorAll(".project");
let projectsTitle = document.querySelector(".container-projects h2");
let contactContainer = document.querySelector(".container-contact");
let contactTitle = document.querySelector(".contact-title");
let contacctTitle2 = document.querySelector(".contact-title-2");
let contactContainerLeft = document.querySelector(".contact-right");
let contactContainerRight = document.querySelector(".contact-left");
let myLinksContainer = document.querySelectorAll(".headerLink");
const navigatorElement = document.querySelector(".navigator");
window.addEventListener("scroll", () => {
  scrollEfects();
});

window.addEventListener("DOMContentLoaded", () => {
  myLinksContainer[0].classList.add("link-active");
  homeContainerElement.classList.add("visible");
});

document.querySelectorAll("nav .headerLink").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    console.log("me");
    window.scrollTo({
      top: targetSection.offsetTop - 100,
      behavior: "smooth",
    });
    scrollEfects();
  });
});
document.querySelectorAll(".navigator .headerLink").forEach((link) => {
  link.addEventListener("click", function (e) {
    const icon = document.getElementById("icon");
    icon.classList.toggle("vertical-lines");
    if (!navigatorElement.classList.contains("navigator-active")) {
      navigatorElement.classList.add("navigator-active");
      document.body.classList.add("bar-activated");
    } else {
      navigatorElement.classList.remove("navigator-active");
      document.body.classList.remove("bar-activated");
    }
  });
});

function scrollEfects() {
  const aboutConatinerScroll = aboutConatiner.getBoundingClientRect();
  const projectsContainerScroll = projectsElement.getBoundingClientRect();
  const contactContainerScroll = contactContainer.getBoundingClientRect();
  const homeContainerScroll = homeContainerElement.getBoundingClientRect();
  // If the element is in the viewport, add the 'visible' class
  if (
    homeContainerScroll.top < window.innerHeight &&
    homeContainerScroll.bottom >= 0
  ) {
    myLinksContainer[0].classList.add("link-active");
    myLinksContainer[4].classList.add("link-active");

    homeContainerElement.classList.add("visible");
  } else {
    myLinksContainer[0].classList.remove("link-active");
    myLinksContainer[4].classList.remove("link-active");

    homeContainerElement.classList.remove("visible");
  }
  if (
    aboutConatinerScroll.top < window.innerHeight &&
    aboutConatinerScroll.bottom >= 0
  ) {
    myLinksContainer[0].classList.remove("link-active");
    myLinksContainer[4].classList.remove("link-active");

    myLinksContainer[1].classList.add("link-active");
    myLinksContainer[5].classList.add("link-active");

    aboutRightElement.classList.add("visible");
    aboutLeftElement.classList.add("visible");
    aboutMeTitle.classList.add("visible");
  } else {
    aboutRightElement.classList.remove("visible");
    aboutLeftElement.classList.remove("visible");
    aboutMeTitle.classList.remove("visible");
    myLinksContainer[1].classList.remove("link-active");
    myLinksContainer[5].classList.remove("link-active");
  }

  if (
    projectsContainerScroll.top < window.innerHeight &&
    projectsContainerScroll.bottom >= 0
  ) {
    myLinksContainer[2].classList.add("link-active");
    myLinksContainer[6].classList.add("link-active");

    myLinksContainer[1].classList.remove("link-active");
    myLinksContainer[5].classList.remove("link-active");

    projectsTitle.classList.add("visible");
    projectsEachElement.forEach((project) => {
      project.classList.add("visible");
    });
  } else {
    myLinksContainer[2].classList.remove("link-active");
    myLinksContainer[6].classList.remove("link-active");

    myLinksContainer[3].classList.remove("link-active");
    myLinksContainer[7].classList.remove("link-active");

    projectsTitle.classList.remove("visible");
    projectsEachElement.forEach((project) => {
      project.classList.remove("visible");
    });
  }

  if (
    contactContainerScroll.top < window.innerHeight &&
    contactContainerScroll.bottom >= 0
  ) {
    myLinksContainer[2].classList.remove("link-active");
    myLinksContainer[6].classList.remove("link-active");

    myLinksContainer[3].classList.add("link-active");
    myLinksContainer[7].classList.add("link-active");

    contactContainerLeft.classList.add("visible");
    contactContainerRight.classList.add("visible");

    contactTitle.classList.add("visible");
    contacctTitle2.classList.add("visible");
  } else {
    myLinksContainer[3].classList.remove("link-active");
    myLinksContainer[7].classList.remove("link-active");

    contactContainerLeft.classList.remove("visible");
    contactContainerRight.classList.remove("visible");

    contactTitle.classList.remove("visible");
    contacctTitle2.classList.remove("visible");
  }
}

// bar
document.getElementById("barButton").addEventListener("click", () => {
  const icon = document.getElementById("icon");
  icon.classList.toggle("vertical-lines");
  if (!navigatorElement.classList.contains("navigator-active")) {
    navigatorElement.classList.add("navigator-active");
    document.body.classList.add("bar-activated");
  } else {
    navigatorElement.classList.remove("navigator-active");
    document.body.classList.remove("bar-activated");
  }
});

// mail
