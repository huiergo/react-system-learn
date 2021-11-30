import React, { Component } from "react";
import PropTypes from "prop-types";

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }
  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  }

  render() {
    return (
      <div style={{ height: "100vh" }} onMouseMove={this.handleMouseMove}>
        {/* ...但我们如何渲染 <p> 以外的东西? */}
        {this.props.children(this.state)}
      </div>
    );
  }
}

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        alt="animal"
        src="https://img1.baidu.com/it/u=3168162922,1075236157&fm=26&fmt=auto"
        style={{ position: "absolute", left: mouse.x, top: mouse.y }}
      />
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>移动鼠标!</h1>

        <Mouse children={(xxx) => <Cat mouse={xxx} />} />
      </>
    );
  }
}

// const connect = (mapStateToProps, mapDispatchToProps)=>(WrappedComponent)=>{
//     return class Connect extends Component{
//         constructor(props){
//             super(props)
//             this.state={
//                 allProps:{}
//             }
//         }
//         render(){
//             return <WrappedComponent {...this.state.allProps}/>
//         }

//     }
// }

export default MouseTracker;
