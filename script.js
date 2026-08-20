function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");

}


// Close menu after clicking a navigation link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(item) {

    item.addEventListener("click", function() {

        document
            .getElementById("navLinks")
            .classList.remove("active");

    });

});


// Prevent empty Live Demo links from jumping to the top

const demoButtons = document.querySelectorAll(".demo");

demoButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        if (button.getAttribute("href") === "#") {

            event.preventDefault();

            alert("Live demo link will be added when the project is deployed.");

        }

    });

});