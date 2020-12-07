import React from 'react';

const SearchBar = ({breed}) => {
    return (
        <div className = 'pa2'>
            <input 
                className = 'pa3 ba'
                type='search' 
                placeholder='search breed' 
                onChange = {breed}
            />
            <button type='submit'>Search</button>
        </div>
    );
}




export default SearchBar;