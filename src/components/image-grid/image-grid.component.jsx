import React from 'react';
import ImageCard from '../image-card/image-card.component';
import './image-grid.styles.css';

const ImageGrid = ({images}) => {
    return (
        <div className='image-grid'>
            {images
               ? images.map((image, i) => {
                    return (
                        <ImageCard
                        key={i}
                        image={image}
                    />)
                })
            : "loading..."}
        </div>
    );
}

export default ImageGrid;