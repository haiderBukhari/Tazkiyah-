import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './setgoal.css'
import { Select } from './select';
import ToastContainer from '../toast';
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


export const ViewGoals = ({ finalGoal, setFinalGoal, setProceed }) => {
    let [edit, setEdit] = useState(false)
    let [editindex, setEditIndex] = useState(0)
    let navigate = useNavigate();
    const [deleteVerfication, setDeleteVerfication] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(-1);
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
        if (window.innerWidth < 700) {
            localStorage.setItem('FinalGoal', JSON.stringify(newArr));
        }
    }
    let addmilestone = () => {
        let newArr = [...finalGoal];
        newArr[editindex].milestones.push({ goal: "" });
        setFinalGoal(newArr);
        if (window.innerWidth < 700) {
            localStorage.setItem('FinalGoal', JSON.stringify(newArr));
        }
    }
    let setmilestone = (index, value) => {
        let newArr = [...finalGoal];
        newArr[editindex].milestones[index].goal = value;
        setFinalGoal(newArr);
        if (window.innerWidth < 700) {
            localStorage.setItem('FinalGoal', JSON.stringify(newArr));
        }
    }
    let handlechangegoal = (value) => {
        let newArr = [...finalGoal];
        newArr[editindex].goalTitle = value;
        setFinalGoal(newArr);
        if (window.innerWidth < 700) {
            localStorage.setItem('FinalGoal', JSON.stringify(newArr));
        }
    }
    return (
        <div style={{ position: "relative" }}>
            <h1 className='text-center font-semibold main-heading' style={{ paddingTop: '50px', fontSize: '28px' }}>{`${!edit ? "Your Goals" : "Edit Your Goal"}`}</h1>
            {
                window.innerWidth > 700 && <div onClick={() => { setProceed(true) }} style={{ position: 'absolute', top: -20, left: '4%', color: '#000', display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '20px' }}>
                    <ArrowLeftIcon style={{ fontSize: '30px' }} />
                    <p>Go Back</p>
                </div>
            }
            <div className="flex justify-center my-5 mt-10">
                <button onClick={() => { navigate('/goal') }} className='goaldev'>Add New Goal</button>
            </div>
            <div className="container-main">
                {finalGoal &&
                    !edit && finalGoal.map((item, index) => (
                        <div className="viewgoalcontainer p-2 px-4 ">
                            <div className="heading">
                                <h1 className='mt-2 mb-4 text-center text-2xl font-semibold goal-heading'>Your {item.heading.split(" ").slice(2).join(' ')}</h1>
                                <i onClick={() => { setDeleteVerfication(!deleteVerfication); setDeleteIndex(index) }} class="fa-solid fa-trash-can"></i>
                                <i onClick={() => { setEdit(true); setEditIndex(index) }} class="fa-solid fa-pen-to-square headingi"></i>
                                <hr />
                            </div>
                            <div className="viewgoal flex mt-3">
                                <span className='pr-2 text-lg font-semibold'>Goal:</span>
                                <h2 className='ml-3'>{item.goalTitle}</h2>
                            </div>
                            {
                                item.milestones.length !== 0 && item.milestones[0].goal !== '' && <div className="responsibilities mt-5">
                                    <span className='pr-2 text-lg font-semibold'>Milstones:</span>
                                    <ul className='ml-3 ull'>
                                        {item.milestones.map((item, index) => {
                                            return <div className='flex fllf flex-wrap mt-3'>
                                                <p className='font-semibold mr-2 text-base'>{index + 1})</p>
                                                <li key={index}>{item.goal}</li>
                                                <li style={{ marginLeft: '10px' }}> Status:  {item.status}</li>
                                            </div>
                                        })}
                                    </ul>
                                </div>
                            }
                        </div>
                    ))
                }
                {
                    edit && <div style={{ marginRight: '40px' }} className='flpp'>
                        <div className="main-data">
                            <p className='font-semibold mr-2 text-base my-3'>{finalGoal[editindex].heading.split(" ").slice(2).join(' ')}</p>
                            <hr className='mb-3' />
                            <p className='font-semibold mr-2 text-base'>Your Goal: </p>
                            <input onChange={(e) => { handlechangegoal(e.target.value) }} type="text" name="" id="" value={finalGoal[editindex].goalTitle} required />
                            <Select status={{
                                value: "Goal", status: {
                                    status: finalGoal[0].status
                                }
                            }} />
                            <div className="milestones-goals mt-4">
                                {
                                    finalGoal[editindex].milestones.map((item, index) => (
                                        <>
                                            <div key={index} className="m1 mt-4">
                                                <p className='font-semibold mr-2 text-base'>Milstone {index + 1}: </p>
                                                <input onChange={(e) => { setmilestone(index, e.target.value) }} type="text" name="" id="" value={item.goal} required />
                                                <i onClick={() => { milestonedelete(index) }} class="fa-solid fa-trash-can"></i>
                                            </div>
                                            <Select status={{ value: "Milestone", status: item.status }} key={`select-${index}`} />
                                        </>
                                    ))
                                }
                                <div className="flex flex-row newro justify-center">
                                    <div className="btns-lists mt-5">
                                        <button disabled={finalGoal[editindex].milestones[finalGoal[editindex].milestones.length - 1] && finalGoal[editindex].milestones[finalGoal[editindex].milestones.length - 1].goal === ''
                                        } style={{ border: '0', color: '#fff', outline: 'none' }} onClick={() => { addmilestone() }}>Add Another MileStone</button>
                                    </div>
                                    <div className="btns-lists mt-5">
                                        <button style={{ border: '0', color: '#fff' }} onClick={() => { setEdit(false); ToastContainer("Goal Saved Successfully!") }}>Save Goal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {
                    finalGoal.length === 0 && (
                        <p style={{ lineHeight: "3.4rem" }} className='m-3 text-3xl text-center'>You don't have any Active Goal yet. Click on the Button and Add Your Goal</p>
                    )
                }
            </div>
            <React.Fragment>
                <Dialog
                    open={deleteVerfication}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Delete Confirmation</h1>
                        <hr style={{ margin: '10px 0 0 0' }} />
                    </DialogTitle>
                    <div style={{ padding: "20px" }}>
                        <p style={{ fontSize: '14px', textAlign: 'justify', marginBottom: '20px' }}>Are you sure you want to delete the Goal. Deleted Goal will not be recovered afterwards.</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "end", padding: "0 20px 20px 20px" }}>
                        <Button style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }} onClick={() => { setDeleteVerfication(!deleteVerfication); }}>No Close</Button>
                        <Button style={{ fontSize: '12px', border: '1px solid #ccc', marginLeft: "10px", backgroundColor: "#15375c", color: "#fff" }} onClick={() => { setDeleteVerfication(!deleteVerfication); handledelete(deleteIndex) }} autoFocus>
                            Delete
                        </Button>
                    </div>
                </Dialog>
            </React.Fragment>
        </div>
    )
}