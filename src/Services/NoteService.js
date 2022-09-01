import axios from 'axios'

export class NoteService {
    static async getAllNotes() {
        const response = await axios.get('https://react-note-app-08-default-rtdb.firebaseio.com/notes.json')
        const notes = Object.keys(response.data).map(key => {
            return {
                ...response.data[key],
                id: key
            }
        })
        return notes
    }

    static addNewNote(newNote) {
        return axios.post('https://react-note-app-08-default-rtdb.firebaseio.com/notes.json', newNote)
    }

    static deleteNote (noteId) {
        return axios.delete(`https://react-note-app-08-default-rtdb.firebaseio.com/notes/${noteId}.json`)
    }
}