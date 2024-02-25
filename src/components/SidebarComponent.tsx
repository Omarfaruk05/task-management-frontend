"use client";
import { Sidebar } from "keep-react";
import { Chat, UserCircle, SignIn, Users } from "phosphor-react";

export const SidebarComponent = () => {
  return (
    <div className="bg-gray-400">
      <Sidebar>
        <Sidebar.ItemGroup className="w-full min-w-fit md:w-40 lg:w-60">
          <Sidebar.Item icon={<UserCircle size={24} />}>Profile</Sidebar.Item>

          <Sidebar.Item href="/task" icon={<Chat size={24} />}>
            Tasks
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<Users size={24} />}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={<SignIn size={24} />}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar>
    </div>
  );
};
