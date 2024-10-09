import { Link, useNavigate } from "react-router-dom";
import LabelledInput from "../components/LabelledInput";
import { useState } from "react";
import {SigninInput} from "@vignesh2131/medium-validation";
import Quote from "../components/Quote";
import { BACKEND_URL } from "../config";
import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [loginInputs, setLoginInputs] = useState<SigninInput>({
    email: "",
    password: "",
  });
  async function loginPost() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/signin`,
        loginInputs
      );
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Error while signing up");
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col lg:grid grid-cols-2">
      <div>
        <div className="h-screen flex flex-col justify-center w-full">
          <div className="flex justify-center">
            <div className="px-10">
              <div className="text-4xl font-bold">Let's write the blogs.</div>
              <div className="text-slate-400 text-center">
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
                  className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={loginPost}
                >
                  {" "}
                  Signin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="none lg:block">
        <Quote />
      </div>
    </div>
  );
};

export default Login;
