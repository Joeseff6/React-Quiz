import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Quiz from "./Pages/Quiz";
import Highscore from "./Pages/Highscore";
import Error from "./Pages/Error";
import "./App.css";

class App extends React.Component {
  state = { score: 0 };

  updateScore = (correct) => {
    if (correct) {
      let newScore = this.state.score + 1;
      this.setState({ score: newScore });
    }
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          <header className="mt-3 mb-5">
            <h1 className="text-center" style={{ fontSize: "3em" }}>
              Full Stack Quiz with React
            </h1>
          </header>
        </div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/quiz"
            element={
              <Quiz score={this.state.score} updateScore={this.updateScore} />
            }
          />
          <Route path="/highscores" element={<Highscore />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
