
import { Blogs } from "../hooks"
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
const FullBlog = ({ blog }: { blog: Blogs }) => {


    return (
      <div>
        <div className="my-2">
          <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center gap-8 px-10 w-full max-w-screen-xl pt-4 md:grid grid-cols-12 md:pt-8 lg:pt-12">
              <div className="col-span-8">
                <div className="text-2xl font-extrabold md:text-5xl">
                  {blog.title}
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <div className="text-sm text-slate-500  md:text-base">
                    {`Posted on ${blog.publishedDate
                      .slice(0, 10)
                      .replace(/-/g, "/")}`}
                  </div>
                </div>
                <div className="pt-2">{blog.content}</div>
              </div>
              <div className="col-span-4 ">
                <div className="flex flex-col items-center text-sm text-slate-600 underline md:text-lg">
                  Author
                </div>
                <div className="flex flex-col justify-center items-center w-full pt-3">
                  <div className="flex flex-col items-center md:flex-row">
                    <Link to={`/profile/${blog.author.id}`}>
                      <Avatar authorname={blog.author.firstName} />
                    </Link>
                  </div>
                  <div>
                    <div className="font-bold text-base text-center md:text-xl">
                      {blog.author.firstName}
                    </div>
                    <div className="pt-2 text-sm text-slate-500 text-center md:text-base">
                      Random Catch phrase about the author to attract the users
                      attention
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default FullBlog