// ============================================================
//  Study Guide — app.js
//  Subject switcher + panel navigation for BR1, ECON, and IT
//  Remembers last visited panel across page refreshes
// ============================================================

var BR1_PANELS  = ['overview','ch2','ch6','ch9','ch11','ch12','ch13','mockexam'];
var ECON_PANELS = ['ec-overview','ec1','ec2','ec3','ec5','ec7','ec8','ec9','ec10','ec12','ec-mockexam'];
var currentSubject = 'br1';

// ── Dark mode ──
function toggleDarkMode() {
  setDarkMode(document.documentElement.getAttribute('data-theme') !== 'dark');
}

function setDarkMode(dark) {
  var icon  = document.getElementById('dark-toggle-icon');
  var label = document.getElementById('dark-toggle-label');
  if (dark) {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (icon)  icon.innerHTML    = '&#9728;';
    if (label) label.textContent = 'Light mode';
    try { localStorage.setItem('sg_theme', 'dark'); } catch(e) {}
  } else {
    document.documentElement.removeAttribute('data-theme');
    if (icon)  icon.innerHTML    = '&#9790;';
    if (label) label.textContent = 'Dark mode';
    try { localStorage.setItem('sg_theme', 'light'); } catch(e) {}
  }
}

// ── Save + restore last panel ──
function saveState(subject, panelId) {
  try {
    localStorage.setItem('sg_subject', subject);
    localStorage.setItem('sg_panel',   panelId);
  } catch(e) {}
}

function loadState() {
  try {
    return {
      subject: localStorage.getItem('sg_subject') || 'br1',
      panel:   localStorage.getItem('sg_panel')   || 'overview'
    };
  } catch(e) {
    return { subject: 'br1', panel: 'overview' };
  }
}

// ── Subject switcher (top bar) ──
function switchSubject(subject, skipSave) {
  currentSubject = subject;

  var br1Header  = document.getElementById('header-br1');
  var econHeader = document.getElementById('header-econ');
  var itHeader   = document.getElementById('header-it');
  var br1Nav     = document.getElementById('subnav-br1');
  var econNav    = document.getElementById('subnav-econ');
  var br1Main    = document.querySelector('.main:not(.econ-main):not(.it-main)');
  var econMain   = document.getElementById('econ-main');
  var itMain     = document.getElementById('it-main');
  var subjBr1    = document.getElementById('subj-br1');
  var subjEcon   = document.getElementById('subj-econ');
  var subjIT     = document.getElementById('subj-it');

  // Hide everything
  br1Header.style.display  = 'none';
  econHeader.style.display = 'none';
  itHeader.style.display   = 'none';
  br1Nav.style.display     = 'none';
  econNav.style.display    = 'none';
  br1Main.style.display    = 'none';
  econMain.style.display   = 'none';
  itMain.style.display     = 'none';
  subjBr1.classList.remove('active');
  subjEcon.classList.remove('active');
  subjIT.classList.remove('active');

  if (subject === 'br1') {
    br1Header.style.display = '';
    br1Nav.style.display    = '';
    br1Main.style.display   = '';
    subjBr1.classList.add('active');
    var anyActive = false;
    for (var i = 0; i < BR1_PANELS.length; i++) {
      var el = document.getElementById(BR1_PANELS[i]);
      if (el && el.classList.contains('active')) { anyActive = true; break; }
    }
    if (!anyActive) showPanel('overview', true);
    if (!skipSave) saveState('br1', 'overview');
  } else if (subject === 'econ') {
    econHeader.style.display = '';
    econNav.style.display    = '';
    econMain.style.display   = '';
    subjEcon.classList.add('active');
    var anyEconActive = false;
    for (var j = 0; j < ECON_PANELS.length; j++) {
      var eel = document.getElementById(ECON_PANELS[j]);
      if (eel && eel.classList.contains('active')) { anyEconActive = true; break; }
    }
    if (!anyEconActive) showEconPanel('ec-overview', true);
    if (!skipSave) saveState('econ', 'ec-overview');
  } else {
    itHeader.style.display = '';
    itMain.style.display   = '';
    subjIT.classList.add('active');
    if (!skipSave) saveState('it', 'it-overview');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── BR1 panel navigation ──
function showPanel(id, skipSave) {
  var btns = document.querySelectorAll('#subnav-br1 .nav-btn');
  for (var i = 0; i < BR1_PANELS.length; i++) {
    var el = document.getElementById(BR1_PANELS[i]);
    if (el) el.classList.toggle('active', BR1_PANELS[i] === id);
    if (btns[i]) btns[i].classList.toggle('active', BR1_PANELS[i] === id);
  }
  if (!skipSave) saveState('br1', id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── ECON panel navigation ──
function showEconPanel(id, skipSave) {
  var btns = document.querySelectorAll('#subnav-econ .nav-btn');
  for (var i = 0; i < ECON_PANELS.length; i++) {
    var el = document.getElementById(ECON_PANELS[i]);
    if (el) el.classList.toggle('active', ECON_PANELS[i] === id);
    if (btns[i]) btns[i].classList.toggle('active', ECON_PANELS[i] === id);
  }
  if (!skipSave) saveState('econ', id);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Init ──
window.addEventListener('DOMContentLoaded', function () {
  // Restore dark mode preference and sync button state
  try {
    if (localStorage.getItem('sg_theme') === 'dark') setDarkMode(true);
  } catch(e) {}

  // Render BR1
  var br1 = ['ch2','ch6','ch9','ch11','ch12','ch13'];
  for (var i = 0; i < br1.length; i++) {
    renderFlashcards(br1[i]);
    renderChapterQuiz(br1[i]);
    renderFillExercise(br1[i]);
    renderMatchExercise(br1[i]);
  }

  // Render ECON
  var econ = ['ec1','ec2','ec3','ec5','ec7','ec8','ec9','ec10','ec12','ec13'];
  for (var j = 0; j < econ.length; j++) {
    renderEconFlashcards(econ[j]);
    renderEconQuiz(econ[j]);
    renderEconFill(econ[j]);
    renderEconMatch(econ[j]);
  }

  // Restore last visited page
  var state = loadState();
  var isEcon = ECON_PANELS.indexOf(state.panel) !== -1;
  var isIT   = state.subject === 'it';

  if (isIT) {
    switchSubject('it', true);
  } else if (isEcon) {
    switchSubject('econ', true);
    showEconPanel(state.panel, true);
  } else {
    switchSubject('br1', true);
    showPanel(state.panel, true);
  }
});