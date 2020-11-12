import React, { useEffect, useState, useCallback } from 'react';
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import Container from '../../components/commons/Container';

//redux
import { useSelector, useDispatch } from 'react-redux';

//actions
import { getDogs } from '../../redux/actions/dogAction';
import DogItem from '../../components/dog/DogItem';

const Dog = () => {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    //handle for fetching error
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(getDogs(signal));
    return () => {
      controller.abort();
    };
  }, []);

  const keyExtractor = useCallback((item, idx) => {
    return idx.toString();
  }, []);

  const renderItem = ({ item }) => {
    return <DogItem name={item} theme={theme} />;
  };

  return (
    <Container>
      <FlatList
        style={styles.flatList}
        keyExtractor={keyExtractor}
        data={dogs.data}
        renderItem={renderItem}
        maxToRenderPerBatch={4}
        disableVirtualization={true}
        contentContainerStyle={{ padding: 10 }}
        ListFooterComponent={
          dogs.isLoading && (
            <View style={{ paddingVertical: 10 }}>
              <ActivityIndicator size="large" color={theme.colors.primary} />
            </View>
          )
        }
      />
    </Container>
  );
};

export const screenOptions = () => {
  const theme = useSelector((state) => state.theme);
  return {
    headerShown: true,
    headerTitle: 'Dog',
    headerStyle: {
      backgroundColor: theme.colors.thinBackground,
    },
    headerTitleStyle: {
      color: theme.colors.primary,
      fontWeight: 'bold',
      fontSize: 20,
    },
    headerTintColor: theme.colors.primary,
  };
};

export default Dog;

const styles = StyleSheet.create({
  flatList: {
    paddingVertical: 20,
  },
});
