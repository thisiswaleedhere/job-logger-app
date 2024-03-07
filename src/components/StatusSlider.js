

const StatusSlider = (props) => {

    return (
        <div className='flex text-sm px-2 w-40 self-center'>
            {/* <h3 className='pr-2'>Status:</h3> */}
            <div className={`w-3 h-3 mt-1 rounded-xl ${(props.status === "Applied") && "bg-yellow-500"} ${(props.status === "Interview") && "bg-blue-500"} ${props.status === "Converted" && "bg-green-500"}  ${props.status === "Rejected" && "bg-red-500"} ${props.status === "Declined" && "bg-red-500"} `}>
            </div>
            <p className='font-bold pl-2'>{props.status}</p>
        </div >
    )
}

export default StatusSlider