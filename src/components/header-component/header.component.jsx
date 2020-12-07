import React from 'react';
import SearchBar from '../searchbar-component/SearchBar';
import './header.styles.css';



const HeaderComponent = ({breed}) => {
    return (
        <div className='header'>
            <h1>Pupper therapy</h1>
            <h2>How it works:</h2>
            <p>Type in the name of the breed you are interested in and hit search! You will get 25 images of good puppers back to gush over!</p>
            <SearchBar onChange={breed} />
        </div>

    )
}

export default HeaderComponent;