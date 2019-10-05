import React from "react";
import Placeholder from "../components/Placeholder";
import "../styles.css";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1>Some Random Magic 8 Ball Stuff</h1>
        <Placeholder label="Links" description="wiki, where to buy etc">
          <ul>
            <li>
              <a href="https://en.wikipedia.org/wiki/Magic_8-Ball">Wikipedia</a>
            </li>
            <li>
              <a href="http://mentalfloss.com/article/67702/brief-history-magic-8-ball">
                Mental Floss
              </a>
            </li>
            <li>
              <a href="https://www.amazon.com/s?k=magic+8+ball&ref=nb_sb_noss_1">
                Buy one on Amazon
              </a>
            </li>
          </ul>
        </Placeholder>
        <Placeholder label="Bio">
          <p>
            Lovingly developed by Pam Rimel during General Assembly 1 week React
            bootcamp - October 2019.
          </p>
        </Placeholder>
      </div>
    );
  }
}

export default About;
