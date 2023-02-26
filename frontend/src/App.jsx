import { AuthContext, AuthProvider } from "./context/AuthContext";
import HomePage from "./modules/home/HomePage";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {

  return (
    <GoogleOAuthProvider clientId="935186823946-qcm7951fh404bcm76bn99to8v25i94s7.apps.googleusercontent.com">
      <AuthProvider>
        <HomePage />
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
