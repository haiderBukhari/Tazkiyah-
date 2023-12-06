import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import ToastContainer from './toast';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';


const MenteesDataGrid = ({ data, setStudentList, selectedMentor , setSelectedMentor}) => {
    const [gridWidth, setGridWidth] = useState(0);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => {
        setOpen(false);
        setStudentData(Defaultterms)
    };

    const Defaultterms = {
        id: Math.floor(1000 + Math.random() * 9000),
        Name: "",
        sapid: "",
        Department: ""
    }
    let [studentData, setStudentData] = useState(Defaultterms)

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
    const handleDelete = (id) => {
        const updatedData = data.filter(arr => arr.sapid !== id);
        setStudentList(updatedData)
        ToastContainer("Student Removed from the mentor!")
    }
    const columns = [
        {
            field: 'sapid',
            headerName: 'SAP ID',
            width: gridWidth > 800 ? 200 : gridWidth > 500 ? 110 : 65,
            renderCell: (params) => (
                <div style={{ fontSize: `${gridWidth > 500 ? '20px' : '13px'}` }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'Name',
            headerName: 'Name',
            width: gridWidth > 800 ? 200 : gridWidth > 550 ? 120 : 100,
            renderCell: (params) => (
                <div style={{ fontSize: `${gridWidth > 500 ? '17px' : '13px'}` }}>
                    {params.value}
                </div>
            ),
        },
        {
            field: 'Department',
            headerName: 'Department',
            width: gridWidth > 800 ? 180 : gridWidth > 550 ? 110 : 100,
            renderCell: (params) => (
                <div style={{ fontSize: `${gridWidth > 500 ? '17px' : '13px'}` }}>
                    {
                        gridWidth > 500 ? `${params.value}` : `${params.value.split(" ")[0]}`
                    }
                </div>
            ),
        },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <button style={{ padding: "5px 10px", backgroundColor: "rgb(0, 122, 255)", color: "#fff", borderRadius: "5px" }} onClick={() => handleDelete(params.row.sapid)}>Delete</button>
            ),
        },

    ];
    const rows = data;
    return (
        <div style={{ height: '100%', width: "100%", margin: "10px 20px", position: "relative" }}>
            <div onClick={() => { setSelectedMentor(null) }} style={{ position: 'absolute', top: -20, left: '4%', color: '#000', display: 'flex', alignItems: 'center', cursor: 'pointer', marginTop: '10px' }}>
                <ArrowLeftIcon style={{ fontSize: '30px' }} />
                <p>Go Back</p>
            </div>
            <div className='flex flex-column pt-10'>
                <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', padding: '0 0 10px 0' }}>Mentor Name: <span style={{ fontWeight: 'normal' }}>{selectedMentor.name}</span></h1>
                <h1 style={{ fontFamily: 'sans-serif', fontWeight: 'bold', padding: '10px 0' }}>Students Assigned: <span style={{ fontWeight: 'normal' }}>{selectedMentor.studentsAssigned}</span></h1>
                <button onClick={handleClickOpen} style={{ padding: "5px 10px", fontSize: "17px", width: "150px", margin: "auto", backgroundColor: "#007aff", marginTop: "10px", color: "#fff", marginBottom: "10px" }}>Add Student</button>
            </div>

            <DataGrid
                rows={rows}
                columns={columns}
                style={{ fontSize: '15px', maxWidth: "690px", margin: "20px auto 20px auto" }}
            />
            {
                <React.Fragment>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle style={{ fontSize: "20px" }} id="alert-dialog-title">
                            Add New Student to {selectedMentor.name}
                        </DialogTitle>
                        <hr style={{ margin: "0 20px" }} />
                        <DialogContent>
                            <h1 style={{ paddingBottom: '4px', fontSize: '14px', marginTop: "10px" }} className='font-semibold'>SAP ID: </h1>
                            <input onChange={(e) => { setStudentData({ ...studentData, sapid: e.target.value }) }} value={studentData.sapid} type="text" style={{ width: '240px' }} placeholder='SAP ID' />
                            <h1 style={{ paddingBottom: '4px', fontSize: '14px', marginTop: "16px" }} className='font-semibold'>Student Name: </h1>
                            <input onChange={(e) => { setStudentData({ ...studentData, Name: e.target.value }) }} type="text" value={studentData.Name} style={{ width: '240px' }} placeholder='Name' />
                            <h1 style={{ paddingBottom: '4px', fontSize: '14px', marginTop: "16px" }} className='font-semibold'>Dapartment: </h1>
                            <input onChange={(e) => { setStudentData({ ...studentData, Department: e.target.value }) }} value={studentData.Department} type="text" style={{ width: '240px' }} placeholder='Dapartment' />
                        </DialogContent>
                        <DialogActions>
                            <Button style={{ fontSize: '14px', border: '1px solid #ccc' }} onClick={handleClose}>Close</Button>
                            <Button disabled={!studentData.sapid || !studentData.Name || !studentData.Department} style={{ fontSize: '14px', border: '1px solid #ccc' }} onClick={() => { setStudentList([studentData, ...data]); ToastContainer("Student Assigned Successfully!"); handleClose() }} autoFocus>
                                Add Student
                            </Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>
            }
        </div>
    )
}

export default MenteesDataGrid