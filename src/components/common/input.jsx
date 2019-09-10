import React from 'react';

const Input = ({ label, value, name, placeholder, onChnage, type, error  }) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{ label }</label>
            <input 
                value={value} 
                name={name} 
                onChange={onChnage} 
                id={name} 
                type={type}
                className="form-control" 
                placeholder={placeholder} 
            />
            {error && <div className="alert alert-danger" >{error}</div>}
        </div>
    );
}

export default Input;