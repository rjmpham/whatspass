import Layer from './Layer.js';
import Utilities from './Utilities.js';
import Tuple from './Tuple.js';

const MAX_ITERATIONS = 100; //the maxiumum number of iterations that getPasswordOutput can use when attempting to generate a usable index.


export default class LetterModificationLayer extends Layer{
    
    allChars = [];
    MAX_CHANGES = 1;
    //This method should overridden by class that extends the this layer.
    //This is used to determine what letter to replace char with.
    //Called in getPasswordOutput(input)
    // eslint-disable-next-line no-unused-vars
    getReplacement(char){
        return '';
    }

    //input is a string that is some words. Here we randomly replace characters with others.
    getPasswordOutput(input){
        

        this.input = input;
        let tempOutput = input;
        let changedIndexes = [];
        for(let i = 0; i < this.MAX_CHANGES; i++){
            //foreach each change needed, choose a random index, and replace the tempOutput[randomIndex] with the replacement.

            let randIndex;
            let replacement;

            let foundValidIndex = false;
            //attempt to generate a random index that is valid, and an accompanying replacement value.
            let iterations = 0;
            while(!foundValidIndex){ 
                foundValidIndex = true;

                randIndex = Utilities.getRandRangeInt(0, tempOutput.length);


                //Check 1:
                //do not reuse indexes, try again
                if(changedIndexes.includes(randIndex)){
                    //console.log('Discarding ' + randIndex + ' as the index was already used.');
                    foundValidIndex = false;
                }
                   
    
                //get a replacement
                replacement = this.getReplacement(input[randIndex]);
               
                //Check 2
                //if the replacement happens to not change the tempOutput, try again.
                if(tempOutput[randIndex] === replacement){
                    ////console.log('Discarding ' + randIndex + ' as the change has no effect.');
                    foundValidIndex = false;
                }
                    
                
                //Check 3, is the target character lower case?
                if(!this.hasLowerCase(tempOutput[randIndex] )){
                    ////console.log('Discarding ' + randIndex + ' as it is not a lower case letter.');
                    foundValidIndex= false;
                }

                iterations++;
                
                if(iterations> MAX_ITERATIONS){
                    ////console.error('Attempt to find valid index timed out.');
                    break;
                }
                    
            }
            
            if(!foundValidIndex)
                continue;
            //we have chosen a valid index, track it
            changedIndexes.push(randIndex);
            ////console.log(changedIndexes);

            ////console.log('Replaced ' + tempOutput[randIndex] + ' at ' + randIndex + ' with ' + replacement );
            
            //replace the tempOutput[randIndex] with replacement.
            tempOutput = Utilities.replaceAt(tempOutput, randIndex, replacement );
            
        }  
        
        //sort from smallest index to the largest
        changedIndexes = changedIndexes.sort((a, b) => a - b);

        //we generate the Tuples afterwords
        
        
        let unchangedIndex =0; //This is the index of that last char that is not in a tuple, that is unchanged.
        for(let i = 0; i < changedIndexes.length; i++){
            
            const randIndex  = changedIndexes[i];
            //get the whatever was unchanged from before:

            
            //if randIndex is different, then we have some chars that were unchanged.
            if(unchangedIndex !== randIndex){
                let unchanged = tempOutput.slice(unchangedIndex,randIndex);
                //console.log('Unchanged = ' + unchanged + ' from ' + unchangedIndex + ' to ' + randIndex);
                
                this.outputTuples.push(new Tuple(false, unchanged, ''));
            }
            
            //console.log('Changed : ' + tempOutput[randIndex] + ' at ' + randIndex);
            this.outputTuples.push(new Tuple(true, tempOutput[randIndex], 'Replaced ' + input[randIndex] + ' with ' + tempOutput[randIndex]));
            
            
            unchangedIndex = randIndex+1;
        }

        if(unchangedIndex < tempOutput.length){
            if(unchangedIndex !== tempOutput.length){
                let unchanged = tempOutput.substr(unchangedIndex,tempOutput.length);
                //console.log('Unchanged = ' + unchanged + ' from ' + unchangedIndex + ' to ' + tempOutput.length);
                this.outputTuples.push(new Tuple(false, unchanged, ''));
            }
            
        }
        
        //console.log(tempOutput);
        this.output = tempOutput;
        return tempOutput;

    }

    hasLowerCase(str) {
        return (/[a-z]/.test(str));
    }
    
    
}


