import { MdOutlineDeleteOutline } from "react-icons/md";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
interface ProfileBlogsProps {
  title: string;
    content: string;
  id: string;
  check: boolean;
}

const ProfileBlogs = ({ title, content, id,check }: ProfileBlogsProps) => {
    const navigate = useNavigate();
  async function deleteBlog() {
    const res = await axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });
    if (res.status == 200) {
      navigate("/");
    }
  }
  return (
    <div className="max-w-sm p-6 bg-white border-b-gray-200 rounded-lg shadow md:max-w-2xl mb-2">
      <div>
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 md:text-xl">
          {title}
        </h5>
      </div>
      <p className="mb-3 text-sm font-light text-gray-700 md:text-base">
        {content.slice(0, 70) + "..."}
      </p>
      <div className="flex items-center justify-between ">
        <Link
          to={`/blog/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-light text-center text-white bg-green-700 rounded-lg hover:bg-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
          </svg>
        </Link>
        {check ? <MdOutlineDeleteOutline
          onClick={deleteBlog}
          className="w-6 h-6 text-red-600 cursor-pointer"
        />: ""}
      </div>
    </div>
  );
};

export default ProfileBlogs;
