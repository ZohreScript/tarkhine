import React from "react";
import Image from "next/image";

interface HomePageMenuItemProps {
  image: string;
  title: string;
}

function HomePageMenuItem({ image, title }: HomePageMenuItemProps) {
  return (
    <div className="relative flex flex-col items-center justify-center mx-2 xl:w-[16em] xl:mx-6">

      <div className="absolute w-full h-[90%]  sm:w-[7.5em]  top-0 md:w-[9em] lg:w-[12em] xl:w-[14.5em]">
  <Image
    src={image}
    alt={title}
    width={500} 
    height={450} 
    objectFit="contain"
    className="w-full h-full"
  />
</div>
      <div className="w-[7.5em] sm:w-[9.5em] h-[4.5em] sm:h-[5em] bg-[#417F56] 
mt-[3.5em] shadow-lg rounded-md md:rounded-lg md:w-[10.5em] md:h-[7em] lg:w-[14.5em] lg:h-[8em] 
lg:mt-[6em] xl:w-[16.75em] xl:h-[9.5em]"></div>
      <button className="py-1.5 px-5 bg-white text-[#353535] text-sm rounded-md absolute -bottom-5 shadow-lg md:py-2.5 md:px-6 lg:text-lg lg:px-7 xl:-bottom-8">
        {title}
      </button>
    </div>
  );
}

export default HomePageMenuItem;
