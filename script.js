const candle = document.getElementById("candle");
const message = document.getElementById("message");
const bgMusic = document.getElementById("bg-music");

window.addEventListener("load", () => {
  // Try to autoplay background music
  bgMusic.play().catch(() => {
    // Some browsers may block autoplay, allow user interaction
    document.body.addEventListener("click", () => bgMusic.play(), { once: true });
  });
});

candle.addEventListener("click", () => {
  message.classList.remove("hidden");
});

function closeMessage() {
  message.classList.add("hidden");
}

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Manual nav (optional)
function plusSlides(n) {
  slideIndex += n - 1;
  showSlides();
}