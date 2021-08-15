// Init global variables
const computerChoices = ["r", "p", "s"];

let wins = 0;
let losses = 0;
let ties = 0;

// Detect keystroke with game logic
document.onkeyup = event => {
	let userGuess = event.key;
	let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {
        if ((userGuess === "r") && (computerGuess === "s")) {
            wins++;
        } else if ((userGuess === "r") && (computerGuess === "p")) {
            losses++;
        } else if ((userGuess === "p") && (computerGuess === "r")) {
			wins++;
		}  else if ((userGuess === "p") && (computerGuess === "s")) {
			losses++;
		} else if ((userGuess === "s") && (computerGuess === "p")) {
			wins++;
		} else if ((userGuess === "s") && (computerGuess === "r")) {
			losses++;
		} else if (userGuess === computerGuess) {
			ties++;
		}
        updateCounts();
    }
}

// Update DOM
let winsDom = document.getElementById("wins-counter");
let lossesDom = document.getElementById("losses-counter");

function updateCounts() {
    winsDom.textContent = wins;
    lossesDom.textContent = losses;
}


// PSUDEOCODE for how to make this RPS Lan party function

/*

On valid key press store the press into a var
If btn instead store that
Replace with last selected choice (maybe a one item array storing r/p/s)

Update Main Logic to compare correct Letters from both players
Change event listener to a function
Call that function on the fight button press
Update Dom on fight press after Logic

Store count values into local storage

Add a btn/switch/check box to change from Lan to cpu generated choice

*/