import React from 'react'
import { NavLink } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person';
import Woman2Icon from '@mui/icons-material/Woman2';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import PublicIcon from '@mui/icons-material/Public';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const SubNavigations = ({ currentgoal, setCurrentGoal, initial, corner, setcorner, setProceed, closeSideBar, sidebarshow, setSideBarShow }) => {
    return (
        <>
            <p style={{ color: '#fff', fontSize: '17px', marginTop: '15px' }}>Set Your Goal as: </p>
            <div style={{ paddingLeft: '10px', marginBottom: '10px' }}>
                <NavLink to="/goal">
                    <li onClick={() => {
                        setCurrentGoal({
                            ...initial,
                            student: !currentgoal.student
                        });
                        setProceed(true); setcorner("Set your Goal as a Role of Student"); closeSideBar && setSideBarShow(!sidebarshow)
                    }} style={{ backgroundColor: `${currentgoal.student ? '#3f6184' : ''}`, borderRadius: `${currentgoal.student ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <PeopleIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                        Student
                    </li>
                </NavLink>
                <NavLink to="/goal">
                    <li onClick={() => {
                        setCurrentGoal({
                            ...initial,
                            daughter: !currentgoal.daughter
                        })
                        setProceed(true); setcorner("Set your Goal as a Role of Daughter"); closeSideBar && setSideBarShow(!sidebarshow)
                    }} style={{ backgroundColor: `${currentgoal.daughter ? '#3f6184' : ''}`, borderRadius: `${currentgoal.daughter ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <Woman2Icon style={{ fontSize: '30px', marginRight: '10px' }} />
                        Daughter
                    </li>
                </NavLink>
                <NavLink to="/goal">
                    <li onClick={() => {
                        setCurrentGoal({
                            ...initial,
                            citizen: !currentgoal.citizen
                        })
                        setProceed(true); setcorner("Set your Goal as a Role of Responsible Pakistani Citizen"); closeSideBar && setSideBarShow(!sidebarshow)
                    }} style={{ backgroundColor: `${currentgoal.citizen ? '#3f6184' : ''}`, borderRadius: `${currentgoal.citizen ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <PublicIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                        Pakistani Citizen
                    </li>
                </NavLink>
                <NavLink to="/goal">
                    <li onClick={() => {
                        setCurrentGoal({
                            ...initial,
                            professional: !currentgoal.professional
                        })
                        setProceed(true); setcorner("Set your Goal to prepare for Professional Life"); closeSideBar && setSideBarShow(!sidebarshow)
                    }} style={{ backgroundColor: `${currentgoal.professional ? '#3f6184' : ''}`, borderRadius: `${currentgoal.professional ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <WorkIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                        Professional Life
                    </li>
                </NavLink>
                <NavLink to="/goal">
                    <li onClick={() => {
                        setCurrentGoal({
                            ...initial,
                            ummah: !currentgoal.ummah
                        })
                        setProceed(true); setcorner("Set your Goal as a Role of Muslim Ummah"); closeSideBar && setSideBarShow(!sidebarshow)
                    }} style={{ backgroundColor: `${currentgoal.ummah ? '#3f6184' : ''}`, borderRadius: `${currentgoal.ummah ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '90%', paddingTop: '10px', paddingBottom: '10px' }}>
                        <EmojiPeopleIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                        Muslim Ummah
                    </li>
                </NavLink>
                <NavLink to="/goal">
                    <li onClick={() => {
                        setCurrentGoal({
                            ...initial,
                            self: !currentgoal.self
                        })
                    }} style={{ backgroundColor: `${currentgoal.self ? '#3f6184' : ''}`, borderRadius: `${currentgoal.self ? '14px' : ''}`, marginTop: '10px', paddingLeft: '10px', width: '100%', paddingTop: '10px', paddingBottom: '10px', fontSize: '15px' }}>
                        <PersonIcon style={{ fontSize: '24px', marginRight: '4px' }} />
                        Personal Development
                        {
                            currentgoal.self ? <ArrowDownwardIcon style={{ fontSize: '20px', marginLeft: '1px' }} /> : <ArrowRightAltIcon style={{ fontSize: '20px', marginLeft: '4px' }} />
                        }
                    </li>
                </NavLink>

                {
                    currentgoal.self && <div style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                        <NavLink to="/goal">
                            <li onClick={() => {
                                setCurrentGoal({
                                    ...initial,
                                    self: true,
                                    spiritual: !currentgoal.spiritual
                                })
                                setProceed(true); setcorner("Set your Spiritual Goal"); closeSideBar && setSideBarShow(!sidebarshow)
                            }} style={{ backgroundColor: `${currentgoal.spiritual ? '#3f6184' : ''}`, borderRadius: `${currentgoal.spiritual ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '80%', paddingTop: '10px', paddingBottom: '10px' }}>
                                <EmojiFoodBeverageIcon style={{ fontSize: '24px', marginRight: '4px' }} />
                                Spiritual
                            </li>
                        </NavLink>
                        <NavLink to="/goal">
                            <li onClick={() => {
                                setCurrentGoal({
                                    ...initial,
                                    self: true,
                                    intellectual: !currentgoal.intellectual
                                })
                                setProceed(true); setcorner("Set your Intellectual Goal"); closeSideBar && setSideBarShow(!sidebarshow)
                            }} style={{ backgroundColor: `${currentgoal.intellectual ? '#3f6184' : ''}`, borderRadius: `${currentgoal.intellectual ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '80%', paddingTop: '10px', paddingBottom: '10px' }}>
                                <EmojiObjectsIcon style={{ fontSize: '24px', marginRight: '4px' }} />
                                Intellectual
                            </li>
                        </NavLink>
                        <NavLink to="/goal">
                            <li onClick={() => {
                                setCurrentGoal({
                                    ...initial,
                                    self: true,
                                    physical: !currentgoal.physical
                                })
                                setProceed(true); setcorner("Set your Physical Goal"); closeSideBar && setSideBarShow(!sidebarshow)
                            }} style={{ backgroundColor: `${currentgoal.physical ? '#3f6184' : ''}`, borderRadius: `${currentgoal.physical ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '80%', paddingTop: '10px', paddingBottom: '10px' }}>
                                <EmojiEventsIcon style={{ fontSize: '24px', marginRight: '4px' }} />
                                Physical
                            </li>
                        </NavLink>
                        <NavLink to="/goal">
                            <li onClick={() => {
                                setCurrentGoal({
                                    ...initial,
                                    self: true,
                                    emotional: !currentgoal.emotional
                                })
                                setProceed(true); setcorner("Set your Emotional Goal"); closeSideBar && setSideBarShow(!sidebarshow)
                            }} style={{ backgroundColor: `${currentgoal.emotional ? '#3f6184' : ''}`, borderRadius: `${currentgoal.emotional ? '14px' : ''}`, marginTop: '10px', paddingLeft: '20px', width: '80%', paddingTop: '10px', paddingBottom: '10px' }}>
                                <EmojiEmotionsIcon style={{ fontSize: '24px', marginRight: '4px' }} />
                                Emotional
                            </li>
                        </NavLink>
                    </div>
                }
            </div>
        </>
    )
}

export default SubNavigations
