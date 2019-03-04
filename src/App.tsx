import React, { Component } from "react";
import Test from "./components/Test";
import MessagesBoardProps from "./scenes/MessagesBoard";
class App extends Component {
  render() {
    return (
      <>
        <Test>Test 123456</Test>
        <MessagesBoardProps />
      </>
    );
  }
}

export default App;
