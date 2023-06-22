import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleToy = ({ product }) => {
    const categoryCar = ['Police', 'Race Car', 'Truck']
    const {
        pictureUrl,
        _id,
        name,
        seller,
        email,
        price,
        rating,
        quantity,
        details,
        category

    } = product;


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product.pictureUrl} style={{ height: "200px", width: "200px" }} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p> <span className='font-medium'>Seller:</span>  {seller}</p>
                    <p><span className='font-medium'>Price:</span> ${price}</p>
                    <p> <span className='font-medium'>Rating:</span>  {rating}</p>
                    <p className='text-xs'> <span className='font-medium'>Quantity:</span> {quantity}</p>
                    <p className='text-xs'> {categoryCar[category - 1]}</p>


                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`} className='btn btn-xs btn-info'> Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;