import React from "react";
import ReactDOM from "react-dom";

class B extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "ding",
      count: 0,
    };
  }
  handleClick = () => {
    console.log(111);
    this.setState((prevstate, props) => {
      return {
        count: prevstate.count + 1,
      };
    });
  };

  render() {
    return (
      <h1 onClick={this.handleClick}>
        Hello, {this.state.name}
        {this.state.count}
      </h1>
    );
  }
}

export default B;
