import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider)
    // const credentials = GoogleAuthProvider.credentialFromResult(result)
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
