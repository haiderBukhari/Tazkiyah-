export const Select = ({status}) => {
    return (
        <>
            <p className='mt-4 text-2xl flex justify-center privates'>
                Mark the Status of your {status}
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
