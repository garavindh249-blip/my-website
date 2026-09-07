/* ============================================================
   ARAVINDH � Developer & Product Builder
   Vanilla JavaScript � no frameworks.
   ============================================================ */

/* ============================================================
   SMART IMAGE SCAN REPORT (developer reference � not shown to visitors)
   ============================================================
   ALL images from each project folder are included � no limit.
   Total: 37 images across 6 projects. All are 9:16 portrait except logos (icon/square).
   Auto-slide: 5 seconds, stops on user interaction.

   NELIGRAM (12 images: logo.jpg, home.jpg, img(1).jpg � img(11).jpg)
     logo.jpg     ? App Icon (icon)    img (7).jpg  ? Screen 7
     home.jpg     ? Home Screen        img (8).jpg  ? Screen 8 (missing)
     img (1).jpg  ? Screen 1           img (9).jpg  ? Community Screen
     img (2).jpg  ? Home Screen        img (10).jpg ? Screen 10
     img (3).jpg  ? Reels Screen       img (11).jpg ? Screen 11
     img (4).jpg  ? Chat Screen        img (5).jpg  ? missing
     img (6).jpg  ? Screen 6

   BLINK (7 images: logo.jpg, `img(2).jpg, img(1).jpg, img(3).jpg � img(6).jpg)
     logo.jpg    ? App Icon (icon)     img (4).jpg ? Screen 4
     `img (2).jpg ? Screen 1           img (5).jpg ? Screen 5
     img (1).jpg ? Screen 2            img (6).jpg ? Screen 6
     img (3).jpg ? Screen 3

   SNAP SOLVE (3 images: logo.jpg, img(1).jpg, img(2).jpg)
     logo.jpg    ? App Icon (icon)     img (2).jpg ? Screen 2
     img (1).jpg ? Screen 1

   WHERE IS MY BUS (4 images: logo.jpg, img.jpg, img2.jpg, img3.jpg)
     logo.jpg  ? App Icon (icon)       img3.jpg  ? Screen 3
     img.jpg   ? Screen 1
     img2.jpg  ? Screen 2

   POWER CUT (7 images: logo.jpg, img(1).png � img(6).png)
     logo.jpg    ? App Icon (icon)     img (4).png ? Screen 4
     img (1).png ? Screen 1            img (5).png ? Screen 5
     img (2).png ? Screen 2            img (6).png ? Screen 6
     img (3).png ? Screen 3

   FOODLY (3 images: logo.jpg, img(1).jpg, img(2).jpg)
     logo.jpg    ? App Icon (icon)     img (2).jpg ? Screen 2
     img (1).jpg ? Screen 1
   ============================================================ */

