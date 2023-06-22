import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductEditModal = ({ clickUPdata, selectedProduct, setSelectedProduct, setClickUpdate }) => {
    const navigate = useNavigate()
    const {


        price,
        rating,
        quantity,
        details,


    } = selectedProduct;
    // console.log(product)
    const handleToUpdate = (e) => {
        e.preventDefault();

        const form = e.target;

        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const item = {

            _id: selectedProduct._id,
            price,
            rating,
            quantity,
            details,


        }
        fetch('https://toy-new.vercel.app/updateItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {

                setSelectedProduct(null)

                setClickUpdate(!clickUPdata)
                navigate('/myproducts')

            })
    }
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="product-modal" className="modal-toggle min-h-min" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={(e) => handleToUpdate(e)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" defaultValue={price} name="price" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" defaultValue={rating} name="rating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" defaultValue={quantity} name="quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details </span>
                            </label>
                            <input type="text" defaultValue={details} name="details" className="input input-bordered" required />
                        </div>
                        <button type='submit' className='btn btn-info my-2 btn-xs'>Update</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ProductEditModal;