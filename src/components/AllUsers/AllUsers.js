import React, { useEffect, useState } from 'react';
import AllUserCard from './AllUserCard';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {

        fetch('https://radiant-sea-36060.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
    return (


        <div>
            <h2 className='text-center text-2xl text-primary text-bold mb-5'>Make Admin {users?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th></th>
                            <th>Admin</th>
                            <th>Section</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users?.map((user, index) => <AllUserCard
                                key={user._id}
                                user={user}
                                index={index}

                            ></AllUserCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default AllUsers;