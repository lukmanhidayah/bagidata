import React, { useState, useCallback } from 'react';
import { View, ActivityIndicator } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useSelector } from 'react-redux';

const CustomImage = ({ imageUrl, imageStyle }) => {
  const [isLoading, setIsLoading] = useState(true);
  const onLoadEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  const theme = useSelector((state) => state.theme);
  return (
    <View>
      <FastImage
        source={{ uri: imageUrl, priority: FastImage.priority.high }}
        style={[imageStyle]}
        onLoadEnd={onLoadEnd}
        resizeMode={FastImage.resizeMode.cover}
      />
      {isLoading && (
        <ActivityIndicator
          color={theme.colors.primary}
          size={60}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
        />
      )}
    </View>
  );
};

export default CustomImage;
