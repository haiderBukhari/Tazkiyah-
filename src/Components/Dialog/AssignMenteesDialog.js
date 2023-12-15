import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const AssignMenteesDialog = ({ selectedSemesterTemp, setSelectedSemesterTemp, selectDpt, setSelectDpt, setSelectedSemester }) => {
    return (
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

                    <select onChange={(e) => { setSelectedSemesterTemp(e.target.value) }} style={{ fontSize: '15px', marginBottom: '20px', padding: '10px' }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400">
                        <option value="Fall-2023" key="">Fall-2023</option>
                        <option value="Summer-2023" key="">Summer-2023</option>
                        <option value="Fall-2022" key="">Fall-2022</option>
                        <option value="Spring-2022" key="">Spring-2022</option>
                    </select>
                </div>
                <DialogActions>
                    <Button onClick={() => { setSelectDpt(!selectDpt); setSelectedSemester(null) }} style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }}>Close</Button>
                    <Button onClick={() => { setSelectDpt(!selectDpt); setSelectedSemester(selectedSemesterTemp) }} style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }} autoFocus>
                        Select Semester
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    )
}

export default AssignMenteesDialog
