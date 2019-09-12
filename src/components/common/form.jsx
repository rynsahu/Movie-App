import React, { Component } from 'react';
import Joi from 'joi';
import Input from './input';
import Select from './select';


class Form extends Component {
    state = { 
        data: {},
        errors: {}
    };

    validate = () => {
        const { error } = Joi.validate(this.state.data, this.schema, { abortEarly: false });
        if(!error) return null;

        const errors = {};
        let item;
        for(item of error.details) errors[item.path[0]] = item.message;

        return errors;
    }

    handleSubmit = e =>{
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        if(errors) return;

        this.doSubmit(e);
    };

    validateProperty = ({ name, value }) => {
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    handleChange = ({ currentTarget: input }) => {
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name] = errorMessage;
        else delete errors[input.name];

        const data = {...this.state.data}
        data[input.name] = input.value;
        this.setState({ data, errors });
    }

    renderInput(name, label, type = "text") {
        const { data, errors } = this.state;

        return(
            <Input 
                label={label}
                type={type}
                value={data[name]}
                name={name}
                onChnage={this.handleChange} 
                error={ errors[name] }
            />
        );
    }

    renderSelect(name, label, options) {
        return (
            <Select 
                label={label} 
                name={name} 
                options={options} 
                onChange={this.handleChange}
                error={this.state.errors[name]}
            />
        );
    }

    renderButton(label) {
        return(
            <button 
                disabled={this.validate()} 
                className="btn btn-primary"
            >
                {label}
            </button>
        );
    }
}
 
export default Form ;