/* ---------- Project Data (edit everything here) ---------- */
const projects = [
  {
    id: 1,
    number: "01",
    name: "NELIGRAM",
    tagline: "Connecting people, businesses and communities.",
    category: "mobile",
    categoryLabel: "Mobile Apps",
    featured: true,
    description:
      "A community-focused platform designed to bring local people, businesses, services and useful information together in one digital ecosystem.",
    features: ["Community", "Local Businesses", "Reels", "Stories", "Chat", "Services", "Agriculture", "News", "TNPSC"],
    technologies: ["Flutter", "Dart", "Firebase", "Firestore", "Firebase Storage"],
    problem:
      "Local communities rely on scattered WhatsApp groups, notice boards and word of mouth. There is no single trusted place where residents, businesses and services meet.",
    solution:
      "One unified mobile ecosystem with reels, stories, chat, local business listings, agriculture updates, news and exam resources � built to keep an entire district connected.",
    role: "Product design, Flutter development, Firebase architecture and full end-to-end build.",
    status: "In active development",
    links: { view: "#", caseStudy: "#" },
    images: [
      { path: "assets/projects/Nellai Connect/logo.jpg", label: "App Icon", type: "icon" },
      { path: "assets/projects/Nellai Connect/home.jpg", label: "Home Screen", type: "screenshot" },
      { path: "assets/projects/Nellai Connect/img (1).jpg", label: "Screen 1", type: "screenshot" },
      { path: "assets/projects/Nellai Connect/img (2).jpg", label: "Home Screen", type: "screenshot" },
      { path: "assets/projects/Nellai Connect/img (3).jpg", label: "Reels Screen", type: "screenshot" },
      { path: "assets/projects/Nellai Connect/img (4).jpg", label: "Chat Screen", type: "screenshot" },
      { path: "assets/projects/Nellai Connect/img (6).jpg", label: "Screen 6", type: "screenshot" },
      { path: "assets/projects/Nellai Connect/img (7).jpg", label: "Screen 7", type: "screenshot" },
      { path: "assets/projects/Nellai Connect/img (9).jpg", label: "Community Screen", type: "screenshot" },
      { path: "assets/projects/Nellai Connect/img (10).jpg", label: "Screen 10", type: "screenshot" },
      { path: "assets/projects/Nellai Connect/img (11).jpg", label: "Screen 11", type: "screenshot" }
    ]
  },
  {
    id: 2,
    number: "02",
    name: "Blink",
    tagline: "Share a feeling. Let it disappear.",
    category: "concept",
    categoryLabel: "Concepts",
    featured: false,
    description:
      "A 24-hour feelings-sharing social concept focused on temporary emotional expression.",
    features: ["24 Hour Posts", "Feelings", "Social", "Temporary Content", "Mobile Experience"],
    technologies: ["Flutter", "Dart", "Firebase"],
    problem:
      "Permanent social feeds create pressure. People hesitate to express how they truly feel because everything stays online forever.",
    solution:
      "Posts exist for exactly 24 hours, then vanish. Blink gives users a safe, low-pressure space to share moods and moments without a digital footprint.",
    role: "Concept, UX flows, Flutter UI, Firebase backend design.",
    status: "Prototype",
    links: { view: "#", caseStudy: "#" },
    images: [
      { path: "assets/projects/Blink/logo.jpg", label: "App Icon", type: "icon" },
      { path: "assets/projects/Blink/`img (2).jpg", label: "Screen 1", type: "screenshot" },
      { path: "assets/projects/Blink/img (1).jpg", label: "Screen 2", type: "screenshot" },
      { path: "assets/projects/Blink/img (3).jpg", label: "Screen 3", type: "screenshot" },
      { path: "assets/projects/Blink/img (4).jpg", label: "Screen 4", type: "screenshot" },
      { path: "assets/projects/Blink/img (5).jpg", label: "Screen 5", type: "screenshot" },
      { path: "assets/projects/Blink/img (6).jpg", label: "Screen 6", type: "screenshot" }
    ]
  },
  {
    id: 3,
    number: "03",
    name: "Snap Solve",
    tagline: "Turn questions into solutions.",
    category: "concept",
    categoryLabel: "Concepts",
    featured: false,
    description:
      "A problem-solving concept designed around quickly capturing a problem and finding useful solutions.",
    features: ["Problem Solving", "Image Based Input", "Quick Answers", "Mobile UX"],
    technologies: ["Flutter", "Dart", "Firebase"],
    problem:
      "When people hit a problem - a math question, a broken part, an unfamiliar error - the path from seeing the problem to finding a solution is slow and fragmented.",
    solution:
      "Snap a photo of the problem and get structured, actionable solutions. The entire flow is optimized around one gesture: capture, understand, solve.",
    role: "Concept, capture-first UX design, Flutter development, Firebase integration.",
    status: "Prototype",
    links: { view: "#", caseStudy: "#" },
    images: [
      { path: "assets/projects/Snap Solve/logo.jpg", label: "App Icon", type: "icon" },
      { path: "assets/projects/Snap Solve/img (1).jpg", label: "Screen 1", type: "screenshot" },
      { path: "assets/projects/Snap Solve/img (2).jpg", label: "Screen 2", type: "screenshot" }
    ]
  },
  {
    id: 4,
    number: "04",
    name: "Where Is My Bus",
    tagline: "Making bus travel easier with live tracking.",
    category: "utility",
    categoryLabel: "Utility",
    featured: false,
    description:
      "A transport-focused application concept designed to help passengers track buses, discover routes and understand live movement.",
    features: ["Live Bus Tracking", "Driver Mode", "Passenger Mode", "Routes", "Stops", "Location", "Trip Scheduling"],
    technologies: ["Flutter", "Firebase", "Firestore", "Maps / Location"],
    problem:
      "Passengers wait at stops with zero information. Buses arrive late or never, and there is no way to know where a bus actually is right now.",
    solution:
      "Drivers share live location from a simple driver mode; passengers see buses move on a live map, check stops, routes and ETAs, and plan trips with confidence.",
    role: "Concept, realtime architecture, map UX for both driver and passenger roles.",
    status: "Concept",
    links: { view: "#", caseStudy: "#" },
    images: [
      { path: "assets/projects/Where Is My Bus/logo.jpg", label: "App Icon", type: "icon" },
      { path: "assets/projects/Where Is My Bus/img.jpg", label: "Screen 1", type: "screenshot" },
      { path: "assets/projects/Where Is My Bus/img2.jpg", label: "Screen 2", type: "screenshot" },
      { path: "assets/projects/Where Is My Bus/img3.jpg", label: "Screen 3", type: "screenshot" }
    ]
  },
  {
    id: 5,
    number: "05",
    name: "Power Cut",
    tagline: "Find power. Stay connected.",
    category: "utility",
    categoryLabel: "Utility",
    featured: false,
    description:
      "A utility concept designed to help users discover nearby charging locations for phones, laptops and electric mobility needs.",
    features: ["Charging Locations", "Nearby Places", "Pricing", "Mobile", "Utility"],
    technologies: ["Flutter", "Firebase", "Maps / Location"],
    problem:
      "During power cuts or long days out, finding a safe place to charge a phone, laptop or e-bike is pure guesswork.",
    solution:
      "A map of nearby charging points with device types (phone, laptop, bike), pricing and availability - so a dying battery is never a dead end.",
    role: "Concept, location-based search UX, Flutter development, Firebase backend.",
    status: "Concept",
    links: { view: "#", caseStudy: "#" },
    images: [
      { path: "assets/projects/Power Cut/logo.jpg", label: "App Icon", type: "icon" },
      { path: "assets/projects/Power Cut/img (1).png", label: "Screen 1", type: "screenshot" },
      { path: "assets/projects/Power Cut/img (2).png", label: "Screen 2", type: "screenshot" },
      { path: "assets/projects/Power Cut/img (3).png", label: "Screen 3", type: "screenshot" },
      { path: "assets/projects/Power Cut/img (4).png", label: "Screen 4", type: "screenshot" },
      { path: "assets/projects/Power Cut/img (5).png", label: "Screen 5", type: "screenshot" },
      { path: "assets/projects/Power Cut/img (6).png", label: "Screen 6", type: "screenshot" }
    ]
  },
  {
    id: 6,
    number: "06",
    name: "Foodly",
    tagline: "Good food. Better prices. Nearby.",
    category: "mobile",
    categoryLabel: "Mobile Apps",
    featured: false,
    description:
      "A local discovery concept focused on helping users find affordable food shops and compare visible menu or price information.",
    features: ["Local Discovery", "Food", "Price Comparison", "Nearby Shops", "Community Verification"],
    technologies: ["Flutter", "Firebase", "Location"],
    problem:
      "Affordable local food spots are invisible online. Discovery apps highlight premium restaurants, leaving small shops and budget eaters behind.",
    solution:
      "A community-driven discovery app that surfaces nearby affordable food shops with prices, distances, categories and verification from real visitors.",
    role: "Concept, listing and comparison UX, Flutter development, Firebase data model.",
    status: "Concept",
    links: { view: "#", caseStudy: "#" },
    images: [
      { path: "assets/projects/Nearby Cheap Food/logo.jpg", label: "App Icon", type: "icon" },
      { path: "assets/projects/Nearby Cheap Food/img (1).jpg", label: "Screen 1", type: "screenshot" },
      { path: "assets/projects/Nearby Cheap Food/img (2).jpg", label: "Screen 2", type: "screenshot" }
    ]
  }
];

