"use strict";
let currentQuestionIndex = 0;
let currentQuestionOptionA = 0;
let currentQuestionOptionB = 0;
let points = 0;
let elements = document.querySelectorAll(".answer");
elements.forEach((item) => {
  item.addEventListener("click", function (e) {
    const answer = e.target.innerHTML.toUpperCase();
    if (answer === questions[currentQuestionIndex].answer) {
      points++;
      document.getElementById("demo3").textContent = points;
      currentQuestionIndex++;
      currentQuestionOptionA++;
      currentQuestionOptionB++;
      console.log(
        currentQuestionIndex,
        currentQuestionOptionA,
        currentQuestionOptionB
      );

      if (currentQuestionIndex < questionsList.length) {
        showQuestion();
      } else {
        alert(
          "Congratulations! You have completed the game with " +
            points +
            " points."
        );
      }
    } else {
      alert("Sorry, that is incorrect. You lose.");
    }
  });
});

const questionsList = [
  "Q1: You are driving on the road and it has come to an end. You can go left or right. Where would you like to go?",
  "Q2:Then you come across a river. Would you like to swim or walk in the river?",
  "Q3: You come across a long bridge. It looks shaky. would you like to head back or cross it?",
  "Q4: You crossed the bridge and met a crazy stranger. Do you want to talk to him?",
  "Q5: The stranger told you about a cave in woods. Would you head to the woods to find cave?",
  "Q6:you found the cave. Do you want to go inside it or return?",
];
const optionA = ["LEFT", "SWIM", "HEAD BACK", "YES", "YES", "GO INSIDE CAVE"];
const optionB = ["RIGHT", "WALK", "CROSS IT", "NO", "NO", "RETURN"];
const questions = [
  {
    question:
      "You are driving on the road and it has come to an end. You can go left or right. Where would you like to go?",
    answer: "LEFT",
  },
  {
    question:
      "Then you come across a river. Would you like to swim or walk in the river?",
    answer: "SWIM",
  },
  {
    question:
      "You come across a long bridge. It looks shaky. would you like to head back or cross it?",
    answer: "HEAD BACK",
  },
  {
    question:
      "You crossed the bridge and met a crazy stranger. Do you want to talk to him?",
    answer: "YES",
  },
  {
    question:
      "The stranger told you about a cave in woods. Would you head to the woods to find cave?",
    answer: "YES",
  },
  {
    question: "you found the cave. Do you want to go inside it or return?",
    answer: "GO INSIDE CAVE",
  },
];

// const answerElement = document.getElementById("answer");
// answerElement.addEventListener("onclick", function (event) {
//   if (event.key === "Enter") {
//     checkAnswer();
//   }
// });

function showQuestion() {
  const question = document.getElementById("question");
  const optionC = document.getElementById("optionA");
  const optionD = document.getElementById("optionB");

  question.textContent = questionsList[currentQuestionIndex];
  optionC.textContent = optionA[currentQuestionOptionA];
  optionD.textContent = optionB[currentQuestionOptionB];
}

showQuestion();
