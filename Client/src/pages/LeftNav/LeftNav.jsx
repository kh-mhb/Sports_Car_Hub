import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {


    return (
        <div className='container ml-4'>
            <h4 className='italic'>All Category</h4>
            <div>

                <ul>
                    <li className='my-2     ml-4'><Link to={`/catagory/1`}>Police</Link></li>
                    <li className='my-2    ml-4'><Link to={`/catagory/2`}>Race Car</Link></li>

                    <li className='my-2    ml-4'><Link to={`/catagory/3`}>Truck</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default LeftNav;