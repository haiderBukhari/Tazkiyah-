import React, { useEffect, useRef, useState } from 'react'
import style from './timeline.module.css'
import './style.css'
export const TimeLine = () => {
    let [show, setShow] = useState(false)
    let [data, setData] = useState([
        {
            name: "MLSA Github Event",
            data: "2023-10-13",
            time: '23:10'
        },
        {
            name: "Google Cloud",
            data: "2023-11-19",
            time: '12:00'
        },
        {
            name: "Web Development",
            data: "2023-12-13",
            time: '01:00'
        },
    ])
    let name = useRef();
    let date = useRef();
    let time = useRef();
    let handleeventadd = (e) => {
        e.preventDefault()
        setData([{
            name: name.current.value,
            data: date.current.value,
            time: time.current.value
        }, ...data])
        setShow(false)
    }
    useEffect(()=>{
        window.scrollTo(0,0)
    }, [show])
    return (
        <div id={`${style.qualification}`}>
            <div data-aos="fade-up" className={`${style.main} dark:bg-slate-400`}>
                <form onSubmit={(e) => { handleeventadd(e) }} className={`add-event ${show ? 'open-popup' : ''}`}>
                    <h1>Add Event</h1>
                    <div className="sub-event mt-2">
                        <div className="namess mt-3 flex">
                            <label style={{ color: "#2567ac" }} className='mr-2 topd' htmlFor="">Event Name:</label>
                            <input className='py-2' type="text" placeholder="Event Name" ref={name} required={true}/>
                        </div>
                        <div className="dates mt-4 flex">
                            <label style={{ color: "#2567ac" }} className='alphaaad' htmlFor="">Event Date:</label>
                            <input className='py-2' type="date" name="" id="" ref={date} required={true}/>
                        </div>
                        <div className="timess my-4 flex">
                            <label style={{ color: "#2567ac" }} className='alphaaad' htmlFor="">Event Time</label>
                            <input className='py-2' type="time" name="" id="" ref={time} required={true}/>
                        </div>
                        <button type='submit' className='add-brn'>Add</button>
                    </div>
                </form>
                {
                    !show ? (<>
                            <h3 className={`${style.head}`}>Events TimeLine</h3>
                        {
                    <button onClick={() => { setShow(!show) }} type='submit' className='add-brn add-brn1'>Add New Event</button>
                }
                        <div className={`${style.container}`}>
                            <ul>
                                {
                                    data.map((arr, index) => (
                                        <li alt={arr.name} key={Math.floor(Math.random() * 100000 + index)} className='dark:bg-slate-500' >
                                            <h3 className={`${style.heading} font-bold mb-4  dark:text-cyan-900`}>{arr.name}</h3>
                                            <h3 className={`${style.heading1} mb-2 font-semibold`}>Time: {arr.time}</h3>
                                            <span className={`${style.date}`}>{arr.data}</span>
                                            <span className={`${style.circle}`}></span>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </>) : (<div className='none'></div>)
                }
            </div>
        </div>
    )
}