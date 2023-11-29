import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Woman2Icon from '@mui/icons-material/Woman2';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Attendence = ({ currentDept, setCurrentDept, closeSideBar, sidebarshow, setSideBarShow, setProceed }) => {
    let [onClick, setOnClick] = useState(false)
    return (
        <>
            <p style={{ color: '#fff', fontSize: '17px', marginTop: '15px' }}>Select your Department: </p>
            <div style={{ paddingLeft: '10px', marginBottom: '10px' }}>
                <NavLink to="/attendence">
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
                        <NavLink to="/attendence">
                            <li onClick={() => {
                                setCurrentDept('SE');
                                closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                            }} style={{ backgroundColor: `${currentDept === 'SE' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'SE' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '1px', width: '100%', paddingTop: '10px', paddingBottom: '10px', textAlign: 'center' }}>
                                Software Engineering
                            </li>
                        </NavLink>
                        <NavLink to="/attendence">
                            <li onClick={() => {
                                setCurrentDept('CS');
                                closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                            }} style={{ backgroundColor: `${currentDept === 'CS' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'CS' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '21px', width: '100%', paddingTop: '10px', paddingBottom: '10px' }}>
                                Computer Science
                            </li>
                        </NavLink>
                        <NavLink to="/attendence">
                            <li onClick={() => {
                                setCurrentDept('CA');
                                closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                            }} style={{ backgroundColor: `${currentDept === 'CA' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'CA' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '21px', width: '100%', paddingTop: '10px', paddingBottom: '10px' }}>
                                Computer Arts
                            </li>
                        </NavLink>
                    </div>
                }
                <NavLink to="/attendence">
                    <li onClick={() => { setCurrentDept('Pharmacy'); closeSideBar && setSideBarShow(!sidebarshow); setProceed(false); }} style={{ backgroundColor: `${currentDept === 'Pharmacy' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'Pharmacy' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <PeopleIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                        Pharmacy
                    </li>
                </NavLink>
                <NavLink to="/attendence">
                    <li onClick={() => {
                        setCurrentDept('DBD');
                        closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                    }} style={{ backgroundColor: `${currentDept === 'DBD' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'DBD' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <Woman2Icon style={{ fontSize: '30px', marginRight: '10px' }} />
                        DBD
                    </li>
                </NavLink>
                <NavLink to="/attendence">
                    <li onClick={() => {
                        setCurrentDept('Psychology');
                        closeSideBar && setSideBarShow(!sidebarshow); setProceed(false);
                    }} style={{ backgroundColor: `${currentDept === 'Psychology' ? '#3f6184' : ''}`, borderRadius: `${currentDept === 'Psychology' ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <PublicIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                        Psychology
                    </li>
                </NavLink>
            </div>
        </>
    )
}

export default Attendence