/* ---------- DOM References ---------- */
const projectsGrid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectModal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalCloseBtn = document.getElementById("modalClose");
const modalOverlay = document.getElementById("modalOverlay");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCounter = document.getElementById("lightboxCounter");

/* ---------- State ---------- */
let currentFilter = "all";
let currentProject = null;
let currentGallery = [];   // visible images of open project
let galleryIndex = 0;
let autoSlideTimer = null; // auto-slide interval reference
const AUTO_SLIDE_DELAY_DESKTOP = 5000; // 5 seconds
const AUTO_SLIDE_DELAY_MOBILE = 4000; // 4 seconds

/* ---------- Helpers ---------- */
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function buildPlaceholder(project, small) {
  return (
    '<div class="project-placeholder">' +
    '<span class="ph-title">PROJECT PREVIEW</span>' +
    '<span class="ph-name">' + escapeHtml(project.name) + "</span>" +
    (small ? "" : '<span class="ph-title" style="opacity:.6">Screenshots coming soon</span>') +
    "</div>"
  );
}

/* ---------- Render Project Cards ---------- */
function createProjectCard(project, index) {
  const card = document.createElement("article");
  card.className = "project-card" + (project.featured ? " featured" : "");
  card.dataset.category = project.category;
  card.setAttribute("data-reveal", "");
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", "Open details for " + project.name);

  const firstImage = project.images.find(function (img) { return img !== null; }) || null;
  const tagsHtml = project.technologies
    .map((t) => '<span class="project-tag">' + escapeHtml(t) + "</span>")
    .join("");

  const thumbHtml = firstImage
    ? '<img class="project-thumb" src="' + firstImage.path + '" ' +
      'alt="' + escapeHtml(project.name) + " " + escapeHtml(firstImage.label) + '" loading="lazy">'
    : '<div class="project-thumb placeholder-thumb" role="img" aria-label="' + escapeHtml(project.name) + ' preview">' +
        '<span class="placeholder-label">' + escapeHtml(project.name) + '</span>' +
      '</div>';

  card.innerHTML =
    '<div class="project-media">' +
      thumbHtml +
      '<div class="project-overlay">' +
        '<span class="overlay-view">View Project ' +
          '<svg class="arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
        "</span>" +
        '<span class="overlay-cta">Click to open details</span>' +
      "</div>" +
    "</div>" +
    '<div class="project-body">' +
      '<div class="project-meta">' +
        '<span class="project-number">' + escapeHtml(project.number) + "</span>" +
        '<span class="project-category">' + escapeHtml(project.categoryLabel) + "</span>" +
      "</div>" +
      '<h3 class="project-name">' + escapeHtml(project.name) + "</h3>" +
      '<p class="project-tagline">' + escapeHtml(project.tagline) + "</p>" +
      '<p class="project-desc">' + escapeHtml(project.description) + "</p>" +
      '<div class="project-tags">' + tagsHtml + "</div>" +
      '<div class="project-actions">' +
        '<button class="mini-btn solid" data-action="view">View Project ' +
          '<svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
        "</button>" +
      "</div>" +
    "</div>";

  // Image fallback: if thumbnail missing, show CSS placeholder
  const thumb = card.querySelector(".project-thumb");
  thumb.addEventListener("error", function () {
    thumb.remove();
    card.querySelector(".project-media").insertAdjacentHTML("afterbegin", buildPlaceholder(project, false));
  });

  // Open modal on card click / Enter
  card.addEventListener("click", function (e) {
    const viewBtn = e.target.closest("[data-action=\"view\"]");
    if (viewBtn) {
      // View Project button - open WhatsApp
      window.open("https://wa.me/6381872260?text=" + encodeURIComponent("Hi sir, can you explain about the " + project.name + " app? Is it available on PlayStore?"), "_blank");
    } else {
      // Card click - open modal
      openProjectModal(project);
    }
  });
  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openProjectModal(project);
    }
  });

  return card;
}

