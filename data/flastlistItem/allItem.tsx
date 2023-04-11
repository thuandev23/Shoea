import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const AllItemScreen = () => {
  const productmain = [
    {
      text: 'Nike ACG Lowcate ',
      star: '4.3',
      money: '425',
      image: 'https://bom.so/97BrcX',
      // https://www.nike.com/vn/t/acg-lowcate-shoes-HjWrQ6/DM8019-201
    },
    {
      text: 'Cell Divide Men Running Shoes',
      star: '4.5',
      money: '475',
      image: 'https://bom.so/XJVgMf',
      //https://us.puma.com/us/en/pd/cell-divide-mens-running-shoes/376296?search=true&swatch=08
    },
    {
      text: 'Nike Vaporfly 3 ',
      star: '4.5',
      money: '537',
      image: 'https://bom.so/Ik2noZ',
      // https://www.nike.com/vn/t/vaporfly-3-road-racing-shoes-wdmHPR/DV4130-600
    },
    {
      text: 'ADIZERO ADIOS PRO 2.0',
      star: '4.4',
      money: '550',
      image: 'https://bom.so/KOSs3E',
      // https://www.adidas.com.vn/vi/gi%C3%A0y-adizero-adios-pro-2.0/FZ2477.html
    },
    {
      text: 'Enzo 2 Mens Training Shoes',
      star: '4.7',
      money: '580',
      image: 'https://bom.so/HLxlym',
      // https://us.puma.com/us/en/pd/enzo-2-mens-training-shoes/193249?search=true&swatch=05
    },
    {
      text: 'Converse 1970s Archive Paint',
      star: '4.3',
      money: '440',
      image: 'https://bom.so/rvMMlz',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-1970s-archive-paint-splatter-a01170c?sort=p.price&order=DESC
    },
    {
      text: 'ZG21 MOTION PRIMEGREEN BOA',
      star: '4.2',
      money: '460',
      image: 'https://bom.so/Iwzegv',
      //https://www.adidas.com.vn/vi/giay-golf-co-lung-zg21-motion-primegreen-boa/G58741.html
    },
    {
      text: 'Converse Chuck Taylor Roots',
      star: '4.8',
      money: '605',
      image: 'https://bom.so/L7tXYW',
      // https://drake.vn/converse/converse-chuck-taylor-all-star-cx-explore-roots-170138c?sort=p.price&order=DESC
    },
  ];

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
        All Product
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

          </View>
        )}
      />
    </View>
  );
};

export default AllItemScreen;

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
