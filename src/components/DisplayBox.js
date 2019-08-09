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
// eslint-disable-next-line no-unused-vars
import Divider from '@material-ui/core/Divider';

import PasswordGenerator from '../PasswordGenerationClasses/PasswordGenerator.js';
import ShowLayerOutput from '../PasswordGenerationClasses/ShowLayerOutput.jsx';

const STRENGTH = {
    WEAK: "WEAK", 
    MEDIUM: "MEDIUM",
    STRONG: 'STRONG',
    RANDOM: 'RANDOM',
}


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

var fullLayers = <div></div>;



// eslint-disable-next-line no-unused-vars
function DisplayBox() {
    var [display,setDisplay] = useState('this is a password box');


    return(
        <div>
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
            <div className="DivFullLayers">
                <div className="Divider"><Divider variant="middle" /></div> 
                {fullLayers}
            </div>
        </div>
    );
}

function ButtonW(){

    //recieve an array from password generator with result and the layers JSX

    
    var result = 'Password1!';
    fullLayers = <div>PASSWORD 1 SHOULD BE HERE</div>;
    return TestPasswordGeneration();
}

function ButtonM(){
    var result = 'Password2!';
    fullLayers = <div>PASSWORD 2 SHOULD BE HERE</div>;
    return TestPasswordGeneration();
}    

function ButtonS(){
    var result = 'Password3!';
    fullLayers = <div>PASSWORD 3 SHOULD BE HERE</div>;
    return TestPasswordGeneration();
}

function TestPasswordGeneration(){
    function getLayerJSX(layers){
        return (<div>
            { layers.map((x, index) => 
            
            <ShowLayerOutput layer={x} key={index}/>
            )}
            
        </div>);
    }


    let passwordGenerator =  new PasswordGenerator();
    let output = passwordGenerator.generateNewPassword();
    let layers = passwordGenerator.layersList;
    fullLayers = getLayerJSX(layers); 
    return output;
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
    fullLayers = <div>{randomString}</div>;
    return randomString;
}

export default DisplayBox;