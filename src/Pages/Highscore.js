import React from "react";
import "./Highscore.css";

class Highscore extends React.Component{
  state = { initials: "" }

  onInputChange = (e) => {
    let key = e.nativeEvent.data;
    if (/\W/.test(key) || /\d/.test(key)) return;
    let newInput = e.target.value.toUpperCase();
    this.setState({ initials: newInput});
  }

  render() {
    return (
      <>
        <div className="row justify-content-center">
          <h2 className="text-center">Enter your initials</h2>
          <h3 className="text-center">(2 to 3 characters! Alphabetical characters only)</h3>
        </div>
        <input className="m-auto d-block text-center" type="text" id="initials" name="initials" value={this.state.initials} onChange={(e) => this.onInputChange(e)} minLength={2} maxLength={3}/>
      </>
    );
  }
} 

export default Highscore;
