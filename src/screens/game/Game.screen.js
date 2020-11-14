import React, {
  useEffect,
  useState,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Dimensions,
  View,
  Animated,
} from 'react-native';
import { useSelector } from 'react-redux';
//components
import Container from '../../components/commons/Container';
import CustomImage, {
  MemorizeCustomImage,
} from '../../components/commons/CustomImage';
import GameGuess from '../../components/game/GameGuess';
import GameHeader from '../../components/game/GameHeader';
import GameMessage from '../../components/game/GameMessage';

//util
import shuffle from '../../utils/shuffle';

const HEIGHT = Dimensions.get('screen').height;

const Game = () => {
  const theme = useSelector((state) => state.theme);

  const [listBreeds, setListBreeds] = useState([]);
  const [shuffleBreeds, setShuffleBreeds] = useState([]);
  const [imageUrl, setImageUrl] = useState(undefined);
  const [reload, setReload] = useState(true);
  const [messageText, setMessageText] = useState('Correct answer 😊');

  const translateMessage = useRef(new Animated.Value(HEIGHT)).current;

  useEffect(() => {
    const controller = new AbortController();
    getData(controller);
    getDataBreeds(controller);
    return () => {
      controller.abort();
    };
  }, [reload]);

  useEffect(() => {
    if (listBreeds.length > 0) {
      setShuffleBreeds(shuffle(listBreeds));
    }
  }, [listBreeds]);

  const getData = async (controller) => {
    await fetch('https://dog.ceo/api/breeds/image/random', {
      method: 'GET',
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message !== '') {
          setImageUrl(res.message);
          setListBreeds((prevState) =>
            prevState.length != 0
              ? [...prevState, res.message.split('/')[4].split('-')[0]]
              : [res.message.split('/')[4].split('-')[0]],
          );
        }
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          return;
        }
      });
  };

  const getDataBreeds = async (controller) => {
    await fetch('https://dog.ceo/api/breeds/list/all', {
      method: 'GET',
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message !== '') {
          const arrayTamp = Object.keys(res.message);
          const result = [
            arrayTamp[Math.floor(Math.random() * arrayTamp.length)],
            arrayTamp[Math.floor(Math.random() * arrayTamp.length)],
            arrayTamp[Math.floor(Math.random() * arrayTamp.length)],
            arrayTamp[Math.floor(Math.random() * arrayTamp.length)],
          ];
          setListBreeds((prevState) =>
            prevState.length != 0 ? [...prevState, ...result] : result,
          );
        }
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          return;
        }
      });
  };

  const onPressGameGuess = useCallback(
    (value) => {
      if (imageUrl !== undefined) {
        if (value == imageUrl.split('/')[4].split('-')[0]) {
          setMessageText('Correct answer 😊');
          messageUp();
        } else {
          setMessageText('Wrong answer 😭');
          messageUp();
        }
        setListBreeds([]);
        setImageUrl(undefined);
        setReload(!reload);
        setShuffleBreeds([]);
      }
    },
    [imageUrl],
  );

  const messageUp = () => {
    Animated.sequence([
      Animated.timing(translateMessage, {
        toValue: HEIGHT * 0.75,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(translateMessage, {
        toValue: HEIGHT,
        delay: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <Container>
      <ScrollView>
        <GameHeader>
          <CustomImage
            imageUrl={imageUrl}
            imageStyle={{ width: '100%', height: '100%' }}
          />
        </GameHeader>
        <View style={styles.scoreContainer}>
          <View style={styles.guessContainer}>
            <Text style={[styles.guessTitle, { color: theme.colors.primary }]}>
              Guess breed of dog:
            </Text>
            <View style={[styles.listBreedsContainer]}>
              {shuffleBreeds.length >= 5 &&
                shuffleBreeds.map((res, index) => (
                  <GameGuess
                    res={res}
                    key={index}
                    theme={theme}
                    onPress={onPressGameGuess}
                  />
                ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <Animated.View
        style={[
          styles.animated,
          {
            transform: [{ translateY: translateMessage }],
          },
        ]}>
        <GameMessage theme={theme} messageText={messageText} />
      </Animated.View>
    </Container>
  );
};

export const screenOptions = () => {
  const theme = useSelector((state) => state.theme);
  return {
    headerShown: true,
    headerTitle: 'Game',
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

export default Game;

const styles = StyleSheet.create({
  guessContainer: {
    paddingHorizontal: 10,
  },
  guessTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 5,
  },
  listBreedsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  animated: {
    position: 'absolute',
    alignSelf: 'center',
  },
});
