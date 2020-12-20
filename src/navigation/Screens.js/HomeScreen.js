import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader";
import { loadQuizList } from "../../redux/actions/load_quiz_list";
//import { loadQuizzes } from "../../redux/actions/show_quizzes";

export default function HomeScreen() {
  //ТУТ подключен редакс стор
  const dispatch = useDispatch();
  //QUIZ LIST STORE -->
  const quiz_list = useSelector((state) => state.quiz_list);

  //ЗАГРУЗКА ТЕСТОВ
  useEffect(() => {
    dispatch(loadQuizList());
  }, [dispatch]);

  // onClick={() => {
  //   dispatch(loadQuizzes(qz.id));
  // }}

  if (quiz_list.status === 200) {
    return (
      <>
        <ListGroup>
          {quiz_list.data.quizzes.map((qz) => {
            return (
              <ListGroup.Item>
                <Link style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/quiz/${qz.id}`}>{qz.quiz_name}</Link>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </>
    );
  } else {
    return <Loader />;
  }
}
