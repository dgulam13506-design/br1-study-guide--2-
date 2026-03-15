// ============================================================
//  BR1 STUDY GUIDE — mockexam.js
//  Two fully static mock exams. No AI, no async, no network.
//  Alternates between Exam A and Exam B on each retake.
// ============================================================

const TIMER_SECONDS = 30 * 60;

const EXAM_A = [
  { ch:'Ch.2', q:"Which hallmark of scientific research refers to the ability of other researchers to reproduce the same results using the same methodology?", opts:["Objectivity","Generalizability","Replicability","Parsimony"], c:2, fb:"Replicability means other researchers should obtain the same results when they repeat the study using the same design, sample type, and conditions." },
  { ch:'Ch.2', q:"In the hypothetico-deductive method, what comes directly AFTER 'Develop hypotheses'?", opts:["Data collection","Interpret results","Determine measures","Define the problem statement"], c:2, fb:"Step 4 is 'Determine measures' — deciding how to operationalise and measure the variables. Data collection is step 5." },
  { ch:'Ch.2', q:"A researcher presents the simplest possible model that still fully explains the phenomenon. This demonstrates:", opts:["Rigor","Testability","Parsimony","Purposiveness"], c:2, fb:"Parsimony = economy in explanation. The simplest adequate model is preferred over unnecessarily complex ones." },
  { ch:'Ch.2', q:"Which research philosophy holds that reality is socially constructed and uses mainly qualitative methods?", opts:["Positivism","Constructionism","Critical Realism","Pragmatism"], c:1, fb:"Constructionism holds that reality is made through social interaction. It favours qualitative, interpretive methods." },
  { ch:'Ch.2', q:"'Confidence' in scientific research refers to:", opts:["How close the estimate is to the true value","The probability the true value lies within the stated range","The ability to replicate findings","The absence of researcher bias"], c:1, fb:"Confidence is the probability (e.g. 95%) that the true population parameter falls within the confidence interval." },
  { ch:'Ch.6', q:"A research design is best described as:", opts:["A list of hypotheses to test","A blueprint for data collection, measurement, and analysis","The statistical method used to analyse data","A theoretical framework guiding the study"], c:1, fb:"A research design is the overall plan or blueprint guiding how data will be collected, measured, and analysed." },
  { ch:'Ch.6', q:"A study collects data from 300 employees at a single point in time. This is:", opts:["Longitudinal","Panel study","Cross-sectional","Ethnographic"], c:2, fb:"Cross-sectional designs collect data at one point in time — a snapshot. Faster and cheaper but cannot track change." },
  { ch:'Ch.6', q:"Which unit of analysis involves studying a supervisor and subordinate as a single unit?", opts:["Individual","Group","Dyad","Organisation"], c:2, fb:"Dyads are two-person units. A supervisor–subordinate pair is the classic dyad example." },
  { ch:'Ch.6', q:"A contrived study setting offers higher _____ but lower _____.", opts:["External validity; internal validity","Internal validity; external validity","Reliability; validity","Generalizability; control"], c:1, fb:"Contrived (lab) settings give maximum control — high internal validity — but the artificial environment reduces external validity." },
  { ch:'Ch.6', q:"Grounded theory as a research strategy means:", opts:["Testing a pre-existing theory with data","Building theory inductively from data collected in the field","Using ground-level interviews only","Conducting research at the organisational level"], c:1, fb:"Grounded theory develops theory bottom-up from empirical data. The theory is 'grounded' in what is observed in the field." },
  { ch:'Ch.9', q:"A questionnaire that asks 'Are you satisfied with your salary AND your working conditions?' is an example of:", opts:["A leading question","A loaded question","A double-barreled question","An open-ended question"], c:2, fb:"Double-barreled questions ask about two things at once. Respondents may feel differently about each — must be split into two." },
  { ch:'Ch.9', q:"Sensitive or demographic questions (age, income) should be placed:", opts:["At the very beginning","Randomly throughout","After all substantive questions, at the end","In the middle for balance"], c:2, fb:"Building rapport with neutral questions first increases willingness to answer sensitive items at the end." },
  { ch:'Ch.9', q:"The main disadvantage of mail questionnaires compared to personally administered ones is:", opts:["They are more expensive","They have lower response rates","They cannot reach geographically spread respondents","They are slower to design"], c:1, fb:"Mail questionnaires typically have very low response rates — no researcher is present to motivate completion or clarify ambiguities." },
  { ch:'Ch.9', q:"Pretesting a questionnaire means:", opts:["Reviewing it internally before publication","Piloting it on a small group to identify flaws before the main study","Testing it for statistical reliability only","Sending it to expert reviewers only"], c:1, fb:"Pretesting administers the questionnaire to a small sample to uncover unclear items and improve overall quality before the main study." },
  { ch:'Ch.11', q:"Operationalisation is best defined as:", opts:["Writing a conceptual dictionary definition","Specifying exactly how an abstract concept will be measured","Choosing the statistical technique for analysis","Selecting the unit of analysis"], c:1, fb:"Operationalisation translates abstract constructs into specific, observable, measurable indicators — it answers HOW you will measure the concept." },
  { ch:'Ch.11', q:"'Competitiveness', 'mastery', and 'work orientation' are parts of 'achievement motivation'. These parts are called:", opts:["Elements","Hypotheses","Dimensions","Constructs"], c:2, fb:"Dimensions are the sub-components of a concept. Elements are the specific questionnaire items used to measure each dimension." },
  { ch:'Ch.12', q:"A researcher records respondents' country of birth. This uses which scale type?", opts:["Ordinal","Interval","Nominal","Ratio"], c:2, fb:"Nominal scales assign labels to mutually exclusive categories with no inherent order or numeric meaning." },
  { ch:'Ch.12', q:"A scale consistently gives the same results but does not measure the intended construct. It is:", opts:["Valid but not reliable","Both valid and reliable","Reliable but not valid","Neither valid nor reliable"], c:2, fb:"A scale can consistently measure the wrong thing — reliable but not valid. Validity requires reliability, but not vice versa." },
  { ch:'Ch.13', q:"The actual list from which a sample is drawn is called the:", opts:["Population","Sampling unit","Sampling frame","Element"], c:2, fb:"The sampling frame is the operational list of units (e.g. employee database) from which the sample is actually selected." },
  { ch:'Ch.13', q:"A researcher uses snowball sampling. This is most appropriate when:", opts:["The population is large and well-defined","A sampling frame is readily available","The population is hard to reach with no sampling frame","Maximum statistical generalizability is required"], c:2, fb:"Snowball sampling is used for hard-to-reach populations where no sampling frame exists. It is non-probability sampling." },
];

