export const Select = ({ value, status }) => {
    const number = String(Math.random() * 9999999)
    console.log(value, status);
    return (
        <>
            <p className='mt-4 text-2xl flex justify-center privates'>
                Mark the Status of your {status.value}
            </p>
            <div className="flex justify-center place-items-center flex-wrap lb mt-2">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="l1 flex justify-center place-items-center">
                    <label htmlFor={`completed${status} + ${number}`} style={{ fontWeight: '400', margin: '0px' }}>Completed</label>
                    <input checked={status.status === "Completed"} style={{ margin: '0px' }} className='ml-2' type="radio" name={`${number}`} id={`completed${status} + ${number}`} />
                </div>
                <div className="l1 flex justify-center place-items-center ml-5">
                    <label htmlFor={`incompleted${status} + ${number + 1}`} style={{ fontWeight: '400', margin: '0px' }}>InCompleted</label>
                    <input checked={status.status === "InCompleted"} style={{ margin: '0px' }} className='ml-2' type="radio" name={`${number}`} id={`incompleted${status} + ${number + 1}`} />
                </div>
                <div className="l1 flex justify-center place-items-center ml-5">
                    <label htmlFor={`pending${status} + ${number + 2}`} style={{ fontWeight: '400', margin: '0px' }}>Pending</label>
                    <input checked={status.status === "Pending"} style={{ margin: '0px' }} className='ml-2' type="radio" name={`${number}`} id={`pending${status} + ${number + 2}`} />
                </div>
            </div>
        </>
    );
};



export const Status = ({ status }) => {
    return (
        <>
            <p className='mt-4 text-2xl flex justify-center privates'>
                Set the Status of your {status}
            </p>
            <div className="flex justify-center place-items-center lb mt-2 mb-4">
                <select name="" id="">
                    <option value="">Pending</option>
                    <option value="">Completed</option>
                    <option value="">Not Completed</option>
                </select>
            </div>
        </>
    )
}




export const GoalTimeline = () => {
    return (
        <div>
            {/* <p className='mt-4 text-2xl flex justify-center privates'> */}
            {/* Set The Timeline of Your Goal */}
            {/* </p> */}
            <div className="flex justify-center place-items-center lb mt-2 mb-4">
                <select style={{ width: '140px', marginTop: '10px', marginBottom: '3px' }} name="" id="">
                    <option value="">Daily</option>
                    <option value="">Weekly</option>
                    <option value="">Monthly</option>
                </select>
            </div>
        </div>
    )
}

export const SetDates = ({ setGoalDates, Goaldates }) => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ margin: "10px" }}>
                <p>Start Date</p>
                <input onChange={(e) => {
                    setGoalDates({
                        ...Goaldates, startDate: e.target.value
                    })
                }} className='py-2' type="date" name="" id="" required={true} />
            </div>
            <div style={{ margin: "10px" }}>
                <p>End Date</p>
                <input onChange={(e) => {
                    setGoalDates({
                        ...Goaldates, endDate: e.target.value
                    })
                }} className='py-2' type="date" name="" id="" required={true} />
            </div>
        </div>
    )
} 