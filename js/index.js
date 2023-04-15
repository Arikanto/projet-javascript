var question1 = []
var question2 = []
var question3 = []
var randomedQuestion
var indexQuestion = 0
var score = 0;
var gameContainer = document.getElementById("gameContainer")
gameContainer.style.display="none"
var levelContainer = document.getElementById("container")
var questionElmt = document.getElementById("questionText")
var answerBtn = document.getElementById("optionButton")
var nextBtn = document.getElementById("nextBtn")
var nextLevel = document.getElementById("nextLevel")
var scoreContainer = document.getElementById("score")
nextLevel.style.display="none"
nextLevel.addEventListener('click', ()=>{
    history.go()

})
getBtn("1")
getBtn("2")
getBtn("3")

function getBtn(elmt){
    var idBtn = document.getElementById(elmt)
    idBtn.addEventListener("click", getLevelId)
    function getLevelId(){
        //var idLevel = elmt
        level(elmt)
    }
}
function level(id){
    gameContainer.style.display="block"
    levelContainer.style.display="none"
    if(id==1){
        randomedQuestion = question1.sort(()=> Math.random()- .5)
    }else if(id==2){
        randomedQuestion = question2.sort(()=> Math.random()- .5)
    }else{
        randomedQuestion = question3.sort(()=> Math.random()- .5)
    }
    nextQuestion()
}
nextBtn.addEventListener('click',()=>{
    indexQuestion++
    nextQuestion()
} )
function nextQuestion(){
    resetState()
    showQuestion(randomedQuestion[indexQuestion])
    

}
function showQuestion(question){
    questionElmt.innerText=question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerBtn.appendChild(button)
    });
}
function resetState(){
    nextBtn.classList.add('hide')
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}
function selectAnswer(e){
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    if(correct === undefined){
        correct=false
    }
    if(correct){
        score++
    }
    scoreContainer.innerText = "Isa " + score
    //setStyle(correct)
    //console.log(correct)
    Array.from(answerBtn.children).forEach(button =>{
        setStyle(button,button.dataset.correct )
    })
    if(randomedQuestion.length>indexQuestion + 1){
        nextBtn.classList.remove('hide')
    }else{
        nextLevel.style.display="block"
    }
}

function setStyle(element, correct){
    clearStyle(element)
    if(correct){
        console.log(correct)
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStyle(elmt){
    elmt.classList.remove('correct')
    elmt.classList.remove('wrong')

}
    document.getElementById("back").addEventListener('click', reloadPage)
    function reloadPage(){
        history.go()
    }

question1 = [
    {
        question:"Elo be tsy mipika",
        answers:[
            { text:'lanitra', correct:true},
            { text:'tany', correct:false}
        ]
    },
    {
        question:"Jereo aho ijereko anao",
        answers:[
            { text:'olona', correct:false},
            { text:'fitaratra', correct:true},

        ]
    },
    {
        question:"Nonon'i nenibe mitarozaka",
        answers:[
            { text:'sosety', correct:true},
            { text:'karoty', correct:false}
        ]
    },
    {
        question:"Biby lava mifoka sigara",
        answers:[
            { text:'sarety', correct:false},
            { text:'lamasinia', correct:true},

        ]
    },
    {
        question:"Ilay kely monina ao an-trano vato",
        answers:[
            { text:'nify', correct:false},
            { text:'lela', correct:true},
        ]
    },
]

question2 = [
    {
        question:"Bataina tsy zaka akisaka tsy mety, ilaozana manaraka ho azy",
        answers:[
            { text:'aloka', correct:true},
            { text:'zaza', correct:false}
        ]
    },
    {
        question:"Maraina izy tongotra efatra, atoandro tongotra roa ariva tongotra telo",
        answers:[
            { text:'biby', correct:false},
            { text:'olona', correct:true},
        ]
    },
    {
        question:"Raha tsy misy ahy ny trano dial lasa rano",
        answers:[
            { text:'T', correct:true},
            { text:'R', correct:false}
        ]
    },
    {
        question:"Tongony tapaka tsy mahafaty azy fa lambany latsaka no mahafaty azy",
        answers:[
            { text:'hazo', correct:false},
            { text:'vary ', correct:true},

        ]
    },
    {
        question:"Lasa aho fa ianao avelako eo",
        answers:[
            { text:'dia tongotra', correct:true},
            { text:'rivotra', correct:false}
        ]
    },
]

question3 = [
    {
        question:"Rehefa mandalo ikoto kely dia miala satroka ingahy lehibe",
        answers:[
            { text:'vilany sy sotro', correct:false},
            { text:'vilia sy sortro', correct:false},
            { text:'sinibe sy zinga', correct:true},
            { text:'vilany sy kaopy', correct:false}
        ]
    },
    {
        question:"Antsaha tsy misaraka antanety tsy mifanary",
        answers:[
            { text:'angady vary', correct:false},
            { text:'rano sy vary', correct:true},
            { text:'angady sy tany', correct:false},
            { text:'laona sy fanoto', correct:false}
        ]
    },
    {
        question:"Ny reniny miteny oe andao hitsangana ny zanany manao oe andao hitsivalana",
        answers:[
            { text:'fiakarana', correct:false},
            { text:'tohatra', correct:true},
            { text:'fidinana', correct:false}
        ]
    },
    {
        question:"Tsy atsipy tsy atoraka nefa mahatonga alavitra",
        answers:[
            { text:'fiara', correct:false},
            { text:'tongotra', correct:false},
            { text:'eritreritra', correct:true},
            { text:'saina', correct:false},
        ]
    },
    {
        question:"Kapaina tsy hita fery",
        answers:[
            { text:'hazo', correct:false},
            { text:'voninkazo', correct:false},
            { text:'rano', correct:true},
            { text:'rivotra', correct:false}
        ]
    },
]