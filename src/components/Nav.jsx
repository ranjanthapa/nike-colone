import { headerLogo } from "./../assets/images";
import { hamburger } from "../assets/icons";
// import MenuItem from "./MenuItem";
import { navLinks } from "../constants";

import { useState } from "react";
import { MdOutlineClose } from "react-icons/md"; // Uncomment this import to use the close icon

const Nav = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!isOpenMenu);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="" width={130} height={29} />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal-text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="hidden max-lg:block cursor-pointer"
          onClick={toggleMenu}
        >
          <img
            src={hamburger}
            alt=""
            className={`h-[25px] w-[25px] ${isOpenMenu && "hidden"}`}
          />
        </div>
        {isOpenMenu && (
          <div
            className={`fixed lg:hidden xl:hidden top-0 h-screen w-[50%] shadow-2xl px-10 py-10 text-white bg-slate-200 transition-all duration-5000 ease-in-out ${
              isOpenMenu ? "right-0" : "right-[-100%]"
            }`}
          >
            <MdOutlineClose
              size={25}
              className="absolute right-10 text-slate-gray"
              onClick={toggleMenu}
            />
            <ul className="flex-col space-y-5  justify-center h-full text-white">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="font-montserrat leading-semi-bold-text-lg text-slate-gray font-semibold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
