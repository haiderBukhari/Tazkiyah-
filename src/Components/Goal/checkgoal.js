import React, { useEffect, useState } from 'react'
import ToastContainer from '../toast'
import { useNavigate } from 'react-router-dom'
import './setgoal.css'

export const Checkgoal = ({ finalGoal, setFinalGoal }) => {
    let [edit, setEdit] = useState(false)
    let [editindex, setEditIndex] = useState(0)
    let navigate = useNavigate();
    useEffect(() => {
        document.querySelector('body').scrollTo({
            top: 0, behavior:
                'smooth'
        })
    }, [edit, editindex])
    let handledelete = (index) => {
        let newArr = [...finalGoal];
        newArr.splice(index, 1);
        setFinalGoal(newArr);
        localStorage.setItem('FinalGoal', JSON.stringify(newArr));
        ToastContainer("Goal Deleted Successfully!")
    }

    let milestonedelete = (index) => {
        let newArr = [...finalGoal];
        newArr[editindex].milestones.splice(index, 1);
        setFinalGoal(newArr);
        localStorage.setItem('FinalGoal', JSON.stringify(newArr));
    }
    let addmilestone = () => {
        let newArr = [...finalGoal];
        newArr[editindex].milestones.push({ goal: "" });
        setFinalGoal(newArr);
        localStorage.setItem('FinalGoal', JSON.stringify(newArr));
    }
    let setmilestone = (index, value) => {
        let newArr = [...finalGoal];
        newArr[editindex].milestones[index].goal = value;
        setFinalGoal(newArr);
        localStorage.setItem('FinalGoal', JSON.stringify(newArr));
    }
    let handlechangegoal = (value) => {
        let newArr = [...finalGoal];
        newArr[editindex].goalTitle = value;
        setFinalGoal(newArr);
        localStorage.setItem('FinalGoal', JSON.stringify(newArr));
    }
    return (
        <React.Fragment>
            <div>
                <h1 className='text-center text-3xl font-semibold main-heading'>{`${!edit ? "Your Goals" : "Edit Your Goal"}`}</h1>
                <div className="flex justify-center my-5 mt-10">
                    <button onClick={() => { navigate('/goal') }} className='goaldev'>Add New Goal</button>
                </div>
                <div className="container-main">
                    {finalGoal &&
                        !edit && finalGoal.map((item, index) => (
                            <div data-aos="fade-up" className="viewgoalcontainer p-2 px-4 ">
                                <div className="heading">
                                    <h1 className='mt-2 mb-4 text-center text-2xl font-semibold goal-heading'>Your {item.heading.split(" ").slice(2).join(' ')}</h1>
                                    <i onClick={() => { handledelete(index) }} class="fa-solid fa-trash-can"></i>
                                    <i onClick={() => { setEdit(true); setEditIndex(index) }} class="fa-solid fa-pen-to-square headingi"></i>
                                    <hr />
                                </div>
                                <div className="viewgoal flex mt-3">
                                    <span className='pr-2 text-lg font-semibold'>Goal:</span>
                                    <h2 className='ml-3'>{item.goalTitle}</h2>
                                </div>
                                {
                                    item.milestones.length !== 0 && item.milestones[0].goal !== '' && <div className="responsibilities mt-5">
                                        <span className='pr-2'>Milstones:</span>
                                        <ul className='ml-3 ull'>
                                            {item.milestones.map((item, index) => {
                                                return <div className='flex fllf'>
                                                    <p style={{ margin: '0px' }} className='font-semibold mr-2 text-base'>{index + 1})</p>
                                                    <li key={index}>{item.goal}</li>
                                                </div>
                                            })}
                                        </ul>
                                    </div>
                                }
                            </div>
                        ))
                    }
                    {
                        edit && <div className='flpp' data-aos="flip-down">
                            <div className="main-data">
                                <p className='font-semibold mr-2 my-3 text-6xl'>{finalGoal[editindex].heading.split(" ").slice(2).join(' ')}</p>
                                <hr className='mb-3' />
                                <p className='font-semibold mr-2 gaga'>Your Goal: </p>
                                <input onChange={(e) => { handlechangegoal(e.target.value) }} type="text" name="" id="" value={finalGoal[editindex].goalTitle} required />
                                <div className="milestones-goals mt-4">
                                    {
                                        finalGoal[editindex].milestones.map((item, index) => (
                                            <>
                                                <div className="m1 mt-4">
                                                    <p className='font-semibold mr-2 text-base'>Milstone {index + 1}: </p>
                                                    <input onChange={(e) => { setmilestone(index, e.target.value) }} type="text" name="" id="" value={item.goal} required />
                                                    <i onClick={() => { milestonedelete(index) }} class="fa-solid fa-trash-can"></i>
                                                </div>
                                            </>
                                        ))
                                    }
                                    <div className="flex flex-col newro">
                                        <div className="btns-lists mt-5">
                                            <button onClick={() => { addmilestone() }}>Add Another MileStone</button>
                                        </div>
                                        <div className="btns-lists mt-4">
                                            <button onClick={() => { setEdit(false); ToastContainer("Goal Saved Successfully!") }}>Save Goal</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        finalGoal.length === 0 && (
                            <p style={{ lineHeight: "3.4rem" }} className='m-3 text-3xl text-center'>You dont have any Active Goal. Click on the Button to Add Your Goal</p>
                        )
                    }
                </div>
            </div>
        </React.Fragment>
    )
}