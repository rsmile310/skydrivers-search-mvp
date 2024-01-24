import * as React from "react";
import "../../assets/styles/SharedStyles.css";
import CardComponent from "../../components/card/CardComponent";

class HomePage extends React.Component {
  render() {
    return (
      <div className="page">
        <div className="pageTitle">Stack Exchange Search</div>
        <CardComponent></CardComponent>
      </div>
    );
  }
}

export default HomePage;
