import React, { useContext, useState } from 'react';
import { AuthContext } from './UserContext/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './Components/SocialLogin';
import { toast } from 'react-toastify';

const Registration = () => {
    const { signUp, updateInfo, user } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const handleToRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const url = form.url.value;
        signUp(email, password)
            .then(result => {

                setErrorMsg("succssfully logged In");
                handletoUpdate(name, url);
                console.log(result)
                toast('Successfully Signed Up')
                navigate(from, { replace: true });

            }).catch(error => { setErrorMsg(error.message); })


    }
    const handletoUpdate = (name, photourl) => {
        const profile = {
            displayName: name,
            photoURL: photourl
        }
        updateInfo(profile)
            .then(() => { })
            .catch(er => { })
    }


    return (
        <form className='container max-w-lg  mx-auto' onSubmit={(e) => handleToRegister(e)}>
            <h2 className='text-2xl text-center'> Registration</h2>
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="photo url" name="url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        {
                            errorMsg && <p>{errorMsg}</p>
                        }
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Sign Up</button>
                    <SocialLogin></SocialLogin>
                    <p className='my-3 p-2'><small>Already have an account?<Link className='text-decoration-none' to="/login"> Login</Link> </small></p>

                </div>
            </div>


        </form >
    );
};

export default Registration;