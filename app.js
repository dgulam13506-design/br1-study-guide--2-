// ============================================================
//  BR1 STUDY GUIDE — app.js
//  Navigation + init. Uses var (not const/let) for globals
//  so multiple script tags share scope without errors.
// ============================================================

var PANELS   = ['overview','ch2','ch6','ch9','ch11','ch12','ch13','mockexam'];
var NAV_BTNS = [];   // populated after DOM ready

function showPanel(id) {
  for (var i = 0; i < PANELS.length; i++) {
    var el = document.getElementById(PANELS[i]);
    if (el) el.classList.toggle('active', PANELS[i] === id);
  }
  for (var j = 0; j < NAV_BTNS.length; j++) {
    NAV_BTNS[j].classList.toggle('active', j === PANELS.indexOf(id));
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('DOMContentLoaded', function () {
  NAV_BTNS = document.querySelectorAll('.nav-btn');

  var chapters = ['ch2','ch6','ch9','ch11','ch12','ch13'];
  for (var i = 0; i < chapters.length; i++) {
    renderFlashcards(chapters[i]);
    renderChapterQuiz(chapters[i]);
    renderFillExercise(chapters[i]);
    renderMatchExercise(chapters[i]);
  }
});