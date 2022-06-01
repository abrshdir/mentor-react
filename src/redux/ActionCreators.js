import * as ActionTypes from './ActionTypes';
import {baseUrl, loginUrl, signUpUrl} from '../shared/baseUrl';

export const fetchMentors = () => (dispatch) => {
    dispatch(mentorsLoading(true));

    return fetch(baseUrl + '/mentor.json')
        .then(response => {
            // debugger
            if (response.ok) {
                return response
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(mentors => dispatch(addMentors(mentors)))
        .catch(error => dispatch(mentorsFailed(error.message)));
}

export const mentorsLoading = () => ({
    type: ActionTypes.MENTORS_LOADING
});

export const mentorsFailed = (errmess) => ({
    type: ActionTypes.MENTORS_FAILED,
    payload: errmess
});

export const addMentors = (mentors) => ({
    type: ActionTypes.ADD_MENTORS,
    payload: mentors
});


export const fetchRequests = () => (dispatch) => {

    dispatch(requestsLoading());

    return fetch(baseUrl + '/requests')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            ////if no responmse from server
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(requests => dispatch(addRequests(requests)))
        .catch(error => dispatch(requestsFailed(error.message)));
}

export const requestsLoading = () => ({
    type: ActionTypes.REQUESTS_LOADING
});

export const requestsFailed = (errmess) => ({
    type: ActionTypes.REQUESTS_FAILED,
    payload: errmess
});

export const addRequests = (requests) => ({
    type: ActionTypes.ADD_REQUESTS,
    payload: requests
});

export const auth = (email, password, mode) => (dispatch) => {

    const newFeedback = {
        email: email,
        password: password,
    }

    const link = mode === 'login' ? loginUrl : signUpUrl

    return fetch(link, {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {

                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            ////if no responmse from server
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(response => {
            console.log(JSON.stringify(response))
        })
        .catch(error => {
            console.log('Send Messages', error.message);
            alert('Messages could not be send\nError' + error.message);
        });
}


export const sendMessagestoMentor = (email, message, mentorId) => (dispatch) => {
    const newFeedback = {
        email: email,
        message: message,
    }

    return fetch(baseUrl + '/requests/' + mentorId + '.json', {
        method: 'POST',
        body: JSON.stringify(newFeedback),
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'same-origin'
    })
        .then(response => {

                if (response.ok) {

                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText)
                    error.response = response;
                    throw error;
                }
            },
            ////if no responmse from server
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            }
        )
        .then(response => response.json())
        .then(response => alert(JSON.stringify(response)))
        .catch(error => {
            console.log('Send Messages', error.message);
            alert('Messages could not be send\nError' + error.message);
        });

}
