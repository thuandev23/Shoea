import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Animated} from 'react-native';
import {Text} from 'react-native-elements';
import GIF from 'react-native-gif';
import LoadingScreen from '../Loading/loadding';
const LoadingOrder = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Deliver');
    }, 10000); // thời gian chờ
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <GIF
          source={require('../assets/img-logo/Vietnam_stickman-loading.gif')}
          style={{width: 400, height: 400}}
        />
        <Text style={{fontSize: 20, color: 'white'}}>
          Waiting to accept your order !
        </Text>
        <LoadingScreen />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
});

export default LoadingOrder;
