const cardToggles = document.querySelectorAll(".card-toggle");

for (let i = 0; i < cardToggles.length; i++) {
    const button = cardToggles[i];
    const details = document.getElementById(button.getAttribute("aria-controls"));

    button.hidden = false;
    button.onclick = function () {
        details.classList.toggle("is-collapsed");
        const isExpanded = !details.classList.contains("is-collapsed");
        button.setAttribute("aria-expanded", isExpanded);
        button.textContent = isExpanded ? "-" : "+";
        const label = isExpanded ? "ซ่อนรายละเอียด" : "แสดงรายละเอียด";
        button.setAttribute("aria-label", label);
        button.title = label;
    };
}
