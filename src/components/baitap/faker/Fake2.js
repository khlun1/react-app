import React, { useEffect, useState } from 'react';

const Fake2 = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://fakerapi.it/api/v1/persons?_locale=en_US&_seed=1234&_quantity=3');
                const data = await response.json();
                setPeople(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Fake2</h1>
            {people.map((person, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={person.image} alt="avatar" style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }} />
                    <div>
                        <strong>{person.firstname} {person.lastname}</strong> <span>Today at 6:00PM</span>
                        <p>Nice blog post!</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Fake2;