import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa6";
import { VscHeart } from "react-icons/vsc";
import { CiBookmark, CiHeart } from "react-icons/ci";

const Tweet = () => {
  return (
    <div className="border-b border-gray-200">
      {/* avatar
        name
        username */}
      <div className="p-4">
        <div className="flex">
          <Avatar
            size="40px"
            src="https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/347079096_1331163274499131_7707905829610123584_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaICJCYGWM5oAaH07DpHjQ4gOyhw4fNMug32FQENuTkFXk&oe=6698E6A5&_nc_sid=e6ed6c&_nc_cat=108"
            round={true}
          />
          <div className="ml-2 w-full">
            <div className="flex items-center ">
              <h1 className="font-bold">Devesh</h1>
              <p className="text-sm text-gray-500 ml-1">@Dev202 . 1m</p>
            </div>
            <div>
              <p>Hello Developers lets connect and grow together. </p>
            </div>
            {/* comment like bookmark  */}
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <FaRegComment size="20px" />
                </div>

                <p className="ml-1">0</p>
              </div>

              <div className="flex items-center">
                <div className="p-2 hover:bg-red-200 rounded-full cursor-pointer">
                  <CiHeart size="20px" />
                </div>

                <p className="ml-1">0</p>
              </div>

              <div className="flex items-center">
                <div className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                  <CiBookmark size="20px" />
                </div>

                <p className="ml-1">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
