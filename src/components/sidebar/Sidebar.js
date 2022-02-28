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
import { Link } from "react-router-dom";

function Sidebar(props) {
  return (
    <div className="w-10/12 md:w-[336px] h-screen bg-white shadow-lg absolute md:flex md:flex-col z-50">
      <div className="flex flex-col justify-between h-full">
        {/* Header */}
        <div className=" flex justify-center pt-[100px]">
          {/* Logo */}
          <div>
            <img className="h-[41px]" src={logo} />
          </div>

          {/* X button */}
          <div className="">
            {/* Mobile View -> Menu Icon */}
            <div
              className={`transform hover:scale-105 cursor-pointer absolute right-[8px] h-[33px] w-[39.38px] py-[8px] px-[11.2px] border-[1px] border-[#cecfd3]  rounded-[0.25rem] top-[8px]`}
              onClick={() => {
                props.setShowSidebar(!props.showSidebar);
              }}
            >
              <svg
                height="15"
                width="15"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="">
          <a
            href="/"
            onClick={() => {
              props.setShowSidebar(!props.showSidebar);
            }}
          >
            <SidebarItems logo={dashboard} text={"Dashboard"} href="/" />
          </a>
          <SidebarItems
            logo={stethoscope}
            text={"Specializations"}
            href="/specializations"
          />
          <SidebarItems logo={hospital} text={"Clinics"} href="/clinics" />
          <SidebarItems logo={user} text={"Users"} href="/users" />
          <SidebarItems
            logo={avatar}
            text={"Sales Representatives"}
            href="/sales"
          />
          <a
            href="/trials"
            onClick={() => {
              props.setShowSidebar(!props.showSidebar);
            }}
          >
            <SidebarItems logo={file} text={"Trials"} href="/trials" />
          </a>
        </div>

        {/* Footer */}
        <div className="items-end pb-[20px]">
          <div className="flex items-center justify-between space-x-2 py-[10px] pl-[20px] text-[14px] bottom-[40px]">
            {/* Left */}
            <div className="flex space-x-2 cursor-pointer transform hover:scale-105">
              {/* Logo */}
              <div>
                <img src={account} className="h-[25px] w-[25px]" />
              </div>
              {/* Text */}
              <div>System Admin</div>
            </div>
            {/* Right  */}

            <div className="flex pr-[20px] space-x-2 ">
              {/* Setting Logo */}
              <img
                src={cog}
                className="h-[15px] w-[15px] cursor-pointer transform hover:scale-125"
              />
              <img
                src={verticalEllipsis}
                className="h-[15px] w-[15px] cursor-pointer transform hover:scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
