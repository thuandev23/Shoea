import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Loading_headerMain from '../Loading/loadingscreen';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const LoginScreen = ({navigation}) => {
  const [showLoading, setShowLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false);
      SplashScreen.hide();
    }, 5000);
  }, []);

  // Login Google
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '194959080030-tpf7c0cddht801f5av37pt3c05htkbk9.apps.googleusercontent.com',
    });
  });
  const signIn = async () => {};
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {showLoading ? (
        <Loading_headerMain />
      ) : (
        <View style={styles.container}>
          <Image
            source={require('../assets/img-logo/undraw_nature_m5ll.png')}
            style={styles.Image}
          />
          <Text style={styles.text}>Let's you in</Text>
          <TouchableHighlight
            underlayColor="#3763FCcf"
            onPress={() => Alert.alert('Zô Facebook')}
            style={styles.touchable}>
            <View>
              <Image
                style={styles.image_touchable}
                source={require('../assets/img-logo/fb_logo.png')}
                resizeMode="cover"
              />
              <Text style={styles.text_touchable}>Continue with Facebook</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor="#F94444cf"
            onPress={() => signIn()}
            style={styles.touchable}>
            <View>
              <Image
                style={styles.image_touchable}
                source={require('../assets/img-logo/googlee_logo.png')}
                resizeMode="cover"
              />
              <Text style={styles.text_touchable}>Continue with Google</Text>
            </View>
          </TouchableHighlight>

          <Text style={{fontSize: 18, marginTop: 45}}>
            -----------------------------------or----------------------------------
          </Text>

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.navigate('SignIn')}
            style={styles.touchStart}>
            <View>
              <Text style={styles.text_touchableStart}>
                Sign in with Account
              </Text>
            </View>
          </TouchableOpacity>
          <Text style={{marginTop: 35, fontSize: 16}}>
            Dont't have an account?
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.NotHaveAccount}> Register</Text>
            </TouchableOpacity>
          </Text>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: height * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    height: 200,
    width: 200,
    resizeMode: 'cover',
    borderRadius: 50,
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: height * 0.01,
    color: 'black',
  },
  touchable: {
    marginTop: 20,
    height: 47,
    width: 350,
    borderRadius: 10,
    borderColor: '#1C2833',
    borderWidth: 0.4,
  },
  image_touchable: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    margin: 8,
    marginLeft: 10,
  },
  text_touchable: {
    position: 'absolute',
    fontSize: 18,
    color: 'black',
    marginLeft: 70,
    padding: 10,
  },
  touchStart: {
    marginTop: 20,
    height: 47,
    width: 350,
    borderRadius: 20,
    backgroundColor: '#000000',
  },
  text_touchableStart: {
    position: 'absolute',
    fontSize: 19,
    color: 'white',
    marginLeft: 70,
    padding: 10,
  },
  NotHaveAccount: {
    color: 'black',
    fontSize: 16,
  },
});

export default LoginScreen;
