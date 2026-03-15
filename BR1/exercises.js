// ============================================================
//  BR1 STUDY GUIDE — exercises.js
//  Handles: chapter quizzes, fill-in-the-blank, matching
// ============================================================

// ─────────────────────────────────────────────
// CHAPTER QUIZZES
// ─────────────────────────────────────────────
function renderChapterQuiz(chId) {
  const container = document.getElementById(`quiz-${chId}`);
  if (!container || !CHAPTER_QUIZZES[chId]) return;

  const qs = CHAPTER_QUIZZES[chId];
  const letters = ['A', 'B', 'C', 'D'];
  let html = '';

  qs.forEach((q, qi) => {
    html += `
      <div class="quiz-card">
        <div class="quiz-qnum">Question ${qi + 1} of ${qs.length}</div>
        <div class="quiz-qtext">${q.q}</div>
        <div class="quiz-options">
          ${q.opts.map((opt, oi) => `
            <div class="quiz-opt" id="qo-${chId}-${qi}-${oi}" onclick="answerChapterQ('${chId}',${qi},${oi})">
              <span class="quiz-opt-letter">${letters[oi]}</span>
              <span>${opt}</span>
            </div>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="qfb-${chId}-${qi}"></div>
      </div>`;
  });

  container.innerHTML = html;
}

function answerChapterQ(chId, qi, oi) {
  const q = CHAPTER_QUIZZES[chId][qi];
  const allOpts = document.querySelectorAll(`[id^="qo-${chId}-${qi}-"]`);

  // Lock all options
  allOpts.forEach(el => {
    el.classList.add('locked');
    el.onclick = null;
  });

  allOpts.forEach((el, idx) => {
    if (idx === q.c)            el.classList.add('opt-correct');
    else if (idx === oi)        el.classList.add('opt-wrong');
  });

  const fb = document.getElementById(`qfb-${chId}-${qi}`);
  fb.style.display = 'block';
  if (oi === q.c) {
    fb.className = 'quiz-feedback feedback-correct';
    fb.textContent = '✓ Correct! ' + q.fb;
  } else {
    fb.className = 'quiz-feedback feedback-wrong';
    fb.textContent = '✗ Incorrect. ' + q.fb;
  }
}

// ─────────────────────────────────────────────
// FILL-IN-THE-BLANK
// ─────────────────────────────────────────────
function renderFillExercise(chId) {
  const container = document.getElementById(`fill-${chId}`);
  const data = FILL_EXERCISES[chId];
  if (!container || !data) return;

  // Build sentence with inputs replacing [word] markers
  let html = data.sentence;
  data.blanks.forEach(b => {
    html = html.replace(
      /\[[^\]]+\]/,
      `<input class="blank-input" id="${b.id}" placeholder="?" autocomplete="off" spellcheck="false">`
    );
  });

  container.innerHTML = `
    <div class="exercise-block">
      <h4>🖊️ Fill in the Blank</h4>
      <p class="fill-text">${html}</p>
      <button class="ex-btn" onclick="checkFill('${chId}')">Check Answers</button>
      <div class="ex-result" id="fill-result-${chId}"></div>
    </div>`;
}

function checkFill(chId) {
  const data = FILL_EXERCISES[chId];
  let correct = 0;

  data.blanks.forEach(b => {
    const input = document.getElementById(b.id);
    if (!input) return;
    const val = input.value.trim().toLowerCase();
    const isCorrect = b.answers.some(a => a.toLowerCase() === val);
    input.classList.remove('b-correct', 'b-wrong');
    input.classList.add(isCorrect ? 'b-correct' : 'b-wrong');
    if (isCorrect) correct++;
  });

  const result = document.getElementById(`fill-result-${chId}`);
  const total = data.blanks.length;
  result.className = `ex-result ${correct === total ? 'good' : correct > 0 ? '' : 'bad'}`;
  result.textContent = `${correct} / ${total} correct`;

  if (correct < total) {
    // Show correct answers after attempt
    setTimeout(() => {
      data.blanks.forEach(b => {
        const input = document.getElementById(b.id);
        if (input && input.classList.contains('b-wrong')) {
          input.placeholder = b.answers[0];
          input.value = '';
        }
      });
    }, 1200);
  }
}

// ─────────────────────────────────────────────
// MATCHING EXERCISE
// ─────────────────────────────────────────────
function renderMatchExercise(chId) {
  const container = document.getElementById(`match-${chId}`);
  const data = MATCH_EXERCISES[chId];
  if (!container || !data) return;

  // Shuffle the definitions for the dropdown
  const defs = [...data.pairs.map(p => p.def)].sort(() => Math.random() - 0.5);
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  // Build a legend of definitions
  let legend = '<div style="font-size:12px;color:var(--ink-mute);margin-bottom:12px;">';
  defs.forEach((d, i) => {
    legend += `<div style="margin-bottom:4px;"><span style="font-family:\'Inconsolata\',monospace;font-weight:700;margin-right:6px;">${letters[i]}.</span>${d}</div>`;
  });
  legend += '</div>';

  // Build the matching rows
  let rows = '';
  data.pairs.forEach((pair, idx) => {
    const opts = defs.map((d, i) => `<option value="${i}">${letters[i]}</option>`).join('');
    rows += `
      <div class="match-row">
        <span class="match-term">${pair.term}</span>
        <select class="match-sel" id="ms-${chId}-${idx}">
          <option value="-1">— pick —</option>
          ${opts}
        </select>
      </div>`;
  });

  container.innerHTML = `
    <div class="exercise-block">
      <h4>🔗 Match the Term to its Description</h4>
      ${legend}
      ${rows}
      <button class="ex-btn" onclick="checkMatch('${chId}')">Check Answers</button>
      <div class="ex-result" id="match-result-${chId}"></div>
    </div>`;

  // Store shuffled order for checking
  container._shuffledDefs = defs;
}

function checkMatch(chId) {
  const container = document.getElementById(`match-${chId}`);
  const data = MATCH_EXERCISES[chId];
  const defs = container._shuffledDefs;
  let correct = 0;

  data.pairs.forEach((pair, idx) => {
    const sel = document.getElementById(`ms-${chId}-${idx}`);
    if (!sel) return;
    const chosen = parseInt(sel.value);
    const isCorrect = chosen >= 0 && defs[chosen] === pair.def;
    sel.classList.remove('m-correct', 'm-wrong');
    sel.classList.add(isCorrect ? 'm-correct' : 'm-wrong');
    if (isCorrect) correct++;
  });

  const result = document.getElementById(`match-result-${chId}`);
  const total = data.pairs.length;
  result.className = `ex-result ${correct === total ? 'good' : 'bad'}`;
  result.textContent = `${correct} / ${total} correct`;
}