function renderProjects() {
  projectsGrid.innerHTML = "";
  projects.forEach(function (project, index) {
    const card = createProjectCard(project, index);
    projectsGrid.appendChild(card);
  });
  observeReveals();
  applyFilter(currentFilter);
}

/* ---------- Project Filtering ---------- */
function applyFilter(filter) {
  currentFilter = filter;
  const cards = projectsGrid.querySelectorAll(".project-card");
  cards.forEach(function (card) {
    const match = filter === "all" || card.dataset.category === filter;
    card.style.display = match ? "" : "none";
  });
}

filterButtons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    filterButtons.forEach(function (b) {
      b.classList.remove("active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("active");
    btn.setAttribute("aria-selected", "true");
    applyFilter(btn.dataset.filter);
  });
});

/* ---------- Project Modal + Gallery ---------- */
function buildModalHtml(project, caseFirst) {
  const techTags = project.technologies
    .map((t) => '<span class="tag">' + escapeHtml(t) + "</span>")
    .join("");
  const featureTags = project.features
    .map((f) => '<span class="tag">' + escapeHtml(f) + "</span>")
    .join("");
  const viewHref = project.links && project.links.view && project.links.view !== "#" ? project.links.view : "#";

  return (
    '<div class="modal-head">' +
      '<div class="modal-meta">' +
        '<span class="modal-number">' + escapeHtml(project.number) + "</span>" +
        '<span class="modal-category">' + escapeHtml(project.categoryLabel) + "</span>" +
      "</div>" +
      '<h2 class="modal-title" id="modalTitle">' + escapeHtml(project.name) + "</h2>" +
      '<p class="modal-tagline">' + escapeHtml(project.tagline) + "</p>" +
    "</div>" +

    '<div class="modal-grid">' +

      '<aside class="modal-gallery" aria-label="Project screenshots">' +
        '<div class="project-image-stage">' +
          (currentGallery.length
            ? '<div class="project-image-wrapper' + (currentGallery[0].type === 'icon' ? ' is-icon' : '') + '">' +
                '<img class="main-project-image hint' + (currentGallery[0].type === 'icon' ? ' is-icon' : '') + '" id="galleryMainImg" src="' + currentGallery[0].path + '" alt="' +
                escapeHtml(project.name) + " " + escapeHtml(currentGallery[0].label) + '" loading="lazy">' +
              "</div>" +
              '<span class="gallery-label" id="galleryLabel">' + escapeHtml(currentGallery[0].label) + "</span>" +
              '<span class="gallery-counter" id="galleryCounter">1 / ' + currentGallery.length + "</span>" +
              '<button class="gallery-nav prev" id="galleryPrev" aria-label="Previous image">' +
                '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg></button>' +
              '<button class="gallery-nav next" id="galleryNext" aria-label="Next image">' +
                '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg></button>'
            : '<div class="project-image-wrapper">' + buildPlaceholder(project, true) + "</div>") +
        "</div>" +
        '<div class="gallery-thumbs" id="galleryThumbs"></div>' +
      "</aside>" +

      '<div class="modal-info">' +
        '<div class="modal-section">' +
          "<h3>The Problem</h3><p>" + escapeHtml(project.problem) + "</p>" +
        "</div>" +
        '<div class="modal-section">' +
          "<h3>The Solution</h3><p>" + escapeHtml(project.solution) + "</p>" +
        "</div>" +
        '<div class="modal-section">' +
          "<h3>Key Features</h3>" +
          '<div class="modal-features">' + featureTags + "</div>" +
        "</div>" +
        '<div class="modal-section">' +
          "<h3>Technology</h3>" +
          '<div class="modal-tech">' + techTags + "</div>" +
        "</div>" +
        '<div class="modal-details">' +
          '<div class="modal-detail-box"><span class="detail-label">My Role</span><span class="detail-value">' + escapeHtml(project.role) + "</span></div>" +
          '<div class="modal-detail-box"><span class="detail-label">Status</span><span class="detail-value">' + escapeHtml(project.status) + "</span></div>" +
        "</div>" +
        '<div class="modal-cta">' +
          '<a class="btn btn-primary" href="https://wa.me/6381872260?text=' + encodeURIComponent('Hi sir, can you explain about the ' + project.name + ' app? Is it available on PlayStore?') + '" target="_blank" rel="noopener"><span>View Project</span>' +
            '<svg class="btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg></a>' +
        "</div>" +
      "</div>" +


    "</div>"
  );
}

