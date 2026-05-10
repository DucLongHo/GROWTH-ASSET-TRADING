/* ═══════════════════════════════════════════════
   GROWTH ASSET TRADING — main.js
═══════════════════════════════════════════════ */

/* ── SCROLL ANIMATIONS ──────────────────────── */
(function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));
})();

/* ── STICKY NAV ─────────────────────────────── */
(function initStickyNav() {
  const nav = document.getElementById('nav');
  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* ── HAMBURGER MENU ─────────────────────────── */
(function initHamburger() {
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('nav-links');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.classList.toggle('active', isOpen);
    btn.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close on link click
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (links.classList.contains('open') && !btn.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      btn.classList.remove('active');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
})();

/* ── SMOOTH SCROLL ──────────────────────────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 64;
      const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ── COUNTER ANIMATION ──────────────────────── */
(function initCounters() {
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  function animateCounter(el) {
    const target = parseInt(el.dataset.count, 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      el.textContent = prefix + value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  document.querySelectorAll('[data-count]').forEach((el) => observer.observe(el));
})();

/* ── CONTACT FORM ───────────────────────────── */
(function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitBtn = document.getElementById('submit-btn');
  const submitText = document.getElementById('submit-text');
  const successMsg = document.getElementById('form-success');

  function showError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    const errEl = document.getElementById(fieldId + '-error');
    if (field) field.classList.add('error');
    if (errEl) errEl.textContent = msg;
  }

  function clearErrors() {
    form.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));
    form.querySelectorAll('.form-error').forEach((el) => (el.textContent = ''));
    if (successMsg) successMsg.textContent = '';
  }

  function validate() {
    let valid = true;
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const strategy = form.elements['strategy'].value.trim();

    if (!name) { showError('name', 'Vui lòng nhập họ và tên.'); valid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('email', 'Vui lòng nhập email hợp lệ.'); valid = false;
    }
    if (!strategy) { showError('strategy', 'Vui lòng mô tả chiến lược của bạn.'); valid = false; }
    return valid;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();
    if (!validate()) return;

    const { name, email, phone, strategy } = form.elements;
    const subject = encodeURIComponent('Yêu cầu tư vấn bot trading — ' + name.value.trim());
    const body = encodeURIComponent(
      `Họ tên: ${name.value.trim()}\nEmail: ${email.value.trim()}\nSĐT: ${phone.value.trim()}\n\nChiến lược:\n${strategy.value.trim()}`
    );

    submitBtn.disabled = true;
    submitText.textContent = 'Đang gửi...';

    // Open Telegram as primary channel, with mailto fallback
    window.open('https://t.me/longhdtrader', '_blank');
    window.location.href = `mailto:?subject=${subject}&body=${body}`;

    setTimeout(() => {
      successMsg.textContent = '✓ Cảm ơn bạn! Chúng tôi sẽ liên hệ qua Telegram trong vòng 24 giờ.';
      form.reset();
      submitBtn.disabled = false;
      submitText.textContent = 'Gửi Yêu Cầu Tư Vấn';
    }, 800);
  });

  // Clear error on input
  form.querySelectorAll('input, textarea').forEach((el) => {
    el.addEventListener('input', () => {
      el.classList.remove('error');
      const errEl = document.getElementById(el.id + '-error');
      if (errEl) errEl.textContent = '';
    });
  });
})();
