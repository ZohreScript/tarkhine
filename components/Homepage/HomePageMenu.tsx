import React from "react";
import HomePageMenuItem from "./HomePageMenuItem";
import Image from "next/image";
import Link from "next/link";

// icons (assuming these are SVGs or some other components)
// import { searchIcon } from "../../icons/homePageIcons"; // update import based on your project setup

// images
import Maincourse from "../../public/images/main-course.png";
import Appetizer from "../../public/images/appetizer.png";
import Dessert from "../../public/images/dessert.png";
import Drink from "../../public/images/drink.png";

// styles (assuming these are Tailwind CSS classes)
const searchBoxStyle = 'relative flex items-center';
const inputSearchStyle = 'border p-2 pl-10 rounded-md w-full';

const HomePageMenu : React.FC = () => {
  return (
    <div className="text-center container max-w-[1224px] mx-auto mt-4 mb-12">
      <div className="md:hidden px-5">
        <div className={searchBoxStyle}>
          <input type="text" placeholder="جستجو" className={inputSearchStyle} />
          {/* Replace with actual SVG or icon component */}
          {/* <span className="absolute left-2">{searchIcon}</span> */}
        </div>
      </div>

      <h3 className="text-[#353535] font-bold mb-3 md:mb-5 lg:mb-8 md:mt-12 md:text-xl lg:text-2xl">
        منوی رستوران
      </h3>

      <div className="flex flex-col justify-center md:flex-row gap-y-10">
        <div className="flex items-center justify-center gap-6">
          <Link href="/menu" passHref>
              <HomePageMenuItem image={Maincourse.src} title="غذای اصلی" />
          </Link>
          <Link href="/menu" passHref>
              <HomePageMenuItem image={Appetizer.src} title="پیش غذا" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6">
          <Link href="/menu" passHref>
              <HomePageMenuItem image={Dessert.src} title="دسر" />
          </Link>
          <Link href="/menu" passHref>
              <HomePageMenuItem image={Drink.src} title="نوشیدنی" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageMenu;
