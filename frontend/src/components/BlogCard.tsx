import Avatar from "./Avatar"
import { Link } from "react-router-dom"


interface BlogCardProps{
    authorName: string,
    title: string,
    content: string,
  publishedDate: string,
  id:string,
}
const BlogCard = ({authorName,title,content,publishedDate,id}:BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="px-5 my-3 w-screen max-w-screen-md cursor-pointer md:px-3">
        <div className="flex items-center gap-3">
          <div className="flex justify-center items-center">
            <Avatar authorname={authorName} />
          </div>
          <div className="text-sm font-extralight md:text-base">
            {authorName}
          </div>
          <div className="text-xs">&#9679;</div>
          <div>
            <div className="text-sm font-thin text-slate-400 md:text-base">
              {publishedDate}
            </div>
          </div>
        </div>
        <div className="text-lg font-bold py-2 md:text-xl">{title}</div>
        <div className="text-sm font-thin py-2 md:text-md">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-xs font-thin py-2 md:text-sm">
          {Math.ceil(content.length / 100) + " minutes read"}
        </div>
        <div className="bg-slate-200 h-[1px] w-full"></div>
      </div>
    </Link>
  );
}

export default BlogCard