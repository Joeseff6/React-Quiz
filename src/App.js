import React from "react";
import HighscoreView from "./components/HighscoreView";
import MainView from "./components/MainView";
import "./App.css";

class App extends React.Component {
  state = { }

  render() {
    return (
      <div className="container-fluid">
        <header className="mt-3 mb-5">
          <h1 className="text-center" style={{ fontSize: "3em" }}>
            Full Stack Quiz with React
          </h1>
        </header>
        <MainView />
        <HighscoreView />
      </div>
    );
  }
}

export default App;
