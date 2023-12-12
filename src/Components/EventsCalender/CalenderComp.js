import React, { useEffect, useRef, useState } from 'react'
import style from '../timeline.module.css'
import '../style.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector } from "react-redux"

export const EventCalender = ({ EventDate, setSelectedFinalDates }) => {
    const [open, setOpen] = useState(false);
    //eslint-disable-next-line
    const handleClickOpen = () => { setOpen(true); };
    //eslint-disable-next-line
    const [email, setemail] = useState(useSelector(state => state)?.email);
    const handleClose = () => { setOpen(false); };
    let [show, setShow] = useState(false)
    let [data, setData] = useState([
        {
            name: "MLSA Github Event",
            data: "2-12-2023",
            time: '23:10'
        },
        {
            name: "Google Cloud",
            data: "16-12-2023",
            time: '12:00'
        },
        {
            name: "Web Development",
            data: "16-12-2023",
            time: '01:00'
        },
        {
            name: "Cloud Workshop",
            data: "25-12-2023",
            time: '01:00'
        },
        {
            name: "Networking",
            data: "1-1-2024",
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
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [show])
    return (
        // data-aos="fade-up" 
        <div id='events'>
            <div id={`${style.qualification}`}>
                <div className={`${style.main}`} style={{ backgroundColor: "#fff" }}>
                    <>
                        <h3 className={`${style.head}`}>Events Detail</h3>
                        {/* <button onClick={() => { setShow(!show); handleClickOpen() }} type='submit' className='add-brn add-brn1' style={{ marginBottom: "0" }}>Add New Event</button> */}
                        <div style={{ margin: "90px 0 0 0" }} className={`${style.container}`}>
                            <ul>
                                {
                                    data.map((arr, index) => (
                                        <>
                                            {
                                                arr.data === EventDate && <li alt={arr.name} key={Math.floor(Math.random() * 100000 + index)} className='dark:bg-slate-500' >
                                                    <h3 className={`${style.heading} font-bold mb-4  dark:text-cyan-900`}>{arr.name}</h3>
                                                    <h3 className={`${style.heading1} mb-2 font-semibold`}>Time: {arr.time}</h3>
                                                    <span className={`${style.date}`}>{arr.data}</span>
                                                    <span className={`${style.circle}`}></span>
                                                </li>
                                            }
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                    </>
                    <React.Fragment>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                <h1 style={{ fontSize: "20px" }}>Add Event</h1>
                                <hr style={{ margin: "10px 0" }} />
                            </DialogTitle>
                            <p style={{ margin: "0 20px" }}>Add specific Event by mentioning the Event Name, it's Date and the time. </p>
                            <form style={{ margin: "0 20px" }} onSubmit={(e) => { handleeventadd(e) }}>
                                <div className="sub-event pt-0">
                                    <div className="namess pt-3 flex">
                                        <label style={{ color: "#2567ac" }} className='mr-2 topd' htmlFor="">Event Name:</label>
                                        <input className='py-2' type="text" placeholder="Event Name" ref={name} required={true} />
                                    </div>
                                    <div className="dates mt-4 flex">
                                        <label style={{ color: "#2567ac" }} className='alphaaad' htmlFor="">Event Date:</label>
                                        <input className='py-2' type="date" name="" id="" ref={date} required={true} />
                                    </div>
                                    <div className="timess my-4 flex">
                                        <label style={{ color: "#2567ac" }} className='alphaaad' htmlFor="">Event Time</label>
                                        <input className='py-2' type="time" name="" id="" ref={time} required={true} />
                                    </div>
                                </div>
                                <DialogActions>
                                    <Button style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }} onClick={handleClose}>Close</Button>
                                    <Button type='submit' style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }} onClick={handleClose} autoFocus>
                                        Add Event
                                    </Button>
                                </DialogActions>
                            </form>
                        </Dialog>
                    </React.Fragment>
                </div>
            </div>
        </div>
    )
}