import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


export const EditProfile = ({ editProfilePopup, setEditProfilePopup }) => {
    return (
        <React.Fragment>
            <Dialog
                open={editProfilePopup}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Edit Profile</h1>
                    <hr style={{ margin: '10px 0 0 0' }} />
                </DialogTitle>
                <div style={{ margin: '0px 20px' }} >
                    <p style={{ fontSize: '14px', textAlign: 'justify', marginBottom: '20px' }}>You may Verify your account detail and can change your name, Reset Password and change your profile picture.</p>
                    <label style={{ fontSize: '14px', marginTop: '14px' }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Change Profile Picture</label>
                    <input style={{ fontSize: '15px', marginBottom: '20px', padding: '10px' }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                    <div style={{display: 'flex', flexWrap: 'wrap', gap:'20px', justifyContent: 'space-between'}}>
                        <div>
                            <h1 style={{ paddingBottom: '4px', fontSize: '14px', flex:1,}} className='text-sm font-semibold text-gray-600'>Your Name: </h1>
                            <input type="text" style={{width: '240px'}} placeholder='user'/>
                        </div>
                        <div>
                            <h1 style={{ paddingBottom: '4px', fontSize: '14px' }} className='font-semibold'>Password: </h1>
                            <input type="text" style={{width: '240px'}} placeholder='***********'/>
                        </div>
                    </div>
                </div>
                <DialogActions>
                    <Button style={{fontSize: '12px', border: '1px solid #ccc'}} onClick={() => { setEditProfilePopup(!editProfilePopup) }}>Close</Button>
                    <Button style={{fontSize: '12px', border: '1px solid #ccc'}} onClick={() => { setEditProfilePopup(!editProfilePopup) }} autoFocus>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}