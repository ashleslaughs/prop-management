import React, { Component } from 'react';

import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';

class NewsletterGrid extends Component {
    render() {
        return (
            <div className = 'newsletter-grid'>
                <NewsletterBox date={newDate()}/>
                <NewsletterArchive/>
            </div>
        )
    }
}

export default NewsletterGrid; 