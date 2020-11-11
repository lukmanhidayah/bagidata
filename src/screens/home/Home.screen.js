import React, { useCallback } from 'react';
import { StyleSheet, StatusBar, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/commons/CustomHeader';
import HomeList from '../../components/home/HomeList';
import HOME_DATA from '../../data/HomeData';

const Home = (props) => {
  // useEffect(() => {
  //   console.log(HOME_DATA);
  // }, []);
  const keyExtractor = useCallback((data) => {
    return data.id.toString();
  }, []);

  const renderItem = useCallback(({ item, index }) => {
    return <HomeList data={item} navigation={props.navigation} />;
  }, []);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar backgroundColor="#FEFEFE" barStyle="dark-content" />
      <View style={styles.screen}>
        <CustomHeader title="Dog's App" titleStyle={{ alignSelf: 'center' }} />
        <FlatList
          style={styles.flatList}
          keyExtractor={keyExtractor}
          data={HOME_DATA}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatList: {
    flex: 1,
    padding: 10,
    paddingVertical: 20
  },
});
