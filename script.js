const questions = document.querySelectorAll(".question");
const nextButton = document.getElementById("next");
const resultContainer = document.querySelector(".result-container");
const leaderboardList = document.getElementById("leaderboard-list");

let currentQuestion = 0;
let score = 0;
let participants = [];

function showResult() {
  const percentage = (score / questions.length) * 100;
  resultContainer.innerHTML = `You scored ${score} out of ${questions.length} (${percentage}%)`;
  resultContainer.style.display = "block";
  nextButton.style.display = "none";

  // Update leaderboard with the participant's score
  participants.push({ score, percentage });
  updateLeaderboard();
}

function updateLeaderboard() {
  participants.sort((a, b) => b.score - a.score);
  leaderboardList.innerHTML = "";
  participants.forEach((participant, index) => {
    const li = document.createElement("li");
    li.textContent = `Participant ${index + 1}: ${participant.score} out of ${
      questions.length
    } (${participant.percentage}%)`;
    leaderboardList.appendChild(li);
  });
}

nextButton.addEventListener("click", () => {
  const selectedAnswer = document.querySelector(
    `input[name="q${currentQuestion + 1}"]:checked`
  );

  if (!selectedAnswer) {
    // No answer selected, do nothing.
    return;
  }

  if (selectedAnswer.value === "correct") {
    score++;
  }

  if (currentQuestion < questions.length - 1) {
    questions[currentQuestion].style.display = "none";
    currentQuestion++;
    questions[currentQuestion].style.display = "block";
  } else {
    showResult();
  }
});

// Show the first question initially
questions[currentQuestion].style.display = "block";
nextButton.style.display = "block";
// ... (existing JavaScript code) ...

nextButton.addEventListener("click", () => {
    const selectedAnswer = document.querySelector(
        `input[name="q${currentQuestion + 1}"]:checked`
    );

    if (!selectedAnswer) {
        // No answer selected, do nothing.
        return;
    }

    if (selectedAnswer.getAttribute("data-correct") === "true") {
        score++; // Increase the score if the selected answer is correct.
    }

    if (currentQuestion < questions.length - 1) {
        questions[currentQuestion].style.display = "none";
        currentQuestion++;
        questions[currentQuestion].style.display = "block";
    } else {
        showResult();
    }
});

// ... (existing JavaScript code) ...

// Simulated participant data
const simulatedParticipants = [
    { score: 8, percentage: 80 },
    { score: 5, percentage: 50 },
    { score: 10, percentage: 100 },
    { score: 7, percentage: 70 },
    { score: 6, percentage: 60 },
    { score: 9, percentage: 90 },
    { score: 4, percentage: 40 },
];

// Function to update the leaderboard with simulated data
function updateSimulatedLeaderboard() {
    simulatedParticipants.sort((a, b) => b.score - a.score);
    leaderboardList.innerHTML = "";
    simulatedParticipants.forEach((participant, index) => {
        const li = document.createElement("li");
        li.textContent = `Participant ${index + 1}: ${participant.score} out of ${
            questions.length
        } (${participant.percentage}%)`;
        leaderboardList.appendChild(li);
    });
}

// Call the function to update the leaderboard with simulated data
updateSimulatedLeaderboard();

