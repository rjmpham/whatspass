import Layer from './Layer.js';
import Tuple from './Tuple.js';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default class WordSelectionLayer extends Layer{
    strength = null;
    
    constructor(){
        super();
        this.description = 'Choose some random words that are unrelated.';
        this.layerName = 'Select Random Words';
        this.blurb = 
        <p>
            Choose some random, unrelated words. This is the most basic part of 
            making a password.
        </p>
        ; 
        
    }

    // eslint-disable-next-line no-unused-vars
    getPasswordOutput(){
        this.ouput = '';
        var randomWords = require('random-words');
        var totalLen = 0;

        //Varried minimum requirements for the total length of words picked
        while(totalLen<((this.passwordStrength+2)*2)){
            let newWord = randomWords();

            //words need to be a minimum of two letters long
            while(newWord.length<=2){
                newWord = randomWords();
            }

            let newTuple = new Tuple(true, newWord, 'Added word ' + newWord);
            totalLen+=newWord.length;
            this.ouput += newWord;
            this.outputTuples.push(newTuple);   
        }
        
        return  this.ouput;
        
    }

    
  


   
}

