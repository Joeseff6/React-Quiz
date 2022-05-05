import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

class App extends React.Component {
  state = { dropIn: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dropIn: true });
    }, 750);
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="mt-3 mb-5">
          <h1 className="text-center" style={{ fontSize: "3em" }}>
            Full Stack Quiz with React
          </h1>
        </header>
        <div className="row justify-content-center mb-5">
            <div className="col-8">
              <h2 className="text-center">
                Test your full stack and React.js knowledge in a race against
                others to achieve the highest score in the shortest time!
              </h2>
            </div>
          </div>
          <Collapse in={this.state.dropIn}>
            <React.Fragment>
              <Link className="btn option-button d-block m-auto mb-5" to="/quiz">Start Quiz</Link>
              <Link className="btn option-button d-block m-auto" to="/highscores">Highscore Page</Link>
            </React.Fragment>
          </Collapse>
          <Outlet />
      </div>
    );
  }
}

export default App;
