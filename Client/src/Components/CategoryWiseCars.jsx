import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToy from './SingleToy';
import LeftNav from '../pages/LeftNav/LeftNav';

const CategoryWiseCars = () => {
    const cars = useLoaderData();
    console.log(cars)


    return (
        <div className='grid grid-cols-3 container mx-auto'>
            <LeftNav></LeftNav>
            <div className='col-span-2 flex flex-wrap gap-4  container mx-auto '>

                {
                    cars.map(product => <SingleToy key={product._id} product={product}></SingleToy>)

                }
            </div>
        </div>
    );
};

export default CategoryWiseCars;