import React from 'react';
import { NewNoteInput } from './NewNoteInput';

function App() {
  return (
    <>
      <NewNoteInput addNote={alert}/>
      <hr />
      <ul>
        <li>A Note</li>
      </ul>
    </>
  );
}

export default App;
