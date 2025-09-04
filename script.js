var secretNumber;
var gameActive = true;
var guessCount = 0;

function generateNumber() {
  secretNumber = Math.floor(Math.random() * 9) + 1;
  console.log("Secret Number:", secretNumber); // Debug
  guessCount = 0; 
}

generateNumber();

function playGame() {
  if (!gameActive) return;

  var guessInput = document.getElementById("guessInput");
  var message = document.getElementById("message");
  var guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 9) {
    message.innerHTML = "⚠️ Please enter a number between 1 and 9!";
    return;
  }

  guessCount++;

  if (guess === secretNumber) {
    message.innerHTML = "🎉 Correct! The number was " + secretNumber + 
                        "<br>✅ Total guesses: " + guessCount;
    gameActive = false;

    
    document.getElementById("playBtn").disabled = true;
    document.getElementById("restartBtn").style.display = "inline-block";
    document.getElementById("quitBtn").style.display = "inline-block";
  } else if (guess > secretNumber) {
    message.innerHTML = "📈 Too High! Try again. <br>🔢 Guesses: " + guessCount;
  } else {
    message.innerHTML = "📉 Too Low! Try again. <br>🔢 Guesses: " + guessCount;
  }

  
  document.getElementById("playBtn").style.display = "inline-block";
}

function quitGame() {
  document.getElementById("message").innerHTML =
    "👋 Thanks for playing! <br>✅ Total guesses: " + guessCount;
  gameActive = false;

  
  document.getElementById("quitBtn").style.display = "none";
  document.getElementById("restartBtn").style.display = "inline-block";
  document.getElementById("playBtn").style.display = "inline-block";
  document.getElementById("playBtn").disabled = false; // ensure Play re-enabled
}

function restartGame() {
  generateNumber();
  document.getElementById("message").innerHTML = "🔄 Game restarted! Start guessing...";
  document.getElementById("guessInput").value = "";
  gameActive = true;
  
  document.getElementById("restartBtn").style.display = "none";
  document.getElementById("playBtn").style.display = "inline-block";
  document.getElementById("quitBtn").style.display = "inline-block";

  
  document.getElementById("playBtn").disabled = false;
}
