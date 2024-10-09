import AppBar from "../components/AppBar"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  async function publishPost() {
    const res = await axios.post(`${BACKEND_URL}/api/v1/blog/post`, {
      title,
      content,
    }, {
      headers: {
        Authorization:localStorage.getItem("token")
      }
    })
    navigate(`/blog/${res.data.id}`);
  }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center w-full pt-8">
        <div className="max-w-screen-lg w-full">
          <div>
            <input
              onChange={(e)=>setTitle(e.target.value)}
              type="text"
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg  block w-full p-2.5"
              placeholder="Title"
              value={title}
            />
          </div>
          <div className="pt-4">
            <div>
              <textarea
                onChange={(e)=>setContent(e.target.value)}
                id="message"
                rows={8}
                className="focus:outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                placeholder="Write your Article here..."
                value={content}
              ></textarea>
              <button
                onClick={publishPost}
                className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-200 "
              >
                Publish post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publish