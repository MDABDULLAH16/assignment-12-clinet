import React, { useEffect, useState } from 'react';

import Card from '../Card/Card';

const Cards = () => {

    const [cards, setCards] = useState([]);
    useEffect(() => {
        const url = `https://radiant-sea-36060.herokuapp.com/part`
        fetch(url)
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className=''>
            <div className=' bg-gray-200 py-4 '>
                <span className='text-2xl font-bold'>Parts Simple</span>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-px text-gray-800 font-semibold">
                {
                    cards?.slice(0, 6).map(card => <Card
                        key={card._id}
                        card={card}


                    ></Card>
                    )
                }


            </div>
        </div>
    );
};

export default Cards;