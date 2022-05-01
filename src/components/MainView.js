import React from "react";
import Quiz from "./Quiz";
import Collapse from "react-bootstrap/Collapse";

class MainView extends React.Component {
  state = { quizStart: false, 
    dropIn: false,
    countDown: false,
    countDownMessage: "",
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dropIn: true });
    }, 750);
  }

  onStartClick = () => {
    this.setState({ dropIn: false });
    setTimeout(() => {
      this.setState({ countDown: true });
      this.renderCountdownMessage();
    }, 250);
    setTimeout(() => {
      this.setState({ quizStart: true });
    }, 2250);
  };

  renderCountdownMessage = () => {
    let countDownMessageArray = ["Ready", "Set", "Go!"];
    let i = 0;
    let iteratorId = setInterval(() => {
      if (i === 2) clearInterval(iteratorId)
      this.setState({ countDownMessage: countDownMessageArray[i] });
      i++;
    }, 500)
  }

  renderJSX() {
    if (!this.state.quizStart) {
      return (
        <>
          <div className="row justify-content-center mb-5">
            <div className="col-8">
              <h2 className="text-center">
                Test your full stack and React.js knowledge in a race against
                others to achieve the highest score in the shortest time!
              </h2>
            </div>
          </div>
          {this.state.countDown ? <h2 className="text-center">{this.state.countDownMessage}</h2> : ""}
          <Collapse in={this.state.dropIn}>
            <div>
              <button
                className="btn option-button d-block m-auto mb-5"
                onClick={this.onStartClick}
              >
                Start Quiz
              </button>
              <a className="btn option-button d-block m-auto">Highscore Page</a>
            </div>
          </Collapse>
        </>
      );
    } else {
      return (
        <div className="row justify-content-center">
          <div className="col-6">
            <Quiz />
          </div>
        </div>
      );
    }
  }

  render() {
    return this.renderJSX();
  }
}

export default MainView;
