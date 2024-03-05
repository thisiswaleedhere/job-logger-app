import React from 'react'
import StatusSlider from './StatusSlider'
import { useDispatch } from 'react-redux'
import { editJobAction } from '../redux/jobSlice';

const EntryComponent = ({ job }) => {

    const dispatch = useDispatch();

    return (
        <div className='py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 mb-3 px-3 rounded-lg flex'>
            <div className='flex justify-between w-11/12 '>
                <div className='flex- flex-col'>
                    <div className='font-bold text-lg'>{job.position}</div>
                    <div>{job.company}</div>
                </div>

                <div className=' self-center'><StatusSlider status={job.status} /></div>
                {/* <div className='row-span-2 text-sm self-center'>{job.joblink}</div> */}
            </div>
            <div className='self-center font-semibold'>
                <button type='button' onClick={() => dispatch(editJobAction(job))}>Edit/Delete</button>
                {/* <button type='button'>Delete</button> */}
            </div>
        </div>
    )
}

export default EntryComponent