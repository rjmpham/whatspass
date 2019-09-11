import Layer from './Layer.js';
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {passwordList} from './BadPasswordsSource.js';
import Utilities from './Utilities.js';

export default class BadPasswordLayer extends Layer{
    constructor(){
        super();
        this.description = 'Chose a random bad password.';
        this.layerName  = '';
        this.blurb = 
        <h3 classname = 'BadPassword'>
            This password provides no security, and should not be used under any circumstances.
        </h3>
        ;
        
        
    }

    getPasswordOutput(){
        let tempOutput = passwordList[Utilities.getRandRangeInt(0, passwordList.length)];
        //let newTuple = new Tuple(true, tempOutput, 'Added word ' + tempOutput);
        this.ouput += tempOutput;
        //this.outputTuples.push(newTuple);
        return tempOutput;
    }

}