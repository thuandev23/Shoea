import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
const PumaItem = () => {
  const productmain = [
    {
      text: 'RS-X Reinvention',
      star: '4.3',
      money: '230',
      image: 'https://bom.so/oQYfwG',
      //https://us.puma.com/us/en/pd/rs-x-reinvention-sneakers/369579?search=true&swatch=14
    },
    {
      text: 'Cali Womens',
      star: '4.5',
      money: '475',
      image: 'https://bom.so/hW2N44',
      //https://us.puma.com/us/en/pd/cali-womens-sneakers/369155?search=true&swatch=04
    },
    {
      text: 'GV Speacial',
      star: '4.5',
      money: '537',
      image: 'https://bom.so/6Ue85U',
      // https://us.puma.com/us/en/pd/gv-special%2B-sneakers/366613?search=true&swatch=07
    },
    {
      text: 'Clyde Core Foil Mens',
      star: '4.4',
      money: '550',
      image: 'https://bom.so/Csy7vV',
      //https://us.puma.com/us/en/pd/clyde-core-foil-mens-sneakers/364669?search=true&swatch=04
    },
    {
      text: 'Califormia Casual',
      star: '4.7',
      money: '580',
      image: 'https://bom.so/5CkhoR',
      //https://us.puma.com/us/en/pd/california-casual-mens-sneakers/366608?search=true&swatch=05
    },
    {
      text: 'Super Liga G Retro',
      star: '4.3',
      money: '440',
      image: 'https://bom.so/PDI29B',
      //https://us.puma.com/us/en/pd/super-liga-og-retro-sneakers/356999?search=true&swatch=19
    },
    {
      text: 'Smash v2',
      star: '4.2',
      money: '460',
      image: 'https://bom.so/a0d5uL',
      //https://us.puma.com/us/en/pd/puma-smash-v2-sneakers/364989?search=true&swatch=15
    },
    {
      text: 'Reboound LayUp Mid',
      star: '4.8',
      money: '605',
      image: 'https://bom.so/b7QhZu',
      // https://us.puma.com/us/en/pd/puma-rebound-layup-mid-sneakers-big-kids/370486?search=true&swatch=02
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
        Puma Sneakers
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

export default PumaItem;

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
