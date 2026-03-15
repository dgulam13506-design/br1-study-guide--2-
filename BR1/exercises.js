// ============================================================
//  BR1 STUDY GUIDE — exercises.js
//  Chapter quizzes · Fill-in-the-blank · Matching
// ============================================================

// Keep shuffled defs in plain JS — never on DOM nodes
var MATCH_STATE = {};

// ─────────────────────────────────────────────
// CHAPTER QUIZZES
// ─────────────────────────────────────────────
function renderChapterQuiz(chId) {
  var container = document.getElementById('quiz-' + chId);
  if (!container || !CHAPTER_QUIZZES[chId]) return;

  var qs = CHAPTER_QUIZZES[chId];
  var letters = ['A','B','C','D'];
  var html = '';

  for (var qi = 0; qi < qs.length; qi++) {
    var q = qs[qi];
    html += '<div class="quiz-card">';
    html += '<div class="quiz-qnum">Question ' + (qi+1) + ' of ' + qs.length + '</div>';
    html += '<div class="quiz-qtext">' + _escQ(q.q) + '</div>';
    html += '<div class="quiz-options">';
    for (var oi = 0; oi < q.opts.length; oi++) {
      html += '<div class="quiz-opt" id="qo-' + chId + '-' + qi + '-' + oi + '" ' +
              'onclick="answerQ(\'' + chId + '\',' + qi + ',' + oi + ')">' +
              '<span class="quiz-opt-letter">' + letters[oi] + '</span>' +
              '<span>' + _escQ(q.opts[oi]) + '</span></div>';
    }
    html += '</div>';
    html += '<div class="quiz-feedback" id="qfb-' + chId + '-' + qi + '" style="display:none"></div>';
    html += '</div>';
  }

  container.innerHTML = html;
}

function answerQ(chId, qi, chosen) {
  var q = CHAPTER_QUIZZES[chId][qi];

  // Lock all 4 options for this question
  for (var oi = 0; oi < 4; oi++) {
    var el = document.getElementById('qo-' + chId + '-' + qi + '-' + oi);
    if (!el) continue;
    el.onclick = null;
    el.style.cursor = 'default';
    if (oi === q.c)                     el.classList.add('opt-correct');
    else if (oi === chosen && oi !== q.c) el.classList.add('opt-wrong');
  }

  var fb = document.getElementById('qfb-' + chId + '-' + qi);
  fb.style.display = 'block';
  if (chosen === q.c) {
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
  var container = document.getElementById('fill-' + chId);
  var data = FILL_EXERCISES[chId];
  if (!container || !data) return;

  // Build the sentence — replace each [answer] marker with a numbered input
  var sentence = data.sentence;
  for (var i = 0; i < data.blanks.length; i++) {
    sentence = sentence.replace(
      /\[[^\]]+\]/,
      '<input class="blank-input" id="' + data.blanks[i].id + '" ' +
      'placeholder="?" autocomplete="off" spellcheck="false">'
    );
  }

  container.innerHTML =
    '<div class="exercise-block">' +
      '<h4>🖊️ Fill in the Blank</h4>' +
      '<div class="fill-text">' + sentence + '</div>' +
      '<button class="ex-btn" onclick="checkFill(\'' + chId + '\')">Check Answers</button>' +
      '<div class="ex-result" id="fill-result-' + chId + '"></div>' +
    '</div>';
}

function checkFill(chId) {
  var data    = FILL_EXERCISES[chId];
  var correct = 0;

  for (var i = 0; i < data.blanks.length; i++) {
    var b     = data.blanks[i];
    var input = document.getElementById(b.id);
    if (!input) continue;

    var val       = input.value.trim().toLowerCase();
    var isCorrect = false;
    for (var j = 0; j < b.answers.length; j++) {
      if (b.answers[j].toLowerCase() === val) { isCorrect = true; break; }
    }

    input.classList.remove('b-correct', 'b-wrong');
    input.classList.add(isCorrect ? 'b-correct' : 'b-wrong');
    if (isCorrect) correct++;
  }

  var total  = data.blanks.length;
  var result = document.getElementById('fill-result-' + chId);
  result.className  = 'ex-result ' + (correct === total ? 'good' : 'bad');
  result.textContent = correct + ' / ' + total + ' correct';

  // After a short delay, show the correct answer as placeholder on wrong inputs
  if (correct < total) {
    setTimeout(function() {
      for (var i = 0; i < data.blanks.length; i++) {
        var b2    = data.blanks[i];
        var inp   = document.getElementById(b2.id);
        if (inp && inp.classList.contains('b-wrong')) {
          inp.value       = '';
          inp.placeholder = b2.answers[0];
        }
      }
    }, 1000);
  }
}

// ─────────────────────────────────────────────
// MATCHING EXERCISE
// ─────────────────────────────────────────────
function renderMatchExercise(chId) {
  var container = document.getElementById('match-' + chId);
  var data      = MATCH_EXERCISES[chId];
  if (!container || !data) return;

  // Shuffle definitions and store in plain JS object
  var defs = [];
  for (var i = 0; i < data.pairs.length; i++) defs.push(data.pairs[i].def);
  defs = _shuffle(defs);
  MATCH_STATE[chId] = defs;   // <-- stored in JS, not on DOM

  var letters = ['A','B','C','D','E','F'];

  // Legend
  var legend = '<div class="match-legend">';
  for (var i = 0; i < defs.length; i++) {
    legend += '<div class="match-legend-row">' +
              '<span class="match-legend-letter">' + letters[i] + '.</span>' +
              _escQ(defs[i]) + '</div>';
  }
  legend += '</div>';

  // Rows with select dropdowns
  var rows = '';
  for (var i = 0; i < data.pairs.length; i++) {
    var opts = '<option value="-1">— choose —</option>';
    for (var j = 0; j < defs.length; j++) {
      opts += '<option value="' + j + '">' + letters[j] + '</option>';
    }
    rows += '<div class="match-row">' +
            '<span class="match-term">' + _escQ(data.pairs[i].term) + '</span>' +
            '<select class="match-sel" id="ms-' + chId + '-' + i + '">' + opts + '</select>' +
            '</div>';
  }

  container.innerHTML =
    '<div class="exercise-block">' +
      '<h4>🔗 Match the Term to its Description</h4>' +
      legend +
      rows +
      '<button class="ex-btn" onclick="checkMatch(\'' + chId + '\')">Check Answers</button>' +
      '<div class="ex-result" id="match-result-' + chId + '"></div>' +
    '</div>';
}

function checkMatch(chId) {
  var data    = MATCH_EXERCISES[chId];
  var defs    = MATCH_STATE[chId];   // read from plain JS object
  var correct = 0;

  for (var i = 0; i < data.pairs.length; i++) {
    var sel    = document.getElementById('ms-' + chId + '-' + i);
    if (!sel) continue;
    var chosen    = parseInt(sel.value, 10);
    var isCorrect = chosen >= 0 && defs[chosen] === data.pairs[i].def;
    sel.classList.remove('m-correct', 'm-wrong');
    sel.classList.add(isCorrect ? 'm-correct' : 'm-wrong');
    if (isCorrect) correct++;
  }

  var result = document.getElementById('match-result-' + chId);
  result.className  = 'ex-result ' + (correct === data.pairs.length ? 'good' : 'bad');
  result.textContent = correct + ' / ' + data.pairs.length + ' correct';
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────
function _shuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}

function _escQ(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}