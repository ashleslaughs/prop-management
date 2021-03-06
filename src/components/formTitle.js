import React from 'react';

export function FormTitle(props) {
    const { className, text} = props; 
    return (
             <div className='header'>
                <h1 className={`${className} form-title`}>{text}</h1> 
             </div>
    )
}