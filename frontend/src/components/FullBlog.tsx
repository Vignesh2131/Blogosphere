import AppBar from "./AppBar"
import { Blogs } from "../hooks"
import Avatar from "./Avatar";
const FullBlog = ({blog}:{blog:Blogs}) => {
    return (
      <div>
        <AppBar />
        <div className="flex justify-center">
          <div className="grid grid-cols-12 px-10 w-full max-w-screen-xl pt-12">
            <div className="col-span-8">
              <div className="text-5xl font-extrabold">{blog.title}</div>
              <div className="text-slate-500 pt-2">Posted on 9th Oct 2024</div>
              <div className="pt-4">{blog.content}</div>
            </div>
            <div className="col-span-4">
              <div className="text-lg text-slate-600">Author</div>
              <div className="flex w-full pt-3">
                <div className="pr-2 flex flex-col justify-center">
                  <Avatar authorname={blog.author.firstName} />
                </div>
                <div>
                  <div className="font-bold text-xl">
                    {blog.author.firstName}
                  </div>
                  <div className="pt-2 text-slate-500">
                    Random Catch phrase about the author to attract the users
                    attention
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