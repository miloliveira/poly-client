import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProfileSettings from "./pages/ProfileSettings";
import Feed from "./pages/Feed";
import { GlobalStyle } from "./styles/styles";
import EditPost from "./pages/EditPost";
function App() {
  return (
    <div>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/in/:userId" element={<Profile />} />
        <Route path="/edit/:userId" element={<ProfileSettings />} />
        <Route path="/edit-post/:postId" element={<EditPost />} />
      </Routes>
    </div>
  );
}

export default App;
