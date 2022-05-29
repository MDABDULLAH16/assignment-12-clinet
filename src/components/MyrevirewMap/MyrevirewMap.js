
import { useEffect, useState } from 'react';
import MyReviewCard from '../MyreviewCard/MyreviewCard';


import './MyreviewMap.css';

const MyRevirewMap = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://radiant-sea-36060.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (
        <div className="">
            <div className='bg-indigo-200 py-4'>
                <h1 className='font-bold text-2xl  '>All Review</h1>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-px text-gray-800 font-semibold">


                {
                    users?.map(user => <MyReviewCard
                        key={user._id}
                        user={user}

                    ></MyReviewCard>)
                }
            </div>

        </div>
    );
};


export default MyRevirewMap;