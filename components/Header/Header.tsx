"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { pages } from "../../constants/list";
import { headerButtonURLs } from "../../constants/URLs";
import Logo from "../../public/icons/Logo.svg";
import logomob from "../../public/icons/Logo-mob.svg";
import Search from "../../public/icons/Search.svg";
import CartIcon from "../../public/icons/CartIcon.svg";
import cartIconDesktop from "../../public/icons/cartIconDesktop.svg";
import UserIcon from "../../public/icons/UserIcon.svg";
import userIconDesktop from "../../public/icons/userIconDesktop.svg";
import MobileMenu from "./MobileMenu";
import { SignUp } from "../Auth/Signup";

const liStyle =
  "text-[#717171] text-sm lg:text-lg border-b border-[#ffffff00] py-1 duration-500";
const liActiveStyle = `${liStyle} !text-[#417F56] !border-[#417F56] font-bold`;
const linkBoxItemStyle =
  "p-[0.25em] bg-[#E5F2E9] text-[#417F56] rounded md:rounded-md scale-[1.2] md:scale-100 relative duration-300";
const linkBoxItemActiveStyle = `${linkBoxItemStyle} !bg-[#417F56] !text-white`;

const Header = () => {
  const pathname = usePathname();
  // const cartState = useSelector((state: RootState) => state.cart);
  // const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="sticky top-0 z-10 bg-white shadow-md">
      <header className="container max-w-[1224px] mx-auto flex justify-between items-center h-[4em] md:h-[7.188em] px-[1.25em]">
        <div className="md:hidden">
          <MobileMenu />
        </div>

        <div>
          <span className="md:hidden">
            <Image src={logomob.src} width={102} height={32} alt="Logo" />
          </span>
          <span className="hidden md:block md:scale-[.8] lg:scale-100">
            <Image src={Logo.src} width={155} height={51} alt="Logo" />
          </span>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center md:gap-x-5 lg:gap-x-6">
            {pages.map((item) => (
              <li
                key={item.id}
                className={pathname === `/${item.url}` ? liActiveStyle : liStyle}
              >
                <Link href={`/${item.url}`}>{item.type}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-x-2.5 md:gap-x-[0.5em] justify-end">
          <button className={`${linkBoxItemStyle} hidden md:block`}>
            <Image src={Search.src} width={40} height={40} alt="search" />
          </button>

          <Link
            href="/cart"
            className={
              headerButtonURLs.slice(0, 3).includes(pathname)
                ? linkBoxItemActiveStyle
                : linkBoxItemStyle
            }
          >
            <span className="md:hidden">
              <Image src={CartIcon.src} width={18} height={18} alt="cart" />
            </span>
            <span className="hidden md:block">
              <Image src={cartIconDesktop.src} width={40} height={40} alt="cart" />
            </span>
            {/* {isLoggedIn && cartState.itemsCounter > 0 && ( */}
            <span className="absolute -top-1 -right-1.5 text-[10px] text-white bg-[#61AE7B] rounded-full px-1 md:right-0.5 md:top-0.5 font-medium">
              {/* {convertToFa(cartState.itemsCounter)} */}
            </span>
            {/* )} */}
          </Link>

          <button
            className={
              headerButtonURLs.slice(3).includes(pathname)
                ? linkBoxItemActiveStyle
                : linkBoxItemStyle
            }
            onClick={() => {
              localStorage.getItem("phoneNumber")
                ? router.push("/dashboard")
                : openModal();
            }}
          >
            <span className="md:hidden">
              <Image src={UserIcon.src}  width={18} height={18} alt="user" />
            </span>
            <span className="hidden md:block">
              <Image src={userIconDesktop.src} width={40} height={40} alt="user" />
            </span>
          </button>
          <SignUp isOpen={isOpen} closeModal={closeModal} />
        </div>
      </header>
    </div>
  );
};

export default Header;
