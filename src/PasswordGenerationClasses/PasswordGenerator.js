/* eslint-disable no-console */
import WordSelectionLayer from './WordSelectionLayer.js';
import CapitalizationLayer from './CapitalizationLayer.js';
import TransformLayer from './TransformLayer.js';
import PaddingLayer from './PaddingLayer.js';
// eslint-disable-next-line no-unused-vars
import { loadingOverlay } from '@aws-amplify/ui';


// eslint-disable-next-line no-unused-vars
const MAX_PASSWORD_GENERATION_ATTEMPTS = 10;

export default class PasswordGenerator{
    layersList = [];
    password = 'null';

    constructor(passwordStrength){
       
        this.layersList = [new WordSelectionLayer(passwordStrength), new TransformLayer(passwordStrength), new CapitalizationLayer(passwordStrength), new PaddingLayer(passwordStrength)];
        
    }

    //TODO delete wrapper
    addLayer(newLayer){
        this.layersList.push(newLayer);
    }

    generateNewPassword(){
        
       
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