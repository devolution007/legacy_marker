"use client"
import Head from "next";
import { Image, Input } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from "react-router-dom";
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

const NavBar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    return (
        <nav className="bg-white border-gray-200">
            <div className="container flex flex-wrap items-center justify-between py-4 mx-auto lg:py-6 md:px-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <a href="/">
                        <Image src="http://cwc-shop.com/wp-content/uploads/2023/12/1.png" className="h-8" alt="Flowbite Logo" />
                    </a>
                    <form>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 rounded-full border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gary-500 border-gray-600 placeholder-gray-400 text-black focus:ring-gary-500 focus:border-blue-500" placeholder="Search...." required />
                        </div>
                    </form>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                        
                    </button>
                    <Link to="/Gift"><img className="sm:hidden md:hidden lg:hidden xl:hidden " src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-5.png" alt="" /></Link>
                </div>
                <div className="hidden w-full md:block md:w-auto flex flex-col items-center p-4 md:p-0 mt-4" id="navbar-default">
                    <ul className="font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link to="/Gift" className="block mymenu py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page"><img src="https://smellmeloveme.shop/wp-content/uploads/2024/01/Frame-5.png" className="icon_new inline-block"/>Gift</Link>
                        </li>
                        <li>
                            <a href="#" className="block py-2 mymenu px-3 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:text-blue-700">Login</a>

                        </li>
                        <li>
                            {/* <a href="#" className="block py-2 px-3 text-black-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:text-blue-700">Create Account</a> */}
                            <button type="button" className="px-5 py-5 text-gray-50 transition-all transform bg-blue-400 rounded-[80px] hover:bg-blue-500 dark:hover:text-gray-100 dark:text-gray-100">Create Account</button>
                        </li>
                        <li>
                            <div className="hs-dropdown relative inline-flex">
                                <button id="hs-dropdown-default" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M30 14H2C0.895437 14 0 14.8954 0 16C0 17.1046 0.895437 18 2 18H30C31.1046 18 32 17.1046 32 16C32 14.8954 31.1046 14 30 14Z" fill="#374957" />
                                        <path d="M2 8.667H30C31.1046 8.667 32 7.77156 32 6.667C32 5.56243 31.1046 4.66699 30 4.66699H2C0.895437 4.66699 0 5.56243 0 6.667C0 7.77156 0.895437 8.667 2 8.667Z" fill="#374957" />
                                        <path d="M30 23.334H2C0.895437 23.334 0 24.2294 0 25.334C0 26.4385 0.895437 27.334 2 27.334H30C31.1046 27.334 32 26.4385 32 25.334C32 24.2294 31.1046 23.334 30 23.334Z" fill="#374957" />
                                    </svg>

                                </button>

                                <div className={`hs-dropdown-menu transition-opacity duration-300 ease-in-out origin-top absolute mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-md ${isDropdownOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                                    <a className="block py-2 px-3 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                        How to Videos
                                    </a>
                                    <a className="block py-2 px-3 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                        Affiliate Links
                                    </a>
                                    <a className="block py-2 px-3 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700" href="#">
                                        Help & Support
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


export default NavBar;