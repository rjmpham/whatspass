// eslint-disable-next-line no-unused-vars
import React from 'react';
import Amplify from 'aws-amplify';

import './App.css';
// eslint-disable-next-line no-unused-vars
import DisplayBox from './DisplayBox.js';
// eslint-disable-next-line no-unused-vars
import Content from './Content.js';
import aws_exports from './aws-exports';

function App(){
    Amplify.configure(aws_exports);

    return (
        
        <div className="MainPage">
            <div className="PasswordSection">
                <div className="MainTitle">
                    <h1>What's in a Password?</h1>
                </div>
                <DisplayBox/>   
            </div>
            <Content/>
        </div>
    );
}

export default App;
