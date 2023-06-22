import React, { useState } from 'react';

const MyProductCard = ({ product, setSelectedProduct, clickUPdata, setClickUpdate }) => {

    const categoryCar = ['Police', 'Race Car', 'Truck']
    const {
        pictureUrl,
        name,
        seller,
        email,
        price,
        rating,
        quantity,
        details,
        category

    } = product;

    const handleToDelete = () => {
        const _id = product._id;
        fetch(`https://toy-new.vercel.app/deleteitem?id=${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    setClickUpdate(!clickUPdata)
                }
            })


    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={product.pictureUrl} style={{ height: "200px", width: "200px" }} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{seller}</p>
                    <p>$ {price}</p>
                    <p>{rating}</p>
                    <p className='text-xs'>{quantity}</p>
                    <p className='text-xs'>{categoryCar[category - 1]}</p>


                    <div className="card-actions justify-end">
                        <label htmlFor="product-modal" onClick={() => setSelectedProduct(product)} className='btn btn-primary'>Edit</label>
                        <button className='btn btn-error' onClick={handleToDelete}>DELETE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductCard;