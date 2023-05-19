import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Alert,
  Dimensions,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {collection, getDocs} from 'firebase/firestore';
import {db} from '../firebase';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
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
    // Check email and password format
    // const isValidFormat = checkFormat();
    // if (!isValidFormat) {
    //   return;
    // }
    try {
      const usersRef = collection(db, 'users');
      const querySnapshot = await getDocs(usersRef);
      let loggedInUser = null;

      // Duyệt qua tất cả các tài khoản trong bộ sưu tập "users"
      querySnapshot.forEach(doc => {
        const user = doc.data();
        if (user.username === username && user.password === password) {
          loggedInUser = user;
          return;
        }
      });
      if (loggedInUser) {
        // Đăng nhập thành công, chuyển hướng vào trang MainScreen
        // navigation.navigate('MainScreen', { user: loggedInUser });
        console.log('Đăng nhập thành công');
        navigation.navigate('Tabs');
      } else {
        // Đăng nhập thất bại
        console.log('Đăng nhập thất bại');
      }
    } catch (error) {
      console.log('Đăng nhập thất bại:', error.message);
    }
  };

  // const checkLogin = async () => {
  //   const isValid = checkFormat();
  //   if (!isValid) {
  //     return;
  //   }

  //   auth()
  //     .createUserWithEmailAndPassword(username, password)
  //     .then(async userCredential => {
  //       console.log('User account created & signed in!');

  //       // Save user's name to Firestore
  //       const user = auth().currentUser;
  //       if (user) {
  //         const {uid} = userCredential.user;
  //         await firestore().collection('accounts').doc(uid).set({
  //           name: name,
  //           email: username,
  //         });
  //         console.log('Account details saved to Firestore!');
  //         navigation.navigate('SignIn');
  //         // Send email verification
  //         try {
  //           await user.sendEmailVerification();
  //           console.log('Email verification sent to user!');
  //         } catch (error) {
  //           console.error('Error sending email verification:', error);
  //         }
  //       } else {
  //         console.error('No user found!');
  //       }
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       } else if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       } else {
  //         console.error(error);
  //       }
  //     });
  // };

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
    top: height * 0.02,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
    marginTop: height * 0.3,
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginTop: height * 0.03,
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginTop: height * 0.48,
  },

  inputIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
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
    marginTop: height * 0.17,
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
    marginTop: height * 0.75,
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
    marginTop: height * 0.58,
  },
});
export default DangNhapScreen;
