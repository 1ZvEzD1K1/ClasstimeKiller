import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
import { Container, Image } from "react-bootstrap";
import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@material-ui/core";
import { Button } from "bootstrap";
import '../App.css'

export default function Question({ title, text, wording, answers, imageUrl }) {
 // const [input, setInput] = useState(null);
  ////
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  /////
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    //setError(false);
  };
  ////

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value === "best") {
      setHelperText("You got it!");
      setError(false);
    } else if (value === "worst") {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    } else {
      setHelperText("Please select an option.");
      setError(true);
    }
  };
  ////

  //   const handleRadioChange = (e) => {
  //     // console.log(e.target.value);
  //     setInput(e.target.value);
  //   };
  return (
    <Container>
      {imageUrl && (
          <Image className="Img"  width={300} height={300} src={imageUrl} roundedCircle />
      )}
      
      <form>
        <FormControl component="fieldset">
          <FormLabel component="legend">{wording}</FormLabel>
          <RadioGroup
            aria-label="quiz"
            name="quiz"
            value={value}
            onChange={handleRadioChange}
          >
            {answers.map((answer) => (
              <FormControlLabel
                value={answer.id.toString()}
                control={<Radio />}
                label={answer.text}
              />
            ))}
          </RadioGroup>
        </FormControl>
            </form>
    </Container>
  );
}

Question.propTypes = {
  title: PropTypes.string,
  wording: PropTypes.string,
  text: PropTypes.string,
  imageUrl: PropTypes.string,
  answers: PropTypes.array,
};
