var timer = document.querySelector("#timer");
var timeLimit = document.querySelector("#fulltime");
var opt1 = document.querySelector("#opt1");
var opt2 = document.querySelector("#opt2");
var opt3 = document.querySelector("#opt3");
var opt4 = document.querySelector("#opt4");
var questionEl = document.querySelector("#question");
var quizContainer = document.querySelector("#quizContainer");
var startBtn = document.querySelector("#start");
var nextBtn = document.querySelector("#next");
var subBtn = document.querySelector("#submit");
var result = document.querySelector("#result");
var list = document.querySelector("#list");

var score = 0;
var currentQuestion = 0;
var timeLimit = 600;
var start = 0;

var questions = [
    {
        question: "What does html stands for?",
        option1: "Hyper Text Markup Language",
        option2: "Hyper Text Manage Language",
        option3: "Higher Technology Makeup Language",
        option4: "None of above",
        answer: "1"
    },
    {
        question: "Which of the following is a string?",
        option1:"1",
        option2:"hi",
        option3:"'hi'",
        option4:"1'",
        answer:"3"
    },
    {
        question: "Which of the following is an Array?",
        option1:"'1'",
        option2:"'1','2'",
        option3:"['1','2']",
        option4:"None of above",
        answer:"3"
    }
];

function gameStart(){
    start = 1;
    return
}

function loadQuestion(questionIndex){
    document.querySelector("#start").disabled = true;
    q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
}

function loadNextQuestion(){
    if(start === 0){
        alert("YOU HAVE TO PRESS THE START BUTTON!!!")
        return;
    }
    userAns = document.querySelector("input[type=radio]:checked");
    if(!userAns){
        alert("YOU MUST SELECT ONE ANSWER!!!");
        return;
    }
    ans = userAns.value;
    if (questions[currentQuestion].answer === ans){
        score ++;
        alert("You are correct!");
    } else {
        alert("You are wrong!");
    }
    userAns.checked = false;
    currentQuestion ++;
    if (currentQuestion === questions.length){
        quizContainer.getElementsByClassName.display = "none";
        result.style.display = "";
        result.textContent = score
        return;
    }
    loadQuestion(currentQuestion);
}

function countdown(){
    window.timerInterval = setInterval(function(){
        timer.innerHTML = timeLimit--;

        if(timeLimit <= 0){
            gameEnd();
            clearInterval(timerInterval);
        }
    },1000);
}

function gameEnd(){
    quizContainer.style.display = "none";
    document.querySelector("#stopWatch").style.display = "none";
    
    document.querySelector("#scoreDisplay").textContent = ("Congratulations "+ prompt("Input Your Name") + ", Your Final Score is: " + score);
    
}


function addToList(){
    list.innerHTML = "";
    
    for (var i = 0; i<list.length;i++){
        var li = document.createElement("li");
        li.textContent = score;
        li.setAttribute("data-index", i);

        list.appendChild(li);
    }
}

function submit(){
    var yes = confirm("Do You Want To End The Quiz Session?");
    if (yes){
        clearInterval(window.timerInterval);
        gameEnd();
    } else {
        return;
    }
}

