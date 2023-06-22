import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleCarDetails = () => {
    const car = useLoaderData();
    const categoryCar = ['Police', 'Race Car', 'Truck']

    const { pictureUrl,
        name,
        seller,
        email,
        price,
        rating,
        quantity,
        details,
        category
    } = car

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={car.pictureUrl} style={{ width: "300px" }} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>

                        <h2 className="card-title">{name}</h2>
                        <p>{seller}</p>
                        <p> Price: $ {price}</p>
                        <p>{rating}</p>
                        <p className='text-xs'>{quantity}</p>
                        <p className='text-xs'>{details}</p>

                        <p className='text-xs'> Category : {categoryCar[category - 1]}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCarDetails;