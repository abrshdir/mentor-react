import * as ActionTypes from "./ActionTypes";

export const Requests = (state = {
    isLoading: true,
    errMess: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REQUESTS:
            return { ...state, isLoading: false, errMess: null, leaders: action.payload };

        case ActionTypes.REQUESTS_LOADING:
            return { ...state, isLoading: true, errMess: null, leaders: [] }

        case ActionTypes.REQUESTS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        default:
            return state;
    }
};