/* Preload image; resolves true if it loads, false on error */
function probeImage(path) {
  return new Promise(function (resolve) {
    const img = new Image();
    img.onload = function () { resolve(true); };
    img.onerror = function () { resolve(false); };
    img.src = path;
  });
}

/* Build visible gallery: keep only images that actually exist */
async function prepareGallery(project) {
  /* Filter out null entries (missing screenshots) before probing */
  const validEntries = project.images.filter(function (img) { return img !== null; });
  const results = await Promise.all(
    validEntries.map(function (img) {
      return probeImage(img.path).then(function (ok) {
        return ok ? img : null;
      });
    })
  );
  return results.filter(Boolean);
}

function renderThumbs() {
  const thumbsWrap = document.getElementById("galleryThumbs");
  if (!thumbsWrap) return;
  thumbsWrap.innerHTML = "";
  currentGallery.forEach(function (img, i) {
    const btn = document.createElement("button");
    btn.className = "thumbnail" + (i === galleryIndex ? " active" : "");
    btn.setAttribute("aria-label", "Show " + img.label);
    btn.innerHTML = '<img src="' + img.path + '" alt="' + escapeHtml(currentProject.name) + " " + escapeHtml(img.label) + '" loading="lazy">';
    btn.addEventListener("click", function () { setGalleryIndex(i); });
    btn.querySelector("img").addEventListener("error", function () {
      btn.innerHTML = '<span class="thumbnail-fallback">Preview<br>unavailable</span>';
    });
    thumbsWrap.appendChild(btn);
  });
}

