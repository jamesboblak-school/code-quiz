var score = 0;
var timeLeft = 60;
var questionsObj = {
    q00 : "What does HTML stand for?",
    q01 : "What does CSS stand for?",
    q02 : "What does JS stand for?",
    q03 : "What does JSON stand for?",
    q04 : "What does API stand for?",
    q05 : "What does IDE stand for?",
    q06 : "What does DOM stand for?",
    q07 : "What does GUI stand for?",
    q08 : "What does AJAX stand for?",
    q09 : "What does SQL stand for?",
    q10 : "What does GNU stand for?",
};
var answersObj = {
    a00 : "HyperText Markup Language",
    a01 : "Cascading Style Sheet",
    a02 : "JavaScript",
    a03 : "JavaScript Object Notation",
    a04 : "Application Programming Interface",
    a05 : "Integrated Developer Environment",
    a06 : "Document Object Model",
    a07 : "Graphic User Interface",
    a08 : "Asynchronous JavaScript And XML",
    a09 : "Structured Query Language",
    a01 : "GNU’s Not Unix",
};

// function startGame {
//     var start = document.getElementById("start-button");
//     start.addEventListener(click, question1());  
// }

function timer() {
    document.getElementById("time-button").innerHTML = timeLeft;
    // console.log("timer test");
}
timer();

function question1() {
    document.getElementById("questionBox").innerHTML = questionsObj.q00;
        // console.log("question test");
    document.getElementById("ans-a").innerHTML = answersObj.a00;
    document.getElementById("ans-b").innerHTML = answersObj.a01;
    document.getElementById("ans-c").innerHTML = answersObj.a02;
}
question1();