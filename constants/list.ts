
import homeIcon from "../public/icons/homeIcon.svg"
import menuBoardIcon from "../public/icons/menuBoardIcon.svg";
import hashtagIcon from "../public/icons/hashtagIcon.svg";
import profile2userIcon from "../public/icons/profile2userIcon.svg";
import callingIcon from "../public/icons/callingIcon.svg";

interface Category {
  id: number;
  type: string;
}

interface Page {
  id: number;
  type: string;
  url: string;
  icon:string
}

const categories: Category[] = [
  { id: 1, type: "همه" },
  { id: 2, type: "غذاهای ایرانی" },
  { id: 3, type: "غذاهای غیر ایرانی" },
  { id: 4, type: "پیتزاها" },
  { id: 5, type: "ساندویچ‌ها" },
];

const pages: Page[] = [
  { id: 1, type: "صفحه اصلی", url: "/", icon: homeIcon },
  { id: 2, type: "منو", url: "menu", icon: menuBoardIcon },
  { id: 3, type: "اعطای نمایندگی", url: "franchise", icon: hashtagIcon },
  { id: 4, type: "درباره ما", url: "about-us", icon: profile2userIcon },
  { id: 5, type: "تماس با ما", url: "contact-us", icon: callingIcon },
];

export { categories, pages };
