import React, { useState } from 'react'
import './style.css'
import MenteesDataGrid from './MenteesDataGrid';
const AssignMentees = ({selectedSemester, setSelectedSemester, selectedMentor, setSelectedMentor}) => {
    function generateRandomId() {
        return Math.floor(1000 + Math.random() * 9000);
    }
    const mentorList = [
        {
            id: 1,
            name: "Mentor 1",
            studentsAssigned: 20
        },
        {
            id: 2,
            name: "Mentor 2",
            studentsAssigned: 20
        },
        {
            id: 3,
            name: "Mentor 3",
            studentsAssigned: 20
        },
        {
            id: 4,
            name: "Mentor 4",
            studentsAssigned: 20
        },
        {
            id: 5,
            name: "Mentor 5",
            studentsAssigned: 20
        },
        {
            id: 6,
            name: "Mentor 6",
            studentsAssigned: 20
        },
        {
            id: 7,
            name: "Mentor 7",
            studentsAssigned: 20
        },
        {
            id: 8,
            name: "Mentor 8",
            studentsAssigned: 20
        },
        {
            id: 9,
            name: "Mentor 9",
            studentsAssigned: 20
        },
        {
            id: 10,
            name: "Mentor 10",
            studentsAssigned: 20
        }
    ];

    const [studentList, setStudentList] = useState([
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 1",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 2",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 3",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 4",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 5",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 6",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 7",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 8",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 9",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 10",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 11",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 12",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 13",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 14",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 15",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 16",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 17",
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 18",
            Department: "xyz"
        },
        {
            Name: "Student 19",
            id: generateRandomId(),
            sapid: generateRandomId(),
            Department: "xyz"
        },
        {
            id: generateRandomId(),
            sapid: generateRandomId(),
            Name: "Student 20",
            Department: "xyz"
        }
    ]);

    return (
        <>
            {
                selectedSemester ? (<div className="mentor-list-container">
                    {
                        selectedMentor ? (<MenteesDataGrid data={studentList} setStudentList={setStudentList} selectedMentor={selectedMentor} setSelectedMentor={setSelectedMentor} />
                        ) : (<>
                            <h1 style={{ textAlign: "center", fontSize: "22px" }}>Mentor's List</h1>
                            <hr style={{ width: "100px", margin: "4px auto 30px auto", padding: "1px" }} />
                            <div>
                                <h1 style={{ textAlign: "center", fontSize: "18px", marginBottom: "10px" }}>Semester: {selectedSemester}</h1>
                            </div>
                            <div className="mentor-list">
                                {mentorList.map((mentor, index) => (
                                    <div onClick={() => { setSelectedMentor(mentor) }} style={{ cursor: "pointer",border: "2px solid #15375c", transition: "transform 300ms ease-in-out 0s" }} key={index} className="mentor-card hover:scale-110">
                                        <h2>Name: {mentor.name}</h2>
                                        <p>Students Assigned: {mentor.studentsAssigned}</p>
                                    </div>
                                ))}
                            </div>
                        </>)
                    }
                </div>) : (<>
                    <div className='flex flex-col justify-center items-center' style={{ height: '50vh' }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '23px', textAlign: 'center', lineHeight: '3.5rem' }}>Please Select the Desired Department and Semester.</h1>
                    </div>
                </>)
            }
        </>
    )
}

export default AssignMentees