const EXAM_B = [
  { ch:'Ch.2', q:"'Purposiveness' as a hallmark of scientific research means:", opts:["Results can be generalised to other contexts","The study has a clear, defined aim or focus","The research method is very strict","Findings can be reproduced by others"], c:1, fb:"Purposiveness means the research has a definite, focused purpose. The researcher knows what they are investigating from the start." },
  { ch:'Ch.2', q:"Which hallmark requires conclusions to be drawn from empirical data rather than the researcher's personal beliefs?", opts:["Testability","Rigor","Generalizability","Objectivity"], c:3, fb:"Objectivity means research conclusions are based on data and facts, not on the researcher's own values or subjective judgements." },
  { ch:'Ch.2', q:"'Precision' in research refers to:", opts:["The probability the true value lies within the confidence interval","How close the sample estimate is to the true population value","The ability to apply findings to other settings","The consistency of repeated measurements"], c:1, fb:"Precision = closeness of the sample estimate to the true population value. It is measured by the standard error / margin of error." },
  { ch:'Ch.2', q:"Which philosophy argues that the best method depends on what works for the research question, supporting mixed methods?", opts:["Positivism","Critical Realism","Constructionism","Pragmatism"], c:3, fb:"Pragmatism selects methods based on practical usefulness, supporting quantitative, qualitative, or mixed methods as needed." },
  { ch:'Ch.2', q:"The hypothetico-deductive method starts with:", opts:["Data collection","A broad problem area","Hypothesis development","Interpretation of results"], c:1, fb:"Step 1 is identifying a broad problem area — recognising something that warrants systematic investigation." },
  { ch:'Ch.6', q:"A researcher collects data from the same employees every year for five years. This is a:", opts:["Cross-sectional study","Case study","Longitudinal study","Ex post facto study"], c:2, fb:"Longitudinal designs collect data at multiple time points from the same subjects, allowing researchers to track change over time." },
  { ch:'Ch.6', q:"Which research strategy involves a researcher working collaboratively with practitioners to solve a real-world problem?", opts:["Ethnography","Survey research","Case study","Action research"], c:3, fb:"Action research is conducted with practitioners to simultaneously solve a practical problem and generate knowledge." },
  { ch:'Ch.6', q:"A study conducted in the natural workplace without any researcher manipulation uses a:", opts:["Contrived setting","Laboratory setting","Non-contrived setting","Controlled experiment"], c:2, fb:"Non-contrived (field) settings are natural environments. High external validity but less control over extraneous variables." },
  { ch:'Ch.6', q:"When a researcher studies an entire company as a single unit, the unit of analysis is:", opts:["Individual","Dyad","Group","Organisation"], c:3, fb:"When the data represents the organisation as a whole, the unit of analysis is the organisation." },
  { ch:'Ch.6', q:"Mixed methods research combines:", opts:["Two different quantitative techniques","Quantitative and qualitative approaches","Data from multiple countries","Primary and secondary data only"], c:1, fb:"Mixed methods deliberately combines quantitative (numbers) and qualitative (text, observations) approaches in one study." },
  { ch:'Ch.9', q:"A question worded 'Don't you agree our new policy improves efficiency?' is an example of:", opts:["A double-barreled question","A leading question","An open-ended question","A loaded question"], c:1, fb:"Leading questions suggest the expected answer ('Don't you agree...'), systematically biasing responses toward agreement." },
  { ch:'Ch.9', q:"Which type of questionnaire typically has the highest response rate?", opts:["Mail questionnaire","Electronic/online questionnaire","Personally administered questionnaire","Telephone survey"], c:2, fb:"Personally administered questionnaires have the highest response rates — the researcher is present to motivate completion and clarify questions." },
  { ch:'Ch.9', q:"Respondents answering to appear socially acceptable rather than giving their true response is called:", opts:["Recall bias","Social desirability bias","Response set bias","Leading response"], c:1, fb:"Social desirability bias occurs when respondents give answers they believe are more socially acceptable than their real views." },
  { ch:'Ch.9', q:"Open-ended questions in questionnaires:", opts:["Provide a fixed list of answer choices","Allow respondents to answer freely in their own words","Use a rating scale from 1 to 5","Have only yes or no options"], c:1, fb:"Open-ended questions impose no fixed format, allowing respondents to answer in their own words, generating richer qualitative data." },
  { ch:'Ch.11', q:"The specific survey items used to measure a single dimension of a concept are called:", opts:["Variables","Dimensions","Elements","Constructs"], c:2, fb:"Elements are the specific questionnaire items or indicators for each dimension. Dimensions are the sub-components; elements are the actual questions." },
  { ch:'Ch.11', q:"Which of the following is an example of operationalisation?", opts:["Defining 'stress' as a psychological state of tension","Measuring stress using a validated 14-item PSS questionnaire","Hypothesising that stress reduces productivity","Identifying stress as the independent variable"], c:1, fb:"Operationalisation specifies HOW to measure — a 14-item validated scale is the operational definition of stress." },
  { ch:'Ch.12', q:"Annual income measured in euros is an example of a:", opts:["Nominal scale","Ordinal scale","Interval scale","Ratio scale"], c:3, fb:"Annual income has equal intervals AND a true zero (€0 = no income). Both properties define a ratio scale." },
  { ch:'Ch.12', q:"Content validity means that a measurement scale:", opts:["Correlates with an external criterion measure","Measures the theoretical construct correctly","Covers all relevant facets of the concept being measured","Produces consistent results over time"], c:2, fb:"Content validity ensures items collectively represent all dimensions of the concept — not just some aspects of it." },
  { ch:'Ch.13', q:"Selecting every 8th name from an employee list describes:", opts:["Simple random sampling","Cluster sampling","Stratified sampling","Systematic sampling"], c:3, fb:"Systematic sampling selects every k-th element from an ordered list. Here k=8. Requires a complete sampling frame." },
  { ch:'Ch.13', q:"The trade-off between precision and confidence for a fixed sample size means:", opts:["Both can be maximised simultaneously","Increasing confidence reduces precision","Increasing precision increases confidence","Neither can be adjusted once the sample is set"], c:1, fb:"For a fixed n, widening the confidence interval (more confidence) means less precision. Both improve only by increasing sample size." },
];

