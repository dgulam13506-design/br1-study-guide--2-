// ============================================================
//  ECONOMICS — ECON/flashcards_econ.js
// ============================================================

var EC_FC = {};

function renderEconFlashcards(chId) {
  var container = document.getElementById('ecfc-' + chId);
  if (!container || !ECON_FLASHCARDS[chId]) return;

  var cards = ECON_FLASHCARDS[chId];
  EC_FC[chId] = { idx: 0, flipped: false, total: cards.length };

  container.innerHTML =
    '<p style="font-size:11px;color:var(--ink-mute);text-align:center;margin-bottom:8px;font-family:Inconsolata,monospace;">Click the card to flip it</p>' +
    '<div class="fc-stage">' +
      '<div class="fc-inner" id="ecfc-inner-' + chId + '" onclick="ecFcFlip(\'' + chId + '\')">' +
        '<div class="fc-face fc-front" id="ecfc-front-' + chId + '"></div>' +
        '<div class="fc-face fc-back"  id="ecfc-back-'  + chId + '"></div>' +
      '</div>' +
    '</div>' +
    '<div class="fc-controls">' +
      '<button class="fc-ctrl-btn" onclick="ecFcPrev(\'' + chId + '\')">&#8592; Prev</button>' +
      '<span class="fc-counter" id="ecfc-counter-' + chId + '">1 / ' + cards.length + '</span>' +
      '<button class="fc-ctrl-btn" onclick="ecFcNext(\'' + chId + '\')">Next &#8594;</button>' +
    '</div>';

  document.getElementById('ecfc-front-' + chId).textContent = cards[0].q;
  document.getElementById('ecfc-back-'  + chId).textContent = cards[0].a;
}

function ecFcFlip(chId) {
  EC_FC[chId].flipped = !EC_FC[chId].flipped;
  document.getElementById('ecfc-inner-' + chId).classList.toggle('flipped', EC_FC[chId].flipped);
}

function ecFcNext(chId) {
  var s = EC_FC[chId];
  s.idx = (s.idx + 1) % s.total;
  s.flipped = false;
  _ecFcDraw(chId);
}

function ecFcPrev(chId) {
  var s = EC_FC[chId];
  s.idx = (s.idx - 1 + s.total) % s.total;
  s.flipped = false;
  _ecFcDraw(chId);
}

function _ecFcDraw(chId) {
  var s    = EC_FC[chId];
  var card = ECON_FLASHCARDS[chId][s.idx];
  document.getElementById('ecfc-inner-'  + chId).classList.remove('flipped');
  document.getElementById('ecfc-front-'  + chId).textContent = card.q;
  document.getElementById('ecfc-back-'   + chId).textContent = card.a;
  document.getElementById('ecfc-counter-'+ chId).textContent = (s.idx + 1) + ' / ' + s.total;
}