export const ADD_LIKED = 'ADD_LIKED';
export const REMOVE_LIKED = 'REMOVE_LIKED';

// payload : {index, value}
export const addLiked = (payload) => {
  return {
    type: ADD_LIKED,
    payload: payload,
  };
};

//payload = index
export const removeLiked = (payload) => {
  return {
    type: REMOVE_LIKED,
    payload: payload,
  };
};