function setGalleryIndex(i) {
  if (!currentGallery.length) return;
  stopAutoSlide(); // User interaction stops auto-slide
  galleryIndex = (i + currentGallery.length) % currentGallery.length;
  const main = document.getElementById("galleryMainImg");
  const label = document.getElementById("galleryLabel");
  const counter = document.getElementById("galleryCounter");
  const wrapper = document.querySelector(".project-image-wrapper");
  if (!main) { renderThumbs(); return; }

  // Handle icon vs screenshot aspect ratio
  const isIcon = currentGallery[galleryIndex].type === "icon";
  main.classList.toggle("is-icon", isIcon);
  if (wrapper) wrapper.classList.toggle("is-icon", isIcon);

  // Fade/scale transition on switch
  main.classList.add("switching");
  setTimeout(function () {
    main.src = currentGallery[galleryIndex].path;
    main.alt = currentProject.name + " " + currentGallery[galleryIndex].label;
    if (label) label.textContent = currentGallery[galleryIndex].label;
    if (counter) counter.textContent = (galleryIndex + 1) + " / " + currentGallery.length;
    main.onload = function () { main.classList.remove("switching"); };
    renderThumbs();
  }, 180);
}

function openProjectModal(project, mode) {
  currentProject = project;
  currentGallery = [];
  galleryIndex = 0;
  projectModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Show modal shell immediately, then fill gallery after probing images
  modalContent.innerHTML = buildModalHtml(project, mode);
  projectModal.classList.add("open");
  modalCloseBtn.focus();

  prepareGallery(project).then(function (gallery) {
    currentGallery = gallery;
    galleryIndex = 0;
    // Re-render main gallery area with validated images
    modalContent.innerHTML = buildModalHtml(project, mode);
    renderThumbs();

    const main = document.getElementById("galleryMainImg");
    if (main) {
      main.addEventListener("click", function () { openLightbox(); });
      main.addEventListener("error", function () {
        currentGallery = [];
        modalContent.innerHTML = buildModalHtml(project, mode);
      });
    }
    const prev = document.getElementById("galleryPrev");
    const next = document.getElementById("galleryNext");
    if (prev) prev.addEventListener("click", function () { setGalleryIndex(galleryIndex - 1); });
    if (next) next.addEventListener("click", function () { setGalleryIndex(galleryIndex + 1); });

    // Start auto-slide after gallery is ready
    startAutoSlide();
  });
}

