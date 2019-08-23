/* eslint-disable no-console */
import Layer from './Layer.js';
import Utilities from './Utilities.js';
import Tuple from './Tuple.js';
import {STRENGTH} from '../components/DisplayBox.js';
// eslint-disable-next-line no-unused-vars
import React from 'react';

const PAD_MEDIUM_MAX = 2;
const PAD_STRONG_MAX = 3;
const PAD_MEDIUM_MIN = 1;
const PAD_STRONG_MIN = 1;

export default class PaddingLayer extends Layer{
    strength = null;
    
    constructor(){
        super();
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
        console.log('There are ' + paddingGroups + ' padding group(s).');
        let tempOutput = input;
        let tempOutArr = new Array(paddingGroups*2+1);
        let paddingIndexes = [];

        console.log('The temp ouput array should have a length of ' + (paddingGroups*2+1) + '  and has ' + tempOutArr.length);

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
        paddingIndexes = paddingIndexes.sort(function(a, b){return a-b;});
        console.log('Padding indexes: ' + paddingIndexes[0] + ' ' + paddingIndexes[1]);
        
        let paddingArray = [];
        


        //generate padding
        for (let i = 0; i < paddingGroups; i++) {
            var randomize = require('randomatic');
            var rn = require('random-number');
            var randyOptions = {    //https://www.youtube.com/watch?v=xqKPe9w5bUs ;)
                min:  PADDING_MIN,
                max:  PADDING_MAX,
                integer: true
            };
            paddingArray.push(randomize('0!',rn(randyOptions)));
        }
        
        console.log('Padding array: ' + paddingArray[0]+ ' '+ paddingArray[1]+ ' '+ paddingArray[2]);
      
        //populate the output array, spliting the input
        console.log('Building output array, it has ' + tempOutArr.length + ' spots.');
        for (let i = tempOutArr.length -1 ; i>=0; i--) {
            let sliceTemp = tempOutput;
            if ( ((i)%2) == 0 ) {
                if (i === tempOutArr.length-1) {
                    tempOutArr[i] = sliceTemp.slice(paddingIndexes[(i/2)-1], tempOutput.length);
                } else if (i!==0) {
                    tempOutArr[i] = sliceTemp.slice(paddingIndexes[(i/2)-1], paddingIndexes[i/2] );
                } else{
                    tempOutArr[i] = sliceTemp.slice(0,paddingIndexes[0]);
                }
            } else {
                let paddingArrayIndex = (i - 1 )/ 2; 
                paddingArrayIndex = paddingArrayIndex.clamp(0, paddingArray.length-1);
                tempOutArr[i] = paddingArray[paddingArrayIndex];
            }
            console.log( i + ' tempOutputarray ' + tempOutArr[i]);

        }

        //console.log('tempOutputarray ' + tempOutArr);
        console.log('Output before changes: ' + tempOutput);
        for (let i = 0 ; i<tempOutArr.length; i++) {
            if ( ((i)%2) == 0 ) {
                this.outputTuples.push(new Tuple(false,tempOutArr[i],''));
            } else {                
                this.outputTuples.push(new Tuple(true,tempOutArr[i] , 'padded with ' + tempOutArr[i]));

            }
            //console.log('Adding ' + tempOutArr[i]);
            
            this.output = this.output + tempOutArr[i];
        }
        //console.log('Returning: ' + this.output);

        tempOutput = this.output;
        return  tempOutput;
    }   
}

Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
};


