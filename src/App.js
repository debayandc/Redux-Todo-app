import React, { Component } from "react";
import AddNote from "./AddNote";
import AllNotes from "./AllNotes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <h2 className="center">Notes App</h2>
        </div>
        <AddNote />
        <AllNotes />
      </div>
    );
  }
}
export default App;
