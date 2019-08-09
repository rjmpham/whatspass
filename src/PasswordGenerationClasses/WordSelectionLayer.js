import Layer from './Layer.js';
import Utilities from './Utilities.js';
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
            Funny thing about this eh.
        </p>
        ; 
        
    }

    // eslint-disable-next-line no-unused-vars
    getPasswordOutput(input){
        this.ouput = '';
        var randomWords = require('random-words');
        let numberOfWords = Utilities.getRandRange(0, 4);
        for(let i  =0 ; i < numberOfWords; i++){
            let newWord = randomWords();
            while(newWord.length<=2){
                newWord = randomWords();
            }
            let newTuple = new Tuple(true, newWord, 'Added word ' + newWord);
            
            this.ouput += newWord;
            this.outputTuples.push(newTuple);
            
            
        }
        
        return  this.ouput;
        
    }

    
  


   
}




function getWordList(){
    return ['one', 'two', 'three', 'four'];
}