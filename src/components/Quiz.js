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
    if (!this.state.questions.length) return "Loading";
    return (
      <>
        <div id="question">
          <h3 className="text-center">{this.state.selectedQuestion.question}</h3>
        </div>

        {this.state.selectedQuestion.choices.map((choice) => {
          return (
            <div className="choice" key={choice}>
              <h4>{choice}</h4>
            </div>
          );
        })}
      </>
    );
  }

  render() {
    return this.renderJSX();
  }
}

export default Quiz;
