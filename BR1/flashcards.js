// ============================================================
//  BR1 STUDY GUIDE — flashcards.js
// ============================================================

// State stored in a plain JS object — never on DOM nodes
var FC = {};

function renderFlashcards(chId) {
  var container = document.getElementById('fc-' + chId);
  if (!container || !FLASHCARDS[chId]) return;

  var cards = FLASHCARDS[chId];
  FC[chId] = { idx: 0, flipped: false, total: cards.length };

  container.innerHTML =
    '<p style="font-size:11px;color:var(--ink-mute);text-align:center;margin-bottom:8px;' +
    'font-family:Inconsolata,monospace;">Click the card to flip it</p>' +
    '<div class="fc-stage">' +
      '<div class="fc-inner" id="fc-inner-' + chId + '" onclick="fcFlip(\'' + chId + '\')">' +
        '<div class="fc-face fc-front" id="fc-front-' + chId + '"></div>' +
        '<div class="fc-face fc-back"  id="fc-back-'  + chId + '"></div>' +
      '</div>' +
    '</div>' +
    '<div class="fc-controls">' +
      '<button class="fc-ctrl-btn" onclick="fcPrev(\'' + chId + '\')">&#8592; Prev</button>' +
      '<span class="fc-counter" id="fc-counter-' + chId + '">1 / ' + cards.length + '</span>' +
      '<button class="fc-ctrl-btn" onclick="fcNext(\'' + chId + '\')">Next &#8594;</button>' +
    '</div>';

  // Set text content safely (no XSS)
  document.getElementById('fc-front-' + chId).textContent = cards[0].q;
  document.getElementById('fc-back-'  + chId).textContent = cards[0].a;
}

function fcFlip(chId) {
  FC[chId].flipped = !FC[chId].flipped;
  document.getElementById('fc-inner-' + chId).classList.toggle('flipped', FC[chId].flipped);
}

function fcNext(chId) {
  var s = FC[chId];
  s.idx = (s.idx + 1) % s.total;
  s.flipped = false;
  _fcDraw(chId);
}

function fcPrev(chId) {
  var s = FC[chId];
  s.idx = (s.idx - 1 + s.total) % s.total;
  s.flipped = false;
  _fcDraw(chId);
}

function _fcDraw(chId) {
  var s    = FC[chId];
  var card = FLASHCARDS[chId][s.idx];
  document.getElementById('fc-inner-'  + chId).classList.remove('flipped');
  document.getElementById('fc-front-'  + chId).textContent = card.q;
  document.getElementById('fc-back-'   + chId).textContent = card.a;
  document.getElementById('fc-counter-'+ chId).textContent = (s.idx + 1) + ' / ' + s.total;
}