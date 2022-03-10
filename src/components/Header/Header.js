import React, { useContext, useEffect, useState } from "react";
import logo_small from "../../assets/images/logo_small.png";
import logo from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../shared/contexts/AuthContext";

function Header(props) {
  const { user } = useAuthContext();
  const [showMenu, setShowMenu] = useState(true);
  let winPath = window.location.pathname;

  const getNamePage = () => {
    if (user) {
      switch (winPath) {
        case "/trials":
          return "Trials";
        case "/clinic":
          return "Clinic";
        case "/":
          return "Dashboard";
      }
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div
        className={`flex flex-col  py-[8px] px-[16px]   ${
          !user &&
          " border-b-[1px] border-[#cecfd3] md:flex-row md:justify-between md:items-center"
        } ${user && " pl-[36px] pt-[61px]"}`}
      >
        {/* Mobile View -> Small Logo */}
        {!user && (
          <div className="md:hidden">
            <img className=" h-[32px] w-[61px]" src={logo_small} />
          </div>
        )}
        {/* Regular Logo */}
        {!user && (
          <div>
            <img className="hidden md:flex h-[44px] w-[193px]" src={logo} />
          </div>
        )}
        {/* Mobile View -> Menu Icon */}
        <div
          className={`absolute right-[8px] h-[33px] w-[39.38px] py-[8px] px-[11.2px] border-[1px] border-[#cecfd3]  rounded-[0.25rem] transform hover:scale-105 cursor-pointer ${
            user && " left-[8px]"
          } ${!user && " md:hidden"}`}
          onClick={() => {
            if (!user) {
              setShowMenu(!showMenu);
            }
            if (user) {
              props.setShowSidebar(!props.showSidebar);
            }
          }}
        >
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

        {user && (
          <div className="flex justify-center items-center text-[20px] font-semibold">
            {getNamePage()}
          </div>
        )}

        {/* Menu Items */}
        {showMenu && !user && (
          <div className="pt-8 md:pt-0 flex flex-col md:flex-row text-[14.304px] font-[roboto] text-[#a3a4a6] cursor-pointer md:space-x-[0.5rem] space-y-[1rem] md:space-y-[0rem]">
            <div className="flex space-x-[0.5rem] items-center">
              <div className="font-black text-[130%]">
                <FontAwesomeIcon icon={faUserLock} />
              </div>
              <div className="text-[0.894rem]">Login</div>
            </div>
            <div className="flex space-x-[0.5rem] items-center">
              <div className="font-black text-[130%]">
                <FontAwesomeIcon icon={faUserEdit} />
              </div>
              <div className="text-[0.894rem]">Register</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
