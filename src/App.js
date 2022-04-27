import React from "react";
import HighscoreView from "./components/HighscoreView";
import Homepage from "./components/Homepage";
import MainView from "./components/MainView";
import Quiz from "./components/Quiz";
import Collapse from "react-bootstrap/Collapse";
import "./App.css";

class App extends React.Component {
  state = { open: false }

  componentDidMount() {
    setTimeout(() => {
      this.setState({open: true})
    }, 750)
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
        <Collapse in={this.state.open}>
          <div>
            <button className="btn option-button d-block m-auto mb-5">
              Start Quiz
            </button>
            <a className="btn option-button d-block m-auto">Highscore Page</a>
          </div>
        </Collapse>
        {/* <HighscoreView />
        <Homepage />
        <MainView />
        <Quiz /> */}
      </div>
    );
  }
}

export default App;
