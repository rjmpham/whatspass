// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

//material ui for buttons
// eslint-disable-next-line no-unused-vars
import { makeStyles, MuiThemeProvider} from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
import Divider from '@material-ui/core/Divider';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import cyan from '@material-ui/core/colors/cyan';

import { createMuiTheme } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
import Button from '@material-ui/core/Button';
import './App.css';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';

function App(){
    Amplify.configure(aws_exports);
    // defines the themes for the entire page and the buttons, perhaps decouple later?
    const defTheme = createMuiTheme({
        palette: {
            warning: red,
            primary: yellow,
            secondary: red,
            error: red,
        },
    });
    const secondTheme = createMuiTheme({
        palette: {
            warning: red,
            primary: green,
            secondary: cyan,
            error: red,
        },
    });


    // eslint-disable-next-line no-unused-vars
    function DisplayBox() {
        const [display,setDisplay] = useState('this is a password box');

        return(
            <div className="TitleButtonsBar">
                <MuiThemeProvider theme = {defTheme}>
                    <Button 
                        color="secondary" 
                        onClick= {()=>{setDisplay('Password1!');}}
                    >
                        Weak
                    </Button>{' '}
                    <Button 
                        color="primary" 
                        onClick= {()=>{setDisplay('Password2!');}}
                    >
                        Medium
                    </Button>{' '}
                    <MuiThemeProvider theme = {secondTheme}> 
                        <Button 
                            color="primary" 
                            onClick= {()=>{setDisplay('Password3!');}}
                        >
                            Strong
                        </Button>{'   ||   '}
                        <Button 
                            color="secondary" 
                            onClick= {()=>{setDisplay('Password4!');}}
                        >
                            Random
                        </Button>
                    </MuiThemeProvider>
                </MuiThemeProvider> 
                <div className="ReplyBox">
                    {display}
                </div>
            </div>
        );
    }



    // for testing
    // eslint-disable-next-line no-unused-vars
    var Lorem = require('react-lorem-component');

    return (
        
        <div className="MainPage">
            <div className="PasswordSection">

                <div className="MainTitle">
                    <h1>What's in a password?</h1>
                </div>
                <DisplayBox/>
            </div>
            <div className="ExplainSection">
                <div className="Divider"><Divider variant="middle" /></div> 
                <div className= "ScrollingText">
                    
                    <h1>Lorem Ipsum</h1>
                    <Lorem />
                    <Lorem />
                    <Lorem />
                    <Lorem />
                </div>
            </div>
        </div>
    );
}

export default App;
