
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { MuiOtpInput } from 'mui-one-time-password-input'
import "./index.css"
import { useState } from 'react';

// For MUI styles
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const SellerLogin = () => {
    const [mobile, setMobile] = useState("")
    const [isTermsAgreed, setIsTermsAgreed] = useState(true)
    const [isValidNumber, setIsValidNumber] = useState(true)
    const [sentOtp, setSentOtp] = useState(false)
    const [otp, setOtp] = useState("");
    const [isValidOtp, setIsValidOtp] = useState(false)
    const [isSubmitClicked, setIsSubmitClicked] = useState(false)

    console.log(mobile, isTermsAgreed, isValidNumber)
    console.log(otp, isValidOtp)

    const onClickGetOtp = () => {
        if (mobile.length === 10) {
            setIsValidNumber(true)
            setSentOtp(true)
        } else {
            setIsValidNumber(false)
        }
    }

    const handleChange = (newValue) => {
        setOtp(newValue);
        setIsSubmitClicked(false)
    };

    const onClickSignIn = (value) => {
        setIsSubmitClicked(true)
        if (otp === "111111" || value === "111111") {
            setIsValidOtp(true)
        }
        else {
            setIsValidOtp(false)
        }
    }

    // const onComplete = (value) => {
    //     if (value === "111111") {
    //         setIsValidOtp(true)
    //     }
    //     else {
    //         setIsValidOtp(false)
    //     }
    // }

    const renderMobileEnteringScreen = () => (
        <div className="card-body d-flex flex-column pb-0 mt-2 justify-content-around">
            <div>
                <h1 className="h4 loginHeading mb-3">Log In</h1>
                <TextField id="outlined-basic" label="Mobile" variant="outlined" color={isValidNumber ? "secondary" : "error"} size="small" className='w-100' style={{ backgroundColor: "#F3F7FA" }} type="number" onChange={(event) => setMobile(event.target.value)} value={mobile} />
                {!isValidNumber && <p className='small m-0 text-danger'>Please Enter Valid Mobile Number</p>}
                <div className="d-flex align-items-center mt-3">

                    <Checkbox {...label} checked={isTermsAgreed} style={{ padding: "0px", backgroundColor: "#F3F7FA", color: "#58243D" }} className="mr-2" onChange={(event) => { setIsTermsAgreed(event.target.checked) }} />


                    <p className='small m-0'>By clicking on this button, you are agreeing to our Terms & Condition and Privacy Policy</p>
                </div>
                <p className='small m-0 text-danger mb-3'>{!isTermsAgreed && "Please Accept Terms&Conditions"}</p>
            </div>
            <div >
                <Button variant="contained" className='w-100 mt-3' style={{ backgroundColor: "#58243D" }} onClick={onClickGetOtp}>Get OTP</Button>
                <p className='small text-center mt-2 newUser'>Register as a new user?</p>
            </div>
        </div>
    )

    const showMsg = () => {
        if (isValidOtp) {
            return (
                <div className="alert alert-success" role="alert">
                    Done!You are logged In.
                </div>
            )
        } else {
            return (
                <div className="alert alert-danger" role="alert">
                    Incorrect OTP! Please try again.
                </div>
            )
        }

    }


    const renderMobileVerificationScreen = () => (
        <div className="card-body d-flex flex-column pb mt-2 justify-content-around">
            <div>
                {isSubmitClicked && showMsg()}
                <h1 className="h5 loginHeading mb-2">Verify Phone</h1>
                <p className='mt-0'>Code sent to +91 {mobile}</p>
                <MuiOtpInput
                    length={6}
                    onComplete={onClickSignIn}
                    value={otp}
                    onChange={handleChange}
                    TextFieldsProps={{
                        disabled: false,
                        size: "small",
                        placeholder: "0",
                        color: "secondary",
                        variant: "outlined",
                        type: "number",
                        style: { backgroundColor: "#F3F7FA" }
                    }}
                />
            </div>
            <div className="d-flex flex-column">
                <p className="small m-0 text-right mt-2">Did not receive an OTP?</p>
                <a href="www.printila.com" className='small m-0 text-right'>Request again</a>
            </div>
            <div >
                <Button variant="contained" className='w-100 mt-3' style={{ backgroundColor: "#58243D" }} onClick={onClickSignIn}>Sign In</Button>
            </div>
        </div>
    )


    return (
        <div className="loginParentCon d-flex justify-content-center align-items-center">
            <div className="card  text-secondary cardConLoginSeller">
                <div className="card-header text-center p-3">
                    <img src="https://res.cloudinary.com/radhekrishn/image/upload/v1671690028/Group_aq9pzb.png" alt="printilaLogo" className="websiteLogo" />
                </div>
                {sentOtp ? renderMobileVerificationScreen() : renderMobileEnteringScreen()}
            </div>
            <img src="https://res.cloudinary.com/radhekrishn/image/upload/v1671690028/Group_9485_riight_uuxuls.png" alt="arrowsImage" className="rightArrowImage" />
            <img src="https://res.cloudinary.com/radhekrishn/image/upload/v1671690028/Group_9486_rkjrgc.png" alt="leftArrowImg" className="leftArrowImg" />
        </div>
    )
}
export default SellerLogin