/* ---------- Auto-Slide ---------- */
function startAutoSlide() {
  stopAutoSlide(); // Clear any existing timer
  if (currentGallery.length <= 1) return; // No need to slide if only 1 image
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const delay = isMobile ? AUTO_SLIDE_DELAY_MOBILE : AUTO_SLIDE_DELAY_DESKTOP;
  autoSlideTimer = setInterval(function () {
    if (currentGallery.length > 1) {
      galleryIndex = (galleryIndex + 1) % currentGallery.length;
      updateMainImage();
    }
  }, delay);
}

function stopAutoSlide() {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
}

function updateMainImage() {
  const main = document.getElementById("galleryMainImg");
  const label = document.getElementById("galleryLabel");
  const counter = document.getElementById("galleryCounter");
  const wrapper = document.querySelector(".project-image-wrapper");
  if (!main) return;

  // Handle icon vs screenshot aspect ratio
  const isIcon = currentGallery[galleryIndex].type === "icon";
  if (main) main.classList.toggle("is-icon", isIcon);
  if (wrapper) wrapper.classList.toggle("is-icon", isIcon);

  main.classList.add("switching");
  setTimeout(function () {
    main.src = currentGallery[galleryIndex].path;
    main.alt = currentProject.name + " " + currentGallery[galleryIndex].label;
    if (label) label.textContent = currentGallery[galleryIndex].label;
    if (counter) counter.textContent = (galleryIndex + 1) + " / " + currentGallery.length;
    main.onload = function () { main.classList.remove("switching"); };
    renderThumbs();
  }, 180);
}

function closeProjectModal() {
  stopAutoSlide();
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  currentProject = null;
  currentGallery = [];
}

modalCloseBtn.addEventListener("click", closeProjectModal);
modalOverlay.addEventListener("click", closeProjectModal);

/* ---------- Fullscreen Lightbox ---------- */
function openLightbox() {
  if (!currentGallery.length || !currentProject) return;
  stopAutoSlide();
  lightbox.setAttribute("aria-hidden", "false");
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
  updateLightbox();
}

function updateLightbox() {
  const img = currentGallery[galleryIndex];
  lightboxImage.src = img.path;
  lightboxImage.alt = currentProject.name + " " + img.label;
  lightboxCounter.textContent = (galleryIndex + 1) + " / " + currentGallery.length;
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  // Restore scroll lock state depending on modal
  document.body.style.overflow = projectModal.classList.contains("open") ? "hidden" : "";
}

document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", function () {
  setGalleryIndex(galleryIndex - 1);
  updateLightbox();
});
document.getElementById("lightboxNext").addEventListener("click", function () {
  setGalleryIndex(galleryIndex + 1);
  updateLightbox();
});
lightbox.addEventListener("click", function (e) {
  if (e.target === lightbox || e.target.classList.contains("lightbox-stage")) {
    closeLightbox();
  }
});

