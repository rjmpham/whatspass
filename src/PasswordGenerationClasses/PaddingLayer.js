/* eslint-disable no-console */
import Layer from './Layer.js';
import Utilities from './Utilities.js';
import Tuple from './Tuple.js';
import {STRENGTH} from '../components/DisplayBox.js';
// eslint-disable-next-line no-unused-vars
import React from 'react';

const PAD_MEDIUM_MAX = 1;
const PAD_STRONG_MAX = 2;
const PAD_MEDIUM_MIN = 1;
const PAD_STRONG_MIN = 1;

export default class PaddingLayer extends Layer{
    strength = null;
    
    constructor(passwordStrength){
        super(passwordStrength);
        this.description = 'Pad the password with a random string of characters.';
        this.layerName = 'Pad Random Chars';
        this.blurb = 
        <p>
            This is a placeholder
        </p>
        ; 
    }

    // eslint-disable-next-line no-unused-vars
    getPasswordOutput(input){
        let PADDING_MAX = 0;
        let PADDING_MIN = 0;
        
        //set the maximum number of MAX based on constants.
        switch(this.passwordStrength){
        case STRENGTH.WEAK:
            //Make no changes for weak passwords
            return input;
        case STRENGTH.MEDIUM:
            PADDING_MAX = PAD_MEDIUM_MAX;
            PADDING_MIN = PAD_MEDIUM_MIN;
            break;
        case STRENGTH.STRONG: 
            PADDING_MAX = PAD_STRONG_MAX;
            PADDING_MIN = PAD_STRONG_MIN;
            break;
        default:
            PADDING_MAX = PAD_STRONG_MAX;
            PADDING_MIN = PAD_STRONG_MIN;
            break;
        }
        
        this.input = input;
        let paddingGroups = Utilities.getRandRangeInt(PADDING_MIN, PADDING_MAX);
        console.log('There are ' + paddingGroups + 'padding group(s).');
        let tempOutput = input;
        let tempOutArr = [paddingGroups*2+1];
        let paddingIndexes = [];

        //get two indexes for padding
        for (let i = 0; i < paddingGroups; i++) {
            let randIndex;
            let foundValidIndex = false;

            while(!foundValidIndex){         
                foundValidIndex = true;
                randIndex = Utilities.getRandRangeInt(0, this.input.length);
                //do not reuse indexes, try again
                if(paddingIndexes.includes(randIndex)){
                    console.log('Discarding ' + randIndex + ' as the index was already used.');
                    foundValidIndex = false;
                }
                   
            }
            paddingIndexes.push(randIndex);

        }
        //padds the words in reverse order to keep the word correctly organized

        //start by sorting the array in reverse
        paddingIndexes = paddingIndexes.sort(function(a, b){return b-a;});
        console.log('Padding indexes: ' + paddingIndexes);
        
        let paddingArray = [];
        
        //generate padding
        for (let i = 0; i < paddingGroups; i++) {
            var randomize = require('randomatic');
            var rn = require('random-number');
            var randyOptions = {    //https://www.youtube.com/watch?v=xqKPe9w5bUs ;)
                min:  2,
                max:  4,
                integer: true
            };
            paddingArray.push(randomize('*',rn(randyOptions)));
        }
        
        console.log('Padding array: ' + paddingArray);
      
        //populate the output array, with spliters 
        for (let i = tempOutArr.length -1 ; i>=0; i--) {
            if (((i)%2)===0) {
                tempOutArr[i] = tempOutput.split(paddingIndexes[i/2]);
            } else {
                tempOutArr[i] = paddingArray[(i-1)/2];
            }
        }

        console.log("tempOutputarray " + tempOutArr);
        console.log('Output before changes: ' + tempOutput);
        for (let i = 0 ; i<tempOutArr.length; i++) {
            if (((i)%2)===0) {
                this.outputTuples.push(new Tuple(false,tempOutput[i],''));
            } else {                
                this.outputTuples.push(new Tuple(true,tempOutArr[i] , 'padded with ' + tempOutArr[i]));

            }
            console.log("Adding " + tempOutArr[i]);
            this.output += tempOutArr[i];
        }
        console.log('Returning: ' + this.output);
        return  this.ouput;
    }   
}

function spliceSplit(str, index, count, add) {
    var ar = str.split('');
    ar.splice(index, count, add);
    return ar.join('');
}
