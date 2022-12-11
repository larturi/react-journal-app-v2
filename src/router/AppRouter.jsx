import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'
import { AUTH_AUTHENTICATED, AUTH_CHECKING } from '../types'
import { useCheckAuth } from '../hooks/useCheckAuth'

const AppRouter = () => {
  const status = useCheckAuth()

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
