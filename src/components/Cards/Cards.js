import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className=''>
            <div className=' bg-gray-200 py-4 '>
                <span className='text-2xl font-bold'>Parts</span>
            </div>
            <div className=" grid md:grid-cols-3 sm:grid-cols-1 gap-3 text-gray-800 font-semibold">
                {
                    cards?.slice(0, 6).map(card => <Card
                        key={card.id}
                        card={card}


                    ></Card>
                    )
                }


            </div>
        </div>
    );
};

export default Cards;