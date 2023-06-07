import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Animated} from 'react-native';
import {Text} from 'react-native-elements';
import LoadingScreen from './loadding1';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
const LoadingOrder = () => {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      navigation.navigate('Deliver');
    }, 5000); // thời gian chờ
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('../assets/lottie/23211-receive-order.json')}
          style={{width: 500, height: 500}}
          autoPlay
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
