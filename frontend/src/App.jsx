import { AuthProvider } from "./context/AuthContext";
import HomePage from "./modules/home/HomePage";


function App() {
  return (
    <AuthProvider>
      <HomePage />
    </AuthProvider>
  );
}

export default App;
