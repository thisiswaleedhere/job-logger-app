import React from 'react'
import StatusSlider from './StatusSlider'
import { useDispatch } from 'react-redux'
import { editJobAction } from '../redux/jobSlice';
import { stateAddModal } from '../redux/uiSlice';
import { MdEdit } from "react-icons/md";

const EntryComponent = ({ job }) => {

    const dispatch = useDispatch();

    return (
        <div className='py-1 bg-gray-200 dark:bg-gray-700 dark:text-gray-300 mb-3 px-3 rounded-lg flex justify-between'>
            <div className='flex justify-between w-11/12 '>
                <div className='flex- flex-col lg:w-1/2'>
                    <div className='font-bold text-lg '>{job.position}</div>
                    <div className='dark:text-gray-400'>{job.company}</div>
                </div>
                {/* <div className='row-span-2 text-sm self-center'>{job.joblink}</div> */}

                <div className='w-28 md:w-36 self-center'>
                    <StatusSlider status={job.status} />
                </div>
            </div>
            <div className='self-center font-semibold text-gray-400 hover:text-yellow-700 dark:hover:text-yellow-100'>
                <button type='button' onClick={() => { dispatch(editJobAction(job)); dispatch(stateAddModal(true)) }}><MdEdit className='w-8 h-5' /></button>
            </div>
        </div>
    )
}

export default EntryComponent