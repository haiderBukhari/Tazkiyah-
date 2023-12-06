import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';


export const EditProfile = ({ editProfilePopup, setEditProfilePopup }) => {
    const [changePassword, setChangePassword] = React.useState(true);
    return (
        <>
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
                    {
                        changePassword ? (<>
                            <div style={{ margin: '0px 20px' }} >
                                <p style={{ fontSize: '14px', textAlign: 'justify', marginBottom: '20px' }}>You may Verify your account detail and can change your name, Reset Password and change your profile picture.</p>
                                <label style={{ fontSize: '14px', marginTop: '14px' }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Change Profile Picture</label>
                                <input style={{ fontSize: '15px', marginBottom: '20px', padding: '10px' }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'space-between', alignItems: "center", margin: "10px 0 20px 0" }}>
                                    <div>
                                        <h1 style={{ paddingBottom: '4px', fontSize: '14px', flex: 1, }} className='text-sm font-semibold text-gray-600'>Your Name: </h1>
                                        <input type="text" style={{ width: '240px' }} placeholder='user' />
                                    </div>
                                    <div>
                                        <button onClick={() => { setChangePassword(!changePassword) }} style={{ backgroundColor: "#3498db", padding: "5px 15px", color: "#fff", borderRadius: "7px" }}>Change Password</button>
                                    </div>
                                </div>
                                <div>
                                    About Me
                                    <textarea style={{ width: '100%', height: '100px', padding: "3px 10px", margin: "10px 0" }} placeholder='About Me' cols="30" rows="10"></textarea>
                                </div>
                            </div>
                            <DialogActions>
                                <Button style={{ fontSize: '12px', border: '1px solid #ccc' }} onClick={() => { setEditProfilePopup(!editProfilePopup) }}>Close</Button>
                                <Button style={{ fontSize: '12px', border: '1px solid #ccc' }} onClick={() => { setEditProfilePopup(!editProfilePopup) }} autoFocus>
                                    Save
                                </Button>
                            </DialogActions>
                        </>) : (<div style={{ padding: "0 20px" }}>
                            <p style={{ fontSize: '14px', textAlign: 'justify', marginBottom: '20px' }}>You cam change your password. Your password should consist of Upper Case and Lower Case Letters(A-Z, a-z) and numbers(1-9)</p>
                            <h1 style={{ paddingBottom: '4px', fontSize: '14px' }} className='font-semibold'>Current Password: </h1>
                            <input type="password" style={{ width: '240px' }} placeholder='***********' />
                            <h1 style={{ paddingBottom: '4px', fontSize: '14px', marginTop: "10px" }} className='font-semibold'>New Password: </h1>
                            <input type="password" style={{ width: '240px' }} placeholder='***********' />
                            <h1 style={{ paddingBottom: '4px', fontSize: '14px',marginTop: "10px"  }} className='font-semibold'>Confirm New Password: </h1>
                            <input type="password" style={{ width: '240px' }} placeholder='***********' />
                            <DialogActions>
                                <Button style={{ fontSize: '12px', border: '1px solid #ccc' }} onClick={() => { setChangePassword(!changePassword) }}>Close</Button>
                                <Button style={{ fontSize: '12px', border: '1px solid #ccc' }} onClick={() => { setChangePassword(!changePassword) }} autoFocus>
                                    Save
                                </Button>
                            </DialogActions>
                        </div>)
                    }
                </Dialog>
            </React.Fragment >

        </>
    )
}