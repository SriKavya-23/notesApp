// src/components/Notes/styledComponents.js
import styled from 'styled-components'

export const NotesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #475569;
  color: #ffffff;
  padding: 16px;
  min-height: 100vh;
`

export const NotesHeading = styled.h1`
  font-family: 'Bree Serif', serif;
  font-size: 32px;
  margin-bottom: 24px;
`

export const NotesList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 360px;
`

export const AddNoteForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 360px;
`

export const TitleInput = styled.input`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
`

export const NotesTextarea = styled.textarea`
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #d8d8d8;
  border-radius: 4px;
`

export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  padding: 8px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export const EmptyNotesImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 40px;
`

export const EmptyNotesText = styled.p`
  font-size: 20px;
  margin-top: 16px;
`
