/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Label, TextInput } from "keep-react";
import backgroundImage from "../assets/signup.svg";
import { EyeSlash, Envelope, Lock, UserFocus } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { useUserSignUpMutation } from "../redux/api/authApi";
import { toast } from "react-toastify";

const SingUpPage = () => {
  const navigate = useNavigate();
  const [signup] = useUserSignUpMutation();
  const handleSignIn = async (e: any) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { name, email, password };

    try {
      const res = await signup(user).unwrap();
      if (res) {
        toast.success("Login Successfull.");
        navigate("/login");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="flex">
        <div className="m-4 w-[500px]">
          <h1 className="mt-40 md:mt-12 mb-4 font-bold text-center text-4xl text-green-800">
            Sign Up
          </h1>
          <form onSubmit={handleSignIn}>
            <div>
              <Label htmlFor="#id-9" value="Name" />
              <TextInput
                name="name"
                placeholder="Your Name"
                color="gray"
                sizing="md"
                type="text"
                addon={<UserFocus size={20} color="#5E718D" />}
                addonPosition="left"
                required
              />
            </div>
            <div>
              <Label htmlFor="#id-10" value="Email" />
              <TextInput
                name="email"
                placeholder="example@gmail.com"
                color="gray"
                sizing="md"
                type="email"
                addon={<Envelope size={20} color="#5E718D" />}
                addonPosition="left"
                iconPosition="right"
                required
              />
            </div>
            <div>
              <Label htmlFor="#id-11" value="Password" />
              <TextInput
                name="password"
                id="#id-10"
                placeholder="Password"
                color="gray"
                sizing="md"
                type="password"
                addon={<Lock size={20} color="#5E718D" />}
                addonPosition="left"
                icon={<EyeSlash size={20} color="#5E718D" />}
                iconPosition="right"
                required
              />
            </div>
            <div className="mt-4">
              <input
                className="cursor-pointer hover:bg-green-400 bg-green-300 w-full py-2 rounded-md font-semibold uppercase"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <small className="ml-2 text-sky-600 hover:underline">
            <Link to={"/login"}>Already have an account?</Link>
          </small>
        </div>
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="bg-cover bg-center hidden md:block h-screen w-screen"
        ></div>
      </div>
    </div>
  );
};

export default SingUpPage;
