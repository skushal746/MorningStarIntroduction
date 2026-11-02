/**
 * Kushal Sharma - Morningstar & PitchBook Presentation App
 * Interactive Slide Deck & Production Architecture Dossier
 */

// Slide metadata & talking points
const SLIDES_DATA = [
  {
    index: 1,
    title: "Executive Summary & PitchBook Fit",
    notes: [
      "• Open with enthusiasm: Thank the Morningstar & PitchBook team for this opportunity.",
      "• State your core identity: 'I am a Senior Software Engineer with 7+ years of experience specializing in high-throughput enterprise backends, data reconciliation, and AI-augmented systems.'",
      "• Directly connect to the JD: 'The PitchBook Collection Applications team is modernizing mission-critical financial collection systems—moving from legacy Java/JSP to resilient Spring Boot microservices, modern React components, and leveraging AI tools like GitHub Copilot. This matches my exact career track.'",
      "• Highlight the 4 stats: 7+ yrs experience, 50% enterprise client growth at Remora, 30% K8s performance gain, and Master's in CS from Univ. of Florida."
    ]
  },
  {
    index: 2,
    title: "Why Morningstar & PitchBook",
    notes: [
      "• Frame why PitchBook matters to you: PitchBook is the gold standard for private market intelligence; data fidelity is the entire competitive moat.",
      "• Address enterprise legacy modernization: 'I don't just write greenfield code; I have deep empathy for legacy systems. I know how to understand existing Java/JSP and database architectures and methodically migrate them without downtime.'",
      "• Mention Morningstar culture: Emphasize customer empathy, assuming positive intent, and continuous improvement—principles I lived while mentoring junior engineers and teaching at UF."
    ]
  },
  {
    index: 3,
    title: "Professional Journey & Experience",
    notes: [
      "• Walk them through the progression:",
      "  1. Remora (2023-2025): Scaled platform by 50% enterprise clients (80 to 120), built Spring AI RAG chatbot, Kafka microservices on K8s (30% speed boost).",
      "  2. Sonos (2022): Real-time distributed tracking with Spring Boot & ReactJS, 90% event visibility, cross-device sync, 90% TDD code coverage.",
      "  3. Itiviti (2020-2021): Financial transaction metrics extraction, MongoDB aggregation pipelines, LRU caching (7% latency drop), 70%+ TDD coverage.",
      "  4. QualityKiosk (2019-2020): ELK observability, Liquibase database change management, CAST software architecture audits.",
      "  5. Verdantis (2017-2019): Java SFTP/XML ingestion pipeline, automated duplicate material detection, UTF-8 normalization."
    ]
  },
  {
    index: 4,
    title: "Job Description Alignment Matrix",
    notes: [
      "• Walk through this table to show 1-to-1 alignment with their specific job posting.",
      "• Highlight Java/Spring Boot & React (across Remora, Sonos, QualityKiosk).",
      "• Emphasize Data Structures, cross-device sync & DB design moving to next platform (Sonos, Remora, Liquibase migrations).",
      "• Note AI-Augmented Development: 'I use GitHub Copilot daily for test scaffolding and refactoring, and have built production Spring AI features.'",
      "• Stress TDD: 90% coverage at Sonos and 70%+ at Itiviti using JUnit, Mockito, and Jacoco."
    ]
  },
  {
    index: 5,
    title: "Architecture Deep-Dives",
    notes: [
      "• Click through the 3 case study tabs:",
      "  - Tab 1: Enterprise Platform Scaling (Remora 50% client growth from 80 to 120 clients, +30% K8s throughput).",
      "  - Tab 2: Enterprise Spring AI & Vector Search (how you integrated enterprise RAG in Java backend).",
      "  - Tab 3: Collection & Ingestion Pipeline (shifted from #1 to #3: multi-source intake, deduplication, dual-DB parity)."
    ]
  },
  {
    index: 6,
    title: "Education & Technical Research",
    notes: [
      "• University of Florida (Master's in CS, May 2023): Highlight deep foundation in distributed systems, machine learning algorithms, and system design.",
      "• Teaching Assistant for Prof. Ruogu Fang: Mentored graduate students in machine learning algorithms and technical data mining.",
      "• University of Mumbai (Bachelor's in Computer Engineering, May 2017).",
      "• Mention the Java Compiler project: Building a compiler, AST parser, and bytecode generator demonstrates mastery of how Java executes under the hood."
    ]
  },
  {
    index: 7,
    title: "Engineering Philosophy & Discussion",
    notes: [
      "• Summarize your three core tenets: TDD as armor, Strangler Fig pattern for safe legacy migration, and mentoring with positive intent.",
      "• Invite questions: Point to the 4 common interview questions on the right and ask the interviewers what technical domain they would like to explore first.",
      "• Close with confidence: 'I am excited about PitchBook Collection Applications and ready to contribute immediately to the team.'"
    ]
  }
];