// ─── STATE ───
const mockState = {
  questions:     [],
  answers:       {},
  current:       0,
  timerInterval: null,
  secondsLeft:   TIMER_SECONDS,
  finished:      false,
  examIndex:     0,
};

const EXAMS       = [EXAM_A, EXAM_B];
const EXAM_LABELS = ['A', 'B'];

// ─── START ───
function startMockExam() {
  mockState.answers     = {};
  mockState.current     = 0;
  mockState.finished    = false;
  mockState.secondsLeft = TIMER_SECONDS;
  mockState.questions   = EXAMS[mockState.examIndex];

  document.getElementById('mock-intro').style.display = 'none';
  document.getElementById('mock-results').classList.remove('on');

  document.getElementById('mock-active').classList.add('on');
  renderDots();
  renderQuestion();
  startTimer();
}

// ─── RENDER ───
function renderDots() {
  const row = document.getElementById('exam-dot-row');
  if (!row) return;
  row.innerHTML = mockState.questions.map((_, i) => {
    const cls = i === mockState.current ? 'exam-dot current'
              : mockState.answers[i] !== undefined ? 'exam-dot answered'
              : 'exam-dot';
    return `<div class="${cls}" onclick="jumpTo(${i})">${i + 1}</div>`;
  }).join('');
}

