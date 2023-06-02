import {
  Alert,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ViewMoreText from 'react-native-view-more-text';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../Cart/cartReducer';
import firestore from '@react-native-firebase/firestore';

const ConverseItem = () => {
  const cart = useSelector(state => state.cart.cart);
  // console.log(cart);
  const dispatch = useDispatch();

  const [selectedProduct, setSelectedProduct] = useState(null); // state để lưu thông tin sản phẩm được click
  const [modalVisible, setModalVisible] = useState(false); // state để điều khiển hiển thị modal

  const handleItemClick = item => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  const _renderViewMore = onPress => {
    return (
      <Text onPress={onPress} style={{color: 'black'}}>
        View more
      </Text>
    );
  };

  const _renderViewLess = onPress => {
    return (
      <Text onPress={onPress} style={{color: 'black'}}>
        View less
      </Text>
    );
  };

  const addItemToCart = item => {
    dispatch(addToCart(item));
  };

  const removeItemFromCart = item => {
    dispatch(removeFromCart(item));
  };
  const increaseQuantity = item => {
    dispatch(incrementQuantity(item));
  };
  const decreaseQuantity = item => {
    dispatch(decrementQuantity(item));
  };
  const [Products, setProducts] = useState([]);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const snapshot = await firestore()
          .collection('Category')
          .doc('converse')
          .collection('products')
          .get();

        const productsData = snapshot.docs.map(doc => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Firestore: ', error);
      }
    };

    fetchDataFromFirestore();
    // pushProductsToFirestore('converse', productmain);
  }, []);

  // Hàm push hàng loạt sản phẩm lên Firestore
  const pushProductsToFirestore = async (category, products) => {
    try {
      for (const product of products) {
        const productRef = firestore()
          .collection('Category')
          .doc(category)
          .collection('products')
          .doc(product.id); // Sử dụng tên sản phẩm làm type_ID của document

        await productRef.set(product);
      }

      console.log('Hàng loạt sản phẩm đã được ghi vào Firestore');
    } catch (error) {
      console.error('Lỗi khi ghi hàng loạt sản phẩm vào Firestore:', error);
    }
  };
  return (
    <View style={{height: '100%', backgroundColor: 'white'}}>
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          margin: 20,
          backgroundColor: '#2341',
          borderRadius: 20,
        }}>
        Converse Taylor All Start
      </Text>

      <FlatList
        data={Products}
        numColumns={2}
        renderItem={({item, index}) => (
          <View key={`${item.id}-${index}`} style={styles.view_flatlist}>
            <TouchableOpacity onPress={() => handleItemClick(item)}>
              <Image
                source={{uri: item.image}}
                resizeMode="cover"
                style={styles.image}
              />
              <Text style={styles.text}>{item.text}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  position: 'absolute',
                  marginTop: 185,
                }}>
                <Text style={styles.start}>{item.star}</Text>
                <Text style={styles.money}>${item.money}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Item */}
      {selectedProduct && (
        <Modal
          visible={modalVisible}
          animationType="slide"
          onRequestClose={closeModal}>
          <TouchableOpacity
            onPress={closeModal}
            style={{paddingTop: 40, backgroundColor: '#2342'}}>
            <Image
              source={require('../database/checkerror.png')}
              style={styles.close}
            />
          </TouchableOpacity>

          <ScrollView>
            <View
              style={{flex: 1, alignItems: 'center', backgroundColor: '#2342'}}>
              <Image
                source={{uri: selectedProduct.image}}
                style={styles.img_main}
              />
              <Text style={styles.text_main}>{selectedProduct.text}</Text>
              <View style={{marginLeft: 20}}>
                <Text style={{marginRight: 250, fontSize: 18, color: 'black'}}>
                  Rate: {selectedProduct.star}
                </Text>

                <View style={{borderWidth: 0.4, width: 400, height: 1}} />

                <ViewMoreText
                  numberOfLines={3}
                  renderViewLess={_renderViewLess}
                  renderViewMore={_renderViewMore}>
                  <Text
                    style={{
                      marginRight: 250,
                      fontSize: 18,
                      marginLeft: 100,
                      color: 'black',
                    }}>
                    Description:{' '}
                  </Text>
                  <Text
                    style={{
                      marginRight: 250,
                      fontSize: 18,
                      marginLeft: 100,
                      color: '#179',
                    }}>
                    {'\n'}
                    {selectedProduct.description}
                  </Text>
                </ViewMoreText>

                <Text style={{fontSize: 18, color: 'black'}}>
                  ColourShown:{' '}
                </Text>
                <Text style={styles.alltext}>
                  {selectedProduct.ColourShown}
                </Text>
                <Text style={styles.alltext}>
                  Styles: {selectedProduct.type_ID}
                </Text>
              </View>

              <View style={styles.viewBtn}>
                <Text style={{fontSize: 15, padding: 5}}>
                  Total price: {'\n'}
                  <Text style={{fontSize: 20, color: 'black'}}>
                    $ {selectedProduct.money}
                  </Text>
                </Text>
                {cart.some(value => value.id == selectedProduct.id) ? (
                  <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={() =>
                      Alert.alert(
                        // 'Mù hả ? Không thấy chữ đã thêm thành công à, qua giỏ hàng mà xem',
                        'The product has been added to cart',
                      )
                    }>
                    <Text
                      style={{
                        fontSize: 20,
                        textAlign: 'center',
                        color: '#fff',
                      }}>
                      Add your Cart
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={styles.btnAdd}
                    onPress={() => addItemToCart(selectedProduct)}
                    onPressIn={() => Alert.alert('Added product')}>
                    <Text
                      style={{
                        fontSize: 20,
                        textAlign: 'center',
                        color: '#fff',
                      }}>
                      Add your Cart
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </ScrollView>
        </Modal>
      )}
    </View>
  );
};

export default ConverseItem;

const styles = StyleSheet.create({
  view_flatlist: {
    flex: 1,
    height: 220,
    width: 190,
    marginLeft: 20,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    borderRadius: 20,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 5,
    backgroundColor: '#fff',
  },
  image: {
    height: 130,
    width: '100%',
    // borderRadius:20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'pink',
    marginBottom: 10,
  },

  text: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  start: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  money: {
    fontSize: 20,
    color: 'black',
    marginLeft: 50,
    fontWeight: 'bold',
  },
  close: {
    height: 40,
    width: 40,
    position: 'absolute',
    marginLeft: 350,
  },
  alltext: {
    fontSize: 18,
    color: '#179',
  },
  img_main: {
    height: 350,
    width: '90%',
    borderRadius: 10,
    marginTop: 30,
  },
  text_main: {
    fontSize: 35,
    textAlign: 'center',
    margin: 15,
    color: 'black',
  },
  viewBtn: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 10,
    borderRadius: 15,
    width: '90%',
  },
  btnAdd: {
    backgroundColor: '#2349',
    padding: 15,
    marginLeft: 50,
    borderRadius: 23,
    width: '60%',
  },
});
