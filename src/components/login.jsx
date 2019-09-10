import React, { Component } from 'react';
import Input from './common/input';

class LoginForm extends Component {
    state = {
        account: {username: '', password: ''},
        errors: {}
    }

    validate = () => {
        const errors = {};
        const { account } = this.state;

        if(account.username.trim() === '') 
            errors.username = 'Username is required.';
        if(account.password.trim() === '') 
            errors.password = 'Username is required.';

        return Object.keys(errors).length === 0 ? null : errors;
    }

    handleSubmit = e =>{
        e.preventDefault();

        const errors = this.validate();
        this.setState({ errors: errors || {} });
        console.log(errors);
        if(errors) return;

        //server req.
        console.log("submitted");
    };

    handleChange = ({ currentTarget: input }) => {
        const account = {...this.state.account}
        account[input.name] = input.value;
        this.setState({ account });
    }

    render() {
        const { account, errors: error } = this.state;

        return(
            <div className="Login-form">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input 
                        label="Username"
                        type="text"
                        value={account.username}
                        name="username" 
                        placeholder="Enter username"
                        onChnage={this.handleChange} 
                        error={ error.username }
                    />
                    <Input 
                        label="Password"
                        type="password"
                        value={account.password}
                        name="password" 
                        placeholder="Enter password"
                        onChnage={this.handleChange} 
                        error={ error.password }
                    />
                    <button className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default LoginForm; 