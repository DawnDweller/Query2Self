const questions = [
  // EI: Extraversion / Introversion
  {
    text: "In a group project, you tend to...",
    answers: [
      "Jump in, lead discussions, and keep everyone energized.",
      "Stay mostly quiet, helping in the background.",
      "Share ideas when asked, but avoid the spotlight.",
      "Take charge of organizing tasks but not verbal discussions.",
    ],
    answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
    dimension: "EI",
     image: "images/questions/q01.png",
  },
  {
    text: "When making plans for the weekend, you usually...",
    answers: [
      "Look for a big social event or party.",
      "Prefer a calm time alone with a book, game, or show.",
      "Enjoy a small hangout with one or two close friends.",
      "Say yes to spontaneous invites if they come up.",
    ],
    answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
    dimension: "EI",
     image: "images/questions/q02.png",
  },
  {
    text: "At a large social event, you are more likely to...",
    answers: [
      "Move around and talk to many different people.",
      "Stick with a familiar person or small group.",
      "Introduce people to each other and keep conversations flowing.",
      "Find a quieter corner and observe more than participate.",
    ],
    answerWeights: [{ E: 2 }, { I: 2 }, { E: 1 }, { I: 1 }],
    dimension: "EI",
     image: "images/questions/q03.png",
  },
  {
    text: "After a long day, you recharge best by...",
    answers: [
      "Being around people, chatting or gaming together.",
      "Spending time completely alone in your own space.",
      "Calling or messaging one close friend.",
      "Being around others but not necessarily talking much.",
    ],
    answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
    dimension: "EI",
     image: "images/questions/q04.png",
  },
  {
    text: "When you enter a new environment (like a new class or job), you usually...",
    answers: [
      "Quickly introduce yourself to many people.",
      "Wait and observe before talking to anyone new.",
      "Chat with a few people who seem approachable.",
      "Focus on the setting first, then slowly join conversations.",
    ],
    answerWeights: [{ E: 2 }, { I: 2 }, { E: 1 }, { I: 1 }],
    dimension: "EI",
     image: "images/questions/q05.png",
  },
  {
    text: "During breaks at work or school, you prefer to...",
    answers: [
      "Join group conversations or activities.",
      "Enjoy some quiet time alone.",
      "Talk to one trusted person.",
      "Be around others without feeling pressure to talk.",
    ],
    answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
    dimension: "EI",
     image: "images/questions/q06.png",
  },

  // SN: Sensing / Intuition
  {
    text: "When learning something new, you prefer...",
    answers: [
      "Clear facts, real examples, and step-by-step instructions.",
      "Exploring possibilities, theories, and big ideas.",
      "Hands-on practice with detailed guidance.",
      "Imagining how it connects to the future and what it could become.",
    ],
    answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
    dimension: "SN",
     image: "images/questions/q07.png",
  },
  {
    text: "You tend to trust information that is...",
    answers: [
      "Based on your direct experience and what you can observe.",
      "Abstract, symbolic, or based on patterns you notice.",
      "What has already been tested in the real world.",
      "What feels like an interesting new possibility.",
    ],
    answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
    dimension: "SN",
     image: "images/questions/q08.png",
  },
  {
    text: "When planning a trip, you focus more on...",
    answers: [
      "Exact dates, tickets, and detailed daily plans.",
      "The overall vibe and what the experience could feel like.",
      "Practical needs like budget, luggage, and routes.",
      "Imagining spontaneous adventures you might have there.",
    ],
    answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
    dimension: "SN",
     image: "images/questions/q09.png",
  },
  {
    text: "In conversations, you usually talk more about...",
    answers: [
      "Real-life stories, facts, and what actually happened.",
      "Ideas, theories, and what might happen in the future.",
      "Concrete details and specific examples.",
      "Metaphors, meanings, and underlying themes.",
    ],
    answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
    dimension: "SN",
     image: "images/questions/q10.png",
  },
  {
    text: "When you read or watch something, you mainly notice...",
    answers: [
      "Specific facts, descriptions, and what people did.",
      "Hidden meanings, symbolism, and underlying messages.",
      "Realistic details that match how things work in life.",
      "Ideas that could hint at bigger patterns or futures.",
    ],
    answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
    dimension: "SN",
     image: "images/questions/q11.png",
  },
  {
    text: "When solving a problem, you first...",
    answers: [
      "List out the concrete facts and data you already know.",
      "Think about what the problem might mean long-term.",
      "Check what has worked in similar situations before.",
      "Brainstorm several creative, unusual solutions.",
    ],
    answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
    dimension: "SN",
     image: "images/questions/q12.png",
  },

  // TF: Thinking / Feeling
  {
    text: "When solving a conflict, you usually focus more on...",
    answers: [
      "What is most fair and logical for everyone.",
      "How people feel and how to protect relationships.",
      "Pointing out inconsistencies and fixing the root cause.",
      "Helping others feel heard, even if it takes more time.",
    ],
    answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
    dimension: "TF",
     image: "images/questions/q13.png",
  },
  {
    text: "When giving feedback, you are more likely to...",
    answers: [
      "Be direct and honest, even if it sounds blunt.",
      "Soften your words to avoid hurting someone's feelings.",
      "Focus on what can be improved with clear reasons.",
      "Highlight the positives first, then gently mention issues.",
    ],
    answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
    dimension: "TF",
     image: "images/questions/q14.png",
  },
  {
    text: "You are more motivated by...",
    answers: [
      "Clear goals, measurable results, and achievements.",
      "Feeling connected, appreciated, and aligned with your values.",
      "Knowing the logic behind what you are doing.",
      "Knowing it will genuinely help or support someone.",
    ],
    answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
    dimension: "TF",
     image: "images/questions/q15.png",
  },
  {
    text: "When someone makes a bad decision, you usually think...",
    answers: [
      "\"That was an irrational choice; what went wrong in their reasoning?\"",
      "They must have been under a lot of emotional pressure.",
      "They forgot to consider an important fact or detail.",
      "They probably needed more support from others.",
    ],
    answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
    dimension: "TF",
     image: "images/questions/q16.png",
  },
  {
    text: "When choosing between two options, you lean more toward...",
    answers: [
      "Which option makes the most logical and efficient sense.",
      "Which option feels kinder and more humane.",
      "Which option has clearer pros and cons on paper.",
      "Which option better matches your personal or moral values.",
    ],
    answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
    dimension: "TF",
     image: "images/questions/q17.png",
  },
  {
    text: "If a friend asks for advice, you usually respond by...",
    answers: [
      "Analyzing the situation and offering a rational solution.",
      "Listening deeply and validating their emotions first.",
      "Asking questions to clarify the logical details.",
      "Reassuring them and focusing on emotional support.",
    ],
    answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
    dimension: "TF",
     image: "images/questions/q18.png",
  },

  // JP: Judging / Perceiving
  {
    text: "Your ideal work style is...",
    answers: [
      "Having a clear plan, list, and schedule for each day.",
      "Keeping things open and flexible, deciding as you go.",
      "Organized, with deadlines and structure.",
      "Free-flowing, adjusting based on mood and inspiration.",
    ],
    answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
    dimension: "JP",
     image: "images/questions/q19.png",
  },
  {
    text: "When a deadline is approaching, you usually...",
    answers: [
      "Start early and finish well before the due date.",
      "Work best under pressure and often start close to the deadline.",
      "Make a schedule and follow it closely.",
      "Gather ideas for a while, then rush to finish at the end.",
    ],
    answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
    dimension: "JP",
     image: "images/questions/q20.png",
  },
  {
    text: "Looking at your room or workspace, it is usually...",
    answers: [
      "Neat and organized, with everything in its place.",
      "A creative mess that only you understand.",
      "Mostly tidy, with a few piles that have a system.",
      "Chaotic but comfortable; you clean it when you feel like it.",
    ],
    answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
    dimension: "JP",
     image: "images/questions/q21.png",
  },
  {
    text: "When plans suddenly change, you tend to...",
    answers: [
      "Feel annoyed and want to re-organize quickly.",
      "Feel excited or curious about new possibilities.",
      "Try to restore some structure as soon as possible.",
      "Go with the flow and see what happens.",
    ],
    answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
    dimension: "JP",
     image: "images/questions/q22.png",
  },
  {
    text: "When starting a new project, you prefer to...",
    answers: [
      "Define the steps and deadlines before you begin.",
      "Dive in and figure things out as you go.",
      "Outline the main structure, then fill in details later.",
      "Experiment freely first, then organize what you discovered.",
    ],
    answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
    dimension: "JP",
     image: "images/questions/q23.png",
  },
  {
    text: "How do you usually treat routines like meals, sleep, or exercise?",
    answers: [
      "I like fixed routines and feel best when I stick to them.",
      "I prefer to keep them flexible and change them often.",
      "I keep some structure but allow small variations.",
      "I mostly follow my mood and energy in the moment.",
    ],
    answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
    dimension: "JP",
     image: "images/questions/q24.png",
  },
];

