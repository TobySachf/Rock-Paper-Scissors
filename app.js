const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const computerScoreDisplay = document.getElementById('computer-score')
const playerScoreDisplay = document.getElementById('player-score')
const displayDate = document.getElementById('display-date')
const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice
let result
let computerScore = 0
let playerScore = 0

let today = new Date()
displayDate.innerHTML = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    computerChoiceDisplay.innerHTML = computerChoice
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }



}

function getResult (){

    if (computerChoice === userChoice) {
        result = 'its a draw!'
        resultDisplay.setAttribute('class', 'text-info')
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
        resultDisplay.setAttribute('class', 'text-green')
        playerScore++
        playerScoreDisplay.innerHTML = playerScore.toString()
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lost!'
        resultDisplay.setAttribute('class', 'text-red')
        computerScore++
        computerScoreDisplay.innerHTML = computerScore.toString()
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
        resultDisplay.setAttribute('class', 'text-green')
        playerScore++
        playerScoreDisplay.innerHTML = playerScore.toString()
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
        resultDisplay.setAttribute('class', 'text-red')
        computerScore++
        computerScoreDisplay.innerHTML = computerScore.toString()
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
        resultDisplay.setAttribute('class', 'text-green')
        playerScore++
        playerScoreDisplay.innerHTML = playerScore.toString()
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
        resultDisplay.setAttribute('class', 'text-red')
        computerScore++
        computerScoreDisplay.innerHTML = computerScore.toString()
    }

    resultDisplay.innerHTML = result
}

function GetComputerName() {
    try {
        let network = new ActiveXObject('WScript.Network');
        // Show a pop up if it works
        alert(network.computerName);
    }
    catch (e) { }
}

console.log(GetComputerName)