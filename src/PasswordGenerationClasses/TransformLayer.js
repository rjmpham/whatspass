import Utilities from './Utilities.js';
import LetterModificationLayer from './LetterModificationLayer.js';
// eslint-disable-next-line no-unused-vars
import React from 'react';




export default class TransformLayer extends LetterModificationLayer{
    
    allChars = [];
    
    constructor(passwordStrength){
        super(passwordStrength);
        this.description = 'Replaces random characters in the password.';
        this.layerName  = 'Add Random Elements';
        this.blurb = 
        <p>
            ppppplaceholder
        </p>
        ;
        
        for (var i=32; i<127; i++)
            this.allChars.push(String.fromCharCode(i));
    }

    //getReplacement is called during the getPasswordOutput(char), and is used to decide what to replace char with.
    // eslint-disable-next-line no-unused-vars
    getReplacement(char){
        return this.allChars[Utilities.getRandRangeInt(0, this.allChars.length)];
    }


    
}


