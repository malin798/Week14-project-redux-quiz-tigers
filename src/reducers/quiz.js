import { createSlice } from '@reduxjs/toolkit';

const questions = [
  {
    id: 1,
    questionText: 'What organization did Hermione start in her 4th year?',
    options: [
      'Society for the Promotion of Elfish Welfare',
      "Dumbledore's army",
      'Wizards against the dark arts',
      'Witches for equal rights'
    ],
    correctAnswerIndex: 0
  },
  {
    id: 2,
    questionText: 'What patronus does Luna Lovegood have?',
    options: ['Lion', 'Stag', ' Hare ', 'Horse'],
    correctAnswerIndex: 2
  },
  {
    id: 3,
    questionText:
      'Ever the eccentric, Dumbledore has a scar above his left knee that is a perfect map of what? ',
    options: [
      'The Hogwarts Castle',
      'Hogsmeade',
      'Diagon Alley',
      'The London Underground'
    ],
    correctAnswerIndex: 3
  },
  {
    id: 4,
    questionText: 'Who where Harrys parents?',
    options: [
      'William and Elizabeth Potter',
      'Henry and Maggie Potter',
      'James and Lily Potter'
    ],
    correctAnswerIndex: 2
  },
  {
    id: 5,
    questionText:
      'What animal can Professor McGonagall transform her Animagi into?',
    options: ['A phoenix', 'A cat', 'A black dog', 'An owl'],
    correctAnswerIndex: 1
  }
];

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
};

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
 
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload;
      const question = state.questions.find((q) => q.id === questionId);

      if (!question) {
        throw new Error(
          'Could not find question! Check to make sure you are passing the question id correctly.'
        );
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(
          `You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`
        );
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      });
    },

    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true;
      } else {
        state.currentQuestionIndex += 1;
      }
    },

    restart: () => {
      return initialState;
    }
  }
});
