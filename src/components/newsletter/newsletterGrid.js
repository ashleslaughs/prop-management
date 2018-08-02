import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';
import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {
    render() {

        const latest = {
            _id: '115', //in mongo they look at ids with an underscore 
            title: 'Happy Holidays Fam',
            body: 'is simply dummy text of the printing and typesetting industry.',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }


        return (
            <div className = 'newsletter-grid'>
                <NewsletterBox date={newDate()}/>
                <NewsletterArchive/>
                <NewsletterLatest {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid; 