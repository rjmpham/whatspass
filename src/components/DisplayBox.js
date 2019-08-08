// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
//material ui for buttons
// eslint-disable-next-line no-unused-vars
import { makeStyles, MuiThemeProvider} from '@material-ui/core/styles';

import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import cyan from '@material-ui/core/colors/cyan';

import { createMuiTheme } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
import Button from '@material-ui/core/Button';

const defTheme = createMuiTheme({
    palette: {
        warning: red,
        primary: yellow,
        secondary: red,
        error: red,
    },
});
const defThemePlus = createMuiTheme({
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
                    onClick= {()=>{setDisplay(ButtonW());}}
                >
                    Weak
                </Button>{' '}
                <Button 
                    color="primary" 
                    onClick= {()=>{setDisplay(ButtonM());}}
                >
                    Medium
                </Button>{' '}
                <MuiThemeProvider theme = {defThemePlus}> 
                    <Button 
                        color="primary" 
                        onClick= {()=>{setDisplay(ButtonS());}}
                    >
                        Strong
                    </Button>{'   ||   '}
                    <Button 
                        color="secondary" 
                        onClick= {()=>{setDisplay(ButtonR());}}
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

function ButtonW(){
    return 'Password1!';
}

function ButtonM(){
    return 'Password2!';
}    

function ButtonS(){
    return 'Password3!';
}
//this should be fine here for now but should maybe be moved to somewhere else?
function ButtonR(){
    var randomize = require('randomatic');
    var rn = require('random-number');
    var randyOptions = {
        min:  12,
        max:  16,
        integer: true
    };
    var randomString = randomize('*',rn(randyOptions));
    return randomString;
}

export default DisplayBox;