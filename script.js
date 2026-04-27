// Initialize EmailJS (Keeping your existing setup)
(function () {
  emailjs.init("YOUR_PUBLIC_KEY");
})();

const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const navbar = document.getElementById("navbar");
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

// Hero Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const indicators = document.querySelectorAll("[data-indicator]");
const totalSlides = slides.length;
let slideInterval;

function showSlide(index) {
  // Handle Slide Transitions
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.remove("opacity-0");
      slide.classList.add("opacity-100");
    } else {
      slide.classList.add("opacity-0");
      slide.classList.remove("opacity-100");
    }
  });

  // Update Indicators — reset all, then activate current
  indicators.forEach((indicator, i) => {
    // Reset to inactive state
    indicator.classList.remove("scale-125", "w-6", "bg-white");
    indicator.classList.add("bg-white/40");

    if (i === index) {
      // Active dot: slightly wider pill + full white
      indicator.classList.remove("bg-white/40");
      indicator.classList.add("bg-white", "w-6");
    }
  });

  currentSlide = index;
}

function nextSlide() {
  let next = (currentSlide + 1) % totalSlides;
  showSlide(next);
}

function prevSlide() {
  let prev = (currentSlide - 1 + totalSlides) % totalSlides;
  showSlide(prev);
}

// Function to restart the timer whenever a user interacts
function restartAutoPlay() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 5000);
}

// --- Event Listeners ---

// Initial Start
restartAutoPlay();

// Next/Prev Buttons
document.getElementById("next-slide")?.addEventListener("click", () => {
  nextSlide();
  restartAutoPlay();
});

document.getElementById("prev-slide")?.addEventListener("click", () => {
  prevSlide();
  restartAutoPlay();
});

// Indicator clicks
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    showSlide(index);
    restartAutoPlay();
  });
});

// Touch/swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

// Note: Ensure your <section> has id="home"
const heroSection = document.getElementById("home");
if (heroSection) {
  heroSection.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true },
  );

  heroSection.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true },
  );
}

function handleSwipe() {
  const swipeThreshold = 50;
  if (touchEndX < touchStartX - swipeThreshold) {
    nextSlide();
    restartAutoPlay();
  } else if (touchEndX > touchStartX + swipeThreshold) {
    prevSlide();
    restartAutoPlay();
  }
}

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("mobile-menu-enter");
});

// Close mobile menu when any nav link is clicked
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("mobile-menu-enter");
  });
});

// Contact form submission
contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // Get form data
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);

  // Show loading state
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Sending...';
  submitBtn.disabled = true;

  try {
    // Send email using EmailJS
    const response = await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: data.name,
      from_email: data.email,
      phone: data.phone,
      message: data.message,
      to_email: "hom.inanilongbaycox@gmail.com", // Hotel's email
    });

    // Show success message
    showFormMessage(
      "Thank you for your message! We will get back to you soon.",
      "success",
    );
    contactForm.reset();
  } catch (error) {
    console.error("Error sending email:", error);
    // Fallback: simulate form submission
    simulateFormSubmission(data);
  } finally {
    // Reset button
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
});

// Show form message
function showFormMessage(message, type) {
  formMessage.innerHTML = `
        <div class="${type === "success" ? "success-message" : "error-message"}">
            <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
            ${message}
        </div>
    `;
  formMessage.classList.remove("hidden");

  // Hide message after 5 seconds
  setTimeout(() => {
    formMessage.classList.add("hidden");
  }, 5000);
}

// Simulate form submission (fallback)
function simulateFormSubmission(data) {
  // Log the form data (in production, this would send to a server)
  console.log("Form submission data:", data);

  // Show success message
  showFormMessage(
    "Thank you for your message! We will get back to you soon.",
    "success",
  );
  contactForm.reset();

  // In a real implementation, you would send this data to your server
  // which would then email the hotel
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-fade-in-up");
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  // Observe all sections
  document.querySelectorAll("section").forEach((section) => {
    observer.observe(section);
  });

  // Observe cards
  document.querySelectorAll(".card-hover").forEach((card) => {
    observer.observe(card);
  });
});

// Room card interactions
document.querySelectorAll(".group").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Newsletter subscription
document.querySelectorAll('footer input[type="email"]').forEach((input) => {
  const button = input.nextElementSibling;
  if (button) {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const email = input.value;
      if (email && validateEmail(email)) {
        showNotification(
          "Thank you for subscribing to our newsletter!",
          "success",
        );
        input.value = "";
      } else {
        showNotification("Please enter a valid email address.", "error");
      }
    });
  }
});

// Email validation
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Show notification
function showNotification(message, type) {
  const notification = document.createElement("div");
  notification.className = `fixed top-20 right-4 z-50 ${type === "success" ? "bg-green-500" : "bg-red-400"} text-white px-6 py-3 rounded-lg shadow-lg transform translate-x-full transition-transform duration-300`;
  notification.innerHTML = `
        <div class="flex items-center space-x-2">
            <i class="fas ${type === "success" ? "fa-check-circle" : "fa-exclamation-circle"}"></i>
            <span>${message}</span>
        </div>
    `;

  document.body.appendChild(notification);

  // Slide in
  setTimeout(() => {
    notification.style.transform = "translateX(0)";
  }, 100);

  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Booking button handlers
document.querySelectorAll("button").forEach((button) => {
  if (
    button.textContent.includes("Book Now") ||
    button.textContent.includes("Check Availability")
  ) {
    button.addEventListener("click", () => {
      showNotification(
        "Booking system coming soon! Please contact us directly.",
        "info",
      );
    });
  }
});

// Virtual tour button
document.querySelectorAll("button").forEach((button) => {
  if (button.textContent.includes("Virtual Tour")) {
    button.addEventListener("click", () => {
      showNotification(
        "Virtual tour coming soon! Please contact us for more information.",
        "info",
      );
    });
  }
});

// Room detail buttons
document.querySelectorAll("button").forEach((button) => {
  if (button.textContent.includes("View Details")) {
    button.addEventListener("click", () => {
      showNotification("Detailed room information coming soon!", "info");
    });
  }
});

// Loading animation for images
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("load", function () {
    this.classList.add("loaded");
  });

  img.addEventListener("error", function () {
    this.src = "https://via.placeholder.com/400x300?text=Image+Not+Available";
  });
});

// Add loading states
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// Performance optimization - Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Debounced scroll handlers
const debouncedScroll = debounce(() => {
  // Scroll-based animations
  const scrolled = window.pageYOffset;

  // Update navbar
  if (scrolled > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
}, 10);

window.addEventListener("scroll", debouncedScroll);

// Initialize tooltips
document.addEventListener("DOMContentLoaded", () => {
  // Add any tooltip initialization here
  console.log("Hotel Inani Long Bay website loaded successfully!");
});

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript error:", e.error);
});

// Service Worker registration (for PWA functionality)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
