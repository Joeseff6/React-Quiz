import React from "react";
import axios from "axios";
import "./Quiz.css";

class Quiz extends React.Component {
  state = { questions: [], selectedQuestion: {} };

  async componentDidMount() {
    let response = await axios.get("http://localhost:5000/questions");
    let questions = response.data,
      numberOfQuestions = questions.length;
    console.log(questions);
    let randomNumber = Math.floor(Math.random() * numberOfQuestions);
    let selectedQuestion = questions[randomNumber];
    console.log(selectedQuestion);
    this.setState({ questions: questions, selectedQuestion: selectedQuestion });
  }

  renderJSX() {
    if (!this.state.questions.length) {
      return "Loading";
    } else {
      return (
        <>
          <div id="question" className="mb-3 py-5 d-flex justify-content-center align-items-center">
            <h3 className="text-center">
              {this.state.selectedQuestion.question}
            </h3>
          </div>

          {this.state.selectedQuestion.choices.map((choice) => {
            return (
              <div className="choice my-3 px-3 py-3 d-flex align-items-center" key={choice}>
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
