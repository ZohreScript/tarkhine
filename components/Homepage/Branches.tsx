import React from "react";
import Image, { StaticImageData } from 'next/image';

// images
import EkbatanImg from "../../public/images/ekbatan.jpg";
import ChalosImg from "../../public/images/chalos.jpg";
import AghdasiehImg from "../../public/images/aghdasieh.jpg";
import VanakImg from "../../public/images/vanak.jpg";

// styles
const containerStyle = 'container max-w-[1224px] mx-auto px-5 mt-6 md:mt-10 text-center mb-12 xl:mt-12';
const branchesBoxStyle = 'flex items-center gap-x-2 border border-[#CBCBCB] hover:border-[#417F56] duration-500 rounded-lg overflow-hidden mb-3 md:flex-col md:gap-y-2 md:w-[18em]';
const h3Style = 'font-bold text-lg mb-3 text-[#353535] md:text-xl md:mb-6 lg:text-2xl';
const coverStyle = 'bg-cover bg-center w-[9em] h-20 md:w-[18em] md:h-36 lg:h-[14.375em]';
const descriptionBoxStyle = 'p-1 md:pb-2 lg:px-2.5 lg:pb-4 w-[10.375em] md:w-auto';
const h4Style = 'text-[#353535] font-medium text-xs sm:text-sm mb-1 md:text-base md:font-bold md:mb-2 lg:text-lg xl:text-[22px]';
const pStyle = 'text-[10px] text-[#717171] leading-4 sm:leading-5 md:text-xs md:font-medium lg:text-[13px] lg:leading-6 xl:text-sm';

interface Branch {
  image: StaticImageData;
  name: string;
  description: string;
}

const branches: Branch[] = [
  { image: EkbatanImg, name: "شعبه اکباتان", description: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم" },
  { image: ChalosImg, name: "شعبه چالوس", description: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی" },
  { image: AghdasiehImg, name: "شعبه اقدسیه", description: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸" },
  { image: VanakImg, name: "شعبه ونک", description: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶" },
];

const Branches: React.FC = () => {
  return (
    <div className={containerStyle}>
      <h3 className={h3Style}>ترخینه گردی</h3>

      <div className="md:flex md:gap-x-4 lg:gap-x-5 xl:gap-x-6">
        {branches.map((branch, index) => (
          <div key={index} className={branchesBoxStyle}>
            <div style={{ backgroundImage: `url(${branch.image.src})` }} className={coverStyle}></div>
            <div className={descriptionBoxStyle}>
              <h4 className={h4Style}>{branch.name}</h4>
              <p className={pStyle}>{branch.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Branches;
