import React from "react";

function SidebarItems(props) {
  return (
    <div className="flex items-center space-x-2 py-[10px] pl-[30px] text-[14px] cursor-pointer hover:bg-slate-300">
      {/* Logo */}
      <div>
        <img src={props.logo} className="h-[20px] w-[20px]" />
      </div>
      {/* Text */}
      <div>{props.text}</div>
    </div>
  );
}

export default SidebarItems;
