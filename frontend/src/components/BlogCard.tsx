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
      <div className="px-3 my-2 w-screen max-w-screen-md cursor-pointer">
        <div className="flex items-center gap-3">
          <div className="flex justify-center flex-col">
            <Avatar authorname={authorName} />
          </div>
          <div className="font-extralight">{authorName}</div>
          <div className="text-xs">&#9679;</div>
          <div className="font-thin text-slate-400">{publishedDate}</div>
        </div>
        <div className="text-xl font-bold py-2">{title}</div>
        <div className="text-md font-thin py-2">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 text-sm font-thin py-2">
          {Math.ceil(content.length / 100) + " minutes read"}
        </div>
        <div className="bg-slate-200 h-[1px] w-full"></div>
      </div>
    </Link>
  );
}

export default BlogCard