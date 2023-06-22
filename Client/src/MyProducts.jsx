import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './UserContext/UserContext';
import MyProductCard from './Components/MyProductCard';
import ProductEditModal from './Components/ProductEditModal';

const MyProducts = () => {
    const { user, loading, setLoading } = useContext(AuthContext)
    const [selectedProduct, setSelectedProduct] = useState();
    const [clickUPdata, setClickUpdate] = useState(false);
    const [myproducts, setMyProducts] = useState([])
    useEffect(() => {
        if (user && user.email) {

            fetch(`https://toy-new.vercel.app/myproducts?email=${user.email}`)
                .then(res => res.json())
                .then(data => {

                    setMyProducts(data)
                    setLoading(false)

                })
        }

    }, [])
    useEffect(() => {
        if (user && user.email) {

            fetch(`https://toy-new.vercel.app/myproducts?email=${user.email}`)
                .then(res => res.json())
                .then(data => {

                    setMyProducts(data)
                    setLoading(false)

                })
        }

    }, [clickUPdata])
    return (
        <div>
            {
                selectedProduct && <ProductEditModal selectedProduct={selectedProduct} setClickUpdate={setClickUpdate} clickUPdata={clickUPdata} setSelectedProduct={setSelectedProduct}></ProductEditModal>
            }
            <div className='flex flex-wrap gap-4 container mx-auto'> {
                myproducts.map(product => <MyProductCard key={product._id} setSelectedProduct={setSelectedProduct} clickUPdata={clickUPdata} setClickUpdate={setClickUpdate} product={product}></MyProductCard>)
            }

            </div>


        </div>
    );
};

export default MyProducts;