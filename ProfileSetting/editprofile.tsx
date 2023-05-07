import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import RNRestart from 'react-native-restart';

const Editprofile = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    // Update the user's profile information in the backend

    Alert.alert('Profile saved successfully.');
    navigation.navigate('Profile', {name: newName});
  };
  const [newName, setNewName] = useState('');

  const saveProfile = async () => {
    try {
      await AsyncStorage.setItem('NAME', newName);
      setNewName(newName);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={newName}
        onChangeText={text => setNewName(text)}
        placeholder="Enter your new name"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your new email"
      />

      <Text style={styles.label}>Phone</Text>
      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Enter your new phone"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          saveProfile();
          // navigation.navigate('Setting');
          Alert.alert(
            'Thông báo',
            'Bạn có muốn khởi động lại ứng dụng để cập nhật tên người dùng không?',
            [
              {
                text: 'Không',
                onPress: () => navigation.navigate('Setting'),
                style: 'cancel',
              },
              {
                text: 'Có',
                onPress: () => navigation.navigate('Login'),
              },
            ],
            {cancelable: false},
          );
        }}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Editprofile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffffc9',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    width: '80%',
    height: 50,
    borderRadius: 25,
    marginLeft: 40,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});
