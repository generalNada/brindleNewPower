// Slideshow Data - Using images from slideImages folder
const slideshowData = [
  {
    type: "intro",
    title: "Welcome to My Kitchen Design Portfolio",
    description:
      "Explore my approach to creating beautiful, functional kitchen spaces that blend modern aesthetics with timeless design principles. Each project reflects a unique vision tailored to the client's lifestyle and needs.",
    image: "images/slideImages/petSlide_lead.png",
  },
  {
    type: "project",
    title: "Design Project 1",
    description:
      "A beautiful kitchen design showcasing modern functionality and elegant aesthetics.",
    image: "images/slideImages/petSlide_1.jpg",
  },
  {
    type: "project",
    title: "Design Project 2",
    description:
      "Thoughtful design that combines style and practicality for everyday living.",
    image: "images/slideImages/petSlide_2.jpg",
  },
  {
    type: "project",
    title: "Design Project 3",
    description:
      "Creating spaces that inspire and delight through careful attention to detail.",
    image: "images/slideImages/petSlide_3.jpg",
  },
  {
    type: "project",
    title: "Design Project 4",
    description:
      "Custom solutions tailored to each client's unique needs and preferences.",
    image: "images/slideImages/petSlide_4.jpg",
  },
  {
    type: "project",
    title: "Design Project 5",
    description:
      "Innovative layouts that maximize both space and functionality.",
    image: "images/slideImages/petSlide_5.jpg",
  },
  {
    type: "project",
    title: "Design Project 6",
    description:
      "Timeless designs that blend classic elements with contemporary style.",
    image: "images/slideImages/petSlide_6.jpg",
  },
  {
    type: "project",
    title: "Design Project 7",
    description:
      "Premium materials and finishes create luxurious yet livable spaces.",
    image: "images/slideImages/petSlide_7.jpg",
  },
  {
    type: "project",
    title: "Design Project 8",
    description: "Seamless integration of form and function in every design.",
    image: "images/slideImages/petSlide_8.jpg",
  },
  {
    type: "project",
    title: "Design Project 9",
    description:
      "Transformative designs that enhance the way you live and cook.",
    image: "images/slideImages/petSlide_9.jpg",
  },
];

// Gallery Images - Using images from galleryImages folder
const galleryImages = [
  "images/galleryImages/kitchen_1.jpg",
  "images/galleryImages/kitchen_2.jpg",
  "images/galleryImages/kitchen_3.jpg",
  "images/galleryImages/kitchen_4.jpg",
  "images/galleryImages/kitchen_5.jpg",
  "images/galleryImages/kitchen_6.jpg",
];

// Initialize the slideshow when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeSlideshow();
  initializeGallery();
  initializeCarousel();
  setupSectionNavigation();
  setupSmoothScrolling();
  setupBrowserHistory();
});

// Initialize Swiper slideshow
function initializeSlideshow() {
  const slideshowContainer = document.getElementById("slideshow-container");

  // Clear any existing content
  slideshowContainer.innerHTML = "";

  // Generate slides from data
  slideshowData.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.className = "swiper-slide";

    if (slide.type === "intro") {
      slideElement.innerHTML = `
                <div class="intro-slide">
                    <img src="${slide.image}" alt="${slide.title}" class="intro-image expandable-image" data-image-src="${slide.image}" onerror="this.style.display='none'">
                    <h2 class="intro-title">${slide.title}</h2>
                    <p class="intro-description">${slide.description}</p>
                </div>
            `;
    } else {
      slideElement.innerHTML = `
                <div class="slide-content">
                    <img src="${slide.image}" alt="${slide.title}" class="slide-image expandable-image" data-image-src="${slide.image}" onerror="this.src='https://via.placeholder.com/800x400/ebe6d9/2d5016?text=Kitchen+Design'">
                    <h3 class="slide-title">${slide.title}</h3>
                    <p class="slide-description">${slide.description}</p>
                </div>
            `;
    }

    // Add click handlers to images after they're added to DOM
    setTimeout(() => {
      const images = slideElement.querySelectorAll(".expandable-image");
      images.forEach((img) => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => {
          const imageSrc = img.getAttribute("data-image-src") || img.src;
          expandImage(imageSrc, slide.title);
        });
      });
    }, 0);

    slideshowContainer.appendChild(slideElement);
  });

  // Initialize Swiper
  const swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
    },
    effect: "slide",
    speed: 600,
  });
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    // Skip links with data-section attribute (handled by setupSectionNavigation)
    if (anchor.hasAttribute("data-section")) return;

    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // If it's a hidden section, show it first
        if (targetElement.classList.contains("hidden-section")) {
          // Hide all hidden sections
          document.querySelectorAll(".hidden-section").forEach((section) => {
            section.classList.remove("active");
          });
          // Show the target section
          targetElement.classList.add("active");
        }

        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

