import Utilities from './Utilities.js';
import LetterModificationLayer from './LetterModificationLayer.js';



export default class TransformLayer extends LetterModificationLayer{
    
    allChars = [];
    
    constructor(passwordStrength){
        super(passwordStrength);
        this.description = "Replaces random characters in the password.";
        this.layerName  = "Transformation Layer";
       
        for (var i=32; i<127; i++)
            this.allChars.push(String.fromCharCode(i))
    }

    getReplacement(_){
        return this.allChars[Utilities.getRandRangeInt(0, this.allChars.length)];
    }


    
}


