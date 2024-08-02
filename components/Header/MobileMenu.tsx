"use client"; // Required for client-side rendering

import React, { useState } from "react";
import { RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { pages } from "../../constants/list";

// images
import TopFrame from "../../public/images/top-frame.png";
import LogoMobile from "../../public/images/logo-mobile-menu.png";

// icons
import menuIcon from "../../public/icons/menuIcon.svg";
import closeIcon from "../../public/icons/closeIcon.svg";

import Image from "next/image";

// styles
const bgMenu =
  "absolute top-0 left-0 right-0 h-screen z-10 bg-black bg-opacity-60 backdrop-blur-sm";
const mobileMenu =
  "absolute top-0 right-0 z-10 w-[12em] sm:w-[16em] duration-700";
const closeIconStyle =
  "absolute top-[18px] right-[9.5em] sm:right-[13.5em] text-white";
const logoMobileStyle = "absolute right-4 top-6 sm:top-8";
const ulStyle =
  "text-right flex flex-col gap-y-2 min-h-[calc(100vh_-_70px)] sm:min-h-[calc(100vh_-_94px)] bg-white w-[12em] sm:w-[16em] px-4 py-2";
const liStyle =
  "flex items-center gap-x-2 text-[#353535] text-xs sm:text-sm border-b border-[#CBCBCB] pb-2";
const liActiveStyle = `${liStyle} !text-[#417F56] !font-semibold`;

const MobileMenu = () => {
  const [menu, setMenu] = useState<boolean>(true);
  const [plan, setPlan] = useState<string>("home");

  const openMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <>
      <div onClick={openMenu}>
        <Image src={menuIcon.src} alt="menu Icon" width={24} height={24} />
      </div>

      <div onClick={openMenu} className={menu ? "hidden" : bgMenu}></div>
      <div
        className={
          menu
            ? `${mobileMenu} translate-x-full`
            : `${mobileMenu} translate-x-0`
        }
      >
        <span>

        <Image src={TopFrame.src} alt="frame" width={192} height={70} />
        </span>
        <button onClick={openMenu} className={closeIconStyle}>
        <Image src={closeIcon.src} alt="close" width={24} height={24} color="#ffffff"/>
        </button>
        <span>
        <Image src={LogoMobile.src} alt="logo" width={67} height={30} className={logoMobileStyle} />

        </span>


        <RadioGroup value={plan} onChange={setPlan}>
          <ul className={ulStyle}>
            {pages.map((item) => (
              <li onClick={openMenu} key={item.id}>
                <Link
                  href={item.url}
                  className={
                    typeof window !== "undefined" && window.location.href === `${item.url}`
                      ? liActiveStyle
                      : liStyle
                  }
                >
                  <span>
                    <Image
                      src={item.icon} // Assuming item.icon is a string path
                      alt={item.type} // Use page type for alt text
                      width={24}
                      height={24}
                    />
                  </span>
                  <span>{item.type}</span>
                </Link>
              </li>
            ))}
          </ul>
        </RadioGroup>
      </div>
    </>
  );
};

export default MobileMenu;
