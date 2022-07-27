import { React, useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Link from "next/link";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setmounted] = useState(false);
  useEffect(() => {
    setmounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };
  return (
    <>
      <div className="flex justify-between my-12 lg:mx-40 lg:ml-28 md:ml-14 sm:ml-8 container  mx-auto  py-12 px-12">
        <div className="text-3xl ml-6 font-mono">
          <Link href="/">
            <a>Weather</a>
          </Link>
          <div className="flex mt-2 mb-5 ml-6 justify-start">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div>
          <Link href="#about">
            <a className="text-1xl">About</a>
          </Link>
        </div>
        <div className="mr-5">{renderThemeChanger()}</div>
      </div>
    </>
  );
};

export default Navbar;
