import React from "react";
import Quiz from "./Quiz";
import Collapse from "react-bootstrap/Collapse";


class MainView extends React.Component {
  state = { quizStart: false, dropIn: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({dropIn: true})
    }, 750)
  }

  onStartClick = () => {
    this.setState({dropIn: false})
    setTimeout(() => {
      this.setState({ quizStart: true });
    }, 1000);
  };



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
      return <Quiz />;
    }
  }

  render() {
    return this.renderJSX();
  }
}

export default MainView;
