import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';

const Header = () => {
    const { logOut, user } = useContext(AuthContext)
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const handleToLogOut = () => {
        logOut()
            .then(result => {

                console.log("Logged Out")
                navigate(from, { replace: true });

            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">

                    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='italic text-red-600'>Sports</span>  CarHub</Link>
                </div>
                <div > {
                    user && <>
                        <Link to='/addItem' className="btn btn-ghost normal-case text-xl">  Add Item</Link>
                        <Link to='/myproducts' className="btn btn-ghost normal-case text-xl">  My Products</Link>

                    </>
                }


                </div>
                <div className="navbar-end">
                    <Link to='/blog' className="btn btn-ghost normal-case text-xl">  Blogs</Link>
                    <Link to='/alltoys' className="btn btn-ghost normal-case text-xl">All toys</Link>


                    {
                        user ? <button onClick={handleToLogOut}>logout</button> : <>
                            <Link to={'/login'}>
                                <button className='mx-2'>Login</button>
                            </Link>

                            <Link to={'/registration'}>
                                <button className='mx-2'>Sign Up</button>

                            </Link>


                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header; 