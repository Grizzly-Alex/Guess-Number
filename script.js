'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.score').textContent = score;



document.querySelector('.check')
.addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    //No input
    if(!guessingNumber){
       document.querySelector('.guess-message').textContent = 'Введите число!'; 
    }
    //Player won
    else if(secretNumber == guessingNumber){
        document.querySelector('.question').textContent = secretNumber;
        document.querySelector('.guess-message').textContent = 'Правильно!';
        document.querySelector('body').style.backgroundColor = 'rgb(9, 150, 21)';
        document.querySelector('.question').style.width = '50rem';

        if (score > highScore){
            highScore = score;
            document.querySelector('.highScore').textContent = highScore;
        }
    }
    //miss
    else if (score > 1){
        //To high
        if(guessingNumber > secretNumber){
            document.querySelector('.guess-message').textContent = 'Слишком много!';
        }
        //To low
        else if(guessingNumber < secretNumber){
            document.querySelector('.guess-message').textContent = 'Слишком мало!';
        }
        score --;
        document.querySelector('.score').textContent = score;
    }
    else{
        document.querySelector('.score').textContent = 0;
        document.querySelector('.guess-message').textContent = 'Игра окончена!';
    }

});

document.querySelector('.again')
.addEventListener('click', function() {
    document.querySelector('.question').textContent = '???'
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.guess-message').textContent = 'Начни угадывать'; 
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
    document.querySelector('.number-input').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
});