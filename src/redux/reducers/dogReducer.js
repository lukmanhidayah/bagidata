import {
  SET_DOGS,
  SET_ERROR,
  SET_LOADING,
  REQUEST_DATA,
  RESET,
} from '../actions/dogAction';

const INITIAL_STATE = {
  isError: false,
  isLoading: true,
  data: [],
  controller: new AbortController(),
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
    case REQUEST_DATA:
      return {
        ...state,
        controller: action.payload,
      };
    case RESET:
      return INITIAL_STATE;
    default:
      return state;
  }
};
