import "./App.css";
import ProfilePage from "./ProfilePage";
import { UserContext, UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
