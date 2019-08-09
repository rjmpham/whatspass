
import {Component} from 'react';
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
    return <div>
        <h1> Layer output for Layer {layer.layerName} </h1>
        {tupleList.map( (x, index)=> TupleToJSX(x, index))}
    </div>

}


function TupleToJSX(tuple, index){
    //first tuple value is a bool (isGreen)
if(tuple.first){
    return <h1 class = "LayerOutputStandardGreen" key={index}> {tuple.second}</h1>;
}
    return <h1 class="LayerOutputStandard" key={index}> {tuple.second} </h1>;
}