const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

// Open and close the navigation menu
menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a navigation link
const links = navLinks.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});