import React, { useState, useEffect } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Link, useNavigate } from "react-router-dom";

const Main = () => {
  const [dropIn, setDropIn ] = useState(false);
  const [countdown, setCountdown ] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setDropIn(true);
    }, 750);
  }, [])

  const onStartClick = () => {
    setDropIn(false);
    setTimeout(() => {
      setCountdown(true);
      runCountdownMessage()
    }, 500)
  };

  const runCountdownMessage = () => {
    let countdownArray = ["Ready", "Set", "Go!"];
    let i = 0;
    let intervalId = setInterval(() =>{
      if (i < countdownArray.length) {
        document.getElementById("countdownMessage").innerText = countdownArray[i]
        i++;
      } else {
        clearInterval(intervalId);
        navigate("/quiz");
      }
    }, 500)
  }

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
      {countdown ? <h2 id="countdownMessage" className="text-center"></h2> : ""}
      <Collapse in={dropIn}>
        <div>
          <button
            className="btn option-button d-block m-auto mb-5"
            onClick={onStartClick}
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

export default Main;
