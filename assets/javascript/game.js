// Variables
//=================================================================================
var alphabet = ['a', 'b', 'c',
        'd', 'e', 'f',
        'g', 'h', 'i',
        'j', 'k', 'l',
        'm', 'n', 'o',
        'p', 'q', 'r',
        's', 't', 'u',
        'v', 'w', 'x',
        'y', 'z'];
var easyNames = ["archer", "malory", "pam", "cyril", "cheryl", "lana", "krieger", "ray", "woodhouse", "barry", "nikolai", "bilbo", "brett", "katya", "seamus", "ron", "cecil", "slater"]
var choosenWord = "";
var wordlength = [];
var underScore = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var winCount = 0;    // User Wins
var loseCount = 0;  // User loses
var livesLeft = 12;    // Guesses left
var correctGuessesCounter = 0;
// var hardNames = ["Sterling Archer", "Malory Archer", "Pamela Poovey", "Cyril Figgis", "Cheryl Tunt", "Lana Kane", "Dr. Algernop Krieger", "Raymond Gillette", "Aruther Woodhouse", "Barry Dylan", "Leonard Trexler", "Brett Bunsen", "Bilbo", "Boris", "Katya Kazanova", "Nikolai Jakov", "Ron Cadillac", "Cecil Tunt", "Slater", "Seamus Archer"];

// Episode names
//Maybe will do this later

// Functions
//=========================================================================

function reset() {
        //Chooses word randomly
        choosenWord = easyNames[Math.floor(Math.random() * easyNames.length)];

        wordlength = choosenWord.split('');

        underScore = wordlength.length;

        letterGuessed = 0;
        correctGuessCounter = 0;
        liveLeft = 12;
        wrongLetters = [];
        blanksAndSuccesses = [];
        alphabet = ['a', 'b', 'c',
                'd', 'e', 'f',
                'g', 'h', 'i',
                'j', 'k', 'l',
                'm', 'n', 'o',
                'p', 'q', 'r',
                's', 't', 'u',
                'v', 'w', 'x',
                'y', 'z'];

        test = false;
        startGame();
}
function startGame() {

        choosenWord = easyNames[Math.floor(Math.random() * easyNames.length)];

        wordlength = choosenWord.split('');

        underScore = wordlength.length;

        correctGuessCounter = 0;
        livesLeft = 12;
        wrongLetters = [];
        blanksAndSuccesses = [];
        alphabet = ['a', 'b', 'c',
                'd', 'e', 'f',
                'g', 'h', 'i',
                'j', 'k', 'l',
                'm', 'n', 'o',
                'p', 'q', 'r',
                's', 't', 'u',
                'v', 'w', 'x',
                'y', 'z'];

        for (var i = 0; i < underScore; i++) {
                blanksAndSuccesses.push('_');
                document.getElementsByClassName('card-title').innerHTML = blanksAndSuccesses;
        }

document.getElementsByClassName('card-title').innerHTML = blanksAndSuccesses.join(' ');
document.getElementsByClassName('winCounter').innerHTML = winCount;
document.getElementsByClassName('numGuesses').innerHTML = livesLeft;
document.getElementsByClassName('lossCounter').innerHTML = loseCount;
document.getElementsByClassName('wrongGuesses').innerHTML = wrongLetters;
        console.log(choosenWord);
	console.log(wordlength);
	console.log(underScore);
	console.log(blanksAndSuccesses);
}

function compareLetters(userKey) {
        console.log('WORKING!');
        //If user key exist in choosen word then perform this function 
        if (choosenWord.indexOf(userKey) > -1) {
                //Loops depending on the amount of blanks 
                for (var i = 0; i < underScore; i++) {
                        //Fills in right index with user key
                        if (wordlength[i] === userKey) {
                                correctGuessCounter++;
                                blanksAndSuccesses[i] = userKey;
                                document.getElementById('card-title').innerHTML = blanksAndSuccesses.join(' ');
                        }
                }
                //Test / Debug
                console.log(blanksAndSuccesses);
        }
        //Wrong Keys
        else {
                wrongLetters.push(userKey);
                livesLeft--;
                //Changes HTML
                document.getElementById('numGuesses').innerHTML = livesLeft;
                document.getElementById('wrongGuesses').innerHTML = wrongLetters;
                //Test / Debug
                console.log('Wrong Letters = ' + wrongLetters);
                console.log('Guesses left are ' + livesLeft);
        }



}
function winLose() {
        // When number blanks if filled with right words then you win
        if (correctGuessCounter === underScore) {
                //Counts Wins 
                winCount++;
                //Changes HTML
                document.getElementById('winCounter').innerHTML = winCount;
                alert('You Win');
                reset();
        }
        // When number of Guesses reaches 0 then You lose
        else if (livesLeft === 0) {
                //Counts losses
                loseCount++;
                //Changes HTML
                document.getElementById('lossCounter').innerHTML = loseCount;
                alert('You Lose');
                reset();
        }
}


startGame();

document.onkeyup = function (event) {
        test = true;
        var letterGuessed = event.key;
        for (var i = 0; i < alphabet.length; i++) {
                if (letterGuessed === alphabet[i] && test === true) {
                        var spliceDword = alphabet.splice(i, 1);
                        //Test / Debug
                        console.log('Double word is = ' + alphabet[i])
                        console.log('Spliced Word is = ' + spliceDword);

                        compareLetters(letterGuessed);
                        winLose();
                }
        }

}