import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Easing,
  Dimensions,
  Alert,
  ScrollView,
  Pressable,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearCart} from '../store/cartReducer';
import {setOrderedProducts} from '../store/orderReducer';
import Modal from 'react-native-modal';
import {YOUR_ACCESSTOKEN} from '../../locales/environments';
import LottieView from 'lottie-react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';

const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

MapLibreGL.setAccessToken(YOUR_ACCESSTOKEN);

const DeliverScreen = ({navigation}) => {
  {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart);
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

    // map

    return (
      <View style={styles.container}>
        <MapLibreGL.MapView
          style={styles.container}
          logoEnabled={false}
          styleURL="https://demotiles.maplibre.org/style.json">
          <MapLibreGL.UserLocation androidRenderMode="gps" />
        </MapLibreGL.MapView>

        <View style={styles.btn}>
          <TouchableOpacity onPress={toggleModal} style={styles.btndone}>
            <Text style={{fontSize: 25, color: '#fff', paddingTop: 5}}>
              Done
            </Text>
          </TouchableOpacity>
          <Modal isVisible={isModalVisible}>
            <View style={styles.modal}>
              <View style={styles.imageContainer}>
                <LottieView
                  style={styles.image}
                  source={require('../assets/lottie/101796-delivery-bike.json')}
                  autoPlay
                />
              </View>
              <TouchableOpacity
                style={styles.buttondone}
                onPress={() => {
                  // // Thêm sản phẩm vào danh sách đã mua
                  // dispatch(setOrderedProducts(cart));
                  // dispatch(clearCart());
                  toggleModal();
                  // navigation.navigate('Tabs');
                }}>
                <Text style={styles.buttonTextdone}>Successfully</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </View>
      </View>
    );
  }
};

export default DeliverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userIcon: {
    width: 30,
    height: 30,
  },
  btn: {
    position: 'absolute',
    marginTop: h * 0.8,
    marginLeft: w * 0.2,
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  buttondone: {
    backgroundColor: 'green',
    borderRadius: 20,
    padding: 10,
  },
  buttonTextdone: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  btndone: {
    paddingLeft: 100,
    paddingRight: 100,
    height: 50,
    backgroundColor: '#609AFF',
    borderRadius: 15,
  },
});
