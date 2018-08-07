
import {
    SET_NEWSLETTERS
} from './types';

export function fetchNewsletters() {

    const response = {
        data : [
            {
                _id: '115', //in mongo they look at ids with an underscore 
                title: 'Happy Holidays Fam',
                body: 'is simply dummy text of the printing and typesetting industry.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            },
            {
                _id: '935',
                title: 'Second Newsletter',
                body: 'ng industry . Lo yooooo dummy text. What do i do this suck s. this onw even work bewcause reduzx doesnt work on my compouyter. i don t understand hwo it works for other people. this makes me sad',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            }
        ]
    }

    return {
        type: SET_NEWSLETTERS,
        payload: response.data 
    }
}