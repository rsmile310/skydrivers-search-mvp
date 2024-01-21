import * as React from "react";
import "../../assets/styles/SharedStyles.css";

class HomePage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="pageTitle">Stack Exchange Search</div>
        <div className="mainCard">
          <p>This will search Stack Exchange questions for given title text.</p>
          <p>
            Enter your search text and click the icon or press the Enter key. A
            list of matching questions will be shown.
          </p>
          <p>After that, you can click on a question to see the answers.</p>
          <h4>By JC Lango</h4>
        </div>
      </div>
    );
  }
}

export default HomePage;
