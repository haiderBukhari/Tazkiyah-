import React, { useEffect, useState } from 'react'
import style from '../timeline.module.css'
import '../style.css'
import { DataGrid } from '@mui/x-data-grid';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useSelector } from "react-redux"

export const AttendenceTable = ({ currentDept, setCurrentDept }) => {
    let [show, setShow] = useState(false)
    const [gridWidth, setGridWidth] = useState(0);
    const [tableShow, setTableShow] = useState(false);
    //eslint-disable-next-line
    const [mentorEmail, setMentorEmail] = useState(useSelector(state => state).email === "mentor@gmail.com");
    const [eventDetails, setEventDetails] = useState({name: "", date: ""});
    const [markAttendece, setMarkAttendence] = useState(false);
    useEffect(() => { window.scrollTo(0, 0) }, [show])
    useEffect(() => {
        const handleResize = () => {
            setGridWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
        // eslint-disable-next-line
    }, [window.innerWidth]);

    const columns = [
        {
            field: 'id',
            headerName: 'SAP ID',
            width: gridWidth > 500 ? 180 : 100,
            renderCell: (params) => (
                <div style={{ fontSize: `${gridWidth > 500 ? '20px' : '13px'}` }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'Name',
            headerName: 'Name',
            width: gridWidth > 800 ? 300 : gridWidth > 550 ? 300 : 100,
            renderCell: (params) => (
                <div style={{ fontSize: `${gridWidth > 500 ? '17px' : '13px'}` }}>
                    {
                        gridWidth > 500 ? `${params.value}` : `${params.value.split(" ")[0]}`
                    }
                </div>
            ),
        },
        {
            field: 'present',
            headerName: '',
            fontSize: "20px",
            width: gridWidth > 500 ? 130 : 100,
            renderCell: (params) => (
                <div style={{ color: '#fff', padding: `${gridWidth > 500 ? '7px 23px' : '7px 10px'}`, borderRadius: '3px', backgroundColor: `${params.value ? 'green' : '#FA5A16'}`, fontSize: '14px' }}>
                    {params.value ? 'Present' : 'Absent'}
                </div>
            ),
        },
    ];

    const AttendenceMarkColumn = [
        {
            field: 'id',
            headerName: 'SAP ID',
            width: gridWidth > 500 ? 180 : 100,
            renderCell: (params) => (
                <div style={{ fontSize: `${gridWidth > 500 ? '20px' : '13px'}` }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'Name',
            headerName: 'Name',
            width: gridWidth > 800 ? 300 : gridWidth > 550 ? 300 : 100,
            renderCell: (params) => (
                <div style={{ fontSize: `${gridWidth > 500 ? '17px' : '13px'}` }}>
                    {
                        gridWidth > 500 ? `${params.value}` : `${params.value.split(" ")[0]}`
                    }
                </div>
            ),
        },
        {
            field: 'present',
            headerName: '',
            fontSize: "20px",
            width: gridWidth > 500 ? 130 : 100,
            renderCell: (params) => (
                <select style={{ color: '#000', padding: `${gridWidth > 500 ? '7px 23px' : '7px 10px'}`, borderRadius: '3px', fontSize: '14px' }}>
                    <option value="" key="">Present</option>
                    <option value="" key="">Absent</option>
                </select>
            ),
        },
    ];

    const rows = [
        { id: Math.floor(Math.random() * 10000), Name: 'Snow', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Lannister', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Stark', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Targaryen', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Melisandre', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Clifford', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Frances', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Roxie', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Arya', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Sansa', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Cersei', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Jaime', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Daenerys', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Jon', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Bran', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Tyrion', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Catelyn', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Robb', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Joffrey', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Clegane', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Davos', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Brienne', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Theon', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Varys', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Samwell', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Gendry', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Podrick', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Bronn', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Grey Worm', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Missandei', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Hodor', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Oberyn', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Ygritte', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Jorah', present: false },
        { id: Math.floor(Math.random() * 10000), Name: 'Gilly', present: true },
        { id: Math.floor(Math.random() * 10000), Name: 'Shireen', present: false },
    ];
    let [selected, setSelected] = useState(false);
    let [event, setEvent] = useState({});
    const [eventDetail, setEventDetail] = useState([
        {
            name: 'MLSA Event',
            date: '28-12-2022'
        },
        {
            name: 'GDSC Github Event',
            date: '21-10-2022'
        }
    ])
    useEffect(() => {
        setSelected(false);
        setEvent({});
        setTableShow(currentDept === 'SE' || currentDept === 'CS' || currentDept === 'CA' || currentDept === 'Pharmacy' || currentDept === 'DBD' || currentDept === 'Psychology' || mentorEmail)
    }, [currentDept])
    return (
        <>
            {
                tableShow ? (<>
                    <div id={`${style.qualification}`}>
                        {
                            !markAttendece && !selected && <div style={{ display: "flex", justifyContent: "center" }}>
                                <button onClick={() => { setMarkAttendence(true) }} style={{ margin: "20px 0", backgroundColor: "#15375c", color: "#fff", padding: "7px 14px", borderRadius: "4px" }}>Add Session Attendence</button>
                            </div>
                        }
                        {
                            !markAttendece && !selected && <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                                {
                                    eventDetail.map((item) => (
                                        <div style={{ padding: '20px', margin: '20px', border: '1px solid #ccc', boxShadow: '1px 1px 2px 3px #ccc', width: '300px', height: '230px', position: 'relative' }}>
                                            <h1 style={{ margin: '10px', fontSize: '17px', fontWeight: 'bold' }}>Event Name: <span style={{ fontWeight: 'normal', lineHeight: '2.1rem' }}>{item.name}</span></h1>
                                            <h1 style={{ margin: '20px 10px', fontSize: '17px', fontWeight: 'bold' }}>Date: <span style={{ fontWeight: 'normal' }}>{item.date}</span></h1>
                                            <div style={{ position: 'absolute', bottom: '10px', left: '20%', width: '190px' }} className='flex justify-center'>
                                                <button onClick={() => {
                                                    setSelected(true); setEvent({
                                                        name: item.name,
                                                        date: item.date
                                                    }); setShow(!show)
                                                }} style={{ fontSize: '17px', margin: '10px auto', backgroundColor: '#15375c', padding: '10px 20px', color: '#fff', borderRadius: '5px' }}>View Attendence</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        }

                        {
                            !markAttendece && selected && <div style={{ position: 'relative', paddingTop: '30px' }} className={`${style.main} dark:bg-slate-400`}>
                                <div onClick={() => { setSelected(false); setEvent({}) }} style={{ position: 'absolute', top: 0, left: '6%', color: '#000', display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '10px' }}>
                                    <ArrowLeftIcon style={{ fontSize: '30px' }} />
                                    <p>Go Back</p>
                                </div>
                                <div className='flex flex-column pt-10'>
                                    <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', padding: '0 0 10px 0' }}>Event Date: <span style={{ fontWeight: 'normal' }}>{event.date}</span></h1>
                                    <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', padding: '10px 0' }}>Event Name: <span style={{ fontWeight: 'normal' }}>{event.name}</span></h1>
                                    <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', padding: '10px 0 20px 0' }}>Total Participants: <span style={{ fontWeight: 'normal' }}>36</span></h1>
                                </div>

                                <div style={{ height: '100%', width: 'auto', margin: "10px 20px" }}>
                                    <DataGrid
                                        rows={rows}
                                        columns={columns}
                                        style={{ fontSize: '15px' }}
                                    />
                                </div>
                            </div>
                        }
                        {
                            markAttendece && <div style={{ position: 'relative', paddingTop: '30px', height: "100%" }} className={`${style.main} dark:bg-slate-400`}>
                                <button onClick={()=>{setEventDetail([eventDetails, ...eventDetail]); setMarkAttendence(false)}} style={{ margin: "20px 0", backgroundColor: "#15375c", color: "#fff", padding: "7px 14px", borderRadius: "4px" }}>Add Attendence</button>
                                <input onChange={(e)=>{setEventDetails({...eventDetails, name: e.target.value})}}  type="text" placeholder='Name of the Event' style={{width: "250px", padding: "4px 10px", color: "gray", fontSize: "17px", outline: "none", boxShadow: "2px 2px 1px #ccc, -2px -2px 1px #ccc", margin: "10px 0 10px 0"}}/>
                                <input onChange={(e)=>{setEventDetails({...eventDetails, date: e.target.value})}} type="date" style={{width: "250px", padding: "4px 10px", color: "gray", fontSize: "17px", outline: "none", boxShadow: "2px 2px 1px #ccc, -2px -2px 1px #ccc", margin: "0px 0 10px 0"}}/>
                                <div onClick={() => { setMarkAttendence(false) }} style={{ position: 'absolute', top: 0, left: '6%', color: '#000', display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '10px' }}>
                                    <ArrowLeftIcon style={{ fontSize: '30px' }} />
                                    <p>Go Back</p>
                                </div>
                                <div style={{ height: '100%', width: 'auto', margin: "10px 20px" }}>
                                    <DataGrid
                                        rows={rows}
                                        columns={AttendenceMarkColumn}
                                        style={{ fontSize: '15px'}}
                                    />
                                </div>
                            </div>
                        }
                    </div>
                </>) : (<>
                    <div className='flex flex-col justify-center items-center' style={{ height: '50vh' }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '23px', textAlign: 'center', lineHeight: '3.5rem' }}>Please Select the Desired Department</h1>
                    </div>
                </>)
            }
        </>
    )
}