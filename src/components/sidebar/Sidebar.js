import React from "react";
import logo from "../../assets/images/logo.png";
import SidebarItems from "./SidebarItems";
import dashboard from "../../assets/images/dashboard.png";
import hospital from "../../assets/images/hospital.png";
import stethoscope from "../../assets/images/stethoscope.png";
import user from "../../assets/images/user.png";
import avatar from "../../assets/images/avatar.png";
import file from "../../assets/images/file.png";
import account from "../../assets/images/account.png";
import dropdownarrow from "../../assets/images/drop-down-arrow.png";
import cog from "../../assets/images/cog.png";
import verticalEllipsis from "../../assets/images/vertical-ellipsis.png";
import { NavLink } from "react-router-dom";
import {
  TemplateIcon,
  BriefcaseIcon,
  OfficeBuildingIcon,
  XIcon,
  CogIcon,
  DotsVerticalIcon,
  ChatIcon,
  PresentationChartLineIcon,
  BadgeCheckIcon,
  BellIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import { useAppContext } from "../../contexts/AppContext";

const links = [
  { name: "Dashboard", path: "/", icon: TemplateIcon },
  { name: "Trials", path: "/trials", icon: BriefcaseIcon },
  { name: "My Applications", path: "/applications", icon: ClipboardCheckIcon },
  { name: "Messages", path: "/messages", icon: ChatIcon },
  {
    name: "Financial Records",
    path: "/financial",
    icon: PresentationChartLineIcon,
  },
  { name: "Subscription", path: "/subscription", icon: BadgeCheckIcon },
  { name: "Notifications", path: "/notifications", icon: BellIcon },
];

function Sidebar(props) {
  const { showSidebar, closeSidebar } = useAppContext();

  const checkActive = ({ isActive }) => {
    return isActive
      ? "flex items-center gap-3 hover:bg-gray-100 py-2 px-2 bg-red-400"
      : "flex items-center gap-3 hover:bg-gray-100 py-2 px-2";
  };

  return (
    <div
      className={`w-10/12 md:w-[336px] h-screen fixed bg-white flex flex-col px-2 z-50 transform transition-all duration-200 ease-out ${
        showSidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Header */}
      <div>
        <XIcon
          className="h-5 w-5 float-right mt-4 mb-4 mr-2"
          onClick={closeSidebar}
        />
      </div>
      <div className=" flex justify-center">
        {/* Logo */}
        <div>
          <img className="h-8" src={logo} />
        </div>
        {/* X button */}
      </div>

      {/* Body */}
      <div className="px-4 flex-1 pt-10">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            exact
            className="flex items-center gap-3 hover:bg-gray-100 py-2 px-2"
            activeStyle={{ backgroundColor: "#eeeeee" }}
            onClick={closeSidebar}
          >
            {<link.icon className="h-4 w-4" />}
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Footer */}
      <div className="items-end pb-[20px]">
        <div className="flex items-center justify-between space-x-2 py-[10px] pl-[20px] text-[14px] bottom-[40px]">
          {/* Left */}
          <div className="flex items-center space-x-2 cursor-pointer transform hover:scale-105">
            {/* Logo */}
            <UserCircleIcon className="h-6 w-6" />
            {/* Text */}
            <div>System Admin</div>
          </div>

          {/* Right  */}

          <div className="flex pr-[20px] space-x-1 ">
            {/* Setting Logo */}
            <CogIcon className="h-5 w-5" />
            <DotsVerticalIcon className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
