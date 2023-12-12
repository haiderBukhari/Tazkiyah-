import React from 'react'
import './style.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const StudentDataItems = ({ setStudentData, mentorName, semester, setid , setmentor}) => {
    const StudentLists = [
        {
            id: 1,
            name: "Student 1",
        },
        {
            id: 2,
            name: "Student 2",
        },
        {
            id: 3,
            name: "Student 3",
        },
        {
            id: 4,
            name: "Student 4",
        },
        {
            id: 5,
            name: "Student 5",
        },
        {
            id: 6,
            name: "Student 6",
        },
        {
            id: 7,
            name: "Student 7",
        },
        {
            id: 8,
            name: "Student 8",
        },
        {
            id: 9,
            name: "Student 9",
        },
        {
            id: 10,
            name: "Student 10",
        },
        {
            id: 11,
            name: "Student 11",
        },
        {
            id: 12,
            name: "Student 12",
        },
        {
            id: 13,
            name: "Student 13",
        },
        {
            id: 14,
            name: "Student 14",
        },
        {
            id: 15,
            name: "Student 15",
        },
        {
            id: 16,
            name: "Student 16",
        }
    ];
    return (
        <div className="mentor-list-container">
            <>
                {
                    <>
                        <div style={{ position: "relative", marginLeft: "20px" }} className="centersss">
                            {
                                <div onClick={() => { setmentor(null) }} style={{ position: "absolute", top: 0, left: 10, cursor: 'pointer' }}>
                                    <ArrowLeftIcon style={{ color: "#000", fontWeight: "bold", fontSize: "25px" }} />
                                </div>
                            }
                        </div>
                        <h1 style={{ textAlign: "center", fontSize: "22px" }}>Student's List</h1>
                        <hr style={{ width: "100px", margin: "4px auto 30px auto", padding: "1px" }} />
                        <div>
                            <h1 style={{ textAlign: "center", fontSize: "18px", marginBottom: "20px" }}>Semester: {semester}</h1>
                            <h1 style={{ textAlign: "center", fontSize: "18px", marginBottom: "20px" }}>Mentor Name: {mentorName.name}</h1>
                        </div>
                        <div className="mentor-list">
                            {StudentLists.map((student, index) => (
                                <div onClick={() => { setStudentData(student); setid(student.sapid) }} style={{ cursor: "pointer", width: "300px" }} key={index} className="mentor-card">
                                    <h2>Name: {student.name}</h2>
                                    <p>SAP ID: {student.sapid}</p>
                                </div>
                            ))}
                        </div>
                    </>
                }
            </>
        </div>
    )
}

export default StudentDataItems