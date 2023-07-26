import {firebase} from '@react-native-firebase/auth';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import RNRestart from 'react-native-restart';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';
const w = Dimensions.get('screen').width;
const h = Dimensions.get('screen').height;

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

  const handleSave = async () => {
    const currentUser = firebase.auth().currentUser;

    if (currentUser) {
      try {
        await currentUser.updateProfile({
          displayName: newName,
        });
        await firestore().collection('users').doc(currentUser.uid).update({
          name: newName,
        });
        console.log('Success', 'Your name has been updated.');
      } catch (error) {
        console.log('Error', 'An error occurred while updating your name.');
      }
      if (newPass !== '') {
        try {
          await currentUser.updatePassword(newPass);
          console.log('Success', 'Your password has been updated.');
        } catch (error) {
          console.log(
            'Error',
            'An error occurred while updating your password.',
          );
        }
      }
      try {
        await firestore().collection('users').doc(currentUser.uid).update({
          name: newName,
          password: newPass,
        });
        console.log(
          'Success',
          'Your information has been updated in Firestore.',
        );
      } catch (error) {
        console.log(
          'Error',
          'An error occurred while updating your information in Firestore.',
        );
      }
      Alert.alert(
        'Restart',
        'Do you want to restart the application to apply the changes?',
        [
          {
            text: 'No',
            onPress: () => navigation.navigate('Setting'),
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => navigation.navigate('Login'),
          },
        ],
        {cancelable: false},
      );
    }
  };
  const [showLottie, setShowLottie] = useState(false);
  const handleButtonClick = () => {
    setShowLottie(true); // Hiển thị LottieView
    setTimeout(() => {
      setShowLottie(false);
    }, 2000);
    handleSave();
  };
  return (
    <KeyboardAvoidingView style={styles.containerKeyboard} behavior="position">
      <View style={styles.container}>
        <LottieView
          source={require('../assets/lottie/119588-task-assigning.json')}
          autoPlay
          style={{height: 250, width: '100%'}}
        />
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

        <TouchableOpacity style={styles.button} onPress={handleButtonClick}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        {showLottie && (
          <LottieView
            source={require('../assets/lottie/129118-done.json')}
            style={{height: 100, width: 200}}
            autoPlay
          />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Editprofile;

const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    position: 'relative',
    paddingLeft: 20,
    paddingRight: 20,
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
    marginBottom: h * 0.001,
  },
  button: {
    backgroundColor: '#007bff',
    width: '80%',
    height: 40,
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
