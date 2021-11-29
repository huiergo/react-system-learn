import React from "react";
import ReactDOM from "react-dom";

const ThemeContext = React.createContext("light");

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar theme="dark" />
      </ThemeContext.Provider>
    );
  }
}

function Toolbar(props) {
  // Toolbar 组件接受一个额外的“theme”属性，然后传递给 ThemedButton 组件。
  // 如果应用中每一个单独的按钮都需要知道 theme 的值，这会是件很麻烦的事，
  // 因为必须将这个值层层传递所有组件。
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ThemedButton extends React.Component {
  // static contextType = ThemeContext;  等同于： ThemedButton.contextType = ThemeContext;

  render() {
    return <div>{this.context} </div>;
  }
}
// 挂载在 class 上的 contextType 属性可以赋值为由 React.createContext() 创建的 Context 对象。
// 此属性可以让你使用 this.context 来获取最近 Context 上的值。你可以在任何生命周期中访问到它，包括 render 函数中。
ThemedButton.contextType = ThemeContext;

export default App;
