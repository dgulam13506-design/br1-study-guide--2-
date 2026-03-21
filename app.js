// ============================================================
//  Study Guide — app.js
//  Subject switcher + panel navigation for BR1 and ECON
// ============================================================

var BR1_PANELS  = ['overview','ch2','ch6','ch9','ch11','ch12','ch13','mockexam'];
var ECON_PANELS = ['ec-overview','ec1','ec2','ec3','ec5','ec7','ec8','ec9','ec10','ec12','ec-mockexam'];
var currentSubject = 'br1';

// ── Subject switcher (top bar) ──
function switchSubject(subject) {
  currentSubject = subject;

  var br1Header  = document.getElementById('header-br1');
  var econHeader = document.getElementById('header-econ');
  var br1Nav     = document.getElementById('subnav-br1');
  var econNav    = document.getElementById('subnav-econ');
  var br1Main    = document.querySelector('.main:not(.econ-main)');
  var econMain   = document.getElementById('econ-main');
  var subjBr1    = document.getElementById('subj-br1');
  var subjEcon   = document.getElementById('subj-econ');

  if (subject === 'br1') {
    br1Header.style.display  = '';
    econHeader.style.display = 'none';
    br1Nav.style.display     = '';
    econNav.style.display    = 'none';
    br1Main.style.display    = '';
    econMain.style.display   = 'none';
    subjBr1.classList.add('active');
    subjEcon.classList.remove('active');
    // Activate overview if no panel is active
    var anyActive = false;
    for (var i = 0; i < BR1_PANELS.length; i++) {
      var el = document.getElementById(BR1_PANELS[i]);
      if (el && el.classList.contains('active')) { anyActive = true; break; }
    }
    if (!anyActive) showPanel('overview');
  } else {
    br1Header.style.display  = 'none';
    econHeader.style.display = '';
    br1Nav.style.display     = 'none';
    econNav.style.display    = '';
    br1Main.style.display    = 'none';
    econMain.style.display   = '';
    subjBr1.classList.remove('active');
    subjEcon.classList.add('active');
    var anyEconActive = false;
    for (var j = 0; j < ECON_PANELS.length; j++) {
      var eel = document.getElementById(ECON_PANELS[j]);
      if (eel && eel.classList.contains('active')) { anyEconActive = true; break; }
    }
    if (!anyEconActive) showEconPanel('ec-overview');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── BR1 panel navigation ──
function showPanel(id) {
  var btns = document.querySelectorAll('#subnav-br1 .nav-btn');
  for (var i = 0; i < BR1_PANELS.length; i++) {
    var el = document.getElementById(BR1_PANELS[i]);
    if (el) el.classList.toggle('active', BR1_PANELS[i] === id);
    if (btns[i]) btns[i].classList.toggle('active', BR1_PANELS[i] === id);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── ECON panel navigation ──
function showEconPanel(id) {
  var btns = document.querySelectorAll('#subnav-econ .nav-btn');
  for (var i = 0; i < ECON_PANELS.length; i++) {
    var el = document.getElementById(ECON_PANELS[i]);
    if (el) el.classList.toggle('active', ECON_PANELS[i] === id);
    if (btns[i]) btns[i].classList.toggle('active', ECON_PANELS[i] === id);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Init ──
window.addEventListener('DOMContentLoaded', function () {
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

  // Start on BR1 overview
  showPanel('overview');
});