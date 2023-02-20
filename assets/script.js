var startBtnEl = document.getElementById("startBtn");
var questionEl = document.getElementById("question");
var startEl = document.getElementById("start");
var timeEl= document.getElementById('timer');

var questionsAndAnswers = [
    {
        question: "Var, let and const are all examples of what?",
        choices: ["Functions", "Arrays", "Variables", "HTML Elements"],
        answer: "Variables"
    },
    {
        question: "In what specific way should our lines of code be written in?",
        choices: ["Camel case", "Lowercase", "With plenty of space", "In cascading style"],
        answer: "Camel case"
    },
    {
        question: "What is used to store multiple values in Javascript?",
        choices: ["Functions", "Arrays", "Variables", "Global tags"],
        answer: "Arrays"
    },
    {
        question: "A set of statements that preforms a task is a what?",
        choices: ["Function", "Variable", "Global tag", "Array"],
        answer: "Function"
    },
    {
        question: "Who is the creator of Javascript?",
        choices: ["Gabe Newell", "Brendan Eich", "Bill Gates", "Friedrich Java"],
        answer: "Brendan"
    },
]
var currentIndex = 0;

function startQuiz() {
    //hides start screen with button
    startEl.setAttribute("class", "quiz hide");
    //shows quiz section
    questionEl.setAttribute("class", "question-1");
    timeEl.setAttribute('class', '');
    //shows first question from list (array)
    startTimer()
    showQuestion()
    showChoices()
    
    //start timer function call because multiple lines to get the timer rolling
    
}

var secondsLeft = 60

function startTimer() {

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left ";
    
        if(secondsLeft === 0) {
            timeEl.setAttribute('class', 'hide');
            //add end quiz function
        }
    
      }, 1000);
}

function showQuestion(){
    //present first quesiton of list here
    document.getElementById("promptText").textContent = questionsAndAnswers[currentIndex].question
}

function showChoices() {
    document.getElementById("choiceOne").textContent = questionsAndAnswers[currentIndex].choices[0]
    document.getElementById("choiceTwo").textContent = questionsAndAnswers[currentIndex].choices[1]
    document.getElementById("choiceThree").textContent = questionsAndAnswers[currentIndex].choices[2]
    document.getElementById("choiceFour").textContent = questionsAndAnswers[currentIndex].choices[3]
}



function onAnswer() {

}

startBtnEl.addEventListener("click", startQuiz)