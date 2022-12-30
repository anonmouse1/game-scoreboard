let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");
let homeTotalScore = document.getElementById("home-total");
let guestTotalScore = document.getElementById("guest-total");

/* initialise values */
homeScore.textContent = 0;
guestScore.textContent = 0;
homeTotalScore.textContent = "( " + 0 + " )";
guestTotalScore.textContent = "( " + 0 + " )";

let gameNumber = 1;

let homeGoals = 0;
let homePoints = 0;
let homeTotal = 0;

let guestGoals = 0;
let guestPoints = 0;
let guestTotal = 0;

function homeScoreGoal() {
  homeGoals += 1;
  homeScore.textContent = homeGoals + " . " + homePoints;
  homeTotal += 3;
  homeTotalScore.textContent = "( " + homeTotal + " )";
}

function homeScorePoint() {
  homePoints += 1;
  homeScore.textContent = homeGoals + " . " + homePoints;
  homeTotal += 1;
  homeTotalScore.textContent = "( " + homeTotal + " )";
}

function guestScoreGoal() {
  guestGoals += 1;
  guestScore.textContent = guestGoals + " . " + guestPoints;
  guestTotal += 3;
  guestTotalScore.textContent = "( " + guestTotal + " )";
}

function guestScorePoint() {
  guestPoints += 1;
  guestScore.textContent = guestGoals + " . " + guestPoints;
  guestTotal += 1;
  guestTotalScore.textContent = "( " + guestTotal + " )";
}

function nextGame() {
  homeGoals = 0;
  homePoints = 0;
  homeTotal = 0;
  homeScore.textContent = homeGoals + " . " + homePoints;
  homeTotalScore.textContent = "( " + homeTotal + " )";

  guestGoals = 0;
  guestPoints = 0;
  guestTotal = 0;

  guestScore.textContent = guestGoals + " . " + guestPoints;
  guestTotalScore.textContent = "( " + 0 + " )";
}