// Initialize Gallery Carousel
function initializeGallery() {
  const galleryContainer = document.getElementById("gallery-carousel-container");
  if (!galleryContainer) return;

  galleryContainer.innerHTML = "";

  galleryImages.forEach((imagePath, index) => {
    const slideElement = document.createElement("div");
    slideElement.className = "swiper-slide";
    
    slideElement.innerHTML = `
      <div class="gallery-carousel-slide-content">
        <img src="${imagePath}" alt="Kitchen Design ${index + 1}" class="gallery-carousel-slide-image" loading="lazy" data-image-src="${imagePath}">
        <div class="gallery-carousel-slide-text">
          <h2 class="gallery-carousel-slide-title">Kitchen Design ${index + 1}</h2>
          <p class="gallery-carousel-slide-description">
            A beautiful kitchen design showcasing modern functionality and elegant aesthetics. 
            This project reflects a unique vision tailored to the client's lifestyle and needs, 
            combining thoughtful design with practical everyday living.
          </p>
        </div>
      </div>
    `;

    // Add click handler to expand image
    const image = slideElement.querySelector(".gallery-carousel-slide-image");
    image.addEventListener("click", (e) => {
      e.preventDefault();
      expandImage(imagePath, `Kitchen Design ${index + 1}`);
    });
    image.style.cursor = "pointer";

    galleryContainer.appendChild(slideElement);
  });

  // Initialize Swiper for gallery carousel
  const gallerySwiper = new Swiper(".gallery-carousel-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: galleryImages.length > 1,
    autoHeight: true,
    allowTouchMove: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    threshold: 5,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    preventClicks: false,
    preventClicksPropagation: false,
    pagination: {
      el: ".gallery-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".gallery-nav-next",
      prevEl: ".gallery-nav-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      enabled: true,
      forceToAxis: true,
      sensitivity: 1,
      thresholdDelta: 50,
    },
    effect: "slide",
    speed: 600,
    autoplay: false,
    on: {
      slideChange: function() {
        this.updateAutoHeight();
      }
    }
  });
}

