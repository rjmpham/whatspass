// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Button } from 'reactstrap';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

function App(){
    Amplify.configure(aws_exports);
    return (
        <div className="MainPage">
            <div className="MainTitle">
                What's in a password?
            </div> 
            <div className="TitleButtons">
                <Button color="#841584" size="lg">Weak</Button>{' '}
                <Button color="secondary" size="lg">Medium</Button>{' '}
                <Button color="success" size="lg">Strong</Button>{' || '}
                <Button color="warning" size="lg">Random</Button>
            </div>
        </div>
    );
}

export default App;
