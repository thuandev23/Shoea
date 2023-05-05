import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../Cart/cartReducer';
import Modal from 'react-native-modal';

const OrderDeliver = ({navigation}) => {
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [animationValue, setAnimationValue] = useState(new Animated.Value(0));
  const animateImage = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animateImage();
  }, []);

  const renderMap = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 15, color: 'red', marginTop: '-50%'}}>
          Chưa cấp quyền chạy Google Map
        </Text>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={{fontSize: 25, marginTop: '50%', color: 'green'}}>
            Done
          </Text>
        </TouchableOpacity>
        <Modal isVisible={isModalVisible}>
          <View style={styles.modal}>
            <Animated.View
              style={[
                styles.imageContainer,
                {transform: [{scale: animationValue}]},
              ]}>
              <Animated.Image
                style={[styles.image, {opacity: animationValue}]}
                source={require('../assets/img-logo/success.png')}
              />
            </Animated.View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                dispatch(clearCart());
                toggleModal();
                navigation.navigate('Tabs');
              }}>
              <Text style={styles.buttonText}>Successfully</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  };
  return <View style={{flex: 1}}>{renderMap()}</View>;
};

export default OrderDeliver;

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});
