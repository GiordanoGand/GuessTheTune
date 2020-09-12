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

let clicked = false
let currentQuestionIndex = 0
let scorevalue = 0
let numberQuestion = 0
var seconds = document.getElementById("timer").textContent;
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
  homeBox.classList.add('hide')
  questioncontainer.classList.remove('hide')
  timer()
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
    seconds = 16
    timer()
    pauseAudio(currentGenre[currentQuestionIndex].song)
    clicked = false
    currentQuestionIndex++
    nextQuestion(currentGenre)
}

function clickQuestion(answerNumber,genre,answerIndex){
  answerNumber.addEventListener('click',() => {
    if(genre[currentQuestionIndex].answers[answerIndex].correct){
      document.body.classList.add('correct')
      if (!clicked){
        scorevalue++
        score.innerText = scorevalue
        clicked = true
        //clearInterval(countdown)
      }
    }
    else{
      if (document.body.classList != 'correct'){
        document.body.classList.add('wrong')
        clicked = true
        //clearInterval(countdown)
      }
    }
  })
}

function nextQuestion(genre){
  numberQuestion++
  endGame()
  clearStatusClass(document.body)
  if (numberQuestion <= 10){
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
  if (numberQuestion  > 10){
    pauseAudio(currentGenre[currentQuestionIndex].song)
    questioncontainer.classList.add('hide')
    resetContainer.classList.remove('hide')
    totalScore.innerText = scorevalue
  }
}

function timer(){
    countdown = setInterval(function() {
    seconds--;
    document.getElementById("timer").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown)
    if (seconds == 0){
      seconds = 16
      timer()
      nextBtn()
    }
}, 1000)
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

  const questionsPop =  [
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
                { text:'Sad', correct:false },
                { text:"Don't run", correct:false },
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
      song: new Audio('songs/pop/seconda.strofa.perfect.mp3'),
      answers: [
                { text:'Perfect', correct:true },
                { text:"Beautiful", correct:false },
                { text:'Thinking out loud', correct:false },
                { text:'I found a girl', correct:false }
            ]
    }
  ]
  
  const questionsRap= [    {
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
  song: new Audio('songs/rock/ritornello.paradise.mp3'),
  answers: [
            { text:'Paradise', correct:true },
            { text:'Sky full of stars', correct:false },
            { text:'Charlie Brown', correct:false },
            { text:'She flies', correct:false }
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
  song: new Audio('songs/rock/ritornello.something.just.like.this.mp3'),
  answers: [
            { text:'I want something', correct:false },
            { text:'Someone to kiss', correct:false },
            { text:'Adventure of a lifitime', correct:false },
            { text:'Something just like this', correct:true }
        ]
  },
  {
  song: new Audio('songs/rock/ritornello.treat.you.better.mp3'),
  answers: [
            { text:"He can't", correct:false },
            { text:'Treat you better', correct:true },
            { text:'Stiches', correct:false },
            { text:'Gentlemen', correct:false }
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
      song: new Audio('songs/italian/prima.strofa.bimbi.per.strada.mp3'),
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
    }
  ]  
