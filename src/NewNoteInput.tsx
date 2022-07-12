import React, { ChangeEvent, FunctionComponent, useState } from "react";

interface NewNoteInputProps {
    addNote(note:string): void;
}

export const NewNoteInput: FunctionComponent<NewNoteInputProps> = ({ addNote }) => {

    const [note, setNote] = useState('')

    const updateNote = (e:ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value) 
    }

    const onAddNoteClick = () => {
        addNote(note)
        setNote("")
    }
 
    return (
        <div>
            <input onChange={updateNote} value={note} type="text" name='note' placeholder='Note' />
            <button onClick={onAddNoteClick}>Add Note</button>
        </div>
    )
}