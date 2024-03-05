import React, { useEffect } from 'react'
import Login from './Login'
import Sidebar from './Sidebar'
import MainComponent from './MainComponent'
import { useDispatch, useSelector } from 'react-redux'
import { useCookies } from 'react-cookie'
import { addUser } from '../redux/userSlice'

const Body = () => {

    const { userToken } = useSelector((appStore) => appStore.user);
    const [cookies, setCookie] = useCookies(['user'])
    const dispatch = useDispatch();

    useEffect(() => {
        if (cookies.user) {
            dispatch(addUser(cookies.user))
        }
    }, [])

    useEffect(() => {
        if (userToken) {
            // console.log('ut', userToken);
            setCookie('user', userToken, { path: '/' })
            // console.log('ck', cookies.user)
        }

    }, [userToken])

    return (
        <div className='flex'>

            {!userToken ? <Login /> :
                <>
                    <Sidebar />
                    <MainComponent />
                </>
            }

        </div>
    )
}

export default Body