import { GoogleOAuthProvider } from '@react-oauth/google'
import { AuthProvider } from './context/AuthContext'
import { CLIENTID } from './config/credentialsGoogle'
import { AppRouter } from './routes/AppRouter'
import { Suspense } from 'react'
import Loader from './modules/shared/loader/Loader'

function App () {
  return (
    <GoogleOAuthProvider clientId={CLIENTID}>
      <AuthProvider>
        <Suspense fallback={<Loader />}>
          <AppRouter />
        </Suspense>
      </AuthProvider>
    </GoogleOAuthProvider>
  )
}

export default App
