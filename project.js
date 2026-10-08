const workGalleryToggles = document.querySelectorAll(".model-work-card .gallery-toggle");

for (let i = 0; i < workGalleryToggles.length; i++) {
    const button = workGalleryToggles[i];
    const gallery = document.getElementById(button.getAttribute("aria-controls"));

    button.onclick = function () {
        gallery.classList.toggle("is-collapsed");
        const isExpanded = !gallery.classList.contains("is-collapsed");
        button.setAttribute("aria-expanded", isExpanded);
        button.textContent = isExpanded ? "Less detail" : "More detail";
    };
}

const backToTopButton = document.getElementById("back-to-top");

function updateBackToTop() {
    backToTopButton.hidden = window.scrollY < 300;
}

window.addEventListener("scroll", updateBackToTop);
updateBackToTop();

backToTopButton.onclick = function () {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
};
