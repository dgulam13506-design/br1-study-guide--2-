// ============================================================
//  ECONOMICS — ECON/mockexam_econ.js
//  Two static mock exams (A and B), alternating on retake.
// ============================================================

var ECON_TIMER_SECONDS = 30 * 60;

var econMockState = {
  questions:     [],
  answers:       {},
  current:       0,
  timerInterval: null,
  secondsLeft:   ECON_TIMER_SECONDS,
  finished:      false,
  examIndex:     0,
};

var ECON_EXAMS       = [ECON_EXAM_A, ECON_EXAM_B];
var ECON_EXAM_LABELS = ['A', 'B'];

function startEconExam() {
  econMockState.answers     = {};
  econMockState.current     = 0;
  econMockState.finished    = false;
  econMockState.secondsLeft = ECON_TIMER_SECONDS;
  econMockState.questions   = ECON_EXAMS[econMockState.examIndex];

  document.getElementById('econ-mock-intro').style.display = 'none';
  document.getElementById('econ-mock-results').classList.remove('on');
  document.getElementById('econ-mock-active').classList.add('on');

  econRenderDots();
  econRenderQuestion();
  econStartTimer();
}

function econRenderDots() {
  var row = document.getElementById('econ-exam-dot-row');
  if (!row) return;
  row.innerHTML = econMockState.questions.map(function(_, i) {
    var cls = i === econMockState.current ? 'exam-dot current'
            : econMockState.answers[i] !== undefined ? 'exam-dot answered'
            : 'exam-dot';
    return '<div class="' + cls + '" onclick="econJumpTo(' + i + ')">' + (i+1) + '</div>';
  }).join('');
}

function econRenderQuestion() {
  var q       = econMockState.questions[econMockState.current];
  var letters = ['A','B','C','D'];
  var sel     = econMockState.answers[econMockState.current];
  var total   = econMockState.questions.length;
  var idx     = econMockState.current;

  document.getElementById('econ-exam-qmeta').textContent =
    'Question ' + (idx+1) + ' of ' + total + '  ·  ' + q.ch;
  document.getElementById('econ-exam-qtext').textContent = q.q;

  var pct = Math.round((idx+1) / total * 100);
  document.getElementById('econ-exam-pbar').style.width = pct + '%';
  document.getElementById('econ-exam-progress-label').textContent = (idx+1) + ' / ' + total;

  document.getElementById('econ-exam-opts').innerHTML = q.opts.map(function(opt, oi) {
    return '<div class="exam-opt' + (sel === oi ? ' selected' : '') + '" onclick="econSelectOpt(' + oi + ')">' +
           '<span class="exam-opt-ltr">' + letters[oi] + '</span><span>' + opt + '</span></div>';
  }).join('');

  document.getElementById('econ-exam-prev-btn').disabled = idx === 0;
  document.getElementById('econ-exam-next-btn').textContent =
    idx === total - 1 ? 'Submit Exam' : 'Next →';
}

function econSelectOpt(oi) {
  if (econMockState.finished) return;
  econMockState.answers[econMockState.current] = oi;
  econRenderQuestion();
  econRenderDots();
}

function econExamNext() {
  var last = econMockState.questions.length - 1;
  if (econMockState.current === last) {
    var unanswered = last + 1 - Object.keys(econMockState.answers).length;
    if (unanswered > 0 && !confirm(unanswered + ' unanswered question(s). Submit anyway?')) return;
    econFinishExam();
  } else {
    econMockState.current++;
    econRenderQuestion();
    econRenderDots();
  }
}

function econExamPrev() {
  if (econMockState.current > 0) {
    econMockState.current--;
    econRenderQuestion();
    econRenderDots();
  }
}

function econJumpTo(i) {
  econMockState.current = i;
  econRenderQuestion();
  econRenderDots();
}

function econStartTimer() {
  clearInterval(econMockState.timerInterval);
  econUpdateTimer();
  econMockState.timerInterval = setInterval(function() {
    econMockState.secondsLeft--;
    econUpdateTimer();
    if (econMockState.secondsLeft <= 0) {
      clearInterval(econMockState.timerInterval);
      econFinishExam(true);
    }
  }, 1000);
}

