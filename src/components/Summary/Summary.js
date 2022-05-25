import React from 'react';

const Summary = () => {
    return (
        <div>
            <div className='bg-indigo-200 py-4'>
                <h1 className='font-bold text-2xl  '>Bussines Summary</h1>
            </div>
            <div className='bg-gray-200 p-4'>
                <div class="stats stats-vertical lg:stats-horizontal shadow-lg sm:my-3 w-full gap-3 p-4 bg ">

                    <div class="stat p-4">
                        <div class="stat-title">Downloads</div>
                        <div class="stat-value">31K</div>
                        <div class="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div class="stat p-4">
                        <div class="stat-title">New Users</div>
                        <div class="stat-value">4,200</div>
                        <div class="stat-desc">↗︎ 400 (22%)</div>
                    </div>

                    <div class="stat p-4">
                        <div class="stat-title">New Registers</div>
                        <div class="stat-value">1,200</div>
                        <div class="stat-desc">↘︎ 90 (14%)</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Summary;