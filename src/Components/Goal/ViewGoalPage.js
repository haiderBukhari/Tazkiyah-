import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './setgoal.css'
import axios from 'axios';
import ToastContainer, { FailedToast } from '../toast';
import { useNavigate } from 'react-router-dom';

export const ViewGoalPage = ({ selectedGoal, proceed, setProceed }) => {
    const Navigate = useNavigate();
    const [currentGoal, setCurrentGoal] = useState(selectedGoal[0]);
    const [milestone, setMilestone] = useState(false)
    const [achievement, setAchievement] = useState(false)
    const AcheivementPercentage = new Array(100).fill(0);
    const [selectedMilestone, setSelectedMilestone] = useState(-1);
    const achivementFormate = {
        name: '',
        percentage: 0
    }
    const SetYourGoal = () => {
        axios.patch(`${process.env.REACT_APP_BACKEND_PORT}/goals/${currentGoal._id}`, currentGoal, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            ToastContainer("Goal Updated")
            Navigate('/view-goal')
            setProceed(!proceed)
        }).catch(err => {
            FailedToast(err.response.data.message)
        }
        );
    }

    let handledDelete = (index) => {
        let newArr = currentGoal.milestones;
        newArr.splice(index, 1);
        setCurrentGoal({ ...currentGoal, milestones: newArr });
    }

    return (
        <>
            <div className='goalsetting'>
                <div style={{ maxWidth: "900px", minWidth: "300px" }} className='goalstask m-auto'>
                    <div className="lower-bound mt-4 px-2">
                        <div className="upper-bound">
                            <p className='text-center py-5 text-2xl font-semibold leading-9'>✍️ Modify you goal</p>
                            <hr />
                        </div>
                        {
                            !milestone && <div className='pt-2'>
                                <div className='flex items-center flex-wrap justify-center' style={{ position: "relative" }}>
                                    <input style={{ maxWidth: "300px", minWidth: "250px", marginRight: "20px" }} onChange={(e) => { setCurrentGoal({ ...currentGoal, goalTitle: e.target.value }) }} className='input-text' type="text" name="" id="" placeholder='Write Your Goal' value={currentGoal.goalTitle} />
                                    <select onChange={(e) => { setCurrentGoal({ ...currentGoal, isPublic: e.target.value }) }} style={{ height: "40px", boxShadow: "1px 1px 10px #ccc", padding: "2px 3px", marginTop: "7px", outline: "none", marginRight: "20px" }}>
                                        <option disabled={true} selected={currentGoal.isPublic === null} value="" key="">Goal Status</option>
                                        <option selected={currentGoal.isPublic} value={true} key="">Public</option>
                                        <option selected={currentGoal.isPublic === false} value={false} key="">Private</option>
                                    </select>
                                    <select onChange={(e) => { setCurrentGoal({ ...currentGoal, timeLine: e.target.value }) }} style={{ height: "40px", boxShadow: "1px 1px 10px #ccc", padding: "2px 3px", marginTop: "7px", outline: "none", marginRight: "20px" }}>
                                        <option value="Daily" selected={currentGoal.timeLine === "Daily"} key="">Daily</option>
                                        <option value="Weekly" selected={currentGoal.timeLine === "Weekly"} key="">Weekly</option>
                                        <option value="Monthly" selected={currentGoal.timeLine === "Monthly"} key="">Monthly</option>
                                    </select>
                                    <div style={{ marginRight: "40px", maxWidth: "200px", minWidth: "100px", width: "100%" }}>
                                        <input
                                            type="time"
                                            value={currentGoal.time}
                                            onChange={(e) => { setCurrentGoal({ ...currentGoal, time: e.target.value }) }}
                                        />
                                    </div>
                                </div>
                                <div style={{ marginTop: "20px", justifyContent: "center", alignItems: "center" }}>
                                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                        <div style={{ margin: "10px" }}>
                                            <p>Start Date</p>
                                            <input onChange={(e) => {
                                                setCurrentGoal({
                                                    ...currentGoal, startDate: e.target.value
                                                })
                                            }} className='py-2' value={currentGoal.startDate} type="date" name="" id="" required={true} />
                                        </div>
                                        <div style={{ margin: "10px" }}>
                                            <p>End Date</p>
                                            <input onChange={(e) => {
                                                setCurrentGoal({
                                                    ...currentGoal, endDate: e.target.value
                                                })
                                            }} className='py-2' value={currentGoal.endDate} type="date" name="" id="" required={true} />
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-center item-center'>
                                    <div className="btns-list mt-10">
                                        <button disabled={currentGoal.goalTitle?.length === 0} style={{ cursor: `${currentGoal.goalTitle?.length === 0 ? 'not-allowed' : 'pointer'}` }} className='btns-color' onClick={() => { setMilestone(!milestone) }}>Update MileStone</button>
                                    </div>
                                    <div className="btns-list mt-10 ml-3">
                                        <button className='btns-color' disabled={currentGoal.goalTitle === "" ? true : false} style={{ cursor: `${currentGoal.goalTitle === "" ? 'not-allowed' : 'pointer'}` }} onClick={() => { SetYourGoal() }}>Update Goal</button>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            milestone && !achievement && <div>
                                <p style={{ textAlign: 'center', margin: '0 0 20px 0' }}><ArrowBackIosIcon style={{ fontSize: "20px", fontWeight: "bold", color: "#000", marginRight: "20px", cursor: "pointer" }} onClick={() => { setMilestone(false) }} /><strong>Your Goal: </strong> {currentGoal.goalTitle}</p>
                                {
                                    currentGoal.milestones.map((arr, index) => (
                                        <div key={arr[index] * index} className="inp">
                                            <div className='flex flex-wrap justify-center items-center'>
                                                <div>
                                                    <p>Set you Milestone {index + 1}</p>
                                                    <input style={{ maxWidth: "500px", minWidth: "250px", width: "100%" }} onChange={(e) => {
                                                        const milestones = currentGoal.milestones;
                                                        milestones[index].goal = e.target.value;
                                                        setCurrentGoal({ ...currentGoal, milestones: milestones })
                                                    }} className='input-text' type="text" name="" id="" placeholder={`Write Your Milestone ${index + 1}`} value={currentGoal.milestones[index].goal} />
                                                </div>
                                                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                                    <div style={{ margin: "10px" }}>
                                                        <p>Start Date</p>
                                                        <input onChange={(e) => {
                                                            const milestones = currentGoal.milestones;
                                                            milestones[index].startDate = e.target.value;
                                                            setCurrentGoal({ ...currentGoal, milestones: milestones })
                                                        }} value={currentGoal.milestones[index].startDate} className='py-2' type="date" name="" id="" required={true} />
                                                    </div>
                                                    <div style={{ margin: "10px" }}>
                                                        <p>End Date</p>
                                                        <input onChange={(e) => {
                                                            const milestones = currentGoal.milestones;
                                                            milestones[index].endDate = e.target.value;
                                                            setCurrentGoal({ ...currentGoal, milestones: milestones })
                                                        }} value={currentGoal.milestones[index].endDate} className='py-2' type="date" name="" id="" required={true} />
                                                    </div>
                                                </div>
                                                <div className='flex justify-center items-center'>
                                                    <select onChange={(e) => {
                                                        const milestones = currentGoal.milestones;
                                                        milestones[index].percentage = e.target.value;
                                                        setCurrentGoal({ ...currentGoal, milestones: milestones })
                                                    }} className='flex' style={{ height: "40px", boxShadow: "1px 1px 10px #ccc", marginTop: `${window.offsetWidth < 645 ? '4px' : '27px'}`, marginRight: "40px", outline: "none" }}>
                                                        <option disabled={true} selected={currentGoal.milestones[index].percentage === null} value="" key="">Status</option>
                                                        {
                                                            AcheivementPercentage.map((Items, index1) => (
                                                                <>
                                                                    <option selected={currentGoal.milestones[index].percentage === index1 + 1} value={index1 + 1}>{index1 + 1}</option>
                                                                </>
                                                            ))
                                                        }
                                                    </select>
                                                </div>
                                                <AddIcon onClick={() => { setAchievement(true); setSelectedMilestone(index); }} style={{ cursor: "pointer", fontSize: '20px', color: "#000", position: "absolute", right: '36px', top: "47%" }} />
                                            </div>
                                            <hr style={{ backgroundColor: "#ccc", width: "auto", paddingTop: "1px", marginTop: "10px", margin: "auto" }} />
                                            {
                                                index !== 0 &&
                                                <>
                                                    <i onClick={() => { handledDelete(index) }} class="fa-solid fa-trash-can"></i>
                                                </>
                                            }
                                        </div>
                                    ))
                                }
                                <div className='flex justify-center'>
                                    <div className="btns-list mt-10">
                                        <button className='btns-color' disabled={currentGoal.milestones[0].goal === "" || currentGoal.milestones[currentGoal.milestones.length - 1].goal === "" ? true : false} style={{ fontSize: "12px", cursor: `${currentGoal.milestones[0].goal === "" || currentGoal.milestones[currentGoal.milestones.length - 1].goal === "" ? 'not-allowed' : 'pointer'}` }} onClick={() => {
                                            const milestones = currentGoal.milestones;
                                            milestones.push({ goal: "", startDate: "", endDate: "", status: 'Pending', percentage: 100, achievement: [achivementFormate] })
                                            setCurrentGoal({ ...currentGoal, milestones: milestones })
                                        }}>Add Another MileStone</button>
                                    </div>
                                    <div style={{ fontSize: "12px" }} className="btns-list mt-10">
                                        <button className='btns-color
                                            ' onClick={() => { setMilestone(!milestone) }}>Save MileStones</button>
                                    </div>
                                </div>
                            </div>
                        }
                        {
                            achievement && <div>
                                <p style={{ textAlign: 'center', margin: '0 0 20px 0' }}><ArrowBackIosIcon style={{ fontSize: "20px", fontWeight: "bold", color: "#000", marginRight: "20px", cursor: "pointer" }} onClick={() => { setAchievement(false) }} /><strong>Your Goal: </strong> {currentGoal.goalTitle}</p>
                                {
                                    <div className="inp flex flex-col justify-center items-center" style={{ width: "100%" }}>
                                        {
                                            currentGoal.milestones[selectedMilestone].achievement.map((Items, index) => (
                                                <div key={index + 90} className='flex justify-center items-center flex-wrap' style={{ width: "100%", position: "relative" }}>
                                                    <input onChange={(e) => {
                                                        const updatedCount = currentGoal.milestones;
                                                        updatedCount[selectedMilestone].achievement[index].name = e.target.value;
                                                        setCurrentGoal({ ...currentGoal, milestones: updatedCount })
                                                    }} type="text" style={{ maxWidth: "500px", minWidth: "240px", margin: "-10px 20px", width: "100%" }} placeholder='Write Acheivement' value={currentGoal.milestones[selectedMilestone].achievement[index].name} />
                                                    <select onChange={(e) => {
                                                        const updatedCount = currentGoal.milestones;
                                                        updatedCount[selectedMilestone].achievement[index].percentage = e.target.value;
                                                        setCurrentGoal({ ...currentGoal, milestones: updatedCount })
                                                    }} className='flex' style={{ outline: true, height: "40px", boxShadow: "1px 1px 10px #ccc", marginTop: "20px", marginRight: "40px" }}>
                                                        <option disabled={true} selected={true} value="" key="">
                                                            Achievement Percentage
                                                        </option>
                                                        {Array.from({ length: currentGoal.milestones[selectedMilestone].percentage }, (_, index) => (
                                                            <option key={index + 1} value={index + 1}>
                                                                {index + 1}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <AddIcon onClick={() => {
                                                        const updatedCount = currentGoal.milestones;
                                                        updatedCount[selectedMilestone].achievement.push(achivementFormate)
                                                        setCurrentGoal({ ...currentGoal, milestones: updatedCount })
                                                    }} style={{ cursor: "pointer", fontSize: "20px", color: "#000", position: "absolute", right: "30px", top: "50%" }} />
                                                    {
                                                        index !== 0 && <i style={{ marginTop: "10px" }} onClick={() => {
                                                            const updatedCount = currentGoal.milestones;
                                                            updatedCount[selectedMilestone].achievement.splice(index, 1);
                                                            setCurrentGoal({ ...currentGoal, milestones: updatedCount })
                                                        }} class="fa-solid fa-trash-can"></i>
                                                    }
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                                <div className='flex justify-center'>
                                    <div style={{ fontSize: "12px" }} className="btns-list mt-10">
                                        <button className='btns-color
                                            ' onClick={() => { setAchievement(false) }}>Save Acheivement</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}