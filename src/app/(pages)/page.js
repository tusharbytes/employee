'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Slider from '../common/slider';
import Home from '../components/Home';
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GrLanguage } from "react-icons/gr";
import { LuSunDim } from "react-icons/lu";
import { IoMdMoon } from "react-icons/io";
import { useDarkMode } from '../common/UseTogleContext';
import Langswitcher from '../components/lang-switcher';

function Page() {
  const [viewMobile, setViewMobile] = useState(false);
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'} min-h-screen`}>
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50   ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <h1 className="text-2xl font-extrabold">Employee</h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 font-medium font-serif">
            {['register', 'login', 'about', 'service', 'contact'].map((route) => (
              <Link
                key={route}
                href={`/${route}`}
                className="hover:underline hover:text-green-600 transition duration-200 capitalize"
              >
                {route}
              </Link>
            ))}
          </nav>

          {/* Theme + Get Started + Language */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
              {darkMode ? <IoMdMoon /> : <LuSunDim className="text-amber-300" />}
            </button>
            <Link
              href="/register"
              className="bg-green-500 hover:bg-green-700 text-white rounded-full px-4 py-2 transition duration-300"
            >
              Get Started
            </Link>
            <div className="flex items-center gap-1">
              <GrLanguage className="text-xl" />
              <select className="bg-transparent outline-none text-sm">
                <option value="en">Eng</option>
                <option value="hi">Hi</option>
              </select>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setViewMobile(!viewMobile)} className="text-3xl">
              {viewMobile ? <RxCross2 /> : <MdOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {viewMobile && (
          <ul className={`md:hidden px-6 py-4 space-y-4 font-serif font-medium border-t shadow-md ${darkMode ? 'bg-black text-white border-gray-700' : 'bg-white text-gray-800 border-gray-200'}`}>
            {['register', 'login', 'about', 'service', 'contact'].map((route) => (
              <li key={route}>
                <Link
                  href={`/${route}`}
                  className="block hover:underline hover:text-green-600 transition duration-200 capitalize"
                >
                  {route}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <GrLanguage className="text-xl" />
              <select className="bg-transparent outline-none text-sm">
                <option value="en">Eng</option>
                <option value="hi">Hi</option>
              </select>
            </li>
          </ul>
        )}
      </header>

      {/* Content below header */}
      <main className="pt-[90px]"> {/* ensures content doesn't go under header */}
        <Slider />
        <Home />
        <Langswitcher/>
        <p>sds  </p>
      </main>
    </div>
  );
}

export default Page;
