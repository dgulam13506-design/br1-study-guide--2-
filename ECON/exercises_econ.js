// ============================================================
//  ECONOMICS — ECON/exercises_econ.js
// ============================================================

var ECON_MATCH_STATE = {};

// ── Chapter Quizzes ──
function renderEconQuiz(chId) {
  var container = document.getElementById('ecquiz-' + chId);
  if (!container || !ECON_CHAPTER_QUIZZES[chId]) return;

  var qs = ECON_CHAPTER_QUIZZES[chId];
  var letters = ['A','B','C','D'];
  var html = '';

  for (var qi = 0; qi < qs.length; qi++) {
    var q = qs[qi];
    html += '<div class="quiz-card">';
    html += '<div class="quiz-qnum">Question ' + (qi+1) + ' of ' + qs.length + '</div>';
    html += '<div class="quiz-qtext">' + q.q + '</div>';
    html += '<div class="quiz-options">';
    for (var oi = 0; oi < q.opts.length; oi++) {
      html += '<div class="quiz-opt" id="ecqo-' + chId + '-' + qi + '-' + oi + '" ' +
              'onclick="answerEconQ(\'' + chId + '\',' + qi + ',' + oi + ')">' +
              '<span class="quiz-opt-letter">' + letters[oi] + '</span>' +
              '<span>' + q.opts[oi] + '</span></div>';
    }
    html += '</div>';
    html += '<div class="quiz-feedback" id="ecqfb-' + chId + '-' + qi + '" style="display:none"></div>';
    html += '</div>';
  }
  container.innerHTML = html;
}

function answerEconQ(chId, qi, chosen) {
  var q = ECON_CHAPTER_QUIZZES[chId][qi];
  for (var oi = 0; oi < 4; oi++) {
    var el = document.getElementById('ecqo-' + chId + '-' + qi + '-' + oi);
    if (!el) continue;
    el.onclick = null;
    el.style.cursor = 'default';
    if (oi === q.c)                       el.classList.add('opt-correct');
    else if (oi === chosen && oi !== q.c) el.classList.add('opt-wrong');
  }
  var fb = document.getElementById('ecqfb-' + chId + '-' + qi);
  fb.style.display = 'block';
  fb.className = chosen === q.c ? 'quiz-feedback feedback-correct' : 'quiz-feedback feedback-wrong';
  fb.textContent = chosen === q.c ? '✓ Correct! ' + q.fb : '✗ Incorrect. ' + q.fb;
}

// ── Fill-in-the-blank ──
function renderEconFill(chId) {
  var container = document.getElementById('ecfill-' + chId);
  var data = ECON_FILL_EXERCISES[chId];
  if (!container || !data) return;

  var sentence = data.sentence;
  for (var i = 0; i < data.blanks.length; i++) {
    sentence = sentence.replace(
      /\[[^\]]+\]/,
      '<input class="blank-input" id="' + data.blanks[i].id + '" placeholder="?" autocomplete="off" spellcheck="false">'
    );
  }
  container.innerHTML =
    '<div class="exercise-block">' +
      '<h4>🖊️ Fill in the Blank</h4>' +
      '<div class="fill-text">' + sentence + '</div>' +
      '<button class="ex-btn" onclick="checkEconFill(\'' + chId + '\')">Check Answers</button>' +
      '<div class="ex-result" id="ecfill-result-' + chId + '"></div>' +
    '</div>';
}

function checkEconFill(chId) {
  var data = ECON_FILL_EXERCISES[chId];
  var correct = 0;
  for (var i = 0; i < data.blanks.length; i++) {
    var b = data.blanks[i];
    var input = document.getElementById(b.id);
    if (!input) continue;
    var val = input.value.trim().toLowerCase();
    var ok = false;
    for (var j = 0; j < b.answers.length; j++) {
      if (b.answers[j].toLowerCase() === val) { ok = true; break; }
    }
    input.classList.remove('b-correct','b-wrong');
    input.classList.add(ok ? 'b-correct' : 'b-wrong');
    if (ok) correct++;
  }
  var result = document.getElementById('ecfill-result-' + chId);
  result.className  = 'ex-result ' + (correct === data.blanks.length ? 'good' : 'bad');
  result.textContent = correct + ' / ' + data.blanks.length + ' correct';
  if (correct < data.blanks.length) {
    setTimeout(function() {
      for (var i = 0; i < data.blanks.length; i++) {
        var inp = document.getElementById(data.blanks[i].id);
        if (inp && inp.classList.contains('b-wrong')) {
          inp.value = ''; inp.placeholder = data.blanks[i].answers[0];
        }
      }
    }, 1000);
  }
}

// ── Matching ──
function renderEconMatch(chId) {
  var container = document.getElementById('ecmatch-' + chId);
  var data = ECON_MATCH_EXERCISES[chId];
  if (!container || !data) return;

  var defs = [];
  for (var i = 0; i < data.pairs.length; i++) defs.push(data.pairs[i].def);
  defs = _econShuffle(defs);
  ECON_MATCH_STATE[chId] = defs;

  var letters = ['A','B','C','D','E','F'];
  var legend = '<div class="match-legend">';
  for (var i = 0; i < defs.length; i++) {
    legend += '<div class="match-legend-row"><span class="match-legend-letter">' + letters[i] + '.</span>' + defs[i] + '</div>';
  }
  legend += '</div>';

  var rows = '';
  for (var i = 0; i < data.pairs.length; i++) {
    var opts = '<option value="-1">— choose —</option>';
    for (var j = 0; j < defs.length; j++) {
      opts += '<option value="' + j + '">' + letters[j] + '</option>';
    }
    rows += '<div class="match-row"><span class="match-term">' + data.pairs[i].term + '</span>' +
            '<select class="match-sel" id="ecms-' + chId + '-' + i + '">' + opts + '</select></div>';
  }

  container.innerHTML =
    '<div class="exercise-block">' +
      '<h4>🔗 Match the Term to its Description</h4>' +
      legend + rows +
      '<button class="ex-btn" onclick="checkEconMatch(\'' + chId + '\')">Check Answers</button>' +
      '<div class="ex-result" id="ecmatch-result-' + chId + '"></div>' +
    '</div>';
}

function checkEconMatch(chId) {
  var data = ECON_MATCH_EXERCISES[chId];
  var defs = ECON_MATCH_STATE[chId];
  var correct = 0;
  for (var i = 0; i < data.pairs.length; i++) {
    var sel = document.getElementById('ecms-' + chId + '-' + i);
    if (!sel) continue;
    var chosen = parseInt(sel.value, 10);
    var ok = chosen >= 0 && defs[chosen] === data.pairs[i].def;
    sel.classList.remove('m-correct','m-wrong');
    sel.classList.add(ok ? 'm-correct' : 'm-wrong');
    if (ok) correct++;
  }
  var result = document.getElementById('ecmatch-result-' + chId);
  result.className  = 'ex-result ' + (correct === data.pairs.length ? 'good' : 'bad');
  result.textContent = correct + ' / ' + data.pairs.length + ' correct';
}

function _econShuffle(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = a[i]; a[i] = a[j]; a[j] = t;
  }
  return a;
}