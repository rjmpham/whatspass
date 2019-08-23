import Layer from './Layer.js';
import React from 'react';
import {passwordList} from './BadPasswordsSource.js';
import Utilities from './Utilities.js';
import Tuple from './Tuple.js';

export default class BadPasswordLayer extends Layer{
    constructor(){
        super();
        this.description = 'Chose a random bad password.';
        this.layerName  = 'Bad Password Selection Layer';
        this.blurb = 
        <p>
            This password provides no security, and should not be used under any circumstances.
        </p>
        ;
        
        
    }

    getPasswordOutput(){
        let tempOutput = passwordList[Utilities.getRandRangeInt(0, passwordList.length)];
        let newTuple = new Tuple(true, tempOutput, 'Added word ' + tempOutput);
        this.ouput += tempOutput;
        this.outputTuples.push(newTuple);
        return tempOutput;
    }

}