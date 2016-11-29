/* TODO: 
-user input DONE kind of.
-score increments
-add output other than console
-move script to external file
*/

// string variables to hold possible choices
// we'll use these later on
var choice1 = "rock";
var choice2 = "paper";
var choice3 = "scissors";
var choice4 = "lizard";
var choice5 = "spock";

// string array to hold possible choices
var choices = [ "rock", "paper", "scissors", "lizard", "spock" ];

// number variables to hold the scores
var humanScore = 0;
var computerScore = 0;

// string variables to hold the choices
var humanChoice = "";
var computerChoice = "";

// variable to hold our output
var output = "";

// returns a random computer choice
function getComputerChoice(hc) {
/*    if (hc === "rock") {
    return "paper";
  }
  else if (hc === "paper") {
    return "scissors";
  }
  else {
    return "rock";
  }*/
  return choices[Math.floor(Math.random() * choices.length)];
}

function doTurn(humanChoice) {

 computerChoice = getComputerChoice(humanChoice); // try changing these values to test!

 if (humanChoice === computerChoice) { // Draw
    console.log("Draw!");
    output = "Draw!";
    output = "You both picked " + humanChoice + ".  Draw!";
 }
 else if ((humanChoice === "rock" && computerChoice === "scissors") ||
          (humanChoice === "rock" && computerChoice === "lizard") ||
          (humanChoice === "scissors" && computerChoice === "paper") ||
          (humanChoice === "scissors" && computerChoice === "lizard") ||
          (humanChoice === "paper" && computerChoice === "rock") ||
          (humanChoice === "paper" && computerChoice === "spock") ||
          (humanChoice === "spock" && computerChoice === "scissors") ||
          (humanChoice === "spock" && computerChoice === "rock") ||
          (humanChoice === "lizard" && computerChoice === "spock") ||
          (humanChoice === "lizard" && computerChoice === "paper")) { 
         // Human won
    console.log("You win!"); 
    output = "You win!";
    output = "Your " + humanChoice + " beats computer's " + computerChoice;
    humanScore++; // same as: humanScore = humanScore + 1;
                  // same as: humanScore += 1;
 }
 else { // Human lost--no need to check by process of elimination
    console.log("You lose!");
    output = "You lose!";
    computerScore++;
     output = "Your " + humanChoice + " lost to computer's " + computerChoice;
 }

 // Use the += operator to add more HTML to the "output" string
 output += "<br>Human score: " + humanScore
         + "<br>Computer score: " + computerScore;

 if (humanScore >= 10) {
   humanScore = 0;
   computerScore = 0;
   output += "<br>You win!";
 }
 else if (computerScore >= 10) {
   humanScore = 0;
   computerScore = 0;
   output += "<br>You lose!";
 } 

 // output += "<br> You " + humanScore;
 // output += "<br> Computer " + computerScore;

 // Write the output string to the div element "output"
 document.getElementById("output").innerHTML = output;
}

document.body.style.backgroundImage = "url('https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-3no8SRabEq-oR1F34lu-8PlHwAutWiBN56ehaaQe30eCrBe2')";