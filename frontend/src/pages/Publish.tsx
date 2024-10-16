
import Spinner from "../components/Spinner";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Publish = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  async function publishPost() {
    setLoading(true);
    try {
       const res = await axios.post(`${BACKEND_URL}/api/v1/blog/post`, {
      title,
      content,
    }, {
      headers: {
        Authorization:localStorage.getItem("token")
      }
    })
    navigate(`/blog/${res.data.id}`);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const field: string = err?.response?.data.field;
        const message: string = err?.response?.data.error;
        setErrorMessage(`${field} ${message.slice(7, message.length)}`);
        if (field === "title") {
          setTitle("");
        } else if (field === "content") {
          setContent("");
        }
      } 
      setLoading(false);
    }
   
  }
  return (
    <div>
      <div className="flex justify-center w-full mt-4 md:pt-8">
        <div className="max-w-screen-lg w-full">
          <p className="pb-3 flex flex-col items-center font-semibold text-base md:text-lg">Start writing..</p>
          <div className="px-3">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="focus:outline-none bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg  block w-full p-2.5 md:text-base"
              placeholder="Title (Min 10 Characters)"
              value={title}
            />
          </div>
          <div className="pt-4 px-3">
            <div>
              <textarea
                onChange={(e) => setContent(e.target.value)}
                id="message"
                rows={8}
                className="focus:outline-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 "
                placeholder="Write your Article here... (Min 50 Characters)"
                value={content}
              ></textarea>
              {errorMessage.length >0?<p className="text-red-700 mt-2 text-xs font-semibold md:text-sm">{errorMessage}</p>:""}
              <button
                onClick={publishPost}
                className="mt-2 inline-flex flex-col items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-blue-200 md:px-5 "
              >
               {loading?<Spinner/>:"Publish"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Publish