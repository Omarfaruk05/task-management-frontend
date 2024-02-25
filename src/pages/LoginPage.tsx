/* eslint-disable @typescript-eslint/no-explicit-any */
import { Label, TextInput } from "keep-react";
import backgroundImage from "../assets/loginbg.svg";
import { EyeSlash, Envelope, Lock } from "phosphor-react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUserInfo, storeUserInfo } from "../services/auth.service";
import { loginSuccess } from "../redux/slice/userSlice";
import { useUserLoginMutation } from "../redux/api/authApi";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useUserLoginMutation();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const userInfo = { email, password };
    console.log(userInfo);
    try {
      const res = await login(userInfo).unwrap();
      console.log(res);

      if (res?.errorMessages) {
        toast.error(`${res?.errorMessages}`);
      }

      if (res) {
        navigate("/");
        toast.success("Login Successfull.");
        await storeUserInfo({ accessToken: res?.accessToken });
      }

      const { id } = (await getUserInfo()) as any;

      if (id) {
        dispatch(loginSuccess());
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <div>
      <div className="flex ">
        <div className="m-4 w-[500px]">
          <h1 className="mt-40 md:mt-12 mb-4 font-bold text-center text-4xl text-green-800">
            Login
          </h1>
          <form onSubmit={handleLogin}>
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
                className="bg-green-300 w-full py-2 rounded-md font-semibold uppercase"
                type="submit"
                value="Login"
              />
            </div>
          </form>
        </div>
        <div
          style={{ backgroundImage: `url(${backgroundImage})` }}
          className="bg-cover bg-center hidden md:block h-screen w-screen"
        ></div>
      </div>
    </div>
  );
};

export default LoginPage;
