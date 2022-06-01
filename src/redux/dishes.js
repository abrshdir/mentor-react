import * as ActionTypes from './ActionTypes';

export const Mentors = (state = {
    isLoading: true,
    errMess: null,
    mentors: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_MENTORS:
            return {...state, isLoading: false, errMess: null, mentors: action.payload};

        case ActionTypes.MENTORS_LOADING:
            return {...state, isLoading: true, errMess: null, mentors: []}

        case ActionTypes.MENTORS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};
