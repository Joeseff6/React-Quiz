import React from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import "./Quiz.css";

class Quiz extends React.Component {
  state = { questions: [], selectedQuestion: {}, score: 0, timer: 60 };

  async componentDidMount() {
    let response = await axios.get("http://localhost:5000/questions");
    let questions = response.data;
    let numberOfQuestions = questions.length;
    let randomNumber = Math.floor(Math.random() * numberOfQuestions);
    let selectedQuestion = questions[randomNumber];
    this.setState({ questions: questions, selectedQuestion: selectedQuestion });
  }

  renderJSX() {
    if (!this.state.questions.length) {
      return (
        <div className="d-flex justify-content-center">
          <Spinner animation="grow" variant="danger" />;
        </div>
      );
    } else {
      return (
        <>
          <div className="row">
            <div className="col d-flex justify-content-center">
              <h2 className="">Total score: 0</h2>
            </div>
            <div className="col d-flex justify-content-center">
              <h2>
                Time: {this.state.timer} {this.state.timer > 1 ? "secs" : "sec"}
              </h2>
            </div>
          </div>
          <div
            id="question"
            className="mb-3 py-5 d-flex justify-content-center align-items-center"
          >
            <h3 className="text-center">
              {this.state.selectedQuestion.question}
            </h3>
          </div>

          {this.state.selectedQuestion.choices.map((choice) => {
            return (
              <div
                className="choice my-3 px-3 py-3 d-flex align-items-center"
                key={choice}
              >
                <span>{choice}</span>
              </div>
            );
          })}
        </>
      );
    }
  }

  render() {
    return this.renderJSX();
  }
}

export default Quiz;
