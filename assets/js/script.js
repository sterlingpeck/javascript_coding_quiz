const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const clockContainerEl = document.querySelector('.timeleft')
const questionContainerElement = document.getElementById('question-container')
const instructionsContainer = document.querySelector(".instructions")
const titleContainer = document.querySelector(".page-title")
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('buttons')
const highScoreEl = document.querySelector(".high-score")
var timerEl = document.querySelector('.timeleft');
const answer1 = document.querySelector('.answer1')
const answer2 = document.querySelector('.answer2')
const answer3 = document.querySelector('.answer3')
const answer4 = document.querySelector('.answer4')
const saveScoreEl = document.querySelector('.savescore')
var currentStep = 0
var score = 0;
var timeLeft = 120;
const resultsContainer = document.querySelector('#results')


startButton.addEventListener('click', startQuiz)
answer1.addEventListener('click', confirmAnswer.bind(this, 'a'))
answer2.addEventListener('click', confirmAnswer.bind(this, 'b'))
answer3.addEventListener('click', confirmAnswer.bind(this, 'c'))
answer4.addEventListener('click', confirmAnswer.bind(this, 'd'))

function startQuiz() {
    startButton.classList.add('hide')
    instructionsContainer.classList.add('hide')
    titleContainer.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    countdown()
    setNextQuestion()
    getScore()
}

function setNextQuestion() {
    answer1.textContent = questions[currentStep].answers["a"]
    answer2.textContent = questions[currentStep].answers["b"]
    answer3.textContent = questions[currentStep].answers["c"]
    answer4.textContent = questions[currentStep].answers["d"]
    questionContainerElement.querySelector('#question').textContent = questions[currentStep].question
}

const isCorrect = (currentStep, answer) => questions[currentStep].answers[answer] === questions[currentStep].correct

function confirmAnswer(answer) {
  
    if (questions.length === currentStep+1) {
        endQuiz()
    }
    if (typeof questions[currentStep+1] === 'undefined') {
      if (isCorrect(currentStep, answer)) score++

      return
    }
    if (isCorrect(currentStep, answer)) {
      currentStep++
      setNextQuestion() 
      score++;
      setScoreText();
     } else { 
         currentStep++
         setNextQuestion()
         setScoreText();
         timeLeft-=10;
    }
}

var questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<javascript>",
            b: "<js>",
            c: "<scripting>",
            d: "<script>",
        },
        correct: '<script>'
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        answers: {
            a: "alert('Hello World';)",
            b: "msgBox('Hello World';)",
            c: "msg('Hello World';)",
            d: "alertBox('Hello World';)",
        },
        correct: "alert('Hello World';)"
    },
    {
        question: "How do you create a function in JavaScript?",
        answers: {
            a: "myFunction()",
            b: "function:myFunction()",
            c: "function myFunction()",
            d: "function = myFunction()",
        },
        correct: 'function myFunction()'
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            a: "for(i=0; i <= 5; i++)",
            b: "for (i <= 5; i++)",
            c: "for (i = 0; i <= 5)",
            d: "fir i = 1 to 5",
        },
        correct: 'for(i=0; i <=5; i++)'
    },
    {
        question: "How can you add a comment in a JavaScript?",
        answers: {
            a: "//This is a comment",
            b: "<!--This is a comment--!>",
            c: "'This is a comment",
            d: "--This is a comment--",
        },
        correct: '//This is a comment'
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        answers: {
            a: "var colors = 'red','green','blue'",
            b: "var color = 1 = ('red'),2=('green'),3=('blue')",
            c: "var color = (1:'red', 2:'green',3:'blue'",
            d: "var color = ['red','green','blue']",
        },
        correct: "var color = ['red','green','blue']"
    },
]

function countdown() {
  
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
        endQuiz()
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
      }
    }, 1000);
  }

  function endQuiz () {
    resultsContainer.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    clockContainerEl.classList.add('hide')
    getScore()
  }

function setScoreText() {
    document.querySelector('.score').textContent=score
}

// High score local storage
var saveScore = function() {
    localStorage.setItem("score", JSON.stringify(score));
}

saveScoreEl.addEventListener("click", function() {
    const initials = document.querySelector(".initials").value
    localStorage.setItem("score", JSON.stringify({ initials, score }))
})

function getScore() {
    const lsScore = JSON.parse(localStorage.getItem("score"))
    highScoreEl.textContent = lsScore.score
}