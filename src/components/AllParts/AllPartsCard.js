import React from 'react';

const AllPartsCard = ({ card }) => {
    const { name } = card;
    return (
        <div className='' >
            <div className='border-solid border-2 border-indigo-200 rounded-lg shadow-xl  m-5  bg-white p-2'>
                <div className='bg-white text-center'>

                    <h1> {name} </h1>


                </div>
            </div>
        </div>
    );

};

export default AllPartsCard;