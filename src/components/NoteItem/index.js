// src/components/NoteItem/index.js
import React from 'react'
import {NoteItemContainer, NoteTitle, NoteDescription} from './styledComponents'

const NoteItem = ({note}) => {
  const {title, note: description} = note
  return (
    <NoteItemContainer>
      <NoteTitle>{title}</NoteTitle>
      <NoteDescription>{description}</NoteDescription>
    </NoteItemContainer>
  )
}

export default NoteItem