// State
let currentSlide = 1;
const totalSlides = SLIDES_DATA.length;
let presenterNotesOpen = false;

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // Bind Presentation Controls
  initPresentationNavigation();

  // Bind Timeline Filters
  initTimelineFilters();

  // Bind Keyboard Navigation
  initKeyboardShortcuts();

  // Update Notes for Slide 1
  updatePresenterNotes();
});

/**
 * Slide Navigation Functions
 */
function goToSlide(slideNum) {
  if (slideNum < 1 || slideNum > totalSlides) return;

  // Hide current slide
  const currentCard = document.querySelector(`.slide-card[data-slide-index="${currentSlide}"]`);
  if (currentCard) {
    currentCard.classList.add('hidden');
    currentCard.classList.remove('active');
  }

  currentSlide = slideNum;

  // Show new slide
  const nextCard = document.querySelector(`.slide-card[data-slide-index="${currentSlide}"]`);
  if (nextCard) {
    nextCard.classList.remove('hidden');
    nextCard.classList.add('active');
  }

  // Update UI indicators
  document.getElementById('slideIndicator').textContent = `Slide ${currentSlide} of ${totalSlides}`;
  document.getElementById('slideTitleBreadcrumb').textContent = SLIDES_DATA[currentSlide - 1].title;

  const progressPercent = (currentSlide / totalSlides) * 100;
  document.getElementById('slideProgressBar').style.width = `${progressPercent}%`;

  // Update Prev/Next buttons
  document.getElementById('prevSlideBtn').disabled = (currentSlide === 1);
  document.getElementById('nextSlideBtn').disabled = (currentSlide === totalSlides);

  // Update Presenter Notes
  updatePresenterNotes();

  // Scroll to top of main
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh icons
  if (window.lucide) lucide.createIcons();
}

function nextSlide() {
  if (currentSlide < totalSlides) {
    goToSlide(currentSlide + 1);
  }
}

function prevSlide() {
  if (currentSlide > 1) {
    goToSlide(currentSlide - 1);
  }
}

function initPresentationNavigation() {
  document.getElementById('nextSlideBtn')?.addEventListener('click', nextSlide);
  document.getElementById('prevSlideBtn')?.addEventListener('click', prevSlide);

  // Presenter Notes Toggle
  document.getElementById('toggleNotesBtn')?.addEventListener('click', togglePresenterNotes);
  document.getElementById('closeNotesBtn')?.addEventListener('click', togglePresenterNotes);

  // Fullscreen
  document.getElementById('toggleFullscreenBtn')?.addEventListener('click', toggleFullscreen);

  // Listen for fullscreen change events to update icon
  document.addEventListener('fullscreenchange', updateFullscreenIcon);
  document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
}

/**
 * Presenter Notes Management
 */
function togglePresenterNotes() {
  const drawer = document.getElementById('presenterNotesDrawer');
  if (!drawer) return;
  presenterNotesOpen = !presenterNotesOpen;

  if (presenterNotesOpen) {
    drawer.classList.remove('hidden');
    document.getElementById('toggleNotesBtn')?.classList.add('border-yellow-500', 'text-yellow-400');
  } else {
    drawer.classList.add('hidden');
    document.getElementById('toggleNotesBtn')?.classList.remove('border-yellow-500', 'text-yellow-400');
  }
}

