/**
 * Finnish Vocabulary Quiz App
 * Data Structures and Algorithms - Web Development Practice
 */

// ==========================================
// VOCABULARY DATA (85 words)
// ==========================================

const vocabularyData = [
  // Education - Basic Terms
  { finnish: "(oppi)tunti", english: "class period", category: "Education" },
  { finnish: "kurssi", english: "course", category: "Education" },
  { finnish: "luento", english: "lecture", category: "Education" },
  { finnish: "seminaari", english: "seminar", category: "Education" },
  { finnish: "lukukausi", english: "semester", category: "Education" },
  { finnish: "lukuvuosi", english: "academic year", category: "Education" },
  {
    finnish: "jakso / periodi",
    english: "period / term",
    category: "Education",
  },
  { finnish: "opinnot", english: "studies", category: "Education" },

  // Education - People
  {
    finnish: "opiskelija",
    english: "university student",
    category: "Education",
  },
  {
    finnish: "oppilas",
    english: "pupil / school student",
    category: "Education",
  },
  { finnish: "opettaja", english: "teacher", category: "Education" },

  // Education - Verbs
  { finnish: "opiskella", english: "to study", category: "Education" },
  { finnish: "oppia", english: "to learn", category: "Education" },
  {
    finnish: "opetella",
    english: "to practise / learn",
    category: "Education",
  },
  { finnish: "harjoitella", english: "to practise", category: "Education" },
  { finnish: "opettaa", english: "to teach", category: "Education" },

  // Education - Exams & Grades
  { finnish: "koe", english: "test", category: "Education" },
  { finnish: "tentti", english: "exam", category: "Education" },
  {
    finnish: "ylioppilaskirjoitukset",
    english: "matriculation examination",
    category: "Education",
  },
  { finnish: "valintakoe", english: "entrance exam", category: "Education" },
  { finnish: "pääsykoe", english: "entrance exam", category: "Education" },
  { finnish: "arvosana", english: "grade", category: "Education" },
  {
    finnish: "todistus",
    english: "certificate / report",
    category: "Education",
  },
  { finnish: "tutkinto", english: "degree", category: "Education" },

  // Education - Actions
  {
    finnish: "käydä koulua",
    english: "to go to school",
    category: "Education",
  },
  {
    finnish: "kirjoittaa ylioppilaaksi",
    english: "to graduate from upper secondary school",
    category: "Education",
  },
  { finnish: "hakea", english: "to apply", category: "Education" },
  { finnish: "pyrkiä", english: "to aim / apply", category: "Education" },
  { finnish: "päästä", english: "to get in", category: "Education" },
  { finnish: "ilmoittautua", english: "to register", category: "Education" },
  { finnish: "osallistua", english: "to participate", category: "Education" },
  { finnish: "valmistua", english: "to graduate", category: "Education" },

  // Job Search
  { finnish: "työpaikka", english: "job / position", category: "Job Search" },
  { finnish: "työtehtävä", english: "job duties", category: "Job Search" },
  { finnish: "työnhakija", english: "job seeker", category: "Job Search" },
  {
    finnish: "hakea töitä",
    english: "to apply for jobs",
    category: "Job Search",
  },
  { finnish: "työhakemus", english: "job application", category: "Job Search" },
  { finnish: "ansioluettelo", english: "résumé", category: "Job Search" },
  { finnish: "CV", english: "CV", category: "Job Search" },
  {
    finnish: "työhaastattelu",
    english: "job interview",
    category: "Job Search",
  },
  { finnish: "työkokemus", english: "work experience", category: "Job Search" },
  {
    finnish: "työharjoittelu",
    english: "internship / work placement",
    category: "Job Search",
  },
  {
    finnish: "harjoittelija",
    english: "trainee / intern",
    category: "Job Search",
  },

  // Personal Qualities
  { finnish: "ahkera", english: "hardworking", category: "Personal Qualities" },
  {
    finnish: "ammattitaitoinen",
    english: "skilled / professional",
    category: "Personal Qualities",
  },
  { finnish: "avoin", english: "open", category: "Personal Qualities" },
  { finnish: "avulias", english: "helpful", category: "Personal Qualities" },
  {
    finnish: "huolellinen",
    english: "careful / thorough",
    category: "Personal Qualities",
  },
  {
    finnish: "huumorintajuinen",
    english: "has a sense of humor",
    category: "Personal Qualities",
  },
  {
    finnish: "järjestelmällinen",
    english: "organized",
    category: "Personal Qualities",
  },
  {
    finnish: "kokenut",
    english: "experienced",
    category: "Personal Qualities",
  },
  {
    finnish: "kunnianhimoinen",
    english: "ambitious",
    category: "Personal Qualities",
  },
  {
    finnish: "kärsivällinen",
    english: "patient",
    category: "Personal Qualities",
  },
  {
    finnish: "luotettava",
    english: "reliable",
    category: "Personal Qualities",
  },
  { finnish: "luova", english: "creative", category: "Personal Qualities" },
  {
    finnish: "oma-aloitteinen",
    english: "proactive",
    category: "Personal Qualities",
  },
  { finnish: "pätevä", english: "competent", category: "Personal Qualities" },
  { finnish: "rauhallinen", english: "calm", category: "Personal Qualities" },
  { finnish: "sosiaalinen", english: "social", category: "Personal Qualities" },
  {
    finnish: "täsmällinen",
    english: "punctual",
    category: "Personal Qualities",
  },
  {
    finnish: "vastuuntuntoinen",
    english: "responsible",
    category: "Personal Qualities",
  },

  // Finnish Education System - Early
  {
    finnish: "varhaiskasvatus",
    english: "early childhood education",
    category: "Education System",
  },
  { finnish: "päiväkoti", english: "daycare", category: "Education System" },
  { finnish: "esikoulu", english: "preschool", category: "Education System" },
  {
    finnish: "peruskoulu",
    english: "comprehensive school",
    category: "Education System",
  },
  {
    finnish: "alakoulu",
    english: "primary school",
    category: "Education System",
  },
  {
    finnish: "yläkoulu",
    english: "lower secondary school",
    category: "Education System",
  },

  // Finnish Education System - Secondary & Higher
  {
    finnish: "toinen aste",
    english: "upper secondary level",
    category: "Education System",
  },
  {
    finnish: "lukio",
    english: "upper secondary school",
    category: "Education System",
  },
  {
    finnish: "ammattikoulu",
    english: "vocational school",
    category: "Education System",
  },
  {
    finnish: "ylioppilas",
    english: "high school graduate",
    category: "Education System",
  },
  {
    finnish: "korkeakoulut",
    english: "higher education institutions",
    category: "Education System",
  },
  { finnish: "yliopisto", english: "university", category: "Education System" },
  {
    finnish: "ammattikorkeakoulu",
    english: "university of applied sciences",
    category: "Education System",
  },

  // Degrees
  {
    finnish: "kandidaatti",
    english: "bachelor's degree",
    category: "Education System",
  },
  {
    finnish: "maisteri",
    english: "master's degree",
    category: "Education System",
  },
  {
    finnish: "tohtori",
    english: "doctorate / PhD",
    category: "Education System",
  },
  {
    finnish: "alempi AMK-tutkinto",
    english: "bachelor's degree (UAS)",
    category: "Education System",
  },
  {
    finnish: "ylempi AMK-tutkinto",
    english: "master's degree (UAS)",
    category: "Education System",
  },
];

