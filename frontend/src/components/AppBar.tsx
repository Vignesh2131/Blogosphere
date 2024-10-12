
import { Link,useNavigate } from "react-router-dom"
import { IoIosLogOut } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { useBlogs } from "../hooks";
import { RxAvatar } from "react-icons/rx";
const AppBar = () => {
  const navigate = useNavigate();
  const { name } = useBlogs();
  function logout() {
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    <div className="px-3 border-b flex justify-between items-center md:px-10 py-4 ">
      <Link
        to={"/"}
        className="font-semibold flex flex-col justify-center text-base md:text-lg"
      >
        Blogosphere
      </Link>
      <div className="flex items-center gap-2">
        <Link to={"/publish"}>
          <button
            type="button"
            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xs  text-center md:text-sm p-2.5"
          >
            <FaPlus />
          </button>
        </Link>
        <Link to={`/profile/${name}`}>
          <RxAvatar size={28} />
        </Link>
        <div
          className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden rounded-full bg-black"
          onClick={logout}
        >
          <span className="font-bold text-xl text-white">
            <IoIosLogOut />
          </span>
        </div>
      </div>
    </div>
  );
}

export default AppBar