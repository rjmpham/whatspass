import React from 'react';

export default class Layer{
    outputTuples = [];
    description = 'No description available';
    layerName = 'LayerName';
    blurb= 'Nothing to see here';

    input = '';
    output = 'output';  

    passwordStrength = null;    //this should be the enum defined in DisplayBox.js
   
    constructor(passwordStrength){
        this.passwordStrength = passwordStrength;
    }

}
 


