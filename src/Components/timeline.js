import React from 'react'
import style from './timeline.module.css' 
export const TimeLine = () => {
    let data = [
        {
            name: "MLSA Github Event",
            institution: "FAST NUCES Islamabad",
            detail: "The MLSA GitHub event aims to delve into the fundamentals of GitHub, covering topics such as repository creation, version control, branching strategies, and collaborative workflows. Participants will explore the basics of Git commands, pull requests, issue tracking, and best practices for effective collaboration using this popular version control platform.",
            link: "/timeline",
            data: "November 2023",
        },
        {
            name: "Google Cloud",
            institution: "Rippah University Islamabad",
            detail: "The Google Cloud event, organized by GDSC (Google Developer Student Clubs), will provide insights into leveraging Google Cloud Platform services. Topics will include cloud computing essentials, GCP products like Compute Engine, BigQuery, and Kubernetes, along with discussions on deploying, managing, and scaling applications in the cloud. Attendees will gain practical knowledge about Google Cloud resources and solutions for various development and business needs.",
            link: "/timeline",
            data: "December 2023",
        },
        {
            name: "Web Development",
            institution: "NUML University",
            detail: "The Web Development event, hosted by NUML University, will cover the essentials of modern web development. Topics will span from front-end technologies like HTML, CSS, and JavaScript to back-end frameworks such as Node.js and databases like MySQL or MongoDB. Discussions will also include responsive design, web security, and practical hands-on exercises to equip attendees with foundational skills in creating dynamic and interactive web applications.",
            link: "/timeline",
            data: "January 2024",
        },
    ]
    return (
        <div id={`${style.qualification}`}>
            <div data-aos="fade-up" className={`${style.main} dark:bg-slate-400`}>
                <h3 className={`${style.head}`}>Events TimeLine</h3>
                <div className={`${style.container}`}>
                    <ul>
                        {
                            data.map((arr, index) => (
                                <li alt={arr.name} key={Math.floor(Math.random() * 100000 + index)} className='dark:bg-slate-500' >
                                    <h3 className={`${style.heading} font-bold mb-4  dark:text-cyan-900`}>{arr.name}</h3>
                                    <h3 className={`${style.heading1} mb-2 font-semibold`}>{arr.institution}</h3>
                                    <p  className={`text-justify ${style.paraqualification} dark:text-white`}>{arr.detail}</p>
                                    <a className='dark:text-black' href={arr.link} target='_blank' rel="noreferrer">View More</a>
                                    <span className={`${style.date}`}>{arr.data}</span>
                                    <span className={`${style.circle}`}></span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}