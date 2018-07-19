import React, {Component} from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput } from '../formFields';

export default class SigninForm extends Component {
    render() {
        return (
            <form className='sing-in-form'>
                <FormTitle className='sign-in-form__title' text='Login' /> 
                <Field className='sign-in-form__email' component={FormInput} name='email' type='email'/>
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm); 