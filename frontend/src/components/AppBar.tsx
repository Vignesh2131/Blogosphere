import Avatar from "./Avatar"
import { Link } from "react-router-dom"
const AppBar = () => {
    
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link
        to={"/blogs"}
        className="font-semibold flex flex-col justify-center"
      >
        Blogosphere
      </Link>
      <div>
        <Link to={"/publish"}>
          <button
            type="button"
            className="mx-2 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            New Blog
          </button>
        </Link>
        <Avatar authorname="Johnwick" />
      </div>
    </div>
  );
}

export default AppBar