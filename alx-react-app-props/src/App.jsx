import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
  };
  return (
    <>
      <div>
        <UserContext.Provider value={userData}>
          <ProfilePage />
        </UserContext.Provider>
      </div>
      <div>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      </div>
      <div>
        <WelcomeMessage />
      </div>
      <div>
        <Header />
      </div>
      <div>
        <MainContent />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
