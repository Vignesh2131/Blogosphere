import { BrowserRouter,Routes, Route } from "react-router-dom"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Publish from "./pages/Publish";
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs/" element={<Blogs />} />
          <Route path="/publish" element={<Publish/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
