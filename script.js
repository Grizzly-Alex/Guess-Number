'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.score').textContent = score;
document.querySelector('.question').textContent = secretNumber;


document.querySelector('.check')
.addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);

    if(!guessingNumber){
       document.querySelector('.guess-message').textContent = 'Введите число!' 
    }
    else if(secretNumber == guessingNumber){
        document.querySelector('.guess-message').textContent = 'Правильно!' 
    }
    else if (score > 1){
        if(guessingNumber > secretNumber){
            document.querySelector('.guess-message').textContent = 'Слишком много!'
        }
        else if(guessingNumber < secretNumber){
            document.querySelector('.guess-message').textContent = 'Слишком мало!'
        }
        score --;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.score').textContent = 0;
        document.querySelector('.guess-message').textContent = 'Игра окончена!';
    }

});
