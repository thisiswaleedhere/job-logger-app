import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cudErrorDisplay, editJobAction, getAllJobsAsync } from "../redux/jobSlice"
import { JOBS_URL } from "../utils/constants"
import { stateAddModal } from "../redux/uiSlice"

const Sidebar = () => {

    const [singleJob, setSingleJob] = useState({ company: "", position: "", joblink: "", status: "applied" })
    const { editJob, count, cuderror } = useSelector((appStore) => appStore.job)
    // const count = useSelector((appStore) => appStore.job.count)
    const userToken = useSelector((store) => store.user.userToken)
    const { show } = useSelector((store) => store.ui)
    const dispatch = useDispatch();

    useEffect(() => {
        if (editJob) { setSingleJob({ company: editJob.company, position: editJob.position, joblink: editJob.joblink, status: editJob.status }) }
    }, [editJob])


    //add job
    const handleAddJob = async () => {
        try {
            const response = await fetch(JOBS_URL, {
                method: 'POST',
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${userToken}` },
                body: JSON.stringify(singleJob),
                redirect: 'follow'
            })
            const result = await response.json()
            result.msg ? dispatch(cudErrorDisplay(result.msg)) : dispatch(cudErrorDisplay(null))
            dispatch(getAllJobsAsync(userToken))
            setSingleJob({ company: "", position: "", joblink: "", status: "applied" })

        } catch (error) {
            console.log("Error", error)
        }

    }


    //edit job
    const handleEditJob = async () => {
        try {
            const response = await fetch(`${JOBS_URL}/${editJob._id}`, {
                method: 'PATCH',
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${userToken}` },
                body: JSON.stringify(singleJob),
                redirect: 'follow'
            })
            const result = await response.json();
            result.msg ? dispatch(cudErrorDisplay(result.msg)) : dispatch(cudErrorDisplay(null))
            dispatch(editJobAction(null))
            dispatch(stateAddModal(false))
            dispatch(getAllJobsAsync(userToken))
            setSingleJob({ company: "", position: "", joblink: "", status: "applied" })

        } catch (error) {
            console.log("Error", error)
        }
    }


    //delete job
    const handleDeleteJob = async () => {
        try {
            await fetch(`${JOBS_URL}/${editJob._id}`, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json", "Authorization": `Bearer ${userToken}` },
                redirect: 'follow'
            })

            dispatch(editJobAction(null))
            dispatch(stateAddModal(false))
            dispatch(getAllJobsAsync(userToken))
            setSingleJob({ company: "", position: "", joblink: "", status: "applied" })

        } catch (error) {
            console.log("Error", error)
        }

    }


    return (
        <div className={`${show ? " absolute " : "hidden md:flex"} min-w-[260px] right-0 bg-gray-800 md:bg-transparent md:static flex flex-col justify-between md:h-[calc(100vh-110px)] mx-4 mt-4 md:w-1/4 py-4 rounded-2xl border-gray-800 dark:border-gray-500 border-2`}>
            <div className='min-w-[260px] flex-col flex gap-4 text-gray-600 dark:text-gray-400 font-bold'>


                <form className='flex-col flex gap-4 mt-2' onSubmit={(e) => { e.preventDefault() }}>

                    <input onChange={(e) => setSingleJob({ ...singleJob, position: e.target.value })} type='input' required className='h-10 mx-4 rounded-lg px-2 bg-gray-200 dark:bg-gray-700' placeholder='Job Position' value={singleJob.position} />
                    <input onChange={(e) => setSingleJob({ ...singleJob, company: e.target.value })} type='input' required className='h-10 mx-4 rounded-lg px-2 bg-gray-200 dark:bg-gray-700' placeholder='Company' value={singleJob.company} />

                    <div className="flex justify-between gap-2 mx-4 items-center">
                        <select onChange={(e) => setSingleJob({ ...singleJob, status: e.target.value })} required className='h-10 w-full rounded-lg px-2 bg-gray-200 text-gray-400 focus:text-gray-600 dark:bg-gray-700' value={singleJob.status} title="status" name="statusSelector" id="statusSelector">
                            <option value="Applied">Applied</option>
                            <option value="Declined">Declined</option>
                            <option value="Interview">Interview</option>
                            <option value="Rejected">Rejected</option>
                            <option value="Converted">Converted</option>
                        </select>
                    </div>

                    <input onChange={(e) => setSingleJob({ ...singleJob, joblink: e.target.value })} required type='input' className='h-10 mx-4 rounded-lg px-2 bg-gray-200 dark:bg-gray-700' placeholder='Job Link' value={singleJob.joblink} />

                    {/* //buttons */}
                    {!editJob ? <button onClick={handleAddJob} type='submit' className='bg-blue-400 mx-4 rounded-lg mt-2 py-2 shadow-lg text-white '>Add job</button>
                        : <>
                            <button onClick={handleEditJob} type='submit' className='bg-blue-400 mx-4 rounded-lg mt-2 py-2 shadow-lg text-white '>Edit job</button>
                            <button onClick={handleDeleteJob} type='submit' className='bg-red-400 mx-4 rounded-lg py-2 shadow-lg text-white '>Delete job</button>
                        </>
                    }
                    {cuderror && <div><h2 className='mt-2 mx-4 py-1 px-2 rounded-md text-sm text-red-400 border-red-400 border-2'>{cuderror}</h2></div>}
                </form>
                {/* <button type='button' className='bg-blue-400 mx-4 rounded-lg py-2 shadow-lg'>Filter Jobs</button> */}
            </div>
            <div className="hidden md:block">

                <div className='text-sm font-bold text-center text-gray-300 dark:text-gray-700'>  Total jobs: {count} </div>
            </div>

        </div>
    )
}

export default Sidebar