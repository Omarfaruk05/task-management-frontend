/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Label, Spinner, TextInput } from "keep-react";
import backgroundImage from "../assets/loginbg.svg";
import { EyeSlash, Envelope, Lock } from "phosphor-react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo, storeUserInfo } from "../services/auth.service";
import { loginSuccess } from "../redux/slice/userSlice";
import { useUserLoginMutation } from "../redux/api/authApi";
import { useState } from "react";
import { Key } from "phosphor-react";

const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useUserLoginMutation();

  const handleLogin = async (e: any) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const userInfo = { email, password };
    try {
      setLoading(true);
      const res = await login(userInfo).unwrap();
      console.log(res);

      if (!res?.success) {
        toast.error(`${res?.message}`);
        setLoading(false);
      }
      if (res?.success) {
        setLoading(false);
        navigate("/");
        toast.success("Login Successfull.");
        await storeUserInfo({ accessToken: res?.data?.accessToken });
      }

      const { id } = (await getUserInfo()) as any;

      if (id) {
        dispatch(loginSuccess());
      }
    } catch (error: any) {
      toast.error(error?.data?.message);
      setLoading(false);
    }
  };

  const handleCredentials = (pass: string, email: string) => {
    setPassword(pass);
    setEmail(email);
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
                value={email}
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
                value={password}
              />
            </div>
            <div className="mt-4">
              {!loading ? (
                <div>
                  <input
                    className="text-center cursor-pointer hover:bg-green-400 bg-green-300 w-full py-2 rounded-md font-semibold uppercase"
                    type="submit"
                    value="Login"
                  />
                </div>
              ) : (
                <div className="text-center cursor-pointer hover:bg-green-400 bg-green-300 w-full py-2 rounded-md font-semibold uppercase">
                  <Spinner color="info" size="md" />
                </div>
              )}
            </div>
          </form>
          <small className="ml-2 text-sky-600 hover:underline">
            <Link to={"/signup"}>Create a new account?</Link>
          </small>
          <div className="my-8">
            <h3 className="flex gap-3  justify-center py-2 text-center mb-4 text-green-900 bg-gray-50 rounded-md">
              <span> Credentials icon</span>
              <span>{<Key size={24} />}</span>
            </h3>
            <div className="flex gap-2 flex-wrap justify-center">
              <Button
                size={"xs"}
                onClick={() =>
                  handleCredentials("123456", "shariful@gmail.com")
                }
                type="dashed"
              >
                User
              </Button>
              <Button
                size={"xs"}
                onClick={() =>
                  handleCredentials("123456", "omarfaruk@gmail.com")
                }
                type="dashed"
              >
                Admin{" "}
              </Button>
            </div>
          </div>
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
