const popBtn = document.getElementById('popBtn')
const rapBtn = document.getElementById('rapBtn')
const rockBtn = document.getElementById('rockBtn')
const italianBtn = document.getElementById('italianBtn')
const homeBox = document.getElementById('homeBox')
const questioncontainer = document.getElementById('question-container')
const sevenRings= new Audio('songs/7rings-ArianaGrande/ritornello.7.rings.mp3')


popBtn.addEventListener('click',startGamePop)
italianBtn.addEventListener('click',startGameItalian)
rapBtn.addEventListener('click',startGameRap)
rockBtn.addEventListener('click',startGameRock)

let shuffledQuestions, currentQuestionIndex

function startGamePop() {
    homeBox.classList.add('hide')
    questioncontainer.classList.add('homeBox')
    questioncontainer.classList.remove('hide')
    questionsPop.song.play()
    shuffledQuestions = questionsPop.sort(() => Math.random() - .5)
    currentQuestionIndex = 0

}

function startGameRock() {
    homeBox.classList.add('hide')
    questioncontainer.classList.add('homeBox')
    questioncontainer.classList.remove('hide')
    shuffledQuestions = questionsRock.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
}

function startGameItalian() {
    homeBox.classList.add('hide')
    questioncontainer.classList.add('homeBox')
    questioncontainer.classList.remove('hide')
    shuffledQuestions = questionsItalian.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
}

function startGameRap() {
    homeBox.classList.add('hide')
    questioncontainer.classList.add('homeBox')
    questioncontainer.classList.remove('hide')
    shuffledQuestions = questionsRap.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
}

const questionsPop = [  {
    question: 'Guess the name of the song',
    song: sevenRings,
    answers: [
      { text: 'I got it', correct: true },
      { text: 'I want it', correct: false },
      { text:'7 Rings',correct: false}, 
      {text: 'Call me',correct: false}     
    ]
  },]
const questionsRap= []
const questionsRock =[]
const questionsItalian =[]
