import Utilities from './Utilities.js';
import LetterModificationLayer from './LetterModificationLayer.js';
// eslint-disable-next-line no-unused-vars
import React from 'react';




export default class TransformLayer extends LetterModificationLayer{
    
    allChars = [];
    
    constructor(){
        super();
        this.description = 'Replaces random characters in the password.';
        this.layerName  = 'Change Random Characters';
        this.blurb = 
        <p>
                Replaces random characters in the password. Having words in your password 
                isn't the most secure if they are common. Replacing one or two characters
                will increase the strength of the passwords. While a bit harder to remember,
                once you read out the original words a few times you can remember the 
                random changes fairly easily. 
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


