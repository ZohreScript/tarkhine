import React from "react";

// images
import IntroductionImg from "../../public/images/introduction.jpg";

import arrowLeftIcon from "../../public/icons/arrowLeftIcon.svg";
import userIcon from "../../public/icons/userIconintro.svg";
import lineChartIcon from "../../public/icons/lineChartIcon.svg";
import homeWifiIcon from "../../public/icons/homeWifiIcon.svg";
import menuBoardIcon from "../../public/icons/menuBoardIconintro.svg";
import userDesktopIcon from "../../public/icons/userDesktopIconintro.svg";
import lineChartDesktopIcon from "../../public/icons/lineChartDesktopIcon.svg";
import homeWifiDesktopIcon from "../../public/icons/homeWifiDesktopIcon.svg";
import menuBoardDesktopIcon from "../../public/icons/menuBoardDesktopIconintro.svg";
import arrowLeftDesktopIcon from "../../public/icons/arrowLeftDesktopIcon.svg";
import Image from "next/image";



export const featuresBoxStyle =
  "flex items-center justify-around mb-4 md:mb-8 lg:justify-evenly";
export const featuresBoxItemStyle =
  "flex flex-col items-center gap-y-2 text-[11px] sm:text-xs md:text-base";

const Introduction: React.FC = () => {
  return (
    <div
    style={{ backgroundImage: `url(${IntroductionImg.src})` }}
      className="bg-cover bg-center bg-no-repeat  md:w-full text-white  mt-2 bg-black  py-5 px-5 h-[21.188em] md:h-[24.375em] md:py-12 md:flex md:items-center md:mt-14 lg:mt-16 xl:mt-20"
    >
      <div className="container max-w-[1224px] mx-auto md:flex md:items-start lg:items-center md:px-1 xl:pr-6 xl:gap-x-5">
        <div className="md:flex-1">
          <h3 className="text-sm sm:text-base mb-2 md:text-xl md:font-bold md:mb-6 lg:text-2xl">رستوران‌های زنجیره‌ای ترخینه</h3>
          <p className=  "text-[10px] sm:text-[11px] leading-5 text-justify mb-2 md:text-[15px] md:leading-6 lg:text-base lg:text-xl xl:mb-8 xl:font-light"
          >
            مهمان‌نوازی یکی از مهم‌ترین مشخصه‌های ایرانیان است و باعث افتخار
            ماست که بیش از 20 سال است خدمت‌گزار مردم شریف ایران هستیم. ما در
            رستوران‌های زنجیره‌ای ترخینه همواره تلاش کردیم که در محیطی اصیل بر
            پایه معماری و طراحی مدرن در کنار طبیعتی دلنواز، غذایی سالم و درخور
            شان شما عزیزان ارائه دهیم.
          </p>
          <div className="flex justify-end mb-3 sm:mb-5">
            <button className=  "flex items-center justify-center gap-x-2 border border-white rounded h-7 sm:h-8 w-[8.5em] sm:w-[9.5em] md:h-[2.5em] lg:w-[11.5em]"            >
              <span className="text-xs md:text-sm lg:text-base">اطلاعات بیشتر</span>
              <span className="md:hidden">
              <Image src={arrowLeftIcon.src} alt="arrow" width={24} height={24} className="text-white" />
              </span>
              <span className="hidden md:block">
              <Image src={arrowLeftIcon.src} alt="arrow" width={24} height={24} /></span>
            </button>
          </div>
        </div>

        <div className="md:flex-1">
          <div className={featuresBoxStyle}>
            <div className={featuresBoxItemStyle}>
              <span className="md:hidden">
              <Image src={userIcon.src} alt="user" width={24} height={24} className="text-white"/></span>
              <span className="hidden md:block">
              <Image src={userDesktopIcon.src} alt="user" width={48} height={48} />
                </span>
              <span>پرسنلی مجرب و حرفه‌ای</span>
            </div>

            <div className={featuresBoxItemStyle}>
              <span className="md:hidden">
              <Image src={lineChartIcon.src} alt="chart" width={24} height={24} />
                </span>
              <span className="hidden md:block">
              <Image src={lineChartDesktopIcon.src} alt="chart" width={48} height={48} />
              </span>
              <span>کیفیت بالای غذاها</span>
            </div>
          </div>

          <div className={featuresBoxStyle}>
            <div className={featuresBoxItemStyle}>
              <span className="md:hidden">
              <Image src={homeWifiIcon.src} alt="wifi"  width={24} height={24}/></span>
              <span className="hidden md:block">
              <Image src={homeWifiDesktopIcon.src} alt="wifi" width={48} height={48}/>
              </span>
              <span>محیطی دلنشین و آرام</span>
            </div>

            <div className={featuresBoxItemStyle}>
              <span className="md:hidden">
              <Image src={menuBoardIcon.src} alt="menu" width={24} height={24} />

                </span>
              <span className="hidden md:block">
              <Image src={menuBoardDesktopIcon.src} alt="menu" width={48} height={48} /></span>
              <span>منوی متنوع</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
