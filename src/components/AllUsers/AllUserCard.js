import React from 'react';

const AllUserCard = ({ user, index }) => {
    const { email } = user;
    return (


        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td></td>
            <td><button class="btn btn-xs">Admin</button></td>
            <td><button class="btn btn-xs">Remove</button></td>
        </tr>


    );
};

export default AllUserCard;