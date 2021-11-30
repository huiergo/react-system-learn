import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
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
        <Link to="/goods"> Hello, {this.state.name}</Link>
        {this.state.count}
      </h1>
    );
  }
}

export default B;
