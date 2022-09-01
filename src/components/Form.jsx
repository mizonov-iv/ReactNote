import React, {useState} from 'react';
import {NoteService} from "../Services/NoteService";

const Form = ({addNote}) => {

    const [inputValue, setInputValue] = useState('')

    const submitHandler = async (event) => {
        event.preventDefault()

        const newNote ={
            inputValue,
            id: Date.now()
        }

        await NoteService.addNewNote(newNote)

        setInputValue('')

        addNote()
    }

    return (
        <form className='mt-4' onSubmit={submitHandler}>
            <div className='d-flex'>
                <input
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    type='text'
                    className='form-control'
                    placeholder='Что нужно сделать?'
                />
                <button type="submit" className='btn btn-outline-dark mx-2'>Add</button>
            </div>
        </form>
    );
};

export default Form;