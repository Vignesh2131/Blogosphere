import { BrowserRouter,Routes, Route} from "react-router-dom"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Publish from "./pages/Publish";
import { AuthRoute } from "./AuthRoute";
import { RecoilRoot } from "recoil";
import User from "./pages/User";

import Layout from "./Layout";
function App() {

  return (
    <>
      <RecoilRoot>
      <BrowserRouter>
        <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route element={<AuthRoute />}>
            <Route element={<Layout/>}> 
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/" element={<Blogs />} />
                <Route path="/publish" element={<Publish />} />
            <Route path="/profile/:id" element={<User />} />
            </Route>
          </Route>
        </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App
