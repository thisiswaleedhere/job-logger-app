import React from 'react'
import { useSelector } from 'react-redux';
import NavComponent from './NavComponent';

const Navbar = ({ dark, setDark }) => {

    const { userToken } = useSelector((appStore) => appStore.user);

    return (
        <div className='flex justify-between mx-4 px-8 py-3 rounded-2xl border-gray-800 dark:border-gray-500 border-2 dark:text-gray-300 '>
            <div className='text-2xl font-bold text-blue-400 '>Job Logger</div>
            {userToken && <NavComponent dark={dark} setDark={setDark} />}
        </div>
    )
}

export default Navbar
