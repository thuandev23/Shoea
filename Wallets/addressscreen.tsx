import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const AddressScreen = () => {
  return (
    <View>
      <View style={styles.btn_address}>
        <TouchableOpacity onPress={() => Alert.alert('check')}>
          <Image
            source={require('../assets/img-logo/address.png')}
            style={styles.imgAddress}
          />
          <Text style={styles.texthome}>Home</Text>
          <Text style={styles.textaddress}>Address</Text>
          <Image
            source={require('../assets/img-logo/Edit.png')}
            style={styles.imgChangeAddress}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  btn_address: {},
  imgAddress: {},
  texthome: {},
  textaddress: {},
  imgChangeAddress: {},
});
