import React from 'react';

const SearchBar = ({searchChange}) => {
    return (
        <div className = 'pa2'>
            <input 
                className = 'pa3 ba'
                type='search' 
                placeholder='search puppers' 
                onChange = {searchChange}
            />
        </div>
    );
}




export default SearchBar;