function renderQuestion() {
  const q       = mockState.questions[mockState.current];
  const letters = ['A','B','C','D'];
  const sel     = mockState.answers[mockState.current];
  const total   = mockState.questions.length;
  const idx     = mockState.current;

  document.getElementById('exam-qmeta').textContent =
    `Question ${idx + 1} of ${total}  ·  ${q.ch}`;
  document.getElementById('exam-qtext').textContent = q.q;

  const pct = Math.round((idx + 1) / total * 100);
  document.getElementById('exam-pbar').style.width = pct + '%';
  document.getElementById('exam-progress-label').textContent = `${idx + 1} / ${total}`;

  document.getElementById('exam-opts').innerHTML = q.opts.map((opt, oi) => `
    <div class="exam-opt${sel === oi ? ' selected' : ''}" onclick="selectOpt(${oi})">
      <span class="exam-opt-ltr">${letters[oi]}</span>
      <span>${opt}</span>
    </div>`).join('');

  document.getElementById('exam-prev-btn').disabled = idx === 0;
  document.getElementById('exam-next-btn').textContent =
    idx === total - 1 ? 'Submit Exam' : 'Next →';
}

function selectOpt(oi) {
  if (mockState.finished) return;
  mockState.answers[mockState.current] = oi;
  renderQuestion();
  renderDots();
}

function examNext() {
  const last = mockState.questions.length - 1;
  if (mockState.current === last) {
    const unanswered = last + 1 - Object.keys(mockState.answers).length;
    if (unanswered > 0 && !confirm(`${unanswered} unanswered question(s). Submit anyway?`)) return;
    finishExam();
  } else {
    mockState.current++;
    renderQuestion();
    renderDots();
  }
}

function examPrev() {
  if (mockState.current > 0) {
    mockState.current--;
    renderQuestion();
    renderDots();
  }
}

function jumpTo(i) {
  mockState.current = i;
  renderQuestion();
  renderDots();
}

