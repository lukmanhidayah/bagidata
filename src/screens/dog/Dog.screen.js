import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, FlatList, Dimensions } from 'react-native';
import Container from '../../components/commons/Container';

//redux
import { useSelector, useDispatch } from 'react-redux';

//actions
import { getDogs } from '../../redux/actions/dogAction';
import DogItem from '../../components/dog/DogItem';

const Dog = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const dogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  const keyExtractor = useCallback((item, idx) => {
    return idx.toString();
  }, []);

  const renderItem = ({ item }) => {
    return <DogItem name={item} />;
  };

  return (
    <Container>
      <FlatList
        keyExtractor={keyExtractor}
        data={dogs.data}
        renderItem={renderItem}
        maxToRenderPerBatch={4}
        disableVirtualization={true}
        numColumns={2}
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

const styles = StyleSheet.create({});
