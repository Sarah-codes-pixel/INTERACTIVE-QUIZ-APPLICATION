const quizData = [
    {
      question: "Which language is used for web apps?",
      options: ["Python", "Java", "C++", "JavaScript"],
      answer: "JavaScript"
    },
    {
        question: "Which property is used to change the background color?",
        options: ["color", "bgcolor", "background-color", "background"],
        answer: "background-color"
    },
    {
        question: "How do you make text bold in CSS?",
        options: ["font-weight: bold;", "text-style: bold;", "style: bold;", "font: bold;"],
        answer: "font-weight: bold;"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "letvar"],
        answer: "var"
    },
    {
        question: "How do you write a comment in JavaScript?",
        options: ["// this is a comment", "<!-- this is a comment -->", "# this is a comment", "** this is a comment **"],
        answer: "// this is a comment"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        options: ["<css>", "<script>", "<style>", "<link>"],
        answer: "<style>"
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        options: ["<lb>", "<break>", "<br>", "<hr>"],
        answer: "<br>"
    },
    {
        question: "Which method is used to output data to the console?",
        options: ["console.write()", "log.console()", "console.log()", "write.console()"],
        answer: "console.log()"
    }, 
    {
        question: "Which CSS property controls the text size?",
        options: ["font-style", "text-size", "font-size", "text-style"],
        answer: "font-size"
    },
    {
      question: "HTML stands for?",
      options: [
        "Hyper Trainer Marking Language",
        "HyperText Markup Language",
        "HyperText Markdown Language",
        "HyperText Machine Language"
      ],
      answer: "HyperText Markup Language"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const nextBtn = document.getElementById('next-btn');
  const resultEl = document.getElementById('result');
  const scoreEl = document.getElementById('score');
  
  function loadQuestion() {
    const current = quizData[currentQuestion];
    questionEl.textContent = current.question;
    optionsEl.innerHTML = '';
  
    current.options.forEach(option => {
      const btn = document.createElement('button');
      btn.textContent = option;
      btn.onclick = () => checkAnswer(option);
      optionsEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correct = quizData[currentQuestion].answer;
    if (selected === correct) score++;
  
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById('quiz').classList.add('hidden');
    resultEl.classList.remove('hidden');
    scoreEl.textContent = `${score} / ${quizData.length}`;
  }
  
  nextBtn.onclick = () => {
    if (currentQuestion < quizData.length) {
      loadQuestion();
    }
  };
  
  loadQuestion();
  