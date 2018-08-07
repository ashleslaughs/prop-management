import React, {Component} from 'react'; 

import { connect } from 'react-redux'; 

import history from '../../history';

function ArchiveItem({title, date, _id, callback}) {
    return (
        <div className='archive-item'>
            <a onClick={() => callback(_id)} className='archive-item__title'>{title}</a>
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
                        return <ArchiveItem callback={(_id) => history.push(`/newsletter/detail/${_id}`)}  key={newsletter_id} {...newsletter}/>
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