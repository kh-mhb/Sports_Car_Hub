import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {
    const { user } = useContext(AuthContext)
    let navigate = useNavigate();

    const handleToAddItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const pictureUrl = form.pictureUrl.value;
        const name = form.name.value;
        const seller = user?.displayName;
        const email = user?.email;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const category = form.category.value;
        const item = {
            pictureUrl,
            name,
            seller,
            email,
            price,
            rating,
            quantity,
            details,
            category

        }
        fetch('https://toy-new.vercel.app/productadd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                navigate('/myproducts')

            })


    }
    return (
        <form className='container max-w-lg  mx-auto' onSubmit={(e) => handleToAddItem(e)}>
            <h2 className='text-2xl text-center'> Add Item</h2>
            <div className="card-body">

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="number" placeholder="Price" name="price" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input type="number" placeholder="Ratings" name="rating" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <input type="number" placeholder="Quantiy" name="quantity" className="input input-bordered" required />

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea type="text" placeholder="Description" name="details" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo Url</span>
                    </label>
                    <input type="text" placeholder="Photo Url" name="pictureUrl" className="input input-bordered" required />

                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <select name="category" className="input input-bordered" required>
                        <option value="">Select a category</option>
                        <option value='1'> Police</option>
                        <option value='2'>Race Car</option>
                        <option value='3'> Truck</option>
                    </select>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Add Item</button>

                </div>
            </div>


        </form >
    );
};

export default AddItem;