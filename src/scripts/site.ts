import { animate, inView, stagger, scroll, hover } from 'motion';
import Lenis from 'lenis';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const EASE = [0.16, 1, 0.3, 1] as const;

/* -------------------------------------------------------------------------
   Smooth scroll
   Lenis only runs on pointer-fine devices; touch keeps native momentum,
   which feels better and costs nothing.
   ------------------------------------------------------------------------- */
function initSmoothScroll() {
  if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;

  const lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Anchor links should route through Lenis so they share the same easing.
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target as HTMLElement, { offset: -96 });
    });
  });
}

/* -------------------------------------------------------------------------
   Scroll reveals
   Every [data-reveal] rises into place once. Groups stagger their children.
   ------------------------------------------------------------------------- */
function initReveals() {
  const els = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (reduceMotion) {
    els.forEach((el) => (el.style.opacity = '1'));
    return;
  }

  els.forEach((el) => {
    const delay = Number(el.dataset.revealDelay ?? 0);
    const distance = Number(el.dataset.revealY ?? 24);

    inView(
      el,
      () => {
        animate(
          el,
          { opacity: [0, 1], transform: [`translateY(${distance}px)`, 'translateY(0px)'] },
          { duration: 0.8, delay, ease: EASE },
        );
      },
      { amount: 0.15, margin: '0px 0px -8% 0px' },
    );
  });

  document.querySelectorAll<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const children = Array.from(group.children) as HTMLElement[];
    if (!children.length) return;

    if (reduceMotion) {
      children.forEach((c) => (c.style.opacity = '1'));
      return;
    }

    children.forEach((c) => (c.style.opacity = '0'));

    inView(
      group,
      () => {
        animate(
          children,
          { opacity: [0, 1], transform: ['translateY(28px)', 'translateY(0px)'] },
          { duration: 0.7, delay: stagger(0.08), ease: EASE },
        );
      },
      { amount: 0.1, margin: '0px 0px -6% 0px' },
    );
  });
}

/* -------------------------------------------------------------------------
   Hero entrance — a single choreographed timeline on first paint
   ------------------------------------------------------------------------- */
function initHero() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;

  const lines = hero.querySelectorAll<HTMLElement>('[data-hero-line] > span');
  const rest = hero.querySelectorAll<HTMLElement>('[data-hero-fade]');
  const marker = hero.querySelector<HTMLElement>('.marker');

  if (reduceMotion) {
    lines.forEach((l) => (l.style.transform = 'none'));
    rest.forEach((r) => (r.style.opacity = '1'));
    return;
  }

  animate(
    lines,
    { transform: ['translateY(105%)', 'translateY(0%)'] },
    { duration: 1, delay: stagger(0.09), ease: EASE },
  );

  animate(
    rest,
    { opacity: [0, 1], transform: ['translateY(18px)', 'translateY(0px)'] },
    { duration: 0.8, delay: stagger(0.09, { startDelay: 0.35 }), ease: EASE },
  );

  // The brand highlight sweeps in after the headline has settled.
  if (marker) {
    marker.style.setProperty('--marker-scale', '0');
    animate(0, 1, {
      duration: 0.7,
      delay: 0.85,
      ease: EASE,
      onUpdate: (v) => marker.style.setProperty('--marker-scale', String(v)),
    });
  }
}

/* -------------------------------------------------------------------------
   Counting statistics
   ------------------------------------------------------------------------- */
function initCounters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count ?? 0);
    const isYear = el.dataset.countFormat === 'year';

    if (reduceMotion) {
      el.textContent = isYear ? String(target) : target.toLocaleString('en-US');
      return;
    }

    // Years count from a nearby anchor so the digits stay readable.
    const from = isYear ? target - 12 : 0;
    el.textContent = String(from);

    inView(
      el,
      () => {
        animate(from, target, {
          duration: 1.6,
          ease: 'easeOut',
          onUpdate: (v) => {
            const n = Math.round(v);
            el.textContent = isYear ? String(n) : n.toLocaleString('en-US');
          },
        });
      },
      { amount: 0.6 },
    );
  });
}

/* -------------------------------------------------------------------------
   Magnetic buttons — subtle pull toward the cursor
   ------------------------------------------------------------------------- */
function initMagnetic() {
  if (reduceMotion || !window.matchMedia('(pointer: fine)').matches) return;

  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const strength = Number(el.dataset.magnetic || 0.28);

    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
      animate(el, { transform: `translate(${x}px, ${y}px)` }, { duration: 0.4, ease: EASE });
    };

    hover(el, (element) => {
      element.addEventListener('pointermove', onMove as EventListener);
      return () => {
        element.removeEventListener('pointermove', onMove as EventListener);
        animate(
          element,
          { transform: 'translate(0px, 0px)' },
          { type: 'spring', stiffness: 260, damping: 18 },
        );
      };
    });
  });
}

/* -------------------------------------------------------------------------
   Scroll-linked parallax and the reading progress bar
   ------------------------------------------------------------------------- */
function initScrollEffects() {
  if (reduceMotion) return;

  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const depth = Number(el.dataset.parallax || 40);
    scroll(
      (progress: number) => {
        el.style.transform = `translate3d(0, ${(progress - 0.5) * depth * 2}px, 0)`;
      },
      { target: el, offset: ['start end', 'end start'] },
    );
  });

  const bar = document.querySelector<HTMLElement>('[data-progress-bar]');
  if (bar) {
    scroll((progress: number) => {
      bar.style.transform = `scaleX(${progress})`;
    });
  }
}

/* -------------------------------------------------------------------------
   Header: condense on scroll, and drive the mobile menu
   ------------------------------------------------------------------------- */
function initHeader() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (header) {
    const update = () => header.toggleAttribute('data-scrolled', window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  const toggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
  const panel = document.querySelector<HTMLElement>('[data-menu-panel]');
  if (!toggle || !panel) return;

  let open = false;

  const setOpen = (next: boolean) => {
    open = next;
    toggle.setAttribute('aria-expanded', String(open));
    document.documentElement.style.overflow = open ? 'hidden' : '';

    if (open) {
      panel.hidden = false;
      if (reduceMotion) {
        panel.style.opacity = '1';
        return;
      }
      animate(panel, { opacity: [0, 1] }, { duration: 0.25 });
      animate(
        panel.querySelectorAll('[data-menu-item]'),
        { opacity: [0, 1], transform: ['translateY(16px)', 'translateY(0px)'] },
        { duration: 0.5, delay: stagger(0.05), ease: EASE },
      );
    } else if (reduceMotion) {
      panel.hidden = true;
    } else {
      animate(panel, { opacity: [1, 0] }, { duration: 0.2 }).then(() => {
        if (!open) panel.hidden = true;
      });
    }
  };

  toggle.addEventListener('click', () => setOpen(!open));
  panel.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && open) setOpen(false);
  });
}

/* ------------------------------------------------------------------------- */

function init() {
  initSmoothScroll();
  initHero();
  initReveals();
  initCounters();
  initMagnetic();
  initScrollEffects();
  initHeader();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
