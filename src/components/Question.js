import React, { memo } from "react";
import PropTypes from "prop-types"; // ES6
import { useDispatch } from "react-redux";
import { setDone, setSelected } from "../redux/actions/show_quizzes";
//import ModalComponent from "./Modal";
import "./styles/style.css";

const Question = ({
  isDone,
  id,
  text,
  wording,
  answers,
  imageUrl,
  multiple,
  overlay,
}) => {
  const dispatch = useDispatch();
  console.log('ДЕБАГ РАКЕТА ЗАЛЕТАЄ :rocket:', imageUrl)

  const handleSelectItem = (e) => {
    console.log(e.target.checked)
    dispatch(setSelected({ answ: e.target.value, id }));
  };
  console.log(isDone)
  return (
    <>
      <div className="content">
        <div className="quiz_body">
          <div className="title_container">
            <p>{`Вопрос `}</p>
          </div>
          <div className="quizname">
            <p>{wording}</p>
          </div>
          <div className="image_container">
            {imageUrl && <img width={550} src={"http://134.249.181.40:7777"+imageUrl.picture} />}
          </div>
          <div className="description_container">
            <p>{text}</p>
          </div>
          <div className="checkbox_container">
            {answers.map((item) => {
              return (
                <div className="checkbox">
                  <input
                    disabled={isDone}
                    onChange={handleSelectItem}
                    checked={item.isSelected}
                    value={item.id}
                    id={item.id}
                    type="checkbox"
                  />
                  <label htmlFor={item.id}>                
                    <p>{item.text}</p>
                  </label>
                </div>
              );
            })}
          </div>
          <div className="buttons_container">
            <input
              type="button"
              className="button_vote button"
              value="Ответить"
              disabled={isDone}
              onClick={() => {
                console.log('Xyi')
                dispatch(setDone(id));
              }}
            />
          </div>
        </div>
      </div>
      <div className="list-btn_container">
        <a
          className="list-btn"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementsByClassName("leftbar")[0]
              .classList.toggle("leftbar_active");
            document
              .getElementsByClassName("header__burger")[0]
              .classList.remove("active");
            document
              .getElementsByClassName("header__menu")[0]
              .classList.remove("active");
            document
              .getElementsByClassName("overlay")[0]
              .classList.remove("overlay_active");
          }}
        >
          <p>Список</p>
          <div className="arrow">
            <div className="arrow_icon"></div>
          </div>
        </a>
      </div>
    </>
  );
};
Question.propTypes = {
  id: PropTypes.string,
  wording: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  answers: PropTypes.array,
};
export default memo(Question);

{
  /* <Container>
      <Alert variant="light">
        <Row>
          <Col>
            <Alert.Heading>{wording}</Alert.Heading>
            {multiple && (
              <Alert variant="info">Можете выбрать несколько ваиантов!</Alert>
            )}
          </Col>
          {imageUrl && (
            <Col>
              <Image
                className="Img"
                width={350}
                //height={300}
                src={"http://134.249.181.40:7777" + imageUrl.picture}
                rounded
              />
            </Col>
          )}
        </Row>
        <hr />
        <p className="qtext">{text}</p>
      </Alert>
      <List>
        {answers.map((item) => {
          return (
            <ListItem key={item.id}>
              <p>
                <label>
                  <input
                    disabled={isDone}
                    onChange={handleSelectItem}
                    checked={item.isSelected}
                    value={item.id}
                    id={item.id}
                    type="checkbox"
                  />
                  <span>{item.text}</span>
                </label>
              </p>
            </ListItem>
          );
        })}
      </List>
      <Button
        disabled={isDone}
        variant="primary"
        size="lg"
        block
        onClick={() => {
          dispatch(setDone(id));
        }}
      >
        Ответить
      </Button>
    </Container> */
}