const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const answersList = document.getElementById("answers-list");
const questionCounter = document.getElementById("question-counter");
const feedback = document.getElementById("feedback");
const questionImageEl = document.getElementById("question-image");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const scoreText = document.getElementById("score-text");
const typeCodeEl = document.getElementById("type-code");
const typeNameEl = document.getElementById("type-name");
const typeDescriptionEl = document.getElementById("type-description");
const typeImageEl = document.getElementById("type-image");

const summaryE = document.getElementById("summary-e");
const summaryI = document.getElementById("summary-i");
const summaryS = document.getElementById("summary-s");
const summaryN = document.getElementById("summary-n");
const summaryT = document.getElementById("summary-t");
const summaryF = document.getElementById("summary-f");
const summaryJ = document.getElementById("summary-j");
const summaryP = document.getElementById("summary-p");

const chartCanvas = document.getElementById("result-chart");
const ctx = chartCanvas.getContext("2d");

let currentQuestionIndex = 0;
let selectedIndex = null;
// answersMeta: { selectedIndex: number|null }
let answersMeta = [];
// Trait scores
let traits = {
  E: 0,
  I: 0,
  S: 0,
  N: 0,
  T: 0,
  F: 0,
  J: 0,
  P: 0,
};

const personalityTypes = {
  ISTJ: {
    name: "The Inspector (Core group: 🛡️ SENTINELS)",
    description:
      "Responsible, detail‑oriented, and reliable. Prefers clear rules, structure, and proven methods.",
    jobs: [
      "Auditor, accountant, or financial analyst",
      "Project or operations manager",
      "Quality assurance or compliance specialist",
    ],
    bestMatches: ["ESFP", "ESTP", "ISFJ"],
    image: "images/types/ISTJ.png",
  },
  ISFJ: {
    name: "The Protector (Core group: 🛡️ SENTINELS)",
    description:
      "Warm, caring, and dependable. Notices what others need and quietly keeps things running.",
    jobs: [
      "Nurse, healthcare support, or caregiver",
      "Teacher in structured environments",
      "Administrative or support coordinator",
    ],
    bestMatches: ["ESFP", "ESTP", "ISFP"],
    image: "images/types/ISFJ.png",
  },
  INFJ: {
    name: "The Advocate (Core group: 🤝 DIPLOMATS)",
    description:
      "Insightful, idealistic, and values authenticity. Deeply cares about meaning and helping others grow.",
    jobs: [
      "Psychologist, therapist, or counselor",
      "Writer or content creator on meaningful topics",
      "Non-profit or social impact strategist",
    ],
    bestMatches: ["ENFP", "ENFJ", "INFP"],
    image: "images/types/INFJ.png",
  },
  INTJ: {
    name: "The Architect (Core group: 🧠 ANALYSTS)",
    description:
      "Strategic, independent, and future‑oriented. Enjoys solving complex problems with long‑term plans.",
    jobs: [
      "Data scientist, systems architect, or engineer",
      "Researcher or strategist",
      "Product or technical lead",
    ],
    bestMatches: ["ENFP", "ENTP", "INTP"],
    image: "images/types/INTJ.png",
  },
  ISTP: {
    name: "The Virtuoso (Core group: ⚡ EXPLORERS)",
    description:
      "Curious, hands‑on, and resourceful. Likes to figure out how things work by experimenting.",
    jobs: [
      "Mechanic, technician, or engineer",
      "Emergency responder or field technician",
      "Craftsperson or maker",
    ],
    bestMatches: ["ESFJ", "ESTJ", "ISFP"],
    image: "images/types/ISTP.png",
  },
  ISFP: {
    name: "The Artist (Core group: ⚡ EXPLORERS)",
    description:
      "Gentle, flexible, and creative. Values personal freedom and expressing themselves in unique ways.",
    jobs: [
      "Designer, illustrator, or multimedia artist",
      "Healthcare or support roles with one‑to‑one contact",
      "Craft, fashion, or interior design",
    ],
    bestMatches: ["ESFJ", "ENFJ", "ISFP"],
    image: "images/types/ISFP.png",
  },
  INFP: {
    name: "The Mediator (Core group: 🤝 DIPLOMATS)",
    description:
      "Idealistic, empathetic, and guided by strong inner values. Seeks meaning and harmony in life.",
    jobs: [
      "Counselor, coach, or social worker",
      "Author, editor, or creative writer",
      "Roles in education or non‑profit advocacy",
    ],
    bestMatches: ["ENFJ", "ENTJ", "INFJ"],
    image: "images/types/INFP.png",
  },
  INTP: {
    name: "The Thinker (Core group: 🧠 ANALYSTS)",
    description:
      "Analytical, theoretical, and independent. Loves exploring ideas and understanding complex systems.",
    jobs: [
      "Research scientist or academic",
      "Software engineer or systems designer",
      "Analyst in technical or R&D roles",
    ],
    bestMatches: ["ENTJ", "ENFJ", "INTJ"],
    image: "images/types/INTP.png",
  },
  ESTP: {
    name: "The Dynamo (Core group: ⚡ EXPLORERS)",
    description:
      "Energetic, action‑oriented, and realistic. Enjoys challenges, risks, and hands‑on experiences.",
    jobs: [
      "Sales, marketing, or entrepreneurship",
      "Emergency services or tactical roles",
      "Sports, fitness, or performance‑based careers",
    ],
    bestMatches: ["ISFJ", "ISTJ", "ESFJ"],
    image: "images/types/ESTP.png",
  },
  ESFP: {
    name: "The Performer (Core group: ⚡ EXPLORERS)",
    description:
      "Spontaneous, friendly, and playful. Brings energy to social situations and lives in the moment.",
    jobs: [
      "Performer, entertainer, or presenter",
      "Event planning or hospitality",
      "Customer‑facing service and support roles",
    ],
    bestMatches: ["ISTJ", "ISFJ", "ESFJ"],
    image: "images/types/ESFP.png",
  },
  ENFP: {
    name: "The Campaigner (Core group: 🤝 DIPLOMATS)",
    description:
      "Enthusiastic, imaginative, and people‑focused. Sees potential everywhere and inspires others.",
    jobs: [
      "Creative marketing or communications",
      "Coaching, counseling, or teaching",
      "Innovation or community‑building roles",
    ],
    bestMatches: ["INFJ", "INTJ", "INFP"],
    image: "images/types/ENFP.png",
  },
  ENTP: {
    name: "The Debater (Core group: 🧠 ANALYSTS)",
    description:
      "Quick‑witted, inventive, and loves exploring new angles. Enjoys lively discussions and challenges.",
    jobs: [
      "Entrepreneur or startup founder",
      "Consultant, strategist, or product creator",
      "Law, debate, or negotiation‑heavy fields",
    ],
    bestMatches: ["INFJ", "INTJ", "INFP"],
    image: "images/types/ENTP.png",
  },
  ESTJ: {
    name: "The Executive (Core group: 🛡️ SENTINELS)",
    description:
      "Organized, decisive, and practical. Naturally takes charge and focuses on efficient results.",
    jobs: [
      "Operations or project manager",
      "Public administration or organizational leadership",
      "Any role requiring strong structure and oversight",
    ],
    bestMatches: ["ISFP", "ISTP", "ESFJ"],
    image: "images/types/ESTJ.png",
  },
  ESFJ: {
    name: "The Consul (Core group: 🛡️ SENTINELS)",
    description:
      "Supportive, social, and responsible. Values harmony and takes care of people and traditions.",
    jobs: [
      "Teacher or trainer",
      "Healthcare support or community coordinator",
      "Customer success or HR roles",
    ],
    bestMatches: ["ISFP", "ISTP", "ESFJ"],
    image: "images/types/ESFJ.png",
  },
  ENFJ: {
    name: "The Protagonist (Core group: 🤝 DIPLOMATS)",
    description:
      "Charismatic, empathetic, and inspiring. Helps others grow and brings people together.",
    jobs: [
      "Teacher, mentor, or coach",
      "Leader in non‑profit or people‑centered organizations",
      "Facilitation, mediation, or HR development",
    ],
    bestMatches: ["INFP", "ISFP", "INFJ"],
    image: "images/types/ENFJ.png",
  },
  ENTJ: {
    name: "The Commander (Core group: 🧠 ANALYSTS)",
    description:
      "Confident, strategic, and goal‑driven. Sees the big picture and organizes people to achieve it.",
    jobs: [
      "Executive or director‑level leadership",
      "Business, law, or high‑responsibility management",
      "Strategic consulting or entrepreneurship",
    ],
    bestMatches: ["INFP", "INTP", "ENFP"],
    image: "images/types/ENTJ.png",
  },
};


