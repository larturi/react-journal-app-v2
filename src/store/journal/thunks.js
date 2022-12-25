/* eslint-disable no-restricted-syntax */
import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FirebaseDB } from '../../firebase/config'
import { fileUpload } from '../../helpers/fileUpload'
import { loadNotes } from '../../helpers/loadNotes'
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from './journalSlice'

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote())

    const { uid } = getState().auth

    const newNote = {
      title: '',
      body: '',
      imageUrls: [],
      date: new Date().getTime(),
    }

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`))
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id

    dispatch(addNewEmptyNote(newNote))
    dispatch(setActiveNote(newNote))
  }
}

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    if (!uid) throw new Error('El uid del usuario no existe')

    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))
  }
}

export const startSaveNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving)

    const { uid } = getState().auth
    const { activeNote } = getState().journal

    const noteToFirestore = { ...activeNote }
    delete noteToFirestore.id

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`)
    await setDoc(docRef, noteToFirestore, { merge: true })

    dispatch(updateNote(activeNote))
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
    dispatch(setSaving)

    const fileUploadPromises = []

    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }

    const photosUrls = await Promise.all(fileUploadPromises)

    dispatch(setPhotosToActiveNote(photosUrls))
  }
}

export const startDeletingNote = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth
    const { activeNote } = getState().journal
    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activeNote.id}`)
    await deleteDoc(docRef)
    dispatch(deleteNoteById(activeNote.id))
  }
}
