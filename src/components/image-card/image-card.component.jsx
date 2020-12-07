import React from 'react';
import './image-card.styles.css';

const ImageCard = ({image}) => {
    return(
        <div className='image-card'>
            <img src={image} alt="dog" width="400" height="400"></img>
        </div>
    );
}

export default ImageCard;