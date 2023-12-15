import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PeopleIcon from '@mui/icons-material/People';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const AssignMentees = ({ currentDept, setCurrentDept, closeSideBar, sidebarshow, setSideBarShow, setProceed, selectedSemester, setSelectedSemester, selectDpt, setSelectDpt }) => {
    let [onClick, setOnClick] = useState(false)
    
    return (
        <>
            <p style={{ color: '#fff', fontSize: '17px', marginTop: '15px' }}>Select your Department: </p>
            <div style={{ paddingLeft: '10px', marginBottom: '10px' }}>
                <NavLink to="/assign-mentees">
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
                        <NavLink to="/assign-mentees">
                            <li onClick={() => {
                                setCurrentDept('SE');
                                closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                                setSelectDpt(!selectDpt)
                            }} style={{ backgroundColor: `${currentDept === 'SE' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'SE' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '1px', width: '100%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center' }}>
                                Software Engineering
                            </li>
                        </NavLink>
                        <NavLink to="/assign-mentees">
                            <li onClick={() => {
                                setCurrentDept('CS');
                                setSelectDpt(!selectDpt)
                                closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                            }} style={{ backgroundColor: `${currentDept === 'CS' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'CS' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '21px', width: '100%', paddingTop: '10px', paddingBottom: '10px' }}>
                                Computer Science
                            </li>
                        </NavLink>
                        <NavLink to="/assign-mentees">
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
            </div>
        </>
    )
}

export default AssignMentees