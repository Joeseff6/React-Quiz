import React from "react";
import HighscoreView from "./components/HighscoreView";
import Homepage from "./components/Homepage";
import MainView from "./components/MainView";
import Quiz from "./components/Quiz";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>This is the app component</h1>
        <HighscoreView />
        <Homepage />
        <MainView />
        <Quiz />
      </div>
    )
  }
}

export default App;
