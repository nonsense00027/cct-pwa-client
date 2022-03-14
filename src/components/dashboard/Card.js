import React from "react";

function Card({ stat }) {
  return (
    <div className="flex rounded-md overflow-hidden w-full my-4 shadow-md">
      <div className="bg-blue-500 w-3/12 grid place-items-center">
        <stat.icon className="h-10 w-10 text-white" />
      </div>
      <div className="px-4 py-2 bg-white flex-1">
        <h2 className="font-bold text-2xl">{stat.count}</h2>
        <p>{stat.title}</p>
      </div>
    </div>
  );
}

export default Card;
