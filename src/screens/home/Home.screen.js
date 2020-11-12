import React, { useCallback } from 'react';
import { StyleSheet, FlatList } from 'react-native';

//redux
import { useSelector } from 'react-redux';

//component
import CustomHeader from '../../components/commons/CustomHeader';
import HomeList from '../../components/home/HomeList';
import HOME_DATA from '../../data/HomeData';
import Container from '../../components/commons/Container';

const Home = (props) => {
  const theme = useSelector((state) => state.theme);

  const keyExtractor = useCallback((data) => {
    return data.id.toString();
  }, []);

  const renderItem = useCallback(({ item, index }) => {
    return <HomeList data={item} navigation={props.navigation} />;
  }, []);

  return (
    <Container>
      <CustomHeader
        title="Doggy App"
        titleStyle={styles.headerTitle(theme.colors.primary)}
        headerStyle={styles.header(theme.colors.thinBackground)}
      />
      <FlatList
        style={styles.flatList}
        keyExtractor={keyExtractor}
        data={HOME_DATA}
        renderItem={renderItem}
      />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: (bg) => ({
    backgroundColor: bg || 'white',
  }),
  headerTitle: (color) => ({
    alignSelf: 'center',
    color: color,
  }),
  flatList: {
    flex: 1,
    padding: 10,
    paddingVertical: 20,
  },
});
