import * as React from "react";
import logo from '../../logo.svg';
// import "../../assets/styles/SharedStyles.css";
import "../../App.css";

class NotFoundPage extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      // <div className="page">
      //   <div className="pageTitle">Page Not Found</div>
      //   <div className="mainCard">
      //     <p>
      //       The requested page at this address is not found.{" "}
      //       <a href="/">Home Page</a>
      //     </p>
      //   </div>
      // </div>
    );
  }
}

export default NotFoundPage;
