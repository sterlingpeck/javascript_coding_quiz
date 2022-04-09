const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const instructionsContainer = document.querySelector(".instructions")
const titleContainer = document.querySelector(".page-title")
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('buttons')
var timerEl = document.querySelector('.timeleft');
const incrementEl = document.querySelector('.score')
const decrementEl = document.querySelector('.score')
const answer1 = document.querySelector('.answer1')
const answer2 = document.querySelector('.answer2')
const answer3 = document.querySelector('.answer3')
const answer4 = document.querySelector('.answer4')
var currentStep = 0


startButton.addEventListener('click', startQuiz)
answer1.addEventListener('click', confirmAnswer.bind(this, 'a'))
answer2.addEventListener('click', confirmAnswer.bind(this, 'b'))
answer3.addEventListener('click', confirmAnswer.bind(this, 'c'))
answer4.addEventListener('click', confirmAnswer.bind(this, 'd'))

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
    answer1.textContent = questions[currentStep].answers["a"]
    answer2.textContent = questions[currentStep].answers["b"]
    answer3.textContent = questions[currentStep].answers["c"]
    answer4.textContent = questions[currentStep].answers["d"]
    questionContainerElement.querySelector('#question').textContent = questions[currentStep].question
}


function confirmAnswer(answer) {
    if (typeof questions[currentStep+1] === 'undefined') return
    if (questions[currentStep].answers[answer] === questions[currentStep].correct) {
      currentStep++a
      setNextQuestion()
    }
}


var questions = [
    {
        question: "What is 2 + 2?",
        answers: {
            a: "4",
            b: "10",
            c: "9",
            d: "41",
        },
        correct: '4'
    },

    {
        question: "What is thing",
        answers: {
            a: "69",
            b: "420",
            c: "butt",
            d: "turds",
        },
        correct: '420'
    },
    {
        question: "What is huh?",
        answers: {
            a: "asfad",
            b: "4adsfhjj",
            c: "huh",
            d: "noidea",
        },
        correct: 'huh'
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





