import React, {Component} from "react";
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput } from '../formFields';
import TextLink from "../textLink";

class SigninForm extends Component {
    render() {
        return (
            <form className="sing-in-form">
                <FormTitle className="sign-in-form__title" text="Login" /> 
                <Field 
                    className="sign-in-form__email" 
                    placeholder="Enter Email" 
                    name="email" 
                    type="email"
                    title="Email"
                    component={FormInput}
                />
                <Field 
                    className="sign-in-form__password" 
                    placeholder="Enter Password" 
                    name="password" 
                    type="password"
                    title="Password"
                    component={FormInput}
                />
                <Field 
                    className="sign-in-form__login" 
                    placeholder="Enter login" 
                    name="login" 
                    type="submit"
                    title="Login"
                    component={FormButton}
                />
                <div className='sign-in-form'>
                    <TextLink to='/forgot' text='Forgot Password'/>
                    <TextLink to='/sign up' text='Not a member? Register here'/>
                </div>
            </form>
        );
    }
}

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm); 

export default SignupForm; 