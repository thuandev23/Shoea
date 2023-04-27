import React, {useState} from 'react';
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
  const [ten, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    // Xử lý đăng nhập ở đây
    console.log(
      'Tên: ',
      ten,
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
      <View style={styles.inputContainer3}>
        <Image
          source={require('../assets/img-logo/email.png')}
          resizeMode="cover"
          style={styles.inputIcon}
        />
        <TextInput
          style={[styles.input, isNameFocused && styles.focusedInput]}
          placeholder="User Name"
          onChangeText={setName}
          value={ten}
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
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: isEnablelogin() ? 'green' : '#393939'},
        ]}
        // onPressIn={handleLogin}
        onPress={() =>
          navigation.navigate('Tabs', {ten: ten}, console.log(ten))
        }>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity>
          <Text style={{fontSize: 15, textAlign: 'center', color: 'black'}}>
            Forgot the password ?
          </Text>
        </TouchableOpacity>

        <Text style={{marginTop: 5, fontSize: 16}}>
          Dont't have an account?
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{fontSize: 16, color: 'black'}}> Sign up</Text>
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
    marginTop: 70,
  },
  inputContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginTop: '92%',
  },
  inputContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    marginTop: '60%',
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
});

export default DangNhapScreen;
