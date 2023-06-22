import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import SingleToy from './SingleToy';
import LeftNav from '../pages/LeftNav/LeftNav';

const AllToys = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://toy-new.vercel.app/cars')
            .then(res => res.json())
            .then(data => setCars(data));
    }, [])

    return (
        <div className='grid grid-cols-3'>
            <div>
                <LeftNav></LeftNav>
            </div>
            <div className='col-span-2'>

                <div className='flex flex-wrap gap-4  container mx-auto'>
                    {
                        cars.map(product => <SingleToy key={product._id} product={product}></SingleToy>)
                    }
                </div>

            </div>
        </div>

    );
};

export default AllToys;