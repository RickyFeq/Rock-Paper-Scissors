const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const score = document.getElementById('score');
const choices = document.querySelectorAll('.choice');
const myWeapon = document.getElementById('myy-choice');
const computerWeapon = document.getElementById('weapon2');
let draw = document.getElementById('weapon');
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
  // if (scoreboard.player == 5 || scoreboard.computer == 5) {
  //   document.getElementById('weapon').innerHTML = "Game Over!"
  // }
  if (winner === 'Player') {
    scoreboard.player++;
    myScore.innerHTML = scoreboard.player;
    draw.innerHTML = `You win!`;
    computerWeapon.innerHTML = `Computer chose ${computerSelection}`;
    computerWeapon.style.display = 'block';
    console.log(winner);
  } else if (winner === 'Computer') {
    scoreboard.computer++;
    computerScore.innerHTML = scoreboard.computer;
    draw.innerHTML = `You lose!`;
    computerWeapon.innerHTML = `Computer chose ${computerSelection}`;
    computerWeapon.style.display = 'block';
    console.log(winner);
  } else {
    draw.innerHTML = 'Draw!';
    computerWeapon.style.visibility = 'hidden';
    console.log('draw');
  }
}

choices.forEach((choice) => choice.addEventListener('click', play));

// function game() {
//   for (let i = 0; i < 5; i++) {}
//
