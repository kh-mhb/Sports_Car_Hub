import React, { useContext, useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';

import { AuthContext } from '../UserContext/UserContext';
import { toast } from 'react-toastify';

const SocialLogin = () => {
    const authInfo = useContext(AuthContext);
    const [errormsg, setErrorMsg] = useState('');
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const { SignInGoogle, setLoading, logIn } = authInfo;
    const handleTosignwithGoogle = () => {
        SignInGoogle()
            .then(result => {
                setErrorMsg("succssfully logged In");
                toast("Successfully Logged in")

                navigate(from, { replace: true });

            }).catch(error => { setLoading(false); setErrorMsg(error.message); toast.error("Failed to Sign In") })
    }
    return (
        <div>
            <button className='btn btn-error w-full my-2' onClick={handleTosignwithGoogle} variant="info" >
                Sign Up with Google
            </button>
        </div>
    );
};

export default SocialLogin;