import React from "react";
import Header from "../../components/Header/Header";
import { useAuthContext } from "../../shared/contexts/AuthContext";

function Login() {
  const { login } = useAuthContext();

  const handleLogin = () => {
    login("admin@system.com", "bobo2010");
  };
  return (
    <div>
      {/* <Header /> */}
      {/* Login Card */}
      <div className="flex flex-col justify-center text-center  py-[48px] font-[400] text-[0.894rem]   w-[100%]  grow-1 shrink-1 basis-[auto]  items-center px-4">
        <div className="max-w-[380px] w-[100%] shadow-[0_10px_30px_0_rgba(24,28,33,0.4)] shadow-gray-200 ">
          {/* Header Card */}
          <div className="p-[24px] border-b-[1px] border-[#cfd3db] text-[#a3a4a6]">
            <div className="text-[1rem] font-[500]">Login to Your Account</div>
          </div>
          {/* Content Card */}

          <div className="flex flex-col  text-left px-[1.5rem] md:px-[3rem] pt-4 pb-5 text-[0.83125rem] font-[500] text-[inherit] mt-3">
            <div className="mb-[1rem]">
              <div className="mb-[0.438rem]">Email</div>
              <div>
                <input
                  className="outline-none border-[1px] border-[#999999] py-[0.438rem] px-[0.875rem] w-[100%] rounded-[0.25rem]"
                  type="text"
                />
              </div>
            </div>
            <div className="mb-[1rem]">
              <div className="flex w-full justify-between mb-[0.438rem]">
                <div>Password</div>
                <div className="text-[#1e70cd] cursor-pointer text-[85%]">
                  Forgot Password?
                </div>
              </div>
              <div>
                <input
                  className="outline-none border-[1px] border-[#999999] py-[0.438rem] px-[0.875rem] w-[100%] rounded-[0.25rem]"
                  type="password"
                />
              </div>
            </div>
            {/* Button */}
            <button
              className="mb-[1rem] mt-[1rem] bg-[#3c97fe] text-white text-[0.894rem] font-[500] rounded-[0.25rem] py-[0.438rem] px-[1.125rem]"
              onClick={handleLogin}
            >
              <div className=" cursor-pointer text-[85%]">Sign In</div>
            </button>
          </div>

          {/* Footer Card */}
          <div className="p-[24px] border-t-[1px] border-[#cfd3db] text-[#a3a4a6] flex justify-center space-x-2">
            <div className="text-[0.894rem] font-[400]">
              Don't have an account yet?
            </div>
            <a href="#" className="text-[0.894rem] font-[500] text-[#1e70cd]">
              Register
            </a>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Login;
