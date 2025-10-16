import { useState } from "react";
import QUESTIONS from "../questions.js";

export default function Quiz() {
  const [activeUserAnswer, setActiveUserAnswer] = useState([]);

  const activeQuestionIndex = activeUserAnswer.length;

  function handleSelectedAnswer(answer) {
    setActiveUserAnswer((prevAnswer) => {
      return [...prevAnswer, answer];
    });
  }

  return (
    <div id="question">
      <h3>this is git testing</h3>
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>

      <ul id="answers">
        {QUESTIONS[activeQuestionIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectedAnswer(answer)}>
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
