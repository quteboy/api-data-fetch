import React, { Component } from "react";
import UserCards from "./components/UserCards";
import "./App.css";
export class App extends Component {
 
  render() {
    return (
      <div className="App">
        <UserCards />
      </div>
    );
  }
}

export default App;
