import {View, Text, Button, FlatList} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {decrementQuantity, incrementQuantity} from './cartReducer';

const CartScreen = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.selectedProduct);

  const handleIncreFromCart = item => {
    dispatch(incrementQuantity(item));
  };

  const handleDecreFromCart = item => {
    dispatch(decrementQuantity(item));
  };

  const renderCartItem = ({selectedProduct}) => {
    return (
      <View>
        <Text>{selectedProduct.text}</Text>
        <Text>{selectedProduct.money}</Text>
        <Text>{selectedProduct.type_ID}</Text>
        <Button
          title="Plus"
          onPress={() => handleIncreFromCart(selectedProduct.id)}
        />
        <Button
          title="Remove"
          onPress={() => handleDecreFromCart(selectedProduct.id)}
        />
      </View>
    );
  };

  return (
    <View style={{backgroundColor: '#2349', flex: 1}}>
      <FlatList
        style={{
          height: '60%',
          width: '100%',
          backgroundColor: 'white',
          position: 'absolute',
          marginTop: 100,
        }}
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default CartScreen;
