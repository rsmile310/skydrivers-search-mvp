import * as React from "react";
import "../../assets/styles/SharedStyles.css";

class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="pageTitle">Page Not Found</div>
        <div className="mainCard">
          <p>
            The requested page at this address is not found.{" "}
            <a href="/">Home Page</a>
          </p>
        </div>
      </div>
    );
  }
}

export default NotFoundPage;
