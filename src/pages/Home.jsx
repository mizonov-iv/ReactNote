import React, {useEffect, useState} from 'react';
import Form from "../components/Form";
import Notes from "../components/Notes";
import {NoteService} from "../Services/NoteService";
import {findAllByDisplayValue} from "@testing-library/react";

const Home = () => {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes()
    }, [])

    async function fetchNotes() {
        const notes = await NoteService.getAllNotes()
        setNotes(notes)
    }

    const deleteNote = async (noteId) => {
        await NoteService.deleteNote(noteId)
        const notes = await NoteService.getAllNotes()
        setNotes(notes)
    }

    const addNote = async () => {
        const notes = await NoteService.getAllNotes()
        setNotes(notes)
    }

    return (
        <React.Fragment>
            <Form addNote={addNote}/>
            <hr/>
            {notes.length !== 0
                ? <Notes notes={notes} deleteNote={deleteNote} />
                : <div>Зарузка</div>
            }
        </React.Fragment>
    );
};

export default Home;