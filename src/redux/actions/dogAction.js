export const SET_DOGS = 'SET_DOGS';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const REQUEST_DATA = 'REQUEST_DATA';
export const RESET = 'RESET';

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

const requestData = (controller) => {
  return {
    type: REQUEST_DATA,
    payload: controller,
  };
};

export const getDogs = () => {
  return async (dispatch, getState) => {
    try {
      const controller = getState().dogs.controller;
      controller.abort();

      dispatch(setError(false));
      dispatch(setLoading(true));

      const newController = new AbortController();
      dispatch(requestData(newController));
      await fetch('https://dog.ceo/api/breeds/list', {
        method: 'GET',
        signal: newController.signal,
      })
        .then((res) => res.json())
        .then((res) => {
          dispatch(setDogs(res.message));
          dispatch(setLoading(false));
        })
        .catch((err) => {
          console.log(err);
          if (err.name === 'AbortError') {
            return;
          }
          dispatch(setError(true));
        });
    } catch (err) {
      console.log(err);
      if (err.name === 'AbortError') {
        return;
      }
      dispatch(setError(true));
    }
  };
};
