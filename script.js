var hamburgerbutton = document.getElementById("hamburger");
var profilenavigation = document.getElementById("profilenavigation");

var home = document.getElementById("home");
var homepage = document.getElementById("homepage");

var about = document.getElementById("about");
var aboutpage = document.getElementById("aboutpage");

var resume = document.getElementById("resume");
var resumepage = document.getElementById("resumepage");

var portfolio = document.getElementById("portfolio");
var portfoliopage = document.getElementById("portfoliopage");

var contact = document.getElementById("contact");
var contactpage = document.getElementById("contactpage");

hamburgerbutton.addEventListener("click", function() {
  if (profilenavigation.classList.contains("hidden")) {
    profilenavigation.classList.remove("slideout");
    profilenavigation.classList.remove("hidden");
    profilenavigation.classList.add("slidein");
    
  } else {
    profilenavigation.classList.remove("slidein");
    profilenavigation.classList.add("slideout");
    setTimeout(function() {
      profilenavigation.classList.add("hidden");
    }, 500);
  }
});

home.addEventListener("click", function() {
  homepage.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  if (window.matchMedia("(min-width: 1024px)").matches) {
    /* the viewport is at least 1024 pixels wide */
  } else {
    profilenavigation.classList.remove("slidein");
    profilenavigation.classList.add("slideout");
    setTimeout(function() {
      profilenavigation.classList.add("hidden");
    }, 500);
  }
});

about.addEventListener("click", function() {
  aboutpage.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  if (window.matchMedia("(min-width: 1024px)").matches) {
    /* the viewport is at least 1024 pixels wide */
  } else {
    profilenavigation.classList.remove("slidein");
    profilenavigation.classList.add("slideout");
    setTimeout(function() {
      profilenavigation.classList.add("hidden");
    }, 500);
  }
});

resume.addEventListener("click", function() {
  resumepage.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  if (window.matchMedia("(min-width: 1024px)").matches) {
    /* the viewport is at least 1024 pixels wide */
  } else {
    profilenavigation.classList.remove("slidein");
    profilenavigation.classList.add("slideout");
    setTimeout(function() {
      profilenavigation.classList.add("hidden");
    }, 500);
  }
});

portfolio.addEventListener("click", function() {
  portfoliopage.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  if (window.matchMedia("(min-width: 1024px)").matches) {
    /* the viewport is at least 1024 pixels wide */
  } else {
    profilenavigation.classList.remove("slidein");
    profilenavigation.classList.add("slideout");
    setTimeout(function() {
      profilenavigation.classList.add("hidden");
    }, 500);
  }
});

contact.addEventListener("click", function() {
  contactpage.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  if (window.matchMedia("(min-width: 1024px)").matches) {
    /* the viewport is at least 1024 pixels wide */
  } else {
    profilenavigation.classList.remove("slidein");
    profilenavigation.classList.add("slideout");
    setTimeout(function() {
      profilenavigation.classList.add("hidden");
    }, 500);
  }
});