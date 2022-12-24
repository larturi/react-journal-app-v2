import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    activeNote: null,
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving = true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving = false
    },
    setActiveNote: (state, action) => {
      state.messageSaved = ''
      state.activeNote = action.payload
    },
    setNotes: (state, action) => {
      state.notes = action.payload
    },
    setSaving: (state) => {
      state.messageSaved = ''
      state.isSaving = true
    },
    updateNote: (state, action) => {
      state.isSaving = false
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      })
      state.messageSaved = 'Nota actualizada correctamente'
    },
    // deleteNoteById: (state, action) => {},
  },
})

export const {
  savingNewNote,
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
  //   deleteNoteById,
} = journalSlice.actions
