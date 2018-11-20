import {API_BASE_URL} from '../config';

export const ADD_PRACTICE = 'ADD_PRACTICE';
export const practice = (date, timePracticed, scales, otherMusic) => ({
    type: ADD_PRACTICE,
    date,
    timePracticed,
    scales,
    otherMusic
});

export const FETCH_PRACTICE_SUCCESS = 'FETCH_PRACTICE_SUCCESS';
export const fetchPracticeSuccess = (practice) => ({
    type: FETCH_PRACTICE_SUCCESS,
    practice
});

export const fetchPractice = () => dispatch => {
    fetch(`${API_BASE_URL}/practice`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(practice => {
            dispatch(fetchPracticeSuccess(practice));
        });
};