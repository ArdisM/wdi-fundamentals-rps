
////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////
function getInput(value1, value2, choice1, choice2) {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();

}
function randomPlay(choice1, choice2) {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getInput(value1, value2, choice1, choice2) {
    if (value1 === choice1 && value2 === choice2) {
        return (true);
    } else if (value1 === choice2 && value2 === choice1) {
        return (true);
    }
    return (false);

}



function randomPlay(choice1, choice2) {
    if (areThey("paper", "rock", choice1, choice2)) {
        return ("paper wins");
    } else if (areThey("paper", "scissors", choice1, choice2)) {
        return ("scissors wins");
    } else if (areThey("scissors", "rock", choice1, choice2)) {
        return ("rock wins");
    }
    return ("it's a tie!");
}