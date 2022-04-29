import React from "react";
import axios from "axios";

class Quiz extends React.Component {
  state = { questions: [], selectedQuestion: {} };

  async componentDidMount() {
    let response = await axios.get("http://localhost:5000/questions");
    let questions = response.data, numberOfQuestions = questions.length;
    console.log(questions);
    let randomNumber = Math.floor(Math.random() * numberOfQuestions);
    let selectedQuestion = questions[randomNumber];
    console.log(selectedQuestion);
    this.setState({ questions: questions, selectedQuestion: selectedQuestion})
  }

  renderJSX() {
    if (!this.state.questions.length) return "Loading";
    return (
      <>
        <h2>{this.state.selectedQuestion.question}</h2>
        {this.state.selectedQuestion.choices.map(choice => {
          return (
            <h4 key={choice}>
              {choice}
            </h4>
          )
        })}
      </>
    )
  }

  render() {
    return this.renderJSX();
  }
}

export default Quiz;