// ==========================================
// QUIZ STATE
// ==========================================

let currentQuestion = 0;
let score = 0;
let correct = 0;
let wrong = 0;
let mistakes = [];
let shuffledQuestions = [];

// ==========================================
// DOM ELEMENTS
// ==========================================

const screens = {
  start: document.getElementById("startScreen"),
  quiz: document.getElementById("quizScreen"),
  results: document.getElementById("resultsScreen"),
  review: document.getElementById("reviewScreen"),
};

const elements = {
  finnishWord: document.getElementById("finnishWord"),
  optionsContainer: document.getElementById("optionsContainer"),
  feedback: document.getElementById("feedback"),
  feedbackIcon: document.getElementById("feedbackIcon"),
  feedbackText: document.getElementById("feedbackText"),
  nextBtn: document.getElementById("nextBtn"),
  currentQ: document.getElementById("currentQ"),
  totalQ: document.getElementById("totalQ"),
  score: document.getElementById("score"),
  progressFill: document.getElementById("progressFill"),
  finalScore: document.getElementById("finalScore"),
  correctCount: document.getElementById("correctCount"),
  wrongCount: document.getElementById("wrongCount"),
  totalCount: document.getElementById("totalCount"),
  performanceMessage: document.getElementById("performanceMessage"),
  mistakesList: document.getElementById("mistakesList"),
};

// ==========================================
// FUNCTIONS
// ==========================================

