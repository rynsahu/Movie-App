import React from 'react';

const SearchBox = ({ value, onChange }) => {
    return ( 
        <input 
            value={value}
            onChange={e => onChange(e.currentTarget.value)}
            name="query"
            type="text" 
            className="form-control my-3" 
            placeholder="Search..."
        />
    );
}
 
export default SearchBox;