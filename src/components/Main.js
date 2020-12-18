import React, { useEffect } from "react";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loadQuizList } from "../redux/actions/load_quiz_list";
import { sendAnswers } from "../redux/actions/send_answers";
import { loadQuizzes } from "../redux/actions/show_quizzes";
import Header from "./Header";
import List from "./List";
import Loader from "./Loader";
import Question from "./Question";

export default function Main() {
  //ТУТ подключен редакс стор
  const dispatch = useDispatch();
  const state = useSelector((state) => state.quizzes);
  const result = useSelector((state) => state.results);
  //QUIZ LIST STORE -->
  const quiz_list = useSelector((state) => state.quiz_list);
  console.log("🚀 ~ file: Main.js ~ line 26 ~ Main ~ quiz_list", quiz_list);

  //ТУТ ГРУЗЯТСЯ ТЕСТЫ
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setSelectedAnswers([...selectedAnswers, answer]);
  };

  const handleSelect = (id) => {
    setSelectedQuestion(id);
  };
  //ЗАГРУЗКА ТЕСТОВ
  useEffect(() => {
    //dispatch(loadQuizzes(7777));
    dispatch(loadQuizList());
  }, [dispatch]);

  const found = state.questions.find((i) => i.isDone === false);
  console.log(result);
  if (state.questions.length) {
    return (
      <>
        <Header />
        {selectedAnswers && <p>{selectedAnswers.toString()}</p>}
        {
          //ВЫВОД ПОЛЬЗОВАТЕЛЯ И РЕЗУЛЬТАТА
        }
        {result.status === 200 && (
          <p>{result.data.name + " : " + result.data.rating}</p>
        )}
        <Row>
          <Col sm={4}>
            <List
              selectedAnswers={selectedAnswers}
              state={state}
              handleSelect={handleSelect}
              selectedQuestion={selectedQuestion}
            />
          </Col>
          <Col sm={8}>
            <Question
              isDone={state.questions[selectedQuestion].isDone}
              setSelectedAnswers={handleAnswer}
              imageUrl={state.questions[selectedQuestion].question.image}
              id={state.questions[selectedQuestion].question.id}
              text={state.questions[selectedQuestion].question.text}
              wording={state.questions[selectedQuestion].question.wording}
              answers={state.questions[selectedQuestion].choices}
              multiple={
                state.questions[selectedQuestion].question.is_multiple_choice
              }
            />
          </Col>
        </Row>
        {!found && (
          <button
            onClick={() => {
              console.log("Click");
              dispatch(sendAnswers(state.questions));
            }}
          >
            Отправить
          </button>
        )}
      </>
    );
  } else {
    return <Loader />;
  }
}
