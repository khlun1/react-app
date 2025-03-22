import React, { useState } from 'react';
import Props1 from './Props1';

const DataProps = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            firstname: "John",
            lastname: "Doe",
            country: "USA",
            gender: "Male",
            age: 25
        },
        {
            id: 2,
            firstname: "Jane",
            lastname: "Smith",
            country: "Canada",
            gender: "Female",
            age: 30
        }
    ]);

    // Function to handle user updates
    const handleUserChange = (updatedUser) => {
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            )
        );
    };

    return <Props1 users={users} onUserChange={handleUserChange} />;
};

export default DataProps;