// ============================================================
//  Study Guide — app.js
//  Navigation + initialisation for BR1 and ECON
// ============================================================

var PANELS = [
  'overview','ch2','ch6','ch9','ch11','ch12','ch13','mockexam',
  'ec-overview','ec1','ec2','ec3','ec5','ec7','ec8','ec9','ec10','ec12','ec-mockexam'
];
var NAV_BTNS = [];

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

  // BR1 chapters
  var br1 = ['ch2','ch6','ch9','ch11','ch12','ch13'];
  for (var i = 0; i < br1.length; i++) {
    renderFlashcards(br1[i]);
    renderChapterQuiz(br1[i]);
    renderFillExercise(br1[i]);
    renderMatchExercise(br1[i]);
  }

  // ECON chapters
  var econ = ['ec1','ec2','ec3','ec5','ec7','ec8','ec9','ec10','ec12','ec13'];
  for (var j = 0; j < econ.length; j++) {
    renderEconFlashcards(econ[j]);
    renderEconQuiz(econ[j]);
    renderEconFill(econ[j]);
    renderEconMatch(econ[j]);
  }
});