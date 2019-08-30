import React, { Component } from "react";
import { connect } from "react-redux";

class EditNote extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newNote = this.getNote.value;
    const data = {
      newTitle,
      newNote
    };
    this.props.dispatch({ type: "UPDATE", id: this.props.note.id, data: data });
  };
  render() {
    return (
      <div key={this.props.note.id} className="note">
        <form className="form" onSubmit={this.handleEdit}>
          <input
            required
            type="text"
            ref={input => (this.getTitle = input)}
            defaultValue={this.props.note.title}
            placeholder="Enter Note Title"
          />
          <br />
          <br />
          <textarea
            required
            rows="5"
            ref={input => (this.getNote = input)}
            defaultValue={this.props.note.note}
            cols="30"
            placeholder="Enter Note"
          />
          <br />
          <br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}
export default connect()(EditNote);
