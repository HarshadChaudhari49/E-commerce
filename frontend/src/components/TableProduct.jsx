import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';

const TableProduct = ({ cart }) => {
    const { decreaseQty, addToCart, removeFromCart } = useContext(AppContext);
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        let qty = 0;
        let price = 0;
        if (cart?.items) {
            for (let i = 0; i < cart.items?.length; i++) {
                qty += cart.items[i].qty;
                price += cart.items[i].price;
            }
        }
        setQty(qty);
        setPrice(price);
    }, [cart]);

    return (
        <div className="table-responsive">
            <table className="table table-bordered border-primary bg-dark text-center">
                <thead>
                    <tr>
                        <th scope="col" className='bg-dark text-light'>Product Image</th>
                        <th scope="col" className='bg-dark text-light'>Title</th>
                        <th scope="col" className='bg-dark text-light'>Price</th>
                        <th scope="col" className='bg-dark text-light'>Qty</th>
                        <th scope="col" className='bg-dark text-light'>Qty++</th>
                        <th scope="col" className='bg-dark text-light'>Qty--</th>
                        <th scope="col" className='bg-dark text-light'>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {cart?.items?.map((product) => (
                        <tr key={product._id}>
                            <th scope="row" className='bg-dark text-light'>
                                <img src={product?.imgSrc} alt="" style={{ width: '50px', height: '50px' }} />
                            </th>
                            <td className='bg-dark text-light'>{product?.title}</td>
                            <td className='bg-dark text-light'>{product?.price} ₹</td>
                            <td className='bg-dark text-light'>{product?.qty}</td>
                            <td className='bg-dark text-light'>
                                <svg onClick={() => addToCart(product?.productId, product?.title, product?.price / product?.qty, 1, product.imgSrc)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                    <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                </svg>
                            </td>
                            <td className='bg-dark text-light'>
                                <svg onClick={() => decreaseQty(product?.productId, 1)} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                    <path d="M280-440h400v-80H280v80ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q 83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                                </svg>
                            </td>
                            <td className='bg-dark text-light'>
                                <button onClick={() => removeFromCart(product?.productId)} className="btn btn-danger">Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableProduct;