import React from "react";
import logo from "../assets/superaser-logo.png";
import { IconBxHome, IconBxMenu } from "./IconsComponents";

const NavbarComponents = () => {
  return (
    <nav className="p-4 dark:bg-slate-800 bg-gray-50 font-poppins">
      <div className="container mx-auto ">
        <div className="flex justify-between">
          {/* LOGO */}
          <img src={logo} alt="" width="32px" height="32px" />

          {/* MENU MOBILE */}
          <IconBxMenu className="text-white rounded-md bg-sky-700 lg:hidden" width="32px" height="32px" />
        </div>
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border">
          <ul className="flex justify-between">
            <li>
              <a href="" className="flex flex-col items-center justify-center gap-1">
                <IconBxHome />
                <span className="text-sm font-normal">Home</span>
              </a>
            </li>
            <li>About</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponents;
