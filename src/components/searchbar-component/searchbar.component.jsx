import React, { useState, useEffect } from 'react';

const SearchBar = ({breedName, }) => {
    // const [breedName, setBreedName] = useState(null);
    // const [images, setImages] = useState(null);

    // useEffect(()=>{
    //     const fetchFunc = async () => {
    //         const response = await fetch(`https://dog.ceo/api/breed/${breedName}/image/random/50`);
    //         const resJson = await response.json();
    //         setImages(resJson.message);
    //     }

    //     fetchFunc();
    // }, [breedName])

    return (
        <div className = 'pa2'>
            <input 
                type='search' 
                placeholder='search breed' 
                value={breedName}
                onChange = {''}            
                />
            <button type='submit'></button>
        </div>
    );
}




export default SearchBar;