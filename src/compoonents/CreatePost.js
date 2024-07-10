import React from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";


const CreatePost = () => {
  return (
    <div className="w-[100%]">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200 ">
          <div className="cursor-pointer  hover:bg-gray-200 w-full text-center px-4 py-2">
            <h1 className="font-semibold text-gray-600 text-lg">For you</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-2 ">
            <h1 className="font-semibold text-gray-600 text-lg">Following</h1>
          </div>
        </div>
        {/* post bar and icon */}
        <div>
          <div className="flex items-center p-4">
            <Avatar
              size="40px"
              src="https://media-bom2-2.cdn.whatsapp.net/v/t61.24694-24/347079096_1331163274499131_7707905829610123584_n.jpg?stp=dst-jpg_s96x96&ccb=11-4&oh=01_Q5AaICJCYGWM5oAaH07DpHjQ4gOyhw4fNMug32FQENuTkFXk&oe=6698E6A5&_nc_sid=e6ed6c&_nc_cat=108"
              round={true}
            />

            <input className="w-full outline-none border-none text-lg ml-2" type="text" placeholder="What is hapenning?!"/>
          </div>
          {/* post button */}
          <div className="flex items-center  justify-between p-4  border-b border-gray-300">
            <div >
                <CiImageOn/>
            </div>
            <button className="bg-[#1D98F0] px-4 py-1 text-lg rounded-full text-white  border-none">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
