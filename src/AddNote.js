import React, { Component } from "react";
import { connect } from "react-redux";

class AddNote extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const note = this.getNote.value;
    const data = {
      id: new Date(),
      title,
      note,
      editing: false
    };
    this.props.dispatch({
      type: "ADD_NOTES",
      data
    });
    this.getTitle.value = "";
    this.getNote.value = "";
  };

  render() {
    return (
      <div className="note-container">
        <h1 className="note_heading">Create a note</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            placeholder="Enter Note Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getNote = input)}
            cols="30"
            placeholder="Enter Note"
          />
          <br />
          <br />
          <button>Save</button>
        </form>
      </div>
    );
  }
}
export default connect()(AddNote);
