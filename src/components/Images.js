// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import passDates from './images/passDates.jpg';
import passDatesTable from './images/table6Dates.png';
// eslint-disable-next-line no-unused-vars
import Divider from '@material-ui/core/Divider';

export function Images(){


    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {

        window.addEventListener('resize', handleWindowSizeChange());      
        // returned function will be called on component unmount 
        return () => {
            window.removeEventListener('resize', this.handleWindowSizeChange);
        };
    }, []);

      
    function handleWindowSizeChange() {
        setWidth(window.innerWidth );
    }
      

    var output = [];  
    const isMobile = (width <= 500);
    if (isMobile){
        output.push(
            null
        );
        output.push(
            <img style = {{width: 300, height: 250 }} src={passDatesTable} alt="password dates table"/>
        );
    }
    else {
        output.push(
            <img style = {{width: 850, height: 150 }} src={passDates} alt="password dates visual"/>
        );
    
        output.push(
            <img style = {{width: 598, height: 442 }} src={passDatesTable} alt="password dates table"/>
        );
    }


    return (output);
}

export default Images;