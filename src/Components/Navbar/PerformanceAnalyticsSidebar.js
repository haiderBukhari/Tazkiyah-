import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { NavLink } from 'react-router-dom'
import Woman2Icon from '@mui/icons-material/Woman2';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PerformanceAnalyticsSideBar = ({ currentDept, setCurrentDept, closeSideBar, sidebarshow, setSideBarShow, setProceed, selectedSemester, setSelectedSemester }) => {
    let [onClick, setOnClick] = useState(false)
    const [selectDpt, setSelectDpt] = React.useState(false);
    const [selectedSemesterTemp, setSelectedSemesterTemp] = useState(false);
    
    return (
        <>
            <p style={{ color: '#fff', fontSize: '17px', marginTop: '15px' }}>Select your Department: </p>
            <div style={{ paddingLeft: '10px', marginBottom: '10px' }}>
                <NavLink to="/performance">
                    <li onClick={() => { setOnClick(!onClick); setCurrentDept('FC') }} style={{ backgroundColor: `${currentDept === 'FC' || currentDept === 'CS' || currentDept === 'SE' || currentDept === 'CA' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'FC' || currentDept === 'CS' || currentDept === 'SE' || currentDept === 'CA' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <PeopleIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                        FC
                        {
                            onClick ? <ArrowDownwardIcon style={{ fontSize: '20px', marginLeft: '1px' }} /> : <ArrowRightAltIcon style={{ fontSize: '20px', marginLeft: '4px' }} />
                        }
                    </li>
                </NavLink>
                {
                    onClick && <div style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                        <NavLink to="/performance">
                            <li onClick={() => {
                                setCurrentDept('SE');
                                closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                                setSelectDpt(!selectDpt)
                            }} style={{ backgroundColor: `${currentDept === 'SE' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'SE' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '1px', width: '100%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center' }}>
                                Software Engineering
                            </li>
                        </NavLink>
                        <NavLink to="/performance">
                            <li onClick={() => {
                                setCurrentDept('CS');
                                setSelectDpt(!selectDpt)
                                closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                            }} style={{ backgroundColor: `${currentDept === 'CS' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'CS' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '21px', width: '100%', paddingTop: '10px', paddingBottom: '10px' }}>
                                Computer Science
                            </li>
                        </NavLink>
                        <NavLink to="/performance">
                            <li onClick={() => {
                                setCurrentDept('CA');
                                setSelectDpt(!selectDpt)
                                closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                            }} style={{ backgroundColor: `${currentDept === 'CA' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'CA' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '21px', width: '100%', paddingTop: '10px', paddingBottom: '10px' }}>
                                Computer Arts
                            </li>
                        </NavLink>
                    </div>
                }
                <NavLink to="/performance">
                    <li onClick={() => { setCurrentDept('Pharmacy'); closeSideBar && setSideBarShow(!sidebarshow); setProceed(false); setSelectDpt(!selectDpt); }} style={{ backgroundColor: `${currentDept === 'Pharmacy' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'Pharmacy' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <PeopleIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                        Pharmacy
                    </li>
                </NavLink>
                <NavLink to="/performance">
                    <li onClick={() => {
                        setCurrentDept('DBD');
                        setSelectDpt(!selectDpt)
                        closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                    }} style={{ backgroundColor: `${currentDept === 'DBD' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'DBD' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <Woman2Icon style={{ fontSize: '30px', marginRight: '10px' }} />
                        DBD
                    </li>
                </NavLink>
                <NavLink to="/performance">
                    <li onClick={() => {
                        setCurrentDept('Psychology');
                        setSelectDpt(!selectDpt)
                        closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                    }} style={{ backgroundColor: `${currentDept === 'Psychology' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'Psychology' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <PublicIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                        Psychology
                    </li>
                </NavLink>
                {
                    <React.Fragment>
                        <Dialog
                            open={selectDpt}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Select Semester</h1>
                                <hr style={{ margin: '10px 0 0 0' }} />
                            </DialogTitle>
                            <div style={{ margin: '0px 20px' }} >
                                <p style={{ fontSize: '14px', textAlign: 'justify', marginBottom: '20px' }}>Select acacemic semester to see the montors list and assign mentees.</p>
                                <label style={{ fontSize: '14px', marginTop: '14px' }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Academic Semester</label>

                                <select onChange={(e)=>{setSelectedSemesterTemp(e.target.value)}} style={{ fontSize: '15px', marginBottom: '20px', padding: '10px' }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                                    <option value="Fall-2023" key="">Fall-2023</option>
                                    <option value="Summer-2023" key="">Summer-2023</option>
                                    <option value="Fall-2022" key="">Fall-2022</option>
                                    <option value="Spring-2022" key="">Spring-2022</option>
                                </select>
                            </div>
                            <DialogActions>
                                <Button onClick={()=>{setSelectDpt(!selectDpt); setSelectedSemester(null) }} style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }}>Close</Button>
                                <Button onClick={()=>{setSelectDpt(!selectDpt); setSelectedSemester(selectedSemesterTemp) }} style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }} autoFocus>
                                    Select Semester
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </React.Fragment >
                }
            </div>
        </>
    )
}

export default PerformanceAnalyticsSideBar;