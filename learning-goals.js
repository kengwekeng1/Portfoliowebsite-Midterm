lucide.createIcons();

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
