import React from "react";
import logo from "../assets/superaser-illustrion-icon.png";
import IconGrid from "../icons/IconBxGridSmall";
import { IconBxsMoon, IconBxsSun } from "./IconsComponents";

const NavbarComponents = () => {
  return (
    <nav className="dark:bg-slate-800 bg-slate-200 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between">
          {/* LOGO */}
          <img src={logo} alt="" width="32px" height="32px" />

          {/* DARK MODE ICON */}
          <div>
            <IconBxsMoon className="dark:hidden  text-sky-900 rounded-md lg:hidden" width="32px" height="32px" />
            <IconBxsSun className="hidden dark:block text-sky-900 rounded-md lg:hidden" width="32px" height="32px" />
          </div>

          {/* MENU MOBILE */}
          <IconGrid className="text-white bg-sky-900 rounded-md lg:hidden" width="32px" height="32px" />
        </div>
        <ul className="hidden">
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
          <li>Project</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponents;
