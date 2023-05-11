import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

const DangNhapScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log(
      'Đăng nhập với tài khoản: ',
      username,
      'và mật khẩu: ',
      password,
    );
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  const isEnablelogin = () => {
    return username != '' && password != '';
  };

  const [error, setError] = useState('');

  const checkFormat = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(username);

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    const isPasswordValid = passwordRegex.test(password);
    if (username == 'admin' && password == 'admin') {
      return true;
    } else if (username == '' || password == '') {
      setError('Please enter email and password !');
      // setError('Invalid email or password');
    } else if (!isEmailValid) {
      setError('Invalid email format !');
      return false;
    } else if (!isPasswordValid) {
      setError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number !',
      );
      return false;
    } else {
      setError('');
      return true;
    }
  };

  const checkLogin = async () => {
    try {
      const email = username;
      const pass = password;

      // Check email and password format
      const isValidFormat = checkFormat();
      if (!isValidFormat) {
        return;
      }

      // Check if the user is admin
      if (email === 'admin' && pass === 'admin') {
        const adminAccount = {
          name: 'Admin',
          email: 'admin',
          password: 'admin',
        };

        const existingAccounts = await AsyncStorage.getItem('ACCOUNTS');
        let accountList = [];
        if (existingAccounts !== null) {
          accountList = JSON.parse(existingAccounts);
        }
        // Check if admin account already exists in accountList
        const adminAccountIndex = accountList.findIndex(account => {
          return account.email === adminAccount.email;
        });
        if (adminAccountIndex === -1) {
          accountList.push(adminAccount);
        } else {
          // Update admin account if it already exists
          accountList[adminAccountIndex] = adminAccount;
        }
        await AsyncStorage.setItem('ACCOUNTS', JSON.stringify(accountList));
        Alert.alert('Login successful');
        navigation.navigate('Tabs');
        // console.log(accountList);
        return;
      }

      // Check if the account exists
      const existingAccounts = await AsyncStorage.getItem('ACCOUNTS');
      if (existingAccounts !== null) {
        const accountList = JSON.parse(existingAccounts);

        const matchingAccount = accountList.find(account => {
          return account.email === email && account.password === pass;
        });

        if (matchingAccount) {
          await AsyncStorage.setItem('EMAIL', matchingAccount.email);
          Alert.alert('Login successful');
          navigation.navigate('Tabs');
        } else {
          Alert.alert('Wait a minute', 'Invalid email or password');
        }
      } else {
        Alert.alert('Wait a minute', 'No accounts found');
      }
    } catch (e) {
      console.log('Wait a minute', 'Error checking login:', e);
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/img-logo/logo.jpg')}
          resizeMode="cover"
          style={{height: 200, width: 200, borderRadius: 100}}
        />
      </View>

      <Text style={styles.title}>Login to Your Account</Text>

      <View style={styles.inputContainer1}>
        <Image
          source={require('../assets/img-logo/email.png')}
          resizeMode="cover"
          style={styles.inputIcon}
        />
        <TextInput
          style={[styles.input, isUsernameFocused && styles.focusedInput]}
          placeholder="Email"
          onChangeText={setUsername}
          value={username}
          onFocus={() => setIsUsernameFocused(true)}
          onBlur={() => setIsUsernameFocused(false)}
        />
      </View>
      <View style={styles.inputContainer2}>
        <Image
          source={require('../assets/img-logo/password.png')}
          resizeMode="cover"
          style={styles.inputIcon}
        />
        <TextInput
          style={[styles.input, isPasswordFocused && styles.focusedInput]}
          placeholder="Password"
          secureTextEntry={!isPasswordVisible}
          onChangeText={setPassword}
          value={password}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
        />
        <TouchableOpacity
          style={{position: 'absolute', marginLeft: 340}}
          onPress={togglePasswordVisibility}>
          {isPasswordVisible ? (
            <Image
              style={{height: 25, width: 25}}
              source={require('../assets/img-logo/view.png')}
              resizeMode="cover"
            />
          ) : (
            <Image
              style={{height: 25, width: 25}}
              source={require('../assets/img-logo/hide.png')}
              resizeMode="cover"
            />
          )}
        </TouchableOpacity>
      </View>
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: isEnablelogin() ? 'green' : '#393939'},
        ]}
        onPress={checkLogin}
        // onPress={() => navigation.navigate('Tabs')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
          <Text style={{fontSize: 17, textAlign: 'center', color: 'blue'}}>
            Forgot the password ?
          </Text>
        </TouchableOpacity>

        <Text style={{marginTop: 5, fontSize: 16}}>
          Dont't have an account?
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontSize: 17, color: 'black'}}> Register</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    alignItems: 'center',
  },

  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: 50,
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginTop: '88%',
  },

  inputIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 225,
  },
  input: {
    height: 50,
    width: '80%',
    marginVertical: 12,
    paddingHorizontal: 16,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    fontSize: 17,
    backgroundColor: '#F4F5F5',
  },
  focusedInput: {
    borderColor: 'blue',
  },
  button: {
    // backgroundColor: '#393939',
    paddingVertical: 12,
    paddingHorizontal: 110,
    borderRadius: 20,
    marginTop: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    marginTop: 620,
    alignItems: 'center',
  },
  touch: {
    padding: 15,
    margin: 15,
    borderRadius: 25,
    borderColor: '#2345',
    borderWidth: 0.5,
  },
  img: {
    height: 30,
    width: 30,
    borderRadius: 25,
  },
  error: {
    position: 'absolute',
    color: 'red',
    fontSize: 15,
    marginTop: '110%',
  },
});

export default DangNhapScreen;
