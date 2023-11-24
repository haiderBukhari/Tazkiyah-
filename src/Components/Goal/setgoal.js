import { useEffect, useState } from 'react';
import './setgoal.css'
import SelfDevelopment from '../../assets/self development.jpg'
import { useNavigate } from 'react-router-dom';
import ToastContainer from '../toast';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const SetGoal = ({ finalGoal, setFinalGoal, proceed, setProceed, corner, setcorner }) => {
    let Navigate = useNavigate();
    const [selfdev, setSelfdev] = useState(!proceed)
    const [personaldev, setPersonaldev] = useState(false)
    const [milestone, setMilestone] = useState(false)
    const [count, setCount] = useState([{ goal: "", status: 'Pending' }]);
    const [goalTitle, setGoalTitle] = useState("")

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
            heading: corner,
            goalTitle,
            goalstatus: 'Pending',
            milestones: count,
        }
        const finalizedgoal = [...finalGoal];
        finalizedgoal.push(goal)
        setFinalGoal(finalizedgoal)
        localStorage.setItem('FinalGoal', JSON.stringify(finalizedgoal));
        ToastContainer("Goal Added Successfully!")
        setSelfdev(true); setPersonaldev(false); setProceed(false); setcorner("");; setMilestone(false); setCount([{ goal: "", status: 'Pending' }]);; setGoalTitle("");
        Navigate('/view-goal')
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
                        proceed && <div className='goalstask m-auto'>
                            <div className="upper-bound">
                                <p className='text-center py-5 text-2xl font-semibold leading-9'>✍️ {corner}</p>
                                <hr />
                            </div>
                            <div className="lower-bound mt-4 px-4">
                                {
                                    !milestone && <div>
                                        <p>Set Your Goal:</p>
                                        <input onChange={(e) => { setGoalTitle(e.target.value) }} className='input-text' type="text" name="" id="" placeholder='Write Goal' value={goalTitle} />
                                        <p className='mt-4 text-2xl flex justify-center privates'>
                                            Make your Goal <i className='mx-2'>Public</i> or <i className='mx-2'>Private </i>
                                        </p>
                                        <div className="flex justify-center place-items-center lb mt-2">
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="l1 flex justify-center place-items-center">
                                                <label htmlFor='private' style={{ fontWeight: '400', margin: '0px' }}>Private</label>
                                                <input style={{ margin: '0px' }} className='ml-2' type="radio" name="q1" id="private" />
                                            </div>
                                            <div className="l1 flex justify-center place-items-center ml-5">
                                                <label htmlFor='public' style={{ fontWeight: '400', margin: '0px' }}>Public</label>
                                                <input style={{ margin: '0px' }} className='ml-2' type="radio" name="q1" id="public" />
                                            </div>
                                        </div>
                                        <div className="btns-list mt-10">
                                            <button disabled={goalTitle.length === 0} style={{ cursor: `${goalTitle.length === 0 ? 'not-allowed' : 'pointer'}` }} className='btns-color' onClick={() => { setMilestone(!milestone) }}>Add MileStone</button>
                                        </div>
                                        <div className="btns-list mt-3">
                                            <button className='btns-color' disabled={goalTitle === "" ? true : false} style={{ cursor: `${goalTitle === "" ? 'not-allowed' : 'pointer'}` }} onClick={() => { SetYourGoal() }}>Save Goal</button>
                                        </div>
                                    </div>
                                }
                                {
                                    milestone && <div>
                                        <p style={{ textAlign: 'center', margin: '0 0 20px 0' }}><strong>Your Goal: </strong> {goalTitle}</p>
                                        <p>Set Your Milestones:</p>
                                        {
                                            count.map((arr, index) => (
                                                <div key={arr[index] * index} className="inp">
                                                    <input onChange={(e) => { handleChange(index, e.target.value) }} className='input-text' type="text" name="" id="" placeholder={`Write Your Milestone ${index + 1}`} value={arr.goal} />
                                                    {
                                                        index !== 0 &&
                                                        <>
                                                            <i onClick={() => { handledDelete(index) }} class="fa-solid fa-trash-can"></i>
                                                        </>
                                                    }
                                                </div>
                                            ))
                                        }
                                        <div className="btns-list mt-10">
                                            <button className='btns-color' disabled={count[0].goal === "" || count[count.length - 1].goal === "" ? true : false} style={{ cursor: `${count[0].goal === "" || count[count.length - 1].goal === "" ? 'not-allowed' : 'pointer'}` }} onClick={() => { setCount([...count, { goal: "", status: "Pending" }]) }}>Add Another MileStone</button>
                                        </div>
                                        <div className="btns-list mt-3">
                                            <button className='btns-color
                                            ' onClick={() => { setMilestone(!milestone) }}>Save MileStones</button>
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