function showScreen(type) {
  if (type === "quiz") {
    quizScreen.classList.remove("card--hidden");
    resultScreen.classList.add("card--hidden");
  } else {
    quizScreen.classList.add("card--hidden");
    resultScreen.classList.remove("card--hidden");
  }
}







function initQuiz() {
  currentQuestionIndex = 0;
  selectedIndex = null;
  answersMeta = Array.from({ length: questions.length }, () => ({
    selectedIndex: null,
  }));

  traits = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  showScreen("quiz");
  renderQuestion();
  updateNextButtonState();
  feedback.textContent = "";
}

function showScreen(type) {
  if (type === "quiz") {
    quizScreen.classList.remove("card--hidden");
    resultScreen.classList.add("card--hidden");
  } else {
    quizScreen.classList.add("card--hidden");
    resultScreen.classList.remove("card--hidden");
  }
}

function renderQuestion() {
  const q = questions[currentQuestionIndex];

  if (questionImageEl) {
    if (q.image) {
      questionImageEl.src = q.image;
      questionImageEl.alt = `Illustration: ${q.text}`;
    } else {
      questionImageEl.src = "images/questions/default.png";
      questionImageEl.alt = "Question illustration";
    }
  }

  questionText.textContent = q.text;
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

  answersList.innerHTML = "";
  const labels = ["A", "B", "C", "D"];

  q.answers.forEach((answerText, index) => {
    const li = document.createElement("li");
    li.className = "answer";
    li.dataset.index = index.toString();

    const labelSpan = document.createElement("span");
    labelSpan.className = "answer__label";
    labelSpan.textContent = labels[index] || String(index + 1);

    const textSpan = document.createElement("span");
    textSpan.className = "answer__text";
    textSpan.textContent = answerText;

    li.appendChild(labelSpan);
    li.appendChild(textSpan);

    li.addEventListener("click", () => handleAnswerClick(index));

    answersList.appendChild(li);
  });

  selectedIndex = answersMeta[currentQuestionIndex].selectedIndex;
  applySelectionStyles();
  feedback.textContent = "";
}

