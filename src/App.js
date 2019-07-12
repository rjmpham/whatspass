// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import { makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import yellow from '@material-ui/core/colors/yellow';
import { createMuiTheme } from '@material-ui/core/styles';
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
    return (
        
        <div className="MainPage">
            <div className="MainTitle">
                What's in a password?
            </div> 
            <div className="TitleButtons">
                <MuiThemeProvider theme = {defTheme}>
                    <Button color="secondary" size="lg">Weak</Button>{' '}
                    <Button color="secondary" size="lg">Medium</Button>{' '}
                    <Button color="primary" size="lg">Strong</Button>{' || '}
                    <Button color="defult" size="lg">Random</Button>
                </MuiThemeProvider> 
            </div>
            <div classname="replyBox"></div>

        </div>
    );
}

export default App;
