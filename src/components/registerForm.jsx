import React from 'react';
import Joi from 'joi';
import Form from './common/form'

class RegisterForm extends Form {
    state = { 
        data: { username: "", name: "", password: "" },
        errors: {}
    };

    schema = {
        username: Joi.string().email().required(),
        name: Joi.string().required(),
        password: Joi.string().min(8).required()
    }

    doSubmit() {
        //server call
        console.log('Submitted');
    }

    render() {
        return ( 
            <React.Fragment>
                <h1 className="headings">Register</h1>
                <form className="form-style" onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("name", "Full Name")}
                    {this.renderInput("password", "Password", "Password")}
                    {this.renderButton("Register")}
                </form>
            </React.Fragment>
         );
    }
}
 
export default RegisterForm;