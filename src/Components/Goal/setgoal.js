import { useEffect, useState } from 'react';
import './setgoal.css';
import SelfDevelopment from '../../assets/self development.jpg'
import { useNavigate } from 'react-router-dom';
import ToastContainer from '../toast';
export const SetGoal = ({finalGoal, setFinalGoal}) => {
    let Navigate = useNavigate();
    const [selfdev, setSelfdev] = useState(true)
    const [personaldev, setPersonaldev] = useState(false)
    const [proceed, setProceed] = useState(false)
    const [corner, setcorner] = useState("");
    const [milestone, setMilestone] = useState(false)
    const [count, setCount] = useState([{ goal: "" }]);
    const [goalTitle, setGoalTitle] = useState("")
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [selfdev, personaldev, proceed])

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
        const finalizedgoal = [...finalGoal, goal]
        setFinalGoal(finalizedgoal)
        localStorage.setItem('FinalGoal', JSON.stringify(finalizedgoal));
        ToastContainer("Goal Added Successfully!")
        setSelfdev(true); setPersonaldev(false); setProceed(false); setcorner("");; setMilestone(false); setCount([{ goal: "" }]);; setGoalTitle("");
        Navigate('/view/goal')
    }
    return (
        <div>
            {!proceed &&
                <>
                    <h1 className='text-center text-5xl font-semibold main-heading'>Set Goal</h1>
                    {
                        (finalGoal.length && selfdev && !personaldev && !proceed && !milestone) ? (<div className="btns flex justify-center mt-10 goalfinal mb-1">
                        <button onClick={()=>{Navigate('/view/goal')}} className='goaldev'>View Your Goals</button>
                    </div>):""
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
                                <button onClick={() => { setSelfdev(!selfdev) }} className='goaldev'>Self Development</button>
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
                                    !milestone && <div data-aos="flip-up">
                                        <p>Set Your Goal:</p>
                                        <input onChange={(e) => { setGoalTitle(e.target.value) }} className='input-text' type="text" name="" id="" placeholder='Write Goal' value={goalTitle} />
                                        <div className="btns-list mt-10">
                                            <button className='btns-color' onClick={() => { setMilestone(!milestone) }}>Add MileStone</button>
                                        </div>
                                        <div className="btns-list mt-3">
                                            <button onClick={() => { SetYourGoal() }}>Save Goal</button>
                                        </div>
                                    </div>
                                }
                                {
                                    milestone && <div data-aos="flip-up">
                                        <p>Set Your Milestones:</p>
                                        {
                                            count.map((arr, index) => (
                                                <div key={arr[index] * index} className="inp">
                                                    <input onChange={(e) => { handleChange(index, e.target.value) }} className='input-text' type="text" name="" id="" placeholder='Write Your Milestone' value={arr.goal} />
                                                    {
                                                        index !== 0 && <i onClick={() => { handledDelete(index) }} class="fa-solid fa-trash-can"></i>
                                                    }
                                                </div>
                                            ))
                                        }
                                        <div className="btns-list mt-10">
                                            <button onClick={() => { setCount([...count, { goal: "" }]) }}>Add Another MileStone</button>
                                        </div>
                                        <div className="btns-list mt-3">
                                            <button onClick={() => { setMilestone(!milestone) }}>Save MileStones</button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>}
            </div>
        </div>
    );
}