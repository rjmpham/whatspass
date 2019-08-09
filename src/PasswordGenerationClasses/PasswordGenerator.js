import WordSelectionLayer from './WordSelectionLayer.js';
import CapitalizationLayer from './CapitalizationLayer.js';
import TransformLayer from './TransformLayer.js';



 export default class PasswordGenerator{
    layersList = [];
    password = 'null';

    constructor(){
        this.layersList = [new WordSelectionLayer(), new TransformLayer(), new CapitalizationLayer()];
    }

    //TODO delete wrapper
    addLayer(newLayer){
        this.layersList.push(newLayer);
    }

    generateNewPassword(){
        let ret; //seed
        this.layersList.forEach(_layer => {
            
            ret = _layer.getPasswordOutput(ret);
            console.log('Layer ' + _layer.layerName + ' returned: '+ ret)
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