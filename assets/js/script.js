var score = 0;
var timeLeft = 60;
var quizInProgress = true;
var initials = "JSB";
var questionsObj = {
  q00: "What does HTML stand for?",
  q01: "What does CSS stand for?",
  q02: "What does JS stand for?",
  q03: "What does JSON stand for?",
  q04: "What does API stand for?",
  q05: "What does IDE stand for?",
  q06: "What does DOM stand for?",
  q07: "What does GUI stand for?",
  q08: "What does AJAX stand for?",
  q09: "What does SQL stand for?",
  q10: "What does GNU stand for?",
};
var answersObj = {
  a00: "HyperText Markup Language",
  a01: "Cascading Style Sheet",
  a02: "JavaScript",
  a03: "JavaScript Object Notation",
  a04: "Application Programming Interface",
  a05: "Integrated Developer Environment",
  a06: "Document Object Model",
  a07: "Graphic User Interface",
  a08: "Asynchronous JavaScript And XML",
  a09: "Structured Query Language",
  a10: "GNU’s Not Unix",
};


// function startGame {
//     var start = document.getElementById("start-button");
//     start.addEventListener(click, question1()); 

window.onload = function () {
  document.getElementById("stop-button").addEventListener("click", breaker);
  document.getElementById("start-button").addEventListener("click", question1);
};
// }

function breaker() {
  console.log("clicked on Stop");
  document.getElementById("time-button").innerHTML = "Game Over";
  quizInProgress = false;
  console.log("timeLeft = " + timeLeft);
  // localStorage.getItem("score", JSON.parse(score));
  // localStorage.getItem("initials", JSON.parse(initials));
  // console.log(initials + " " + score);
  // document.getElementById("high-scores").innerHTML = initials + " : " + score;
}

function timer() {
  var gameTimer = setInterval(function () {
    if (quizInProgress === true) {
      timeLeft--;
      document.getElementById("time-button").innerHTML = timeLeft + " seconds"
    }
    if (timeLeft <= 0) {
      clearInterval(gameTimer);
      document.getElementById("time-button").innerHTML = "Game Over";
      localStorage.setItem("score", JSON.stringify(score));
      var initials = prompt("enter your initials: ");
      localStorage.setItem("initials", JSON.stringify(initials));
      // localStorage.setItem("score", JSON.stringify(score));
      localStorage.getItem("score", JSON.parse(score));
      localStorage.getItem("initials", JSON.parse(initials));
      console.log(initials + " " + score);
      document.getElementById("high-scores").innerHTML = initials + " : " + score;

      breaker();
    }
  }, 1000);
  console.log("timeLeft3 = " + timeLeft);

}

function question1() {
  document.getElementById("questionBox").innerHTML = questionsObj.q00;
  document.getElementById("ans-a").innerHTML = answersObj.a00;
  document.getElementById("ans-b").innerHTML = answersObj.a01;
  document.getElementById("ans-c").innerHTML = answersObj.a02;
  console.log("timeLeft1 = " + timeLeft);
  document.getElementById("ans-a").addEventListener("click", function(){
  if (answersObj["a00"]) {
    score++;
    console.log("score: " + score);
   } else (timeLeft -= 5);
   document.getElementById("result-box").innerHTML = "Score: " + score;
  if (quizInProgress === true) {
    timer();}
    question2();
  })
}
function question2() {
  document.getElementById("questionBox").innerHTML = questionsObj.q01;
  document.getElementById("ans-a").innerHTML = answersObj.a00;
  document.getElementById("ans-b").innerHTML = answersObj.a02;
  document.getElementById("ans-c").innerHTML = answersObj.a01;
  console.log("timeLeft1 = " + timeLeft);
  document.getElementById("ans-a").addEventListener("click", function(){
  if (answersObj["a01"]) {
    score++;
    console.log("score: " + score);
   } else (timeLeft -= 5);
   document.getElementById("result-box").innerHTML = "Score: " + score;
  if (quizInProgress === true) {
    // timer();
  }
    question3();
  })
}
function question3() {
  document.getElementById("questionBox").innerHTML = questionsObj.q02;
  document.getElementById("ans-a").innerHTML = answersObj.a01;
  document.getElementById("ans-b").innerHTML = answersObj.a03;
  document.getElementById("ans-c").innerHTML = answersObj.a02;
  console.log("timeLeft1 = " + timeLeft);
  document.getElementById("ans-a").addEventListener("click", function(){
    answersObj.a00 = 0;
  if (answersObj["a02"]) {
    score++;
    console.log("score: " + score);
   } else (timeLeft -= 5);
   document.getElementById("result-box").innerHTML = "Score: " + score;
  if (quizInProgress === true) {
    // timer();
  }
    question3();
  })
}

function question4() {
  document.getElementById("questionBox").innerHTML = questionsObj.q03;
  document.getElementById("ans-a").innerHTML = answersObj.a01;
  document.getElementById("ans-b").innerHTML = answersObj.a02;
  document.getElementById("ans-c").innerHTML = answersObj.a03;
  console.log("timeLeft1 = " + timeLeft);
  var ans = 
  document.getElementById("ans-a").addEventListener("click", function(){
  if (answersObj["a03"] === true) {
    score++;}
    console.log("score: " + score);
  if (quizInProgress === true) {
    // timer();
  }
    question4();
  })
}
