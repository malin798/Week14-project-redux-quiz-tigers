import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "../reducers/quiz";

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  );

  const answer = useSelector((state) =>
    state.quiz.answers.find((a) => a.questionId === question.id)
  );

  const dispatch = useDispatch();

  const handleAnswer = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    console.log(question);
  };

  const handleClick = (event) => {
    dispatch(quiz.actions.goToNextQuestion({}));
  };
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>

      {question.options.map((option, index) => {
        return (
          <button
            onClick={() => handleAnswer(question.id, index)}
          >
            {option}
          </button>
        );
      })}
      <button onClick={handleClick}>Next</button>
    </div>
  );
};
