import React, { useEffect, useState } from 'react';
import './GoalAcheivement.css';
import avatar from "../../assets/img/avatar.png"
import FlagIcon from '@mui/icons-material/Flag';

const GoalAcheivement = () => {
    const [progressValue, setProgressValue] = useState(0);
    const progressEndValue = 26;
    const speed = 50;

    const Data = [
        {
            goal: "Offering 5 time prayer",
            completed: 90,
            status: 'In Progress',
            date: "17-Jan-2022"
        },
        {
            goal: "Reading Ahadees Today",
            completed: 65,
            status: 'In Progress',
            date: "17-Dec-2023"
        },
        {
            goal: "Ready quran today",
            completed: 30,
            status: 'On Track',
            date: "17-Dec-2023"
        },
        {
            goal: "Reading one islamic book today",
            completed: 20,
            status: 'In Progress',
            date: "20-dec-2022"
        },
        {
            goal: "Offering Fasting",
            completed: 0,
            status: 'On Track',
            date: "17-Dec-2023"
        }
    ]

    useEffect(() => {
        const progress = setInterval(() => {
            setProgressValue((prevValue) => {
                if (prevValue < progressEndValue) {
                    return prevValue + 1;
                } else {
                    clearInterval(progress);
                    return prevValue;
                }
            });
        }, speed);

        return () => {
            clearInterval(progress);
        };
    }, []); // Run the effect only once when the component mounts

    const progressDegrees = progressValue * 3.6;

    return (
        <div style={{ paddingLeft: "40px", paddingTop: "20px" }}>
            <div className='flex justify-center items-center flex-wrap'>
                <div className='flex flex-col justify-center mr-10'>
                    <div className="container-goal">
                        <div className="circular-progress">
                            <div className="value-container">{`${progressValue}%`}</div>
                        </div>
                        <style>{`
                    .circular-progress {
                        background: conic-gradient(
                            #4d5bf9 ${progressDegrees}deg,
                            #cadcff ${progressDegrees}deg
                            );
                        }
                        `}</style>
                    </div>
                    <p style={{ margin: "10px 0", color: "gray" }}>Overall Progress</p>
                </div>
                <div className='flex justify-center items-center flex-wrap'>
                    <div style={{ boxShadow: "3px 3px 10px rgba(60, 60, 150, 0.25)", height: "170px", width: "150px", margin: "20px" }} className='flex justify-center flex-col items-center'>
                        <p style={{ fontSize: "36px", color: "gray", fontWeight: "bold", padding: "20px 0 40px 0" }}>6</p>
                        <p style={{ fontSize: "20px" }}>No Status</p>
                    </div>
                    <div style={{ boxShadow: "3px 3px 10px rgba(60, 60, 150, 0.25)", height: "170px", width: "150px", margin: "20px" }} className='flex justify-center flex-col items-center'>
                        <p style={{ fontSize: "36px", color: "gray", fontWeight: "bold", padding: "20px 0 40px 0" }}>2</p>
                        <p style={{ fontSize: "20px" }}>On Track</p>
                    </div>
                    <div style={{ boxShadow: "3px 3px 10px rgba(60, 60, 150, 0.25)", height: "170px", width: "150px", margin: "20px" }} className='flex justify-center flex-col items-center'>
                        <p style={{ fontSize: "33px", color: "gray", fontWeight: "bold", padding: "20px 0 40px 0" }}>0</p>
                        <p style={{ fontSize: "18px" }}>Not Completed</p>
                    </div>
                    <div style={{ boxShadow: "3px 3px 10px rgba(60, 60, 150, 0.25)", height: "170px", width: "150px", margin: "20px" }} className='flex justify-center flex-col items-center'>
                        <p style={{ fontSize: "36px", color: "gray", fontWeight: "bold", padding: "20px 0 40px 0" }}>0</p>
                        <p style={{ fontSize: "20px" }}>In Progress</p>
                    </div>
                    <div style={{ boxShadow: "3px 3px 10px rgba(60, 60, 150, 0.25)", height: "170px", width: "150px", margin: "20px" }} className='flex justify-center flex-col items-center'>
                        <p style={{ fontSize: "36px", color: "gray", fontWeight: "bold", padding: "20px 0 40px 0" }}>0</p>
                        <p style={{ fontSize: "20px" }}>Completed</p>
                    </div>
                </div>
            </div>
            <div style={{ padding: "0 " }}>
            <hr style={{marginTop: "40px"}}/>
                {
                    Data.map((Items) => (
                        <>
                            <div className='flex my-3 item-goal-acheivement items-center justify-between'>
                                <FlagIcon className='flagicon' style={{ fontSize: "40px", marginRight: "10px", flex: 1 }} />
                                <img style={{ width: "50px", height: "50px" }} src={avatar} alt="" />
                                <h1 className='font-semibold ml-5 goal-text' style={{ color: "gray", flex: 1 }}>{Items.goal}</h1>
                                <div style={{ flex: 1 }} className="container-goal-acheivement">
                                    <div className="skill-box flex">
                                        <div className="skill-bar">
                                            <span
                                                className="skill-per"
                                                style={{
                                                    width: `${Items.completed}%`,
                                                    background: '#4070f4',
                                                }}
                                            >
                                                <span className="tooltip">{Items.completed}</span>
                                            </span>
                                        </div>
                                        <span className="ml-3">{Items.completed}%</span>
                                    </div>
                                </div>
                                <p className='font-semibold ml-5' style={{ color: "gray", flex: 1 }}>{Items.status}</p>
                                <p className='font-semibold ml-5' style={{ color: "gray", flex: 1 }}>{Items.date}</p>
                            </div>
                            <hr />
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default GoalAcheivement;
