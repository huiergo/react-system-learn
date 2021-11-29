import React from "react";
import ReactDOM from "react-dom";

class B extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ding",
    };
  }

  render() {
    return <h1>Hello, {this.state.name}</h1>;
  }
}

export default B;
