import React from 'react';
import { AiFillStar } from 'react-icons/ai';

const MyreviewCard = ({ user }) => {
  const { name, review, star } = user;
  return (
    <div class="card w-96 bg-neutral text-neutral-content">
      <div class="card-body items-center text-center">
        <h2 class="text-2xl">{name}</h2>
        <p className='flex'>Rating: {star}<AiFillStar className='text-orange-500'></AiFillStar> </p>
        <p>Review: {review}</p>
        <div class="card-actions justify-end">
        </div>
      </div>
    </div>
  );
};

export default MyreviewCard;