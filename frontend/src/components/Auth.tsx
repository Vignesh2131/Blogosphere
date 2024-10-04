import { Link } from "react-router-dom";
import LabelledInput from "./LabelledInput";
import Button from "./Button";
import { useState } from "react";
import { SignupInput } from "@vignesh2131/medium-common";
import { SigninInput } from "@vignesh2131/medium-common";

const Auth = ({type}:{type:"signup"|"signin"}) => {
    const [registerInputs,setRegisterInputs] = useState<SignupInput>({
        firstName: "",
        lastName: "",
        email: "",
        password:"",
    })
  return (
    <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <div className="px-10">
          <div className="text-4xl font-bold">Create an account</div>
          <div className="text-slate-400 text-center">
            {type === "signup" ? "Already have an account? " : "New user? "}
            <Link className="underline" to={type==='signup'?"/login":"/signup"}>
                {type==='signup'?"Login":"Signup"}
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
            <Button
              label="Sign up"
              onSubmit={(e) => {
                console.log("bt");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth