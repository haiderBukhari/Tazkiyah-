export const Select = ({ status }) => {
    return (
        <>
            <p className='mt-4 text-2xl flex justify-center privates'>
                Mark the Status of your {status}
            </p>
            <div className="flex justify-center place-items-center flex-wrap lb mt-2">
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="l1 flex justify-center place-items-center">
                    <label htmlFor='completed' style={{ fontWeight: '400', margin: '0px' }}>Completed</label>
                    <input style={{ margin: '0px' }} className='ml-2' type="radio" name="q1" id="completed" />
                </div>
                <div className="l1 flex justify-center place-items-center ml-5">
                    <label htmlFor='incompleted' style={{ fontWeight: '400', margin: '0px' }}>InCompleted</label>
                    <input style={{ margin: '0px' }} className='ml-2' type="radio" name="q1" id="incompleted" />
                </div>
                <div className="l1 flex justify-center place-items-center ml-5">
                    <label htmlFor='pending' style={{ fontWeight: '400', margin: '0px' }}>Pending</label>
                    <input style={{ margin: '0px' }} className='ml-2' type="radio" name="q1" id="pending" />
                </div>
            </div>
        </>
    )
}


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
