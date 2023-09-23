import React from "react";
import {GoogleLogin} from "react-google-login";
import axios from "axios";

function SignIn() {
    const googleAuth = async ({ profileObj }) => {
        axios({
            method: 'post',
            url: 'auth/google/signin',
            data: {
                googleId: profileObj.googleId,
                email: profileObj.email,
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
    onFailure={googleAuth}
    cookiePolicy={"single_host_origin"}
    >
    </GoogleLogin>

</>
)

}

export default SignIn;