/* =========================================================
   Portfólio cyber-RPG · interações (JavaScript puro)
   ========================================================= */
(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  /* localStorage pode falhar (modo privado, bloqueio): sempre dentro de try/catch */
  const store = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch { /* sem persistência */ } },
    remove(key) { try { localStorage.removeItem(key); } catch { /* ignora */ } }
  };

  /* ---------- Medidores: skills (data-level) e status (data-value/data-max) ---------- */
  const familiarity = (n) => (n < 70 ? 'Em prática' : n < 85 ? 'Uso recorrente' : 'Uso frequente');

  function setupMeters() {
    $$('.skill').forEach((el) => {
      const raw = Number(el.dataset.level);
      const level = clamp(Number.isFinite(raw) ? raw : 0, 0, 100);
      const lv = Math.max(1, Math.ceil(level / 10));
      el.style.setProperty('--level', level);
      $('[data-pct]', el).textContent = level;
      $('[data-label]', el).textContent = `LV ${lv} · ${familiarity(level)}`;
      $('[role="progressbar"]', el).setAttribute('aria-valuenow', level);
    });

    $$('.stat').forEach((el) => {
      const max = Number(el.dataset.max) || 100;
      const value = clamp(Number(el.dataset.value) || 0, 0, max);
      el.style.setProperty('--level', (value / max) * 100);
      $('[data-num]', el).textContent = value;
      const bar = $('[role="progressbar"]', el);
      bar.setAttribute('aria-valuenow', value);
      bar.setAttribute('aria-valuemax', max);
    });

  }

  /* Contagem em 20 passos, no mesmo ritmo da barra (steps(20) em 1,4s) */
  function countUp(node, target) {
    if (reduceMotion) { node.textContent = target; return; }
    const steps = 20;
    let i = 0;
    node.textContent = 0;
    const timer = setInterval(() => {
      i += 1;
      node.textContent = Math.round((target * i) / steps);
      if (i >= steps) clearInterval(timer);
    }, 1400 / steps);
  }

  function playMeter(el) {
    const pct = $('[data-pct]', el);
    const num = $('[data-num]', el);
    if (pct) countUp(pct, Number(el.dataset.level) || 0);
    if (num) countUp(num, Number(el.dataset.value) || 0);
  }

  /* ---------- Entrada no scroll (reveal + carregamento das barras) ---------- */
  function setupReveal() {
    const targets = $$('.reveal, .skill, .stat');
    const enter = (el) => {
      el.classList.add('is-in');
      if (el.matches('.skill, .stat')) playMeter(el);
    };
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        enter(entry.target);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    targets.forEach((el) => io.observe(el));
  }

  /* Botão "Recarregar XP": reinicia o carregamento das barras de skill */
  function setupReplay() {
    const btn = $('#replay-xp');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const skills = $$('.skill');
      skills.forEach((el) => el.classList.remove('is-in'));
      void document.body.offsetHeight; // força reflow para reiniciar a animação CSS
      skills.forEach((el) => { el.classList.add('is-in'); playMeter(el); });
    });
  }

  /* ---------- Texto digitado na caixa de diálogo (uma vez) ---------- */
  function setupTyping() {
    const el = $('[data-typing]');
    if (!el || reduceMotion) return;
    const full = el.textContent.trim();
    const p = el.parentElement;
    p.style.minHeight = `${p.offsetHeight}px`; // evita salto de layout
    const sr = document.createElement('span');  // leitores de tela recebem o texto completo
    sr.className = 'sr-only';
    sr.textContent = full;
    p.append(sr);
    el.setAttribute('aria-hidden', 'true');
    el.textContent = '';
    let i = 0;
    setTimeout(() => {
      const timer = setInterval(() => {
        i += 1;
        el.textContent = full.slice(0, i);
        if (i >= full.length) clearInterval(timer);
      }, 18);
    }, 500);
  }

  /* ---------- Seção ativa na navegação ---------- */
  function setupActiveNav() {
    if (!('IntersectionObserver' in window)) return;
    const links = $$('a.nav-link, a.nav-link-mobile');
    const setActive = (id) => links.forEach((a) => {
      if (a.getAttribute('href') === `#${id}`) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
    const opts = { rootMargin: '-45% 0px -50% 0px' };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id === 'inicio' ? '' : e.target.id); });
    }, opts);
    ['inicio', 'sobre', 'skills', 'conquistas', 'projetos', 'contato']
      .map((id) => document.getElementById(id)).filter(Boolean).forEach((s) => io.observe(s));
  }

  /* ---------- Menu mobile ---------- */
  function setupMobileMenu() {
    const toggle = $('#menu-toggle');
    const menu = $('#menu-mobile');
    if (!toggle || !menu) return;
    const setOpen = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      toggle.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="h-5 w-5" aria-hidden="true"></i>`;
      menu.classList.toggle('hidden', !open);
      window.lucide?.createIcons();
    };
    toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
    menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
    });
    window.matchMedia('(min-width: 768px)').addEventListener('change', (e) => { if (e.matches) setOpen(false); });
  }

  /* ---------- Efeito CRT: liga/desliga e lembra a escolha ---------- */
  function setupCrt() {
    const btn = $('#crt-toggle');
    const label = $('#crt-state');
    if (!btn) return;
    const apply = (on) => {
      document.documentElement.classList.toggle('crt-off', !on);
      btn.setAttribute('aria-pressed', String(on));
      label.textContent = on ? 'ON' : 'OFF';
    };
    apply(store.get('crt') !== 'off');
    btn.addEventListener('click', () => {
      const next = btn.getAttribute('aria-pressed') !== 'true';
      apply(next);
      store.set('crt', next ? 'on' : 'off');
    });
  }

  /* ---------- Conquistas ---------- */
  const STORE_KEY = 'achievements:v1';
  let toastTimer;

  function showToast(title, body) {
    const toast = $('#toast');
    if (!toast) return;
    toast.innerHTML = '';
    const head = document.createElement('span');
    head.textContent = title;
    const strong = document.createElement('strong');
    strong.textContent = body;
    toast.append(head, strong);
    toast.classList.add('is-show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('is-show'), 3200);
  }

  function setupAchievements() {
    const cards = $$('.ach');
    if (!cards.length) return;
    const countEl = $('#ach-count');
    const meter = $('#ach-meter');
    const total = cards.length;

    let unlocked = new Set();
    try { unlocked = new Set(JSON.parse(store.get(STORE_KEY) || '[]')); } catch { unlocked = new Set(); }

    const render = () => {
      cards.forEach((c) => { c.dataset.state = unlocked.has(c.dataset.id) ? 'unlocked' : 'locked'; });
      const n = cards.filter((c) => c.dataset.state === 'unlocked').length;
      countEl.textContent = `${n}/${total}`;
      meter.style.setProperty('--level', (n / total) * 100);
      meter.setAttribute('aria-valuemax', total);
      meter.setAttribute('aria-valuenow', n);
    };
    const save = () => store.set(STORE_KEY, JSON.stringify([...unlocked]));

    const unlock = (id) => {
      const card = cards.find((c) => c.dataset.id === id);
      if (!card || unlocked.has(id)) return;
      unlocked.add(id);
      save();
      render();
      const all = unlocked.size >= total;
      showToast(all ? 'PLATINA!' : 'CONQUISTA DESBLOQUEADA', all ? 'Todas as conquistas desbloqueadas.' : card.dataset.title);
    };

    cards.forEach((card) => {
      if (card.classList.contains('ach-secret')) return; // a secreta só abre com o código
      card.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') unlock(card.dataset.id); });
      card.addEventListener('click', () => unlock(card.dataset.id));
    });

    $('#reset-ach')?.addEventListener('click', () => {
      unlocked.clear();
      store.remove(STORE_KEY);
      render();
      showToast('PROGRESSO ZERADO', 'Conquistas bloqueadas novamente.');
    });

    // Código secreto: ↑ ↑ ↓ ↓ ← → ← → B A
    const code = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
    let pos = 0;
    document.addEventListener('keydown', (e) => {
      const key = e.key.toLowerCase();
      pos = key === code[pos] ? pos + 1 : (key === code[0] ? 1 : 0);
      if (pos === code.length) { pos = 0; unlock('secreta'); }
    });

    render();
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', () => {
    setupMeters();
    setupReveal();
    setupReplay();
    setupTyping();
    setupActiveNav();
    setupMobileMenu();
    setupCrt();
    setupAchievements();
    const year = $('#year');
    if (year) year.textContent = new Date().getFullYear();
    window.lucide?.createIcons(); // ícones Lucide (script com defer, carregado antes deste)
  });
})();