function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function getRandomOptions(correctAnswer, allWords, count = 4) {
  const options = [correctAnswer];
  const otherWords = allWords.filter((w) => w.english !== correctAnswer);

  while (options.length < count) {
    const randomWord =
      otherWords[Math.floor(Math.random() * otherWords.length)];
    if (!options.includes(randomWord.english)) {
      options.push(randomWord.english);
    }
  }

  return shuffleArray(options);
}

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
  screens[screenName].classList.add("active");
}

function updateProgress() {
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100;
  elements.progressFill.style.width = `${progress}%`;
  elements.currentQ.textContent = currentQuestion + 1;
  elements.score.textContent = score;
}

function loadQuestion() {
  const question = shuffledQuestions[currentQuestion];
  elements.finnishWord.textContent = question.finnish;
  elements.totalQ.textContent = shuffledQuestions.length;

  const options = getRandomOptions(question.english, vocabularyData);

  elements.optionsContainer.innerHTML = "";
  options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "btn-option";
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option, question.english);
    elements.optionsContainer.appendChild(btn);
  });

  elements.feedback.classList.add("hidden");
  elements.nextBtn.classList.add("hidden");

  updateProgress();
}

function checkAnswer(selected, correct) {
  const buttons = elements.optionsContainer.querySelectorAll(".btn-option");

  buttons.forEach((btn) => {
    btn.classList.add("disabled");
    btn.onclick = null;

    if (btn.textContent === correct) {
      btn.classList.add("correct");
    } else if (btn.textContent === selected && selected !== correct) {
      btn.classList.add("wrong");
    }
  });

  const isCorrect = selected === correct;

  if (isCorrect) {
    score++;
    correct++;
    elements.feedbackIcon.textContent = "✅";
    elements.feedbackText.textContent = "Correct!";
    elements.feedback.className = "feedback correct";
  } else {
    wrong++;
    elements.feedbackIcon.textContent = "❌";
    elements.feedbackText.textContent = `The correct answer is: ${correct}`;
    elements.feedback.className = "feedback wrong";

    mistakes.push({
      finnish: shuffledQuestions[currentQuestion].finnish,
      correct: correct,
      wrong: selected,
    });
  }

  elements.feedback.classList.remove("hidden");
  elements.nextBtn.classList.remove("hidden");
}

function showResults() {
  const percentage = Math.round((correct / shuffledQuestions.length) * 100);

  elements.finalScore.textContent = percentage;
  elements.correctCount.textContent = correct;
  elements.wrongCount.textContent = wrong;
  elements.totalCount.textContent = shuffledQuestions.length;

  let message = "";
  let className = "";

  if (percentage >= 80) {
    message = "🌟 Excellent! You're mastering Finnish vocabulary!";
    className = "excellent";
  } else if (percentage >= 60) {
    message = "👍 Good job! Keep practicing to improve further.";
    className = "good";
  } else {
    message = "📚 Keep practicing! Review the words and try again.";
    className = "needs-practice";
  }

  elements.performanceMessage.textContent = message;
  elements.performanceMessage.className = `performance-msg ${className}`;

  showScreen("results");
}

function showMistakes() {
  elements.mistakesList.innerHTML = "";

  if (mistakes.length === 0) {
    elements.mistakesList.innerHTML = "<p>🎉 No mistakes! Perfect score!</p>";
  } else {
    mistakes.forEach((mistake) => {
      const div = document.createElement("div");
      div.className = "mistake-item";
      div.innerHTML = `
                <div class="finnish">${mistake.finnish}</div>
                <div>Your answer: <span class="your-answer">${mistake.wrong}</span></div>
                <div>Correct: <span class="correct-answer">${mistake.correct}</span></div>
            `;
      elements.mistakesList.appendChild(div);
    });
  }

  showScreen("review");
}

function startQuiz() {
  shuffledQuestions = shuffleArray(vocabularyData);
  currentQuestion = 0;
  score = 0;
  correct = 0;
  wrong = 0;
  mistakes = [];

  showScreen("quiz");
  loadQuestion();
}

function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < shuffledQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
}

// ==========================================
// EVENT LISTENERS
// ==========================================

document.getElementById("startBtn").addEventListener("click", startQuiz);
document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("restartBtn").addEventListener("click", startQuiz);
document.getElementById("reviewBtn").addEventListener("click", showMistakes);
document
  .getElementById("backToResults")
  .addEventListener("click", () => showScreen("results"));

// ==========================================
// INITIALIZE
// ==========================================

console.log("🇫🇮 Finnish Quiz App Loaded!");
console.log(`Total vocabulary words: ${vocabularyData.length}`);
