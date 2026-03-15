// ============================================================
//  BR1 STUDY GUIDE — data.js
//  Contains: flashcards, chapter quizzes, exercises, mock bank
// ============================================================

// ─────────────────────────────────────────────
// FLASHCARDS  (per chapter)
// ─────────────────────────────────────────────
var FLASHCARDS = {
  ch2: [
    { q: "What is 'Parsimony' in scientific research?", a: "Economy in explanation — the simplest model that adequately explains a phenomenon is preferred over a more complex one." },
    { q: "What does 'Replicability' mean?", a: "The ability of other researchers to reproduce the same results when using the same methods, sample type, and context." },
    { q: "Name the 7 steps of the hypothetico-deductive method.", a: "1) Identify broad problem area → 2) Define problem statement → 3) Develop hypotheses → 4) Determine measures → 5) Collect data → 6) Analyse data → 7) Interpret results." },
    { q: "What is Positivism?", a: "A philosophical stance assuming an external, objective reality independent of the observer. Uses quantitative, value-free methods." },
    { q: "Precision vs. Confidence — what's the difference?", a: "Precision = how close an estimate is to the true value (measured by standard error). Confidence = probability that the true value falls within the estimate range (e.g. 95%)." },
    { q: "What is Testability?", a: "Hypotheses derived from research must be empirically testable using available statistical methods and data." },
    { q: "What is Objectivity as a hallmark of science?", a: "Conclusions are drawn from empirical data, not from the researcher's own values, emotions, or biases." },
    { q: "What is Constructionism?", a: "A philosophy that argues reality is socially constructed. Focuses on how people make sense of the world; typically qualitative." },
    { q: "What is Critical Realism?", a: "Accepts real external structures exist, but our knowledge of them is always provisional. Distinguishes between observable events and underlying mechanisms." },
    { q: "What is Pragmatism?", a: "Research philosophy that chooses methods based on what works best for the research question, not a fixed paradigm. Supports mixed methods." },
  ],
  ch6: [
    { q: "Define 'research design'.", a: "A blueprint or plan for the collection, measurement, and analysis of data, created to answer the research questions." },
    { q: "What is a contrived study setting?", a: "An artificial, lab-like environment designed and controlled by the researcher. High internal validity, lower external validity." },
    { q: "What is a non-contrived study setting?", a: "The natural workplace or field setting. Higher external validity (generalizability) but less control over variables." },
    { q: "What is the 'unit of analysis'?", a: "The level at which data is collected and analysed: individuals, dyads, groups, organisations, or cultures." },
    { q: "Cross-sectional vs. longitudinal design?", a: "Cross-sectional: data collected at one point in time (snapshot). Longitudinal: data collected over multiple time points to track change." },
    { q: "What is 'extent of researcher interference'?", a: "How much the researcher manipulates or controls variables. Minimal = correlational studies; Maximum = lab experiments." },
    { q: "What is Grounded Theory?", a: "A research strategy where theory is developed inductively from data collected in the field — the theory is 'grounded' in the data." },
    { q: "What is Action Research?", a: "Research conducted collaboratively with practitioners to solve a practical problem while simultaneously generating knowledge." },
    { q: "Name the 6 main research strategies.", a: "Experiments, Survey Research, Ethnography, Case Studies, Grounded Theory, Action Research." },
    { q: "What are 'dyads' as a unit of analysis?", a: "Two-person pairs studied as a unit, e.g. a supervisor-subordinate pair or a buyer-seller relationship." },
  ],
  ch9: [
    { q: "What is a questionnaire?", a: "A preformulated written set of questions to which respondents record their answers, usually within closely defined alternatives." },
    { q: "What is a double-barreled question?", a: "A question that asks about two things at once, e.g. 'How satisfied are you with your salary and benefits?' — it should be two separate questions." },
    { q: "Name the 3 main types of questionnaires.", a: "1) Personally administered, 2) Mail questionnaires, 3) Electronic/online questionnaires." },
    { q: "What is a leading question?", a: "A question worded to suggest the expected answer, e.g. 'Don't you agree this policy is unfair?' This introduces response bias." },
    { q: "Where should sensitive questions go in a questionnaire?", a: "At the end. Build rapport first with neutral questions so respondents are more willing to answer sensitive ones." },
    { q: "What is a Likert-type question?", a: "A statement respondents rate on a scale (e.g. 1 = Strongly Disagree to 5 = Strongly Agree). It's a rating-type closed question." },
    { q: "What is social desirability bias?", a: "Respondents answer in a way they think is socially acceptable rather than giving their true response." },
    { q: "Advantage of personally administered questionnaires?", a: "Researcher is present to clarify doubts; higher response rate; faster collection; confidentiality can be assured on the spot." },
    { q: "Disadvantage of mail questionnaires?", a: "Typically very low response rates; no one present to clarify ambiguous questions; responses may be incomplete." },
    { q: "What is 'pretesting' a questionnaire?", a: "Administering the questionnaire to a small group before the full study to identify unclear items, remove ambiguity, and improve design." },
  ],
  ch11: [
    { q: "What is measurement (Sekaran & Bougie)?", a: "The assignment of numbers or other symbols to characteristics (attributes) of objects according to a prespecified set of rules." },
    { q: "What is operationalization?", a: "The process of specifying exactly how an abstract concept will be measured in a study — reducing it to observable, measurable indicators." },
    { q: "What are 'dimensions' of a concept?", a: "The sub-components or facets that together make up a concept. E.g., 'achievement motivation' has dimensions of work orientation, mastery, and competitiveness." },
    { q: "What are 'elements' in measurement?", a: "The specific questionnaire items or indicators used to measure each dimension of a concept." },
    { q: "Conceptual definition vs. operational definition?", a: "Conceptual: describes what the construct IS (like a dictionary definition). Operational: specifies HOW it will be measured." },
    { q: "Why is operationalization necessary?", a: "Because abstract concepts like 'motivation' or 'satisfaction' cannot be directly observed — they must be translated into measurable items." },
    { q: "What is a multi-dimensional concept?", a: "A concept that has more than one sub-component (dimension), each of which needs to be measured separately, e.g. job satisfaction has pay, supervisor, and work dimensions." },
  ],
  ch12: [
    { q: "Name the 4 scale types from lowest to highest.", a: "Nominal → Ordinal → Interval → Ratio (remember: NOIR)." },
    { q: "Key difference: interval vs. ratio scale?", a: "Ratio scales have a true zero (e.g. weight, income). Interval scales have no true zero (e.g. temperature, year, IQ)." },
    { q: "What is a nominal scale?", a: "Classifies items into mutually exclusive categories with no order or numerical meaning (e.g. gender, nationality, job title)." },
    { q: "What is an ordinal scale?", a: "Ranks items in order, but the distances between ranks are not equal or known (e.g. rank 1st, 2nd, 3rd in a competition)." },
    { q: "What is a Likert scale?", a: "Respondents indicate level of agreement (1 = Strongly Disagree to 5 = Strongly Agree). Items are summed to form a composite score." },
    { q: "What is a semantic differential scale?", a: "Bipolar adjectives at opposite ends of a continuum (e.g. Good ←——→ Bad). Used to measure attitudes or brand image." },
    { q: "Reliability vs. Validity?", a: "Reliability = consistency (same result each time). Validity = accuracy (measures what it claims to measure). Reliable ≠ valid; valid → must be reliable." },
    { q: "Name 3 types of validity.", a: "Content validity (covers all facets), Criterion-related validity (correlates with external criterion), Construct validity (measures the theoretical construct)." },
    { q: "What is internal consistency reliability?", a: "All items measuring the same construct should correlate. Measured by Cronbach's alpha — acceptable threshold is typically ≥ 0.70." },
    { q: "Reflective vs. formative scale?", a: "Reflective: construct causes the items (items should correlate). Formative: items together define the construct (needn't correlate). E.g. depression = reflective; SES = formative." },
  ],
  ch13: [
    { q: "Population vs. sample?", a: "Population = entire group of interest. Sample = subset selected from the population. Research is done on the sample; conclusions are generalised to the population." },
    { q: "What is a sampling frame?", a: "The actual list from which the sample is selected (e.g. employee roster, phone directory). It should represent the population closely." },
    { q: "What is simple random sampling (SRS)?", a: "Every element has an equal and independent chance of being selected. Uses random number tables or generators." },
    { q: "Stratified vs. cluster sampling?", a: "Stratified: population split by a characteristic, then random samples from each stratum. Cluster: naturally grouped clusters selected, then elements within clusters studied." },
    { q: "What is snowball sampling?", a: "Existing participants refer other potential participants. Used for hard-to-reach populations. A non-probability method." },
    { q: "Main advantage of probability sampling?", a: "Every element has a known, non-zero chance of selection — allows for statistical generalisation to the population." },
    { q: "Precision vs. confidence (sampling)?", a: "Precision = how close the sample estimate is to the true value (smaller margin of error). Confidence = probability the true value lies within the range. Both improve with larger samples." },
    { q: "What is convenience sampling?", a: "Selecting whoever is most easily accessible. Cheapest and fastest method but lowest external validity. Used in exploratory research." },
    { q: "What is quota sampling?", a: "Like stratified sampling but selection within strata is non-random. Ensures representation of key subgroups without using random selection." },
    { q: "What is systematic sampling?", a: "Every k-th element is selected from a list (e.g. every 10th person). Requires a sampling frame. Risk of periodicity bias if the list has a pattern." },
  ],
};

