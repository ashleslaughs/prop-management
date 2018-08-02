import React from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export default function NewsletterBox({date}) {
    return (
        <div className='newsletter-box'>
            <div className='newsletter-box__day'>{date.getDate()}</div>
            <div className='newsletter-box__month-year'>{months[date.getMonth()]} {date.getYear()}</div>
            <div className='newsletter-box__point'></div>
        </div>
    )
}