/* ---------- Keyboard Navigation ---------- */
document.addEventListener("keydown", function (e) {
  const lightboxOpen = lightbox.classList.contains("open");
  const modalOpen = projectModal.classList.contains("open");

  if (e.key === "Escape") {
    if (lightboxOpen) closeLightbox();
    else if (modalOpen) closeProjectModal();
    return;
  }
  if (lightboxOpen || modalOpen) {
    if (e.key === "ArrowLeft") {
      setGalleryIndex(galleryIndex - 1);
      if (lightboxOpen) updateLightbox();
    } else if (e.key === "ArrowRight") {
      setGalleryIndex(galleryIndex + 1);
      if (lightboxOpen) updateLightbox();
    }
  }
});

/* ---------- Navbar ---------- */
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
  highlightNav();
}, { passive: true });

navToggle.addEventListener("click", function () {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.classList.toggle("active", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

function highlightNav() {
  const sections = ["home", "about", "projects", "skills", "contact"];
  let current = "home";
  sections.forEach(function (id) {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  navLinks.forEach(function (link) {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
}

/* ---------- Scroll Reveal (IntersectionObserver) ---------- */
const revealObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

function observeReveals() {
  document.querySelectorAll("[data-reveal]:not(.revealed)").forEach(function (el) {
    revealObserver.observe(el);
  });
}

/* ---------- Background Grid + Particles ---------- */
(function initBackground() {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let particles = [];
  let w = 0, h = 0;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    const count = Math.min(60, Math.floor(w / 22));
    particles = Array.from({ length: count }, function () {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.4 + 0.4
      };
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    // Subtle grid
    ctx.strokeStyle = "rgba(255,255,255,0.025)";
    ctx.lineWidth = 1;
    const step = 56;
    for (let x = 0; x < w; x += step) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
    }
    for (let y = 0; y < h; y += step) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
    }
    // Drifting particles
    particles.forEach(function (p) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(129,140,248,0.35)";
      ctx.fill();
    });
    if (!reduced) requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
})();

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", function () {
  renderProjects();
  highlightNav();
  initSplashScreen();
});

/* ---------- Splash Screen ---------- */
function initSplashScreen() {
  var splash = document.getElementById("splashScreen");
  var splashIcon = document.getElementById("splashIcon");
  var flyingIcon = document.getElementById("flyingIcon");
  var navIcon = document.getElementById("navIcon");

  if (!splash || !splashIcon || !flyingIcon || !navIcon) return;

  // Get positions
  var splashRect = splashIcon.getBoundingClientRect();
  var navIconTarget = navIcon.getBoundingClientRect();

  // Position flying icon at splash icon location
  flyingIcon.style.left = splashRect.left + "px";
  flyingIcon.style.top = splashRect.top + "px";
  flyingIcon.style.width = splashRect.width + "px";
  flyingIcon.style.height = splashRect.height + "px";

  // Show splash for 1.5 seconds, then start animation
  setTimeout(function () {
    // Fade out splash title
    var splashTitle = document.querySelector(".splash-title");
    if (splashTitle) {
      splashTitle.style.transition = "opacity 0.4s ease";
      splashTitle.style.opacity = "0";
    }

    // Start flying icon animation
    flyingIcon.style.opacity = "1";
    flyingIcon.classList.add("animate");

    // Move flying icon to navbar position
    requestAnimationFrame(function () {
      flyingIcon.style.left = navIconTarget.left + "px";
      flyingIcon.style.top = navIconTarget.top + "px";
    });

    // After animation completes, hide flying icon and show nav icon
    setTimeout(function () {
      flyingIcon.style.opacity = "0";
      navIcon.classList.add("visible");
      splash.classList.add("hidden");

      // Remove splash from DOM after fade
      setTimeout(function () {
        splash.style.display = "none";
        flyingIcon.style.display = "none";
      }, 600);
    }, 800);
  }, 2000);
}
