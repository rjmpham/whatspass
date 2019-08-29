// eslint-disable-next-line no-unused-vars
import React from 'react';
import passDates from './images/passDates.jpg';
// eslint-disable-next-line no-unused-vars
import {Link} from 'react-router-dom';
function CalenderImage(){

    return (
        <div> 
            <img style = {{width: 850, height: 150 }} src={passDates} alt="password dates visual"/>
            {'\n'}
            <Link to="/"> Home </Link>
        </div>
    );
}

export default CalenderImage;
