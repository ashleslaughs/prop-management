import React, { Component } from 'react';

class TabNav extends Component {
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
                <div> requests or newsletters content goes Headers.  </div>
            </div>
        )
}


export default TabNav; 

//this mistake was made in the 22 video okay!
//Week 6 'creting the tab nav grid on react