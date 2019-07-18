// eslint-disable-next-line no-unused-vars
import React from 'react';

//material ui for buttons
// eslint-disable-next-line no-unused-vars
import { makeStyles, MuiThemeProvider} from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
import Divider from '@material-ui/core/Divider';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

import { createMuiTheme } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
import Button from '@material-ui/core/Button';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

function App(){
    Amplify.configure(aws_exports);
    // defines the theme for the entire page and the buttons, perhaps decouple later?
    const defTheme = createMuiTheme({
        palette: {
            warning: red,
            primary: green,
            secondary: red,
            error: red,
        },
    });
    function handelWeak(){
        display = "Pasword1!";
    }
    function handelMedium(){
        display = "two)%Seperated55";
    }
    function handelStrong(){
        display = "92Longer($Pref1xed3373";
    }
    function handelRandom(){
        display = "0ih3erf(IJcfgyumsyt";
    }
    // for testing
    var display = "This is a password box";
    var Lorem = require('react-lorem-component');

    return (
        
        <div className="MainPage">
            <div className="PasswordSection">

                <div className="MainTitle">
                    <h1>What's in a password?</h1>
                </div> 
                <div className="TitleButtons">
                    <MuiThemeProvider theme = {defTheme}>
                        <Button color="secondary" size="lg" onClick= { handelWeak() }>Weak</Button>{' '}
                        <Button color="secondary" size="lg" onClick={ handelMedium() }>Medium</Button>{' '}
                        <Button color="primary" size="lg" onClick={ handelStrong() }>Strong</Button>{'   ||   '}
                        <Button color="defult" size="lg" onClick={ handelRandom() }>Random</Button>
                    </MuiThemeProvider> 
                </div>
                <div className="ReplyBox">{display}</div>
            </div>
            <div className="ExplainSection">
                <div className="Divider"><Divider variant="middle" /></div> 
                <div className= "ScrollingText">
                    
                    <h1>Lorem Ipsum</h1>
                    <Lorem />
                    <Lorem />
                </div>
            </div>



        </div>
    );
}

export default App;
