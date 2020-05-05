import React from 'react';
import './Dogs.css'

const Dogs = ({image}) => {
    return(
        <div>
           <img className='image' src={image} alt="Dog"/>
        </div>
    );
}



export default Dogs