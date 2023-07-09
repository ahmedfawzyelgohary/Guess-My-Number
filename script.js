'use strict';
/*
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 22;
document.querySelector('.guess').value = 24; 
*/
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number ❗';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number😀';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'to high😮';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost😓 ';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'to low🥱';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost😓 ';
      document.querySelector('.score').textContent = 0;
    }
  }
});
