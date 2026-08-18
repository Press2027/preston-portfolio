const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


/* =========================
   AUTOMATIC DATE & TIME
========================= */

function updateDateTime() {

    const now = new Date();

    // Automatically get current year
    const year = now.getFullYear();

    // Automatically format current date
    const date = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    // Automatically format current time
    const time = now.toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    // Copyright year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = year;
    }

    // Last updated date
    const dateElement = document.getElementById("lastUpdated");

    if (dateElement) {
        dateElement.textContent = date;
    }

    // Current time
    const timeElement = document.getElementById("currentTime");

    if (timeElement) {
        timeElement.textContent = time;
    }
}


// Run immediately
updateDateTime();

// Update clock every second
setInterval(updateDateTime, 1000);


/* =========================
   SMOOTH REVEAL ANIMATION
========================= */

const sections = document.querySelectorAll(
    ".section, .contact-section"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.1
    }
);

sections.forEach(section => {
    observer.observe(section);
});