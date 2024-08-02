import React from "react";
import Image from "next/image";
import Link from "next/link";
import footerImg from "../../public/images/footer.jpg";

import telegramIcon from "../../public/icons/telegramIcon.svg";
import instagramIcon from "../../public/icons/instagramIcon.svg";
import twitterIcon from "../../public/icons/twitterIcon.svg";
import telegramDesktopIcon from "../../public/icons/telegramDesktopIcon.svg";
import instagramDesktopIcon from "../../public/icons/instagramDesktopIcon.svg";
import twitterDesktopIcon from "../../public/icons/twitterDesktopIcon.svg";


const Footer: React.FC = () => {
  return (
    <footer className="bg-cover bg-center bg-no-repeat  md:w-full text-white  mt-2
    bg-black"  style={{ backgroundImage: `url(${footerImg.src})` }}>
    <div className="container max-w-[1224px] mx-auto flex items-center md:items-start justify-start lg:justify-between gap-x-[5.063em] py-[1.375em] md:pt-[2.031em] px-[1.25em] h-[9.5em] md:h-[19.938em]">
        <div >
          <h4 className="mb-[0.5em] md:mb-[1em] text-xs sm:text-sm font-medium md:text-xl md:font-bold">دسترسی آسان</h4>
          <ul className="flex flex-col gap-y-[0.5em] md:gap-y-[1em] pr-[0.5em] md:pr-[1em]">
            <li className="text-[10px] md:text-base md:font-medium md:text-[#EDEDED]">
              <Link href="/faq">پرسش های متداول</Link>
            </li>
            <li className="text-[10px] md:text-base md:font-medium md:text-[#EDEDED]">
              <Link href="/rules">قوانین ترخینه</Link>
            </li>
            <li className="text-[10px] md:text-base md:font-medium md:text-[#EDEDED]">
              <Link href="/privacy">حریم خصوصی</Link>
            </li>
            <div className="items-center gap-x-[0.5em] md:gap-x-[1em] flex md:hidden">
              <span><Image src={twitterIcon} alt="Twitter" /></span>
              <span><Image src={instagramIcon} alt="Instagram" /></span>
              <span><Image src={telegramIcon} alt="Telegram" /></span>
            </div>
            <div className="items-center gap-x-[0.5em] md:gap-x-[1em] hidden md:flex">
              <span><Image src={twitterDesktopIcon} alt="Twitter" /></span>
              <span><Image src={instagramDesktopIcon} alt="Instagram" /></span>
              <span><Image src={telegramDesktopIcon} alt="Telegram" /></span>
            </div>
          </ul>
        </div>

        <div>
          <h4 className="mb-[0.5em] md:mb-[1em] text-xs sm:text-sm font-medium md:text-xl md:font-bold">شعبه های ترخینه</h4>
          <ul className="flex flex-col gap-y-[0.5em] md:gap-y-[1em] pr-[0.5em] md:pr-[1em]">
            <li className="text-[10px] md:text-base md:font-medium md:text-[#EDEDED]">
              <Link href="/contact-us">شعبه اکباتان</Link>
            </li>
            <li className="text-[10px] md:text-base md:font-medium md:text-[#EDEDED]">
              <Link href="/contact-us">شعبه چالوس</Link>
            </li>
            <li className="text-[10px] md:text-base md:font-medium md:text-[#EDEDED]">
              <Link href="/contact-us">شعبه اقدسیه</Link>
            </li>
            <li className="text-[10px] md:text-base md:font-medium md:text-[#EDEDED]">
              <Link href="/contact-us">شعبه ونک</Link>
            </li>
          </ul>
        </div>

        <div className="hidden lg:block">
          <h4 className="mb-[0.5em] md:mb-[1em] text-xs sm:text-sm font-medium md:text-xl md:font-bold">پیام به ترخینه</h4>
          <div className="flex items-start gap-x-[1.625em] pr-[1em]">
            <div className="flex flex-col gap-y-[0.75em]">
              <input
                type="text"
                placeholder="نام و نام خانوادگی"
                className="h-[2.5em] px-[1em] bg-transparent text-[#F9F9F9] placeholder:text-[#F9F9F9] outline-none border border-[#717171] rounded"
              />
              <input
                type="text"
                placeholder="شماره تماس"
                className="h-[2.5em] px-[1em] bg-transparent text-[#F9F9F9] placeholder:text-[#F9F9F9] outline-none border border-[#717171] rounded"
              />
              <input
                type="email"
                placeholder="آدرس ایمیل(اختیاری)"
                className="h-[2.5em] px-[1em] bg-transparent text-[#F9F9F9] placeholder:text-[#F9F9F9] outline-none border border-[#717171] rounded"
              />
            </div>

            <div className="flex flex-col items-end gap-y-[1.5em]">
              <textarea
                placeholder="پیام شما"
                className="h-[9em] w-[17.875em] !p-4 resize-none scroll-smooth bg-transparent text-[#F9F9F9] placeholder:text-[#F9F9F9] outline-none border border-[#717171] rounded"
              />
              <button className="text-[#F9F9F9] font-medium w-[11.438em] h-[2.5em] border border-[#717171] rounded">ارسال پیام</button>
            </div>
          </div>
        </div>
      </div>
  </footer>  );
};

export default Footer;
