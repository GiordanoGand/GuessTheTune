const popBtn = document.getElementById('popBtn')
const rapBtn = document.getElementById('rapBtn')
const rockBtn = document.getElementById('rockBtn')
const italianBtn = document.getElementById('italianBtn')
const homeBox = document.getElementById('homeBox')
const questioncontainer = document.getElementById('question-container')
const resetContainer = document.getElementById('resetBox')
const answerBtns = document.getElementById('answer-buttons')
const answer1= document.getElementById('answer1')
const answer2= document.getElementById('answer2')
const answer3= document.getElementById('answer3')
const answer4= document.getElementById('answer4')
const score = document.getElementById('score')
const nextButton = document.getElementById('nextBtn')
const totalScore = document.getElementById('totalScore')
const numberQuestions = document.getElementById('numberQuestions')

let clickedWrong
let clickedCorrect 
let clickedWr = false
let selectedNumeberQuestions = 10
let clicked = false
let currentQuestionIndex = 0
let scorevalue = 0
let numberQuestion = 0
var selectedDifficulty = document.getElementById('difficulty')
var difficulty = selectedDifficulty.options[selectedDifficulty.selectedIndex].value
var correctAnswer
var seconds = difficulty
var clickedCorrectAnswer
var clickedWrongAnswer = false
var currentGenre 
var countdown

popBtn.addEventListener('click',() => {
  currentGenre = questionsPop
  startGame()
})
italianBtn.addEventListener('click',() => {
  currentGenre = questionsItalian
  startGame()
})
rapBtn.addEventListener('click',() => {
  currentGenre = questionsRap
  startGame()
})
rockBtn.addEventListener('click',() => {
  currentGenre = questionsRock
  startGame()
})


function startGame(){
  document.getElementById('timer').textContent = seconds
  timer()
  homeBox.classList.add('hide')
  questioncontainer.classList.remove('hide')
  shuffle(currentGenre)
  nextQuestion(currentGenre)
  clickQuestion(answer1,currentGenre,0)
  clickQuestion(answer2,currentGenre,1)
  clickQuestion(answer3,currentGenre,2)
  clickQuestion(answer4,currentGenre,3)
  nextButton.addEventListener('click',nextBtn)
}

function nextBtn(){
    clearInterval(countdown)
    seconds = difficulty 
    seconds++
    timer()
    if (clickedCorrectAnswer){
      clearStatusClass(clickedCorrect)
    }
    else if(clickedWr) {
      clearStatusClass(clickedWrongCorrect)
      clearStatusClass(clickedWrong)
    }
    pauseAudio(currentGenre[currentQuestionIndex].song)
    clicked = false
    clickedWrongAnswer = false
    currentQuestionIndex++
    nextQuestion(currentGenre)
}

function clickQuestion(answerNumber,genre,answerIndex){
  answerNumber.addEventListener('click',() => {
    if(genre[currentQuestionIndex].answers[answerIndex].correct){
      document.body.classList.add('correct')
      answerNumber.classList.add('correct')
      if (!clicked){
        clickedCorrect = answerNumber
        scorevalue++
        score.innerText = scorevalue
        clicked = true
        clickedCorrectAnswer = true
        //clearInterval(countdown)
      }
    }
    else if(!clickedWrongAnswer){
        getCorrectAnswer()
        answerNumber.classList.add('wrong')
        document.body.classList.add('wrong')
        clicked = true
        clickedWr = true
        clickedCorrectAnswer = false
        clickedWrongAnswer = true
        clickedWrong = answerNumber
        //clearInterval(countdown)
    }
  })
}

function nextQuestion(genre){
  numberQuestion++
  endGame()
  clearStatusClass(document.body)
  if (numberQuestion <= selectedNumeberQuestions){
    showQuestion(genre[currentQuestionIndex])
  }
}

function showQuestion(question){
    answer1.innerText = question.answers[0].text
    answer2.innerText = question.answers[1].text
    answer3.innerText = question.answers[2].text
    answer4.innerText = question.answers[3].text
    question.song.play()
}

function endGame(){
  if (numberQuestion  > selectedNumeberQuestions){
    pauseAudio(currentGenre[currentQuestionIndex].song)
    questioncontainer.classList.add('hide')
    resetContainer.classList.remove('hide')
    totalScore.innerText = scorevalue
    numberQuestions.innerText = selectedNumeberQuestions
  }
}

