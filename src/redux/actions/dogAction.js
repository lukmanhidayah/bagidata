export const SET_DOGS = 'SET_DOGS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';

const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};

const setError = (isError) => {
  return {
    type: SET_ERROR,
    payload: isError,
  };
};

const setDogs = (data) => {
  return {
    type: SET_DOGS,
    payload: data,
  };
};

export const getDogs = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));

      await fetch('https://dog.ceo/api/breeds/list', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(setDogs(res.message));
          dispatch(setLoading(false));
        })
        .catch((err) => {
          if (err) {
            dispatch({ type: SET_ERROR, payload: true });
          }
        });
    } catch (err) {
      if (err) {
        dispatch(setError(true));
      }
    }
  };
};
