import React, { useState, useEffect } from 'react';

const Props1 = (props) => {
    const { users, onUserChange } = props;

    // State để quản lý counter
    const [counter, setCounter] = useState(0);

    const changeFn = (user) => {
        const newFirstName = prompt("Enter new first name:");
        if (newFirstName) {
            // Create a new copy of the user object with the updated first name
            const updatedUser = { ...user, firstname: newFirstName };
            onUserChange(updatedUser); // Pass the updated user object to the parent
        }
    };

    const changeLn = (user) => {
        const newLastName = prompt("Enter new last name:");
        if (newLastName) {
            // Create a new copy of the user object with the updated last name
            const updatedUser = { ...user, lastname: newLastName };
            onUserChange(updatedUser); // Pass the updated user object to the parent
        }
    };

    // useEffect với setTimeout để tăng counter sau mỗi 5 giây
    useEffect(() => {
        const timer = setTimeout(() => {
            setCounter((prevCounter) => prevCounter + 1); // Tăng counter lên 1
            console.info('Counter ' + Math.random());
        }, 5000); // 5000 milliseconds = 5 giây

        // Cleanup function để xóa timer nếu component unmount
        return () => clearTimeout(timer);
    }, [counter]); // Dependency array có counter để useEffect chạy lại mỗi khi counter thay đổi

    return (
        <div>
            <h1>User Information</h1>
            <h2>Counter: {counter}</h2> {/* Hiển thị giá trị counter */}
            {users.map((user) => (
                <div key={user.id} style={{ marginBottom: '20px', border: '1px solid #ccc', padding: '10px' }}>
                    <p>First Name: {user.firstname}</p>
                    <p>Last Name: {user.lastname}</p>
                    <p>Country: {user.country}</p>
                    <p>Gender: {user.gender}</p>
                    <p>Age: {user.age}</p>
                    <input
                        type="button"
                        value="Change first name"
                        onClick={() => changeFn(user)} // Pass the user object to the handler
                    />
                    <input
                        type="button"
                        value="Change last name"
                        onClick={() => changeLn(user)} // Pass the user object to the handler
                    />
                </div>
            ))}
        </div>
    );
};

export default Props1;