function updatePresenterNotes() {
  const drawer = document.getElementById('presenterNotesDrawer');
  if (!drawer) return;
  const slide = SLIDES_DATA[currentSlide - 1];
  const slideNumEl = document.getElementById('notesSlideNumber');
  if (slideNumEl) slideNumEl.textContent = `(Slide ${slide.index}: ${slide.title})`;

  const container = document.getElementById('presenterNotesContent');
  if (container) {
    container.innerHTML = slide.notes.map(note => `<div class="leading-relaxed">${note}</div>`).join('');
  }
}

/**
 * Timeline Company Filter
 */
function initTimelineFilters() {
  const tabBtns = document.querySelectorAll('.timeline-tab-btn');
  const entries = document.querySelectorAll('.timeline-entry');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => {
        b.classList.remove('active', 'bg-red-600', 'text-white');
        b.classList.add('bg-gray-900', 'text-gray-400');
      });
      btn.classList.add('active', 'bg-red-600', 'text-white');
      btn.classList.remove('bg-gray-900', 'text-gray-400');

      const company = btn.getAttribute('data-company');

      entries.forEach(entry => {
        if (company === 'all' || entry.getAttribute('data-category') === company) {
          entry.classList.remove('hidden');
        } else {
          entry.classList.add('hidden');
        }
      });
    });
  });
}

/**
 * Architecture Case Study Switcher
 */
function switchCaseStudy(num) {
  [1, 2, 3].forEach(n => {
    const study = document.getElementById(`caseStudy${n}`);
    const btn = document.getElementById(`caseStudyBtn${n}`);
    if (n === num) {
      study.classList.remove('hidden');
      btn.classList.add('active', 'bg-red-600', 'text-white');
      btn.classList.remove('bg-gray-900', 'text-gray-400');
    } else {
      study.classList.add('hidden');
      btn.classList.remove('active', 'bg-red-600', 'text-white');
      btn.classList.add('bg-gray-900', 'text-gray-400');
    }
  });

  if (window.lucide) lucide.createIcons();
}

/**
 * Interactive Collection Pipeline Simulation
 */
/**
 * Accordion Toggle for Q&A Hub
 */
function toggleQA(element) {
  const answer = element.querySelector('.qa-answer');
  const chevron = element.querySelector('[data-lucide="chevron-down"], [data-lucide="chevron-up"]');

  if (answer.classList.contains('hidden')) {
    answer.classList.remove('hidden');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  } else {
    answer.classList.add('hidden');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  }
}

/**
 * Keyboard Shortcuts
 */
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === 'ArrowRight' || e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)) {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)) {
      e.preventDefault();
      prevSlide();
    } else if (e.key.toLowerCase() === 'p') {
      e.preventDefault();
      togglePresenterNotes();
    } else if (e.key.toLowerCase() === 'f') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === 'Escape') {
      if (presenterNotesOpen) togglePresenterNotes();
    }
  });
}

/**
 * Fullscreen with cross-browser WebKit / Safari support
 */
function toggleFullscreen() {
  const doc = document;
  const docEl = document.documentElement;

  const isFullscreen = doc.fullscreenElement || doc.webkitFullscreenElement || doc.mozFullScreenElement || doc.msFullscreenElement;

  if (!isFullscreen) {
    if (docEl.requestFullscreen) {
      docEl.requestFullscreen().catch(err => console.warn("Fullscreen request error:", err));
    } else if (docEl.webkitRequestFullscreen) {
      docEl.webkitRequestFullscreen();
    } else if (docEl.msRequestFullscreen) {
      docEl.msRequestFullscreen();
    } else if (docEl.mozRequestFullScreen) {
      docEl.mozRequestFullScreen();
    }
  } else {
    if (doc.exitFullscreen) {
      doc.exitFullscreen().catch(err => console.warn("Fullscreen exit error:", err));
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    }
  }
}

function updateFullscreenIcon() {
  const btn = document.getElementById('toggleFullscreenBtn');
  if (!btn) return;
  const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;
  btn.innerHTML = isFullscreen
    ? '<i data-lucide="minimize" class="w-4 h-4"></i>'
    : '<i data-lucide="maximize" class="w-4 h-4"></i>';
  if (window.lucide) lucide.createIcons();
}

