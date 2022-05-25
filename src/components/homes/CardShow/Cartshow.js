import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Cartshow.css';

const Cartshow = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('Fakedata.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="container">

       
        <div className="carts">
            

            {
                users?.slice(2, 8).map(user => <Cart
                    key={user._id}
                    user={user}

                ></Cart>)
            }
        </div>
        
        </div>
    );
};

export default Cartshow;