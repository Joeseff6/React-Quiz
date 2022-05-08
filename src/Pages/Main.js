import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
class Main extends React.Component {
  state = { dropIn: false, countdown: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dropIn: true });
    }, 750);
  }

  onStartClick = () => {
    console.log("hello");
    console.log(this.state.dropIn);
    this.setState({ dropIn: false });
  };

  render() {
    return (
      <React.Fragment>
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
            <Link className="btn option-button d-block m-auto" to="/highscores">
              Highscore Page
            </Link>
          </div>
        </Collapse>
      </React.Fragment>
    );
  }
}

export default Main;
