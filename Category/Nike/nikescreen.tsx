import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Alert } from 'react-native';

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); // state để lưu thông tin sản phẩm được click
  const [modalVisible, setModalVisible] = useState(false); // state để điều khiển hiển thị modal

  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const renderProduct = ({ item }) => (
    <TouchableOpacity onPress={() => { setSelectedProduct(item); setModalVisible(true); }}>
      <View>
        <Text>{item.name}</Text>
        <Text>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
const addToCart = (product) => {
  Alert.alert('Đã thêm')
};
  return (
    <View style = {{marginTop:100}}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id.toString()}
      />
       {selectedProduct && (
      <Modal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View>
          <Text>{selectedProduct.name}</Text>
          <Text>{selectedProduct.price}</Text>
          <TouchableOpacity onPress={() => addToCart(selectedProduct)}>
            <Text>Add to cart</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    )}
    </View>
  );
};

export default ProductList;
function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

