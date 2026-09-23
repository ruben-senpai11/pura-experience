/**
 * PURA EXPERIENCE — Composants partagés
 * Nav avec dropdown + Footer injectés dans toutes les pages
 */

'use strict';

/* ── NAV HTML ── */
const NAV_HTML = `
<div class="cursor" id="cursor"></div>
<div class="cursor-follower" id="cursorFollower"></div>

<header class="nav" id="nav">
  <div class="nav__container">
    <a href="index.html" class="nav__logo">
      <span class="nav__logo-pura">Pura</span>
      <span class="nav__logo-exp">Experience</span>
    </a>

    <nav class="nav__links" id="navLinks">
      <a href="index.html" class="nav__link" data-page="home">Accueil</a>
      <a href="services.html" class="nav__link" data-page="services">Services</a>

      <div class="nav__dropdown" id="navDropdown">
        <button class="nav__link nav__link--drop" id="dropBtn" aria-expanded="false">
          Idées Voyages <svg class="nav__chevron" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </button>
        <div class="nav__dropdown-menu" id="dropMenu">
          <div class="nav__dropdown-col">
            <p class="nav__dropdown-heading">🌎 Amérique Latine</p>
            <a href="colombie.html" class="nav__dropdown-link">🇨🇴 Colombie</a>
            <a href="mexique.html" class="nav__dropdown-link">🇲🇽 Mexique</a>
          </div>
          <div class="nav__dropdown-col">
            <p class="nav__dropdown-heading">🌏 Asie</p>
            <a href="japon.html" class="nav__dropdown-link">🇯🇵 Japon</a>
            <a href="thailande.html" class="nav__dropdown-link">🇹🇭 Thaïlande</a>
          </div>
        </div>
      </div>

      <a href="contact.html" class="nav__link" data-page="contact">Contact</a>
      <a href="contact.html" class="nav__cta">Créer mon voyage</a>
    </nav>

    <button class="nav__burger" id="navBurger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  </div>

  <div class="nav__mobile" id="navMobile">
    <a href="index.html" class="nav__mobile-link">Accueil</a>
    <a href="services.html" class="nav__mobile-link">Services</a>
    <div class="nav__mobile-group">
      <p class="nav__mobile-group-title">Idées Voyages</p>
      <a href="colombie.html" class="nav__mobile-sub">🇨🇴 Colombie</a>
      <a href="mexique.html" class="nav__mobile-sub">🇲🇽 Mexique</a>
      <a href="japon.html" class="nav__mobile-sub">🇯🇵 Japon</a>
      <a href="thailande.html" class="nav__mobile-sub">🇹🇭 Thaïlande</a>
    </div>
    <a href="contact.html" class="nav__mobile-link">Contact</a>
    <a href="contact.html" class="nav__mobile-cta">Créer mon voyage →</a>
  </div>
</header>
`;

/* ── FOOTER HTML ── */
const FOOTER_HTML = `
<footer class="footer">
  <div class="footer__top">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <div class="footer__logo"><span>Pura</span> <em>Experience</em></div>
          <p class="footer__tagline">Votre voyage sur mesure,<br/>créé par votre travel planner</p>
          <div class="footer__social">
            <a href="https://www.instagram.com/puraxperience" target="_blank" rel="noopener" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61565218173318" target="_blank" rel="noopener" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@pura.experience" target="_blank" rel="noopener" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2 6.34 6.34 0 0 0 9.49 21.54a6.34 6.34 0 0 0 6.34-6.34V10.08a8.27 8.27 0 0 0 4.83 1.55V8.18a4.85 4.85 0 0 1-1.07-.49z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/pura-experience/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <div class="footer__nav">
          <h4>Navigation</h4>
          <a href="index.html">Accueil</a>
          <a href="services.html">Services</a>
          <a href="contact.html">Contact</a>
        </div>

        <div class="footer__nav">
          <h4>Destinations</h4>
          <a href="colombie.html">🇨🇴 Colombie</a>
          <a href="mexique.html">🇲🇽 Mexique</a>
          <a href="japon.html">🇯🇵 Japon</a>
          <a href="thailande.html">🇹🇭 Thaïlande</a>
          <a href="contact.html">🌍 Autre destination</a>
        </div>

        <div class="footer__nav">
          <h4>Démarrer</h4>
          <a href="contact.html">Demander un devis gratuit</a>
          <a href="https://share.google/ChfntvRVXtRC50uJt" target="_blank" rel="noopener">Laisser un avis</a>
          <a href="https://www.instagram.com/puraxperience" target="_blank" rel="noopener">Nous suivre</a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="container">
      <p>© 2026 Pura Experience. Tous droits réservés.</p>
      <p>Conçu avec passion pour les voyageurs d'exception.</p>
    </div>
  </div>
</footer>

<button class="back-top" id="backTop" aria-label="Retour en haut">↑</button>
`;

