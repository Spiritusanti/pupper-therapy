import React from 'react';

const Dogs = ({image}) => {
    return(
        <div>
            <ul>
           <img src={image} alt="Dog"/>
           </ul>
        </div>
    );
}



export default Dogs