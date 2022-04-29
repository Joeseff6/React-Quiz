import React from "react";
import Homepage from "./Homepage";
import Quiz from "./Quiz";

class MainView extends React.Component {
  render() {
    return(
      <>
      <Homepage />
      <Quiz />
      </>
    )
  }
}

export default MainView;
