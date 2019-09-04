// eslint-disable-next-line no-unused-vars
import React from 'react';
import Amplify from 'aws-amplify';

import './App.css';
// eslint-disable-next-line no-unused-vars
import DisplayBox from './DisplayBox.js';
// eslint-disable-next-line no-unused-vars
import Content from './Content.js';
import {useState, useEffect} from 'react';
// eslint-disable-next-line no-unused-vars
import {HashRouter} from 'react-router-dom';
import aws_exports from './aws-exports';

function AppMobile(){
    Amplify.configure(aws_exports);

    function getConfirmation(message, callback) {
        const allowTransition = window.confirm(message);
        callback(allowTransition);
    }

    // eslint-disable-next-line no-unused-vars
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        window.addEventListener('resize', handleWindowSizeChange());      
        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange());
        };
    }, []);
      
    function handleWindowSizeChange() {
        setWidth(window.innerWidth );
    }


    return (
        
        <div className="MainPage">
            <div className="PasswordSection">
                <div className="MainTitle">
                    <h1>What's in a Password?</h1>
                </div>
                <DisplayBox/>   
            </div>
            <Content/>
            <HashRouter getUserConfirmation={getConfirmation} />
        </div>
    );
}

export default AppMobile;
