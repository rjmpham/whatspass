import LetterModificationLayer from './LetterModificationLayer.js';
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default class CapitalizationLayer extends LetterModificationLayer{
    strength = null;
    MAX_CHANGES = 2;
    
    constructor(){
        super();
        this.description = 'Randomly replace some lowercase letters with the capitalized version.';
        this.layerName = 'Add Capitaliztion';
        this.blurb=
        <p>
            Randomly replace some lowercase letters with the capitalized version.
            You'll be able to remember these pretty easily once you start using a
            password with a few letters capitalized. These are important as passwords
            with all lowercase letters are much easier guessed by a computer.
        </p>
        ;
        
    }

    //getReplacement is called during the getPasswordOutput(char), and is used to decide what to replace char with.
    //char is some lower case alpha character.
    getReplacement(char){
        return char.toUpperCase();
    }
   
}




