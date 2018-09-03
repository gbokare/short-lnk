import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        if (password.length < 9) {
            return this.setState({
                error:
                    'Password must be more than 8 charactres long'
            });
        }

        console.log('Creating accout ', email);
        Accounts.createUser({ email, password }, (err) => {
            if (err) {
                this.setState({ error: err.reason });
            } else {
                this.setstate({ error: '' });
            }
        });
    }


    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h1>SignUp Page for Short-Lnk</h1>

                    {this.state.error ? <p>{this.state.error}</p> : undefined}

                    <form onSubmit={this.onSubmit.bind(this)} noValidate className ="boxed-view__form">
                        <input type="email" ref="email" name="email" placeholder="Email" />
                        <input type="password" ref="password" name="password" placeholder="Password" />
                        <button className ='button'>Create an Account</button>
                    </form>

                    <Link to="/">Have an Account!!</Link>
                </div>
                </div>
        );
      }
}