import React from 'react'

const ShimmerComponent = () => {
    return (
        <div className='flex flex-row justify-between h-16 w-full py-3 rounded-lg bg-gray-100 dark:bg-gray-700 dark:text-gray-300 mb-2 px-3'>
            <div className='h-full w-1/5 flex flex-col'>
                <div className='h-4 w-full bg-gray-300 dark:bg-gray-500 rounded-lg mb-2'> </div>
                <div className='h-4 w-3/5 bg-gray-200 dark:bg-gray-600 rounded-lg'> </div>
            </div>
            <div className='h-4 w-1/6 bg-gray-200 dark:bg-gray-600 rounded-lg self-center'> </div>
            <div className='h-4 w-1/5 bg-gray-200 dark:bg-gray-600 rounded-lg self-center'> </div>
        </div>
    )
}

export default ShimmerComponent