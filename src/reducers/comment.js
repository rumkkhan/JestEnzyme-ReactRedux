import {SAVE_COMMENT} from 'actions/types';
export default function (state = [], action) {
    debugger
    switch(action.type){
        case SAVE_COMMENT:
            return [...state,action.paylaod]
        default: 
           return state;
    }
}