import { useEffect, useState } from 'react';
import './setgoal.css';
import SelfDevelopment from '../../assets/self development.jpg'

export const SetGoal = () => {
    const [selfdev, setSelfdev] = useState(true)
    const [personaldev, setPersonaldev] = useState(false)
    const [proceed, setProceed] = useState(false)
    const [corner, setcorner] = useState("Set your Physical Goal");
    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [selfdev, personaldev, proceed])
    return (
        <div>
            {!proceed &&
                <>
                    <h1 className='text-center text-3xl font-semibold main-heading'>Set Goal</h1>
                </>
            }
            <div className="self-development">
                {selfdev &&
                    <>
                        <img data-aos="fade-right" className='delfdev' src={SelfDevelopment} alt="" srcset="" />
                        <div data-aos="fade-left" className="text">
                            <p className='text1'>Setting a goal through the self-development icon is the first step towards shaping a more purposeful and fulfilling life.</p>
                            <p className='text2'>Click on the Self Development Button to set your goal</p>
                            <div className="btns flex justify-center mt-10">
                                <button onClick={() => { setSelfdev(!selfdev) }} className='goaldev'>Self Development</button>
                            </div>
                        </div>
                    </>}
                {!selfdev && <div className='goalsetting'>
                    {
                        !proceed && <p className='text-center mb-5 text-lg leading-9'>Please select the role with which you intend to establish your objective.</p>
                    }
                    {
                        !personaldev && !proceed && <div data-aos="flip-up" className="btns-list">
                            <button onClick={() => { setProceed(true); setcorner("Set you Goal as a Role of Student") }} className='goaldev'>Role as Student</button>
                            <button onClick={() => { setProceed(true); setcorner("Set you Goal as a Role of Daughter") }} className='goaldev'>Role as Daughter</button>
                            <button onClick={() => { setProceed(true); setcorner("Set you Goal as a Role of Responsible Pakistani Citizen") }} className='goaldev'>Responsibilities as Pakistani citizens</button>
                            <button onClick={() => { setProceed(true); setcorner("Set you Goal to prepare for Professional Life") }} className='goaldev'>Preparation for Professional life </button>
                            <button onClick={() => { setProceed(true); setcorner("Set you Goal as a Role of Muslim Ummah") }} className='goaldev'>Muslim Ummah </button>
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
                                <p className='text-center py-5 text-xl font-semibold leading-9'>✍️ {corner}</p>
                                <hr />
                            </div>
                            <div className="lower-bound">
                                <p>Set Your Goal</p>
                                <input type="text" name="" id="" />
                            </div>
                        </div>
                    }
                </div>}
            </div>
        </div>
    );
}