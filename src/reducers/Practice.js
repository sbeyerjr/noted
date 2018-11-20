import { ADD_PRACTICE } from '../actions/PracticeActions';

const initialState = {
  date: null,
  timePracticed: null,
  scales: false,
  otherMusic: null
};

export default function reducer(state = initialState, action) {
  if (action.type === ADD_PRACTICE) {
    return Object.assign({}, state, {
      date: action.date,
      timePracticed: action.timePracticed,
      scales: action.scales,
      otherMusic: action.otherMusic
    });
  }
  return state;
}
