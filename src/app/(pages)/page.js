'use client'
import Link from 'next/link';
import React from 'react';
import Slider from '../common/slider';
import Home from '../components/Home';

function Page() {
    return (
        <div>
            <header className="bg-white fixed w-full top-0   z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    {/* Logo */}
                    <div>
                        {/* <img src="/alogo.jpg" alt="Emply" className="w-24 rounded-4xl h-auto object-contain" /> */}
                        <h1 className='font-extrabold text-2xl'>Employee</h1>
                    </div>

                    {/* Navigation Links */}
                    <nav>
                        <ul className="hidden md:flex gap-6 text-gray-700 font-serif font-medium">
                            <li>
                                <Link href="/register" className="hover:underline hover:text-green-600 transition duration-200">
                                    Register
                                </Link>
                            </li>
                            <li>
                                <Link href="/login" className="hover:underline hover:text-green-600 transition duration-200">
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:underline hover:text-green-600 transition duration-200">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/service" className="hover:underline hover:text-green-600 transition duration-200">
                                    Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline hover:text-green-600 transition duration-200">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Get Started Button */}
                    <div className="hidden md:block">
                        <Link href={"register"} className="bg-green-500 cursor-pointer hover:bg-green-700 text-white rounded-full px-4 py-2 transition duration-300">
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <Slider />
            <Home/>
        </div>  
    );
}
export default Page;
