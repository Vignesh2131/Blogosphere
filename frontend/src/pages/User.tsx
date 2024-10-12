import AppBar from "../components/AppBar"
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import { Blogs } from "../hooks";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useState, useEffect } from "react";
import ProfileBlogs from "../components/ProfileBlogs";

const User = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfileBlogs] = useState<Blogs[]>([]);
    const name = useParams();
    useEffect(() => {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/userProfile`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setProfileBlogs(res.data);
          setLoading(false);
        });
    }, [name]);

   
    if (loading) {
        <div>
            <AppBar />
            <div>
                <Spinner/>
            </div>
        </div>;
    }
  return (
    <div>
      <AppBar />
      <div className="flex justify-center flex-col items-center mt-3">
        <div>
          <h1 className="text-center text-base font-semibold md:text-xl">
            My Blogs
          </h1>
          <div>
            {profile?.length > 0 ? (
              profile.map((blog) => {
                return (
                  <ProfileBlogs
                        key={blog.id}
                        id={blog.id}
                    title={blog.title}
                    content={blog.content}
                  />
                );
              })
            ) : (
              <div className="flex justify-center items-start h-screen">
                <Spinner />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User