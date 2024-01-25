import * as React from "react";
import "../../assets/styles/SharedStyles.css";
import CardComponent from "../../components/card/CardComponent";
import SliderComponent from "../../components/slider/SliderComponent";
import CheckboxComponent from "../../components/checkbox/CheckboxComponent";

class HomePage extends React.Component {
  render() {
    return (
      <div className="page">
        <SliderComponent></SliderComponent>
        <CheckboxComponent></CheckboxComponent>
        <CardComponent></CardComponent>
      </div>
    );
  }
}

export default HomePage;
