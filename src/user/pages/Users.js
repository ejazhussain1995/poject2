import React from 'react';
import UsersList from '../components/UsersList'

const Users = () => {

    const USERS = [
        {
            id: 'u1',
            name: 'Max Schwarz',
            image:'https://burst.shopifycdn.com/photos/leather-anchor-bracelet-for-men.jpg?width=373&format=pjpg&exif=0&iptc=0',
            place: 1
        },        {
            id: 'u2',
            name: 'Mario Cuadros',
            image:'https://images.pexels.com/users/avatars/1166886/mario-cuadros-518.jpeg?w=256&h=256&fit=crop&crop=faces',
            place: 2
        }
    ];
    return (    
        <UsersList items={USERS}/>
    );
};

export default Users;