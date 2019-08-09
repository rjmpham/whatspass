import Layer from "./Layer.js";
import Utilities from './Utilities.js';
import Tuple from './Tuple.js';

const MAX_ITERATIONS = 100;

export default class LetterModificationLayer extends Layer{
    
    allChars = [];
    
    
    getReplacement(char){
        return '';
    }

    //input is a string that is some words. Here we randomly replace characters with others.
    getPasswordOutput(input){
        this.input = input;
        let numberOfChanges = Utilities.getRandRangeInt(1, 4);
        let tempOutput = input;
        let changedIndexes = [];


        for(let i = 0; i < numberOfChanges; i++){
            
            for(let i = 0; i < MAX_ITERATIONS; i++){
                var randIndex = Utilities.getRandRangeInt(0, tempOutput.length-1);
            
            

                if(changedIndexes.includes(randIndex))
                    continue;
    
                
                var replacement = this.getReplacement(input[randIndex]);
               
                if(tempOutput[randIndex] === replacement)
                    continue;
                
                break;
            }
           


            changedIndexes.push(randIndex);

                console.log("Replaced " + tempOutput[randIndex] + ' at ' + randIndex + ' with ' + replacement );
            
            tempOutput = Utilities.replaceAt(tempOutput, randIndex, replacement );
            
        }  
        
        //sort from lowest to biggest
        changedIndexes = changedIndexes.sort((a, b) => a - b);

        //we generate the Tuples afterwords, 
        let unchangedIndex =0 ;
        for(let i = 0; i < changedIndexes.length; i++){
            const randIndex  = changedIndexes[i];
            //get the whatever was unchanged from before:

            
            
            if(unchangedIndex !== randIndex){
                let unchanged = tempOutput.slice(unchangedIndex,randIndex);
                console.log('Unchanged = ' + unchanged + ' from ' + unchangedIndex + ' to ' + randIndex);
                this.outputTuples.push(new Tuple(false, unchanged, ''));
            }
            
            console.log("Changed : " + tempOutput[randIndex] + ' at ' + randIndex);
            this.outputTuples.push(new Tuple(true, tempOutput[randIndex], 'Replaced ' + input[randIndex] + ' with ' + tempOutput[randIndex]));
            
            
            unchangedIndex = randIndex+1;
        }

        if(unchangedIndex < tempOutput.length){
            if(unchangedIndex !== tempOutput.length){
                let unchanged = tempOutput.substr(unchangedIndex,tempOutput.length);
                console.log('Unchanged = ' + unchanged + ' from ' + unchangedIndex + ' to ' + tempOutput.length);
                this.outputTuples.push(new Tuple(false, unchanged, ''));
            }
            
        }
        
        console.log(tempOutput);
        this.output = tempOutput;
        return tempOutput;

    }

    
}


