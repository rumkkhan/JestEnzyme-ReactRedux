import {SAVE_COMMENT} from 'actions/types';

export function saveComment(comment){
    debugger
    return {
        type: SAVE_COMMENT,
        paylaod: comment
    }
}