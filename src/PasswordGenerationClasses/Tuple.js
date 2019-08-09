export default class Tuple{
    first = null;   //typically used to indicate whether it is a change.
    second = null;
    description = 'No Tuple Description.';

    constructor(first, second, description){
        this.first = first;
        this.second = second;
        this.description = description;
    }
}