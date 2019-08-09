import LetterModificationLayer from './LetterModificationLayer.js';
import React from 'react';

export default class CapitalizationLayer extends LetterModificationLayer{
    strength = null;
    
    constructor(){
        super();
        this.description = 'Randomly replace some letters with the capitalized version.';
        this.layerName = 'Add Capitaliztion';
        this.blurb=
        <p>
            what a wonderful world
        </p>
        ;
        
    }

    getReplacement(char){
        return char.toUpperCase();
    }
   
}




