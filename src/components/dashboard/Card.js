import React from "react";

function Card({ stat, title, icon, count }) {
  console.log(title);
  console.log(count);
  return (
    <div className="flex rounded-md overflow-hidden w-full my-4 shadow-md">
      <div className="bg-blue-500 w-3/12 grid place-items-center">
        <stat.icon className="h-8 w-8 text-white" />
      </div>
      <div className="font-primary px-4 py-2 bg-white flex-1">
        <h2 className="font-bold text-2xl">{count}</h2>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
