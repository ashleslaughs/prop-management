import axios from 'axios';

import { ROOT_URL } from '../config'; 

export function signUp(fields, sucess) {
    console.log(fields); 
    return function(dispatch) {
        axios.post(`${ROOT_URL}/signUp`)
            .then(response => {
                
            })
            .catch(err => {
                if(err) { console.log(err) }
            })
    }
}