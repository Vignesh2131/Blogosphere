import { useEffect, useState } from "react"
import axios from "axios";
import { BACKEND_URL } from "../config";
export interface Blogs{
    "content": string;
    "title": string;
    "id": string;
    "publishedDate":string,
    "author": {
        "firstName": string,
        "id":string,
    }
}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true);
    const [allBlogs, setBlogs] = useState<Blogs[]>([]);
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
            headers: {
                Authorization:localStorage.getItem("token")
            }
        })
            .then((res) => {
                setBlogs(res.data.blogs);
                setName(res.data.name.firstName);
                setId(res.data.userId);
                setLoading(false);
        })
    }, [])

    return {loading, allBlogs,name,id}

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
    return { loading, blog,name };
}


export const useProfile = ({ id }: { id: string }) => {
    const [loading, setLoading] = useState(true);
    const [check, setCheck] = useState(true);
    const [profile, setProfileBlogs] = useState<Blogs[]>([]);
    useEffect(() => {
        axios.get(`${BACKEND_URL}/api/v1/blog/userProfile/${id}`, {
            headers: {
                Authorization:localStorage.getItem("token")
            }
        })
            .then((res) => {
                setProfileBlogs(res.data.blogs);
                setCheck(res.data.check)
                setLoading(false);
        })
    }, [id])
    return {loading,profile,check}
    
}

export const useDeleteBlog = ({id}:{id:string}) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios.delete(`${BACKEND_URL}/api/v1/blog/${id}`)
            .then(() => setLoading(false))
    }, [id]);
    return {loading}
}