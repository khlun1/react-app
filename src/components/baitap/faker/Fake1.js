import React, { useEffect, useState } from 'react';
import { Faker, es } from '@faker-js/faker';

// create a Faker instance with only es data and no en fallback (=> smaller bundle size)
const customFaker = new Faker({ locale: [es] });

const Fake1 = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const generatePerson = () => {
            return {
                name: `${customFaker.person.firstName()} ${customFaker.person.lastName()}`,
                comment: "Nice blog post!",
                avatar: customFaker.image.avatar(),
                time: "Today at 6:00PM"
            };
        };

        const fakePeople = Array.from({ length: 3 }, generatePerson);
        setPeople(fakePeople);
    }, []);

    return (
        <div>
            <h1>Fake1</h1>
            {people.map((person, index) => (
                <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={person.avatar} alt="avatar" style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }} />
                    <div>
                        <strong>{person.name}</strong> <span>{person.time}</span>
                        <p>{person.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Fake1;