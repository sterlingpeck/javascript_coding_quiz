const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const instructionsContainer = document.querySelector(".instructions")
const titleContainer = document.querySelector(".page-title")
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('buttons')
var timerEl = document.getElementById('#timeleft');


startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('started')
    startButton.classList.add('hide')
    instructionsContainer.classList.add('hide')
    titleContainer.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    countdown()
    setNextQuestion()
}

function setNextQuestion() {
}


function selectAnswer() {
}


var questions = [
    {
        question: "What is 2 + 2?",
        answers: [
           { a: "4", correct: true },
           { b: "10", correct: false },
           { c: "9", correct: false },
           { d: "41", correct: false },
        ]
    },

    {
        question: "What is 2 + 2?",
        answers: [
           { a: "4", correct: true },
           { b: "10", correct: false },
           { c: "9", correct: false },
           { d: "41", correct: false },
        ]
    },

    {
        question: "What is 2 + 2?",
        answers: [
           { a: "4", correct: true },
           { b: "10", correct: false },
           { c: "9", correct: false },
           { d: "41", correct: false },
        ]
    },

    {
        question: "What is 2 + 2?",
        answers: [
           { a: "4", correct: true },
           { b: "10", correct: false },
           { c: "9", correct: false },
           { d: "41", correct: false },
        ]
    },
]

function countdown() {
    var timeLeft = 45;
  
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }


  var score = 0;
  var incrementScore = document.querySelector("score");
  
  function setScoreText() {
      scoreEl.textContent = score;
    }
  
    incrementEl.addEventListener("click", function() {
      score++;
      setScoreText();
    });  
  
    decrementEl.addEventListener("click", function() {
  if (answer = false) {
        score--;
        setScoreText();
      }
    });    
  


// High score local storage
var saveScore = function() {
localStorage.setItem("score", JSON.stringify(score));
 }

saveScore.addEventListener("click", function() {
    var initials = document.querySelector(".initials").value

    var newScore = {
        initials: initials,
        score
    }

    function populateStorage() {
        localStorage.setItem("initials", JSON.stringify(initials));
        localStorage.setItem("score", JSON.stringify(score))
    }

    populateStorage(newScore);
})



// var startClock = setInterval(function() {

    // document.getElementById("clock").innerHTML = minutes + "m " + seconds + "s ";

    // if (distance < 0) {
        // clearInterval(x);
        // document.getElementById("clock").innerHTML = "Time's Up!"
    // }

// }, 1000);




// function showQuestions(questions, questionContainerElement) {
//     var output = []
//     var answers;

//     for(var i=0; i < questions.length; i++) {
//         answers = [];
//         output.push(
//             '<div class="question"' + questions[i].question + '</div>'
//             + '<div class="answers">' + answers.join('') + '</div>'
//         );
//     }

//         quizContainer.innerHTML = output.join('');
// }

// showQuestions(questions, quizContainer);


//     if(response === questions[i].answers.correct) {
//         score++;
//         alert("Correct!");
//         } else {
//         alert("wrong!");
//     }




// const questions = [
    // {
        // question: 'What is a',
        // answers: ['a', 'b', 'c']
    // }
// ]
// 


// const questions = [
//     { question: 'What is 2 + 2' }
// ]

// const answers = [ 'nud', '4' ]
// answers[0]

// if correctAnswer = true {
    // nextQuestion
// }

// if (answers[0] === 'nud') { console.log('THAT is CORRECT') }






// choices.addEventListener("mouseover", function(changeColor) {
    // changeColor.target.style.color = purple

    // document.getElementById("coices").addEventListener("click", changeColor);
// }



