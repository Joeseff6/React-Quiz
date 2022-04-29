import React from "react";
import Collapse from "react-bootstrap/Collapse";


class Homepage extends React.Component {
  state = {open: false}

  componentDidMount() {
    setTimeout(() => {
      this.setState({open: true})
    }, 750)
  }

  onStartClick = () => {
    setTimeout(() => {
      this.setState({open: false})
    }, 750)
  }

  render() {
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
        <Collapse in={this.state.open}>
          <div>
            <button className="btn option-button d-block m-auto mb-5" onClick={this.onStartClick}>
              Start Quiz
            </button>
            <a className="btn option-button d-block m-auto">Highscore Page</a>
          </div>
        </Collapse>
      </>
    );
  }
}

export default Homepage;