function timer(){
    countdown = setInterval(function() {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown)
    if (seconds == 0){
      seconds = difficulty
      seconds++
      timer()
      nextBtn()
    }
}, 1000)
}

function selectedDifficultyChange(){
  selectedDifficulty = document.getElementById('difficulty')
  difficulty = selectedDifficulty.options[selectedDifficulty.selectedIndex].value
  seconds = difficulty
}

function pauseAudio(audio){
  audio.pause()
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

function getCorrectAnswer(){
    if(currentGenre[currentQuestionIndex].answers[0].correct){
      answer1.classList.add('correct')
      clickedWrongCorrect = answer1
    }
    else if(currentGenre[currentQuestionIndex].answers[1].correct){
      answer2.classList.add('correct')
      clickedWrongCorrect = answer2
    }
    else if(currentGenre[currentQuestionIndex].answers[2].correct){
      answer3.classList.add('correct')
      clickedWrongCorrect = answer3
    }
    else if(currentGenre[currentQuestionIndex].answers[3].correct){
      answer4.classList.add('correct')
      clickedWrongCorrect = answer4
    }
}

function clearCorrectAnswer(answerNmbr){
  if(answerNmbr.classList = 'correct'){
    answerNmbr.classList.remove('correct')
  }
}

  const questionsPop =  [{
    song: new Audio('songs/pop/ritornello.paradise.mp3'),
    answers: [
              { text:'Paradise', correct:true },
              { text:'Sky full of stars', correct:false },
              { text:'Charlie Brown', correct:false },
              { text:'She flies', correct:false }
          ]
  },
  {
  song: new Audio('songs/pop/ritornello.something.just.like.this.mp3'),
  answers: [
            { text:'I want something', correct:false },
            { text:'Someone to kiss', correct:false },
            { text:'Adventure of a lifitime', correct:false },
            { text:'Something just like this', correct:true }
        ]
  },
  {
  song: new Audio('songs/pop/ritornello.treat.you.better.mp3'),
  answers: [
            { text:"He can't", correct:false },
            { text:'Treat you better', correct:true },
            { text:'Stiches', correct:false },
            { text:'Gentlemen', correct:false }
        ]
  },
    {
      song:new Audio('songs/pop/ritornello.7.rings.mp3'),
      answers: [
        { text: '7 rings', correct: true },
        { text: 'I want it', correct: false },
        { text: 'I got it', correct: false },
        { text: 'Are you sure', correct: false }
      ]
    },
    {
      song: new Audio('songs/pop/ritornello.drunk.in.love.mp3'),  
      answers: [
        { text: 'Beautiful day', correct: false },
        { text: 'Help is coming', correct: false },
        { text: 'Our Town', correct: false },
        { text: 'Drunk In Love', correct: true }
      ]
    },
    {
      song: new Audio('songs/pop/prima.strofa.bad.guy.mp3'),
      answers: [
                { text:'Love you', correct:false },
                { text:'Bad Guy', correct:true },
                { text:'DUH', correct:false },
                { text:'Tough guy', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.california.gurls.mp3'),
      answers: [
                { text:'California Gurls', correct:true },
                { text:'California Girls', correct:false },
                { text:'We are undeniable', correct:false },
                { text:'Friday Night', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.cant.feel.my.face.mp3'),
      answers: [
                { text:'Just You', correct:false },
                { text:"I'm with you", correct:false },
                { text:"Can't Feel My Face", correct:true },
                { text:'I love it', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.chandelier.mp3'),
      answers: [
                { text:'Chandelier', correct:true },
                { text:'Swing', correct:false },
                { text:"Can't Feel My Face", correct:false },
                { text:'Nothing that exists', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.airplanes.mp3'),
      answers: [
                { text:'Wish', correct:false },
                { text:'Airplanes', correct:true },
                { text:'Fireflies', correct:false },
                { text:'Shooting stars', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofs.before.you.go.mp3'),
      answers: [
                { text:'Something I said', correct:false },
                { text:'The right time', correct:false },
                { text:"Never", correct:false },
                { text:'Before you go', correct:true }
            ]
    },
    {
      song: new Audio('songs/pop/prima.strofa.counting.stars.mp3'),
      answers: [
                { text:'Light in the sky', correct:false },
                { text:'Right now', correct:false },
                { text:'Counting Stars', correct:true },
                { text:'Airplanes', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.dance.monkey.mp3'),
      answers: [
                { text:'Dance Monkey', correct:true },
                { text:"Let's go", correct:false },
                { text:'Just Dance', correct:false },
                { text:'For me', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.get.lucky.mp3'),
      answers: [
                { text:'Get lucky', correct:true },
                { text:"Who we are", correct:false },
                { text:'Up all night', correct:false },
                { text:'From far', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.perfect-[AudioTrimmer.com].mp3'),
      answers: [
                { text:'Perfect', correct:true },
                { text:"Beautiful", correct:false },
                { text:'Thinking out loud', correct:false },
                { text:'I found a girl', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/prima.strofa.girls.like.you.mp3'),
      answers: [
                { text:'My girl', correct:false },
                { text:"L-O-V-E", correct:false },
                { text:"Girls like you", correct:true },
                { text:'Guy like me', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/prima.strofa.radioactive.mp3'),
      answers: [
                { text:'On top of the world', correct:false },
                { text:"In my bones", correct:false },
                { text:"New age", correct:false },
                { text:'Radioactive', correct:true }
            ]
    },
    {
      song: new Audio('songs/pop/prima.strofa.roar.mp3'),
      answers: [
                { text:'Roar', correct:true },
                { text:"Eye of the tiger", correct:false },
                { text:"Fire", correct:false },
                { text:'Lion in me', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/prima.strofa.uptown.funk.mp3'),
      answers: [
                { text:'The funk', correct:false },
                { text:"Grenade", correct:false },
                { text:"Uptown funk", correct:true },
                { text:'Saturday night', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/prima.strofa.watermelon.sugar.mp3'),
      answers: [
                { text:'Sugar', correct:false },
                { text:"The taste", correct:false },
                { text:"Summer feeling", correct:false },
                { text:'Watermelon sugar', correct:true }
            ]
    },
    {
      song: new Audio('songs/pop/prima.strofa.what.makes.you.beautiful.mp3'),
      answers: [
                { text:'What makes you beautiful', correct:true},
                { text:"Baby", correct:false },
                { text:"My world", correct:false },
                { text:'You light me up', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.dark.horse.mp3'),
      answers: [
                { text:'Dark Horse', correct:true },
                { text:"Magic", correct:false },
                { text:"Are you ready for it", correct:false },
                { text:'Storm', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.dont.start.now.mp3'),
      answers: [
                { text:'Not now', correct:false },
                { text:"Don't start now", correct:true },
                { text:"Love is on it's way", correct:false },
                { text:'New Rules', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.head&heart.mp3'),
      answers: [
                { text:'Love it', correct:false },
                { text:"Head and heart", correct:true },
                { text:"I hate you", correct:false },
                { text:'The way I feel', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.love.me.like.you.do.mp3'),
      answers: [
                { text:'Touch me', correct:false },
                { text:"Love me like you do", correct:true },
                { text:"Love me", correct:false },
                { text:'Like you do', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.moves.like.jagger.mp3'),
      answers: [
                { text:'She said', correct:false },
                { text:"Moves", correct:false },
                { text:"The king", correct:false },
                { text:'Moves like jagger', correct:true}
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.one.kiss.mp3'),
      answers: [
                { text:'One kiss', correct:true },
                { text:"Don't show up", correct:false },
                { text:"Don't start now", correct:false },
                { text:'Rules', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.price.tag.mp3'),
      answers: [
                { text:'Money money', correct:false },
                { text:"Price tag", correct:true },
                { text:"It's not about the money", correct:false },
                { text:'Price', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.see.you.again.mp3'),
      answers: [
                { text:'All about it', correct:false },
                { text:"I'll tell you", correct:false },
                { text:"All about that bass", correct:false },
                { text:'See you again', correct:true }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.stay.with.me.mp3'),
      answers: [
                { text:'Stay with me', correct: true },
                { text:"All I need", correct:false },
                { text:"All of me", correct:false },
                { text:'You are all I need', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.stressed.out.mp3'),
      answers: [
                { text:'Play pretend', correct:false },
                { text:"Blury face", correct:false },
                { text:"Make money", correct:false },
                { text:'Stressed out', correct:true }
            ]
    },
    {
      song: new Audio('songs/pop/ritornello.thrift.shop.mp3'),
      answers: [
                { text:'Thrift shop', correct:true },
                { text:"Pop some tags", correct:false },
                { text:"20 Dollars", correct:false },
                { text:'Wings', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa,diamonds.mp3'),
      answers: [
                { text:'Diamonds', correct:true},
                { text:"Bright", correct:false },
                { text:"Shine", correct:false },
                { text:'Diamonds in the sky', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.cant.stop.the.feeling.mp3'),
      answers: [
                { text:"Can't stop", correct:false },
                { text:"Dance", correct:false },
                { text:"Can't stop the feeling", correct:true},
                { text:'The feeling', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.faded.mp3'),
      answers: [
                { text:'Faded', correct:true },
                { text:"Lost", correct:false },
                { text:"Run away", correct:false },
                { text:'Take it', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.happy.mp3'),
      answers: [
                { text:'Beautiful day', correct:false },
                { text:"Smile", correct:false },
                { text:"Because I'm happy", correct:false },
                { text:'Happy', correct:true }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.hello.mp3'),
      answers: [
                { text:'Happy', correct:false },
                { text:"Hello", correct:true },
                { text:"It's me", correct:false },
                { text:'Rolling in the deep', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.last.friday.night.mp3'),
      answers: [
                { text:'This friday night', correct:false },
                { text:"Friday party", correct:false },
                { text:"Last night", correct:false },
                { text:'Last friday night', correct:true }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.new.rules.mp3'),
      answers: [
                { text:'One', correct:false },
                { text:"Walk away", correct:false },
                { text:"Don't start now", correct:false },
                { text:'New rules', correct:true }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.rain.on.me.mp3'),
      answers: [
                { text:'Rain on me', correct:true },
                { text:"All of me", correct:false },
                { text:"Love and pain", correct:false },
                { text:'Rain', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.rolling.in.the.deep.mp3'),
      answers: [
                { text:'You put my heart in pain', correct:false },
                { text:"Hello", correct:false },
                { text:"Rolling in the deep", correct:true },
                { text:"There's a fire", correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.senorita.mp3'),
      answers: [
                { text:'I love it when you call me', correct:false },
                { text:"Senorita", correct:true },
                { text:"Meet ya", correct:false },
                { text:'Every touch', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.starboy.mp3'),
      answers: [
                { text:'The boy', correct:false },
                { text:"Starboy", correct:true },
                { text:"Call me", correct:false },
                { text:'Look what you did', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.wake.me.up.mp3'),
      answers: [
                { text:'Wake me up', correct:true},
                { text:"When it's all over", correct:false },
                { text:"Older", correct:false },
                { text:'Wiser', correct:false }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.we.found.love.mp3'),
      answers: [
                { text:'Wings', correct:false },
                { text:"Lonely place", correct:false },
                { text:"We've loved and cry", correct:false },
                { text:'We found love', correct:true }
            ]
    },
    {
      song: new Audio('songs/pop/seconda.strofa.work.mp3'),
      answers: [
                { text:'Work', correct:true },
                { text:"See me", correct:false },
                { text:"Work it", correct:false },
                { text:'Eyes on me', correct:false }
            ]
    }
  ]
  
  const questionsRap= [{
    song: new Audio('songs/rap/ritornello.old.town.road.mp3'),
    answers: [
              { text:"I'm not afraid", correct:false},
              { text:"Till I can't no more", correct:false },
              { text:'Old town road', correct:true },
              { text:'Ride', correct:false }
          ]
  },
    {
    song: new Audio('songs/rap/prima.strofa.love.the.way.you.lie.mp3'),
    answers: [
              { text:"I'm not afraid", correct:false},
              { text:"Watch me cry", correct:false },
              { text:'Love the way you lie', correct:true },
              { text:'Cause I love you', correct:false }
          ]
  },
  {
  song: new Audio('songs/rap/prima.strofa.hotline.bling.mp3'),
  answers: [
            { text:'City Lights', correct:false },
            { text:'I met you', correct:false },
            { text:'Hotline Bling', correct:true },
            { text:'Call me on my cellphone', correct:false }
        ]
  },
  {
  song: new Audio('songs/rap/prima.strofa.rap.god.mp3'),
  answers: [
            { text:'Godzilla', correct:false },
            { text:'Mocking bird', correct:false },
            { text:'I fell like the king', correct:false },
            { text:'Rap God', correct:true }
        ]
  },
  {
  song: new Audio('songs/rap/prima.strofa.smile.mp3'),
  answers: [
            { text:'Lucid Dreams', correct:false },
            { text:'Smile', correct:true },
            { text:'All the time', correct:false },
            { text:'Babysitter', correct:false }
        ]
  },
  {
  song: new Audio('songs/rap/prima.strofa.the,plan.mp3'),
  answers: [
            { text:'The plan', correct:true },
            { text:"God's plan", correct:false },
            { text:'The start', correct:false },
            { text:'Rockstar', correct:false }
        ]
  },
  {
  song: new Audio('songs/rap/prima.strofa.whats.poppin.mp3'),
  answers: [
            { text:'Popstar', correct:false },
            { text:'Introduction', correct:false },
            { text:'Whats Poppin', correct:true },
            { text:'Stockton', correct:false }
        ]
  },
  {
  song: new Audio('songs/rap/ritornello.come&go.mp3'),
  answers: [
            { text:'Come and Go', correct:true },
            { text:'Every day', correct:false },
            { text:'Know it', correct:false },
            { text:'Run it back', correct:false }
        ]
  },
  {
  song: new Audio('songs/rap/ritornello.ROCKSTAR.mp3'),
  answers: [
            { text:'You so fake', correct:false },
            { text:'The stage', correct:false },
            { text:'Rockstar', correct:true},
            { text:"I'm a star", correct:false }
        ]
  },
  {
  song: new Audio('songs/rap/ritornello.rockstar (1).mp3'),
  answers: [
            { text:'Rockstar', correct:true},
            { text:'Circles', correct:false },
            { text:'Fell just like a rockstar', correct:false },
            { text:'White Ivverson', correct:false }
        ]
  },
  {
  song: new Audio('songs/rap/seconda.strofa.gods.plan.mp3'),
  answers: [
            { text:'I only love her', correct:false },
            { text:'Hotline Bling', correct:false },
            { text:"God's Plan", correct:true },
            { text:'The Plan', correct:false }
        ]
  },
  {
  song: new Audio('songs/rap/seconda.strofa.laugh.now.cry.later.mp3'),
  answers: [
            { text:'Laugh now cry later', correct:true },
            { text:"Don't cry", correct:false },
            { text:"Don't stop now", correct:false },
            { text:'The Start', correct:false }
        ]
  },
  {
    song: new Audio('songs/rap/ritornello.mood.swings.mp3'),
    answers: [
              { text:'Mood swings', correct:true },
              { text:"Mood", correct:false },
              { text:"Lover", correct:false },
              { text:'Shorty a little baddy', correct:false }
          ]
  },
  {
    song: new Audio('songs/rap/ritornello.toosie.slide.mp3'),
    answers: [
              { text:'Left foot slide', correct:false },
              { text:"Toosie slide", correct:true },
              { text:"God's plan", correct:false },
              { text:'Laugh now cry later', correct:false }
          ]
  },
  {
    song: new Audio('songs/rap/seconda.strofa.mood.mp3'),
    answers: [
              { text:'Mood swings', correct:false },
              { text:"Always", correct:false },
              { text:"Play it cool", correct:false },
              { text:'Mood', correct:true}
          ]
  },
  {
    song: new Audio('songs/rap/seconda.strofa.stressed.out.mp3'),
    answers: [
              { text:'Stressed out', correct:true },
              { text:"Play it cool", correct:false },
              { text:"Play pretend", correct:false },
              { text:'Make money', correct:false }
          ]
  },
  {
    song: new Audio('songs/rap/seconda.strofa.thrift.shop-[AudioTrimmer.com].mp3'),
    answers: [
              { text:'20 Dollars ', correct:false },
              { text:"Thrift shop", correct:true},
              { text:"Pop some tags", correct:false },
              { text:'Wings', correct:false }
          ]
  }]
  
  const questionsRock =[{
    song: new Audio('songs/rock/Kiss - I Was Made For Lovin You-[AudioTrimmer.com].mp3'),
    answers: [
              { text:"Don't stop me now", correct:false },
              { text:'Rock n Roll', correct:false },
              { text:'Loving all of you', correct:false },
              { text:'I was made for loving you', correct:true }
          ]
    },
    {
  song: new Audio('songs/rock/prima.strofa.jump.mp3'),
  answers: [
            { text:"Don't stop me now", correct:false },
            { text:'Go', correct:false },
            { text:'I get up', correct:false },
            { text:'Jump', correct:true }
        ]
  },
  {
  song: new Audio("songs/rock/ritornello.dont.stop.believin'.mp3"),
  answers: [
            { text:'Believe it', correct:false },
            { text:"Don't stop believen", correct:true },
            { text:'The feeling', correct:false },
            { text:"Can't stop", correct:false }
        ]
  },
  {
  song: new Audio('songs/rock/ritornello.i.want.it.all.mp3'),
  answers: [
            { text:'Bohemian Rapsody', correct:false },
            { text:'Somebody to Love', correct:false },
            { text:'I want it all', correct:true },
            { text:'All of it', correct:false }
        ]
  },
  {
  song: new Audio('songs/rock/ritornello.livin.on.a.prayer.mp3'),
  answers: [
            { text:'The prayer', correct:false },
            { text:'Half way there', correct:false },
            { text:'Take my hand', correct:false },
            { text:'Livin on a prayer', correct:true }
        ]
  },
  {
  song: new Audio('songs/rock/prima.strofa.another.brick.in.the.wall.mp3'),
  answers: [
            { text:'Another brick in the wall', correct:true },
            { text:'Leave us alone', correct:false },
            { text:'Teacher', correct:false },
            { text:'Another one bites the dust', correct:false }
        ]
  },
  {
  song: new Audio('songs/rock/ritornello.radioactive.mp3'),
  answers: [
            { text:'Believer', correct:false },
            { text:'Radioactive', correct:true },
            { text:'In My Blood', correct:false },
            { text:'On top of the world', correct:false }
        ]
  },
  {
  song: new Audio('songs/rock/ritornello.highway.to.hell.mp3'),
  answers: [
            { text:'Back in black', correct:false },
            { text:'The Highway', correct:false },
            { text:'Radioactive', correct:false },
            { text:'Highway to hell', correct:true }
        ]
  },
  {
  song: new Audio('songs/rock/prima.strofa.we.will.rock.you.mp3'),
  answers: [
            { text:"Rock you", correct:false },
            { text:'We will rock you', correct:true },
            { text:'Back in black', correct:false },
            { text:'W.w.r.y.', correct:false }
        ]
  },
  {
  song: new Audio('songs/rock/ritornello.we.are.young.mp3'),
  answers: [
            { text:'Party all night', correct:false },
            { text:"Let's set the world on fire", correct:false },
            { text:"Tonight let's party", correct:false },
            { text:'We are young', correct:true }
        ]
  },
  {
  song: new Audio('songs/rock/ritornello.you.shook.me.all.night.long.mp3'),
  answers: [
            { text:'American girl', correct:false },
            { text:'You shook me all night long', correct: true },
            { text:'All night', correct:false },
            { text:'Back In Black', correct:false }
        ]
  }]
  
  const questionsItalian =[{
    song: new Audio('songs/italian/seconda.strofa.superclassico.mp3'),
    answers: [
        { text: 'Autostop', correct: false },
        { text: 'Superclassico', correct: true },
        { text: 'Classico', correct: false },
        { text: 'yoshi', correct: false }
        ]
    },
    {
    song: new Audio('songs/italian/ritornello.yoshi.mp3'),
    answers: [
        { text: 'Offline', correct: false },
        { text: 'yoshi', correct: true },
        { text: 'GOSSIP', correct: false },
        { text: 'veleno 6', correct: false }
        ]
    },
    {
      song: new Audio('songs/italian/Boomdabash Alessandra Amoroso - Karaoke-[AudioTrimmer.com].mp3'),
      answers: [
        {text:"Ballare", correct:false},
        {text:"Karaoke", correct:true},
        {text:"Festa d'estate", correct:false},
        {text:"Voglia di Ballare", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/seconda.strofa.bimbi.per.strada.mp3'),
      answers: [
        {text:"Non sopporto te", correct:false},
        {text:"Ricordi", correct:false},
        {text:"Spigoli", correct:false},
        {text:"Bimbi per strada", correct:true}
      ]
    },
    {
      song: new Audio('songs/italian/prima.strofa.veleno.6.mp3'),
      answers: [
        {text:"Veleno 6", correct:true},
        {text:"Machete", correct:false},
        {text:"Veleno 7", correct:false},
        {text:"Check it", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/ritornello.0ffline.mp3'),
      answers: [
        {text:"Offline", correct:true},
        {text:"Machete", correct:false},
        {text:"Yoshi", correct:false},
        {text:"Veleno 6", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/ritornello.spigoli.mp3'),
      answers: [
        {text:"Persona", correct:false},
        {text:"Karaoke", correct:false},
        {text:"Spigoli", correct:true},
        {text:"Autostop", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/seconda.strofa.autostop.mp3'),
      answers: [
        {text:"Auto Blu", correct:false},
        {text:"Autostop", correct:true},
        {text:"Bella Ciao", correct:false},
        {text:"Spigoli", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/seconda.strofa.blun7.a.swishland.mp3'),
      answers: [
        {text:"Veleno 6", correct:false},
        {text:"Swish", correct:false},
        {text:"Yoshi", correct:false},
        {text:"Blun7 a swishland", correct:true}
      ]
    },
    {
      song: new Audio('songs/italian/seconda.strofa.good.times.mp3'),
      answers: [
        {text:"All the time", correct:false},
        {text:"Offline", correct:false},
        {text:"Good Times", correct:true},
        {text:"Sempre", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/Thegiornalisti - Riccione-[AudioTrimmer.com].mp3'),
      answers: [
        {text:"Riccione", correct:true},
        {text:"Sotto il sole", correct:false},
        {text:"Il mare", correct:false},
        {text:"Karaoke", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/ritornello.scatola.nera.mp3'),
      answers: [
        {text:"Patatrac", correct:false},
        {text:"Scatola nera", correct:true},
        {text:"Defuera", correct:false},
        {text:"Marylean", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/seconda.strofa.defuera.mp3'),
      answers: [
        {text:"Marylean", correct:false},
        {text:"Patatrac", correct:false},
        {text:"Scatola nera", correct:false},
        {text:"Defuera", correct:true}
      ]
    },
    {
      song: new Audio('songs/italian/seconda.strofa.marylean.mp3'),
      answers: [
        {text:"Defuera", correct:false},
        {text:"Scatola nera", correct:false},
        {text:"Marylean", correct:true},
        {text:"Patatrac", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/seconda.strofa.patatrac.rmx-[AudioTrimmer.com].mp3'),
      answers: [
        {text:"Marylean", correct:false},
        {text:"Defuera", correct:false},
        {text:"Patatrac", correct:true},
        {text:"Scatola nera", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/ALFA - SUL PI BELLO Prod Yanomi-[AudioTrimmer.com].mp3'),
      answers: [
        {text:"Sul Più Bello", correct:true},
        {text:"C'est la vie", correct:false},
        {text:"Evergreen", correct:false},
        {text:"Film", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/MEDITERRANEA - IRAMA OFFICIAL VIDEO-[AudioTrimmer.com].mp3'),
      answers: [
        {text:"Sul Più Bello", correct:false},
        {text:"Mediterranea", correct:true},
        {text:"Karaoke", correct:false},
        {text:"Festa", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/PSICOLOGI  FESTA -[AudioTrimmer.com].mp3'),
      answers: [
        {text:"Futuro", correct:false},
        {text:"Voglia di ballare", correct:false},
        {text:"Sto bene", correct:false},
        {text:"Festa", correct:true}
      ]
    },
    {
      song: new Audio('songs/italian/PSICOLOGIFUTURO-[AudioTrimmer.com].mp3'),
      answers: [
        {text:"Futuro", correct:true},
        {text:"Sto bene", correct:false},
        {text:"Mediterranea", correct:false},
        {text:"Festa", correct:false}
      ]
    },
    {
      song: new Audio('songs/italian/Random - Sono un bravo ragazzo un po fuori di testa Official Video-[AudioTrimmer.com].mp3'),
      answers: [
        {text:"Sono un bravo ragazzo un pò fuori di testa", correct:true},
        {text:"Bravo ragazzo", correct:false},
        {text:"Festa", correct:false},
        {text:"Un pò furoi di testa", correct:false}
      ]
    }
  ]  
