import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const VerificationBox = ({ otpModel, setOtpModel, verify, setverify, otp, setOtp, VerificationLength, heading, para}) => {
    const referenceInput = useRef(new Array(VerificationLength).fill(null));
    const [current, setcurrent] = useState(0);

    useEffect(() => {
        referenceInput.current[0]?.focus();
    }, [referenceInput])

    function handleDelete() {
        const otpArray = [...otp];
        if (otpArray[current] !== '') {
            otpArray[current] = '';
        } else if (current > 0) {
            const prevIndex = current - 1;
            otpArray[prevIndex] = '';
            setcurrent(prevIndex);
            referenceInput.current[prevIndex].focus();
        }
        setOtp(otpArray);
    }

    function addOtp(e) {
        const value = e.target.value;

        if (!value) {
            return;
        }

        const otpArray = [...otp];
        otpArray[current] = value;
        setOtp(otpArray);

        if (current + 1 === VerificationLength) {
            setverify(true)
        }
        const index = current + 1 >= VerificationLength ? current : current + 1;
        setcurrent(index);
        if (index < VerificationLength) {
            referenceInput.current[index].focus();
            index < VerificationLength - 1 && (referenceInput.current[index].value = "")
        }
    }

    return (
        <>
            <Dialog
                open={otpModel}
                onClose={() => { setOtpModel(false) }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <p style={{fontSize: "20px"}} className='text-4xl font-semibold text-center my-2'>{heading}</p>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{fontSize: "14px"}} id="alert-dialog-description">
                        Check your <span className='font-semibold'>Email</span> for the code and verify it below. {para}
                    </DialogContentText>
                    <div className='flex justify-center my-6'>
                        {
                            new Array(VerificationLength).fill(22).map((val, index) => (
                                <input
                                    key={val * 1022}
                                    type="text"
                                    style={{
                                        border: `2px solid #333`,
                                        height: "40px",
                                        width: "40px",
                                        borderRadius: "3px",
                                        fontSize: "19px",
                                        textAlign: "center",
                                        marginRight: "9px"
                                    }}
                                    onClick={() => { setcurrent(index) }}
                                    maxLength={1}
                                    ref={(el) => { referenceInput.current[index] = el }}
                                    onInput={addOtp}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Backspace') {
                                            handleDelete()
                                        }
                                        else{
                                            setOtp([...otp, otp[index] = e.target.value])
                                        }
                                    }}
                                    // placeholder='0'
                                    value={otp[index]}
                                />
                            ))
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }}  onClick={() => { setOtpModel(false) }}>Cancel</Button>
                    <Button style={{ fontSize: '12px', border: '1px solid #ccc', backgroundColor: "#15375c", color: "#fff" }}  onClick={() => { setverify(true) }} autoFocus>
                        Verify
                    </Button>
                </DialogActions>
                {/* {verify && <LoaderModal />} */}
            </Dialog>
        </>
    )
}
export default VerificationBox;