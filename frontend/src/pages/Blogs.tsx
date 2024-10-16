
import BlogCard from "../components/BlogCard"
import { useBlogs } from "../hooks";
import Skelton from "../components/Skelton";


const Blogs = () => {
  const { loading, allBlogs} = useBlogs();
  if (loading) {
    return (
      <div>
        <div className="flex justify-center">
          <div>
            <Skelton />
            <Skelton />
            <Skelton />
            <Skelton />
            <Skelton />
          </div>
        </div>
      </div>
    );
  }
  if(allBlogs?.length === 0){
    return (
      <div>
        <div className="flex justify-center mt-7">
          <div>
            <h1 className="text-xl font-bold md:text-3xl">No blogs found</h1>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="flex justify-center">
        <div className="max-w-5xl gap-4">
          {allBlogs?.map(blog => <BlogCard
            authorName={blog.author.firstName}
            title={blog.title}
            content={blog.content}
            id={blog.id}
            key={blog.id}
            publishedDate={blog.publishedDate.slice(0,10)}
          />)}
        </div>
      </div>
    </div>
  );
}

export default Blogs