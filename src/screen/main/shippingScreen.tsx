import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedShippingId} from '../store/shippingReducer';

const Shipping = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [selectedShipId, setSelectedShipId] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDataFromFirestore = async () => {
      try {
        const snapshot = await firestore().collection('shippings').get();

        const productsData = snapshot.docs.map(doc => doc.data());
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchDataFromFirestore();
  }, []);

  const handleSelectAddress = (shippingData: never) => {
    setSelectedShipId(shippingData.id);
    dispatch(setSelectedShippingId(shippingData));
  };

  return (
    <View>
      {products.map(shipping => (
        <TouchableWithoutFeedback
          key={shipping.id}
          onPress={() => handleSelectAddress(shipping)}>
          <View style={styles.btn_address}>
            <View style={styles.shipping}>
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
                    onPress={() => handleSelectAddress(shipping)}
                    color="#00A705"
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