function handleAnswerClick(index) {
  selectedIndex = index;
  answersMeta[currentQuestionIndex].selectedIndex = index;

  applySelectionStyles();

  feedback.textContent = "Answer saved. Click Next to continue.";
  updateNextButtonState();
}

function applySelectionStyles() {
  const items = answersList.querySelectorAll(".answer");

  items.forEach((item) => {
    const idx = Number(item.dataset.index);
    item.classList.remove(
      "answer--selected",
      "answer--correct",
      "answer--incorrect",
      "answer--disabled",
    );

    if (selectedIndex === null) {
      return;
    }

    if (idx === selectedIndex) {
      item.classList.add("answer--selected");
    }
  });
}

function updateNextButtonState() {
  const meta = answersMeta[currentQuestionIndex];
  nextBtn.disabled = meta.selectedIndex === null;
}

nextBtn.addEventListener("click", () => {
  const isLast = currentQuestionIndex === questions.length - 1;

  if (!isLast) {
    currentQuestionIndex += 1;
    selectedIndex = answersMeta[currentQuestionIndex].selectedIndex;
    renderQuestion();
    updateNextButtonState();
  } else {
    calculateTraits();
    showResults();
  }
});

restartBtn.addEventListener("click", () => {
  initQuiz();
});

function calculateTraits() {
  // Reset traits before recomputing
  traits = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  questions.forEach((q, qIndex) => {
    const meta = answersMeta[qIndex];
    if (meta.selectedIndex == null) return;

    const weights = q.answerWeights[meta.selectedIndex] || {};
    Object.keys(weights).forEach((key) => {
      traits[key] += weights[key];
    });
  });
}

