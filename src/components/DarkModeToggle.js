import React from 'react'
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = ({ dark, setDark }) => {

    return (
        <div>
            <label class="flex self-center w-10 mx-auto mt-[2px] items-center cursor-pointer">
                {dark ? <MdOutlineLightMode onClick={() => setDark(!dark)} className='w-8 h-7 hover:text-yellow-600' /> :
                    <FaRegMoon onClick={() => setDark(!dark)} className='ml-1 w-5 h-7 transition-all text-gray-800 hover:text-blue-800' />
                }


                {/* <input type="checkbox" value="" class={`sr-only ${dark && "peer"}`} onClick={() => setDark(!dark)} defaultChecked />
                <div class="relative w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-gray-800 after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-900"></div>
                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Dark Mode</span> */}
            </label>
            {/* dark:peer-focus:ring-blue-800 peer-focus:ring-blue-300 peer-focus:ring-4  */}
        </div>
    )
}

export default DarkModeToggle