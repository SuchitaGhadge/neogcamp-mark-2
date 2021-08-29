var readLineSync = require('readline-sync');
var username = readLineSync.question("What's your name? ");
console.log("Hey, " + username + " Are you ready for the quiz? Here is your 1st question...[ans in a or b]");
console.log("--------------------------------------------------------")
var score = 0;

// data of high scores
var highScores = [
  {
    name: "Suchita",
    score: 5
  }
]

//function 
function play(question, answer) {
  var userAnswer = readLineSync.question(question);

  // condition check
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log("Yass! you're right..")
    score = score + 1;

  } else {
    console.log("Opsss... wrong answer! ")
  }
  console.log("--------------------------------------------------------");
}
// question array
var questions = [
  {
    question: `Which was the first fort taken by Chhatrapati Shivaji Maharaj? 
      a. Shivneri fort
      b. Torna fort 
      ans: ` ,
    answer: 'b'
  },
  {
    question: `What was the name of Chhatrapati Sambhaji Maharaj's mother?
      a. Rani Ranubai
      b. Rani Sayeebai
      ans: `,
    answer: 'b'
  },
  {
    question: `On which fort is the tomb of Chhatapati Shivaji Maharaj located? 
      a. Rajad
      b. Raigad
      ans: `,
    answer: 'b'
  },
  {
    question: `What was the name of Chhatrapati Shivaji Maharaj's intelligence department? 
      a. Bahirji Naik
      b. Hambirrao Mohite
      ans: `,
    answer: 'a'
  },
  {
    question: `Rajgad fort fall in which district?
      a. Satara
      b. Pune
      ans: `,
    answer: 'b'
  }
]

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
//  show scores
function showScores (){
console.log("Your final score is: ", score);

console.log("Checkout the high scores, if you should be there ping me I will update it");

highScores.map(score => console.log(score.name, " : ", score.score))
}

showScores();

