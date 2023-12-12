import React, { useState } from 'react'
import style from './timeline.module.css'
import './style.css'
export const Notifications = () => {
    
    //eslint-disable-next-line
    let [data, setData] = useState([
        {
            name: "Zoom Session",
            link: "www.google.com"
        },
        {
            name: "info sesssion",
            link: "www.google.com"
        },
    ])
    return (
        <div id={`${style.qualification}`}>
            <div data-aos="fade-up" className={`${style.main} dark:bg-white`}>
                <h3 className={`${style.head}`}>Notifications</h3>
                <div>
                    <ul>
                        {
                            data.map((arr, index) => (
                                <li style={{display: "flex", alignItems: 'center', flexWrap: 'wrap'}} alt={arr.name} key={Math.floor(Math.random() * 100000 + index)} className='dark:bg-slate-500' >
                                    <h3 className={`${style.heading} font-bold mb-4  dark:text-cyan-900`}>{arr.name}</h3>
                                    <h3 className={`${style.heading1} mb-2 ml-4 font-semibold`}>{arr.link}</h3>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}