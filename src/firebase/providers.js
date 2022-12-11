/* eslint-disable consistent-return */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    const { user } = result
    const { displayName, email, phoneNumber, uid, photoURL } = user

    return {
      ok: true,
      displayName,
      email,
      phoneNumber,
      uid,
      photoURL,
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage,
    }
  }
}

export const registerUserWithEmailPassword = async ({
  email,
  password,
  displayName,
}) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    )
    const { uid, photoURL } = resp.user

    await updateProfile(FirebaseAuth.currentUser, { displayName })

    return {
      ok: true,
      uid,
      photoURL,
      email,
      displayName,
    }
  } catch (error) {
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message,
    }
  }
}

export const loginWithEmailPassword = async ({ email, password }) => {
  try {
    const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password)
    const { uid, photoURL, displayName } = resp.user

    return {
      ok: true,
      uid,
      photoURL,
      displayName,
    }
  } catch (error) {
    return {
      ok: false,
      errorCode: error.code,
      errorMessage: error.message,
    }
  }
}
