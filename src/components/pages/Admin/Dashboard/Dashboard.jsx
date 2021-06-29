import React from "react";
import UsersList from "./../../../../assets/images/Dashboard/usersList.png";

export default function Dashboard() {
  return (
    <div className="bg-gray-200 w-full flex flex-col justify-center">
      <div className="flex flex-col lg:flex-row justify-around bg-gray-400">
        <div className="flex flex-col shadow-lg justify-center bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <div className="w-4/5 m-auto pt-2">
            <img src={UsersList} alt="users list" />
          </div>
          <div className="py-2">
            <button
              onClick={() => {
                alert("test");
              }}
              className="bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              See Users
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow-lg justify-center bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <div className="w-4/5 m-auto pt-2">
            <img src={UsersList} alt="users list" />
          </div>
          <div className="py-2">
            <button
              onClick={() => {
                alert("test");
              }}
              className="bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              See Users
            </button>
          </div>
        </div>
        <div className="flex flex-col shadow-lg justify-center bg-white w-auto lg:w-1/3 rounded-br-main rounded-tl-main border">
          <div className="w-4/5 m-auto pt-2">
            <img src={UsersList} alt="users list" />
          </div>
          <div className="py-2">
            <button
              onClick={() => {
                alert("test");
              }}
              className="bg-blue-200 w-1/3 m-auto rounded-lg shadow-md font-medium py-2 focus:outline-none hover:bg-blue-300"
            >
              See Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
