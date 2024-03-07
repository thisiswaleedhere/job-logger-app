import React, { useRef, useState } from 'react'
import { clearError, createUserAsync, loginAsync } from '../redux/userSlice'
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true)
    const dispatch = useDispatch();

    const userStatus = useSelector((appStore) => appStore.user);

    const { loading, error } = userStatus;

    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)


    const handleLogin = async () => {
        if (isSignIn) {
            const raw = JSON.stringify({ "email": email.current?.value, "password": password.current?.value });
            dispatch(loginAsync(raw))
        }
        if (!isSignIn) {
            const newUser = JSON.stringify({ "name": name.current?.value, "email": email.current?.value, "password": password.current?.value });
            dispatch(createUserAsync(newUser))
        }
    }

    return (
        <div className='flex flex-col h-[calc(100vh-110px)] mx-4 md:w-full mt-4 mb-4 px-4 py-4 rounded-2xl border-gray-800 dark:border-gray-500 border-2 dark:text-gray-400'>
            <div className='sm:w-96 h-96 my-auto mx-auto'>
                <h1 className='font-bold text-3xl sm:text-4xl '>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>

                <div className='flex-col flex gap-4 my-6 text-gray-600 dark:text-gray-400'>
                    {!isSignIn && <input type='input' required className='h-12 rounded-lg px-3 bg-gray-200 dark:bg-gray-700' placeholder='Name' ref={name} />}
                    <input type='email' required className='h-12 rounded-lg px-3 bg-gray-200 dark:bg-gray-700' placeholder='Email' ref={email} />
                    <input type='password' required className='h-12 rounded-lg px-3 bg-gray-200 dark:bg-gray-700' placeholder='Password' ref={password} />
                    {loading ?
                        <div className='w-full h-12 rounded-lg px-2 bg-blue-200 text-center py-3 shadow-xl text-gray-800 dark:text-black'>Authenticating User...</div>
                        : <button onClick={handleLogin} type='button' className='w-full h-12 rounded-lg px-2 bg-blue-300 shadow-xl text-gray-800 dark:text-black'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                    }</div>
                {error && <h2 className='mb-2 py-1 px-2 rounded-md text-red-400 w-full border-red-400 border-2'>{error}</h2>}

                {!isSignIn ?
                    <p>Already a user?
                        <span className='font-semibold px-1 hover:underline cursor-pointer' onClick={() => { setIsSignIn(!isSignIn); dispatch(clearError()) }}>Sign In</span>instead
                    </p> :
                    <p>New user?
                        <span className='font-semibold px-1 hover:underline cursor-pointer' onClick={() => { setIsSignIn(!isSignIn); dispatch(clearError()) }}>Sign Up</span>for an account
                    </p>
                }

            </div>
        </div>
    )
}

export default Login