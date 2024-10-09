
import BlogCard from "../components/BlogCard"
import AppBar from "../components/AppBar";
import { useBlogs } from "../hooks";
import Skelton from "../components/Skelton";
const Blogs = () => {
  const { loading,allBlogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <AppBar />
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
  return (
    <div>
      <AppBar/>
      <div className="flex justify-center">
        <div className="max-w-5xl gap-4">
          {allBlogs?.map(blog => <BlogCard
            authorName={blog.author.firstName}
            title={blog.title}
            content={blog.content}
            id={blog.id}
            key={blog.id}
            publishedDate="21/10/22"
          />)}
        </div>
      </div>
    </div>
  );
}

export default Blogs