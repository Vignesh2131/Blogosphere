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
    <div className="px-5 my-3 w-screen max-w-screen-md cursor-pointer md:px-3 border-b-slate-600">
      <div className="border-b border-slate-300">
        <div className="mb-2">
          <div className="">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 sm:mb-3">
              <Link to={`/blog/${id}`} className="hover:underline">
                {title}
              </Link>
            </h2>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
              <div className="flex items-center gap-2">
                <Avatar authorname={authorName} />
                <span>{authorName}</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <span>
                {new Date(publishedDate).toLocaleDateString("en-IN", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="hidden sm:inline">•</span>
              <span>{Math.round(content?.length / 250)} min read</span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            {content?.slice(0, 100)}...
          </p>
          <Link
            to={`/blog/${id}`}
            className="text-primary hover:underline text-sm sm:text-base"
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard