import React from "react";
import {GoogleLogin} from "react-google-login";
import axios from "axios";

function SignUp() {
    const googleAuth = ({ profileObj }) => {
        axios({
            method: 'post',
            url: 'auth/google/signup',
            data: {
                googleId: profileObj.googleId,
                email: profileObj.email,
                first_name: profileObj.firstName,
                last_name: profileObj.familyName,
            },
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
}

return(
    <>
    
    <GoogleLogin
    clientId="832242390921-5sivgl0fnvliaap3bl9v1m9t4mjral77.apps.googleusercontent.com"
    onSuccess={googleAuth}
    onFailure={err=> console.log(err)}
    cookiePolicy={"single_host_origin"}
    >
    <span> Sign Up with Google</span>
    </GoogleLogin>

</>
)

}

export default SignUp;