// ─────────────────────────────────────────────
// CHAPTER QUIZZES  (3–4 Qs per chapter)
// ─────────────────────────────────────────────
var CHAPTER_QUIZZES = {
  ch2: [
    { q: "A researcher finds their study results can be reproduced by others using the same methodology. Which hallmark does this demonstrate?", opts: ["Objectivity", "Replicability", "Parsimony", "Generalizability"], c: 1, fb: "Replicability means other researchers reproduce the same results under the same conditions and methods." },
    { q: "In the hypothetico-deductive method, what comes directly AFTER developing hypotheses?", opts: ["Identify the broad problem area", "Data analysis", "Determine measures", "Define the problem statement"], c: 2, fb: "Step 4 is 'Determine measures' — deciding how to operationalise and measure the variables specified in the hypotheses." },
    { q: "Which philosophy assumes reality is socially constructed and emphasises how people make sense of the world?", opts: ["Positivism", "Pragmatism", "Constructionism", "Critical Realism"], c: 2, fb: "Constructionism holds that reality is made through social interaction, and typically uses qualitative methods." },
    { q: "Which hallmark of science refers to drawing conclusions from data rather than the researcher's personal beliefs?", opts: ["Testability", "Rigor", "Objectivity", "Purposiveness"], c: 2, fb: "Objectivity means conclusions are based on empirical facts from the data, not on the researcher's subjective values." },
  ],
  ch6: [
    { q: "A researcher studies employee behaviour in a simulated office they designed. This is an example of:", opts: ["Non-contrived setting", "Field experiment", "Contrived setting", "Ethnography"], c: 2, fb: "A contrived setting is artificial and researcher-controlled. High internal validity but lower generalisability." },
    { q: "Which design collects data from a population at one single point in time?", opts: ["Longitudinal study", "Cross-sectional study", "Panel study", "Ex post facto study"], c: 1, fb: "Cross-sectional designs are 'snapshots' — cheaper and faster, but cannot track change over time." },
    { q: "A study collects data from individual employees in different departments. The unit of analysis is:", opts: ["The department", "The organisation", "The individual", "The dyad"], c: 2, fb: "When data is collected from and analysed at the level of individual people, the unit of analysis is the individual." },
    { q: "Which research strategy involves theory being developed inductively from data collected in the field?", opts: ["Survey Research", "Grounded Theory", "Action Research", "Experiment"], c: 1, fb: "Grounded theory builds theory bottom-up from the data — the theory is 'grounded' in what is observed." },
  ],
  ch9: [
    { q: "Which of the following is an example of a double-barreled question?", opts: ["How satisfied are you with your manager?", "Are you satisfied with your salary and working conditions?", "How often do you work overtime?", "Do you enjoy your job?"], c: 1, fb: "Double-barreled questions ask two things at once. Split 'salary AND working conditions' into two separate questions." },
    { q: "Mail questionnaires compared to personally administered ones typically have:", opts: ["Higher response rates", "Lower response rates but wider geographic reach", "Higher costs but better data quality", "Less risk of response bias"], c: 1, fb: "Mail questionnaires reach more people geographically at lower cost, but response rates are much lower with no researcher present." },
    { q: "Where should sensitive / personal questions (age, income) be placed in a questionnaire?", opts: ["At the very beginning", "In the middle for balance", "At the end, after less sensitive questions", "Randomly distributed"], c: 2, fb: "Sensitive questions go at the end. Rapport built through neutral questions first increases completion of sensitive items." },
    { q: "A question like 'Don't you agree our new policy is effective?' is an example of a:", opts: ["Double-barreled question", "Leading question", "Loaded question", "Open-ended question"], c: 1, fb: "Leading questions suggest the desired answer ('Don't you agree...'), introducing systematic bias into responses." },
  ],
  ch11: [
    { q: "Operationalisation is best defined as:", opts: ["Defining a concept in dictionary terms", "Specifying exactly how a concept will be measured", "Choosing the statistical analysis technique", "Developing the research question"], c: 1, fb: "Operationalisation translates abstract concepts into specific, measurable indicators — HOW you will measure it." },
    { q: "A researcher identifies 'competitiveness', 'work orientation', and 'mastery' as parts of achievement motivation. These parts are called:", opts: ["Elements", "Hypotheses", "Dimensions", "Indicators"], c: 2, fb: "Dimensions are the sub-components of a concept. Elements are the specific questionnaire items within each dimension." },
    { q: "What is the main difference between a conceptual and operational definition?", opts: ["A conceptual definition is more precise", "An operational definition specifies how to measure the concept", "They are the same thing", "Conceptual definitions are used only in qualitative research"], c: 1, fb: "Conceptual: what the construct IS. Operational: HOW it will be measured in this specific study." },
  ],
  ch12: [
    { q: "A researcher asks respondents to select their country of birth. This is which scale type?", opts: ["Ordinal", "Interval", "Nominal", "Ratio"], c: 2, fb: "Nominal scales classify into categories with no order or numeric meaning. Country of birth is just a label." },
    { q: "A scale consistently gives the same results across time, but doesn't measure the intended construct. It is:", opts: ["Valid but not reliable", "Reliable but not valid", "Both reliable and valid", "Neither reliable nor valid"], c: 1, fb: "A measure can be reliable (consistent) but invalid (measuring the wrong thing). Validity requires reliability, not vice versa." },
    { q: "In a formative scale, items:", opts: ["Are caused by the underlying construct", "Should all correlate highly", "Together define or cause the construct", "Must measure one single dimension"], c: 2, fb: "Formative items together create the construct (e.g. SES = income + education + job status). They don't need to correlate." },
    { q: "Which scale type has equal intervals between points AND a true zero?", opts: ["Nominal", "Ordinal", "Interval", "Ratio"], c: 3, fb: "Ratio scales have both equal distances between points and a meaningful zero (e.g. salary, weight, age)." },
  ],
  ch13: [
    { q: "In stratified random sampling, strata are created based on:", opts: ["Natural geographic clusters", "Specific characteristics of the population", "Convenience and accessibility", "Random allocation"], c: 1, fb: "Strata are based on meaningful characteristics (e.g. gender, department). Random samples are drawn from each stratum." },
    { q: "Which method is most appropriate for studying homeless individuals in a city?", opts: ["Simple random sampling", "Stratified random sampling", "Snowball sampling", "Systematic sampling"], c: 2, fb: "Snowball sampling is ideal for hard-to-reach populations where no sampling frame exists." },
    { q: "The main advantage of probability over non-probability sampling is:", opts: ["It is cheaper and faster", "It allows statistical generalisation to the population", "It does not require a sampling frame", "It is easier to implement"], c: 1, fb: "Known selection probabilities allow statistical inference — you can generalise findings to the whole population." },
    { q: "A researcher selects every 10th name from an employee list. This is:", opts: ["Simple random sampling", "Cluster sampling", "Systematic sampling", "Quota sampling"], c: 2, fb: "Systematic sampling selects every k-th element from a list. It requires a sampling frame and risks periodicity bias." },
  ],
};

