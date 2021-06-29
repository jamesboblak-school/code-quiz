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
    a10 : "GNU’s Not Unix",
};

// function startGame {
//     var start = document.getElementById("start-button");
//     start.addEventListener(click, question1()); 

window.onload = function () {
    document.getElementById("stop-button").addEventListener("click", breaker);
    document.getElementById("start-button").addEventListener("click", question1);
  };
// }

function breaker(){
    console.log("clicked on Stop");
    document.getElementById("time-button").innerHTML = "Game Over";
}

function timer() {
    timeleft = 60;
    document.getElementById("time-button").innerHTML = timeLeft;
    console.log("timer test");

    // Display Game Over when Stop is pressed
    document.getElementById("stop-button").addEventListener("click", function(){
        timeLeft = 0})
    var gameTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(gameTimer);
    document.getElementById("time-button").innerHTML = "Game Over";
  } else {
    document.getElementById("time-button").innerHTML = timeleft + " seconds";
  }
  timeleft -= 1;
}, 1000);
    
    }

timer();



function question1() {
    document.getElementById("questionBox").innerHTML = questionsObj.q01;
        // console.log("question test");
    document.getElementById("ans-a").innerHTML = answersObj.a00;
    document.getElementById("ans-b").innerHTML = answersObj.a01;
    document.getElementById("ans-c").innerHTML = answersObj.a02;
    
}
question1();