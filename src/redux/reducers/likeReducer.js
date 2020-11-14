import { ADD_LIKED, REMOVE_LIKED, RESET } from '../actions/likeAction';

const INITIAL_STATE = {
  data: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_LIKED:
      let tampLiked = state.data;
      tampLiked[action.payload.index] = action.payload.value;
      return {
        ...state,
        data: tampLiked,
      };
    case REMOVE_LIKED:
      let deleteTamp = { ...state.data };
      delete deleteTamp[action.payload];
      return {
        ...state,
        data: deleteTamp,
      };
    case RESET:
      return {
        data: [],
      };
    default:
      return state;
  }
};
