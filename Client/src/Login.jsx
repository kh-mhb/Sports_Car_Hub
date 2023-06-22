import React, { useContext, useState } from 'react';
import { AuthContext } from './UserContext/UserContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './Components/SocialLogin';
import { toast } from 'react-toastify';

const Login = () => {
    const { logIn } = useContext(AuthContext);
    const [errorMsg, setErrorMsg] = useState();
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleToLogin = (e) => {
        e.preventDefault();
        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        logIn(email, password)
            .then(result => {
                setErrorMsg("succssfully logged In");
                toast("Successfully Logged in")
                navigate(from, { replace: true });
                console.log(result)


            }).catch(error => { setErrorMsg(error.message) })


    }




    return (
        <form className='container max-w-lg  mx-auto' onSubmit={(e) => handleToLogin(e)}>
            <h2 className='text-2xl text-center'> Login</h2>
            <div className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
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
                    <button className="btn btn-primary">Login</button>
                    <SocialLogin></SocialLogin>
                    <p className='my-3 p-2'><small>New here? <Link className='text-decoration-none' to="/registration"> create an account</Link> </small></p>


                </div>
            </div>


        </form >
    );
};

export default Login;