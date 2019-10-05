import React from "react";
import Answer from "../components/Answer";
import answers from "../answers.json";
import "../styles.css";

class Homepage extends React.Component {
  state = {
    question: "",
    answer: "",
    shake: false
  };

  askQuestion = e => {
    e.preventDefault();
    this.setState({
      question: e.target.querySelector("textarea").value,
      shake: true
    });
    setTimeout(() => {
      this.state.question
        ? this.setState({ answer: this.getRandomAnswer() })
        : this.setState({ answer: "Question Unclear" });
    }, 300);
    setTimeout(() => this.setState({ shake: false }), 1000);
    e.target.querySelector("textarea").value = "";
  };

  getRandomAnswer = () => {
    let randomNumber = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers[randomNumber];
    return randomAnswer;
  };

  render() {
    return (
      <div>
        <h1>Ask Me A Question</h1>
        <form onSubmit={this.askQuestion}>
          <textarea className="textBox" cols="100" />
          <br></br>
          <input className="submitButton" type="submit" value="Its Magic!" />
        </form>
        <Answer value={this.state.answer} shake={this.state.shake} />
      </div>
    );
  }
}

export default Homepage;
