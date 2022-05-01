import React from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import selectQuestion from "../helper/selectQuestion";
import "./Quiz.css";

class Quiz extends React.Component {
  state = { questions: [], selectedQuestion: {}, score: 0 };

  async componentDidMount() {
    let response = await axios.get("http://localhost:5000/questions");
    let questions = response.data;
    let selectedQuestion = selectQuestion(questions);
    this.setState({ questions: questions, selectedQuestion: selectedQuestion });
    this.runTimer();
  }

  runTimer = () => {
    let time = 60;
    document.getElementById("timer").innerHTML = `Time: ${time} secs`;
    let timerId = setInterval(() => {
      if (time < 1) clearInterval(timerId);
      document.getElementById("timer").innerHTML = `Time: ${time} ${
        time > 1 ? "secs" : "sec"
      }`;
      time--;
    }, 1000);
  };

  onChoiceClick = (e) => {
    let selectedChoice = e.target.innerHTML;
    if (selectedChoice === this.state.selectedQuestion.answer) {
      let newScore = this.state.score + 1;
      this.setState({ score: newScore });
    } else {
      // TODO: Write logic for incorrect answers
    }
    this.displayNextQuestion()
  };

  displayNextQuestion = () => {
    let questionsCopy = this.state.questions.slice(0);
    questionsCopy.splice(this.state.selectedQuestion.index,1)
    let selectedQuestion = selectQuestion(questionsCopy);
    this.setState({ questions: questionsCopy, selectedQuestion: selectedQuestion })
  }

  randomizeChoices = (choices) => {
    let choicesCopy = choices.slice(0);
    let choicesArray = [];
    while (choicesCopy.length !== 0) {
      let choiceLength = choicesCopy.length;
      let randomIndex = Math.floor(Math.random() * choiceLength);
      choicesArray.push(choicesCopy[randomIndex]);
      choicesCopy.splice(randomIndex, 1);
    }
    return choicesArray.map((choice, index) => {
      return (
        <div
          className="choice my-3 px-3 py-3 d-flex align-items-center"
          key={index}
          onClick={(e) => this.onChoiceClick(e)}
        >
          {choice}
        </div>
      );
    })
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
              <h2 className="">Total score: {this.state.score}</h2>
            </div>
            <div className="col d-flex justify-content-center">
              <h2 id="timer"></h2>
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
          {this.randomizeChoices(this.state.selectedQuestion.choices)}
        </>
      );
    }
  }

  render() {
    return this.renderJSX();
  }
}

export default Quiz;
