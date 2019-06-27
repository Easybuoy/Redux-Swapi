// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator
import axios from 'axios';

export const GET_PEOPLE = 'GET_PEOPLE';
export const GET_ERRORS = 'GET_ERRORS';
export const FETCHING = 'FETCHING';

export const getPeople = () => dispatch => {
    dispatch({type: FETCHING});
    axios.get('https://swapi.co/api/people/')
    .then(res => dispatch({type: GET_PEOPLE, payload: res.data.results}))
    .catch(err => dispatch({type: GET_ERRORS, payload: err.message}))
}