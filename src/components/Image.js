import React from 'react';


const Image = ({img, breedName}) => {
    return (
        <div>
            <img alt='dog' src={`https://dog.ceo/api/breed/${breedName}/images/random/1`}/>
        </div>
    )
}

export default Image