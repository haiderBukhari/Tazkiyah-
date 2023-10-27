import React from 'react'
import Logo from "../assets/Tazkiyah Logo.jpg"
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (

        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="/" class="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} class="h-20 mr-3" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tazkiyah</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link to="/goal" class="mr-4 hover:underline md:mr-6 ">Set Goal</Link>
                        </li>
                        <li>
                            <Link to="/view/goal" class="mr-4 hover:underline md:mr-6">View Goal</Link>
                        </li>
                        <li>
                            <Link to="/login" class="mr-4 hover:underline md:mr-6 ">Login</Link>
                        </li>
                        <li>
                            <Link to="/contact" class="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
                {/* <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" /> */}
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Tazkiyah</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}