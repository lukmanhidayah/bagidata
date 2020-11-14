export const CHANGE_THEME = 'CHANGE_THEME';
export const RESET = 'RESET';

export const changeTheme = (isDark) => {
  return {
    type: CHANGE_THEME,
    payload: isDark,
  };
};


export const resetTheme= () => {
  return {
    type: RESET,
  };
};
