import React from 'react';
import './image-card.styles.css';

const ImageCard = ({image}) => {
    return(
        <div className='image-card'>
            <img src={image} alt="dog" width="450"></img>
        </div>
    );
}

export default ImageCard;