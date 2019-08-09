

 export default class Layer{
    outputTuples = [];      //the outputTuples are use to construct the JSX, and define what parts of the string are green/black
    description = "No description available";
    layerName = "LayerName"

    input = '';
    output = "output";  

    passwordStrength = null;    //this should be the enum defined in DisplayBox.js
   
    constructor(passwordStrength){
        this.passwordStrength = passwordStrength;
    }

}
 


