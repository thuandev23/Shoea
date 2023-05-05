import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const AddressScreen = ({navigation}) => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Home',
      address: '61480 Sunbrook Park, PC 5679',
      isDefault: true,
    },
    {
      id: 2,
      name: 'Office',
      address: '123 Main St, Suite 100',
      isDefault: false,
    },
    {
      id: 3,
      name: 'Apartment',
      address: '218333 Clyde gallagher',
      isDefault: false,
    },
    {
      id: 4,
      name: 'ParentsHouse',
      address: '5259 Blue Bill Park',
      isDefault: false,
    },
    {
      id: 5,
      name: 'TownSquare',
      address: '5357 Summerhouse, Suite 100',
      isDefault: false,
    },
  ]);

  const handleSelectAddress = id => {
    const selectedAddress = addresses.find(address => address.id === id);

    const updatedAddresses = addresses.map(address => {
      if (address.id === id) {
        address.isDefault = true;
        navigation.navigate('Check out', {address: selectedAddress});
      } else {
        address.isDefault = false;
      }
      return address;
    });
    setAddresses(updatedAddresses);
  };
  // const handleEditAddress = id => {
  //   const addressToEdit = addresses.find(address => address.id === id);
  //   navigation.navigate('Edit Address', { address: addressToEdit });
  // };
  return (
    <View>
      {addresses.map(address => (
        <View key={address.id} style={styles.btn_address}>
          <TouchableOpacity onPress={() => handleSelectAddress(address.id)}>
            <View style={styles.address}>
              <Image
                source={require('../assets/img-logo/address.png')}
                style={styles.imgAddress}
              />
              <View style={styles.textbox}>
                <Text style={styles.family}>
                  {address.name}{' '}
                  {address.isDefault && (
                    <View>
                      <View style={styles.inline}>
                        <Text style={styles.inlneText}>Default</Text>
                      </View>
                    </View>
                  )}
                </Text>
                <Text>{address.address}</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert('Bạn muốn thay đổi địa chỉ ?')}>
            <Image
              source={require('../assets/img-logo/Edit.png')}
              style={styles.imgChangeAddress}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default AddressScreen;

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
  address: {
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
});