function deriveType() {
  const letter1 = traits.E >= traits.I ? "E" : "I";
  const letter2 = traits.S >= traits.N ? "S" : "N";
  const letter3 = traits.T >= traits.F ? "T" : "F";
  const letter4 = traits.J >= traits.P ? "J" : "P";

  const code = `${letter1}${letter2}${letter3}${letter4}`;
  const typeInfo = personalityTypes[code] || {
    name: "Balanced Type",
    description:
      "Your answers are quite balanced across different traits, suggesting a flexible and adaptable personality.",
    jobs: [
      "Roles that blend structure with flexibility",
      "Environments that allow you to switch between people‑focused and technical work",
    ],
    bestMatches: ["Any type with complementary strengths"],
    image: "images/types/default.png",
  };

  return { code, ...typeInfo };
}

function showResults() {
  const totalAnswered = answersMeta.filter(
    (m) => m.selectedIndex !== null,
  ).length;
  const totalQuestions = questions.length;
  const completionPercent = Math.round(
    (totalAnswered / totalQuestions) * 100,
  );

  const { code, name, description, jobs, bestMatches, image } = deriveType();

  scoreText.textContent = `You answered ${totalAnswered} of ${totalQuestions} questions (${completionPercent}%).`;
  typeCodeEl.textContent = code;
  typeNameEl.textContent = name;

  // Update type image (fallback to default if missing)
  if (typeImageEl) {
    typeImageEl.src = image || "images/types/default.png";
    typeImageEl.alt = `${code} personality illustration`;
  }
  typeDescriptionEl.textContent = `${description}

Scientific profile: People with a ${code} pattern combine their preferences for energy, information, decision-making, and lifestyle in a way that tends to feel most natural and sustainable to them. Research on person–environment fit suggests that aligning work and relationships with these stable preferences is linked to higher long-term satisfaction and lower burnout. 

Recommended job themes: ${jobs.join(
    "; ",
  )}. These roles typically reinforce your dominant traits and give you chances to use your natural strengths every day.

Compatibility: In long-term relationships, ${code} types often report strong bonds with ${bestMatches.join(
    ", ",
  )}, because these personalities either share core values or balance out blind spots. Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.`.trim();

  summaryE.textContent = String(traits.E);
  summaryI.textContent = String(traits.I);
  summaryS.textContent = String(traits.S);
  summaryN.textContent = String(traits.N);
  summaryT.textContent = String(traits.T);
  summaryF.textContent = String(traits.F);
  summaryJ.textContent = String(traits.J);
  summaryP.textContent = String(traits.P);

  renderRadarChart(traits);
  showScreen("result");
}

