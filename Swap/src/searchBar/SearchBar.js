import React from 'react';

const SearchBar = ({searchChange}) => {
    return (
        <aside>
            <input 
                type='search' 
                placeholder='search articles'
                onChange = {searchChange} />
        </aside>
    );
}

export default SearchBar;