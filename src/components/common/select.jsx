import React from 'react';

const Select = ({ label, name, options, onChange, error }) => {
    return ( 
        <div className="form-group">
            <label htmlFor="name">{label}</label>
            <select name={name} onChange={onChange} id={name} className="form-control">
                {options.map(option => 
                    <option 
                        key={option._id} 
                        value={option._id}
                    >
                        {option.name}
                    </option>
                )}
            </select>
            {error && <div className="alert alert-danger form-alert" >{error}</div>}
        </div>
     );
}
 
export default Select;