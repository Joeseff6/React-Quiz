import React from "react";
import axios from "axios";

class Quiz extends React.Component {
  async componentDidMount() {
    let response = await axios.get("http://localhost:5000/questions");
    let questions = response.data;
    console.log(questions);

  }

  render() {
    return <h1>This is the quiz component</h1>;
  }
}

export default Quiz;
