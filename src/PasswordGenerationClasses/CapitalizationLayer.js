import LetterModificationLayer from './LetterModificationLayer.js';

export default class CapitalizationLayer extends LetterModificationLayer{
    strength = null;
    
    constructor(passwordStrength){
        super(passwordStrength);
        this.description = 'Randomly replace some letters with the capitalized version.'
        this.layerName = "Capitalization Layer."
        
    }

    getReplacement(char){
        return char.toUpperCase();
    }
   
}




