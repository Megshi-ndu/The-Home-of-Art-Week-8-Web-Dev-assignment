// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll(".slides img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
    console.log("Showing slide:", index);
}
function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}
function prevSlideFunc() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}
if (slides.length > 0) {
  showSlide(slideIndex);
  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlideFunc);
  setInterval(nextSlide, 5000); // auto-slide
}

// Form Validation
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMessage = document.getElementById("formMessage");

    if (name === "" || email === "" || message === "") {
      formMessage.textContent = "Please fill out all fields.";
      formMessage.style.color = "red";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formMessage.textContent = "Enter a valid email address.";
      formMessage.style.color = "red";
    } else {
      formMessage.textContent = "Message sent successfully!";
      formMessage.style.color = "green";
      form.reset();
    }
  });
}

// Scroll-to-top button
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerHTML = "↑";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Typing animation for hero text
const typingText = document.getElementById("typingText");
if (typingText) {
  const text = "Welcome to My Website";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      typingText.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100); // typing speed
    }
  }
  typeEffect();
}
// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
if (darkModeToggle) {
    darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "☀️"; // Sun icon
    } else {
        darkModeToggle.textContent = "🌙"; // Moon icon
    }
    });
}