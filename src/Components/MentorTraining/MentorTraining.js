import React, { useState } from 'react'
import thumbnail1 from '../../assets/images/thubmnail1.jfif'
import thumbnail2 from '../../assets/images/thubmnail2.jfif'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


const MentorTraining = () => {
    const [open, setOpen] = React.useState(false);

    const [fileName, setFileName] = useState("");
    const [linkName, setLinkName] = useState("");
    // const handleClickOpen = () => {
        // setOpen(true);
    // };

    const handleClose = () => {
        setOpen(false);
    };

    
    const [trainingData, setTrainingData] = useState([
        {
            image: thumbnail1,
            text: "Quran and Ahadees Lecture",
            link: "www.youtube.com"
        },
        {
            image: thumbnail2,
            text: "Book",
            link: "www.google.com"
        }
    ])
    const handleSubmit = () => {
        setTrainingData([...trainingData, {
            image: thumbnail1,
            text: fileName,
            link: linkName
        }]) 
        setFileName("")
        setLinkName("")
    }
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                {/* <button onClick={() => { handleClickOpen() }} style={{ margin: "20px 0", backgroundColor: "#15375c", color: "#fff", padding: "7px 14px", borderRadius: "4px" }}>Upload Training Material</button> */}
            </div>


            <div style={{ padding: "10px 40px", display: "flex", justifyContent: "center", flexWrap: "wrap" }}>

                {
                    trainingData.map((list) => (
                        <div style={{ maxWidth: "350px", boxShadow: "2px 2px 3px #f4f4f4, -2px -3px 5px #f4f4f4", margin: "10px", height: "auto", width: "100%", border: "1px solid #ccc", borderRadius: "4px" }}>
                            <img style={{ width: "100%", borderRadius: "4px", marginBottom: "30px", height: "400px" }} src={list.image} alt="thumbnails" />
                            <div class="card-content">
                                <h2 style={{ fontSize: "18px", color: "gray", padding: "10px 0 10px 20px" }}>{list.text}</h2>
                                <p style={{ fontSize: "15px", color: "gray", padding: "10px 0 10px 20px" }}>Link: <span style={{ color: "blue" }}>{list.link}</span></p>
                            </div>
                        </div>
                    ))
                }

            </div>
            <React.Fragment>
                <Dialog
                    open={open}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Upload Training Material</h1>
                        <hr style={{ margin: '10px 0 0 0' }} />
                    </DialogTitle>
                    <div style={{ margin: '0px 20px' }} >
                        <p style={{ fontSize: '14px', textAlign: 'justify', marginBottom: '20px' }}>Upload material like youtube video links, recording links or books.</p>
                        <label style={{ fontSize: '14px', marginTop: '14px' }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Image</label>
                        <input style={{ fontSize: '15px', marginBottom: '20px', padding: '10px' }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        <div>
                            <h1 style={{ paddingBottom: '4px', fontSize: '14px', flex: 1, }} className='text-sm font-semibold text-gray-600'>Content of The File</h1>
                            <input onChange={(e)=>{setFileName(e.target.value)}} value={fileName} type="text" style={{ width: '100%' }} placeholder='user'></input>
                        </div>
                        <div>
                            <h1 style={{ marginTop: "20px", paddingBottom: '4px', fontSize: '14px', flex: 1, }} className='text-sm font-semibold text-gray-600'>Link of the File</h1>
                            <input onChange={(e)=>{setLinkName(e.target.value)}} value={linkName} type="text" style={{ width: '100%' }} placeholder='user'></input>
                        </div>

                    </div>
                    <DialogActions>
                        <Button style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }} onClick={handleClose}>Close</Button>
                        <Button style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }} onClick={()=>{handleClose(); handleSubmit()}} autoFocus>
                            {"Upload this Material"}
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        </div>
    )
}

export default MentorTraining