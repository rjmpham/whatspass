export default class Layer{
    outputTuples = [];
    description = 'No description available';
    layerName = 'LayerName';
    blurb= 'Nothing to see here';

    input = '';
    output = '';  

    passwordStrength = null;    //this should be the enum defined in DisplayBox.js
   
    //Resets the input and ouput variables, so that the Layer is at its original state.
    reset(){
        this.input = '';
        this.output = '';
        this.outputTuples = [];
    }

}
 


