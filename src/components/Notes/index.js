// src/components/Notes/index.js
import {useState} from 'react'
import {
  NotesContainer,
  NotesHeading,
  NotesList,
  AddNoteForm,
  TitleInput,
  NotesTextarea,
  AddButton,
  EmptyNotesImage,
  EmptyNotesText,
} from './styledComponents'
import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState([])
  const [note, setNote] = useState('')

  const handleTitleChange = e => {
    setTitle(e.target.value)
  }

  const handleNoteChange = e => {
    setNote(e.target.value)
  }

  const handleAddNote = e => {
    e.preventDefault()
    if (title.trim() !== '' && note.trim() !== '') {
      const newNote = {
        id: Date.now(),
        title,
        note,
      }
      setNotes(prevNotes => [...prevNotes, newNote])
      setTitle('')
      setNote('')
    }
  }

  return (
    <NotesContainer>
      <NotesHeading>Notes</NotesHeading>
      <AddNoteForm onSubmit={handleAddNote}>
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitleChange}
        />
        <NotesTextarea
          placeholder="Take a Note..."
          value={note}
          onChange={handleNoteChange}
        />
        <AddButton type="submit">Add</AddButton>
      </AddNoteForm>
      {notes.length > 0 ? (
        <NotesList>
          {notes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </NotesList>
      ) : (
        <>
          <h1>No Notes Yet</h1>
          <p>Notes you add will appear here</p>
          <EmptyNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <EmptyNotesText>Your notes list is empty</EmptyNotesText>
        </>
      )}
    </NotesContainer>
  )
}

export default Notes
