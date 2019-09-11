import React from 'react';

const Input = ({ label, value, name, onChnage, error, type  }) => {
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input 
                value={value} 
                name={name} 
                onChange={onChnage} 
                id={name} 
                type={type}
                className="form-control" 
            />
            {error && <div className="alert alert-danger form-alert" >{error}</div>}
        </div>
    );
}

export default Input;