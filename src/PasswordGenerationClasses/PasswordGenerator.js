/* eslint-disable no-console */
import WordSelectionLayer from './WordSelectionLayer.js';
import CapitalizationLayer from './CapitalizationLayer.js';
import TransformLayer from './TransformLayer.js';
import {STRENGTH} from '../components/DisplayBox.js';



export default class PasswordGenerator{
    layersList = [];
    password = 'null';

    constructor(passwordStrength){
       
        this.layersList = [new WordSelectionLayer(passwordStrength), new TransformLayer(passwordStrength), new CapitalizationLayer(passwordStrength)];
        
    }

    //TODO delete wrapper
    addLayer(newLayer){
        this.layersList.push(newLayer);
    }

    generateNewPassword(){
        console.log("****************************************************");
        let ret; //seed
        this.layersList.forEach(_layer => {
            
            ret = _layer.getPasswordOutput(ret);
            console.log('Layer ' + _layer.layerName + ' returned: '+ ret);
        });

        console.log('set this.password to ' + ret);
        this.password = ret;
        console.log('it is now ' + this.password);
        
        return ret;
    }


    getPassword(){
        return this.password;
    }

    getLayers(){
        return this.layersList;
    }

  

}