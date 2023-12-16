import React, { useState } from 'react'
import './style.css'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import avatar from "../assets/img/avatar.png"
import DialogContent from '@mui/material/DialogContent';

export const Notifications = ({notificationPopUp, setNotificationPopUp}) => {
    //eslint-disable-next-line
    let [data, setData] = useState([
        {
            image: avatar,
            para: "Lecture material uploaded. All are Requested to view and we will be monitoring the performance",
            uploaderName: "Abdullah"
        },
        {
            image: avatar,
            para: "Zoom Session on Character Building will held on friday. All are Requested to view the events page",
            uploaderName: "Mariyam"
        },{
            image: avatar,
            para: "Lecture material uploaded. All are Requested to view and we will be monitoring the performance",
            uploaderName: "Abdullah"
        }
    ])
    return (
        <React.Fragment>
            <Dialog
                open={notificationPopUp}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Notifications</h1>
                    <hr style={{ margin: '10px 0 0 0' }} />
                </DialogTitle>
                <div style={{ padding: "0", margin: 0 }}>
                    <DialogContent style={{margin: 0, padding: "0 20px"}}>
                        <div>
                            {
                                data.map((Items) => (
                                    <div style={{ padding: "10px 0" }}>
                                        <div className='flex justify-between items-center'>
                                            <img style={{ width: "50px", borderRadius: "50%" }} src={Items.image} alt="" />
                                            <div style={{ padding: "10px" }}>
                                                <p style={{ fontSize: "13px" }}>{Items.para}</p>
                                                <p style={{ fontWeight: "bold", color: "gray", marginTop: "4px" }}>{Items.uploaderName}</p>
                                            </div>
                                        </div>
                                        <hr style={{ color: "#000" }} />
                                    </div>
                                ))
                            }
                        </div>
                    </DialogContent>
                </div>
                <DialogActions>
                    <Button style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff", padding: "7px 30px" }} onClick={() => { setNotificationPopUp(false) }} autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    )
}