// ─────────────────────────────────────────────
// FILL-IN-THE-BLANK EXERCISES
// ─────────────────────────────────────────────
var FILL_EXERCISES = {
  ch2: {
    sentence: 'Scientific research enables findings to be stated with accuracy and [confidence]. The simplest model that explains a phenomenon reflects the hallmark of [parsimony]. In the hypothetico-deductive method, step 3 is to develop [hypotheses].',
    blanks: [
      { id: 'fb-ch2-1', answers: ['confidence'] },
      { id: 'fb-ch2-2', answers: ['parsimony'] },
      { id: 'fb-ch2-3', answers: ['hypotheses', 'hypothesis'] },
    ],
  },
  ch6: {
    sentence: 'A research design is a [blueprint] or plan for collection, measurement, and analysis of data. An artificial, researcher-controlled environment is called a [contrived] setting. Data collected from the same group over multiple time points describes a [longitudinal] study.',
    blanks: [
      { id: 'fb-ch6-1', answers: ['blueprint'] },
      { id: 'fb-ch6-2', answers: ['contrived'] },
      { id: 'fb-ch6-3', answers: ['longitudinal'] },
    ],
  },
  ch9: {
    sentence: 'A question asking "Are you satisfied with your salary and benefits?" is a [double-barreled] question. Sensitive questions should be placed at the [end] of a questionnaire. A question like "Don\'t you agree this is fair?" is a [leading] question.',
    blanks: [
      { id: 'fb-ch9-1', answers: ['double-barreled', 'double barreled', 'double-barrelled'] },
      { id: 'fb-ch9-2', answers: ['end', 'back'] },
      { id: 'fb-ch9-3', answers: ['leading'] },
    ],
  },
  ch11: {
    sentence: 'Measurement is the assignment of [numbers] to characteristics of objects. The sub-components of a concept are [dimensions], while the specific survey items that measure each sub-component are [elements].',
    blanks: [
      { id: 'fb-ch11-1', answers: ['numbers', 'numbers or symbols', 'numbers or other symbols'] },
      { id: 'fb-ch11-2', answers: ['dimensions'] },
      { id: 'fb-ch11-3', answers: ['elements'] },
    ],
  },
  ch12: {
    sentence: 'The four scale types from low to high are: nominal, [ordinal], interval, and [ratio]. A measure that consistently yields the same result is [reliable]; a measure that actually measures what it claims is [valid].',
    blanks: [
      { id: 'fb-ch12-1', answers: ['ordinal'] },
      { id: 'fb-ch12-2', answers: ['ratio'] },
      { id: 'fb-ch12-3', answers: ['reliable', 'reliability'] },
      { id: 'fb-ch12-4', answers: ['valid', 'validity'] },
    ],
  },
  ch13: {
    sentence: 'The entire group of interest is the [population], while a subset of it is the [sample]. The actual list from which the sample is drawn is the [sampling frame]. Selecting every k-th element from a list describes [systematic] sampling.',
    blanks: [
      { id: 'fb-ch13-1', answers: ['population'] },
      { id: 'fb-ch13-2', answers: ['sample'] },
      { id: 'fb-ch13-3', answers: ['sampling frame'] },
      { id: 'fb-ch13-4', answers: ['systematic'] },
    ],
  },
};

