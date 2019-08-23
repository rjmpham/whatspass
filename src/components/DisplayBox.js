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
// eslint-disable-next-line no-unused-vars
import ShowLayerOutput from '../PasswordGenerationClasses/ShowLayerOutput.jsx';
import './DisplayBox.css';

//These are designed to correspond with zxcvbn's password strength score
export const STRENGTH = {
    WEAK: 0, 
    MEDIUM: 3,
    STRONG: 4,
    RANDOM: 5,
};

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
var firstInit = true;

// eslint-disable-next-line no-unused-vars
function DisplayBox() {
    let initValue = 'Init Value';

    var [display,setDisplay] = useState(initValue);
    
    if(firstInit){

        firstInit = false;
        setDisplay(PasswordGeneration(STRENGTH.MEDIUM));
    }
    

    
    


    return(
        <div>
            <div className="TitleButtonsBar">
                <MuiThemeProvider theme = {defTheme}>
                    <Button 
                        color="secondary" 
                        onClick= {()=>{setDisplay(PasswordGeneration(STRENGTH.WEAK));}}
                    >
                        Weak
                    </Button>{' '}
                    <Button 
                        color="primary" 
                        onClick= {()=>{setDisplay(PasswordGeneration(STRENGTH.MEDIUM));}}
                    >
                        Medium
                    </Button>{' '}
                    <MuiThemeProvider theme = {defThemePlus}> 
                        <Button 
                            color="primary" 
                            onClick= {()=>{setDisplay(PasswordGeneration(STRENGTH.STRONG));}}
                        >
                            Strong
                        </Button>{'   ||   '}
                        <Button 
                            color="secondary" 
                            onClick= {()=>{setDisplay(PasswordGeneration(STRENGTH.RANDOM));}}
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

function getLayerJSX(layers){
    return (<div>
        { layers.map((x, index) =>     
            <ShowLayerOutput layer={x} key={index}/>
        )}     
    </div>);
}



function PasswordGeneration(strengthParam){
    if (strengthParam !== STRENGTH.RANDOM) {  
        let passwordGenerator =  new PasswordGenerator(strengthParam);
        var output = passwordGenerator.generateNewPassword();
        var layers = passwordGenerator.layersList;
        
    }

    switch(strengthParam) {
    case STRENGTH.WEAK:
        fullLayers = 
            <div>                
                <p className="StyleLayerExplain">
                    Weak passwords are passwords made commonly by people. These 
                    include many infamous ones. Take a second to browse some of the 
                    weak passwords and consider the reasons for why they are weak in
                    this section. The weak sample password was chosen from a list of 
                    commonly used passwords. Take a look at some stronger passwords 
                    or read below for some of our thoughts on the anatomy or passwords, 
                    our disclaimers, and recommendations.
                </p>
                {getLayerJSX(layers)}
            </div>; 
        break;
    case STRENGTH.MEDIUM:
        fullLayers = 
            <div>                
                <p className="StyleLayerExplain">
                    Medium passwords come from a little consideration for websites 
                    requiring passwords with one or two requirements like have a 
                    number, have an uppercase letter. We've generated a sample medium 
                    strength password in a few steps.               
                    The steps are noted with large text, and the changes in each step
                    are coloured in green. 
                    Below this section you will find our generic information regarding 
                    the anatomy of passwords, disclaimers, and recommendations. 
                </p>
                {getLayerJSX(layers)}
            </div>;         break;
    case STRENGTH.STRONG:
        fullLayers = 
            <div>                
                <p className="StyleLayerExplain">
                    Strong passwords are the main point of having passwords! We've 
                    generated a sample strong password in a few steps. 
                    The steps are noted with large text, and the changes in each step
                    are coloured in green. 
                    Take a second to read and consider each part of the strong password. 
                    Below this section you will find our generic information regarding 
                    the anatomy of passwords, disclaimers, and recommendations. 
                </p>
                {getLayerJSX(layers)}
            </div>;         break;
    case STRENGTH.RANDOM:
        var randomize = require('randomatic');
        var rn = require('random-number');
        var randyOptions = {    //https://www.youtube.com/watch?v=xqKPe9w5bUs ;)
            min:  12,
            max:  16,
            integer: true
        };
        output = randomize('*',rn(randyOptions));
        fullLayers = 
        <div>
            <p className="StyleLayerExplain">
                    Totally random passwords have a time and place. They are diffirent
                    from other types of passwords in that they are entirely generated 
                    by computers or algorithms or both. They are harder to remember, but are
                    almost always stronger than other passwords of the same length. A password 
                    manager can manage random passwords and we highly recommend that you use one. If
                    you want to memorize a not totally random but strong password the old fasion way, 
                    you can make a longer password and make a few random changes that you can remember.
                    In the next section you will find our generic information regarding the anatomy 
                    of passwords, disclaimers, and recommendations. 
            </p>
        </div>;
        break;
    default:
        fullLayers= <div><h1>Illegal Enum used.</h1></div>;
        break;
    }
    return output;
}

export default DisplayBox;