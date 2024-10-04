import { BrowserRouter,Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:id" element={<Blogs/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
