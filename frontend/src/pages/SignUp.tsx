import { Link, useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import LabelledInput from "../components/LabelledInput";
import { useState } from "react";
import { SignupInput } from "@vignesh2131/medium-validation";
import Quote from "../components/Quote";
import axios from "axios";
const SignUp = () => {
  const navigate = useNavigate();
  const [registerInputs, setRegisterInputs] = useState<SignupInput>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
 async function signUpRequest(){
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,registerInputs);
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    } catch (error) {
      alert("Error while signing up")
    }
  }
  return (
    <div className="flex flex-col lg:grid grid-cols-2">
      <div className="hidden lg:block">
        <Quote />
      </div>
      <div>
        <div className="h-screen flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="px-10">
              <div className="text-4xl font-bold">Create an account</div>
              <div className="text-slate-400 text-center">
                Already have an account?{" "}
                <Link className="underline" to="/login">
                  Login
                </Link>
              </div>
              <div className="py-3">
                <LabelledInput
                  label="Firstname"
                  placeholder="Enter your first name"
                  onChange={(e) => {
                    setRegisterInputs((prev) => ({
                      ...prev,
                      firstName: e.target.value,
                    }));
                  }}
                  value={registerInputs.firstName}
                  fieldType="text"
                />

                <LabelledInput
                  label="Lastname"
                  placeholder="Enter your last name"
                  onChange={(e) => {
                    setRegisterInputs((prev) => ({
                      ...prev,
                      lastName: e.target.value,
                    }));
                  }}
                  value={registerInputs.lastName}
                  fieldType="text"
                />
                <LabelledInput
                  label="Email"
                  placeholder="Enter your email"
                  onChange={(e) => {
                    setRegisterInputs((prev) => ({
                      ...prev,
                      email: e.target.value,
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
                      password: e.target.value,
                    }));
                  }}
                  value={registerInputs.password}
                  fieldType="password"
                />
                <button
                  className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  onClick={signUpRequest}
                > Signup
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
