export const SHOW_QUIZZES = "QUIZ/SHOW_QUIZZES";
export const LOAD_QUIZZES = "QUIZ/LOAD_QUIZZES";
export const SET_DONE = "QUIZ/SET_DONE";

export const setDone = (payload) => {
  return {
    type: SET_DONE,
    payload,
  };
};

export const showQuizzes = (payload) => {
  return {
    type: SHOW_QUIZZES,
    payload,
  };
};

export const loadQuizzes = (payload) => {
  return {
    type: LOAD_QUIZZES,
    payload,
  };
};
