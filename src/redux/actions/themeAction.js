export const CHANGE_THEME = 'CHANGE_THEME';

export const changeTheme = (isDark) => {
  return {
    type: CHANGE_THEME,
    payload: isDark,
  };
};
