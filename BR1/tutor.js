// ============================================================
//  BR1 STUDY GUIDE — tutor.js
// ============================================================

var PROXY_URL = 'https://throbbing-leaf-f9b9.d-gulam13506.workers.dev';

var TUTOR_SYSTEM = 'You are a concise, exam-focused tutor for the BR1 (Business Research Methods) exam at a Dutch university of applied sciences. The exam is based on Bougie & Sekaran "Research Methods for Business" (7th/8th/9th ed.).\n\nTopics:\n- Ch.2: 8 hallmarks (purposiveness, rigor, testability, replicability, precision & confidence, objectivity, generalizability, parsimony); hypothetico-deductive 7-step method; research philosophies (positivism, constructionism, critical realism, pragmatism)\n- Ch.6: Research design (blueprint); strategies (experiments, survey, case study, ethnography, grounded theory, action research); researcher interference; contrived vs non-contrived; units of analysis; cross-sectional vs longitudinal; mixed methods\n- Ch.9: Questionnaire types; design principles; question types; double-barreled, leading, loaded questions; sequencing; pretesting; cross-cultural issues\n- Ch.11: Measurement; operationalisation; dimensions; elements; conceptual vs operational definitions\n- Ch.12: 4 scale types; rating scales (Likert, semantic differential, etc.); reliability (Cronbach\'s alpha, test-retest); validity (content, criterion, construct); reflective vs formative\n- Ch.13: Population, element, sample, sampling frame; probability (SRS, systematic, stratified, cluster, double); non-probability (convenience, purposive, quota, snowball); precision & confidence trade-off; sample size\n\nWhen generating MCQs use format:\n**Q:** [question]\n**A)** option  **B)** option  **C)** option  **D)** option\n**Answer:** B — [explanation]\n\nKeep responses focused, concise, and useful for exam preparation.';

var tutorHistory = {};

function tutorSend(panelId) {
  var input = document.getElementById('ti-' + panelId);
  var btn   = document.getElementById('tb-' + panelId);
  var msgs  = document.getElementById('tm-' + panelId);
  var text  = input.value.trim();
  if (!text) return;

  input.value  = '';
  btn.disabled = true;

  appendTutorMsg(msgs, text, 'user');
  var thinkEl = appendTutorMsg(msgs, 'Thinking…', 'thinking');
  msgs.scrollTop = msgs.scrollHeight;

  if (!tutorHistory[panelId]) tutorHistory[panelId] = [];
  tutorHistory[panelId].push({ role: 'user', content: text });

  fetch(PROXY_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model:    'claude-haiku-4-5-20251001',
      max_tokens: 800,
      system:   TUTOR_SYSTEM,
      messages: tutorHistory[panelId],
    }),
  })
  .then(function(r) { return r.json(); })
  .then(function(data) {
    var reply = (data.content || []).map(function(c) { return c.text || ''; }).join('\n');
    if (!reply) reply = 'No response — check your Worker URL and API key.';
    tutorHistory[panelId].push({ role: 'assistant', content: reply });
    thinkEl.remove();
    appendTutorMsg(msgs, reply, 'bot');
    msgs.scrollTop = msgs.scrollHeight;
  })
  .catch(function() {
    thinkEl.remove();
    appendTutorMsg(msgs, 'Connection error — make sure the Cloudflare Worker is deployed and the API key is set.', 'bot');
  })
  .finally(function() {
    btn.disabled = false;
    input.focus();
  });
}

function appendTutorMsg(container, text, type) {
  var el = document.createElement('div');
  el.className = 'tutor-msg ' + type;
  el.innerHTML = text.replace(/\n/g, '<br>');
  container.appendChild(el);
  return el;
}

function tutorChip(panelId, text) {
  document.getElementById('ti-' + panelId).value = text;
  tutorSend(panelId);
}

function tutorKey(e, panelId) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    tutorSend(panelId);
  }
}