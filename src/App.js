import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import Activity from "./pages/Activity";
import Feed from "./pages/Feed";
import { GlobalStyle } from "./styles/global.styles";

import { AuthContext } from "./context/auth.context";

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Feed /> : <Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/in/:userId" element={<Profile />} />
        <Route path="/in/:userId/activity" element={<Activity />} />
        <Route path="/edit/:userId" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default App;
