import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import {
  TemplateIcon,
  BriefcaseIcon,
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
import { useAuthContext } from "../../shared/contexts/AuthContext";

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
  const { user, logout } = useAuthContext();
  const [showOption, setShowOption] = useState(false);

  const checkActive = ({ isActive }) => {
    return isActive
      ? "flex items-center gap-3 hover:bg-gray-100 py-2 px-2 bg-red-400"
      : "flex items-center gap-3 hover:bg-gray-100 py-2 px-2";
  };

  const handleLogout = () => {
    logout();
    setShowOption(false);
    closeSidebar();
  };

  return (
    <div
      className={`font-primary w-10/12 md:w-[336px] h-screen fixed bg-white flex flex-col z-50 transform transition-all duration-200 ease-out ${
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
      <div className="flex-1 pt-10">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            exact={link.path !== "/trials" ? true : false}
            className="flex text-sm items-center gap-3 hover:bg-gray-100 py-3 px-4 border-l-4 border-transparent"
            activeClassName="bg-secondary bg-opacity-20 border-l-4 !border-secondary"
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
            <UserCircleIcon className="h-7 w-7 text-secondary" />
            {/* Text */}
            <div className="font-semibold text-sm">
              {user?.data.profile.first_name} {user?.data.profile.last_name}
            </div>
          </div>

          {/* Right  */}

          <div className="flex pr-[20px] space-x-1 relative">
            {/* Setting Logo */}
            <CogIcon className="h-5 w-5" />
            <DotsVerticalIcon
              className="h-5 w-5 cursor-pointer"
              onClick={() => setShowOption((prev) => !prev)}
            />
            {showOption && (
              <div className="absolute -top-10 right-6 border w-20">
                <button className="w-full py-1" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