// Carousel data - using slideImages with project information
const carouselData = [
  {
    image: "images/slideImages/petSlide_lead.png",
    titleMain: "Carolyn Iyer",
    titleSub: "Special Projects",
    items: [
      "HR Planning & Strategy",
      "I.T. – Information Technology",
      "Organizational Design",
      "Talent Management",
      "Compensation & Performance Management",
      "Training and Development",
      "Health and Safety"
    ]
  },
  {
    image: "images/slideImages/petSlide_1.jpg",
    titleMain: slideshowData[1]?.title || "Design Project 1",
    titleSub: "Project Portfolio",
    items: [
      "Custom Kitchen Solutions",
      "Interior Design Consultation",
      "Space Planning & Layout",
      "Material Selection",
      "Project Management",
      "Quality Assurance",
      "Client Collaboration"
    ]
  },
  {
    image: "images/slideImages/petSlide_2.jpg",
    titleMain: slideshowData[2]?.title || "Design Project 2",
    titleSub: "Project Portfolio",
    items: [
      "Modern Functionality",
      "Elegant Aesthetics",
      "Thoughtful Design",
      "Style & Practicality",
      "Everyday Living",
      "Client Satisfaction",
      "Quality Craftsmanship"
    ]
  },
  {
    image: "images/slideImages/petSlide_3.jpg",
    titleMain: slideshowData[3]?.title || "Design Project 3",
    titleSub: "Project Portfolio",
    items: [
      "Inspiring Spaces",
      "Attention to Detail",
      "Creative Solutions",
      "Timeless Design",
      "Custom Tailoring",
      "Client Preferences",
      "Unique Vision"
    ]
  },
  {
    image: "images/slideImages/petSlide_4.jpg",
    titleMain: slideshowData[4]?.title || "Design Project 4",
    titleSub: "Project Portfolio",
    items: [
      "Innovative Layouts",
      "Space Maximization",
      "Functionality Focus",
      "Modern Aesthetics",
      "Classic Elements",
      "Contemporary Style",
      "Premium Materials"
    ]
  },
  {
    image: "images/slideImages/petSlide_5.jpg",
    titleMain: slideshowData[5]?.title || "Design Project 5",
    titleSub: "Project Portfolio",
    items: [
      "Luxurious Finishes",
      "Livable Spaces",
      "Form & Function",
      "Transformative Design",
      "Enhanced Living",
      "Culinary Excellence",
      "Quality Craftsmanship"
    ]
  },
  {
    image: "images/slideImages/petSlide_6.jpg",
    titleMain: slideshowData[6]?.title || "Design Project 6",
    titleSub: "Project Portfolio",
    items: [
      "Timeless Designs",
      "Classic Elements",
      "Contemporary Style",
      "Premium Materials",
      "Quality Finishes",
      "Client Collaboration",
      "Excellence in Design"
    ]
  },
  {
    image: "images/slideImages/petSlide_7.jpg",
    titleMain: slideshowData[7]?.title || "Design Project 7",
    titleSub: "Project Portfolio",
    items: [
      "Seamless Integration",
      "Form & Function",
      "Transformative Design",
      "Enhanced Living",
      "Culinary Excellence",
      "Quality Craftsmanship",
      "Client Satisfaction"
    ]
  },
  {
    image: "images/slideImages/petSlide_8.jpg",
    titleMain: slideshowData[8]?.title || "Design Project 8",
    titleSub: "Project Portfolio",
    items: [
      "Innovative Solutions",
      "Space Optimization",
      "Modern Aesthetics",
      "Classic Elements",
      "Premium Materials",
      "Quality Craftsmanship",
      "Client Collaboration"
    ]
  },
  {
    image: "images/slideImages/petSlide_9.jpg",
    titleMain: slideshowData[9]?.title || "Design Project 9",
    titleSub: "Project Portfolio",
    items: [
      "Transformative Design",
      "Enhanced Living",
      "Culinary Excellence",
      "Quality Craftsmanship",
      "Client Satisfaction",
      "Timeless Beauty",
      "Functional Elegance"
    ]
  }
];

// Initialize Carousel
function initializeCarousel() {
  const carouselContainer = document.getElementById("carousel-slides-container");
  if (!carouselContainer) return;

  carouselContainer.innerHTML = "";

  carouselData.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.className = "swiper-slide";
    
    const listItems = slide.items.map(item => 
      `<li>${item}</li>`
    ).join("");

    slideElement.innerHTML = `
      <div class="carousel-slide-content">
        <img src="${slide.image}" alt="${slide.titleMain}" class="carousel-slide-image" loading="lazy">
        <div class="carousel-slide-text">
          <h2 class="carousel-slide-title">
            <span class="title-main">${slide.titleMain}</span>
            <span class="title-sub">${slide.titleSub}</span>
          </h2>
          <ul class="carousel-slide-list">
            ${listItems}
          </ul>
        </div>
      </div>
    `;

    carouselContainer.appendChild(slideElement);
  });

  // Add click handlers after DOM is ready
  setTimeout(() => {
    const carouselImages = document.querySelectorAll(".carousel-slide-image");
    carouselImages.forEach((img, index) => {
      img.style.cursor = "pointer";
      img.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const slideData = carouselData[index % carouselData.length];
        expandImage(slideData.image, slideData.titleMain + " - " + slideData.titleSub);
      });
    });
  }, 100);

  // Initialize Swiper for carousel
  const carouselSwiper = new Swiper(".carousel-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: carouselData.length > 1,
    autoHeight: true,
    allowTouchMove: true,
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
    threshold: 5,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: true,
    preventClicks: false,
    preventClicksPropagation: false,
    pagination: {
      el: ".carousel-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".carousel-nav-next",
      prevEl: ".carousel-nav-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    mousewheel: {
      enabled: true,
      forceToAxis: true,
      sensitivity: 1,
      thresholdDelta: 50,
    },
    effect: "slide",
    speed: 600,
    autoplay: false,
    on: {
      slideChange: function() {
        this.updateAutoHeight();
      }
    }
  });
}

