import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate, Route, Routes } from 'react-router-dom'
import { FirebaseAuth } from '../firebase/config'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'
import { login, logout } from '../store/auth/authSlice'
import { AUTH_AUTHENTICATED, AUTH_CHECKING } from '../types'

const AppRouter = () => {
  const { status } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async (user) => {
      if (!user) return dispatch(logout())

      const { uid, email, displayName, photoURL } = user
      dispatch(login({ uid, email, displayName, photoURL }))
    })
  }, [])

  if (status === AUTH_CHECKING) {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {status === AUTH_AUTHENTICATED ? (
        <Route path="/*" element={<JournalRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}

export default AppRouter
