import Layer from './Layer.js';
import Utilities from './Utilities.js';
import Tuple from './Tuple.js';


export default class WordSelectionLayer extends Layer{
    strength = null;
    
    constructor(){
        super();
        this.description = 'Choose some random words that are unrelated.'
        this.layerName = "Word Selection Layer."
        
    }

    getPasswordOutput(input){
        this.ouput = '';
        let wordsList = getWordList();
        let numberOfWords = Utilities.getRandRange(0, 3);
        for(let i  =0 ; i < numberOfWords; i++){
            let newWord = wordsList[Utilities.getRandRangeInt(0, wordsList.length)];
            let newTuple = new Tuple(true, newWord, "Added word " + newWord);
            
            this.ouput += newWord;
            this.outputTuples.push(newTuple);
            
            
        }
        
        return  this.ouput;
        
    }

    
  


   
}




function getWordList(){
    return ['one', 'two', 'three', 'four'];
}