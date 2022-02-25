import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="flex flex-col justify-center text-center bg-[#2f3337] text-[#9d9fa1] pt-[1.5rem] font-[400] text-[0.894rem]  w-[100%] ">
      <div>4533 MacArthur Blvd., Newport Beach, CA 92660</div>
      <div>Phone : 888-635-0552</div>
      <div>Email : info@conductclinicaltrials.com</div>
      <div className="flex justify-center p-[16px] space-x-2">
        <a href="">
          <SocialIcon url="https://www.facebook.com/" />
        </a>
        <a href="">
          <SocialIcon url="https://www.twitter.com/" />
        </a>
        <a href="">
          <SocialIcon url="https://www.youtube.com/" />
        </a>
      </div>
      <div className="p-[24px]">
        The Conduct Clinical Trials Portal® supports: Mozilla Firefox 29+,
        Chrome 34+, and any other modern web browser compatible with HTML5 and
        CSS3.
      </div>
      <div className="p-[24px]">
        © Conduct Clinical Trials 2022. All Rights Reserved.
        <a href="">Privacy Policy</a>
      </div>
    </div>
  );
}

export default Footer;
