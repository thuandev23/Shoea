import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
  Modal,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../store/cartReducer';
import ViewMoreText from 'react-native-view-more-text';
import {GestureResponderEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import firestore from '@react-native-firebase/firestore';

const SearchItem = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [productmain, setProducts] = useState([]);

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const snapshot = await firestore()
          .collection('Category')
          .doc('searchItem')
          .collection('products')
          .get();

        const productsData = snapshot.docs.map(doc => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ Firestore: ', error);
      }
    };
    fetchDataFromFirestore();
  }, []);

  const handleSearch = (name: React.SetStateAction<string>) => {
    setSearchText(name);
    const results = productmain.filter(item =>
      item.text.toLowerCase().includes(name.toLowerCase()),
    );
    setSearchResults(results);
  };
  const cart = useSelector(state => state.cart.cart);
  // console.log(cart);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null); // state để lưu thông tin sản phẩm được click
  const [modalVisible, setModalVisible] = useState(false); // state để điều khiển hiển thị modal

  const handleItemClick = (item: React.SetStateAction<null>) => {
    setSelectedProduct(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };

  const _renderViewMore = (
    onPress: ((event: GestureResponderEvent) => void) | undefined,
  ) => {
    return (
      <Text onPress={onPress} style={{color: 'black'}}>
        View more
      </Text>
    );
  };

  const _renderViewLess = (
    onPress: ((event: GestureResponderEvent) => void) | undefined,
  ) => {
    return (
      <Text onPress={onPress} style={{color: 'black'}}>
        View less
      </Text>
    );
  };

  const addItemToCart = (item: never) => {
    dispatch(addToCart(item));
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {/* Search */}
      <View style={styles.search}>
        <Image
          style={styles.btnSearch}
          source={require('../assets/img-logo/search_icon.png')}
          resizeMode="cover"
        />
        <TextInput
          style={styles.inputSearch}
          placeholder="Enter a keyworld you want search"
          onChangeText={handleSearch}
          value={searchText}
        />

        {searchText.length > 0 && (
          <View style={styles.search_flastlish}>
            <FlatList
              data={searchResults}
              pagingEnabled={true}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.content}
              renderItem={({item, index}) => (
                <View key={`${item.id}-${index}`}>
                  <TouchableOpacity
                    style={styles.itemContainer}
                    onPress={() => handleItemClick(item)}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        position: 'relative',
                        height: 70,
                        width: 70,
                        marginTop: 3,
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                      }}
                    />
                    <Text
                      style={{
                        position: 'absolute',
                        fontSize: 20,
                        color: 'black',
                        margin: 18,
                        marginLeft: 80,
                      }}>
                      {item.text}
                    </Text>
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
                  style={{paddingTop: 40, backgroundColor: '#fff'}}>
                  <Image
                    source={require('../assets/img-logo/checkerror.png')}
                    style={styles.close}
                  />
                </TouchableOpacity>

                <ScrollView>
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'center',
                      backgroundColor: '#fff',
                    }}>
                    <Image
                      source={{uri: selectedProduct.image}}
                      style={styles.img_main}
                    />
                    <Text style={styles.text_main}>{selectedProduct.text}</Text>
                    <View style={{marginLeft: 20}}>
                      <Text
                        style={{
                          marginRight: 250,
                          fontSize: 18,
                          color: 'black',
                        }}>
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
                      {cart.some(
                        (value: {id: any}) => value.id == selectedProduct.id,
                      ) ? (
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
        )}
      </View>
    </View>
  );
};

export default SearchItem;

const styles = StyleSheet.create({
  search: {
    flexDirection: 'row',
    width: '90%',
    height: 50,
    backgroundColor: '#ffffff',
    marginTop: 10,
    borderRadius: 15,
  },
  itemContainer: {
    // paddingVertical: 8,
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#2349',
  },
  btnSearch: {
    // margin:15,
    height: 20,
    width: 20,
    marginTop: 15,
    marginLeft: 17,
    position: 'absolute',
    aspectRatio: 1,
  },
  inputSearch: {
    marginLeft: 40,
    fontSize: 18,
  },
  search_flastlish: {
    position: 'absolute',
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    top: 60,
    borderRadius: 10,
  },
  content: {
    flexGrow: 1,
  },
  view_flatlist: {
    flex: 1,
    height: 220,
    width: 190,
    marginLeft: 10,
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
