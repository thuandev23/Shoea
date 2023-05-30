import {firebase} from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import RNRestart from 'react-native-restart';
import {auth, db} from '../firebase';
import firestore from '@react-native-firebase/firestore';
const Editprofile = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [newPass, setNewPassword] = useState('');
  const [newName, setNewName] = useState('');

  useEffect(() => {
    // Lấy thông tin của tài khoản đang đăng nhập
    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const name = currentUser.email;
      setEmail(name);
    } else {
      console.log('No user is currently logged in.');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={newName}
        onChangeText={setNewName}
        placeholder="Enter your new name"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput style={styles.input} placeholder={email} editable={false} />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={newPass}
        onChangeText={setNewPassword}
        placeholder="Enter your new new password"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
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
