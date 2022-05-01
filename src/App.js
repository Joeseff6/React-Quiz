import React from "react";
import HighscoreView from "./components/HighscoreView";
import MainView from "./components/MainView";
import "./App.css";

class App extends React.Component {
  state = { score: 0 }

  updateScore = (correct) => {
    if (correct) {
      let newScore = this.state.score + 1;
      this.setState({ score: newScore });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="mt-3 mb-5">
          <h1 className="text-center" style={{ fontSize: "3em" }}>
            Full Stack Quiz with React
          </h1>
        </header>
        <MainView score={this.state.score} updateScore={this.updateScore}/>
        {/* <HighscoreView /> */}
      </div>
    );
  }
}

export default App;
