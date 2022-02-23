import React from "react";
import logo_small from "../../assets/images/logo_small.png";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock, faUserEdit } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      {/* Navbar */}
      <div className="flex justify-between py-[8px] px-[16px] border-b-[1px] border-[#cecfd3] items-center">
        {/* Mobile View -> Small Logo */}
        <div className="md:hidden">
          <img className=" h-[32px] w-[61px]" src={logo_small} />
        </div>
        {/* Regular Logo */}
        <div>
          <img className="hidden md:flex h-[44px] w-[193px]" src={logo} />
        </div>

        {/* Mobile View -> Menu Icon */}
        <div className="lg:hidden h-[33px] w-[39.38px] py-[8px] px-[11.2px] border-[1px] border-[#cecfd3]  rounded-[0.25rem]">
          <svg
            height="15"
            width="15"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke="rgba(24, 28, 33, 0.4)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-miterlimit="10"
              d="M4 7h22M4 15h22M4 23h22"
            />
          </svg>
        </div>

        {/* Menu Icon */}
        <div className="lg:flex hidden text-[14.304px] font-[roboto] text-[#a3a4a6] cursor-pointer space-x-[0.5rem]">
          <div className="flex space-x-[0.5rem]">
            <div className="font-black">
              <FontAwesomeIcon icon={faUserLock} />
            </div>
            <div>Login</div>
          </div>
          <div className="flex space-x-[0.5rem]">
            <div>
              <FontAwesomeIcon className="font-black" icon={faUserEdit} />
            </div>
            <div>Register</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
