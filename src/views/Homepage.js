import React from "react";
import { Link } from "react-router-dom";
import Placeholder from "../components/Placeholder";
import Answer from "../components/Answer";
import answers from "../answers.json";

class Homepage extends React.Component {
  state = {
    questions: [],
    answer: "",
    shake: false
  };

  askQuestion = e => {
    e.preventDefault();
    console.log(e.target.querySelector("textarea").value);
    this.setState({
      questions: e.target.querySelector("textarea").value,
      answer: this.getRandomAnswer()
    });
  };

  getRandomAnswer = () => {
    let randomNumber = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers[randomNumber];
    return randomAnswer;
  };

  render() {
    return (
      <div>
        {/* <Placeholder label="Homepage View"> */}
        <h1>Ask Me A Question</h1>
        {/* <Placeholder label="Question Form"> */}
        <form onSubmit={this.askQuestion}>
          <textarea cols="100" type="text" name="label" id="label" />
          <br></br>
          <button
            onClick={() => {
              this.setState({
                shake: true
              });
              setTimeout(() => this.setState({ shake: false }), 1000);
            }}
            type="submit"
          >
            It's Magic!
          </button>
        </form>
        {/* </Placeholder> */}
        {/* <Placeholder label="Eight Ball"> */}
        <Answer value={this.state.answer} shake={this.state.shake} />
        {/* </Placeholder> */}
        {/* <Placeholder label="My Questions"></Placeholder> */}
        {/* </Placeholder> */}
      </div>
    );
  }
}

export default Homepage;
