'use strict';
/*
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 22;
document.querySelector('.guess').value = 24; 
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const dispalyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no guess
  if (!guess) {
    dispalyMessage('No number ❗');
  }
  // when players win
  else if (guess === secretNumber) {
    //---->(replace this message with this function)document.queruySelector('.message').texetContent='Correct number';
    dispalyMessage('Correct number😀');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guessing different
  else if (guess !== secretNumber) {
    if (score > 1) {
      dispalyMessage(guess > secretNumber ? 'too high 😮' : 'too low 🥱');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dispalyMessage('you lost 😓 ');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   // when guess to high
//   else if (guess > secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too high 😮';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost 😓 ';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   // when guess to low
//   else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent = 'too low 🥱';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'you lost 😓 ';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  dispalyMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
