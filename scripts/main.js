const languagePack = {
  en: {
    appTitle: "Personality Quiz",
    appSubtitle:
      "There are 4 main and 16 sub personalities. Answer the questions to find out which type you are.",
    languageLabel: "Language:",
    nextButton: "Next",
    restartButton: "Restart Quiz",
    questionCounter: (current, total) => `Question ${current} / ${total}`,
    resultTitle: "Your Personality Type",
    resultScore: (answered, total, percent) =>
      `You answered ${answered} of ${total} questions (${percent}%).`,
    feedbackSaved: "Answer saved. Click Next to continue.",
    // Result‑screen labels
    traitLabels: {
      E: "Extraversion (E):",
      I: "Introversion (I):",
      S: "Sensing (S):",
      N: "Intuition (N):",
      T: "Thinking (T):",
      F: "Feeling (F):",
      J: "Judging (J):",
      P: "Perceiving (P):",
    },
  },
  tr: {
    appTitle: "Kişilik Testi",
    appSubtitle:
      "4 ana ve 16 alt kişilik tipi vardır. Hangi tipe daha yakın olduğunuzu görmek için soruları cevaplayın.",
    languageLabel: "Dil:",
    nextButton: "İleri",
    restartButton: "Teste Yeniden Başla",
    questionCounter: (current, total) => `Soru ${current} / ${total}`,
    resultTitle: "Kişilik Tipiniz",
    resultScore: (answered, total, percent) =>
      `${total} sorunun ${answered} tanesini cevapladınız (%${percent}).`,
    feedbackSaved: "Cevabınız kaydedildi. Devam etmek için İleri’ye tıklayın.",
    traitLabels: {
      E: "Dışadönüklük (E):",
      I: "İçedönüklük (I):",
      S: "Duyumsama (S):",
      N: "Sezgi (N):",
      T: "Düşünme (T):",
      F: "Hissetme (F):",
      J: "Yargılama (J):",
      P: "Algılama (P):",
    },
  },
  de: {
    appTitle: "Persönlichkeitstest",
    appSubtitle:
      "Es gibt 4 Haupt- und 16 Unterpersönlichkeitstypen. Beantworte die Fragen, um herauszufinden, welcher Typ du bist.",
    languageLabel: "Sprache:",
    nextButton: "Weiter",
    restartButton: "Quiz neu starten",
    questionCounter: (current, total) => `Frage ${current} / ${total}`,
    resultTitle: "Dein Persönlichkeitstyp",
    resultScore: (answered, total, percent) =>
      `Du hast ${answered} von ${total} Fragen beantwortet (${percent}%).`,
    feedbackSaved: "Antwort gespeichert. Klicke auf Weiter, um fortzufahren.",
    traitLabels: {
      E: "Extrovertiertheit (E):",
      I: "Introvertiertheit (I):",
      S: "Abtastung (S):",
      N: "Intuition (N):",
      T: "Denken (T):",
      F: "Gefühl (F):",
      J: "Beurteilung (J):",
      P: "Wahrnehmend (P):",
    },
  },
};

let currentLanguage = "en";

