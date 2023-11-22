import { useEffect, useState } from 'react';
import './setgoal.css'
import SelfDevelopment from '../../assets/self development.jpg'
import { useNavigate } from 'react-router-dom';
import ToastContainer from '../toast';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const SetGoal = ({ finalGoal, setFinalGoal }) => {
    let Navigate = useNavigate();
    const [selfdev, setSelfdev] = useState(true)
    const [personaldev, setPersonaldev] = useState(false)
    const [proceed, setProceed] = useState(false)
    const [corner, setcorner] = useState("");
    const [milestone, setMilestone] = useState(false)
    const [count, setCount] = useState([{ goal: "" }]);
    const [goalTitle, setGoalTitle] = useState("")

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
            milestones: count,
        }
        const finalizedgoal = [...finalGoal];
        finalizedgoal.push(goal)
        setFinalGoal(finalizedgoal)
        localStorage.setItem('FinalGoal', JSON.stringify(finalizedgoal));
        ToastContainer("Goal Added Successfully!")
        setSelfdev(true); setPersonaldev(false); setProceed(false); setcorner("");; setMilestone(false); setCount([{ goal: "" }]);; setGoalTitle("");
        Navigate('/view-goal')
    }
    let handleback = () => {
        if (!selfdev && proceed && milestone) {
            setMilestone(!milestone)
        }
        else if (!selfdev && proceed && !milestone) {
            setProceed(!proceed); setGoalTitle(""); setMilestone(false)
            setCount([{ goal: "" }])
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
            <div className='empty'>
                <div style={{ marginBottom: '40px', marginTop: '10px', fontSize: '20px' }} className='mainlmn'>
                    <div>
                        {
                            !selfdev && <div style={{ display: 'flex', marginTop: '10px' }}>
                                <p style={{ marginRight: '10px' }}>Navigate: </p>
                                <p onClick={() => { setSelfdev(!selfdev); setProceed(false) }} style={{ color: 'blue', cursor: 'pointer', textDecoration: `${selfdev === false && proceed !== true && milestone !== true ? 'underline' : ''}`, textUnderlineOffset: `${selfdev === false && proceed !== true && milestone !== true ? '0.3em' : ''}`, textDecorationThickness: `${selfdev === false && proceed !== true && milestone !== true ? '0.1em' : ''}`, fontWeight: `${selfdev === false && proceed !== true && milestone !== true ? '600' : ''}` }}>Self Development</p>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            !selfdev && proceed && <div style={{ display: 'flex', marginTop: '10px' }}>
                                <p style={{ margin: '0 10px' }}>/</p>
                                <p onClick={() => { setProceed(!proceed); setGoalTitle(""); setMilestone(false); setCount([{ goal: "" }]) }} style={{ color: 'blue', cursor: 'pointer', textDecoration: `${proceed !== false && milestone !== true ? 'underline' : ''}`, textUnderlineOffset: `${proceed !== false && milestone !== true ? '0.3em' : ''}`, textDecorationThickness: `${proceed !== false && milestone !== true ? '0.1em' : ''}`, fontWeight: `${proceed !== false && milestone !== true ? '600' : ''}` }}>Set Goal</p>
                            </div>
                        }
                    </div>
                    <div>
                        {
                            !selfdev && proceed && milestone && <div style={{ display: 'flex', marginTop: '10px' }}>
                                <p style={{ margin: '0 10px' }}>/</p>
                                <p onClick={() => { setMilestone(!milestone) }} style={{ color: 'blue', cursor: 'pointer', textDecoration: `${milestone === true ? 'underline' : ''}`, textUnderlineOffset: `${milestone === true ? '0.3em' : ''}`, textDecorationThickness: `${milestone === true ? '0.1em' : ''}`, fontWeight: `${milestone === true ? '600' : ''}` }}>Set Responsibility</p>
                            </div>
                        }
                    </div>
                </div>
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
                            <div className="btns flex justify-center mt-10">
                                <button onClick={() => { setSelfdev(!selfdev) }} className='goaldev'>Set Goal</button>
                            </div>
                        </div>
                    </>}
                {!selfdev && <div className='goalsetting'>
                    {
                        !proceed && <p className='text-center mb-5 text-2xl leading-9'>Please select the role with which you intend to establish your objective.</p>
                    }
                    {
                        !personaldev && !proceed && <div data-aos="flip-up" className="btns-list">
                            <button onClick={() => { setProceed(true); setcorner("Set your Goal as a Role of Student") }} className='goaldev'>Role as Student</button>
                            <button onClick={() => { setProceed(true); setcorner("Set your Goal as a Role of Daughter") }} className='goaldev'>Role as Daughter</button>
                            <button onClick={() => { setProceed(true); setcorner("Set your Goal as a Role of Responsible Pakistani Citizen") }} className='goaldev'>Responsibilities as Pakistani citizens</button>
                            <button onClick={() => { setProceed(true); setcorner("Set your Goal to prepare for Professional Life") }} className='goaldev'>Preparation for Professional life </button>
                            <button onClick={() => { setProceed(true); setcorner("Set your Goal as a Role of Muslim Ummah") }} className='goaldev'>Muslim Ummah </button>
                            <button onClick={() => { setPersonaldev(!personaldev) }} className='goaldev'>Personal Development</button>
                        </div>
                    }
                    {
                        personaldev && !proceed && <div data-aos="flip-up" className="btns-list">
                            <button onClick={() => { setProceed(true); setcorner("Set your Spiritual Goal") }} className='goaldev'>Spiritual</button>
                            <button onClick={() => { setProceed(true); setcorner("Set your Intellectual Goal") }} className='goaldev'>Intellectual</button>
                            <button onClick={() => { setProceed(true); setcorner("Set your Physical Goal") }} className='goaldev'>Physical</button>
                            <button onClick={() => { setProceed(true); setcorner("Set your Emotional Goal") }} className='goaldev'>Emotional  </button>
                        </div>
                    }
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
                                        {/* <Select status={status[0]} /> */}
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
                                            <button className='btns-color' onClick={() => { setMilestone(!milestone) }}>Add MileStone</button>
                                        </div>
                                        <div className="btns-list mt-3">
                                            <button className='btns-color' disabled={goalTitle === "" ? true : false} style={{ cursor: `${goalTitle === "" ? 'not-allowed' : 'pointer'}` }} onClick={() => { SetYourGoal() }}>Save Goal</button>
                                        </div>
                                    </div>
                                }
                                {
                                    milestone && <div>
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
                                                    {/* <Select status={status[1]} /> */}
                                                </div>
                                            ))
                                        }
                                        <div className="btns-list mt-10">
                                            <button className='btns-color' disabled={count[0].goal === "" || count[count.length - 1].goal === "" ? true : false} style={{ cursor: `${count[0].goal === "" || count[count.length - 1].goal === "" ? 'not-allowed' : 'pointer'}` }} onClick={() => { setCount([...count, { goal: "" }]) }}>Add Another MileStone</button>
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