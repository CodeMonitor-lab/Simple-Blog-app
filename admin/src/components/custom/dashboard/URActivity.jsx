import React from 'react';

const URActivity = () => {
    const activities = [
        { id: 1, user: 'John Doe', action: 'Created a new post', timestamp: '2023-10-01 10:00 AM' },
        { id: 2, user: 'Jane Smith', action: 'Edited a post', timestamp: '2023-10-01 11:30 AM' },
        { id: 3, user: 'Alice Johnson', action: 'Deleted a comment', timestamp: '2023-10-01 01:15 PM' },
    ];

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2 className='text-xl pb-2' >Recent Activity</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {activities.map((activity) => (
                    <li
                        key={activity.id}
                        style={{
                            marginBottom: '15px',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            backgroundColor: '#f9f9f9',
                        }}
                    >
                        <p>
                            <strong>User:</strong> {activity.user}
                        </p>
                        <p>
                            <strong>Action:</strong> {activity.action}
                        </p>
                        <p>
                            <strong>Timestamp:</strong> {activity.timestamp}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default URActivity;