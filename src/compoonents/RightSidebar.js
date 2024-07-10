import React from "react";
import { CiSearch } from "react-icons/ci";

const RightSidebar = () => {
  return (
    <div className="w-[20%]">
      {/* search bar  */}
      <div className="flex items-center p-2 bg-gray-100 rounded-full">
        <CiSearch size="20px"/>
        <input
          type="text"
          className="outline-none bg-transparent px-2"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default RightSidebar;
