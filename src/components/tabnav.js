import React, { Component } from 'react';
import Dashboard from './dashboard';

export default class TabNav extends Component {
    render() {
        return (
            <div className='tab-nav'>
                <div className='tab-nav__tabs'>
                {
                    this.props.tabs.map((tab, index) => {
                        return <a className='tab-nav__tab'> {tab.title} </a>
                    })
                }
                </div>
                <div className='tab-nav__tabs'>
            {
                this.props.tabs.map((tab, index) => {
                    const className = `tab-nav__tab ${tab.active ? 'tab-nav__active': '' }`
                    return <a key={index} onClick={() => this.props.handleClick(tab.title)} className={className}>{tab.title}</a>
                })
            }
                </div>
                {
                    this.props.tabs.map((tab, index) => {
                        if(tab.active) {
                            return (
                                <div key={index} className='tab-nav__componet'>
                                    {tab.component}
                                </div>
                            )
                        }
                    })
                }
            </div>
        )
} 

//this mistake was made in the 22 video okay!
//Week 6 'creting the tab nav grid on react