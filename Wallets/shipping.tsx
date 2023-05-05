import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';

const Shipping = ({navigation}) => {
  const [ship, setShip] = useState([
    {
      id: 1,
      nameship: 'Economy',
      shipping: 'Estimated Arrival',
      moneysafe: '10',
      image: '../assets/img-logo/economy.png',
      isDefault: true,
    },
    {
      id: 2,
      nameship: 'Regular',
      shipping: 'Estimated Arrival',
      moneysafe: '15',
      image: '../assets/img-logo/regular.png',

      isDefault: false,
    },
    {
      id: 3,
      nameship: 'Cargo',
      shipping: 'Estimated Arrival',
      moneysafe: '20',
      image: '../assets/img-logo/cargo.png',

      isDefault: false,
    },
    {
      id: 4,
      nameship: 'Express',
      shipping: 'Estimated Arrival',
      moneysafe: '30',
      image: '../assets/img-logo/express.png',

      isDefault: false,
    },
  ]);
  const [selectedShipId, setSelectedShipId] = useState(1);

  const handleSelectAddress = id => {
    const selectShip = ship.find(shipping => shipping.id === id);

    const updatedShip = ship.map(shipping => {
      if (shipping.id === id) {
        shipping.isDefault = true;
        // navigation.goBack('Check out');
      } else {
        shipping.isDefault = false;
      }
      return shipping;
    });
    setShip(updatedShip);
    setSelectedShipId(id);
  };

  return (
    <View>
      {ship.map(shipping => (
        <TouchableWithoutFeedback
          key={shipping.id}
          onPress={() => handleSelectAddress(shipping.id)}>
          <View style={styles.btn_address}>
            <View style={styles.shipping}>
              {/* <Image source={{uri: shipping.image}} style={styles.imgAddress} /> */}
              <View style={styles.textbox}>
                <Text style={styles.family}>{shipping.nameship}</Text>
                <Text style={styles.money}>${shipping.moneysafe}</Text>
                <Text>{shipping.shipping}</Text>
                <View style={styles.radiobtn}>
                  <RadioButton
                    value={shipping.id}
                    status={
                      selectedShipId === shipping.id ? 'checked' : 'unchecked'
                    }
                    onPress={() => handleSelectAddress(shipping.id)}
                    color="#6200EE"
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default Shipping;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  btn_address: {
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
  },
  shipping: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 85,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  imgAddress: {
    padding: 5,
    width: 35,
    height: 35,
    backgroundColor: '#2344',
    borderRadius: 5,
  },

  imgChangeAddress: {
    position: 'absolute',
    width: 30,
    height: 30,
    marginLeft: 330,
    marginTop: -60,
  },
  textbox: {
    width: '100%',
    height: 45,
    marginLeft: 10,
  },
  inline: {
    position: 'absolute',
    padding: 4,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 140,
  },
  inlneText: {
    fontSize: 15,
  },
  family: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },

  defaultText: {
    fontSize: 13,
    color: 'black',
    backgroundColor: '#E5E5E5',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 15,
  },
  money: {
    position: 'absolute',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginLeft: 220,
  },
  radiobtn: {
    position: 'absolute',
    marginLeft: 260,
    marginTop: -5,
  },
});
