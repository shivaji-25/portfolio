// Utility Selectors
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

document.addEventListener('DOMContentLoaded', () => {
  initTypingEffect();
  initScrollAndNav();
  initSkillFilters();
  initIntersectionObserver();
  initProjectModals();
  initCommandPalette();
  initClipboardAndForm();
  initMouseEffects();
});

/* 1. DYNAMIC TYPING EFFECT */
function initTypingEffect() {
  const typingElement = $('[data-typing]');
  if (!typingElement) return;

  const phrases = [
    "Java Backend Developer",
    "DSA Problem Solver (123+ LeetCode)",
    "Spring Boot & MySQL Specialist",
    "AI Solution Explorer"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 80;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 80;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500; // Pause before typing next word
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

/* 2. SCROLL PROGRESS & NAVIGATION BAR */
function initScrollAndNav() {
  const progress = $('.scroll-progress span');
  const nav = $('[data-nav]');
  const mobileToggle = $('[data-mobile-toggle]');
  const mobileMenu = $('[data-mobile-menu]');
  let lastScroll = window.scrollY;

  function updateScroll() {
    const current = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    if (progress && height > 0) {
      progress.style.width = `${Math.min(100, (current / height) * 100)}%`;
    }

    if (nav) {
      nav.classList.toggle('nav-scrolled', current > 30);
      nav.classList.toggle('nav-hidden', current > 200 && current > lastScroll);
    }
    lastScroll = current;
  }

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  // Mobile Menu Toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
    });

    $$('a', mobileMenu).forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
      });
    });
  }
}

/* 3. INTERSECTION OBSERVER FOR REVEALS, COUNTERS, AND SKILL BARS */
function initIntersectionObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');

        // Trigger Counter Animation if inside achievements
        if (entry.target.id === 'achievements' || entry.target.classList.contains('stat-card')) {
          animateCounters(entry.target);
        }

        // Trigger Skill Bar Fill Animation if inside skills
        if (entry.target.id === 'skills' || entry.target.classList.contains('skills-grid')) {
          animateSkillBars(entry.target);
        }
      }
    });
  }, { threshold: 0.15 });

  $$('[data-reveal], #achievements, #skills, .stat-card').forEach(el => observer.observe(el));
}

