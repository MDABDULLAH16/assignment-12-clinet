import React, { useEffect, useState } from 'react';
import AllPartsCard from './AllPartsCard';

const AllParts = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://radiant-sea-36060.herokuapp.com/part')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div className=''>
            <div className=' bg-gray-200 py-4 '>
                <span className='text-2xl font-bold'>All Part</span>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-px text-gray-800 font-semibold">
                {
                    cards?.map(card => <AllPartsCard
                        key={card._id}
                        card={card}


                    ></AllPartsCard>
                    )
                }


            </div>
        </div>
    );
};
export default AllParts;