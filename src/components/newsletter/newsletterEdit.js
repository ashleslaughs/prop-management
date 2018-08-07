import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm.js';

class EditNewsletter extends Component {

    onSubmit = (fields) => {
        this.props.history.push('/dashboard');
    }

    onCancel = () => {
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm 
                    onCancel={() => this.onCancel()} 
                    onSubmit={(event) => this.onSubmit(event)}
                    title='Edit Newsletter'  
                />
            </div>
        )
    }
}

export default EditNewsletter; 