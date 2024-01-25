import * as React from "react";
import "../../assets/styles/SharedStyles.css";
import CardComponent from "../../components/card/CardComponent";
import SliderComponent from "../../components/slider/SliderComponent";

class HomePage extends React.Component {
  render() {
    return (
      <div className="page">
        <SliderComponent></SliderComponent>
        <CardComponent></CardComponent>
      </div>
    );
  }
}

export default HomePage;
