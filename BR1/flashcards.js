// ============================================================
//  BR1 STUDY GUIDE — flashcards.js
//  Renders and manages flip-card components per chapter
// ============================================================

const fcState = {};

function renderFlashcards(chId) {
  const container = document.getElementById(`fc-${chId}`);
  if (!container || !FLASHCARDS[chId]) return;

  const cards = FLASHCARDS[chId];
  fcState[chId] = { current: 0, flipped: false };

  container.innerHTML = `
    <div class="fc-wrap">
      <div class="fc-hint">↓ Click card to reveal answer</div>
      <div class="fc-stage">
        <div class="fc-inner" id="fc-inner-${chId}" onclick="flipCard('${chId}')">
          <div class="fc-face fc-front" id="fc-front-${chId}">${escHtml(cards[0].q)}</div>
          <div class="fc-face fc-back"  id="fc-back-${chId}">${escHtml(cards[0].a)}</div>
        </div>
      </div>
      <div class="fc-controls">
        <button class="fc-ctrl-btn" onclick="fcPrev('${chId}')">← Prev</button>
        <span class="fc-counter" id="fc-counter-${chId}">1 / ${cards.length}</span>
        <button class="fc-ctrl-btn" onclick="fcNext('${chId}')">Next →</button>
      </div>
    </div>
  `;
}

function flipCard(chId) {
  const inner = document.getElementById(`fc-inner-${chId}`);
  fcState[chId].flipped = !fcState[chId].flipped;
  inner.classList.toggle('flipped', fcState[chId].flipped);
}

function fcNext(chId) {
  const cards = FLASHCARDS[chId];
  const s = fcState[chId];
  s.current = (s.current + 1) % cards.length;
  s.flipped = false;
  _fcUpdate(chId);
}

function fcPrev(chId) {
  const cards = FLASHCARDS[chId];
  const s = fcState[chId];
  s.current = (s.current - 1 + cards.length) % cards.length;
  s.flipped = false;
  _fcUpdate(chId);
}

function _fcUpdate(chId) {
  const cards = FLASHCARDS[chId];
  const s = fcState[chId];
  const inner = document.getElementById(`fc-inner-${chId}`);
  inner.classList.remove('flipped');
  document.getElementById(`fc-front-${chId}`).textContent = cards[s.current].q;
  document.getElementById(`fc-back-${chId}`).textContent  = cards[s.current].a;
  document.getElementById(`fc-counter-${chId}`).textContent = `${s.current + 1} / ${cards.length}`;
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
