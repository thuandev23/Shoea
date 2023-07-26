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
  Dimensions,
} from 'react-native';
import firestore, {firebase} from '@react-native-firebase/firestore';
const w = Dimensions.get('window').width;
const h = Dimensions.get('window').height;

const DangKiScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [CFpassword, setCFPassword] = useState('');
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isCFPasswordFocused, setIsCFPasswordFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log(
      'Tên:',
      name,
      'Đăng kí với tài khoản: ',
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
    if (name == '') {
      setError('Enter your name !');
      return false;
    } else if (!isEmailValid) {
      setError('Invalid email format !');
      return false;
    } else if (!isPasswordValid) {
      setError(
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number !',
      );
      return false;
    } else if (password !== CFpassword) {
      setError('Comfirm password incorrect !');
    } else {
      setError('');
      return true;
    }
  };
  const usersCollection = firestore().collection('users');

  const checkLogin = async () => {
    // Kiểm tra định dạng và hợp lệ của dữ liệu
    const isValid = checkFormat();
    if (!isValid) {
      return;
    }
    try {
      const userCredential = await firebase
        .auth()
        .createUserWithEmailAndPassword(username, password);

      // Gửi email xác nhận
      await userCredential.user.sendEmailVerification({
        handleCodeInApp: true,
        url: 'https://shoea-firebase.firebaseapp.com',
      });

      // Lưu thông tin tài khoản vào Firestore
      await firebase
        .firestore()
        .collection('users')
        .doc(userCredential.user.uid)
        .set({
          name,
          username,
          password,
          // Thêm các trường thông tin khác của người dùng nếu cần thiết
        });

      // Đăng ký thành công
      console.log('Đăng ký thành công!');
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Đăng ký thất bại:', error);
    }

    console.log('Đã đăng ký');

    firestore()
      .collection('users')
      .get()
      .then(querySnapshot => {
        console.log('Total users: ', querySnapshot.size);

        querySnapshot.forEach(documentSnapshot => {
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
        });
      });
  };

  return (
    <KeyboardAvoidingView behavior="position" style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/img-logo/logo.jpg')}
          resizeMode="cover"
          style={{height: h * 0.3, width: w * 0.3}}
        />
      </View>

      <Text style={styles.title}>Create to Your Account</Text>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/img-logo/user.png')}
          resizeMode="cover"
          style={styles.inputIcon}
        />
        <TextInput
          style={[styles.input, isNameFocused && styles.focusedInput]}
          placeholder="User Name"
          onChangeText={setName}
          value={name}
          onFocus={() => setIsNameFocused(true)}
          onBlur={() => setIsNameFocused(false)}
        />
      </View>
      <View style={styles.inputContainer}>
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
      <View style={styles.inputContainer}>
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
      </View>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/img-logo/password.png')}
          resizeMode="cover"
          style={styles.inputIcon}
        />
        <TextInput
          style={[styles.input, isCFPasswordFocused && styles.focusedInput]}
          placeholder="Confirm Password"
          secureTextEntry={!isPasswordVisible}
          onChangeText={setCFPassword}
          value={CFpassword}
          onFocus={() => setIsCFPasswordFocused(true)}
          onBlur={() => setIsCFPasswordFocused(false)}
        />
        <TouchableOpacity
          style={{position: 'absolute', marginLeft: w * 0.8}}
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
        // onPress={handleLogin}
        onPressIn={checkLogin}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.textGotLogin}>
          Already have an account?
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={{fontSize: 16, color: 'black'}}> Sign in</Text>
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
    backgroundColor: 'white',
    // justifyContent: 'center',
  },

  logoContainer: {
    position: 'absolute',
    marginLeft: w * 0.3,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  inputIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  title: {
    fontSize: w * 0.07,
    color: 'black',
    fontWeight: 'bold',
    marginTop: h * 0.25,
    textAlign: 'center',
  },
  input: {
    height: 50,
    width: '85%',
    marginVertical: 5,
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
    width: w * 0.5,
    paddingVertical: 12,
    borderRadius: 20,
    marginTop: h * 0.01,
    marginLeft: w * 0.2,
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
    textAlign: 'center',
  },
  footer: {
    position: 'absolute',
    marginTop: h * 0.9,
  },
  textGotLogin: {
    fontSize: 16,
    marginLeft: w * 0.2,
  },
  error: {
    color: 'red',
    fontSize: 15,
  },
});

export default DangKiScreen;
