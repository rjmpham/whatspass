export default class Layer{
    
    //These do not need to change when the layer is reset.
    description = 'No description available';
    layerName = 'LayerName';
    blurb= 'Nothing to see here';
    passwordStrength = null;    //this should be the enum defined in DisplayBox.js

    //these need to be reset between password generation attmpets;
    input = '';
    output = '';  
    outputTuples = [];

    
   
    //Resets the input and ouput variables, so that the Layer is at its original state.
    reset(){
        this.input = '';
        this.output = '';
        this.outputTuples = [];
    }

}
 


