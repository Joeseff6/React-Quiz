import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import selectQuestion from "../helper/selectQuestion";
import Choices from "../components/Choices";
import { useLocation } from "react-router-dom";
import "./Quiz.css";

const Quiz = ({ score, updateScore }) => {
  const [questions, setQuestions] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState({});

  useEffect(async () => {
    let response = await axios.get("http://localhost:5000/questions");
    let fetchedQuestions = response.data;
    let pickedQuestion = selectQuestion(fetchedQuestions);
    setQuestions(fetchedQuestions);
    setSelectedQuestion(pickedQuestion);
    runTimer();
  }, []);

  useEffect(async () => {
    if (document.querySelector(".correct")) {
      document.querySelector(".correct").classList.remove("correct");
    }
  }, [questions]);

  const runTimer = () => {
    let time = 5;
    document.getElementById("timer").innerText = time > 1 ? `Time: ${time} secs` : `Time: ${time} sec`;
    let timerId = setInterval(() => {
      let timerText = time > 1 ? `Time: ${time} secs` : `Time: ${time} sec`;
      if (time === 0) {
        clearInterval(timerId);
      }
      document.getElementById("timer").innerText = timerText;
      time--;
    }, 1000);
  };

  const displayNextQuestion = () => {
    let questionsCopy = questions.slice(0);
    questionsCopy.splice(selectedQuestion.index, 1);
    let pickedQuestion = selectQuestion(questionsCopy);
    setQuestions(questionsCopy);
    setSelectedQuestion(pickedQuestion);
  };

  const renderJSX = () => {
    if (!questions.length) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="danger" />
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <div className="row justify-content-center">
            <div className="col-6">
              <div className="row mt-5 mb-3">
                <div className="col-6">
                  <h2 className="text-center">Score: {score}</h2>
                </div>
                <div className="col-6">
                  <h2 className="text-center" id="timer">
                    Time:
                  </h2>
                </div>
              </div>
              <div
                id="question"
                className="mb-3 py-5 d-flex justify-content-center align-items-center"
                data-index={selectedQuestion.index}
              >
                <h3 className="text-center">{selectedQuestion.question}</h3>
              </div>
              {Object.keys(selectedQuestion).length ? (
                <Choices selectedQuestion={selectedQuestion} displayNextQuestion={displayNextQuestion} updateScore={updateScore}/>
              ) : (
                ""
              )}
            </div>
          </div>
        </React.Fragment>
      );
    }
  };

  return renderJSX();
};

export default Quiz;
