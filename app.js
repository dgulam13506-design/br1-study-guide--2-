// ============================================================
//  BR1 STUDY GUIDE — app.js
//  Main entry point: navigation + initialisation
// ============================================================

const PANELS = ['overview','ch2','ch6','ch9','ch11','ch12','ch13','mockexam'];
const NAV_BTNS = document.querySelectorAll('.nav-btn');

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────
function showPanel(id) {
  PANELS.forEach(p => {
    const el = document.getElementById(p);
    if (el) el.classList.toggle('active', p === id);
  });
  NAV_BTNS.forEach((btn, i) => {
    btn.classList.toggle('active', i === PANELS.indexOf(id));
  });
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─────────────────────────────────────────────
// INIT — render all dynamic components
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const chapters = ['ch2','ch6','ch9','ch11','ch12','ch13'];

  chapters.forEach(ch => {
    renderFlashcards(ch);
    renderChapterQuiz(ch);
    renderFillExercise(ch);
    renderMatchExercise(ch);
  });
});
