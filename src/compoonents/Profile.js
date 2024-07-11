import React from "react";
import Avatar from "react-avatar";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="w-[50%] border-l border-r border-gray-200">
      <div>
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="rounded-full hover:bg-gray-100 p-2 hover:cursor-pointer"
          >
            <IoMdArrowBack size="24px" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Devesh</h1>
            <p className="text-sm text-gray-500">10 post</p>
          </div>
        </div>
        <img
          src="https://media.licdn.com/dms/image/D4D16AQGfw27cyBvrLg/profile-displaybackgroundimage-shrink_350_1400/0/1712063892755?e=1726099200&v=beta&t=FRx8GMhPU0aNYJXOUza8igY0nBLqWHmWwQU8M1LDKVY"
          alt=""
        />
        <div className="absolute top-40 ml-2 border-4 border-white rounded-full">
          <Avatar
            size="120px"
            src="https://media.licdn.com/dms/image/D4D03AQF5BE0qBPIQ_Q/profile-displayphoto-shrink_100_100/0/1706413343572?e=1726099200&v=beta&t=p5dAji2LPP44uVnuOkFwh46iWq4U6S0woM42W1foMQ4"
            round={true}
          />
        </div>
        <div className="text-right">
            <button className="px-4 py-1 rounded-full m-4 hover:bg-gray-200 border border-gray-400">Edit Profile</button>
        </div>

        <div className="m-4">
            <h1 className="font-bold text-2xl">DevZp</h1>
            <p>@Devmernstack</p>
        </div>

        <div className="m-4 text-sm">
            <p>Exploring the web's endless possibilities with mern stack</p>

        </div>
      </div>
    </div>
  );
};

export default Profile;
