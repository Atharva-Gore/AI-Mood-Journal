const journalInput = document.getElementById("journalInput");
const analyzeBtn = document.getElementById("analyzeBtn");
const resultDiv = document.getElementById("result");
const moodSpan = document.getElementById("mood");
const adviceP = document.getElementById("advice");
const currentDate = document.getElementById("currentDate");

// Display current date
const today = new Date();
currentDate.textContent = today.toDateString();

// Basic mood detection using keywords (offline simulation)
const moods = {
  happy: ["happy", "great", "joy", "excited", "fun"],
  sad: ["sad", "depressed", "unhappy", "cry", "down"],
  angry: ["angry", "mad", "furious", "annoyed"],
  anxious: ["anxious", "nervous", "worried", "scared", "fear"]
};

const adviceMap = {
  happy: "Keep enjoying the good vibes! 😊",
  sad: "It's okay to feel down sometimes. Talk to a friend. 💙",
  angry: "Try some deep breathing or a walk. 🧘‍♂️",
  anxious: "You got this. Stay calm and take it step by step. 🌿",
  neutral: "Keep writing and reflecting. It helps! 📝"
};

analyzeBtn.addEventListener("click", () => {
  const text = journalInput.value.toLowerCase();
  let detectedMood = "neutral";

  for (const [mood, keywords] of Object.entries(moods)) {
    if (keywords.some(word => text.includes(word))) {
      detectedMood = mood;
      break;
    }
  }

  moodSpan.textContent = detectedMood.charAt(0).toUpperCase() + detectedMood.slice(1);
  adviceP.textContent = adviceMap[detectedMood];
  resultDiv.classList.remove("hidden");
});
