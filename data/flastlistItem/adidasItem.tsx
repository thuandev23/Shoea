import {
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const AdidasItem = () => {
  const productmain = [
    {
      text: 'Advantage',
      star: '4.3',
      money: '230',
      image: 'https://bom.so/JRiyWu',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-advantage/GZ5300.html
    },
    {
      text: 'Ultraboots 4.0 DNA',
      star: '4.5',
      money: '475',
      image: 'https://bom.so/r2H8gM',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-ultraboost-4.0-dna/FY9120.html
    },
    {
      text: 'Adizero Adios Pro 2.0',
      star: '4.5',
      money: '537',
      image: 'https://bom.so/9QhgQv',
      // https://www.adidas.com.vn/vi/gi%C3%A0y-adizero-adios-pro-2.0/FZ2477.html
    },
    {
      text: 'Racer TR21',
      star: '4.4',
      money: '550',
      image: 'https://bom.so/NA2cj8',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-racer-tr21/H00654.html
    },
    {
      text: 'Supernova',
      star: '4.7',
      money: '580',
      image: 'https://bom.so/elx7zh',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-supernova/S42722.html
    },
    {
      text: 'ZG21 Motion Primegreen BOA',
      star: '4.3',
      money: '440',
      image: 'https://bom.so/OiIxeH',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-golf-c%E1%BB%95-l%E1%BB%ADng-zg21-motion-primegreen-boa/G58741.html
    },
    {
      text: 'Continental 80',
      star: '4.2',
      money: '460',
      image: 'https://bom.so/bZsihr',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-continental-80/G27706.html
    },
    {
      text: 'Adifom SLTN',
      star: '4.8',
      money: '605',
      image: 'https://bom.so/cMMxkn',
      //https://www.adidas.com.vn/vi/gi%C3%A0y-adifom-sltn/HP6481.html
    },
  ];
 
  return (
    <View >
      <Text
        style={{
          fontSize: 30,
          textAlign: 'center',
          margin: 20,
          backgroundColor: '#2341',
          borderRadius: 20,
        }}>
          Adidas
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
            <TouchableOpacity onPress={()=> Alert.alert("tôi đã clcik")}>
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

export default AdidasItem;

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: '100%',
    // borderRadius:20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'pink',
    marginBottom: 10,
    paddingTop:10,
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
