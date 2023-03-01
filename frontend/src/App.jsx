import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./modules/home/HomePage";
import { CLIENTID } from "./config/credentialsGoogle";
import { AppRouter } from "./routes/AppRouter";
import { Suspense } from "react";

function App() {

  return (
    <GoogleOAuthProvider clientId={CLIENTID}>
      <AuthProvider>
        <Suspense fallback={<h1>Cargando ....</h1>}>
          <AppRouter />
        </Suspense>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
