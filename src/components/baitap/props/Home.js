import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of the application.</p>
            <ul>
                <li>
                    <Link to="/todolist">Go to Todo List</Link>
                </li>
                <li>
                    <Link to="/livesearch">Go to Live Search</Link>
                </li>
                <li>
                    <Link to="/dataprops">Go to Data Props</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;