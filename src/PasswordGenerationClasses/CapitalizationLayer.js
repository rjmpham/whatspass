import LetterModificationLayer from './LetterModificationLayer.js';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default class CapitalizationLayer extends LetterModificationLayer{
    strength = null;
    
    constructor(passwordStrength){
        super(passwordStrength);
        this.description = 'Randomly replace some lowercase letters with the capitalized version.';
        this.layerName = 'Add Capitaliztion';
        this.blurb=
        <p>
            what a wonderful world
        </p>
        ;
        
    }

    //getReplacement is called during the getPasswordOutput(char), and is used to decide what to replace char with.
    //char is some lower case alpha character.
    getReplacement(char){
        return char.toUpperCase();
    }
   
}




