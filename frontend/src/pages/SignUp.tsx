import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BACKEND_URL } from "../config";
import LabelledInput from "../components/LabelledInput";
import Toaster from "../components/Toaster";
import Spinner from "../components/Spinner";
import { useState } from "react";
import { SignupInput } from "@vignesh2131/medium-validation";
import Quote from "../components/Quote";
import axios from "axios";
const SignUp = () => {
  const notify = (message: string) => toast(message);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [registerInputs, setRegisterInputs] = useState<SignupInput>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  async function signUpRequest() {
   setLoading(true);
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,registerInputs);
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/");
    } catch (err) {
       if (axios.isAxiosError(err)) {
         const message =
           err.response?.data?.error.path[0] || "An error occurred";
         notify(`Invalid ${message}`);
         setLoading(false);
       } else {
         notify("An unexpected error occurred");
       }
    }
  }
  return (
    <div>
      <Toaster />
      <div className="flex flex-col lg:grid grid-cols-2">
        <div className="hidden lg:block">
          <Quote
            quote="If you want to continually grow your blog, you need to learn to blog on a consistent basis"
            name="Neil Patel"
          />
        </div>
        <div>
          <div className="h-screen flex flex-col justify-center">
            <div className="flex justify-center">
              <div className="px-10">
                <div className="flex justify-center mb-4 font-bold items-center md:text-xl">
                  <img
                    src="./logo.png"
                    alt=""
                    className="h-6 w-6 md:h-8 md:w-8"
                  />
                  logosphere
                </div>
                <div className="text-2xl md:text-4xl font-bold">
                  Create an account
                </div>
                <div className="text-xs text-slate-400 text-center md:text-base">
                  Already have an account?{" "}
                  <Link className="underline" to="/login">
                    Login
                  </Link>
                </div>
                <div className="py-3">
                  <LabelledInput
                    label="Name"
                    placeholder="Enter your name (Optional)"
                    onChange={(e) => {
                      setRegisterInputs((prev) => ({
                        ...prev,
                        firstName: (e.target as HTMLInputElement).value,
                      }));
                    }}
                    value={registerInputs.firstName}
                    fieldType="text"
                  />
                  <LabelledInput
                    label="Email"
                    placeholder="Enter your email"
                    onChange={(e) => {
                      setRegisterInputs((prev) => ({
                        ...prev,
                        email: (e.target as HTMLInputElement).value,
                      }));
                    }}
                    value={registerInputs.email}
                    fieldType="text"
                  />
                  <LabelledInput
                    label="Password"
                    placeholder="Min len 6 characters"
                    onChange={(e) => {
                      setRegisterInputs((prev) => ({
                        ...prev,
                        password: (e.target as HTMLInputElement).value,
                      }));
                    }}
                    value={registerInputs.password}
                    fieldType="password"
                  />
                  <button
                    className="mt-4 w-full flex flex-col items-center text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 md:text-base"
                    onClick={signUpRequest}
                  >
                    {loading ? <Spinner /> : "Sign Up"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