// Setup Section Navigation (show/hide sections with toggle)
function setupSectionNavigation() {
  const navLinks = document.querySelectorAll(".nav-link[data-section]");
  const hiddenSections = document.querySelectorAll(".hidden-section");
  const landingSection = document.querySelector(".landing-section");
  const header = document.querySelector(".header");

  // Function to show a section
  function showSection(sectionName, updateHistory = true) {
    // Handle Home - return to landing content
    if (sectionName === "home" || !sectionName) {
      // Hide all hidden sections
      hiddenSections.forEach((section) => {
        section.classList.remove("active");
      });

      // Show landing section
      if (landingSection) {
        landingSection.classList.remove("hidden");
      }

      // Update header styling
      if (header) {
        header.classList.remove("on-section");
      }

      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      // Update history
      if (updateHistory) {
        const baseUrl = window.location.pathname + (window.location.search || '');
        // Remove hash if present
        window.history.pushState({ section: 'home' }, '', baseUrl);
      }
      return;
    }

    const targetSection = document.getElementById(sectionName);

    if (targetSection) {
      const isCurrentlyActive = targetSection.classList.contains("active");

      if (isCurrentlyActive) {
        // If already active, hide it and show landing
        showSection("home", updateHistory);
        return;
      }

      // Hide all hidden sections first
      hiddenSections.forEach((section) => {
        section.classList.remove("active");
      });

      // Hide landing section when showing other content
      if (landingSection) {
        landingSection.classList.add("hidden");
      }

      // Show the selected section
      targetSection.classList.add("active");

      // Update header styling
      if (header) {
        header.classList.add("on-section");
      }

      // Trigger fade-in animation for contact section
      if (sectionName === "contact") {
        const contactHero = targetSection.querySelector(".contact-hero-content");
        if (contactHero) {
          // Reset animation
          contactHero.style.animation = "none";
          setTimeout(() => {
            contactHero.style.animation = "contactFadeIn 1.2s ease-out forwards";
          }, 10);
        }
      }

      // Scroll to top - section starts directly under header
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

          // Update Swiper if slideshow section
          if (sectionName === "slideshow") {
            setTimeout(() => {
              const swiper = document.querySelector(".gallery-swiper");
              if (swiper && swiper.swiper) {
                swiper.swiper.update();
              }
            }, 100);
          }

          // Update Swiper if carousel section
          if (sectionName === "slideshow-carousel") {
            setTimeout(() => {
              const swiper = document.querySelector(".carousel-swiper");
              if (swiper && swiper.swiper) {
                swiper.swiper.update();
              }
            }, 100);
          }

          // Update Swiper if gallery section
          if (sectionName === "gallery") {
            setTimeout(() => {
              const swiper = document.querySelector(".gallery-carousel-swiper");
              if (swiper && swiper.swiper) {
                swiper.swiper.update();
              }
            }, 100);
          }

      // Update history
      if (updateHistory) {
        const baseUrl = window.location.pathname + (window.location.search || '');
        const url = baseUrl + '#' + sectionName;
        window.history.pushState({ section: sectionName }, '', url);
      }
    }
  }

  // Add click handlers to navigation links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const sectionName = link.getAttribute("data-section");
      showSection(sectionName, true);
    });
  });

  // Check if any section is active on page load and hide landing if so
  const hasActiveSection = Array.from(hiddenSections).some((section) =>
    section.classList.contains("active")
  );
  if (hasActiveSection && landingSection) {
    landingSection.classList.add("hidden");
    if (header) {
      header.classList.add("on-section");
    }
  } else {
    // Initialize history state
    window.history.replaceState({ section: 'home' }, '', window.location.pathname);
    // Ensure header has correct initial styling
    if (header) {
      header.classList.remove("on-section");
    }
  }

  // Export showSection for use by browser history handler
  window.showSection = showSection;
}

