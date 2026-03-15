// ============================================================
//  BR1 STUDY GUIDE — tutor.js
//  AI Tutor chat for each chapter panel + overview
// ============================================================

var TUTOR_SYSTEM = `You are a concise, exam-focused tutor for the BR1 (Business Research Methods) exam at a Dutch university of applied sciences. The exam is based on Bougie & Sekaran "Research Methods for Business" (7th/8th/9th ed.).

Topics:
- Ch.2: 8 hallmarks (purposiveness, rigor, testability, replicability, precision & confidence, objectivity, generalizability, parsimony); hypothetico-deductive 7-step method; research philosophies (positivism, constructionism, critical realism, pragmatism)
- Ch.6: Research design (blueprint); strategies (experiments, survey, case study, ethnography, grounded theory, action research); researcher interference; contrived vs non-contrived; units of analysis; cross-sectional vs longitudinal; mixed methods
- Ch.9: Questionnaire types; design principles; question types; double-barreled, leading, loaded questions; sequencing; pretesting; cross-cultural issues
- Ch.11: Measurement; operationalisation; dimensions; elements; conceptual vs operational definitions
- Ch.12: 4 scale types; rating scales (Likert, semantic differential, etc.); reliability (Cronbach's alpha, test-retest); validity (content, criterion, construct); reflective vs formative
- Ch.13: Population, element, sample, sampling frame; probability (SRS, systematic, stratified, cluster, double); non-probability (convenience, purposive, quota, snowball); precision & confidence trade-off; sample size

When generating MCQs, use format:
**Q:** [question]
**A)** option  **B)** option  **C)** option  **D)** option
**Answer:** B — [explanation]

Keep responses focused, concise, and useful for exam preparation.`;

var tutorHistory = {};

function tutorSend(panelId) {
  const input = document.getElementById(`ti-${panelId}`);
  const btn   = document.getElementById(`tb-${panelId}`);
  const msgs  = document.getElementById(`tm-${panelId}`);
  const text  = input.value.trim();
  if (!text) return;

  input.value = '';
  btn.disabled = true;

  appendTutorMsg(msgs, text, 'user');
  const thinkEl = appendTutorMsg(msgs, 'Thinking…', 'thinking');
  msgs.scrollTop = msgs.scrollHeight;

  if (!tutorHistory[panelId]) tutorHistory[panelId] = [];
  tutorHistory[panelId].push({ role: 'user', content: text });

  fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 800,
      system: TUTOR_SYSTEM,
      messages: tutorHistory[panelId],
    }),
  })
  .then(r => r.json())
  .then(data => {
    const reply = data.content?.map(c => c.text || '').join('\n') || 'Sorry, no response received.';
    tutorHistory[panelId].push({ role: 'assistant', content: reply });
    thinkEl.remove();
    appendTutorMsg(msgs, reply, 'bot');
    msgs.scrollTop = msgs.scrollHeight;
  })
  .catch(() => {
    thinkEl.remove();
    appendTutorMsg(msgs, 'Connection error — please try again.', 'bot');
  })
  .finally(() => {
    btn.disabled = false;
    input.focus();
  });
}

function appendTutorMsg(container, text, type) {
  const el = document.createElement('div');
  el.className = `tutor-msg ${type}`;
  el.innerHTML = text.replace(/\n/g, '<br>');
  container.appendChild(el);
  return el;
}

function tutorChip(panelId, text) {
  document.getElementById(`ti-${panelId}`).value = text;
  tutorSend(panelId);
}

function tutorKey(e, panelId) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    tutorSend(panelId);
  }
}