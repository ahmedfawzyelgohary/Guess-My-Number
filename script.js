'use strict';
/*
document.querySelector('.number').textContent = 14;
document.querySelector('.score').textContent = 22;
document.querySelector('.guess').value = 24; 
*/
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number ❗';
  }
});
