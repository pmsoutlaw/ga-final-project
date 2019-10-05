import * as React from "react";
import "../answer.css";

class Answer extends React.Component {
  state = {
    url: "magic8ballQuestion.png"
  };

  updateUrl = () => {
    if (this.props.value == "") {
      return "magic8ballQuestion.png";
    } else {
      return "answerside.png";
    }
  };

  render() {
    return (
      <div className="ball">
        <img
          id="eightBall"
          className={this.props.shake ? "shake" : ""}
          src={`https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/${this.updateUrl()}`}
        />
        <p id="answer" className="answer">
          {this.props.value}
        </p>
      </div>
    );
  }
}

export default Answer;
