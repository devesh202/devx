import React from "react";
import { IoIosHome } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { MdLogout } from "react-icons/md";



const LeftSidebar = () => {
  return (
    <div className="w-[20%] ml-[-5rem] mt-4">
      {/* X logo */}
      <div>
        <img
          className="ml-2"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-t39_XEag9DvX0LaoksfHutS7GHs078AMiA&s"
          width={"30px"}
          alt="twitter-logo"
        />
      </div>
      <div className="my-4">
        {/* home  and its icon*/}
        <div className="flex items-center my-2 py-2 px-4 hover:bg-gray-100 rounded-full hover:cursor-pointer">
          <IoIosHome size={"24px"} />
          <h1 className="font-bold text-lg ml-2">Home</h1>
        </div>
        <div className="flex items-center my-2 py-2 px-4 hover:bg-gray-100 rounded-full hover:cursor-pointer">
          <IoSearch size={"24px"} />
          <h1 className="font-bold text-lg ml-2">Explore</h1>
        </div>
        <div className="flex items-center my-2 py-2 px-4 hover:bg-gray-100 rounded-full hover:cursor-pointer">
          <IoMdNotificationsOutline size={"24px"} />
          <h1 className="font-bold text-lg ml-2">Notification</h1>
        </div>
        <div className="flex items-center my-2 py-2 px-4 hover:bg-gray-100 rounded-full hover:cursor-pointer">
          <CiUser size={"24px"} />
          <h1 className="font-bold text-lg ml-2">Profile</h1>
        </div>
        <div className="flex items-center my-2 py-2 px-4 hover:bg-gray-100 rounded-full hover:cursor-pointer">
          <CiBookmark size={"24px"} />
          <h1 className="font-bold text-lg ml-2">Bookmarks</h1>
        </div>
        <div className="flex items-center my-2 py-2 px-4 hover:bg-gray-100 rounded-full hover:cursor-pointer">
          <MdLogout size={"24px"} />
          <h1 className="font-bold text-lg ml-2">Logout</h1>
        </div>
        <button className="px-4 py-2 border-none text-md bg-[#1D98F0] w-full rounded-full text-white font-bold">
          Post
        </button>
      </div>
    </div>
  );
};

export default LeftSidebar;
