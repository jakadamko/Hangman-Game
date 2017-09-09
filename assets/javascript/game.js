$(document).ready(function() {

    var listOfWords = ["coorslight", "budlight", "bluemoon", "heineken", "millerlite"];
    var wrdToBeGuessed = listOfWords[Math.floor(Math.random() * listOfWords.length)];
    var rightGuess = [];
    var rightGuessMatch = [];
    var wrongGuess = [];
    var CharLength = wrdToBeGuessed.length;
    var lives = 20;

    console.log("secret word = " + wrdToBeGuessed);

    $("#Box4").append(CharLength + " Letter word | Category: Beer Brands");
    //document.getElementById("RSbutton").onclick = window.location.reload()
    function reloadPage() {
        location.reload();
    }


    for (var i = 0; i < wrdToBeGuessed.length; i++) {
        rightGuess.push([]);
    }


    for (var i = 0; i < wrdToBeGuessed.length; i++) {
        rightGuessMatch.push(wrdToBeGuessed.charAt(i));
    }

    document.getElementById("Box5").innerHTML = "Guesses Remaining: " + lives;
    document.getElementById("Box3").innerHTML = "The Secret Word: " + rightGuess;


    function keyPress(event) {

        var userGuess = event.key;
        document.getElementById("Box2").innerHTML = "Your Guesses: " + userGuess;
        lives -= 1;
        document.getElementById("Box5").innerHTML = "Guesses Remaining: " + lives;

        for (var i = 0; i < wrdToBeGuessed.length; i++) {

            if (userGuess == rightGuess[i]) {
                //Do Nothing - Makes sure double entry cannot be made
            } else {

                var PwLetter = wrdToBeGuessed.charAt(i);

                if (PwLetter == userGuess) {

                    rightGuess[i].push(userGuess);

                    document.getElementById("Box3").innerHTML = "The Secret Word: " + rightGuess;
                }
            }
        }

        console.log("wrongGuess = " + wrongGuess.join());
        console.log("rightGuess = " + rightGuess.join());
        wrongGuess.push(userGuess);
        document.getElementById("Box2").innerHTML = "Your Guesses: " + wrongGuess;

        if (wrongGuess.length > 15) {
            alert("sorry, you lost");
            //window.location.reload();
        }

        console.log("wronglength" + wrongGuess.length);


        if (rightGuess.join() == rightGuessMatch.join()) {
            alert("Congrats! You Win!");
            //window.location.reload();
            //document.getElementById("Box6").src = "coors.JPG";


            if (rightGuess == "C,O,O,R,S,L,I,G,H,T") {
                var img = document.createElement("img");
                img.src = "assets/images/coors.JPG";

                var src = document.getElementById("Box6");
                src.appendChild(img);

            }


            if (rightGuess == "h,e,i,n,e,k,e,n") {
                var img = document.createElement("img");
                img.src = "assets/images/heineken.JPG";

                var src = document.getElementById("Box6");
                src.appendChild(img);

            }

            if (rightGuess == "m,i,l,l,e,r,l,i,t,e") {
                var img = document.createElement("img");
                img.src = "assets/images/millerlite.JPG";

                var src = document.getElementById("Box6");
                src.appendChild(img);

            }

            if (rightGuess == "b,l,u,e,m,o,o,n") {
                var img = document.createElement("img");
                img.src = "assets/images/bluemoon.JPG";

                var src = document.getElementById("Box6");
                src.appendChild(img);

            }

            if (rightGuess == "b,u,d,l,i,g,h,t") {
                var img = document.createElement("img");
                img.src = "assets/images/budlight.JPG";

                var src = document.getElementById("Box6");
                src.appendChild(img);

            }



        }
    }




    document.addEventListener('keydown', keyPress);
});