import { CHANGE_THEME } from '../actions/themeAction';
import { DEFAULT_COLOR, DARK_COLOR } from '../../constants/colors';

const INITIAL_STATE = {
  isDark: false,
  colors: DEFAULT_COLOR,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {
        ...state,
        isDark: action.payload,
        colors: action.payload ? DARK_COLOR : DEFAULT_COLOR,
      };
    default:
      return state;
  }
};