// ─────────────────────────────────────────────
// MATCHING EXERCISES
// ─────────────────────────────────────────────
var MATCH_EXERCISES = {
  ch2: {
    pairs: [
      { term: 'Positivism',       def: 'Objective external reality; quantitative' },
      { term: 'Constructionism',  def: 'Reality is socially constructed; qualitative' },
      { term: 'Critical Realism', def: 'Real structures exist but knowledge is provisional' },
      { term: 'Pragmatism',       def: 'Use whatever method fits the question' },
    ],
  },
  ch6: {
    pairs: [
      { term: 'Experiment',       def: 'Researcher manipulates the IV' },
      { term: 'Ethnography',      def: 'In-depth study in natural setting over time' },
      { term: 'Case Study',       def: 'Detailed investigation of one or few cases' },
      { term: 'Action Research',  def: 'Collaborative research to solve a practical problem' },
    ],
  },
  ch9: {
    pairs: [
      { term: 'Open-ended',       def: 'Respondent answers in own words' },
      { term: 'Dichotomous',      def: 'Only two answer options (Yes/No)' },
      { term: 'Rating scale',     def: 'E.g. 1 = Strongly Disagree, 5 = Strongly Agree' },
      { term: 'Leading question', def: 'Wording that suggests the expected answer' },
    ],
  },
  ch11: {
    pairs: [
      { term: 'Operationalisation', def: 'Specifying how a concept will be measured' },
      { term: 'Dimension',          def: 'Sub-component or facet of a concept' },
      { term: 'Element',            def: 'Specific questionnaire item for a dimension' },
      { term: 'Conceptual def.',    def: 'Dictionary-type definition of a construct' },
    ],
  },
  ch12: {
    pairs: [
      { term: 'Nominal scale',  def: 'Categories; no order (e.g. gender)' },
      { term: 'Ordinal scale',  def: 'Ranked order; unequal distances (e.g. 1st, 2nd, 3rd)' },
      { term: 'Interval scale', def: 'Equal distances; no true zero (e.g. IQ, °C)' },
      { term: 'Ratio scale',    def: 'Equal distances + true zero (e.g. salary, weight)' },
    ],
  },
  ch13: {
    pairs: [
      { term: 'SRS',                def: 'Every element has equal chance; random numbers' },
      { term: 'Stratified sampling',def: 'Random sample from each subgroup/stratum' },
      { term: 'Cluster sampling',   def: 'Natural groups selected; elements within studied' },
      { term: 'Snowball sampling',  def: 'Participants refer further participants; hard-to-reach' },
    ],
  },
};

