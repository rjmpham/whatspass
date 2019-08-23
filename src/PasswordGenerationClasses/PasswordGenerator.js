/* eslint-disable no-console */
import WordSelectionLayer from './WordSelectionLayer.js';
import CapitalizationLayer from './CapitalizationLayer.js';
import TransformLayer from './TransformLayer.js';
import PaddingLayer from './PaddingLayer.js';
import {STRENGTH} from '../components/DisplayBox.js';
import BadPasswordLayer from './BadPasswordLayer.js';


// eslint-disable-next-line no-unused-vars
const MAX_PASSWORD_GENERATION_ATTEMPTS = 10;

export default class PasswordGenerator{
    layersList = [];
    password = 'null';

    wordSelectionLayer;
    capitalizationLayer;
    transformLayer;
    paddingLayer;

    constructor(passwordStrength){
        
        this.updateLayersList(passwordStrength);
        
        
        
    }

    updateLayersList(passwordStrength){
        console.log("Password Strength passed is " + passwordStrength);
        console.log(STRENGTH.WEAK);
        console.log(STRENGTH.MEDIUM);
        console.log(STRENGTH.STRONG);
        console.log(STRENGTH);

        switch(passwordStrength){
            case STRENGTH.WEAK:
                console.log("Setting layer list to just word selection layer.");
                this.layersList = [new BadPasswordLayer(passwordStrength)];
                break;
            case STRENGTH.MEDIUM:
                console.log("Setting layer list to word selection layer, and capitalization.");
                this.layersList = [new WordSelectionLayer(passwordStrength), new CapitalizationLayer(passwordStrength)];
                break;
            case STRENGTH.STRONG:
                    console.log("Setting layer list to every layer.");
                this.layersList = [new WordSelectionLayer(passwordStrength), new TransformLayer(passwordStrength), new CapitalizationLayer(passwordStrength), new PaddingLayer(passwordStrength)];
                break;
            default:
                console.log("Defaulting to every layer.");
                this.layersList = [new WordSelectionLayer(passwordStrength), new TransformLayer(passwordStrength), new CapitalizationLayer(passwordStrength), new PaddingLayer(passwordStrength)];
                break;
        }
        console.log("Updating layers list. There are now " + this.layersList.length + " layers.");
    }

    //TODO delete wrapper
    addLayer(newLayer){
        this.layersList.push(newLayer);
    }

    generateNewPassword(passwordStrength){
        
       
        // var generateUncheckedPassword = function(layersList){
            
        // };


        let layerOuput =''; 
    
        this.layersList.forEach(_layer => {
            _layer.reset();
            layerOuput = _layer.getPasswordOutput(layerOuput);

        });
           

        //var zxcvbn = require('zxcvbn');
        // let iterations = 0;
        // do{
            
        //     var generatedPassword = generateUncheckedPassword();
        //     var result = zxcvbn(generatedPassword);
        //     iterations++;
        // }
        // while(result.score < this.passwordStrength && iterations < MAX_PASSWORD_GENERATION_ATTEMPTS );
        
        // if(iterations >= MAX_PASSWORD_GENERATION_ATTEMPTS)
        //     console.error('Unable to generate good enough password in ' + MAX_PASSWORD_GENERATION_ATTEMPTS + ' attempts.');
       
       

        let generatedPassword = layerOuput; //generateUncheckedPassword(this.layersList);
        this.password = generatedPassword;
       
        console.log('Generated password: ' + generatedPassword);

        console.log('Layers is: ' + this.layersList);
        return generatedPassword;
    }


    getPassword(){
        return this.password;
    }

    getLayers(){
        return this.layersList;
    }

    

  

}