const questionsByLanguage = {
  en: [
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
  ],

  // TR and DE reuse EN structure but with placeholder texts
  tr: [
    // EI: Extraversion / Introversion
    {
      text: "Bir grup projesinde genellikle…",
      answers: ["Hemen işe koyulur, tartışmalara liderlik eder ve herkesi motive edersiniz.",
                "Çoğunlukla sessiz kalır, arka planda destek olursunuz.",
                "Sorulduğunda fikirlerinizi paylaşırsınız, ancak ön planda olmaktan kaçınırsınız",
                "Sözlü tartışmalara girmeden görevlerin organizasyonunu üstlenirsiniz"],
      answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
      dimension: "EI",
      image: "images/questions/q01.png",
    },
    {
      text: "Hafta sonu için plan yaparken genellikle…",
      answers: ["Büyük bir sosyal etkinlik ya da parti ararsınız.", 
        "Bir kitap, oyun ya da diziyle sakin bir şekilde yalnız vakit geçirmeyi tercih edersiniz.", 
        "Bir ya da iki yakın arkadaşla küçük bir buluşmadan keyif alırsınız.", 
        "Ortaya çıkarsa spontane davetlere evet dersiniz."],
      answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
      dimension: "EI",
      image: "images/questions/q02.png",
    },
    {
      text: "Büyük bir sosyal etkinlikte genellikle…",
      answers: ["Ortalıkta dolaşır ve birçok farklı kişiyle sohbet edersiniz.",
         "Tanıdık bir kişiyle ya da küçük bir grupla birlikte kalırsınız.",
          "İnsanları birbirleriyle tanıştırır ve sohbetlerin akıcı olmasını sağlarsınız.",
           "Daha sakin bir köşe bulur, katılmaktan çok gözlem yaparsınız."],
      answerWeights: [{ E: 2 }, { I: 2 }, { E: 1 }, { I: 1 }],
      dimension: "EI",
      image: "images/questions/q03.png",
    },
    {
      text: "Uzun bir günün ardından en iyi şekilde enerji toplama yönteminiz genellikle…",
      answers: ["İnsanların arasında olmak, sohbet etmek ya da birlikte oyun oynamak.", 
        "Kendi alanınızda tamamen yalnız vakit geçirmek.", 
        "Yakın bir arkadaşınızı aramak ya da mesajlaşmak.", 
        "İnsanların yanında olmak ama çok fazla konuşmamak."],
      answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
      dimension: "EI",
      image: "images/questions/q04.png",
    },
    {
      text: "Yeni bir ortama girdiğinizde (örneğin yeni bir sınıf ya da iş), genellikle…",
      answers: ["Hızlıca kendinizi tanıtır ve birçok kişiyle tanışırsınız.", 
        "Yeni biriyle konuşmadan önce bekler ve gözlem yaparsınız.", 
        "Size daha samimi gelen birkaç kişiyle sohbet edersiniz.", 
        "Önce ortamı gözlemler, ardından yavaş yavaş sohbetlere katılırsınız."],
      answerWeights: [{ E: 2 }, { I: 2 }, { E: 1 }, { I: 1 }],
      dimension: "EI",
      image: "images/questions/q05.png",
    },
    {
      text: "İş veya okul arasındaki molalarda genellikle…",
      answers: ["Grup sohbetlerine ya da aktivitelere katılırsınız.", 
        "Sessiz bir şekilde yalnız vakit geçirirsiniz.", 
        "Güvendiğiniz tek bir kişiyle konuşursunuz.", 
        "Konuşma baskısı hissetmeden başkalarının yanında olursunuz." ],
      answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
      dimension: "EI",
      image: "images/questions/q06.png",
    },

    // SN: Sensing / Intuition
    {
      text: "Yeni bir şey öğrenirken genellikle…",
      answers: ["Net bilgiler, gerçek örnekler ve adım adım talimatları tercih edersiniz.", 
        "Olasılıkları, teorileri ve büyük fikirleri keşfetmeyi seversiniz.", 
        "Detaylı yönlendirmeyle uygulamalı öğrenmeyi tercih edersiniz.", 
        "Bunun gelecekle nasıl bağlantılı olduğunu ve neye dönüşebileceğini hayal edersiniz."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q07.png",
    },
    {
      text: "Genellikle şu tür bilgilere daha çok güvenirsiniz…",
      answers: ["Doğrudan deneyiminize ve gözlemleyebildiklerinize dayanan.", 
        "Soyut, sembolik ya da fark ettiğiniz örüntülere dayanan.", 
        "Gerçek dünyada zaten test edilmiş olan.", 
        "İlginç ve yeni bir olasılık gibi hissettiren."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q08.png",
    },
    {
      text: "Bir seyahat planlarken daha çok şuna odaklanırsınız…",
      answers: ["Kesin tarihler, biletler ve günlük detaylı planlar.", 
        "Genel atmosfer ve deneyimin nasıl hissettireceği.", 
        "Bütçe, bagaj ve güzergâh gibi pratik ihtiyaçlar.", 
        "Orada yaşayabileceğiniz spontane maceraları hayal etmek."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q09.png",
    },
    {
      text: "Sohbetlerde genellikle daha çok şunlardan bahsedersiniz…",
      answers: ["Gerçek yaşam hikâyeleri, olgular ve gerçekten ne olduğu.", 
        "Fikirler, teoriler ve gelecekte neler olabileceği.", 
        "Somut ayrıntılar ve belirli örnekler.", 
        "Metaforlar, anlamlar ve altta yatan temalar."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q10.png",
    },
    {
      text: "Bir şey okurken ya da izlerken genellikle en çok şunları fark edersiniz…",
      answers: ["Belirli gerçekler, betimlemeler ve insanların ne yaptığı.", 
        "Gizli anlamlar, sembolizm ve altta yatan mesajlar.", 
        "Hayattaki işleyişle örtüşen gerçekçi detaylar.",
        "Daha büyük örüntülere ya da geleceğe işaret edebilecek fikirler."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q11.png",
    },
    {
      text: "Bir problemi çözerken ilk olarak genellikle…",
      answers: ["Halihazırda bildiğiniz somut gerçekleri ve verileri listelersiniz.", 
        "Problemin uzun vadede ne anlama gelebileceğini düşünürsünüz.", 
        "Benzer durumlarda daha önce neyin işe yaradığını kontrol edersiniz.", 
        "Birden fazla yaratıcı ve alışılmadık çözüm üretmek için beyin fırtınası yaparsınız."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q12.png",
    },

    // TF: Thinking / Feeling
    {
      text: "Bir çatışmayı çözerken genellikle daha çok şuna odaklanırsınız…",
      answers: ["Herkes için en adil ve mantıklı olanın ne olduğu.", 
        "İnsanların nasıl hissettiği ve ilişkilerin nasıl korunacağı.", 
        "Benzer durumlarda daha önce neyin işe yaradığını kontrol edersiniz.", 
        "Birden fazla yaratıcı ve alışılmadık çözüm üretmek için beyin fırtınası yaparsınız."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q13.png",
    },
    {
      text: "Geri bildirim verirken genellikle daha çok şuna eğilim gösterirsiniz…",
      answers: ["Kulağa sert gelse bile doğrudan ve dürüst olursunuz.", 
        "Birinin duygularını incitmemek için sözlerinizi yumuşatırsınız.", 
        "Net gerekçelerle nelerin geliştirilebileceğine odaklanırsınız.", 
        "Önce olumlu yönleri vurgular, ardından sorunlara nazikçe değinirsiniz."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q14.png",
    },
    {
      text: "Genellikle sizi daha çok motive eden şey…",
      answers: ["Net hedefler, ölçülebilir sonuçlar ve başarılar.", 
        "Kendinizi bağlı, değerli ve kendi değerlerinizle uyumlu hissetmek.", 
        "Yaptığınız şeyin arkasındaki mantığı bilmek.", 
        "Bunun gerçekten birine yardımcı olacağını ya da destek sağlayacağını bilmek."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q15.png",
    },
    {
      text: "Birisi kötü bir karar verdiğinde genellikle şöyle düşünürsünüz…",
      answers: ["Bu mantıksız bir seçimdi; akıl yürütmede ne yanlış gitti?", 
        "Muhtemelen çok fazla duygusal baskı altındaydı.", 
        "Önemli bir gerçeği ya da detayı gözden kaçırdı.", 
        "Büyük ihtimalle başkalarından daha fazla desteğe ihtiyaç duyuyordu."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q16.png",
    },
    {
      text: "İki seçenek arasında karar verirken genellikle daha çok şuna yönelirsiniz…",
      answers: ["Hangi seçeneğin en mantıklı ve en verimli olduğu.", 
        "Hangi seçeneğin daha nazik ve insancıl hissettirdiği.", 
        "Kâğıt üzerinde artıları ve eksileri daha net olan seçenek.", 
        "Kişisel ya da ahlaki değerlerinizle daha iyi örtüşen seçenek."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q17.png",
    },
    {
      text: "Bir arkadaşınız sizden tavsiye istediğinde genellikle şöyle karşılık verirsiniz…",
      answers: ["Durumu analiz eder ve mantıklı bir çözüm önerirsiniz.", 
        "Önce dikkatle dinler ve duygularını onaylarsınız.", 
        "Mantıksal detayları netleştirmek için sorular sorarsınız.", 
        "Onu rahatlatır ve duygusal desteğe odaklanırsınız."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q18.png",
    },

    // JP: Judging / Perceiving
    {
      text: "İdeal çalışma tarzınız genellikle…",
      answers: ["Her gün için net bir plan, yapılacaklar listesi ve programınızın olması.", 
        "İşleri açık ve esnek tutmak, kararları süreç içinde vermek.", 
        "Son teslim tarihleri ve yapı ile düzenli bir şekilde çalışmak.", 
        "Ruh haline ve ilhama göre uyum sağlayan, serbest akışlı bir tarz."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q19.png",
    },
    {
      text: "Bir son teslim tarihi yaklaştığında genellikle…",
      answers: ["Erken başlar ve teslim tarihinden çok önce bitirirsiniz.", 
        "Baskı altında daha iyi çalışır ve çoğu zaman son teslim tarihine yakın başlarsınız.", 
        "Bir program yapar ve buna sıkı sıkıya uyarsınız.", 
        "Bir süre fikir toplar, ardından son anda hızlıca bitirirsiniz."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q20.png",
    },
    {
      text: "Odanıza ya da çalışma alanınıza baktığınızda genellikle…",
      answers: ["Her şeyin yerli yerinde olduğu, düzenli ve tertipli bir haldedir.", 
        "Sadece sizin anlayabildiğiniz yaratıcı bir dağınıklık vardır.", 
        "Çoğunlukla düzenlidir, ancak bir sisteme sahip birkaç yığın bulunur.", 
        "Kaotik ama rahattır; canınız istediğinde temizlersiniz."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q21.png",
    },
    {
      text: "Planlar aniden değiştiğinde genellikle…",
      answers: ["Rahatsız olursunuz ve hızlıca yeniden organize etmek istersiniz.", 
        "Yeni olasılıklar konusunda heyecanlanır ya da merak duyarsınız.", 
        "Mümkün olan en kısa sürede tekrar bir düzen kurmaya çalışırsınız.", 
        "Akışına bırakırsınız ve ne olacağını görürsünüz."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q22.png",
    },
    {
      text: "Yeni bir projeye başlarken genellikle…",
      answers: ["Başlamadan önce adımları ve son teslim tarihlerini belirlersiniz.", 
        "Hemen işe koyulur ve ilerledikçe işleri çözersiniz.", 
        "Ana yapıyı taslak olarak çıkarır, detayları daha sonra doldurursunuz.", 
        "Önce serbestçe denemeler yapar, ardından keşfettiklerinizi düzenlersiniz."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q23.png",
    },
    {
      text: "Yemek, uyku veya egzersiz gibi rutinlere genellikle nasıl yaklaşırsınız?",
      answers: ["Sabit rutinleri severim ve onlara uyduğumda kendimi en iyi hissederim.", 
        "Esnek tutmayı ve sık sık değiştirmeyi tercih ederim.", 
        "Bir miktar düzeni korurum ama küçük değişikliklere izin veririm.", 
        "Çoğunlukla o anki ruh halime ve enerjime göre hareket ederim."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q24.png",
    },
  ],

  de: [
    // EI: Extraversion / Introversion
    {
      text: "In einem Gruppenprojekt neigen Sie dazu, ...",
      answers: ["Direkt einzusteigen, Diskussionen zu leiten und alle zu motivieren.",
         "Meist im Hintergrund zu bleiben und unterstützend zu helfen.",
          "Ideen zu teilen, wenn man gefragt wird, aber das Rampenlicht zu meiden.",
           "Die Organisation der Aufgaben zu übernehmen, jedoch nicht die mündlichen Diskussionen."],
      answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
      dimension: "EI",
      image: "images/questions/q01.png",
    },
    {
      text: "Wenn Sie Pläne für das Wochenende machen, neigen Sie normalerweise dazu, …",
      answers: ["Nach einer großen sozialen Veranstaltung oder Party zu suchen.",
         "Eine ruhige Zeit allein mit einem Buch, Spiel oder einer Serie zu bevorzugen.",
          "Ein kleines Treffen mit ein oder zwei engen Freunden zu genießen.",
           "Spontanen Einladungen zuzusagen, wenn sie sich ergeben."],
      answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
      dimension: "EI",
      image: "images/questions/q02.png",
    },
    {
      text: "Bei einer großen sozialen Veranstaltung neigen Sie eher dazu, …",
      answers: ["Umherzugehen und mit vielen verschiedenen Menschen zu sprechen.", 
        "Bei einer vertrauten Person oder einer kleinen Gruppe zu bleiben.", 
        "Menschen miteinander bekannt zu machen und Gespräche am Laufen zu halten.", 
        "Eine ruhigere Ecke aufzusuchen und mehr zu beobachten als aktiv teilzunehmen."],
      answerWeights: [{ E: 2 }, { I: 2 }, { E: 1 }, { I: 1 }],
      dimension: "EI",
      image: "images/questions/q03.png",
    },
    {
      text: "Nach einem langen Tag laden Sie Ihre Energie am besten auf, indem Sie …",
      answers: ["Mit anderen Menschen zusammen sind, sich unterhalten oder gemeinsam spielen.", 
        "Zeit ganz allein in Ihrem eigenen Raum verbringen.", 
        "Einen engen Freund anrufen oder ihm schreiben.", 
        "In der Nähe anderer Menschen sind, ohne unbedingt viel zu sprechen."],
      answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
      dimension: "EI",
      image: "images/questions/q04.png",
    },
    {
      text: "Wenn Sie eine neue Umgebung betreten (zum Beispiel eine neue Klasse oder einen neuen Job), neigen Sie normalerweise dazu, …",
      answers: ["Sich schnell vorzustellen und viele Menschen kennenzulernen.", 
        "Zunächst zu warten und zu beobachten, bevor Sie mit neuen Personen sprechen.", 
        "Mit ein paar Personen zu sprechen, die zugänglich wirken.", 
        "Sich zuerst auf die Umgebung zu konzentrieren und sich dann langsam an Gesprächen zu beteiligen."],
      answerWeights: [{ E: 2 }, { I: 2 }, { E: 1 }, { I: 1 }],
      dimension: "EI",
      image: "images/questions/q05.png",
    },
    {
      text: "In den Pausen bei der Arbeit oder in der Schule bevorzugen Sie es normalerweise, …",
      answers: ["An Gruppengesprächen oder Aktivitäten teilzunehmen.", 
        "Etwas ruhige Zeit allein zu genießen.", 
        "Mit einer vertrauten Person zu sprechen.", 
        "In der Nähe anderer zu sein, ohne den Druck zu verspüren, sprechen zu müssen."],
      answerWeights: [{ E: 2 }, { I: 2 }, { I: 1 }, { E: 1 }],
      dimension: "EI",
      image: "images/questions/q06.png",
    },

    // SN: Sensing / Intuition
    {
      text: "Wenn Sie etwas Neues lernen, bevorzugen Sie es normalerweise, …",
      answers: ["Klare Fakten, reale Beispiele und Schritt-für-Schritt-Anleitungen zu nutzen.", 
        "Möglichkeiten, Theorien und große Ideen zu erkunden.", 
        "Praktisch zu lernen, mit detaillierter Anleitung.", 
        "Sich vorzustellen, wie es mit der Zukunft zusammenhängt und was daraus werden könnte."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q07.png",
    },
    {
      text: "Sie neigen dazu, Informationen zu vertrauen, die …",
      answers: ["Auf Ihren direkten Erfahrungen und dem beruhen, was Sie beobachten können.", 
        "Abstrakt, symbolisch sind oder auf Mustern basieren, die Sie erkennen.", 
        "Bereits in der realen Welt getestet wurden.", 
        "Sich wie eine interessante neue Möglichkeit anfühlen."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q08.png",
    },
    {
      text: "Bei der Planung einer Reise konzentrieren Sie sich eher auf …",
      answers: ["Genaue Termine, Tickets und detaillierte Tagespläne.", 
        "Die allgemeine Stimmung und wie sich das Erlebnis anfühlen könnte.", 
        "Praktische Aspekte wie Budget, Gepäck und Routen.", 
        "Die Vorstellung spontaner Abenteuer, die Sie dort erleben könnten."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q09.png",
    },
    {
      text: "In Gesprächen sprechen Sie normalerweise eher über …",
      answers: ["Geschichten aus dem echten Leben, Fakten und das, was tatsächlich passiert ist.", 
        "Ideen, Theorien und das, was in der Zukunft passieren könnte.", 
        "Konkrete Details und spezifische Beispiele.", 
        "Metaphern, Bedeutungen und zugrunde liegende Themen."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q10.png",
    },
    {
      text: "Wenn Sie etwas lesen oder ansehen, fällt Ihnen hauptsächlich Folgendes auf …",
      answers: ["Konkrete Fakten, Beschreibungen und was Menschen getan haben.",
         "Verborgene Bedeutungen, Symbolik und zugrunde liegende Botschaften.", 
         "Realistische Details, die der Funktionsweise des echten Lebens entsprechen.", 
         "Ideen, die auf größere Muster oder mögliche Zukünfte hindeuten könnten."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q11.png",
    },
    {
      text: "Beim Lösen eines Problems tun Sie normalerweise zuerst Folgendes …",
      answers: ["Die konkreten Fakten und Daten aufzulisten, die Sie bereits kennen.", 
        "Darüber nachzudenken, was das Problem langfristig bedeuten könnte.", 
        "Zu prüfen, was in ähnlichen Situationen zuvor funktioniert hat.", 
        "Mehrere kreative und ungewöhnliche Lösungsansätze zu brainstormen."],
      answerWeights: [{ S: 2 }, { N: 2 }, { S: 1 }, { N: 1 }],
      dimension: "SN",
      image: "images/questions/q12.png",
    },

    // TF: Thinking / Feeling
    {
      text: "Beim Lösen eines Konflikts konzentrieren Sie sich normalerweise eher auf …",
      answers: ["Das, was für alle am fairsten und logischsten ist.", 
        "Wie sich Menschen fühlen und wie Beziehungen geschützt werden können.", 
        "Das Aufzeigen von Widersprüchen und das Beheben der eigentlichen Ursache.", 
        "Anderen dabei zu helfen, sich gehört zu fühlen, selbst wenn es mehr Zeit in Anspruch nimmt."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q13.png",
    },
    {
      text: "Beim Geben von Feedback neigen Sie eher dazu, …",
      answers: ["Direkt und ehrlich zu sein, auch wenn es etwas hart klingt.", 
        "Ihre Worte abzumildern, um niemanden zu verletzen.", 
        "Sich darauf zu konzentrieren, was verbessert werden kann, mit klaren Begründungen.", 
        "Zuerst die positiven Aspekte hervorzuheben und danach behutsam auf Probleme hinzuweisen."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q14.png",
    },
    {
      text: "Sie sind eher motiviert durch …",
      answers: ["Klare Ziele, messbare Ergebnisse und Erfolge.", 
        "Das Gefühl, verbunden, wertgeschätzt und mit den eigenen Werten im Einklang zu sein.", 
        "Zu verstehen, welche Logik hinter dem steckt, was Sie tun.", 
        "Zu wissen, dass es jemandem wirklich hilft oder Unterstützung bietet."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q15.png",
    },
    {
      text: "Wenn jemand eine schlechte Entscheidung trifft, denken Sie normalerweise …",
      answers: ["Das war eine unlogische Entscheidung; wo ist der Denkfehler entstanden?", 
        "Die Person stand wahrscheinlich unter starkem emotionalem Druck.", 
        "Es wurde eine wichtige Tatsache oder ein Detail übersehen.", 
        "Die Person brauchte vermutlich mehr Unterstützung von anderen."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q16.png",
    },
    {
      text: "Wenn Sie zwischen zwei Optionen wählen, neigen Sie eher dazu, …",
      answers: ["Die Option zu wählen, die am logischsten und effizientesten ist.", 
        "Die Option zu wählen, die sich freundlicher und menschlicher anfühlt.", 
        "Die Option mit klareren Vor- und Nachteilen auf dem Papier.", 
        "Die Option, die besser zu Ihren persönlichen oder moralischen Werten passt."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q17.png",
    },
    {
      text: "Wenn ein Freund oder eine Freundin Sie um Rat bittet, reagieren Sie normalerweise, indem Sie …",
      answers: ["Die Situation analysieren und eine rationale Lösung vorschlagen.", 
        "Zunächst aufmerksam zuhören und die Gefühle der Person bestätigen.", 
        "Fragen stellen, um die logischen Details zu klären.", 
        "Die Person beruhigen und sich auf emotionale Unterstützung konzentrieren."],
      answerWeights: [{ T: 2 }, { F: 2 }, { T: 1 }, { F: 1 }],
      dimension: "TF",
      image: "images/questions/q18.png",
    },

    // JP: Judging / Perceiving
    {
      text: "Ihr idealer Arbeitsstil ist normalerweise …",
      answers: ["Für jeden Tag einen klaren Plan, eine Liste und einen Zeitplan zu haben.", 
        "Die Dinge offen und flexibel zu halten und Entscheidungen unterwegs zu treffen.", 
        "Organisiert zu arbeiten, mit Deadlines und Struktur.", 
        "Frei fließend zu arbeiten und sich je nach Stimmung und Inspiration anzupassen."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q19.png",
    },
    {
      text: "Wenn eine Deadline näher rückt, tun Sie normalerweise Folgendes …",
      answers: ["Früh anfangen und lange vor dem Abgabetermin fertig sein.", 
        "Unter Druck am besten arbeiten und oft erst kurz vor der Deadline beginnen.", 
        "Einen Zeitplan erstellen und diesen genau einhalten.", 
        "Eine Zeit lang Ideen sammeln und dann am Ende alles schnell fertigstellen."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q20.png",
    },
    {
      text: "Wenn Sie Ihr Zimmer oder Ihren Arbeitsplatz betrachten, ist es normalerweise …",
      answers: ["Ordentlich und gut organisiert, mit allem an seinem Platz.", 
        "Ein kreatives Chaos, das nur Sie selbst verstehen.", 
        "Größtenteils aufgeräumt, mit ein paar Stapeln, die einem System folgen.", 
        "Chaotisch, aber gemütlich; Sie räumen auf, wenn Sie Lust dazu haben."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q21.png",
    },
    {
      text: "Wenn sich Pläne plötzlich ändern, neigen Sie dazu, …",
      answers: ["Sich zu ärgern und schnell neu zu organisieren.", 
        "Sich über neue Möglichkeiten zu freuen oder neugierig zu werden.", 
        "So schnell wie möglich wieder Struktur herzustellen.", 
        "Mit dem Fluss zu gehen und abzuwarten, was passiert."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q22.png",
    },
    {
      text: "Wenn Sie ein neues Projekt beginnen, bevorzugen Sie es normalerweise, …",
      answers: ["Die Schritte und Deadlines festzulegen, bevor Sie anfangen.", 
        "Direkt einzusteigen und die Dinge unterwegs herauszufinden.", 
        "Die grobe Struktur zu skizzieren und die Details später auszuarbeiten.", 
        "Zunächst frei zu experimentieren und das Entdeckte anschließend zu organisieren."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q23.png",
    },
    {
      text: "Wie gehen Sie normalerweise mit Routinen wie Essen, Schlaf oder Bewegung um?",
      answers: ["Ich mag feste Routinen und fühle mich am besten, wenn ich mich daran halte.", 
        "Ich bevorzuge es, sie flexibel zu halten und häufig zu verändern.", 
        "Ich halte eine gewisse Struktur ein, lasse aber kleine Abweichungen zu.", 
        "Ich folge meistens meiner aktuellen Stimmung und Energie."],
      answerWeights: [{ J: 2 }, { P: 2 }, { J: 1 }, { P: 1 }],
      dimension: "JP",
      image: "images/questions/q24.png",
    },
  ],
};

function getQuestions() {
  return questionsByLanguage[currentLanguage] || questionsByLanguage.en;
}

const appTitleEl = document.getElementById("app-title");
const appSubtitleEl = document.getElementById("app-subtitle");
const languageSelectEl = document.getElementById("language-select");
const languageLabelEls = document.getElementsByClassName("language-label");

const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const resultTitleEl = resultScreen.querySelector("h2");
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

// Labels (first span) in the result summary list
const summaryLabelE = summaryE?.previousElementSibling;
const summaryLabelI = summaryI?.previousElementSibling;
const summaryLabelS = summaryS?.previousElementSibling;
const summaryLabelN = summaryN?.previousElementSibling;
const summaryLabelT = summaryT?.previousElementSibling;
const summaryLabelF = summaryF?.previousElementSibling;
const summaryLabelJ = summaryJ?.previousElementSibling;
const summaryLabelP = summaryP?.previousElementSibling;

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
      "Responsible, detail‑oriented, and reliable. They prefer clear rules, structure, and proven methods. Decide logically what should be done and work toward it steadily, regardless of distractions. Take pleasure in making everything orderly and organized—their work, their home, their life. Value traditions and loyalty.",
    jobs: [
      "Auditor, accountant or financial analyst",
      "Project or operations manager",
      "Quality assurance or compliance specialist",
    ],
    bestMatches: ["ESFP", "ESTP", "ISFJ"],
    image: "images/types/ISTJ.png",
  },
  ISFJ: {
    name: "The Protector (Core group: 🛡️ SENTINELS)",
    description:
      "Warm, caring, and dependable. They notice what others need and quietly keep things running. Committed and steady in meeting their obligations. Loyal, considerate, notice and remember specifics about people who are important to them, concerned with how others feel. Strive to create an orderly and harmonious environment at work and at home.",
    jobs: [
      "Nurse, healthcare support or caregiver",
      "Teacher in structured environments",
      "Administrative or support coordinator",
    ],
    bestMatches: ["ESFP", "ESTP", "ISFP"],
    image: "images/types/ISFJ.png",
  },
  INFJ: {
    name: "The Advocate (Core group: 🤝 DIPLOMATS)",
    description:
      "Insightful, idealistic and values authenticity. They deeply care about meaning and helping others grow.  Want to understand what motivates people and are insightful about others. Conscientious and committed to their firm values. Develop a clear vision about how best to serve the common good. Organized and decisive in implementing their vision.",
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
      "Strategic, independent and future‑oriented. They enjoy solving complex problem with long‑term plans. Have original minds and great drive for implementing their ideas and achieving their goals. Quickly see patterns in external events and develop long-range explanatory perspectives. When committed, organize a job and carry it through. Skeptical and independent, have high standards of competence and performance—for themselves and others.",
    jobs: [
      "Data scientist, systems architect or engineer",
      "Researcher or strategist",
      "Product or technical lead",
    ],
    bestMatches: ["ENFP", "ENTP", "INTP"],
    image: "images/types/INTJ.png",
  },
  ISTP: {
    name: "The Virtuoso (Core group: ⚡ EXPLORERS)",
    description:
      "Curious, hands‑on, and resourceful. They likes to figure out how things work by experimenting. Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions. Analyze what makes things work and readily get through large amounts of data to isolate the core of practical problems. Interested in cause and effect, organize facts using logical principles, value efficiency.",
    jobs: [
      "Mechanic, technician or engineer",
      "Emergency responder or field technician",
      "Craftsperson or maker",
    ],
    bestMatches: ["ESFJ", "ESTJ", "ISFP"],
    image: "images/types/ISTP.png",
  },
  ISFP: {
    name: "The Artist (Core group: ⚡ EXPLORERS)",
    description:
      "Gentle, flexible and creative. They value personal freedom and expressing themselves in unique ways. Enjoy the present moment, what's going on around them. Like to have their own space and to work within their own time frame. Loyal and committed to their values and to people who are important to them. Dislike disagreements and conflicts; don't force their opinions or values on others.",
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
      "Idealistic, empathetic and guided by strong inner values. They seek meaning and harmony in life. Idealistic, loyal to their values and to people who are important to them. Want to live a life that is congruent with their values. Curious, quick to see possibilities, can be catalysts for implementing ideas. Seek to understand people and to help them fulfill their potential. Adaptable, flexible, and accepting unless a value is threatened.",
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
      "Analytical, theoretical and independent. They love exploring ideas and understanding complex systems. Seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction. Quiet, contained, flexible, and adaptable. Have unusual ability to focus in depth to solve problems in their area of interest. Skeptical, sometimes critical, always analytical.",
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
      "Energetic, action‑oriented and realistic. They enjoy challenges, risks, and hands‑on experiences. Flexible and tolerant, take a pragmatic approach focused on immediate results. Bored by theories and conceptual explanations; want to act energetically to solve the problem. Focus on the here and now, spontaneous, enjoy each moment they can be active with others. Enjoy material comforts and style. Learn best through doing.",
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
      "Spontaneous, friendly and playful. They brings energy to social situations and live in the moment. Exuberant lovers of life, people, and material comforts. Enjoy working with others to make things happen. Bring common sense and a realistic approach to their work and make work fun. Flexible and spontaneous, adapt readily to new people and environments. Learn best by trying a new skill with other people.",
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
      "Enthusiastic, imaginative and people‑focused. They see potential everywhere and inspire others. Make connections between events and information very quickly, and confidently proceed based on the patterns they see. Want a lot of affirmation from others, and readily give appreciation and support. Spontaneous and flexible, often rely on their ability to improvise and their verbal fluency.",
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
      "Quick‑witted, inventive and loves exploring new angles. They enjoy lively discussions and challenges. Resourceful in solving new and challenging problems. Adept at generating conceptual possibilities and then analyzing them strategically. Good at reading other people. Bored by routine, will seldom do the same thing the same way, apt to turn to one new interest after another.",
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
      "Organized, ealistic, matter-of-fact and practical. Naturally they take charge and focus on efficient results. Decisive, quickly move to implement decisions. Organize projects and people to get things done, focus on getting results in the most efficient way possible. Take care of routine details. Have a clear set of logical standards, systematically follow them and want others to also. Forceful in implementing their plans.",
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
      "Supportive, social, and responsible. They value harmony and take care of people and traditions and they work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-to-day lives and try to provide it. Want to be appreciated for who they are and for what they contribute.",
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
      "Warm, responsible, charismatic, empathetic and inspiring. They help others grow and bring people together. Highly attuned to the emotions, needs, and motivations of others. Find potential in everyone, want to help others fulfill their potential. May act as catalysts for individual and group growth. Loyal, responsive to praise and criticism. Sociable, facilitate others in a group, and provide inspiring leadership.",
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
      "Confident, strategic, goal‑driven, frank, decisive, assume leadership readily. They see the big picture and organize people to achieve it. Quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems. Enjoy long-term planning and goal setting. Usually well informed, well read, enjoy expanding their knowledge and passing it on to others. Forceful in presenting their ideas.",
    jobs: [
      "Executive or director‑level leadership",
      "Business, law, or high‑responsibility management",
      "Strategic consulting or entrepreneurship",
    ],
    bestMatches: ["INFP", "INTP", "ENFP"],
    image: "images/types/ENTJ.png",
  },
};



// Localized result copy (name + long body text) per language and type
const resultCopyByLanguage = {
  en: {
    ISTJ: {
      name: personalityTypes.ISTJ.name,
      body: `
        ${personalityTypes.ISTJ.description}
        Recommended job themes: ${personalityTypes.ISTJ.jobs.join(", ")}.
        Compatibility: In long-term relationships, ISTJ types often report strong bonds with ${personalityTypes.ISTJ.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ISFJ: {
      name: personalityTypes.ISFJ.name,
      body: `
        ${personalityTypes.ISFJ.description}
        Recommended job themes: ${personalityTypes.ISFJ.jobs.join(", ")}.
        Compatibility: In long-term relationships, ISFJ types often report strong bonds with ${personalityTypes.ISFJ.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    INFJ: {
      name: personalityTypes.INFJ.name,
      body: `
        ${personalityTypes.INFJ.description}
        Recommended job themes: ${personalityTypes.INFJ.jobs.join(", ")}.
        Compatibility: In long-term relationships, INFJ types often report strong bonds with ${personalityTypes.INFJ.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    INTJ: {
      name: personalityTypes.INTJ.name,
      body: `
        ${personalityTypes.INTJ.description}
        Recommended job themes: ${personalityTypes.INTJ.jobs.join(", ")}.
        Compatibility: In long-term relationships, INTJ types often report strong bonds with ${personalityTypes.INTJ.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ISTP: {
      name: personalityTypes.ISTP.name,
      body: `
        ${personalityTypes.ISTP.description}
        Recommended job themes: ${personalityTypes.ISTP.jobs.join(", ")}.
        Compatibility: In long-term relationships, ISTP types often report strong bonds with ${personalityTypes.ISTP.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ISFP: {
      name: personalityTypes.ISFP.name,
      body: `
        ${personalityTypes.ISFP.description}
        Recommended job themes: ${personalityTypes.ISFP.jobs.join(", ")}.
        Compatibility: In long-term relationships, ISFP types often report strong bonds with ${personalityTypes.ISFP.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    INFP: {
      name: personalityTypes.INFP.name,
      body: `
        ${personalityTypes.INFP.description}
        Recommended job themes: ${personalityTypes.INFP.jobs.join(", ")}.
        Compatibility: In long-term relationships, INFP types often report strong bonds with ${personalityTypes.INFP.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    INTP: {
      name: personalityTypes.INTP.name,
      body: `
        ${personalityTypes.INTP.description}
        Recommended job themes: ${personalityTypes.INTP.jobs.join(", ")}.
        Compatibility: In long-term relationships, INTP types often report strong bonds with ${personalityTypes.INTP.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ESTP: {
      name: personalityTypes.ESTP.name,
      body: `
        ${personalityTypes.ESTP.description}
        Recommended job themes: ${personalityTypes.ESTP.jobs.join(", ")}.
        Compatibility: In long-term relationships, ESTP types often report strong bonds with ${personalityTypes.ESTP.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ESFP: {
      name: personalityTypes.ESFP.name,
      body: `
        ${personalityTypes.ESFP.description}
        Recommended job themes: ${personalityTypes.ESFP.jobs.join(", ")}.
        Compatibility: In long-term relationships, ESFP types often report strong bonds with ${personalityTypes.ESFP.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ENFP: {
      name: personalityTypes.ENFP.name,
      body: `
        ${personalityTypes.ENFP.description}
        Recommended job themes: ${personalityTypes.ENFP.jobs.join(", ")}.
        Compatibility: In long-term relationships, ENFP types often report strong bonds with ${personalityTypes.ENFP.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ENTP: {
      name: personalityTypes.ENTP.name,
      body: `
        ${personalityTypes.ENTP.description}
        Recommended job themes: ${personalityTypes.ENTP.jobs.join(", ")}.
        Compatibility: In long-term relationships, ENTP types often report strong bonds with ${personalityTypes.ENTP.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ESTJ: {
      name: personalityTypes.ESTJ.name,
      body: `
        ${personalityTypes.ESTJ.description}
        Recommended job themes: ${personalityTypes.ESTJ.jobs.join(", ")}.
        Compatibility: In long-term relationships, ESTJ types often report strong bonds with ${personalityTypes.ESTJ.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ESFJ: {
      name: personalityTypes.ESFJ.name,
      body: `
        ${personalityTypes.ESFJ.description}
        Recommended job themes: ${personalityTypes.ESFJ.jobs.join(", ")}.
        Compatibility: In long-term relationships, ESFJ types often report strong bonds with ${personalityTypes.ESFJ.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ENFJ: {
      name: personalityTypes.ENFJ.name,
      body: `
        ${personalityTypes.ENFJ.description}
        Recommended job themes: ${personalityTypes.ENFJ.jobs.join(", ")}.
        Compatibility: In long-term relationships, ENFJ types often report strong bonds with ${personalityTypes.ENFJ.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
    ENTJ: {
      name: personalityTypes.ENTJ.name,
      body: `
        ${personalityTypes.ENTJ.description}
        Recommended job themes: ${personalityTypes.ENTJ.jobs.join(", ")}.
        Compatibility: In long-term relationships, ENTJ types often report strong bonds with ${personalityTypes.ENTJ.bestMatches.join(", ")}, because these personalities either share core values or balance out blind spots.
        Personality is only one factor, but shared communication style and complementary strengths can make it easier to build a stable, cooperative partnership.
      `,
    },
  },
tr: {
  ISTJ: {
    name: "Denetçi (Temel grup: 🛡️ GÖZETMENLER)",
    body: `
      ISTJ’ler sorumluluk sahibi, düzen odaklı ve ayrıntılara dikkat eden kişilerdir.
      Net kurallar, yapı ve kanıtlanmış yöntemlerle çalışmayı severler.
      Kararlarını çoğunlukla mantık ve gerçeklere dayandırır, dikkat dağıtıcı unsurlara rağmen hedefe adım adım ilerlerler.
      İşlerini, evlerini ve hayatlarını düzenli tutmaktan keyif alırlar; geleneklere ve sadakate büyük önem verirler.

      Önerilen iş temaları: ${personalityTypes.ISTJ.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ISTJ tipleri genellikle ${personalityTypes.ISTJ.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler ya temel değerleri paylaşır
      ya da birbirlerinin zayıf yönlerini dengeler.
      Kişilik tek başına belirleyici değildir; ancak benzer iletişim tarzı ve tamamlayıcı güçlü yönler,
      istikrarlı ve uyumlu bir ilişki kurmayı kolaylaştırabilir.
    `,
  },
  ISFJ: {
    name: "Koruyucu (Temel grup: 🛡️ GÖZETMENLER)",
    body: `
      ISFJ’ler sıcak, destekleyici ve güvenilir kişilerdir.
      Başkalarının neye ihtiyaç duyduğunu fark eder, çoğu zaman arka planda kalarak her şeyin yolunda gitmesini sağlarlar.
      Sorumluluklarını ciddiye alırlar ve verdikleri sözleri yerine getirmek için gayret gösterirler.
      Detaylara dikkat eder, sevdikleri insanlarla ilgili küçük ayrıntıları bile hatırlarlar.
      Hem işte hem evde düzenli ve huzurlu bir ortam oluşturmayı önemserler.

      Önerilen iş temaları: ${personalityTypes.ISFJ.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ISFJ tipleri genellikle ${personalityTypes.ISFJ.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler benzer değerler taşır
      ya da karşılıklı olarak birbirlerinin zayıf yanlarını dengeler.
      Kişilik tek başına belirleyici değildir; ancak karşılıklı saygı ve tamamlayıcı güçlü yönler,
      sakin ve destekleyici ilişkiler kurulmasına yardımcı olabilir.
    `,
  },
  INFJ: {
    name: "Savunucu (Temel grup: 🤝 DİPLOMATLAR)",
    body: `
      INFJ’ler anlam arayışında olan, idealist ve empatik kişilerdir.
      İnsanların iç dünyasını ve motivasyonlarını anlamaya çalışır, başkalarının gelişimine katkı sunmak isterler.
      Kendi değerlerine derinden bağlıdırlar ve yaşamlarının bu değerlerle uyumlu olmasına önem verirler.
      Çoğu zaman daha adil, daha insancıl bir dünya hayal eder ve bu vizyonu hayata geçirmek için planlı şekilde hareket ederler.

      Önerilen iş temaları: ${personalityTypes.INFJ.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, INFJ tipleri genellikle ${personalityTypes.INFJ.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler benzer idealleri paylaşır
      ya da INFJ’nin göremediği kör noktaları tamamlayabilir.
      Kişilik tek başına belirleyici değildir; ancak derin iletişim ve ortak değerler,
      güvene dayalı ve anlamlı ilişkiler kurulmasını kolaylaştırabilir.
    `,
  },
  INTJ: {
    name: "Mimar (Temel grup: 🧠 ANALİSTLER)",
    body: `
      INTJ’ler stratejik düşünen, bağımsız ve geleceğe dönük kişilerdir.
      Karmaşık problemleri analiz etmeyi ve uzun vadeli planlar yapmayı severler.
      Dış dünyadaki örüntüleri ve sistemleri hızlıca fark eder, bunlardan tutarlı modeller oluştururlar.
      Hem kendileri hem de çevreleri için yüksek standartlar koyar, verimlilik ve yetkinliğe önem verirler.

      Önerilen iş temaları: ${personalityTypes.INTJ.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, INTJ tipleri genellikle ${personalityTypes.INTJ.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler ya benzer entelektüel ilgileri paylaşır
      ya da INTJ’nin vizyonunu destekleyici farklı bakış açıları sunar.
      Kişilik tek başına belirleyici değildir; ancak mantıklı, açık iletişim ve karşılıklı saygı,
      hedef odaklı ve dengeli ilişkiler kurulmasına yardımcı olabilir.
    `,
  },
  ISTP: {
    name: "Usta (Temel grup: ⚡ KAŞİFLER)",
    body: `
      ISTP’ler meraklı, pratik ve çözüm odaklı kişilerdir.
      Bir şeyin nasıl çalıştığını deneyerek keşfetmeyi sever, sorun çıktığında sakin kalıp işe yarar çözümler üretirler.
      Teorik tartışmalardan çok, doğrudan uygulamaya ve somut sonuçlara odaklanırlar.
      Özgürlüklerine düşkündürler ve aşırı kontrol altında olmaktan hoşlanmazlar.

      Önerilen iş temaları: ${personalityTypes.ISTP.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ISTP tipleri genellikle ${personalityTypes.ISTP.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler ya yapı ve düzen getirir
      ya da ISTP’nin pratik, sakin tarzını duygusal sıcaklıkla dengeler.
      Kişilik tek başına belirleyici değildir; ancak karşılıklı alan tanımak ve esnek iletişim,
      uzun ömürlü ve güvenilir ilişkiler için önemlidir.
    `,
  },
  ISFP: {
    name: "Sanatçı (Temel grup: ⚡ KAŞİFLER)",
    body: `
      ISFP’ler yumuşak huylu, esnek ve çoğu zaman yaratıcı kişilerdir.
      Kendi yollarıyla ifade etmeyi sever, baskıdan uzak, sakin ve uyumlu ortamları tercih ederler.
      Anı yaşamaya eğilimlidirler; estetik, doğa ve duyusal deneyimler onlar için önemlidir.
      Çatışmalardan kaçınma eğilimleri vardır ve değerlerini daha çok davranışlarıyla gösterirler.

      Önerilen iş temaları: ${personalityTypes.ISFP.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ISFP tipleri genellikle ${personalityTypes.ISFP.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler benzer duyarlılığı paylaşır
      ya da ISFP’nin akışta olma isteğine yapı ve destek getirir.
      Kişilik tek başına belirleyici değildir; ancak anlayışlı, sabırlı ve esnek bir iletişim,
      nazik ve besleyici ilişkiler için zemin hazırlar.
    `,
  },
  INFP: {
    name: "Arabulucu (Temel grup: 🤝 DİPLOMATLAR)",
    body: `
      INFP’ler idealist, empatik ve güçlü iç değerlere sahip kişilerdir.
      Hayatlarında anlam, özgünlük ve içsel uyum ararlar; yaptıkları işin inandıkları değerlerle örtüşmesi onlar için önemlidir.
      Genellikle başkalarına destek olmak, adalet ve eşitlik gibi konularda katkı sunmak isterler.
      Sessiz görünseler de, iç dünyalarında zengin bir hayal gücü ve güçlü duygular taşırlar.

      Önerilen iş temaları: ${personalityTypes.INFP.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, INFP tipleri genellikle ${personalityTypes.INFP.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler benzer idealleri paylaşır
      ya da INFP’nin değer odaklı bakışını gerçekçi planlarla tamamlar.
      Kişilik tek başına belirleyici değildir; ancak derin empati, açık iletişim ve karşılıklı destek,
      uzun vadeli, anlam dolu ilişkiler için önemlidir.
    `,
  },
  INTP: {
    name: "Düşünür (Temel grup: 🧠 ANALİSTLER)",
    body: `
      INTP’ler analitik, teorik ve bağımsız düşünen kişilerdir.
      Fikirleri, sistemleri ve kavramları derinlemesine incelemeyi sever; mantıklı açıklamalar bulmaktan keyif alırlar.
      Sosyal formalitelerden ziyade, ilginç fikir alışverişleri onlar için daha çekicidir.
      Merak ettikleri bir konuya odaklandıklarında zamanın nasıl geçtiğini unutabilirler.

      Önerilen iş temaları: ${personalityTypes.INTP.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, INTP tipleri genellikle ${personalityTypes.INTP.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler ya benzer zihinsel esnekliği paylaşır
      ya da INTP’nin analitik yanını duygusal derinlik ve yapı ile destekler.
      Kişilik tek başına belirleyici değildir; ancak mantıklı, açık ve esnek iletişim,
      zihinsel açıdan uyarıcı ve dengeli ilişkiler kurulmasına yardımcı olabilir.
    `,
  },
  ESTP: {
    name: "Macera Lideri (Temel grup: ⚡ KAŞİFLER)",
    body: `
      ESTP’ler enerjik, eylem odaklı ve gerçekçi kişilerdir.
      Zorlukları ve anlık fırsatları sever, harekete geçmekten çekinmezler.
      Uzun teorik açıklamalar yerine, doğrudan denemeyi ve sonuç görmeyi tercih ederler.
      Sosyal ortamlarda çoğu zaman girişken, cesur ve etkileyici bulunurlar.

      Önerilen iş temaları: ${personalityTypes.ESTP.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ESTP tipleri genellikle ${personalityTypes.ESTP.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler hem macera hem de denge sunabilir.
      Kişilik tek başına belirleyici değildir; ancak hem özgürlüğe hem de sorumluluğa alan tanıyan ilişkiler,
      ESTP’ler için daha sürdürülebilir olmaktadır.
    `,
  },
  ESFP: {
    name: "Eğlendirici (Temel grup: ⚡ KAŞİFLER)",
    body: `
      ESFP’ler neşeli, spontan ve insanlarla birlikte olmaktan hoşlanan kişilerdir.
      Bulundukları ortama enerji ve canlılık katar, anın tadını çıkarmayı severler.
      Duyusal deneyimlere ve keyifli etkinliklere değer verirler; rutin ve sıkıcı işlerden çabuk sıkılabilirler.
      Başkalarını rahatlatan, sıcak ve samimi bir iletişim tarzına sahiptirler.

      Önerilen iş temaları: ${personalityTypes.ESFP.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ESFP tipleri genellikle ${personalityTypes.ESFP.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler ESFP’nin canlı tarzını yapı, destek
      veya benzer sosyal enerjiyle tamamlar.
      Kişilik tek başına belirleyici değildir; ancak karşılıklı takdir, mizah ve esneklik,
      hem eğlenceli hem de güvenli ilişkiler kurmayı kolaylaştırabilir.
    `,
  },
  ENFP: {
    name: "Kampanyacı (Temel grup: 🤝 DİPLOMATLAR)",
    body: `
      ENFP’ler genellikle canlı, hayal gücü yüksek ve insan odaklı kişilerdir.
      Çevrelerinde her yerde potansiyel görür, başkalarını ilham vererek harekete geçirirler.
      Fikirler ve insanlar arasında hızlı bağlantılar kurar, yeni olasılıkları keşfetmekten keyif alırlar.
      Çoğu zaman başkalarından onay ve takdir bekler; aynı zamanda çevrelerine güçlü bir duygusal destek sunarlar.
      Spontane ve esnektirler; doğaçlama yetenekleri ve ifade gücü yüksek iletişim tarzlarıyla tanınırlar.

      Önerilen iş temaları: ${personalityTypes.ENFP.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ENFP tipleri genellikle ${personalityTypes.ENFP.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler ya benzer değerleri paylaşır
      ya da ENFP’nin zayıf yönlerini tamamlayacak farklı güçlü yanlara sahiptir.
      Kişilik tek başına belirleyici değildir; ancak benzer veya uyumlu bir iletişim tarzı ile
      tamamlayıcı güçlü yönler, istikrarlı ve destekleyici bir ilişki kurmayı kolaylaştırabilir.
    `,
  },
  ENTP: {
    name: "Tartışmacı (Temel grup: 🧠 ANALİSTLER)",
    body: `
      ENTP’ler zeki, esprili ve yeni bakış açılarını keşfetmeyi seven kişilerdir.
      Canlı tartışmalardan, fikir alışverişinden ve zorlu sorulardan keyif alırlar.
      Mevcut kuralları ve kabulleri sorgulamaya eğilimlidirler; alışılmadık veya yenilikçi çözümlere açıktırlar.
      Rutin ve tekdüze işlerden çabuk sıkılabilir, çeşitlilik ve zihinsel uyarım ararlar.

      Önerilen iş temaları: ${personalityTypes.ENTP.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ENTP tipleri genellikle ${personalityTypes.ENTP.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler hem entelektüel derinlik
      hem de duygusal denge sunabilir.
      Kişilik tek başına belirleyici değildir; ancak mizah, merak ve açık fikirli bir iletişim tarzı,
      dinamik ve canlandırıcı ilişkiler için önemlidir.
    `,
  },
  ESTJ: {
    name: "Yönetici (Temel grup: 🛡️ GÖZETMENLER)",
    body: `
      ESTJ’ler organize, sonuç odaklı ve pratik kişilerdir.
      Doğal olarak sorumluluk alır, işleri planlar ve verimli şekilde ilerlemesini sağlarlar.
      Net kurallar, roller ve ölçülebilir sonuçlar onlar için önemlidir.
      Kararlıdırlar ve genellikle çevresindekilerin de sorumluluklarını ciddiye almalarını beklerler.

      Önerilen iş temaları: ${personalityTypes.ESTJ.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ESTJ tipleri genellikle ${personalityTypes.ESTJ.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler ya duygusal sıcaklık ve esneklik katar
      ya da ESTJ’nin yapılandırıcı tavrını destekler.
      Kişilik tek başına belirleyici değildir; ancak açık, net ve saygılı iletişim,
      sağlam ve hedef odaklı ilişkiler kurulmasını kolaylaştırabilir.
    `,
  },
  ESFJ: {
    name: "Gelenekçi (Temel grup: 🛡️ GÖZETMENLER)",
    body: `
      ESFJ’ler destekleyici, sosyal ve sorumluluk sahibi kişilerdir.
      Başkalarının ihtiyaçlarına duyarlıdırlar ve çevrelerinde uyumlu bir atmosfer yaratmak için çaba gösterirler.
      Aile, arkadaşlar ve ekip içinde düzen ve dayanışma onlar için çok önemlidir.
      Eleştiriyi kişisel algılayabilirler, ancak içten takdir gördüklerinde büyük motivasyon kazanırlar.

      Önerilen iş temaları: ${personalityTypes.ESFJ.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ESFJ tipleri genellikle ${personalityTypes.ESFJ.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler benzer sadakat ve sorumluluk anlayışını paylaşır
      ya da ESFJ’nin bakım veren yönünü destekleyici bir yapı sunar.
      Kişilik tek başına belirleyici değildir; ancak karşılıklı takdir, şefkat ve iş birliği,
      istikrarlı ve sıcak ilişkiler oluşturmayı kolaylaştırabilir.
    `,
  },
  ENFJ: {
    name: "Önder (Temel grup: 🤝 DİPLOMATLAR)",
    body: `
      ENFJ’ler sıcak, sorumluluk sahibi ve çoğu zaman ilham verici liderlerdir.
      Başkalarının duygularını ve ihtiyaçlarını çok iyi fark eder, insanları bir araya getirmeyi severler.
      Çevrelerindeki kişilerin potansiyelini görmek ve bunu ortaya çıkarmaya yardımcı olmak onlar için önemlidir.
      Grup ortamlarında doğal bir kolaylaştırıcı ve motive edici rol üstlenirler.

      Önerilen iş temaları: ${personalityTypes.ENFJ.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ENFJ tipleri genellikle ${personalityTypes.ENFJ.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler benzer empati ve gelişim odaklı bakış açısını paylaşır
      ya da ENFJ’nin yoğun sorumluluk duygusuna denge sağlar.
      Kişilik tek başına belirleyici değildir; ancak açık iletişim, karşılıklı destek ve duygusal farkındalık,
      derin ve besleyici ilişkiler kurmayı kolaylaştırabilir.
    `,
  },
  ENTJ: {
    name: "Komutan (Temel grup: 🧠 ANALİSTLER)",
    body: `
      ENTJ’ler kendine güvenen, stratejik ve güçlü hedef odaklı kişilerdir.
      Büyük resmi görmeyi, uzun vadeli planlar yapmayı ve insanları bu doğrultuda organize etmeyi severler.
      Verimsizlikten ve belirsizlikten çabuk rahatsız olabilir, net kararlar ve etkili sistemler kurmaya çalışırlar.
      Doğrudan ve iddialı olmaları nedeniyle zaman zaman sert algılansalar da genellikle güçlü bir vizyona sahiptirler.

      Önerilen iş temaları: ${personalityTypes.ENTJ.jobs.join(", ")}.

      Uyumluluk: Uzun vadeli ilişkilerde, ENTJ tipleri genellikle ${personalityTypes.ENTJ.bestMatches.join(", ")} tipleriyle
      güçlü bağlar kurduklarını bildirir; çünkü bu kişilikler duygusal derinlik, yaratıcı fikirler
      veya analitik güç gibi tamamlayıcı nitelikler sunar.
      Kişilik tek başına belirleyici değildir; ancak karşılıklı saygı, netlik ve ortak hedefler,
      güçlü ve geleceğe dönük ilişkiler kurulmasına yardımcı olabilir.
    `,
  },
},

de: {
  ISTJ: {
    name: personalityTypes.ISTJ.name,
    body: `
      ${personalityTypes.ISTJ.description}
      Empfohlene Berufsfelder: ${personalityTypes.ISTJ.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ISTJ‑Typen häufig von starken Bindungen mit ${personalityTypes.ISTJ.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ISFJ: {
    name: personalityTypes.ISFJ.name,
    body: `
      ${personalityTypes.ISFJ.description}
      Empfohlene Berufsfelder: ${personalityTypes.ISFJ.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ISFJ‑Typen häufig von starken Bindungen mit ${personalityTypes.ISFJ.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  INFJ: {
    // Vollständig lokalisierter deutscher Text für INFJ
    name: "Der Advokat (Hauptgruppe: 🤝 DIPLOMATEN)",
    body: `
      INFJ‑Typen sind in der Regel sehr einfühlsam, idealistisch und legen großen Wert auf Authentizität.
      Sie beschäftigen sich intensiv mit Sinnfragen und möchten anderen Menschen beim Wachsen und Entfalten helfen.
      Häufig versuchen sie zu verstehen, was andere motiviert, und nehmen subtile emotionale Signale sehr fein wahr.
      Sie sind gewissenhaft, folgen ihren inneren Werten und möchten einen positiven Beitrag zum Gemeinwohl leisten.
      Gleichzeitig entwickeln sie oft eine klare Vision davon, wie die Welt gerechter, menschlicher oder sinnvoller gestaltet werden kann,
      und gehen organisiert und entschlossen vor, um diese Vision in die Tat umzusetzen.

      Empfohlene Berufsfelder: ${personalityTypes.INFJ.jobs.join(", ")}.

      Kompatibilität: In langfristigen Beziehungen berichten INFJ‑Typen häufig von starken Bindungen mit ENFP, ENFJ, INFP,
      da diese Persönlichkeiten ähnliche Werte teilen oder INFJ in seinen blinden Flecken ergänzen können.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und sich ergänzende Stärken
      können den Aufbau einer stabilen, vertrauensvollen und kooperativen Partnerschaft deutlich erleichtern.
    `,
  },
  INTJ: {
    name: personalityTypes.INTJ.name,
    body: `
      ${personalityTypes.INTJ.description}
      Empfohlene Berufsfelder: ${personalityTypes.INTJ.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten INTJ‑Typen häufig von starken Bindungen mit ${personalityTypes.INTJ.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ISTP: {
    name: personalityTypes.ISTP.name,
    body: `
      ${personalityTypes.ISTP.description}
      Empfohlene Berufsfelder: ${personalityTypes.ISTP.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ISTP‑Typen häufig von starken Bindungen mit ${personalityTypes.ISTP.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ISFP: {
    name: personalityTypes.ISFP.name,
    body: `
      ${personalityTypes.ISFP.description}
      Empfohlene Berufsfelder: ${personalityTypes.ISFP.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ISFP‑Typen häufig von starken Bindungen mit ${personalityTypes.ISFP.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  INFP: {
    // Vollständig lokalisierter deutscher Text für INFP
    name: "Der Mediator (Hauptgruppe: 🤝 DIPLOMATEN)",
    body: `
      INFP‑Typen sind meist idealistisch, einfühlsam und stark von ihren inneren Werten geleitet.
      Sie suchen nach Sinn, Authentizität und Harmonie im Leben und möchten, dass ihr Handeln mit ihren Überzeugungen im Einklang steht.
      Oft engagieren sie sich für Themen, die ihnen moralisch wichtig sind, und fühlen sich zu Menschen hingezogen, die Unterstützung oder Ermutigung brauchen.
      Sie sind neugierig, sehen schnell neue Möglichkeiten und können als leise, aber wirkungsvolle Impulsgeber für Veränderungen auftreten.
      Gleichzeitig sind sie anpassungsfähig und tolerant, solange ihre grundlegenden Werte nicht verletzt werden.

      Empfohlene Berufsfelder: ${personalityTypes.INFP.jobs.join(", ")}.

      Kompatibilität: In langfristigen Beziehungen berichten INFP‑Typen häufig von starken Bindungen mit ENFJ, ENTJ, INFJ,
      da diese Persönlichkeiten ähnliche Ideale teilen oder INFP dabei unterstützen können, ihre Visionen praktisch umzusetzen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und sich ergänzende Stärken
      können den Aufbau einer stabilen, wertschätzenden und unterstützenden Partnerschaft deutlich erleichtern.
    `,
  },
  INTP: {
    name: personalityTypes.INTP.name,
    body: `
      ${personalityTypes.INTP.description}
      Empfohlene Berufsfelder: ${personalityTypes.INTP.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten INTP‑Typen häufig von starken Bindungen mit ${personalityTypes.INTP.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ESTP: {
    name: personalityTypes.ESTP.name,
    body: `
      ${personalityTypes.ESTP.description}
      Empfohlene Berufsfelder: ${personalityTypes.ESTP.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ESTP‑Typen häufig von starken Bindungen mit ${personalityTypes.ESTP.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ESFP: {
    name: personalityTypes.ESFP.name,
    body: `
      ${personalityTypes.ESFP.description}
      Empfohlene Berufsfelder: ${personalityTypes.ESFP.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ESFP‑Typen häufig von starken Bindungen mit ${personalityTypes.ESFP.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ENFP: {
    name: personalityTypes.ENFP.name,
    body: `
      ${personalityTypes.ENFP.description}
      Empfohlene Berufsfelder: ${personalityTypes.ENFP.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ENFP‑Typen häufig von starken Bindungen mit ${personalityTypes.ENFP.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ENTP: {
    name: personalityTypes.ENTP.name,
    body: `
      ${personalityTypes.ENTP.description}
      Empfohlene Berufsfelder: ${personalityTypes.ENTP.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ENTP‑Typen häufig von starken Bindungen mit ${personalityTypes.ENTP.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ESTJ: {
    name: personalityTypes.ESTJ.name,
    body: `
      ${personalityTypes.ESTJ.description}
      Empfohlene Berufsfelder: ${personalityTypes.ESTJ.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ESTJ‑Typen häufig von starken Bindungen mit ${personalityTypes.ESTJ.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ESFJ: {
    name: personalityTypes.ESFJ.name,
    body: `
      ${personalityTypes.ESFJ.description}
      Empfohlene Berufsfelder: ${personalityTypes.ESFJ.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ESFJ‑Typen häufig von starken Bindungen mit ${personalityTypes.ESFJ.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ENFJ: {
    name: personalityTypes.ENFJ.name,
    body: `
      ${personalityTypes.ENFJ.description}
      Empfohlene Berufsfelder: ${personalityTypes.ENFJ.jobs.join(", ")}.
      Kompatibilität: In langfristigen Beziehungen berichten ENFJ‑Typen häufig von starken Bindungen mit ${personalityTypes.ENFJ.bestMatches.join(", ")}, da diese Persönlichkeiten entweder zentrale Werte teilen oder gegenseitige Schwächen ausgleichen.
      Persönlichkeit ist nur ein Faktor, aber ein ähnlicher Kommunikationsstil und ergänzende Stärken können den Aufbau einer stabilen und kooperativen Partnerschaft erleichtern.
    `,
  },
  ENTJ: {
    // Vollständig lokalisierter deutscher Text für ENTJ
    name: "Der Kommandeur (Hauptgruppe: 🧠 ANALYTIKER)",
    body: `
      ENTJ‑Typen sind selbstbewusst, strategisch und stark zielorientiert.
      Sie übernehmen schnell Verantwortung, denken in großen Zusammenhängen
      und organisieren Menschen und Ressourcen, um langfristige Ziele zu erreichen.
      Ineffizienz und Unklarheit frustrieren sie, während sie klare Strukturen und entschlossenes Handeln schätzen.
      Sie können direkt und fordernd wirken, haben aber oft eine klare Vision,
      die sie mit großem Einsatz verfolgen.

      Empfohlene Berufsfelder: ${personalityTypes.ENTJ.jobs.join(", ")}.

      Kompatibilität: In langfristigen Beziehungen berichten ENTJ‑Typen häufig von starken Bindungen mit INFP, INTP, ENFP,
      da diese Persönlichkeiten entweder emotionale Tiefe, kreative Ideen oder analytische Stärke ergänzend einbringen.
      Persönlichkeit ist nur ein Faktor, aber gegenseitiger Respekt, klare Kommunikation
      und sich ergänzende Stärken können den Aufbau einer kraftvollen, zukunftsorientierten Partnerschaft erleichtern.
    `,
  },
},
};


function applyLanguage() {
  const pack = languagePack[currentLanguage] || languagePack.en;

  if (appTitleEl) appTitleEl.textContent = pack.appTitle;
  if (appSubtitleEl) appSubtitleEl.textContent = pack.appSubtitle;

  Array.from(languageLabelEls).forEach((el) => {
    el.textContent = pack.languageLabel;
  });

  if (nextBtn) nextBtn.textContent = pack.nextButton;
  if (restartBtn) restartBtn.textContent = pack.restartButton;
  if (resultTitleEl) resultTitleEl.textContent = pack.resultTitle;

  // Update result‑summary labels (E/I/S/N/T/F/J/P) on language change
  if (pack.traitLabels) {
    if (summaryLabelE) summaryLabelE.textContent = pack.traitLabels.E;
    if (summaryLabelI) summaryLabelI.textContent = pack.traitLabels.I;
    if (summaryLabelS) summaryLabelS.textContent = pack.traitLabels.S;
    if (summaryLabelN) summaryLabelN.textContent = pack.traitLabels.N;
    if (summaryLabelT) summaryLabelT.textContent = pack.traitLabels.T;
    if (summaryLabelF) summaryLabelF.textContent = pack.traitLabels.F;
    if (summaryLabelJ) summaryLabelJ.textContent = pack.traitLabels.J;
    if (summaryLabelP) summaryLabelP.textContent = pack.traitLabels.P;
  }

  // Update question counter text for current question
  const questions = getQuestions();
  questionCounter.textContent = pack.questionCounter(
    currentQuestionIndex + 1,
    questions.length,
  );

  // Update feedback text if there's already a saved answer message
  if (feedback.textContent) {
    feedback.textContent = pack.feedbackSaved;
  }
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



function initQuiz() {
  currentQuestionIndex = 0;
  selectedIndex = null;

  const questions = getQuestions();
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
  const questions = getQuestions();
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
  const pack = languagePack[currentLanguage] || languagePack.en;
  questionCounter.textContent = pack.questionCounter(
    currentQuestionIndex + 1,
    questions.length,
  );

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

  const pack = languagePack[currentLanguage] || languagePack.en;
  feedback.textContent = pack.feedbackSaved;
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
  const questions = getQuestions();
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

  const questions = getQuestions();
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

  const baseInfo = personalityTypes[code] || {
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

  // Pick localized result copy for current language and type, fall back to EN, then to baseInfo
  const langResultCopy =
    (resultCopyByLanguage[currentLanguage] &&
      resultCopyByLanguage[currentLanguage][code]) ||
    (resultCopyByLanguage.en && resultCopyByLanguage.en[code]) ||
    null;

  const localizedName = langResultCopy?.name || baseInfo.name;
  const localizedBody = langResultCopy?.body || baseInfo.description;

  return {
    code,
    name: localizedName,
    description: localizedBody,
    jobs: baseInfo.jobs,
    bestMatches: baseInfo.bestMatches,
    image: baseInfo.image,
  };
}

function showResults() {
  const totalAnswered = answersMeta.filter(
    (m) => m.selectedIndex !== null,
  ).length;
  const questions = getQuestions();
  const totalQuestions = questions.length;
  const completionPercent = Math.round(
    (totalAnswered / totalQuestions) * 100,
  );

  const pack = languagePack[currentLanguage] || languagePack.en;

  const { code, name, description, jobs, bestMatches, image } = deriveType();

  scoreText.textContent = pack.resultScore(
    totalAnswered,
    totalQuestions,
    completionPercent,
  );
  typeCodeEl.textContent = code;
  typeNameEl.textContent = name;

  // Update type image (fallback to default if missing)
  if (typeImageEl) {
    typeImageEl.src = image || "images/types/default.png";
    typeImageEl.alt = `${code} personality illustration`;
  }


  // Description is now fully language-specific (description already comes from resultCopyByLanguage)
  typeDescriptionEl.textContent = description;

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
  if (languageSelectEl) {
    languageSelectEl.value = currentLanguage;
    languageSelectEl.addEventListener("change", () => {
      currentLanguage = languageSelectEl.value;
      applyLanguage();
      renderQuestion();
    });
  }

  initQuiz();
  applyLanguage();
});
