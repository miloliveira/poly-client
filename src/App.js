// Dependencies
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import Activity from "./pages/Activity";
import Feed from "./pages/Feed";
// Global style
import { GlobalStyle } from "./styles/global.styles";
// Import the authentication context
import { AuthContext } from "./context/auth.context";

function App() {
  // Access isLoggedIn from the authentication context
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      {/* Apply global styles */}
      <GlobalStyle />
      {/* Render the navigation bar */}
      <NavBar />
      {/* Define routes for different pages */}
      <Routes>
        {/* Default route: Show Feed if logged in, otherwise show Home */}
        <Route path="/" element={isLoggedIn ? <Feed /> : <Home />} />
        {/* Route for displaying the Feed */}
        <Route path="/feed" element={<Feed />} />
        {/* Route for displaying a user's profile */}
        <Route path="/in/:userId" element={<Profile />} />
        {/* Route for displaying user's activity */}
        <Route path="/in/:userId/activity" element={<Activity />} />
        {/* Route for editing user profile settings */}
        <Route path="/edit/:userId" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default App;