function renderRadarChart(traitsScores) {
  const width = chartCanvas.width;
  const height = chartCanvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) / 2 - 24;

  ctx.clearRect(0, 0, width, height);

  const traitKeys = ["E", "I", "S", "N", "T", "F", "J", "P"];
  const traitLabels = {
    E: "E",
    I: "I",
    S: "S",
    N: "N",
    T: "T",
    F: "F",
    J: "J",
    P: "P",
  };

  const values = traitKeys.map((k) => traitsScores[k]);
  const maxValue = Math.max(1, ...values);

  // Draw circular grid
  const levels = 4;
  ctx.strokeStyle = "rgba(55, 65, 81, 0.8)";
  ctx.lineWidth = 1;
  for (let l = 1; l <= levels; l++) {
    const r = (radius * l) / levels;
    ctx.beginPath();
    ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Draw axes and labels
  ctx.font =
    "11px system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI'";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  traitKeys.forEach((key, i) => {
    const angle = (Math.PI * 2 * i) / traitKeys.length - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    // axis line
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "rgba(31, 41, 55, 0.9)";
    ctx.stroke();

    // label a bit beyond the radius
    const labelR = radius + 14;
    const lx = centerX + labelR * Math.cos(angle);
    const ly = centerY + labelR * Math.sin(angle);
    ctx.fillStyle = "#9ca3af";
    ctx.fillText(traitLabels[key], lx, ly);
  });

  // Plot polygon
  ctx.beginPath();
  traitKeys.forEach((key, i) => {
    const angle = (Math.PI * 2 * i) / traitKeys.length - Math.PI / 2;
    const value = traitsScores[key];
    const r = (value / maxValue) * radius;
    const x = centerX + r * Math.cos(angle);
    const y = centerY + r * Math.sin(angle);

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  });
  ctx.closePath();

  // Fill polygon
  const gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    radius,
  );
  gradient.addColorStop(0, "rgba(34, 197, 94, 0.45)");
  gradient.addColorStop(1, "rgba(34, 197, 94, 0.05)");

  ctx.fillStyle = gradient;
  ctx.fill();

  // Stroke polygon
  ctx.strokeStyle = "#22c55e";
  ctx.lineWidth = 2;
  ctx.stroke();
}

document.addEventListener("DOMContentLoaded", () => {
  initQuiz();
});
