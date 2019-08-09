

export default class Utilities{

    static getRandRange(min, max){
        var percent = window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295; 
        return (min + ((max -min)*percent));
    }
    
    static getRandRangeInt(min, max){
        return Math.floor(this.getRandRange(min, max));
    }

    static getRandom(max){
        return this.getRandRange(0, max);
    }

    static getRandomInt(max){
        return this.getRandRangeInt(0, max);
    }

    static replaceAt(str, index, replacement) {
        return str.substr(0, index) + replacement+ str.substr(index + replacement.length);
    }
    
    
}