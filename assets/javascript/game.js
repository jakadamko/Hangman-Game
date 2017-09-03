var randomWordArr = ["beer", "wine", "vodka", "rum", "gin"];
var randomWord = randomWordArr[Math.floor(Math.random() * randomWordArr.length)];

console.log(randomWord);

var s;
var r;
var count = 0;
//Empty array to store the guesses
var answerArray = [];
var wAnswerArray = [];

//fill the answer array with under scores which isn't working for some reason
function startUp() {
    for (var i = 0; i < randomWord.length; i++) {
        answerArray[i] = "_";
    }
    //Put them in a string
    s = answerArray.join(" ");
    document.getElementById("answer").innerHTML = s;
}







function Letter() {

    //we get the letter the user typed in the inputbox
    var letter = document.getElementById("letter").value;

    //makes sure we have a guess more checks can be made here, only letters
    if (letter.length > 0) {
        for (var i = 0; i < randomWord.length; i++) {

            //now if the random word contains a letter that the user typed in
            if (randomWord[i] === letter) {

                //assin it to the letter
                answerArray[i] = letter;
            } else {
                wAnswerArray[i] = letter;

            }
        }
        count++;
        document.getElementById("counter").innerHTML = "No of attempts: " + count;
        document.getElementById("answer").innerHTML = answerArray.join(" ");
    }
    if (count > 5) {
        document.getElementById("stat").innerHTML = "Come on - you should have guessed it by now";
    }
}