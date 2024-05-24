let correctNumber = 42; // Change this to the desired correct number
let guess;

do {
  guess = parseInt(prompt("Guess the number (between 1 and 100):"));
  if (guess === correctNumber) {
    console.log("Congratulations! You guessed the correct number!");
    break;
  } else {
    console.log("Try again!");
  }
} while (true);