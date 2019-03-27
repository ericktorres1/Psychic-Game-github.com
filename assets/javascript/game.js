var animals = ['bear', 'beaver', 'elephant', 'penguin', 'pig', 'rooster', 'zebra'];
var rightWord = [];
var wrongWord = [];

var randomNumber = Math.floor(Math.random() * animals.length);
var choosenAnimal = animals[randomNumber];
var underScore = [];

var domUnderScore = document.getElementsByClassName('underscore');
var domRightGuess = document.getElementsByClassName('rightGuess');
var domWrongGuess = document.getElementsByClassName('wrongGuess');
    var generateUnderscore = function () {
        for(var i = 0; i < choosenAnimal.length; i++) {
            underScore.push('_');
        }
        return underScore;
    }
    
    document.addEventListener('keypress', (event) => {
        var keycode = event.keyCode;
        var keyword = String.fromCharCode(keycode);
        
        if (choosenAnimal.indexOf(keyword) > -1) {
            rightWord.push(keyword);

            underScore[choosenAnimal.indexOf(keyword)] = keyword;
            domUnderScore[0].innerHTML = underScore.join(' ');
            domRightGuess[0].innerHTML = rightWord;

            console.log(rightWord);
        }
        else {
            wrongWord.push(keyword);
            domWrongGuess[0].innerHTML = wrongWord;
            console.log(wrongWord);
        }
            
    });

    domUnderScore[0].innerHTML = generateUnderscore().join(' ');