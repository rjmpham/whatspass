import LetterModificationLayer from './LetterModificationLayer.js';
import React from 'react';

export default class CapitalizationLayer extends LetterModificationLayer{
    strength = null;
    
    constructor(passwordStrength){
        super(passwordStrength);
        this.description = 'Randomly replace some letters with the capitalized version.';
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