// ─────────────────────────────────────────────
// LARGE MOCK EXAM QUESTION BANK
// 60 questions across all chapters
// ─────────────────────────────────────────────
var MOCK_BANK = [
  // ─── CHAPTER 2 ───
  { ch:'Ch.2', q:"Which hallmark ensures findings can be applied to settings beyond the original study?", opts:["Parsimony","Replicability","Generalizability","Rigor"], c:2, fb:"Generalizability refers to the extent to which findings can be extended to other contexts, populations, and settings." },
  { ch:'Ch.2', q:"A researcher uses the simplest theoretical model that explains a phenomenon. This reflects:", opts:["Objectivity","Parsimony","Precision","Purposiveness"], c:1, fb:"Parsimony = economy in explanation. The simplest adequate model is preferred over an unnecessarily complex one." },
  { ch:'Ch.2', q:"In the hypothetico-deductive method, what is the FIRST step?", opts:["Develop hypotheses","Define problem statement","Identify broad problem area","Collect data"], c:2, fb:"Step 1 is identifying a broad problem area — recognising something in the environment that warrants investigation." },
  { ch:'Ch.2', q:"Precision in research refers to:", opts:["The probability the true value is in the confidence interval","How close the finding is to the true population value","The degree to which results can be replicated","The absence of researcher bias"], c:1, fb:"Precision = closeness of the sample estimate to the true population value. Measured by the standard error (margin of error)." },
  { ch:'Ch.2', q:"After collecting data in the hypothetico-deductive method, what comes next?", opts:["Develop hypotheses","Determine measures","Data analysis","Define the problem statement"], c:2, fb:"The order is: collect data (step 5) → analyse data (step 6) → interpret results (step 7)." },
  { ch:'Ch.2', q:"'Rigor' as a hallmark of science means:", opts:["The study uses quantitative methods","Carefulness, exactitude, and soundness of methodology","The study can be replicated","Conclusions are free from subjectivity"], c:1, fb:"Rigor means the study is conducted with great care: a sound theoretical base and sound methodological design." },
  { ch:'Ch.2', q:"Which research philosophy holds that research should use whichever method works best for the question?", opts:["Positivism","Constructionism","Critical Realism","Pragmatism"], c:3, fb:"Pragmatism is not committed to one philosophy; it selects methods based on what is useful and what works for the specific question." },
  { ch:'Ch.2', q:"'Purposiveness' as a hallmark of science means the research:", opts:["Can be replicated","Has a clear, defined aim","Is free from researcher bias","Produces generalisable results"], c:1, fb:"Purposiveness = the research has a definite purpose or focus. The researcher is not just exploring randomly." },
  { ch:'Ch.2', q:"A researcher states they are 95% confident the true mean salary lies between €30,000 and €35,000. The '95%' refers to:", opts:["Precision","Replicability","Confidence","Objectivity"], c:2, fb:"The 95% confidence level means there is a 95% probability that the true population value falls within the stated range." },
  { ch:'Ch.2', q:"Constructionism as a research philosophy is associated with:", opts:["Objective reality independent of the observer","Quantitative, value-free research","Interpretive and qualitative approaches","The hypothetico-deductive method"], c:2, fb:"Constructionism holds reality is socially constructed, favouring qualitative methods that explore how people make sense of their world." },

  // ─── CHAPTER 6 ───
  { ch:'Ch.6', q:"What is a research design?", opts:["A list of hypotheses to test","A plan for data collection, measurement, and analysis","The statistical method used to analyse data","The theoretical framework guiding the study"], c:1, fb:"A research design is the blueprint or plan that guides how data will be collected, measured, and analysed to answer the research questions." },
  { ch:'Ch.6', q:"A study conducted in the natural workplace setting without researcher manipulation uses a:", opts:["Contrived setting","Non-contrived setting","Laboratory setting","Controlled experiment"], c:1, fb:"Non-contrived settings are natural environments (e.g. the actual workplace). They offer higher external validity but less control." },
  { ch:'Ch.6', q:"Internal validity is HIGHEST in which study setting?", opts:["Non-contrived (field)","Ethnographic","Contrived (lab)","Case study"], c:2, fb:"Contrived (lab) settings give maximum control over variables, resulting in the highest internal validity." },
  { ch:'Ch.6', q:"A HR researcher surveys 500 employees at a single point in time. This is a:", opts:["Longitudinal study","Panel study","Cross-sectional study","Case study"], c:2, fb:"Cross-sectional design: data collected from a sample at one point in time — a 'snapshot' of the current situation." },
  { ch:'Ch.6', q:"Which unit of analysis would you use when studying supervisor–subordinate relationships?", opts:["Individual","Dyad","Group","Organisation"], c:1, fb:"Dyads are two-person units (pairs). A supervisor–subordinate pair is the classic example of a dyad as the unit of analysis." },
  { ch:'Ch.6', q:"Compared to cross-sectional designs, longitudinal designs are better for:", opts:["Reducing cost","Establishing temporal ordering and tracking change","Collecting data faster","Minimising researcher bias"], c:1, fb:"Longitudinal designs track the same subjects over time, allowing researchers to establish what came first and how things change." },
  { ch:'Ch.6', q:"Action Research is characterised by:", opts:["Pure theory development","Collaboration with practitioners to solve real problems","Large random samples","Laboratory manipulation of variables"], c:1, fb:"Action Research is conducted with practitioners and aims to simultaneously solve a practical problem AND generate knowledge." },
  { ch:'Ch.6', q:"A researcher manipulates the lighting in an office to study its effect on productivity. This is:", opts:["Survey research","Ethnography","An experiment","A case study"], c:2, fb:"Experiments involve manipulation of an independent variable (lighting) to observe its effect on the dependent variable (productivity)." },
  { ch:'Ch.6', q:"Mixed methods research refers to:", opts:["Using both structured and unstructured interviews","Combining quantitative and qualitative approaches","Using data from multiple countries","Collecting data from multiple time periods"], c:1, fb:"Mixed methods combines quantitative (numbers, statistics) and qualitative (text, observations) approaches in one study." },
  { ch:'Ch.6', q:"Extent of researcher interference refers to:", opts:["How many researchers are involved in the study","How much the researcher manipulates or controls variables","The geographic scope of the study","How long the data collection process takes"], c:1, fb:"From minimal interference (correlational: studying things as they are) to maximum (lab experiment: manipulating variables)." },

  // ─── CHAPTER 9 ───
  { ch:'Ch.9', q:"A questionnaire sent by post to participants is called a:", opts:["Personally administered questionnaire","Mail questionnaire","Electronic questionnaire","Structured interview"], c:1, fb:"Mail questionnaires are posted to respondents. Wide geographic reach but typically very low response rates." },
  { ch:'Ch.9', q:"The question 'Are you happy with your pay and your colleagues?' is problematic because it is:", opts:["Open-ended","Leading","Double-barreled","Loaded"], c:2, fb:"Double-barreled questions cover two issues at once. A respondent may feel differently about pay vs. colleagues — they must be separated." },
  { ch:'Ch.9', q:"Which data collection method generally has the LOWEST response rate?", opts:["Personal interview","Personally administered questionnaire","Mail questionnaire","Telephone survey"], c:2, fb:"Mail questionnaires typically have the lowest response rates as there is no researcher present to motivate completion." },
  { ch:'Ch.9', q:"Pretesting a questionnaire means:", opts:["Piloting it on a small group before the full study","Using it in previous studies","Testing it for statistical reliability","Sending it to experts for review only"], c:0, fb:"Pretesting (pilot testing) involves administering the questionnaire to a small sample to identify unclear questions and improve the design." },
  { ch:'Ch.9', q:"'Socially desirable responding' in questionnaires refers to:", opts:["Respondents being polite to the researcher","Answering to appear socially acceptable rather than truthfully","Questions being designed to be likeable","Using social media to distribute the questionnaire"], c:1, fb:"Social desirability bias occurs when respondents answer the way they think they should, not how they actually feel." },
  { ch:'Ch.9', q:"The main advantage of electronic/online questionnaires over mail questionnaires is:", opts:["Lower risk of sampling bias","Faster turnaround and lower cost","Higher response rates always","Better for measuring sensitive topics"], c:1, fb:"Online questionnaires are faster and cheaper to distribute, can reach large samples, and data can be directly imported." },
  { ch:'Ch.9', q:"Questions about demographic information (age, gender, income) should ideally be placed:", opts:["At the beginning to screen participants","In the middle of the questionnaire","At the end","Distributed randomly"], c:2, fb:"Demographic questions go at the end. Completing substantive questions first builds willingness to answer more personal items." },
  { ch:'Ch.9', q:"An open-ended question in a questionnaire:", opts:["Provides fixed answer categories","Allows respondents to answer in their own words","Uses a rating scale","Has only yes or no options"], c:1, fb:"Open-ended questions give respondents freedom to answer freely in their own words. They generate rich qualitative data." },

  // ─── CHAPTER 11 ───
  { ch:'Ch.11', q:"Measurement, according to Sekaran & Bougie, is:", opts:["Describing a concept theoretically","Assigning numbers to characteristics of objects per set rules","Selecting the right statistical test","Developing a theoretical framework"], c:1, fb:"Measurement = the assignment of numbers or other symbols to characteristics of objects according to a prespecified set of rules." },
  { ch:'Ch.11', q:"Operationalising 'employee loyalty' would involve:", opts:["Defining loyalty conceptually","Specifying the questionnaire items used to measure loyalty","Writing the hypothesis about loyalty","Selecting the sampling method"], c:1, fb:"Operationalisation specifies exactly HOW loyalty will be measured — the specific items, scales, and procedures used." },
  { ch:'Ch.11', q:"'Work orientation', 'mastery', and 'competitiveness' are dimensions of achievement motivation. The specific survey questions measuring 'mastery' are called:", opts:["Dimensions","Hypotheses","Elements","Constructs"], c:2, fb:"Elements are the specific questionnaire items or indicators used to measure each dimension of a concept." },
  { ch:'Ch.11', q:"Which of the following is an example of operationalisation?", opts:["Defining leadership as 'the ability to influence others'","Measuring leadership by a 10-item validated Likert scale","Hypothesising that leadership affects performance","Using an interview to explore leadership styles"], c:1, fb:"Operationalisation specifies HOW to measure — using a 10-item scale specifies the exact measurement procedure." },
  { ch:'Ch.11', q:"Operationalisation is NOT necessary when:", opts:["The concept is multidimensional","The concept is abstract or subjective","The concept can be directly physically measured","The concept appears in a hypothesis"], c:2, fb:"Physical attributes like height or weight can be directly measured with instruments — operationalisation is needed for abstract concepts." },

  // ─── CHAPTER 12 ───
  { ch:'Ch.12', q:"Measuring annual sales revenue in euros is an example of a:", opts:["Nominal scale","Ordinal scale","Interval scale","Ratio scale"], c:3, fb:"Revenue in euros has equal intervals AND a true zero (€0 = no revenue), making it a ratio scale." },
  { ch:'Ch.12', q:"A Likert scale where 1 = Strongly Disagree and 5 = Strongly Agree is typically treated as:", opts:["Nominal","Ordinal or interval","Ratio","Dichotomous"], c:1, fb:"Likert scales are formally ordinal (ranks without equal distances) but are often treated as interval in practice for statistical analysis." },
  { ch:'Ch.12', q:"Cronbach's alpha is a measure of:", opts:["Construct validity","Criterion-related validity","Internal consistency reliability","Test-retest reliability"], c:2, fb:"Cronbach's alpha measures internal consistency — whether items that are supposed to measure the same construct correlate." },
  { ch:'Ch.12', q:"Content validity means a scale:", opts:["Correlates with an external criterion","Measures the intended theoretical construct","Covers all relevant facets of the concept","Is consistent over time"], c:2, fb:"Content validity ensures the items represent all facets/dimensions of the concept being measured, not just some." },
  { ch:'Ch.12', q:"A thermometer always reads 2°C too high. It is:", opts:["Valid but not reliable","Reliable but not valid","Both valid and reliable","Neither valid nor reliable"], c:1, fb:"Consistently wrong = reliable (same reading every time) but not valid (not measuring the true temperature)." },
  { ch:'Ch.12', q:"In a reflective scale, items:", opts:["Cause the latent construct","Are caused by the latent construct","Form the construct by their combination","Do not need to correlate with each other"], c:1, fb:"In reflective scales, the latent construct causes the observed items. If the construct changes, all items should change accordingly." },
  { ch:'Ch.12', q:"A semantic differential scale measures:", opts:["Frequency of behaviour","Level of agreement with statements","Attitudes using bipolar adjectives at each end","Number of occurrences of events"], c:2, fb:"Semantic differential uses opposing adjectives (e.g. Good ←——→ Bad) to measure attitudes or perceptions." },
  { ch:'Ch.12', q:"An interval scale differs from a ratio scale in that it:", opts:["Has no equal distances","Lacks a true zero point","Cannot be used for statistical analysis","Has fewer categories"], c:1, fb:"Interval scales have equal distances but no true zero — so ratios are meaningless (you can't say 20°C is 'twice as hot' as 10°C)." },

  // ─── CHAPTER 13 ───
  { ch:'Ch.13', q:"The list from which a sample is actually selected is called the:", opts:["Population","Sampling unit","Sampling frame","Element"], c:2, fb:"The sampling frame is the operational list of sampling units — it should represent the population as closely as possible." },
  { ch:'Ch.13', q:"A researcher selects every 8th employee from the HR database. This is:", opts:["Simple random sampling","Stratified sampling","Cluster sampling","Systematic sampling"], c:3, fb:"Systematic sampling selects every k-th element from a list. Here k = 8 — requires a complete ordered sampling frame." },
  { ch:'Ch.13', q:"Dividing the population by gender, then randomly sampling from males and females separately, is:", opts:["Cluster sampling","Systematic sampling","Stratified random sampling","Quota sampling"], c:2, fb:"Stratified random sampling divides the population into strata (here: gender) and draws a random sample from each." },
  { ch:'Ch.13', q:"Convenience sampling has the main disadvantage of:", opts:["Being too expensive","Having very low external validity / generalisability","Requiring a sampling frame","Being very slow to execute"], c:1, fb:"Convenience samples select whoever is accessible, which may not represent the population — lowest external validity." },
  { ch:'Ch.13', q:"A researcher increases the sample size. What effect does this have?", opts:["Increases standard error","Decreases both precision and confidence","Increases both precision and confidence","Has no effect on precision or confidence"], c:2, fb:"Larger samples reduce the standard error, increasing precision (smaller margin of error) and confidence simultaneously." },
  { ch:'Ch.13', q:"Cluster sampling differs from stratified sampling in that:", opts:["Stratified uses random selection; cluster does not","Clusters are naturally occurring groups; strata are researcher-defined","Cluster is a non-probability method","Stratified only works for small populations"], c:1, fb:"Clusters are naturally occurring groups (e.g. schools, hospitals). In stratified sampling, the researcher defines the strata based on characteristics." },
  { ch:'Ch.13', q:"Which of the following is a non-probability sampling method?", opts:["Simple random sampling","Systematic sampling","Stratified random sampling","Quota sampling"], c:3, fb:"Quota sampling is non-probability: the researcher non-randomly selects people to fill predefined quotas for each subgroup." },
  { ch:'Ch.13', q:"Statistical generalisation from sample to population is possible ONLY when using:", opts:["Large samples","Non-probability sampling","Probability sampling","Convenience sampling"], c:2, fb:"Only probability sampling — where every element has a known selection probability — allows valid statistical generalisation." },
  { ch:'Ch.13', q:"'Theoretical saturation' in qualitative sampling means:", opts:["The sample size has exceeded 100","No new information emerges from additional cases","The sampling frame is exhausted","Statistical significance has been reached"], c:1, fb:"In qualitative/theoretical sampling, you stop adding cases when new data no longer add new insights — theoretical saturation." },
  { ch:'Ch.13', q:"A trade-off between precision and confidence means that for a FIXED sample size:", opts:["You can maximise both simultaneously","Increasing confidence reduces precision","Increasing precision increases confidence","Neither can be changed"], c:1, fb:"For a fixed n, widening the confidence interval (more confident) means a less precise estimate and vice versa. Larger n improves both." },
];