// Setup Browser History Support
function setupBrowserHistory() {
  // Handle browser back/forward buttons
  window.addEventListener("popstate", function (e) {
    const state = e.state;
    let sectionName = null;
    
    if (state && state.section) {
      sectionName = state.section;
    } else {
      // Get section from hash if state doesn't have it
      const hash = window.location.hash.replace('#', '');
      sectionName = hash || 'home';
    }
    
    // Show the appropriate section without updating history (to avoid loops)
    if (window.showSection) {
      window.showSection(sectionName, false);
    }
  });

  // Handle initial page load with hash
  const handleInitialHash = function() {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const section = document.getElementById(hash);
      if (section && window.showSection) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          window.showSection(hash, false);
        }, 100);
      }
    } else {
      // No hash, ensure we're on home
      if (window.showSection) {
        window.showSection('home', false);
      }
    }
  };

  // Run on load
  if (document.readyState === 'loading') {
    window.addEventListener("load", handleInitialHash);
  } else {
    handleInitialHash();
  }
}

// Expand image function
function expandImage(imageSrc, altText) {
  // Prevent body scroll and hide overflow
  const scrollY = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = "100%";
  document.body.style.overflow = "hidden";
  
  // Create modal overlay
  const modal = document.createElement("div");
  modal.className = "image-modal";
  modal.innerHTML = `
    <div class="image-modal-content">
      <button class="image-modal-close" aria-label="Close">&times;</button>
      <img src="${imageSrc}" alt="${altText}" class="image-modal-image">
    </div>
  `;

  document.body.appendChild(modal);

  // Close on X button click
  const closeBtn = modal.querySelector(".image-modal-close");
  closeBtn.addEventListener("click", () => closeImageModal(modal, scrollY));

  // Close on overlay click (outside image)
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("image-modal-content")) {
      closeImageModal(modal, scrollY);
    }
  });

  // Close on Escape key
  const escapeHandler = (e) => {
    if (e.key === "Escape") {
      closeImageModal(modal, scrollY);
      document.removeEventListener("keydown", escapeHandler);
    }
  };
  document.addEventListener("keydown", escapeHandler);

  // Trigger animation
  setTimeout(() => {
    modal.classList.add("active");
  }, 10);
}

// Close image modal function
function closeImageModal(modal, scrollY) {
  modal.classList.remove("active");
  setTimeout(() => {
    document.body.removeChild(modal);
    // Restore body scroll position
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";
    document.body.style.overflow = "";
    if (scrollY !== undefined) {
      window.scrollTo(0, scrollY);
    }
  }, 300);
}

// Optional: Add keyboard navigation for slideshow
document.addEventListener("keydown", function (e) {
  const slideshowSection = document.getElementById("slideshow");
  if (!slideshowSection) return;

  const rect = slideshowSection.getBoundingClientRect();
  const isInView = rect.top < window.innerHeight && rect.bottom > 0;
  const isActive = slideshowSection.classList.contains("active");

  if (isInView && isActive) {
    const swiper = document.querySelector(".gallery-swiper");
    if (swiper && swiper.swiper) {
      if (e.key === "ArrowLeft") {
        swiper.swiper.slidePrev();
      } else if (e.key === "ArrowRight") {
        swiper.swiper.slideNext();
      }
    }
  }
});
