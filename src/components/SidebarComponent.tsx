/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Sidebar } from "keep-react";
import { Chat, UserCircle, SignIn, Users } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import {
  AUTH_KEY,
  getUserInfo,
  removeUserInfo,
} from "../services/auth.service";

export const SidebarComponent = () => {
  const navigate = useNavigate();

  const { role }: any = getUserInfo();

  const handleLogout = () => {
    removeUserInfo(AUTH_KEY);
    navigate("/login");
  };
  return (
    <div className="bg-gray-400">
      <Sidebar>
        <Sidebar.ItemGroup className="w-full min-w-fit md:w-40 lg:w-60">
          <Link to={"/my-profile"}>
            <Sidebar.Item icon={<UserCircle size={24} />}>Profile</Sidebar.Item>
          </Link>

          <Link to={"/task"}>
            {" "}
            <Sidebar.Item icon={<Chat size={24} />}>Tasks</Sidebar.Item>
          </Link>
          {role === "admin" && (
            <Sidebar.Item href="#" icon={<Users size={24} />}>
              Users
            </Sidebar.Item>
          )}
          <Sidebar.Item
            href=""
            onClick={handleLogout}
            icon={<SignIn size={24} />}
          >
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar>
    </div>
  );
};
