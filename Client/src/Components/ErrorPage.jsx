import React from 'react';
import error from '../../public/error.png'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div>
            <div className='container  flex justify-center mx-auto items-center'>
                <img src={error} alt="" style={{ maxWidth: "400px" }} className='' />
                <Link to='/' className='d-flex justify-content-center text-decoration-none  fw-bold button'><button className='btn btn-info'>Go Back</button></Link>
            </div>

        </div>
    );
};

export default ErrorPage;