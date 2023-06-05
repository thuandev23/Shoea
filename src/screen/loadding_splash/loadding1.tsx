import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Easing, Text, Image} from 'react-native';

const LoadingScreen = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{rotate: spin}],
            backgroundColor: '#ffffffc0',
          },
        ]}>
        {/* <Image
             style={styles.image}
            source={require('../assets/img-logo/meme2.jpg')}/> */}
      </Animated.View>
      {/* <Text style={styles.text}>LOADING ... </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 70,
    height: 70,
    borderRadius: 125,
    borderWidth: 5,
    borderColor: '#f2f2f2',
    borderStyle: 'solid',
    borderTopColor: '#4CAF50',
  },
  image: {
    height: 240,
    width: 240,
    borderRadius: 120,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
export default LoadingScreen;
