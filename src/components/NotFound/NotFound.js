import React from 'react';
import './NotFound.css';
import image from '../../404.png';

const NotFound = () => (
    <div className="NotFound">
        <div className="image">
            <h1>Sorry that page does not exist...</h1>
            <br/>
            <img src={image} alt="404-error" width="45%" />
        </div>
    </div>
);

export default NotFound;