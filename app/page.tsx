// pages/index.tsx
"use client";
import Banner from "@/components/Homepage/Banner";
import Branches from "@/components/Homepage/Branches";
import HomePageMenu from "@/components/Homepage/HomePageMenu";
import Introduction from "@/components/Homepage/Introduction";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "ترخینه | فروش غذا";
  }, []);
  return (
    <>
      <Banner />
      <HomePageMenu />
      <Introduction/>
      <Branches/>
    </>
  );
}
