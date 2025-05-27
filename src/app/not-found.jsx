"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import Logo from "@/components/Logo";

export default function NotFound() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div className="opacity-[20%]">
        <div data-aos="fade-down">
          <div className="absolute font-korean text-8xl right-24  px-6 lg:px-[20vh] py-20 scale-150 top-10 text-cpink dark:text-ccyan opacity-50">
            찾<br />을<br />수<br />없<br />음
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="absolute font-korean text-8xl right-20  px-6 lg:px-[20vh] py-20 text-cdark dark:text-cwhite">
            찾<br />을<br />수<br />없<br />음
          </div>
        </div>
      </div>
      <div className="bg_parallax bg-fixed h-full w-full absolute opacity-[40%] dark:opacity-[7%]"></div>
      <div className="min-h-screen justify-center container mx-auto  px-6 lg:px-[20vh] py-20 flex flex-col items-center overflow-hidden">
        <div data-aos="zoom-in">
          <Logo className="scale-[1.5] fill-cdark z-[7] dark:fill-cwhite hover:fill-cpink dark:hover:fill-ccyan transition-all mb-5" />
        </div>
        <h1 data-aos="fade-up" className="z-[7] text-7xl font-bold font-squada">
          404
        </h1>
        <p data-aos="zoom-in" className="z-[7] text-xl  font-blinker">
          Could not find requested resource
        </p>
        <Link
          href="/"
          data-aos="zoom-out"
          data-aos-delay="200"
          className="z-[7] text-md font-bold font-blinker text-ccyan"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
