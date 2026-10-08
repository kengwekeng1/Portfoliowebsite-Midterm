const gameCard = document.getElementById("game-hobby-card");
const gameSticker = document.getElementById("game-sticker");

gameCard.onmouseenter = function () {
    gameSticker.src = "images/hobby-game-sticker.gif";
};

gameCard.onmouseleave = function () {
    gameSticker.src = "images/hobby-game-still.png";
};

const galleryToggle = document.getElementById("gallery-toggle");
const readingCard = document.getElementById("reading-hobby-card");
const readingSticker = document.getElementById("reading-sticker");

readingCard.onmouseenter = function () {
    readingSticker.src = "images/hobby-reading-sticker.gif";
};

readingCard.onmouseleave = function () {
    readingSticker.src = "images/hobby-reading-still.png";
};

const gameGallery = document.getElementById("game-gallery");

galleryToggle.onclick = function () {
    gameGallery.classList.toggle("is-collapsed");
    const isExpanded = !gameGallery.classList.contains("is-collapsed");
    galleryToggle.setAttribute("aria-expanded", isExpanded);
    galleryToggle.textContent = isExpanded ? "ซ่อนภาพเพิ่มเติม" : "ดูภาพเพิ่มเติม";
};

const musicToggle = document.getElementById("music-toggle");
const musicClips = document.getElementById("music-clips");
const musicCard = document.getElementById("music-hobby-card");
const musicSticker = document.getElementById("music-sticker");

musicCard.onmouseenter = function () {
    musicSticker.src = "images/hobby-music-sticker.gif";
};

musicCard.onmouseleave = function () {
    musicSticker.src = "images/hobby-music-still.png";
};

musicToggle.onclick = function () {
    musicClips.classList.toggle("is-collapsed");
    const isExpanded = !musicClips.classList.contains("is-collapsed");
    musicToggle.setAttribute("aria-expanded", isExpanded);
    musicToggle.textContent = isExpanded ? "ซ่อนเพลงเพิ่มเติม" : "ดูเพลงเพิ่มเติม";
};
