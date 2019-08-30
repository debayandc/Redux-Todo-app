const notesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_NOTES":
      return state.concat([action.data]);
    case "DELETE_NOTE":
      return state.filter(note => note.id !== action.id);
    case "EDIT_NOTE":
      return state.map(note =>
        note.id === action.id ? { ...note, editing: !note.editing } : note
      );
    case "UPDATE":
      return state.map(note => {
        if (note.id === action.id) {
          return {
            ...note,
            title: action.data.newTitle,
            note: action.data.newNote,
            editing: !note.editing
          };
        } else return note;
      });
    default:
      return state;
  }
};
export default notesReducer;
