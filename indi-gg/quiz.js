const questions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O","CO2","O2","NACL"],
        answer: "H2O"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Everest", "Kilimanjaro", "McKinley", "K2"],
        answer: "Everest"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Giraffe", "Blue Whale", "Lion"],
        answer: "Blue Whale"
    },
    {
        question: "What is 19 + 2?",
        options: ["5", "21", "10", "7"],
        answer: "21"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        answer: "Carbon Dioxide"
    }
];


let answers=[];
let currentQuestion = 0;
let score = 0;
let timer;

const questionDiv = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const feedbackDiv = document.getElementById("feedback");
const timerDiv = document.getElementById("timer");
const timeLeftDiv = document.getElementById("time-left");
// const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");
const scoreDiv = document.getElementById("user-score");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionDiv.textContent = current.question;
    optionsDiv.innerHTML = "";

    current.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.className = "btn";
        optionButton.className="option-btn";
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsDiv.appendChild(optionButton);
    });

    feedbackDiv.textContent = "";
    // previousButton.style.display = "inline-block";
    nextButton.style.display = "inline-block";
    restartButton.style.display = "none";
    startTimer();
}

function startTimer() {
    let timeLeft = 15; // 10 seconds per question
    timeLeftDiv.textContent = timeLeft;
    timer?clearInterval(timer):""

    timer = setInterval(() => {
        timeLeft--;
        timeLeftDiv.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            checkAnswer(null); // Time"s up, check as incorrect
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    selectedOption?answers.push(currentQuestion):"";
    
    clearInterval(timer);

    const current = questions[currentQuestion];

    if (selectedOption === current.answer) {
        score++;
        feedbackDiv.textContent = "Correct!";
        feedbackDiv.style.color="green"
    } else {
        feedbackDiv.textContent = "Incorrect!";
        feedbackDiv.style.color="red"
    }

    // nextButton.style.display = "block";

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "Finish";
    }
    scoreDiv.textContent = score;
    let optionButton=document.querySelectorAll(".option-btn");
    optionButton.forEach((item)=>{
       item.disabled=true;
    }) 
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}
// function previousQuestion() {
//     if (currentQuestion > 0) {
//         currentQuestion--;
//         loadQuestion();
//     } 
// }

function showFinalScore() {
    clearInterval(timer);
    timeLeftDiv.style.display='none'
    timerDiv.style.display='none'
    questionDiv.textContent = "Quiz Completed!";
    optionsDiv.innerHTML = "";
    feedbackDiv.textContent = "";
    // previousButton.style.display = "none";
    nextButton.style.display = "none";
    restartButton.style.display = "block";
    scoreDiv.textContent = `Your Final Score: ${score}/${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

loadQuestion();
// previousButton.addEventListener("click",previousQuestion);
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);
