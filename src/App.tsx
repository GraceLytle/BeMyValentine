import React, { useState } from "react";
import "./App.css";
import { confetti } from "@tsparticles/confetti";

const phrases = [
  "No",
  "Are you sure?",
  "Are you REALLY sure?",
  "Pleaseee",
  "But I love you!",
  "You're breaking my heart!",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 10 + 23;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  function generateConfetti(particleCount: number, scalar: number) {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["heart"],
      colors: ["#FFC0CB", "#FF69B4", "#FF1493", "#C71585"],
    };

    confetti({
      ...defaults,
      particleCount,
      scalar,
    });
  }

  function handleYesClick() {
    setYesPressed(true);
    generateConfetti(50, 2);
    generateConfetti(25, 3);
    generateConfetti(10, 4);
  }

  return (
    <div
      className={yesPressed ? "valentine-container-2" : "valentine-container"}
    >
      {yesPressed ? (
        <>
          <img
            alt="valentine"
            src="https://media.giphy.com/media/8jEMhZ9gPaxmrzoa5s/giphy.gif"
          />
        </>
      ) : (
        <>
          <div className="valentine-container">
            <img
              alt="valentine"
              src="https://media1.giphy.com/media/xT0GqFhyNd0Wmfo6sM/giphy.gif"
            />
            <div className="h1">Will you be my valentine?</div>
            <div className="button-container">
              <button
                className="heartbeat"
                style={{ fontSize: yesButtonSize }}
                onClick={handleYesClick}
              >
                Yes
              </button>
              <button onClick={handleNoClick} className="noButton">
                {getNoButtonText()}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
