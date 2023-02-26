import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext";
import HomePage from "./modules/home/HomePage";
import { CLIENTID } from "./config/credentialsGoogle";

function App() {

  return (
    <GoogleOAuthProvider clientId={CLIENTID}>
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
