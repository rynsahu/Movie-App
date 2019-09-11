import React from 'react';
import Form from './common/form';
import Joi from 'joi';

class LoginForm extends Form {
    state = {
        data: {username: '', password: ''},
        errors: {}
    }

    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = () => {
        //server call
        console.log('Submitted')
    }

    render() {
        return(
            <div >
                <h1 className="headings">Login</h1>
                <form onSubmit={this.handleSubmit} className="form-style">
                    {this.renderInput("username", "Username", "Enter username")}
                    {this.renderInput("password", "Password", "Enter password", "password")}
                    {this.renderButton('Login')}
                </form>
            </div>
        );
    }
}

export default LoginForm; 