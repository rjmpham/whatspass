
import {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';


export default class ShowLayerOutput extends Component {
    render(props) {
        return <div>
            {GenerateResultJSX(this.props.layer)}
        </div>;
    }
}

function GenerateResultJSX(layer){
    let tupleList = layer.outputTuples;
    return( 
        <div class= "StyleSingleLayer">
            <h2 class= "StyleLayerName"> {layer.layerName} </h2>
            <div class="StyleLayerOutput">        
                {tupleList.map( (x, index)=> TupleToJSX(x, index))}
            </div>
            <div class="StyleLayerBlurb">{layer.description}</div>
        </div>);

}


function TupleToJSX(tuple, index){
    //first tuple value is a bool (isGreen)
    if(tuple.first){
        return <h2 class = "LayerOutputStandardGreen" key={index}> {tuple.second} <br></br> </h2>;
    }
    return <h2 class="LayerOutputStandard" key={index}> {tuple.second} </h2>;
}