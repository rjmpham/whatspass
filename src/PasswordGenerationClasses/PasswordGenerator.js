/* eslint-disable no-console */
import WordSelectionLayer from './WordSelectionLayer.js';
import CapitalizationLayer from './CapitalizationLayer.js';
import TransformLayer from './TransformLayer.js';
import PaddingLayer from './PaddingLayer.js';
import {STRENGTH} from '../components/DisplayBox.js';
import BadPasswordLayer from './BadPasswordLayer.js';


const MAX_PASSWORD_GENERATION_ATTEMPTS = 10;

//Rather than re-create the same layers over and over again, we use a fixed constant object, to reduce memory allocations and GC.
const WEAK_LAYERS = [new BadPasswordLayer()];
const MEDIUM_LAYERS = [new WordSelectionLayer(), new CapitalizationLayer(), new PaddingLayer()];
const STRONG_LAYERS = [new WordSelectionLayer(), new TransformLayer(), new CapitalizationLayer(), new PaddingLayer()];
const zxcvbn = require('zxcvbn');

export default class PasswordGenerator{
    layersList = [];
    password = '_passwordUninitState';

    wordSelectionLayer;
    capitalizationLayer;
    transformLayer;
    paddingLayer;
    zxcvbn;
    passwordStrength;

    constructor(passwordStrength){
        
        this.updateLayersList(passwordStrength);

        this.passwordStrength = passwordStrength;
        
    }

    updateLayersList(passwordStrength){

        switch(passwordStrength){
        case STRENGTH.WEAK:
            this.layersList = WEAK_LAYERS;
            break;
        case STRENGTH.MEDIUM:
            this.layersList = MEDIUM_LAYERS;
            break;
        case STRENGTH.STRONG:
            this.layersList = STRONG_LAYERS;
            break;
        default:
            this.layersList = STRONG_LAYERS;
            break;
        }
        
        //update each layer so that it generates at the target password strength
        this.layersList.forEach( layer => layer.passwordStrength = passwordStrength);
    }

    generateNewPassword(){
        
        let generatedPassword; 
        let iterationsCount = 0;
        
        //Until zxcvbn tells use that we have generated a good enough password, keep generating new ones
        do{
            //pass each layer's output to the next
            generatedPassword = '';
            this.layersList.forEach(_layer => {
                _layer.reset();     
                generatedPassword = _layer.getPasswordOutput(generatedPassword);
    
            });
            
            //In order to prevent infinite loops, we limit the max attempts. In most cases, a good enough password will be generated in 1-2 attempts.
            iterationsCount++;
            if(iterationsCount > MAX_PASSWORD_GENERATION_ATTEMPTS)
                break;
        }
        while(zxcvbn(generatedPassword).score < this.passwordStrength);
        
        this.password = generatedPassword;
       
        console.log('Generated password: ' + generatedPassword + ' in ' + iterationsCount + ' iterations.');
        this.password = generatedPassword;
        return generatedPassword;
    }

}