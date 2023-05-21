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
import firestore, {firebase} from '@react-native-firebase/firestore';

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
    // const isValid = checkFormat();
    // if (!isValid) {
    //   return;
    // }
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
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/img-logo/logo.jpg')}
          resizeMode="cover"
          style={{height: 200, width: 200, borderRadius: 100}}
        />
      </View>

      <Text style={styles.title}>Create to Your Account</Text>
      <View style={styles.inputContainer3}>
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
      </View>
      <View style={styles.inputContainer4}>
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
        // onPress={handleLogin}
        onPressIn={checkLogin}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={{marginTop: 10, fontSize: 16}}>
        Already have an account?
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={{fontSize: 16, color: 'black'}}> Sign in</Text>
        </TouchableOpacity>
      </Text>
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
    marginTop: 40,
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginTop: '90%',
  },
  inputContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginTop: '60%',
  },
  inputContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginTop: '105%',
  },
  inputIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 30,
    marginBottom: 32,
    color: 'black',
    fontWeight: 'bold',
    marginTop: 215,
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
    marginTop: 175,
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
  error: {
    position: 'absolute',
    color: 'red',
    fontSize: 15,
    marginTop: '127%',
  },
});

export default DangKiScreen;
