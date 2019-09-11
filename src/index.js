// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
import * as serviceWorker from './components/serviceWorker';


// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Route} from 'react-router-dom';

/**
 * Import components
 */
import App from './components/App';
import AppMobile from './components/App';
import CalenderImage from './components/CalenderImage.js';



ReactDOM.render(
    <BrowserRouter basename= "/"> 
        <div>
            <Route exact path="/" component={AppMobile} />
            <Route path= "/mobile" component={AppMobile}/>
            <Route path="/calenderimage" component={CalenderImage} />
        </div>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
