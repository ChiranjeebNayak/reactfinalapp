import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage/>}/>
      </Routes>
    </>
  );
}

export default App;
