import React from "react";
import LeftSidebar from "./LeftSidebar";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex justify-between w-[80%] mx-auto gap-5">
      <LeftSidebar />
      {/* changing section */}
      <Outlet/>
      <RightSidebar/>
    </div>
  );
};

export default Home;
