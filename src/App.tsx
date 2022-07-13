import React from 'react';
import { NewNoteInput } from './NewNoteInput';
import { useSelector } from 'react-redux';
import { NotesState } from './notesReducer';
import { useDispatch } from 'react-redux';

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  const dispatch = useDispatch()

  const addNote = (note:string) => {
    dispatch({type: "ADD_NOTE", payload: note})
  }

  return (
    <>
      <NewNoteInput addNote={addNote}/>
      <hr />
      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
        
      </ul> 
    </>
  );
}

export default App;