/* ── INJECTION ── */
function injectSharedComponents() {
  // Nav
  const navPlaceholder = document.getElementById('nav-placeholder');
  if (navPlaceholder) navPlaceholder.outerHTML = NAV_HTML;

  // Footer
  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) footerPlaceholder.outerHTML = FOOTER_HTML;

  // Init nav behaviors after injection
  initNav();
  initCursor();
  initBackTop();
  markActiveLink();
}

/* ── CURSOR ── */
function initCursor() {
  const cursor = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  function animFollower() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    requestAnimationFrame(animFollower);
  }
  animFollower();
}

/* ── NAV BEHAVIORS ── */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  // Scroll state
  function updateNav() {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }
  updateNav();
  window.addEventListener('scroll', updateNav, { passive: true });

  // Burger
  const burger = document.getElementById('navBurger');
  const mobileMenu = document.getElementById('navMobile');
  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        burger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Dropdown
  const dropBtn = document.getElementById('dropBtn');
  const dropMenu = document.getElementById('dropMenu');
  const dropParent = document.getElementById('navDropdown');

  if (dropBtn && dropMenu) {
    dropBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropMenu.classList.toggle('open');
      dropBtn.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!dropParent.contains(e.target)) {
        dropMenu.classList.remove('open');
        dropBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Hover on desktop
    dropParent.addEventListener('mouseenter', () => dropMenu.classList.add('open'));
    dropParent.addEventListener('mouseleave', () => dropMenu.classList.remove('open'));
  }
}

/* ── ACTIVE LINK ── */
function markActiveLink() {
  const page = document.body.dataset.page;
  if (!page) return;
  document.querySelectorAll(`.nav__link[data-page="${page}"]`).forEach(el => {
    el.classList.add('nav__link--active');
  });
}

/* ── BACK TO TOP ── */
function initBackTop() {
  const btn = document.getElementById('backTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ── REVEAL ON SCROLL ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right, .reveal-fade');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ── CONTACT FORM ── */
function initContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.textContent;
    btn.textContent = '⏳ Envoi en cours…';
    btn.disabled = true;
    setTimeout(() => {
      btn.textContent = '✅ Message envoyé ! Réponse sous 48h.';
      btn.style.background = 'var(--sage-dark)';
      form.reset();
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; btn.style.background = ''; }, 5000);
    }, 1500);
  });
}

/* ── LOADER ── */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;
  document.body.style.overflow = 'hidden';
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      document.querySelectorAll('.hero .reveal-up, .hero .reveal-fade').forEach((el, i) => {
        setTimeout(() => el.classList.add('revealed'), 200 + i * 120);
      });
    }, 1400);
  });
}

/* ── COUNTER ── */
function initCounters() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const start = performance.now();
        const dur = 1600;
        const update = (now) => {
          const p = Math.min((now - start) / dur, 1);
          el.textContent = Math.round((1 - Math.pow(1-p, 3)) * target);
          if (p < 1) requestAnimationFrame(update);
          else el.textContent = target;
        };
        requestAnimationFrame(update);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
}

/* ── DEST CARD TILT ── */
function initCardTilt() {
  document.querySelectorAll('.dest-card:not(.dest-card--cta)').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const dx = (e.clientX - r.left - r.width/2) / r.width;
      const dy = (e.clientY - r.top - r.height/2) / r.height;
      card.style.transform = `translateY(-6px) perspective(800px) rotateX(${-dy*4}deg) rotateY(${dx*4}deg)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform .5s ease';
      setTimeout(() => card.style.transition = '', 500);
    });
  });
}

/* ── AUTO INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  injectSharedComponents();
  initReveal();
  initCounters();
  initCardTilt();
  initLoader();
  initContactForm('contactForm');
  initContactForm('leadFormMain');
});
