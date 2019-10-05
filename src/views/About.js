import React from "react";
import Placeholder from "../components/Placeholder";

class About extends React.Component {
  render() {
    return (
      <Placeholder label="About View">
        <h2>Some Random Magic 8 Ball Stuff</h2>
        <Placeholder label="Bio">
          <p>
            Lovingly developed by Pam Rimel during General Assembly 1 week React
            bootcamp - October 2019.
          </p>
        </Placeholder>
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
      </Placeholder>
    );
  }
}

export default About;
