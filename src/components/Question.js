import * as React from "react";

const Question = ({ question, answer, children, ...props }) => (
  <div>
    <h4>
      1. {question} - A: {answer}
    </h4>
  </div>
);

export default Question;
