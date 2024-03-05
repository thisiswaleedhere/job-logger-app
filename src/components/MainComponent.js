import React, { useEffect } from 'react'
import EntryComponent from './EntryComponent'
import { useDispatch, useSelector } from 'react-redux'
import { getAllJobsAsync } from '../redux/jobSlice';
import ShimmerComponent from './ShimmerComponent';

const MainComponent = () => {
    const dispatch = useDispatch();
    const { userToken } = useSelector((appStore) => appStore.user);
    const { jobs, loading, error } = useSelector((appStore) => appStore.job)

    useEffect(() => {
        dispatch(getAllJobsAsync(userToken))
    }, [])

    return (
        <div className='flex flex-col h-[calc(100vh-110px)] ml-1 mr-4 w-full mt-4 px-4 py-4 rounded-2xl border-gray-800 dark:border-gray-500 border-2 overflow-y-auto'>

            {loading && <><ShimmerComponent /> <ShimmerComponent /></>}
            {error && <div><h2 className='mb-2 py-1 px-2 rounded-md text-red-400 w-full border-red-400 border-2'>{error}</h2></div>}
            {jobs.length && jobs.map((job) => { return <EntryComponent key={job._id} job={job} /> })}


        </div>
    )
}

export default MainComponent