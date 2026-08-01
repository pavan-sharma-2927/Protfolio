


const menuBtn = document.getElementById("togglebutton");
const navbar = document.getElementById("navbar");
menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("show");
});

function funAlert(){
    alert("Account is inactive.")
}

let navLinks = document.querySelectorAll("header nav a");
let nav = document.querySelector("header nav");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    nav.classList.remove("show");
  });
});

// Smooth scrolling

let links = document.querySelectorAll("nav a");

links.forEach(function (link) {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        let target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// Highlight navbar

let sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        let sectionTop = section.offsetTop - 120;

        if (window.pageYOffset >= sectionTop) {
            currentSection = section.getAttribute("id");
        }

    });

    links.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// scroll behaviour

let allSections = document.querySelectorAll("section");

function revealSections() {
    allSections.forEach(function (section) {
        let position = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.classList.add("show");
        } else {
            section.classList.remove("show"); //    re-hide if scrolled back up
        }
    });
}
window.addEventListener("load", revealSections);
window.addEventListener("scroll", revealSections);
window.addEventListener("resize", revealSections);


//  EmailJS

emailjs.init({
    publicKey: "PnVNyq1CvUnoYPUSp",
});

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_3656mw4",
            "template_f14mamj",
            this
        )
        .then(() => {
            alert("Message sent successfully!");
            form.reset();
        })
        .catch((error) => {
            alert("Failed to send message.");
            console.log(error);
        });
});