'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import Slider from '../common/slider';
import Home from '../components/Home';
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { GrLanguage } from "react-icons/gr";
function Page() {
    const [viewMobile, setViewMobile] = useState(false)
    return (
        <div>
            <header className="bg-white fixed w-full top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="font-extrabold text-2xl">Employee</h1>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex gap-6 text-gray-700 font-serif font-medium">
                        <Link href="/register" className="hover:underline hover:text-green-600 transition duration-200">Register</Link>
                        <Link href="/login" className="hover:underline hover:text-green-600 transition duration-200">Login</Link>
                        <Link href="/about" className="hover:underline hover:text-green-600 transition duration-200">About</Link>
                        <Link href="/service" className="hover:underline hover:text-green-600 transition duration-200">Service</Link>
                        <Link href="/contact" className="hover:underline hover:text-green-600 transition duration-200">Contact</Link>
                    </nav>

                    {/* Get Started Button */}
                    <div className="hidden md:block space-x-1.5 gap-2">
                        <div className='flex gap-2'>
                            <Link href="/register" className="bg-green-500 cursor-pointer hover:bg-green-700 text-white rounded-full px-4 py-2 transition duration-300">
                                Get Started
                            </Link>
                            <div className='flex items-center'>
                                <GrLanguage className="text-xl" />
                                <select className="outline-none bg-transparent text-sm">
                                    <option value="en">Eng</option>
                                    <option value="hi">Hi</option>
                                </select></div>
                        </div>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <button onClick={() => setViewMobile(!viewMobile)} className="text-3xl text-black focus:outline-none">
                            {!viewMobile ? <MdOutlineMenu /> : <RxCross2 />}
                        </button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {viewMobile && (
                    <ul className="md:hidden w-full bg-white text-gray-700 font-serif font-medium shadow-md border-t border-gray-200 px-6 py-4 space-y-4">
                        <li><Link href="/register" className="hover:underline hover:text-green-600 transition duration-200">Register</Link></li>
                        <li><Link href="/login" className="hover:underline hover:text-green-600 transition duration-200">Login</Link></li>
                        <li><Link href="/about" className="hover:underline hover:text-green-600 transition duration-200">About</Link></li>
                        <li><Link href="/service" className="hover:underline hover:text-green-600 transition duration-200">Service</Link></li>
                        <li><Link href="/contact" className="hover:underline hover:text-green-600 transition duration-200">Contact</Link></li>
                        <li>
                            <div className='flex items-center'>
                                <GrLanguage className="text-xl" />
                                <select className="outline-none bg-transparent text-sm">
                                    <option value="en">Eng</option>
                                    <option value="hi">Hi</option>
                                </select></div>
                        </li>
                    </ul>
                )}
            </header>

            <Slider />
            <Home />
        </div >
    );
}
export default Page;
