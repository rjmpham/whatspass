
import {Component} from 'react';
// eslint-disable-next-line no-unused-vars
import React from 'react';


export default class ShowLayerOutput extends Component {
    // eslint-disable-next-line no-unused-vars
    render(props) {
        return <div>
            {GenerateResultJSX(this.props.layer)}
        </div>;
    }
}

function GenerateResultJSX(layer){
    let tupleList = layer.outputTuples;
    return( 
        <div className= "StyleSingleLayer">
            <h2 className= "StyleLayerName"> {layer.layerName} </h2>
            <div className="StyleLayerOutput">        
                {tupleList.map( (x, index)=> TupleToJSX(x, index))}
            </div>
            <div className="StyleLayerBlurb">{layer.description}</div>
        </div>);

}


function TupleToJSX(tuple, index){
    //first tuple value is a bool (isGreen)
    if(tuple.first){
        return <h2 className = "LayerOutputStandardGreen" key={index}> {tuple.second}  <br></br></h2>;
    }
    return <h2 className="LayerOutputStandard" key={index}> {tuple.second} <br></br> </h2>;
}