// ─── TIMER ───
function startTimer() {
  clearInterval(mockState.timerInterval);
  updateTimer();
  mockState.timerInterval = setInterval(() => {
    mockState.secondsLeft--;
    updateTimer();
    if (mockState.secondsLeft <= 0) {
      clearInterval(mockState.timerInterval);
      finishExam(true);
    }
  }, 1000);
}

function updateTimer() {
  const el = document.getElementById('exam-timer');
  if (!el) return;
  const m = Math.floor(mockState.secondsLeft / 60).toString().padStart(2,'0');
  const s = (mockState.secondsLeft % 60).toString().padStart(2,'0');
  el.textContent = `${m}:${s}`;
  el.classList.toggle('warn', mockState.secondsLeft < 300);
}

// ─── FINISH ───
function finishExam(timedOut = false) {
  clearInterval(mockState.timerInterval);
  mockState.finished = true;

  document.getElementById('mock-active').classList.remove('on');

  let correct = 0;
  mockState.questions.forEach((q, i) => {
    if (mockState.answers[i] === q.c) correct++;
  });

  const total   = mockState.questions.length;
  const pct     = Math.round(correct / total * 100);
  const passed  = pct >= 55;
  const elapsed = TIMER_SECONDS - mockState.secondsLeft;
  const label   = EXAM_LABELS[mockState.examIndex];

  document.getElementById('results-score').textContent = pct + '%';
  document.getElementById('results-score').className =
    `results-score ${passed ? 'score-pass' : 'score-fail'}`;
  document.getElementById('results-verdict').textContent = timedOut
    ? `Time's up! You scored ${pct}% on Exam ${label} — ${passed ? 'Pass 🎉' : 'Keep studying.'}`
    : passed
    ? `Well done! You passed Exam ${label} with ${pct}%. 🎉`
    : `You scored ${pct}% on Exam ${label}. Review the explanations below and try Exam ${label === 'A' ? 'B' : 'A'}.`;

  document.getElementById('rstat-correct').textContent = correct;
  document.getElementById('rstat-wrong').textContent   = total - correct;
  document.getElementById('rstat-pct').textContent     = pct + '%';
  document.getElementById('rstat-time').textContent    =
    `${Math.floor(elapsed / 60)}m ${elapsed % 60}s`;

  // Render review
  const letters = ['A','B','C','D'];
  document.getElementById('review-list').innerHTML = mockState.questions.map((q, i) => {
    const sel       = mockState.answers[i];
    const isCorrect = sel === q.c;
    const optsHtml  = q.opts.map((opt, oi) => {
      const cls = oi === q.c ? 'rv-opt rv-c'
                : (oi === sel && !isCorrect) ? 'rv-opt rv-w'
                : 'rv-opt rv-n';
      return `<div class="${cls}"><strong>${letters[oi]}.</strong> ${opt}</div>`;
    }).join('');
    return `
      <div class="review-card ${isCorrect ? 'rv-correct' : 'rv-wrong'}">
        <div class="rv-meta">${isCorrect ? '✓ Correct' : '✗ Incorrect'} · ${q.ch} · Q${i + 1}</div>
        <div class="rv-q">${q.q}</div>
        <div class="rv-opts">${optsHtml}</div>
        ${q.fb ? `<div class="rv-explanation">💡 ${q.fb}</div>` : ''}
      </div>`;
  }).join('');

  document.getElementById('mock-results').classList.add('on');
}

// ─── RESET (switch to other exam) ───
function resetMockExam() {
  clearInterval(mockState.timerInterval);
  mockState.examIndex = mockState.examIndex === 0 ? 1 : 0;

  document.getElementById('mock-active').classList.remove('on');
  document.getElementById('mock-results').classList.remove('on');
  document.getElementById('mock-intro').style.display = 'block';

  const next = EXAM_LABELS[mockState.examIndex];
  document.getElementById('mock-start-btn').textContent = `Start Exam ${next} →`;
  document.getElementById('exam-count-badge').textContent =
    `Exam ${next} — 20 different questions`;
}
