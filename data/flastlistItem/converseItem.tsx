import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const ConverseItem = () => {
  const productmain = [
    {
      text: 'Denim Fashion',
      star: '4.3',
      money: '230',
      image: 'https://bom.so/mm2kzw',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-denim-fashion-a02880c
    },
    {
      text: 'Lift Denim Fashion',
      star: '4.5',
      money: '475',
      image: 'https://bom.so/qYwcXh',
      //https://drake.vn/converse/converse-chuck-taylor-all-star-lift-denim-fashion-a03821c
    },
    {
      text: 'Crafted PatchWork',
      star: '4.5',
      money: '537',
      image: 'https://bom.so/1u2IMk',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-crafted-patchwork-a05195c
    },
    {
      text: 'CX Explore Hi',
      star: '4.4',
      money: '550',
      image: 'https://bom.so/XWZq94',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-cx-explore-hi-a02411c
    },
    {
      text: 'WorkWear Textile',
      star: '4.7',
      money: '580',
      image: 'https://bom.so/jl5g0O',
      //https://drake.vn/converse/converse-chuck-taylor-all-star-workwear-textile-a02875c
    },
    {
      text: '1970s Archive Paint',
      star: '4.3',
      money: '440',
      image: 'https://bom.so/rvMMlz',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-1970s-archive-paint-splatter-a01170c?sort=p.price&order=DESC
    },
    {
      text: '1970S Recycled Rpet Canvas',
      star: '4.2',
      money: '460',
      image: 'https://bom.so/A2mDdj',
      //https://drake.vn/converse/converse-chuck-taylor-all-star-1970s-recycled-rpet-canvas-172681c
    },
    {
      text: 'Chuck Taylor Roots',
      star: '4.8',
      money: '605',
      image: 'https://bom.so/L7tXYW',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-cx-explore-roots-170138c?sort=p.price&order=DESC
    },
  ];
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item: {
    text: string;
    star: string;
    money: string;
    image: string;
  }) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          textAlign: 'center',
          margin: 20,
          backgroundColor: '#2341',
          borderRadius: 20,
        }}>
        Converse Chuck Taylor All Start
      </Text>

      <FlatList
        data={productmain}
        numColumns={2}
        renderItem={({item, index}) => (
          <View
            style={{
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
            }}>
            <TouchableOpacity>
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

            {/* <Text>Cart Items: {JSON.stringify(cartItems)}</Text> */}

            <TouchableOpacity onPress={() => addToCart(item)}>
              <Image
                source={{
                  uri: 'https://yt3.ggpht.com/ytc/AL5GRJUyZLSndhcJ_YiOnY9DuRp0Fznif8p4gdeVceARdQ=s68-c-k-c0x00ffffff-no-rj',
                }}
                resizeMode="cover"
                style={{
                  height: 30,
                  width: 30,
                  position: 'absolute',
                  marginLeft: 150,
                }}
              />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default ConverseItem;

const styles = StyleSheet.create({
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
});
