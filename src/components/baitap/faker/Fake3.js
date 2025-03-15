import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const Fake3 = () => {
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
            <h1>Fake3</h1>
            {people.map((person, index) => (
                <Comment
                    key={index}
                    avatar={person.image}
                    name={`${person.firstname} ${person.lastname}`}
                    time="Today at 6:00PM"
                    comment="Nice blog post!"
                />
            ))}
        </div>
    );
};

export default Fake3;