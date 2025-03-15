import React, { Component } from 'react';
import Comment from './Comment';

class Fake4 extends Component {
    state = {
        people: []
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        try {
            const response = await fetch('https://fakerapi.it/api/v1/persons?_locale=en_US&_seed=1234&_quantity=3');
            const data = await response.json();
            this.setState({ people: data.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    render() {
        const { people } = this.state;

        return (
            <div>
                <h1>Fake4</h1>
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
    }
}

export default Fake4;