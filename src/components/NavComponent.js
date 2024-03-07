import React from 'react'
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/userSlice';
import DarkModeToggle from './DarkModeToggle';
import { IoMdLogOut } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { stateAddModal } from '../redux/uiSlice';

const NavComponent = ({ dark, setDark }) => {
    const dispatch = useDispatch();

    const { show } = useSelector((store) => store.ui)

    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const handleSignOut = () => {
        dispatch(removeUser());
        removeCookie('user', { path: '/' })
    }

    const handleAddClick = () => {
        show ? dispatch(stateAddModal(false)) : dispatch(stateAddModal(true))
    }

    return (
        <div className='self-center flex md:gap-6'>
            <IoIosAddCircle className={`block md:hidden ${show && "rotate-45"} transition-transform w-8 h-7 mt-[2px] mr-4 text-blue-400`} onClick={handleAddClick} />
            <DarkModeToggle dark={dark} setDark={setDark} />
            <button type='button' className=' text-sm mt-[2px] hover:font-semibold w-8 cursor-pointer' onClick={handleSignOut}>
                <IoMdLogOut className='h-6 w-8 hover:text-red-500 dark:text-gray-300 text-black' />
            </button>
        </div>
    )
}

export default NavComponent