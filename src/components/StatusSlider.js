import React, { useEffect, useState } from 'react'
import { statusArray } from '../utils/constants';

const StatusSlider = (props) => {

    // const statusArray = ["applied", "declined", "interview", "rejected", "converted"]
    const [statusCode, setStatusCode] = useState(4);

    useEffect(() => {
        // setStatusCode(statusArray.indexOf(props.status))
        // console.log(props.status)
        // console.log(statusCode)
    }, [])


    return (
        <div className='flex text-sm px-2 w-40 self-center'>
            <h3 className='pr-2'>Status:</h3>
            <div className={`w-3 h-3 mt-1 rounded-xl ${(statusCode === 0 || 2) && "bg-yellow-500"} ${statusCode === 4 && "bg-green-500"} "bg-red-500")}`}>
                {/* {tone ? < div className='w-3 h-3 rounded-xl bg-blue-600'></div> : <div className='w-3 h-3 rounded-xl bg-red-600'></div>} */}
            </div>
            <p className='font-bold pl-1'>{props.status}</p>
        </div >
    )
}

export default StatusSlider