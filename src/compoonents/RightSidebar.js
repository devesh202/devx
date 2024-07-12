import React from "react";
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";

const RightSidebar = () => {
  return (
    <div className="w-[25%]">
      {/* search bar  */}
      <div className="flex items-center p-2 bg-gray-100 rounded-full outline-none my-4">
        <CiSearch size="20px" />
        <input
          type="text"
          className="outline-none bg-transparent px-2"
          placeholder="Search"
        />
      </div>
      {/* who to follow */}
      <div className="p-4  bg-gray-100 rounded-2xl my-4">
        <h1 className="font-bold text-lg">Who to Follow</h1>
        <div className="flex items-center justify-between my-3">
          <div>
            <div className="flex">
              <Avatar
                size="40px"
                src="https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/347079096_1331163274499131_7707905829610123584_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaICJCYGWM5oAaH07DpHjQ4gOyhw4fNMug32FQENuTkFXk&oe=6698E6A5&_nc_sid=e6ed6c&_nc_cat=108"
                round={true}
              />

              <div className="ml-2">
                <h1 className="font-bold">Dev</h1>
                <p className="text-sm">Developers</p>
              </div>
            </div>
          </div>
          <div>
            <button className="px-4 py-1 ml-16 bg-black text-white rounded-full">
              Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
