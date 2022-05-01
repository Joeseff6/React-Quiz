import React from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import selectQuestion from "../helper/selectQuestion";
import "./Quiz.css";

class Quiz extends React.Component {
  state = { questions: [], selectedQuestion: {} };

  async componentDidMount() {
    let response = await axios.get("http://localhost:5000/questions");
    let questions = response.data;
    let selectedQuestion = selectQuestion(questions);
    this.setState({ questions: questions, selectedQuestion: selectedQuestion });
    this.runTimer();
  }

  componentDidUpdate() {
    if (document.querySelector(".correct")) {
      document.querySelector(".correct").classList.remove("correct");
    }
  }

  runTimer = () => {
    let time = 60;
    document.getElementById("timer").innerText = `Time: ${time} secs`;
    let timerId = setInterval(() => {
      if (time < 1) clearInterval(timerId);
      document.getElementById("timer").innerText = `Time: ${time} ${
        time > 1 ? "secs" : "sec"
      }`;
      time--;
    }, 1000);
  };

  onChoiceClick = (e) => {
    let selectedChoice = e.target.innerText;
    let choiceElements = document.querySelectorAll(`.choice`);
    let correctIndex = null;
    choiceElements.forEach((element,index) => {
      if (element.innerText === this.state.selectedQuestion.answer) correctIndex = index;
    })
    document.querySelector(`.choice[data-index="${correctIndex}"]`).classList.add("correct");
    let correct = selectedChoice === this.state.selectedQuestion.answer;
    setTimeout(() => {
      this.props.updateScore(correct);
      this.displayNextQuestion()
    }, 1000)
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
          data-index={index}
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
              <h2 className="">Total score: {this.props.score}</h2>
            </div>
            <div className="col d-flex justify-content-center">
              <h2 id="timer"></h2>
            </div>
          </div>
          <div
            id="question"
            className="mb-3 py-5 d-flex justify-content-center align-items-center"
            data-index={this.state.selectedQuestion.index}
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
    console.log("render")
    return this.renderJSX();
  }
}

export default Quiz;
