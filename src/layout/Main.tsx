/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { SidebarComponent } from "../components/SidebarComponent";

const Main = () => {
  return (
    <div>
      <Nav />
      <div className="flex gap-2">
        <div>
          <SidebarComponent />
        </div>
        <div className="bg-gray-100 h-screen p-3 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Main;
