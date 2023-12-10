import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

export const UploadContent = ({ editUploadContentPopup, setEditUploadContentPopup }) => {
    const [isDoc, setIsDoc] = React.useState(true);
    return (
        <React.Fragment>
            <Dialog
                open={editUploadContentPopup}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Upload Material</h1>
                    <hr style={{ margin: '10px 0 0 0' }} />
                </DialogTitle>
                <div style={{ margin: '0px 20px' }} >
                    <p style={{ fontSize: '14px', textAlign: 'justify', marginBottom: '20px' }}>Upload Any Material (PDF, word document, zoom links).</p>
                    <select onChange={(e)=>{setIsDoc(e.target.value==="pdf" ? true : false)}} style={{ fontSize: '14px', margin: '0 auto 20px auto'}}>
                        <option value="" key="">Select Type of Uploaded Content</option>
                        <option value="pdf" key="">PDF/Word</option>
                        <option value="link" key="">Link/text</option>
                    </select>
                    {
                        isDoc && <>
                            <label style={{ fontSize: '14px', marginTop: '14px' }} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload Content</label>
                            <input style={{ fontSize: '15px', marginBottom: '20px', padding: '10px' }} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </>
                    }
                    {
                        !isDoc && <div>
                        <h1 style={{ paddingBottom: '4px', fontSize: '14px', flex:1,}} className='text-sm font-semibold text-gray-600'>Upload Write Content: </h1>
                        <textarea style={{width: '100%', height:'100px'}} placeholder='user' cols="30" rows="10"></textarea>
                    </div>
                    }
                        
                </div>
                <DialogActions>
                    <Button style={{fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff"}} onClick={() => { setEditUploadContentPopup(!editUploadContentPopup) }}>Close</Button>
                    <Button style={{fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff"}} onClick={() => { setEditUploadContentPopup(!editUploadContentPopup) }} autoFocus>
                        {"Upload this File"}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    )
}