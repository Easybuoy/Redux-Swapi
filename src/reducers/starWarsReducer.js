import { GET_PEOPLE, FETCHING, GET_ERRORS } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case GET_PEOPLE:
      return {
        ...state,
        characters: action.payload,
        fetching: false
      };
      case FETCHING:
      return {
        ...state,
        fetching: true
      };
      case GET_ERRORS:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
