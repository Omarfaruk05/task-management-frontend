/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Navbar, Spinner } from "keep-react";
import { Link } from "react-router-dom";
import { getUserInfo } from "../services/auth.service";
import { useGetMyProfileQuery } from "../redux/api/userApi";

const Nav = () => {
  const { email }: any = getUserInfo();
  const { data } = useGetMyProfileQuery(undefined);
  const user = data?.data;
  return (
    <div className="">
      <div className="max-w-7xl mx-auto lg:py-3">
        <Navbar fluid={true}>
          <Navbar.Container className="flex items-center justify-between">
            <Navbar.Container className="flex items-center">
              <Link to={"/"} className="text-3xl font-semibold">
                Task
              </Link>
            </Navbar.Container>
            <Navbar.Container className="flex gap-2 items-center">
              {email ? (
                <div className="flex items-center gap-1">
                  <span>
                    <Avatar shape="circle" />
                  </span>
                  <span className="font-semibold">
                    {user ? user?.name : <Spinner color="info" size="md" />}
                  </span>
                </div>
              ) : (
                <>
                  <Link to={"signup"}>
                    <Button className="px-1" size={"xxs"} type={"dashed"}>
                      Sign Up
                    </Button>
                  </Link>
                  <Link to={"/login"}>
                    <Button className="px-1" size={"xxs"} type={"dashed"}>
                      Login
                    </Button>
                  </Link>{" "}
                </>
              )}
            </Navbar.Container>
          </Navbar.Container>
        </Navbar>
      </div>
      <hr />
    </div>
  );
};

export default Nav;
