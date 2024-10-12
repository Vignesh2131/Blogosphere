import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
export interface Blogs{
    "content": string;
    "title": string;
    "id": string;
    "author": {
        "firstName": string,
        "id":string,
    }
}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [allBlogs, setBlogs] = useState<Blogs[]>([]);
    const [name, setName] = useState("");
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization:localStorage.getItem("token")
            }
        })
            .then((res) => {
                setBlogs(res.data.blogs);
                setName(res.data.name.firstName);
                setLoading(false);
        })
    }, [])

    return {loading, allBlogs,name}

}

export const useBlog = ({id}:{id:string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blogs>();
    useEffect(() => {
      axios
        .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setBlog(res.data);
          setLoading(false);
        });
    }, [id]);
    return { loading, blog };
}


export const useProfile = () => {
    const [loading, setLoading] = useState(true);
    const [profile, setProfileBlogs] = useState<Blogs[]>([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/userProfile`, {
            headers: {
                Authorization:localStorage.getItem("token")
            }
        })
            .then((res) => {
                setProfileBlogs(res.data.blogs);
                setLoading(false);
        })
    }, [])
    return {loading,profile}
    
}

export const useDeleteBlog = ({id}:{id:string}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`)
            .then(() => setLoading(false))
    }, [id]);
    return {loading}
}