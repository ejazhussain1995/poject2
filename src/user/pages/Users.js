import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Max Schwarz',
            image:'https://burst.shopifycdn.com/photos/leather-anchor-bracelet-for-men.jpg?width=373&format=pjpg&exif=0&iptc=0',
            place: 3
        }
    ];
    return (    
        <UsersList items={USERS}/>
    );
};

export default Users;