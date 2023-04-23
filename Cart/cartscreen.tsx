import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from './cartReducer';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const cartLength = cart ? cart.length : 0;

  const handleRemoveFromCart = item => {
    Alert.alert(
      'Remove Item',
      'Are you sure you want to remove this item from your cart?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => dispatch(removeFromCart(item)),
          style: 'destructive',
        },
      ],
    );
  };
  const handleIncreFromCart = item => {
    dispatch(incrementQuantity(item));
  };

  const handleDecreFromCart = item => {
    dispatch(decrementQuantity(item));
  };
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.money * item.quantity,
    0,
  );

  const renderCartItem = ({item}) => {
    return (
      <View style={styles.viewProduct}>
        <Text style={styles.textProduct}>{item.text}</Text>
        <Image source={{uri: item.image}} style={styles.imageProduct} />
        <Text style={styles.moneyProduct}>$ {item.money}</Text>
        <View style={styles.viewIncreDecreDelete}>
          <View style={styles.IncreDecre}>
            <TouchableOpacity onPress={() => handleDecreFromCart(item)}>
              <Text style={styles.btnIncreDecre}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize: 20, padding: 5, color: 'black'}}>
              {item.quantity}
            </Text>
            <TouchableOpacity onPress={() => handleIncreFromCart(item)}>
              <Text style={styles.btnIncreDecre}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => handleRemoveFromCart(item)}>
            <Image
              source={require('../assets/img-logo/recycle-bin.png')}
              style={styles.imageRecycle}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderWidth: 0.5,
            height: 1,
            width: '105%',
            marginTop: 15,
          }}
        />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      {/* header_cart */}
      <View style={styles.viewHeaderCart}>
        <Text style={{fontSize: 30, color: 'black'}}>
          <Image
            source={require('../assets/img-logo/logo.jpg')}
            style={styles.imagelogo}
          />
          My Cart
        </Text>
        {/* Thêm chức năng sắp xếp theo tên tăng giảm, giá tiền tăng giảm */}
        <TouchableOpacity>
          <Image
            source={require('../assets/img-logo/option.png')}
            style={styles.imageSearch}
          />
        </TouchableOpacity>
      </View>

      {cartLength > 0 ? (
        <FlatList
          style={styles.viewItem}
          data={cart}
          renderItem={renderCartItem}
          keyExtractor={item => item.id.toString()} //? toString
        />
      ) : (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 100,
          }}>
          <Image
            source={require('../assets/img-logo/que.png')}
            style={{height: 150, width: 250, resizeMode: 'cover'}}
          />
          <Text style={styles.noProductText}>
            There is no product in the cart
          </Text>
        </View>
      )}
      <View style={styles.viewCheckOut}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            paddingLeft: 20,
            paddingTop: 20,
          }}>
          Total Price:
        </Text>
        <Text
          style={{
            fontSize: 30,
            color: 'black',
            paddingLeft: 20,
            paddingTop: 5,
          }}>
          $ {totalPrice}
        </Text>
        <TouchableOpacity
          style={styles.btnCheckOut}
          onPress={() => navigation.navigate('Check out')}>
          <Text style={{fontSize: 30, color: 'white'}}>Check Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  viewProduct: {
    marginTop: 20,
    marginLeft: 50,
    marginRight: 50,
    marginBottom: 20,
    // backgroundColor: '#2341',
    borderRadius: 20,
    shadowColor: '#3292D2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 80,
  },
  textProduct: {
    position: 'absolute',
    fontSize: 20,
    color: 'black',
    marginLeft: 110,
    width: '60%',
    marginTop: 10,
  },
  imageProduct: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  moneyProduct: {
    position: 'absolute',
    fontSize: 17,
    color: 'black',
    marginLeft: 110,
    width: '70%',
    marginTop: 70,
  },
  viewIncreDecreDelete: {
    flexDirection: 'row',
    position: 'absolute',
    marginLeft: 170,
    marginTop: 63,
    height: 35,
  },
  IncreDecre: {
    height: 35,
    width: 90,
    borderRadius: 15,
    backgroundColor: '#2343',
    flexDirection: 'row',
    marginLeft: 10,
  },
  btnIncreDecre: {
    fontSize: 25,
    marginLeft: 12,
    marginRight: 12,
  },
  imageRecycle: {
    height: 40,
    width: 40,
    marginLeft: 20,
  },
  viewHeaderCart: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
  },
  imagelogo: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  imageSearch: {
    height: 30,
    width: 30,
    marginLeft: 210,
    marginTop: 25,
  },
  viewItem: {
    height: '78%',
    width: '100%',
    position: 'absolute',
    marginTop: 70,
    marginBottom: 100,
  },
  viewCheckOut: {
    height: 95,
    width: '100%',
    marginTop: 566,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#2341',
  },
  btnCheckOut: {
    position: 'absolute',
    marginLeft: 200,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 30,
    backgroundColor: 'black',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  noProductText: {
    fontSize: 25,
    marginTop: 50,
  },
});
