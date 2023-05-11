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
import React, {useState} from 'react';
import ViewMoreText from 'react-native-view-more-text';
import {useDispatch, useSelector} from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../Cart/cartReducer';
const ConverseItem = () => {
  const cart = useSelector(state => state.cart.cart);
  // console.log(cart);
  const dispatch = useDispatch();
  const productmain = [
    {
      id: '24',

      text: 'Denim Fashion',
      star: '4.3',
      money: '230',
      image: 'https://bom.so/mm2kzw',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-denim-fashion-a02880c
    },
    {
      id: '25',

      text: 'Lift Denim Fashion',
      star: '4.5',
      money: '475',
      image: 'https://bom.so/qYwcXh',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      //https://drake.vn/converse/converse-chuck-taylor-all-star-lift-denim-fashion-a03821c
    },
    {
      id: '26',

      text: 'Crafted PatchWork',
      star: '4.5',
      money: '537',
      image: 'https://bom.so/1u2IMk',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-crafted-patchwork-a05195c
    },
    {
      id: '27',

      text: 'CX Explore Hi',
      star: '4.4',
      money: '550',
      image: 'https://bom.so/XWZq94',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-cx-explore-hi-a02411c
    },
    {
      id: '28',

      text: 'WorkWear Textile',
      star: '4.7',
      money: '580',
      image: 'https://bom.so/jl5g0O',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      //https://drake.vn/converse/converse-chuck-taylor-all-star-workwear-textile-a02875c
    },
    {
      id: '29',

      text: '1970s Archive Paint',
      star: '4.3',
      money: '440',
      image: 'https://bom.so/rvMMlz',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-1970s-archive-paint-splatter-a01170c?sort=p.price&order=DESC
    },
    {
      id: '30',

      text: '1970S Recycled Rpet Canvas',
      star: '4.2',
      money: '460',
      image: 'https://bom.so/A2mDdj',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      //https://drake.vn/converse/converse-chuck-taylor-all-star-1970s-recycled-rpet-canvas-172681c
    },
    {
      id: '31',

      text: 'Chuck Taylor Roots',
      star: '4.8',
      money: '605',
      image: 'https://bom.so/L7tXYW',
      description:
        'From streets to parks to trails, build up the miles in these city-to-adventure shoes. Designed and tested in the rugged Pacific Northwest, the mixed-material upper pairs durability with easy styling. A rubber outsole with a heavy-duty, tuned lug pattern grips slick and rocky terrain, so you can go up, down, through and around.',
      ColourShown: 'Hemp/Dark Russet/Total Orange/Coral Chalk',
      ID: 'DM8019-201',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-cx-explore-roots-170138c?sort=p.price&order=DESC
    },
  ];

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

  return (
    <View>
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
        data={productmain}
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

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 9,
  },
});
