import React, {Component} from 'react'; 

import { connect } from 'react-redux'; 

function ArchiveItem({title, date}) {
    return (
        <div className='archive-item'>
            <div className='archive-item__title'>{title}</div>
            <div className='archive-item__date'>
                { date.getMonth() + 1 }
                /
                { date.getDate() }
                /
                { date.getFullYear() - 2000 }
            </div>

        </div>
    )
}

class NewsletterArchive extends Component {
    render() {
    return (
        <div className='newsletter-archive'>
            <div className='newsletter-archive__title'>{title}</div>
            <div className='newsletter-archive__items archive-items'>
                {/* newsletter */}

                { 
                    this.props.newsletters.map(newsletter => {
                        return <ArchiveItem key={newsletter_id} {...newsletter}/>
                    })
                }
            </div>
        </div>
    )
}
}

function mapStatetoProps(state) {
    const { newsletters } = state.newsletters;
    return {
        newsletters
    }
}

export default connect(mapStatetoProps)(NewsletterArchive)