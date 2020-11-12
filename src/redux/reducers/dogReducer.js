import { SET_DOGS, SET_ERROR, SET_LOADING } from '../actions/dogAction';

const INITIAL_STATE = {
  isError: false,
  isLoading: true,
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_DOGS:
      return {
        ...state,
        data: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
