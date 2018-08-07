import {
    SET_NEWSLETTER
} from '../actions/types';

const INITIAL_STATE = {
    newsletter: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_NEWSLETTER: 
            const newsletters = action.payload; 
            return {
                ...state, 
                newsletters
            }

        default: return state; 
    }
}