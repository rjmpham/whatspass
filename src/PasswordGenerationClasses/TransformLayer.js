import Utilities from './Utilities.js';
import LetterModificationLayer from './LetterModificationLayer.js';
import React from 'react';




export default class TransformLayer extends LetterModificationLayer{
    
    allChars = [];
    
    constructor(){
        super();
        this.description = 'Replaces random characters in the password.';
        this.layerName  = 'Add Random Elements';
        this.blurb = 
        <p>
            ppppplaceholder
        </p>
        ;
       
        for (var i=32; i<127; i++)
            this.allChars.push(String.fromCharCode(i))
    }

    getReplacement(_){
        return this.allChars[Utilities.getRandRangeInt(0, this.allChars.length)];
    }


    
}


