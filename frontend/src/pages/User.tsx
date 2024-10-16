import { Link } from "react-router-dom";
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
  const [check, setCheck] = useState(true);
  const {id} = useParams();
    useEffect(() => {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/userProfile/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setProfileBlogs(res.data.blogs);
          setCheck(res.data.check)
          setLoading(false);
        });
    }, [id]);
    if (loading) {
        <div>
            <div>
                <Spinner/>
            </div>
        </div>;
    }
  return (
    <div>
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
                    check={check}
                        key={blog.id}
                        id={blog.id}
                    title={blog.title}
                    content={blog.content}
                  />
                );
              })
            ) : (
              <div className="flex justify-center items-start h-screen">
                  {profile.length == 0 && (
                    <div className="flex flex-col justify-center mt-8">
                      <div className="flex items-center">
                        <p className="font-semibold">No blogs posted. {check && <Link className="underline font-light" to="/publish">Create one !</Link>}</p>
                      </div>

                    </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User