function econUpdateTimer() {
  var el = document.getElementById('econ-exam-timer');
  if (!el) return;
  var m = Math.floor(econMockState.secondsLeft / 60).toString().padStart(2,'0');
  var s = (econMockState.secondsLeft % 60).toString().padStart(2,'0');
  el.textContent = m + ':' + s;
  el.classList.toggle('warn', econMockState.secondsLeft < 300);
}

function econFinishExam(timedOut) {
  timedOut = timedOut || false;
  clearInterval(econMockState.timerInterval);
  econMockState.finished = true;
  document.getElementById('econ-mock-active').classList.remove('on');

  var correct = 0;
  econMockState.questions.forEach(function(q, i) {
    if (econMockState.answers[i] === q.c) correct++;
  });

  var total   = econMockState.questions.length;
  var pct     = Math.round(correct / total * 100);
  var passed  = pct >= 55;
  var elapsed = ECON_TIMER_SECONDS - econMockState.secondsLeft;
  var label   = ECON_EXAM_LABELS[econMockState.examIndex];

  document.getElementById('econ-results-score').textContent = pct + '%';
  document.getElementById('econ-results-score').className =
    'results-score ' + (passed ? 'score-pass' : 'score-fail');
  document.getElementById('econ-results-verdict').textContent = timedOut
    ? "Time's up! You scored " + pct + "% on Exam " + label + " — " + (passed ? 'Pass 🎉' : 'Keep studying.')
    : passed
    ? 'Well done! You passed Exam ' + label + ' with ' + pct + '%. 🎉'
    : 'You scored ' + pct + '% on Exam ' + label + '. Review the explanations below and try again.';

  document.getElementById('econ-rstat-correct').textContent = correct;
  document.getElementById('econ-rstat-wrong').textContent   = total - correct;
  document.getElementById('econ-rstat-pct').textContent     = pct + '%';
  document.getElementById('econ-rstat-time').textContent    =
    Math.floor(elapsed/60) + 'm ' + (elapsed%60) + 's';

  var letters = ['A','B','C','D'];
  document.getElementById('econ-review-list').innerHTML =
    econMockState.questions.map(function(q, i) {
      var sel = econMockState.answers[i];
      var ok  = sel === q.c;
      var optsHtml = q.opts.map(function(opt, oi) {
        var cls = oi === q.c ? 'rv-opt rv-c' : (oi === sel && !ok) ? 'rv-opt rv-w' : 'rv-opt rv-n';
        return '<div class="' + cls + '"><strong>' + letters[oi] + '.</strong> ' + opt + '</div>';
      }).join('');
      return '<div class="review-card ' + (ok ? 'rv-correct' : 'rv-wrong') + '">' +
             '<div class="rv-meta">' + (ok ? '✓ Correct' : '✗ Incorrect') + ' · ' + q.ch + ' · Q' + (i+1) + '</div>' +
             '<div class="rv-q">' + q.q + '</div>' +
             '<div class="rv-opts">' + optsHtml + '</div>' +
             (q.fb ? '<div class="rv-explanation">💡 ' + q.fb + '</div>' : '') +
             '</div>';
    }).join('');

  document.getElementById('econ-mock-results').classList.add('on');
}

function resetEconExam() {
  clearInterval(econMockState.timerInterval);
  econMockState.examIndex = econMockState.examIndex === 0 ? 1 : 0;
  document.getElementById('econ-mock-active').classList.remove('on');
  document.getElementById('econ-mock-results').classList.remove('on');
  document.getElementById('econ-mock-intro').style.display = 'block';
  var next = ECON_EXAM_LABELS[econMockState.examIndex];
  document.getElementById('econ-mock-start-btn').textContent = 'Start Exam ' + next + ' →';
  document.getElementById('econ-exam-count-badge').textContent = 'Exam ' + next + ' — 20 different questions';
}