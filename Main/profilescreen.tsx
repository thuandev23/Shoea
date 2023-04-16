import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
const ProfileScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <View style={styles.viewHeaderCart}>
        <Image
          source={require('../assets/img-logo/logo.jpg')}
          style={styles.imagelogo}
        />
        <Text
          style={{fontSize: 30, color: 'black', marginLeft: 15, padding: 5}}>
          Profile
        </Text>
      </View>



      <View style={styles.avatarChange}>

      
      </View>
      
      
      
      <TouchableOpacity
        style={styles.button}
        // onPress={() => navigation.navigate('EditProfile')}
        onPress={() => Alert.alert('zô')}>
        <Text>Edit Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('zô')}

        // onPress={() => navigation.navigate('Address')}
      >
        <Text>Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('zô')}

        // onPress={() => navigation.navigate('Notification')}
      >
        <Text>Notification</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('zô')}

        // onPress={() => navigation.navigate('Payment')}
      >
        <Text>Payment</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('zô')}

        // onPress={() => navigation.navigate('Security')}
      >
        <Text>Security</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('zô')}

        // onPress={() => navigation.navigate('PrivacyPolicy')}
      >
        <Text>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('zô')}

        // onPress={() => navigation.navigate('HelpCenter')}
      >
        <Text>Help Center</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert('zô')}

        // onPress={() => navigation.navigate('LogOut')}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  viewHeaderCart: {
    padding: 10,
    height: 80,
    width: '100%',
    flexDirection: 'row',
  },
  imagelogo: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
});