function animateCounters(scope) {
  $$('[data-count]', scope).forEach(counter => {
    if (counter.dataset.animated) return;
    counter.dataset.animated = 'true';

    const target = parseFloat(counter.dataset.count);
    const suffix = counter.dataset.suffix || '';
    const isFloat = target % 1 !== 0;
    const duration = 1500;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * eased;

      counter.textContent = `${isFloat ? currentVal.toFixed(2) : Math.round(currentVal)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
}

function animateSkillBars(scope) {
  $$('.skill-bar', scope).forEach(bar => {
    const level = bar.dataset.level;
    if (level) {
      bar.style.width = level;
    }
  });
}

/* 4. SKILL CATEGORY FILTERING */
function initSkillFilters() {
  const filterBtns = $$('[data-skill-filter]');
  const skillCards = $$('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.skillFilter;

      skillCards.forEach(card => {
        const categories = card.dataset.category || '';
        if (filter === 'all' || categories.includes(filter)) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* 5. PROJECT DETAIL MODALS */
function initProjectModals() {
  const overlay = $('[data-modal-overlay]');
  const body = $('[data-modal-body]');
  const closeBtn = $('[data-modal-close]');

  const projectData = {
    leafyzer: {
      title: "Leafyzer AI — Plant Disease Detection",
      subtitle: "AI-Powered Plant Health Diagnostics & GPT Chat Assistant",
      image: "assets/leafyzer_ai.jpg",
      tags: ["Python", "OpenCV", "Streamlit", "Generative AI", "GPT APIs"],
      description: `
        <p>Leafyzer AI is a state-of-the-art agricultural technology solution designed to assist farmers, botanists, and gardeners in identifying plant diseases rapidly from leaf image uploads.</p>
        <h4>Key Technical Features:</h4>
        <ul>
          <li><strong>Computer Vision Pipeline:</strong> Image preprocessing, leaf segmentation, and feature extraction using OpenCV.</li>
          <li><strong>AI Diagnostic Engine:</strong> Analyzes plant leaf imagery for fungal, bacterial, and viral disease indicators with high confidence scores.</li>
          <li><strong>Generative AI & GPT Integration:</strong> Leverages OpenAI GPT APIs to provide customized organic treatment plans, preventative measures, and chemical advice.</li>
          <li><strong>Interactive Streamlit UI:</strong> Responsive, web-based dashboard allowing seamless image upload and instant report generation.</li>
        </ul>
      `
    },
    expense: {
      title: "Personal Expense Monitoring System",
      subtitle: "Full-Stack Financial Analytics & Budget Tracking Application",
      image: "assets/expense_tracker.jpg",
      tags: ["Python", "Django", "SQLite / MySQL", "HTML5", "CSS3", "JavaScript"],
      description: `
        <p>A comprehensive web platform engineered for personal financial management, enabling users to log transactions, monitor spending trends, and manage budget goals.</p>
        <h4>Key Technical Features:</h4>
        <ul>
          <li><strong>Django MVC Architecture:</strong> Structured backend logic handling user accounts, category management, and data aggregation.</li>
          <li><strong>Data Visualization:</strong> Interactive financial charts reflecting daily, monthly, and yearly expenditure breakdowns.</li>
          <li><strong>Database Flexibility:</strong> Multi-database compatibility supporting SQLite for development and MySQL for production.</li>
          <li><strong>Export & Reporting:</strong> Ability to filter transactions by date range, category, or payment method with dynamic summary metrics.</li>
        </ul>
      `
    },
    student: {
      title: "Student Management System",
      subtitle: "Secure PHP & MySQL Academic Administration Platform",
      image: "assets/student_mgmt.jpg",
      tags: ["PHP", "MySQL", "CRUD Operations", "Authentication", "Search & Pagination"],
      description: `
        <p>An enterprise-ready administrative management portal built for academic institutions to streamline student recordkeeping and database administration.</p>
        <h4>Key Technical Features:</h4>
        <ul>
          <li><strong>Secure Authentication:</strong> Role-based access control with hashed password validation and session management.</li>
          <li><strong>Complete CRUD Engine:</strong> Add, edit, view, and delete student records with relational integrity in MySQL.</li>
          <li><strong>Advanced Search & Filter:</strong> Real-time filtering by department, year, or student registration ID.</li>
          <li><strong>Server-side Pagination:</strong> Efficient query handling for large datasets ensuring fast page load performance.</li>
        </ul>
      `
    }
  };

  $$('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const key = btn.dataset.openModal;
      const data = projectData[key];
      if (!data) return;

      body.innerHTML = `
        <img src="${data.image}" alt="${data.title}" style="width:100%; border-radius:14px; margin-bottom:20px; border:1px solid var(--line);" />
        <h2>${data.title}</h2>
        <p style="color:var(--accent); font-weight:600; margin-bottom:16px;">${data.subtitle}</p>
        <div class="tags" style="margin-bottom:20px;">
          ${data.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
        ${data.description}
      `;

      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });
  }
}

/* 6. COMMAND PALETTE (CMD + K / CTRL + K) */
function initCommandPalette() {
  const dialog = $('[data-command-dialog]');
  const input = $('[data-command-input]');
  const buttons = $$('[data-command-list] button');
  const trigger = $('[data-command-trigger]');
  const backdrop = $('[data-command-close]');

  function openPalette() {
    dialog.classList.add('is-open');
    dialog.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    input.value = '';
    filterCommands('');
    setTimeout(() => input.focus(), 50);
  }

  function closePalette() {
    dialog.classList.remove('is-open');
    dialog.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (trigger) trigger.addEventListener('click', openPalette);
  if (backdrop) backdrop.addEventListener('click', closePalette);

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      dialog.classList.contains('is-open') ? closePalette() : openPalette();
    }
    if (e.key === 'Escape' && dialog.classList.contains('is-open')) {
      closePalette();
    }
  });

  input.addEventListener('input', (e) => filterCommands(e.target.value.toLowerCase()));

  function filterCommands(query) {
    buttons.forEach(btn => {
      const text = btn.textContent.toLowerCase();
      btn.style.display = text.includes(query) ? 'flex' : 'none';
    });
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      const target = btn.dataset.target;

      closePalette();

      if (action === 'goto') {
        const el = $(target);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else if (action === 'copy') {
        copyToClipboard(target);
      } else if (action === 'link') {
        window.open(target, '_blank');
      }
    });
  });
}

/* 7. CLIPBOARD & FORM HANDLER */
function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    const toast = $('[data-toast]');
    if (toast) {
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    }
  });
}

function initClipboardAndForm() {
  $$('[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => {
      copyToClipboard(btn.dataset.copy);
    });
  });

  const form = $('[data-contact-form]');
  const status = $('[data-form-status]');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (status) {
        status.innerHTML = `<span style="color:var(--lime)">✓ Thank you! Your message has been received. SHIVAJI C S will get back to you shortly.</span>`;
        form.reset();
      }
    });
  }
}

/* 8. MOUSE SPOTLIGHT & 3D TILT EFFECT */
function initMouseEffects() {
  const glow = $('.mouse-glow');
  if (glow) {
    window.addEventListener('pointermove', (e) => {
      glow.style.transform = `translate(${e.clientX - 250}px, ${e.clientY - 250}px)`;
    }, { passive: true });
  }

  $$('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateY(${x * 8}deg) rotateX(${y * -8}deg)`;
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
}
