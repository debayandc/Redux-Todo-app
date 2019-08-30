import React, { Component } from "react";
import { connect } from "react-redux";
import Note from "./Note";
import EditNote from "./EditNote";

class AllNotes extends Component {
  render() {
    return (
      <div>
        <h1 className="all_note_heading">All Notes</h1>
        {this.props.notes.map(note => (
          <div key={note.id}>
            {note.editing ? (
              <EditNote note={note} key={note.id} />
            ) : (
              <Note note={note} key={note.id} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};
export default connect(mapStateToProps)(AllNotes);
