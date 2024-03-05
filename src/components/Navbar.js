import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../redux/userSlice';
import { useCookies } from 'react-cookie';

const Navbar = () => {

    const dispatch = useDispatch();

    const { userToken } = useSelector((appStore) => appStore.user);
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

    const handleSignOut = () => {
        dispatch(removeUser());
        removeCookie('user', { path: '/' })
    }

    return (
        <div className='flex justify-between mx-4 px-8 py-3 rounded-2xl border-gray-800 dark:border-gray-500 border-2 dark:text-gray-300 '>
            <div className='text-2xl font-bold text-blue-400 '>Job Logger</div>
            {userToken && <div className='self-center w-16'><button type='button' className='hover:text-red-500 hover:font-semibold cursor-pointer' onClick={handleSignOut}>Sign Out</button></div>}
        </div>
    )
}

export default Navbar
