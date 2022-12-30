let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

/* initialise values */
homeScore.textContent = 0;
guestScore.textContent = 0;

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
}

function homeScorePoint() {
  homePoints += 1;
  homeScore.textContent = homeGoals + " . " + homePoints;
  homeTotal += 1;
}

function guestScoreGoal() {
  guestGoals += 1;
  guestScore.textContent = guestGoals + " . " + guestPoints;
  guestTotal += 3;
}

function guestScorePoint() {
  guestPoints += 1;
  guestScore.textContent = guestGoals + " . " + guestPoints;
  guestTotal += 3;
}
