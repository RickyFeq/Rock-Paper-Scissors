const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const score = document.getElementById('score');
const choices = document.querySelectorAll('.choice');
const myWeapon = document.getElementById('my-choice');
const computerWeapon = document.getElementById('computer-choice');
let myScore = document.getElementById('my-score');
let computerScore = document.getElementById('computer-score');
let playerSelection;
let computerSelection;

const scoreboard = {
  player: 0,
  computer: 0
};

function play(e) {
  playerSelection = e.target.id;
  computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);

  showWinner(winner, computerSelection);
}

function getComputerChoice() {
  const random = Math.random();
  if (random < 0.34) {
    return 'rock';
  } else if (random <= 0.67) {
    return 'paper';
  } else return 'scissors';
}

function getWinner(p, c) {
  if (p === c) {
    return 'Draw!';
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'Computer';
    } else {
      return 'Player';
    }
  } else if (p === 'paper') {
    if (c === 'scissors') {
      return 'Computer';
    } else {
      return 'Player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'Computer';
    } else return 'Player';
  }
}

function showWinner(winner, computerSelection) {
  if (winner === 'Player') {
    scoreboard.player++;
    myScore.innerHTML = scoreboard.player;
    myWeapon.innerHTML = playerSelection;
    computerWeapon.innerHTML = computerSelection;
  } else if (winner === 'Computer') {
    scoreboard.computer++;
  }
}

choices.forEach((choice) => choice.addEventListener('click', play));

// function game() {
//   for (let i = 0; i < 5; i++) {}
//
