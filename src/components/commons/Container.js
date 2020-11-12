import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';

//redux
import { useSelector } from 'react-redux';

const Container = (props) => {
  //call theme
  const theme = useSelector((state) => state.theme);

  return (
    <SafeAreaView style={styles.screen(theme.colors.background)}>
      <StatusBar
        backgroundColor={theme.colors.thinBackground}
        barStyle={theme.colors.barStyle}
      />
      {props.children}
    </SafeAreaView>
  );
};

export default Container;

const styles = StyleSheet.create({
  screen: (bg) => ({
    flex: 1,
    backgroundColor: bg || 'white',
  }),
});
