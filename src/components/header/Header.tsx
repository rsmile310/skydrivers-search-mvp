import * as React from "react";

import logo from "../../logo.svg";
import "./Header.css";
// import XxxSearchBox from "../XxxSearchBox/XxxSearchBox";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        <div className="headerTitle">React TypeScript Example</div>
        <div className="searchBoxContainer">
          {/* <XxxSearchBox /> */}
        </div>
      </div>
    );
  }
}

export default Header;
