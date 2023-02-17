var startBtnEl = document.getElementById("startBtn");
var questionEl = document.getElementById("question");
var startEl =document.getElementById("start");

var questionsAndAnswers = [
    {
        question: "How are you?",
        choices: ["good", "bad", "great", "terrible"],
        answer: "good"
    },
    {
        question: "Where are you?",
        choices: ["good", "bad", "great", "terrible"],
        answer: "good"
    },
    {
        question: "How are you?",
        choices: ["good", "bad", "great", "terrible"],
        answer: "good"
    },
]
var currentIndex =0;

function startQuiz() {
    //hides start screen with button
    startEl.setAttribute("class", "quiz hide");
    //shows quiz section
    questionEl.setAttribute("class", "question-1");
    //shows first question from list (array)
    showQuestion()
    //start timer function call because multiple lines to get the timer rolling
}

function showQuestion(){
    //present first quesiton of list here
    document.getElementById("promptText").textContent = questionsAndAnswers[currentIndex].question
}

startBtnEl.addEventListener("click", startQuiz)