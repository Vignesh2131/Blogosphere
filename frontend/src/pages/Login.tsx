import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LabelledInput from "../components/LabelledInput";
import Toaster from "../components/Toaster";
import Spinner from "../components/Spinner";
import { useState } from "react";
import {SigninInput} from "@vignesh2131/medium-validation";
import Quote from "../components/Quote";
import { BACKEND_URL } from "../config";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const[loading,setLoading]=useState(false);
  const [loginInputs, setLoginInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  const notify = (message:string) => toast(message);
  async function loginPost() {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        loginInputs
      );
      const jwt = response.data.token;
      if(!(jwt === undefined)) {
        localStorage.setItem("token", jwt);
        navigate("/");
      }
      notify(response.data.message); 
      setLoading(false);
    } catch (err) {
       if (axios.isAxiosError(err)) {
         const message =
          err.response?.data?.error || "An error occurred";
         notify(`${message}`);
         setLoading(false);
       } else {
         notify("An unexpected error occurred");
       }
     setLoading(false);
    }
  }
  return (
    <div className="flex flex-col lg:grid grid-cols-2">
      <div>
        <div className="h-screen flex flex-col justify-center w-full">
          <Toaster/>
          <div className="flex justify-center">
            <div className="px-10">
              <div className="text-2xl md:text-4xl font-bold">
                Let's write the blogs.
              </div>
              <div className="text-xs text-slate-400 text-center md:text-base">
                New user?{" "}
                <Link className="underline" to="/signup">
                  Signup
                </Link>
              </div>
              <div className="py-3">
                <LabelledInput
                  label="Email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setLoginInputs((prev) => ({
                      ...prev,
                      email: (e.target as HTMLInputElement).value,
                    }));
                  }}
                  value={loginInputs.email}
                  fieldType="text"
                />
                <LabelledInput
                  label="Password"
                  placeholder="Min len 6 characters"
                  onChange={(e) => {
                    setLoginInputs((prev) => ({
                      ...prev,
                      password: (e.target as HTMLInputElement).value,
                    }));
                  }}
                  value={loginInputs.password}
                  fieldType="password"
                />
                <button
                  className="w-full flex flex-col justify-center items-center mt-4 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 md:text-base"
                  onClick={loginPost}
                >
                  {loading?<Spinner/>:"Login"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Quote
          quote="The first thing you need to decide when you build your blog is what you want to accomplish with it, and what it can do if successful"
          name="Ron Dawson"
        />
      </div>
    </div>
  );
};

export default Login;
