import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import completedLogo from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer.jsx";

export default function Quiz() {
  const [activeUserAnswer, setActiveUserAnswer] = useState([]);

  const activeQuestionIndex = activeUserAnswer.length;

  const quizCompleted = activeQuestionIndex === QUESTIONS.length;

  const handleSelectedAnswer = useCallback(function handleSelectedAnswer(
    answer
  ) {
    setActiveUserAnswer((prevAnswer) => {
      return [...prevAnswer, answer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectedAnswer(null),
    [handleSelectedAnswer]
  );
  if (quizCompleted) {
    return (
      <div id="summary">
        <img src={completedLogo} alt="" />
        <h2>Quiz is Completed</h2>
      </div>
    );
  }

  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectedAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
