import React from "react";
import { UserCircleIcon } from "@heroicons/react/solid";

function MessageItem({ name, message, date }) {
  return (
    <div className="flex border-b my-1 rounded-sm overflow-hidden shadow-sm cursor-pointer">
      <div className="px-2 grid place-items-center bg-blue-500 w-2/12">
        <UserCircleIcon className="h-8 w-8 text-white" />
      </div>
      <div className="flex-1 py-3 px-2">
        <div className="flex justify-between">
          <h2 className="text-sm font-semibold">{name}</h2>
          <p className="text-xs opacity-70">{date}</p>
        </div>
        <p className="text-xs opacity-70">{message}</p>
      </div>
    </div>
  );
}

export default MessageItem;
