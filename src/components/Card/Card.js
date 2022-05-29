import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {

    const { name, price, img, Mquantity, Aquantity, description, _id } = card;
    return (
        <div className='' >
            <div className='border-solid border-2 border-indigo-200 rounded-lg shadow-xl  m-5  bg-white p-2'>
                <div className='bg-white text-center'>
                    <img className='mx-auto w-auto h-32 py-2' src={img} alt="" />
                    <h1> Name: {name} </h1>
                    <h2><small>Price:$ {price}</small></h2>
                    <p><small> Minimum Order Quantity: {Mquantity}</small></p>
                    <p className='text-semibold'> <small>Available Quantity: {Aquantity}</small></p>
                    <p className='text-xs'><small>Discriptions: {description.slice(0, 80)}</small></p>
                    <div>
                        <Link to={`/purchese/${_id}`}><button className='border w-full bg-indigo-600 text-white rounded-md hover:bg-indigo-800 mt-3 font-semibold'>Purchese</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Card;