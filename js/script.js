/*toggle icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*Scroll Sections active link */

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*sticky navbar*/
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  /* remove toggle  icon and navbar when click navbar link (scroll) */

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/* scroll reveal */
ScrollReveal({
  /* reset: true, */
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .portfolio-box, contact", {
  origin: "bottom",
});
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/* typed js */

const typed = new Typed(".multiple-text", {
  strings: ["Front-End Developer", "Logistics Technician"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/* Donwload CV button*/

function downloadCV() {
  // You can replace '/cv/Jean.R.Curriculum.pdf' with the actual path of your PDF file
  var filePath = "cv/Jean.Rocha_Resume2025";

  // Create an invisible <a> (link) element
  var link = document.createElement("a");
  link.href = filePath;

  // Set the download attribute to specify the name of the file to be downloaded
  link.download = "Jean.Rocha_Resume2025";

  // Add the link to the document body
  document.body.appendChild(link);

  // Simulate a click on the link to initiate the download
  link.click();

  // Remove the link from the document body after the download
  document.body.removeChild(link);
}
