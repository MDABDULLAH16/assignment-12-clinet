import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {

    const { name, price, img, Mquantity, Aquantity, description } = card;
    return (
        <div className='' >
            <div className='border-solid border-2 border-indigo-200 rounded-lg shadow-xl  m-5  bg-white p-2'>
                <div className='bg-white text-center'>
                    <img className='mx-auto py-2' src={img} alt="" />
                    <h1>Cars Name: {name} </h1>
                    <h2><small>Price:$ {price}</small></h2>
                    <p><small> Minimum Order Quantity: {Mquantity}</small></p>
                    <p className='text-semibold'> <small>Available Quantity: {Aquantity}</small></p>
                    <p className='text-xs'><small>Discriptions: {description.slice(0, 80)}</small></p>
                    <div>
                        <Link to='/inventory' ><button className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-3 font-semibold'>Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Card;