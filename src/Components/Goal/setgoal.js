import { useEffect, useState } from 'react';
import './setgoal.css'
import SelfDevelopment from '../../assets/self development.jpg'
import { useNavigate } from 'react-router-dom';
import ToastContainer, { FailedToast } from '../toast';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { SetDates } from './select';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';
import { useSelector } from 'react-redux';
export const SetGoal = ({ finalGoal, setFinalGoal, proceed, setProceed, corner, setcorner }) => {
    let Navigate = useNavigate();
    const [selfdev, setSelfdev] = useState(!proceed)
    const [personaldev, setPersonaldev] = useState(false)
    const [milestone, setMilestone] = useState(false)
    const [achievement, setAchievement] = useState(false)
    const [selectedMilestone, setSelectedMilestone] = useState(-1);
    const setterId = useState(useSelector(state => state)?.userId)
    const [goalStatus, setGoalStatus] = useState({
        isPublic: null,
        timeLine: "Daily",
        time: ""
    })
    const [Goaldates, setGoalDates] = useState({
        startDate: "",
        endDate: ""
    })
    const achivementFormate = {
        name: '',
        percentage: 0
    }
    const [count, setCount] = useState([{ goal: "", startDate: "", endDate: "", status: 'Pending', percentage: 100, achievement: [achivementFormate] }]);
    const [goalTitle, setGoalTitle] = useState("")
    const AcheivementPercentage = new Array(100).fill(0);
    useEffect(() => {
        setSelfdev(!proceed)
    }, [proceed])
    useEffect(() => {
        document.querySelector('body').scrollTo({
            top: 0, behavior:
                'smooth'
        })
    }, [selfdev, personaldev, proceed, milestone])

    let handleChange = (index, value) => {
        let newArr = [...count];
        newArr[index].goal = value;
        setCount(newArr);
    }
    let handledDelete = (index) => {
        let newArr = [...count];
        console.log(newArr, index);
        newArr.splice(index, 1);
        setCount(newArr);
    }
    let SetYourGoal = () => {
        const goal = {
            setterId: setterId[0],
            goalTitle,
            isPublic: goalStatus.isPublic,
            timeLine: goalStatus.timeLine,
            time: goalStatus.time,
            startDate: Goaldates.startDate,
            endDate: Goaldates.endDate,
            goalstatus: 'Pending',
            heading: corner,
            milestones: count,
        }
        console.log(goal)
        axios.post(`${process.env.REACT_APP_BACKEND_PORT}/goals`, goal, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            ToastContainer("Goal Saved")
            setSelfdev(true); setPersonaldev(false); setProceed(false); setcorner("");; setMilestone(false); setCount([{ goal: "", status: 'Pending' }]);; setGoalTitle("");
            Navigate('/achieved-goals')
        }).catch(err => {
            FailedToast(err.response.data.message)
        }
        );
    }
    let handleback = () => {
        if (!selfdev && proceed && milestone) {
            setMilestone(!milestone)
        }
        else if (!selfdev && proceed && !milestone) {
            setProceed(!proceed); setGoalTitle(""); setMilestone(false)
            setCount([{ goal: "", status: "Pending" }])
        }
        else if (!selfdev && !proceed && !milestone) {
            setSelfdev(!selfdev);
        }
    }
    return (
        <div>
            <div className='arrow' style={{ marginLeft: '20px' }}>
                {
                    !selfdev && <ArrowBackIcon onClick={handleback} style={{ width: '30px', fontSize: '33px', color: '#15375c', cursor: 'pointer' }} />
                }
            </div>
            {
                !proceed &&
                <>
                    <h1 className='text-center text-5xl font-semibold main-heading'>Set Goal</h1>
                    {
                        (finalGoal.length && selfdev && !personaldev && !proceed && !milestone) ? (<div className="btns flex justify-center mt-10 goalfinal mb-1">
                            <button onClick={() => { Navigate('/view-goal') }} className='goaldev'>View Your Goals</button>
                        </div>) : ""
                    }
                </>
            }
            <div data-aos="fade-up" className="self-development">
                {selfdev &&
                    <>
                        <img className='delfdev' src={SelfDevelopment} alt="" srcset="" />
                        <div className="text">
                            <p className='text1'>Initiating the journey toward a more meaningful and satisfying life begins with the act of establishing a goal using the self-development feature.</p>
                            <p className='text2'>Click on the Self Development Button to define your objective, set milestones, and work towards it.</p>
                        </div>
                    </>}
                {!selfdev && <div className='goalsetting'>
                    {
                        proceed && <div style={{ maxWidth: "900px", minWidth: "300px" }} className='goalstask m-auto'>
                            <div className="upper-bound">
                                <p className='text-center py-5 text-2xl font-semibold leading-9'>✍️ {corner}</p>
                                <hr />
                            </div>
                            <div className="lower-bound mt-4 px-4">
                                {
                                    !milestone && <div className=''>
                                        <div className='flex items-center flex-wrap justify-center' style={{ position: "relative" }}>
                                            <input style={{ maxWidth: "300px", minWidth: "250px", marginRight: "20px" }} onChange={(e) => { setGoalTitle(e.target.value) }} className='input-text' type="text" name="" id="" placeholder='Write Your Goal' value={goalTitle} />
                                            <select onChange={(e) => { setGoalStatus({ ...goalStatus, isPublic: e.target.value }) }} style={{ height: "40px", boxShadow: "1px 1px 10px #ccc", padding: "2px 3px", marginTop: "7px", outline: "none", marginRight: "20px" }}>
                                                <option disabled={true} selected={goalStatus.isPublic === null} value="" key="">Goal Status</option>
                                                <option selected={goalStatus.isPublic} value={true} key="">Public</option>
                                                <option selected={goalStatus.isPublic === false} value={false} key="">Private</option>
                                            </select>
                                            <select onChange={(e) => { setGoalStatus({ ...goalStatus, timeLine: e.target.value }) }} style={{ height: "40px", boxShadow: "1px 1px 10px #ccc", padding: "2px 3px", marginTop: "7px", outline: "none", marginRight: "20px" }}>
                                                <option value="Daily" selected={goalStatus.timeLine === "Daily"} key="">Daily</option>
                                                <option value="Weekly" selected={goalStatus.timeLine === "Weekly"} key="">Weekly</option>
                                                <option value="Monthly" selected={goalStatus.timeLine === "Monthly"} key="">Monthly</option>
                                            </select>
                                            <div style={{ marginRight: "40px", maxWidth: "200px", minWidth: "100px", width: "100%" }}>
                                                <input
                                                    type="time"
                                                    value={goalStatus.time}
                                                    onChange={(e) => { setGoalStatus({ ...goalStatus, time: e.target.value }) }}
                                                />
                                            </div>
                                        </div>
                                        <div style={{ marginTop: "20px", justifyContent: "center", alignItems: "center" }}>
                                            <SetDates setGoalDates={setGoalDates} Goaldates={Goaldates} />
                                        </div>
                                        <div className='flex justify-center item-center'>
                                            <div className="btns-list mt-10">
                                                <button disabled={goalTitle.length === 0} style={{ cursor: `${goalTitle.length === 0 ? 'not-allowed' : 'pointer'}` }} className='btns-color' onClick={() => { setMilestone(!milestone) }}>Add MileStone</button>
                                            </div>
                                            <div className="btns-list mt-10 ml-3">
                                                <button className='btns-color' disabled={goalTitle === "" || count[0].startDate=== "" || count[0].endDate === "" || Goaldates.startDate === "" || Goaldates.endDate === "" || goalStatus.isPublic===null || goalStatus.time === "" ? true : false} style={{ cursor: `${goalTitle === "" || count[0].startDate=== "" || count[0].endDate === "" || Goaldates.startDate === "" || Goaldates.endDate === "" || goalStatus.isPublic===null || goalStatus.time === "" ? 'not-allowed' : 'pointer'}` }} onClick={() => { SetYourGoal() }}>Save Goal</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {
                                    milestone && !achievement && <div>
                                        <p style={{ textAlign: 'center', margin: '0 0 20px 0' }}><ArrowBackIosIcon style={{ fontSize: "20px", fontWeight: "bold", color: "#000", marginRight: "20px", cursor: "pointer" }} onClick={() => { setMilestone(false) }} /><strong>Your Goal: </strong> {goalTitle}</p>
                                        {
                                            count.map((arr, index) => (
                                                <div key={arr[index] * index} className="inp">
                                                    <div className='flex flex-wrap justify-center items-center'>
                                                        <div>
                                                            <p>Set you Milestone {index + 1}</p>
                                                            <input style={{ maxWidth: "500px", minWidth: "250px", width: "100%" }} onChange={(e) => { handleChange(index, e.target.value) }} className='input-text' type="text" name="" id="" placeholder={`Write Your Milestone ${index + 1}`} value={arr.goal} />
                                                        </div>
                                                        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                                            <div style={{ margin: "10px" }}>
                                                                <p>Start Date</p>
                                                                <input onChange={(e) => {
                                                                    let newArr = [...count];
                                                                    newArr[index].startDate = e.target.value;
                                                                    setCount(newArr);
                                                                }} value={count[index].startDate} className='py-2' type="date" name="" id="" required={true} />
                                                            </div>
                                                            <div style={{ margin: "10px" }}>
                                                                <p>End Date</p>
                                                                <input onChange={(e) => {
                                                                    let newArr = [...count];
                                                                    newArr[index].endDate = e.target.value;
                                                                    setCount(newArr);
                                                                }} value={count[index].endDate} className='py-2' type="date" name="" id="" required={true} />
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-center items-center'>
                                                            <select onChange={(e) => {
                                                                const data = [...count];
                                                                data[index].percentage = e.target.value;
                                                                setCount(data);
                                                            }} className='flex' style={{ height: "40px", boxShadow: "1px 1px 10px #ccc", marginTop: `${window.offsetWidth < 645 ? '4px' : '27px'}`, marginRight: "40px", outline: "none" }}>
                                                                <option disabled={true} selected={count[index].percentage === null} value="" key="">Status</option>
                                                                {
                                                                    AcheivementPercentage.map((Items, index1) => (
                                                                        <>
                                                                            <option selected={count[index].percentage === index1 + 1} value={index1 + 1}>{index1 + 1}</option>
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
                                                <button className='btns-color' disabled={count[0].goal === "" || count[count.length - 1].goal === "" ? true : false} style={{ fontSize: "12px", cursor: `${count[0].goal === "" || count[count.length - 1].goal === "" ? 'not-allowed' : 'pointer'}` }} onClick={() => { setCount([...count, { goal: "", startDate: "", endDate: "", status: 'Pending', percentage: 100, achievement: [achivementFormate] }]) }}>Add Another MileStone</button>
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
                                        <p style={{ textAlign: 'center', margin: '0 0 20px 0' }}><ArrowBackIosIcon style={{ fontSize: "20px", fontWeight: "bold", color: "#000", marginRight: "20px", cursor: "pointer" }} onClick={() => { setAchievement(false) }} /><strong>Your Goal: </strong> {goalTitle}</p>
                                        {
                                            <div className="inp flex flex-col justify-center items-center" style={{ width: "100%" }}>
                                                {
                                                    count[selectedMilestone].achievement.map((Items, index) => (
                                                        <div key={index + 90} className='flex justify-center items-center flex-wrap' style={{ width: "100%", position: "relative" }}>
                                                            <input onChange={(e) => {
                                                                const updatedCount = [...count];
                                                                const updatedAchievements = [...updatedCount[selectedMilestone].achievement];
                                                                updatedAchievements[index].name = e.target.value;
                                                                updatedCount[selectedMilestone].achievement = updatedAchievements;
                                                                setCount(updatedCount);
                                                            }} type="text" style={{ maxWidth: "500px", minWidth: "240px", margin: "-10px 20px", width: "100%" }} placeholder='Write Acheivement' value={Items.name} />
                                                            <select onChange={(e) => {
                                                                const updatedCount = [...count];
                                                                const updatedAchievements = [...updatedCount[selectedMilestone].achievement];
                                                                updatedAchievements[index].percentage = e.target.value;
                                                                updatedCount[selectedMilestone].achievement = updatedAchievements;
                                                                setCount(updatedCount);
                                                            }} className='flex' style={{ outline: true, height: "40px", boxShadow: "1px 1px 10px #ccc", marginTop: "20px", marginRight: "40px" }}>
                                                                <option disabled={true} selected={true} value="" key="">
                                                                    Achievement Percentage
                                                                </option>
                                                                {Array.from({ length: count[selectedMilestone].percentage }, (_, index) => (
                                                                    <option key={index + 1} value={index + 1}>
                                                                        {index + 1}
                                                                    </option>
                                                                ))}
                                                            </select>
                                                            <AddIcon onClick={() => {
                                                                const updatedCount = [...count];
                                                                const newAchievement = { ...achivementFormate };
                                                                updatedCount[selectedMilestone].achievement.push(newAchievement);
                                                                setCount(updatedCount);
                                                            }} style={{ cursor: "pointer", fontSize: "20px", color: "#000", position: "absolute", right: "30px", top: "50%" }} />
                                                            {
                                                                index !== 0 && <i style={{ marginTop: "10px" }} onClick={() => {
                                                                    const updatedCount = [...count];
                                                                    updatedCount[selectedMilestone].achievement.splice(index, 1);
                                                                    setCount(updatedCount);
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
                    }
                </div>}
            </div>
        </div >
    );
}