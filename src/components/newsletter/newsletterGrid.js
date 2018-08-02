import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';
import Button from '../button';

class NewsletterGrid extends Component {
    render() {

        const latest = {
            _id: '115', //in mongo they look at ids with an underscore 
            title: 'Happy Holidays Fam',
            body: 'is simply dummy text of the printing and typesetting industry.',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }

        handleAddNewsletter= () => {
            this.props.history.push('/newsletter/new');
        }


        return (
            <div className = 'newsletter-grid'>
                <Button className='newsletter-grid__button' icon='fas fa-plus' callback={() => this.handleAddNewsletter()} />
                <NewsletterBox date={newDate()}/>
                <NewsletterArchive/>
                <NewsletterLatest {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid; 