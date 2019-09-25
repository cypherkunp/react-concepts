import React from 'react';
import { Link } from 'react-router-dom';

import './home-page.styles.css';
const HomePage = () => {
    return (
        <div className="container">
            <div className="column">
                <h3>React Concepts</h3>
                <ol>
                    <li>
                        <Link to="/error-boundary">Error Boundaries</Link>
                    </li>
                    <li>
                        <Link to="/controlled-component">Controlled Component</Link>
                    </li>
                </ol>
            </div>
            <div className="column">
                <h3>React How Tos</h3>
                <ol>
                    <li>
                        <Link to="/using-forms">Using Forms</Link>
                    </li>
                    <li>
                        <Link to="/upload-download">Upload and Download Files</Link>
                    </li>
                </ol>
            </div>
            <div className="column">
                <h3>React Quiz</h3>
                <ol>
                    <li>
                        <Link to="/quiz/xor-checkbox">XORCheckbox</Link>
                    </li>
                </ol>
            </div>
        </div>
    );
};

export default HomePage;
