import React from 'react';

const Comment = ({ avatar, name, time, comment }) => {
    return (
        <div style={{ border: '1px solid #ddd', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img src={avatar} alt="avatar" style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }} />
                <div>
                    <strong>{name}</strong> <span>{time}</span>
                    <p>{comment}</p>
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button style={{ color: 'green', border: '1px solid green', borderRadius: '5px', padding: '5px 10px' }}>Approve</button>
                <button style={{ color: 'red', border: '1px solid red', borderRadius: '5px', padding: '5px 10px' }}>Reject</button>
            </div>
        </div>
    );
};

export default Comment;